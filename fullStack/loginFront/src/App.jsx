import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  
  return (
    <Router>
      <div className="container">
        <h1 className="text-center">Login App</h1>
        <Routes>
          <Route path="/" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
