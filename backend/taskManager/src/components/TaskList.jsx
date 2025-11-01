import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const TaskList = () => {
// use state for tasks
const[tasks,setTasks]=useState([])
// define the function using axios to get all tasks
const getAllTasks=async()=>{
    try {
        const result =(await axios.get("http://localhost:3000/api/tasks")).data
        console.log("Result from axios",result)
        setTasks(result)
    } catch (error) {
        console.error("error",error)
    }
}

// delete task 
const handelDelete=async(id)=>{
    try {
        await axios.delete(`http://localhost:3000/api/tasks/${id}`)
        getAllTasks()
    } catch (error) {
        console.error(error)
    }
}

// useEffect 
useEffect(()=>{
    getAllTasks()
},[])
  return (
    <div className="container mt-4">
     <Link className="btn btn-success" to="/create">Create</Link>
     <table className="table table-striped">
        <thead>
<tr>
    <th>Title</th>
    <th>Content</th>
    <th>Priority</th>
    <th>Action</th>
</tr>
        </thead>
        <tbody>
{tasks.map((task)=>(
    <tr key={task._id}>
<td>{task.title}</td>
<td>{task.content}</td>
<td>{task.priority}</td>
<td>
    <Link className="btn btn-info" to={`/update/${task._id}`}>Update</Link>
    <Link className="btn btn-primary" to={`/details/${task._id}`}>Details</Link>
    <button className="bnt btn-danger" onClick={()=>handelDelete(task._id)}>Delete</button>

</td>
    </tr>
))
}
        </tbody>
     </table>
    </div>
  )
}

export default TaskList