# Generics – Advanced Concepts

## Type Inference with the Diamond Operator

To avoid repeating type arguments during instantiation, Java 7 introduced the **diamond operator** (`<>`) for type inference.

#### Without Diamond Operator

```java
TwoGen<Integer, String> tgOb = new TwoGen<Integer, String>(42, "testing");
```

#### With Diamond Operator

```java
TwoGen<Integer, String> tgOb = new TwoGen<>(42, "testing");
```

#### General Syntax

```java
class-name<type-arg-list> var = new class-name<>(constructor-args);
```

## Type Inference in Method Calls

Generic type inference can also be used in **method calls**, especially when parameters are themselves generic:

```java
boolean isSame(TwoGen<T, V> o) {
    return ob1 == o.ob1 && ob2 == o.ob2;
}
```

Call:

```java
if (tgOb.isSame(new TwoGen<>(42, "testing")))
    System.out.println("Same");
```

The compiler infers the type arguments from context.

## Local Variable Type Inference (`var`)

Java 10 introduced the `var` keyword, which allows the compiler to infer local variable types:

```java
TwoGen<Integer, String> tgObj = new TwoGen<>(42, "testing");

var tgOb = new TwoGen<Integer, String>(42, "testing");  
// Inferred as TwoGen<Integer, String>
```

## Erasure

Java generics are implemented via **type erasure** to maintain backward compatibility with older Java versions.

- Erasure Removes all generic type information at compile time.
    
- Replaces type parameters with their upper bounds (or `Object` if none).
    
- Inserts casts as needed to preserve type compatibility.
    
**At runtime, generic type parameters do not exist.** Generics are a compile-time mechanism only.

## Ambiguity Errors Caused by Erasure

Erasure can lead to ambiguity in overloaded method declarations.

```java
class MyGenClass<T, V> {
    T ob1;
    V ob2;

    void set(T o) { 
	    ob1 = o; }
    
    void set(V o) { 
	    ob2 = o; }  
    // Error: ambiguous after erasure
}
```

If `T` and `V` are the same type (e.g., `String`), both `set()` methods become identical after erasure, causing a **compile-time error**.

```java
MyGenClass<String, String> obj = new MyGenClass<>();
```

## Restrictions in Java Generics

### 1. Cannot Instantiate a Type Parameter

```java
class Gen<T> {
    T ob;

    Gen() {
        ob = new T();  
    // Illegal: Cannot create an instance of a type parameter
    }
}
```

### 2. Cannot Declare Static Members of a Generic Type

```java
class Wrong<T> {
    static T ob;         // Illegal
    static T getOb() {}  // Illegal
}
```

### 3. Cannot Create Arrays of Generic Types

```java
class Gen<T extends Number> {
    T[] vals;

    Gen(T[] nums) {
		vals = new T[10];  // Illegal
    }
}

Gen<Integer>[] gens = new Gen<Integer>[10];  
	// Also illegal
```

These restrictions are due to how generics are implemented with erasure. Since type information is not preserved at runtime, such constructs are not allowed.

## Using Wildcard Arguments

While **type safety** is one of the biggest advantages of generics, it can sometimes restrict flexibility.

### Problem Scenario

Suppose you want to compare two `NumericFns` objects to check if their **absolute values** are equal:

```java
// This won't work
boolean absEqual(NumericFns<T> ob) {
    if ( Math.abs(num.doubleValue()) == 
		    Math.abs(ob.num.doubleValue()) )
        return true;
    return false;
}
```

The issue here is that the type parameter `T` must match exactly, preventing comparison between different numeric types (e.g., `Integer` vs `Double`).

### Solution: Wildcards

The **wildcard** `?` represents an **unknown type**, allowing you to write more flexible code.

```java
boolean absEqual(NumericFns<?> ob) {
    if ( Math.abs(num.doubleValue()) == 
		    Math.abs(ob.num.doubleValue()) )
        return true;
    return false;
}
```

This allows comparison between any two `NumericFns` objects, regardless of their type parameters.

---

### Using a Wildcard

```java
class NumericFns<T extends Number> {
    T num;

    NumericFns(T n) {
        num = n;
    }

    double reciprocal() {
        return 1 / num.doubleValue();
    }

    double fraction() {
        return num.doubleValue() - num.intValue();
    }

    boolean absEqual(NumericFns<?> ob) {
        return Math.abs(num.doubleValue()) == Math.abs(ob.num.doubleValue());
    }
}
```

```java
class WildcardDemo {
    public static void main(String[] args) {
        NumericFns<Integer> iOb = new NumericFns<>(6);
        NumericFns<Double> dOb = new NumericFns<>(-6.0);
        NumericFns<Long> lOb = new NumericFns<>(5L);

        System.out.println("Testing iOb and dOb.");
        if (iOb.absEqual(dOb))
            System.out.println("Absolute values are equal.");
        else
            System.out.println("Absolute values differ.");

        System.out.println("\nTesting iOb and lOb.");
        if (iOb.absEqual(lOb))
            System.out.println("Absolute values are equal.");
        else
            System.out.println("Absolute values differ.");
    }
}
```

**Output:**

```
Testing iOb and dOb.
Absolute values are equal.

Testing iOb and lOb.
Absolute values differ.
```

> Note: The wildcard (`?`) allows compatibility during the method call, but does not affect how `NumericFns` objects are declared or instantiated.

## Bounded Wildcards

Wildcards can also be **bounded**, just like type parameters.

### Upper Bounded Wildcards

```java
<? extends SuperClass>
```

This matches the superclass and any of its subclasses.

```java
static void test(Gen<? extends A> obj) {
    // Accepts A or any subclass of A
}
```

### Lower Bounded Wildcards

```java
<? super SubClass>
```

This matches the subclass and any of its superclasses.

> Bounded wildcards are especially useful when you need **flexibility with some control over type compatibility**.

---

## Generic Methods

A method can declare its own **type parameters**, independent of the class.

### Example: Generic Method in a Non-Generic Class

```java
class GenericMethodDemo {
    static <T extends Comparable<T>, V extends T>
    boolean arraysEqual(T[] x, V[] y) {
        if (x.length != y.length) return false;

        for (int i = 0; i < x.length; i++) {
            if (!x[i].equals(y[i]))
                return false;
        }

        return true;
    }

    public static void main(String[] args) {
        Integer[] nums = {1, 2, 3, 4, 5};
        Integer[] nums2 = {1, 2, 3, 4, 5};
        Integer[] nums3 = {1, 2, 7, 4, 5};
        Integer[] nums4 = {1, 2, 7, 4, 5, 6};
        Double[] dvals = {1.1, 2.2, 3.3, 4.4, 5.5};

        if (arraysEqual(nums, nums)) System.out.println("nums equals nums");
        if (arraysEqual(nums, nums2)) System.out.println("nums equals nums2");
        if (arraysEqual(nums, nums3)) System.out.println("nums equals nums3");
        if (arraysEqual(nums, nums4)) System.out.println("nums equals nums4");

        // Will not compile: different types
        // arraysEqual(nums, dvals);
    }
}
```

**Output:**

```
nums equals nums
nums equals nums2
```

### Explanation

```java
static <T extends Comparable<T>, V extends T> boolean arraysEqual(T[] x, V[] y)
```

- `T extends Comparable<T>` ensures T is a comparable type.
    
- `V extends T` means V is either the same as T or a subclass of T.
    
- This allows safe comparisons between elements of arrays.
    
- Generic methods can be **static or non-static**.
    

### Generic Method Syntax

```java
<type-param-list> return-type method-name(param-list) {
    // method body
}
```

## Generic Constructors

A constructor can be generic even if the class is **not**.

```java
class Summation {
    private int sum;

    <T extends Number> Summation(T arg) {
        sum = 0;
        for (int i = 0; i <= arg.intValue(); i++)
            sum += i;
    }

    int getSum() {
        return sum;
    }
}
```

```java
class GenConsDemo {
    public static void main(String[] args) {
        Summation ob = new Summation(4.0);
        System.out.println("Summation of 4.0 is " + ob.getSum());
    }
}
```

**Output:**

```
Summation of 4.0 is 10
```

> Even though the class is not generic, the constructor is — allowing it to operate on any type that extends `Number`. The value is converted to `int` using `intValue()` for computation.

## Generic Interfaces

A class can implement a **generic interface**, and to do so properly, the class itself must also be generic (or explicitly specify the type).

### Example: Defining a Generic Interface

```java
interface Containment<T> {
    boolean contains(T o);
}
```

### Implementing the Interface

```java
class MyClass<T> implements Containment<T> {
    T[] arrayRef;

    MyClass(T[] o) {
        arrayRef = o;
    }

    public boolean contains(T o) {
        for (T x : arrayRef)
            if (x.equals(o))
                return true;
        return false;
    }
}
```

```java
class GenIFDemo {
    public static void main(String[] args) {
        Integer[] x = {1, 2, 3};
        MyClass<Integer> ob = new MyClass<>(x);

        if (ob.contains(2))
            System.out.println("2 is in ob");
        else
            System.out.println("2 is NOT in ob");

        if (ob.contains(5))
            System.out.println("5 is in ob");
        else
            System.out.println("5 is NOT in ob");

        // if(ob.contains(9.25)) → Compile-time error (type mismatch)
    }
}
```

**Output:**

```
2 is in ob
5 is NOT in ob
```

### Important Rule

If a class implements a generic interface, it must be generic enough to pass the correct type argument:

```java
class MyClass implements Containment<T>  // Invalid: T is undefined
```

Instead, you must define:

```java
class MyClass<T> implements Containment<T>  // Valid
```

### Bounded Type Parameters in Interfaces

You can apply bounds to type parameters in the interface:

```java
interface Containment<T extends Number> { ... }
```

Then the implementing class must honor the same bounds:

```java
class MyClass<T extends Number> implements Containment<T> { ... }
```

Incorrect:

```java
class MyClass<T extends Number> implements Containment<T extends Number>  // Invalid
```

## Raw Types and Legacy Code

Java allows you to use a **generic class without specifying a type argument**. This creates a **raw type**, primarily to maintain compatibility with legacy (pre-generics) code.

```java
class Gen<T> {
    T ob;
    Gen(T o) { ob = o; }
}
```

```java
class RawDemo {
    public static void main(String[] args) {
        Gen<Integer> iOb = new Gen<>(88);  // Generic type

        Gen raw = new Gen(98.6);  // Raw type: T becomes Object

        // No compile-time type safety
    }
}
```

> Raw types bypass the type safety of generics, so they should be avoided in new code unless interfacing with legacy APIs.


## Summary


| Feature                          | Description                                                   |
| -------------------------------- | ------------------------------------------------------------- |
| Generic Interface                | An interface that takes type parameters                       |
| Raw Type                         | Generic class used without type arguments (unsafe)            |
| Diamond Operator (`<>`)          | Compiler infers type during instantiation                     |
| Local Variable Inference (`var`) | Type of variable inferred at compile time                     |
| Type Erasure                     | Removal of type info at runtime, replaced by upper bound      |
| Ambiguity Error                  | Caused by overloading generic methods with same erasure       |
| Generic Restrictions             | No `new T`, no `static T`, no `T[]` or generic array creation |

| Concept                   | Description                                             |
| ------------------------- | ------------------------------------------------------- |
| `<?>`                     | Unbounded wildcard (any type)                           |
| `<? extends T>`           | Upper-bounded wildcard (T or subclass)                  |
| `<? super T>`             | Lower-bounded wildcard (T or superclass)                |
| Generic Methods           | Methods that declare type parameters independently      |
| Generic Constructors      | Constructors that declare their own type parameters     |
| `T extends Comparable<T>` | Restricts T to comparable types for ordering/comparison |

