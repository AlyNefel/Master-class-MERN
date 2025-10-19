import { getAllLanguages,createLanguage,getLanguageById } from "../controllers/languagescController.js";

import {Router} from 'express'

const router =Router()

// router.route("/languages")
// .get(getAllLanguages)
// .post(createLanguage)

router.get("/languages",getAllLanguages)

router.post("/languages",createLanguage)

router.get("/languages/:id",getLanguageById)

export default router