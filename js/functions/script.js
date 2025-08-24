//Function => block of code ; that contains instructions that perform a task // reusable 

//function definition
function greet(name){
console.log("hello "+name);
}

// invoke the function 
greet("Sondes")
greet("Lamis")

// function that add two number 
   //definition of the function 
function addTwoNumbers(a,b){
   
    return a+b
   // everything after the return will not be executed 
}   

// invoke 
var result= addTwoNumbers(10,20)
console.log(result)

// function that return an array of odd number ; from 0 to a giving number 
  // eg :  input 10 => output :[0,2,4,6,8,10]

function oddArray(a){
// define an empty array
var array = []
//for loop 
for(var i =0;i<=a;i++){
    // if the number is odd 
    if(i%2 == 0){
        // i will push it into the array
    array.push(i)
    }

}
// return the array  
return array  
}  
console.log(oddArray(10))
 console.log(oddArray(23))

// TYpeOf
var array=[1,5,8]

console.log(typeof -56)

var person = {
  firstName:"Test",
  lastName:"Hello",
}
console.log(Object.keys(person))
console.log(Object.keys(array))
//Toy Problem 
/* i want a function to return the number of days 
-The argument (input) the number of month
-eg : getDaysInMonth("8") -- out put => 31 
|| || for the message "the number of days of moth 8 is : 31" 
- PS: if the user mistype the number of month 
"May be you are living in Mars "
*/
function getDaysInMonth(monthNumber){
  if(monthNumber==1 || monthNumber==3 || monthNumber==5 || monthNumber==7 || monthNumber==8 || monthNumber==10 || monthNumber==12){
    return 31;
    //var message = "The month number " +monthNumber + " is 31"
    //return message
  }
  else if(monthNumber ==2 ){
    return 28
  }
  else if(monthNumber ==4 || monthNumber ==6|| monthNumber ==9 || monthNumber ==11){
    return 30
  }
  else return "May be you are living in Mars, there is no such a month with this number "
}

// examples : 
console.log(getDaysInMonth(18))
//switch statement 
function getDaysInMonth1(month){
switch(month){
  case 1,3,5,7,8,10,12:
    return 31
  case 2:
    return 29
  case 4,6,9,11:
  return 30
  default:
    return "check your month ; it's not valid "        
}
}
console.log(getDaysInMonth1(11))

//
// toy problem 
/* task 
+ var students = [
{name:"Yassine",
 grades :[17,20,18]} ,
 {name :"Lamis",
 grades:[16,15,19]},
 {name:"Naim",
 grades:[16,20,12]},
 average:15,
 class:"math"
]
// ken na3mel students.average = 20 
// ken n7eb nzid class key 
// students[2].class="math"
+ calculate the average of the grades for each student 
+ add a key names average for each student 
+ print the name of student with the highest average 
*/ 
function studentGrades(studentsArray){
//step 1 : calculate the average of the grades for each student
   // bech na3mel loop 3la 3al array kbir 
   for(var i =0;i<studentsArray.length;i++){
   
    var sum = 0
    var grades =studentsArray[i].grades
    for(var j=0;j<grades.length;j++){
     
      sum+=grades[j] 
      // sum = sum + grades[j]
    }
    studentsArray[i].average=sum/grades.length
   }
   //bech nod5el l koll grades mta3 student 
      // bech na3mel loop 3la grades mta3 student [i]
        //bech na3mel conteur lel somme yabda men w kol marra nzidou grades[j]
        // var average houa somme / grades.length  
      // modify the object of student bech nzidou key : avarage : value var average

    //2-step extract akber avarage
     // bech ndeclari first variable that wil lhold the student with greatest average 
     var first =  studentsArray[0]
     for(var i = 1;i<studentsArray.length;i++){
         if(studentsArray[i].average > first.average){
          first =studentsArray[i]
         }
     }

     return "the student of max average is "+first.name + " with avarage: "+first.average



}
var students = [
{name:"Yassine",
 grades :[17,20,18]} ,
 {name :"Lamis",
 grades:[16,15,19]},
 {name:"Naim",
 grades:[16,20,12]},
]

console.log(studentGrades(students))

// Helper function to calculate the avrage of an array of numbers 
function calculateAverage(array){
// declate sum variable
var sum = 0
// for loop 
for (var index = 0; index < array.length; index++) {
  sum+=array[index]
  
}
return sum / array.length
}


// function to add average to each student object 
function addAverageToStudents(students){
 for (var i = 0; i < students.length; i++) {
  // add a key average to each student object 
 students[i].average=calculateAverage(students[i].grades)
 }
}

// find first student with the highest average
function findToStudent(students){
  var top = students[0]
  for (let i = 0; i < students.length; i++) {
  if(students[i].average>top.average){
    top = students[i]
  }
    
  }
  return top;
}

// main method 
function studentGradesMain(studentsArray){
  //1-step 1 add average
  addAverageToStudents(studentsArray)
  //step2 - find the student with top average === object 
  var first = findToStudent(studentsArray)

  // print the result 
   return "the student of max average is "+first.name + " with avarage: "+first.average

}

console.log(studentGradesMain(students))