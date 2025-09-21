import React from 'react'
import Button from './Button'
import Input from './Input'
const AddJoke = ({newJoke,handleChange,handleSubmit}) => {
  return (
    <div>
        <h1>Add A Joke :</h1>
        
            <Input newJoke={newJoke} handleChange={handleChange}></Input>
            <Button handleSubmit={handleSubmit}></Button>
        
    </div>
  )
}

export default AddJoke