---
title: "Python Unit-2 Answered-1"
description: ""
date: 2024-12-17T22:34:58+05:30
lastmod: 2024-12-17T22:34:58+05:30
draft: false
---


# Python Unit-2 Answered-1

# String

#### What is a string? Discuss the different ways of representing a string in Python.

**Answer :**

A **string** is a sequence of characters, enclosed in either single quotes (`'`) or double quotes (`"`), or triple quotes (`'''` or `"""`) for multi-line strings.

```python
# single quotes
s1 = 'Hello'

# Double quotes
s2 = "World"

#Triple quotes (for multi-line strings): 
s3 = '''Hello
World
with three lines'''
```

```python
# String concatenation
full_string = "Hello" + " " + "World"  
# Hello World
```

____

##### What do you mean by mutable and immutable data structures? Explain with examples.

**Answer :**

**Mutable Data Structures:** can be modified or changed after creation. In Python, lists, dictionaries, and sets are mutable. This means we can change, add, or remove elements from these data structures without creating a new object.

```python
lst = [1, 2, 3]
lst[0] = 4  # Modify an element
lst.append(5)  # Add an element
print(lst)  # Output: [4, 2, 3, 5]
```

**Immutable Data Structures:** cannot be changed after they are created. In Python, tuples and strings are immutable. Once created, they cannot be modified or changed. Changes will create a new object.

```python
tup = (1, 2, 3)
tup[0] = 4  
# TypeError: 'tuple' object does not support item assignment
```

```python
str1 = "hello"
str1[0] = "H"  
# TypeError: 'str' object does not support item assignment
```

___

##### Demonstrate slicing on strings. Also explain the use of join() and split() string methods with examples.

* Explain the use of `join()` and `split()` string methods with examples. What does it mean strings are immutable? Explain with an example.

**Answer :**

**Slicing** allows us to extract a portion of a string.
```python
s = "Hello, World!"
print(s[0:5])  # Output: Hello
print(s[7:])   # Output: World!
print(s[:5])   # Output: Hello
print(s[-1])   # Output: !
```

**`join()`**: Combines elements of an iterable (list, tuple) into a single string, using the string as a separator. join is an string method, called upon string, so the elements in the list to be joined also have to be strings.
```python
words = ["Python", "is", "fun"]
result = " ".join(words)

print(result)  
# Python is fun
```

**`split()`**: Divides a string into a list of substrings based on a delimiter.

Splitting by Space (default) :
```python
sentence = "Python is fun"
words = sentence.split()  

print(words)  
# ['Python', 'is', 'fun']
```

Splitting by specified delimiter : 
```python
sentence = "apple,orange,banana"
fruits = sentence.split(",")  
# Splits by comma

print(fruits)  
# ['apple', 'orange', 'banana']
  ```

___

##### Develop a python program to find whether the given string is palindrome or not.

**Answer :**

Logic is to reverse the string and compare if it is equal to original string. ( Program already in Unit 1 answers)
```python
if s == s[::-1]:
    print("Palindrome")
else:
    print("Not palindrome")
```

___

##### Slicing Questions

Assume that the name `t` is assigned a value ‘Programming with Python’ what will be the output when we execute the following commands and explain.
```
t[13:], t[:9], t[:], t[7:16], t[5:-10], t[6:-6:], t[-2::-1], t[::-2], t[-2:1:-2], t[:-8]
```

**Answer :**

```python
>>> t = "Programming with Python"

>>> t[13:]
'ith Python'
>>> t[:9]
'Programmi'
>>> t[:]
'Programming with Python'
>>> t[7:16]
'ming with'
>>> t[5:-10]
'amming w'
>>> t[6:-6 : ]
'mming with '
>>> t[-2::-1]
'ohtyP htiw gnimmargorP'
>>> t[::-2]
'nhy twgimroP'
>>> t[-2:1:-2]
'otPhi nmag'
>>> t[:-8]
'Programming wit'
```

___

Assume that the name `a` is assigned a value `‘mca@rit’` what will be the output when we execute the following commands and explain.
```
a[5:], t[:4], t[2:-2:2], t[3:4], t[2:-2], t[1:-2:], t[-3::-2], t[::-4], t[-4:1:-4], t[:-3]
```

**Answer :**

```python
>>> s = "mca@rit"

>>> s[5:]
'it'
>>> s[:4]
'mca@'
>>> s[2:-2:2]
'ar'
>>> s[3:4]
'@'
>>> s[2:-2]
'a@r'
>>> s[1:-2:]
'ca@r'
>>> s[-3::-2]
'ram'
>>> s[::-4]
'ta'
>>> s[-4:1:-4]
'@'
>>> s[:-3]
'mca@'
```

___

##### Program to write third person singular form verb

The third person singular verb form in English is distinguished by the suffix `-s`, which is added to the stem of the infinitive form: run -> runs. A simple set of rules can be given as follows:
* If the verb ends in `y`, remove it and add `ies`
* If the verb ends in `o, ch, s, sh, x` or `z`,  add `es`
* By default just add `s`
Develop a Python Script for the rules above

**Answer :**

Logic is to check the last letters using `endswith()` method and since string is immutable, the value is changed by taking slice to remove last letter and concatenating with the plural letters according to what it ends with.

```python
def third_person_singular(verb):
    if verb.endswith('y'):
        return verb[:-1] + 'ies'
    elif verb.endswith(('o', 'ch', 's', 'sh', 'x', 'z')):
        return verb + 'es'
    else:
        return verb + 's'


print(third_person_singular("go"))     # Output: goes
print(third_person_singular("brush"))  # Output: brushes
print(third_person_singular("fly"))    # Output: flies
```

___

##### Predict the output of the following and justify your answer:

```python
i)
S="Vishweswaraiah"
print(s[4:])
print(s[:5])

weswaraiah  
# from index 4 to end

Vishw   
# from start, to 4th, excluding 5th
```

```python
ii)
str1 = "Bangalore"
str1[1] = "e"
str1[6] = str1[8] = "u"
print(str1)

# TypeError: 'str' does not support assignment
```

```python
iii)
a = -45
print(--a)

# output: -45
# Double negation gets same value
```

```python
iv) a, b, c = True, False, False
if a or b and c:
	print "MSRIT"
else:
	print "RNSIT"

# output: MSRIT
```
The condition `a or b and c` is evaluated according to precedence of operators as `True or (False and False)`, which will evaluate to `True`. 

Hence, the `if` condition is `True` and `MSRIT` gets printed.

____

##### Write a python program to count number of vowels and consonants, identify numbers, uppercase letters, lowercase letters and special characters in a given string.

* Write a python function that accepts a sentence containing alpha numeric characters and calculates the number of digits, uppercase and lowercase letters. Return the calculated values.

**Answer :**

Logic would be:
* A character can be a special character (not a number or letter) then it will not be lower upper vowel consonant ( so can be in if else block)
* If it is not a special character then it can be a Number so can check that next.
* If it is not a Number or special character, then it is a 
```python
def analyze_string(input_string):
    vowels = "aeiouAEIOU"
    vowel_count = 0
    consonant_count = 0
    number_count = 0
    uppercase_count = 0
    lowercase_count = 0
    special_char_count = 0
    
    
    for char in input_string:
        # if not a alnum it is special character
        if ( not char.isalnum() ):
            special_char_count += 1
        # character is a number
        elif char.isdigit():
            number_count += 1
        # character is uppercase
        elif char.isupper():
            uppercase_count += 1
        # character is lowercase
        elif char.islower():
            lowercase_count += 1
    
# Seperate conditional for vowels, consonents  
        if char in vowels:
            vowel_count += 1
        # letter but not a vowel, so consonent
        elif char.isalpha():
            consonant_count += 1
```

Another Logic
* Check if it is a `alnum()`, if true, check if it is a `isdigit()`, if false then check for vowels and upper.
* If `not alnum` then it will be a special character.

```python
def analyze_string(input_string):
    vowels = "aeiouAEIOU"
    vowel_count = 0
    consonant_count = 0
    number_count = 0
    uppercase_count = 0
    lowercase_count = 0
    special_char_count = 0
    
    for char in input_string:
        if char.isalnum():
            if char.isdigit():
                number_count += 1
            else:
                if char in vowels:
                    vowel_count += 1
                else:
                    consonant_count += 1

                if char.isupper():
                    uppercase_count += 1
                elif char.islower():
                    lowercase_count += 1
        else:
            special_char_count += 1
```

____

### Additional String Practice Programs

##### Alternating letters to uppercase

```python
>>> s = "hello this is python"
>>> r = ''
>>> 
>>> for i in range(0, len(s)):
...     if i % 2 == 0:
...         r = r + s[i]
...     else:
...         r = r + s[i].upper()
... 
>>> r
'hElLo tHiS Is pYtHoN'
```

##### Find the biggest word(s) in a string

```python
str_in = input("Enter a string : ")
lis = str_in.split() # get words in list
biggest = lis[0] # consider first word
x = len(biggest) # len of first word

for i in range(1, len(lis)):
    word = lis[i]
    if len(word) > x:  # change if anything else is larger
        biggest = word
        x = len(biggest)
    elif len(word) == x: # if same length word
        biggest = f"{biggest}, {word}"

print("The biggest word(s) is/are:", biggest)
```

Same thing with usage of list to store multiple values when length is same.

```python
inputStr = input("Enter a string: ")
wordList = inputStr.split()
multipleMaxWordList = []  
# List to store more than one maximum length words

maxLenWord = ''  # String to store maximum length word

for i in wordList:
    if len(i) > len(maxLenWord):
        maxLenWord = i
        multipleMaxWordList = [maxLenWord]  
        # Store only the maxWord in the list
    elif len(i) == len(maxLenWord):
        maxLenWord = i
        multipleMaxWordList.append(i)  
        # Keep adding all occurrences of maxWords in the list

print(multipleMaxWordList)
```



## Tuples


##### List and describe any five methods on tuples.

* List and describe any five functions to operate Tuples.

**Answer :**

Although tuples are immutable and cannot be modified, there are few methods:
* `len()` :  Returns the number of elements in the tuple.
* `count(x)`  : Returns the number of occurrences of the element `x` in the tuple.
* `index(x)`  : Returns the index of the first occurrence of element `x` in the tuple. Raises a `ValueError` if `x` is not found.
* `max()` and  `min()` : Returns the largest and smallest element in the tuple. The elements must be comparable.

```python
my_tuple = (1, 2, 3, 2, 1, 2)

print(len(my_tuple))  # Output: 6

print(my_tuple.count(2)) # Output: 3

print(my_tuple.index(3)) # Output: 2

print( max(my_tuple))  # Output: 3

print( min(my_tuple))  # Output: 1
```

**Tuple creation and unpacking**

```python
my_tuple = 1, 2, 3, 4, 5  # Parentheses are optional
print(my_tuple)  
# Output: (1, 2, 3, 4, 5)


# Unpacking a tuple
t = (1, 2, 3, 4)
a, b, c, d = t 
print(a, b, c, d)  
# Output: 1 2 3 4
```

_____

##### Implement a program that prompts the user to enter a tuple of integers. Calculate and print the sum of all integers in the tuple.

**Answer :**

```python
def sum_of_tuple():
    user_input = input("Enter tuple of integers (e.g., (1, 2, 3)): ")
    
	# Use eval to safely convert the input string to a tuple
	user_tuple = eval(user_input)
	
	total = sum(user_tuple)
    print(f"The sum of all integers in the tuple is: {total}")
    
sum_of_tuple()
```

___
##### Develop Python script that takes a list of words and returns the length of the longest one using tuples.

**Answer :**

```python
def longest_word(words):
    word_lengths = []
    
    for word in words:
        word_lengths.append((word, len(word)))
    
    longest = word_lengths[0]
    # assuming first value is longest
    
    for word, length in word_lengths:
        if length > longest[1]:
            longest = (word, length)
            
    return longest_word[1]

words = ["apple", "banana", "grapefruit", "kiwi", "mango"]

print(f"The length of the longest word is: {longest_word(words)}")

# The length of the longest word is: 10
```

____

##### Program to store and convert student marks to a tuple

Write a Python program that:
- Prompts the user to enter the number of students.
- For each student, prompts the user to enter their marks in three subjects (e.g., Mathematics, Science, English).
- Stores the marks of each student in a list.
- Convert the list to a tuple.

**Answer :**

```python
n = int(input("Enter the number of students: "))
t = []
for i in range(n):
    m1 = input("Enter marks for subject 1: ")
    m2 = input("Enter marks for subject 2: ")
    m3 = input("Enter marks for subject 3: ")
    t.append((m1, m2, m3))
    print()

print("Marks as tuple:", tuple(t))
```

____

##### Store the following data in a list, a tuple, and a dictionary:
```
India 91
USA   1
UK    41
Japan 9
```

**Answer :**

```python
# List of tuples
data_list = [("India", 91), ("USA", 1), ("UK", 41), ("Japan", 9)]
```

```python
# Tuple of tuples
data_tuple = (("India", 91), ("USA", 1), ("UK", 41), ("Japan", 9))
```

```python
# Dictionary
data_dict = {"India": 91, "USA": 1, "UK": 41, "Japan": 9}
```


___
