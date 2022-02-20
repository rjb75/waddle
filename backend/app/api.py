from fastapi import Depends, FastAPI
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.staticfiles import StaticFiles

from app.dependencies import auth
from app.routers import questions, sentiment, users

app = FastAPI()
app.include_router(users.router)
app.include_router(questions.router)
app.include_router(sentiment.router)


@app.post("/token")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    return await auth.get_access_token(form_data.username, form_data.password)


app.mount("/", StaticFiles(directory="../frontend/build/", html=True), name="build")
