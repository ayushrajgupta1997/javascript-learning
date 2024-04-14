// to define functions

/*
function fname(){}
function()
*/

//case 1

function calculateValues(num1){
    return num1                          //It will work but in case 2
}

console.log(calculateValues(2))


//case 2 

function calculateValues(num1){
    return num1                          //It will work also work but in this case it will take only 
}                                        //first item which is passing as parameter,So use rest operator

console.log(calculateValues(2, 4, 5))  //op => 2

// using of rest operator

function calculateValues(...num1){
    return num1                          //It will return array with all the values
}

console.log(calculateValues(2, 4, 5))   //[ 2, 4, 5 ]

//Pass object in function

const user = {
    name: "Ayush",
    age: 26,
    accbalance: 100000000,
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.name} and age is ${anyObject.age}`) //user name is Ayush and age is 26
}

handleObject(user) //you can directly pass object also
handleObject({
    name: "Ayush",  //user name is Ayush and age is 26
    age: 26
})

//to return Array

const myNewArray = [100, 200, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))