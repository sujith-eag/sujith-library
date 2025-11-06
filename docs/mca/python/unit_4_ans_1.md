---
title: "Python Unit-4 Answered-1"
description: ""
date: 2024-12-17T22:34:58+05:30
lastmod: 2024-12-17T22:34:58+05:30
draft: false
---


# Python Unit-4 Answered-1

# OOP


#### List and explain 5 built-in classes in python and their use, with suitable example. Develop a program to demonstrate the same.

**Answer :**

Built-in classes are predefined classes that come with the Python language.
- `str`: Used for string manipulation (uppercase, lowercase, splitting, etc.).
- `list`: Used to store ordered, mutable collections.
- `dict`: Used to store key-value pairs for fast lookups.
- `tuple`: Used for ordered, immutable collections.
- `set`: Used to store unique, unordered collections.


**`str` (String) :** The `str` class represents strings (text data). A string is a sequence of characters enclosed in single, double, or triple quotes. Used for manipulating text or strings.

```python
text = "Hello, World!"
print(text.upper())  # Converts the string to uppercase
print(text.lower())  # Converts the string to lowercase
print(text.split())  # Splits the string into a list of words
```


**`list` (List) :** The list class is used to represent ordered collections of items. Lists are mutable, meaning you can change their contents (add, remove, or modify elements).

```python
numbers = [1, 2, 3, 4, 5]
numbers.append(6)  # Adds 6 to the end of the list
numbers.remove(3)  # Removes the first occurrence of 3
print(numbers)
```


**`dict` (Dictionary) :** The dict class represents key-value pairs. Each key is unique, and values can be of any data type. Used for fast lookups and data storage where the data is organized as key-value pairs.

```python
person = {"name": "John", "age": 30, "city": "New York"}

print(person["name"])

person["age"] = 31
```


**`tuple` (Tuple) :** The `tuple` class is used to represent an ordered collection of items that are immutable (unchangeable). Once a tuple is created, its values cannot be modified. Used to store a collection of items that should not be modified.

```python
coordinates = (10, 20, 30)  # A tuple representing a 3D point
print(coordinates[0])  # Access the first element of the tuple

coordinates[1] = 25  
# This would raise an error because tuples are immutable
```

**`set` (Set) :** The `set` class represents an unordered collection of unique items. Sets do not allow duplicates. Used for storing unique items and performing mathematical set operations (e.g., union, intersection, difference).

```python
fruits = {"apple", "banana", "orange"}

fruits.add("grape")  # Adds "grape" to the set
fruits.remove("banana")  # Removes "banana" from the set
print(fruits)
```

____

### Explain the basic structure of a class with example.

* How the class created in python? 
* Explain the basic syntax of class in Python. Show an example defining a class which demonstrates attributes, methods, constructor and destructor.
* Explain the basic structure of class in python. Also explain the difference between data attributes and class attributes with example.
* Differentiate Constructor and Destructor in python using suitable python script.
* Explain constructors and destructors in python with examples.
* Demonstrate the following concepts w.r.t python: i) Constructor ii) Destructor iii) self iv) del
* Define the following w.r.t classes in python. Demonstrate each of the following.  (i) Constructor (ii) Destructor (iii) getattr (iv) hasattr.
* Write short note on : i)getattr ii) setattr.
* Demonstrate the usage of getattr() and hasattr() methods with a suitable example.
* Demonstrate self and del keyword usage in python giving a suitable example.
* Demonstrate the scope of class attributes and data attributes with an example.
* Differentiate class variable and instance variable in python using suitable python script.
* Explain data attributes and class attributes? Develop a python program that will illustrate the fact that class variables are shared among all instances of a class.

**Answer :**

A class contains **methods** and **variables**, and it is used as a blueprint to create objects. An **object** is an instance of a **class** from which it is created from.

#### Basic Structure of a Class in Python

A class in Python is defined using the `class` keyword and It typically includes:
* Attributes: Variables that belong to the class or instance.
* Methods: Functions defined within the class that can operate on attributes or perform other tasks.
* Constructor (__init__): Special method for initializing new instances of the class.
* Destructor (__del__): Special method called when an instance is destroyed.

#### Creating a class

A class is created using the `class` keyword followed by the **class name** and a colon `:` 
```python
class Classname:
    # class body
```
The class does not require parentheses unless it inherits from a base class.

___

#### Constructor 

The `__init__()` method is a special method referred to as the **constructor**. It is automatically called when a new object of the class is created. 

The purpose of the `__init__()` method is to initialize the instance’s attributes and set up the initial state of the new object. It is called only once during the creation of the instance. `__init__()` method does **not** create an instance; instead, it initializes the instance by assigning the beginning values to its attributes. 

The first parameter of `__init__()` is always **self**, which represents the instance of the class itself. This is true for all methods inside the class for allowing access to instance itself.

Destructor (`__del__`): is invoked when an object is destroyed or removed. It is useful for cleaning up resources or performing any cleanup operations.

`del`: is the keyword Used to delete an object or an attribute.

```python
class Animal:
    def __init__(self, name):
        self.name = name
        print(f"An animal named {self.name} has been created.")

    def __del__(self):
        print(f"An animal named {self.name} has been deleted.")

# Creating and deleting object
dog = Animal("Dog")
del dog  
# Destructor is called when object is deleted
```

____

#### self keyword

When an object is created, `self` will allow us to access the attributes and methods of that particular object.
- When an object is instantiated, **self** stores the memory location of that object.
- Through **`self`**, we can access all the instance-specific data and methods.

```python
S1 = Student()
```

Here, `S1` is an instance of the class `Student`, and it holds the memory address of the instance. The instance variable values (such as `name` and `age`) are accessed using **`self`** inside the class.

In addition to its use in the `__init__()` method, **`self`** is also used as the first parameter in other instance methods to refer to the instance variables.

____

#### Types of Variable / Attributes

In Python, there are two types of variables used inside a class:
1. **Instance variables**
2. **Class variables** (also called **Static variables**)

**Instance variables** are variables that have a separate copy for each instance (object) of the class. If multiple copies of an object are created, each object will have its own independent copy of the instance variables.  Modifying the instance variable in one object will not affect the other objects.
- Instance Variables are defined inside the `__init__()` method using the `self` keyword.
- Instance Variables can be accessed using dot notation, inside the class using `self.variable`, and outside the class using `instanceName.variable`.


**Class variables** / **Static Members** are shared among all instances of a class. There is only one copy of the class variable, and if it is modified in one instance, it gets modified for all instances.
* Class variables are defined directly in the class without using the `self` keyword.
* To access and modify a class variable, the `cls` reference (instead of `self`)  is used or the Class name is used, since class variables are tied to the class, not the individual instance. 

```python
class Car:
	wheels = 4  # Class attribute
    def __init__(self, make, model):
        self.make = make  # Instance attributes
        self.model = model

    def display(self):
        print(f"{self.make} {self.model} has {Car.wheels} wheels.")


car1 = Car("Toyota", "Corolla")
car1.display()  
# Toyota Corolla has 4 wheels.

# Modifying class atribute
Car.wheels = 8

car2 = Car("Audi", "A8")
car2.display()
# Audi A8 has 8 wheels.
```
Changing the Class attribute `wheel` changed it for all instances of the object class `Car` .

___

- **`getattr()`**: Used to get the value of an attribute of an object. If the attribute doesn’t exist, it returns a default value or raises an `AttributeError`.

- **`hasattr()`**: Checks if an attribute exists in an object.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person("Alice", 25)

# Using getattr
print(getattr(person, "name"))
# Alice
print(getattr(person, "address", "Not available"))
# Not available

# Using hasattr
print(hasattr(person, "name"))  
# True
print(hasattr(person, "address"))  
# False
```

____

##### What is the difference between a method and a function? Give an example each.

**Answer :**

The key difference between a **method** and a **function** in Python lies in how and where they are defined and used:
- Methods are functions that are part of a class and operate on instances of that class.
- Functions are independent blocks of code and are not bound to any class or object.

A **method** is a function that is defined **inside a class** and is associated with **instances** of that class.
* Methods operate on the instance or class, typically modifying or accessing attributes of the class.
* Methods are called on an instance of the class or the class itself.
* Methods have access to instance variables and can manipulate the state of the object.
* Methods within a class define the behavior or actions that objects of that class can perform.

A **function** is a block of code that can be defined **outside of a class** and is not tied to an object or instance. 
* Functions are standalone pieces of code that perform a task and are not directly associated with any particular object or class unless explicitly passed.
- Functions do not have access to instance-specific attributes or methods unless explicitly passed the object.

```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    # Method inside the class
    def display_info(self):
        print(f"Car Brand: {self.brand}, Model: {self.model}")

my_car = Car("Toyota", "Corolla")
my_car.display_info()  
# Outputs: Car Brand: Toyota, Model: Corolla

# Function outside the class
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)  
print(result)
# Outputs: 8
```

`display_info` is a **method** because it is defined inside the `Car` class and operates on the instance `my_car`.

`add_numbers` is a **function** because it is defined outside any class and operates on the arguments passed to it. It doesn't depend on any instance or class state.

____

##### Explain different ways of accessing attributes in a class.

**Answer :**

These are the various ways to interact with the attributes of a class in Python.

1. Direct access using instance (`my_car.brand`): Access instance attributes or class attributes directly.
2. Accessing using class name (`Car.wheels`): Access class attributes using the class name.
3. `getattr()`: Access attributes dynamically.
4. `setattr()`: Set or modify attributes dynamically.
5. `delattr()`: Delete attributes dynamically.
6. `hasattr()`: Check if an attribute exists in an object.


**Accessing Attributes Using an Instance :** Attributes of a class can be directly accessed using the dot (`.`) notation with the instance and attribute name. This is the most common and straightforward way to access attributes.

**Accessing Attributes Using the Class Name :** **class attributes** (not instance attributes) which are shared across all instances of the class, rather than specific to an instance can be accessed using the class name. This is useful when the attribute is .

```python
class Car:
    wheels = 4  # Class attribute
    
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

my_car = Car("Toyota", "Corolla")

# Accessing instance attributes
print(my_car.brand)  
# Outputs: Toyota

print(my_car.model)  
# Outputs: Corolla

# Accessing class attribute
print(Car.wheels)  
# Outputs: 4
```

_____

**Accessing Attributes Using `getattr()` :** The `getattr()` function is used to access an attribute of an object dynamically. This is especially useful when the attribute name is not known until runtime.
- `getattr(object, name, default)` returns the value of the attribute if it exists, or the `default` value if the attribute is not found.

**Accessing Attributes Using `setattr()` :** While `getattr()` is used for retrieving attributes, `setattr()` is used to **set** the value of an attribute. It is useful when you need to modify or add an attribute to an object dynamically.
- `setattr(object, name, value)` sets the value of an attribute.

```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

my_car = Car("Toyota", "Corolla")

print(getattr(my_car, "brand"))  # Outputs: Toyota
print(getattr(my_car, "model"))  # Outputs: Corolla

# Using default value if the attribute doesn't exist
print(getattr(my_car, "color", "Unknown"))  # Outputs: Unknown

# Dynamically setting the value of an attribute
setattr(my_car, "color", "Red")

# Accessing the newly set attribute
print(my_car.color)  # Outputs: Red
```

Here, `setattr()` is used to dynamically add a new attribute (`color`) to the `my_car` object.

**Accessing Attributes Using `delattr()` :** The `delattr()` function is used to delete an attribute of an object. If the attribute exists, it removes it from the object.
- `delattr(object, name)` deletes the specified attribute.

**Accessing Attributes Using `hasattr()` :** The `hasattr()` function checks if an attribute exists in an object. It returns `True` if the attribute exists and `False` otherwise.
- `hasattr(object, name)` checks if the attribute `name` exists.

____

##### Write a program to demonstrate multiple inheritance concept in python.

* Demonstrate Multiple Inheritance with Method Overriding.
* Illustrate multilevel inheritance in Python. Also demonstrate how to pass data to the base class constructor.

**Answer :**

Creating new classes from from existing classes so new classes will acquire all the features of the existing classes is called inheritance.

* **Inheritance** is a mechanism where one class (the **subclass**) inherits the attributes and methods of another class (the **superclass**). This allows the subclass to reuse code and add its own unique features.

```python
class Subclass(BaseClass):
    pass
```

- **Multiple Inheritance**: A class can inherit from multiple parent class and it's attributes, and it can override methods and attributes of the parent classes.

- **Multilevel Inheritance**: A class can inherit from another class, which in turn inherits from another class.

- **Passing Data to Base Class Constructor**: The `super()` function is used to call the constructors of parent classes and pass data to them.

___

`Child` that inherits from `parent` class will override a method that is common in both parent classes.
```python
class Parent1:
    def speak(self):
        print("Speaking from Parent1")

class Parent2:
    def speak(self):
        print("Speaking from Parent2")

# Inheriting from both Parent1 and Parent2
class Child(Parent1, Parent2):
    def speak(self):
        print("Speaking from Child (Overriding Method)")

child_instance = Child()

child_instance.speak()  
# Outputs: Speaking from Child (Overriding Method)
```

The `Child` class inherits from both `Parent1` and `Parent2` and overrides the `speak` method. When `child_instance.speak()` is called, it invokes the method from the `Child` class due to method overriding.

```python
# Base class
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound.")

# Inheriting from Animal
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

    def speak(self):  # Parent method overridden
        print(f"{self.name} barks.")

dog = Dog("Buddy", "Golden Retriever")
dog.speak()  
# Outputs: Buddy barks.
```

____

In **multilevel inheritance**, a class inherits from a class that is already derived from another class. Data can be passed to a constructor of the base class using the `super()` function.

```python
class Grandparent:
    def __init__(self, surname):
        self.surname = surname
        print(f"Grandparent surname: {self.surname}")

# Parent Class inheriting from Grandparent
class Parent(Grandparent):
    def __init__(self, surname, occupation):
        # Call the constructor of Grandparent class
        super().__init__(surname)
        self.occupation = occupation
        print(f"Parent occupation: {self.occupation}")

# Child Class inheriting from Parent
class Child(Parent):
    def __init__(self, surname, occupation, name):
        # Call the constructor of Parent class
        super().__init__(surname, occupation)
        self.name = name
        print(f"Child name: {self.name}")

# Create an instance of Child
child_instance = Child("Smith", "Engineer", "John")
```

```
Grandparent surname: Smith
Parent occupation: Engineer
Child name: John
```

By using `super()`, we ensure that the constructor of the base classes (grandparent and parent) is called before initializing attributes in the child class, thus allowing us to pass and initialize data across the inheritance chain.

______

##### Demonstrate how the concept of data hiding is implemented in python.

* Demonstrate the following concepts in python: i) Data Hiding ii) Inheritance iii) Static Members iv) del keyword.
* Write short note on: i) Data hiding ii) Static Member.
* Explain the following concepts in python with example:  i) Data hiding ii) Inheritance.

**Data hiding** is a principle in object-oriented programming (OOP) where the internal state of an object is not directly accessible from outside the class. This ensures that the object's data is protected from unauthorized or unintended modifications. In Python, data hiding can be implemented by using **private** and **protected** attributes.

1. **Private Attributes**: These attributes cannot be accessed directly from outside the class. They are denoted by a double underscore (`__`) before the attribute name.
2. **Protected Attributes**: These attributes are intended to be accessed only within the class and its subclasses. They are denoted by a single underscore (`_`), which is a convention and does not strictly enforce access control.

```python
class Employee:
    def __init__(self, name, salary):
        self.name = name       # Public attribute
        self._salary = salary  # Protected attribute (by convention)
        self.__id = 12345      # Private attribute

    def get_id(self):
        return self.__id  # Access private attribute through a method


emp = Employee("John", 50000)

print(emp.name)  
# Outputs: John

print(emp._salary)  
# Outputs: 50000

print(emp.__id)  
# This will raise an AttributeError

# Accessing private attribute via a public method
print(emp.get_id())  
# Outputs: 12345
```

____

##### Create a class Rectangle. 

The constructor for this class should take two numeric arguments, which are the width and height. Add methods to compute the area and perimeter of the rectangle, as well as methods that simply return the height and width. Add a method `is_Square` that returns a Boolean value if the rectangle is a square.

```python
class Rectangle:
	def __init__(self, width, height):
		self.width = width
		self.height = height
		
	def area(self):
		result = self.width*self.height
		return result
		
	def peri(self):
		result = (self.width*2)+(self.height*2)
        # result = 2* (self.width + self.hight)
		return result
		
	def getWidth(self):
		return self.width
	
	def getHeight(self):
		return self.height
	
	def isSquare(self):
		if (self.height == self.width):
			return True
		else:
			return False
        # return self.width == self.hight


h = float(input("Enter Hight: "))
w = float(input("Enter Width: "))
r1 = Rectangle(w,h)

print(f"\nFor Rectangle having hight: {r1.height}, width: {r1.width}")

print(f"The Area will be : {r1.area()}")

print(f"The Perimeter will be: {r1.peri()}")

print(f"Is it a Square?: {r1.isSquare()}")

print(f"The Width is {r1.getWidth()}, hight is {r1.getHeight()}")
```

____

##### Design a Python class called account and implement the functions deposit, withdraw and display balance.

* Define a class BankAccount. The constructor for this class will take one argument i.e. default balance for opening an account. Add methods withdraw, deposit and displayBalance to do respective operations. In the withdraw method check for sufficient balance before withdrawal. And also keep track of number of bank accounts.

* Define a class BankAccount. The constructor for this class will take one argument i.e. default balance for opening an account. Add methods to read, withdraw, deposit and display to do respective operations. 
* i) In the read method store account holder information like name, email, phone and type of account.
* ii) If the account type is SB – add 5% interest and if account type is FD – add 8% interest to the balance. 
* iii) In the withdraw method check for sufficient balance before withdrawal.

**Answer :**

Simple Version without read method
```python
class BankAccount:
     """Bank related Transactions"""
     
    count = 0
	
	def __init__(self, balance=0.0):
		self.balance = balance
		BankAccount.count +=1

	def deposit(self, amount):
		if amount > 0:
			self.balance += amount
			return self.balance
		else:
			print("Invalid Amount")

	def withdraw(self, amount):
		if amount > self.balance:
			print("Low Balance")
		else:
			self.balance -= amount
			return self.balance
			
	def displayBalance(self):
		print(f"The balnace is : {self.balance}")
```


Adding the read method
```python
class BankAccount:
     """Bank related Transactions"""
     
    count = 0
	
	def __init__(self, balance=0.0):
		self.balance = balance
		BankAccount.count +=1
		# Attributes for read method
		self.name = ""
		self.email = ""
		self.phone = ""
		self.acc_type = ""
		
	def deposit(self, amount):
		if amount > 0:
			self.balance += amount
			return self.balance
		else:
			print("Invalid Amount")
			
	def withdraw(self, amount):
		if amount > self.balance:
			print("Low Balance")
		else:
			self.balance -= amount
			return self.balance
			
	def displayBalance(self):
		print(f"The balnace is : {self.balance}")
		
	def read(self, name, email, phone, acc_type):
		self.name = name
		self.email = email
		self.phone = phone
		self.acc_type = acc_type
		if self.acc_type == "SB":
			self.balance += self.balance * 0.05
		else:
			self.balance += self.balance * 0.08


account1 = BankAccount(1000.0)

account1.read("John Doe", "johndoe@example.com", "1234567890", "SB")

account1.displayBalance()

account1.deposit(500)

account1.withdraw(200)

account1.displayBalance()

print(f"Total accounts created: {BankAccount.count}")
```

____

Create a class called Stack, Add methods to perform different stack operations like push, pop, is_empty,is_full and display.

```python
class Stack:
    def __init__(self, max_size=5):
        self.stack = []
        self.max_size = max_size
        
    def is_empty(self):
        return len(self.stack) == 0
        
    def is_full(self):
        return len(self.stack) == self.max_size
        
    def push(self, item):
        if self.is_full():
            print("Stack is full! Cannot push more items.")
        else:
            self.stack.append(item)
            print(f"Pushed: {item}")
            
    def pop(self):
        if self.is_empty():
            print("Stack is empty! Cannot pop.")
        else:
            item = self.stack.pop()
            print(f"Popped: {item}")
            return item
            
    def display(self):
        if self.is_empty():
            print("Stack is empty.")
        else:
            print("Current Stack: ", self.stack)

```

```python
# Stack instance with a maximum size 3
stack = Stack(3)

# Push elements onto the stack
stack.push(10)
stack.push(20)
stack.push(30)

stack.push(40)  
# "Stack is full!"

stack.display()
stack.pop()
stack.display()

stack.pop()
stack.pop()

print("Is the stack empty?", stack.is_empty())  
# True
```

____

* Define a class time which has 3 members hours, minutes and seconds. Use constructor to initialize the values and develop functions to add two times and display.

* Suppose you are designing the software for an ATM (Automatic Teller Machine). Write at least three different scenarios describing the use of your system. From these create CRC cards to describe the various classes that might be used to implement your design. Walk through your scenarios to make sure that all activity is matched to a class.


___

