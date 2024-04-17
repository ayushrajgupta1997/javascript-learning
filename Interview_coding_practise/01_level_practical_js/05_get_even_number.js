// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

const array = [1,2,3,4,5,6,7,8,9,10]

const newArrEven =[]
const newArrOdd =[]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if((element % 2) === 0){
        newArrEven.push(element)
    }else{
        newArrOdd.push(element)
    }
    
}
console.log(newArrEven);
console.log(newArrOdd);

function filterEvenNumber(array) {
    return array.filter(num => num % 2 === 0)
 }

console.log(filterEvenNumber(array))
