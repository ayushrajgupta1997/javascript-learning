

const myDate = new Date()

console.log(myDate); //2024-04-13T06:57:11.642Z  //but not readeable
console.log(typeof(myDate));  //object

//so lets convert into string
console.log(myDate.toString()); //much better //Sat Apr 13 2024 06:58:47 GMT+0000 (Coordinated Universal Time) //

console.log(myDate.toDateString()); //Sat Apr 13 2024
console.log(myDate.toISOString());  //2024-04-13T07:00:54.939Z
console.log(myDate.toJSON());  //2024-04-13T07:01:10.881Z
console.log(myDate.toLocaleString());  //4/13/2024, 7:01:23 AM
console.log(myDate.toLocaleDateString());  // 4/13/2024

//+++++++++++++++++++++++++  to create date ++++++++++++++++++++++++++++++++++++++++++

const createdDate = new Date(2024 , 0, 23)
console.log(createdDate)  //2024-01-23T00:00:00.000Z
console.log(createdDate.toDateString())  //Tue Jan 23 2024

const createdDateWithTime = new Date(2024 , 0, 23, 5, 3)
console.log(createdDateWithTime.toLocaleString())   //1/23/2024, 5:03:00 AM

const dedicatedFormat = new Date("2024-01-23") 
console.log(dedicatedFormat) //2024-01-23T00:00:00.000Z
console.log(dedicatedFormat.toLocaleString()) //1/23/2024, 12:00:00 AM
console.log(dedicatedFormat.getTime()) //1/23/2024, 12:00:00 AM // to get in miliseconds


//+++++++++++++++++++++++++  timeStamp ++++++++++++++++++++++++++++++++++++++++++

let myTampstamp = Date.now()
console.log(myTampstamp)  //1712992572353  // get in mili seconds

// to calculate seconds
console.log( Date.now() / 1000) //1712992836.49  
//its get in decimal value

console.log(Math.floor(Date.now() / 1000)) //1712992882


//+++++++++++++++++++++++++  some Other methods ++++++++++++++++++++++++++++++++++++++++++

let newDate = new Date()
console.log(newDate.getMonth()); //3 its correct because in js month start from 0
console.log(newDate.getMonth() + 1); //4   for end user
console.log(newDate.getFullYear()); //2024

//+++++++++++++++++++++++++  usefull methods ++++++++++++++++++++++++++++++++++++++++++

console.log(newDate.toLocaleString('default', {
        weekday: 'long'   //saturday
    // 'short'           //Sat
    // 'narrow'          //s
}))

