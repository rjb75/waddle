from app.dependencies import auth
from fastapi import APIRouter, Depends

router = APIRouter(prefix="/users", tags=["users"])


@router.get("/me")
async def read_current_user(current_user: auth.User = Depends(auth.get_current_user)):
    return current_user
