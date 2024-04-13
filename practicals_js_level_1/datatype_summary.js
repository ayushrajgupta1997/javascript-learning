// Primitive DataTypes

// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt

// Eg of Symbols    

    let bigIntValue = 1212345678900987654321  //number

    let nullValue = null

    let id = Symbol(123)
    // let anotherId = Symbol(123)

    // console.log([id, anotherId]);  //[ Symbol(123), Symbol(123) ]

    // console.log(id === anotherId);  //false, return value is not same

// Reference Type || Non-Primitive DataTypes

// 1. Arrays
// 2. Objects
// 3. Functions

const heros = ['shaktiman', 'aryaman', 'junior Ji']   //object typeOf

let myObj = {
    name: "Ayush Raj Gupta",                            //object typeOf
    age : 26,
}

//function(){}    //defination of functions


const myFunction = function(){
    console.log("helloWorld");                         // function  but call as object function
}

//to get the datatype of any variable

console.log(typeof nullValue)  //object


