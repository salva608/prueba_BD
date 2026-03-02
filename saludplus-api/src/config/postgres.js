import pkg from 'pg';
import { POSTGRES_URL } from './env.js';

const { Pool } = pkg;

export const pool = new Pool({
  connectionString: POSTGRES_URL
});

pool.connect()
  .then(() => console.log("PostgreSQL connected"))
  .catch(err => console.error("PostgreSQL error:", err));