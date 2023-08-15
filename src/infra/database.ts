import mongoose from 'mongoose';
import dotenv from 'dotenv';

export async function connect() {
  dotenv.config();

  try {
    await mongoose.connect(`mongodb+srv://ticket-hub:${process.env.PASSWORD_MOONGO}@cluster0.t8fvsju.mongodb.net/ticket-hub`);
    console.log('connection database sucessfully');
  } catch (error) {
    console.log('file: database.ts: 5 ~ conncet ~ error', error);
  }
}