# Setup Checklist

## 1. Rename the Project

1. Set `COMPOSE_PROJECT_NAME=yourproject` in `.env.example` (and your local `.env`)
2. Update `"name"` in root `package.json` to match
3. On your Drone server, add a secret named `project_name` with the same value

## 2. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
pnpm install
```

## 3. Copy Environment Files

```bash
cp .env.example .env
cp apps/core-api/.env.example apps/core-api/.env
cp apps/pwa/.env.example apps/pwa/.env.local
cp .devcontainer/.env.example .devcontainer/.env
```

Edit each `.env` file with your actual values (DB password, JWT secrets, S3 keys, etc.).

## 4. Start Development Environment

### Option A — Dev Container (recommended)

1. Complete step 3 first (copy `.devcontainer/.env` before opening the container)
2. Open the project in VS Code
3. When prompted, click **Reopen in Container** (or use Command Palette → `Dev Containers: Reopen in Container`)
4. PostgreSQL and Redis start automatically inside the container

```bash
pnpm --filter core-api start:dev   # backend on :4000
pnpm --filter pwa dev              # frontend on :8000
```

### Option B — Manual

Start PostgreSQL and Redis first (locally or via `docker compose up db`), then:

```bash
pnpm --filter core-api start:dev   # backend on :4000
pnpm --filter pwa dev              # frontend on :8000
```

## 5. Provision a Fresh Server (first-time production setup)

Run the interactive setup wizard on the target server (local or remote via SSH):

```bash
./scripts/setup/main.sh setup
```

The wizard installs: Docker, Traefik (reverse proxy + SSL), Redis, MinIO (S3-compatible storage), Drone CI, and Portainer. Choose which components to install interactively.

## 6. Deploy to Production

1. Ensure the server is provisioned (step 5)
2. Place your production `.env` in `/root/${PROJECT_NAME}-env/` on the server (Drone mounts this volume)
3. Push to the `prd` branch — Drone CI will build and deploy automatically

```bash
git push origin prd
```
