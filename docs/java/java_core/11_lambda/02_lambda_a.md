# Lambda Expressions – Advanced Concepts

## Generic Functional Interfaces

In Java, **lambda expressions themselves cannot be generic**—they cannot declare type parameters like a generic method. However, the **functional interface** they are assigned to **can be generic**.

This enables a lambda expression to work with **different types**, depending on the **type arguments** specified when declaring the interface reference. This provides great flexibility and promotes code reuse.

### Example: Generic Functional Interface

```java
// A generic functional interface
interface SomeTest<T> {
    boolean test(T n, T m);
}
```

In this interface:

- `T` is a generic type parameter.
    
- The `test` method takes two parameters of type `T` and returns a `boolean`.

### Using the Interface with Lambdas

```java
class GenericFunctionalInterfaceDemo {
    public static void main(String[] args) {
        // Lambda to test if one integer is a factor of another
        SomeTest<Integer> isFactor = (n, d) -> (n % d) == 0;

        if (isFactor.test(10, 2))
            System.out.println("2 is a factor of 10");

        System.out.println();

        // Lambda to test if one string is part of another
        SomeTest<String> isIn = (a, b) -> a.indexOf(b) != -1;

        String str = "Generic Functional Interface";

        System.out.println("Testing string: " + str);

        if (isIn.test(str, "face"))
            System.out.println("'face' is found.");
        else
            System.out.println("'face' not found.");
    }
}
```

### Output

```
2 is a factor of 10

Testing string: Generic Functional Interface
'face' is found.
```

### Summary

- The type `T` determines the parameter and return type compatibility.
    
- This allows the same functional interface to be used with different data types.
    
- A lambda expression used with a generic functional interface must match the method signature once the type is known.
    

---

## Passing a Lambda Expression as an Argument

A **lambda expression can be passed as an argument** to a method if the parameter being passed into is a **functional interface**. This is a powerful feature, as it enables the passing of **code logic** (i.e., behavior) into methods.

### Functional Interface

```java
interface StringFunc {
    String func(String str);
}
```

### Method That Accepts a Lambda Expression

```java
class LambdaArgumentDemo {
    // A method that takes a StringFunc reference and a String
    static String changeStr(StringFunc sf, String s) {
        return sf.func(s);
    }

    public static void main(String[] args) {
        String inStr = "Lambda Expressions Expand Java";
        String outStr;

        System.out.println("Here is input string: " + inStr);

        // Reverse the string using a lambda
        StringFunc reverse = (str) -> {
            String result = "";
            for (int i = str.length() - 1; i >= 0; i--)
                result += str.charAt(i);
            return result;
        };

        outStr = changeStr(reverse, inStr);
        System.out.println("The string reversed: " + outStr);

        // Replace spaces with hyphens using an inline lambda
        outStr = changeStr((str) -> str.replace(' ', '-'), inStr);
        System.out.println("The string with spaces replaced: " + outStr);

        // Change case: upper to lower and vice versa
        outStr = changeStr((str) -> {
            String result = "";
            char ch;
            for (int i = 0; i < str.length(); i++) {
                ch = str.charAt(i);
                if (Character.isUpperCase(ch))
                    result += Character.toLowerCase(ch);
                else
                    result += Character.toUpperCase(ch);
            }
            return result;
        }, inStr);
        System.out.println("The string in reversed case: " + outStr);
    }
}
```

```
Here is input string: Lambda Expressions Expand Java
The string reversed: avaJ dnapxE snoisserpxE adbmaL
The string with spaces replaced: Lambda-Expressions-Expand-Java
The string in reversed case: lAMBDA eXPRESSIONS eXPAND jAVA
```

- You can pass lambdas as arguments wherever a functional interface is expected.
    
- This promotes functional programming patterns like **strategy**, **command**, or **callback** styles in Java.
    
## Lambda Expressions and Variable Capture

Lambda expressions in Java can access **variables from the enclosing scope**, including:

- Local variables
    
- Instance variables
    
- Static variables
    
However, **local variables** must be **effectively final**—meaning they are not modified after initialization.

```java
interface MyFunc {
    int func(int n);
}

class VarCapture {
    public static void main(String[] args) {
        int num = 10;  // effectively final

        MyFunc myLambda = (n) -> {
            int v = num + n;  // OK
            // num++;         // Error: modifying captured variable
            return v;
        };

        System.out.println(myLambda.func(8));  // Output: 18

        // num = 9;  // Error: still illegal, would invalidate effective finality
    }
}
```

### Key Rules

- Local variables **used inside a lambda must not be changed** after being assigned.
    
- Instance and static variables **can** be read and modified inside a lambda.
    
- Lambdas can access `this`, which refers to the enclosing class instance.
    
## Throwing Exceptions from Lambda Expressions

You can throw exceptions from within a lambda body just like in a normal method. However, the functional interface's method **must declare the exception** if it's a checked exception.

```java
interface IOFunc {
    void apply() throws IOException;
}

IOFunc fileOp = () -> {
    throw new IOException("File not found");
};
```

If the method in the interface doesn’t declare a `throws` clause, only **unchecked exceptions** (runtime exceptions) can be thrown.

## Method References

A **method reference** is a shorthand syntax for calling a method from inside a lambda expression. It allows you to refer to a method **without executing it**. This also requires a **functional interface** as the target context.

### General Forms

| Form                           | Example              |
| ------------------------------ | -------------------- |
| `ClassName::staticMethod`      | `Math::sqrt`         |
| `objRef::instanceMethod`       | `"abc"::toUpperCase` |
| `ClassName::instanceMethod`    | `String::compareTo`  |
| `ClassName::new` (constructor) | `ArrayList::new`     |

## Constructor References

You can refer to a constructor using `ClassName::new`. This is commonly used with **supplier** interfaces or **factories**.

```java
Supplier<MyClass> supplier = MyClass::new;
MyClass obj = supplier.get();
```

## Predefined Functional Interfaces

Java provides a set of commonly used functional interfaces in the `java.util.function` package, such as:

| Interface           | Parameters | Return Type | Purpose                     |
| ------------------- | ---------- | ----------- | --------------------------- |
| `Function<T,R>`     | T          | R           | Maps T to R                 |
| `Consumer<T>`       | T          | void        | Performs action on T        |
| `Supplier<T>`       | none       | T           | Supplies a result of type T |
| `Predicate<T>`      | T          | boolean     | Tests a condition on T      |
| `BiFunction<T,U,R>` | T, U       | R           | Maps (T,U) to R             |

These predefined interfaces simplify writing common functional logic.

