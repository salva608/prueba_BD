import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Simulacro route ready' });
});

export default router;