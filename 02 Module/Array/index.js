const myExampleArray = [101, "Susovan", true, { email: 'susovan@gmail.com' }, [506, 499]]

// length property
console.log(myExampleArray.length)

// Access an element
console.log(myExampleArray[0])
console.log(myExampleArray[4][1])

// Modify an element
myExampleArray[1] = "Dipanwita Maji"
console.log(myExampleArray)


// Iterate array elements
for (let i = 0; i < myExampleArray.length; i++) {
    console.log(myExampleArray[i])
}

for (const element of myExampleArray) {
    console.log(element)
}
