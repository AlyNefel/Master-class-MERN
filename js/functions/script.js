//Function => block of code ; that contains instructions that perform a task // reusable 

//function definition
function greet(name){
console.log("hello "+name);
}

// invoke the function 
greet("Sondes")
greet("Lamis")

// function that add two number 
   //definition of the function 
function addTwoNumbers(a,b){
     a=a+5
    return a+b
   // everything after the return will not be executed 
}   

// invoke 
var result= addTwoNumbers(10,20)
console.log(result)

// function that return an array of odd number ; from 0 to a giving number 
  // eg :  input 10 => output :[0,2,4,6,8,10]

function oddArray(a){
// define an empty array
var array = []
//for loop 
for(var i =0;i<=a;i++){
    // if the number is odd 
    if(i%2 == 0){
        // i will push it into the array
    array.push(i)
    }

}
// return the array  
return array  
}  
console.log(oddArray(10))
 console.log(oddArray(23))



