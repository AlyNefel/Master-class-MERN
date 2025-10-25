import mongoose from "mongoose"

// define the schema (class, entity)

const bookSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            minlength:2,
            required:true
        },
        author:{
            type:String,
        },
        nOfPages:{
            type:Number,
            // unique:true
        }
    },
    {   //automaticlly add created at and updated at 
        timestamps:true,
    }
)
const Book = mongoose.model('Book',bookSchema)
export default Book