import React from 'react'
import { useState } from 'react'
const DarkModeTest = (props) => {
    const [isDarkMode,setIsDarkMode]=useState(true)
const styleMode={backgroundColor:isDarkMode ?'black':'white',
  color:isDarkMode ?"white":"black",
  height:"500px",
  width:"450px"

}
  return (
    <>
    <div style={styleMode}>
        <h1>{props.data}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, assumenda sint culpa nihil magni quisquam facere quod ipsum exercitationem, tempore, a doloremque perferendis harum cum sequi alias temporibus? Nostrum, consequatur.</p>
        <button calssName="btn btn-danger" onClick={()=>setIsDarkMode(!isDarkMode)}>Change to {isDarkMode?'light':'Dark'} </button>
      </div></>
  )
}

export default DarkModeTest