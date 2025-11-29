import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js"

//cruds
// get all products
export const getAllProducts=async(req,res)=>{
    try {
        const allProd=await Product.find()
        res.json(allProd)
    } catch (error) {
        res.json({message:"error fetching products!!"})
    }
}

// create cat

export const createProduct=async(req,res)=>{
try {

    await Product.create(req.body)
    res.json({message:"product created succseccfully !!"})
    
} catch (error) {
        res.json({message:"error creating product!!"})
    
}
}
// update cat 
export const updateProduct=async (req,res) => {
    try {
        const product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
res.json({message:"category updated successfully !!"})
    } catch (error) {
        res.json({message:"error updating category!!"})
    }
}

//delete category 
export const deleteProduct=async (req,res) => {
     try {

        const productToDelete=await Product.findByIdAndDelete(req.params.id)
res.json({message:"product deleted successfully !!"})
    } catch (error) {
        res.json({message:"error deleting product!!"})
    }
}

//get cat by id 
export const getProductById=async (req,res) => {
    try {
    const product=await Product.findById(req.params.id).populate("createdBy","name").populate("category","categoryName")
    res.json(product)
    } catch (error) {
    res.json({message:"error fetching product!!"})

    }
}

//add review