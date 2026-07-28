import uuid
from datetime import datetime
from sqlalchemy import String, DateTime, Boolean, func
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.database import Base


class User(Base):
    __tablename__ = 'users'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    email: Mapped[str] = mapped_column(String, unique=True, nullable=False)
    name: Mapped[str] = mapped_column(String, nullable=False)
    password_hash: Mapped[str] = mapped_column(String, nullable=True)
    accepted_tos_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=True)
    accepted_tos_version: Mapped[str] = mapped_column(String, nullable=True)
    password_reset_token_hash: Mapped[str] = mapped_column(String, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    last_login_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=True)
    deleted_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=True)

    # Relationships
    oauth_accounts: Mapped[list['OAuthAccount']] = relationship(back_populates='user')
    agents: Mapped[list['Agent']] = relationship(back_populates='user')
    prompts: Mapped[list['Prompt']] = relationship(back_populates='user')


class OAuthAccount(Base):
    __tablename__ = 'oauth_accounts'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    provider: Mapped[str] = mapped_column(String, nullable=False)
    provider_id: Mapped[str] = mapped_column(String, nullable=False)
    user_id: Mapped[str] = mapped_column(String, nullable=False)

    user: Mapped['User'] = relationship(back_populates='oauth_accounts')
