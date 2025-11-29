import mongoose from "mongoose"

const categorySchema =new mongoose.Schema({
categoryName:{
    type:String,
    required:[true,"please enter category name !"]
},
categoryDescription:{
    type:String,
},
isDeleted:{
    type:Boolean,
    default:false,
}

},{
    timestamps:true
})

const Category =mongoose.model('Category',categorySchema)

export default Category;