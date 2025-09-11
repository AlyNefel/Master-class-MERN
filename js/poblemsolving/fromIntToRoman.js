/*
1993 => "MCM ...."

const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];  3=> III


*/

const integerToRoman=(number)=>{
    // toDo 25 => 10 + 10 + 5 => X  25 - 10  15  => X  15 - 10 => 5 V 5-5 0
    // step 1 : 
const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
// step 2 : initilize an empty string
let roman = ""
//step 3 : loop through value - symbol pair
for (let i = 0; i < values.length; i++) {
   // step 4 : Compare the current value (values[i]) with the giving number 
   console.log(`step : ${i}`)
   while(number>=values[i]){
    console.log(`values [i] inside while ${values[i]}`)
    console.log(`number inside while  before ${number}`)
// if true => substract & add symbol (symbols[i]) to the roman
// add  the roman symbol to the result 
roman+=symbols[i]
console.log(`roman inside while after adding symbol ${roman}`)
// substract the value from the number 
number-=values[i]
console.log(`number inside while  after substract ${number}`)
   }
      
    
}
// step 5 : return the result 
return roman
}
console.log(integerToRoman(2025))