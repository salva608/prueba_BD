/**
 * routes/simulacro.js
 * 
 * Definición de rutas de la API para simulacro de datos.
 * Incluye endpoints para manejo de datos de prueba, importación de datos CSV,
 * y operaciones de simulacro para testing y desarrollo.
 */

import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Simulacro route ready' });
});

export default router;