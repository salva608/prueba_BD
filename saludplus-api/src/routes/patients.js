/**
 * routes/patients.js
 * 
 * Definición de rutas de la API para gestionar pacientes.
 * Incluye endpoints para obtener, crear, actualizar y eliminar pacientes,
 * así como operaciones relacionadas con información de expedientes médicos.
 */

import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Patients route ready' });
});

export default router;