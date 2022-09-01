/*

Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/


// Solutions:

function squareDigits(num) {
    return Number(('' + num).split('').map(function (val) { return val * val; }).join(''));
    // Number converts a string (or some other values) into an integer, this is turning the end result of all the work within the Parenthesis back to an intiger
    // Does the same as parseInt()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

    // ('' + num ) converts our num to a string, so we can use string methods on it to seperate each invidivial number in num

    // .split() takes the string and creates an array thats puts values at each index number depending on how we choose to split the string indicated by our argument
    // "hello world".split(''); creates an array that puts each character in a seperate index. So ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd',] in this case
    // "hello world".split(' '); creates ['hello', 'world'];
    // "hello world".split(); creates ['hello world']
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    // so in our solution, it splits the string into each characters and stores them in an index of an array. So squareDigits(123) would split ['1', '2', '3']

    //.map applies the function to each value within the targetted array, and returns an array with the value returned from the function.
    // So .map takes each value from our array and inputs them as our function's argument "val". The function then return the result of (val * val) to .map
    // which puts the returned value in a new array.
    // Note that the values in our array are strings, so our function would be doing ("5" * "5") = 25, but that's valid in JS

    // After each value has gone through the function, each result should be squared and stored inside a new array. They are now integers after JS converted them
    // from strings to ints in order to multiple them by themselves.

    // .join will take every value without our array and join them together into one string. The argument for .join decides what the values are seperated by when
    //they are joined in a new string. () seperates them with commas (like they are in an array), ('') seperates them with whatever is between the quotes, 
    //which in this case, is nothing, so they aren't seperated, which is what we want
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

    // And because .join('') turned our numbers into a string, we use Number to convert the string to an number. Could also use parseInt()
}



function squareDigits(num) { // creates a function and names it squareDigits
    var array = num.toString().split('').map(function (int) { // takes our argument ,converts it to a string with .toString, creates an array that puts each
        // character in their own index with .split(''), passes each value in our array as the argument for our second function with .map,
        var i = parseInt(int); // this whole line is unnecassary, this is here to convert our values in our array to ints before doing the multiplication, but
        // because JS knows "6" * "6" means 6 * 6, it is not necassary
        return i * i; // using i instead of int isn't necassary. Out function already automatically has int = our value stored, so return int * int; does the same
        // even if we needed to convert int to a number first, we didn't need to save it to a seperate variable for this to work
        //parseInt(int);
        // return int * int; would work fine IF we needed to convert int to a variable, which we do not. So the above line is not needed
    });

    return parseInt(array.join("")); // takes our array that we saved and joins each value together into one string seperated by nothing as-per the argument.
    // We then convert that string into an integer with parseInt() and return the value
}

function squareDigits(num) {
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++) { // essentially means that we execute the for loop the amount of times our string's .length is equal to. So 5 dig number = 5 loops
        results[i] = string[i] * string[i];
        // results[i] targets the index number of whatever i is currently equal to in our ARRAY, so it will eventually target every index number in our array
        // string[i] targets the index number of whatever i is currently equal to in our STRING that contains our num argument.
        // So if num = 25
        // The loop will run "25".length times, so twice.
        // on the first loop, i = 0. string[0] * string[0] would be "2" * "2". The result of string[i] * string[i] gets stored in results[i], which is results[0]
        // So "2" * "2" = 4, and that 4 is stored under results[0] (aka index 0 of the results array)
        // then we do the same with string[1], which would be a 5
    }
    return Number(results.join('')); // we use .join on our results array to merge all values stored within it into one string, seperated by nothing as-per the ('') arguement
    // then we use Number to convert the string to a number, parseInt() also works in this situation. 
    //Number() will output NaN if anything in the string can't be converted
    // parseInt() will output anything it can convert to an int UNTIL it hits something it can't, so: parseInt('123abc1'); outputs: 123
    //then the value is returned
};

function squareDigits(num) {
    return +num.toString().split('').map(i => i * i).join('');
}

function squareDigits(num) {
    let result = num
        .toString()
        .split("")
        .map(num => num * num)
        .join("")

    return parseInt(result)
}

/*

Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/


// My Solution 
function XO(str) {
    let ohs = 0
    let exes = 0
    let result = str.toUpperCase().split('')
    for (var i = 0; i < str.length; i++) {
        if (result[i] == "O") {
            ohs += 1
        } else if (result[i] == "X") {
            exes += 1
        }
    }
    if (ohs == exes) {
        return true;
    } else {
        return false;
    }

}

// Cleaning up My Solution by referencing other examples

function XO(str) {
    let ohs = 0
    let exes = 0
    let result = str.toUpperCase().split('')
    for (var i = 0; i < str.length; i++) {
        if (result[i] == "O") {
            ohs += 1
        } else if (result[i] == "X") {
            exes += 1
        }
    }
    return ohs == exes //our whole second if statement was completely unneeded. If we compare two variable's values, it'll return true or false depending on
    // if they're equal. So this returns true or false without being told to
}

// Clever solution

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}


// Solution that's better than mine and with syntax I know well

function XO(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) { // Check the length of our str and loops the amount of times str.length is equal to (how many character are in str) xoxo = 4 loops
        if (str[i].toLowerCase() == 'x') sum++; // lowercases each character in str. Checks each an index every loop and adds 1 to sum if the value == x
        if (str[i].toLowerCase() == 'o') sum--; // Does the same as above, but subtracts 1 from sum if the value == o
    }
    return sum == 0; // returns either true or false depending on whether sum == 0. Which it only will if there are an equal amount of x and o in str
}
// Comments suggest better optimization if str had .toLowerCase() applied to it before the if statements, so the page doesn't need to do that action every loop

// Solution using .filter, which I have notes on but I'm unfamiliar with

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

// the same solution without the const and arrow function

function XO(str) {
    str = str.toLowerCase().split(''); // changed all characters in our str to lowercase and creates an array with each character taking up their own index
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
    //.filter is an array method that filters out any values in the array that do not pass the function's test and creates a new array out of what did pass
    // str.filter(x => x === 'x') removes any value in our array that isn't 'x', so it creates a new array with only the 'x's from str and none of the 'o's
    // str.filter(x => x === 'o') removes any value in our array that isn't 'o', so it creates a new array with only the 'xo's from str and none of the 'x's
    // we then compare the two created arrays and see if they are equal in value (have the same amount of indexes), returns true if they do, returns false if they don't
}

// solution is look into more with .match
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

function XO(str) {
    let x = str.match(/x/gi); // takes all values of 'x' and puts them in a new array, not case sensitive? Saves new array as 'x'
    let o = str.match(/o/gi); // takes all values of 'o' and puts them in a new array, not case sensitive? Saves new array as 'o'
    return (x && x.length) === (o && o.length);
}
// if this was just "return x.length === o.length", then running XO(''); would output an error saying .length cannot read null
// both sides of the && need to be truthy in order for the right evaluation's output to be returned
// if there are no 'x's in str, then x = null and x.length would result in an error, which would break our code. 
// But if x = null, then x.length is never read, so this is never an issue. If it was (x.length && x) instead, then XO(''), XO('x'), and XO('o') would cause errors

// if str = (''), 
// x is null, x.Length is never read, so (x && x.length) returns null
// o is null, o.length is never read, so (o && o.length) returns null
// null === null = true, so our function returns true

// if str = ('oo')
// x is null, x.length is never read,                           so (x && x.length) returns null
// o is truthy (o = ['o', 'o']), o.length is truthy (o.length = 2), so (o && o.length) returns 2
// null === 2 = false, so our function returns false

// if str = ('xxxo'), 
// x is truthy (x = ['x', 'x', 'x']), x.length is truthy (x.length = 3), so (x && x.length) returns 3
// o is truthy (o = ['o']), o.length is truthy (x.length = 1),          so (o && o.length) returns 1
// 3 === 1 = false, so our function returns false

//if str = ('xoxo')
// x is truthy (x = ['x', 'x']), x.length is truthy (x.length = 2), so (x && x.length) returns 2
// o is truthy (o = ['o','o']), o.length is truthy (o.length = 2),  so (o && o.length) returns 2
// 2 === 2 = true, so our function returns true


/*

Beginner Series #3 Sum of Numbers

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.
If the two numbers are equal return a or b.
Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

// my poor attempt at a solution:

function getSum(a, b) {
    if (a === b) {
        return a
    }
}

function getSum(a, b) {
    for (let i = a + 1; i < b; i++) {
        let sum = a + i;
        let totalSum = sum + i;
        console.log(sum);
        console.log(totalSum);
    }
}

// Clever solution with the assistance of the "Arithmetic progression" algorithm. https://en.wikipedia.org/wiki/Arithmetic_progression#Sum

const GetSum = (a, b) => {
    let min = Math.min(a, b), // saves the lower of the two number between a and b as min
        max = Math.max(a, b); // saves the higher of the two numbers between a and b as max
    return (max - min + 1) * (min + max) / 2; // the math here is pretty self-explanitory, the hard part is understand the logic
    // the (max - min + 1) finds our number of terms, which is the total amount of numbers we are adding together. Figuring out the number of terms seems to be the
    //hardest part of the equation, but we can get it for our example with just (max - min + 1)
}

// Another solution with the Arithmetic Algorithm, but using Math.abs to shorten it even more
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

function GetSum(a, b) {
    return (a + b) * (Math.abs(a - b) + 1) / 2;
}
// Math.abs(x - y) finds the difference between the two numbers. Really it just does the math and changes the outcome to a positve number
Math.abs(11 - 5); // outputs 6, pretty obvious when used like this
Math.abs(5 - 11); // outputs 6, it's not 5 - 11 = -6, but the difference between 5 and 11, which is 6
Math.abs(-5 - 11); // outputs 16



// Solution similar to my line of thinking

function GetSum(a, b) {
    //if both a and b are equal return a
    if (a === b) { // this if statement is actually not needed see the GetSum(6,6); note below for more info
        return a;
    }
    var result = 0;

    var x = a, y = b;
    // check the larger and smaller numbers and assign them to x and y. If the aren't, then they are kept with the assignment made above
    if (a > b) {
        x = b, y = a;
    }
    //in a loop add the numbers from the smaller one until it reaches the larger number
    for (var i = x; i <= y; i++) {
        result += i;
    }
    return result;
}


GetSum(6, 11)
x = 6, y = 11
i = 6;
result += 6;
result = 6;
i = 7;
result += 7; // result = result + 7, which is 6 + 7, so result = 13. Next loop it would be result + 8, which is 13 + 8, so result = 21, loops until i = 11 (5 times)
result = 13;

GetSum(6, 6)
x = 6, y = 6
i = 6
//When the for loop is started, the i <= y; evaluation is done. i = 6, y = 6, so the loop runs and result += i (result = 0 + 6)
// On the next loop i = 7, so the loop is not run and result is returned, which at that time, result = 6



/*Exploring the Conditional (ternary) operator (?) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an 
expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator 
is frequently used as a shortcut for the if statement

So this example is pretty much the same as the example above, except it doesn't have the unneeded if a == b statement and it uses Conditional (ternary) operator
which is essentially a for loop short-hand
*/

function GetSum(a, b) {
    var result = 0;
    var bigger = a > b ? a : b; // AKA: if a > b, then bigger = a, if it isn't, then bigger = b. So it assigns the bigger number to "bigger"
    var smaller = a > b ? b : a; // AKA: if a > b, then small = b, if it isn't, then smaller = a. So it assigns the smaller number to "smaller"
    for (var i = smaller; i <= bigger; i++) {
        result += i // same for loop as the example above, the only difference between the
    }
    return result
}


/*
Regex validate PIN code

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

// innitial answer

function validatePIN(pin) {
    if (pin.indexOf('.') !== -1) { // if pin contains a deminal anywere, indexOf('.') returns the index, if it doesn't, it returns -1.
        // So the double negative is necessary. If pin does not, not contain a decimal, return false. Meaning if it does contain a decimal, return false
        console.log(`newPin2.indexOf('.') == -1`)
        return false
    }
    let newPin = Number(pin); // converts the pin to a Number and saves it to newPin
    if (isNaN(newPin)) { // if pin is NaN (which it will be if pin contains any non-numbers), then returns false
        console.log(`newPin === NaN`)
        return false
    } else if (newPin < 0) { // checks to see if pin is a negative number, returns false if it is
        console.log(`newPin < 0`)
        return false
    }

    let newPin2 = newPin.toString(); // converts pin to a string so we can use .length

    if (newPin2.length === 4 || pin.length === 6) { // if pin still has 4 or 6 characters at this point, then returns true
        console.log(`newPin2.length === 4 || pin.length === 6`)
        return true
    } else { // if the script gets to this point, returns false. Should only get here if pin is not 4 or 6 digits (123, 12345, 1234567, etc.)
        console.log(`else, meaning pin does not contain 4 or 6 digits`)
        return false
    }
}

/* Problems I had with this task:
newPin % 1 != 0; is often a good way to check if the number has a decimal, but it does not work on xxx.0 numbers, so 1234.0 would be a valid pin
if we parseInt(pin); then validatePIN('1234a') = true because parseInt() removes the a and keeps the 1234, which is a valid pin
if we Number(pin); then validatePIN('1234.0') will convert '1234.0' to 1234, which is a valid pin. We need to check indexOf('.') before we use Number
Testing against NaN:
"should handle all edge cases
Wrong output for '123
': expected true to equal false"
???????????????????????
*/
NaN === NaN; // false
isNaN(NaN);  // true
/*
Common Problems:
*/
validatePIN('123a')
validatePIN('1234.0')
validatePIN('')
validatePIN('0000') // supposed to return true. Number('0000') turns it into 0, which becomes an invalid pin
validatePIN(' 123')


// Corrected solution (before submitting and looking at solutions)
// Passed the test, but not the attempt

function validatePIN(pin) {
    if (pin.indexOf('.') !== -1) {
        return false
    }

    let intPin = Number(pin);

    if (isNaN(intPin)) {
        return false
    } else if (intPin < 0) {
        return false
    }

    if (pin.length === 4 || pin.length === 6) {
        return true
    } else {
        return false
    }
}

function validatePIN(pin) {
    if (pin.indexOf('.', '-', '`') !== -1) {
        return false
    }

    let intPin = Number(pin);

    if (isNaN(intPin)) {
        return false
    } else if (intPin < 0) {
        return false
    }

    if (pin.length === 4 || pin.length === 6) {
        return true
    } else {
        return false
    }
}

validatePIN('123a')
// returns false via: if (isNaN(intPin))
validatePIN('1234.0')
// returns false via: if (pin.indexOf('.') !== -1)
validatePIN('')
// returns false via: else
validatePIN('0000')
// returns true. if (pin.length === 4 || pin.length === 6) checks the original (pin), not intPin, so it won't be affected by Number('0000') turing it into (0)

//Trying with Regex solutions to the problem

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}
/*
.test() returns true if the there is a match within the string
\d matches digit characters [0-9]
{4} matches 4 digits. If there were <4 digits, then there would be no match, as there wouldn't be 4 digits to match
{6} matches 6 digits. If there were <6 digits, then there would be no match, as there wouldn't be 6 digits to match
| means or, so there it matches 4 digits or 6 digits, meaning if there are <6 digits, it will match 4, if there are >=6 digits, it will match 6
^ matches from the beginning of the string to the end. So if it was removed, it would match the last 4 digits (or 6 dgits if there are 6+ total) of the string.
Would not match if there were less than 4 digits.
$ matches from the end of the string to the beginning. So if it was removed, it would match the first 4 digits (or 6 digits if there are 6+ total) of the string.
Would not match if there were less than 4 digits
If both ^ and $ were removed, it would be treated the same as if just $ was removed. Having them both means that that the same digits needs to match whether
the matches start from the end or from the beginning.
This means that 5 & 7+ character strings would not match, as the ^ would count the first 4 digits and $ would count the last 4 and those digits need to be the same.
The ^ and $ being on the outside of the perenthesis means that it is applies to everything that is within the ()
*/

/*
Uses both Regex and .length
Not great practice, as it doesn't make sense to only use regex for identifying if (pin) contains only digits when you could just as easily check the length of (pin) aswell
as-per the example above
*/

function validatePIN(pin) {

    var pinlen = pin.length; // saves the .length of (pin) to a variable to be used later
    var isCorrectLength = (pinlen == 4 || pinlen == 6); // .length of (pin) needs to be either 4 or 6 in order for true to be return. 
    // true or false is saves under isCorrectLength depending on whether the condition is met
    var hasOnlyNumbers = pin.match(/^\d+$/);
    /*
    Similar to the Regex we have above, but we are only checking for the digits to match and not the length of the string, as we are doing that with .length
    \d matches digit characters [0-9]
    + matches all of the proceding digits. (if it was +4 it would match the 4 proceding digits). If this was removed, only a 1 digit (pin) would return true, as we the
    digits needs to be the same counting from the begining (as outlined with ^) and the end (as outlined with $)
    */

    if (isCorrectLength && hasOnlyNumbers) {
        return true;
    }

    return false;

}

// Solution without regex. For some reason it passes the the "should handle all edge cases"???

function validatePIN(pin) {
    //return true or false
    var n = pin.length; // saves the .length of (pin) to n to be used later
    if (n != 4 && n != 6) // && is used because pins with the length of 4 AND 6 both need to be able to get through. || would cause both 4 digits and 6 digits to return false
        return false;
    for (var i in pin) // for...of loop would work just the same, as we are looping through a string
        if (pin[i] > '9' || pin[i] < '0') // when strings are compared like this, it converts the the string to their Unicode values, then compares them.
            // So some characters like (), +, -, *, !, etc. are < "0" in Unicode and some characters like the upper/lower case alphabet are >"9"
            // When a string is compared to a int, then JS tries to convert the string into an int, if it can't, then it = NaN and false will be returned when compared.
            // So "a" > "9" returns true, because the Unicode number for "a" is higher than "9"s unicode number
            // "a" > 9 returns false, because "a" cannot be converted to a number, therefore, it's actually NaN > 9, which returns false
            return false;
    return true; // if the program reaches this point, then it has passed out tests and should return true
}

/*
Detect Pangram
RE-VISIT LATER, SOLUTION ARE LOCKED BECAUSE I'M NOT A HIGH ENOUGH LEVEL??

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

Thinking:
change everything in the string to toUpperCase() or toLowerCase()
Search the string for each letter. indexOf(each letter in the alphabet?) indexOf(i) let i = 
.fromCharCode(i)?
A-Z = 0034-0059
a-z = 0066-0091
*/

alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase();
    return alphabets.every(x => string.includes(x)); // x = the value stored at each index
}


/*

Descending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321

Thinking: function that compares the value of each element in an array and places them behind that value in the array if it's less than or before that value if it's
greater than
.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

function descendingOrder(n) {
    let array = n.split("")
    array.sort(function (a, b) {
        return b - a
    })
    return array.join('')
}

/* 
fixed solution.
*/

function descendingOrder(n) {
    let array = String(n).split("") // we needed to convert n to a string, as the problem is "takes any non-negative integer".
    array.sort(function (a, b) {
        return b - a
    })
    return parseInt(array.join('')) // changes n back to an int, as we need to take an int and return an int
}


// Best solution:

function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}
// uses .reverse() instead of changing the .sort() function to b - a



// One-Liners version of my solution

function descendingOrder(n) {
    return +(n + '').split('').sort(function (a, b) { return b - a }).join('');
}
// (n + '') converts an int to a string, and +() converts the end result of the parenthesis to an int
// Can also use n.toString() or String(n) to convert the int to a string and parseInt(n) or Number to convert the string back to an int

function descendingOrder(n) {
    return parseInt(n.toString().split('').sort().reverse().join(''))
}



/*
Sum of Positives

You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.

Thinking:
for...of loop where we add each index if they are a psotive number?
*/
let newArray = [1, -4, 7, 12]

function positiveSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            // if the value at the index we are currently checking is <0 (a negative number), do nothing
        } else {
            sum += arr[i]
        }
    }
    return sum
}

positiveSum(newArray)

// Very similar solution, but checks to see if [i]<0, that way it doesn't need to loop through both the if and else statement every time it's a positive number

function positiveSum(arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
        if (arr[i] > 0) {                   // if arr[i] is greater than zero
            total += arr[i];                  // add arr[i] to total
        }
    }
    return total;                         // return total
}


// Solution with .filter() and .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

function positiveSum(arr) {
    return arr.filter(x => x >= 0).reduce((a, c) => a + c, 0);
}

// https://pythontutor.com/visualize.html#code=let%20newArray%20%3D%20%5B1,%20-4,%207,%2012%5D%0A%0Afunction%20positiveSum%20%28arr%29%20%7B%0A%20%20%20%20return%20arr.filter%28x%20%3D%3E%20x%3E%3D0%29.reduce%28%28a,%20c%29%20%3D%3E%20a%20%2B%3D%20c,%200%29%3B%0A%20%20%7D%0A%20%20%0ApositiveSum%28newArray%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

// .filter() creates a new array using the values of the array we are filtering if they pass the function we layed out. In this case, if the value is >= 0
// so .filter(x => x >= 0) prevents negative numbers from being added
// .reduce((a, c) => a + c, 0) implements each value of the array that .filter() created and passes it through the function.
// the ", 0" at the end makes it so the initial value is 0, which covers for the "if there is nothing to sum, the sum is default to 0." part of the problem

// without the ", 0" .reduce() starts with a = 1 (index 0) and c = 7 (index 1, -4 is not in our array because of .filter() not passing it)
// So it would be a + c (1 + 7) = 8, a becomes 8. a + c (8 + 12) = 20, a becomes 20. 20 is returned

// With the ", 0" .reduce() start with a = 0 and c = 1 (index 0).
// So it would be 0 + 1, 1 + 7, 8 + 12 = 20, which is returned. So we need to loop through the array 1 extra time with the ", 0", but it's necassary otherwise
// passing an empty array, let array = [] would result in an error.

arr.filter(x => x >= 0)
//vs
arr.filter(x => x > 0)
// the latter improves optimization. Because there is no reason to pass 0s onto reduce, as they will not affect what is returned
let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3]
//would run longer than it needs to, as it is passing each of those 0s into reduce even though the outcome would be the same with both >= and >


// Similar to above, but uses a conditional ternary operator to check for negative numbers instead of filter

function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
// a + (b > 0 ? b : 0) Means that if b > 0, then b = b, else b = 0. So b stays as the value of index it is checking if it's >0, if it isn't, then b = 0, so it won't
// affect our sum

// a starts at 0 as per the ",0" outside the parenthesis, the same as the above example in case our array is empty

// so with
let newArray = [-5, 0, 5]
positiveSum(newArray)
// a = 0, b = -5. -5 !> 0, so b = 0. 0 + 0 = 0. a becomes 0
// a = 0, b = 0. 0 !> 0, so b = 0. 0 + 0 = 0. a becomes 0
// a = 0, b = 5. 5 > 0, so b = 5. 0 + 5 = 5. a beomces 5
// 5 is returned

// https://pythontutor.com/visualize.html#code=let%20newArray%20%3D%20%5B-5,%200,%205%5D%0A%0Afunction%20positiveSum%28arr%29%20%7B%0A%20%20%20%20return%20arr.reduce%28%28a,b%29%3D%3E%20a%20%2B%20%28b%20%3E%200%20%3F%20b%20%3A%200%29,0%29%3B%0A%20%7D%0A%20%20%0ApositiveSum%28newArray%29&cumulative=false&curInstr=8&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false


/* Return Negative

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples
makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12

Notes:
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

Thinking:
-Math.abs(num) does pretty much everything for us
-Math.abs(0) makes -0, which is incorrect as-per the assignment
Doing math myself? num - (num * 2)
*/

function makeNegative(num) {
    if (num === 0) {
        return num
    } else {
        return -Math.abs(num)
    }
}

// doing the math myself

function makeNegative(num) {
    if (num === 0) {
        return num
    } else {
        return num - (num * 2)
    }
}

// Conditional (ternary) operator syntax

function makeNegative(num) {
    return num < 0 ? num : -num;
}


/*
Opposite number

Very simple, given a number, find its opposite.
Examples:
1: -1
14: -14
-34: 34

Thinking:
Math.abs(num)
-Math.abs(num)
*/
function opposite(number) {
    if (number <= 0) {
        return Math.abs(number)
    } else {
        return -Math.abs(number)
    }
}

// Conditional (ternary) operator syntax

function opposite(number) {
    return number <= 0 ? Math.abs(number) : -Math.abs(number);
}


// best solution:

function opposite(number) {
    return (-number);
}
// applying "-" to an int changes a negative number to a positive and a positive to a negative
-(2); // outputs -2. Because it's -1 * 2 = -2
-(-2); // outputs 2. Because it's -1 * -2 = 2



/*Remove First and Last Character

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

Thinking:
.shift() and .pop() array methods, removes from the start and from the end of an array. Need to make an array out the string though
*/
"hello".split('').pop().shift()

function removeChar(str) {
    let strArray = str.split('')
    strArray.shift()
    strArray.pop()
    return strArray.join('')
};

// using methods .slice() and .length

function removeChar(str) {
    let removeEnd = (str.length - 1)
    return str.slice(1, removeEnd) // .slice(a, b) takes str and start from index a and ends on index b.
}

function removeChar(str) {
    return str.slice(1, str.length - 1)
}
//shortening down our solution above

// same solution as above, but with .substring(), which is listed as a string method rather than the array method .slice()
// Both seem to do the same thing though
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
function removeChar(str) {
    return str.substring(1, str.length - 1);
};


// Best solution, similar to our .slice() solution

function removeChar(str) {
    return str.slice(1, -1);
}
// .slice(1, -1) starts are index 1 and end on the 2nd to last index. -x index means how many back from the end of the string


// solution using regex and .replace()

const removeChar = (str) => str.replace(/^.|.$/g, '');
// ^. matches the first character in the string, .$ matches the last character in the string. .replaces them with '', so nothing

/*
String repeat
Write a function called repeatStr which repeats the given string string exactly n times.

*/

// My solution

function repeatStr(n, s) {
    return s.repeat(n)
}

// Solution using a for loop

function repeatStr(n, s) {
    var str = "";
    for (var i = 0; i < n; i++)
        str += s;
    return str;
}

/*
Reversed Strings
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

Thinking:
.reverse() does pretty much all the work. It's an array method, so we need to convert it to an array, then back to a string

But could also may do a for loop where we make i count negatively through the string. So index -5,-4,-3,-2,-1,0
*/

function solution(str) {
    let string = str.split('')
    string.reverse()
    return string.join('')
}

// cleanred up a bit.

function solution(str) {
    return str.split('').reverse().join('');
}


// using for loop

function solution(str) {
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}


/*
Vowel Count

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.

Thinking:
check each index of the string with a for loop, if the index = a, e, i, o, or u, then vowelCount ++
regex /[aeuiu]/
*/


function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u',]
    let vowelCount = 0;
    for (let letter of str) {
        if (vowels.includes(letter)) {
            vowelCount++
        }
    }
    return vowelCount;
}

// regex solution

function getCount(str) {
    return (str.match(/[aeiou]gi/)).length;
}

// returns an error that .length can't read null
// without the .length, the fuction returns null


function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}

/*
|| is the way to say "or" in JavaScript (and a few other languages). String.prototype.match() returns an array of the matches if they can be found 
or null if a match cannot be found. JavaScript interperates null as false (it's said to be falsey).

So, if str.match() returns an array it is interperated as truthy and is returned, if it str.match() returns null (falsey) it will return the empty 
array becasue even an empty array is interperated as true.

This means you could look at the whole statement like this:
return (true || true);
or
return (false || true);

if the first part is true, it returns it straight away... if it's false it returns the second part after the || because [] == true.
I hope that made sense. :)
*/

// Methods that makes the most sense to me


function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}

// .replace returns a new string with all the matches replaced with the second argument. [^aeiou] matches every character that isn't a vowel in the string.
// So this function reaplces every non-vowel in the string with "", so nothing, it removes each non-vowel in the string. Then returns the .length of what is left over
// which should only be voewels

// method using .split, .filter and .includes

function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(letter => {
        return vowels.includes(letter) ? true : false; // ?true : false; is not needed, as .includes() already returns a true or false value, this is essentially saying
        // if true return true, else return false, which is redundant
    }).length;
}
/*
.split('') creates a new array with each character of str being their own value in the array
.filter() create a new array made up of the values that pass the the conditions of the function attached to it
.includes() returns true or false depending on whether what is outlined. Note that the argument (letter) is what we're checking and the array we're attaching it to (vowels)
is what we are searching with
Then wer're returning the .length of our array is, which should only be filled with the vowels of str at that point
*/

// less messy version of the example above and without the reduntant ternary operation

function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(letter => vowels.includes(letter)).length;
}


// Solution with what my original plan was more in-line with. Uses .forEach which we were not familiar with

function getCount(str) {
    var vowelsCount = 0;
    str.split("").forEach(function (x) {
        if (x == "a" | x == "e" | x == "i" | x == "o" | x == "u") {
            vowelsCount += 1; // or vowelsCount++
        }
    });
    return vowelsCount;
}

// .split("") creates a new array with each character of str taking up their own index value
// .forEach() method executes a provided function once for each array value. So it checks each character of str, if that character == aeiou, then vowelsCount++


/*
Disemvowel Trolls

Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.

Thinking:
Seems like an easier version of vowel count above (trying not to look at it)
target the vowels in a string and remove them/replace them with ""
target with .replace and an array of vowels
or with regex /[aeiou]/gi
*/

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '')
}
// We replace everything that matches /[aeiou]/gi with "", which removes them from the string. /[aeiou]/gi matches all vowels in the string, case insensitive


/*
Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

Thinking: .sort() to sort the numbers from lowest to highest. Grab the first and last index and template literal `${highest} ${lowest}'?
Need to get rid of the spaces?
*/

// My solution. Passed

function highAndLow(numbers) {
    let higher = numbers.split(' ').sort((a, b) => a - b).slice(-1)
    let lower = numbers.split(' ').sort((a, b) => a - b)[0]
    return `${higher} ${lower}`
}
/*
.split(' ') creates a new array and takes each value in the string that are seperated by spaces and gives them their own index
.sort() sorts the numbers in ascending order, but only takes the first digit of the number into account (so 57 < 6)
the .sort((a, b) => a - b) adds a basic function that sorts the numbers by subtracts them from each other.
Then we target the first and the last numbers in the array with .slice(-1) and [0]. [-1] doesn't work for some reason?
return the values at those index using a template literal format
*/

// Solution similar to mine

function highAndLow(numbers) {
    numbers = numbers.split(' ').sort((a, b) => Number(a) - Number(b))
    return [numbers[numbers.length - 1], numbers[0]].join(' ')
}

// using Math.min and Math.max

function highAndLow(numbers) {
    const numArray = numbers.split(' ');
    return `${Math.max(...numArray)} ${Math.min(...numArray)}`;
}
// not need to sort in this example
// It just creates a new array taking each value of numbers while ignoring spaces and give them their own index, like we did in our solution
// Math.max calls the highest number in the array and Math.min calls the lowest. The ... is spread syntax that means that we pass each value within an array as a 
// seperate argument


/*
Mumbling

This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

Thinking:
.split('-')
.repeat(index + 1 times?)
*/


function accum(s) {
    const arr = []
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i].toUpperCase() + s[i].repeat(i).toLowerCase())
    }
    return arr.join('-')
}



// Best solution
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
accum('abcd')
//.split('') puts each character of the string into an array as their own value

// .map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i)))
// c = the value (abcd) i = the index of that value (0123)
// if c = d
// c.toUpperCase() + c.toLowerCase().repeat(i)) == D + (c * 3). So D+ddd == Dddd
// then .join('-') put each value of an array into a new string and seperates each value with a "-"
// end result of all of that is returned



/* You're a square
Task
Given an integral number, determine if it's a square number:
In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.
Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

Thinking:
Math.sqrt(x) =y, y being the square root of x
We need to check if y is a whole number
Math.floor(y) === y, would return true if it's a whole number and false if it isn't
*/

// my Solution: Passed

var isSquare = function (n) {
    let square = Math.sqrt(n)
    return square === Math.floor(square)
}


// Best solution

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}
// any whole number divided by 1 will not have a remainder, so wholeNum % 1 = 0. Any float number will have a remainder when divided by 1, so floatNum % 1 = x.x

// solution with .isInteger

var isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n));
}
// .isInteger() is a Numbers method that returns true if the number is a whole number and false if it's a decimal number
// syntax is Number.isInteger(value)


/* Get the Middle Character
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
#Input
A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). 
You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output
The middle character(s) of the word represented as a string.

Thinking:
str.length() % 2 to find if str has an even or odd number of characters.
let i = 0
if str.Length() % 2 == 1
i = Math.floor(str.length() / 2)
return str[i]
if str.length() % 2 == 0
i = str.length() / 2
return str[i]+str[i+1]
*/

// My Solution: Passed

function getMiddle(s) {
    let length = s.length
    let i = 0
    if (length % 2 === 1) {
        i = Math.floor(length / 2)
        return s[i]
    } else if (length % 2 === 0) {
        i = length / 2
        return s[i - 1] + s[i]
    }

}

// Best solution

function getMiddle(s) {
    return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}


/* Isograms
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter casing)

Thinking:
.sort()? 
Regex? If /[A-Z]/ returns more 
.includes(array[0], i)?
*/

// My solution: Failed

function isIsogram(str) {
    let array = str.split('')
    for (let i = 0; i < str.length; i++) {

    }


}


// Good solution that I understand well

function isIsogram(str) {
    return str.toLowerCase().split('').every(function (v, i, arr) { return arr.indexOf(v) == i; });
}
// str.toLowerCase().split('') converts all characters to lowercase and adds them to an array with each character taking their own value

// .every(function(v, i, arr) {return arr.indexOf(v) == i;}
// v = value, i = index, arr = str turned into array
// arr.indexOf(v) checks what index each of the values within the array is.
// This works, because it only returns the first instance of the value within our array. So if there are two of the same characters in the array, then it only returns
// the index of the first one
// It then compares the index that is returned with the index of the value we are currently working with.
// So for str = "abcdaef"
// the .index of [a-d] will all = i. But when we hit the second "a", indexOf(a) will = 0 (it returns the index of the first "a") while i = 4
// .every() will only return true if ALL element within the array pass the given function. Once a false is given, it stops and returns false


// Solution more along the lines of my thinking
// Not an "optimal" solution. The example above takes significantly less time for longer strings

function isIsogram(str) {
    var i, j;
    str = str.toLowerCase();
    for (i = 0; i < str.length; ++i)
        for (j = i + 1; j < str.length; ++j)
            if (str[i] === str[j])
                return false;
    return true;
}
// tests each letter in str against all of the remaining letters of str.
// So if str = "abcdb"
// the j forloop would check every other letter in the string (a === b,c,d,b) before moving onto b for which it does the same (b === b,c,d,b)
// script ends when it either finds two matching letters, or all the letters pass successfully


// Best solution with Regex

function isIsogram(str) {
    return !/(\w).*\1/i.test(str)
}

/*
Ok so basically the regex test method validates a string against a given expression. In this case: /(\w).*\1/i

To break it down:

(\w)
The first set of parenthesis is to define a capturing group. Within that group, there is \w - this is to match any word character (basically a-zA-Z0-9_).

.* 
After that, there is a period followed by an asterisk. The period signifies any character at all - whether a letter, number, space, symbol etc. 
Usually, the engine will stop looking once a single characte ris found, however, adding the asterisk flag makes the search both optional AND greedy
 - meaning the engine will keep matching the following character until something doesn't match or the end of the string is reached. The point of 
this is that there may be other characters inbetween duplicate characters.

\1
The next part is \1 - this is where the real magic happens. A backslash followed by a number is used to point to the capture group defined earlier (in this case, (\w). Essentially, the engine treats the first matched letter as a variable, and looks for the exact same variable again. If the string only has unique characters, nothing will match because it is explicitly looking for the same character twice.
The test method returns either true or false if the expression matches something. Since the expression is looking for an instance of a repeating character, and the kata is to test the reverse, we simply invert the resulting boolean.
*/


/*
List Filtering

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

Thinking:
typeof(l[i])
.filter?
l.filter(value => indexof(value) ==='number')
*/

// My attempt with for loop: Passed

function filter_list(l) {
    let array = l
    for (let i = 0; i < l.length; i++) {
        if (typeof (array[i]) === 'string') {
            array.splice(i, 1)
            i-- // this is needed, because the .length of the list is shortened every time a string is removed. So without this, every time a string is removed,
            // the next index in the array is gets skipped because it's now targetting the index after it 
        }
    }
    return array
}

// My attempt with .filter(): Passed. Same as "best solution"

function filter_list(l) {
    return l.filter(value => typeof (value) === 'number')
}

// No regex examples?


/*
Shortest Word

Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.

Example:
findShort("bitcoin take over the world maybe who knows perhaps"); 3

Thinking:
seperate each with with .split(' ') and .length each value, sort the .lengths received and return the Math.min()
Save the .length values to a new array?
*/

// my solution: Passed

function findShort(s) {
    let stringArray = s.split(' ')
    let lengthArray = []
    for (let i = 0; i < stringArray.length; i++) {
        lengthArray.unshift(parseInt(stringArray[i].length)) // parseInt is not needed, Math.min can evaluate "number" values
    }
    return Math.min(...lengthArray) //... tells Math.min to evaluate each value in the array
}

// Best solution

function findShort(s) {
    return Math.min(...s.split(" ").map(v => v.length));
}
// s.split(' ') creates a new array with each value being the individual words from s
// .map (s => s.length) creates a new array with the .length of each of the values in the s.split array we created
// Math.min finds the smallest value within the array containing the .lengths of each word of s and it's returned


// interesting solution that does the sorting itself
function findShort(s) {
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < smallest.length) {
            smallest = arr[i];
        }
    }
    return smallest.length;
}
// splits s into an array with each word of s taking up their own value and saves it as arr
// sets the "smallest" variable which targets an index of arr. Targets index 0 at the start, but that's set to change
// for loop checks each value of arr and compares it to the index currently targetted with "smallest". If the arr index is smaller than "smallest", then it sets
// "smallest" to that index instead. Does this for all of s.length
// by the end of the loop. "smallest" should target the index of arr with the smallest word

/*Note from a comment:
in the for loop, i = 1 makes more sense, as for the first itteration of the loop we are comparing the arr[0] with smallest, which is currently arr[0]. So we are
comparing the same word.
*/

// One liner solution with .sort()
function findShort(s) {
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length || 0;
}
// sorts the s.split(' ') array by subracting the .lengths of the values, pushing the smallest value to index 0 of the array, which is targetted with the [0]
// the || 0; is technically not needed, as per the instructions state that the string with never be empty. But that's there incase findShorts('') in which case 0 is returned



/*
Jaden Casing Strings

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

Thinking:
.split(' ') each word into their own value in an array
target the first letter of each value with charAt(0)
.join(' ') back together 
*/

function jadenCase(string) {
    return string.split(' ').map(v => v[0].toUpperCase() + v.slice(1)).join(' ')
}

String.prototype.toJadenCase = function () {
    return this.split(' ').map(v => v[0].toUpperCase() + v.slice(1)).join(' ')
};

jadenCase("How can mirrors be real if our eyes aren't real")



function upperCaseFirstLetter(string) {
    return string.toLowerCase().split(' ').map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(' ');
}




/*
A Rule of Divisibility by 7

A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7. In other words, subtract twice the last digit from the number formed
by the remaining digits. Continue to do this until a number known to be divisible by 7 is obtained; you can stop when this number has at most 2 digits because
you are supposed to know if a number of at most 2 digits is divisible by 7 or not.

The original number is divisible by 7 if and only if the last number obtained using this procedure is divisible by 7.

Examples:
1 - m = 371 -> 37 − (2×1) -> 37 − 2 = 35 ; thus, since 35 is divisible by 7, 371 is divisible by 7.
The number of steps to get the result is 1.
2 - m = 1603 -> 160 - (2 x 3) -> 154 -> 15 - 8 = 7 and 7 is divisible by 7.
3 - m = 372 -> 37 − (2×2) -> 37 − 4 = 33 ; thus, since 33 is not divisible by 7, 372 is not divisible by 7.
4 - m = 477557101->47755708->4775554->477547->47740->4774->469->28 and 28 is divisible by 7, so is 477557101. The number of steps is 7.

Task:
Your task is to return to the function seven(m) (m integer >= 0) an array (or a pair, depending on the language) of numbers, the first being the last number m with at most 2 digits obtained by your function (this last m will be divisible or not by 7), the second one being the number of steps to get the result.

Forth Note:
Return on the stack number-of-steps, last-number-m-with-at-most-2-digits

Examples:
seven(371) should return [35, 1]
seven(1603) should return [7, 2]
seven(477557101) should return [28, 7]

My example:
854
85 - (2x4) = 77, which is divisible by 7 after 1 step

Thinking:
Need to remove the last digit from out number and use it. .pop()? or index -1?
loop the number and apply the equation to it each time, adding 1 to number of steps and changing the number we're starting with each time

needs to return an array with our final number and total steps
if we can insert " " before to index -1 of the string than .split(' '), it would put the last digit as its own value while the first x amount of digits would remain together
*/

// My attempt: Passed

function seven(m) {
    let num = m.toString()
    let array = []
    let output = []
    let y = 0
    let steps = 0
    for (let i = 1; num.length > 2; i++) {
        array = num.split('')
        y = array.pop()
        num = (array.join('') - (2 * y)).toString()
        steps = i
    }
    output.unshift(parseInt(num), steps)
    return output
}
seven(1603)

// My attempt explained:

function seven(m) {
    let num = m.toString() // saves m to num and converts the number to a string so we can use .length on it
    let array = [] // sets an empty array that will contain num so we can use .pop() on it
    let output = [] // our final output array that we will .unshift() the needed values into
    let y = 0 // sets y, which will be set to the last digit of m in our for loop
    let steps = 0 // sets steps, which will be a value added to output later on. Steps is essentially how many times our for loop peforms a loop
    for (let i = 1; num.length > 2; i++) { // loop will continue as long as num has more than 2 digits. i is used to set steps
        array = num.split('') // turns num into an array with each digits taking their own value, saves to the pre-made array
        y = array.pop() // .pop() removes the last value of array and returns the value removed. We save that removed value as y
        num = (array.join('') - (2 * y)).toString() // joins the array into a string so we can perform the equation. Then turns the result of the equation to a string
        // so we can use .length on it again. Then saves it as our new num
        steps = i // changes steps to i, which should be how many times the loop has been performed
    }
    output.unshift(parseInt(num), steps) // adds num (changed to an int) and steps to our previously made output array via .unshift. (adds to the beginning)
    return output // returns the output array
}


// "Best solution". Similar to mine, but better readability

function seven(m) {
    let i = 0;
    while (m.toString().length > 2) {
        m = Math.floor(m / 10) - (m % 10) * 2;
        i++;
    }
    return [m, i];
}
// uses a while loop instead of a for loop, which makes more sense. The conditional is essentially the same as our though, except we converted m to a string
// before entering the loop.
// Performs the equation without the use of arrays to remove the values. 
// Math.floor(m / 10); divides m by 10 making the last digit a decimal and Math.floor() removes that decimal
// (m % 10) takes the remainder of m % 10 and uses that. m % 10 === the decimal produced from m / 10

// Actual "Best solution IMO" Similar to the solution above, but m doesn't constantly get changed from numbers to strings and back for no reason

function seven(m) {
    let steps = 0;
    while (m > 99) {
        m = Math.floor(m / 10) - 2 * (m % 10);
        ++steps;
    };
    return [m, steps];
}

// solution using .slice()

const seven = m => {
    let count = 0;
    while (m.toString().length > 2) {
        let str = m.toString();
        let x = str.slice(0, -1);
        let y = str.slice(-1);
        m = x - 2 * y;
        count++;
    }
    return [m, count];
}


/*
Ones and Zeros

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

// Solution(not mine). Set to show how parseInt(x, 2) can be used to convert a number to binary and other different forms of radix

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
// or
function binaryArrayToNumber(arr) {
    return parseInt(arr.join(''), 2);
}

// another solution without parseInt doing all the work

const binaryArrayToNumber = arr => {
    let sum = 0;
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        sum += arr[i] * (2 ** j);
        j++;
    } return sum
};
binaryArrayToNumber([1, 0, 1, 1]);


/*
Credit Card Mask

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

"What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"

Thinking:
.splice(0, -4) to take the last 4 numbers

*/

// My solution: Failed? Says "expected 'p' to equal 'xzp'", but the instructions don't indicate anything about that? I feel like it's a problem with the Kata

function maskify(cc) {
    let array = cc.split('')
    let output = array.slice(array.length - 4)
    for (let i = 4; i < array.length; i++) {
        output.unshift('#')
    }
    return output.join('')
}
maskify("4556364607935616")

// Similar solution to mine, but with cc[i]

function maskify(cc) {
    cc = cc.split("");
    for (var i = 0; i < cc.length - 4; i++) {
        cc[i] = "#";
    }

    cc = cc.join("");
    return cc
}
// in the for loop, they are changing the character at index i to "#" instead of .unshift('#')


// Solution using .replace() and Regex

function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
// cc.slice(0, -4) takes everything except the last 4 characters
// .replace(/./g, '#') the regex matches every character in the string and .replace() replaces those matched characters with "#". This works because we've already
// removed all of the characters we wish to keep
// + cc.slice(-4) adds the last 4 characters of cc to the string

// soluting using .replace() and Regex without slicing

function maskify(cc) {
    return cc.replace(/.(?=.{4})/g, "#");
}
// . matches all characters in the string, (?=.{4}) matches the last 4 characters in the string and excludes them from the initial match
// cc.replace(/.(?=.{4})/g, "#") replaces the matched characters in our string with #. So that should be all but the last 4 chars

/*
Complementary DNA

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); 
you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

Thinking:
loop each value of the array and use if/elseif to change A to T, T to A, G to C, and C to G

*/

// my solution: Passed. But poor practice. Most users used objects 

function DNAStrand(dna) {
    let array = dna.toUpperCase().split('')
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'A') {
            array[i] = 'T'
        } else if (array[i] === 'T') {
            array[i] = 'A'
        } else if (array[i] === 'C') {
            array[i] = 'G'
        } else if (array[i] === 'G') {
            array[i] = 'C'
        }
    }
    return array.join('')
}


// Best solution

const pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
// an object with key-value pairs to switch one char to another

function DNAStrand(dna) {
    return dna.split('').map((v) => pairs[v]).join('');
}
// each value of dna.split('') gets implemented into .map and has pairs[v] applied to it.
// so pairs["A"] is the syntax to access the pairs object and take the value stored under the key "A", which is "T". That "T" is returned and thrown into a new array
// after .map has applied pairs[v] to all of the values of dna, the array created from those values have .join('') applied to turn it into a string


/*
Two to One

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/
//Test
let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"
longest(a, b)


function longest(s1, s2) {
    let string = s1 + s2
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let result = ""
    for (let i = 0; i < alphabet.length; i++) {
        let char = alphabet[i]
        if (string.indexOf(char) >= 0) { result += char }
    }
    return result
}



// Best solution

function longest(s1, s2) {
    return [...new Set(s1 + s2)].sort().join('')
}
//new Set creates a "Set" which is an iterable object, out of the values from (s1+s2). A set can not contain multiple elements of the same value. So it's a good
// way to filter out duplicate values
// the ... (spread) passes each element from out set to be put into an array? Needs to be an array in order to apply .sort()
// .sort() sorts each value of our array and then .join("") turns them back into a string
// without the ... (s1+s2) gives us a Set with the values, which we cannot use .sort() on
// Array.from(new Set(s1 + s2)) can also be used to convert out Set into an array

// same as above, but uses Array.from() instead of "..." to convert out set into an array

function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}


// Solution without the use of Set

function longest(s1, s2) {
    let s3 = s1 + s2;
    let s4 = s3.split("");
    s4 = s4.sort().filter(function (element, index, array) {
        return element !== array[index - 1];
    });
    return s4.join("");
}
// s3 = s1 + s2; combines s1 and s2 into one string, which we save as s3 to be used later
// s4 = s3.split(""); creates a new array with the values from the s3 string. Each char taking up their own value in the array
// s4.sort() sorts the letters in the array from a-z, which would put mutliples of the same character next to each other (a, a, a, b, b, c, d, d...)
// .filter() creates a new array using the values from s4 that pass the outlined function
// the function compares each element of s4 to the element directly next to it and returns it only if it IS NOT EQUAL
// this is an effective way of removing any duplicates, as only the first occurance of a char should = true and be returned
// finally we .join('') the values that passed out .filter() function and return the string that .join('') creates

function longest(s1, s2) {
    return (s1 + s2).split("").sort().filter((element, index, array) => element !== array[index - 1]).join("");
}
// same example as above, but made in a 1 line syntax and without the unnecessary varaible assignements

// Solution that's the same as the above example, uses .replace(Regex) instead of .filter()
function longest(s1, s2) {
    return (s1 + s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
}

/*
Growth of a Population

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.

More generally given parameters:
p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
the function nb_year should return n number of entire years needed to get a population greater or equal to p.
aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
*/

//tests
nbYear(1500, 5, 100, 5000)
nbYear(1500000, 2.5, 10000, 2000000)

// my solution: Passed

function nbYear(p0, percent, aug, p) {
    let years = 0
    while (p0 < p) {
        p0 = p0 * (percent / 100) + aug + p0
        years++
    }
    return years
}
// could put the equation inside of a Math.round() so we aren't working with a decimal number amount of people. But because we are just returning the number of
// loops (years), that messy decimal number doesn't really matter

// All solutions are pretty much mine. Just some using for loops, some using if statements, some using 1 line for/while loops, etc.

/*
Friend or Foe?

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/

// my solution: passed. Best solution

function friend(friends) {
    return friends.filter(v => v.length == 4)
}
// comments talking about things like "1234" passing the test. Although the instructions don't stipulate that "friends" could be numbers, comments suggest
// it's best practice to check

function friend(friends) {
    return friends.filter(f => f.length == 4 && /^[a-zA-Z]+$/.test(f))
}

// checks to see if "friends" only contains letters. Prevents thing like "1234" or "To m" from getting returned

/*
Sum of odd numbers

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

Thinking:
1
8
27
64
125
1, 3, 7, 13, 21. increase by 0, 2, 4, 6, 8...
rowSumOddNumbers(5)
row = 0
row + 2(5)
row += row+2
previous first number + (previous row * 2) = first number on new row
let previous first number = 1
first number on new row = previous first number + (previous row * 2)
Note: row = number of numbers in the row
let increase = 2 + (row -1)
2 + (1 - 1) = 2
2 + (2 - 1) = 3
row 1 should = 0 increment, row 2 should = 2 increment, row 3 should = 4 increment
increment row + 2?


*/

// best solution...

function rowSumOddNumbers(n) {
    /* The rows' start numbers are Hogben's centered polygonal numbers:
       1, 3, 7, 13, 21, 31, 43 = b[n] = n^2 - n + 1.
       <https://oeis.org/A002061>
       
       The sum of one row is given by:
       s[n] = n^2 + n(b[n] - 1).
       <https://www.quora.com/What-is-the-sum-of-n-consecutive-odd-integers/answer/Xavier-Dectot>
       
       Inline b[n]:
       s[n] = n^2 + n(n^2 - n + 1 - 1)
            = n^2 + n(n^2 - n)
            = n^2 + n^3 - n^2
            = n^3
       ... oh. */
    return n * n * n;
}

/*Grasshopper - Summation

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
For example:
summation(2) -> 3
1 + 2
summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

function summation(num) {
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}
summation(8)


/*
Find the smallest integer in the array

Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/


function findSmallestInt(args) {
    return Math.min(...args)
}


/*
Remove String Spaces

Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x) {
    return x.split(' ').join('')
}

/*
Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += (numbers[i] ** 2)
    }
    return sum
}

/*
Counting sheep...

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
For example,
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.
Hint: Don't forget to check for bad values like null/undefined
*/

function countSheeps(arrayOfSheep) {
    let sum = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) { sum++ }
    }
    return sum
}

// Best solution:
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

/*
Keep Hydrated!
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5
*/

function litres(time) {
    return Math.floor(time * 0.5)
}

/*
Is n divisible by x and y?

Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
*/

function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true
    } else {
        return false
    }
}

// Best solution, similified version of mine:
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
}

/*
Century From Year

Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task
Given a year, return the century it is in.
Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

function century(year) {
    return Math.ceil(year / 100)
}

/*
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/

function digitize(n) {
    return String(n).split('').reverse().map(v => parseInt(v))
}

/*
Beginner - Lost Without a Map

Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]
*/

function maps(x) {
    return x.map(v => v * 2)
}

/*
Invert values

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
*/

function invert(array) {
    return array.map(v => v * -1)
}

/*
Count of positives / sum of negatives

Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input array is empty or null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/


function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
        return [];

    let positive = 0;
    let negative = 0;

    for (let i = 0; i < input.length; ++i) {
        if (input[i] > 0) {
            positive++;
        } else if (input[i] < 0) {
            negative += input[i];
        }
    }
    return [positive, negative];
}

/*
Reversed Words

Complete the solution so that it reverses all of the words within the string passed in.
Example:
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

function reverseWords(str) {
    return str.split(' ').reverse().join(' ')
}

/*
Calculate average

Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/

function find_average(array) {
    if (array.length == 0) { return 0 }
    return array.reduce((pV, cV) => pV + cV) / array.length
}

/*
Get the mean of an array

It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
Return the average of the given array rounded down to its nearest integer.
The array will never be empty.
*/

function getAverage(marks) {
    return Math.floor(marks.reduce((pV, cV) => pV + cV) / marks.length)
}

/*
Basic Mathematical Operations

Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

function basicOp(operation, value1, value2) {
    let sum = 0
    switch (operation) {
        case "+":
            sum = value1 + value2
            break;
        case "-":
            sum = value1 - value2
            break;
        case "*":
            sum = value1 * value2
            break;
        case "/":
            sum = value1 / value2
            break;
    }
    return sum
}

// best solution:

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

/*
Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F
*/

function abbrevName(name) {
    return name.split(' ').map(v => v[0].toUpperCase()).join('.')
}


function abbrevName(name) {
    return name.match(/\b[a-z]/gi).join('.').toUpperCase()
}

/*
A Needle in the Haystack

Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5"
*/
function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") { return "found the needle at position " + i }
    }
}

/*
Remove the minimum

The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. 
She gives them a rating, and then removes the one with the lowest rating.
However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the 
items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, 
remove the one with a lower index. If you get an empty array/list, return an empty array/list.
Don't change the order of the elements that are left.

Examples
removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]
*/
//tests
[78, 125, 257, 179, 94, 263, 130, 41, 27, 141, 263, 116, 298, 199, 163, 350, 67, 78, 374]
[78, 125, 257, 179, 94, 263, 130, 41, 141, 263, 116, 298, 199, 163, 350, 67, 78, 374]
[78, 125, 257, 179, 94, 263, 130, 41, 27, 141, 263, 116, 298, 199, 163, 350, 67, 78, 374]
function removeSmallest(numbers) {
    let numbersCopy = [].concat(numbers)
    numbersCopy.splice(numbersCopy.indexOf(Math.min(...numbersCopy)), 1)
    return numbersCopy
}

/*
The highest profit wins!
Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples
minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]
*/

// my solution: passed

function minMax(arr) {
    let result = []
    result.push(Math.min(...arr), Math.max(...arr))
    return result
}

//best solution
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}


/*
Money, Money, Money

Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in 
order for it to amount to a desired sum of money 'D'.
The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:
  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00
After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
*/

function calculateYears(principal, interest, tax, desired) {
    let sum = principal
    let years = 0
    while (sum < desired) {
        sum = sum + (sum * interest) - (sum * interest * tax)
        years++
    }
    return years
}

// similar, but simpler math solution

function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while (principal < desired) {
        principal += (principal * interest) * (1 - tax);
        years++;
    }
    return years;
}

/*
Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
    return str.split(' ').map(v => v.split('').reverse().join('')).join(' ')
}


/*
Testing 1-2-3

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:
number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
*/

var number = function (array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = `${i + 1}: ${array[i]}`
    }
    return array
}

var number = function (array) {
    return array.map((v, i) => `${i + 1}: ${v}`)
}


/*
Find the stray number

You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.
The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== numbers[i + 1]) { return numbers[i + 1] }
    }
}

function stray(numbers) {
    numbers.sort()
    if (numbers[0] != numbers[1]) {
        return numbers[0]
    }
    return numbers[numbers.length - 1]
}

/*
Anagram Detection

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive
Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples
"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"
*/

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


/*
Sum of two lowest positive integers
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {
    let sortedArr = numbers.sort((a, b) => a - b)
    return sortedArr[0] + sortedArr[1]
}

/*
Printer Errors

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm 
meaning that the printer used three times color a, four times color b, one time color h then one time color a...
Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational 
whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/

function printerError(s) {
    let errorChar = "nopqrstuvwxyz"
    let errorCount = 0
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (errorChar.indexOf(char) >= 0) { errorCount++ }
    }
    return `${errorCount}/${s.length}`
}

// best solution:

function printerError(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] > "m") {
            count++;
        }
    }
    return count + "/" + s.length;
}

// regex solution: 
function printerError(s) {
    return `${s.replace(/[a-m]/ig, '').length}/${s.length}`;
}

/*
Categorize New Member

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that 
will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; 
the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the 
person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [(18, 20), (45, 2), (61, 12), (37, 6), (21, 21), (78, 9)]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

function openOrSenior(data) {
    return data.map(v => v[0] > 54 && v[1] > 7 ? "Senior" : "Open")
}

/*
Binary Addition

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a, b) {
    return (a + b).toString(2)
}
// .toString(2) converts an int to binary in the form of a string

/*
16+18=214

For this kata you will have to forget how to add two numbers.
Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016
In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)
You may assume both integers are positive integers.

tester(   16,   18,  214);
tester(   26,   39,  515);
tester(  122,   81, 1103);
*/

function add(num1, num2) {

    num1 = num1.toString().split("").reverse().join("");
    num2 = num2.toString().split("").reverse().join("");

    if (num1.length < num2.length) {
        [num1, num2] = [num2, num1];
    }

    let returnString = "";
    for (let i = 0; i < num1.length; i++) {
        let int1 = parseInt(num1[i]);
        let int2 = parseInt(num2[i] || 0);
      
        returnString = (int1+ int2).toString()+returnString;
    }
    
    return parseInt(returnString);
}
// we reverse the numbers and turn them into string. We reverse them to make them easier to handle arguments that have two numbers with different total numbers (99 vs. 100)
// we turn them to string so we can effectively use string[] to target certain indexes

// we need to make sure we are looping enough times, so the longer number (100) needs to be the target for num.length. So if num2 is longer than num1, we switch
// the values associated with each variable, so num 1 will be the longest

// we loop num1.length amount of times and add the numbers at index i of num1 and num2 together after converting them to ints (as they are currently string, so "1" + "1" = "11")
// we then turn the result of that addition back into a string and add it to the returnString variable.
// if num2[i] returns -1 (which it will do if num1 is a longer number), then 0 is used instead

// we then parseInt(returnString) to get out result 


/*
Remove consecutive duplicate words

Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
--> "alpha beta gamma delta alpha beta gamma delta"
*/


function removeConsecutiveDuplicates(s) {
    s.split(" ").filter((v, i, arr) => v != arr[i - 1]).join(" ");
}

//regex solution:

const removeConsecutiveDuplicates = s => s.replace(/\b(\w+)(?: \1)+\b/g, '$1')
