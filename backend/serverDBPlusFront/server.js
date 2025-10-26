import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db-config.js"
import router from "./routers/task.routes.js"

//we will call dontenv config 

dotenv.config()
// instance of express 
const app = express()
app.use(express.json())

// invoke the db connection 
connectDb()
app.use("/api",router)


const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`the server is running on port ${port}`)
})