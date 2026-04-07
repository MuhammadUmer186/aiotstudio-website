from __future__ import annotations
import os
from dotenv import load_dotenv

load_dotenv()

def _split_csv(v: str | None) -> list[str]:
    if not v:
        return []
    return [x.strip() for x in v.split(",") if x.strip()]

APP_ENV = os.getenv("APP_ENV", "development")
APP_NAME = os.getenv("APP_NAME", "IoT & AI Services")
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./app.db")

CORS_ORIGINS = _split_csv(os.getenv("CORS_ORIGINS", "http://localhost:5173"))

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-5")
