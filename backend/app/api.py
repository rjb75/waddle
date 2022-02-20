from fastapi import Depends, FastAPI
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.staticfiles import StaticFiles

import httpx
import asyncio

from app.dependencies import auth
from app.routers import questions, users

app = FastAPI()
app.include_router(users.router)
app.include_router(questions.router)

#Change Later
url = "http://localhost:3000"


#DB Microservice Redirection
@app.post('/db/user')
async def f():
     async with httpx.AsyncClient() as client:
        response = await client.post(url + "/api/v1/test", data={
            'Email': 'horses@horses', 
            'Name': 'Da Horse',
            'Pin': 51231})
        return response.text


@app.post("/token")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    return await auth.get_access_token(form_data.username, form_data.password)


app.mount("/", StaticFiles(directory="../frontend/build/", html=True), name="build")
