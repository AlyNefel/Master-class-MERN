import React from 'react'

const UsersList = (props) => {
   console.log("From User List Component",props)
const {users1,data}=props
  
    const list = users1.map((item, index)=>
    <li key={index}>
      <li><h2>{item.firstName}</h2></li>
      <li><h2>{item.lastName}</h2></li>
      <li><h2>{item.age}</h2></li>
      <hr />
    </li>  
    )
  return (
    <>
    <ul>
      {
        list
      }
      
    </ul>
    {props.data}
    </>
  )
}

export default UsersList