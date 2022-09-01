/*
Anagram Detection

Description:
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
Note: anagrams are case insensitive
Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"garden" is an anagram of "danger"
"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"
*/

// Done with filtering. Filtering two different arrays the same way will arrange the values so that the same values should be at the start and end
function isAnagram(test, original) {
    if (test.length !== original.length) return false;
    let t = test.toLowerCase().split('').sort().join('');
    let o = original.toLowerCase().split('').sort().join('');
    return t === o
};
isAnagram("Buckethead", "DeathCubeK") // should equal true
let t = "Buckethead".toLowerCase().split('').sort()
// would give us an array with each character set to lowercase of "Buckethead" sorted alphabetically like so:
t = ['a', 'b', 'c', 'd', 'e', 'e', 'h', 'k', 't', 'u']
// .join('') that to give "abcdeehktu"
let o = original.toLowerCase().split('').sort()
// would give us an array with each character set to lowercase of "DeathCubeK" sorted alphabetically like so:
o = ['a', 'b', 'c', 'd', 'e', 'e', 'h', 'k', 't', 'u']
// .join('') that to give "abcdeehktu"
t = "abcdeehktu", o = "abcdeehktu"
// return t === o; returns true if the two values are equal or false if they are not.
isAnagram("Bucktethead", "DeathsCubeK") // should return false
// in this case, they aren't anagrams:
t = "abcdeehkttu", o = "abcdeehkstu" // they are not equal, therefore it returns false


// solving for anagrams using objects
// this solution is obviously significantly less compact, but it is faster and gives us some good logic of how to solve other anagram-like problems with objects
function isAnagram(test, original) {
    if (test.length !== original.length) return false;
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

    for (let key in testObj) {
        if (testObj[key] !== originalObj[key]) { return false }
    }
    return true
}
isAnagram("Buckethead", "DeathCubeK") // should return true

// We change all the text to lowerCase to avoid case sensitivity issues and create two empty objects what we will be filling

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

//at this point, our objects should look like this:
let testObj = {
    "b": 1,
    "u": 1,
    "c": 1,
    "k": 1,
    "e": 2,
    "t": 1,
    "h": 1,
    "a": 1,
    "d": 1
}

let originalObj = {
    "d": 1,
    "e": 2,
    "a": 1,
    "t": 1,
    "h": 1,
    "c": 1,
    "u": 1,
    "b": 1,
    "k": 1
}

//The final loop:
for (let key in testObj) {
    if (testObj[key] !== originalObj[key]) { return false }
}
// loops through all of the keys of an object. "key" is equal to the current key that is being targetted on the loop, so on loop 1, key = "b"
// we compare the values of each object using the same key for both. So on loop 1, we check:
if (testObj["b"] !== originalObj["b"]) { return false }
// so testObj["b"] returns the value under the "b" key in the testObj object. In this case, that value = 1
// originalObj["b"] returns the value under the "b" key in the originalObj object. In this case, that value = 1
// both values = 1, therefore we continue with the loop, if both values were not equal, then our function returns false and the loop has no reason to continue
// the values should only not be equal if the two words are not anagrams
// the last line of our function, return true, is only reached if the entire for...in loop is performed without activating the if statement. The only time
// the function should get to that point is if the two words are anagrams

// Note:
if (test.length !== original.length) return false;
// is a good thing to start both solutions with, as it checks to see if the two words have an equal amount of characters, which is a requirement for them to be anagrams.
// if they aren't the same length, then the function doesn't need to continue with anything else
// the function still performs properly without it in both examples, but most of the function doesn't even need to be performed if they can't pass this test.

/*
Group Anagrams

Your job is to group the words in anagrams.
What is an anagram ?
star and tsar are anagram of each other because you can rearrange the letters for star to obtain tsar.
Example
A typical test could be :
// input
groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);
// output
[
  ["tsar", "star", "tars"],
  ["rat", "tar"],
  ["cheese"]
]
*/

// Solution using .sort and an object

function groupAnagrams(words) {
    const anagrams = {}
    for (let word of words) {
        let sortedWord = word.split('').sort().join('')
        if (sortedWord in anagrams) {
            anagrams[sortedWord].push(word)
        } else {
            anagrams[sortedWord] = [word]
        }
    }
    return Object.values(anagrams)
}
groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"])
// creates an empty object named anagrams
// loops through each of the values within the "words" array
// takes each value of the "words" array and turns them into an array of characters, sorts the characters alpheticalls, then joins them back into a string, saves it under "sortedWord"
// so on loop 1
words = ["tsar", "rat", "tar", "star", "tars", "cheese"]
word = "tsar"
sortedWord = "arst"
// The if statement then check if "arst" is currently a key in our obj, 
// if it isn't (via the else statement), we set the value under the "arst" key to an array with word ("tsar") as a value
// if it is, then we .push(word) into our array that's under the "arst" key.
// we then move onto the next value in words, which is "rat"
// after looping through all the values, our object will look like this:
anagrams = {
    "arst": ["tsar", "star", "tars"],
    "art": ["rat", "tar"],
    "ceeehs": ["cheese"]
}
Object.values(anagrams) // creates an array of all of the values within the "anagrams" object, so:
Object.values(anagrams) ==  [["tsar", "star", "tars"]["rat", "tar"]["cheese"]]
// which is the format that the solution requests


/*
Where my anagrams at?

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
'abba' & 'baab' == true
'abba' & 'bbaa' == true
'abba' & 'abbba' == false
'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. 
You should return an array of all the anagrams or an empty array if there are none. For example:
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams(word, words) {
    let sortedWord = word.split('').sort().join('')
    return words.filter(v => v.split('').sort().join('') === sortedWord)
}