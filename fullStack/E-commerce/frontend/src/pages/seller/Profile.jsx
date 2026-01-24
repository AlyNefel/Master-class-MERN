import React from 'react'
import SideBarSeller from '../../components/layout/SideBarSeller'
import {useEffect,useState} from "react"
import { getMyShop } from '../../api/shop.api.js'
const Profile = () => {

    const[shop,setShop]=useState({})

     useEffect(()=>{
            getMyShop().then(res=>setShop(res.data))
            },[])
    

  return (
    <div className='d-flex'>
        <SideBarSeller></SideBarSeller>
        <div className="p-4">
            <h3>Shop Profile</h3>
<h1>Name : {shop.name}</h1>
<h1>Email : {shop.contactEmail}</h1>
        </div>
    </div>
  )
}

export default Profile