import mongoose from "mongoose"

const productSchema =new mongoose.Schema({
productName:{
    type:String,
    required:[true,"please enter product name !"]
},
productDescription:{
    type:String,
    required:[true,"please enter product description !"]
},
productPrice:{
    type:Number,
    required:[true,"please enter product price !"]
},
category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Category',
    required:true
},
numberInStock:{
    type:Number,
    required:[true,"Please enter quantity in stock!"]
},
createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
},
reviews:[
    {
    user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
    }
    ,
    comment:{
    type:String,
    required:true
    }
    }
]

},{
    timestamps:true
})

const Product =mongoose.model('Product',productSchema)

export default Product;