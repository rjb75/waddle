from typing import List

import httpx
from app.dependencies import models
from fastapi import APIRouter, HTTPException

# Change Later
API_BASE_URL = "http://localhost:3000"

router = APIRouter(prefix="/supports", tags=["supports"])


@router.post("")
async def create_support(support_in: models.SupportNetworkIn):
    async with httpx.AsyncClient() as client:
        response = await client.post(f"{API_BASE_URL}/api/v1/support", data=support_in.dict())
        if response.json()["status"] == "success":
            return response.json()
        else:
            raise HTTPException(status_code=400, detail=response.json()["type"])


@router.get("/owner/{owner_id}", response_model=List[models.SupportNetworkOut])
async def get_support_by_owner(owner_id: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{API_BASE_URL}/api/v1/support/supportee/{owner_id}")
        if response.json()["status"] == "success":
            return response.json()["data"]
        else:
            raise HTTPException(status_code=400, detail=response.json()["type"])


@router.get("/member/{member_id}", response_model=List[models.SupportNetworkOut])
async def get_support_by_member(member_id: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{API_BASE_URL}/api/v1/support/supporter/{member_id}")
        if response.json()["status"] == "success":
            return response.json()["data"]
        else:
            raise HTTPException(status_code=400, detail=response.json()["type"])
