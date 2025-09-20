import React from 'react'
import { useState } from 'react'
const AddTask = ({addTask}) => {

    const [newTask,setNewTask]=useState("")

const handleAddTask = ()=>{
addTask(newTask)
setNewTask('')
}

  return (
    <>
    <input type="text" 
    value={newTask} 
    onChange={(e)=>setNewTask(e.target.value)}/>
    <button onClick={handleAddTask}>Add</button>
    </>
  )
}

export default AddTask