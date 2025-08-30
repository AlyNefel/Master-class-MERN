/*
Write a JavaScript function that takes a single word (string) as input and returns the letter that appears the most frequently in that word.

console.log(getMostFrequentLetter("development")); // Output: "e"
console.log(getMostFrequentLetter("Mississippi")); // Output: "i"
console.log(getMostFrequentLetter("bAnana"));      // Output: "a"
*/ 
function getMostFrequentLetter(word){
// step1 - b => 1 / a => 3 /n=>2 || create an emty object  to store letters with frequency 
var freqObj={}
//2step 2 : iterate / loop throught each letter in word 
for(var char of word){
    //  console.log(char)
//step 3 : convert each letter to lower case 
char=char.toLowerCase()
// step 4 : add key value to freqObj
if(freqObj[char]){
// in the case of the letter exists already in the object as a key
freqObj[char]=freqObj[char]+1
}else {
// if the letter does not exists in the obj : create a new key with the letter and set it's value to 1 
freqObj[char]=1
}
// console.log("execution for char finishe")
}
//step 5 : loop to find the letter with highest count
var maxLetter=""
var maxCount=0
for(var letter in freqObj){
    /*
{b:1,a:3,n:2}*/
    //console.log(letter)
console.log(letter,freqObj[letter])
    if(freqObj[letter]>maxCount){
        maxCount=freqObj[letter]
      maxLetter=letter
    }
    console.log(maxCount,maxLetter)
}
// console.log("the letter "+maxCount)
console.log(`The letter with max frequency is ${maxLetter} with ${maxCount} times` ) 
}
getMostFrequentLetter("QHFkqhfkQHFKJq")

// var obj={}
// obj["name"]="Yassin"
// console.log(obj)
// console.log(obj["lastName"])
// console.log(obj["name"])