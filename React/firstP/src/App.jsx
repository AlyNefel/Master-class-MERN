
function App() {
const data="First variable in React"
const array =[1,5,6]
const platform = "firstReact"
const users=[
  { firstName:"user1",
    lastName:"lastName",
    age:28
  },
  { firstName:"user2",
    lastName:"lastName2",
    age:30
  },
  { firstName:"user1",
    lastName:"lastName",
    age:28
  },
  { firstName:"user2",
    lastName:"lastName2",
    age:30
  },
  { firstName:"user1",
    lastName:"lastName",
    age:28
  },
  { firstName:"user2",
    lastName:"lastName2",
    age:30
  },
  { firstName:"user1",
    lastName:"lastName",
    age:28
  },
  { firstName:"user2",
    lastName:"lastName2",
    age:30
  },
]
  return (
    <>
    <h1>{data}</h1>
    <h1>{JSON.stringify(array)}</h1>
    <h1>List Of Users from {platform}</h1>
    <ul>
      {users.map((item, index)=>
    <li key={index}>
      <h2>{item.firstName}</h2>
      <h2>{item.lastName}</h2>
      <h2>{item.age}</h2>
      <hr />
    </li>  
    )
      }


      {/* <li>
        <h2>{users[0].firstName}</h2>
        <h2>{users[0].lastName}</h2>
        <h2>{users[0].age}</h2>
      </li>
      <hr />
      <li>
        <h2>{users[1].firstName}</h2>
        <h2>{users[1].lastName}</h2>
        <h2>{users[1].age}</h2>
      </li> */}
    </ul>
    
    <button className="btn btn-success">Test Link</button>

    </>
  )
}

export default App
