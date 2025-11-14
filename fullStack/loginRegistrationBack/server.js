import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db_config.js"
import cors from "cors"
import router from "./routes/user-routes.js"
//we will call dontenv config 

dotenv.config()
// instance of express 
const app = express()
app.use(cors())
// app.use(cors({origin:"http://localhost:5173"}))

app.use(express.json())
app.use("/api/users",router)
// invoke the db connection 
connectDb()

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`the server is running on port ${port}`)
})

