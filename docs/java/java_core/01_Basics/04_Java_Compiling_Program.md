# Compiling Java Program

## Java Development Kit (JDK)

Modern versions of Java are available in two primary forms:

- **Oracle JDK** – Downloadable from: [www.oracle.com/java/technologies/downloads](https://www.oracle.com/java/technologies/downloads/)

- **OpenJDK** – Open-source version available at: [https://jdk.java.net](https://jdk.java.net)


The **Java Development Kit (JDK)** includes two essential command-line tools:

1. `javac` – The Java **compiler**, which translates source code into bytecode.

2. `java` – The Java **interpreter** (also known as the **application launcher**) that runs compiled bytecode.


> [!tip] 
> The JDK operates through the command line. It is **not** a graphical IDE (like Eclipse or IntelliJ IDEA), nor is it a windowed application.

#### Sample Java Program

```java
/* file name: Example.java */

class Example {
    // A Java program begins with a call to main()
    public static void main(String[] args) {
        System.out.println("Java drives the Web.");
    }
}
```

### Steps to Execute a Java Program

1. Enter the program

2. Compile the program

3. Run the program

## Entering the Program

- Use a **text editor** (e.g., Notepad, VS Code), **not a word processor** like MS Word. Word processors add formatting that can confuse the Java compiler.

- The source file name **must match** the name of the **main class**. For example, the class `Example` must be saved in a file called `Example.java`.

- Java source files must use the **`.java`** extension.

- A source file is called a **compilation unit** and may contain one or more class definitions.

## Compiling the Program

Use the Java compiler (`javac`) from the command line:

```bash
javac Example.java
```

This creates a file called `Example.class`, which contains the compiled **bytecode** which is not executable code.

>[!note] 
>Bytecode is not directly executable. It must be interpreted or compiled at runtime by the **Java Virtual Machine (JVM)**.

## Running the Program

Use the Java interpreter (`java`) by passing the class name (without the `.class` extension):

```bash
java Example
```

The interpreter will look for a file named `Example.class`, then execute the bytecode.

>[!note] 
>Every class is compiled into its **own `.class` file**, so naming consistency is important.

## Features Common to All Java Programs

### Comments

- `/* ... */` – Multi-line comment

- `//` – Single-line comment

### Class Declaration

```java
class Example {
    ...
}
```

- Declares a new class named `Example`.

- All Java code **must reside inside a class**.

### The `main()` Method

```java
public static void main(String[] args) {
    ...
}
```

- **`public`**: Accessible from outside the class (required by JVM).

- **`static`**: Can run without an object of the class.

- **`void`**: The method does not return a value.

- **`String[] args`**: Command-line arguments are passed as a string array.


---

#### Output with `System.out.println()`

```java
System.out.println("Java drives the Web.");
```

- `System` is a predefined class.

- `out` is the output stream connected to the console.

- `println()` is a method to display output with a newline.

- `print()` is similar but **does not add** a newline.

```java
/* File: Example2.java */

class Example2 {
    public static void main(String[] args) {
        int myVar1;
        int myVar2;

        myVar1 = 1024;
        System.out.println("myVar1 Contains " + myVar1);

        myVar2 = myVar1 / 2;
        System.out.print("myVar2 contains myVar1 / 2: ");
        System.out.println(myVar2);
    }
}
```

```bash
$ javac Example2.java
$ java Example2
myVar1 Contains 1024
myVar2 contains myVar1 / 2: 512
```

## Working with Floating-Point Numbers

Java supports two floating-point types:

- `float` (single-precision)

- `double` (double-precision, more common)

```java
/*
GalToLit.java
Program to convert gallons to liters
*/

class GalToLit {
    public static void main(String[] args) {
        double gallons;
        double liters;

        gallons = 10;
        liters = gallons * 3.7854;

        System.out.println(gallons + " gallons is " + liters + " liters");
    }
}
```

```bash
$ javac GalToLit.java
$ java GalToLit
10.0 gallons is 37.854 liters
```

>[!note] 
>To print a blank line in Java, simply call `System.out.println();` with no arguments.

