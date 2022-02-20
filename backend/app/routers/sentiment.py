import httpx
from app.dependencies import sentiment
from fastapi import APIRouter, HTTPException

router = APIRouter(prefix="/sentiment", tags=["sentiment"])

# Change Later
API_BASE_URL = "http://localhost:3000"


@router.get("")
async def get_emoji_sentiments():
    return sentiment.emoji_sentiments


@router.get("/{emoji}")
async def get_emoji_sentiment(emoji: str):
    return sentiment.emoji_sentiments[emoji]


@router.get("/{user_id}")
async def get_sentiment_score(user_id: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{API_BASE_URL}/api/v1/response/user/{user_id}")
        if response.json()["status"] == "success":
            tokens = response.json()["data"]
        else:
            raise HTTPException(status_code=400, detail=response.json()["type"])
    return sentiment.get_sentiment(tokens)
