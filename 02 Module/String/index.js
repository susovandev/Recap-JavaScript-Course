// | Create | - String is not mutable
const str1 = "JavaScript"
const str2 = 'JavaScript'
const courseName = 'Frontend Development'
const str3 = `JavaScript - ${courseName}` // Template Literal
console.log(str3)

// | Access |
console.log(str2[4])


// | String Methods |

// 1. toUpperCase()
console.log(str1.toUpperCase())

// 2. toLowerCase()
console.log(str1.toLowerCase())

// 3. indexOf() - Return first occurrence | -1
console.log(str1.indexOf("k"))

// 4. indexOf() - Return first occurrence | -1
console.log(str1.lastIndexOf("t"))

// 4. includes() - Return true | false
console.log(str1.includes("t"))

// 5. slice() - Negative indexes are supported
console.log(str1.slice(2, 5))
console.log(str1.slice(-5, -2))

// 6. substring() - Negative indexes are not supported
console.log(str1.substring(2, 5))

// 7. concat()
console.log(str1.concat(str1, str2, str3))

// 8. replace() | replaceAll()
console.log(str1.replace("JavaScript", "TypeScript"))
const replaceIt = "JavaScript JavaScript JavaScript JavaScript"
console.log(replaceIt.replaceAll("JavaScript", "TypeScript"))

// 9. trim()
const trimStr = "   JavaScript     "
console.log(trimStr.trim())

// 10. split() - String to Array
console.log(str1.split("")) // Letter 
console.log(typeof str1.split("")) // But type is Object
console.log(replaceIt.split(" ")) // Word

