import React from 'react'
import SubmitButton from './SubmitButton'
const Greet = (props) => {
    console.log(props)
    // {age: ....,name: ....}
    const {name,age}=props
    const message="Send"
    const users =[]
    //const name = props.name
    const styleAge={backgroundColor:"red"}
  return (
    <div className="text-center">
        <h1>Hello {name}</h1>
         {age?<h1 style={styleAge}>Your age is  {age}</h1>:""}
<SubmitButton text={message}/>
    </div>
  )
}

export default Greet