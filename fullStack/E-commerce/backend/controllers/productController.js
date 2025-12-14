import cloudinary from "../config/cloudinary.js";
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
    //collect data from req.body
    const {productName,productDescription,productPrice,category,shop,numberInStock,createdBy,image}=req.body
    // require the image existance 
    if(!image){
        return res.json({message:"Dont forget the ilage !!"})
    }

    // upload image using cloudinary
   // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
          image,{
            folder:"products"
          }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);

    //

   const product = await Product.create(
    {
    productName,
    productDescription,
    productPrice,
    category,
    shop,
    numberInStock,
    createdBy,
    image:{
       url: uploadResult.secure_url,
       public_id:uploadResult.public_id
    }}
   )
    res.json({message:"product created succseccfully !!",product})
    
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