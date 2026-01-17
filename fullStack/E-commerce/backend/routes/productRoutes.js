import {Router} from "express"
import {getAllProducts,getProductById,getShopProducts, createProduct,updateProduct,deleteProduct} from "../controllers/productController.js"
import {auth} from "../middleware/auth.js"
const router = Router()


router.delete("/:id",deleteProduct)
router.put("/:id",updateProduct)
router.get('/:id',getProductById);
router.post('/',createProduct);
router.get("/",getAllProducts)
router.get("/myProducts/:shopId",getShopProducts)

export default router