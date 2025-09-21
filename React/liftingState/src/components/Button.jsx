import React from 'react'

const Button = ({handleSubmit}) => {
  return (
    <div>
        <button onClick={handleSubmit} className="btn btn-primary">Add</button>
    </div>
  )
}

export default Button