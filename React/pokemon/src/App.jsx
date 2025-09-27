import { useState,useEffect } from 'react'
import axios from "axios"

function App() {
  const [memes, setMemes] = useState([])

  // prepare axios function 
  const getMemesByAxios=async ()=>{
await axios.get("https://api.imgflip.com/get_memes")
.then(response=>setMemes(response.data.data.memes))
  }

  // useEffect
  useEffect(()=>{
    getMemesByAxios()
  },[])

  return (
    <>
    <ul>
      {memes.map((meme)=>{
        return(
          <li key={meme.id}>{meme.name}
           <img src={meme.url}/></li>
         
        )
      })}
      </ul>
    </>
  )
}

export default App
