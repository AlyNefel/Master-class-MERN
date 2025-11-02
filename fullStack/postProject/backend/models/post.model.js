import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        //required:[true,"DesTitle is required dont forget that !"]
        minlength:[3,"The title must be at least 3 chars "]
    },
    description:{
         type:String,
        required:true,
        //required:[true,"DesTitle is required dont forget that !"]
        minlength:[5,"The description must be at least 5 chars "]
    },
    comments:{
        type:[String],
        default:[]
    }
},{
    timestamps:true
});
const Post =mongoose.model('Post',postSchema)

export default Post;