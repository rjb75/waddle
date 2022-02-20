import json


def get_sentiment(emoji: dict):
    score = (emoji["positive"] + 1) / (emoji["occurrences"] + 3) - (
        (emoji["negative"] + 1) / (emoji["occurrences"] + 3)
    )
    emoji = chr(int(emoji["sequence"], 16))
    return score, emoji


with open("../frontend/build/emoji-sentiment.json") as f:
    emoji_sentiments = [get_sentiment(e) for e in json.load(f) if e["occurrences"] > 50]

sentiment_mean = sum([s for s, _ in emoji_sentiments]) / len(emoji_sentiments)
emoji_sentiments = [(s - sentiment_mean, e) for s, e in emoji_sentiments]
emoji_sentiments = sorted(emoji_sentiments, key=lambda x: x[0], reverse=True)
