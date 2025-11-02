import {Router} from "express"
import {createPost,getPosts,addComment,deletePost,findPostById,updatePost} from "../controllers/post.controller.js"

const router = Router()


// http://localhost:3000/api/posts
router.post('/',createPost);
router.get('/',getPosts)
// http://localhost:3000/api/posts/:id/comment
router.post('/:id/comment',addComment)
router.put('/:id',updatePost)
// http://localhost:3000/api/posts/:id
router.delete('/:id',deletePost)
router.get('/:id',findPostById)

export default router