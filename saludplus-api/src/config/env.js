/**
 * env.js
 * 
 * Archivo de configuración de variables de entorno.
 * Carga las variables del archivo .env y las exporta para su uso en la aplicación.
 * Variables configuradas: PORT, POSTGRES_URL, MONGO_URI
 */

import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const POSTGRES_URL = process.env.POSTGRES_URL;
export const MONGO_URI = process.env.MONGO_URI;