from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()

templates = Jinja2Templates(directory="../frontend/build/")
app.mount("/build", StaticFiles(directory="../frontend/build/"), name="build")


@app.get("/")
def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
