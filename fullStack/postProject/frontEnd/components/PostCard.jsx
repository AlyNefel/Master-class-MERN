import React from 'react'

const PostCard = ({post,onDelete}) => {
// handleDelete
const handleDelet=()=>{
    onDelete(post._id)
}
  return (
    
    <div className='card mb-3'>
     
   <div className="card-body">
    <h4 className="card-title">{post.title}</h4>
    <p className="card-text">{post.description}</p>
    <button className='btn btn-danger' onClick={handleDelet}>Delete</button>
   </div>
    </div>
  )
}

export default PostCard