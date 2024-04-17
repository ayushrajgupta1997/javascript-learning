const arr = "madam"

const checkpalindrome = (str) => str === str.split('').reverse().join('')

console.log(checkpalindrome(arr))


const string = "naman"

function printpalindrome(string) {
    return string.split('').reverse().join('')
}

console.log(printpalindrome(string), "reverse a string");

//by spread

const toPalin = "naman"

let reversed = [...toPalin].reverse().join('')

console.log(reversed, "reverse a string");