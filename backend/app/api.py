from fastapi import Depends, FastAPI, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.staticfiles import StaticFiles

from app.dependencies import auth
from app.routers import questions, users

app = FastAPI()
app.include_router(users.router)
app.include_router(questions.router)


@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user_dict = auth.fake_users_db.get(form_data.username)
    if not user_dict:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    user = auth.UserInDB(**user_dict)
    hashed_password = auth.fake_hash_password(form_data.password)
    if not hashed_password == user.hashed_password:
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    return {"access_token": user.username, "token_type": "bearer"}


app.mount("/", StaticFiles(directory="../frontend/build/", html=True), name="build")
