function capitalize(string) {
    if (string === "") throw new Error("capitalize: empty string passed");
    if (typeof string !== "string") throw new Error("capitalize: non-string input");
    return string.charAt(0).toUpperCase() + string.substring(1);
}

function reverseString(string) {
    
}

let calculator = {};

function caesarCipher(string) {
    
}

function analyzeArray(array) {
    
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
}