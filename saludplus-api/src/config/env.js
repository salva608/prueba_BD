import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const POSTGRES_URL = process.env.POSTGRES_URL;
export const MONGO_URI = process.env.MONGO_URI;