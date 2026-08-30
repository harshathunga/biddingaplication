// import users from "./UsersModel.js";
// import{users} from "../Models.js/relation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieparser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import {registerUser,loginUser} from "../services/AuthService.js";

export const register = async (req, res, next) => {
    const { username, email, password } = req.body;

    console.log("Received registration data:", { username, email, password });

    try {
        if(!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
       const result =  await registerUser({ username, email, password });
       console.log(result)
        res.status(result.status).json({ message: result.message });
        
    }catch (error) {
        // next(error);
        console.log(error);
    res.status(result.status).json({
        message: result.status
    });
    }

}


export const login = async (req, res, next) => {
    const {email, password} =  req.body;

    try{
        if(!email){
        return res.status(400).json({message: "Email is required"});
    }
    if(!password){
        return res.status(400).json({message: "Password is required"});
    }

    const result = await loginUser({ email, password });
    
    if (result.status !== 200) {
        return res.status(result.status).json({ message: result.message });
    }
    res.cookie("token", result.token, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        secure: false, // Set to true in production
        sameSite: "lax", // Adjust based on your needs
        maxAge: 60 * 60 * 1000, // 1 hour
    });
    res.status(200).json({ message: result.message, user: result.user });
    } catch (error) {
        console.log(error);
    res.status(500).json({
        message: "check your credential"
    });
    }

    

}