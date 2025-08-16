// how to declate a variable 
// var (keyword) name (name of the variable )= value(that the variable holds )
// declartion (how to create a variable )
var firstName = "David"
var lastname="test"
// print in javascript : console.log()
//console.log("Hello from Javascript")
console.log(lastname)

// number 
var dataNumber = 55
var dataNumber2 = 10
console.log(dataNumber + dataNumber2)
console.log(dataNumber + "string")
console.log(dataNumber /"string")
console.log(dataNumber *"string")

// undefined 
var test
console.log(test)

//boolean
var isActive =false
console.log(isActive)

//logic 
console.log(!isActive)
console.log(!!isActive)

// math operations + build in functions 
  //modulus
  console.log(5%2)
  console.log(6%2)

// pseudo code 
  // n7eb na3mel function li t5arejli 9adech men pair number (user houa li bech y7ot interval )

    /*1-Input + output 
      2-yelzemni function (script)
      
         conteur (bech na7seb fih les numéro pair => bech yabda 0 )
      3-bech na3mel iteration (7aja tet3awed )
         3-1-men 0 7atta interval
           numéro % 2 
              3-1-2-si :numéro % 2  = 0 => counteur bech tzidou 1
                  si non : mata3mel chay 
       4-bech n5arej message le user fih counteur            
    */  
//    function numberPaair(){
       // var interval = 5213;
//    }
// function invokation : bech n3ayet le function bech te5dem =>numberPaair(5213) 
var num1 = Math.round(2.2)
console.log(num1)

var num2=Math.round(-2.9)
console.log(num2)

var num3 = Math.floor(2.7)
console.log(num3)
var num4 = Math.ceil(2.1)
console.log(num4)

// assignment operator
var total = 10

// comparaison between variables with == & === (== : compare only value  /// === compare value and type )
console.log(97=="97")
console.log(97==="97")
console.log("A"==65)
console.log("ALY".charCodeAt(2)===89)

// Conditional in js 
// if(consition){
//     //what to do if the condition is true === instruction
// }
// else if(secondcondtion ){
//     // ynajem ykoun 3andi condition walla akther 
// }
// else {
//     // chnia na3mel ken if w else if mahomch true 
// }
var age = 18;
if(age<18){
    var test=5
    console.log("You can not drive a car ")
} else if(age >18){
    console.log("you can drive a car !!!")
}
else {
    console.log("Happy birthday ! go and celebrate !!")

}
// ternary operator:   isPresent ? "he is present" : "he is not present "

console.log(5!=4)
// <=  >=

// logic operators 

var a = true
var b = false
console.log(a && b)
console.log(a || b)
var increment = 5      
                    // increment = 5+1 
// increment++;  // ==> increment = increment +1  // increment +=1
// increment+=2  // increment = increment +2 
   

console.log(increment)


// loops 

   //for loop 
     // repeats a block of code a specific number of time ( kif nabda na3ref 9adech men marra nbech na3mel instruction)

 //exemple 
   for(var i=0;i<12;i+=2){
    console.log("This is the counter pair " +i)
//  if(i%2 ===0){
//     console.log("this is from if block "+ i)
//  }
    

   }    