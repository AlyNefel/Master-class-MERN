import {createShop,getMyShop,getShopById,getAllShops,updateShop,deleteShop,getShopProducts} from "../controllers/shopController.js"
import auth from "../middleware/auth.js"
router.delete("/:id",deleteShop)
router.put("/:id",updateShop)
router.get('/:id',getShopById);
router.post('/',createShop);
router.get("/",getAllShops)
router.get("/:id/shopProduct",getShopProducts)
router.get("/myShop",auth,getMyShop)
export default router