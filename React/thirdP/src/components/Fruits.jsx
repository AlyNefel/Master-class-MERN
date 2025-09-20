import React from 'react'
import { useState } from 'react'
const Fruits = () => {
    const [fruits,setFruits]=useState([])
// useState for the new value of fruits 
const [newFruit,setNewFruit]=useState('')
const [error,setError]=useState(false)
const handleAddFruit=()=>{

  if(newFruit.length){

    setFruits([...fruits,newFruit])
    setNewFruit('')
     setError(false)
  } else 
    setError(true)
}

const handleChange =(e)=>{
console.log(e.target.value)
// k => newFruit ="k" // z =>"kz"
setNewFruit(e.target.value)
console.log(newFruit)
}
  return (
    <div>
        <label className="mt-4" >New Fruit</label>
<input type="text" 

value={newFruit}
onChange={handleChange}/>
<h3 style={{display:error?"block":"none",color:"red"}}>The field must not be empty</h3>
<button onClick={handleAddFruit}>Add New Fruit to list</button>
{/* <h1>{newFruit}</h1> */}
{/* Loop to view all fruits  */}
     {
      fruits.length?<div>
        <ul>
          {fruits.map((fruit,index)=>(<li key={index}><h1>{fruit}</h1></li>))}
        </ul>
      </div>:<h1>There is no fruits yet , use the input to add them</h1>
     } 
      
    </div>
  )
}

export default Fruits