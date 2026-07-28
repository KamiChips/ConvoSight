import uuid
from datetime import datetime
from sqlalchemy import String, DateTime, Boolean, Integer, Float, func, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.database import Base


class Plan(Base):
    __tablename__ = 'plans'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name: Mapped[str] = mapped_column(String, nullable=False)
    is_free: Mapped[bool] = mapped_column(Boolean, default=False)
    monthly_token_quota: Mapped[int] = mapped_column(Integer, nullable=False)

    subscriptions: Mapped[list['Subscription']] = relationship(back_populates='plan')


class Subscription(Base):
    __tablename__ = 'subscriptions'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    stripe_sub_id: Mapped[str] = mapped_column(String, nullable=True)
    status: Mapped[str] = mapped_column(String, nullable=False, default='active')
    renews_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=True)
    user_id: Mapped[str] = mapped_column(String, ForeignKey('users.id'), nullable=False)
    plan_id: Mapped[str] = mapped_column(String, ForeignKey('plans.id'), nullable=False)

    plan: Mapped['Plan'] = relationship(back_populates='subscriptions')


class UsageLedger(Base):
    __tablename__ = 'usage_ledger'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    tokens_used: Mapped[int] = mapped_column(Integer, nullable=False)
    cost_usd: Mapped[float] = mapped_column(Float, nullable=False)
    period_month: Mapped[str] = mapped_column(String, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    user_id: Mapped[str] = mapped_column(String, ForeignKey('users.id'), nullable=False)
    analysis_id: Mapped[str] = mapped_column(String, ForeignKey('analyses.id'), nullable=True)


class AuditLog(Base):
    __tablename__ = 'audit_logs'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    action_type: Mapped[str] = mapped_column(String, nullable=False)
    entity_type: Mapped[str] = mapped_column(String, nullable=True)
    entity_id: Mapped[str] = mapped_column(String, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    user_id: Mapped[str] = mapped_column(String, ForeignKey('users.id'), nullable=False)


class DataDeletionRequest(Base):
    __tablename__ = 'data_deletion_requests'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    status: Mapped[str] = mapped_column(String, nullable=False, default='pending')
    requested_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    purge_scheduled_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=True)
    purged_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=True)
    user_id: Mapped[str] = mapped_column(String, ForeignKey('users.id'), nullable=False)
