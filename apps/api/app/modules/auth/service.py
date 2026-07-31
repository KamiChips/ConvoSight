from datetime import datetime
from fastapi import HTTPException
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from app.models import User
from apps.api.app.models.billing import AuditLog
from app.utils.jwt import (
    create_access_token, create_refresh_token
)

pwd_context = CryptContext(
    schemes=["bcrypt"], 
    deprecated="auto"
)

class AuthService:
    @staticmethod
    def login(email: str, password: str, db: Session):
        # Search for the user in the database using the provided email
        user = (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

        if not user:
            raise HTTPException(
                status_code=401,
                detail="Invalid email or password"
            )

        # Verify deleted_at is None (user is not deleted)
        if user.deleted_at:
            raise HTTPException(
                status_code=403,
                detail="Account has been deleted"
            )

        # bycript.verify()
        if not pwd_context.verify(
            password, 
            user.password
        ):
            raise HTTPException(
                status_code=401,
                detail="Invalid email or password"
            )

        # update last_login_at
        user.last_login_at = datetime.utcnow()

        # Create audit_log
        audit_log = AuditLog(
            user_id=user.id,
            action="login",
            timestamp=datetime.utcnow()
        )
        db.add(audit_log)

        # Generate access token
        access_token = create_access_token(
            {
                "sub": str(user.id),
                "email": user.email,
            }
        )

        # Generate refresh token
        refresh_token = create_refresh_token(
            {
                "sub": str(user.id),
            }
        )
        db.commit()

        return {
            "user": {
                "id": user.id,
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "last_login_at": user.last_login_at
            },
            "access_token": access_token,
            "refresh_token": refresh_token
        }
    