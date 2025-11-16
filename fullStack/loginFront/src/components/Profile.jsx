import React from 'react'

const Profile = () => {
return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 bg-light p-4">
                <div className="text-center">
                    <img src="https://via.placeholder.com/150" alt="User" className="rounded-circle mb-3" />
                    <h5>Username</h5>
                </div>
            </div>
            <div className="col-md-9 p-4">
                <h1>Hello</h1>
            </div>
        </div>
    </div>
)
}

export default Profile