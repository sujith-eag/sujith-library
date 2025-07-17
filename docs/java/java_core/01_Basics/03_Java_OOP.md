# Object-Oriented Programming (OOP) in Java

At the core of Java lies **object-oriented programming (OOP)**. Java is fundamentally built on the principles of OOP, and every Java program, to some extent, follows this paradigm.

OOP combines the best ideas of **structured programming** with powerful new concepts that organize code around **data** rather than just around actions. In structured programming, programs are primarily structured around _what is happening_—functions or procedures that act on data. This can be described as “**code acting on data**.”

In contrast, **object-oriented programming organizes a program around its data**, encapsulating both the data and the methods that operate on it. The core principle becomes “**data controlling access to code**.” In Java, you define data and associate with it the code that is allowed to manipulate it. This structure provides clarity, modularity, and reusability.

## Core Principles of OOP

To support object-oriented design, all OOP languages share three foundational principles:

1. **Encapsulation**
2. **Polymorphism**
3. **Inheritance**

## Encapsulation

**Encapsulation** is the mechanism that binds together the code and the data it manipulates, while protecting both from outside interference and misuse. It allows an object to **hide its internal state** and require all interaction to occur through **well-defined interfaces**.

In Java:

- **Classes** are the fundamental unit of encapsulation.

- A class defines both the structure (data) and behavior (methods) of its objects.

- **Objects** are instances of classes and serve as self-contained “black boxes” containing data and associated methods.

- Fields and methods can be marked as `private`, `public`, or `protected`, controlling their visibility and access.

This separation of internal representation from external interface enhances **modularity**, **security**, and **maintainability**.

## Polymorphism

**Polymorphism**, derived from Greek meaning “many forms,” allows one interface to be used for a general class of actions. The exact behavior is determined by the specific context.

This concept is often summarized as **“one interface, multiple methods.”**

Example:

- Suppose a program needs to manage **three types of stacks**: one for integers, one for floating-point numbers, and one for characters.

- While the underlying data types differ, the **stack operations (push, pop, peek)** are the same.

- With polymorphism, a **single set of stack methods** can be used for all types by defining them through a common interface or superclass.

This allows developers to:

- **Write more generic and reusable code**

- **Reduce complexity**

- **Adapt to changes with minimal impact**

## Inheritance

**Inheritance** is the process by which one class (the **subclass**) can acquire the properties and behaviors of another class (the **superclass**). It provides a natural mechanism for expressing **hierarchical relationships** and supports **code reuse**.

Key benefits:

- A subclass **inherits** the fields and methods of its parent class.

- It can also **override** or **extend** functionality to suit more specific needs.

- Promotes the **"is-a" relationship**: if `Dog` inherits from `Animal`, then a `Dog` _is an_ `Animal`.

Inheritance helps to:

- Eliminate redundant code

- Encourage code organization

- Model real-world relationships effectively

