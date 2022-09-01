# Even or Odd
# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

# Vowel Count
# Return the number (count) of vowels in the given string.
# We will consider a, e, i, o, u as vowels for this Kata (but not y).
# The input string will only consist of lower case letters and/or spaces.

def get_count(sentence):
    x = list("aeiou")



'''
Check same case

Write a function that will check if two given characters are the same case.

If any of characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters and not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
'''

# best solution:
def same_case(a, b): 
    if a.isalpha() and b.isalpha():
        if (a.islower() and b.islower()) or (a.isupper() and b.isupper()):
            return 1
        else:
            return 0
    else:
        return -1
# .isalpha() returns true if all characters in the string are letters. So the first if statement is passed if both a and b are letters

'''
get character from ASCII Value

Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:
get_char(65)
should return:
'A'
'''

def get_char(c):
  return chr(c)

'''
Pirates!! Are the Cannons ready!??

Description:
Ahoy Matey!

Welcome to the seven seas.
You are the captain of a pirate ship.
You are in battle against the royal navy.
You have cannons at the ready.... or are they?
Your task is to check if the gunners are loaded and ready, if they are: Fire!
If they aren't ready: Shiver me timbers!
Your gunners for each test case are 4 or less.
When you check if they are ready their answers are in a dictionary and will either be: aye or nay
Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)
If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!
'''


def cannons_ready(gunners):
    for i in gunners:
        if gunners[i] == 'nay':
            return 'Shiver me timbers!'
    return 'Fire!'


'''
Vowel remover

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
'''

def shortcut(s):
    