from __future__ import annotations
from pydantic import BaseModel, EmailStr, Field

class ContactIn(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    email: EmailStr
    phone: str | None = Field(default=None, max_length=40)
    company: str | None = Field(default=None, max_length=80)
    message: str = Field(min_length=10, max_length=2000)

class ContactOut(BaseModel):
    ok: bool
    lead_id: int

class AiDemoIn(BaseModel):
    prompt: str = Field(min_length=2, max_length=4000)

class AiDemoOut(BaseModel):
    ok: bool
    text: str

class IoTLatestOut(BaseModel):
    ok: bool
    device_id: str
    ts: int
    temperature_c: float
    humidity_pct: float
    vibration_rms: float
    status: str
