import { Request, Response } from "express";
import User from "../models/user";


class AuthController{
    async register(req: Request, res: Response) {
        try {
          const {email} = req.body;
          const existingUser = await User.findOne({email})
          if(existingUser){
            return res.status(400).json({error: "User already exists"});
          }
          const newUser = await User.create(req.body);
          return res.status(201).json(newUser);
        } catch (error) {
          console.log(error);
        }
      }
    
    async login(req: Request, res: Response){
        res.send("Login")
    }    

}

export const authController = new AuthController();



