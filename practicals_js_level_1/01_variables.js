const accountId = 18181;
const accountName = "Ayush Raj Gupta";

let accountEmail = "rajayush97@gmail.com";
var accountPassword = "123456789";

accountCity = "Noida";  //NOT GOOD WAY..!! But It will work.

let accountState;  //It will give undefined.

// If we change the CONST accoundID then it will not
// accountId = 2;    NOT ALLOWED

/*
Perfer NOT to use VAR due to block Scope and Functional Scope
*/
accountPassword = "21212121";

// It can be use, Good!!
accountEmail = "rjra@gmail.com";

// ONE way to use console.log
console.log(accountState);
 
// Another Way to put console.
console.table([accountId, accountEmail, accountName, accountEmail, accountPassword, accountCity])