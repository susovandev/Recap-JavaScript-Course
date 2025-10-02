const countPrefixMatch = (words, pref) => {
    const result = words.filter((word) => word.startsWith(pref))
    return result.length
}
const result = countPrefixMatch(['java', 'javaScript', 'python', 'javaDoc', 'c'], 'java')

console.log(result)
