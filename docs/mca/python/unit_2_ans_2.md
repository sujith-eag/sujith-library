---
title: "Python Unit-2 Answered-2"
description: ""
date: 2024-12-17T22:34:58+05:30
lastmod: 2024-12-17T22:34:58+05:30
draft: false
---


# Python Unit-2 Answered-2

# Lists


#### How do you demonstrate that lists are equal and identical?

**Answer :**

Equality and identity of lists can be shown by using the `==` (equality) and `is` (identity) operators.
- The equality operator (`==`) checks if the values of two lists are the same (i.e., the elements in the lists are identical).
- The identity operator (`is`) checks if two variables refer to the same object in memory. This is used to determine if two lists are identical (i.e., they are the same object).

```python
list1 = [1, 2, 3]
list2 = [1, 2, 3]

print(f"list1 == list2: {list1 == list2}")  
# Output: True

print(f"list1 is list2: {list1 is list2}")  
# Output: False

list3 = list1
print(f"list1 is list3: {list1 is list3}")  
# Output: True
```

_____

##### When you use the + operator to concatenate two lists, does it make a copy or a reference of the arguments? Explain with the help of an example.

**Answer :**

When `+` operator is used to concatenate two lists in Python, it creates a new list that contains the elements from both lists. 

It does not modify the original lists. This means it makes a copy of the elements from the original lists and combines them into a new list.

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]

new_list = list1 + list2  # Creates a new list

print("Original list1:", list1)  # Output: [1, 2, 3]
print("Original list2:", list2)  # Output: [4, 5, 6]
print("New list:", new_list)     # Output: [1, 2, 3, 4, 5, 6]
```

____

##### Explain the purpose of slicing in Python lists. Provide at least 4 examples to demonstrate slicing operations.

**Answer :**

**Slicing** in Python allows to access a subset (or "slice") of a list by specifying a start, stop, and step.  List can be sliced to retrieve elements from a specific range, manipulate parts of the list, or skip elements with a step value.

```python
list[start:stop:step]
```

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

slice1 = my_list[2:5]  # From index 2 to 4
print(slice1)  # Output: [2, 3, 4]


slice2 = my_list[:]  # The entire list
print(slice2)  # Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


slice4 = my_list[-3:]  # Last 3 elements
print(slice4)  # Output: [7, 8, 9]
```

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
slice3 = my_list[1:8:2]  
# Start from index 1, stop before 8, step of 2

print(slice3)  # Output: [1, 3, 5, 7]


slice5 = my_list[3:-2]  
# From index 3 to 2 elements before the last
print(slice5)  # Output: [3, 4, 5, 6, 7]
```

___

##### Explain the usage any 5 list operating methods with examples. 

* Demonstrate any four functions of lists with the help of an examples.
* Demonstrate any five list functions with the help of an example.
* Exemplify built – in list methods
* Explain the usage of the following methods with examples: i) extend()  ii) pop()  iii) sort()  iv) split()  v) join()

**Answer :**

1. `append()`  : Adds a single element to the end of the list.
```python
my_list = [1, 2, 3]
my_list.append(4)

print(my_list)  
# Output: [1, 2, 3, 4]
```

2. `insert()`  : Inserts an element at a specific index.
```python
my_list = [1, 2, 3]
my_list.insert(1, 4)  # Insert 4 at index 1

print(my_list)  
# Output: [1, 4, 2, 3]
```

3. `remove()`  : Removes the first occurrence of an element from the list.
```python
my_list = [1, 2, 3, 2]
my_list.remove(2)

print(my_list)  
# Output: [1, 3, 2]
```

4. `pop()`  : Removes and returns the element at the specified index (or the last element if no index is provided).
```python
list1 = [10, 20, 30, 40]

removed_item = my_list.pop(1)   # Remove and return index 1
print(removed_item)
# Output: 20

my_list.pop()  # removed last element
print(my_list)  
# Output: [10, 30]
```

5. `extend()` method is used to add all elements of an iterable (like a list, tuple, set, etc.) to the end of a list. 
```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]

list1.extend(list2)  
# Adding elements of list2 to list1

print(list1)  
# Output: [1, 2, 3, 4, 5, 6]
```

6. `sort()` method is used to sort the elements of a list in ascending order by default. You can also pass a `reverse=True` argument to sort in descending order.
```python
list1 = [3, 1, 4, 2]
list1.sort()
print(list1)
# [1, 2, 3, 4]

# Sort in descending order
list1.sort(reverse=True)
print(list1)  
# [4, 3, 2, 1]
```

`sort()` changes the original list in place so does not return the sorted value directly to be printed. `sorted()` can be used to get a return.

7. `split()` method splits a string into a list of substrings based on a specified delimiter. If no delimiter is provided, it splits the string at any whitespace by default.

```python
sentence = "Hello World Python"
words = sentence.split()
# Default delimiter is space
print(words)  
# ['Hello', 'World', 'Python']

# Using a custom delimiter
date = "2025-01-25"
parts = date.split('-')
print(parts)  
# Output: ['2025', '01', '25']
```

8. `join()` method is used to join elements of an iterable (like a list, tuple) into a single string, using the string that `join()` is called on as a separator.

```python
words = ['Hello', 'World', 'Python']
sentence = ' '.join(words)
print(sentence)  
# Output: "Hello World Python"

# Join elements with a hyphen
sentence = '-'.join(words)
print(sentence)  
# Output: "Hello-World-Python"
```

____
##### Develop a script for filtering odd and even numbers into two separate lists from a list of numbers.

```python
even = []
odd = []

for i in range(1,20):
	if i%2==0:
		even.append(i)
	else:
		odd.append(i)

print(f"Even are: {even}")
print(f"Odd are: {odd}")
```

____

##### Develop a python program to print unique elements in a list.

**Answer :**

Using Set to remove Duplicates (Shortcut)
```python
my_list = [1, 2, 3, 2, 4, 5, 1]
unique_elements = set(my_list)

print( list(unique_elements) )  
# Output: [1, 2, 3, 4, 5]
```

Using Membership Check on List using for loop
```python
my_list = [1, 2, 3, 2, 4, 5, 1]

unique = []

for i in my_list:
	if i in unique:
		continue
	else:
		unique.append(i)

print(unique)
# Output: [1, 2, 3, 4, 5]
```

____

##### Develop a Python code to extract the Even elements indices from the given list.

**Answer :**

The program is asking to find the index of the even numbers in the list.
* iterate over the list with for or while loop with `i=0` to be used as index.
* if  element at `lis[i]` is even then store `i`
```python
def even_indices(numbers):
    indices = []
    for i in range(len(numbers)):
        if numbers[i] % 2 == 0:
            indices.append(i)
            
    return indices


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

even_indices_list = even_indices(numbers)

print(f"Indices of even numbers: {even_indices_list}")
```

____

##### List operations

Consider the list `sub1={ANM,Py,DS,ASE,Java,OOPS }` perform the following operations and show the output
i) Insert the Sub `AWP` at the position 3
ii) Insert the `DMS` at the position 2 from the last.
iii) Return the list from the index position 1 to 5
iv) Change the value of the Subject in the index 5 to `BigData`
v) Check whether java is present in `subj1`
vi) Print the list in the reverse order
vii) Delete the element at the index position 6
viii) Return the total elements in the list

```python
>>> sub1 = ['ANM', 'py', 'DS', 'ASE', 'Java', 'OOPS']

# Insert at 3rd position
>>> sub1.insert(2, "AWP")
>>> sub1
['ANM', 'py', 'AWP', 'DS', 'ASE', 'Java', 'OOPS']

# Insert at position 2 from last
>>> sub1.insert(-1, "DMS")
>>> sub1
['ANM', 'py', 'AWP', 'DS', 'ASE', 'Java', 'DMS', 'OOPS']

# Return from index 1 to 5
>>> sub1[1:6]
['py', 'AWP', 'DS', 'ASE', 'Java']

# cange value at index 5
>>> sub1[5] = "BigData"
>>> sub1
['ANM', 'py', 'AWP', 'DS', 'ASE', 'BigData', 'DMS', 'OOPS']

# Checking member in list
>>> "Java" in sub1
False

# Print list in Reverse order
>>> for i in range(len(sub1)-1, -1, -1): 
...     sub1[i]
... 
'OOPS'
'DMS'
'BigData'
'ASE'
'DS'
'AWP'
'py'
'ANM'

# Another way of doing same
>>> rev_lis = sub1[::-1]
>>> rev_lis
['OOPS', 'DMS', 'BigData', 'ASE', 'DS', 'AWP', 'py', 'ANM']

# delete sub at index 6
>>> del sub1[6]
>>> sub1
['ANM', 'py', 'AWP', 'DS', 'ASE', 'BigData', 'OOPS']

# Return total elements
>>> len(sub1)
7
```

____

##### Consider the list 
`scores = [5, 4, 7, 3, 6, 2, 1]` and write the python instruction to perform the following operations:
i) Insert an element 9 at the beginning of the list.
ii) Insert an element 8 at the index position 3 of the list.
iii) Delete an element at the end of the list.
iv) Delete an element at the index position 3.

**Answer :**

```python
scores = [5, 4, 7, 3, 6, 2, 1]

# 1
scores.insert(0, 9)  # At 0 index insert 9
print(scores)  
# Output: [9, 5, 4, 7, 3, 6, 2, 1]

# 2
scores.insert(3, 8)  # At index 3 Insert 8
print(scores)  
# Output: [9, 5, 4, 8, 7, 3, 6, 2, 1]

# 3
scores.pop()  # Delete last element
print(scores)  
# Output: [9, 5, 4, 8, 7, 3, 6, 2]

# 4
del scores[3]  # Delete element at index 3
print(scores)  
# Output: [9, 5, 4, 7, 3, 6, 2]
```

____


Predict the output of the following and justify your answer:
```python
i) 
>>>lst=[1,7,3,9,2]
>>>lst.append([4,5])
>>>lst.extend([9,3])
>>>lst.pop(3)
>>>lst.insert(3,6)


ii) 
>>>22 > "z"
>>>[1, 2] in [0, 1, 2, 3]
>>>str=“Python programming”
>>>print(str[7:-4])
>>> ls=[34, 'hi', -5]
>>> ls.sort()
```


Predict the output of the following and justify your answer :
```python
i) 
22<"A"

ii) 
i = 5
print("welcome") if i>5 else print("bye")

iii)
[1,2] in [0,1,2,3]

iv)
s = "programming"
print(str[5:-2])

v)
ls = [34,'hi',-5]
ls.sort()
```

Predict the output of the following and justify your answer:

```python
i) 
a = -45
print (--a)

ii)
str1 = ‘hello’
print(str1[-1:])

iii)
a=[1,2,3,4,5,6,7,8,9]
a[::2]=10,30,50,50,90

iv)
a, b, c = True, False, False
if a or b and c:
	print "MSRIT"
else:
	print "RNSIT"
```


##### Write the evaluation result of the following expressions:
```
i) not “True”
ii) – 22 % 5
iii) “99” + 1
iv) dir(“python”) v) ['H', 'He', 'Li'] + 'Be'
```

`> not "True"`  Output: `False`,  Non-empty strings are considered `True`. The `not` operator inverts the boolean value, so `not "True"` returns `False`.

`> -22 % 5`  Output: `3` , Modulus operator `%` returns the remainder. The result of `-22 / 5` is `-4` with a remainder of `3`, so `-22 % 5` is `3`.

`> "99" + 1`   Output:  Raises a `TypeError`,  Cannot concatenate a string (`"99"`) with an integer (`1`). Both operands to be of the same type for concatenation.

`> dir("python")`,  Output: A list of attributes and methods associated with string objects.

`> ['H', 'He', 'Li'] + 'Be'` , Output: This will raise a `TypeError`, Cannot concatenate a list with a string directly. 



## Dictionaries


Discuss the significance of dictionary. Develop a python program to simulate language dictionary.

##### Demonstrate the creation and operation of dictionaries in Python.

* How do you create and access dictionaries in Python? List and describe any 5 methods on dictionaries.
* List and exemplify the built – in dictionary methods.
* Demonstrate any three functions of dictionaries in python with examples.
* How do you create and access dictionaries in Python? Explain the operations `len()`, `copy()`, `clear()`, `items()` on dictionaries.
* Demonstrate how dictionaries are created and used in Python. List and describe any five methods on dictionaries.
* Demonstrate the usage of update( ) function to update one dictionary with another dictionary.

**Answer :**

Dictionaries are created using curly braces `{}` or the `dict()` constructor. A dictionary stores key-value pairs where each key is unique.
Dictionary values are accessed using keys in square brackets `[]`.

```python
my_dict = {'name': 'Alice', 'age': 25, 'city': 'New York'}

my_dict = dict(name='Alice', age=25, city='New York')

print( my_dict["name"] )
# Alice
```

**Dictionary Operations:**

`len()`  : Returns the number of key-value pairs in the dictionary.
```python
my_dict = {'a': 1, 'b': 2}

print(len(my_dict))  
# Output: 2
```

`items()` :  Returns a view object that displays a list of tuple pairs (key, value) in the dictionary.
```python
my_dict = {'a': 1, 'b': 2}

print(my_dict.items())  
# dict_items([('a', 1), ('b', 2)])
```

`copy()` : Returns a shallow copy of the dictionary.
```python
copied_dict = my_dict.copy()

print(copied_dict)  
# {'a': 1, 'b': 2}
```

`clear()` :  Removes all key-value pairs from the dictionary.
```python
my_dict.clear()

print(my_dict)  
# Output: {}
```

`update()` :  Updates the dictionary with elements from another dictionary or iterable of key-value pairs.
```python
my_dict = {'a': 1, 'b': 2}
my_dict.update({'b': 3, 'c': 4})

print(my_dict)  
# {'a': 1, 'b': 3, 'c': 4}
```

`get()`  :  Returns the value for a given key. If the key doesn't exist, it returns `None` or a specified default value.
```python
my_dict = {'a': 1, 'b': 2}

print(my_dict.get('a'))  
# Output: 1

print(my_dict.get('c', 'Not found'))  
# Output: Not found
```

`pop()`  : Removes and returns the value associated with a given key.
```python
my_dict = {'a': 1, 'b': 2}
popped_value = my_dict.pop('b')

print(popped_value)  
# Output: 2

print(my_dict)
# Output: {'a': 1}
```

____

##### Use the for loop and give example for:
i) Processing characters in Strings
ii) Displaying values and keys of a dictionary
iii) Looping over List of Lists.

**Answer :**

i) Processing characters in Strings
```python
string = "Hello"

for char in string:
    print(char)
```

```
H
e
l
l
o
```

ii) Displaying values and keys of a dictionary
```python
students = {"Alice": 85, "Bob": 90, "Charlie": 78}

for name, grade in students.items():
    print(f"Student: {name}, Grade: {grade}")
```

```
Student: Alice, Grade: 85
Student: Bob, Grade: 90
Student: Charlie, Grade: 78
```

iii) Looping over List of Lists.
```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for lis in list_of_lists:
    for item in lis:
        print(item, end=" ")
    print()
```

```
1 2 3 
4 5 6 
7 8 9
```

___

##### Develop a Python program that counts the number of occurrences of a letter in a string, using dictionaries.

**Answer :**

Logic is to create a new Dictionary Key if the letter is not in dictionary and to increment the Dictionary value of that key.
```python
def count_unique(string):
    letter_count = {}
    for letter in string:
        if letter in letter_count:
            letter_count[letter] += 1
        else:
            letter_count[letter] = 1
    return letter_count


input_string = "hello world"
result = count_unique(input_string)

print(result)  
# {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}
```

____

##### Develop a python program to count the frequency of words in a string using dictionary.

Logic is to split strings into words first and then find unique entries similar to above program.
```python
def word_frequency(text):
    words = text.split()
    freq = {}
    
    for word in words:
        if word in freq:
            freq[word] += 1
        else:
            freq[word] = 1
    return freq

text = "hello world hello"
print(word_frequency(text))  
# Output: {'hello': 2, 'world': 1}
```

____

##### Write a Python program to create a dictionary from a list where keys are elements and values are their frequencies.

Same logic as above program to find unique entries
```python
def create_frequency_dict(lst):
    frequency_dict = {}
    for item in lst:
        if item in frequency_dict:
            frequency_dict[item] += 1
        else:
            frequency_dict[item] = 1
    return frequency_dict

my_list = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
frequency = create_frequency_dict(my_list)

print(frequency)  
# {'apple': 3, 'banana': 2, 'orange': 1}
```

___

##### Implement a telephone directory using Dictionaries.

```python
telephone_directory = {}

telephone_directory['John'] = '123-456-7890'
telephone_directory['Alice'] = '987-654-3210'
telephone_directory['Bob'] = '555-123-4567'

print(telephone_directory)

# Accessing a number by name
name = 'John'
print(f"The number for {name} is {telephone_directory[name]}")  

# The number for John is 123-456-7890
```

____

##### Develop a python program for the following: Create a dictionary by asking the user to give the name and marks of 10 different students. Sort the dictionary created according to marks.

```python
count = 3
dict_1 = {}
while count > 0:
	name = input("Name : ")
	marks = input("Marks : ")
	dict_1[name] = marks
	count -= 1

```

Storing marks as key and then sorting based on keys using sorted
```python
count = 10
dict_1 = {}

while count > 0:
    name = input("Name: ")

    try:   # checking marks is numeric
        marks = int(input("Marks: "))
    except ValueError:
        print("Please enter numeric marks.")
        continue
	# making dictionary entry
    dict_1[marks] = name
    count -= 1

# Sort the dictionary by marks
sorted_dict = dict(sorted( dict_1.items() ) )

print("\nSorted list of students by marks:")

for marks, name in sorted_dict.items():
    print(f"{name}: {marks}")
```

Same logic but keys are names, so sorting needs lambda function.
```python
count = 10
dict_1 = {}

while count > 0:
    name = input("Name: ")
    marks = input("Marks: ")

    try:   # checking marks is numeric
        marks = int(marks)
    except ValueError:
        print("Please enter valid numeric marks.")
        continue
	# making dictionary entry
    dict_1[name] = marks
    count -= 1

# Sort the dictionary by marks
sorted_dict = dict(sorted(dict_1.items(), key=lambda item: item[1]))

print("\nSorted list of students by marks:")

for name, marks in sorted_dict.items():
    print(f"{name}: {marks}")
```

`sorted(dict_1.items(), key=lambda item: item[1])`

- The `sorted()` function is used to **sort** the list of key-value tuples returned by `dict_1.items()`.
- The `key` argument is used to specify a function that determines how the elements should be compared (i.e., what value to sort by).
- `lambda item: item[1]` takes an element of the dictionary (which is a tuple, like `('Alice', 85)`) and returns the second element (`item[1]`) of that tuple.
- The `sorted()` function will sort the list of tuples by the second item (the value) in each tuple.
- The `dict()` constructor is used to convert the sorted list of tuples back into a dictionary.

___

##### Design a Python program to create a dictionary containing the names and ages of five people. Determine the name of the oldest person in the dictionary.

Logic would be to iterate through the dictionary and store only the largest value and it's corresponding key by comparison.
```python
people = {
    'Alice': 30,
    'Bob': 45,
    'Charlie': 55,
    'David': 40,
    'Eve': 35
}

largest_age = -1
oldest_person = ""

for name, age in people.items():
    if age > largest_age:
        largest_age = age
        oldest_person = name

print(f"The oldest person is {oldest_person} with an age of {largest_age}.")
```

Another logic would be to store age as `key` and `name` as value. This allows to sort the dictionary directly. The last one will be largest value.
```python
people = {
    30: 'Alice',
    45: 'Bob',
    55: 'Charlie',
    40: 'David',
    35: 'Eve'
}

max_age = max(people.keys())
oldest = people[max_age]
print(f"Oldest person is {oldest} at {max_age} age")
print("")


# Sorting dictionary by age in ascending order
sorted_people = dict(sorted(people.items()))

print("People sorted by age (ascending):")
for age, name in sorted_people.items():
    print(f"Age: {age}, Name: {name}")


sorted_people = dict(sorted(people.items() , reverse=True ))
# Used to sort in Descending
```

There is method to sort the dictionary itself by its values but complicated.
```python
people = {
    'Alice': 30,
    'Bob': 45,
    'Charlie': 55,
    'David': 40,
    'Eve': 35
}

# Sort the dictionary by age
sorted_people = dict(sorted(people.items(), key=lambda item: item[1], reverse=True))

person_list = list(sorted_people.keys())

print(f"The oldest person is: {person_list[0]}")
```


## Numpy

##### Discuss the following with an example: 

i) Indexing ii) Splitting arrays iii) Shape and reshape.

**Answer :**

1. Indexing in NumPy Arrays refers to accessing specific elements in an array based on their position (index). In NumPy, arrays can be indexed using integers, slices, and more advanced techniques such as boolean indexing or fancy indexing.

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])

print(arr[0])  # 1

print(arr[-1]) # 5
```

Index multi-dimensional arrays:
```python
arr2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# 2nd row, 3rd column
print(arr2d[1, 2])  # 6
```

2. Splitting Arrays is useful to break down a large array into smaller ones. NumPy provides the `split()` function to divide an array into multiple sub-arrays.

```python
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9])

# Split the array into 3 equal parts
split_arr = np.split(arr, 3)
print(split_arr)  
# [array([1, 2, 3]), array([4, 5, 6]), array([7, 8, 9])]
```

3. Shape and Reshape in NumPy
The shape of an array tells how many elements are present along each axis (dimension). 

```python
arr = np.array([1, 2, 3, 4, 5, 6])

print(arr.shape)  # Output: (6,)
```

The `reshape()` function allows you to change the shape of an array without changing its data.
```python
# Reshape the array into a 2x3 matrix
reshaped_arr = arr.reshape(2, 3)
print(reshaped_arr)
# Output: 
# [[1 2 3]
#  [4 5 6]]
```

____

##### Explain the following routines of NumPy with examples: 

i) reshape ii) resize iii) unique iv) append v) insert.

**Answer :**

i) `resize()`: Changes the size of the array. If the new size is larger, the array is padded with zeroes. If it's smaller, the array is truncated.
```python
arr = np.array([1, 2, 3, 4, 5])
arr.resize(2, 3)  # Resize to 2x3
print(arr)
# Output: 
# [[1 2 3]
#  [4 5 0]]
```

ii) `unique()`: Finds the unique elements in an array.
```python
arr = np.array([1, 2, 2, 3, 4, 4, 5])
unique_arr = np.unique(arr)
print(unique_arr)  # Output: [1 2 3 4 5]
```

iii) `append()`: Adds values to the end of an array.
```python
arr = np.array([1, 2, 3])
arr_appended = np.append(arr, [4, 5])
print(arr_appended)  # Output: [1 2 3 4 5]
```

iv) `insert()`: Inserts values into an array at specified positions.
```python
arr = np.array([1, 2, 3, 5])
arr_inserted = np.insert(arr, 3, 4)  # Insert 4 at index 3
print(arr_inserted)  # Output: [1 2 3 4 5]
```

____

##### Create a NumPy array of integers and perform the following operations: 

i) Calculate the shape of the array. 
ii) Print a subset of the array using slicing. 
iii) Multiply all elements of the array by 2 and print the result.

**Answer :**

```python
import numpy as np

# Create a NumPy array
arr = np.array([1, 2, 3, 4, 5])

print(f"Shape of the array: {arr.shape}")
# Output: (5,)

subset = arr[1:4]  # Slice from index 1 to 3
print(f"Subset of the array: {subset}")
# Output: [2 3 4]

multiplied_arr = arr * 2
print(f"Array multiplied by 2: {multiplied_arr}")
# Output: [2 4 6 8 10]
```


____

##### Write a program to create NumPy array and get the smallest and largest element from the array and display them.

```python
import numpy as np

arr = np.array([15, 2, 45, 67, 23, 89, 12, 8])

smallest = np.min(arr)
largest = np.max(arr)

print(f"Array: {arr}")
print(f"Smallest element: {smallest}")
print(f"Largest element: {largest}")
```


____

* Illustrate 2-D and 3-D array iterating with respect to numpy.

* Differentiate between lists and tuples in Python. How to create nested lists? Demonstrate how to create and print a 3-dimensional matrix with lists.


___


