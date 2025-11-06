---
title: "Python Lab Component Questions"
description: "" # short summary for SEO and social cards
date: 2024-12-17T22:34:58+05:30
lastmod: 2024-12-17T22:34:58+05:30
draft: false
---

# Python Lab Component Questions


#### Question 1

Create a function called `outer_function` that takes two parameters, `a` and `b`. 
Within this function, define an inner function called `inner_function` that returns the sum of `a` and `b`.

In `outer_function`, add 5 to the result from `inner_function` and return this final value to the caller.

```python
>>> def outer(a,b):
...     def inner(a,b):
...             return a+b
...     return inner(a,b)+5
... 
>>> 
>>> outer(2,3)
10
>>> outer(5,5)
15
```

___

#### Question 2

Define **two** Python functions to determine the largest of three numbers.
- Create a helper function that takes **two numbers** and returns the **larger** one.
- Create a main function that takes **three numbers**, uses the helper function to compare values, and returns the **largest** of the three.

```python
>>> def main():
...     a = int(input("Enter a: "))
...     b = int(input("Enter b: "))
...     c = int(input("Enter c: "))
...     def max_of_two(a,b):
...             if a>b:
...                     return a
...             else:
...                     return b
...
...     larger_of_two = max_of_two(a,b)
...     return max_of_two(larger_of_two,  c)
... 
>>> main()
Enter a: 3
Enter b: 4
Enter c: 5
5

>>> main()
Enter a: 12
Enter b: 4
Enter c: 77
77
```

____

#### Question 3

Create two functions, `sum_of_numbers()` and `product_of_numbers()`, each using Python’s `*args` to accept a variable number of numeric arguments.
- `sum_of_numbers()` should return the total of all numbers passed in.
- `multiply_numbers()` should return the product of all numbers passed in.
- For example, `sum_of_numbers(1, 2, 3, 4)` should return 10 and `multiply_numbers(1, 2, 3, 4)` should return 24."

```python
>>> def sum_of_numbers(*numbers):
...     sum = 0
...     for i in numbers:
...             sum += i
...     return sum
... 
>>> def multiply_numbers(*numbers):
...     prod = 1
...     for i in numbers:
...             prod *= i
...     return prod
... 
>>> sum_of_numbers(2,2,2,4)
10
>>> sum_of_numbers(7,5,3,2)
17
>>> multiply_numbers(3,4,5,6)
360
>>> multiply_numbers(3,4)
12
```

____

#### Question 4

Define a Python recursive function to print the Fibonacci series up to n_terms.

```python
>>> def fibonacci(n, a=0, b=1, count=0):
...     if count < n:
...             print(a, end=" ")
...             fibonacci(n, b, a+b, count+1)
... 
>>>
>>> n_terms = 8
>>> fibonacci(n_terms)
0 1 1 2 3 5 8 13 
>>> 
>>> fibonacci(15)
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377
```


____

#### Question 5

Write a Python program that allows the user to choose between computing a factorial or printing a Fibonacci series (without recursion).

```python
def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

def fibonacci(n_terms):
    fib_series = []
    a, b = 0, 1
    for _ in range(n_terms):
        fib_series.append(a)
        a, b = b, a + b
    return fib_series


choice = input("Enter the choice 1 for Factorial or 2 for Fibonacci): ")

if choice == '1':
    number = int(input("Enter a number to compute its factorial: "))
    print(f"The factorial of {number} is {factorial(number)}")
elif choice == '2':
    n_terms = int(input("Enter the number of terms for the Fibonacci series: "))
    print(f"The Fibonacci series up to {n_terms} terms is: {fibonacci(n_terms)}")
else:
    print("Invalid choice! Please enter either 1 or 2.")
```

___

#### Question 6

Write a menu-driven Python program that lets the user check if a number is even/odd or prime.
```python
def is_even_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

def is_prime(number):
    if number <= 1:
        return "Not Prime"
    for i in range(2, int(number**0.5) + 1):
        if number % i == 0:
            return "Not Prime"
    return "Prime"

def main():
    while True:
        print("\nMenu:")
        print("1. Check if a number is Even or Odd")
        print("2. Check if a number is Prime")
        print("3. Exit")

        choice = input("Enter your choice (1/2/3): ")

        if choice == '1':
            number = int(input("Enter a number: "))
            result = is_even_odd(number)
            print(f"The number {number} is {result}.")
        
        elif choice == '2':
            number = int(input("Enter a number: "))
            result = is_prime(number)
            print(f"The number {number} is {result}.")
        
        elif choice == '3':
            print("Exiting the program.")
            break
        
        else:
            print("Invalid choice. Please enter 1, 2, or 3.")
            
if __name__ == "__main__":
    main()
```

___
#### Question 7

Write a Python program that allows the user to reverse a number or reverse a string. reverse a number without converting it into a string also check if the given number is a palindrome.

```python
def reverse_number(number):
    reversed_number = 0
    while number > 0:
        digit = number % 10
        reversed_number = reversed_number * 10 + digit
        number //= 10
    return reversed_number

def is_palindrome(number):
    original_number = number
    reversed_number = reverse_number(number)
    if original_number == reversed_number:
        return True
    else:
        return False

def reverse_string(string):
    return string[::-1]

def main():
    while True:
        print("\nMenu:")
        print("1. Reverse a Number")
        print("2. Reverse a String")
        print("3. Check if a Number is a Palindrome")
        print("4. Exit")
		
        choice = input("Enter your choice (1/2/3/4): ")
        
        if choice == '1':
            number = int(input("Enter a number to reverse: "))
            reversed_num = reverse_number(number)
            print(f"The reversed number is: {reversed_num}")
        
        elif choice == '2':
            string = input("Enter a string to reverse: ")
            reversed_str = reverse_string(string)
            print(f"The reversed string is: {reversed_str}")
        
        elif choice == '3':
            number = int(input("Enter a number to check if it's a palindrome: "))
            if is_palindrome(number):
                print(f"The number {number} is a palindrome.")
            else:
                print(f"The number {number} is not a palindrome.")
        
        elif choice == '4':
            print("Exiting the program.")
            break
        
        else:
            print("Invalid choice. Please enter 1, 2, 3, or 4.")

# Run the program
if __name__ == "__main__":
    main()

```

___

#### Question 8

Write a menu-driven Python program that displays the following patterns:

```
1. 
* * * *
* * *
* *
*


2.
*
* *
* * *
* * * *
```

```python
def pattern_1():
    # This function displays the first pattern.
    for i in range(4, 0, -1):
        print("* " * i)

def pattern_2():
    # This function displays the second pattern.
    for i in range(1, 5):
        print("* " * i)

def main():
    while True:
        print("\nMenu:")
        print("1. Display Pattern 1")
        print("2. Display Pattern 2")
        print("3. Exit")
		
        choice = input("Enter your choice (1/2/3): ")
        
        if choice == '1':
            print("\nPattern 1:")
            pattern_1()
            
        elif choice == '2':
            print("\nPattern 2:")
            pattern_2()
            
        elif choice == '3':
            print("Exiting the program.")
            break
            
        else:
            print("Invalid choice. Please enter 1, 2, or 3.")

# Run the program
if __name__ == "__main__":
    main()
```

___

#### Question 9

WAP to read roll number and marks of n students and create a dictionary from it having roll numbers as keys.

```python
def get_student_data(n):
    
    student_data = {}
    # Loop to input roll number and marks for n students
    for _ in range(n):
        roll_number = input("Enter roll number: ")
        marks = float(input("Enter marks: "))
        # Store roll number and marks in the dictionary
        student_data[roll_number] = marks   
         
    return student_data

def main():
    n = int(input("Enter the number of students: "))
    
    # Get the student data
    student_dict = get_student_data(n)
    
    # Display the dictionary of roll numbers and marks
    print("\nStudent Data Dictionary:")
    print(student_dict)

# Run the program
if __name__ == "__main__":
    main()
```

___

#### Question 10

Write a python program that accepts a string and calculate the number of uppercase, lowercase, digits and special characters
```python
def calculate_characters(string):
    uppercase_count = 0
    lowercase_count = 0
    digit_count = 0
    special_count = 0
    
    # Loop through each character in the string
    for char in string:
        if char.isupper():
            uppercase_count += 1
        elif char.islower():
            lowercase_count += 1
        elif char.isdigit():
            digit_count += 1
        else:
            special_count += 1
    
    # Display the counts
    print("Uppercase letters:", uppercase_count)
    print("Lowercase letters:", lowercase_count)
    print("Digits:", digit_count)
    print("Special characters:", special_count)

def main():
    input_string = input("Enter a string: ")
    
    calculate_characters(input_string)

# Run the program
if __name__ == "__main__":
    main()

```

___

#### Question 11

Write a Python program that demonstrates the use of five different list methods. Your program should:
1. Create a list and allow the user to add elements using the append() method.
2. Insert an element at a specific position using the insert() method.
3. Remove a specific element from the list using the remove() method.
4. Sort the list in ascending order using the sort() method.
5. Display the index of any element in the list using the index() method.

```python
def main():
    my_list = []
    
    # Allow the user to add elements using the append() method
    n = int(input("How many elements do you want to add to the list? "))
    for _ in range(n):
        element = input("Enter an element to add: ")
        my_list.append(element)
    
    # Insert an element at a specific position using insert() method
    position = int(input("Enter position to insert element: "))
    element_to_insert = input("Enter the element to insert: ")
    my_list.insert(position, element_to_insert)
    
    # Remove a specific element using remove() method
    element_to_remove = input("Enter the element to remove from the list: ")
    if element_to_remove in my_list:
        my_list.remove(element_to_remove)
    else:
        print(f"Element '{element_to_remove}' not found in the list.")
    
    # Sort the list in ascending order using sort() method
    my_list.sort()
    
    # Display the index of any element using index() method
    element_to_find = input("Enter the element to find its index in the list: ")
    if element_to_find in my_list:
        index_of_element = my_list.index(element_to_find)
        print(f"The index of '{element_to_find}' is: {index_of_element}")
    else:
        print(f"Element '{element_to_find}' not found in the list.")
    
    # Display the final list
    print("\nFinal list:", my_list)

# Run the program
if __name__ == "__main__":
    main()

```

___

#### Question 12

Write a Python program that demonstrates the following:
1. Create and check the shape of an array
2. Convert a 1D array of 12 elements into a 3x4 matrix.
3. Convert a 2D or 3D array into a 1D array
4. Extract a subarray using slicing
5. Extract every alternate element from a given array

```python
import numpy as np

def main():
    # 1. Create and check the shape of an array
    array_1d = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    print("Array: ", array_1d)
    print("Shape of the array: ", array_1d.shape)  # Checking the shape of the array

    # 2. Convert a 1D array of 12 elements into a 3x4 matrix
    matrix_2d = array_1d.reshape(3, 4)
    print("\nReshaped 3x4 matrix:\n", matrix_2d)

    # 3. Convert a 2D or 3D array into a 1D array
    # Flatten the 2D matrix to a 1D array
    array_1d_from_matrix = matrix_2d.flatten()
    print("\nFlattened 1D array from 2D matrix:", array_1d_from_matrix)

    # 4. Extract a subarray using slicing
    subarray = array_1d[3:8]  # Extract elements from index 3 to 7
    print("\nSubarray (elements from index 3 to 7):", subarray)

    # 5. Extract every alternate element from a given array
    alternate_elements = array_1d[::2]  # Extract every second element
    print("\nEvery alternate element:", alternate_elements)

# Run the program
if __name__ == "__main__":
    main()

```

___

#### Question 13

Write regular expressions to validate the following inputs:

1. Email Address – Ensure it follows the standard email format (e.g., `user@example.com`).
2. Date – Match a date in the format `DD/MM/YYYY` or `MM-DD-YYYY`.

```python
import re

# Email Validation
email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'

# Date Validation
date_regex = r'^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/]\d{4}$'

# Test Email
email = "user@example.com"
if re.match(email_regex, email):
    print(f"'{email}' is a valid email.")
else:
    print(f"'{email}' is NOT a valid email.")

# Test Date
date = "31-12-2022"
if re.match(date_regex, date):
    print(f"'{date}' is a valid date.")
else:
    print(f"'{date}' is NOT a valid date.")

```

___

#### Question 14

Write regular expressions to validate the following inputs:

1. URL – Validate a URL that starts with http:// or https:// and includes a domain name.
2. Phone Number – Validate a phone number that may optionally contain two dashes (e.g., 123-456-7890 or 1234567890).

```python
import re

# URL Validation
url_regex = r'^(https?://)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$'

# Phone Number Validation
phone_regex = r'^\d{3}-?\d{3}-?\d{4}$'

# Test URL
url = "https://example.com"
if re.match(url_regex, url):
    print(f"'{url}' is a valid URL.")
else:
    print(f"'{url}' is NOT a valid URL.")

# Test Phone Number
phone = "123-456-7890"
if re.match(phone_regex, phone):
    print(f"'{phone}' is a valid phone number.")
else:
    print(f"'{phone}' is NOT a valid phone number.")


```


____

