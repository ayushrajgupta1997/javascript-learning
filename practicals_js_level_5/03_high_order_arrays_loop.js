// Array specific loop// for of loop

//in js arrays are like

/*
["", "", ""]   ||   [{},{},{}]
*/
 const arr = [1,2,3,4,5]

for (const num of arr) {
        console.log(num);
}

const greeting = "Hello Ayush"

for (const greet of greeting) {
    console.log(`Each char of greetings ${greet}`);  
}

// maps   -> they are know for unique values

const map = new Map()  //it will return obj

map.set("In" , "India")
map.set("BAN" , "Bangladesh")
map.set("Fr" , "France")
map.set("In" , "India")  //it will not repeate this

console.log(map)

// to add loop

for (const [key, value] of map) {

    console.log(key , '-:' ,value)
}


//if object is there

const myObject = {
    firstName: "Ayush",
    middleName: "Raj",
    lastName: "Gupta"
}

for (const key of myObject) {
    console.log(key)     //will not work
}


//for in loop // can we take work for in loop in arrays?
for (const key in myObject) {
    console.log(key) 
        console.log(myObject[key]) 

}

// //check for arrays

for (const key in arr) {

    console.log(arr[key])  //will not work in map
}