# Empire Capital — version GitHub Pages

Cette version est construite en mode autonome (`api=false`) pour un hébergement statique gratuit.

## Publication
1. Créez un dépôt GitHub public nommé `empire-capital`.
2. Importez **tout le contenu de ce dossier** à la racine du dépôt (y compris `index.html`, `sw.js`, `manifest.webmanifest`, les icônes, `.well-known`, et `.nojekyll`).
3. Dans GitHub : Settings → Pages.
4. Sous Build and deployment, choisissez Deploy from a branch.
5. Sélectionnez `main` et `/ (root)`, puis Save.
6. Attendez la fin du déploiement. L'adresse sera `https://cherluspierre-ux.github.io/empire-capital/`.

## Limites de cette version statique
- Le jeu est jouable sans serveur applicatif.
- Les sauvegardes restent sur l'appareil / le navigateur du joueur.
- Les fonctions qui exigent un compte en ligne, une synchronisation cloud ou un classement mondial partagé ne sont pas activées.
- Les données du site sont publiques : ne placez jamais de secrets ou de clés privées dans ce dépôt.

Pour activer comptes, synchronisation et classement partagé, il faudra déployer le serveur Node.js fourni dans le projet sur un hébergement compatible (un VPS ou un service d'applications). GitHub Pages ne peut pas exécuter ce serveur.
