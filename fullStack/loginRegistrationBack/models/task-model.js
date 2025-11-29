import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({

    // how to link two models
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },

    title:{
        type:String,
        required:[true,"the title is required"],
        //required:[true,"DesTitle is required dont forget that !"]
        minlength:[3,"The task must be at least 3 chars "]
    },
    description:{
        type:String,
        required:true,
    },
    
},{
    timestamps:true
});
const Task =mongoose.model('Task',taskSchema)

export default Task;