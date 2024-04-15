// if we want to set for each in variable

const coding = ["JS","Node","Java","cpp","python"]

const valuesCoding = coding.forEach( (item) => {
    console.log(item);

    return item
} )

console.log(valuesCoding)   //undefine


//lets filter values bigger then 4

const values = [1,2,3,4,5,6,7,8,9,10]

const biggerValuesExplicit = values.filter( (num) => {  //when u open scope {} then u have to use return mandate
    return    num > 4       //in this type we have to use return due to explicit function || or we can use implicit function
} )

console.log(biggerValuesExplicit);

// //implicit

const biggerValuesImplicit = values.filter( (num) => num > 4 )
console.log(biggerValuesImplicit);

//it can be done done by for each loop

const newNums = []

  values.forEach( (nums) => {
    if (nums > 4) {
        newNums.push(nums)
    }
 } )

 console.log(newNums)

// lets take an example of books for practice when api call

const books = [
    {title: "The God of Small Things", author: "Arundhati Roy", genre: "Fiction", Publish: 1997},
    {title: "Midnight's Children", author: "Salman Rushdie", genre: "Historical Fiction, Magical Realism", Publish: 1997},
    {title: "The White Tiger", author: "Aravind Adiga", genre: "Fiction", Publish: 1997},
    {title: "A Suitable Boy", author: "Vikram Seth", genre: "Fiction", Publish: 1993},
    {title: "Train to Pakistan", author: "Khushwant Singh", genre: "Historical Fiction", Publish: 1956},
    {title: "The Guide", author: "R.K. Narayan", genre: "Fiction", Publish: 1958},
    {title: "Interpreter of Maladies", author: "Jhumpa Lahiri", genre: "Short Stories", Publish: 1999},
    {title: "The Palace of Illusions", author: "Chitra Banerjee Divakaruni", genre: "Historical Fiction, Mythology", Publish: 2008},
    {title: "The Namesake", author: "Jhumpa Lahiri", genre: "Fiction", Publish: 1987},
    {title: "The Inheritance of Loss", author: "Kiran Desai", genre: "Fiction", Publish: 2006}
]

//by filter method
const booksOfSameAuthor = books.filter( (item) => item.author === "Jhumpa Lahiri" )
console.log(booksOfSameAuthor)

const booksOfSameGenre = books.filter( (item) => item.genre === "Fiction" )
console.log(booksOfSameGenre)

const bookkPublishAfterYear = books.filter( (item) => {return item.Publish > 1993} )
 console.log(bookkPublishAfterYear)

//when we multiple condition to check

const booksOfMultipleCondition = books.filter( (item) => {
    item.genre === "Fiction" &&  item.Publish >=1997
})
console.log(booksOfMultipleCondition)

// by for each loop

let booksOfSamePublishYear = []

 books.forEach ( (item) => {
    if (item.Publish === 1997) {
        // console.log(item);
        booksOfSamePublishYear.push(item)
    }
} )

console.log(booksOfSamePublishYear);

