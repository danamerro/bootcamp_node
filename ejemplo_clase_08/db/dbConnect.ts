import mongoose from "mongoose";
import { config } from "dotenv";

config();

export default async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;
  try {
    console.log(process.env.DB_URI)
    const dbURI = process.env.DB_URI!;

    await mongoose.connect(dbURI);
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to the database");
  }
}
