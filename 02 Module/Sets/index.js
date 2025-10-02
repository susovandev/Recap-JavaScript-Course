// Set contains only unique values
const arr = [1,2,4,6, 6, 6, 98]
const mySet = new Set(arr)

console.log(mySet.size)
console.log(mySet.has(3))

mySet.add(5)
mySet.delete(2)

// mySet.clear()

console.log(mySet.keys())
console.log(mySet.values())
console.log(mySet.entries())