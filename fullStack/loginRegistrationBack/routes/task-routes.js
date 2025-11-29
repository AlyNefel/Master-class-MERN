import {Router} from "express"
import {createTask,getTaskById, getTasks,updateTask,deleteTask} from "../controllers/task-controller.js"
import {auth} from "../middleware/auth.js"

const router=Router()
router.post("/",auth,createTask)
router.get("/",auth,getTasks)
router.get("/:id",auth,getTaskById)
router.put("/:id",auth,updateTask)
router.delete("/:id",auth,deleteTask)

export default router