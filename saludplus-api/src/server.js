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