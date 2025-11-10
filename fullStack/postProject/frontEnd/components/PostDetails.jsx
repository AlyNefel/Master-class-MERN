import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const PostDetails = () => {
  //get the id from the url
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [error, setError] = useState("")
  const [comment,setComment]=useState("")
  const fetchPost = async () => {
    try {
      console.log("idddddd ",id)
      const findPost = (await axios.get(`http://localhost:3000/api/posts/${id}`))
      console.log("test fetch post after axios call", findPost)
      if (!findPost.data.message) {
        setPost(findPost.data)
      } else if(findPost.data.message) {
        setError("Post not found!")
      }
    } catch (error) {
      console.log(error)
      setError("an error occured while fetching post!!")
    }
  }

// submit comment 
const handleSubmit=async(e)=>{
  e.preventDefault()
  try {
    await axios.post(`http://localhost:3000/api/posts/${id}/comment`,{comment:comment})
    fetchPost()
  } catch (error) {
    console.error(error)
  }
}

  useEffect(() => {
    fetchPost()
  }, [])
  if (error.length) {
    return (
      <div className='alert alert-danger'>
        {error}
      </div>
    )
  }
  if (!post) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div className="card mb-3">
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.description}</p>
    <p className="card-text"> There is : <small className="text-muted">{post.comments.length}</small> comment{post.comments.length&& post.comments.length>1?"s":""} </p>
    <hr />
    <h6 className="mt">List Of Comments</h6>
    <ul className="list-group">
        {post.comments.length>0?(
          post.comments.map((comment,index)=>(
            <li key={index}>
              {comment}
            </li>
          ))
        ):(
          <li>No comments Yet !!</li>
        )}
    </ul>
  
  </div>
  <form onSubmit={handleSubmit}>
    <div className="input-group">
      <input type="text" 
      value={comment}
                  onChange={(e)=>setComment(e.target.value)}

      id="" className="form-control" />
      <button type="submit" className="btn">Add comment</button>
    </div>
  </form>
    </div>
  )
}

export default PostDetails