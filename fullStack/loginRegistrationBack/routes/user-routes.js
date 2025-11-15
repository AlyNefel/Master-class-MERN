import {Router} from "express"
import {registration,login, profile} from "../controllers/user-controller.js"
import auth from "../middleware/auth.js"
const router = Router()


// http://localhost:3000/api/users/register
router.post('/register',registration);
// http://localhost:3000/api/users/register
router.post('/login',login);

router.get("/profile",auth,profile)

export default router