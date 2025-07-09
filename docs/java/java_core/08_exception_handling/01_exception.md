# Exception Handling

### Exception Hierarchy

In Java, all exceptions are represented by classes. All exception classes are derived from a class called `Throwable`. When an exception occurs in a program, an object of some type of exception class is generated.

There are two direct subclasses of `Throwable`:

- `Exception`
    
- `Error`

Exceptions of type `Error` are related to serious issues that occur within the Java Virtual Machine (JVM) and are not typically handled by your program. These are beyond your control and are not discussed further here.

Errors that result from program activity (like divide-by-zero or file not found) are represented by subclasses of `Exception`. Your program should handle these types of exceptions. An important subclass of `Exception` is `RuntimeException`, which represents various common runtime errors.

## Exception Generation

Exceptions can be generated in three ways:

1. **By the JVM**: In response to internal errors beyond your control.
    
2. **By the program**: Due to issues like array index out-of-bounds or division by zero.
    
3. **Manually**: Using the `throw` statement.
    
Regardless of how an exception is generated, it is handled in the same way.

## Exception Handling Fundamentals

Java handles exceptions using five key keywords:

- `try`
    
- `catch`
    
- `throw`
    
- `throws`
    
- `finally`
    
These form an interrelated subsystem. The use of one typically implies the use of at least one of the others.

- The `try` block contains code that you want to monitor for exceptions.
    
- If an exception occurs, it is thrown and can be caught by a `catch` block.
    
- System-generated exceptions are automatically thrown by the Java runtime.
    
- You can manually throw an exception using the `throw` keyword.
    
- If a method might throw an exception, it must declare this using the `throws` clause.
    
- Code that must execute regardless of whether an exception occurs goes into a `finally` block.
    
---

### Using `try` and `catch`

The core of exception handling lies in the `try` and `catch` blocks. A `catch` block must follow a `try`.

```java
try {
	// Code to monitor
} 
catch (ExcepType1 exOb) {
	// Handler for ExcepType1
} 
catch (ExcepType2 exOb) {
	// Handler for ExcepType2
}
```

Each `catch` block handles a specific type of exception. The type of exception determines which block executes. Only the matching `catch` block will run.

There is also a form of `try` known as **try-with-resources**, which is used for automatic resource management.

---

#### Example: Basic Exception Handling

```java
class ExecDemo {
	public static void main(String[] args) {
		int[] nums = new int[4];

		try {
			System.out.println("Before exception is generated.");
			nums[7] = 10; // Out-of-bounds
			System.out.println("This won't display");
		}
		catch (ArrayIndexOutOfBoundsException exec) {
			System.out.println("Index out-of-bounds!");
		}

		System.out.println("After catch statement.");
	}
}
```

**Output:**

```
Before exception is generated.
Index out-of-bounds!
After catch statement.
```

Execution jumps to the appropriate `catch` block when an exception occurs. Statements following the error inside the `try` block will not execute.

If no exception is thrown, the `catch` block is skipped.

---

### Consequence of an Uncaught Exception

If an exception is not caught by your program, it is handled by the JVM's default exception handler, which:

- Terminates the program
    
- Displays an error message and stack trace
    

Also, remember that the type of exception must match the one specified in the `catch` clause to be caught.

---

### Handling Errors Gracefully

One benefit of exception handling is the ability to recover and allow the program to continue.

```java
class ExcDemo3 {
	public static void main(String[] args) {
		int[] numer = { 4, 8, 16, 32, 64, 128 };
		int[] denom = { 2, 0, 4, 4, 0, 8 };

		for (int i = 0; i < numer.length; i++) {
			try {
				System.out.println(numer[i] + " / " + denom[i] + " is " + numer[i]/denom[i]);
			}
			catch (ArithmeticException exc) {
				System.out.println("Can't divide by Zero!");
			}
		}
	}
}
```

**Output:**

```
4 / 2 is 2
Can't divide by Zero!
16 / 4 is 4
32 / 4 is 8
Can't divide by Zero!
128 / 8 is 16
```

In this example, exceptions are caught and handled without halting the program.

---

### Using Multiple `catch` Statements

You can associate multiple `catch` blocks with one `try` block. Each must catch a different type of exception.

```java
class ExcDemo4 {
	public static void main(String[] args) {
		int[] numer = { 4, 8, 16, 32, 64, 128, 256, 512 };
		int[] denom = { 2, 0, 4, 4, 0, 8 };

		for (int i = 0; i < numer.length; i++) {
			try {
				System.out.println(numer[i] + " / " + denom[i] + " is " + numer[i]/denom[i]);
			}
			catch (ArithmeticException exc) {
				System.out.println("Can't divide by Zero!");
			}
			catch (ArrayIndexOutOfBoundsException exc) {
				System.out.println("No matching element found.");
			}
		}
	}
}
```

**Output:**

```
4 / 2 is 2
Can't divide by Zero!
16 / 4 is 4
32 / 4 is 8
Can't divide by Zero!
128 / 8 is 16
No matching element found.
No matching element found.
```

Each `catch` handles a specific exception type.

---

### Catching Subclass Exceptions

Since all exceptions inherit from `Throwable`, you can catch all exceptions by catching `Throwable`.

However, when catching both superclass and subclass exceptions, the subclass must be caught first to avoid unreachable code.

```java
class ExcDemo5 {
	public static void main(String[] args) {
		int[] numer = { 4, 8, 16, 32, 64, 128, 256, 512 };
		int[] denom = { 2, 0, 4, 4, 0, 8 };

		for (int i = 0; i < numer.length; i++) {
			try {
				System.out.println(numer[i] + " / " + denom[i] + " is " + numer[i]/denom[i]);
			}
			catch (ArrayIndexOutOfBoundsException exc) { // subclass
				System.out.println("No matching element found.");
			}
			catch (Throwable exc) { // superclass
				System.out.println("Some exception occurred!");
			}
		}
	}
}
```

**Output:**

```
4 / 2 is 2
Some exception occurred.
16 / 4 is 4
32 / 4 is 8
Some exception occurred.
128 / 8 is 16
No matching element found.
No matching element found.
```

>[!note]
> Placing the superclass catch clause before the subclass one results in a compile-time error due to unreachable code.

---

### General Notes

- A `catch(Exception e)` clause acts as a _catch-all_ for most runtime errors and can be useful when you want to prevent any abnormal termination.
    
- It is also useful when several types of exceptions need to be handled in the same way, avoiding code duplication.
    

---

### Nested `try` Blocks

Nested `try` blocks are often used to handle different categories of errors with different levels of severity.

For example:

- Outer `try` can catch catastrophic errors
    
- Inner `try` blocks can handle minor or recoverable ones
    
This structure improves clarity and control in complex programs.
