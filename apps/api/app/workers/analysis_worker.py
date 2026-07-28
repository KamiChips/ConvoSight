from app.workers.celery_app import celery_app


@celery_app.task(name='app.workers.analysis_worker.analyze_conversation')
def analyze_conversation(conversation_id: str, analysis_run_id: str):
    # 1. Cargar la conversación y sus mensajes desde la BD
    # 2. Cargar los agent_prompts activos del run
    # 3. Buscar chunks relevantes en pgvector (búsqueda semántica)
    # 4. Construir el prompt final: snapshots + RAG chunks + JSON conversación
    # 5. Llamar al LLM según model_provider del run
    # 6. Parsear la respuesta: score, criteria_scores, compliance_flags, summary
    # 7. Insertar analyses en la BD
    # 8. Insertar usage_ledger con tokens y costo
    # 9. Actualizar analysis_run: success_count++ o failed_count++
    # 10. Si todos terminaron, marcar run como 'completed'
    print(f'[analysis_worker] Analizando conversation_id={conversation_id}')
