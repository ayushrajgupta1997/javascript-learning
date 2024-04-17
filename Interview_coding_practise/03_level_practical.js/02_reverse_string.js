//  Implement a function to reverse a string without using the built-in reverse() method. 

let str = "My name is Ayush Raj Gupta"

function reverse (str) {
    let reversedStr = ""
    for (let i = str.length-1 ; i >=0; i--) {
        reversedStr += str[i];
         
    }
    return reversedStr
}

console.log(reverse(str));


