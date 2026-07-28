import uuid
from datetime import datetime
from sqlalchemy import String, DateTime, Integer, Text, func, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.database import Base
from pgvector.sqlalchemy import Vector


class RAGDocument(Base):
    __tablename__ = 'rag_documents'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    filename: Mapped[str] = mapped_column(String, nullable=False)
    storage_path: Mapped[str] = mapped_column(String, nullable=False)
    file_type: Mapped[str] = mapped_column(String, nullable=True)
    file_size_bytes: Mapped[int] = mapped_column(Integer, nullable=True)
    embedding_status: Mapped[str] = mapped_column(String, default='pending')
    chunks_count: Mapped[int] = mapped_column(Integer, default=0)
    uploaded_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    user_id: Mapped[str] = mapped_column(String, ForeignKey('users.id'), nullable=False)

    chunks: Mapped[list['RAGChunk']] = relationship(back_populates='document')


class RAGChunk(Base):
    __tablename__ = 'rag_chunks'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    chunk_text: Mapped[str] = mapped_column(Text, nullable=False)
    embedding_vector: Mapped[list[float]] = mapped_column(Vector(1536), nullable=True)
    rag_document_id: Mapped[str] = mapped_column(String, ForeignKey('rag_documents.id'), nullable=False)

    document: Mapped['RAGDocument'] = relationship(back_populates='chunks')
