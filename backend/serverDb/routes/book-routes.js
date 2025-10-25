import { getAllBooks,createBook,findBookById,deleteBook } from "../controllers/book-controller.js";

import {Router} from "express"

const router= Router()

// router.get("/books",getAllBooks)
//router.post("/books",createBook)

router.route("/books")
.get(getAllBooks)
.post(createBook)

router.get("/books/:id",findBookById)
router.delete("/books/:id",deleteBook)
export default router

