import {Router} from "express"
import {registration} from "../controllers/user-controller.js"

const router = Router()


// http://localhost:3000/api/users/register
router.post('/register',registration);

export default router