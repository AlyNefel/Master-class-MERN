import Greet from "./components/Greet"
import UsersList from "./components/UsersList"
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
// create a function that calculate the sum of ages
// const totalAge=(array)=>{
//   let total = 0
//   for (let index = 0; index < array.length; index++) {
//     total+=array[index].age
//     console.log(total)
//   }
//   return total
// }
// const numbers =[45,45,45]
// const totalAgeUsers = users.reduce((x, y) => x + y.age, 0);


  return (
    <>
    <Greet></Greet>
    <h1>{data}</h1>
    <h1>{JSON.stringify(array)}</h1>
    <h1>List Of Users from {platform}</h1>
    <h1>This is the total age of all users : { users.reduce((x, y) => x + y.age, 0)}</h1>
    
    <UsersList users1={users} data={data}></UsersList>
    <button className="btn btn-success">Test Link</button>

    </>
  )
}

export default App
