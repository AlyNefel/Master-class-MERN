 //for loop 
     // repeats a block of code a specific number of time ( kif nabda na3ref 9adech men marra nbech na3mel instruction)

 //exemple 
   for(var i=0;i<=5;i++){
    console.log("This is the counter pair " +i)
//  if(i%2 ===0){
//     console.log("this is from if block "+ i)
//  }
    

   }
   
// while loop  
/*Syntax
while(condition){
// instruction as the condition is true 
// change the counter (to avoid infinite loop )
}
// js code line : will be executed only when the while loop finised 
*/   
var num = 0
while(num<=5){
    console.log(num)
  num++ //num=num+1 
}
console.log("num after while loop : " +num)
   
// T-Diagramm practice
var num1=20
var num2=5

if(num1<num2){
    num2=num2*num1
}
else{
    num1=num1/num2
}
if(num1<num2){
    num1=num1*2
}   
else if(num1==num2){
num2 = num1 * num2
}
else{
    num2=num2*2
}


console.log(num1)
console.log(num2)


// practice 
var input = 20
// output => sum  0+1+2+3+4+5 =15

// bech n7ather variable n7ot fiha sum 
var sum = 0;
// +bech nesta3mel forloop
// for(var i = 0;i<=input;i++){

//     //  + fi wastha kol marra nzid conteur (i) lel sum (variable li bech tabda men 0)
//     sum=sum+i
//    // console.log("sum at itération " + i + " sum: " +sum)

// }
//  console.log("the sum from 0 to " +input + " is : "+sum)
var i = 0
while(i<=input){
    sum=sum+i //sum+=i
    i++
}
  console.log("the sum from 0 to with while loop " +input + " is : "+sum)



