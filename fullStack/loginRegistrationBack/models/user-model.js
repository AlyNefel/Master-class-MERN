import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"the username is required"],
        //required:[true,"DesTitle is required dont forget that !"]
        minlength:[2,"The user name must be at least 3 chars "]
    },
    email:{
        type:String,
        required:true,
       unique:true
    },
    password:{
        type:String,
        required:true,
                minlength:[8,"The user name must be at least 8 chars "]

    }
    // isActive:{
    //     type:Boolean,
    //     default:true
    // },
    // loginTries:{
    //     type:Number,
    //     default:0
    // }
},{
    timestamps:true
});
const User =mongoose.model('User',userSchema)

export default User;