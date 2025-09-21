/*
input =>"ali412@startup.com" => true
input =>"ali412@startup" => false
input =>"@startup" =>false
input =>"naim@.com" =>false
input => "hsdfkhdsfkjds" =>false
*/ 

const isValidEmail =(email)=>{
   // step1 : split for the email using "@"
   const parts=email.split("@")
   console.log(parts)
  
   //Step 2 : condition to return false =>test the parts .length
   if(parts.length!==2||!parts[0].length||!parts[1].length)return false
  // Step 3 : destructure the parts array
  const [local,domain]=parts
  //step 4 : verify if the domain contains "."
  console.log(domain.includes("."))
console.log(domain.indexOf("."))
console.log("From split domain ",domain.split("."))
  if(!domain.includes("."))return false
  // to ensure that only one "."  exists 
  if(domain.split(".")!==2)return false
  if(domain.indexOf(".")==domain.length-1)return false


  return true
}
console.log(isValidEmail("sdhdfhqds@ftest.jksdfk.jsd"))