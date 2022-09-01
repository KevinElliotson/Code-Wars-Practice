//String Methods

// Note that unless otherwise stated, these methods are NON DESTRUCTIVE. Meaning they create a new string with the method provided. So if applying these methods to
// a variable, it will not change the value stored in the variable, it just returns a new string with the changes applies
'string'.toUpperCase() == 'STRING'
'STRING'.toLowerCase() == 'string'
'string'.indexOf('i') == 3
'recede'.lastIndexOf('e') == 5 // gives the index of the last occurance of the string outlined in the argument. So the last "e" in the string, is in index 5
'string'.charAt(2) == 'r'
'string'.charCodeAt(0) == 115 // returns the UTF-16 code of the character, "s" = 115
String.fromCharCode(116) == "t" // returns the character that corispondes with the UTF-16 code given, 116 = "t"
'string'.replace('i', 'o') == 'strong'
'string'.length == 6
'string'.repeat(2) == 'stringstring'
'    string  '.trim() == 'string'
'string'.slice(2, 4) == 'ri' // argument is the starting point and ending point of the indexes we target. ending point stops BEFORE that index
// slice(start, end)
'string'.endsWith('ing') == true
let num = 1234
num.toString() == '1234'
/*
Note that
1234.toString()
results in an error. Needs to be applied to a variable. It's also technically an object method, but can be used on strings and arrays
*/
parseInt('1234') == 1234
parseInt('1010', 2) == 10
/* Second arguement in parseInt indicates the "radix" (https://en.wikipedia.org/wiki/Radix), meaning how many digits to total a number. Binary being 2 (1 and 0)
and the decimal system (our standard number) being 9 (1-9)
*/
let num = 12
num.toString(2) == '1100' // binary 12
// Like with parseInt, making the argument (2) converts to binary


'string'.split('') == ['s', 't', 'r', 'i', 'n', 'g']
'string'.match(/[ri]/) == ['r', 'i'] // used to match characters in a string with regex, returns an array with the matches


// Array Methods (Note that many array methods also work on strings)

const array = ['a', 'b', 'c']
array[1] = "2" == ['a', '2', 'c'] // changes the value of the targetted index
array.push('d') == ['a', 'b', 'c', 'd'] // adds to the end of array (.length -1)
array.pop() == ['a', 'b'] // removes from the end of array (.length -1) and returns the value removed
array.unshift('alphabet is') == ['alphabet is', 'a', 'b', 'c'] // adds to the beginning of array (index 0)
array.shift() == ['b', 'c'] // removes from the beginning of array (index 0) and returns the value removed
array.length == 3
array.indexOf('c') == 2
array.join('') == 'abc' // creates a string with values of the array. Values are seperated by what is in the argument
array.join('-') == 'a-b-c'
array.concat(['d', 'e', 'f']) == ['a', 'b', 'c', 'd', 'e', 'f'] // NON DESTRUCTIVE. Merges two arrays
array.includes('a') == true
array.includes('a', 1) == false // asks if "a" is stored at index 1 of array
array.reverse() == ['c', 'b', 'a']
const longArray = ['a', 'b', 'c', 'd', 'e', 'f']
longArray.slice(1) == ['b', 'c', 'd', 'e', 'f'] // NON DESTRUCTIVE. Returns the values starting from the index given in the argument
longArray.slice(1, 4) == ['b', 'c', 'd'] // NON DESTRUCTIVE. Returns the values starting from the index given in the first argument and ends BEFORE the second argument
// slice(start, end)
longArray.splice(1, 0, 'hi') == ['a', 'hi', 'b', 'c', 'd', 'e', 'f'] // inserts "hi" to index 1, does not delete anything (as per the 0)
longArray.splice(1, 1, 'hi') == ['a', 'hi', 'c', 'd', 'e', 'f'] // inserts "hi" to index 1 and deletes 1 index (so essentially replaces "b" with "hi")
longArray.splice(1, 3, 'hi') == ['a', 'hi', 'e', 'f'] // inserts "hi" to index 1 and deletes 3 indexes after (so essentially replaces "b" "c" "d" with "hi")
longArray.splice(1, 1) == ['a', 'c', 'd', 'e', 'f'] // removes "b" (index 1) and replaces it with nothing. So it removed an element and shifts every other value forward
// splice(start, deleteCount, item1, item2, itemN)
const numArray = [1, 6, 2, 4, 50]
numArray.sort() == [1, 2, 4, 50, 6] // sorts the array into ascending order, but only checks the first number, like the 5 in 50. (note that it converts them to strings then compares their utf-16 number)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
numArray.toString() == '1,6,2,4,50'

// Array Methods that include functions
// When araay metheds with functions are used, each value stored in the array is used at the argument for the function

const wordArray = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
wordArray.filter(word => word.length > 6) == ['exuberant', 'destruction', 'present'] // creates new array that only includes the values that pass the function
//Syntax: filter((element, index, array) => { /* ... */ } )

let numArray = [1, 6, 2, 4, 50]
numArray.map(arrayValue => arrayValue * arrayValue) == [1, 36, 4, 16, 2500] // applies the function to each value of the array and creates a new array with the new values
numArray.map((element, index) => element + index) == [1, 7, 4, 7, 54] // first argument is the value being passed by the array, the second argument is the index of that element
//Syntax: map((element, index, array) => { /* ... */ })

numArray.sort((a, b) => a - b) == [1, 2, 4, 6, 50] // .sort can pass a function, a - b is a good way to sort numbers in ascending order without the issue of only checking the first digit
let totalValues = 0
wordArray.forEach(value => totalValues++) == totalValues == 6 // runs totalValues++ for every value of wordArrays, which it has 6 values
// essentially just short-form for a for loop. Below does the same
for (let i = 0; i < wordArray.length; i++) {
  totalValues++
}

numArray.every(value => value >= 5) == false // checks if every element in the array passes the given function, so is equal to or great then 5, returns booleon

let reducer = (totalValue, currentValue) => totalValue + currentValue
numArray.reduce(reducer)
// totalValue starts as the first value of the array (in this case 1) and becomes the value returned when the function is performed
// so loop 1: totalValue = 1, currentValue = 6, 1 + 6 = 7. totalValue = 7 on the next loop
// loop 2: totalValue = 7, currentValue = 2, 7 + 2 = 9. totalValue = 9 on the next loop. Loops until all values in the array have gone throught the function
// so 1 + 6 + 2 + 4 + 50
numArray.reduce(reducer, 5)
// works the same way, but totalValue starts as 5 and currentValue starts as the first value in the array
// so 5 + 1 + 6 + 2 + 4 + 50

let numArray2 = [1, 2, 4, 6, 50, 10, 11]
numArray2.find(value => value > 10) // returns 50
//.find returns the first value that passes the given function. So 50 is the first value that passes the function and it is returned. Thje 10, 11 values are
//next evaluated



//Objects
const pairs = {
  'A': 'Z',
  'B': 'Y',
  'C': 'X',
  'D': ['W', 'w'], // array inside of an object
  'EtoG': {'E':'V','F':'U','G':'T'}// object within an object
};
// syntax to create a new object. "A", "B" and "C" are the keys with "Z", "Y" and "X" being the values stored in those keys
// together, they are call "Key-Value Pairs". ("A":"Z" = Key-Value Pair)

// Accessing data in an object
pairs.A == "Z"
pairs["A"] == "Z"
pairs["a"] == undefined
Object.keys(pairs) == ['A', 'B', 'C','D','EtoG']
// creates an array with all of the keys within the pairs object
Object.values(pairs) == ['Z', 'Y', 'X',['W', 'w'],{'E': 'V', 'F': 'U', 'G':'T'}]
// creates an array with all of the values within the pairs object
Object.values(pairs['D']) == ['W', 'w']
// creates an array with all of the values within the pairs object under key "A"
pairs.EtoG.E == 'V' b
pairs['EtoG']['E'] == 'V'
pairs.EtoG.E == 'V'
pairs['D'][0] == 'W'
pairs.D[0] == 'W'

pairs['H'] = 'S' // adds a new key-value pair to the object. Syntax: object["key"] = "value";


// Set()



// Math

//Operators
5 + 5 == 10
5 - 5 == 0
5 < 10 == true
5 > 10 == false
5 == 5 == true
5 === 5 == true
5 == '5' == true
5 === '5' == false
5 * 5 == 25
5 / 5 == 1
7 % 5 == 2 // % gives the remainder or modulo . So 7 / 5 = 1 with the remainder of 2
5 ** 5 == 3125 // exponent. 5 to the power of 5. So 5 x 5 x 5 x 5 x 5 = 3125

//Methods
Math.floor(15.9) == 15
Math.ceil(15.1) == 16
Math.round(15.4) == 15 // rounds the decimal to the nearest int. 5 rounds up
Math.max(...arr) // gives the highest value out of the values within an array
Math.min(...arr) // gives the lowest value out of the values within an array
100.79999.toFixed(2) // returns: "100.80". the argument of toFixed is how many decimal places you want and it converts it to a string.
-100.79999.toFixed(2) // returns: -100.8, the negative numbers cause the decimal to only go 1 place and it will not become a string.




