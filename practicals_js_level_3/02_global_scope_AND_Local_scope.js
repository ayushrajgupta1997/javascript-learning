//story starts from three keywords -> let var const
//scope is knows {}

let a = 2
const b = 10    //globalscope
var c = 55 

console.log([a, b, c])   //you can easily log these values

//but when you declare in scope

if(true){
    let a = 2
    const b = 10    //block scope
    var c = 55
}
console.log([a, b, c])  //now you cannot access value in console 

// // but if you use value c it will print
console.log(c)   //so this is the reason, developers avoid var

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//so we remove Var

let globalScope= 300   //global scope

if(true){
    let a = 2
    const b = 10    //block scope

    console.log('Inner: ' ,a);
}
console.log([globalScope])  //now you cannot access value in console 