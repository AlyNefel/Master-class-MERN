import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const TaskForm = () => {
    // definition of the use state
    const [formData,setFormData]=useState({title:'',content:'',priority:''})
    /*
    const[title,setTile]=useState('')
    const[content,setContent]=useState('')
    const[priority,setPriority]=useState('')
    */ 
// declare navigate const
const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        // to avoid another call of submit when refraiching the page 
        e.preventDefault()
try {
    console.log(formData)
  await axios.post("http://localhost:3000/api/tasks",formData) 
  // make the inputs empty again
  setFormData({title:'',content:'',priority:''})
  // redirect (front) to / 
  navigate('/')
} catch (error) {
    console.error(error)
}
    }
  return (
    <div className="container mt-4">
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
             <button className="btn btn-primary mt-4" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default TaskForm