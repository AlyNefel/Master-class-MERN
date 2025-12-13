import User from "../models/userModel.js";
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
   res.status(201).json({token,userId:user._id,role:user.role})
 //alternative res.status(201).json({token,username:user.username})
   
    
} catch (error) {
    res.status(500).json({message:"server error",error:error.message})
}

}

// login flow
export const login=async(req,res)=>{
    //  const tries=0
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(!user) {

    return res.json({message:"Invalid creddidid email !"})
      }
      
        // if(!user.isActive) return res.json({message:"please contact the support to reactivate ur account"})
     const match =await bcrypt.compare(password,user.password)
    if(!match) return res.json({message:"Invalid password !!"})
        const token=jwt.sign({id:user._id,name:user.username},JWT_SECRET,{expiresIn:"2h"})

   //respond with 
   res.status(201).json({token,userId:user._id,role:user.role})
}
// collect email and password from req.body
//1-test : email exists walla => findOne({email}) 
// 1-1-if !user =>return
//1-2 -if user : user.password =>bcrypt.compare(password,user.password) =>true || false
 //1-2-1 : false : bech na3mel update 3la user loginTries++ => return invalid password
 //2 // 3 => na3mel condition if login tries == 3 => ywalli update 3la isActive = bech nrodha false 
 //1-2-2 : sign a token and send it in the response

// profile function : bech tjib information mta3 logged-in user
export const profile=async(req,res)=>{
    // find the user by id (id extracted from JWT token)
    //1-find by id 
    try {
        const user =await  User
.findById(req.user.id).select("-password")

// bech nraja3 user li jeni maghir password fi réponse
res.json(user) 
    } catch (error) {
        res.status(500).json({message:"Server error ",error:error.message})
    }
}