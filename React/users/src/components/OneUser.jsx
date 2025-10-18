import React from 'react'
import {useParams} from 'react-router-dom'
const OneUser = ({users}) => {
const {id}=useParams()

console.log("from params of router",id,typeof id)
//const user ???? array ["0"]
// const idFromStringToNumber=Number(id)
// console.log(typeof idFromStringToNumber)
// const oneUser = users[idFromStringToNumber]

const findUser=users.find((user,index)=>index.toString()===id)
console.log(findUser)
  return (
    <div>
      One user Data its index is {id}
      <h1>Cell number : {findUser.cell}</h1>
      <h2>Gender : {findUser.gender}</h2>
      <h2>Age : {findUser.dob.age}</h2>
      <h2>Email : {findUser.email}</h2>
    </div>
  )
}

export default OneUser