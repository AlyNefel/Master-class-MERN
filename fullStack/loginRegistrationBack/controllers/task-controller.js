
import Task from "../models/task-model.js"
import User from "../models/user-model.js"

//CRUD 

//create task
export const createTask=async(req,res)=>{
    try {
        const {title,description,creator}=req.body
       const task =await Task.create({title,description,creator})
//push the -id of  created task into the user'task array
// option 1 :const user = await User.findById(creator)
// user.tasks.push(task._id)
// await user.save()
await User.findByIdAndUpdate(creator,{$push:{tasks:task._id}})
       res.json(task)
    } catch (error) {
        res.json({message:error.message})
    }
}


// {title:"task1",description:"test1",creator:"sdfhds5641sdd"}
//Get all tasks
export const getTasks=async(req,res)=>{
try {
    const tasks = await Task.find().populate("creator","username email")
    
// {title:"task1",description:"test1",creator:{name:"yassin",email:"yasssin@gmail.com"}}
    res.json(tasks)
} catch (error) {
    res.json({message:error.message})
}
}

//gettask by id 
export const getTaskById=async(req,res)=>{
    try {
        const task =await Task.findById(req.params.id).populate("creator","username")
        res.json(task)
    } catch (error) {
        res.json({message:error.message})
    }
}

//update task
export const updateTask=async(req,res)=>{
    try {
        const id=req.params.id
        const form = req.body
        const task=await Task.findByIdAndUpdate(id,form,{new:true})
// {title:"task1Edit",description:"test1",creator:{name:"yassin",email:"yasssin@gmail.com"}}

        res.json(task)
        // {title:"task1Edit",description:"test1",creator:{name:"yassin",email:"yasssin@gmail.com"}}

    } catch (error) {
                res.json({message:error.message})

    }
}

//delete task
export const deleteTask=async(req,res)=>{
    try {
        const id= req.params.id
        const taskToDelete=await Task.findByIdAndDelete(id)
await User.findByIdAndUpdate(taskToDelete.creator,{$pull:{tasks:taskToDelete._id}})
        res.json({message:"task deleted !!!"})
    } catch (error) {
                res.json({message:error.message})

    }
}