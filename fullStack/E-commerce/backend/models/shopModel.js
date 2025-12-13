import mongoose from "mongoose"
const shopSchema=new mongoose.Schema({ // _id :1 ; owner:10
    owner:{
        type:mongoose.Schema.Types.ObjectId, // 10
        ref:"User",
        required:true
    },
    name:{
        type:String,
        required:true,
        //unique:true
    },
    // logo
    contactEmail:{
type:String
    },
    phoneNumber:{
        type:string
    },
    isActive:{
        type:Boolean,
        default:true
    },
    followers:[
        {type:mongoose.Schema.Types.ObjectId,
        ref:"User"
        }
    ]


},{timestamps:true})
const Shop =mongoose.model('Shop',shopSchema)

export default Shop;