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
,
shop:{
        type:mongoose.Schema.Types.ObjectId, // 10
        ref:"Shop",
        required:true
    },
// products {[id: ref Product]}

},{
    timestamps:true
})

const Category =mongoose.model('Category',categorySchema)

export default Category;