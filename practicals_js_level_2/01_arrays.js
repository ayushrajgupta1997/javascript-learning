// Simple arrays

const arr = [0 , 1 , 2 , 3 , 4 , true, "Ayush"] //inside the square brackets we know as elements, elements are like something, int, string, boolean

// in js arrays are resizable
// when you copy of an operation it creates shallow copies rather then deep copies

const myArr = [0 , 1 , 2 , 3 , 4 , 5] 
const heros = ["Name1" ,"Name2" ,"Name3"]
// console.log(heros);

// other way to delcare array

const myArr1 = new Array(1, 2, 3, 4, 5)

// Methods push pop -> remove last element

heros.push("Name4")
console.log(heros);

heros.pop()
console.log(heros);

console.log(myArr)
myArr.unshift(9, 10)

myArr.shift(9,10)
console.log(myArr, "shift")
console.log(myArr.includes(6));
console.log(myArr.indexOf(3));

console.log(myArr);


const newArray = myArr.join()  //Its bind and simply return string value

console.log(myArr);
console.log(newArray);   //String value of array

//Important method, Slice  splice


console.log("A" , myArr);

const slice = myArr.slice(1, 3) //it takes value from index 1 to 2 ignores end passed value
console.log("slice" , slice)

const splice = myArr.splice(1,4) //it remove all elemts of index value which is outside of range

console.log(splice)