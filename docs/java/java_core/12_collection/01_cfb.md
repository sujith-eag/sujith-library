# Collections Framework

The `java.util` package is a core part of the `java.base` module starting with JDK 9. It provides a wide variety of utility classes and interfaces supporting:

- Pseudorandom number generation
    
- Date and time manipulation (prior to `java.time`)
    
- Event handling
    
- Bit manipulation (e.g., BitSet)
    
- String tokenization
    
- Formatted data handling
    
Most importantly, `java.util` includes one of Java’s most powerful subsystems: the **Collections Framework**.

## Overview of the Collections Framework

The Java Collections Framework is a unified architecture for representing and manipulating collections. A **collection** is an object that groups multiple elements into a single unit.

The framework is structured around a hierarchy of **interfaces**, **abstract classes**, and **concrete classes** that allow storage, retrieval, and manipulation of data in various ways such as lists, sets, queues, and maps.

### Goals of the Collections Framework

The framework was designed with the following key goals:

1. **High Performance**: Core implementations (e.g., ArrayList, LinkedList, HashSet, TreeMap) are highly optimized for performance.
    
2. **Unified Architecture**: Collections are designed to operate in a similar, consistent manner, enabling interoperability between different types.
    
3. **Ease of Extension**: The architecture allows easy extension or adaptation for new data structures.
    
## Iteration and Algorithms

- An **iterator** provides a standard way to traverse elements in a collection. All collections implement the `Iterable` interface, enabling the use of enhanced `for-each` loops.
    
- Java 8 introduced **Spliterator**, a special kind of iterator for parallel and bulk traversal of data. It's supported by the `Spliterator` interface and its primitive-specific versions like `PrimitiveIterator.OfDouble`.
    
- The `Collections` utility class provides **algorithms** such as sorting, reversing, shuffling, and binary search as static methods that operate on collection objects.
    
## Collection Interfaces

At the heart of the Collections Framework are several core interfaces that define the types of collections. Concrete classes implement these interfaces in various ways.

| Interface    | Description                                                                                                                  |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Collection   | The root interface. Enables to work with group of objects. All other collection interfaces extend this.                      |
| List         | An ordered collection (sequence). Allows duplicate elements.                                                                 |
| Set          | A collection that contains no duplicate elements.                                                                            |
| SortedSet    | A Set that maintains elements in ascending order.                                                                            |
| NavigableSet | Extends SortedSet to support navigation methods for closest-match retrievals.                                                |
| Queue        | A collection for handling special type of lists typically for removing in FIFO order. (holding elements prior to processing) |
| Deque        | A double-ended queue that allows insertion and removal from both ends.                                                       |

### Note on Map

Although not a subtype of Collection, the `Map<K, V>` interface and its subtypes (`SortedMap`, `NavigableMap`) are part of the Collections Framework. They store key-value pairs and provide efficient lookup and manipulation.

## Supporting Interfaces

Besides the primary interfaces, the framework includes several supporting interfaces:

- `Iterator<E>`: Enables traversal over collections.
    
- `ListIterator<E>`: Extends Iterator with bidirectional traversal for lists.
    
- `Spliterator<E>`: Supports parallel iteration and partitioning.
    
- `Comparator<T>`: Defines a custom order for sorting elements.
    
- `Comparable<T>`: Implemented by classes that have a natural ordering.
    
- `RandomAccess`: A marker interface indicating that a list supports fast (usually constant time) random access.
    
## Modifiability of Collections

The framework supports both **modifiable** and **unmodifiable** collections.

- **Modifiable collections**: Allow adding, removing, and updating elements. Most standard collections like `ArrayList`, `HashSet`, etc., are modifiable.
    
- **Unmodifiable collections**: Do not support structural modification. Attempting to change them results in an `UnsupportedOperationException`.
    

You can create unmodifiable versions using factory methods like:

```java
List<String> immutableList = List.of("a", "b", "c");
```

Or using wrappers:

```java
List<String> unmodifiableList = Collections.unmodifiableList(modifiableList);
```

## The Collection Interface in Detail

The `Collection<E>` interface is the foundation of the framework and defines the core methods used to manipulate collections of objects. All major interfaces like `List`, `Set`, and `Queue` extend from `Collection`.

Declaration:

```java
interface Collection<E>
```

Where `E` represents the element type (object type) the collecetion will hold.

- Collection Extends the `Iterable<E>` interface, enabling use in enhanced for loops for cycling through objects.
    
- Core methods include:
    
```java
boolean add(E element)
boolean remove(Object element)
boolean contains(Object o)
int size()
void clear()
boolean isEmpty()
Iterator<E> iterator()
Object[] toArray()
<T> T[] toArray(T[] a)
boolean addAll(Collection<? extends E> c)
boolean removeAll(Collection<?> c)
boolean retainAll(Collection<?> c)
boolean containsAll(Collection<?> c)
```

Some of these methods are **optional** — not all implementations are required to support them. This allows flexibility in how different types of collections behave.

## Summary

- The `java.util` package includes a powerful Collections Framework for handling groups of objects.
    
- Interfaces such as `Collection`, `List`, `Set`, and `Queue` form the foundation.
    
- Iterators and spliterators provide standard and parallel mechanisms to traverse data.
    
- The `Collections` class provides utility algorithms for collection manipulation.
    
- Modifiability is a critical aspect, with clear mechanisms for creating immutable collections.
    
- Supporting interfaces like `Comparator`, `RandomAccess`, and `ListIterator` enable performance tuning and customized behavior.
    
## Core Methods of the Collection Interface

In Java, all collections implement the `Collection<E>` interface either directly or indirectly, and understanding its methods is crucial to effectively using the Java Collections Framework.

The `Collection<E>` interface defines the foundational operations for manipulating groups of elements. These operations can be categorized into **addition**, **removal**, **inspection**, **iteration**, **conversion**, and **streaming** operations.

## Addition Operations

- `boolean add(E element)`  
    Adds the specified element to the collection. Returns `true` if element was added and collection was modified. Some collections, such as `Set`, may return `false` if duplicates are not allowed and the element is already present.
    
- `boolean addAll(Collection<? extends E> c)`  
    Adds all elements from the specified collection to the current collection. Returns `true` if at least one element was added.
    
## Removal Operations

- `boolean remove(Object obj)`  
    Removes a single instance of the specified object from the collection, if present. Returns `true` if the collection was modified.
    
- `boolean removeAll(Collection<?> c)`  
    Removes all elements in the specified collection from the current collection. Returns `true` if any elements were removed.
    
- `boolean retainAll(Collection<?> c)`  
    Retains only those elements in the current collection that are also contained in the specified collection. Returns `true` if any elements were removed.
    
- `default boolean removeIf(Predicate<? super E> predicate)`  
    Removes all elements that satisfy the specified condition. This method uses a functional predicate and was introduced in Java 8.
    
- `void clear()`  
    Removes all elements from the collection, leaving it empty.
    
## Inspection Operations

- `boolean contains(Object obj)`  
    Returns `true` if the specified object is present in the collection.
    
- `boolean containsAll(Collection<?> c)`  
    Returns `true` if the collection contains all elements of the specified collection.
    
- `boolean isEmpty()`  
    Returns `true` if the collection contains no elements.
    
- `int size()`  
    Returns the number of elements in the collection.
    
- `boolean equals(Object obj)`  
    Compares the specified object with the collection for equality. The meaning of equality can vary across collection implementations (e.g., element order may or may not be considered).
    
- `int hashCode()`  
    Returns the hash code of the collection, consistent with `equals()`.
    
## Iteration and Traversal

- `Iterator<E> iterator()`  
    Returns an iterator over the elements in the collection. Used to traverse the collection sequentially.
    
- `default Spliterator<E> spliterator()`  
    Returns a spliterator for the collection, supporting parallel iteration. Introduced in Java 8 for use with the Stream API and fork/join parallelism.
    
## Stream Support

- `default Stream<E> stream()`  
    Returns a sequential `Stream` with the collection as its data source. Allows use of functional-style operations such as `filter()`, `map()`, and `collect()`.
    
- `default Stream<E> parallelStream()`  
    Returns a parallel `Stream` that enables concurrent processing of collection elements.
    
## Conversion to Arrays

- `Object[] toArray()`  
    Returns an array containing all elements in the collection. The array’s runtime type is `Object[]`.
    
- `<T> T[] toArray(T[] array)`  
    Returns an array containing all elements in the collection, using the specified array as the destination. If the array is too small, a new array is created; if it's larger, the element after the last is set to `null`.
    
- `default <T> T[] toArray(IntFunction<T[]> arrayGenerator)`  
    Added in Java 11, this version allows a function to dynamically generate an array of the correct type and size. Useful for more type-safe and flexible conversions.
    
These `toArray` methods provide a bridge between collection-based and array-based APIs, which can be advantageous in many programming situations.

## Exceptions Thrown by Collection Methods

Many methods of the `Collection` interface can throw runtime exceptions in certain situations:

- **UnsupportedOperationException**  
    Thrown if the collection does not support the requested operation, such as adding to an unmodifiable collection.
    
- **ClassCastException**  
    Thrown if an element is incompatible with the collection's type (e.g., when using custom `Comparator` or `equals()` implementations).
    
- **NullPointerException**  
    Thrown if a null element is added or queried and the collection does not permit nulls.
    
- **IllegalArgumentException**  
    Thrown when an invalid argument is passed (e.g., an unsupported predicate in `removeIf`).
    
- **IllegalStateException**  
    Thrown when an operation is not allowed in the current state of the collection, such as adding to a fixed-size collection that is already full.
    
