import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./components/Home"
import About from "./components/About"
import AllUsers from './components/AllUsers'
import NavBar from './components/NavBar'
import OneUser from './components/OneUser'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import axios from 'axios'

function App() {

  const [users, setUsers] = useState([])

  const getUsers=async()=>{
    await axios.get("https://randomuser.me/api?results=6")
    .then(response=>setUsers(response.data.results))
  }
console.log(users)
  useEffect(()=>{
   getUsers()
  },[])
  return (
    <div className="container mt-4">
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/allUsers" element={<AllUsers users={users} ></AllUsers>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/oneUser/:id" element={<OneUser users={users}></OneUser>} ></Route>
      </Routes>
    </Router>
      
    </div>
  )
}

export default App
