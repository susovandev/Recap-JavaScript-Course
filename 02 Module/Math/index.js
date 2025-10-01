console.log(Math.PI)

console.log(Math.abs(-4))

console.log(Math.round(2.3))
console.log(Math.round(2.5))
console.log(Math.ceil(2.3))
console.log(Math.floor(2.3))
console.log(Math.trunc(20.89)) // Remove Decimal Part

console.log(Math.max(4, 5, 10, 1))
console.log(Math.min(4, 5, 10, 1))

console.log(Math.pow(2, 4))
console.log(Math.sqrt(36))



/**
 * Random Number
 * Default Range (0 >= value < 1)
 * Math.floor(Math.random() * totalNumbersOfOutcome) + shift
 */

// - Generate a random number between 0 - 9
console.log(Math.floor(Math.random() * 10))

// - Generate 6 digit random OTP
// 100000 - 999999
console.log(Math.floor(Math.random() * (999999 - 100000) + 1) + 100000)