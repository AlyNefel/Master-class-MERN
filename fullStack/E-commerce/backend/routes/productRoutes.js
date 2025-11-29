import {Router} from "express"
import {getAllProducts,getProductById, createProduct,updateProduct,deleteProduct} from "../controllers/productController.js"
import {auth} from "../middleware/auth.js"
const router = Router()


router.delete("/:id",deleteProduct)
router.put("/:id",updateProduct)
router.get('/:id',getProductById);
router.post('/',createProduct);
router.get("/",auth,getAllProducts)

export default router