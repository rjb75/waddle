from typing import List

import httpx
from app.dependencies import models
from fastapi import APIRouter, HTTPException

# Change Later
API_BASE_URL = "http://localhost:3000"

router = APIRouter(prefix="/questions", tags=["questions"])


@router.get("", response_model=List[models.QuestionOut])
async def get_questions():
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{API_BASE_URL}/api/v1/questions")
        if response.json()["status"] == "success":
            return response.json()["data"]
        else:
            raise HTTPException(status_code=400, detail=response.json()["type"])


@router.get("/{question_id}", response_model=models.QuestionOut)
async def get_question(question_id: int):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{API_BASE_URL}/api/v1/questions/{question_id}")
        if response.json()["status"] == "success":
            return response.json()["data"]
        else:
            raise HTTPException(status_code=400, detail=response.json()["type"])
