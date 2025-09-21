import React from 'react'

const Input = ({newJoke,handleChange}) => {
  return (
    <div>
        <input
        className="form-control"
        type="text" 
        value={newJoke}
        placeholder='insert Joke'
        onChange={handleChange}/>
    </div>
  )
}

export default Input