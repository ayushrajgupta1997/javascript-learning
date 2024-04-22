// Write a code to display which character is coming how many times in a given string ?

// let string = "A quich brown fox jump over the lazy dog"

// function charCount(str) {
//     const updatedObj = {}
//     for (let i = 0; i < str.length; i++){
//         const element = str[i];
        
//         if(updatedObj[element]){
//             updatedObj[element]++;
//         }else {
//             updatedObj[element] = 1
//         }
//     }
//     console.log(updatedObj)
// }

// charCount(string)

function charCount(str) {
    const charMap = new Map();

    for (const char of str) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    console.log(Object.fromEntries(charMap));
}

const string = "A quich brown fox jump over the lazy dog";
charCount(string);
