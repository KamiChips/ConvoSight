from celery import Celery
from app.config import settings

celery_app = Celery(
    'convosight',
    broker=settings.REDIS_URL,
    backend=settings.REDIS_URL,
    include=[
        'app.workers.csv_worker',
        'app.workers.rag_worker',
        'app.workers.analysis_worker',
    ],
)

celery_app.conf.update(
    task_serializer='json',
    result_serializer='json',
    accept_content=['json'],
    timezone='UTC',
    enable_utc=True,
    task_routes={
        'app.workers.csv_worker.*': {'queue': 'csv_queue'},
        'app.workers.rag_worker.*': {'queue': 'rag_queue'},
        'app.workers.analysis_worker.*': {'queue': 'analysis_queue'},
    },
)
