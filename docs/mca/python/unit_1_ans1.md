---
title: "Python Unit-1 Answered-1"
description: ""
date: 2024-12-17T22:34:58+05:30
lastmod: 2024-12-17T22:34:58+05:30
draft: false
---

# Python Unit-1 Answered-1


#### What are identical objects and equivalent objects? Give examples.

**Answer :**

Identical objects are the same object in memory.    
Equivalent objects are different objects that have the same content or value.

* **Identical Objects** ( having Same Object Identity) are two references that point to the exact same object in memory.
* Identity operator `is` can be used to check if two objects have the same reference pointing to the same memory location, then they are the same objects.

```python
a = [1, 2, 3]
b = a
# b is assigned the same reference as a

print(a is b)  
# True
```

```python
a = [1, 2, 3]
b = [1, 2, 3]  
# b is a new list with the same contents as a

print(a is b)  
# False
```

___

* **Equivalent Objects** (having Same Values) refer to two objects that have the same value or content, but they may be stored at different memory locations (i.e., they are not identical).
- Comparison Operator `==` can be used to check if two objects have the same value or content, hence both are equivalent objects.

```python
a = [1, 2, 3]
b = [1, 2, 3]

print(a == b)  
# True, because a and b have the same content
```



## Data Types and Operators

* Describe Arithmetic Operators, Assignment Operators, Comparison Operators, Logical Operators and Bitwise Operators in detail with examples.
* Describe Arithmetic Operators, Assignment Operators, and Comparison Operators with example.
* Describe logical operators and relational operators in python with suitable examples.
* List the operators supported in Python? Describe specifically about identity and membership operator with a suitable example?
* Describe membership operator and identity operator in python with suitable examples.

##### Answer

An **operator** is a symbol that performs an operation on one or more operands (variables or values). They can be classified based on Nature :
- Arithmetic Operators : `+`, `-`, `*`, `/`, `%`, `//`, `**`
- Assignment Operators : `=`, `+=`, `-=`, `*=`, `/=`, `%=` , `**=`, `//=`
- Relational / Comparison Operators : `>`, `<`, `==`, `!=`, `<=`, `>=`
- Logical Operators : `and`, `or`, `not`
- Membership Operators : `in`, `not in`
- Identity Operators : `is`, `is not`
- Bitwise Operators : `&`, `|`, `^`, `~`, `<<`, `>>`
- Unary Operators: `-` (negation)

##### 1. Arithmetic Operators
Arithmetic operators are used to perform basic arithmetic operations like addition, subtraction, multiplication, etc.
- **`+`**: Addition
- **`-`**: Subtraction
- **`*`**: Multiplication
- **`/`**: Division (returns a float)
- **`%`**: Modulo (returns the remainder of division)
- **`//`**: Floor Division (returns the quotient without the remainder)
- **`**`**: Exponentiation (raises the left operand to the power of the right operand)

```python
a = 10
b = 3

print(a + b)  # 13 (Addition)
print(a - b)  # 7 (Subtraction)
print(a * b)  # 30 (Multiplication)
print(a / b)  # 3.333... (Division)
print(a % b)  # 1 (Modulo)
print(a // b) # 3 (Floor Division)
print(a ** b) # 1000 (Exponentiation)
```

**Note:** It's always good practice to use parentheses `()` to suggest the order of operations, as Python follows standard operator precedence.

---

##### 2. Assignment Operators
Assignment operators are used to assign values to variables, sometimes in a shorthand way.
- **`=`**: Simple assignment
- **`+=`**: Add and assign (e.g., `x += 1` is the same as `x = x + 1`)
- **`-=`**: Subtract and assign
- **`*=`**: Multiply and assign
- **`/=`**: Divide and assign
- **`%=`**: Modulo and assign
- **`**=`**: Exponent and assign
- **`//=`**: Floor division and assign

```python
x = 5
x += 3  # x = x + 3 => x = 8
x *= 2  # x = x * 2 => x = 16
```

---

##### 3. Unary Operators
A unary operator operates on a single operand (value). Unary Minus (`-`)  operator negates the value of a variable (changes a positive value to negative and vice versa).

```python
x = 10
y = -x  # y = -10
```

---

##### 4. Relational Operators
Relational (or Comparison) operators are used to compare two values. They return a boolean value (`True` or `False`).
- **`>`**: Greater than
- **`<`**: Less than
- **`==`**: Equal to
- **`!=`**: Not equal to
- **`<=`**: Less than or equal to
- **`>=`**: Greater than or equal to

```python
x = 10
y = 20
print(x < y)  # True
print(x == y) # False
print(x != y) # True
```

**Note:** Relational operators can also be chained. If any condition is `False`, the result will be `False`.

```python
# Example of chaining:
print(5 < 10 < 20)  # True
print(10 < 5 < 20)  # False
```

---

##### 5. Logical Operators
Logical operators are used to combine conditional statements. They are commonly used in `if` statements.
- `and`: Returns `True` if both operands are `True`
- `or`: Returns `True` if at least one operand is `True`
- `not`: Reverses the boolean value (returns `True` if the operand is `False`, and vice versa)

```python
x = True
y = False
print(x and y)  # False
print(x or y)   # True
print(not x)    # False
```

---

##### 6. Membership Operators
Membership operators are used to check if a value is present in a sequence (like a string, list, dictionary, tuple, etc.).
- `in`: Returns `True` if the value is found in the sequence.
- `not in`: Returns `True` if the value is **not** found in the sequence.

```python
fruits = ['apple', 'banana', 'orange']
print('apple' in fruits)    # True
print('grapes' not in fruits)  # True
```

---

##### 7. Identity Operators
Identity operators are used to compare the memory locations of two objects. These operators help check if two variables point to the same object in memory.
- `is`: Returns `True` if both operands refer to the same object in memory
- `is not`: Returns `True` if both operands do not refer to the same object

```python
x = [1, 2, 3]
y = [1, 2, 3]
z = x
print(x is y)    # False (different objects in memory)
print(x is z)    # True (same object in memory)
```

You can also use the `id()` function to get the memory address of an object.

```python
print(id(x))
print(id(y))
```

---

##### 8. Bitwise Operators
Bitwise operators are used to perform bit-level operations on integers. These operations work at the binary level.
- **`&`**: Bitwise AND
- **`|`**: Bitwise OR
- **`^`**: Bitwise XOR
- **`~`**: Bitwise NOT
- **`<<`**: Left shift
- **`>>`**: Right shift

```python
x = 5  # (binary: 0101)
y = 3  # (binary: 0011)

print(x & y)  # Bitwise AND: 1 (binary: 0001)
print(x | y)  # Bitwise OR: 7 (binary: 0111)
print(x ^ y)  # Bitwise XOR: 6 (binary: 0110)
print(~x)     # Bitwise NOT: -6 (binary: 1010)
```

____

#### Examine each of the following expressions. 

Predict what the result would be? Explain what the type is for each expression. If an expression is illegal, explain why?
```
i. 10 / 5
ii. 5 / 10
iii. 5.0 / 10
iv. 10 % 4 + 8 / 4
v. 3 ** 10 / 3.
```

**Answer :**

```python
>>> 10/5
2.0  
# Division always return floating point

>>> 5/10
0.5
# Also a float

>>> 5.0/10
0.5
# One is float and another is int 
# still result is float after division

>>> 10 % 4 + 8 / 4
4.0
# 10 % 4 = 2
# 8 / 4 = 2.0
# 2 + 2.0 = 4.0  a float

>>> 3 ** 10 / 3
19683.0
# first exponentiation
# 3**10 
# 59049 / 3 returns float
```



## Control Flow and Conditionals


#### Write a python script to demonstrate 'if..elif...else' statement in python.

`if...elif...else` are the primary structures for controlling the flow of the program and execution of code blocks based on conditional statements which are Boolean expressions.

Python checks each condition in order within the `if..elif..else`, and if one of the condition is true, then it executes that code block and skips the rest of the code blocks :

```python
x, y = 3, 4

if x < y:
    print("x is less than y")
elif x > y:
    print("x is greater than y")
else:
    print("x is equal to y")
```

```python
name = input("What is your name? ")

if name == "Harry" or name == "Hermione" or name == "Ron":
	print("Gryffindor")
elif name == "Draco":
    print("Slytherin")
else:
    print("Who?")
```



## Loops , break, continue, pass


#### Illustrate the different types of iterative statements available in Python.

* Illustrate conditions and looping statements in python with suitable examples.

**Answer :**

`while` and `for` loops are two main iterative statements that are used to repeatedly execute a code block.

`for` loop is Used to repeatedly execute a code block for a fixed number of times, it is also used for iterating over elements in sequence like a list, tuple, string, range, dictionary.

Syntax:
```python
for item in iterable:
	# block of code
```

```python
# Iterate over list elements
for i in [0, 1, 2]:
    print("Meow")

# Iterates over a range (0, 1, 2)
for i in range(3):  
    print("Meow")

# Sequence from 0 to n-1
for i in range(0, n):  
    print("Meow")
```


`while` loop Repeats a block of code as long as a specified condition (Boolean Expression) is true, this is used when the number of iterations is not known in advance.

Syntax
```python
while condition:
	# block of code
```
The condition should eventually become false, otherwise the loop runs indefinitely as an infinite loop.

```python
i = 3
while i != 0:
    print("Meow")
    i = i - 1
```

```python
number = 1
while number <= 5:
    print(number)
    number += 1
```

___

#### Demonstrate the usage of pass, continue and break with the help of appropriate example.

* Illustrate break, continue and pass statements in Python.
* Describe the purpose and usage of Break, Continue and Pass in Python.
* In what situations, break and continue statements were used? Discuss with examples.
* Demonstrate the usage of pass, break and continue statement in python using suitable examples.
* Explain the significance of break, continue and pass with suitable example.

**Answer :**

- `break` – Exits the loop immediately and transfers control to the next statement after the loop.
- `continue` – Skips the rest of the current loop iteration and moves to the next iteration.
- `pass` – It is a do nothing statement, used as a placeholder in code blocks.

Breaking out of the the loop when `i == 3`
```python
for i in range(5):
   if i == 3:
	   break
   print(i)
   
# Output: 0 1 2
```

Skipping only current iteration when `i == 3`
```python
for i in range(5):
   if i == 3:
	   continue
   print(i)
   
# Output: 0 1 2 4
```

```python
for i in range(5):
   if i == 3:
	   pass  # Do nothing for 3
   print(i)
# Output: 0 1 2 3 4
```

____

```python
for i in range(10):
    if i == 4:
        pass  # Do nothing when i is 4
    elif i == 6:
        continue  # Skip printing when i is 6
    elif i == 8:
        break  # Exit the loop when i is 8
    else:
        print(f"Current value of i: {i}")  
```

Printing only Odd Numbers in a range
```python
number = 0

while number < 10:
    number += 1
    if number % 2 == 0:  # Skips even numbers
        continue
    else:
        print(number)  # Prints only odd numbers
```

Breaking out of loop using user input.
```python
prompt = "\nEnter the city you have visited:"
prompt += "\nUse 'quit' to exit. "

while True:
    city = input(prompt)
    if city == "quit":
        break  # Exits when 'quit' is entered
    else:
        print(f"\n{city.title()} is lovely")
```

___

#### Write a program to display only those numbers from a list that satisfy the following conditions

*  The number must be divisible by five.
* If the number is greater than 100, then skip it and move to the next number.
* If the number is greater than 600, then stop the loop.

**Answer :**

```python
>>> list_1 = [3,5,6,7,10,15,25,100, 1, 30, 102, 601, 40]
>>> for i in list_1:
...     if(i>600):
...             break
...     elif(i>100):
...             pass
...     elif(i%5 == 0):
...             print(i)
... 
5
10
15
25
100
30
```

___


#### What is the output of the following code segments? Explain the causes.

```python
i) 
for letter in 'Python':
	if letter == 'h':
		break
	print 'Current Letter :', letter

ii) 
for letter in'Python':
	if letter =='h':
		continue
	print'Current Letter :', letter

iii) 
for letter in'Python':
	if letter =='h':
		pass
		print'This is pass block'
	print'Current Letter :', letter
```

**Answer :**

i) The Loop terminates when letter reaches `h` so only three letters are printed
```python
for letter in 'Python':
	if letter == 'h':
		break
	print 'Current Letter :', letter


Current Letter : P
Current Letter : y
Current Letter : t
```

ii)  When `letter == h`, the `continue` executes and moves the loop to next iteration without printing `h`.
```python
for letter in'Python':
	if letter =='h':
		continue
	print'Current Letter :', letter


Current Letter : P
Current Letter : y
Current Letter : t
Current Letter : o
Current Letter : n
```

iii) All letters are printed because `pass` does nothing when `letter == h` . So execution continues and 'This is pass block' and letter 'h' both are printed.
```python
for letter in'Python':
	if letter =='h':
		pass
		print'This is pass block'
	print'Current Letter :', letter
	

Current Letter : P
Current Letter : y
Current Letter : t
This is pass block
Current Letter : h
Current Letter : o
Current Letter : n
```

___

#### Give the syntax of 'range()' function and discuss its importance. 

* Write a python script to demonstrate for loop statement with range() function.

**Answer :**

The `range()` function generates a sequence of numbers, commonly used for looping or generating lists with specific patterns.

- `range(i, j)` Generates a sequence of numbers starting from `i` and ending before `j`.
```python
range(i, j)
# Produces the sequence: i, i+1, ..., j-1
```

- `range(j)` Starts from `0` and ends before `j`. This is equivalent to `range(0, j)`.
```python
range(j)
# starts from 0, ends at j-1
```

- `range(i, j, k)`  Adds an optional third argument `k` for step increment, useful for sequences with a specific pattern, like arithmetic progressions (AP).
```python
range(i, j, k)
# Produces: i, i+k, i+2k, ..., i+nk
```

Using length of a list as range input to iterate over the list.
```python
>>> lis = [3,4,5,6,7]
>>> n = len(lis)
>>> for i in range(n):
...     print(list_1[i])
... 
3
4
5
6
7
```

Finding all the divisors of a given number using range
```python
def factors(n):
	DivList = []
	for i in range(1, n + 1):
		if n % i == 0:
			DivList.append(i)  
			# Or DivList = DivList + [i]
	return DivList
```

___

#### Demonstrate the usage of while statement in python. 

* Write a python script to demonstrate while concept to add 5 numbers.

**Answer :**

Adding only five numbers from a list.
```python
>>> list_1 = [3, 5, 6, 7, 10, 15, 25]
>>> number = 0
>>> total = 0
>>> while number <5:
...     total += list_1[number]
...     number += 1
...  
>>> total
31
```

___

#### Pattern Printing

Develop a python program that reads two integer values n and m from the user, then produces a box that is n wide and m deep, such as the following:
Enter a width: 5
Enter a height: 4
```

@@@@@
@    @
@    @
@@@@@
```

Develop a python program that takes two positive integers m and n, and then produces a box of mXn dimension as shown below.
Enter height: 4
Enter width: 5
```
*****
*    *
*    *
*****
```

**Answer :**

Easy Method is to print top, print middle and print bottom. (doesn't work in terminal without function)

```python
width = int(input("Enter a width: "))
height = int(input("Enter a height: "))

# Printing top
print('@' * width)

# Printing middle with blank space
for i in range(height - 2):
    print('@' + " "*(width-2) + '@')

# Printing Bottom if height was not 1
if height > 1:
    print('@' * width)

@@@@
@  @
@  @
@@@@
```


Proper method using double loop, one to print the height and another to print the width by checking for last and first rows.

`if (i == 0 or i == height-1):` is used to check if it is first or last line and print the full width and go to next iteration. (Printing each row at a time)

```python
n = int(input("Enter a width: "))
m = int(input("Enter a height: "))

for i in range(m):
    if i == 0 or i == m-1:  # First and last row
        print('@' * n)
    else:                   # Middle rows
        print('@' + " "*(n-2) + '@')
```

```
Enter a width: 5
Enter a height: 4

@@@@@
@   @
@   @
@@@@@
```


Another method print loop by each element: 

Second loop moves horizontally (using `end = ""`) and prints character only when it is first and last element., otherwise prints space. (Printing character one at a time)

```python
>>> height = 4
>>> width = 5
>>> for i in range(height):
...     if (i == 0 or i == height - 1):
...         print("* " * width)
...     else:
...         for j in range(width):
...             if (j == 0 or j == width - 1):
...                 print("* ", end="") # * in beginnig end
...             else:
...                 print("  ", end="") # blank in middle
...         print()
... 
* * * * * 
*       * 
*       * 
* * * * * 
```

```python

height = 4
width = 5

for i in range(height):
	if(i == 0 or i == height-1):
		print("@ " * width)
	else:
		for j in range(width):			
			if(j == 0 or j == width-1):
				print("@ ", end="")
			else:
				print("  ", end="")
		print()

@ @ @ @ @ 
@       @ 
@       @ 
@ @ @ @ @
```


___

#### Additional Patterns for Practice


##### Define a function that takes a positive integer n, and then produces n lines of output in the following pattern

```
+
++
+++
++++
+++++
```
Is it possible to get the same output using a single loop?Justify.

**Answer :**

To display a right angled triangle with 10 rows
```python
for i in range(1,11):  # for 10 rows
	for j in range(1, i+1): # for * print
		print("* ", end=' ')
	print()
```

In One line
```python
for i in range(1,11):
	print( "* "*i )  # repeat * i times
```

```
* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * * 
* * * * * * * * 
* * * * * * * * * 
* * * * * * * * * * 
```

```python
n = 10  # Number of rows
for i in range(n, 0, -1):
    print('* ' * i)
```

```
* * * * * * * * * * 
* * * * * * * * * 
* * * * * * * * 
* * * * * * * 
* * * * * * 
* * * * * 
* * * * 
* * * 
* * 
* 
```


##### To display a equilateral triangle

```python
n = 40  # to create some space
for i in range(1,11):
	print(' '*n, end='')   # repeat space for n times
	print('* '*i)          # repeat * for n times
	n -= 1
```

```
				* 
			   * * 
			  * * * 
			 * * * * 
			* * * * * 
		   * * * * * * 
		  * * * * * * * 
		 * * * * * * * * 
		* * * * * * * * * 
	   * * * * * * * * * * 
```

##### Diamond Pattern
```python
n = 5  # Half the height of the diamond

# Upper half
for i in range(1, n + 1):
    print(' '*(n-i) + '* '*i)

# Lower half
for i in range(n-1, 0, -1):
    print(' '*(n-i) + '* '*i)
```

```
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
 * * * * 
  * * * 
   * * 
    * 

```



____
