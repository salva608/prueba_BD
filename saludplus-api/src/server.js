/**
 * server.js
 * 
 * Punto de entrada principal de la aplicación.
 * Establece la conexión a MongoDB, carga las variables de entorno (incluyendo PostgreSQL),
 * e inicia el servidor Express en el puerto especificado.
 */

import app from './app.js';
import { PORT } from './config/env.js';
import { connectMongo } from './config/mongodb.js';
import './config/postgres.js';

const start = async () => {
  await connectMongo();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();