from app.workers.celery_app import celery_app


@celery_app.task(name='app.workers.rag_worker.process_document')
def process_document(rag_document_id: str):
    # 1. Marcar rag_document.embedding_status = 'processing'
    # 2. Descargar el archivo desde storage
    # 3. Extraer texto según file_type (PDF, DOCX, CSV)
    # 4. Dividir texto en chunks
    # 5. Generar embeddings para cada chunk
    # 6. Insertar rag_chunks en la BD con pgvector
    # 7. Actualizar rag_document.embedding_status = 'ready'
    # 8. Actualizar chunks_count
    print(f'[rag_worker] Procesando rag_document_id={rag_document_id}')
