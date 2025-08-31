// function increaseQuantity(){
//     // select the input (number)
//     var input =document.querySelector("#quantity")
//     var unitPrice = document.querySelector("#unit-price")
//      var totalPrice = document.querySelector("#total-price")
//     // console.log(typeof(input.value) )
//     if( Number(input.value)<=9){

//         input.value= Number(input.value)+1
//     }
//     // change the price span 
//     var newTotalPrice=Number(unitPrice.value)*Number(input.value)
//     totalPrice.textContent=newTotalPrice

// }

// function decreaseQuantity(){
//    var input =document.querySelector("#quantity")
//    var value =Number(input.value)
//    // condition to stop minus when we reash 1
//    if(value>1){
//     input.value=value-1
//    }
// }

function increaseQuantity(btn){
console.log(btn)
// select the correct input 
//btn.nextElementSibling
console.log(btn.previousElementSibling)
var input = btn.previousElementSibling
if( Number(input.value)<=9){

        input.value= Number(input.value)+1
    }

}

function decreaseQuantity(btn){
 var input =btn.nextElementSibling
  var value =Number(input.value)
   // condition to stop minus when we reash 1
   if(value>1){  
       input.value=value-1
    }
}

// hover image
function hovered(ali){
console.log(ali)
// i wil lincrease the width of the image (style)
ali.style.width="250px"
ali.style.border="2px solid red"
}

//unhover image
function unhovered(image){
    image.style.width="200px"
image.style.border ="0px solid white"
}

//show reveiw div
function showReview(){
var box = document.querySelector(".review")
console.log(box)
box.style.display="block"
}

// show comment 
function showComment(container,content){
    // target element || container => fil p element
    var para = document.querySelector(container)
    //content bech njibou mel input 
    var text = document.querySelector(content)

    para.textContent = text.value
}

function submitReview(comment,input){

var text =document.querySelector(comment)
document.querySelector(input).value=''
text.style.display="none"
}