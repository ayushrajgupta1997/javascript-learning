//for each loop 

const codingLanguages = ["RN", "JS", "NodeJs", "C"]

//by callback function

codingLanguages.forEach( function  (item) {   //callback fn
    console.log(item);
} )

// by arrow function

codingLanguages.forEach( (Key) => {
    console.log(Key);                   //arrow function
} )


// by function

function Languages (item) {
    console.log(item);
}                                        //by function

codingLanguages.forEach(Languages)


//for each not only get index it has index , array also

codingLanguages.forEach( (key , index, array) => {
        console.log(index, array, key)
} )


// [{}, {}, {}]   it is also use many time in for each  mostly used in database or api

const coding = [
    {
        languageName: "JS",
        languageFile: ".js"
    },
    {
        languageName: "Node",
        languageFile: ".js"
    },
    {
        languageName: "java",
        languageFile: ".java"
    }
]

coding.forEach( (key, index) => {
    console.log(key.languageName);
} )