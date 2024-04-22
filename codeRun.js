
//find the missing number


const array = [1,2,3]

//    const sum = array.reduce((acc, currentValue) =>  acc + currentValue ,0)

   const sum = array.reduce(function (acc, currentValue) {
    return acc + currentValue
   } ,0)

    console.log(sum);

// function sumOfArray() {
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//           sum = sum + array[i]      
    
//         }
//     return sum

// }

// console.log(sumOfArray(array));















// //reverse string

// let stringToReverse =  "how are uoy"


// let reversedString = stringToReverse.split('').reverse().join('')

// console.log(reversedString)


// // palindrome
// const string = "Naman"

// function toCheckPalindrome (str) {
//     let convertIntoLowerCase = str.toLowerCase()
//     const newString = convertIntoLowerCase.split('').reverse().join('')

//     if(convertIntoLowerCase === newString){
//         console.log(`${str} is palindrome`);
        
//     }else{
//         console.log(`${str} is not palindrome`);
//     }


// }

// toCheckPalindrome(string)