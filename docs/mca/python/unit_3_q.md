
---
title: "Python Unit-3 Previous Questions"
description: ""
date: 2024-12-17T22:34:58+05:30
lastmod: 2024-12-17T22:34:58+05:30
draft: false
---

# Python Unit-3 Previous Questions


#### SEMESTER END EXAMINATIONS – JUNE 2024

Write a Python function named `calculate_sum` that takes two integers as input and returns their sum. Then, write another function called `calculate_product` that takes two integers as input and returns their product. Demonstrate both functions by providing suitable inputs.

Explain recursion in Python functions. Provide an example illustrating the use of recursion to solve a specific problem.

Describe the purpose and usage of lambda functions in Python. Provide an example to illustrate the use of lambda functions.

___

Discuss the importance of using docstrings in Python functions. Explain how docstrings enhance code readability and maintainability. Provide an example demonstrating the use of docstrings in a Python function.

Write a Python program that defines both local and global variables and demonstrates their scope and usage. Explain briefly the difference between local and global variables in your program.

Explain how `*args` and `**kwargs` allow the function to accept a variable number of arguments and keyword variable_length arguments. Explain how they differ from positional arguments through another program.

___

#### BACKLOG SUBJECT EXAMINATIONS – SEPTEMBER / OCTOBER 2023

Explain the following arguments to functions in python with examples. (i) Keyword arguments (ii) Default arguments (iii) Variable length arguments.

Write a Python function that takes two lists and returns True if they have at least one common member
```
Input: `list1=[1,2,3,4,5], list2=[5,6,7,8,9])`
Output: True

Input: `list3=[1,2,3,4,5], list4=[6,7,8,9])`
Output: None.
```

What are DOC strings? Illustrate with an example.

____

Explain list comprehension with example. Write a python program that initializes a list with numbers from 1 to 20 using list comprehension. Print how many odd numbers present in the list and sum of even numbers in the list.

Write short notes on the following: (i) Mapping (ii) Filtering (iii) Anonymous functions.

___

#### SEMESTER END EXAMINATIONS – MAY / JUNE 2023

Illustrate different function parameters in python with suitable examples.

Explain the scope of global and local variables.

Develop a python program to calculate and return the average of given list of integers using functions.

___

Write a short notes on the following: i) Mapping ii) Filtering iii) List Comprehension.

Discuss lambda function with suitable examples.

Discuss recursion? Explain the working of recursion using factorial program.

___

#### SUPPLEMENTARY SEMESTER EXAMINATIONS – SEPTEMBER 2022

Let a be the list of values produced by range(1,50). Using the function map, filter, reduce and a lambda argument, write the expression that will produce each of the following.
(i) A list of values in a divisible by 3 and not divisible by 7
(ii) Sum of list of odd numbers of a
(iii) Sum of list of cubes of all numbers of a
(iv)Sum of list of squares of numbers which are divisible by 5 in a.
Rewrite the same using list comprehension.

Write a Python recursive function, Hanoi, which implements a recursive solution for Towers of Hanoi.

___

Illustrate the following with example: i) DOC strings ii) local and global variables iii) pass by value and pass by object reference in python iv) Variable length arguments.

What will be the output of the following code snippets:
```
def test(n):
	for x in [2,5,8]:
		n = n+x
		print(n)

test(10)
```

```
def s(x):
	return x*x

tot = 0
for n in [1,3,5]:
	tot = tot + s(n)
	print(tot)
```

```
def s(x):
	return x*x

for n in [1,2,10]:
	print( s(n))
```

```
def func(x):
	return x-1

print( func(3) * func(5))
```


Let ‘a’ be the list of integer values in the range(1,11). Explain what the following expression is returning:
`reduce(lambda x, y: x and y, filter(lambda x: x % 2!= 0, a))`
What would the function be returning if the lambda used ‘or’ operator rather than ‘and’ operator?

___

#### SUPPLEMENTARY SEMESTER EXAMINATIONS - NOVEMBER 2022

Develop a recursive Python function that recursively computes sum of elements in a list of lists.   `Sample Input: [1, 2, [3,4], [5,6]]`  Expected Result: 21.

What is lambda function? What are the characteristics of a lambda function? Give an example.

Develop a Python program that prints the intersection of two lists. (without using list comprehension/sets).

___

Discus the following ways of passing parameters to functions with a suitable example:
i. Keyword only parameters
ii. Variable length arguments
iii. pass by reference and pass by value.

Develop Python function to calculate sum and product of two arguments, return them.

Create a list of even numbers from 1 to 10 using the loop and filter method.

___

#### SEMESTER END EXAMINATIONS – JUNE 2022

Explain the following arguments to functions in python with examples. (i) Keyword arguments (ii) Default arguments (iii) Variable length arguments.

Explain the scope of local and global variables.

Write short notes on anonymous functions in python.

___

Write a function to display the Fibonacci sequence up to nth term where n is provided by the user.

Let a be the list of values produced by range(1,11). Using the function filter and a lambda argument, write the expression that will produce each of the following.
(i) A list of even numbers in a
(ii) A list of values in a divisible by 3.

Write short notes on the following: (i) Mapping (ii) Filtering (iii) List comprehension.

___

#### EXAMINATIONS SEPTEMBER /OCTOBER 2021 SUPPLEMENTARY

Write a python function to check whether the given string is palindrome or not Function should take a string as argument and return Boolean value. Function should take “MADAM” as default, argument.

Implement anonymous(lambda) functions for the following:
i) Filter out only even numbers from the given list.
ii) Reduce the given list of numbers to its sum.

Differentiate between keyword arguments, required arguments and variable length arguments with suitable example.

___

Discuss list comprehension with example.

What is recursion? Find the factorial of a number using recursive function.

What is the significance of :
i) Local and global variables
ii) DOC Strings
iii) map and reduce functions.

___

#### EXAMINATIONS SEPTEMBER /OCTOBER 2021 SUPPLEMENTARY

Define a Python function `isAscending(L)` that returns True if the input list L is in ascending order, otherwise returns False. For empty list, it should return True.

Trace the function call and find the output of the following code:
```
def f(x):
	x=2*x
	return x
x=1
x = f(x+1)
```

Explain lambda functions with example.

Predict the output of the following and justify your answer:
i) What is the value of h(6,8) for the function below?
```
def h(m,n):
	ans = 1
	while (n > 0):
		(ans,n) = (ans*m,n-2)
	return(ans)
```

ii) Consider the following Python function.
```
def mystery(ls):
	if len(ls) < 2:
		return (ls)
	else:
		return (mystery(ls[1:])+[ls[0]])
```
What does `mystery([17,12,41,28,25]) `return?

iii) 
```
a,b,c = True, False, False
if a or b and c:
	print("MSRIT")
else:
	print("VTU")
```

___

Write Python function to calculate sum and product of two arguments, return them.

Explain the following with sample code for each one:
i. Keyword arguments 
ii. Variable length arguments 
iii. Default arguments.

___


#### EXAMINATIONS SEPTEMBER /OCTOBER 2020 SUPPLEMENTARY

Write a python function that accepts a sentence containing alpha numeric characters and calculates the number of digits, uppercase and lowercase letters. Return the calculated values.

i) Demonstrate scope of the local and global variables.
ii) What are DOC strings?

Illustrate `*args` and `**kwargs` parameters in Python programming language with an example.

___

Explain keyword, required and default function parameters with examples.

Write a function to find the factorial of a number using functional programming.

Use list comprehension to create a list of integers which specify the length of each word in a certain sentence, but only if the word is not the word "the".
text =”the students of MCA study the programming language python as part of the curriculum”

____

#### SEMESTER END EXAMINATIONS – JUNE 2019

Let a be the list of values produced by range(1,11). Using the functions map and a lamda argument, write an expression that will produce each of the following.
(i) A list of squares of the values
(ii) A list of cubes of the values
(iii) A list where each element is larger by one than the corresponding element in the original list.

What is LEGB rule? Explain LEGB rule with an example.

Demonstrate recursion in Python. Write a recursive function to find sum of n numbers.

___

Illustrate different types of function parameters available in python.

Explain list comprehension with example. Also develop a python script to print prime numbers in the given range using comprehension.

____

#### SUPPLEMENTARY SEMESTER EXAMINATIONS – JULY 2019

Exemplify the various types of formal arguments in python.

Write a lambda function for each of the following: -
i.Take one argument and return true if it is nonzero
ii.Take one argument and return true if it is odd
iii.Take two arguments and return their sum
iv.Take two arguments and return true if their sum is odd
v.That three arguments and return true if the produce of the first two is less than or equal to the third.

___

Write a program using map function to convert the temperature from celcius to Fahrenheit and vice versa.

What is List Comprehension? Describe with examples.

Analyze and write the output for the following code snippets:
```
i.
>>>filter (lambda x:x,[4,0,6,3,0,2])

ii.
>>>reduce(lambda x, y: x and y, filter(lambda x:x%2==0,a))
```

___

#### MAKEUP EXAMINATIONS – JULY 2019

Let a be the list of values produced by range(1,50). Using the function filter and a lamda argument, write the expression that will produce each of the following.
(i) A list of odd numbers in a
(ii) A list of even numbers in a
(iii) A list of values in a divisible by 3 and not divisible by 7.

Develop a recursive function to generate prime numbers in a given range.

Explain list comprehension with example.

___

Define a function that takes a positive integer n, and then produces n lines of output in the following pattern,
```
+
++
+++
++++
+++++
```

Is it possible to get the same output using a single loop?Justify.

Illustrate the following with example:
i) DOC strings ii) local and global variables iii) pass by reference and pass by value in python

___

#### SEMESTER END EXAMINATIONS – MAY/JUNE 2018

Write a lambda function for each of the following:
i) Take one argument and return true if it is nonzero
ii) Take one argument and return true if it is odd
iii) Take a list as argument and return sum of the elements of the list

What is the output of the following? Explain.
```
def outer(x):
	def inner(y):
		return x + y
	return inner

x = outer(3)
print x(4)
```

Explain keyword arguments, default arguments and variable length arguments with suitable examples.

___

Explain list comprehension with example.

Explain recursion in python.

Illustrate the following with example: i) DOC strings ii) local and global variables iii) pass by reference and pass by value in python.

___

#### SUPPLEMENTARY SEMESTER EXAMINATIONS – JULY/AUGUST 2018

Define list comprehension. Explain with an example.

Explain variable length arguments function with syntax and example.

Develop a python function to return the number of palindrome words in a line of text.

___

Explain the following concepts in Python.
i) Lambda functions
ii) keyword arguments.

What are filtering and reduction? Explain with an example.

Trace function calls and find the value of h(6,8) for the function below
```
def h(m,n):
	ans = 1
	while (n > 0):
		(ans,n) = (ans*m,n-2)
	return(ans)
```

___

#### SEMESTER END EXAMINATIONS – MAY/JUNE 2017

Let a be the list of values produced by range(1,11). Using the functions map and a lamda argument, write an expression that will produce each of the following.
(i)  A list of squares of the values
(ii)  A list of cubes of the values
(iii) A list where each element is larger by one than the corresponding element in the original list

What is LEGB rule? Apply LEGB rule for the following code and explain what is happening in this code. Also write the output.
```
a=7
def fun(b):
	c=17
	def morefun(d):
		e=12
		print(a+b+c+d+e)
	morefun(3)
			fun(5)
```

Demonstrate recursion in Python.

___

Demonstrate different types of function parameters available in python.

Explain list comprehension with example. Also develop a python script to print prime numbers in the given range using comprehension.

___

#### SUPPLEMENTARY SEMESTER EXAMINATIONS – AUGUST 2017

Explain keyword arguments, default arguments and variable length arguments with the help of an example each.

Let a be the list of values produced by range(1,11) using the function filter and a lambda argument, write an expression that will produce,
i. A list of values which are divisible by 3
ii. A list of values which are even.

Develop a program to generate prime numbers in the given range using list comprehension (0, 5).

___

Let a be the list of values produced by range(1, 11). Using the function map and a lambda argument, write an expression that will produce each of the following,
i. A list of squares of the values
ii. A list of cubes of the values
iii. A list where each element is larger by one than the corresponding element in the original list.

Develop a factorial function which returns the factorial of a number. Using the factorial function, develop another function that estimates the value of mathematical constant e using this formula :
`e = 1 + 1/1! + 1/2! + 1/3! + 1/4! + 1/5! + . . . . . . . .`

___

