import Post from "../models/post.model.js"


//Create Post
export const createPost=async(req,res)=>{
    try {
        const newPost =new Post(req.body)

        await newPost.save()
        // return a response
        res.status(201).json({message:"Post created successfully",newPost:newPost})
    } catch (error) {
        console.error(error)
    }
}


//get all posts
export const getPosts=async(req,res)=>{
    try {
              const posts= await Post.find()
              res.json(posts)        
    } catch (error) {
        console.error(error)
    }
}

// delete post 
export const deletePost=async(req,res)=>{
    console.log(req)
    try {
        const deletedPost=await Post.findByIdAndDelete(req.params.id)
        if(!deletedPost){
            return res.status(404).json({message:"Post not found !!"})
        }
        res.status(204).json({message:"Post deleted successfully !!"})
    } catch (error) {
        console.error(error)
    }
}

// add comment
export const addComment=async(req,res)=>{
    try {
        
        // get the comment 
        const {comment}=req.body
         // get the id of the post 
         const {id} = req.params.id
         // find the post from the DB
         const post= await Post.findById(id) 
             //if !post
             if(!post){
                return res.status(404).json({message:"The post is not Found !!"})
             }
                //res : post not found
             //else
                //post.comments.push(comment)
             post.comments.push(comment)
                //save to the db
                await post.save()
                // res 
                res.json({message:"Comment added successfuly"})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"failed to add comment",error:error})
    }
}

// find post by id 
export const findPostById=async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id) 
        if(!post){
            return res.status(404).json({message:"post not found"})
        }         
        res.json(post)
    } catch (error) {
        console.error(error)
    }
}

// update post 
export const updatePost=async(req,res)=>{
    try {
const postToUpdate=await Post.findByIdAndUpdate(req.params.id,req.body,{new:true})
if(!postToUpdate){
    return res.status(404).json({message:"Post not found !!"})
}
res.json(postToUpdate)
        
    } catch (error) {
        console.error(error)
    }
}