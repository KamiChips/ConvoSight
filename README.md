# ConvoSight

ConvoSight es una plataforma de análisis de conversaciones impulsada por IA que permite a los usuarios extraer insights valiosos de diálogos, documentos y datos estructurados mediante procesamiento inteligente y RAG (Retrieval-Augmented Generation).

## Características

- 📊 **Análisis de Conversaciones** - Procesa y analiza conversaciones en tiempo real
- 🤖 **Powered by AI** - Integración con Claude (Anthropic) y OpenAI
- 💾 **Almacenamiento Vectorial** - pgvector para búsqueda semántica
- 📄 **Procesamiento de Documentos** - Carga y análisis de archivos CSV y documentos
- 💳 **Monetización** - Integración con Stripe para pagos
- 🔐 **OAuth** - Autenticación con Google y Microsoft
- ⚡ **Escalable** - Workers Celery para procesamiento asincrónico
- 🎨 **Interfaz Moderna** - Frontend Next.js responsive

## Requisitos Previos

- Docker y Docker Compose
- Python 3.13+ (si ejecutas localmente)
- Node.js 18+ (si ejecutas el frontend localmente)
- Git

## Instalación y Setup

### 1. Clonar el repositorio

```bash
git clone <repository-url>
cd ConvoSight
```

### 2. Configurar variables de entorno

Las variables de entorno ya están configuradas en `apps/api/.env`. Para modificarlas:

```env
# Base de datos
DATABASE_URL=postgresql+asyncpg://convosight:convosight@postgres:5432/convosight

# Redis
REDIS_URL=redis://redis:6379/0

# Autenticación
SECRET_KEY=tu-clave-secreta-aqui
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=15
REFRESH_TOKEN_EXPIRE_DAYS=7

# Proveedores de LLM (opcional)
ANTHROPIC_API_KEY=tu-api-key-anthropic
OPENAI_API_KEY=tu-api-key-openai

# Stripe (opcional)
STRIPE_SECRET_KEY=tu-stripe-key
STRIPE_WEBHOOK_SECRET=tu-webhook-secret

# AWS S3 (opcional)
AWS_ACCESS_KEY_ID=tu-access-key
AWS_SECRET_ACCESS_KEY=tu-secret-key
AWS_BUCKET_NAME=tu-bucket
AWS_REGION=us-east-1

# OAuth (opcional)
GOOGLE_CLIENT_ID=tu-google-client-id
GOOGLE_CLIENT_SECRET=tu-google-secret
MICROSOFT_CLIENT_ID=tu-microsoft-client-id
MICROSOFT_CLIENT_SECRET=tu-microsoft-secret
```

### 3. Levantar el proyecto con Docker Compose

```bash
docker-compose up -d
```

Esto iniciará los siguientes servicios:

- **PostgreSQL** (puerto 5432) - Base de datos principal con soporte vectorial (pgvector)
- **Redis** (puerto 6379) - Cache y message broker
- **API** (puerto 8000) - Backend FastAPI
- **Web** (puerto 3000) - Frontend Next.js
- **Workers** - 3 workers Celery para procesamiento asincrónico:
  - `worker-csv`: Procesa y carga archivos CSV
  - `worker-rag`: Genera embeddings y maneja RAG
  - `worker-analysis`: Realiza análisis de conversaciones con IA

### 4. Aplicar migraciones de base de datos

Si es la primera vez, las migraciones se aplican automáticamente, pero puedes verificar:

```bash
docker-compose run --rm api alembic current
```

### 5. Acceder a la aplicación

- **Frontend**: http://localhost:3000
- **API Docs (Swagger)**: http://localhost:8000/docs
- **API Docs (ReDoc)**: http://localhost:8000/redoc

## Estructura del Proyecto

```
ConvoSight/
├── apps/
│   ├── api/                    # Backend FastAPI
│   │   ├── app/
│   │   │   ├── models/        # Modelos SQLAlchemy (User, Agent, Conversation, etc.)
│   │   │   ├── workers/       # Celery workers (analysis, csv, rag)
│   │   │   ├── config.py      # Configuración y settings
│   │   │   ├── database.py    # Setup de SQLAlchemy y conexión
│   │   │   ├── redis.py       # Cliente Redis
│   │   │   └── main.py        # Punto de entrada FastAPI
│   │   ├── migrations/        # Migraciones Alembic (versionado de schema)
│   │   ├── alembic.ini        # Configuración Alembic
│   │   └── requirements.txt   # Dependencias Python
│   └── web/                    # Frontend Next.js (React)
│       ├── app/               # Rutas y layouts
│       ├── components/        # Componentes React reutilizables
│       └── public/            # Archivos estáticos
├── infra/
│   └── postgres/              # Scripts de inicialización de BD
├── docker-compose.yml         # Orquestación de todos los servicios
└── README.md                  # Este archivo
```

## Comandos Útiles

### Desarrollo

```bash
# Ver logs de todos los servicios
docker-compose logs -f

# Ver logs de un servicio específico
docker-compose logs -f api
docker-compose logs -f web
docker-compose logs -f worker-analysis

# Acceder a bash en el contenedor de API
docker-compose exec api bash

# Acceder a bash en PostgreSQL
docker-compose exec postgres bash
```

### Base de Datos

```bash
# Crear una nueva migración automática (detecta cambios en modelos)
docker-compose run --rm api alembic revision --autogenerate -m "Descripción del cambio"

# Aplicar migraciones pendientes
docker-compose run --rm api alembic upgrade head

# Ver estado actual de migraciones
docker-compose run --rm api alembic current

# Revertir última migración
docker-compose run --rm api alembic downgrade -1

# Ver historial completo de migraciones
docker-compose run --rm api alembic history
```

### Testing y Verificación

```bash
# Verificar conexión a PostgreSQL
docker-compose exec postgres psql -U convosight -d convosight -c "SELECT 1"

# Verificar conexión a Redis
docker-compose exec redis redis-cli ping

# Ver procesos de Celery activos
docker-compose logs worker-analysis | grep "Received task"
```

## Parar los servicios

```bash
# Detener todos los servicios (datos persisten)
docker-compose down

# Detener y eliminar volúmenes (⚠️ ELIMINA LA BASE DE DATOS)
docker-compose down -v
```

## Variables de Entorno Requeridas

| Variable | Descripción | Requerida |
|----------|-------------|-----------|
| `DATABASE_URL` | URL de conexión PostgreSQL | ✅ |
| `REDIS_URL` | URL de conexión Redis | ✅ |
| `SECRET_KEY` | Clave para JWT y seguridad | ✅ |
| `ANTHROPIC_API_KEY` | API key de Anthropic | ❌ |
| `OPENAI_API_KEY` | API key de OpenAI | ❌ |
| `STRIPE_SECRET_KEY` | Clave Stripe para pagos | ❌ |
| `STRIPE_WEBHOOK_SECRET` | Webhook secret Stripe | ❌ |
| `AWS_ACCESS_KEY_ID` | AWS access key | ❌ |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key | ❌ |
| `AWS_BUCKET_NAME` | Bucket S3 para almacenamiento | ❌ |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | ❌ |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | ❌ |
| `MICROSOFT_CLIENT_ID` | Microsoft OAuth client ID | ❌ |
| `MICROSOFT_CLIENT_SECRET` | Microsoft OAuth client secret | ❌ |

## Troubleshooting

### Error: "password authentication failed"

```bash
# Verifica que PostgreSQL está corriendo correctamente
docker-compose exec postgres psql -U convosight -d convosight -c "SELECT 1"
```

### Error: "Connection refused" en API

```bash
# Reinicia los servicios
docker-compose restart api redis postgres

# O reinicia todo desde cero
docker-compose down
docker-compose up -d
```

### Los workers no procesan tareas

```bash
# Verifica que Redis está funcionando
docker-compose exec redis redis-cli ping

# Verifica logs de workers
docker-compose logs worker-csv worker-rag worker-analysis

# Reinicia los workers
docker-compose restart worker-csv worker-rag worker-analysis
```

### Migraciones de BD fallan

```bash
# Comprueba el estado actual
docker-compose run --rm api alembic current

# Reinicia la BD (⚠️ ELIMINA DATOS)
docker-compose down -v
docker-compose up -d postgres
docker-compose run --rm api alembic upgrade head
```

## Desarrollo Local (sin Docker)

Si prefieres desarrollar sin Docker (requiere configurar servicios localmente):

### Backend (API)

```bash
cd apps/api
python -m venv .venv
.\.venv\Scripts\activate  # Windows
source .venv/bin/activate # Linux/Mac

pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend (Web)

```bash
cd apps/web
npm install
npm run dev
```

**Nota**: Requiere PostgreSQL y Redis corriendo localmente en los puertos 5432 y 6379.

## Stack Tecnológico

### Backend
- **FastAPI** - Framework web async
- **SQLAlchemy** - ORM para base de datos
- **Alembic** - Migraciones de BD
- **Celery** - Task queue distribuida
- **Redis** - Message broker y cache
- **asyncpg** - Driver PostgreSQL async

### Base de Datos
- **PostgreSQL** - BD relacional
- **pgvector** - Extensión para embeddings

### Frontend
- **Next.js** - React framework
- **React** - UI library
- **TypeScript** - Type safety

### Integraciones
- **Anthropic Claude API** - LLM principal
- **OpenAI API** - LLM alternativa
- **Stripe** - Pagos
- **AWS S3** - Almacenamiento
- **Google/Microsoft OAuth** - Autenticación

## Contribuciones

1. Crea una rama para tu feature: `git checkout -b feature/mi-feature`
2. Commit los cambios: `git commit -am "Add mi-feature"`
3. Push a la rama: `git push origin feature/mi-feature`
4. Abre un Pull Request

## Licencia

ConvoSight está bajo licencia propietaria. Ver archivo LICENSE para detalles.

## Soporte

Para reportar bugs o solicitar features, abre un issue en el repositorio o contacta al equipo de desarrollo.

---

**Última actualización**: 2026-07-27
**Versión**: 1.0.0
