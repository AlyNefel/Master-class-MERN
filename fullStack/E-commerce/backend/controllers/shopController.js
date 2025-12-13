import Shop from "../models/shopModel.js"

// create shop 
export const createShop =async(req,res)=>{
    try {
        const {name,contactEmail,phoneNumber}=req.body
        const newShop=await Shop.create({
            //owner 1 : nab3eth id mta3 user Connected fi req.body
            owner:req.user.id,
           name ,
           contactEmail,
           phoneNumber
        })
        res.status(201).json({message:"Shop Created Successfully",newShop})
    } catch (error) {
        res.json({message:"error Creating shop",error:error.message})
    }
}