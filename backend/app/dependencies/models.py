from datetime import date
from typing import List

from pydantic import BaseModel, EmailStr


# Users
class UserBase(BaseModel):
    email: EmailStr
    username: str


class UserIn(UserBase):
    password: str
    pin: int


class UserOut(UserBase):
    uid: str


class UserInDB(UserOut):
    hashed_password: str
    pin: int


# Questions
class QuestionBase(BaseModel):
    category: str
    question: str
    type: str
    suggestions: List[str]


class QuestionIn(QuestionBase):
    ...


class QuestionOut(QuestionBase):
    qid: str


class QuestionInDB(QuestionOut):
    ...


# Responses
class ResponseBase(BaseModel):
    uid: str
    qid: str
    values: List[str]
    date: date


class ResponseIn(ResponseBase):
    ...


class ResponseOut(ResponseBase):
    rid: str


class ResponseInDB(ResponseOut):
    ...


# Support Networks
class SupportNetworkBase(BaseModel):
    support_id: str
    supportee_id: str
    supporter_id: str
    sharing_level: int  # 0, 1, 2


class SupportNetworkIn(SupportNetworkBase):
    ...


class SupportNetworkOut(SupportNetworkBase):
    support_id: str


class SupportNetworkInDB(SupportNetworkOut):
    ...
