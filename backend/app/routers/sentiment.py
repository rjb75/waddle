from app.dependencies import sentiment
from fastapi import APIRouter

router = APIRouter(prefix="/sentiment", tags=["sentiment"])


@router.get("")
async def get_emoji_sentiments():
    return sentiment.emoji_sentiments


@router.get("/{emoji}")
async def get_emoji_sentiment(emoji: str):
    return sentiment.emoji_sentiments[emoji]
