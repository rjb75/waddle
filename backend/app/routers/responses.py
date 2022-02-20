from typing import List

import httpx
from app.dependencies import models
from fastapi import APIRouter, HTTPException

# Change Later
API_BASE_URL = "http://localhost:3000"

router = APIRouter(prefix="/responses", tags=["responses"])


@router.post("")
async def create_response(response_in: models.ResponseIn):
    async with httpx.AsyncClient() as client:
        response = await client.post(f"{API_BASE_URL}/api/v1/response", data=response_in.dict())
        if response.json()["status"] == "success":
            return response.json()
        else:
            raise HTTPException(status_code=400, detail=response.json()["type"])


@router.get("/{response_id}", response_model=models.ResponseOut)
async def get_response(response_id: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{API_BASE_URL}/api/v1/response/{response_id}")
        if response.json()["status"] == "success":
            return response.json()
        else:
            raise HTTPException(status_code=400, detail=response.json()["type"])
