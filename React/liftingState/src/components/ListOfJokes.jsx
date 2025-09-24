import React from 'react'

const ListOfJokes = (props) => {
    const {jokes,remove}=props //["joke1","joke2"]
  return (
    <div>
        <h1>List of Jokes : </h1>
        {
            jokes.length===0?(
                <div className="alert alert-danger">There is no jokes yet !!</div>
            ):(
                
                <ul>
                    {jokes.map((elem,index)=>(
                        <li className="mb-3" key={index}>
                          {elem}
                          <button onClick={()=>remove(index)} className="btn btn-danger m-3">Remove</button>
                        </li>
                    ))}
                </ul>
            )
        }
    </div>
  )
}

export default ListOfJokes