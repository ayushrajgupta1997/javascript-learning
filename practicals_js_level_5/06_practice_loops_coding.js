//using of maps, add 10 in every number

const listOfNumbers = [1,2,3,4,5,6,7,8,9,10]

const listOfNumbersAfterAdding = listOfNumbers.map ( (nums) => {return nums + 10 } )
console.log(listOfNumbersAfterAdding);

// with the help of for each loop

let UpdatedNumberTen = []

 listOfNumbers.forEach ( (nums) => {
    if (nums) {
        let updateNums = nums + 10
        UpdatedNumberTen.push(updateNums)
    }
 })

 console.log(UpdatedNumberTen);


//chaining method

const resultWithChainMethod = listOfNumbers
                            .map( (nums) => nums * 10 )
                            .map(  (nums) => nums + 5)
                            .filter( (nums) => nums >= 50 )


console.log(resultWithChainMethod);