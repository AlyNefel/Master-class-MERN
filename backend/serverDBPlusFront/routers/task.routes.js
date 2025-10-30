import {getAllTasks,getTaskById,getLastThreeTasks,createTask,deleteTask,updateTask} from "../controllers/task.controller.js"

import {Router} from "express"

const router=Router()

//   /tasks
router.route("/tasks")
.get(getAllTasks)
.post(createTask)
// router.get("/tasks",getAllTasks) localhost:3000/api/tasks



// /tasks/:id
router.route("/tasks/:id")
.get(getTaskById)
.delete(deleteTask)
.put(updateTask)

router.get("tasks/newest3",getLastThreeTasks)


export default router