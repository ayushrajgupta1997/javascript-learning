//Write a JavaScript function to calculate the sum of two numbers.  

//way one

function twoNumbers (num1, num2) {
    return num1 + num2
}

console.log(twoNumbers(5,10));

//way two arrow

//() => {};

const twoNumbersWayTwo = (num1, num2) => num1 + num2 ;

console.log(twoNumbersWayTwo(5,10));

//way three callback

function twoNumbersCallBack(num1, num2, callback) {
    const result = num1 + num2;
    callback(result);
}

function logResult(result) {
    console.log(result);
}

console.log(twoNumbersCallBack(5, 10, logResult))
