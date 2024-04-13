/*
NOTES: 

When we convert following

"99" = 99  //converted
"99abc" = Nan
true  = 1  // false = 0

*/

let score = 99;

let scoreString = "99"

console.log(typeof score);  // Worked! 
console.log(typeof (score));  //defining as a method. Worked, , BOTH ARE CORRECT

/*
O/P = 
number  
number

NOTE; both are in lowercase
*/

console.log(typeof scoreString); //string


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let valueInNumber = Number(scoreString);
console.log(typeof valueInNumber);  //number


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// If we uses like this 
mixValue = "99abc"  //Not a pure Number
valueInNumberForMixValue = Number(mixValue);

console.log(typeof valueInNumberForMixValue);
//So print valueInNumberForMixValue and look what is getting in O/P

console.log(valueInNumberForMixValue);  //getting NaN => Not A Number   //SpecialType

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//If we use null then

let nullValue = null
valueInNumberForNullValue = Number(nullValue);

console.log(typeof valueInNumberForNullValue);  //number
console.log( valueInNumberForNullValue);        //0


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//If we use undefined then

let undefineValue = undefined
valueInNumberForUndefineValue = Number(undefineValue);

console.log(typeof valueInNumberForUndefineValue);  //number
console.log( valueInNumberForUndefineValue);        //NaN

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//If we use boolean then

let booleanValue = true
valueInNumberForbooleanValue = Number(booleanValue);

console.log(typeof valueInNumberForbooleanValue);  //number
console.log( valueInNumberForbooleanValue);        // 1  //it should either 0(false) or 1(true)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//If we use string which can be convert then

let stringValue = "Ayush Raj Gupta"
valueInNumberForStringValue = Number(stringValue);

console.log(typeof valueInNumberForStringValue);  //number
console.log( valueInNumberForStringValue);        // NaN

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//If we want to convert into Boolean

let egValue = 1

let valueInBooleanForEgValue = Boolean(egValue)

console.log(typeof valueInBooleanForEgValue);  //boolean
console.log( valueInBooleanForEgValue);   //true

/*
NOTES
0 => false
1 => true
2 => true  //for testing purpose

"" => false
"Ayush Raj Gupta" => true
*/
