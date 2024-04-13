// In javascript we can use string as enclosed with " "  OR '', whatever you want to use.

/* 
SIMPLE Example of string
*/

const firstName = "Ayush "
const middlename = "Raj "
const lastname = "Gupta"  

let fullName = firstName + middlename + lastname   //concatenation of string

console.log("Hello " + fullName);  // Hello Ayush Raj Gupta    *NOTE but not good syntax you can use ``(backticks)

//+++++++++++++++++++++++++++++++++++++++++++++++++++ Use of Backtics(``) ++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(`Hello My Name is ${fullName}`);  //Hello My Name is Ayush Raj Gupta



//+++++++++++++++++++++++++++++++++++++++++++++++++++ Access key of strings(``) ++++++++++++++++++++++++++++++++++++++++++++++++++++

const role = new String('Developer');  //Another way to declare string {AS OBject}

/*
And there are many methods available for Strings
*/

console.log(`And I am ${role}`);  //And I am Developer
console.log(`length ${role.length}`);  //9
console.log(`value is ${role[0]}`);  //value is D    {Accessing the Key Value}

console.log(role.toUpperCase()); //DEVELOPER

//To see which charcter at which position , {Then pass the keyIndex no. to see}
console.log(role.charAt(5)); // o

//To see specific charcter at what position , {Then pass the indexof to see}

console.log(role.indexOf('e')); // 1


//+++++++++++++++++++++++++++++++++++++++++++++++++++ some other methods of strings(``) ++++++++++++++++++++++++++++++++++++++++++++++++++++

let someOtherMethods = new String('Ayush')
//use of substring

console.log(someOtherMethods.substring(0, 4)); //Ayus  {NOTE, it will give output for  0 - 3, (0,1,2,3), substring not count end range }


//use of slice it will also print in reverse way see eg.

console.log(someOtherMethods.slice(-5, 1));


//use of trim see eg.

let newString = "      Ayush          "

console.log(newString); //_______Ayush________          

console.log(newString.trim()); // Ayush


//use of replace see eg.

//"https://www.ayush.com/ayush raj"

/*
if there is space between url browser will convert it into %20 according URLN coding
*/

let url = "https://www.ayush.com/ayush%20raj"

console.log(url.replace('%20', '-')) //https://www.ayush.com/ayush-raj

console.log(url.includes('ayush')) //true




