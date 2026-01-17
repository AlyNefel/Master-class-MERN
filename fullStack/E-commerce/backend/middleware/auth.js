// function bech te5dem mabin client requests  route function (eg : registration)
// bech nprotecti route mta3i : /admin / profile 
// req :express object (body , params , headers)
//req.headers :object with key : => nest7a9ou key : authorization (token)
//res : express object to send responseback from the server

// next : express function bech tkammel chain 

import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()
export const auth=(req,res,next)=>{
    // bech na9ra authorization mel header (kima visitor 3andou badge bech ta9rah fi yeddou)
    const authHeader=req.headers.authorization
   if(!authHeader){
    //no badge == no entry
    return res.status(401).json({message:"No token provided"})
   }

   // authorization mawjouda w type Bearer token
   const parts = authHeader.split(" ")
   const token=parts[1]
// test if the part 1 exists 
if(!token){
    return res.json({message:"bad token"})
}
// decode the jwt token 
jwt.verify(token,process.env.JWT_SECRET,(error,decoded)=>{
    if(error)
{
    return res.json({message:"Bad Token"})
}
// create req.user attach fih decoded
req.user=decoded // req.user={id:"sdhfjsdhfishd66",name:"yassin"}
// next  : bech tkammel famma function o5ra bech te5dem
next()
})
}

export default auth