import { Router } from "express"
import { getAllProducts, getProductById, getShopProducts, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js"
import { auth } from "../middleware/auth.js"
import upload from "../middleware/upload.js"
const router = Router()


router.delete("/:id", deleteProduct)
router.put("/:id", upload.single("image"), updateProduct)
router.get('/:id', getProductById);
router.post('/', upload.single("image"), createProduct);
router.get("/", getAllProducts)
router.get("/myProducts/:shopId", getShopProducts)

export default router