/**
 * mongodb.js
 * 
 * Archivo de configuración y conexión a MongoDB.
 * Establece la conexión con la base de datos MongoDB usando Mongoose.
 * Maneja errores de conexión y registra el estado de la conexión.
 */

import mongoose from 'mongoose';
import { MONGO_URI } from './env.js';

export const connectMongo = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Mongo error:", error);
  }
};