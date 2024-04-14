//when you have a value, and u have to check with multiple statements  use switch case
/*
switch (key) {   //what is key, a value which we have to check, like month
    case value:
        
        break;   //syntax

    default:
        break;
}
*/

//lets take an example of month 

let month = 3   //so in this case you have to check by switch, beacus with check 12 time if condition is not good 

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("Mar")    //value matches here
        break;                  //suppose after matches value break is commented, then also it will execute all case except default
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("Sep")
        break;
    case 10:
        console.log("Oct")
        break;
    case 11:
        console.log("Nov")
        break;
    case 12:
        console.log("Dec")
        break;

    default:
        console.log("Default case match")
        break;
}



