import React from 'react'
import {Link} from 'react-router-dom'
const AllUsers = () => {
    console.log(typeof JSON.parse(localStorage.getItem("users")) )
    const users=JSON.parse(localStorage.getItem("users")) 
    
  return (
    <div className="row">
        {users.map((user,index)=>{
            return(
                <div key={index} className="col-md-4 mb-4">
                    <div className='card'>
              <Link to={`/oneUser/${index}`}>
                    <img src={user.picture.large} className="card-image-top" />
                    </Link>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"> {user.name.title} {user.name.first} {user.name.last}</h5>
                    </div>
                </div>
            )
        })}

    </div>
  )
}

export default AllUsers