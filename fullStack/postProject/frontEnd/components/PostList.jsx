import React from 'react'
import axios from "axios"
import {useState,useEffect} from "react"
import PostCard from './PostCard'


const PostList = () => {
    // useState : to save the posts and edit them if i want
    const[posts,setPosts]=useState([])
// make axios call to get all the posts from api
const fetchPosts=async()=>{
    try {
        const allPosts =(await axios.get("http://localhost:3000/api/posts")).data
        // use the setter 
        console.log("allPosts",allPosts)
        setPosts(allPosts)
        
    } catch (error) {
        console.error(error)
    }
}
//  on delete Function 
const onDelete=async(postId)=>{
    await axios.delete(`http://localhost:3000/api/posts/${postId}`)
    // filter the front 
    setPosts((oldPosts)=>oldPosts.filter((post)=>post._id!==postId))


}
// use effect
useEffect(()=>{
fetchPosts()
},[])

  return (
    <div className='row'>
        {posts.map((post)=>(
            <div className="col-md-4" key={post._id}>
              <PostCard post={post} onDelete={onDelete}></PostCard>
            </div>
        ))}

    </div>
  )
}

export default PostList