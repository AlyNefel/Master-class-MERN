import User from "../models/user-model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"


//load evnviroment variable
dotenv.config()
// get JWT_Secret from .env
const JWT_SECRET =process.env.JWT_SECRET

export const registration =async(req,res)=>{
try {
    // destructure username, email, password
    const {username,email,password}=req.body
    // validation (fileds presence)
    if(!username || !email || !password)
        return res.status(400).json({message:"Missing fields"})
    //check the email 
    const existingUser = await User.findOne({email});
    // already exist return res with message ( already registred)
    if(existingUser) return res.status(409).json({message:"Email already registred !"})

   //hash the password 
   const hashedPassword=await bcrypt.hash(password,10)
   // create new user instance with password:hashedPassword
   const user = new User({username,email,password:hashedPassword})

   // save the user in the DB
   await user.save()
   // ba3d save user walla document fi DB (mongoDb fi users collection) user walla 3ando _id

   //sign a JWT (de preference fiha id w akahoua ) expiry
   const token=jwt.sign({id:user._id,name:user.username},JWT_SECRET,{expiresIn:"2h"})

   //respond with 
   res.status(201).json({token})
 //alternative res.status(201).json({token,username:user.username})
   
    
} catch (error) {
    res.status(500).json({message:"server error",error:error.message})
}
}