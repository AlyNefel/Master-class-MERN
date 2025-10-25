import mongoose from 'mongoose'

// we installed dotenv to have access to what ever is inside .env
import dotenv from 'dotenv'

dotenv.config()

// bech nasn3ou function (js) bech na3mlou connection m3a database 
const connectDb=async()=>{
    try {

        await mongoose.connect(process.env.MONGODB_URI,{dbName:"FirstConnection"})
        console.log("MongoDb Connected !!")
    } catch (error) {
        console.error(error)
// exit 
process.exit(1)
    }
}

export default connectDb