import { useState } from 'react'
import './App.css'
import DarkModeTest from './components/DarkModeTest'
import Fruits from './components/Fruits'
function App() {
  // declare a useState for boolean variable that detects the current theme 
  // let localStorageItem=localStorage.setItem("theme",true);
  
// isDarkMode&&name

const data="From App"



  return (
    <>
      <DarkModeTest data={data} ></DarkModeTest>
     <Fruits></Fruits>
    </>
  )
}

export default App
