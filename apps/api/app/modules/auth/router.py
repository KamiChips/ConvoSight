from fastapi import APIRouter
from app.auth.login import router as login_router

router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)

router.include_router(login_router)