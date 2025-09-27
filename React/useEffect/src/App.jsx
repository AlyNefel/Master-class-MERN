import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import axios from 'axios'

function App() {
  
const [lanches,setLanches]=useState([])
const [lanchesAxios,setLanchesAxios]=useState([])

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
const fetchLanchesAxios =()=>{
  axios.get("https://api.spacexdata.com/v3/launches")
  .then(response=>setLanchesAxios(response.data.slice(0,6)))
}

// const person ={name:"abdelbasset"}  // json format => {"name":"abdelbasset"}
  return (
    <div className="container mt-5">
      <h1>Get 6 lanches with fetch</h1>
           <button className="btn btn-primary" onClick={fetchLanches}>with fetch</button>

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
                <button className="btn btn-primary" onClick={fetchLanchesAxios}>with Axios</button>
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
