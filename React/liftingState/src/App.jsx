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

    <ListOfJokes  jokes={jokes}></ListOfJokes>
    </div>
  )
}

export default App
