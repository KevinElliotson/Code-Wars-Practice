/*
Character Classes for regular expressions (Regex)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes

String Methods often applied to utilize Regex:
*/ 
//.test(); returns true or false whether there was a successful match or not
// "".test(regexp)
"hello".test(/hello/); // returns true
"hello".test(/hi/); // returns false

//.match(); returns matches to an array, with each match taking up their own value
//Syntax: "".match(regexp)
"hello".match(/hello/); // returns ["hello"]
"hello".match(/./g); // returns ["h", "e", "l", "l", "o"]

//.replace(); replaces matches with a specified replacement and returns the string. Note that it will return the string whether a successful replacement has occurred or not
//Syntax: "".replace(regexp, newSubstr) or "".replace(regexp, replacerFunction)
"hello world".replace(/hello/, "hi"); // returns "hi world"
"hell world".replace(/hello/, "hi"); // returns "hell world", as a match wasn't found to make the replacement
// replacing with a callback to a capture group. In this case, it matches word1_word2 and replaces them with word2_word1
"hello world".replace(/(\w+) (\w+)/, '$2 $1')
// replacerFunction:
// instead of replacing with a string or a string with a capture group, we can use a replacer function
"72ello".replace(/(\d+)/, v => String.fromCharCode(v)) // outputs "Hello"
// a callback to a capture group cannot be used inside of an argument of a method, this is a time where a replacer function can be useful
"72ello".replace(/(\d+)/, String.fromCharCode($1)) //this will not word, $1 is not defined in this instance
// Can also do whatever you want with the match you've made with replace, as you'd expect. Like math
"72ello".replace(/(\d+)/, v => Number(v) + 5) // outputs "77ello"

// .search(); searches the string for a match, then it returns the location of the START of the match with its index number. Only returns first match and returns
// -1 if there are no matches
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
paragraph.search(/dog/g); // returns: 40, the index number of start of "dog" (so the "d" in "dog") in our paragraph
paragraph.search(/./g); // returns: 0, the index number of the first character of our paragraph
paragraph.search(/cat/g); // returns: -1, as a match could not be found in the paragraph
paragraph.search(/[^\w\s]/g); // returns: 43, the index number of the "." in our string. [^\w\s] matches any non-word or whitespace character in the string
// despite there being multiple possibly matches (".", "," and "?") only the first match is returned. I don't think we can change this?

// Common way to usilize .search():
paragraph[paragraph.search(/[^\w\s]/g)]; // returns "."
// paragraph.search(/[^\w\s]/g) returns the index number of ".", which is 43, which puts that 43 between the square brackets
// which makes paragraph[43], which is the syntax to return the character at the index number we implement
paragraph.slice(paragraph.search(/dog/g)); // returns: "dog. If the dog barked, was it really lazy?"
// .slice uses the returned index number of the starting index of where we was to slice. So we slice the string starting at the point where we made a match
paragraph.search(/\d/g) === -1; // .search returns: -1, which makes our overall statement return: true
// good way to check to see whether or not the string contains a certain value



/*
\; Indicates that the following character should be treated specially, or "escaped". 
So characters that are usually treated specially, like "." (which matches any character except line breaks), will be used literally,as in we are asking to match "."
And characters that are usually treated literally, like "d", will be treated specially, like \d, which matches any digit

dot (.); Matches any single character including spaces except line breaks.
for "gskinner.com,"
/./; matches "g" (the first character in the string)
/.m/; matches "om", the first m character in the string and the character that appears before it
/m./; matches "m,", the first m character in the string and the next character that follows it
/./g; matches "gskinner.com,", matches every character inside the string
/...\./; matches "nner.", the "." plus the 4 characters before it

\d; Matches any digits (arabic numberal), so equivalent to [0-9]
for: "Your hotel room is room b13"
/\d/; matches "13"
\w; matches any "word character". "word characters" include [a-z], [A-Z], [0-9] and _

\D; Matches any non-digit character, so equivalent to [^0-9]
for: "Your hotel room is room b13"
/\D/; matches "Y"
/\D/g; matches "Your hotem room is room b"

\b; matches a word boundary, meaning characters with a non-character value on their left, like whitespace from a new line or " ". 
Good way to target the first letters of a word/digit or how many words start with the letter/digit that we are matching
Examples:*/
let greeting = "Hello my friends, welcome to the show. We have booze and games to play between the team twe"
greeting.match(/\bwe/gi); // matches "we" and "We" from "welcome" and "We", but not the "we" from "between" or from "twe"
/*
\B; matches non a word boundary, meaning characters that are not match by \b. So characters with characters on their left.*/
greeting.match(/\Bwe/gi); // matches the "we"s that were left out of the match in the previous example, but does not match the previously matched "we"s
greeting.match(/we/gi); // matches all 4 of the "we"s

/*
/^x/; matches the beginning of the string that our regex is being applied to.
/x$/; matches the end of the string that our regex is being applied to.
Using both ^ and $ together is a good way to outline a specific number of characters in order for a match to succeed.
[^x]; can also be used to negate a set. So any character after the caret (^) will NOT match, assuming it's within the boundries of a set. 
*/
greeting.match(/^hell/gi); // matches the "hell" at the start of the string
greeting.match(/^e/gi); // does not match, returns null
greeting.match(/e$/gi); // matches the "we" at the end of the string
let phoneNos = ['9059388470', '28921448741', '905685406'];
phoneNo1.map(value => value.match(/^\d{10}$/)); 
// matches "9059388470", but not '28921448741' or '905685406'. The 10 digits from the beginning of the string need to be the same as the 10 from the end
phoneNo1.map(value => value.match(/^\d{10}/)); 
// also match "9059388470", but it also matches "2892144874" exluding the "1"at the end and does not match "905685406". There only needs to be 10 digits from the beginning,
// there can be more, but not less
phoneNo1.map(value => value.match(/\d{10}$/)); 
// matches "9059388470" and "8921448741" excluding the "2" at the start. And again, does not match "905685406"
phoneNo1.map(value => value.match(/[^905]/g));
// matches "9388470", "28921448741" and "685406"


/*
+; matches one or more of the proceding tokens
*; matches 0 or more of the proceding tokens
*/
"goooal!".match(/go+/); // returns "gooo". Matches "go" plus any additional "o"s that come after
"gut feeling".match(/go*/); // returns null, at least 1 "o" needs to be found after a "g" in order for a match to be made
"goooal!".match(/go*/); //returns "gooo" Matches "g"+ however many "o"s come after it
"gut feeling".match(/go*/); // returns "g". It matches "g" if 0 or more "o"s come after if, for which there are 0, so only the "g" matches
"over the moon".match(/go*/); // returns null, no matches, as "g" is not found in the string
/*
/x{num}/; matches num amount of characters of the previous token (x).
/x{minNum,maxNum}/; offers a range of possible number of match of the previous token(x). x{2-3}; would match "xx" or "xxx", but will not match "x" and will only match a
maximum of 3 "xxx" even if it was "xxxxxxxxx"
/x{num,}/; Matches num of more. x{3,} would match "xxx" and "xxxxxxx", but not "xx"
/colou?r/; ? Matches 0 or 1 characters. So common use for things like colour and favourite, to allow the spelling of both American and British spelling of words
// so both "color" and "colour" would match

/*
Posititive and Negative look-aheads
Positive lookahead Matches a group after the main expression without including it in the result.
Ex:*/
let arr = ["1pt", "2px", "3em", "4px"]; 
arr.map(value => value.match(/\d(?=px)/)); // will match the string if it's in the format of a digit followed by "px", but it will only match the digit, not the lookahead.
// So it matches "2" and "4". Technically, this returns [null, "2", null, "4"], but the point is that it only matches the digit
// /(?=x)/ indicates a positive look-ahead
/*
Negative lookahead Specifies a group that can not match after the main expression (if it matches, the result is discarded). So it matching if they do not contain
what's specified.*/
arr.map(value => value.match(/\d(?!px)/)); // will match the string if it's a digit followed by anything that isn't "px"
// so "1" and "3" would match
// Technically, if there was a string like "12px" in the array, the "1" from it would also match, don't know how to fix this yet
/*
Positive Lookbehind
Matches a group before the main expression without including it in the result.
(?<=ABC)
Negative Lookbehind
Specifies a group that can not match before the main expression (if it matches, the result is discarded).
(?<!ABC)
*/

/*
Capture groups using parenthesis
Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.
/(ha)+/; (hahaha) (ha)a (ha)h!; looks for one or more occurance of out "ha" capture group
Referencing a capture group
Matches the results of a capture group. For example \1 matches the results of the first capture group & \3 matches the third.
/(\w)a\1/; (hah) (dad) bad dab (gag) gab; looks for a word character, followed by an a, followed by the same word character that got
matched in the capture group

Example:
/(\w+)\s\1/; would match "regex regex" but
/(\w+)\s(\w+)/; would not only match "regex regex", but would also match "regex fwifklsnfsiuo"

Replace with Capture Groups
Example:
*/
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1') // swaps the two words, returning "Camp Code". $2 is a callback to capture group 2, $1
// is a callback to capture group 1. So we're replacing the matches string with "$2" + " " + "$1"

greeting.match(/^.{3}/gi); // Matches "Hel". Matches the first 3 characters of the string. If there are less than 3 characters in the string, there will be no match.
greeting.match(/.{4,}$/gi); // Matches the entire string, but will only match if there are 4 or more characters in the string
// good way to check if the string has more than x amount of characters
greeting.match(/^.{2,9}/gi); //matches "Hello my ", the first 9 characters in the string
greeting.match(/^[a-z]{2,9}/gi); // matches "Hello", as [a-z] only matches letters and stops at non-letters
greeting.match(/^[a-z]{6,9}/gi); // does not match, as there are not 6 letters at the beginning of the string before the first non letter
greeting.match(/[a-z]{6,9}/gi); // matches "friends", the first chunk of letters that contain anywhere between 6 and 9 characters

let phoneNumbers = ["905-938-8470","289-214-4874","2891-905-412"]
phoneNumbers.match(/^\d{3}/g); // results in an error, as .match can not be applied to an array, only to strings
phoneNumbers.map(value => value.match(/^\d{3}/g)); // returns ["905","289","289"]
// applies the .match(regex) to each value of our phoneNumbers array, which are strings, so no error

/*
Capture group "()"
Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.
Can use "or" (|) effectively with a capture group, outlining thing like valid area codes in phone numbers (289|905) or the end of a website like (.com|.net|.org).
Can also be back reverensed with \num. For example, if we want to see if a phone number is in a valid format. That format being:

3 digits, followed by a . - " " or nothing, then another 3 digits, followed by the . - " " or nothing, then 4 digits
*/
let phoneNumbers5 = ["289-214-4870", "9059388470", "649.689.4063", "123 456 7891"]
let validNos = phoneNumbers5.map(value => value.match(/^(\d{3})(\.|-|\s)?\d{3}\2\d{4}$/))

/*
$ can also be used to callback to a capture group when using something like .replace()
*/
let phoneNumber = "1234567890"
function createPhoneNumber(numbers){
    return numbers.replace(/(...)(...)(.*)/, '($1) $2-$3');
  }
createPhoneNumber(phoneNumber)
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
Greedy vs. Lazy matching with ?;
Greedy (the default) will match as much as it possibly can within the outlined regex
Lazy (outlined with ?) will match as few as it possibly can within the outlined regex
*/
"titanic".match(/t[a-z]*i/) // matches "t" followed by as many characers as it can before hitting another "i", so it matches "titani" in this situation
// it matches all characters that fit the [a-z]* perameter until something doesn't fit, then it uses the last i before that non match?
"titanickfjgkfjgi".match(/t[a-z]*i/) // matches "titanickfjgkfjgi"
"titanickfjgkfjgifjnjfdfsj".match(/t[a-z]*i/) // matches "titanickfjgkfjgi", up to the last "i" in the string
"titanickfjgkf   jgifjnjfdfsj".match(/t[a-z]*i/) // matches "titani", the whitespace is does not match the [a-z]* outline, 
//so the last "i" before the whitespace is the stopping point

"titanic".match(/t[a-z]*?i/) // matches "ti" because the * allows the [a-z] to match 0 characters, so if the next letter after "t" is "i", then the match will be 
//lazy and just pick the shortest option, which is "ti"
"titanic".match(/t[a-z]+?i/) // matches "titani", because the [a-z]+ needs to match at least 1 character before the "i" finishes the match

// Practice examples:
/*
Valid Username:
1) If the Username containers numbers, they must be at the end
2) Letters can upper and lowercase
3) Must be at least two characters long, but must contain at least two letters
*/
string.match(/^[a-z]{2,}\d*$/);
// ^[a-z]{2,} string must has two or more letters at the beginning of the string
// \d*$, string can have 0 or more digits at the end of the string 

//Commonly used Regex
string.match(/^\d{10}$/) // matches the string if it contains exactly 10 digits and only digits
string.match(/^\w{10}$/); // matches the string if it contains exactly 10 word characters and only word characters

string.match(/\d/g).length; // matches all digits in the string and returns the .length of that matches. Good way to see how many digits are in a string
string.match(/[a-z]/gi).length; // the same as above, but with letters

