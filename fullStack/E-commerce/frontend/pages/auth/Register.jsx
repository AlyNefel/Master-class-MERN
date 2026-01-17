import React from 'react'
import {useState} from "react"
import {register} from "../../api/user.api.js"
import {useNavigate} from "react-router-dom"
const Register = () => {
const navigate = useNavigate()
const [form,setForm]=useState({username:"",password:"",email:""})
const [error,setError]=useState("")


// handle submit
const handleSubmit=async(e)=>{
    console.log("handle submit clicked!!!")
    e.preventDefault();
    try {
        console.log(form)
       await register(form)
        navigate("/profile")
    } catch (err) {
        setError(err)
    }

} 


return (
    <div className="container mt-4">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">User name</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    className="form-control"
                    value={form.userName}
                    onChange={e=>setForm({...form,username:e.target.value})}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    value={form.email}
                    onChange={e=>setForm({...form,email:e.target.value})}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    value={form.password}
                    onChange={e=>setForm({...form,password:e.target.value})}
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    </div>
)
}

export default Register