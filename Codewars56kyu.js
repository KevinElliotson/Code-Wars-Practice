/*
Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.

Thinking: solution(25)
25 / 3 = 8.33... Decimal shouldn't matter, there are 8 numbers that the 3 should add to the sum. 3,6,9,12,15,18,21,24
25 / 5 = 5, 5 numbers that the 5 should add to the sum. 5,10,!15,20, !25. So actually only 3 numbers, as 25 is n and 15 is repeated
Math.floor(number / 3) = numTimes
3 * 2 numTims



Test:*/
solution(25)
solution(0)

// my solution: Passed

function solution(number) {
    let sum = new Set([0])
    let i = 0
    while (i < (number - 3)) {
        i += 3
        sum.add(i)
    }
    i = 0
    while (i < (number - 5)) {
        i += 5
        sum.add(i)
    }
    let reducer = (totalValue, currentValue) => totalValue + currentValue
    return Array.from(sum).reduce(reducer)
}
// my solution commented
function solution(number) {
    let sum = new Set([0]) // using a Set for sum means that we cannot have multiples of the same value added, like 15 if number = 25. Having the 0 fixes an issue
    // where number = 0 results in an error, as reduce() can't "Reduce of empty array with no initial value"
    let i = 0 // sets the initial value for i, which we will change in our loops and use to add to our Set
    while (i < (number - 3)) { // we use number-3 because if we just compared i to number, it will loop 1 more time than we want because of the order of which i is changed
        i += 3
        sum.add(i) //adds the current value of i to our set, so 3, 6, 9, 12, 15, etc.
    }
    i = 0 // resets i back to 0, to re-used in our next loop.
    while (i < (number - 5)) {
        i += 5
        sum.add(i) // adds the current value of i to our set, so 5, 10. 15 is added, then discarded by the set, as it already contains a value of 15 in it
    }
    let reducer = (totalValue, currentValue) => totalValue + currentValue // sets the reducer function that we call back to with .reduce()
    return Array.from(sum).reduce(reducer) // turns our set into an array so we can use .reduce on it. Out reducer function just adds up all the values in our Set.
    // the int value we get from .reduce is returned
}


// Best solution

function solution(number) {
    var sum = 0;

    for (var i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum;
}
// i will become every number between 1 and number and if it divides by 3 OR 5 evenly, then i is added to our sum. On numbers like i = 15, it only gets added once
// because if the left size is true, then the script doesn't bother with the right side.
// Comments suggest setting the initial value of i to 3 instead of 1, to save a couple loops

function solution(number) {
    let n3 = Math.floor(--number / 3)
    let n5 = Math.floor(number / 5)
    let n15 = Math.floor(number / 15)

    return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15 + 1)) / 2;
}
//arithmatic progression?

/*
Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

Thinking: .sort() the array then .reduce the array values so that each value is subtracted by the value next to it. Should only be left with the odd number
*/
//Test:
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])

// my solution(s): failed

function findOdd(A) {
    let sortedArr = A.sort()
    let filteredArr = sortedArr.filter((element, index, array) => element - array[index + 1]) !== 0
    return filteredArr
}

function findOdd(A) {
    let sortedArr = A.sort()
    let filteredArr = sortedArr.map((element, index, array) => element - array[index + 1])
    return filteredArr
}

function findOdd(A) {
    return A.sort().filter((element, index, array) => element != element - array[index + 1])
}

// solution using loops and if/else statements (slightly cleaned up)

function findOdd(arr) {
    let result = 0
    let num = 0;
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            num++;
        } else {
            num++;
            if (num % 2 != 0) {
                result = arr[i];
                break;
            }
        }
    }
    return result;
}
// arr is sorted, so that the equal values within the array are directly next to each other
// first if statement in the loop checks to see if i and the value directly next to it are equal, if they are, then 1 is added to num
// they will only not be equal when we switch from one value in the sorted array to another
// for example [1===1===1===1!===2]
// if they aren't equal, 1 is still added to num via the else statement, but the 2nd if statemate is also activated
// this checks to see if the current value of num is an odd number by via modulo.
// if the remainder !== 0, then it is an odd number and the current value that arr[i] is targetting will get saved under "result", which should be the number we need
// we then break; out of the for loop we are in and result is returned
// if the remainder ==0, then nothing happens and we go back to the start of our for loop

// "best solution". Uses XOR operator (^)
function findOdd(xs) {
    xs.reduce((a, b) => a ^ b);
}
/* some info on the XOR operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
https://www.youtube.com/watch?v=O9VELMn3jIY&ab_channel=ComputerScience
https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions
*/

// solution similar to my line of thinking:

function findOdd(arr) {
    return arr.find((item) => arr.filter(el => el == item).length % 2)
}


/*
Create Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

Thinking: Simple template literals with slice?
*/
//test
let phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
createPhoneNumber(phoneNumber)

// my solution: Passed

function createPhoneNumber(numbers) {
    let newString = numbers.join('')
    return `(${newString.slice(0, 3)}) ${newString.slice(3, 6)}-${newString.slice(6)}`
}

// "Best solution":

function createPhoneNumber(numbers) {
    let format = "(xxx) xxx-xxxx";

    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}
// sets a default setup for what we want our output to be with let format = "(xxx) xxx-xxxx";
// we loop through our numbers array and replace the first "x" in the string with the current value of numbers[i]
// because the "x" is replaced with each loop, on the next loop, the new "x" is replaced instead, with the current value of numbers[i]
// format is returned

// pretty much the same solution as above, but using regex to target the disired characters of the string

function createPhoneNumber(numbers) {
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
/*
/(...)(...)(.*)/
the first (...) targets the first 3 characters in the string and pair them together in the first capture group. The second one does the same with the next 3 characters
in the string and pairs them together in the second capture group
(.*) targets the remaining characters in the string and pairs them to a third capture group. Could also do (....) for the same effect in this example.
the second part of the .replace() expression calls back the capture groups to put them in the desired format. $1 calling back the first capture group, $2 the seconds and 
$3 the third.
desired format being:
(123) 456-7890
*/


/*
Counting Duplicates

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

Thinking:
Loop through the string comparing the values of each index. If two are equal, then num++,
toLowerCase() to fix the case sensitivity problem
*/
duplicateCount("Indivisibilities")

// my solution: Passed

function duplicateCount(text) {
    let newString = text.toLowerCase()
    const set = new Set([])
    for (let i = 0; i < newString.length; i++) {
        for (let j = i + 1; j < newString.length; j++) {
            if (newString[i] === newString[j]) {
                set.add(newString[i])
                break;
            }
        }
    }
    return Array.from(set).length
}
// my solution, commented
function duplicateCount(text) {
    let newString = text.toLowerCase() // lowercases all the letters in the string to fix any issue with case sensitivity
    const set = new Set([]) // creates a new empty Set
    for (let i = 0; i < newString.length; i++) { // loop through each value of newString
        for (let j = i + 1; j < newString.length; j++) { // loop through the remaining values of newString after i
            if (newString[i] === newString[j]) { // if i === any of the remaining values of newString
                set.add(newString[i]) // add the value that i is currently targetting to our Set. Note that only one of each value can be added to a Set, so although
                // this if statement may add multiples of the same value, for example the "i"s in "Indivisibilities", only one i will be in the Set at the end
                break; // we break out of the j loop, as there is not reason to check to rest of the values if a match has been made. Program runs fine with this not here
                // but it takes more time without it
            }
        }
    }
    return Array.from(set).length // converts our Set to an array so that we can use apply the .length of our Set 
}

// Best solution, with regex

function duplicateCount(text) {
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

// solution with .filter()

function duplicateCount(text) {
    return text.toLowerCase().split('').filter(function (val, i, arr) {
        return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}


/*
Who likes it?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names of people that like an item. It must return the display 
text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

Thinking:
Loop through each value of the array and if .length > 2
then 
*/
//Tests
likes(["Jacob", "Alex"]) // expects: "Jacob and Alex like this"
likes(["Alex", "Jacob", "Mark", "Max"]) // expects: "Alex, Jacob and 2 others like this"
likes(["Alex", "Jacob", undefined, "Max"]) //expects: Alex, Jacob and Max like this

// my solution: Passed

function likes(names) {
    let arr = names.filter(element => element != undefined)
    if (arr.length === 0) {
        return "no one likes this"
    } else if (arr.length === 1) {
        return `${arr[0]} likes this`
    } else if (arr.length === 2) {
        return `${arr[0]} and ${arr[1]} like this`
    } else if (arr.length === 3) {
        return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
    } else if (arr.length > 3) {
        let likes = arr.length - 2
        return `${arr[0]}, ${arr[1]} and ${likes} others like this`
    }
}

// Solution using a Switch statement
// note that this does not work properly for 
likes(["Alex", "Jacob", undefined, "Max"])
//but it still passes for some reason? Would just need to filter() names like we did in our solution to solve this

function likes(names) {
    switch (names.length) {
        case 0:
            return `no one likes this`;
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}



// cool solution using templates and Regex
// again, doesn't fix work the with undefined issue above. But adding and using our .filter() still solves the problem

function likes(names) {
    let templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name}, {name} and {name} like this',
        '{name}, {name} and {n} others like this'
    ];
    let idx = Math.min(names.length, 4); // Math.min() takes the lowest value, so if names.length>4, then it takes 4, otherwise it takes names.length
    //the length of names is used to target the oppropriate string template above

    return templates[idx].replace(/{name}|{n}/g, function (val) {
        return val === '{name}' ? names.shift() : names.length;
        // every {name} in the string is replaced with the value at names.shift(), which would take the first value in the names array and reaplces {name} with it
        // it does this for each {name} in the string. for {n}s, it used the value of names.length, which should be reduced by the number of {names} in the string
        //template
    });
}


/*
Your order, please

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

Thinking:
.sort() by the numbers, but we need to find the numbers
regex? /\d/ look ahead/behind? \w*\d\w*
.sort().match()?
*/

function order(words) {
    return words.sort(words.match(/\w*(\d)\w*/))
}

//best solution: What I was trying to figure out, but couldn't

function order(words) {

    return words.split(' ').sort(function (a, b) {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}
// seperates each word into an array with each word taking their own value
// sort the array by subracting a from b, which orders them in ascending order
// a = current word with the digit targetting via regex, b is the same
// after the sorting is performed, the array is rejoined into a string and returned

/*
Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:
['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)

Thinking:
array.indexOf("x")
*/
//test
findMissingLetter(['o', 'q', 'r', 's'])

// My Solution: passed

function findMissingLetter(array) {
    let start = array.toString().charAt(0)
    let arr = "abcdefghijklmnopqrstuvwxyz"
    if (array[0].toLowerCase() != array[0]) { arr = arr.toUpperCase() }
    let loop = 0
    for (let i = arr.indexOf(start); i < arr.length; i++) {
        if (array[loop] != arr[i]) {
            return arr[i]
        }
        loop++
    }
}

// best solution:

function findMissingLetter(array) {
    let first = array[0].charCodeAt(0)
    for (let i = 1; i < array.length; i++) {
        if (first + i !== array[i].charCodeAt(0)) {
            return String.fromCharCode(first + i)
        }
    }
    throw new Error("Invalid input")
}
// charCodeAt returns the UTF-16 code of the character at the index number specified. So let first = array[0].charCodeAt(0), saves the UTF code of the first
// letter of the array. And because capital and lower case letters have seperate UTF-16 codes, we don't need to worry about that aspect of the problem.
// We then loop throught the values of array while adding 1 to the UTF-16 code of the starting letter and comparing that code to the current value. If the
// codes are not equal, then we have found the missing letter
// returns: String.fromCharCode(first + i), which returns the character that belongs to the UTF-16 code implemented. So String.fromCharCode(65) = "A"

/*
Duplicate Encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/


// Best Solution:

function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split('')
        .map(function (v, i, a) {
            return a.indexOf(v) == a.lastIndexOf(v) ? '(' : ')'
        })
        .join('');
}




/*
Take a Ten Minute Walk

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, 
so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones 
-- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
 You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
 so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will,
of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array 
(that's not a walk, that's standing still!).

Thinking:
In order to return to the original place, you need an equal amount of counter direction pairs, so equal amount of N to S and equal amount of E to W
Object switch? every character we switch and the object needs to be the original to return true
*/

//tests:
isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']) // returns true
isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']) // returns false
isValidWalk(['w']) // returns false

// my solution: Passed

function isValidWalk(walk) {
    if (walk.length !== 10) return false
    let norths = 0,
        souths = 0,
        easts = 0,
        wests = 0
    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === "n") {
            norths++
        } else if (walk[i] === "s") {
            souths++
        } else if (walk[i] === "e") {
            easts++
        } else if (walk[i] === "w") {
            wests++
        }
    }
    return norths === souths && easts === wests
}

// best solution using switch statement. Essentially the same as my solution using switch instead of if and a minor tweak to the variables

function isValidWalk(walk) {
    let dx = 0
    let dy = 0
    let dt = walk.length

    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': dy--; break
            case 's': dy++; break
            case 'w': dx--; break
            case 'e': dx++; break
        }
    }

    return dt === 10 && dx === 0 && dy === 0
}
// Note, function should check that walk.length === 10 at the beginning, so it isn't doing a bunch of work just for it to all be irrelevant when the length is checked
// this function works with less variables than mine, as n/s and e/w share a variable and the total should lead to 0



/*
Replace With Alphabet Position

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

Thinking:
charCodeAt() - 96 should equal the value we need
*/

//tests:
alphabetPosition("The sunset sets at twelve o' clock.")
alphabetPosition("The narwhal bacons at midnight.")


// my solution: Passed

function alphabetPosition(text) {
    return text.toLowerCase().split('').map(v => v.charCodeAt() - 96).filter(v => v > 0 && v < 27).join(' ')
}
// .toLowerCase().split('') lowercases all the letters in the string then makes an array with each character taking their own index
// .map(v => v.charCodeAt() - 96) converts each character in the string to the UTF-16 code, then we subratract 96 from that number to make "a" = 1
// .filter(v => v > 0 && v < 27) then takes all of the ints between 1 and 26 and filters out everything else. Characters like " ", "_" and "{" will all be 
// greater than 26 or less than 1
// we join the numbers that weren't filtered out into a string with a space beween each value from the array

// best solution using regex:

function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map((c) => c.charCodeAt() - 64)
        .join(' ');
}
// pretty much the same solution as mine, except they use regex to filter out the non letter characters of the string before doing the charCodeAt conversion
// also don't need to .split(), because the .match already returns an array with the values we want

// solution using a for loop and no array

function alphabetPosition(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let code = text.toUpperCase().charCodeAt(i)
        if (code > 64 && code < 91) result += (code - 64) + " ";
    }

    return result.trim() // removes the extra " " at the end of the string
}

// another solution with regex, but isolates the letter characters by replacing non letter characters instead

function alphabetPosition(text) {
    return text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt() - 64).join(' ');
}

// solution that filters the string by comparing the letters to a alphabet variable

function alphabetPosition(text) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    return text.toLowerCase()
        .split('')
        .filter(t => letters.indexOf(t) > -1) // if t is not in the letters string (if it's a " ", "1" or "_" for example), indexOf will return -1
        .map(t => letters.indexOf(t) + 1) // takes each letter from the array returned from filter and uses it as the argument to target the index of letters
        // +1 is added to make up for the index count starting at 0
        .join(' ');
}

/*
Convert string to camel case

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

Thinking:
gotta check to see if the first letter is uppercase or lowercase
positive lookbehind? /(?<=-|_)[a-z]/gi 
matches the character after a - or _ without matching the actual - or _
*/

// Tests:
toCamelCase("The-Stealth-Warrior")// "TheStealthWarrior"
toCamelCase("the_stealth_warrior")// "theStealthWarrior"
toCamelCase('')// ''

// my solution: passed

function toCamelCase(str) {
    return str.replace(/(?<=-|_)[a-z]/gi, v => v.toUpperCase()).split(/[-||_]/g).join('')
}

/*
Split Strings

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace
the missing second character of the final pair with an underscore ('_').
Examples:
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']

Thinking:
.split('') each character into a seperate index of an array. Loop through the array adding i and i+1 to a new array
if ().length % 2 ===1) + "_"
*/
//Test:
solution("abcdef") // ouputs: ["ab", "cd", "ef"]
solution("abcdefg") // outputs: ["ab", "cd", "ef", "g_"]

// my solution: passed

function solution(str) {
    let arr = str.split('')
    let finishArr = []
    if (arr.length % 2 === 1) { arr.push('_') }
    for (let i = 0; i < arr.length; i = i + 2) {
        finishArr.push(arr[i] + arr[i + 1])
    }
    return finishArr
}

// my solution fixed
// removed the unnecassary str.split(''), as we didn't need it to be an array

function solution(str) {
    let finishArr = []
    if (str.length % 2 === 1) { str = str + '_' }
    for (let i = 0; i < str.length; i = i + 2) {
        finishArr.push(str[i] + str[i + 1])
    }
    return finishArr
}


// very simple Regex solution:
function solution(s) {
    return (s + "_").match(/.{2}/g) || []
}

/*
Count the smiley faces!

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). 
Order of the face (eyes, nose, mouth) elements will always be the same.
*/
//tests:
countSmileys([':)', ':(', ':D', ':O', ':;']) // returns 2
countSmileys([';]', ':[', ';*', ':$', ';-D'])// returns 1
countSmileys([]) // returns 0

function countSmileys(arr) {
    return arr.filter(v => v.match(/[;:][-~]{0,1}[)D]/g)).length
}

//best solution:
function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

// best solution with a loop:
function countSmileys(arr) {
    let smileys = 0;
    let validSmileys = [":D", ";D", ":)", ";)", ":-D", ";-D", ":-)", ";-)", ":~D", ";~D", ":~)", ";~)"];
    for (let i = 0; i < arr.length; i++) {
        if (validSmileys.includes(arr[i])) {
            smileys++;
        }
    }
    return smileys;
}

/*
Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.
Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
//tests:
solution('camelCasingTest') // returns: camel Casing Test
solution('camelCasing') // returns: camel Casing
solution('')

// my solution: passed

function solution(string) {
    string = string.split('')
    for (let i = 0; i < string.length; i++) {
        if (string[i].charCodeAt() > 64 && string[i].charCodeAt() < 91) {
            string.splice(i, 0, " ")
            i++
        }
    }
    return string.join('')
}

// best regex solution: 

function solution(string) {
    return (string.replace(/([A-Z])/g, ' $1'));
}
// replaces the matched capital letter with " "+ the matched capital letter, very easy solution

// .map solution
function solution(string) {
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) {
            el = ' ' + el
        }
        return el
    })
    return string.join('')
}

/*
Find the unique number

There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
The tests contain some very huge arrays, so think about performance.
This is the first kata in series:
*/
//tests:
findUniq([0, 0, 0.55, 0, 0])

//my solution: passed

function findUniq(arr) {
    arr = arr.sort()
    let lastNum = arr.length - 1
    if (arr[0] !== arr[1]) {
        return arr[0]
    } else if (arr[lastNum] !== arr[lastNum - 1]) {
        return arr[lastNum]
    }
}

// my solution, cleaned up a little

function findUniq(arr) {
    arr = arr.sort()
    let lastNum = arr.length - 1
    if (arr[0] !== arr[1]) {
        return arr[0]
    }
    return arr[lastNum]
}


/*
Valid Braces

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.
Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/
//tests
validBraces("([{}])") //true
validBraces("[({})](]") //false
validBraces("[(])") //false

// my solution: failed

function validBraces(braces) {
    braces = braces.split('')
    if (braces.filter(v => v === "(").length === braces.filter(v => v === ")").length && braces.filter(v => v === "[").length === braces.filter(v => v === "]").length && braces.filter(v => v === "{").length === braces.filter(v => v === "}").length) {
        return true
    }
    return false
}

// best solution:

function validBraces(braces) {
    const matches = { '(': ')', '{': '}', '[': ']' };
    const stack = [];
    let currentChar;

    for (var i = 0; i < braces.length; i++) {
        currentChar = braces[i];

        if (matches[currentChar]) { // opening braces
            stack.push(currentChar);
        } else { // closing braces
            if (currentChar !== matches[stack.pop()]) {
                return false;
            }
        }
    }

    return stack.length === 0; // any unclosed braces left?
}
validBraces("[({})](]")
// for loop loops through each value of braces and assigns the value to currentChar at the beginning of each loop
// so currentChar = "[". if (matches["["] returns a truthy value, then "[" gets pushed (added to end) into our empty array)
// So "[", "(" and "{" will all return truthy values, so they will all be pushed into our array
// "]", ")" and "}" return falsy (undefined) values, so the else statement is executed
// the if statement in the else statement .pop() (removes from the end) our array and uses it as a key for matches.
// So stack.pop()=== "{", matches["{"] == "}", which is our current value, so the if statement is not executed. The .pop() still removes the character though.
// eventually, currentChar == the second "]" in our argument and there is only "(" in our array
// matches["]"] returns undefined, so the else statement is executed
// currentChar == "]", matches["("] == ")". So currentChar !== matches["("], so we return false.
// after all the values of braces are looped through, we return the boolean received from stack.length === 0
// stack.length will only be anything but 0 if there is a "(", "[" or "{" that never got a closer on the other side. So like braces == "()["


/*
Highest Scoring Word

Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/
//tests:
high('man i need a taxi up to ubud') //"taxi"
high('bb d') //"bb"
high('what time are we climbing up the volcano') // "volcano"

// my solution: passed

function high(x) {
    let results = []
    let sum = 0
    x = x.split(' ')
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
            sum += x[i].charCodeAt(j) - 96
        }
        results.push(sum)
        sum = 0
    }
    return x[results.indexOf(Math.max(...results))]
}

// best solution, suprisingly similar to mine, but uses .map and .reduce to loop through the values rather than doing it manually with a for loop

function high(s) {
    let as = s.split(' ').map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}

/*
Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed 
(Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test"
 spinWords( "This is another test" )=> returns "This is rehtona test"
*/
//tests:
spinWords("Seriously this is the last one") //"ylsuoireS this is the last one")
spinWords("Welcome")// "emocleW"
spinWords("You are almost to the last test")// "You are tsomla to the last test"

// my solution: passed

function spinWords(string) {
    string = string.split(' ')
    for (let i = 0; i < string.length; i++) {
        if (string[i].length >= 5) {
            string[i] = string[i].split('').reverse().join('')
        }
    }
    return string.join(' ')
}

//best solution: similar to mine, but wth .map instead of a for loop

function spinWords(words) {
    return words.split(' ').map(word => (word.length > 4) ? word.split('').reverse().join('') : word).join(' ');
}
// .map(word => (word.length > 4) ? word.split('').reverse().join('') : word)
// essentially an if statement inside a .map(). if word.length > 4, return word.split(' ').reserve().join(''), else, just return word untouched

// regex soltution:

function spinWords(string) {
    return string.replace(/\w{5,}/g, function (w) { return w.split('').reverse().join('') })
}
// Targets any 5 letter word in the string and applies the w.split('').reverse().join('') to it.

/*
Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
//tests: 
arrayDiff([], [4, 5]) // []
arrayDiff([3, 4], [3])// [4]
arrayDiff([1, 8, 2], [])// [1,8,2]
arrayDiff([1, 2, 3], [1, 2])// [3]

function arrayDiff(a, b) {
    return b.map(v => a.filter(e => e != v))
}

// my solution: passed

function arrayDiff(a, b) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                a.splice(i, 1)
                i--
                break;
            }
        }
    }
    return a
}

// Best solution: 
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}
// loops through each value of the a array and checks to see if array b .includes the current value going through the filter, returns only if it doesn't include.
// So a = [1,2,3], b = [1, 2]
// first loop through the filter, e == a[0] == 1. b.includes[1] returns true, because of the !b, we are only keeping values that return false

// similar solution as above, but it converts b into a set and uses the Set version of .includes(), which is .has()
// this would be more optimal if b contains multiples of the same value, like b = [1,1,1,2,3,4,4] == Set[1,2,3,4]. So .filter() has less to loop through

function array_diff(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
}

// solution similar to mine, but without nested for loops
function array_diff(a, b) {
    const arr = []

    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) < 0) {
            arr.push(a[i]);
        }
    }
    return arr;
}

/*
Persistent Bugger.

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.
For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/
//tests:
persistence(999)// 4
persistence(4)// 0

// my solution: passed

function persistence(num) {
    let loops = 0
    let numArr = String(num).split('')

    while (numArr.join('') >= 10) {
        numArr = String(numArr.reduce((sum, v) => v * sum)).split('')
        loops++
    }
    return loops
}




// best solution, slightly corrected, very similar to mine:
function persistence(num) {
    let times = 0;
    num = num.toString();

    while (num.length > 1) {
        times++;
        num = num.split('').reduce((a, b) => a * b).toString();
    }
    return times;
}

/*
Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

// my solution: passed

function pigIt(str) {
    return str.replace(/([a-z])([a-z]*)/gi, '$2$1ay')
}

// best solution, anothe regex

function pigIt(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

// solution without regex

function pigIt(str) {
    var arrayWord = str.split(' ');
    return arrayWord.map(function (word) {
        var firstLetter = word.charAt(0);
        return word.slice(1) + firstLetter + 'ay';
    }).join(' ');
}


/*
Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

// my first solution: passed

function moveZeros(arr) {
    let copy = arr
    let x = 0
    for (let i = 0; i < arr.length; i++) {
        if (copy[i + x] === 0) {
            copy.push(copy.splice(i + x, 1)[0])
            x--
        }
    }
    return copy
}

// very similar solution to mine, but goes through the array starting from the end so we don't need to worry about the loop re-reading the 0s

var moveZeros = function (arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}

// most elegant solution:
var moveZeros = function (arr) {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0))
}
// filters all of the values in the array that aren't 0
// then filters all of the values in the array that are 0
// concats the arrays that have all the 0s onto the array that has all of the non 0s




/*
Human Readable Time

Description:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
    let time = seconds
    let tHours = 0
    let tMinutes = 0
    if (time >= 3600) {
        tHours = Math.floor(time / 3600)
        time = time - (tHours * 3600)
    }
    if (time >= 60) {
        tMinutes = Math.floor(time / 60)
        time = time - (tMinutes * 60)
    }
    return `${("0" + tHours).slice(-2)}:${("0" + tMinutes).slice(-2)}:${("0" + time).slice(-2)}`
}

/*
Weight for weight

My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published 
and each month he is the last on the list which means he is the heaviest.
I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight"
to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 
"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:
180 is before 90 since, having the same "weight" (9), it comes before as a string.
All numbers in the list are positive numbers and the list can be empty.
Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
For C: The result is freed.
*/

function orderWeight(strng) {
    return strng.split(' ').map(v => v.split('')).reduce((a, b) => parseInt(a) + b))
}

function orderWeight(strng) {
    let arr = strng.split(' ')
    for (let i = 0; i < arr.length; i++) {
        arr[i].split('')
    }
}

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

// my solution and best solution

function anagrams(word, words) {
    let sortedWord = word.split('').sort().join('')
    return words.filter(v => v.split('').sort().join('') === sortedWord)
}

/*
First non-repeating character

Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. 
For example, the input 'sTreSS' should return 'T'.
If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

// solution using lastIndexOf

function firstNonRepeatingLetter(s) {
    let t = s.toLowerCase();
    for (let i = 0; i < t.length; i++)
        if (t.indexOf(t[i]) === t.lastIndexOf(t[i]))
            return s[i];
    return "";
}
// indexOf returns the index of the first character found in the argument and lastIndexOf return the index of the last character found in the argument
// the only time both .indexOf and .lastIndexOf will target the same index, is if there is only 1 of the characters outlined in the argument within the string

// solution using an object

function firstNonRepeatingLetter(s) {
    const map = {}

    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase()
        map[char] = map[char] + 1 || 1
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (map[char.toLowerCase()] == 1)
            return char
    }

    return ''
}
// this creates an object with each key representing a character from the s string and adding 1 to the value within that key each time that character is in the string
// we return the first instance where the value is === to 1, meaning the first character in the string that only appears once
// the object if s = "stress" would look like so:
firstNonRepeatingLetter('stress');
obj = {
    "s": 3,
    "t": 1,
    "r": 1,
    "e": 1
}
// we loop through each key:value pair and return the first pair thatt equals 1


/*
Pete, the baker

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. 
Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). 
For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
Ingredients that are not present in the objects, can be considered as 0.

Examples:
// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
*/
//tests:
cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });
cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 });
cakes({ cream: 200, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 1700, flour: 20000, milk: 20000, oil: 30000, cream: 5000 });
cakes({ butter: 0, cream: 32, cocoa: 56 }, { milk: 0, pears: 4800, sugar: 7700, oil: 8100, butter: 7600, apples: 6900, cocoa: 7600, nuts: 2500, eggs: 6500, chocolate: 8500, flour: 6300, cream: 5700, crumbles: 3700 })

// my solution: Failed? It failed the 4th test claiming that it should be 0, but it's not correct, as my example and every "solution" has it as 135

function cakes(recipe, available) {
    const recipeArr = Object.keys(recipe)
    const availArr = Object.keys(available)
    const emptyArr = []
    const resultArr = []
    for (let i = 0; i < recipeArr.length; i++) {
        let currRecipeItem = recipeArr[i]
        if (availArr.includes(currRecipeItem)) {
            emptyArr.push(currRecipeItem)
        } else { return 0 }
    }
    for (let i = 0; i < emptyArr.length; i++) {
        resultArr.push(available[emptyArr[i]] / recipe[emptyArr[i]])
    }
    return Math.floor(Math.min(...resultArr))
}


// solution similar to mine, but cleaned up

function cakes(recipe, available) {
    const resultArr = [];

    for (let key in recipe) {
        if (key in available) {
            resultArr.push(available[key] / recipe[key]);
        } else {
            return 0;
        }
    }
    return Math.floor(Math.min(...resultArr));
}
// create an empty array where we will store the available values divided by the recipe values
// loop through each key in the recipe object and if there is a key in the available object with the same name, 
// we .push(the value under that key in the available object divided by the value under that key in the recipe object) into our array
// if a key in the recipe object does not exist in the available object, then we return 0, as we don't have all the ingredients needed for the recipe available
// we then return the smallest number in our resultArr array and Math.floor() in, as there's a good chance of it being a decimal

/*
Two Sum

Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together,
give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).
For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; 
target will always be the sum of two different items from that array).

twoSum [1, 2, 3] 4 === (0, 2)
*/
//tests
twoSum([11, 22, 33], 44)
twoSum([1234, 5678, 9012], 14690)

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        let num1 = numbers[i]
        for (let j = i + 1; j < numbers.length; j++) {
            let num2 = numbers[j]
            if (num1 + num2 === target) { return [i, j] }
        }
    }
}

// O(n) solution

const twoSum = function (numbers, target) {
    const map = {};
    for (let p = 0; p < numbers.length; p++) {
        const currMapVal = map[numbers[p]]
        if (currMapVal >= 0) {
            return [currMapVal, p]
        } else {
            const numToFind = target - numbers[p]
            map[numToFind] = p
        }
    }
    return null
}


/*
Title Case

A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case)
 or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). 
The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it 
should behave in the same way even if the case of the minor word string is changed.

###Arguments (Haskell)

First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. 
The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

###Example
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

// my solution: passed

function titleCase(title, minorWords) {
    title = title.split(' ')
    if (minorWords) { minorWords = minorWords.toLowerCase().split(' ') }
    let arr = []
    let currWord

    arr.push(title[0].slice(0, 1).toUpperCase() + title[0].slice(1).toLowerCase())

    for (let i = 1; i < title.length; i++) {
        currWord = title[i].toLowerCase()
        if (minorWords && minorWords.indexOf(currWord) >= 0) {
            arr.push(currWord.toLowerCase())
        } else {
            arr.push(currWord.slice(0, 1).toUpperCase() + currWord.slice(1).toLowerCase())
        }
    }
    return arr.join(' ')
}

//my solution, commented

function titleCase(title, minorWords) {
    title = title.split(' ')
    // need to make minorWords into an array, otherwise situations like with minorWords = "an" will cause "a" to be lowercase

    if (minorWords) { minorWords = minorWords.toLowerCase().split(' ') }
    // lowercasing the letters if there is a minorWords argument given. To fix case-sensitivity issues

    let arr = []
    let currWord
    // creates an empty array that we will fill with our words, and currWord which we assign a value to in our loop

    arr.push(title[0].slice(0, 1).toUpperCase() + title[0].slice(1).toLowerCase())
    // Makes the first word in the title have the first letter as a capital and the rest lowercase, as stipulated in the instructions

    for (let i = 1; i < title.length; i++) {
        // starting with i = 1, because we already handled title[0] outside the loop
        currWord = title[i].toLowerCase()
        if (minorWords && minorWords.indexOf(currWord) >= 0) {
            arr.push(currWord.toLowerCase())
            // if minorWords has an argument and minorWords contains the currWord we are targetting, then all letters are lowercase
        } else {
            arr.push(currWord.slice(0, 1).toUpperCase() + currWord.slice(1).toLowerCase())
        }
    }
    return arr.join(' ')
}

/*
Count characters in your string

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

//my solution: passed

function count(string) {
    const result = {}
    let currChar
    for (let i = 0; i < string.length; i++) {
        currChar = string[i]
        result[currChar] = result[currChar] + 1 || 1
    }
    return result
}


/*
IP Validation

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
*/

// my solution: failed. The tests are very diverse
isValidIP('1e0.1e1.1e2.2e2')
// fails, isNaN(Number('1e0)) === false
isValidIP('1.2.3.4\n')
// fails, as isNaN(Number('4\n')) === false


function isValidIP(str) {
    let arr = str.split('.')

    if (arr.length != 4) { return false }

    for (let i = 0; i < arr.length; i++) {
        if (isNaN(Number(arr[i])) || arr[i] > 255 || arr[i] < 0) { return false }
    }

    return true
}

// best solution? Seems like regex is the best way to navigate around all of the tests
function isValidIP(str) {
    return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}
// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/solutions/javascript/all/clever


/*
Good vs Evil

Description
Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. 
Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10

Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil,
the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

Input:
The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. 
Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or 
"Battle Result: No victor on this battle field" if it ends in a tie.
*/

// my solution: passed

function goodVsEvil(good, evil) {
    good = good.split(' ')
    evil = evil.split(' ')

    const goodValues = {
        0: 1, // hobbits
        1: 2, // men
        2: 3, // elves
        3: 3, // dwarves
        4: 4, // eagles
        5: 10 // wizards
    }
    let goodResult = 0

    const evilValues = {
        0: 1, // orcs
        1: 2, // men
        2: 2, // wargs
        3: 2, // goblins
        4: 3, // urak hai
        5: 5, // trolls
        6: 10 // wizards
    }
    let evilResult = 0

    for (let i = 0; i < evil.length; i++) {
        goodResult += good[i] * goodValues[i] || 0
        // the || 0 is needed for when i = 6, as good[6] === undefined
        evilResult += evil[i] * evilValues[i]
    }

    if (evilResult > goodResult) {
        return "Battle Result: Evil eradicates all trace of Good"
    } else if (goodResult > evilResult) {
        return "Battle Result: Good triumphs over Evil"
    } else {
        return "Battle Result: No victor on this battle field"
    }
}

//best solution: 
//using an object looks night, but really isn't needed seeing as we made the key the same as the index of an array

function goodVsEvil(good, evil) {
    let worthGood = [1, 2, 3, 3, 4, 10];
    let worthEvil = [1, 2, 2, 2, 3, 5, 10];

    var powerGood = good.split(' ').reduce(function (sum, current, index) { return sum + current * worthGood[index] }, 0);
    var powerEvil = evil.split(' ').reduce(function (sum, current, index) { return sum + current * worthEvil[index] }, 0);


    if (powerEvil > powerGood) return 'Battle Result: Evil eradicates all trace of Good';
    else if (powerGood > powerEvil) return 'Battle Result: Good triumphs over Evil';
    else return 'Battle Result: No victor on this battle field'
}

/*
Valid Phone Number
Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Examples:

"(123) 456-7890"  => true
"(1111)555 2345"  => false
"(098) 123 4567"  => false
*/

// my solution: passed

function validPhoneNumber(phoneNumber) {
    return (/^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/).test(phoneNumber)
}

/*
Validate Credit Card Number

In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.
Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.
Here is the algorithm:

Double every other digit, scanning from right to left, starting from the second digit (from the right).
Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; 
if there are an odd number of digits, double every other digit starting with the second:
1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]
12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]
891 ==> [8, 9*, 1] ==> [8, 18, 1]

If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):
[8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]
or:
[8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]

Sum all of the final digits:
[8, 9, 1] ==> 8 + 9 + 1 = 18
Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.

18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number
*/

// first attempt: passed

function validate(n) {
    let arr = String(n).split('').map(v => Number(v))

    for (let i = arr.length % 2; i < arr.length; i = i + 2) {
        let currNumber = arr[i]

        arr[i] = arr[i] * 2
        if (arr[i] > 9) { arr[i] = arr[i] - 9 }
    }
    return arr.reduce((sum, v) => sum + v) % 10 === 0
}

// follow up O(n) attempt: passed

function validate(n) {
    n = String(n)
    let everyOther = false
    let sum = 0

    for (let i = n.length - 1; i >= 0; i--) {
        let currNum = n[i]

        if (everyOther) { currNum = currNum * 2 }
        if (currNum > 9) { currNum = currNum - 9 }
        sum += Number(currNum)
        everyOther = !everyOther
    }
    return sum % 10 === 0
}

/*
Multiplication table

Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:
1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

*/

function multiplicationTable(size) {
    const result = [];

    for (let i = 0; i < size; i++) {
        result[i] = [];
        for (let j = 0; j < size; j++) {
            result[i][j] = (i + 1) * (j + 1);
        }
    }

    return result
}


/*
Street Fighter 2 - Character Selection

Selection Grid Layout in text:

| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
Input

the list of game characters in a 2x6 grid;
the initial position of the selection cursor (top-left is (0,0));
a list of moves of the selection cursor (which are up, down, left, right);
Output

the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, 
all the ones after a move, whether successful or not, see tests);

Rules

Selection cursor is circular horizontally but not vertically!
As you might remember from the game, the selection cursor rotates horizontally but not vertically; 
that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost 
(examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located 
(examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; 
you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

Test

For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

Notice: changing some of the input data might not help you.

Examples

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['up', 'left', 'right', 'left', 'left']
then I should get:
['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']

as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]

initial_position = (0,0)
moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
Result:
['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']
*/

let fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
let moves = ["right", "left", "left", "left", "left", "left", "left", "left"]

// my solution: failed. Couldn't figure out how to deal with going left of [0,0]

function streetFighterSelection(fighters, position, moves) {
    const result = []
    for (let i = 0; i < moves.length; i++) {


        if (moves[i] === "right") {
            position[1] = position[1] + 1
        } else if (moves[i] === "left") {
            position[1] = position[1] - 1
        } else if (moves[i] === "down") {
            position[0] = position[0] + 1
        } else if (moves[i] === "up") {
            position[0] = position[0] - 1
        }
        result.push(fighters[position[0]][position[1]])
    }
    return result
}
streetFighterSelection(fighters, [0, 0], moves)


// best solution:

function streetFighterSelection(fighters, position, moves) {
    const result = [];

    moves.forEach(function (move) {
        if (move === "up") {
            position[0] = 0;
        }
        else if (move === "down") {
            position[0] = 1;
        }
        else if (move === "right") {
            position[1] = (position[1] === 5) ? 0 : position[1] + 1;
        }
        else if (move === "left") {
            position[1] = (position[1] === 0) ? 5 : position[1] - 1;
        }

        result.push(fighters[position[0]][position[1]]);
    });
    return result;
}

//another good solution:
function streetFighterSelection(fighters, position, moves) {

    const boundY = fighters.length - 1;
    const boundX = fighters[0].length - 1;

    let [y, x] = position;

    const controls = {
        right: () => x === boundX ? x = 0 : x++,
        left: () => x ? x-- : x = boundX,
        up: () => y ? y-- : y,
        down: () => y < boundY ? y++ : y
    };

    return moves.map(move => {
        controls[move]();
        return fighters[y][x];
    });
}

/*
Decipher this!

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

// best solution:

function decipherThis(str) {
    return str.replace(/\b(\d+)(\w?)(\w*?)(\w?)\b/g, (_, $1, $2, $3, $4) => String.fromCharCode($1) + $4 + $3 + $2);
}
// the regex being smushed between the two \b (word boundry) tags makes it so the problem can be solved without splitting up the words into the array.
// the "_" varaible defined in the replacer function is the entire matched word