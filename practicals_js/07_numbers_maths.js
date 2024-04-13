//Simpale way to define number variable 

const score = 100

console.log(score) //100 

//But dedicated define number like this

const accbalance = new Number(1000000000000);  //it always be a number datatype necause using Number method

console.log(accbalance); //[Number: 1000000000000]
console.log(accbalance.toLocaleString()); //1,000,000,000,000 acc. to US standrad
console.log(accbalance.toLocaleString('en-IN'));  //10,00,00,00,00,000 To Indian Standrad

//Now in numbers also there are some methods see the eg.

console.log(accbalance.toString()); // 1000000000000
console.log(typeof(accbalance.toString())); //string

console.log(accbalance.toFixed(2));  //1000000000000.00

const anotheNumber = new Number(122.8976)
console.log(accbalance.toPrecision(3));  //1.00e+12


//+++++++++++++++++++++++++++++++++++++++    MATHS LIBRARY   +++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math); //Object [Math] {}  this is object
console.log(Math.abs(-4)); //4
console.log(Math.round(4.44)); //4   If value is 4.77 it will give 5

console.log(Math.ceil(4.44));  //to get upper value  o/p 5
console.log(Math.floor(4.99)); //to get lower value o/p 4

console.log(Math.min(45,65,87,34)); //to get min value in array o/p 34
console.log(Math.max(45,65,87,34)); //to get max value in array o/p 87



//use of Math.random

console.log(Math.random()); //it will change on every call but get the values in range 0 - 1 always

console.log((Math.random()* 10) +1);  //to avoid 0 so adding 1


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min)) + min)