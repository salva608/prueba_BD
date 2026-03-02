## Technologies Used

- Node.js
- Express
- PostgreSQL
- MongoDB
- Mongoose
- dotenv
- csv-parse
- pg

---

## Prerequisites

Before running the project, make sure you have the following installed:

### 1. Node.js

Check version:

```bash
node -v

Node 18 or higher is recommended.

2. PostgreSQL

Check:

psql --version

The server must be running.

Project Installation

Clone or download the project.

Navigate to the project's root directory:

cd MegaStore

Install all dependencies:

npm install
Environment Variables

Create an .env file in the project root directory with the following structure:

PORT=3000

POSTGRES_HOST=localhost
POSTGRES_USER=your_username
POSTGRES_PASSWORD=your_password
POSTGRES_DB=db_megastore_exam
POSTGRES_PORT=5432

FILE_DATA_CSV=./data/AM-prueba-desempeno-data_m4.csv

Ensure that:

The credentials are correct.

The database exists.

The CSV path is valid.

Database Setup
1. Create a Database in PostgreSQL

Before running the project, you must manually create the database:

CREATE DATABASE db_megastore_exam;

2. Create Required Tables

The tables must exist before running the migration.

The required tables are:

transaction

customer

product

supplier

category

detail_transaction

The following columns must have a UNIQUE constraint for the idempotent process to work correctly:

customer_email

Example:

email VARCHAR(255) UNIQUE NOT NULL

If there are no UNIQUE constraints, the ON CONFLICT process will fail.

Project Execution

To start the server and run the migration:

npm run start

The server performs the following:

Connects to PostgreSQL.

Runs the migration process.

Start the server on the configured port.

Read the CSV file.

Data Normalization.

The process can be run multiple times without data duplication thanks to the use of:

ON CONFLICT (...) DO NOTHING

Example:

Using async/await.

Error handling with try/catch.

Verify:

Credentials in the .env file.

PostgreSQL services are running.

The port is correct.