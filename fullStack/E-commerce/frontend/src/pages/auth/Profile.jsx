import React, { useContext } from 'react'
import { profile } from "../../api/user.api.js"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const Profile = () => {
    const nav = useNavigate()
    const { logout, user: authUser } = useContext(AuthContext)
    // use state for user profile data
    const [user, setUser] = useState(null)

    // function to get the user profile 
    const getUserProfile = async () => {
        try {
            const response = await profile()
            console.log("From profile", response)
            setUser(response)
        } catch (error) {
            console.error("Error fetching profile:", error)
            nav("/login")
        }
    }

    //useEffect
    useEffect(() => {
        getUserProfile()
    }, [])

    //logout function
    const logOut = () => {
        logout()
        nav("/login")
    }

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center p-3">
                <h2>My Profile</h2>
                <button className='btn btn-danger' onClick={logOut}>Logout</button>
            </div>
            <div className="row">
                <div className="col-md-3 bg-light p-4">
                    <div className="text-center">
                        <img src="https://via.placeholder.com/150" alt="User" className="rounded-circle mb-3" />
                        <h5>{user && user.email}</h5>
                        <p className="text-muted">Role: {authUser?.role || 'user'}</p>
                    </div>
                </div>
                <div className="col-md-9 p-4">
                    <h1>Hello {user && user.username}</h1>
                    <p>User ID: {user?._id}</p>

                    {authUser?.role === "user" && (
                        <div className="mt-4">
                            <h4>Want to sell products?</h4>
                            <p>Become a seller and start your business today!</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => nav('/become-seller')}
                            >
                                Become a Seller
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile