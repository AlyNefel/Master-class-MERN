import express from "express"
import router from "./routes/languagesRoutes.js"


const app = express()
app.use(express.json())
const port = 3000

app.use("/api",router)


app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
})





