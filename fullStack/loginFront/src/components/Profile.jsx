import React from 'react'
import {profile} from "../api"
import {useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"
const Profile = () => {
    const nav = useNavigate()
    // use state for user
    const[user,setUser]=useState(null)
    // function to get the user profile 
   const getUserProfile=async()=>{
    const response=await profile()
    console.log("From profile",typeof response)
    if(typeof response =="string"){
nav("/")
    } else{

    setUser(response)
    }
   }
//useEffect
useEffect(()=>{
    getUserProfile()
},[])

//logout function
const logOut =()=>{
    // clear the localstrorage
    //localstorage.removeItem("token")
    localStorage.clear()
    // redirect  /login
    nav("/")
}

return (
    <div className="container-fluid">
        <button className='btn btn-danger' onClick={logOut}>Logout</button>
        <div className="row">
            <div className="col-md-3 bg-light p-4">
                <div className="text-center">
                    <img src="https://via.placeholder.com/150" alt="User" className="rounded-circle mb-3" />
                    <h5>{user && user.email}</h5>
                </div>
            </div>
            <div className="col-md-9 p-4">
                <h1>Hello {user && user.username}</h1>
            </div>
        </div>
    </div>
)
}

export default Profile