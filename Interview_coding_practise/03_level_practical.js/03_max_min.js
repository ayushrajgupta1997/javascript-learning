// 3. Given an array of numbers, write a function to find the largest and smallest numbers in the array. 

const myArray = [77, 62, 72, 87, 63, 92, 53, 23]

 function smallerNumber (arr) {
    return Math.min(...arr)
 }
 console.log(smallerNumber(myArray))

let largerNumber = (arr) => Math.max(...arr);

console.log(largerNumber(myArray));


