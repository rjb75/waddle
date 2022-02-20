import httpx
from app.dependencies import auth, models
from fastapi import APIRouter, Depends, HTTPException

router = APIRouter(prefix="/users", tags=["users"])

# Change Later
API_BASE_URL = "http://localhost:3000"


@router.get("/me")
async def read_current_user(current_user: models.UserInDB = Depends(auth.get_current_user)):
    return current_user


@router.post("")
async def create_user(user_in: models.UserIn):
    hashed_password = auth.get_password_hash(user_in.password)
    user = models.UserIn(**user_in.dict(exclude={"password"}), password=hashed_password)
    async with httpx.AsyncClient() as client:
        response = await client.post(
            f"{API_BASE_URL}/api/v1/user",
            data={
                "Email": user.email,
                "Pin": user.pin,
                "Name": user.username,
                "Hashed_Password": user.password,
            },
        )
        if response.json()["status"] == "success":
            return response.json()
        else:
            raise HTTPException(status_code=400, detail=response.json()["type"])


@router.get("/{email}")
async def get_user(email: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{API_BASE_URL}/api/v1/user/email/{email}")
        if response.json()["status"] == "success":
            return response.json()
        else:
            raise HTTPException(status_code=400, detail=response.json()["type"])
