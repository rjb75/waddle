import httpx
from app.dependencies import auth, models
from fastapi import APIRouter, Depends

router = APIRouter(prefix="/users", tags=["users"])

# Change Later
API_BASE_URL = "http://localhost:3000"


@router.get("/me")
async def read_current_user(current_user: models.UserInDB = Depends(auth.get_current_user)):
    return current_user


@router.post("")
# @router.post("", response_model=models.UserOut)
async def create_user(user_in: models.UserIn):
    hashed_password = auth.get_password_hash(user_in.password)
    user = models.UserIn(**user_in.dict(exclude={"password"}), password=hashed_password)
    async with httpx.AsyncClient() as client:
        response = await client.post(
            f"{API_BASE_URL}/api/v1/user",
            data=user.dict(),
        )
        # user_out = models.UserOut(**user.dict(), uid=response.json()["data"]["uid"])
        # return user_out
        return response.json()


@router.get("/{email}")
async def get_user(email: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{API_BASE_URL}/api/v1/user/{email}")
        return response.json()
