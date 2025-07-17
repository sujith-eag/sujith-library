# Lambda Expressions

Lambda expressions were introduced in Java 8 to bring **functional programming** features to the language. They provide a way to pass functionality as an argument to a method or store it in a variable.

To understand lambda expressions, two main concepts are essential:

- **Lambda Expression**: An anonymous method used to implement functionality.
    
- **Functional Interface**: An interface with a **single abstract method** (SAM), which defines the **target type** for a lambda expression.
    
## Functional Interfaces

A **functional interface** is an interface that contains **exactly one abstract method** representing single action. These interfaces can have other methods as long as they're **default**, **static**, or **private**, but only one abstract method.

The standard interface `Runnable` is a functional interface because it defines only one method: `run()`.

```java
interface MyValue {
	double getValue();  // Single abstract method
}
```

- Used as **targets** for lambda expressions.
    
- Also known as **SAM interfaces** (Single Abstract Method).
    
- Can be annotated with `@FunctionalInterface` (optional but recommended).
    
```java
@FunctionalInterface
interface MyValue {
	double getValue();
}
```

This annotation ensures the interface cannot have more than one abstract method.

## Lambda Expression Syntax

The basic syntax of a lambda expression is:

```java
(parameter-list) -> expression-or-block
```

Arrow operator `–>` divides a lambda expression into two parts. The left side specifies any parameters required by the lambda expression.  Right side is the lambda body, which specifies the actions of the lambda expression.

Lambda expressions, commonly referred to as **closures** results in a form of anonymous class. It is making an object out of an interface without defining and writing one more concrete object. 

### Types of Lambda Bodies:

| Form         | Syntax                     | Notes                |
| ------------ | -------------------------- | -------------------- |
| No Parameter | `() -> 42`                 | Returns a constant   |
| Single Param | `x -> x * x`               | Parentheses optional |
| Block Body   | `(x) -> { return x * x; }` | Must use `return`    |

```java
() -> 98.6     // No parameters

// similar to
double myMeth() { return 98.6; }
```

```java
() -> Math.random() * 100  // No parameters, computed result
n -> (n % 2) == 0       // One parameter, returns boolean
(n) -> 1.0 / n          // One parameter, returns double
```

### Inferred Types:

Lambda parameters’ types can be specified explicitly, but types are usually inferred from the context (i.e., the method in the functional interface). 

```java
(double n) -> 1.0 / n
```

## Using Lambda Expressions with Functional Interfaces

A lambda expression can be specified only in a context in which a target type is defined. One of these contexts is created when a lambda expression is assigned to a 'functional interface reference'. 

### Example 1: No Parameters

```java
interface MyValue {
	double getValue();
}

MyValue myVal = () -> 98.6;
System.out.println("A constant value: " 
		+ myVal.getValue());
```

- Lambda is compatible with `getValue()` since it takes no parameters and returns `double`.
    
### Example 2: One Parameter

```java
interface MyParamValue {
	double getValue(double v);
}

MyParamValue myPval = (n) -> 1.0 / n;
System.out.println("Reciprocal of 4 is " 
		+ myPval.getValue(4.0));
```

- Lambda matches `getValue(double)` with compatible return type.
    
Type Mismatch :

```java
myVal = () -> "three";  
	// Error! String incompatible with double
```

Parameter Mismatch :

```java
myPval = () -> Math.random(); 
	// Error! Parameter required
```

## Lambda Expression Assignment Contexts

Lambda expressions can be used:

- In variable initialization
    
- As method return values
    
- As method arguments
    
```java
// Variable assignment
MyValue val = () -> 3.14;

// As method argument
someMethod(() -> 3.14);
```

When used, Java creates an **anonymous class object** that implements the functional interface, with the lambda body as the method implementation.

## Reusing Functional Interfaces with Different Lambdas

```java
interface NumericTest {
	boolean test(int n, int m);
}

NumericTest isFactor = (n, d) -> (n % d) == 0;
NumericTest lessThan = (n, m) -> (n < m);
NumericTest absEqual = (n, m) -> (n < 0 ? -n : n) 
									== (m < 0 ? -m : m);
```

Alternatively, the same reference can be reused:

```java
NumericTest test;

test = (n, d) -> (n % d) == 0;
test = (n, m) -> (n < m);
test = (n, m) -> Math.abs(n) == Math.abs(m);
```

## Lambda with Strings

```java
interface StringTest {
	boolean test(String aStr, String bStr);
}

StringTest isIn = (a, b) -> a.indexOf(b) != -1;

String str = "This is a test";

if (isIn.test(str, "is a"))
	System.out.println("'is a' found.");
```

This example checks if a substring exists within a string using `indexOf()`.

## Block Lambda Expressions

If a lambda requires multiple statements like variables and loops, use a **block lambda** with braces `{}` and an explicit `return` statement if a value is returned.

```java
interface NumericFunc {
	int func(int n);
}

NumericFunc smallestF = (n) -> {
	int result = 1;
	n = Math.abs(n);
	for (int i = 2; i <= n / i; i++) {
		if ((n % i) == 0) {
			result = i;
			break;
		}
	}
	return result;
};

System.out.println("Smallest factor of 12 is " 
			+ smallestF.func(12));
System.out.println("Smallest factor of 11 is " 
			+ smallestF.func(11));
```

```
Smallest factor of 12 is 2
Smallest factor of 11 is 1
```

## Summary

A lambda expression:

- Is an **anonymous implementation** of a functional interface.
    
- **Defines behavior** in place of creating a named class.
    
- **Can be passed as a method argument**, stored in a variable, or returned from a method.
    
- **Creates an object** implementing the interface at runtime.
    
You can think of it as:

> "Defining the logic of a method inline, then using it as an object."

