from pydantic import BaseModel, EmailStr


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
