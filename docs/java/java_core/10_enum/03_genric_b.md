# Generics

Generics added a new syntax element to Java and significantly changed the design of many core classes and methods. The inclusion of generics fundamentally reshaped Java by enabling stronger type safety and better code reusability.

Though generics may appear complex at first, they are simple to use and essential for modern Java development.

## Generics Fundamentals

At its core, **generics** means **parameterized types**. This allows creating classes, interfaces, and methods in which the type of data to operate on is specified as a parameter, while providing **compile-time type safety**.

A class, interface, or method that operates on a type parameter is called generic class or generic method.

Many algorithms are logically the same no matter what type of data they are being applied to. With generics, algorithm can be defined once, independently of any specific type of data, and then apply that algorithm to a wide variety of data types.

### Key Benefits of Generics

- Enable writing code that works with different types.
    
- Eliminate the need for casting.
    
- Improve type safety.
    
- Promote code reusability and readability.
    
Before generics, developers used `Object` to create general-purpose code, but this lacked type safety and required explicit casting.

With generics:

- Code is safer and cleaner.
    
- Type mismatches are caught at compile time.
    
- Redundant casting is eliminated.
    
## A Simple Generic Class

### Generic Class with One Type Parameter

```java
class Gen<T> {  // T type parameter
    T ob;       // T type object

    Gen(T o) {  // Constructor on T type
        ob = o;
    }

    void showType() { // shows T's type
        System.out.println("Type of T is " 
	        + ob.getClass().getName());
    }

    T getOb() {  // return T type object
        return ob;
    }
}
```

```java
class GenDemo {
    public static void main(String[] args) {
        Gen<Integer> iOb = new Gen<Integer>(88);
        iOb.showType();
        int v = iOb.getOb();
        System.out.println("value: " + v);

        Gen<String> strOb = new Gen<String>("Generics Test");
        strOb.showType();
        String str = strOb.getOb();
        System.out.println("value: " + str);
    }
}
```

```
Type of T is java.lang.Integer
value: 88
Type of T is java.lang.String
value: Generics Test
```

- `T` is a type parameter. It is the place holder that is replaced with a real type when an object is created.
    
- There is no special meaning to the name `T`; any valid identifier can be used. However, single-character uppercase names like `T`, `E`, `K`, `V` are conventionally used.
    
* Class defines several methods that can be used to obtain information about a class at run time. Among these is the `getName()` method, which returns a string representation of the class name.
	
- `getClass()` is a method of `Object` class that returns a `Class` object representing the runtime class of the object.
    
## Autoboxing with Generics

```java
Gen<Integer> iOb = new Gen<Integer>(88);  
// autoboxes int to Integer

int v = iOb.getOb();                      
// auto-unboxes Integer to int
```

Autoboxing and auto-unboxing allow seamless use of primitive types with generics by converting them to and from their wrapper classes.

Creates a version of Gen in which all references to T are translated into references to Integer.

> The compiler does not create multiple versions of the class; it uses **type erasure**, replacing type parameters with actual types and inserting casts where needed.

#### Restrictions: Only Reference Types Allowed

Generic type parameters **must be reference types**. You cannot use primitive types like `int`, `char`, etc.

```java
Gen<int> intOb = new Gen<int>(53); 
// Error: cannot use primitive types
```

Use wrapper classes instead (e.g., `Integer` for `int`, `Character` for `char`). Autoboxing makes this transition seamless.

## Generic Class with Two Type Parameters

```java
class TwoGen<T, V> {
    T ob1;
    V ob2;

    TwoGen(T o1, V o2) {
        ob1 = o1;
        ob2 = o2;
    }

    void showTypes() {
        System.out.println("Type of T is " + ob1.getClass().getName());
        System.out.println("Type of V is " + ob2.getClass().getName());
    }

    T getOb1() {
        return ob1;
    }

    V getOb2() {
        return ob2;
    }
}
```

```java
class GenDemo {
    public static void main(String[] args) {
        TwoGen<Integer, String> twoObj = 
		        new TwoGen<Integer, String>(88, "Generics");
        
        twoObj.showTypes();
        
        int v = twoObj.getOb1();
        String str = twoObj.getOb2();
        
        System.out.println("value: " + v);
        System.out.println("value: " + str);
    }
}
```

```
Type of T is java.lang.Integer
Type of V is java.lang.String
value: 88
value: Generics
```

This is also valid:

```java
TwoGen<String, String> x = 
		new TwoGen<String, String>("A", "B");
```

### Syntax Summary

**Generic class declaration:**

```java
class ClassName<T, V> { ... }
```

**Instantiation:**

```java
ClassName<Type1, Type2> obj = 
		new ClassName<Type1, Type2>(arg1, arg2);
```

## Bounded Type Parameters

Sometimes it's useful to **restrict** the types that can be passed to a type parameter.

Example: You may want to restrict a type parameter to **numeric types only** (i.e., subclasses of `Number`).

```java
<T extends SuperClass>
```

This means `T` must be `SuperClass` or a subclass of `SuperClass`.

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
}
```

- `doubleValue()` and `intValue()` are methods from the `Number` class.
    
- By bounding `T` to extend `Number`, the compiler ensures that only numeric types (like `Integer`, `Double`) are allowed.
    
- Using a non-numeric type like `String` would cause a compile-time error.
    
## Multiple Bounded Parameters

You can also create dependencies between type parameters. For instance, requiring that one type is a compatible with another so restricting it to be it's subclass.

Here V must be either same type as T or subclass of T.
```java
class Pair<T, V extends T> {
    T first;
    V second;

    Pair(T a, V b) {
        first = a;
        second = b;
    }
}
```

```java
Pair<Integer, Integer> x = new Pair<Integer, Integer>(1, 2);
Pair<Integer, Integer> p1 = new Pair<>(1, 2);          
// V is same as T

Pair<Number, Integer> p2 = new Pair<>(10.4, 12);       
// Integer extends Number
```

```java
Pair<Number, String> z = new Pair<Number, String>(10.4,"12");
Pair<Number, String> p3 = new Pair<>(10.4, "12"); 
// Error: String is not a subclass of Number
```

This type safety ensures that `V` is either the same as `T` or a subclass of `T`.

## Summary

|Concept|Description|
|---|---|
|Generics|Enable parameterized types for classes, interfaces, and methods|
|Generic Class|Class with type parameters like `<T>`, `<T, V>`|
|Autoboxing with Generics|Allows using primitives via wrapper types (`Integer`, `Double`, etc.)|
|Reference Types Only|Generic type parameters must be reference types|
|Bounded Types|Restrict allowed types using `extends`|
|Type Safety|Compile-time checking prevents type mismatches|
|Type Erasure|Generic type info is removed at compile time; casting is handled implicitly|

