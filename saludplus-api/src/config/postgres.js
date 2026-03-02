/**
 * postgres.js
 * 
 * Archivo de configuración y conexión a PostgreSQL.
 * Crea un pool de conexiones con la base de datos PostgreSQL
 * y maneja la conexión y errores automáticamente.
 */

import pkg from 'pg';
import { POSTGRES_URL } from './env.js';

const { Pool } = pkg;

export const pool = new Pool({
  connectionString: POSTGRES_URL
});

pool.connect()
  .then(() => console.log("PostgreSQL connected"))
  .catch(err => console.error("PostgreSQL error:", err));