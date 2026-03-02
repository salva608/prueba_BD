/**
 * routes/doctors.js
 * 
 * Definición de rutas de la API para gestionar doctores.
 * Incluye endpoints para obtener, crear, actualizar y eliminar doctores,
 * así como operaciones específicas relacionadas con la información médica.
 */

import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Doctors route ready' });
});

export default router;