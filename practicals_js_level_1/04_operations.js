let value = 5
let negValue = -value

console.log(negValue);   // -5

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// NORMAL Operation

let str1= "Hello"
let str2 = " Ayush Raj Gupta"
str3 = str1 + str2
// console.log(str3);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Complex Operation
console.log("1" + 4);  //giving 14

console.log("1" + 4 + 4);  //giving 144  //If string is in first then all will be treated as string
console.log(1 + 4 + "5");  //giving 55  //If string at last then at last string will be treated

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Tricky Operation
console.log(true);  //giving true

console.log(+ true);  //giving 1  //Not Good Practice
console.log(+ "");  //giving 0  //Not Good Practice

