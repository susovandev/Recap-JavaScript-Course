const myExampleArray = [101, "Susovan", true, { email: 'susovan@gmail.com' }, [506, 499]]

// Push()
myExampleArray.push('JavaScript')

// unshift()
myExampleArray.unshift('TypeScript')
// console.log(myExampleArray)

// pop()
myExampleArray.pop()

// shift()
myExampleArray.shift()
// console.log(myExampleArray)

// Slice() - Return the result into an new array not mutate the actual array
console.log(myExampleArray.slice(2))

// Slice() - Mutate the actual array (indexNumber, numberOfElement removes, Insert Data, Insert Data)
console.log(myExampleArray.splice(1, 3, "Susovan", "Dipanwita"))
// console.log(myExampleArray)

// concat - Return the result into an new array
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [7, 8, 9]
// console.log(arr1.concat(arr2, arr3))

// Spread Operator
console.log([...arr1, ...arr2, ...arr3])

// toString() - Array to String
const names = ["Suosovan", "Dipanwita"]
console.log(names.toString())

//indexOf() - If present return first index number otherwise return -1
console.log(myExampleArray.indexOf(101))

// sort() - By default (Lexicographical sorting)
const sortedArray = ['Hu', 'ahi', 'Mui', "Arnab"]
console.log(sortedArray.sort((a, b) => b - a))

// Flat 
const nestedArray = [1, 2, 3, [4, 5, 6, 7, 8], [9, 10, 11, 12, 13]]
console.log(nestedArray.flat(Infinity))