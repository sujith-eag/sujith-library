# The ArrayList Class

The `ArrayList` class extends `AbstractList` and implements the `List` interface. It is a generic class declared as:

```java
class ArrayList<E>
```

Here, `E` specifies the type of elements the list will hold.

An `ArrayList` supports dynamic arrays that can grow or shrink as needed. It functions as a variable-length array of object references. When elements are added beyond the current capacity, the array is automatically enlarged. When elements are removed, it can also be reduced in size.

### Constructors

`ArrayList` provides the following constructors:

```java
ArrayList()
ArrayList(Collection<? extends E> c)
ArrayList(int capacity)
```

- The first constructor creates an empty array list.
    
- The second constructor creates a list initialized with the elements of the specified collection `c`.
    
- The third constructor creates a list with the specified initial capacity. Capacity refers to the size of the internal array used to store elements. The capacity grows automatically as elements are added.
    

### Example: Demonstrating ArrayList

```java
import java.util.*;

class ArrayListDemo {
    public static void main(String[] args) {
        // Create an array list.
        ArrayList<String> al = new ArrayList<String>();
        System.out.println("Initial size of al: " + al.size());

        // Add elements to the array list.
        al.add("C");
        al.add("A");
        al.add("E");
        al.add("B");
        al.add("D");
        al.add("F");
        al.add(1, "A2");
        System.out.println("Size of al after additions: " + al.size());
        System.out.println("Contents of al: " + al);

        // Remove elements from the array list.
        al.remove("F");
        al.remove(2);
        System.out.println("Size of al after deletions: " + al.size());
        System.out.println("Contents of al: " + al);
    }
}
```

**Output:**

```
Initial size of al: 0
Size of al after additions: 7
Contents of al: [C, A2, A, E, B, D, F]
Size of al after deletions: 5
Contents of al: [C, A2, E, B, D]
```

The list's contents are displayed using the default `toString()` conversion, inherited from `AbstractCollection`.

### Managing Capacity

Although the capacity increases automatically, you can manually control it using:

```java
void ensureCapacity(int cap)
```

This ensures that the internal array has at least the specified capacity.

To reduce the array size to match the number of elements currently held, use:

```java
void trimToSize()
```



```java
public class CapacityDemo{
	public static void main (String args[]){
	ArrayList<String> list = new ArrayList<>(3);

	list.ensureCapacity(10);
	list.add("Apple");
	list.add("Banana");
	list.add("Cherry);

	list.trimToSize();

	System.out.println("List size is : " + list.size() );
	}
}
```

Going beyond the ensured size will go beyond the size without error

---

### Obtaining an Array from an ArrayList

You might need to convert an `ArrayList` into an actual array for various reasons:

- To optimize performance, faster processing times for certain operations.
    
- To pass to a method that accepts only arrays. (not overloaded to accept collections)
    
- To integrate with legacy code that does not understand collections.
    
This can be done using the `toArray()` method, which has the following variants:

```java
Object[] toArray()

<T> T[] toArray(T[] array)

default <T> T[] toArray(IntFunction<T[]> arrayGen)
```

The first version returns an array of `Object`. The second and third versions return an array of the same type as the specified array or array generator.

### Example: Converting an ArrayList to an Array

```java
import java.util.*;

class ArrayListToArray {
    public static void main(String[] args) {
        ArrayList<Integer> al = new ArrayList<Integer>();

        // Add elements
        al.add(1);
        al.add(2);
        al.add(3);
        al.add(4);
		
		System.out.println("Contents of al: " + al);
		System.out.println("Size of al: " 
			+ al.size() + " " +
			+ al.getClass().getName());
		
        // Convert to array
        Integer[] ia = new Integer[al.size()];
        ia = al.toArray(ia);

		System.out.println("Size of al: " 
			+ ia.size() + " " +
			+ ia.getClass().getName());
        
        // Sum array elements
        int sum = 0;
        for (int i : ia) sum += i;
        System.out.println("Sum is: " + sum);
    }
}
```

**Output:**

```
Contents of al: [1, 2, 3, 4]
size: 4
java.util.ArrayList
java.lang.Integer
Sum is: 10
```

The `add()` method accepts primitive `int` values thanks to autoboxing, which automatically converts them to `Integer` objects. This makes working with primitive values in collections much easier.

---

# The LinkedList Class

The `LinkedList` class extends `AbstractSequentialList` and implements the `List`, `Deque`, and `Queue` interfaces. It provides a doubly-linked list data structure and is declared as:

> `Dequeu` is double ended queue interface

```java
class LinkedList<E>
```

Here, `E` specifies the type of elements the list will hold.

### Constructors

```java
LinkedList()
LinkedList(Collection<? extends E> c)
```

- The first constructor creates an empty list.
    
- The second constructor initializes the list with the elements from the specified collection `c`.
    
### Deque Features in LinkedList

Since `LinkedList` implements the `Deque` interface, it supports a range of methods for manipulating both ends of the list:

- Add to start: `addFirst()`, `offerFirst()`
    
- Add to end: `addLast()`, `offerLast()`
    
- Get first: `getFirst()`, `peekFirst()`
    
- Get last: `getLast()`, `peekLast()`
    
- Remove first: `removeFirst()`, `pollFirst()`
    
- Remove last: `removeLast()`, `pollLast()`
    
> `offer` type of methods return a boolean as acknowldgement  

### Example: Demonstrating LinkedList

```java
import java.util.*;

class LinkedListDemo {
    public static void main(String[] args) {
        LinkedList<String> ll = new LinkedList<String>();

        // Add elements
        ll.add("F");
        ll.add("B");
        ll.add("D");
        ll.add("E");
        ll.add("C");
        ll.addLast("Z");
        ll.addFirst("A");
        ll.add(1, "A2");

        System.out.println("Original contents of ll: " + ll);

        // Remove elements
        ll.remove("F");
        ll.remove(2);
        System.out.println("Contents of ll after deletion: " + ll);

        // Remove first and last
        ll.removeFirst();
        ll.removeLast();
        System.out.println("ll after deleting first and last: " + ll);

        // Get and set value
        String val = ll.get(2);
        ll.set(2, val + " Changed");
        System.out.println("ll after change: " + ll);
    }
}
```

**Output:**

```
Original contents of ll: [A, A2, F, B, D, E, C, Z]
Contents of ll after deletion: [A, A2, D, E, C, Z]
ll after deleting first and last: [A2, D, E, C]
ll after change: [A2, D, E Changed, C]
```

The `add(E)` method appends items to the end of the list. The method `add(int, E)` is used to insert items at a specific index, as shown with `add(1, "A2")`.

To update an element, use `get(index)` to retrieve it, then use `set(index, newValue)` to modify it.

