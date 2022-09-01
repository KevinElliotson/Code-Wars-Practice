/*
Rearranging formulas:

Taking a formula and performing the opposite action to change something like "a + b = c + d" to "a + b - d = c"
What you do to one side of the "=" you must do to the other.
Opposites:
* = /
- = +
** =  Math.sqrt()

examples:
4 = n - 2 To remove the -2 to make it 4 = n, we need to add 2 to each side. So 4+2 = n. n = 6
s = d/t (speed = distance over time). Find d. to remove the /t, we need to multiple each side by t. So s * t = d
x^2 = 64. To remove the ^2, we need to square root each side. So x = Math.sqrt(64). x = 8













Arithmetic Progression:

A sequence of numbers such that the difference between the consecutive terms is constant. An incremental increase on each term
Example: 9, 12, 15, 18, 21, 24... What is the number on the 20th term?

Formula:
a(n)=a(1)+(n-1)d

n       =   how many terms we have incremented. (so the 20 in the example above)
a(n)	=	the nᵗʰ term in the sequence. 
a(1)	=	the first term in the sequence (so the 9 in the exaple above)
d	    =	the common difference between terms.(so 3 in the example above)

So
d = 3
n = 20
a(1) = 9
a20 = 9 + 19 * 3 = 66

Another Example:
Steffi got a job with a starting salary of 15,000 per month. She will get an increment of 100 per month.

What will be her salary after 20 months?

d = 100
n = 20
a(1) = 15,000

a20 = 15,000 + 19 * 100
= $16,900 will be her month salary in month 20

In which month will she have a monthly salary of 18,600?

d = 100
n = ?
a(1) = 15,000
a(n) = 18,600
a(n)=a(1)+(n-1)d
To remove everything except n from the right side. We need to perform the opposite operators to both sides of the equal sign.
so
a(n) - a(1) / d = n-1
(18,600 - 15,000)/d = n-1
3600/100 = 36. 36 = n-1 changes to 36 + 1 = n
n = 37
So on the 37th term, Steffi's monthly salary will be 18,600

Find a7 for the arithmetic progression where a3 = 22 and a17 = -20 (find d and t1)
a(n)=a(1)+(n-1)d 

n = 3 
a3 = 22, 
a3 = t1 + (3 - 1)d = 22 
t1+(2*d) = 22

n = 17
a17 = -20
a17 = t1 + (17-1)d = -20
t1 + (16*d) = -20

t1 + (2*d)  =  22   -               t1 - t1 = 0. 2d - 16d = -14d. 22 - -20 = 42
t1 + (16*d) = -20   
----------------------
-14d = 42                           -14d / - 14 = d. 42 / =14 = -3
d = -3

n = 3
a3 = 22
d = -3
22 = a(1)+(3-1)-3
22 = a1 + -6
28 = a1

t7 = 28 + 6 * -3 = 10
*/