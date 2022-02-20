import os
from datetime import date, timedelta
import httpx
from app.dependencies import sentiment
from fastapi import APIRouter, HTTPException

router = APIRouter(prefix="/sentiment", tags=["sentiment"])


@router.get("")
async def get_emoji_sentiments():
    return sentiment.emoji_sentiments

@router.get("/{user_id}")
async def get_sentiment_score(user_id: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{os.environ['BASE_API_URL']}/api/v1/response/user/{user_id}")
        if response.json()["status"] == "success":
            tokens = response.json()["data"]
        else:
            raise HTTPException(status_code=400, detail=response.json()["type"])

    if tokens:
        batched_tokens = {date.today() - timedelta(days=i): [] for i in range(7)}
        for token in tokens:
            batched_tokens[token["Date"]] = token["Data"]
        batched_sentiment = {i: sentiment.get_sentiment(tokens) for i, tokens in enumerate(batched_tokens.values())}
        return batched_sentiment

@router.get("/{emoji}")
async def get_emoji_sentiment(emoji: str):
    return sentiment.emoji_sentiments[emoji]
