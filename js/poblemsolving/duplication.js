/*
input : var array = [3,5,4,5,1,2,98,1,3]
output : var result = [3,5,4,1,2,98]

*/ 

function removeDuplicationtestpull(ali){
    //todo
    // prepare an empty array xvkjvdfdfngjdto hold the result
    var result = []
    for (let i = 0; i < ali.length; i++) {
        console.log("setp : " +i)
        console.log(ali[i])
        console.log(result.includes(ali[i]))
        if(!result.includes(ali[i])){
            result.push(ali[i])
        }
        console.log(result)
    }
    // console.log(i)
    return result
}
 console.log(removeDuplication([5,8,5,7,56,54]))
//console.log(result)
/*
var array = [3,5,4,5,1,2,98,1,3]
array.push(70) =>[3,5,4,5,1,2,98,1,3,70]
array.includes(225)  => true || false *
*/
// var array = [3,5,4,5,1,2,98,1,3,5] 
//console.log(removeDuplication(array))
// function removeDuplication1(array){
// return [...new Set(array)]
// }
// var array = [3,5,4,5,1,2,98,1,3,5] 
// var testSet = [new Set(array)]
/*
Cls Person {
name;
age;
city;
}
person1 = new Person("Yassin",25,Tunis)
*/ 
// console.log(testSet)

// var array1 = [...array]
// console.log(array1)
// array1.push(9999)
// console.log(array1)
// console.log("this is the first array ",array)

// var name="Ali"
// // in java : public String name = "Ali"
// name = 25
// console.log(name)
// const array = [1,2,3]
// array.push(4)
// console.log(array)
// array="Test"
let arr1=[1,2,5]
let arr2=[99,75,6]

let array3=[...arr1,...arr2]
console.log(array3)
