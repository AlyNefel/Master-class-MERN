import React from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {useState} from "react"
const PostForm = () => {
  // definition of the use state
    const [formData,setFormData]=useState({title:'',description:''})
  
// declare navigate const
const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        // to avoid another call of submit when refraiching the page 
        e.preventDefault()
try {
    console.log(formData)
  await axios.post("http://localhost:3000/api/posts",formData) 
  // make the inputs empty again
  setFormData({title:'',description:''})
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
            value={formData.description} 
            placeholder='Description'
            onChange={(e)=>setFormData({...formData,description:e.target.value})}/>

           
             <button className="btn btn-primary mt-4" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default PostForm