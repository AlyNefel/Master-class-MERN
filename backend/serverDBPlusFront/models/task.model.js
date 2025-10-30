import mongoose from "mongoose"

const taskSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            //required:[true,"the title of task is required"]
            minlength:3
            //minlength:[3,"Please enter at least 3 char."]
        },
        content:{
            type:String,
            required:true
        },
// isDeleted:{
// type :Boolean,
// default:false
//         },
        priority:{
            type:String,
            enum:["low","medium","high"]
        }
    },
    //createdAt / updatedAt  => new date() => now 
    {timestamps:true}
)
const Task = mongoose.model('Task',taskSchema)
export default Task