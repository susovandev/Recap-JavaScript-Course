let a = 303
console.log(a)

let b = 303.040321
console.log(b)

console.log(b.toFixed(2)) // Return type String
console.log(b.toPrecision(4)) // Return type String


//  Initialize number using Number Object
const number = new Number(209)
const number2 = new Number(209)
console.log(number)
console.log(typeof number)
console.log(number === number2) // Both pointed to the different memory locations