import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js"

//cruds
// get all cats
export const getAllCategories=async(req,res)=>{
    try {
        const allCat=await Category.find()
        res.json(allCat)
    } catch (error) {
        res.json({message:"error fetching categories!!"})
    }
}

// create cat

export const createCategory=async(req,res)=>{
try {
    const {categoryName,categoryDescription}=req.body

    await Category.create({categoryName,categoryDescription})
    res.json({message:"category created succseccfully !!"})
    
} catch (error) {
        res.json({message:"error creating category!!"})
    
}
}
// update cat 
export const updateCategory=async (req,res) => {
    try {
        const categoryToUpdate=await Category.findByIdAndUpdate(req.params.id,req.body,{new:true})
res.json({message:"category updated successfully !!"})
    } catch (error) {
        res.json({message:"error updating category!!"})
    }
}

//delete category 
export const deleteCategory=async (req,res) => {
     try {
    // nchouf est ce que famme products 3andhom categoryid hedhi 15 :id 
    const products=await Product.find({category:req.params.id})
    if(products.length >0){
       res.json({message:"you can not delete this cat !!"}) 
       return
    }
    //Product.updateMany({category:req.params.id,$set(category:null)})
        const categoryToDelete=await Category.findByIdAndDelete(req.params.id)
res.json({message:"category deleted successfully !!"})
    } catch (error) {
        res.json({message:"error deleting category!!"})
    }
}

//get cat by id 
export const getCatById=async (req,res) => {
    try {
    const category=await Category.findById(req.params.id) 
    res.json(category)
    } catch (error) {
    res.json({message:"error fetching category!!"})

    }
}