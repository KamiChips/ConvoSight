import uuid
from datetime import datetime
from sqlalchemy import String, DateTime, Integer, Text, func, ForeignKey
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column, relationship
from typing import Optional
from app.database import Base


class CSVUpload(Base):
    __tablename__ = 'csv_uploads'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    filename: Mapped[str] = mapped_column(String, nullable=False)
    storage_path: Mapped[str] = mapped_column(String, nullable=False)
    column_mapping: Mapped[Optional[dict]] = mapped_column(JSONB, nullable=True)
    row_count: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    uploaded_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    deleted_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    user_id: Mapped[str] = mapped_column(String, ForeignKey('users.id'), nullable=False)
    agent_id: Mapped[str] = mapped_column(String, ForeignKey('agents.id'), nullable=False)

    processing_job: Mapped[Optional['ProcessingJob']] = relationship(back_populates='csv_upload')
    conversations: Mapped[list['Conversation']] = relationship(back_populates='csv_upload')


class ProcessingJob(Base):
    __tablename__ = 'processing_jobs'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    status: Mapped[str] = mapped_column(String, default='pending')
    error_message: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    started_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    finished_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    csv_upload_id: Mapped[str] = mapped_column(String, ForeignKey('csv_uploads.id'), nullable=False)

    csv_upload: Mapped['CSVUpload'] = relationship(back_populates='processing_job')


class Conversation(Base):
    __tablename__ = 'conversations'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    display_id: Mapped[Optional[str]] = mapped_column(String, nullable=True)
    channel: Mapped[Optional[str]] = mapped_column(String, nullable=True)
    started_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    ended_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    structured_json_path: Mapped[Optional[str]] = mapped_column(String, nullable=True)
    csv_upload_id: Mapped[str] = mapped_column(String, ForeignKey('csv_uploads.id'), nullable=False)
    agent_id: Mapped[str] = mapped_column(String, ForeignKey('agents.id'), nullable=False)

    csv_upload: Mapped['CSVUpload'] = relationship(back_populates='conversations')
    messages: Mapped[list['Message']] = relationship(back_populates='conversation')


class Message(Base):
    __tablename__ = 'messages'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    sender_role: Mapped[str] = mapped_column(String, nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    sequence_index: Mapped[int] = mapped_column(Integer, nullable=False)
    sent_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    conversation_id: Mapped[str] = mapped_column(String, ForeignKey('conversations.id'), nullable=False)

    conversation: Mapped['Conversation'] = relationship(back_populates='messages')
