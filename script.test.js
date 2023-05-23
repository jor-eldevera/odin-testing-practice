let { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require("./script.js")

/*
 * capitalize
 */

it("capitalize: capitalize a string", () => {
    expect(capitalize("test")).toBe("Test");
});

it("capitalize: capitalize one letter", () => {
    expect(capitalize("t")).toBe("T");
});

it("capitalize: capitalize a string with multiple words", () => {
    expect(capitalize("testing capitalize")).toBe("Testing capitalize");
});

it("capitalize: throw error on empty string", () => {
    expect(() => capitalize("")).toThrow();
});

it("capitalize: throw error on non string input", () => {
    expect(() => capitalize(4)).toThrow();
});

/*
 * reverseString
 */

it("reverseString: reverse one word", () => {
    expect(reverseString("lorem")).toBe("merol");
});

it("reverseString: reverse one character", () => {
    expect(reverseString("m")).toBe("m");
});

it("reverseString: reverse multiple words", () => {
    expect(reverseString("lorem ipsum")).toBe("muspi merol");
});

it("reverseString: throw error on empty string", () => {
    expect(() => reverseString("")).toThrow();
});

it("reverseString: throw error on non string input", () => {
    expect(() => reverseString(4)).toThrow();
});

/*
 * calculator
 */

// Add
it("calculator: add two numbers", () => {
    expect(calculator.add(4, 4)).toBe(8);
});

it("calculator: add two decimals", () => {
    expect(calculator.add(4.7, 5.5)).toBeCloseTo(10.2);
});

it("calculator: add two string numbers", () => {
    expect(calculator.add("2", "9")).toBe(11);
});

it("calculator: add with one parameter", () => {
    expect(() => calculator.add(4)).toThrow();
});

it("calculator: add with no parameters", () => {
    expect(() => calculator.add()).toThrow();
});

// Subtract
it("calculator: subtract two numbers", () => {
    expect(calculator.subtract(8, 3)).toBe(5);
});

test("calculator: subtract two decimals", () => {
    expect(calculator.subtract(4.7, 5.5)).toBeCloseTo(-0.8);
});

test("calculator: subtract two string numbers", () => {
    expect(calculator.subtract("9", "2")).toBe(7);
});

test("calculator: subtract with one parameter", () => {
    expect(() => calculator.subtract(4)).toThrow();
});

test("calculator: subtract with no parameters", () => {
    expect(() => calculator.subtract()).toThrow();
});

// Multiply
test("calculator: multiply two numbers", () => {
    expect(calculator.add(3, 6)).toBe(18);
});

test("calculator: multiply two decimals", () => {
    expect(calculator.multiply(4.7, 5.5)).toBeCloseTo(25.85);
});

test("calculator: multiply two string numbers", () => {
    expect(calculator.multiply("2", "9")).toBe(18);
});

test("calculator: multiply with one parameter", () => {
    expect(() => calculator.multiply(4)).toThrow();
});

test("calculator: multiply with no parameters", () => {
    expect(() => calculator.multiply()).toThrow();
});

// Divide
test("calculator: divide two numbers", () => {
    expect(calculator.divide(10, 5)).toBeCloseTo(2);
});

test("calculator: divide two numbers, resulting in decimal", () => {
    expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
});

test("calculator: divide two decimals", () => {
    expect(calculator.divide(4.7, 5.5)).toBeCloseTo(0.8545);
});

test("calculator: divide two string numbers", () => {
    expect(calculator.divide("2", "9")).toBeCloseTo(0.2222);
});

test("calculator: divide with one parameter", () => {
    expect(() => calculator.divide(4)).toThrow();
});

test("calculator: add with no parameters", () => {
    expect(() => calculator.divide()).toThrow();
});

/*
 * caesarCiper
 */

test("caesarCipher: one word", () => {
    expect(caesarCipher("abcd", 1)).toBe("bcde");
});

test("caesarCipher: shift factor above 1", () => {
    expect(caesarCipher("abcd", 3)).toBe("cdef");
});

test("caesarCipher: multiple words", () => {
    expect(caesarCipher("abcd efgh", 1)).toBe("bcde fghi");
});

test("caesarCipher: with capitals", () => {
    expect(caesarCipher("AbCd", 1)).toBe("BcDe");
});

test("caesarCipher: wrap z to a", () => {
    expect(caesarCipher("z", 1)).toBe("a");
});

test("caesarCipher: wrap capital Z to A", () => {
    expect(caesarCipher("Z", 1)).toBe("A");
});

test("caesarCipher: keeping punctuation", () => {
    expect(caesarCipher("Test.", 1)).toBe("Uftu.");
});

/*
 * analyzeArray
 */

const array = [1, 3, 5, 2, 4, 6];

test("analyzeArray: average", () => {
    expect(analyzeArray(array).average).toBe(3.5);
});

test("analyzeArray: min", () => {
    expect(analyzeArray(array).min).toBe(1);
});

test("analyzeArray: max", () => {
    expect(analyzeArray(array).max).toBe(6);
});

test("analyzeArray: length", () => {
    expect(analyzeArray(array).length).toBe(6);
});

test("analyzeArray: pass in empty array", () => {
    expect(analyzeArray([])).toBeNull();
});

test("analyzeArray: 1 element array average", () => {
    expect(analyzeArray([1]).average).toBe(1);
});

test("analyzeArray: 1 element array min", () => {
    expect(analyzeArray([1]).min).toBe(1);
});

test("analyzeArray: 1 element array max", () => {
    expect(analyzeArray([1]).max).toBe(1);
});

test("analyzeArray: 1 element array length", () => {
    expect(analyzeArray([1]).length).toBe(1);
});

test("analyzeArray: array with non-number in it", () => {
    expect(() => analyzeArray([4, "test", 5])).toThrow();
});

test("analyzeArray: average of array with number-string in it", () => {
    expect(analyzeArray([4, "7", 5]).average).toBeCloseTo(5.33);
});

test("analyzeArray: min of array with number-string in it", () => {
    expect(analyzeArray([4, "7", 5]).min).toBe(4);
});

test("analyzeArray: max of array with number-string in it", () => {
    expect(analyzeArray([4, "7", 5]).max).toBe(7);
});

test("analyzeArray: length of array with number-string in it", () => {
    expect(analyzeArray([4, "7", 5]).length).toBe(3);
});

test("analyzeArray: non-array input", () => {
    expect(() => analyzeArray(4)).toThrow();
});