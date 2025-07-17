# The List Interface

The `List` interface is part of the Java Collections Framework and extends the `Collection` interface. It represents an ordered collection (also known as a _sequence_), where elements are stored in a specific order and can be accessed by their position (index) in the list. The index is zero-based, meaning the first element is at index 0, the second at index 1, and so on.

A `List` allows duplicate elements, which means you can have multiple elements with the same value. The `List` interface is generic and is declared as:

```java
interface List<E>
```

Here, `E` is a type parameter that specifies the type of elements the list will hold.

In addition to the methods inherited from the `Collection` interface, `List` introduces several additional methods that are specifically designed to support positional access, insertion, removal, and list iteration.

---

## Key Features of the List Interface

1. **Indexed Access**: You can retrieve, update, insert, or remove elements using an index.
    
2. **Duplicates Allowed**: Unlike `Set`, a `List` permits duplicate elements.
    
3. **Maintains Insertion Order**: The order in which elements are inserted is preserved.
    
4. **Null Elements**: Most implementations allow null elements, except for the immutable lists created by the `of()` and `copyOf()` methods introduced in Java 9.
    

---

## Important List Methods Explained

### `add(int index, E element)`

Inserts the specified element at the given index. Existing elements at and after this index are shifted to the right. No element is overwritten.

### `addAll(int index, Collection<? extends E> c)`

Inserts all elements from the specified collection `c` starting at the specified index. All existing elements from this point onward are shifted to the right. Returns `true` if the list is modified.

### `get(int index)`

Retrieves the element at the specified index in the list.

### `set(int index, E element)`

Replaces the element at the specified index with the given element and returns the element previously at that position.

### `remove(int index)`

Removes the element at the specified index. The list is compacted afterward, which means subsequent elements are shifted one position to the left.

### `indexOf(Object o)`

Returns the index of the first occurrence of the specified object in the list. If the object is not found, it returns -1.

### `lastIndexOf(Object o)`

Returns the index of the last occurrence of the specified object in the list. If not found, it returns -1.

### `subList(int fromIndex, int toIndex)`

Returns a view of the portion of the list between `fromIndex` (inclusive) and `toIndex` (exclusive). Changes made to the sublist are reflected in the original list.

### `listIterator()`

Returns a `ListIterator` over the elements in the list, starting at the beginning. A `ListIterator` allows bidirectional traversal and modification of the list during iteration.

### `listIterator(int index)`

Returns a `ListIterator` over the elements in the list, starting at the specified index.

### `replaceAll(UnaryOperator<E> operator)`

Replaces each element of the list with the result of applying the provided unary operator. This method can be used to perform bulk operations like converting all elements to uppercase or modifying values based on a rule.

### `sort(Comparator<? super E> comparator)`

Sorts the list according to the order defined by the specified comparator. This operation modifies the list in-place.

---

## Creating Immutable Lists with `of()` (Java 9+)

Java 9 introduced factory methods such as `List.of()` to make it easier to create immutable (read-only) lists. These methods return unmodifiable, value-based lists that do not allow null elements.

### Overloads of `of()`

There are multiple overloaded versions of `of()`:

- `List.of()` – Creates an empty list.
    
- `List.of(E e1)` through `List.of(E e1, ..., E e10)` – Creates lists with 1 to 10 elements.
    
- `List.of(E... elements)` – Accepts a variable number of arguments (varargs) to create a list of arbitrary size.
    

All `of()` methods return a list that:

- Is immutable: any attempt to modify the list (add, remove, or change elements) will throw an `UnsupportedOperationException`.
    
- Does not allow `null` elements.
    
- Is value-based: identity-sensitive operations like `==` or `System.identityHashCode()` should not be relied upon.
    

---

## Creating Unmodifiable Lists with `copyOf()` (Java 10+)

Another way to create immutable lists is by using the `copyOf()` method, introduced in Java 10:

```java
List<E> copyOf(Collection<? extends E> collection)
```

This method returns an unmodifiable list containing the elements of the specified collection. If the passed collection already has no nulls and is unmodifiable, it may be returned as-is. Otherwise, a new unmodifiable list is created.

Just like `of()`, the list returned by `copyOf()`:

- Is unmodifiable.
    
- Rejects `null` elements.
    
- Is value-based.
    

---

## Summary of Modifications Compared to Collection Interface

While `List` inherits all methods from `Collection`, the semantics of some methods are adjusted:

- `add(E e)` adds the element to the end of the list.
    
- `addAll(Collection<? extends E> c)` appends all elements to the end of the list.
    
- `List` adds new methods that provide more control through positional access and list-specific behavior.
    

---

## Implementations of List Interface

Common classes that implement the `List` interface include:

- `ArrayList`: Resizable array implementation. Fast random access, slow insertions/deletions in the middle.
    
- `LinkedList`: Doubly linked list implementation. Better for frequent insertions and deletions.
    
- `Vector`: Synchronized array-based list, rarely used in modern code.
    
- `Stack`: Subclass of `Vector`, represents a last-in, first-out stack.
    
