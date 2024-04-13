//its declare like one is literal(Not make Singleton) and one is constructor(makes singleton)
//Object Literals (singleton concepts)

//how to make object
Object.create  //through constructor method
const mySym = Symbol("key1")

const JsUsers = {
    name: 'Ayush',
    "full Name": 'Ayush Raj Gupta',
    [mySym]: mySym,  //declare symbol in objects, Important for interview
    age: '26',
    location: 'Guwahati',
    email: 'rajayush97@gmail.com',
    logged: false,
    lastLogged: ["Mon", "Tues", "Sat"]
}

//To access objects

console.log(JsUsers.name); //this is also correct way but there is one more way
console.log(JsUsers["email"]);  //Why you have to know this way -> because you can not access full Name by 1st way
// console.log(JsUsers.full Name); //You can't acces like this(this is only useCase)
console.log(JsUsers["full Name"]); //this will work
console.log(JsUsers[mySym]); //this will work  , imp for Interview

//to overright valuew of keys in object

JsUsers.email = "raj@gmail.com"
console.log(JsUsers["email"])
// Object.freeze(JsUsers) // to freeze the object values
// to freeze values in object
JsUsers.email = "ayush@gmail.com"
console.log(JsUsers)


//you can pass function also in objects

JsUsers.greetings = function(){
    console.log("Hello Js users");
}

JsUsers.greetingsTwo = function(){
    console.log(`Hello Js users ${this.name}`);  //string interpolaion
}

console.log(JsUsers.greetings()); //[Function (anonymous)] ,function is not get execute, but fn returns reference
console.log(JsUsers.greetingsTwo());
