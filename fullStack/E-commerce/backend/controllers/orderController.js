import Order from "../models/orderModel.js"

// create order 
export const createOrder=async(req,res)=>{
try {
    const {shippingAdress,orderItems,shop}=req.body
    // calculate the total of the order
    let totalPriceWithoutTax =0
    for (let index = 0; index < orderItems.length; index++) {
        totalPriceWithoutTax+= orderItems[index].itemPrice;
        
    }
 const newOrder=await Order.create({
            //owner 1 : nab3eth id mta3 user Connected fi req.body
            user:req.user.id,
           shippingAdress ,
           orderItems,
           shop,
           totalPriceWithoutTax
        })
    res.json({message:"order creating succeffuly",newOrder})
} catch (error) {
    res.json({message:"Error Creating Order",error:error.message})
}
}

// get all orders
export const getAllOrders=async(req,res)=>{
    try {
        const allOrders = await Order.find()
        res.json(allOrders)
        
    } catch (error) {
         res.json({message:"Error fetching Orders",error:error.message})
    }
}

// get userOrder ( client )
export const getUserOrders=async(req,res)=>{
    try {
        const userOrders = Order.find({user:req.user.id})
        res.json(userOrders)
    } catch (error) {
         res.json({message:"Error fetching user Orders",error:error.message})
    }
}

// get userOrder ( client )
export const getShopOrders=async(req,res)=>{
    try {
        const shopOrders = Order.find({shop:req.params.id})
        res.json(shopOrders)
    } catch (error) {
         res.json({message:"Error fetching user Orders",error:error.message})
    }
}

// update orderStatus (in this case check the orderstatus if its delivered  )
export const updateOrderStatus=async(req,res)=>{
    try {
    //    bech nadhrou order status 
    const {orderStatus}=req.body
    // use req.params.id to find the order
    const order = await Order.findById(req.params.id).populate("orderItems.product")

    } catch (error) {
        res.json({message:"Error updating order status",error:error.message})
    }
}