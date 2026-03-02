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