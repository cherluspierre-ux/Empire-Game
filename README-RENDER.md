# Déploiement d'Empire Capital sur Render

Le service Render utilise le serveur Node.js du projet et un disque persistant de 1 Go monté sur `/data`.

## Avant le déploiement

1. Téléversez le fichier `server-bundle.zip` (fourni séparément) à la racine de ce dépôt GitHub. Il contient le serveur, ses bibliothèques et le script qui active les comptes en ligne.
2. Vérifiez que les fichiers existants `index.html`, `sw.js`, `manifest.webmanifest`, les icônes, `confidentialite.html` et `robots.txt` sont toujours à la racine.
3. Dans Render, choisissez **New → Blueprint** et connectez ce dépôt. Render lira `render.yaml`.

## Adresse

Le nom prévu est `empire-capital-online-2026`, donc l'origine configurée est `https://empire-capital-online-2026.onrender.com`. Si Render impose un autre nom, modifiez la variable `ORIGIN` pour qu'elle corresponde exactement à l'adresse HTTPS affichée par Render.

## Protection des données

Ne supprimez pas le disque Render `empire-capital-data` et ne changez pas son point de montage `/data`. Les comptes, sessions, sauvegardes cloud chiffrées, classements et journaux sont stockés dans ce dossier. Le disque persistant protège contre les redémarrages et redéploiements, mais une copie externe régulière reste nécessaire pour se protéger d'une panne ou d'une suppression accidentelle.

Les sauvegardes de jeu sont chiffrées dans le navigateur : le serveur ne connaît pas la clé. Un joueur qui perd son mot de passe peut perdre l'accès à ses sauvegardes.

Avant l'ouverture publique, complétez les champs entre crochets de `confidentialite.html` (éditeur, contact et pays d'hébergement). Ne publiez aucun secret, jeton, mot de passe ou fichier de données dans GitHub.

Après le déploiement, testez `https://VOTRE-ADRESSE/api/health` : le serveur doit répondre avec `{"ok":1,"v":"1.0.0"}`.
