import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskDetails from './components/TaskDetails'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskUpdate from './components/TaskUpdate'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<TaskList></TaskList>}></Route>
        <Route path="/create" element={<TaskForm></TaskForm>}></Route>
        <Route path='/details/:id' element={<TaskDetails></TaskDetails>}></Route>
        <Route path='/update/:id' element={<TaskUpdate></TaskUpdate>}></Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
