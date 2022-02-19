from fastapi import FastAPI
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()

templates = Jinja2Templates(directory="../frontend/build/")
app.mount("/", StaticFiles(directory="../frontend/build/", html=True), name="build")
