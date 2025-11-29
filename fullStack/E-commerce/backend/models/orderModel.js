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
orderItems:[
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
tax:{
    type:Number
},
user:{
 type:mongoose.Schema.Types.ObjectId,
ref:'User',
required:true
}

},{
    timestamps:true
})

const Order =mongoose.model('Order',orderSchema)

export default Order;