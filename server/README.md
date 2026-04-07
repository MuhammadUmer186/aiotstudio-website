# Server (FastAPI)

## Run locally (Windows)
```bat
cd server
python -m venv .venv
.venv\Scripts\activate
copy .env.example .env
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

## Run locally (Mac/Linux)
```bash
cd server
python3 -m venv .venv
source .venv/bin/activate
cp .env.example .env
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

## Endpoints
- `GET /api/health`
- `POST /api/contact`
- `POST /api/ai/demo`
- `GET /api/iot/latest`
