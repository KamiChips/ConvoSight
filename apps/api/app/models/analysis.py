import uuid
from datetime import datetime
from typing import Optional
from sqlalchemy import String, DateTime, Integer, Float, Text, func, ForeignKey
from sqlalchemy.dialects.postgresql import JSONB, ARRAY
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.database import Base


class AnalysisRun(Base):
    __tablename__ = 'analysis_runs'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    display_id: Mapped[Optional[str]] = mapped_column(String, nullable=True)
    model_provider: Mapped[Optional[str]] = mapped_column(String, nullable=True)
    model_name: Mapped[Optional[str]] = mapped_column(String, nullable=True)
    agent_prompt_ids_used: Mapped[Optional[list]] = mapped_column(ARRAY(String), nullable=True)
    status: Mapped[str] = mapped_column(String, default='pending')
    total_count: Mapped[int] = mapped_column(Integer, default=0)
    success_count: Mapped[int] = mapped_column(Integer, default=0)
    failed_count: Mapped[int] = mapped_column(Integer, default=0)
    started_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    finished_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    user_id: Mapped[str] = mapped_column(String, ForeignKey('users.id'), nullable=False)
    agent_id: Mapped[str] = mapped_column(String, ForeignKey('agents.id'), nullable=False)
    csv_upload_id: Mapped[str] = mapped_column(String, ForeignKey('csv_uploads.id'), nullable=False)

    analyses: Mapped[list['Analysis']] = relationship(back_populates='run')


class Analysis(Base):
    __tablename__ = 'analyses'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    model_provider: Mapped[Optional[str]] = mapped_column(String, nullable=True)
    model_name: Mapped[Optional[str]] = mapped_column(String, nullable=True)
    score: Mapped[Optional[float]] = mapped_column(Float, nullable=True)
    criteria_scores: Mapped[Optional[dict]] = mapped_column(JSONB, nullable=True)
    compliance_flags: Mapped[Optional[list]] = mapped_column(JSONB, nullable=True)
    ai_summary: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    raw_llm_response: Mapped[Optional[dict]] = mapped_column(JSONB, nullable=True)
    tokens_used: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    cost_usd: Mapped[Optional[float]] = mapped_column(Float, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    exported_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    conversation_id: Mapped[str] = mapped_column(String, ForeignKey('conversations.id'), nullable=False)
    analysis_run_id: Mapped[str] = mapped_column(String, ForeignKey('analysis_runs.id'), nullable=False)
    user_id: Mapped[str] = mapped_column(String, ForeignKey('users.id'), nullable=False)
    agent_id: Mapped[str] = mapped_column(String, ForeignKey('agents.id'), nullable=False)

    run: Mapped['AnalysisRun'] = relationship(back_populates='analyses')
