//reduce is basically used for adding the number and gives total, mostly used in shoppingcart

const mynumbers = [1,2,3]

//by normal way

const totalOfMyNumbers = mynumbers.reduce( function (accumulator , currentValue) {
    return accumulator + currentValue
}, 0 )  // o represents initial value -> accumulator

console.log(totalOfMyNumbers)

//by arrow function

const totalOfMyNumbersByArrow = mynumbers.reduce( (acc , currval) => acc + currval ,0 )
console.log(totalOfMyNumbersByArrow);

//to do for large datasets, usefull of api calling

const shoppingCart = [
    {
        courseName : "Javascript",
        price: 2999.99
    },
    {
        courseName: "Java",
        price: 4999.99
    },
    {
        courseName: "Mobile Development",
        price: 8999.99
    },
    {
        courseName: "Data Science",
        price: 14999.99
    }

]

const totalAmmountToPay = shoppingCart.reduce( ( acc, item) => acc +  item.price, 0)

const roundedOfAmmount = Math.ceil(totalAmmountToPay)

console.log(totalAmmountToPay);
console.log(roundedOfAmmount);