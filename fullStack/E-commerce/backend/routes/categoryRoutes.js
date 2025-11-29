import {Router} from "express"
import {getAllCategories,getCatById, createCategory,updateCategory,deleteCategory} from "../controllers/categoryController.js"
import {auth} from "../middleware/auth.js"
const router = Router()


router.delete("/:id",deleteCategory)
router.put("/:id",updateCategory)
router.get('/:id',getCatById);
router.post('/',createCategory);
router.get("/",auth,getAllCategories)

export default router