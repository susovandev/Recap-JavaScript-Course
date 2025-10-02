// Capitalize the first character of Each Word

const capitalizeFirstCharacter = (str) => {
    return str.split(" ").map(word => word.split("").at(0).toUpperCase() + word.slice(1))
}

console.log(capitalizeFirstCharacter("hello Bhai amar"))