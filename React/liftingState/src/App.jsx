import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddJoke from './components/AddJoke'
import ListOfJokes from './components/ListOfJokes'

function App() {
  const [jokes,setJokes]=useState([])
  const [newJoke,setNewJoke]=useState("")

  const handleChange=(e)=>{
    console.log(e)
    setNewJoke(e.target.value)
  }

  const handleSubmit=(e)=>{
    // e.preventDefaul()
    setJokes([...jokes,newJoke])
    setNewJoke("")
  }
// remove todo from list 
// list + element with index => new list with filtred elements 
const remove=(indexToRemove)=>{
// we will filter by indexToRemove => new list
console.log(indexToRemove) // 1
const newList=jokes.filter((element,index)=>index!==indexToRemove)

console.log(newList) // ["first","third"]
setJokes(newList)
}

// const function =()=>{console.log(test
// )
//5+6} 

/*
 list of jokes ["hjh"]

 const addToJokes=(newJoke)=>{
  ["hjh"].push(newJoke)
  }

  <AddTask addtask = {addToJokes}>
addToJokes(valueFromInput)
*/
  return (
    <div className="form-control">
<h1>{newJoke}</h1>
    {/* already has two other components : input + button */}
    <AddJoke handleSubmit={handleSubmit} newJoke={newJoke} handleChange={handleChange}></AddJoke> 

    <ListOfJokes remove={remove}  jokes={jokes}></ListOfJokes>
    </div>
  )
}

export default App
