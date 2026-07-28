import uuid
from datetime import datetime
from sqlalchemy import String, DateTime, Boolean, Integer, Text, func, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.database import Base


class Agent(Base):
    __tablename__ = 'agents'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name: Mapped[str] = mapped_column(String, nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=True)
    default_model_provider: Mapped[str] = mapped_column(String, nullable=True)
    default_model_name: Mapped[str] = mapped_column(String, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), onupdate=func.now())
    user_id: Mapped[str] = mapped_column(String, ForeignKey('users.id'), nullable=False)

    user: Mapped['User'] = relationship(back_populates='agents')
    agent_prompts: Mapped[list['AgentPrompt']] = relationship(back_populates='agent')
    agent_rag_docs: Mapped[list['AgentRAGDocument']] = relationship(back_populates='agent')


class AgentPrompt(Base):
    __tablename__ = 'agent_prompts'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    prompt_text_snapshot: Mapped[str] = mapped_column(Text, nullable=False)
    snapshot_taken_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    sort_order: Mapped[int] = mapped_column(Integer, default=0)
    agent_id: Mapped[str] = mapped_column(String, ForeignKey('agents.id'), nullable=False)
    source_prompt_id: Mapped[str] = mapped_column(String, ForeignKey('prompts.id'), nullable=True)

    agent: Mapped['Agent'] = relationship(back_populates='agent_prompts')


class AgentRAGDocument(Base):
    __tablename__ = 'agent_rag_documents'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    content_snapshot_path: Mapped[str] = mapped_column(String, nullable=True)
    is_synced_to_latest: Mapped[bool] = mapped_column(Boolean, default=True)
    snapshot_taken_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    agent_id: Mapped[str] = mapped_column(String, ForeignKey('agents.id'), nullable=False)
    source_document_id: Mapped[str] = mapped_column(String, ForeignKey('rag_documents.id'), nullable=True)

    agent: Mapped['Agent'] = relationship(back_populates='agent_rag_docs')
