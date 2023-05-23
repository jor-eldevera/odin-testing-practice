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

function caesarCipher(string, shift) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i);
        if ((code >= 65 && code <= 89) || (code >= 97 && code <= 121)) {
            newString += String.fromCharCode(string.charCodeAt(i) + shift);
        } else if (code === 90) {
            newString += "A";
        } else if (code === 122) {
            newString += "a";
        } else {
            newString += string.charAt(i);
        }
    }
    return newString;
}

function analyzeArray(array) {
    if (!Array.isArray(array)) return null;
    if (array[0] === undefined) return null;

    array = processArray(array);
    let average = findAverage(array);
    let min = findMin(array);
    let max = findMax(array);
    let length = array.length;

    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}

function processArray(array) {
    for (let i = 0; i < array.length; i++) {
        // if (isNaN(parseInt(array[i]))) throw new Error("processArray: non number passed in array");
        array[i] = parseInt(array[i]);
    }
    return array.filter(item => !isNaN(item));
}

function findAverage(array) {
    let total = 0;
    array.forEach(num => {
        total += num;
    });
    return total / array.length;
}

function findMin(array) {
    let min = array[0];
    array.forEach(num => {
        if (num < min) {
            min = num;
        }
    });
    return min;
}

function findMax(array) {
    let max = 0;
    array.forEach(num => {
        if (num > max) {
            max = num;
        }
    });
    return max;
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
}