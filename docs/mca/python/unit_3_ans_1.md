---
title: "Python Unit-3 Answered-1"
description: ""
date: 2024-12-17T22:34:58+05:30
lastmod: 2024-12-17T22:34:58+05:30
draft: false
---

# Python Unit-3 Answered-1

# Variables

#### What are DOC strings? Illustrate with an example.

* Discuss the importance of using docstrings in Python functions. Explain how docstrings enhance code readability and maintainability. 
* Provide an example demonstrating the use of docstrings in a Python function.
* What are DOC strings?

**Answer :**

**DOC Strings**: Documentation strings (or docstrings) are used to document the code in Python. They are placed at the beginning of modules, functions, classes, or methods to describe their purpose. 

These are different from regular comments, they are stored as the `__doc__` attribute of the object being documented. They are accessible at runtime via the `help()` function or `__doc__` attribute and are part of code's documentation which can be used auto generate documentations.
```python
def my_function():
   """This function does nothing."""
   pass
```

```
help(my_function)
print(my_function.__doc__)
```

```python
def add(a, b):
    """Return the sum of a and b."""
    return a + b
```

___

##### Demonstrate scope of the local and global variables.

* Illustrate the following with example: i) DOC strings ii) local and global variables iii) pass by value and pass by object reference in python iv) Variable length arguments.
* Illustrate the following with example: i) DOC strings ii) local and global variables iii) pass by reference and pass by value in python
* What is the significance of :  i) Local and global variables    ii) DOC Strings
* Explain the scope of global and local variables.
* Write a Python program that defines both local and global variables and demonstrates their scope and usage. Explain briefly the difference between local and global variables in your program.

**Answer :**

**Local Variable**: A variable defined inside a function or block, accessible only within that function block. If a variable is defined inside a function, it cannot be accessed outside its scope.

```python
def my_function():
   x = 10  # Local variable
   print(x)  # x here is local

my_function()
print(x)  
# This raises an error as x is local to my_function
```

**Global Variable**: A variable defined outside any function, accessible throughout the program. These can be accessed from within the function if the variable is not available within the scope of the function block. 
```python
x = 20  # Global variable

def my_function():
   print(x)  # accessing global variable x

my_function()  # Output: 20
print(x)  # Output: 20
```

___

##### What is LEGB rule? Explain LEGB rule with an example.

The **LEGB Rule** stands for **Local, Enclosing, Global, and Built-in**. This is the rule Python follows to resolve variable names and determine their scope when searching for the value of a variable.

* *Local (L): refers to the current function's scope. If the variable is defined inside a function, Python will first look here.

* Enclosing (E): refers to any enclosing functions that are not the current function but are within the function being executed (nested functions). Python checks this scope next, moving outwards.

* Global (G): refers to the top-level scope of the module. If the variable is not found locally or in enclosing functions, Python will look for it in the global scope (the script or module level).

* Built-in (B): refers to Python’s built-in names (such as `print`, `len`, etc.). If Python doesn't find the variable in any of the above scopes, it will check the built-in scope.

```python
x = "Global x"

def outer_function():
    x = "Enclosing x"
     
    def inner_function():
        x = "Local x"
        print(x)
        
    inner_function()

outer_function()

# Local x
```

```python
x = "Global x"

def outer_function():
    x = "Enclosing x"
    
    def inner_function():
        print(x)  
        # No local variable x defined here
    
    inner_function()

outer_function()

# Enclosing x
```

____

##### Apply LEGB rule for the following code and explain what is happening in this code. Also write the output.

```python
a=7
def fun(b):
	c=17
	def morefun(d):
		e=12
		print(a+b+c+d+e)
	morefun(3)

fun(5)
```

**Answer :**

The output will be 44 when sum of `a, b, c, d, e` is taken.

The resolution of these variables happens in the following way.    
* `e = 12` is in the local scope of the function `morefun()`
* `d = 3` is assigned when `morefun()` is called with 3 so is in the local scope of the function `morefun()`
* `c = 17` is in the enclosing space of the nesting loop `fun()`
* `b = 5` in also in enclosing space as it was declared when `fun()` was called with value 5.
* `a = 7` is declared in the global scope.



## Functions, Arguments


##### Illustrate different function parameters in python with suitable examples

* Illustrate `*args` and `**kwargs` parameters in Python programming language with an example.
* Explain how `*args` and `**kwargs` allow the function to accept a variable number of arguments and keyword variable_length arguments. Explain how they differ from positional arguments through another program.
* Illustrate different function parameters in python with suitable examples.
* Explain keyword, required and default function parameters with examples.
* Exemplify the various types of formal arguments in python.
* Explain the following arguments to functions in python with examples. (i) Keyword arguments (ii) Default arguments (iii) Variable length arguments.
* Discus the following ways of passing parameters to functions with a suitable example: i. Keyword only parameters    ii. Variable length arguments   iii. pass by reference and pass by value.
* Differentiate between keyword arguments, required arguments and variable length arguments with suitable example.

**Answer :**

In Python, functions can accept arguments, which are passed into the function when it is called. These arguments are categorized as **formal arguments** and **actual arguments**.

**Formal Arguments**: These are the parameters defined in the function definition that receive the values passed to the function.

**Actual Arguments**:  These are the values passed into the function when it is called.

```python
>>> def greet(name):  # 'name' is a formal argument
...     print(f"Hello, {name}!")
... 
>>> greet("Alice")  # "Alice" is the actual argument
Hello, Alice!
```

Types of Formal Arguments: 
- Positional arguments: Must be passed in the same order as the function parameters.
- Keyword arguments: Passed with their parameter names, order doesn't matter.
- Default arguments: If no argument is passed, the default value is used.
- Optional arguments: Can be omitted when calling the function.
- Variable-length arguments (`*args`): Accepts an arbitrary number of positional arguments, stored in a tuple.
- Keyword variable-length arguments (`**kwargs`): Accepts an arbitrary number of keyword arguments, stored in a dictionary.

___

* **Positional Arguments :** Arguments must be passed in the same order as the parameters. These are required arguments and cannot be omitted.

```python
>>> def dis_pet(animal, name):
...     print(f"\nI have a {animal.title()}")
...     print(f"Its name is {name.title()}")
... 
>>> dis_pet("hamster", "harry")
I have a Hamster
Its name is Harry

>>> dis_pet("Jack", "dog")
I have a Jack
Its name is Dog
```

* **Keyword arguments :** allow passing values without considering the order since the value is assigned to the parameters name.

```python
>>> def dis_pet(animal, name):
...     print(f"\nI have a {animal.title()}")
...     print(f"Its name is {name.title()}")
... 
>>> dis_pet(animal="hamster", name="harry")
I have a Hamster
Its name is Harry

>>> dis_pet( name ="Jack", animal = "dog", )
I have a Dog
Its name is Jack
```

* **Default Arguments :** Default values given within the parameter during definition time becomes the fall back value when an argument is omitted when function is being called. If function is called with that argument, then it is considered.

```python
>>> def dis_pet(animal, name="Will"):
...     print(f"\nI have a {animal.title()}")
...     print(f"Its name is {name.title()}")
... 
>>> dis_pet("cat")  # Defaults to "Will" unless specified
I have a Cat
Its name is Will
```

```python
def fan(a, b, c=14, d=22):
    ...

fan(13, 12)  
# Equivalent to fan(13, 12, 14, 22)

fan(13, 12, 16)  
# Equivalent to fan(13, 12, 16, 22)
```

```python
def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()  # Output: Hello, Guest!
greet("Alice")  # Output: Hello, Alice!
```

* **Optional Arguments :** Making an argument optional by providing a default empty string: These are similar to default arguments but are given an empty value (like `''`), so the function can optionally take them.

```python
>>> def get_formatted_name(first_name, last_name, middle_name=''):
...     if middle_name:
...         full_name = f"{first_name} {middle_name} {last_name}"
...     else:
...         full_name = f"{first_name} {last_name}"
...     return full_name.title()
... 

>>> musician = get_formatted_name('jimi', 'hendrix')
>>> print(musician)
Jimi Hendrix

>>> musician = get_formatted_name('john', 'hooker', 'lee')
>>> print(musician)
John Lee Hooker
```


**Variable-Length Arguments (`*args`)** : The `*args` syntax allows a function to accept a variable number of positional arguments. These arguments are stored in a tuple.

When how many arguments a function needs to accept is not known beforehand, python allows function to collect an arbitrary no of arguments, from the calling statement by using `*` in parameters, it accepts as many as it is given.

```python
>>> def add_numbers(*args):
...     return sum(args)
... 
>>> print(add_numbers(1, 2, 3))
6
>>> print(add_numbers(5, 10))
15
```

Using both positional and arbitrary arguments:  arbitrary must be in the end, python matches with first and passes rest to the end.

____

**Keyword Variable-Length Arguments ('**kwargs')** : The `**kwargs` syntax allows a function to accept a variable number of keyword arguments (key-value pairs). These arguments are stored in a dictionary.

```python
def print_info(**details):
    for key, value in details.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="New York")
# Output:
# name: Alice
# age: 25
# city: New York
```

Sometimes to accept an arbitrary number of arguments, not knowing what kind of information will be passed to the function. In this case, function can be written that accept as many key-value pairs as the calling statement provides.

```python
>>> def display(farg, **extra):
...     print('Formal argument:', farg)
...
...     for key, value in extra.items():
...         print(f"key = {key}, value = {value}")
... 
>>> display(5, rho=10, name="Uname", cd="UNNCD")

Formal argument:  5
key = rho, value = 10
key = name, value = Uname
key = cd, value = UNNCD
```

____

##### Develop Python function to calculate sum and product of two arguments, return them.

* Write a Python function named calculate sum that takes two integers as input and returns their sum. Then, write another function called calculate product that takes two integers as input and returns their product. Demonstrate both functions by providing suitable inputs.

**Answer :**

```python
def calculate(x,y):
	return product(x,y), num_sum(x,y)

def product(x,y):
	return x*y

def num_sum(x,y):
	return x+y

x, y = 10, 5
product, total = calculate(x,y)
print(total, product)

# 15  50
```

___

##### Develop a python program to calculate and return the average of given list of integers using functions.

Write a Python function named average_list that takes a list of numbers as input and returns their average.  Additionally, include a condition to ensure that the input is a list of numeric values only that are >=1).
What is the output when this list average_list is:
(i) An empty list
(ii) a list containing non-numeric values
(iii) -1
(iv) 10000000000000000000000000000


**Answer :**

```python
def average_list(numbers):
    # contains only numeric values >= 1
    if len(numbers) == 0:
        return "The list is empty."
    
    for num in numbers:
        if not isinstance(num, (int, float)) or num < 1:
            return "Only Numbers >=1 are allowed"
    # Calculate the average
    return sum(numbers) / len(numbers)

# Testing the function
print( average_list([]) )
# Output: "The list is empty."

print(average_list([1, 2, 3, 'four', 5]))  
# Only Numbers >=1 are allowed 

print(average_list([-1, 2, 3]))  
# Only Numbers >=1 are allowed 

print(average_list([10000000000000000000000000000]))  
# Output: 10000000000000000000000000000.0
# Average is itself since it is only one number
```

The `isinstance()` function in Python is used to check whether an object is an instance (or subclass) of a specific class or data type. This function is often used to verify the type of an object.

Dealing with strings and check if the string represents a numeric value, `str.isdigit()` can be used, but not directly on number.

_____
##### Write a python function to check whether the given string is palindrome or not 

Function should take a string as argument and return Boolean value. Function should take “MADAM” as default, argument.

**Answer :**

```python
def is_palindrome(s="MADAM"):
    s = s.lower()
    return s == s[::-1]

print(is_palindrome())  
# True

print(is_palindrome("racecar"))
# True

print(is_palindrome("hello"))  
# False
```

____

##### Write a Program to Reverse a Number, Count the Digits, and Calculate the Sum of Digits in the Reversed Number by taking input from the user

```python
def reverse_and_calculate(num):
    rev_num = 0
    sum_digits = 0
    count_digits = 0
    
    while num > 0:
        digit = num % 10  # Get the last digit
        rev_num = rev_num * 10 + digit
        sum_digits += digit  # Add the digit to sum
        count_digits += 1  # Increment the digit count
        num //= 10         # Remove the last digit
    
    return rev_num, sum_digits, count_digits


num = int(input("Enter a number: "))

rev_num, sum_digits, count_digits = reverse_and_calculate(num)

print(f"Reversed Number: {reversed_num}")
print(f"Sum of Digits in Reversed Number: {sum_digits}")
print(f"Number of Digits: {count_digits}")
```

```
Enter a number: 1234

Reversed Number: 4321
Sum of Digits in Reversed Number: 10
Number of Digits: 4
```

____

##### Define a Python function `isAscending(L)` that returns True if the input list L is in ascending order, otherwise returns False. For empty list, it should return True.

**Answer :**

```python
def isAscending(L):

    if len(L) == 0:
        return True
    
    for i in range(len(L)-1):
        if L[i] > L[i + 1]:
            return False  
    # element is greater than the next, return False
    
    return True  
    # If loop completes, list is in ascending order


print(isAscending([1, 2, 3, 4]))  
# True

print(isAscending([1, 3, 2, 4]))  
# False

print(isAscending([]))
# True

print(isAscending([5, 5, 6]))
# True
```

____

##### Write a Python function that takes two lists and returns True if they have at least one common member
Input: `list1=[1,2,3,4,5], list2=[5,6,7,8,9])`
Output: True
Input: `list3=[1,2,3,4,5], list4=[6,7,8,9])`
Output: None.

**Answer :**

```python
def have_common_member(list1, list2):

    for item in list1:
        if item in list2:
            return True  # True if common element is found
    return None  # None if no common elements found


list1 = [1, 2, 3, 4, 5]
list2 = [5, 6, 7, 8, 9]
print(have_common_member(list1, list2))  
# Output: True

list3 = [1, 2, 3, 4, 5]
list4 = [6, 7, 8, 9]
print(have_common_member(list3, list4))  
# Output: None
```

____

##### Develop a Python program that prints the intersection of two lists. (without using list comprehension/sets).

**Answer :**

Logic is, to find an element in both element using membership operator and adding to intersection list if it is not already in that list.
```python
def intersection_of_lists(list1, list2):
    intersection = []
    for item in list1:
        if item in list2 and item not in intersection:
            intersection.append(item)
    return intersection


list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]
result = intersection_of_lists(list1, list2)

print(result)  
# Output: [3, 4]
```

____

#### Predict the output of the following and justify your answer:

Trace the function call and find the output of the following code:
```python
def f(x):
	x = 2*x
	return x
	
x = 1
x = f(x+1)

# x = 4 
```
`x = 1` , it is passed as 2 to `f()` so `x = 2`.  Function returns `x*2` which is 4

___

Trace function calls and find the value of h(6,8) for the function below
```python
def h(m,n):
	ans = 1
	while (n > 0):
		(ans,n) = (ans*m,n-2)
	return(ans)

print( h(6,8) )

# 1296
```

- Initially, `ans = 1` and `n = 8`.
- First iteration: `ans = 1 * 6 = 6`,    `n = 8 - 2 = 6`
- Second iteration: `ans = 6 * 6 = 36`,    `n = 6 - 2 = 4`
- Third iteration: `ans = 36 * 6 = 216`,    `n = 4 - 2 = 2`
- Fourth iteration: `ans = 216 * 6 = 1296`,    `n = 2 - 2 = 0`

___

What is the output of the following? Explain.
```python
def outer(x):
	def inner(y):
		return x + y
	return inner

x = outer(3)
print (x(4))

# 7
```
In the first call, outer gets `x = 3`. Inner function is getting returned to x.
`x(4)` calls inner with `y = 4`.
it returns `x + y` which is `3 + 4` so answer is 7

____

What will be the output of the following code snippets:
```python
def test(n):
	for x in [2,5,8]:
		n = n+x
		print(n)

test(10)

# 12
# 17
# 25
```
Each value from the list gets added to 10 and gets printed.

___

```python
def s(x):
	return x*x

for n in [1,2,10]:
	print( s(n))

# 1
# 4
# 100
```
Prints square of each number

___

```python
def s(x):
	return x*x

tot = 0
for n in [1,3,5]:
	tot = tot + s(n)
	print(tot)

# 1
# 10
# 35
```
Each numbers Square gets added to `tot` and printed.

___

```python
def func(x):
	return x-1

print( func(3) * func(5))

# 8
```

___

Consider the following Python function.
```python
def mystery(ls):
	if len(ls) < 2:
		return (ls)
	else:
		return ( mystery(ls[1:]) + [ls[0]] )
```
What does `mystery([17,12,41,28,25]) `return?

Length of list is not less than 2 so `if` fails, `ls` is not returned.
Recursive call happens with slice of list. `[12, 41, 28, 25]` and `[17]` will be added to the return.

Length of list is not less than 2 so `if` fails, `ls` is not returned.
Recursive call happens with slice of list. `[41, 28, 25]` and `[12]` will be added to the return.

Length of list is not less than 2 so `if` fails, `ls` is not returned.
Recursive call happens with slice of list. `[28, 25]` and `[41]` will be added to the return.

Length of list is not less than 2 so `if` fails, `ls` is not returned.
Recursive call happens with slice of list. `[25]` and `[28]` will be added to the return.

`len(ls)` is less than 2, return `[25]`
appended with `[28]` to give `[25, 28]`
appended with `[41]` to give `[25, 28, 41]`
appended with `[12]` to give `[25, 28, 41, 12]`
appended with `[17]` to give `[25, 28, 41, 12, 17]`

So the return is Reversed List
 ___
 
```python
a,b,c = True, False, False
if a or b and c:
	print("MSRIT")
else:
	print("VTU")
```

The condition `a or b and c` will become `True or (False and False)` because of precedence so the Boolean value will be `True` so will print `MSRIT`

___

