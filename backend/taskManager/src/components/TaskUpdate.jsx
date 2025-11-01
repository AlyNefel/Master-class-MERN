import React from 'react'
import axios from "axios"
import {useParams,useNavigate} from "react-router-dom"
import { useState,useEffect } from 'react'
const TaskUpdate = () => {
  // use state
  const [formData,setFormData]=useState({title:'',content:'',priority:''})
  //collect the id from the front url
  const {id}=useParams()

  // use navigate const 
  const navigate=useNavigate()
// get one task by id 
const getOneTaskById=async()=>{
  try {
    // axios call to the backend 
    const oneTask=(await axios.get(`http://localhost:3000/api/tasks/${id}`)).data
    console.log("after axios call",oneTask)
    //setFormData to the upcomming result
    setFormData(oneTask)
  } catch (error) {
    console.error(error)
  }
}
//use effect 

useEffect(()=>{
  getOneTaskById()
},[])

// handle submit 
  const handleSubmit=async(e)=>{
        // to avoid another call of submit when refraiching the page 
        e.preventDefault()
try {
    console.log(formData)
  const result = await axios.put(`http://localhost:3000/api/tasks/${id}`,formData) 
  // make the inputs empty again
  console.log(result)
  setFormData({title:'',content:'',priority:''})
  // redirect (front) to / 
  navigate('/')
} catch (error) {
    console.error(error)
}
    }

  return (
    <div className="container mt-4">
      <h1>Update Task</h1>
        <form className="form-control" onSubmit={handleSubmit}>
            <input type="text"
            className="form-control"
            value={formData.title} 
            placeholder='Title'
            onChange={(e)=>setFormData({...formData,title:e.target.value})}
            // onChange={(e)=>setTile(e.target.value)}
            />
            {/* content input */}
             <input type="text"
            className="form-control"
            value={formData.content} 
            placeholder='Content'
            onChange={(e)=>setFormData({...formData,content:e.target.value})}/>

            {/* priority input */}
            <label htmlFor="">Select Priority</label>
            <select className="form-control"
            value={formData.priority}
            onChange={(e)=>setFormData({...formData,priority:e.target.value})}
            >
<option value="low">Low</option>
<option value="medium">Medium</option>
<option value="high">High</option>
            </select>
             <button className="btn btn-primary mt-4" type="submit">Update</button>
        </form>
    </div>
  )
}

export default TaskUpdate