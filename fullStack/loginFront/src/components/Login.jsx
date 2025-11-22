import React from 'react'
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {login} from "../api"
const Login = () => {
    // useState
    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    //handle error
    const [emailError,setEmailError]=useState("")
    const [passwordError,setPasswordError]=useState("")

    const navigate=useNavigate()
const handleSubmit=async(e)=>{
    console.log("handle submit clicked!!!")
    e.preventDefault();
    try {
        console.log("creating object from fields",{password,email})
       const resp = await login({password,email})
        console.log("jhksdsjlddlj",resp)
        // error handeling
        if(resp.message){
     if(resp.message.includes("creddidid")){
            console.log("from email error")
            setEmailError(resp.message)
            return
        }
          if(resp.message.includes("password")){
            setPasswordError(resp.message)
            return
        }
        }
        
       navigate("/profile")
    } catch (err) {
        console.log("error",err)
        setError(err)
    }

} 


return (
    
    <div className="container d-flex align-items-center justify-content-center" >
        <div className="card w-100" style={{ maxWidth: '420px' }}>
            {passwordError}
            {emailError}
            <div className="card-body">
                <h5 className="card-title text-center mb-4">Login</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                            required
                        />
                     {emailError&& (<div className="alert alert-danger" role="alert">
{emailError}</div>)}  
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                        {passwordError&& (<div className="alert alert-danger" role="alert">
{passwordError}</div>)}  
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}

export default Login