from app.workers.celery_app import celery_app


@celery_app.task(name='app.workers.csv_worker.process_csv')
def process_csv(csv_upload_id: str):
    # 1. Marcar processing_job como 'running'
    # 2. Leer el CSV desde storage
    # 3. Parsear filas usando column_mapping
    # 4. Agrupar mensajes por conversation_id
    # 5. Insertar conversations + messages en la BD
    # 6. Generar structured_json_path por conversación
    # 7. Marcar processing_job como 'completed'
    # 8. Publicar evento csv.processed en Redis Streams
    print(f'[csv_worker] Procesando csv_upload_id={csv_upload_id}')
