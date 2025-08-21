// Array
/*
a way to store multiple variables in one place 
*/ 
var fruits = ["banana","orange","Apple",[1,2,3]]
// how to get an array length
var lengthArray=fruits.length
console.log(lengthArray)

// extract or display  orange 
var extractedValue=fruits[1]
console.log(extractedValue)

// show the last element
// extract the inner array 
var innerArray = fruits[3] // [1,2,3]
var extracted2 =innerArray[1] // 2
console.log(extracted2)
//console.log(fruits[3][1])


// loop through array 
for(var i = 0;i<fruits.length;i++){
    console.log("*****+ index =  " +i + " element of index : " +fruits[i])
}

// change the value of an array element 
fruits[0]=15;
console.log(fruits)

// how to add an element at the end of an array 
console.log("***** after push****")
fruits.push("Della3","battai5")
console.log(fruits)

// how to add at the begining of an array 
fruits.unshift("Strawberry","Chaining")
console.log("***** after unshift****")
console.log(fruits)

//how to add an element in a giving index 
// array.splice(index,0,newItem)
fruits.splice(1,0,"splice")
console.log("***** after splice****")
console.log(fruits)

//how to remove an item with it's index 
var fruits1 = ["apple","banana","cherry","lemon",2,3]
// i want to remove banana from the array 
// fruits1.splice(0,1)
// console.log(fruits1)

var deletedItems=fruits1.splice(0,2)
console.log("***Deleted items**")
console.log(deletedItems)
console.log("***Fruits after deleting**")
console.log(fruits1)

/*
var note = [17,16,20,15] 
increment every item by 2  and return the array 
PS: make sure the number will not be more than 20 
*/
var note = [17,16,20,15,19,18] 
//bech na3mel for loop 
for(var i = 0;i<note.length;i++){

    //bech nhez kol element w nzidou 2 
       // conditions 
         //ken note <=18 => nzidou +2 
         if(note[i]<=18){
             note[i]=note[i]+2
         } else if(note[i]==19){
             //ken note =19 => nzidou 1
 note[i]=note[i]+1
         }
}
 console.log(note)  


 // build in function : slice 
    //1- make a copy from existing array 
    var copy = note.slice()
    console.log(copy)
     //2-extract elements without changing the original array 
    var slicedArray= note.slice(1,5)
    console.log(slicedArray)
    console.log(note)
    //3-extract last elements from an array 
    var sliceFromTheEnd=note.slice(-3)
    console.log(sliceFromTheEnd)

// concatinate two arrays
    
    // result =>  [ 'test', 1, 2, 3, 4, 5 ]

    //1- built in function
      var array = ["test",1,2,9,77]
    var array1 = [3,4,5]
    var combinedArray=array.concat(array1)
    console.log(combinedArray)
    //2-logic mta3 built in function 
      //bech na3mlou for loop 3la array
    
      for(var i=0;i<array.length;i++){
          // bech na3mel push lel les element ta3 array1
        //.log()
         array1.push(array[i])
      }
      console.log("concat with for loop")
      console.log(array1)


      // intro to objects 
      // a set of key => values /  name : naim / phoneNumber : 201580258

      var person =[
        "David",
        "Test",
        25,
        "Ariana",
        "song1",
        "song2",
        "song3"
      ]
     // console.log(person[2])

      // object person 
      var person1={
        name:"David",
        lastName:"Test",
       
        city:"Ariana",
        songs:["song1","song2","song3"],
         age:25,
         address:{
          city:"ariana",
          zipCode:2083,
          street:"ghazela"
         }
      }
      console.log(person1.age)  // === console.log(person1["age"])
      console.log(person1["name"])
    console.log(person1.songs[1])
   console.log(person1.address.zipCode)
   person1.address.zipCode=5050
   person1.name="Naiim"
   console.log(person1)

   // add key to an object 
   person1.job={title:"Full stack developer",description:"what ever",salary:3000}
   person1.phoneNumber = 21620202020
    console.log(person1)

var person2={
  name: 'David',
  lastName: 'Test',
  city: 'Ariana',
  songs: [ 'song1', 'song2', 'song3' ],
  age: 25,
  address: { city: 'ariana', zipCode: 5050, street: 'ghazela' },
  job: { title: 'Full stack developer', description: 'what ever' },
  job:{title:"Full stack developer",description:"what ever",salary:1500},
  phoneNumber: 21620202020
}

var employees = [person1,person2]
console.log(employees)
//i want to add 100 to each salary 
for(var i = 0;i<employees.length;i++){
console.log("***************")
// console.log(employees[i].job.salary)  
employees[i].job.salary=employees[i].job.salary+100  //employees[i].job.salary+=100
}
console.log(employees)

// enhanced loop to extract keys from an object
// for(var key in person1){
//   console.log("enhaced for loop")
// console.log(key)
// }
//console.log(employees)
var users = [
  {
    name:"Michael",
    age:37
  },
  {name:"Jonh",
    age:30
  },
  {
    name:"Yassin",
    age:18
  }
] 

/*
Michael - 37 
John - 30 
Yassin - 18 */ 
for(var i = 0;i<users.length;i++){
  console.log(users[i].name + " - "+users[i].age)
}
// we will use enhanced for loop to extract each object from the array 
for(var user of users){  //step 1 :  user === users[0] // step 2 : user === users[1] 
  console.log(user)
  // print the desired output 
}
