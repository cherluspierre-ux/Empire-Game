#!/bin/sh
set -eu
: "${ORIGIN:?La variable ORIGIN doit contenir l'URL HTTPS exacte du service Render}"
mkdir -p "$DATA_DIR" "$PUBLIC_DIR"
# Render monte le disque persistant sur /data. On donne l'accès au compte non privilégié du jeu.
chown ec:ec "$DATA_DIR"
chown -R ec:ec "$PUBLIC_DIR"
chmod 700 "$DATA_DIR"
python3 /app/tools/prepare_render.py
chown -R ec:ec "$PUBLIC_DIR"
exec su-exec ec:ec node /app/server/index.js
