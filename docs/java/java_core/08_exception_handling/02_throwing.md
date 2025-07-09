# Throwing Exceptions

So far, we’ve seen exceptions generated automatically by the Java Virtual Machine (JVM). However, Java also allows **manually throwing an exception** using the `throw` statement.

```java
throw exceptionObject;
```

Here, `exceptionObject` must be an instance of a class derived from `Throwable`.

```java
// Manually throw an exception.
class ThrowDemo {
	public static void main(String[] args) {
		try 
		{
			System.out.println("Before throw.");
			throw new ArithmeticException();  // manually throw
		} 
		catch (ArithmeticException exc) 
		{
			System.out.println("Exception caught.");
		}
		System.out.println("After try/catch block.");
	}
}
```

**Output:**

```
Before throw.
Exception caught.
After try/catch block.
```

> [!Note]
>  The `throw` keyword throws an object, not a type. Therefore, you must use `new` to create an instance of the exception.

## Rethrowing an Exception

An exception caught in one `catch` block can be **rethrown** to be handled by another, outer `catch` block. This technique is useful when:

- You want multiple handlers to process different aspects of the same exception.
    
- Local code handles part of the issue, and another part is escalated.

```java
// Rethrow an exception to the caller.
class Rethrow {
	public static void genException() 
	{
		int[] numer = { 4, 8, 16, 32, 64, 128, 256, 512 };
		// longer than denom
		int[] denom = { 2, 0, 4, 4, 0, 8 };

		for (int i = 0; i < numer.length; i++) 
		{
			try 
			{
				System.out.println(numer[i] 
					+ " / " + denom[i] + " is " 
						+ numer[i] / denom[i]);
			} 
			catch (ArithmeticException exc) 
			{
				System.out.println("Can't divide by Zero!");
			} 
			catch (ArrayIndexOutOfBoundsException exc) 
			{  // catch subclass
				System.out.println("No matching element found.");
				
				throw exc; // Rethrow exception
			}
		}
	}
}

class RethrowDemo {
	public static void main(String[] args) 
	{
		try 
		{
			Rethrow.genException(); // call method
		} 
		catch (ArrayIndexOutOfBoundsException exc) 
		{
			System.out.println("Fatal error - program terminated.");
		}
	}
}
```

Here, `ArithmeticException` is handled locally, but `ArrayIndexOutOfBoundsException` is rethrown and caught by the `main()` method.

---

### Inspecting Throwable

In every `catch` clause, the caught exception is an object derived from the `Throwable` class. Therefore, it inherits several useful methods.

Two important methods of `Throwable`:

- `toString()` – Returns a description of the exception.
    
- `printStackTrace()` – Displays the call stack at the point where the exception occurred.
    
```java
// Using Throwable methods.
class ExcTest {
	static void genException() 
	{
		int[] nums = new int[4];
		System.out.println("Before exception is generated.");
		nums[7] = 10;  // Generates an exception
	}
}

class UseThrowableMethods 
{
	public static void main(String[] args) 
	{
		try 
		{
			ExcTest.genException();
		} 
		catch (ArrayIndexOutOfBoundsException exc) 
		{
			System.out.println("Standard message is: ");
			System.out.println(exc);  // Calls toString()
			System.out.println("\nStack trace: ");
			exc.printStackTrace();
		}
		System.out.println("After catch statement.");
	}
}
```

**Output:**

```
Before exception is generated.
Standard message is: 
java.lang.ArrayIndexOutOfBoundsException: Index 7 out of bounds for length 4

Stack trace:
java.lang.ArrayIndexOutOfBoundsException: Index 7 out of bounds for length 4
	at ExcTest.genException(UseThrowableMethods.java:7)
	at UseThrowableMethods.main(UseThrowableMethods.java:13)
After catch statement.
```

---

### Using `finally`

The `finally` block contains code that **always executes**, regardless of how the `try` block exits—whether it completes normally, throws an exception, or returns from the method.

This is especially useful for resource cleanup (closing files, releasing connections, etc.).

```java
class UseFinally {
	public static void genException(int what) {
		int t;
		int[] nums = new int[2];

		System.out.println("Receiving " + what);

		try {
			switch (what) {
				case 0:
					t = 10 / what; // Divide by zero
					break;
				case 1:
					nums[4] = 4; // Array index out-of-bounds
					break;
				case 2:
					return; // Return from try
			}
		} 
		catch (ArithmeticException exc) 
		{
			System.out.println("Can't divide by Zero!");
			return; // return from catch
		} 
		catch (ArrayIndexOutOfBoundsException exc) 
		{
			System.out.println("No matching element found.");
		// catch the exception

		} 
		finally 
		{
			System.out.println("Leaving try.");
		// Executed on way out of try/catch blocks

		}
	}
}

class FinallyDemo {
	public static void main(String[] args) 
	{
		for (int i = 0; i < 3; i++) 
		{
			UseFinally.genException(i);
			System.out.println();
		}
	}
}
```

**Output:**

```
Receiving 0
Can't divide by Zero!
Leaving try.

Receiving 1
No matching element found.
Leaving try.

Receiving 2
Leaving try.
```

>[!important]
>Even when returning from within the `try` or `catch`, the `finally` block executes.

---

### Using `throws`

If a method **does not handle an exception**, it must declare that it may throw the exception using the `throws` clause.

```java
returnType methodName(parameters) throws ExceptionType {
	// method body
}
```

Only **checked exceptions** (those not derived from `RuntimeException`) must be declared. Failing to declare them results in a compile-time error.

---

```java
// Use throws
class ThrowsDemo 
{
	public static char prompt(String str) 
		throws java.io.IOException 
		{
			System.out.print(str + ": ");
			return (char) System.in.read();
		}

	public static void main(String[] args) 
	{
		char ch;
		try 
		{
			ch = prompt("Enter a letter");
		} catch (java.io.IOException exc) 
		{
			System.out.println("I/O exception occurred.");
			ch = 'X';
		}
		System.out.println("You pressed " + ch);
	}
}
```

The `prompt()` method uses the `throws` clause to declare that it might throw `IOException`. The `main()` method, which calls `prompt()`, is responsible for handling that exception.

`IOException` is part of the `java.io` package and must be either fully qualified or imported.


When performing keyboard input, you needed to add the clause `throws java.io.IOException` to `main( )`. An input statement might generate an `IOException`, and at that time, we weren’t able to handle that exception. Thus, such an exception would be thrown out of `main( )` and needed to be specified as such. Now that you know about exceptions, you can easily handle `IOException`.

