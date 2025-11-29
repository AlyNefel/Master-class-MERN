import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
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

    },
    role:{
      type:String,
      default:"user"
    },
    
    
},{
    timestamps:true
});
const User =mongoose.model('User',userSchema)

export default User;