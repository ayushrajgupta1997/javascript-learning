let str = "Naman"

function checkPalindrome (str) {
        toCheck = str.toLowerCase()
    if(toCheck === toCheck.split('').reverse().join('')){
        return (`${toCheck} is palindrome`)
    }else {
        return (`${toCheck} is not palindrome`)
    } 

}
console.log(checkPalindrome(str));


const nestedArray = [1, [2, 3], [4, [5, 6]]];

const flattenArray = (nestedArray) => { 

    return nestedArray.flat(Infinity); 
  
  }; 

  console.log(flattenArray(nestedArray));