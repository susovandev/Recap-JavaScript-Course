/**
 * Reverse a String
 * Input : JavaScript 
 * Output: tpircSavaJ
 */

const reverseString = (str) => {
    return str.split("").reverse().join("")
}

console.log(reverseString("JavaScript"))


const strReverse = (str) => {
    let res=""
    for (let i = str.length - 1; i >= 0; i--) {
        res+=str[i]
    }
    return res
}

console.log(strReverse("TypeScript"))