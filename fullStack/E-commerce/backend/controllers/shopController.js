import Shop from "../models/shopModel.js"
import Product from "../models/productModel.js"

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

// get shop by ownerId
export const getMyShop=async(req,res)=>{
    try {
        // find shop by owner 
        const shop =await Shop.findOne({owner:req.user.id})
res.json(shop)
        
    } catch (error) {
        res.json({message:"error fetching ur shop",error:error.message})
    }
}

// get shop by id
export const getShopById=async(req,res)=>{
    try {
        const shop = await Shop.findById(req.params.id).populate("owner","name")
    } catch (error) {
         res.json({message:"error fetching shop",error:error.message})
    }
}

// get all shops 
export const getAllShops=async(req,res)=>{
    try {
        const shops=await Shop.find()
        res.json(shops)
    } catch (error) {
        res.json({message:"error fetching shops",error:error.message}) 
    }
}

// update one shop
export const updateShop=async(req,res)=>{
    try {
        // find shop by id 
        const shop = await Shop.findbyId(req.params.id)
        if(!shop) return res.json({message:"shop does not exists"})
        // check if the connected user its the same as the owner 
       if(shop.owner !==req.user.id) return res.status(403).json({message:"not allowed to updated"})
    
shop={...req.body}
await shop.save()
res.json({message:"shop updated !!"}) 
    } catch (error) {
         res.json({message:"error updating shop",error:error.message}) 
    }
}

// delete shop 
export const deleteShop=async(req,res)=>{
    try {
         const shop = await Shop.findbyId(req.params.id)
        if(!shop) return res.json({message:"shop does not exists"})
        // check if the connected user its the same as the owner 
       if(shop.owner !==req.user.id) return res.status(403).json({message:"not allowed to updated"})

    await shop.deleteOne()
    res.json({message:"shop deleted ! "})
        
    } catch (error) {
         res.json({message:"error deleting shop",error:error.message}) 
    }
}

// get shop products
export const getShopProducts=async(req,res)=>{
    try {
        // Product.find({shop:req.params.id})
        const products = await Product.find({shop:req.params.id})
       .populate("category","categoryName")
       .populate("reviews.user","name")
       .sort({createdAt:-1})
        
    } catch (error) {
          res.json({message:"error fetching shop products",error:error.message}) 
    }
}