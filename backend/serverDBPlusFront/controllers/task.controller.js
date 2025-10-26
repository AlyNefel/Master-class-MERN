// reserved to make crud operation and contains the logic
import Task from '../models/task.model.js'

//R : get all tasks
const getAllTasks=async(req,res)=>{
    try {
        const tasks=await Task.find()
        //tasks bech tkoun [{...},{...},{...},{...}]

        res.status(201).json(tasks)
    } catch (error) {
        res.status(500).json(error)
    }
}
// R : get task by id 
const getTaskById=async(req,res)=>{
    try {
        const task = await Task.findById(req.params.id)
        // if task exists
        if(task){
            res.json(task)
        }
        //if task does not exist
        else{
            res.status(404).json({message:"Task does not exist !! "})
        }

        
    } catch (error) {
         res.status(500).json(error)
    }
}


//C : create task 
const createTask=async(req,res)=>{
    try {
    // object mta3 task : njibouh men req.body
    const task = new Task(req.body)
    // bech nzid task li sna3tha le DB 
    await task.save()
  res.satus(201).json(task)

    } catch (error) {
    res.status(500).json(error)
    }
}
//D : Delete task
const deleteTask=async(req,res)=>{
    try {
        const taskToDelete = await Task.findByIdAndDelete(req.params.id)
         if(taskToDelete){
            res.json({message:"Task deleted Successfully !!!"})
        }
        //if task does not exist
        else{
            res.status(404).json({message:"Task does not exist !! "})
        }
    } catch (error) {
         res.status(500).json(error)
    }
}
//U : update task 
const updateTask=async (req,res)=>{
    try {
        // {}
        const taskToUpdate=await Task.findByIdAndUpdate(req.params.id,{...req.body,updatedAt:new Date()})
         if(taskToUpdate){
            res.json({message:"Task updated Successfully !!!"})
        }
        //if task does not exist
        else{
            res.status(404).json({message:"Task does not exist !! "})
        }
    } catch (error) {
         res.status(500).json(error)
    }
}

//R : get last 3 tasks
const getLastThreeTasks=async(req,res)=>{
    try {
        const last3Tasks= await Task.find().sort({createdAt:-1}).limit(3)
        res.json(last3Tasks)
    } catch (error) {
        res.status(500).json(error)
    }
}
export {getAllTasks,getTaskById,getLastThreeTasks,createTask,deleteTask,updateTask}