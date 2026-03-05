
## Installation

Commande pour faire l'image multi os 
```bash
  docker buildx build --platform linux/amd64,linux/arm64 -t ghcr.io/arthurjunia/reactapp:latest --push .
```

Commande pour pull l'image
```bash
  docker pull ghcr.io/arthurjunia/reactapp:latest@sha256:94b3b16022075b62f599303e3cbd1cc5fa0a1a66f1e8a1fe6de221b85b1bd890
```

Commande pour run l'image sur le port par défaut (80) 
```bash
  docker run -d -p 80:80 --name goatesque_mabiche ghcr.io/arthurjunia/reactapp:latest@sha256:afdca9f98b6c849f94dab055566b395217568d9b1432a701fbfcaeb44db6a675
```