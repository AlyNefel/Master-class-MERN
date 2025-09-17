import React from 'react'

const SubmitButton = (props) => {
    const {text}=props
  return (
    <>
    <button className="btn btn-danger">{text}</button>
    </>
  )
}

export default SubmitButton