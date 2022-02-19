from fastapi import FastAPI
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from app.routers import users, questions

app = FastAPI()

app.include_router(users.router)
app.include_router(questions.router)

templates = Jinja2Templates(directory="../frontend/build/")
app.mount("/", StaticFiles(directory="../frontend/build/", html=True), name="build")
