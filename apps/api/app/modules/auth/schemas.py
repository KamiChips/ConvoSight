from pydantic import BaseModel, EmailStr
from uuid import UUID

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: UUID
    email: EmailStr
    name: str
    plan: str

class LoginResponse(BaseModel):
    user: UserResponse
    access_token: str
    refresh_token: str
