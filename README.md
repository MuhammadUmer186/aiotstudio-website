# IoT + AI Service Provider Website

This repo contains:
- `client/`: React + Vite + Tailwind frontend
- `server/`: FastAPI backend
- SQLite storage for contact leads
- OpenAI-powered AI demo endpoint

## Local development

### Backend
**Windows**
```bat
cd server
python -m venv .venv
.venv\Scripts\activate
copy .env.example .env
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

**Mac/Linux**
```bash
cd server
python3 -m venv .venv
source .venv/bin/activate
cp .env.example .env
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Backend URL: `http://localhost:8000`  
Health check: `http://localhost:8000/api/health`

### Frontend
```bash
cd client
npm install
cp .env.example .env
npm run dev
```

Frontend URL: `http://localhost:5173`

## Deploy on Ubuntu with Dokploy

This repo is now ready for Dokploy using the root [`docker-compose.yml`](/g:/iot-ai-agency/docker-compose.yml).

### What gets deployed
- `frontend`: Nginx serves the built Vite app
- `backend`: FastAPI served by Uvicorn
- `/api/*` on the frontend is proxied internally to the backend
- SQLite database is persisted in `./data/app.db`

### 1) Prepare your server
Install Dokploy on your Ubuntu server first, then connect your Git repository in Dokploy.

### 2) Create the app in Dokploy
In Dokploy:
1. Create a new `Compose` application.
2. Point it at this repository.
3. Set the compose file path to `docker-compose.yml`.
4. Set the publish branch you want to deploy from.

### 3) Add environment variables in Dokploy
Set these in the Dokploy app:

```env
APP_ENV=production
APP_NAME=IoT & AI Services
DATABASE_URL=sqlite:///./data/app.db
CORS_ORIGINS=https://your-domain.com
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-5
FRONTEND_PORT=3000
```

Notes:
- If you are serving frontend and backend on the same domain, you can keep `VITE_API_BASE` empty.
- If you use a separate API domain, set `VITE_API_BASE=https://api.your-domain.com` and update the reverse proxy strategy accordingly.
- `OPENAI_API_KEY` is required only for the AI demo endpoint.

### 4) Attach your domain
Point your domain to the Dokploy server, then in Dokploy attach the domain to the `frontend` service.

Recommended:
- Main site: `your-domain.com` or `www.your-domain.com`
- SSL: enable Let's Encrypt in Dokploy

### 5) Persistent data
The Compose stack mounts:

```txt
./data:/app/data
```

That means your SQLite database will survive container restarts and redeploys as long as Dokploy keeps the project volume on disk.

### 6) Deploy
Trigger the first deployment from Dokploy. After it starts:
- Frontend should open on your domain
- Health check should work at `https://your-domain.com/api/health`

## Docker files
- Frontend image: [`client/Dockerfile`](/g:/iot-ai-agency/client/Dockerfile)
- Frontend Nginx config: [`client/nginx.conf`](/g:/iot-ai-agency/client/nginx.conf)
- Backend image: [`server/Dockerfile`](/g:/iot-ai-agency/server/Dockerfile)
- Backend env example: [`server/.env.example`](/g:/iot-ai-agency/server/.env.example)

## Notes
- Local client API override is in [`client/.env.example`](/g:/iot-ai-agency/client/.env.example).
- In production, the frontend defaults to same-origin requests, so `/api/*` works without hardcoding a domain.
