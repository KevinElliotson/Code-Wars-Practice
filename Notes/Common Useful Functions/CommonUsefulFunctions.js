// Check if a number is a whole number

num % 1 != 0
// or
num === Math.floor(num)

// Sort numbers in ascending/descending order, without the issue of .sort() only checking the first digits
numArray = [1, 20, 2, 7, 4, 40]
numArray.sort() = [1, 2, 20, 40, 400, 7]
numArray.sort((a, b) => a - b) == [1, 2, 4, 7, 20, 40]
// .sort can pass a function, a - b is a good way to sort numbers in ascending order without the issue of only checking the first digit
numArray.sort((a, b) => b - a) == [40, 20, 7, 4, 2, 1]

function upperCaseFirstLetter(string) {
    return string.toLowerCase().split(' ').map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(' ');
}
// good way to uppcase the first letter of each word of a string
// .map(v => v.charAt(0).toUpperCase() + v.slice(1); is the bulk of the function. It takes the first letter of a value, uppercases that letter, then 
// adds the rest of the value behind that first letter, which we applied .toLowerCase() to earlier

m = Math.floor(m / 10)
// good way to remove the last digit of a number. Dividing the m by 10 make the last digit a decimal number (150 / 10 = 15.0) and Math.floor removes that decimal number(15)
m = m % 10
// A good way to save the last digit of a number.

// a way to check if there are multiples of the same character in an array
a.map(function (v, i, a) {
    return a.indexOf(v) == a.lastIndexOf(v) ? '(' : ')'
})
// indexOf returns the index of the FIRST character in the array that matches the character specified in the argument
// lastIndexOf does the same, but it returns that LAST character in the array that matches the argument
// these two things will only return the same index if there are NOT multiples of the same character in the array

// using Regex to check if their are multiples of the same character in a string
function isIsogram(str) {
    return !/(.).*\1/.test(str);
}
// returns true if there are no multiples of the same character, returns false if there are multiples
!/(\d).*\1/.test(str); // for only checking digits
!/(\w).*\1/.test(str); // for only checking word characters ([a-z], [A-Z], [0-9] and _)
!/([a-z]).*\1/i.test(str); // for only checking letters, i makes it case-insensitive

str.match(/\b[a-z]/gi) // matches the first letter of every word in the string


function removeFromArry(a, b) {
    const arr = []

    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) < 0) { arr.push(a[i]) } // if the .indexOf() will return -1, if the array that it is attached to does not contain the value in the argument 
    }
    return arr
}
let a = [1, 2, 3]
let b = [1, 2]
removeFromArry(a, b)
// this function is a good demonstration of a way to use an array to filter out certain values of another
// in this example, [3] is returned

function array_diff(a, b) {
    return a.filter(x => b.indexOf(x) == -1);
}
// does the same as above, but with .filter() instead

//time formatting:
// 00:00:00 = hours:minutes:seconds
let hours = 2
    ("0" + hours).slice(-2) === "02"
// ("0" + hours) === "02", so slice would start from -2 (which is 0) and go to the end of the string, so 02
hours = 11
    ("0" + hours).slice(-2) === "11"
// ("0" + hours) === "011", so slice would start from -2 (which is 1) and go to the end of the string, so 11

// Anagram type problems. If two arrays of numbers/letters/values all have the same values
// Done with filtering. Filtering two different arrays the same way will arrange the values so that the same values should be at the start and end
let test = "garden"
let original = "danger"
function isAnagram(test, original) {
    let t = test.toLowerCase().split('').sort().join('');
    let o = original.toLowerCase().split('').sort().join('');
    return (t == o) ? true : false;
};
// sorting "garden" and "danger" would result in two arrays that equal ["a", "d", "e", "g", "n", "r"]. You then compare the arrays to see if they are equal.

// solving for anagrams using objects
function isAnagram(test, original) {
    if (test.length !== original.length) return false

    test = test.toLowerCase()
    original = original.toLowerCase()
    let testObj = {}
    let originalObj = {}

    for (let i = 0; i < test.length; i++) {
        testObj[test[i]] = testObj[test[i]] + 1 || 1
    }

    for (let i = 0; i < original.length; i++) {
        originalObj[original[i]] = originalObj[original[i]] + 1 || 1
    }

    for (let value in testObj) {
        if (testObj[value] !== originalObj[value]) { return false }
    }
    return true
}
isAnagram("garden", "danger")
// if (test.length !== original.length) return false; checks to see if both words have the same length, as anangrams can't have different lengths
// We then change all the text to lowerCase to avoid case sensitivity issues and create two empty objects what we will be filling

// first for loop:
// fills the testObj with keys equal to the values of the characters in "test", we also add a +1 value to each key
// so on the first loop. testObj[test[i]] == testObj[test[0]] == testObj["g"] == undefined (as there is no key named "g" in our object).
// so testObj[test[i]] = testObj[test[i]] + 1 || 1; will increase the value under the "g" key by one OR (||) will set it equal to 1
//another way to write this loop is:
for (let i = 0; i < original.length; i++) {
    if (originalObj[original[i]] == undefined) {
        originalObj[original[i]] = 1
    } else if (originalObj[original[i]] !== undefined) {
        originalObj[original[i]] += 1
    }
}
// so If there is currently no key for the current character we are pulling from "test", then we create one and set it's value to 1
// if there is a key for the current character we are pulling fron "test", then we add 1 to the value

//second for loop does the same thing as the first, but with the second word "original" and adds the the "originalObj"

//
let testObj = {
    "g": 1,
    "a": 1,
    "r": 1,
    "d": 1,
    "e": 1,
    "n": 1
}

let originalObj = {
    "d": 1,
    "a": 1,
    "n": 1,
    "g": 1,
    "e": 1,
    "r": 1
}

// checking for multiples of the same word. In this example, we remove consecutive duplicate words
//"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta" --> "alpha beta gamma delta alpha beta gamma delta"
function removeConsecutiveDuplicates(s) {
    return s.split(" ").filter((v, i, arr) => v != arr[i - 1]).join(" ");
}

// using a regex capture group inside a method
arr[i] = arr[i].replace(/([0-9]+)/, v => String.fromCharCode(v))
// the below example does not work. $1 can be used to callback a capture group you used in your regex (in this example ([0-9]+)), but problem occur when that
// callback is used as an argument in a method like the below example. Using a function will grab that match and replace it with what's outlined in the function and
// the match can be used as a variable
arr[i] = arr[i].replace(/([0-9]+)/, String.fromCharCode('$1'))
