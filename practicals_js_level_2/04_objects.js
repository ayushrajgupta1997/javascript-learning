//Object for constructor

// const VigorUser = new Object()  //singleton object

const VigorUserAnother = {} //Non singleton object

//to give the values in objects

VigorUserAnother.id = "123vigor" //unique number
VigorUserAnother.email = "raj@vigor.com"
VigorUserAnother.isLoggedIn = false

console.log([VigorUserAnother]) //[ {}, {} ] both treated as object  [ { id: '123vigor', email: 'raj@vigor.com', isLoggedIn: false } ]

//to declare objects inside objects

const vigorUser = {
    email: "vigor@vigor.com",
    fullName: {
        userFullName: {
            firstName: "Ayush",
            lastname: "Gupta"
        }
    }
}

// console.log(vigorUser.fullName)  //{ userFullName: { firstName: 'Ayush', lastname: 'Gupta' } }

// console.log(vigorUser.fullName.userFullName.lastname)  //Gupta


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign(obj1 , obj2) //to merge

// const obj3 = Object.assign({}, obj1 , obj2) //to merge but good practice

const obj3 = {...obj1 , ...obj2}//to merge spread operator

console.log(obj3)

// when data is coming like this, mostly in apis

const users = [
        {

        },
        {
            id: 1,
            name: "ayush"
        },
        {

        }
]

console.log(users[1].name) //ayush

//to get keys of objects

console.log(Object.keys(VigorUserAnother));  //op is in array  , [ 'id', 'email', 'isLoggedIn' ]
console.log(Object.values(VigorUserAnother));  //op is in array  , [ '123vigor', 'raj@vigor.com', false ]
console.log(Object.entries(VigorUserAnother)); // first value of every arra is key then value  [ 'id', '123vigor' ],[ 'email', 'raj@vigor.com' ],[ 'isLoggedIn', false ]
console.log(VigorUserAnother.hasOwnProperty('isLoggedIn')); //true can ask question also