---
title: "Python Unit-1 Answered-2"
description: ""
date: 2024-12-17T22:34:58+05:30
lastmod: 2024-12-17T22:34:58+05:30
draft: false
---

# Python Unit-1 Answered-2


##### Write a program using a while loop that asks the user for a number, and prints a countdown from that number to zero.

**Answer :**

Reverse iterating to zero from a number using `-1` step in for loop, while loop for input.
```python
>>> while True:
...     num = int(input("Num : "))
...     for i in range(num, 0, -1):
...             print(i)
... 
Num : 7
7
6
5
4
3
2
1
```

Using while loop for printing
```python
num = int(input("Enter Number: "))
i = num

while i>=0:
	print(f"Countdown: {i}")
	i -= 1
```

```python
>>> num = int(input("Enter Number: "))
Enter Number: 6
>>> i = num
>>> while i>= 0:
...     print(f"Countdown: {i}")
...     i -= 1
... 
Countdown: 6
Countdown: 5
Countdown: 4
Countdown: 3
Countdown: 2
Countdown: 1
Countdown: 0
```

___

##### Develop a program to print the sum of n natural numbers.

**Answer :**

Accumulating the values into `total = 0` using `+= num`

Using for loop
```python
>>> n = 10
>>> total = 0
>>> for num in range(n+1):
...     total += num
... 
>>> total
55
```

Using while loop
```python
>>> n = 10
>>> total = 0
>>> 
>>> while n > 0:
...     total += n
...     n -= 1
... 
>>> total
55
```

___

##### Develop a python program to find the sum of even numbers and odd numbers in the given list.

**Answer :**

```python
>>> list_1 = [1,2,3,5,7,8,9,11,12,15,13]
>>> even = 0
>>> odd = 0
>>> 
>>> for i in list_1:
...     if( i%2 == 0):
...             even += i
...     else:
...             odd += i
... 
>>> even, odd
(22, 64)
```

Same logic put in a function that returns both for a Complete Program.
```python
def Even_Odd(numbers):
    even_sum = 0
    odd_sum = 0
    for num in numbers:
        if num % 2 == 0:
            even_sum += num
        else:
            odd_sum += num
            
	return even_sum, odd_sum


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

even_sum, odd_sum = Even_Odd(numbers)

print(f"Sum of even numbers: {even_sum}")
print(f"Sum of odd numbers: {odd_sum}")
```

___

##### Develop a python program to sum the digits of a given number.

**Answer :**

Logic to iterate over a number without converting it to a string:
* Divide number with modulus 10, `%10` returns the remainder which will be the number in unit place (last position)
* Accumulate that digit in total with `+=`
* Removing the unit place from number by doing a floor division with 10,  `//10` to remove the unit place from number for next iteration. 
* Iterate in while loop till the number becomes 0 when all numbers have been removed.

```python
>>> num = 45743
>>> total = 0
>>> while num > 0:
...     digit = num % 10
...     total += digit
...     num = num // 10
... 
>>> total
23
```

Shortcut by converting number to string and iterating using `for()` loop
```python
>>> num = 45743
>>> num_str = str(num)
>>> total = 0
>>> for i in num_str:
...     total += int(i)
... 
>>> total
23
```

____

##### Write a program to count the total number of digits and sum of digits in a number using a while loop.

**Answer :**

Adding a count variable with same previous logic
```python
>> num = 456323445334
>>> count = 0
>>> digit_sum = 0
>>> 
>>> while num > 0:
...     digit = num % 10   # Get the last digit
...     digit_sum += digit  # Add the digit to the sum
...     count += 1    # Increase the digit count
...     num //= 10    # Remove the last digit
... 
>>> count, digit_sum
(12, 46)
```


String Cheat method
```python
>>> num = 456323445334
>>> num_str = str(num)
>>> count = 0
>>> total = 0
>>> while count < len(num_str):
...     total += int(num_str[count])    
...     count+= 1
... 
>>> count, total
(12, 46)
```

____

##### Implement a Python Program to reverse a number and also find the number of digits and Sum of digits in the reversed number. Prompt the user for input.

**Answer :**

Logic to reverse Number with place manipulation:
* Logic for Iterating over number remains same where last digit is obtained.
* Using an integer `rev=0` to hold the reversed number (not the sum)
* `rev = rev*10 + digit` increments the unit place of `rev` and adds the digit in its unit place.
* This moves the last digit to the first and reverses the string.

```python
>>> num = 45743
>>> rev = 0
>>> while num>0:
...     digit = num % 10  # Get the last digit
...     rev = rev*10 + digit  # increment and add
...     num = num // 10  # remove last number
... 
>>> rev
34754
```

Also taking count and finding total also in one program
```python
>>> num = 456323445334
>>> rev_num = 0
>>> count = 0
>>> total = 0
>>> 
>>> while num > 0:
...     count += 1
...     digit = num%10
...     total += digit
...     rev_num = rev_num*10 + digit
...     num = num // 10
... 
>>> rev_num, count, total
(433544323654, 12, 46)
```

String Cheat Methods
```python
>>> num = 456323445334
>>> num_str = str(num)
>>> count = len(num_str)
>>> rev_num = int(num_str[::-1])
>>> 
>>> total = 0
>>> for i in num_str:
...     total += int(i)
... 
>>> count, rev_num, total
(12, 433544323654, 46)
```

___

##### Design a program to print the mid number (which is between minimum and maximum) out of three input numbers

* Design a Python program to find the average of best two test scores out of three test scores taken as input.

**Answer :**

Using Comparison and if statements.
```python
>>> a, b, c = 3, 6, 5
>>> 
>>> if (b < a < c ) or ( c < a < b ):
...     print(a)
... elif(a < b < c ) or ( c < b < a):
...     print(b)
... else:
...     print(c)
... 
5
```

Using list, sort and indexing
```python
>>> a, b, c = 3, 6, 5
>>> 
>>> num = [a,b,c]
>>> num.sort()
>>> num[1]
5
```

___

##### Write a Python program to count the palindrome words in a line of text.

* Develop a python function to return the number of palindrome words in a line of text.

**Answer :**

Logic for palindrome check is to reverse a word `[::-1]` and compare with original.
Additionally it can be converted to lower using `word.lower()` to make it case insensitive.

```python
def is_palindrome( s = "MADAM"):
    return s == s[::-1]

print(is_palindrome())  
# Output: True
```

Splitting a string into word an checking each word to get count.
```python
>>> text = "Madam the racecar and the level of civic duty were admired by the radar"
>>> words = text.split(" ")
>>> palindrome = 0
>>> 
>>> for word in words:
...     w = word.lower()
...     if(w == w[::-1]):
...             palindrome += 1
... 
>>> palindrome
5
```

Making the logic into a function to check for palindrome in a text.
```python
def count_palindromes(text):
    words = text.split()
    count = 0
    
    for word in words:
        if word == word[::-1]:
            count += 1
    return count

text = "madam racecar level world"
print(count_palindromes(text))  
# Output: 3
```

___

##### Design a simple calculator with different mathematical operations using python script.

**Answer :**

A menu driven calculator function for four operations.
 ```python
 def calculator():
	 print("Select operation:")
	 print("1. Add")
	 print("2. Subtract")
	 print("3. Multiply")
	 print("4. Divide")
	 
	 choice = input("Enter choice (1/2/3/4): ")

	 num1 = float(input("Enter first number: "))
	 num2 = float(input("Enter second number: "))

	 if choice == '1':
		 print(f"The result is: {num1 + num2}")
	 elif choice == '2':
		 print(f"The result is: {num1 - num2}")
	 elif choice == '3':
		 print(f"The result is: {num1 * num2}")
	 elif choice == '4':
		 if num2 != 0:
			 print(f"The result is: {num1 / num2}")
		 else:
			 print("Error! Division by zero.")
	 else:
		 print("Invalid input.")

 calculator()
 ```

___

##### Using for loop, print of table of Celsius/Fahrenheit equivalences. Let c be the Celsius temperatures, ranging from 0 to 100. For each value of c, print the corresponding Fahrenheit temperature.

**Answer :**

```python
print("Celsius\tFahrenheit") # header

# Loop through Celsius values from 0 to 100
for celsius in range(0, 101):
    fahrenheit = (9/5) * celsius + 32
    print(f"{celsius}\t{fahrenheit}")
```

____

##### Develop a script to read n values into a list. 
Separate the numbers in the list into two new lists, first contains all prime numbers and second contains all non-prime numbers.

**Answer :**

Steps: 
* Input to accept n values from the user and store them in a list.
* A Prime Check function to check if a number is prime.
* Traversing through the list and classifying each number as prime or non-prime, and storing them in two separate lists.

Logic for checking if it is a prime is:
* if a number is 1 or less than 1 it is not prime
* Divide the number from those between 2 and (square root of the number +1) and convert it to an `int` to get a whole number.
* If any value in this range can divide without remainder then it is not a prime.
* If no values divided, then it is a prime.

```python
import math

def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True

def separate_numbers():
    values = []
	n = int(input("Enter the number of values: "))
	
    for i in range(n):
        try:
            value = int(input(f"Enter value {i+1}: "))
            values.append(value)
        except ValueError:
            print("Invalid input, please enter an integer.")
            return
            
    primes = []
    non_primes = []
    
    for num in values:
        if is_prime(num):
            primes.append(num)
        else:
            non_primes.append(num)
    
    # Print the results
    print("\nPrime Numbers:", primes)
    print("Non-Prime Numbers:", non_primes)

separate_numbers()
```


The last section can be done with list comprehension also instead of `if else`.
```python
primes = [ num for num in values if is_prime(num) ]

non_primes = [ num for num in values if not is_prime(num) ]
```

____

##### Program on finding highest and Lowest

* Develop a Python program that will accept, as input, a series of names and salaries. Use the name ‘End’ to mark the end of the sequence of values. After the values have been entered, print the average salary and the names and salaries of those individuals with the highest and lowest salaries.

**Answer :**

Logic of Program if to be done in list:
* Using forever loop to get input and having a `if` condition to break the loop if input is end.
* Getting the input as float, if it is not a number then using `try except and continue` to handle the error.
* If it is a valid number, then name and salary are stored in a list.
* `sum` and `len` of list are used to find the average.
* Finding the index of `max()` of salary in list using `index()`
* The same index can be used in names list to get the right name.
```python
names = []
salaries = []

while True:
	name = input("Enter name (or 'End' to exit) :")

	if name.lower() == "end":
		break
	
	try:
		salary = float(input(f"Enter salary for {name}") )
	except ValueError:
		print("Invlaid Salary, Inter a Number")
		continue

	names.append(name)
	salaries.append(salary)


average_salary = sum(salaries) / len(salaries)
index_high = salaries.index(max(salaries))
index_low = salaries.index(min(salaries))

print(f"Average will be {average_salary:.2f}")
print(f"Person: {names[index_high]} has Hight salary of {max(salaries)}")
print(f"Person: {names[index_low]} has Low salary of {min(salaries)}")
```


Same program done using dictionary:
Iterating over key values to get the highest and lowest values and their respective names.
(This handles only one person, not multiple people with same high and low salaries)

```python
detail = {}

while True:
    name = input("Enter name of person (or 'End' to quit) : ")
    if name.lower() == 'end':
        break

    try:
        salary = float(input(f"Enter salary of {name} : "))
    except ValueError:
        print("Invalid Salary")
        continue
		
    detail[name] = salary

total_salary = 0
highest = 0
lowest = 10**100
high_name = ""
low_name = ""

for name, sal in detail.items():
    total_salary += sal

    if sal > highest:
        highest = sal
        high_name = name
		
    if sal < lowest:
        lowest = sal
        low_name = name

average = total_salary/len(detail)

print("\nThe Average Salary is :", average)
print(f"The higest salary is for {high_name} with {highest}")
print(f"The lowest salary is for {low_name} with {lowest}\n")
```

____

##### Develop a Python program to find roots of a quadratic equation with necessary validation.

To develop a Python program that finds the roots of a quadratic equation ( ax^2 + bx + c = 0 ), we need to use the quadratic formula:

1. Input Validation: to ensure `a, b, c`  are numbers and `a` is not zero. 
2. **Discriminant Calculation**: The discriminant ( `b^2 - 4ac` ) will determine the nature of the roots.
3. If the discriminant is negative, the program should calculate and display the complex roots.

```python
import math

def find_roots():
    print("Enter the coefficients of the quadratic equation (ax^2 + bx + c = 0):")
    
    # Input coefficients and validate them
    try:
        a = float(input("Enter coefficient a (must not be zero): "))
        if a == 0:
            print("Coefficient a cannot be zero. Exiting the program.")
            return

        b = float(input("Enter coefficient b: "))
        c = float(input("Enter coefficient c: "))
    except ValueError:
        print("Invalid input! Please enter numerical values.")
        return

    # Calculate the discriminant
    discriminant = b**2 - 4*a*c
    
    # Check the discriminant and find roots
    if discriminant > 0:
        # Two real and distinct roots
        root1 = (-b + math.sqrt(discriminant)) / (2 * a)
        root2 = (-b - math.sqrt(discriminant)) / (2 * a)
        print(f"The roots are real and distinct: {root1} and {root2}")
    elif discriminant == 0:
        # One real and repeated root
        root = -b / (2 * a)
        print(f"The root is real and repeated: {root}")
    else:
        # Complex roots
        real_part = -b / (2 * a)
        imaginary_part = math.sqrt(-discriminant) / (2 * a)
        print(f"The roots are complex: {real_part} + {imaginary_part}i and {real_part} - {imaginary_part}i")

# Run the function to find roots
find_roots()
```


____

