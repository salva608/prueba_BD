import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Doctors route ready' });
});

export default router;