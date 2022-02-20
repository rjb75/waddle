import json
import os
from typing import List

import dotenv
import httpx

dotenv.load_dotenv("../.env")


async def get_sentiment(tokens: List[str]):
    sum = 0
    with httpx.AsyncClient() as client:
        for token in tokens:
            response = await client.post(
                "https://language.googleapis.com/v1beta2/documents:analyzeSentiment?key="
                + os.environ("GOOGLE_API_KEY"),
                data={"document": {"type": "PLAIN_TEXT", "content": token}},
            )
            if response.status_code == 200:
                sum += response.json()["documentSentiment"]["score"]

    return sum / len(tokens)


def get_emoji_sentiment(emoji: dict):
    score = (emoji["positive"] + 1) / (emoji["occurrences"] + 3) - (
        (emoji["negative"] + 1) / (emoji["occurrences"] + 3)
    )
    emoji = chr(int(emoji["sequence"], 16))
    return score, emoji


with open("../frontend/build/emoji-sentiment.json") as f:
    emoji_sentiments = [get_emoji_sentiment(e) for e in json.load(f) if e["occurrences"] > 50]

sentiment_mean = sum([s for s, _ in emoji_sentiments]) / len(emoji_sentiments)
emoji_sentiments = [(s - sentiment_mean, e) for s, e in emoji_sentiments]
emoji_sentiments = {e: s for s, e in emoji_sentiments}
