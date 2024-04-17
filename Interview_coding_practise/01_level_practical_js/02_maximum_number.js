//2. Write a JavaScript program to find the maximum number in an array. 

const numberList = [ 1,2,3,4,5,6,7,8,9,10]

function largeNumber(num) {
    return Math.max(...num)
}

console.log(largeNumber(numberList), 'is the large Number')