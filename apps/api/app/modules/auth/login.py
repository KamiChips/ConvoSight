from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.auth.schemas import (
    LoginRequest,
    LoginResponse
)
from app.auth.service import AuthService
router = APIRouter()

@router.post("/login", response_model=LoginResponse)
def login(
    payload: LoginRequest,
    db: Session = Depends(get_db)
):
    return AuthService.login(
        payload.email,
        payload.password,
        db
    )