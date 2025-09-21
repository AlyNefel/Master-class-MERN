import React from 'react'

const ListOfJokes = (props) => {
    const {jokes}=props //["joke1","joke2"]
  return (
    <div>
        <h1>List of Jokes : </h1>
        {
            jokes.length===0?(
                <div className="alert alert-danger">There is no jokes yet !!</div>
            ):(
                
                <ul>
                    {jokes.map((elem,index)=>(
                        <li key={index}>
                          {elem}
                        </li>
                    ))}
                </ul>
            )
        }
    </div>
  )
}

export default ListOfJokes