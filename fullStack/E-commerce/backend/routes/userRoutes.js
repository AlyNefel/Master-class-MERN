import {Router} from "express"
import {registration,login, profile} from "../controllers/userController.js"
import {auth} from "../middleware/auth.js"
const router = Router()

router.post('/register',registration);
router.post('/login',login);

router.get("/profile",auth,profile)

export default router