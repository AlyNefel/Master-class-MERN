/*
Prepare function that will return the longest word in a sentence 
eg : console.log(longestWord("here is the email: test@testskjdfkjsdfnsjf.com 885445" )) => "programming"
*/

function longestWord(sentence){
//save each word in the sentence in an array :=> using split with space
var words =sentence.split(" ")

// create a new variable to save the longest word => at the declaration will be empty string
var lognest =""
// iterate over the array 
for (var i = 0; i < words.length; i++) {
    //make comparaison with the element of the array length == the longest word length
    // condition to make the reassign 
    if(words[i].length>lognest.length){
        lognest=words[i]
    }
   
}// return the var containing the longest word 
  return lognest
}

console.log(longestWord("here is the email: test@testskjdfkjsdfnsjf.com 885445" ))