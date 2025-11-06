
---
title: "Python Unit-5 Answered-1"
description: ""
date: 2024-12-17T22:34:58+05:30
lastmod: 2024-12-17T22:34:58+05:30
draft: false
---

# Python Unit-5 Answered-1


# Exception Handling


#### Explain exception handling in python in detail with the help of an example.

* Illustrate “catching an exception is programmatically good and necessary mechanism” with exception handling mechanism in python. Demonstrate the working of any six exceptions in python.
* How do you handle an exception? Demonstrate try-finally clause.
* How do you handle an exception? Explain all the three keywords in exception handling. Write a simple program to show how an except clause is used for handing multiple exceptions.
* Discover what exception is produced by each of the following points. Then develop small example program that illustrates catching the exceptions using try statement(s) and continuing with execution after the interrupt.  (Division by zero, Opening a file that does not exist, Indexing a list with an illegal value,  Using an improper key with a dictionary,  Passing an improperly formatted expression to the function `expr( )`,  Using unindented code.)

**Answer :**

Exceptions are events that occur during the execution of a program that disrupt the normal flow of instructions. Exception handling in Python is a mechanism to handle these runtime errors, also known as exceptions. 

Python provides a way to handle these errors using `try`, `except`, `else`, and `finally` blocks. This allows to anticipate errors and take appropriate actions without stopping the program, allowing the program to continue execution after an exception is handled.

- **`try` block**: Contains the code that might cause an error.
- **`except` block**: Catches the exception if it occurs and handles it without crashing the program.
- **`else` block**: Executes if no exception occurs in the `try` block.
- **`finally` block** (optional): Executes code regardless of whether an exception occurred or not. It’s typically used for cleanup actions, such as closing files or releasing resources.

Catching exceptions is important for the following reasons:

- **Prevent the program from crashing**: If an exception occurs and is not handled, the program will terminate abruptly. By catching exceptions, we can manage errors gracefully and allow the program to continue execution.
- **Graceful Error Recovery**: With exception handling, we can recover from errors or give the user feedback that something went wrong without abruptly terminating the program.
- **Separation of Error Handling and Logic**: The program logic and error-handling code are separated, making the code more readable and easier to maintain.


**Python Exception Handling Mechanism**

In Python, exceptions are handled using `try`, `except`, `else`, and `finally` blocks.

```python
try:
    # Code that may raise an exception
    x = 10 / 0  # This will raise a ZeroDivisionError
except ZeroDivisionError as e:
    # Code to handle exception
    print("Error: Division by zero.")
else:
    # Code to execute if no exception occurs
    print("Operation successful!")
finally:
    # Code that will always execute, regardless of exception
    print("This block always runs.")
```


**Catching Multiple Exceptions**

Catching multiple exceptions in a single `except` block or multiple `except` blocks.

```python
try:
    # Trying to open a file that does not exist
    file = open('non_existing_file.txt', 'r')
    
except (FileNotFoundError, IOError) as e:
    print("Error: File not found or IO error.")
```


**Using `try-finally` Clause**

The `finally` block is useful for clean-up actions, ensuring that certain operations always happen, regardless of whether an exception occurs or not.

```python
def open_file(file_name):
    try:
        file = open(file_name, 'r')
        content = file.read()
        print(content)
        
    except FileNotFoundError as e:
        print(f"Error: The file {file_name} does not exist.")
    finally:
        print("This block always executes.")
        # Close the file if it was opened
        if 'file' in locals():
            file.close()

open_file('non_existing_file.txt')
```


##### Different Types of Exceptions

Common exceptions in Python:

1. **ZeroDivisionError**: Raised when dividing by zero.
2. **FileNotFoundError**: Raised when trying to open a non-existent file.
3. **IndexError**: Raised when accessing an invalid index in a list.
4. **KeyError**: Raised when accessing a dictionary with a non-existent key.
5. **SyntaxError**: Raised for malformed expressions or invalid syntax.
6. **IndentationError**: Raised when there’s incorrect indentation in the code.
7. **ValueError**: Raised when a function gets an argument of the correct type but inappropriate value (e.g., converting a string to int).
8. **TypeError**: Raised when an operation is applied to an object of an inappropriate type.
9. **AttributeError**: Raised when accessing an attribute or method that doesn't exist for an object.
10. **NameError**: Raised when a variable or name is not defined.
11. **IOError**: Raised during I/O operations, such as file reading/writing failures.

___

1. **Division by Zero (ZeroDivisionError)**:
```python
try:
	result = 10 / 0
except ZeroDivisionError:
	print("Cannot divide by zero!")
```

2. **Opening a Non-existent File (FileNotFoundError)**:
```python
try:
	file = open('missing_file.txt', 'r')
except FileNotFoundError:
	print("The file does not exist.")
```

3. **Index Out of Range (IndexError)**:
```python
try:
	lst = [1, 2, 3]
	print(lst[5])
except IndexError:
	print("Index out of range.")
```

4. **Key Error in Dictionary (KeyError)**:
```python
try:
	my_dict = {'name': 'John'}
	print(my_dict['age'])
except KeyError:
	print("Key not found in dictionary.")
```

5. **Improper Expression in Function (`SyntaxError`)**:
```python
try:
	eval('a + ')
except SyntaxError:
	print("There is a syntax error in the expression.")
```

6. **Indentation Error**: This is an error that occurs due to incorrect indentation and it will be raised as `IndentationError` in Python.
```python
try:
	if True:
	print("This will raise an IndentationError")
except IndentationError:
	print("Indentation error occurred.")
```

7. **ValueError** : Raised when a function receives an argument of the right type but an inappropriate value. Example: Passing a non-numeric string to an integer conversion function.
```python
try:
    num = int("abc")
except ValueError:
    print("Invalid value for integer conversion.")
```

8. **TypeError** : Raised when an operation or function is applied to an object of an inappropriate type. Example: Trying to add a string and an integer.
```python
try:
    result = "Hello" + 5
except TypeError:
    print("Cannot add string and integer.")
```

9. **AttributeError** : Raised when an attribute reference or assignment fails. Example: Trying to access an attribute that doesn't exist in an object.
```python
try:
    obj = None
    obj.some_method()
except AttributeError:
    print("Object has no such method or attribute.")
```

10. **NameError** : Raised when a local or global name is not found. Example: Using a variable that hasn't been defined.
```python
try:
    print(undeclared_variable)
except NameError:
    print("Variable is not defined.")
```

____

##### Illustrate user defined exceptions with suitable examples.

* Develop a Python program to demonstrate user defined exception.

**Answer :**

Custom exceptions can be created by defining a class that inherits from the built-in `Exception` class or any of its subclasses. This allows to raise and catch exceptions that are more specific.

Steps to Create a User-Defined Exception:
1. Create a new class that inherits from the `Exception` class or its subclasses.
2. Define the behavior of the exception class.
3. Raise the exception using the `raise` keyword in your program logic.


Custom exception to handle errors when a student’s age is invalid

```python
class InvalidAgeError(Exception):
    def __init__(self, message="Age is not valid"):
        self.message = message
        super().__init__(self.message)


def validate_age(age):
    if age < 0:
        raise InvalidAgeError("Age cannot be negative.")
    elif age > 150:
        raise InvalidAgeError("Age cannot be greater than 150.")
    else:
        print(f"Student age {age} is valid.")

try:
    age = int(input("Enter student age: "))
    validate_age(age)
except InvalidAgeError as e:
    print(f"Error: {e}")
except ValueError:
    print("Error: Please enter a valid number for age.")
```

`InvalidAgeError`: A user-defined exception that inherits from the `Exception` class. It has a constructor (`__init__`) that allows a custom error message to be passed when raising the exception.

`validate_age` function: Checks if the age is negative or greater than 150. If so, it raises an `InvalidAgeError` with a relevant message.

`try` block: Accepts the user input for age, calls the `validate_age` function, and handles exceptions.

`except` block: Catches the custom `InvalidAgeError` and prints the error message, or catches `ValueError` if the user enters non-numeric input.

___

## File I/O


##### List and describe the file open modes in python.

* List and describe any five file open modes in python.

**Answer :**

Files are opened using the `open()` function where different modes can be specified, depending on whether file is to be read from, write to, or manipulate the file in other ways. These modes are passed as a string argument to the `open()` function.

**five common file open modes** in Python are:


1. **`'r'` - Read Mode :** Opens a file for reading only. The file pointer is placed at the beginning of the file. If the file does not exist, it raises a `FileNotFoundError`.

```python
file = open("example.txt", "r")
content = file.read()
file.close()
```

2. **`'w'` - Write Mode** : Opens a file for writing only. If the file already exists, it truncates the file to zero length (i.e., deletes its contents) and overwrites it. If the file does not exist, a new file is created.

```python
file = open("example.txt", "w")
file.write("This is a test.")
file.close()
```

3. **`'a'` - Append Mode** : Opens a file for appending. The file pointer is placed at the end of the file, and data is added after the existing content. If the file does not exist, a new file is created. Used when adding new data to the file without overwriting the existing content.

```python
file = open("example.txt", "a")
file.write("Adding some more text.")
file.close()
```

4. **`'r+'` - Read and Write Mode**

- **Description**: Opens a file for both reading and writing. The file pointer is placed at the beginning of the file. If the file does not exist, it raises a `FileNotFoundError`.

```python
file = open("example.txt", "r+")
content = file.read()
file.write("Updated text.")
file.close()
```


5. **`'b'` - Binary Mode** : Opens a file in binary mode, which means that data will be read or written as binary data (not text). Used when dealing with non-text files like images or audio.

```python
file = open("example.jpg", "rb")
content = file.read()
file.close()
```

---

##### Demonstrate the methods to read and write text files in python.

* Explain with the help of an example the different functions used with files.
* Explain the different methods available for manipulating the text files.

**Answer :**

Once a file is opened, there are several methods that can be used to read from a file.

i) **`read()`** Method : Reads the entire content of the file as a string. It reads the whole file if no arguments are passed.

```python
file = open("example.txt", "r")
content = file.read()  # Reads the entire file content
print(content)
file.close()
```


ii) **`readline()`** Method : Reads a single line from the file at a time. It returns the next line in the file each time it is called. It is useful for reading line by line.

```python
file = open("example.txt", "r")
line = file.readline()  # Reads the first line
while line:
    print(line, end="")  # Prints the line without extra newline
    line = file.readline()  # Reads the next line
file.close()
```


iii) **`readlines()`** Method : Reads all lines from the file and returns them as a list of strings. It returns a list where each item is a line in the file.

```python
file = open("example.txt", "r")
lines = file.readlines()  # Reads all lines into a list
for line in lines:
    print(line, end="")  # Prints each line in the list
file.close()
```


___

To write to a file, it must be opened in write (`'w'`), append (`'a'`), or read/write (`'r+'`) mode.


i) **`write()`** Method : Writes a string to the file. If the file is opened in write mode ('w'), it will overwrite the content. If opened in append mode ('a'), it will add the content at the end.

```python
file = open("example.txt", "w")
file.write("Hello, this is the first line.\n")
file.write("This is the second line.\n")
file.close()
```


ii) **`writelines()`** Method : Writes a list of strings to the file. Each item in the list is written as a line in the file.

```python
lines = ["Hello, this is the first line.\n", "This is the second line.\n"]
file = open("example.txt", "w")
file.writelines(lines)  # Writes the list of strings to the file
file.close()
```

___

**File Manipulation Methods** : Once a file is opened, various manipulations can be performed on it.

i) **`seek()`** Method : Moves the file pointer to a specific position. This is useful to start reading or writing from a particular position in the file. `seek(offset, whence)` where `offset` is the number of bytes to move and `whence` specifies the reference position.

```python
file = open("example.txt", "r")
file.seek(0)  # Moves the pointer to the start of the file
content = file.read(10)  # Reads the first 10 characters
print(content)
file.close()
```

ii) **`tell()`** Method : Returns the current position of the file pointer.

```python
file = open("example.txt", "r")
print(file.tell())  # Prints the current position of the pointer

file.read(5)  # Reads the first 5 characters
print(file.tell())  # Prints the new position after reading
file.close()
```


iii) **`flush()`** Method : Forces the writing of buffered data to the file. It’s used when you want to ensure that the data is actually written to the file. This method is usually called before closing the file if you want to ensure everything is written.

```python
file = open("example.txt", "w")
file.write("Some data")
file.flush()  # Ensures that data is written to the file immediately
file.close()
```

iv) **`close()`** Method : Closes the file and frees up system resources. This method should always be called after you are done working with the file. It ensures the file is closed properly.

```python
file = open("example.txt", "r")
content = file.read()
file.close()  # Close the file after reading
```

---

```python
# Creating and writing to a file
file = open("example.txt", "w")
file.write("This is the first line.\n")
file.write("This is the second line.\n")
file.writelines( ["Third line\n", "Fourth line\n"] )
file.close()

# Reading from the file
file = open("example.txt", "r")
content = file.read()  # Read all the content
print(f"File Content: \n{content}")
file.close()

# Reading line by line
file = open("example.txt", "r")
print("Reading line by line:")
line = file.readline()
while line:
    print(line, end="")
    line = file.readline()
file.close()

# Reading all lines into a list
file = open("example.txt", "r")
lines = file.readlines()
print("\nAll lines as a list:")
print(lines)
file.close()
```

___

