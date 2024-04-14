/*falsy values  

false, 0, -0, BigInt 0n, "", null , undefined, NaN
//else all are consider as truthy value
*/

const userEmailFalse = ""

if(userEmailFalse){
    console.log('Got');
}else {
    console.log('No');
}

const userEmailTruth = []
                                // if there 0 inside string then that will consider as truty value
if(userEmailTruth){
    console.log('Got');
}else {
    console.log('No');
}


// to check array in real code

if(userEmailTruth.length === 0){
    console.log("Array is Empty")
}


// to check object in real code

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){  //Object.keys(emptyObject) this will return as array
    console.log("object is Empty")
}


// Nullish coalescing operator ??: null undefine

let val1;
val1 = 5 ?? 10  //console.log(val1);   //5
val1 = null ?? 10  //console.log(val1);   //10
val1 = undefined ?? 15  //console.log(val1);   //15
val1 = null ?? 20 ?? 30   ////console.log(val1);   //20
  
console.log(val1);   


//Ternary Operator

//condition ? true : false

const vigorPresent = false

vigorPresent  === true  ? console.log("vigor is working") : console.log("Vigor is sleeping") 

