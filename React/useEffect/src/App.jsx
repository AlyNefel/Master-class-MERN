import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  
const [lanches,setLanches]=useState([])
// native fetch (before axios)
const fetchLanches=()=>{
  fetch("https://api.spacexdata.com/v3/launches")
 .then(response=>  response.json()
 ).then(response=>{
  const firstSixLanches=response.slice(0,6)
  console.log(firstSixLanches)
  setLanches(firstSixLanches)
 })
 
}

// const person ={name:"abdelbasset"}  // json format => {"name":"abdelbasset"}
  return (
    <>
     <button className="btn btn-primary" onClick={fetchLanches}>with fetch</button>

     {lanches.length}
    </>
  )
}

export default App
