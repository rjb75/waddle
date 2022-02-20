from datetime import date

from pydantic import BaseModel, EmailStr


# Users
class UserBase(BaseModel):
    email: EmailStr
    username: str


class UserIn(UserBase):
    password: str
    pin: int


class UserOut(UserBase):
    uid: int


class UserInDB(UserOut):
    hashed_password: str
    pin: int


# Questions
class QuestionBase(BaseModel):
    category: str
    question: str
    type: str
    suggestions: list[str]


class QuestionIn(QuestionBase):
    ...


class QuestionOut(QuestionBase):
    qid: int


class QuestionInDB(QuestionOut):
    ...


# Responses
class ResponseBase(BaseModel):
    uid: int
    qid: int
    values: list[str]
    date: date


class ResponseIn(ResponseBase):
    ...


class ResponseOut(ResponseBase):
    rid: int


class ResponseInDB(ResponseOut):
    ...


# Support Networks
class SupportNetworkBase(BaseModel):
    owner_uid: int
    member_uid: int
    sharing: int # 0, 1, 2


class SupportNetworkIn(SupportNetworkBase):
    ...


class SupportNetworkOut(SupportNetworkBase):
    snid: int


class SupportNetworkInDB(SupportNetworkOut):
    ...
