import {Router} from "express"
import {getAllCategories,getShopCategories,getCatById, createCategory,updateCategory,deleteCategory} from "../controllers/categoryController.js"
import {auth} from "../middleware/auth.js"
const router = Router()


router.delete("/:id",deleteCategory)
router.put("/:id",updateCategory)
router.get('/:id',getCatById);
router.post('/',createCategory);
router.get("/",getAllCategories)
router.get("/myCategories",getShopCategories)

export default router