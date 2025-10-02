const toggleLetterCase = (str) => {
    return str.split("").map((letter) => letter.toUpperCase() === letter ? letter.toLowerCase() : letter.toUpperCase()).join("")
}
