import express from 'express';

import doctorRoutes from './routes/doctors.js';
import reportRoutes from './routes/reports.js';
import patientRoutes from './routes/patients.js';
import simulacroRoutes from './routes/simulacro.js';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.use('/api/doctors', doctorRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/simulacro', simulacroRoutes);

export default app;