import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect('mongodb+srv://ticket-hub:Wimazali9_@cluster0.t8fvsju.mongodb.net/ticket-hub');
    console.log('connection database sucessfully')
  } catch (error: any) {
    console.log('file: database.ts: 5 ~ conncet ~ error', error);
  }
}