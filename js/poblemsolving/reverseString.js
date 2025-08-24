/*
write a function called reverseString that takes a string as input and returns the string reversed 

console.log(reverseString("hello"))=> "olleh"
console.log(reverseString("world"))=> "dlrow"

Hint : 
var str = "hello"
str[0] = "h"
*/ 

function reverseString(str){
// set a new variable 
var reversed =""
//for loop on str 
for (var index = 0; index < str.length; index++) {
   
    reversed=str[index]+reversed
     console.log("Main string " +str[index] + " index i " +index)
    console.log(reversed)
}
return reversed
}
console.log(reverseString("Hello"))

// function reverseString1(str){
//     // change the datatype if it's a number 
//     var isString = str+""
//     //declare a variable to return 
//     var reverse=""
//     // reversed for loop we will start our counter from the back 
//     for(var i = isString.length-1;i>=0;i--){
//         reverse+=isString[i]
//         console.log("from second loop --" +reverse + " counter i " +i)
//     }
//     return reverse
// }

// console.log(reverseString1(96584))
// build in function to change from number to string 
var number = 569
console.log(typeof number)
var newNumber =number.toString()
console.log(typeof newNumber)
//var isString = str+""

// method 3 : 
function reverseString2(str){
    return str.split("").reverse().join("")
}
console.log(reverseString2("world"))

// Split("") : turn the string into an array of characters 
var string = "test"
var result = string.split("")
console.log(result)

//reverse : application on an arry => reverse the array 
var array = [1,9,8,"e"]
var newArray=array.reverse()
console.log(newArray)
// join : to join the elements of an array into a string 
var strJoin=newArray.join("")
console.log(strJoin)

