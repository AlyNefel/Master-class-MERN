import { useState } from 'react'
import PostList from '../components/PostList'
import PostDetails from '../components/PostDetails'
import PostForm from '../components/PostForm'


import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  

  return (
    <Router>
      <div className="container">
        <h1 className="text-center">Post &Comments App</h1>
        <Routes>
          <Route path="/" element={<PostList></PostList>}></Route>
          <Route path="/create" element={<PostForm></PostForm>}></Route>
          <Route path="/posts/:id" element={<PostDetails></PostDetails>}></Route>
        </Routes>
        {/* two buttons : create / home  */}
        <div className="text-center">
          <a href="/" className='btn btn-secondary me-2'>View all Posts</a>
          <a href="/create" className='btn btn-primary'>Create Post</a>
        </div>
      </div>
    </Router>
  )
}

export default App
