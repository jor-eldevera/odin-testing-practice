function capitalize(string) {
    if (string === "") throw new Error("capitalize: empty string passed");
    if (typeof string !== "string") throw new Error("capitalize: non-string input");
    return string.charAt(0).toUpperCase() + string.substring(1);
}

function reverseString(string) {
    if (string === "") throw new Error("capitalize: empty string passed");
    if (typeof string !== "string") throw new Error("capitalize: non-string input");

    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string.charAt(i);
    }

    return newString;
}

let calculator = {
    add: function (x, y) {
        if (x === undefined || y === undefined) throw new Error("add: lacking parameters");
        return parseFloat(x) + parseFloat(y);
    },
    subtract: function (x, y) {
        if (x === undefined || y === undefined) throw new Error("add: lacking parameters");
        return parseFloat(x) - parseFloat(y);
    },
    multiply: function (x, y) {
        if (x === undefined || y === undefined) throw new Error("add: lacking parameters");
        return parseFloat(x) * parseFloat(y);
    },
    divide: function (x, y) {
        if (x === undefined || y === undefined) throw new Error("add: lacking parameters");
        return parseFloat(x) / parseFloat(y);
    },
};

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