from __future__ import annotations
import time
import random
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session

from .db import get_session
from .models import ContactLead
from .schemas import ContactIn, ContactOut, AiDemoIn, AiDemoOut, IoTLatestOut
from .ai import generate_demo_reply
from .config import OPENAI_API_KEY

router = APIRouter(prefix="/api")

@router.get("/health")
def health():
    return {"ok": True}

@router.post("/contact", response_model=ContactOut)
def create_contact(payload: ContactIn, session: Session = Depends(get_session)):
    lead = ContactLead(
        name=payload.name,
        email=str(payload.email),
        phone=payload.phone,
        company=payload.company,
        message=payload.message,
    )
    session.add(lead)
    session.commit()
    session.refresh(lead)
    return ContactOut(ok=True, lead_id=int(lead.id))

@router.post("/ai/demo", response_model=AiDemoOut)
def ai_demo(payload: AiDemoIn):
    if not OPENAI_API_KEY:
        raise HTTPException(
            status_code=400,
            detail="OPENAI_API_KEY is not set. Add it to server/.env and restart the server.",
        )
    try:
        text = generate_demo_reply(payload.prompt)
        return AiDemoOut(ok=True, text=text or "No output.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI error: {e}")

@router.get("/iot/latest", response_model=IoTLatestOut)
def iot_latest():
    # Demo data (replace with real MQTT/DB later)
    now = int(time.time())
    temperature = round(random.uniform(20.0, 34.0), 2)
    humidity = round(random.uniform(25.0, 65.0), 2)
    vibration = round(random.uniform(0.02, 0.45), 3)
    status = "online" if random.random() > 0.05 else "offline"

    return IoTLatestOut(
        ok=True,
        device_id="ESP32-DEMO-001",
        ts=now,
        temperature_c=temperature,
        humidity_pct=humidity,
        vibration_rms=vibration,
        status=status,
    )
