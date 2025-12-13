import mongoose from "mongoose"

const orderSchema =new mongoose.Schema({
shippingAdress:{
 address:{
    type:String,
    required:true
 },
  city:{
    type:String,
    required:true
 },
  country:{
    type:String,
    required:true
 },
  phoneNumber:{
    type:Number,
    required:true
 }
},
orderItems:[ // [{....,50},{...,100},{...20}]
    {
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            required:true
        },
        quantity:{
            type:Number,
            required:true,
            default:1
        },
        itemPrice:{
            type:Number,

        }

    }
],
totalPriceWithoutTax:{
    type:Number
},
orderStatus:{
type:String,
default:"Processing"
},
shop:{
type:mongoose.Schema.Types.ObjectId,//15
ref:'Shop',
required:true
},
tax:{
    type:Number
},
user:{
type:mongoose.Schema.Types.ObjectId,//jgjg44jhbjhb65
ref:'User',
required:true
}

},{
    timestamps:true
})

const Order =mongoose.model('Order',orderSchema)

export default Order;