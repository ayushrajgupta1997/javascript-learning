// every time code runs in codition based not run full code
//if statement

/*
if(true){} //if condition is true the only inside code will get executed
*/


// NESTED if condition

// const balance = 1000

// if(balance < 500){
//     console.log('balance is less then 500');
// }else if(balance <750){
//     console.log('balance is less then 750');     //simple nested condition
// }else if(balance < 900){
//     console.log('balance is less then 900');
// }else {
//     console.log('balance is less then 1200');
// }


//to check multiple condition

const userIsLogged = true
const userHaveDebitCard = true
const userHaveBalance = false
const userLoggedWithEmail = true

if(userIsLogged && userHaveDebitCard){
    console.log("allowed to shopping");   //when all contions are true then only executed 
}


if(userIsLogged && userHaveDebitCard && userHaveBalance) {
    console.log("allowed to shopping");  
}else {
    console.log("Not allowed to shopping"); //this will print
}


if(userHaveBalance || userLoggedWithEmail) {
    console.log("allowed to shopping");          //this will print, because OR operator is there
}else {
    console.log("Not allowed to shopping");
}

