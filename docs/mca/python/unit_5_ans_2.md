
---
title: "Python Unit-5 Answered-2"
description: ""
date: 2024-12-17T22:34:58+05:30
lastmod: 2024-12-17T22:34:58+05:30
draft: false
---

# Python Unit-5 Answered-2


##### Develop a script that will prompt the user for a file name, then print all lines from the file that contain the Python comment character #.

**Answer :**

```python
file_name = input("Please enter the file name: ")

try:
    file = open(file_name, 'r')
    for line in file:
        if '#' in line:
            print(line.strip())

except FileNotFoundError:
    print(f"Error: The file '{file_name}' was not found.")

finally:
    # Ensuring file is closed
    if 'file' in locals():
        file.close()
```

`with` handles the file opening and closing automatically, ensuring that the file is always closed, even if an error occurs within the block.

```python
file_name = input("Please enter the file name: ")

try:
    with open(file_name, 'r') as file:
        for line in file:
            if '#' in line:
                print(f"Line : {line.strip()}"
                
except FileNotFoundError:
    print(f"Error: The file '{file_name}' was not found.")
```

___

##### Develop a python script that will prompt the user for a string and a file name, and then print all lines in the file that contains the string entered by the user.

**Answer :**

```python
file_name = input("Please enter the file name: ")
se_pattern = input("Enter Pattern to search: ")

try:
    file = open(file_name, 'r')
    for line in file:
        if se_pattern in line:
            print(line.strip())

except FileNotFoundError:
    print(f"Error: The file '{file_name}' was not found.")

finally:
    if 'file' in locals():
        file.close()
```

____

##### Develop a script that asks the user for a file name, then prints the number of characters, words and lines in the file.

* Discuss all the file accessing modes and also write python program to count the number of words, characters and lines from the files and also copy the contents of the file into another file.

**Answer :**

```python
file_name = input("Enter file name to read from: ")

output_file_name = input("Enter file name to copy contents into: ")

try:
    file = open(file_name, 'r')
    output_file = open(output_file_name, 'w')

    num_lines = 0
    num_words = 0
    num_characters = 0
    
    for line in file:
        num_lines += 1
        num_characters += len(line) 
        # length of line is character count
        num_words += len(line.split())  
        # Split by spaces and count the words
        
        # Write the line to the output file
        output_file.write(line)
        
    print(f"Number of lines: {num_lines}")
    print(f"Number of words: {num_words}")
    print(f"Number of characters: {num_characters}")

except FileNotFoundError:
    print(f"Error: The file '{file_name}' was not found.")

finally:
    if 'file' in locals():
        file.close()

    if 'output_file' in locals():
        output_file.close()
```

Same but with `with - as ` to handle file open and close.
```python
file_name = input("Enter file name to read from: ")

output_file_name = input("Enter file name to copy contents into: ")

try:
    with open(file_name, 'r') as file:
        num_lines = 0
        num_words = 0
        num_characters = 0

        with open(output_file_name, 'w') as output_file:
            for line in file:
                num_lines += 1
                num_characters += len(line)
                num_words += len(line.split())
                
                output_file.write(line)
                
        print(f"Number of lines: {num_lines}")
        print(f"Number of words: {num_words}")
        print(f"Number of characters: {num_characters}")

except FileNotFoundError:
    print(f"Error: The file '{file_name}' was not found.")
```

___

##### Develop a python program that will prompt the user for a file name, read all the numbers from the file into a list, separate positive and negative numbers from the list, and store them in separate files.

**Answer :**

```python
file_name = input("File name to read from: ")

positive_file_name = input("File to store positive numbers: ")
negative_file_name = input("File to store negative numbers: ")

try:
    file = open(file_name, 'r')

    positive_numbers = []
    negative_numbers = []

    for line in file:
        for word in line.split():
            try:
                num = float(word)
                if num >= 0:
                    positive_numbers.append(num)
                else:
                    negative_numbers.append(num)
            except ValueError:
                # Skip words that are not numbers
                continue
                
    file.close()

    with open(positive_file_name, 'w') as pos_file:
        for num in positive_numbers:
            pos_file.write(f"{num}\n")

    with open(negative_file_name, 'w') as neg_file:
        for num in negative_numbers:
            neg_file.write(f"{num}\n")
            
except FileNotFoundError:
    print(f"Error: The file '{file_name}' was not found.")
```

____

##### Develop a script that will prompt the user for a file name, read all the lines from the file into a list, sort the list, then print the lines in sorted order as well as write to a file.

**Answer :**

```python
# Ask for the input file name
file_name = input("Please enter the file name to read from: ")

output_file_name = input("Please enter the file name to store the sorted lines: ")

try:
    file = open(file_name, 'r')
    # Read all lines from the file into a list
    lines = file.readlines()
    # Sort the lines
    lines.sort()

    # Print the sorted lines
    for line in lines:
        print(line.strip())
        
    # Open the output file for writing
    output_file = open(output_file_name, 'w')
    for line in lines:
        output_file.write(line)
        
    file.close()
    output_file.close()

    print(f"\nThe sorted lines have been written to '{output_file_name}'.")

except FileNotFoundError:
    print(f"Error: The file '{file_name}' was not found.")
```

___

##### Write a python program to sort the file contents in reverse order and write the sorted contents along with line number.

**Answer :**

```python
# Ask for the input file name
file_name = input("Please enter the file name to read from: ")

output_file_name = input("Please enter the file name to store the sorted lines with line numbers: ")

try:
    file = open(file_name, 'r')
    lines = file.readlines()

    # Sort the lines in reverse order
    lines.sort(reverse=True)

    output_file = open(output_file_name, 'w')

	line_num = 1
    for line in lines:
        output_file.write(f"Line {line_num}: {line}")
        line_num += 1
        
    file.close()
    output_file.close()

    print(f"The sorted lines with line numbers have been written to '{output_file_name}'.")

except FileNotFoundError:
    print(f"Error: The file '{file_name}' was not found.")
```

_____

##### Construct a python program to read a text file and display first 5 lines and last five lines.

**Answer :**

```python
file_name = input("Please enter the file name to read from: ")

try:
    file = open(file_name, 'r')
    
    lines = file.readlines()

    print("First 5 lines:")
    for i in range(min(5, len(lines))):
      # To prevent going out bound if len < 5
        print(lines[i].strip())

    # Display the last 5 lines
    print("\nLast 5 lines:")
    for i in range(max(0, len(lines)-5), len(lines)):  # Ensuring we don't go out of bounds
        print(lines[i].strip())
    
    file.close()

except FileNotFoundError:
    print(f"Error: The file '{file_name}' was not found.")
```

___

Consider the following file `num_pairs.txt`, read data and find the line total and write the line as well as total to a new file.
```
num_pairs.txt

1.3  3.4
2    4.2
-1   1
```

**Answer :**

```python
# Ask for the input and output file names
input_file_name = "num_pairs.txt"
output_file_name = "output_with_totals.txt"

try:
    with open(input_file_name, 'r') as file:
        lines = file.readlines()

    with open(output_file_name, 'w') as output_file:
        for line in lines:
            numbers = line.split()
            total = sum(float(num) for num in numbers)
            output_file.write(f"{line.strip()} = {total}\n")

    print(f"The file '{output_file_name}' has been created with line totals.")

except FileNotFoundError:
    print(f"Error: The file '{input_file_name}' was not found.")
except ValueError:
    print("Error: There was a problem with converting data to numbers.")
```

___

##### Consider the following program which contains some errors. You may assume that the comments within the program accurately describe the program’s intended behavior.

```
# Get two numbers from the user
n1, n2 = eval(input()) # 1

# Compute sum of the two numbers
print(n1 + n2) # 2

# Compute average of the two numbers
print(n1+n2/2) # 3   Division happens first

# Compute a quotient
print(n1/d1) # 4   d1 not declared

# Compute a product
n1*n2 = d1 # 5   Reversed experssion assignement
```
For each line listed in the comments, indicate whether or not an interpreter error, run-time exception, or logic error is present. Not all lines contain an error.

___

##### Develop a script to open a file and count number of lines in the file. Find the middle 3 lines in the file and write it on to another file. Repeat the same steps until there are only 3 lines are left.



____


