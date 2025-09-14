//1- let & const => total replace of var 
 // before ES6 (ecma script version 6 -2015 )
//  var name = "test"
 // after  : let
 let name1 = 5
    // for variables that can change //
    // block scope : (for loop ; if conditions )
    // can be declared without value "eg : let name1"
    // console.log(name1) 
    // it can be reassigned == name1="Test2"
    name1="Saber"
    console.log(name1)
// after : const 
const age=30
   // are used for constant variable 
   // must have a value == can not be undefined
   // can not be reassigned in some use case 
//age = 50
//console.log(age)
const array = [2,1]
array.push(6)
console.log(array)

function quiz(){
    var x = 10
    if(true){
        var x = 20
        console.log(x) // 20
    }
    console.log(x) // 20
}
quiz()


function quiz1(){
     let x = 10
    if(true){
        let x = 20
        console.log("using let",x) 
    }
    console.log(x) 
}

quiz1()

function quiz2(){
    var age =25
    function birthday(){
        var age = 333
        console.log(age) // 333
    }
    birthday()
    console.log(age) // 333
}
quiz2()

// 2- arrow functions : shorter syntax for a function 
    // 2-1-Simple arrow function
    function add(x,y){
        return x+y
    }

    const add1 =(x,y)=>x+y   

console.log(add1(6,8))
   //2-2-Multiple instructions  arrow function
   function multiply(x,y){
    const result = x*y
    return result 
   }

   const multiply1 =(x,y)=>{
    const re=x*y
    return re
   }
   console.log(multiply1(5,6))

   // 2-3-Arrow function with single param
   function square(a){
    return a*a
   }

   const square1 =x=>x*x
console.log(square1(6))

// 2-4 function without params
function greet(){
    return "Good morning!"
}

const greet1=()=>"Good morning !"
console.log(greet1())


// literal template : concatination 
 let message = "hello"+name1 + " ; welcome to Tunisia !!"

console.log(message)
let message1=`Hello ${name1} ; ;Hello from Tunisia !!` 
console.log(message1)

//Ternary operator 
let age2 = 10
if(age2>18){
    console.log("You can have your licence")
} else {
    console.log(" you are too yound !!")
}
// condition1 ?(condition2 ? Expression1 : Expression2) : Expression3;
const message2=age2<18?(age2>13?"Go to your Dady":"TEST nested"):" you are too young !!"
console.log(message2)


// Destructuring : just a way to extract values (from array or object )
// Before ES6 var person ={name:"Ali",age: 100}
// var name = person.name
// console.log(name)

const person ={name:"Ali",age3: 100}
//the name of keys and const should be the same
const {name,age3,adress="Tunisia"}=person
console.log(age3)
console.log(person)

// nested object 
const person2 = {name4:"Nested",
    address:{
 city:"Tunis",
 zipCode:2083
}
}
const {name4,address:{city,zipCode}}=person2
/**
 * let name4 = person2.name4
 * let city = person2.address.city
 * let zipCode = person2.address.zipCode
 */

console.log(zipCode)

// Spread Operator  ...
  // copy object or array without affecting the original
let originalArray=[2,5,8]
let copyArray = [...originalArray]

console.log(copyArray)
copyArray.push(99)
console.log(copyArray)
console.log(originalArray)
  //combining two arrays 
let arrayC1=[2,5,8]
let arrayC2=[9,2]
let result = [...arrayC1,...arrayC2]
let resultObj={...person,...person2}
console.log(result)
console.log(resultObj)

const addSpread=(x,y,z)=>x+y+z
const numbers=[2,3,1]
console.log(...numbers)
console.log(addSpread(...numbers))

// intro to getters / setters 
 let state = "value"
 const useState =[
    //index 0 will hold a function 
    function getState(){
        console.log(state)
        return state
    },
    function setState(newValue){
       state = newValue
       console.log(`the new value of state after update ${state}`)
       return state
    }
 ]

 useState[0]()
 useState[1]("Naim")

// const [getter,setter]=useState 

let colors =["red", "blue" ,"green"]
// declare an array of functions (to get or update )
const useColors=[
    function getter(){
        console.log(colors)
        return colors
    },
    function setter(newColor){
      colors=[...colors,newColor]
      
      return colors
    }
]
const [getter,setter]=useColors
getter()
setter("yellow")
getter()


/// Call back function: use a function inside another function

let fruits = ["APPLE","BANANA","cherry"]

//step1: function that accepts a string => string in upperCase
const capitalWord=(word)=>{
return word.toUpperCase()
}
// function to lower case 
const toLowerCase=(word)=>{
return word.toLowerCase()
}
//const capitalWord=(word)=>word.toUpperCase()
//step 2 : the main function 
//function processFruits(fruitsArray){}
const processFruits=(fruitsArray,callback)=>{
for (let index = 0; index < fruitsArray.length; index++) {
 
   fruitsArray[index]= callback(fruitsArray[index])
}
console.log(fruitsArray)
return fruitsArray
}
// const processFruits1=(fruitsArray)=>{
// for (let index = 0; index < fruitsArray.length; index++) {
 
//    fruitsArray[index]= toLowerCase(fruitsArray[index])
// }
// console.log(fruitsArray)
// return fruitsArray
// }
console.log()
processFruits(fruits,toLowerCase)

//.map() 
// creates a new array by applying a callback function to each element 
// custom .map 
const mainFuntion = (array,callback)=>{
    const result=[]
    for (let index = 0; index < array.length; index++) {
        result.push(callback(array[index]))
        
    }
    console.log(result)
    return result
}

// definition of two callback function 
const squareFunction =(num)=>{
    console.log(`Applying in element ${num}`)
    return num*num
}
const plus2 =(num)=>num+=2
const numbersC=[2,4,5]
mainFuntion(numbersC,squareFunction)
mainFuntion(numbersC,plus2)
console.log(numbersC)
// syntax in ES6
const squaredNumbers =numbersC.map(num=>num*num)
// num => numbersC[i] [2,4,5]
const plus10Numbers = numbersC.map(num=>num+=10)
console.log(squaredNumbers)
console.log(plus10Numbers)
console.log(numbersC)
// factorial recursive 
const factoriel =n=>{
 if(n===0 || n===1) return 1
 return n*factoriel(n-1)
}

console.log(factoriel(5))
const factorialsArray=numbersC.map(num=>factoriel(num))
console.log(factorialsArray)
//.filter()
// create a new array with elements that pass the test provided in the callback function 
const allNum=[5,8,6,12,5,7,65]
const evenNumbers = allNum.filter(num=>num%2===0)
const moreThan10 = allNum.filter(num=>num>10)
console.log(evenNumbers)
console.log(moreThan10)
//.find()
//return element in array that satisfies a provided testing function
//
const firstEven=allNum.find(num=>num%2===0)
const moreThan10Find = allNum.find(num=>num>10)
console.log(firstEven)
console.log(moreThan10Find)
const indexOs12= allNum.indexOf(12)
console.log(indexOs12)

//.forEach 
// similar execution of map but does not return a new array 
// no return statement 
// const forEachApplication =allNum.forEach(num=>console.log(num))
// console.log(forEachApplication)
const forEachApplication1 =allNum.forEach((num,index)=>{
    console.log(`Number : ${num} is in index  : ${index}`)
    
})
const fruitsLength = []
fruits.forEach((fruit)=>{
    fruitsLength.push(fruit.length)
})
console.log(fruitsLength)
//[5,8,6,12,5,7,65]
console.log(forEachApplication1)
//console.log(allNum)

console.log(fruitsLength)
