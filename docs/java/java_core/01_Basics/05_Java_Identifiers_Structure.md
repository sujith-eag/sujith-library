# Java Identifiers & Structures

### Java Keywords

Java defines **67 keywords** that form the foundation of the language. These keywords, along with Java’s syntax, operators, and separators, define the structure of Java programs.

>[!note] 
Keywords **cannot be used** as identifiers (e.g., variable names, class names, method names).

```java
abstract    assert      boolean     break       byte        case
catch       char        class       const       continue    default
do          double      else        enum        exports     extends
final       finally     float       for         goto        if
implements  import      instanceof  int         interface   long
module      native      new         non-sealed  open        opens
package     permits     private     protected   provides    public
record      requires    return      sealed      short       static
strictfp    super       switch      synchronized this       throw
throws      to          transient   transitive  try         uses
var         void        volatile    while       with        yield
```

---

#### Context-Sensitive Keywords

**16 keywords** are _context-sensitive_, meaning they are treated as keywords **only when used in certain contexts** related to specific features introduced in later Java versions:

##### Related to Modules (Java 9+)

- `exports`, `module`, `open`, `opens`
    
- `provides`, `requires`, `to`, `transitive`, `uses`, `with`
    

##### Related to Other Features

- `record` – Declares a record class (Java 14+)
    
- `sealed`, `non-sealed`, `permits` – Used for sealed class hierarchies
    
- `yield` – Used in the enhanced switch statement (Java 13+)
    
- `var` – Local variable type inference (Java 10+)
    

>[!note] 
>Because they are context-sensitive, these additions **do not affect** older Java programs.

---

##### Reserved but Unused Keywords

- `const`
- `goto`

These are reserved but **not currently used** in Java.

---

##### Reserved Literals

These are **not keywords**, but they are **reserved** and cannot be used as identifiers:

- `true`
- `false`
- `null`

---

#### Underscore `_` as a Keyword

Starting with **JDK 9**, a standalone underscore (`_`) is considered a **keyword** and cannot be used as an identifier. This prevents potential confusion and ambiguity in code.

## Identifiers in Java

An **identifier** is the name given to a method, variable, class, or any other user-defined program element.

### Rules for Identifiers:

- Cannot be a Java keyword
    
- Cannot use reserved literals (`true`, `false`, `null`)
    
- Should not use standard method names like `println`
    
- Must begin with a letter, underscore `_`, or dollar sign `$` (not recommended)
    
- Subsequent characters may include digits (`0-9`)
    

>[!Best Practice]
>Use meaningful and descriptive names that convey the purpose or usage of the item being named (e.g., `studentName`, `calculateTotal`, `isValid`).


## Java Class Libraries

Java programs rely on a comprehensive set of **built-in class libraries**. These libraries provide:

- **Input/Output** (I/O)
    
- **String handling**
    
- **Networking**
    
- **Graphics**
    
- **Graphical User Interface (GUI)** support    

Together, these classes form the **Java API**, a crucial part of the Java platform.

##### Example:

- `System` is a **predefined class** included in all Java programs.
    
- `System.out` is an **output stream** connected to the console.
    
- `println()` and `print()` are **built-in methods** used to display text on the console.
    
## Two Control Statements

The Java if statement works much like the IF statement in any other language. It determines the flow of program execution based on whether some condition is true or false. 

`if(condition) statement;`

Here, condition is a Boolean expression. (A Boolean expression is one that evaluates to either true or false.) If condition is true, then the statement is executed. If condition is false, then the statement is bypassed.

```java
if(10 < 11) System.out.println("10 is less than 11");

if(10 < 9) System.out.println("this won't be displayed");
```

Java has `< >  <= >=  == !=`

```java
/*
Demonstrate the if.
Call this file IfDemo.java.
*/
class IfDemo 
{
	public static void main(String[] args) 
	{
		int a, b, c;
		a = 2;
		b = 3;
	
		if(a < b) 
			System.out.println("a is less than b");
	
		// this won't display anything
		if(a == b) 
			System.out.println("you won't see this");
		System.out.println();
	
		c = a - b; // c contains -1
		System.out.println("c contains -1");
		if(c >= 0) 
			System.out.println("c is non-negative");
		if(c < 0) 
			System.out.println("c is negative");
		System.out.println();
	
		c = b - a; // c now contains 1
		System.out.println("c contains 1");
		if(c >= 0) 
			System.out.println("c is non-negative");
		if(c < 0) 
			System.out.println("c is negative");
	}
}
```

```
a is less than b
c contains -1
c is negative
c contains 1
c is non-negative
```

## the `for` loop

Repeatedly executes a sequence of code by creating a loop

`for(initialization; condition; iteration) statement;`

In its most common form, the initialization portion of the loop sets a loop control variable to an initial value. The condition is a Boolean expression that tests the loop control variable.

If the outcome of that test is true, statement executes and the for loop continues to iterate. If it is false, the loop terminates. The iteration expression determines how the loop control variable is changed each time the loop iterates.

```java
/* ForLoopDemo.java  for loop demo*/

class ForLoopDemo
{
	public static void main(String[] args)
	{
		int count;

		for(count = 0; count<5; count++)
			System.out.println("This is count: "+ count);

		System.out.println("Done Iterating");
	}
}
```

```
$ javac ForLoopDemo.java 

$ java ForLoopDemo 
This is count: 0
This is count: 1
This is count: 2
This is count: 3
This is count: 4
Done Iterating
```

## Block of code

A code block is a grouping of two or more statements. This is done by enclosing the statements between opening and closing curly braces. Once a block of code has been created, it becomes a logical unit that can be used any place that a single statement can

```java
if(w<h)
{
	v = w*h;
	w = 0;
}
```

____

#### Semicolons and Positioning

In Java, the semicolon is a separator. It is often used to terminate a statement. In essence, the semicolon indicates the end of one logical entity.

```java
System.out.println("This is a long line of output" +
	x + y + z +
	"more output");
```

It is a free form language and doesn't matter where statements are placed relative to each other.

```java
/* 
 Conversion from gallon to liter
 called GalToLitTable.java
*/

class GalToLitTable
{
	public static void main(String[] args)
	{
		double gallons, liters;
		int lineCounter;

		lineCounter = 0;
		for(gallons = 1; gallons <= 100; gallons++)
		{
			liters = gallons * 3.7854;
			System.out.println(gallons +" gallons is " + liters + " liters.");
			lineCounter++;

			if (lineCounter == 10)
			{ // space for every ten line
				System.out.println();
				lineCounter = 0;
			}
		}
	}
}
```

