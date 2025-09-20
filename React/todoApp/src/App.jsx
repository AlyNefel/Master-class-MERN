import { useState } from 'react'

import './App.css'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
function App() {
  const [tasks, setTasks] = useState([])
// format of a tsk =>{text:"first task",index:0}

    /*
    [
    {text:"first task",index:0},
    {text:"first task",index:1}
    ,{text:"first task",index:2,done:false}
    ]
    */ 

    const addTask=(taskText)=>{
      setTasks([...tasks,{index:tasks.length,text:taskText}])
    }
  return (
    <>
     <h1>Todo List</h1>
     <AddTask addTask={addTask} ></AddTask>
     <TaskList tasks={tasks}></TaskList>
    </>
  )
}

export default App
