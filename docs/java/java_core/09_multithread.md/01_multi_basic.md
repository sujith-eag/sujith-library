# Multithreading

A multithreaded program contains two or more parts, called threads, that can run concurrently. Each thread defines a separate path of execution, allowing multiple operations to occur independently within the same program.

Multithreading is a specialized form of multitasking that allows more efficient use of CPU time and system resources.

## Types of Multitasking

Multitasking is the capability of running multiple tasks at the same time. There are two types:

### 1. Process-Based Multitasking

- A **process** is a self-contained program in execution.
    
- In process-based multitasking, allows each program runs independently and cuncurrently.
    
- Example: Compiling code in a terminal while browsing the web.
    
- This form of multitasking is managed by the operating system, not Java.
    
### 2. Thread-Based Multitasking

- A **thread** is the smallest unit of executable code within a program.
    
- Multiple threads within the same program can perform different tasks simultaneously.
    
- Example: A word processor formatting text while saving a document in the background.
    
- Java provides built-in support for thread-based multitasking.
    
> In a single-core system, two or more threads do not actually run at the same time, but idle CPU time is utilized by sharing CPU time.

## Thread Lifecycle

A thread in Java can exist in several states:

- **New**: Thread is created but not yet started.
    
- **Runnable**: Thread is ready to run and is waiting for CPU time.
    
- **Running**: Thread is actively executing.
    
- **Blocked**: Thread is waiting for a resource (e.g., I/O).
    
- **Suspended**: Execution is temporarily paused.
    
- **Terminated**: Execution is complete and cannot resume.
    
## Synchronization

When multiple threads access shared resources, they must be coordinated to avoid conflicts. Java provides synchronization tools to control thread execution and prevent data inconsistencies.

## The Thread Class and Runnable Interface

Java's multithreading system is built on two main components:

- The `Thread` class
    
- The `Runnable` interface
    
Both are part of the `java.lang` package.

### The Thread Class

The `Thread` class encapsulates a thread of execution. threads can be created either by:

- Extending the `Thread` class
    
- Implementing the `Runnable` interface
    
### Common Methods in the Thread Class

| Method                | Description                              |
| --------------------- | ---------------------------------------- |
| `String getName()`    | Returns the thread's name                |
| `int getPriority()`   | Returns the thread's priority            |
| `boolean isAlive()`   | Checks if the thread is still running    |
| `join()`              | Waits for the thread to finish           |
| `run()`               | Entry point of the thread                |
| `sleep(milliseconds)` | Suspends the thread for a period of time |
| `start()`             | Starts the execution of the thread       |

## Creating a Thread in Java

Threads can be created using either of two approaches:

### 1. Implementing the Runnable Interface

In this approach, you define a class that implements the `Runnable` interface and override its `run()` method. `Runnable` defines only the `run()` method.

This is like saying: _“Hey, I’ll write a class that contains code I want the thread to run.”_

```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread is running using Runnable");
    }
}

public class Main {
    public static void main(String[] args) {
        MyRunnable runnable = new MyRunnable();
	// Passing runnable object to a new Thread
        Thread thread = new Thread(runnable);
        thread.start(); 
    // Starts the thread and runs the run() method
    }
}
```

When using the `Runnable` interface, typically a thread is created like this:
```java
Thread thread = new Thread(runnableObject);
```

- `run()` contains the code that will execute in the new thread.
    
- `start()` should be called, not `run()`, to begin thread execution. Creating an object by itself will not start the thread. 
    
* `run()` establishes the entry point for another, concurrent thread of execution within the program. This thread will end when `run()` returns. 

---

### 2. Extending the Thread Class

A class is defined that extends the `Thread` class and override its `run()` method. 

> Here, the class **is** a thread. 

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running using Thread class");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start(); 
    // Starts the thread and runs the run() method
    }
}
```

- The class becomes a thread by extending `Thread`.
    
- Like with `Runnable`, `start()` is used to begin execution.
    

## Summary

- Java supports multithreading through the `Thread` class and `Runnable` interface.
    
- Multithreading allows concurrent execution of tasks within a program.
    
- Threads must be started with `start()` to run concurrently.
    
- Synchronization is needed when multiple threads access shared resources.
    
- Use `Runnable` when you want to separate the task from the thread management.
    
- Use `Thread` when you want to directly represent a thread with additional functionality.

	