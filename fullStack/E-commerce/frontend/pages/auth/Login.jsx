import React from 'react'
import {useState} from "react"
import {login} from "../../api/user.api.js"
const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    //handle submit login
    const submit=async e=>{
        e.preventDefault()
       // const res=axios.post("http://localhost:3000/api/users/login",{email,password})
        try {
               console.log("creating object from fields",{password,email})
              const resp = await login({password,email})
             
           } catch (err) {
               console.log("error",err)
               setError(err)
           }

    }
  return (
    <div className="container mt-5">
        <form onSubmit={submit}>
            <input type="email" className="form-control"  onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="form-control" placeholder='password'  onChange={(e) => setPassword(e.target.value)}/>
            <button className='btn btn-primary'>Login</button>
        </form>
    </div>
  )
}

export default Login