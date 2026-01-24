import { Router } from "express"
import { registration, login, profile, becomeSeller } from "../controllers/userController.js"
import { auth } from "../middleware/auth.js"
const router = Router()

router.post('/register', registration);
router.post('/login', login);

router.get("/profile", auth, profile)
router.post("/becomeSeller", auth, becomeSeller)

export default router