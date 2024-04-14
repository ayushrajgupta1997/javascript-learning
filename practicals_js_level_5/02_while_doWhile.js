let index = 1

while (index <= 10) {
    console.log(`Value of index is: ${index}`)
    index = index + 2
}

//to do array with while loop

const big4 = ["E&Y", "pwc", "KPMG"]

let arr = 0

while (arr < big4.length) {
        console.log(`Org is: ${big4[arr]}`)

        arr++
}



// usecase of do while loop

let score = 1

// if score is 6
// let score = 6 //it will print because, first printing then condition is checking

do {
    console.log(`Score is ${score}`);
    score++
} while (score <=5);