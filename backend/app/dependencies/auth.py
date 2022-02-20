import os
from datetime import datetime, timedelta
from typing import Optional

import httpx
from app.dependencies import models
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: Optional[str] = None


pwd_ctx = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def verify_password(plain_password, hashed_password):
    return pwd_ctx.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_ctx.hash(password)


async def get_user(email: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{os.environ['BASE_API_URL']}/api/v1/user/email/{email}")
        if response.json()["status"] == "success":
            user_dict = response.json()["data"]
            return models.UserInDB(
                email=user_dict["Email"],
                pin=user_dict["Pin"],
                username=user_dict["Name"],
                uid=user_dict["User_id"],
                hashed_password=user_dict["Hashed_Password"],
            )


async def authenticate_user(email: str, password: str):
    user = await get_user(email)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta if expires_delta else timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, os.environ["SECRET_KEY"], algorithm=os.environ["ALGORITHM"])
    return encoded_jwt


async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, os.environ["SECRET_KEY"], algorithms=[os.environ["ALGORITHM"]])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        token_data = TokenData(email=email)
    except JWTError:
        raise credentials_exception
    user = await get_user(token_data.email)
    if user is None:
        raise credentials_exception
    return user


async def get_access_token(email: str, password: str):
    user = await authenticate_user(email, password)
    if not user:
        raise HTTPException(
            status_code=401,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=os.environ["ACCESS_TOKEN_EXPIRE_MINUTES"])
    access_token = create_access_token(data={"sub": user.email}, expires_delta=access_token_expires)
    return {"access_token": access_token, "token_type": "bearer"}
