import React from 'react'
import {useParams} from 'react-router-dom'
const OneUser = ({users}) => {
const {id}=useParams()

console.log("from params of router",id)
//const user ????

  return (
    <div>OneUser</div>
  )
}

export default OneUser