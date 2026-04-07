from __future__ import annotations
from datetime import datetime
from sqlmodel import SQLModel, Field

class ContactLead(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str
    email: str
    phone: str | None = None
    company: str | None = None
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow, index=True)
