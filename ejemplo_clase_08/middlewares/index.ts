import { Request, Response } from "express";
import express from "express";
import usersRouter from "../routes/user";

const app = express();

app.use(express.json());
app.use('/api/users', usersRouter)

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

export function isAdmin(req: Request, res: Response, next: Function) {
  const { isAdmin } = req.body;
  if (isAdmin) {
    next();
  } else {
    res.status(401).send("Unauthorized User");
  }
}
