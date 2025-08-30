function increaseQuantity(){
    // select the input (number)
    var input =document.querySelector("#quantity")
    var unitPrice = document.querySelector("#unit-price")
     var totalPrice = document.querySelector("#total-price")
    // console.log(typeof(input.value) )
    if( Number(input.value)<=9){

        input.value= Number(input.value)+1
    }
    // change the price span 
    var newTotalPrice=Number(unitPrice.value)*Number(input.value)
    totalPrice.textContent=newTotalPrice

}

function decreaseQuantity(){
   var input =document.querySelector("#quantity")
   var value =Number(input.value)
   // condition to stop minus when we reash 1
   if(value>1){
    input.value=value-1
   }
}