// Write a JavaScript function to check if a given number is prime. 

let number = 80

function isPrime(num) { 
    if(num === 1 || num < 1){
        console.log('number is either 1 or Negative');
    }else {
            for (let i = 2; i < num; i++) {
                if(num % i === 0) {
                   return console.log(`${num} is not prime`);
                   break;
                }else{
                   return console.log(`${num} is prime`);
                }
            }
    }
       
}

isPrime(number)