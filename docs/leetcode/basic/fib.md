# The Fibonacci Sequence

The Fibonacci sequence is a series of numbers where any number is the sum of the two preceding ones. It typically starts with 0 and 1.

The sequence looks like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

The general formula is: `fib(n) = fib(n−1) + fib(n−2)`

## 1. Simple Recursion

The most straightforward approach is to translate the mathematical formula directly into a recursive function.

```python
def fibonacci(n):
    if n < 2:      # Base case: First two numbers are defined.
        return n

    else:       # Recursive step
        return fibonacci(n - 1) + fibonacci(n - 2)

n = int(input("Fibonacci of..  "))
print(fibonacci(n))
```

A **base case** is essential for any recursive function. Here, `if n < 2:` stops the recursion, returning 0 or 1, which allows the calls to resolve and return a final value. Without it, the function would call itself infinitely.

```java
class FibonacciRecursion {
    public static int fibonacci(int n) {
        if (n < 2) {   // Base case
            return n;
        }
        // Recursive case
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {
        int n = 10;
        System.out.println("Fibonacci of " + n 
	        + " = " + fibonacci(n));
    }
}
```

**Limitation:** This method has an **exponential runtime complexity**. For each call, two more calls are made, leading to a massive number of redundant calculations. For example, calculating `fibonacci(20)` requires 21,891 function calls. This makes it very inefficient for larger numbers.

## 2. Memoization (Caching Results)

To fix the inefficiency of the recursive approach, we can store the result of each calculation and reuse it later. This technique is called **memoization**.

### Manual Memoization

We can use a dictionary (or a hash map) to store the results of function calls.

```python
from typing import Dict

# Base cases are pre-stored in the memo.
memo: Dict[int, int] = {0: 0, 1: 1}

def fibonacci_memo(n):

    # Calculate and store if number not in cache
    if n not in memo:
        memo[n] = fibonacci_memo(n - 1) + fibonacci_memo(n - 2)

    return memo[n]

print(fibonacci_memo(50))
```

In java

```java
import java.util.HashMap;
import java.util.Map;

class FibonacciMemo {

    private static Map<Integer, Integer> memo = new HashMap<>();

    static {
        memo.put(0, 0);
        memo.put(1, 1);
    }

    public static int fibonacciMemo(int n) {
        if (!memo.containsKey(n)) {
            memo.put(n, fibonacciMemo(n-1) + fibonacciMemo(n-2) );
        }
        return memo.get(n);
    }

    public static void main(String[] args) {
        System.out.println(fibonacciMemo(50));
    }
}
```

### Automatic Memoization with `@lru_cache`

Python has a built-in decorator that handles memoization automatically.

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci_lru(n):

    if n < 2:
        return n

    return fibonacci_lru(n - 2) + fibonacci_lru(n - 1)

if __name__ == "__main__":
    print(fibonacci_lru(50))
```

The `@lru_cache` decorator wraps the function and caches its return values. When the function is called with the same argument again, the cached value is returned instantly instead of re-computing. The `maxsize=None` argument tells the cache to have an unlimited size.

## 3. Iteration (Bottom-Up Approach)

A highly efficient method is to build the sequence from the beginning using a simple loop. This avoids recursion overhead and has a linear runtime complexity.

```python
def fibonacci_iterative(n):
    if n == 0:
        return 0
    
    last = 0
    next_val = 1
    
    # Loop n-1 times to get to the nth number.
    for _ in range(1, n):
        last, next_val = next_val, last + next_val
        
    return next_val
```

This approach works forward by keeping track of the last two numbers in the sequence and calculating the next one in each step. It completes in `n-1` steps.

```java
class FibonacciIterative {
    public static int fibonacciIterative(int n) {
        if (n == 0) return 0;

        int last = 0;
        int nextVal = 1;

        for (int i = 1; i < n; i++) {
            int temp = nextVal;
            nextVal = last + nextVal;
            last = temp;
        }
        return nextVal;
    }

    public static void main(String[] args) {
        System.out.println(fibonacciIterative(10));
    }
}
```


## 4. Generating the Sequence with `yield`

To produce all the Fibonacci numbers up to `n`, a **generator** is a memory-efficient and Pythonic way to do it.

```python
from typing import Generator

def fibonacci_generator(n):
    yield 0  # Yield the first number.
    if n > 0:
        yield 1  # Yield the second number.
    
    last = 0
    next_val = 1
    for _ in range(1, n):
        last, next_val = next_val, last + next_val
        yield next_val  # Yield the next number in the sequence.

# This loop will print the first 51 Fibonacci numbers (0 to 50).
for number in fibonacci_generator(50):
    print(number)
```

The `yield` statement turns the function into a generator. Each time the `for` loop requests the next item, the function's execution continues until it hits the next `yield` statement, which provides the value to the loop. This is memory-efficient because it produces numbers one at a time, rather than storing the entire list in memory.

```java
import java.util.ArrayList;
import java.util.List;

class FibonacciGenerator {
    public static List<Integer> fibonacciSequence(int n) {
        List<Integer> sequence = new ArrayList<>();
        if (n >= 0) sequence.add(0);
        if (n >= 1) sequence.add(1);

        int last = 0;
        int nextVal = 1;

        for (int i = 1; i < n; i++) {
            int temp = nextVal;
            nextVal = last + nextVal;
            last = temp;
            sequence.add(nextVal);
        }

        return sequence;
    }

    public static void main(String[] args) {
        List<Integer> fibs = fibonacciSequence(10);
        for (int num : fibs) {
            System.out.print(num + " ");
        }
    }
}
```

**Output:**  
`0 1 1 2 3 5 8 13 21 34 55`

## Complexity Comparison

|Method|Time Complexity|Space Complexity|Notes|
|---|---|---|---|
|Simple Recursion|O(2ⁿ)|O(n) call stack|Slow for large n|
|Memoization|O(n)|O(n) extra map|Fast, top-down|
|Iterative|O(n)|O(1) extra|Fastest for single value|
|Generator / Sequence|O(n)|O(n) to store|Best for producing a series|

