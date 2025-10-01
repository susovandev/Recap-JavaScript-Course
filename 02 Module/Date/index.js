const now = new Date() // Generate a new Date
console.log(now) // Show UTC time
console.log(now.toString()) // Show (India Standard Time)
console.log(now.toLocaleString())


console.log(now.getDay())
console.log(now.getDate())
console.log(now.getMonth()) // 0 based indexing
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getMilliseconds())


console.log(Date.now()) // Return result in Milliseconds