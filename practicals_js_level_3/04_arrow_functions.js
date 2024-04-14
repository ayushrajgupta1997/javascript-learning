// This keyword and arrow functions.
// this will tells for current context


const users = {
    username : "Ayush",
    price: "9999",        //code inside { known as scope} 

    welocomeMessage: function(){
            console.log(`${this.username}, welcome`)       //and we are accessing username so we can use this to refer that username is of current context
    }                                                      //this will work in objects not in functions
}

users.welocomeMessage()

console.log(this)  //it will give empty object


// +++++++++++++++++++++++++++++++++++++++++  Arrow Functions    +++++++++++++++++++++++++++++++++++++++++

const arrowFunctionNormal = function (){
    let username = "Ayush"  //normal function
    console.log(this.username) 
}

const arrowFunction =  () => {
    let username = "Ayush"  //Arrow function
    console.log(this.username)  //undefined
    console.log(this)   // gives {}
}


//Pure Arrow functions

// Syntax    () => {}

const addTwo = (num1, num2) => {
    return num1 + num2
}                                //Basic arrow function

console.log(addTwo(2 ,3))


//Implicit return

const addTwoN = (num1, num2) =>  num1 + num2    //Implicit arrow function, not use {}
                         

console.log(addTwoN(2 ,3))