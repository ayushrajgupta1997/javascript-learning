//Write a JavaScript program to reverse a given string. 

const str = "Hello my name is Ayush Raj Gupta"

function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString(str))



// const reversedString = (str) => str.split('').reverse().join('');


// console.log(reversedString(str))
