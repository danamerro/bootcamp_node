import express from "express";

import {adminRouter,usersRouter, authRouter} from "./routes"

import dbConnect from "./db/dbConnect";
import { config } from "dotenv";

config();

const PORT = Number(process.env.PORT) ?? 5000;
const HOST = process.env.HOST!;

const app = express();

app.use(express.json());

app.use("/user", usersRouter);
app.use("/admin", adminRouter);
app.use("/api/auth", authRouter);

dbConnect();

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
