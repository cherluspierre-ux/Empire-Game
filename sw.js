/* Empire Capital : fonctionnement hors ligne. Réseau d'abord ; jamais de cache pour l'API ni pour une autre origine.
   Les adresses sont relatives : le jeu peut être servi à la racine d'un domaine ou dans un sous-dossier. */
'use strict';
const CACHE = 'ec-a9573f8253ba';
const CORE = ['./', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png'].map(p => new URL(p, self.location).href);
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('ec-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== self.location.origin || u.pathname.includes('/api/')) return;
  const base = new URL('./', self.location).pathname;
  const game = r.mode === 'navigate' && (u.pathname === base || u.pathname === base + 'index.html');
  const key = game ? CORE[0] : u.href.split('#')[0];
  e.respondWith(fetch(r).then(res => {
    if (res.ok && res.type === 'basic' && CORE.includes(key)) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(key, cp)); }
    return res;
  }).catch(() => caches.match(key).then(m => m || (r.mode === 'navigate' ? caches.match(CORE[0]) : Response.error()))));
});
