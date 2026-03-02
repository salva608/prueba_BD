## Tecnologías Utilizadas

- Node.js
- Express
- PostgreSQL
- MongoDB
- Mongoose
- dotenv
- csv-parse
- pg

---

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrese de tener instalado:

### 1. Node.js

Verificar versión:

```bash
node -v

Se recomienda Node 18 o superior.

2. PostgreSQL

Verificar:

psql --version

Debe tener el servidor activo.

Instalación del Proyecto

Clonar o descargar el proyecto.

Ubicarse en la carpeta raíz del proyecto:

cd MegaStore

Instalar todas las dependencias:

npm install
Variables de Entorno

Crear un archivo .env en la raíz del proyecto con la siguiente estructura:

PORT=3000

POSTGRES_HOST=localhost
POSTGRES_USER=tu_usuario
POSTGRES_PASSWORD=tu_password
POSTGRES_DB=db_megastore_exam
POSTGRES_PORT=5432


FILE_DATA_CSV=./data/AM-prueba-desempeno-data_m4.csv

Asegúrese de que:

Las credenciales sean correctas.

La base de datos exista.

La ruta del CSV sea válida.

Configuración de Base de Datos
1. Crear Base de Datos en PostgreSQL

Antes de ejecutar el proyecto, debe crear la base de datos manualmente:

CREATE DATABASE db_megastore_exam;
2. Crear Tablas Necesarias

Es obligatorio que las tablas existan antes de ejecutar la migración.

Las tablas necesarias son:

transaction

customer

product

supplier

category

detail_transaction

Las siguientes columnas deben tener restricción UNIQUE para que el proceso idempotente funcione correctamente:

customer_email

Ejemplo:

email VARCHAR(255) UNIQUE NOT NULL

Si no existen restricciones UNIQUE, el proceso ON CONFLICT fallará.

Ejecución del Proyecto

Para iniciar el servidor y ejecutar la migración:

npm run start

El servidor realiza:

Conexión a PostgreSQL.


Ejecución del proceso de migración.


Inicio del servidor en el puerto configurado.

Lectura del CSV

Normalización de Datos


El proceso puede ejecutarse múltiples veces sin duplicar datos gracias al uso de:

ON CONFLICT (...) DO NOTHING

Ejemplo:

Uso de async/await.

Manejo de errores con try/catch.

Verifique:

Credenciales del archivo .env.

Servicios PostgreSQL  activos.

Puerto correcto.