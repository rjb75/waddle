import json
import os

import httpx
from app.dependencies import models
from fastapi import APIRouter, HTTPException

router = APIRouter(prefix="/responses", tags=["responses"])


@router.post("")
async def create_response(response_in: models.ResponseIn):
    data = {
        "Data": ",".join(response_in.values),
        "Date": response_in.date,
        "User_id": response_in.uid,
        "Questions_id": response_in.qid,
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(f"{os.environ['BASE_API_URL']}/api/v1/response", data=data)
        if response.json()["status"] == "success":
            return response.json()
        else:
            raise HTTPException(status_code=400, detail=response.json()["type"])


@router.get("/{response_id}", response_model=models.ResponseOut)
async def get_response(response_id: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{os.environ['BASE_API_URL']}/api/v1/response/{response_id}")
        if response.json()["status"] == "success":
            return response.json()
        else:
            raise HTTPException(status_code=400, detail=response.json()["type"])
