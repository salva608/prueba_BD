import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Patients route ready' });
});

export default router;