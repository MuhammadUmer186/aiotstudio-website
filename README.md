# IoT + AI Service Provider Website (Local-first)

This repo is a complete local MVP:
- React + Vite + Tailwind company website
- FastAPI backend
- Contact form saves leads into SQLite
- AI demo endpoint using OpenAI Responses API (requires OPENAI_API_KEY)
- IoT demo endpoint returning sample sensor data

## 1) Run the backend
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

Backend URL: http://localhost:8000  
Health check: http://localhost:8000/api/health

## 2) Run the frontend
```bash
cd client
npm install
# optional:
# cp .env.example .env
npm run dev
```

Frontend URL: http://localhost:5173

## Notes
- Leads are stored in `server/app.db` (SQLite).
- AI Demo needs `OPENAI_API_KEY` in `server/.env`.
"# aiotstudio-website" 
"# aiotstudio-website" 
