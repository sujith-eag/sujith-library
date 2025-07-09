# Enumerations

An **enumeration** is a **list of named constants** that define a new data type. It allows you to create **type-safe** collections of related values. An object of an enumeration type can hold only the values that are defined by the list. 

```java
enum Month {
    JANUARY, FEBRUARY, MARCH, ..., DECEMBER
}
```

You can use enums to define:

- **Days of the week**
    
- **Months of the year**
    
- **Status codes** like `SUCCESS`, `FAILED`, `WAITING`
    

Enums replace the older approach of using `final` variables for constants with a **more structured and powerful alternative**.

## Enumeration Fundamentals

### Defining an Enum

Use the `enum` keyword to create an enumeration:

```java
enum Transport {
    CAR, TRUCK, AIRPLANE, TRAIN, BOAT
}
```

- These constants (`CAR`, `TRUCK`, etc.) are implicitly:
    
    - `public`
        
    - `static`
        
    - `final`
        
- They are also **self-typed**: `Transport.CAR` is of type `Transport`.
    

> Naming Convention: Enum constants are typically written in **uppercase**, just like `final` constants.

---

### Declaring Enum Variables

```java
Transport tp;
tp = Transport.AIRPLANE;
```

You **don’t use `new`** to instantiate enum values. You assign them directly using the enum constants.

This assigns `tp` the value `AIRPLANE`. Because `tp` is of type Transport, the only values that it can be assigned are those defined by the enumeration. 

## Comparing Enum Values

Enums can be compared using `==` or in a `switch` statement:

```java
if (tp == Transport.TRAIN) {
    // Do something
}
```

### Using Enum in a `switch`:

```java
switch (tp) {
    case CAR:
        System.out.println("A car carries people.");
        break;
    case TRUCK:
        System.out.println("A truck carries freight.");
        break;
}
```

> In case statements, enum constants are used **without the enum name**, e.g., `CAR`, not `Transport.CAR`.

This is because the type of the enumeration in the switch expression has already implicitly specified the enum type of the case constants. There is no need to qualify the constants in the case statements with their enum type name. 

### Printing Enum Constants

```java
System.out.println(Transport.BOAT);  

// Output: BOAT
```

The enum constant name is printed by default.

## Basic Enum Usage

```java
enum Transport {
    CAR, TRUCK, AIRPLANE, TRAIN, BOAT
}

class EnumDemo {
    public static void main(String[] args) {
        Transport tp = Transport.AIRPLANE;

        System.out.println("Value of tp: " + tp);
        if (tp == Transport.TRAIN)
            System.out.println("tp contains TRAIN.\n");

        switch (tp) {
            case CAR:
                System.out.println("A car carries people.");
                break;
            case AIRPLANE:
                System.out.println("An airplane flies.");
                break;
        }
    }
}
```

## Enums Are Class Types

In Java, even though not instantiated, enums are **classes**. This means enums can have:

- Constructors
    
- Methods
    
- Fields (instance variables)
    
- Can implement interfaces
    
But enums:

- Cannot extend other classes
    
- Cannot be extended (because they're `final`)

## Built-in Enum Methods

Every enum extends the abstract class `java.lang.Enum`, which gives:

|Method|Description|
|---|---|
|`values()`|Returns an array of all enum constants|
|`valueOf()`|Returns the constant with the specified name|
|`ordinal()`|Returns the constant's position (0-based)|
|`compareTo()`|Compares the ordinal values|

### `values()` and `valueOf()`

```java
enum Transport {
    CAR, TRUCK, AIRPLANE, TRAIN, BOAT
}

class EnumDemo2 {
    public static void main(String[] args) {
        
        Transport tp = Transport.valueOf("AIRPLANE");

// Transport[] allTransports = Transport.values();
	
        System.out.println("All transport constants:");
        for (Transport t : Transport.values())
            System.out.println(t);

        System.out.println("\ntp contains " + tp);
    }
}
```


```
Here are all Transport constants
CAR
TRUCK
AIRPLANE
TRAIN
BOAT

tp contains AIRPLANE
```

## Enums with Constructors and Methods

When an enumeration contains other members, the enumeration list must end in a semicolon. The last constant, BOAT, is followed by a semicolon. 

```java
enum Transport {
    CAR(65), TRUCK(55), AIRPLANE(600), TRAIN(70), BOAT(22);

    private int speed; // instance variable

    Transport(int s) {
        speed = s;  // constructor
    }

    int getSpeed() {
        return speed;  // method
    }
}
```

Each enum constant is an object of enumeration type. You can attach data and behavior. When constructor is defined for an enum, the constructor is called when each enumeration constant is created. 

### Using the Enum:

```java
public class EnumDemo {
    public static void main(String[] args) {
        System.out.println("Airplane speed: " 
	        + Transport.AIRPLANE.getSpeed() 
	        + " mph");

        System.out.println("All transport speeds:");
        for (Transport t : Transport.values())
            System.out.println(t + ": " + t.getSpeed() 
	            + " mph");
    }
}
```

```
Typical speed for an airplane is 600 miles per hour.

All Transport speeds:
CAR typical speed is 65 miles per hour.
TRUCK typical speed is 55 miles per hour.
AIRPLANE typical speed is 600 miles per hour.
TRAIN typical speed is 70 miles per hour.
BOAT typical speed is 22 miles per hour.
```

## `ordinal()` and `compareTo()`

```java
enum Days { MONDAY, TUESDAY, WEDNESDAY }

Days d1 = Days.MONDAY;
Days d2 = Days.WEDNESDAY;

System.out.println(d1.ordinal());        
// Output: 0

System.out.println(d1.compareTo(d2));    
// Output: -2
```

- `ordinal()` gives position (starting from 0)
    
- `compareTo()` compares positions
    
## Traffic Light Simulation

```java
enum TrafficLightColor { RED, GREEN, YELLOW }

class TrafficLightSimulator implements Runnable {
    private TrafficLightColor tlc = TrafficLightColor.RED;
    private boolean stop = false;
    private boolean changed = false;

    public void run() {
        while (!stop) {
            try {
                switch (tlc) {
                    case GREEN -> Thread.sleep(10000);
                    case YELLOW -> Thread.sleep(2000);
                    case RED -> Thread.sleep(12000);
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            changeColor();
        }
    }

    synchronized void changeColor() {
        switch (tlc) {
            case RED -> tlc = TrafficLightColor.GREEN;
            case GREEN -> tlc = TrafficLightColor.YELLOW;
            case YELLOW -> tlc = TrafficLightColor.RED;
        }
        changed = true;
        notify();
    }

    synchronized void waitForChange() {
        try {
            while (!changed)
                wait();
            changed = false;
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    synchronized TrafficLightColor getColor() {
        return tlc;
    }

    synchronized void cancel() {
        stop = true;
    }
}

public class TrafficLightDemo {
    public static void main(String[] args) {
        TrafficLightSimulator tl = new TrafficLightSimulator();
        Thread thrd = new Thread(tl);
        thrd.start();

        for (int i = 0; i < 9; i++) {
            System.out.println(tl.getColor());
            tl.waitForChange();
        }
        tl.cancel();
    }
}
```

- Enums restrict the light color to only three valid values: `RED`, `GREEN`, `YELLOW`.
    
- Enums make code **cleaner**, **type-safe**, and **more readable**.
    
## Summary

| Feature                     | Explanation                                               |
| --------------------------- | --------------------------------------------------------- |
| `enum` keyword              | Defines a list of named constants                         |
| `values()`                  | Returns array of all constants                            |
| `valueOf("NAME")`           | Returns the constant matching the string                  |
| Custom fields and methods   | You can attach data and logic to each constant            |
| `ordinal()`                 | Returns the position of a constant in its declaration     |
| `compareTo()`               | Compares constants by their position                      |
| Switch compatibility        | Can use enums in `switch` without qualification           |
| Can't extend or be extended | Enums are implicitly final and can't extend other classes |
| Inherits from `Enum`        | All enums extend `java.lang.Enum` class                   |

