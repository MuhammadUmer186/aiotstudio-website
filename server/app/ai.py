from __future__ import annotations
from openai import OpenAI
from .config import OPENAI_API_KEY, OPENAI_MODEL

def build_client() -> OpenAI:
    # OPENAI_API_KEY is read from env, but we explicitly pass it for clarity.
    return OpenAI(api_key=OPENAI_API_KEY if OPENAI_API_KEY else None)

def generate_demo_reply(user_prompt: str) -> str:
    client = build_client()
    # Uses the Responses API (primary API in the official SDK).
    resp = client.responses.create(
        model=OPENAI_MODEL,
        instructions=(
            "You are the AI assistant for an IoT and AI services company. "
            "Answer like a consultant: clarify needs, propose a solution, and next steps. "
            "Keep it concise and practical."
        ),
        input=user_prompt,
    )
    # SDK convenience field: output_text aggregates text outputs.
    return (resp.output_text or "").strip()
