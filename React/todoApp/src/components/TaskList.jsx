import React from 'react'
import TaskItem from './TaskItem'
const TaskList = (props) => {
    const {tasks}=props
  return (
    <ul>
    {
        tasks.map((task)=>(
          <TaskItem key={task.index} task={task} ></TaskItem>  
        ))
    }
    </ul>
  )
}

export default TaskList