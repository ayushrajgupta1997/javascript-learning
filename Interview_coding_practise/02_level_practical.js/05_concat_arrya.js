

const arr1 = [11,33,44,22,55]
const arr2 = [66,77,99,88]

const mergeArr = []

function toMerge(arr1, arr2) {
  return [...arr1, ...arr2].sort((a,b)=> a-b)
}

console.log(toMerge(arr1, arr2))