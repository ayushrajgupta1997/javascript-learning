let str = "aman"

function checkPalindrome (str) {
    if(str === str.split('').reverse().join('')){
        return (`${str} is palindrome`)
    }else {
        return (`${str} is not palindrome`)
    } 

}
console.log(checkPalindrome(str));


const nestedArray = [1, [2, 3], [4, [5, 6]]];

const flattenArray = (nestedArray) => { 

    return nestedArray.flat(Infinity); 
  
  }; 

  console.log(flattenArray(nestedArray));