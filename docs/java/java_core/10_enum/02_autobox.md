# Type Wrappers, Autoboxing, and Unboxing

## Type Wrappers

Java provides type wrappers for each of the primitive data types. These are classes that encapsulate a primitive type within an object. This is useful because:

- Primitive types cannot be passed by reference.
    
- Many data structures and collections in Java (e.g., ArrayList) work only with objects.
    
- Wrapper classes integrate primitive types into Java's object-oriented environment.
    
### Wrapper Classes

Each primitive type has a corresponding wrapper class in the `java.lang` package:

|Primitive Type|Wrapper Class|
|---|---|
|`byte`|`Byte`|
|`short`|`Short`|
|`int`|`Integer`|
|`long`|`Long`|
|`float`|`Float`|
|`double`|`Double`|
|`char`|`Character`|
|`boolean`|`Boolean`|

### Inheritance

All numeric type wrappers inherit the abstract class `Number`, which defines methods to retrieve values in various numeric forms:

```java
byte byteValue()
int intValue()
short shortValue()
long longValue()
float floatValue()
double doubleValue()
```

### Constructors

Wrapper classes traditionally provided constructors to provide the value or string:

```java
Integer(int num)
Integer(String str) throws NumberFormatException

Double(double num)
Double(String str) throws NumberFormatException
```

> **However**, as of JDK 9, these constructors were deprecated, and from JDK 16, they are deprecated for removal.

### Recommended Method: `valueOf()`

Instead of constructors, use the static `valueOf()` method, which is more efficient and may use internal caching:

```java
static Integer valueOf(int val)

static Integer valueOf(String valStr) throws NumberFormatException
```

Example:

```java
Integer iOb = Integer.valueOf(100);
```

This creates an `Integer` object that wraps the primitive `int` value 100.

### toString() Method

All wrapper classes override `toString()` to return a human-readable representation of the contained value:

```java
Integer iOb = Integer.valueOf(100);

System.out.println(iOb); 
// Output: 100
```

## Boxing and Unboxing

### Boxing

Boxing is the process of encapsulating a primitive value in a wrapper object.

**Manual boxing (pre-Java 5):**

```java
Integer iOb = Integer.valueOf(100);
```

### Unboxing

Unboxing is the process of extracting the primitive value from a wrapper object.

**Manual unboxing (pre-Java 5):**

```java
int i = iOb.intValue();
```

#### Drawbacks of Manual Boxing/Unboxing

- Tedious and repetitive.
    
- Error-prone.
    
- Makes code harder to read and maintain.
    
## Autoboxing and Auto-Unboxing

### Autoboxing

Autoboxing is the automatic conversion of a primitive type into its corresponding wrapper class when an object is needed.

```java
Integer iOb = 100; // int to Integer automatically
```

### Auto-unboxing

Auto-unboxing is the automatic conversion of a wrapper object to its corresponding primitive value when a primitive is expected.

```java
int i = iOb; // Integer to int automatically
```

> There is no need to call a method such as `intValue()` or `doubleValue()`.

```java
class AutoBox {
    public static void main(String[] args) {
        Integer iOb = 100; // autoboxing
        int i = iOb;       // auto-unboxing

        System.out.println(i + " " + iOb); 
        // Output: 100 100
    }
}
```

## Autoboxing with Methods

Autoboxing and unboxing are applied automatically whenever a primitive type must be converted into an object and vice versa:

- Passing primitives to methods expecting wrapper types.
    
- Receiving wrapper objects from methods returning primitives.
    
- Returning wrapper objects from methods that originally return primitives.
    
```java
class AutoBox2 {
    static void m(Integer v) {
        System.out.println("m() received " + v);
    }

    static int m2() {
        return 10;
    }

    static Integer m3() {
        return 99;
    }

    public static void main(String[] args) {
        m(199); // int is autoboxed to Integer

        Integer iOb = m2(); 
        // int is auto-unboxed to Integer
        System.out.println("Return value from m2() is " + iOb);

        int i = m3(); // Integer is auto-unboxed to int
        System.out.println("Return value from m3() is " + i);

        iOb = 100;
        System.out.println("Square root of iOb is " + Math.sqrt(iOb));
        // iOb is auto-unboxed to int, 
        // promoted to double for Math.sqrt()
    }
}
```

```
m() received 199
Return value from m2() is 10
Return value from m3() is 99
Square root of iOb is 10.0
```

## Autoboxing/Unboxing in Expressions

Autoboxing and unboxing also occur during expression evaluation.

- When used in arithmetic or logic operations, wrapper objects are automatically unboxed.
    
- The result may then be reboxed if stored in a wrapper reference.
    
```java
class AutoBox3 {
    public static void main(String[] args) {
        Integer iOb = 99;
        System.out.println("Original value of iOb: " + iOb);

        ++iOb; // unboxed, incremented, reboxed
        System.out.println("After ++iOb: " + iOb);

        iOb += 10; // unboxed, added, reboxed
        System.out.println("After iOb += 10: " + iOb);

        Integer iOb2 = iOb + (iOb / 3); // unboxed, computed, reboxed
        System.out.println("iOb2 after expression: " + iOb2);

        int i = iOb + (iOb / 3); // unboxed, result stored as primitive
        System.out.println("i after expression: " + i);
    }
}
```

```
Original value of iOb: 99
After ++iOb: 100
After iOb += 10: 110
iOb2 after expression: 146
i after expression: 146
```

## Autoboxing in Control Structures

Because of auto-unboxing, wrapper types can be used in control statements such as `switch`.

```java
Integer iOb = 2;

switch (iOb) {
    case 1:
        System.out.println("one");
        break;
    case 2:
        System.out.println("two");
        break;
    default:
        System.out.println("error");
}
```

```
two
```

`iOb` is automatically unboxed to an `int` before the `switch` expression is evaluated.

## Caution: Use Wrappers Appropriately

Although autoboxing simplifies code, **it should not be used to replace primitive types unnecessarily**.

### Example of Inefficient Use:

```java
Double a, b, c;
a = 10.2;
b = 11.4;
c = 9.8;
Double avg = (a + b + c) / 3;
```

This code works, but it involves multiple unnecessary boxings and unboxings, which adds overhead.

### Better Version:

```java
double a = 10.2, b = 11.4, c = 9.8;
double avg = (a + b + c) / 3;
```

### Best Practice

Use wrapper classes **only** when:

- Required by APIs (e.g., collections like `ArrayList<Integer>`)
    
- Objects are needed
    
- Null values must be represented
    

Do **not** use wrapper types to replace primitives without a justified reason.

## Summary

|Concept|Explanation|
|---|---|
|Type Wrappers|Object versions of primitive types|
|Boxing|Manual conversion of primitive to object|
|Unboxing|Manual extraction of primitive from object|
|Autoboxing/Auto-unboxing|Automatic conversion between primitive and object|
|Method Usage|Works with method parameters and return values|
|Expressions|Works inside arithmetic and logical expressions|
|Control Structures|Wrapper types can be used in `switch`|
|Performance Warning|Avoid using wrappers when primitives suffice|

