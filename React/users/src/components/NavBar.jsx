import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
<Link className="navbar-brand" to="/">Home</Link>
<Link className="navbar-brand" to="/allUsers" >All Users</Link>
<Link className="navbar-brand" to="/about">About</Link>
</div>
    </nav>
  )
}

export default NavBar