// Important for React Nodejs


const big4 = ["E&Y" ,"kpmg" ,"pwc"] 
const mnc = ["Accenture", "Wipro", "Infy"]

// Not correct way to merge
 
// big4.push(mnc)  //it push mnc array in big4, will not merge

// console.log(big4) // so array takes mnc array as element so here mnc array is single elemnt in big4 
// console.log(big4.length) //4


// correct way to merge

const allOrg = big4.concat(mnc)  

// console.log(allOrg) //[ 'E&Y', 'kpmg', 'pwc', 'Accenture', 'Wipro', 'Infy' ]

// OR you can Spread Operator results are same

const allOrgBySpread = [...big4, ...mnc]

console.log(allOrgBySpread) //[ 'E&Y', 'kpmg', 'pwc', 'Accenture', 'Wipro', 'Infy' ]
