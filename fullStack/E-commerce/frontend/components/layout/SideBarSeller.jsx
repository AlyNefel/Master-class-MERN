import React from 'react'
import { Link } from 'react-router-dom'

const SideBarSeller = () => {
  return (
    <div className="bg-dark text-white p-3 vh-100">
<h3>Seller</h3>
<Link to="/seller/products" className='d-block text-white'>Products</Link>
<Link to="seller/categories" className='d-block text-white'>Categories</Link>
<Link to="seller/orders" className='d-block text-white'>Orders</Link>
<Link to="seller/profile" className='d-block text-white'>Profile</Link>
    </div>
  )
}

export default SideBarSeller