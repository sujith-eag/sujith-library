
---
title: "Python Unit-4 Answered-2"
description: ""
date: 2024-12-17T22:34:58+05:30
lastmod: 2024-12-17T22:34:58+05:30
draft: false
---

# Python Unit-4 Answered-2


## Regular Expressions


##### How do you define and use regular expressions in Python? Discuss.

* List any 6 regular expression patterns in python and write the meaning of each and example.
* How do you define and use regular expressions in Python? Discuss.
* Demonstrate `match()` and `search()` methods w.r.t regular expressions in python.

**Answer :**

**regular expressions** (regex) are used to perform pattern matching and manipulation of strings. Regular expressions provide a powerful way to search, match, and manipulate text based on patterns, and Python offers a built-in module called `re` to work with regular expressions.

A regular expression in Python is defined as a **string** pattern to match against text. Regular expressions can include various special characters and constructs to describe complex text patterns.

**Basic Syntax of Regular Expressions:**
- `.` (Dot): Matches any character except newline.
- `^` (Caret): Anchors the pattern to the beginning of the string.
- `$` (Dollar Sign): Anchors the pattern to the end of the string.
- `\d`: Matches any digit (0-9).
- `\D`: Matches any non-digit character.
- `\w`: Matches any alphanumeric character (letters, digits, and underscores).
- `\W`: Matches any non-alphanumeric character.
- `\s`: Matches any whitespace character (spaces, tabs, newlines).
- `\S`: Matches any non-whitespace character.
- `[]` (Square Brackets): Matches any one of the characters inside the brackets.
- `()` (Parentheses): Groups patterns together and creates capture groups.


**Using Regular Expressions in Python:**

Python provides the `re` module to work with regular expressions. Some of the most commonly used methods in this module are:

1. `re.match(pattern, string)`:  Tries to match a pattern at the start of the string. Returns a match object if the pattern is found, or `None` if there is no match.

2. `re.search(pattern, string)`: Searches for the first location where the pattern matches the string anywhere. Returns a match object if the pattern is found, or None if there is no match.

3. `re.findall(pattern, string)`: Returns a list of all non-overlapping matches of the pattern in the string. Returns an empty list if no matches are found.

4. `re.sub(pattern, repl, string)`: Substitutes all occurrences of the pattern with a replacement string. Returns the modified string.

5. `re.split(pattern, string)`: Splits the string into a list wherever the pattern matches.

6. `re.finditer(pattern, string)`: Returns an iterator yielding match objects for all matches found in the string.

```python
import re

# re.match to match a pattern at the beginning of a string
def match_example():
    pattern = r'^Hello'
    text = "Hello, world!"
    match = re.match(pattern, text)
    if match:
        print("Match found:", match.group())
    else:
        print("No match found")

# re.search to find a pattern anywhere in the string
def search_example():
    pattern = r'world'
    text = "Hello, world!"
    search = re.search(pattern, text)
    if search:
        print("Search found:", search.group())
    else:
        print("No match found")

# re.findall to find all occurrences of a pattern in string
def findall_example():
    pattern = r'\d+'  # Find all sequences of digits
    text = "There are 3 apples, 5 bananas, and 10 grapes."
    numbers = re.findall(pattern, text)
    print("All numbers found:", numbers)

# re.sub to Replace all occurrences of a pattern in the string
def sub_example():
    pattern = r'apples'
    repl = 'oranges'
    text = "There are 3 apples, 5 bananas, and 10 grapes."
    replaced_text = re.sub(pattern, repl, text)
    print("Text after replacement:", replaced_text)

# re.split to split a string based on a pattern
def split_example():
    pattern = r'\s+'  # Split by one or more spaces
    text = "This is a test string"
    split_text = re.split(pattern, text)
    print("Split text:", split_text)

match_example()
search_example()
findall_example()
sub_example()
split_example()
```
 
___

##### Write a Python program to check the following using regular expressions:

* A given USN of RIT MCA student is valid or not.
* To find the sequences of one upper case letter followed by lower case letters.
* Matches a string that has an 'a' followed by anything, ending in 'b'.
* match a string that contains only upper and lowercase letters, numbers, and underscores.
* To validate Email ID, IP address, Mobile number. 

**Answer :**

To find the sequences of One upper case letter followed by lower case letters.
```python
import re

def upper_lower_sequence(text):
    pattern = r'[A-Z][a-z]+'
    result = re.findall(pattern, text)
    if result:
        print(f"Upper Lower Sequence is: {result}")
    else:
        print("No such sequences found.")


upper_lower_sequence("Python is a powerful Language. Java and C are also popular.")
# Upper Lower Sequence is: ['Python', 'Language', 'Java']
```


Match a string that has 'a' followed by anything, ending in 'b'
```python
import re

def match_a_to_b(text):
    pattern = r'a.+b$'
    result = re.match(pattern, text)
    if result:
        print(f"Matched string: {result.group()}")
    else:
        print("No match found")

match_a_to_b("an example string ending with b")

match_a_to_b("this is just an example")
```


Match a string that contains only upper and lowercase letters, numbers, and underscores
```python
import re

def match_valid_string(text):
    pattern = r'^[A-Za-z0-9_]+$'
    result = re.match(pattern, text)
    if result:
        print(f"Valid string (letters, numbers, and underscores only): {text}")
    else:
        print(f"Invalid string: {text}")

match_valid_string("Valid_string123")
match_valid_string("Invalid string!")
```


Validating the USN Number
```python
import re

def validate_usn(usn):
    pattern = r'^\d[A-Z]{2}\d{2}[A-Z]{2}\d{3}$'
    if re.match(pattern, usn):
        print(f"{usn} is a valid USN.")
    else:
        print(f"{usn} is not a valid USN.")

validate_usn("1MS24MC096")  # Valid USN
validate_usn("2CS35EE123")  # Valid USN
validate_usn("MS24MC096")   # Invalid USN (no starting digit)
validate_usn("1ms24mc096")  # Invalid USN (lowercase letters)
validate_usn("1MS2MC096")   # Invalid USN (incorrect format)
```


Function to validate Email ID
```python
import re

def validate_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    if re.match(pattern, email):
        print(f"'{email}' is a valid Email ID.")
    else:
        print(f"'{email}' is not a valid Email ID.")
        
        
validate_email("test@example.com")  # Valid
validate_email("invalid-email@com")  # Invalid
```


Function to validate IP Address
```python
def validate_ip(ip):
    pattern = r'^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'
    if re.match(pattern, ip):
        print(f"'{ip}' is a valid IP Address.")
    else:
        print(f"'{ip}' is not a valid IP Address.")


validate_ip("192.168.1.1")  # Valid
validate_ip("999.999.999.999")  # Invalid
```


Function to validate Mobile Number
```python
import re

def validate_mobile_number(number):
    pattern = r'^\+?[0-9]{3}-?[0-9]{3}-?[0-9]{4}$'

    if re.match(pattern, number):
        print(f"'{number}' is a valid Mobile Number.")
    else:
        print(f"'{number}' is not a valid Mobile Number.")


validate_mobile_number("+123-456-7890")  # Valid
validate_mobile_number("123-456-7890")   # Valid
validate_mobile_number("1234567890")     # Valid

# Invalid mobile numbers
validate_mobile_number("+123-4567890")   
# Invalid (missing one section)
validate_mobile_number("123-4567-890")   
# Invalid (wrong sections)
validate_mobile_number("123-45-67890")
# Invalid (wrong section size)
```


_____

##### Write a regular expression to validate a float number it should satisfy the following.
i. Number can start with +, - or . symbol.
ii. Number must contain at least 1 decimal value.
iii. Number must have exactly one . symbol.

**Answer :**

```python
import re

def validate_float(number):
    pattern = r'^[+-]?(\d+\.\d+)$'

    if re.match(pattern, number):
        print(f"'{number}' is a valid float number.")
    else:
        print(f"'{number}' is not a valid float number.")


# Valid float numbers
validate_float("+12.345")   # Valid (positive with digits before and after dot)
validate_float("-0.123")    # Valid (negative with digits before and after dot)
validate_float(".456")      # Valid (starts with dot but has digits after dot)
validate_float("0.456")     # Valid (no sign, valid float)
validate_float("+0.1")      # Valid (positive float with one decimal value)

# Invalid float numbers
validate_float("123.")      # Invalid (no digits after the decimal point)
validate_float("123..45")   # Invalid (multiple dots)
validate_float("abc.123")   # Invalid (non-numeric characters)
validate_float("12.34.56")  # Invalid (multiple dots)
validate_float("123456")    # Invalid (no decimal point)
```


____

##### Write a Python program to check the validity of a password given by the user using regular expression.
The Password should satisfy the following criteria:
i. Contain at least 1 letter between a and z
ii. Contain at least 1 number between 0 and 9
iii. Contain at least 1 letter between A and Z
iv. Contain at least 1 character from $, #, @
v. Minimum length of password: 6
vi. Maximum length of password: 12.

**Answer :**

```python
import re

def validate_password(password):
    pattern = r'^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[$#@]).{6,12}$'
    
    if re.match(pattern, password):
        print("Password is valid.")
    else:
        print("Password is invalid.")

password = input("Enter a password to validate: ")
validate_password(password)
```

`(?=.*[a-z])` : This is a positive look ahead

`?=` This is a lookahead assertion that checks if the pattern following it exists somewhere in the string, but it doesn't consume characters or move the cursor forward.

`.*` This matches any character (except newlines) zero or more times. This allows the password to have any number of characters before or after the required lowercase letter.

`[a-z]` This matches any lowercase letter from a to z. 
Similarly one character of each Upper, digit and Symbol are matched but they do not consume any character space.

`.{6,12}$` matches any character (except newlines) between 6 and 12 times. The `.` represents any character, and `{6,12}` specifies the minimum and maximum number of times that the preceding character (any character) should appear in the string.

____

##### How do you define regular expressions in python? Write regular expression to match the following patterns:
(i) The file names chap01, chap02, chap03, chap10, chap11 and chap12
(ii) containing ‘RIT’ as an embedded string except at the beginning or end

(iii) The file names chapa, chapb, chapc, chapx, chapy and chapz.
(iv) containing ‘msrit’ as an embedded string except at the beginning or end .

(v) the file names that end with at least two digits and don’t begin with an alphabet.
(vi) the files except `.py` extension

**Answer :**


```python
import re

def validate_chap_filename(filename):
    pattern = r'^chap(0[1-9]|1[0-2])$' # for chap01 chap12
    pattern = r'^chap[a-z]$' # for chapa chapb
    if re.match(pattern, filename):
        print(f"'{filename}' is a valid chap file name.")
    else:
        print(f"'{filename}' is NOT a valid chap file name.")
```

File names that end with at least two digits and don't begin with an alphabet
```python
def validate_filename_with_digits(filename):
    pattern = r'^[^a-zA-Z].*\d{2,}$'
    if re.match(pattern, filename):
        print(f"'{filename}' is a valid filename with digits and no alphabet at the start.")
    else:
        print(f"'{filename}' is NOT a valid filename.")

```

Files except `.py` extension
```python
def validate_non_py_extension(filename):
    pattern = r'^(?!.*\.py$).+$'
    if re.match(pattern, filename):
        print(f"'{filename}' does NOT have a .py extension.")
    else:
        print(f"'{filename}' has a .py extension.")
```

String containing `msrit` except at the beginning or end
```python
def validate_substring(string):
    pattern = r'^(?!msrit).*msrit.*(?<!msrit)$'
    if re.match(pattern, string):
        print(f"'{string}' contains 'msrit' as an embedded string.")
    else:
        print(f"'{string}' does NOT contain 'msrit' as an embedded string.")
```

```python

# Testing chap file names
validate_chap_filename("chap01")   # Valid
validate_chap_filename("chap13")   # Invalid

# Testing msrit embedded string
validate_substring("This is msrit student.")  # Valid
validate_substring("msrit is a college")     # Invalid (starts with msrit)

# Testing filenames with at least two digits
validate_filename_with_digits("file1234")   # Valid
validate_filename_with_digits("abc00123")   # Valid
validate_filename_with_digits("file")       # Invalid (no digits)
validate_filename_with_digits("1234abc")    # Invalid (starts with digit)

# Testing non .py extensions
validate_non_py_extension("script.py")  # Invalid
validate_non_py_extension("image.jpg")  # Valid
validate_non_py_extension("file.txt")   # Valid

```

____

##### Develop a script using regular expressions to search and replace a string in a given input.

**Answer :**

```python
import re

def search_and_replace(input_text, search_pattern, replace_text):
    updated_text = re.sub(search_pattern, replace_text, input_text)
    return updated_text

input_string = input("Enter the string: ")
search_pattern = input("Enter the search pattern: ")
replace_text = input("Enter the replacement text: ")


output_string = search_and_replace(input_string, search_pattern, replace_text)

print("\nOriginal String: ", input_string)
print("Updated String: ", output_string)
```

____

##### Develop a script using regular expressions to convert a date of yyyy-mm-dd format to dd-mm-yyyy format.

**Answer :**

```python
import re

def convert_date_format(input_date):
    # regex pattern to match yyyy-mm-dd format
    pattern = r'(\d{4})-(\d{2})-(\d{2})'
    
    # Use re.sub() to replace the date format
    updated_date = re.sub(pattern, r'\3-\2-\1', input_date)
    return updated_date

# Test the function with an example date
input_date = "2025-03-28"
output_date = convert_date_format(input_date)

# Print the original and updated dates
print("Original Date: ", input_date)
print("Converted Date: ", output_date)
```

```
Enter a date in yyyy-mm-dd format: 2025-03-28

Converted Date: 28-03-2025
```

The replacement string `r'\3-\2-\1'` rearranges the groups:

`\3` represents the day (from the third captured group),
`\2` represents the month (from the second captured group),
`\1` represents the year (from the first captured group).

This transforms the format from `yyyy-mm-dd` to `dd-mm-yyyy`.


____


