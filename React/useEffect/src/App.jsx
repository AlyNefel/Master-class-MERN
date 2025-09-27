import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import axios from 'axios'

function App() {
  
const [lanches,setLanches]=useState([])
const [lanchesAxios,setLanchesAxios]=useState([])
const [searchWord,setSerachWord]=useState("")
const [filtredLanches,setFiltredLanches]=useState([])
const [count,setCount]=useState(0)

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

// fetch lanches with axios 
const fetchLanchesAxios =async()=>{
  await axios.get("https://api.spacexdata.com/v3/launches")
  .then(response=>{
    
    const first6Lanches=response.data.slice(0,6)
    const filtredLanches1=response.data.filter(lanch=>lanch.mission_name.includes(searchWord)) 
  // set axios lanches
  console.log(filtredLanches1)
  setLanchesAxios(filtredLanches1)
  setFiltredLanches(filtredLanches1)
  }
  )
}

// we will get the llanches using useEffect withouth button click 
useEffect(()=>{
  fetchLanchesAxios()
  
},[searchWord])
//skddhbfkhsdhk
// const person ={name:"abdelbasset"}  // json format => {"name":"abdelbasset"}
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-4">
<input
 type="text" 
 className="form-control"
 value={searchWord}
 onChange={(e)=>setSerachWord(e.target.value)}
 />
 {searchWord.length && filtredLanches.map((lanch,index)=>{
  return(<span class="badge rounded-pill bg-primary">{lanch.mission_name}</span>)
 })}
 
 
      </div>
      <h3 className="mt-4">for the word <strong>{searchWord}</strong> you have <strong>{filtredLanches.length}</strong> result</h3>
      <h1>Get 6 lanches with fetch</h1>
           {/* <button className="btn btn-primary" onClick={fetchLanches}>with fetch</button> */}

      <div className="row">
{lanches.map((lanch,index)=>{
return(<div key={index} className="col-md-4 mb-4">
     <div className="card">
      <img src={lanch.links.mission_patch}  />
     </div>
     <div className="card-body">
      <h5 className='card-title'>Mission Name: {lanch.mission_name}</h5>
      <h6>flignt number : {lanch.flight_number} </h6>
      <p className="card-text" style={{color:lanch.launch_success
?"green":"red"}}>
       Sucsess : <strong>{lanch.launch_success
?"YES":"NO"}</strong>
      </p>
      <a href={lanch.links.video_link} className="btn btn-info">
        Watch On youtube
      </a>
     </div>
  </div>)
  
})}
      </div>
<h1>Get 6 lanches with AXIOS:</h1>
                {/* <button className="btn btn-primary" onClick={fetchLanchesAxios}>with Axios</button> */}
<div className="row">                
{lanchesAxios.map((lanch,index)=>{
return(<div key={index} className="col-md-4 mb-4">
     <div className="card">
      <img src={lanch.links.mission_patch}  />
     </div>
     <div className="card-body">
      <h5 className='card-title'>Mission Name: {lanch.mission_name}</h5>
      <h6>flignt number : {lanch.flight_number} </h6>
      <p className="card-text" style={{color:lanch.launch_success
?"green":"red"}}>
       Sucsess : <strong>{lanch.launch_success
?"YES":"NO"}</strong>
      </p>
      <a href={lanch.links.video_link} className="btn btn-info">
        Watch On youtube
      </a>
     </div>
  </div>)
  
})}
</div>
    </div>
  )
}

export default App
