import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useMemo,useRef,useEffect} from 'react'

function App() {

  // state of the search query
  const [query, setQuery] = useState('')
  const [count,setCount]=useState(0)
const prevCount = useRef()

const inputRef = useRef() // direct access to the DOM

const handleClick=()=>{
  // inputRef.current.focus()
  inputRef.current.value = "test add value with useRef"
}

// 0 = 0
// count ++ 1 
useEffect(()=>{
prevCount.current=count

},[count])
// list of languages
const languages =["javascript","vueJs","angular","JAVA","php"]

const handleChange =(e)=>{
  console.log(e)
setQuery(e.target.value) 
 }

 const filtredItems =useMemo(()=>{
console.log("filtering ...")
return languages.filter(item=>item.toLowerCase().includes(query.toLowerCase()))
 },[languages,query])

  return (
    <>
      {/* <input type="text" value={query} onChange={e=>setQuery(e.target.value)}/> */}
       <input type="text" value={query} onChange={handleChange}/>
       <br />
       <ul>
         {filtredItems.map(item=><li key={item}>{item}</li>)}
       </ul>
       <br /><br /><hr />
       <h1>Current : {count}</h1>
       <h1>Previous: {prevCount.current}</h1>
       <button onClick={()=>setCount(c=>c+1)}>Increment</button>
       <hr />
       <br />
       <input type="text" ref={inputRef}/> <br />
       <button onClick={handleClick} >Focus the input </button>
    </>
  )
}

export default App
