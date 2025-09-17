
import Greet from "./components/Greet"
import { useState } from "react"
function App() {
  const [count,setCount]=useState(10)
  const [name1,setName1]=useState("")
// declare function increment 
const increment =()=>setCount(count+1)
// declare decrement function 
const decrement = ()=>{
  if(count>1){
setCount(count-1)
  }
  }

  // handel input change 
  const handleChange =(e)=>{
console.log(e.target.value)
setName1(e.target.value)
  }
  return (
    <div className="container mt-4">
      <Greet name={name1} age="22"></Greet>
      <Greet name="Sondes" age = "25"></Greet>
      <Greet name="Naim" ></Greet>
     <button onClick={decrement} className="btn btn-success">-</button> <h1>here is the count : {count}</h1><button onClick={increment} className="btn btn-success">+</button>
<br />
     <input className="mt-4" type="text" 
     value={name1}
     onChange={handleChange} />

     <h3>Your Name Is : {name1}</h3>
    </div>
  )
}

export default App
