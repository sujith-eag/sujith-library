# Additional Exception Features

Modern versions of Java provide advanced exception-handling features to improve code clarity and reduce boilerplate.

### 1. Try-with-Resources

The **try-with-resources** statement simplifies automatic resource management (e.g., closing files or streams). When a resource is opened within the parentheses of a `try`, it is automatically closed when the block exits, whether normally or through an exception.

> You can use this with any object that implements the `AutoCloseable` interface.

---

### 2. Multi-Catch

The **multi-catch** feature lets you catch multiple exception types in a single `catch` block, reducing code duplication.

```java
catch (ArithmeticException | ArrayIndexOutOfBoundsException e) {
	// Handle both exceptions
}
```

- Use the **`|`** operator to separate exception types.
    
- The exception variable `e` is implicitly `final`—you **cannot** assign a new value to it.

---

### 3. Final Rethrow (More Precise Rethrow)

The **final rethrow** feature allows the compiler to infer the most specific type of exception that can be thrown. If a catch block rethrows the exception, Java tracks which types are possible and enforces more precise type checking. This helps avoid overly broad exception declarations.

## Built-in Exceptions

Java provides a robust hierarchy of built-in exceptions. They fall into two broad categories:

---

###  Unchecked Exceptions

Unchecked exceptions are subclasses of `RuntimeException`. These **do not need to be declared** in a method’s `throws` clause.

|Exception|Description|
|---|---|
|`ArithmeticException`|Arithmetic error (e.g., divide-by-zero).|
|`ArrayIndexOutOfBoundsException`|Accessing invalid array index.|
|`ArrayStoreException`|Storing the wrong type in an array.|
|`ClassCastException`|Invalid type casting.|
|`EnumConstantNotPresentException`|Invalid enum constant access.|
|`IllegalArgumentException`|Illegal method argument.|
|`IllegalCallerException`|Illegal caller of a method.|
|`IllegalMonitorStateException`|Illegal monitor state (e.g., waiting on an unlocked thread).|
|`IllegalStateException`|Environment or application in an invalid state.|
|`IllegalThreadStateException`|Incompatible thread operation.|
|`IndexOutOfBoundsException`|Index is out of bounds.|
|`LayerInstantiationException`|Cannot create a module layer.|
|`NegativeArraySizeException`|Array size is negative.|
|`NullPointerException`|Null reference used improperly.|
|`NumberFormatException`|Invalid number format.|
|`SecurityException`|Security violation.|
|`StringIndexOutOfBoundsException`|String index out-of-bounds.|
|`TypeNotPresentException`|Type not found.|
|`UnsupportedOperationException`|Operation is unsupported.|

---

### Checked Exceptions

Checked exceptions are **not subclasses of `RuntimeException`**, and **must be declared** in a method’s `throws` clause or handled explicitly.

|Exception|Description|
|---|---|
|`ClassNotFoundException`|Class not found.|
|`CloneNotSupportedException`|Attempt to clone an object that does not implement `Cloneable`.|
|`IllegalAccessException`|Access to a class or field denied.|
|`InstantiationException`|Attempt to instantiate an abstract class/interface.|
|`InterruptedException`|Thread interrupted.|
|`NoSuchFieldException`|Field not found.|
|`NoSuchMethodException`|Method not found.|
|`ReflectiveOperationException`|Superclass for reflection-related exceptions.|

## Creating Custom Exception Subclasses

You can define custom exceptions to handle application-specific errors. This is done by subclassing `Exception` (or `RuntimeException` if it should be unchecked).

```java
// Create a custom exception
class NonIntResultException extends Exception {
	int n, d;

	NonIntResultException(int i, int j) {
		n = i;
		d = j;
	}

	public String toString() {
		return "Result of " + n + " / " + d + " is non-integer.";
	}
}

class CustomExceptDemo {
	public static void main(String[] args) {
		int[] numer = { 4, 8, 15, 32, 64, 127, 256, 512 };
		int[] denom = { 2, 0, 4, 4, 0, 8 };

		for (int i = 0; i < numer.length; i++) {
			try {
				if ((numer[i] % 2) != 0)
					throw new NonIntResultException(numer[i], denom[i]);

				System.out.println(numer[i] + " / " + denom[i] + " is " + numer[i] / denom[i]);
			} catch (ArithmeticException exc) {
				System.out.println("Can't divide by Zero!");
			} catch (ArrayIndexOutOfBoundsException exc) {
				System.out.println("No matching element found.");
			} catch (NonIntResultException exc) {
				System.out.println(exc);
			}
		}
	}
}
```

#### Output:

```
4 / 2 is 2
Can't divide by Zero!
Result of 15 / 4 is non-integer.
32 / 4 is 8
Can't divide by Zero!
Result of 127 / 8 is non-integer.
No matching element found.
No matching element found.
```

---

### Should You Use Return Values or Exceptions?

In Java, **exceptions are the preferred way** to handle errors. Although returning error codes is possible, exceptions:

- Provide a **structured and consistent** approach.
    
- Separate **normal logic** from **error handling**.
    
- Are the **standard practice** for professional Java developers.
    
