FROM nginx:alpine
RUN apk add --no-cache openssl \
    && mkdir -p /etc/ssl/private \
    && openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
       -keyout /etc/ssl/private/localhost.key \
       -out /etc/ssl/certs/localhost.crt \
       -subj '/CN=intranet' \
       -addext 'subjectAltName=DNS:intranet,DNS:localhost,IP:127.0.0.1'
