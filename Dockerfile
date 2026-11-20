FROM node:22-alpine
RUN apk add --no-cache python3 unzip su-exec
WORKDIR /app
COPY . /app
RUN test -f /app/server-bundle.zip \
 && unzip -q /app/server-bundle.zip -d /app \
 && rm /app/server-bundle.zip \
 && addgroup -S ec \
 && adduser -S -G ec -H -s /sbin/nologin ec \
 && chmod -R a-w /app \
 && mkdir -p /data /tmp/ec-public \
 && chown -R ec:ec /data /tmp/ec-public
ENV NODE_ENV=production HOST=0.0.0.0 PORT=8080 DATA_DIR=/data PUBLIC_DIR=/tmp/ec-public TRUST_PROXY=1
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://127.0.0.1:8080/api/health >/dev/null || exit 1
ENTRYPOINT ["/bin/sh", "/app/start-render.sh"]
