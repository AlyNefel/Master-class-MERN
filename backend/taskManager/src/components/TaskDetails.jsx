import React from 'react'
import axios from "axios"
import {useParams,useNavigate,Link} from "react-router-dom"
import { useState,useEffect } from 'react'
const TaskDetails = () => {
   // use state
    const [formData,setFormData]=useState({title:'',content:'',priority:''})
    //collect the id from the front url
    const {id}=useParams()

    //get task by ID 
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
    
  return (
    <div className="container mt-4">
      <Link className="btn btn-success" to="/">Back Home</Link>
<h1>Title :{formData.title}</h1>
    </div>
  )
}

export default TaskDetails