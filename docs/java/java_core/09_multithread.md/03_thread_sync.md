# Determining When a Thread Ends

In multithreaded programming, it's often necessary to know when a thread has finished executing. Java provides two primary ways to do this:

## 1. `isAlive()`

The `isAlive()` method checks whether a thread is still running.

```java
final boolean isAlive()
```

- Returns `true` if the thread is still active (running or ready to run).
    
- Returns `false` if the thread has completed execution.

```java
class MoreThreads {
    public static void main(String[] args) {
        System.out.println("Main thread starting.");

        MyThread mt1 = MyThread.createAndStart("Child #1");
        MyThread mt2 = MyThread.createAndStart("Child #2");
        MyThread mt3 = MyThread.createAndStart("Child #3");

        // Main thread waits while child threads are alive
        do {
            System.out.print(".");
            try {
                Thread.sleep(100);  
                // Check every 100ms
            } catch (InterruptedException exc) {
                System.out.println("Main thread interrupted.");
            }
        } while (mt1.thrd.isAlive() || mt2.thrd.isAlive() || mt3.thrd.isAlive());

        System.out.println("Main thread ending.");
    }
}
```

```java
while (mt1.thrd.isAlive() || mt2.thrd.isAlive() || mt3.thrd.isAlive()) {
// Wait for all threads to finish, allows main to trminate
}
```

## 2. `join()`

Better way to wait for a thread to finish is to use the `join()` method. It makes the calling thread wait until the target thread has completed.

```java
final void join() throws InterruptedException
```

- Makes the **current thread** wait until the thread on which `join()` is called **completes**.
    
- Overloaded version can be used to specify a **timeout**.

```java
class JoinThreads {
    public static void main(String[] args) {
        System.out.println("Main thread starting.");

        MyThread mt1 = MyThread.createAndStart("Child #1");
        MyThread mt2 = MyThread.createAndStart("Child #2");
        MyThread mt3 = MyThread.createAndStart("Child #3");

        try {
            mt1.thrd.join();  // Wait for Child #1 to finish
            System.out.println("Child #1 joined.");

            mt2.thrd.join();  // Wait for Child #2 to finish
            System.out.println("Child #2 joined.");

            mt3.thrd.join();  // Wait for Child #3 to finish
            System.out.println("Child #3 joined.");
        } catch (InterruptedException exc) {
            System.out.println("Main thread interrupted.");
        }

        System.out.println("Main thread ending.");
    }
}
```

- The main thread **blocks** at each `join()` call until the corresponding thread finishes.
    
- After all three `join()` calls complete, the main thread prints `Main thread ending.`

Output:

```plaintext
In Child #1, count is 8
In Child #2, count is 8
In Child #3, count is 9
Child #3 terminating.
In Child #2, count is 9
Child #2 terminating.
In Child #1, count is 9
Child #1 terminating.
Child #1 joined.
Child #2 joined.
Child #3 joined.
Main thread ending.
```

Even though `Child #3` finishes first, the main thread waits for `Child #1` first (because `join()` was called on `mt1` first), then `mt2`, and finally `mt3`.

## Thread Priorities

Every thread has a priority value (an integer between `Thread.MIN_PRIORITY` and `Thread.MAX_PRIORITY`). Threads with higher priority may get more CPU time relative to other active threads (though this behavior is OS-dependent).

- Default priority: `Thread.NORM_PRIORITY` (value = 5)
    
Priority of a child thread will be equal to that of its parent thread.

Thread’s priority can be set using `setPriority()`, and accessed using  `getPriority()` 

```java
final void setPriority(int level)

final int getPriority( )
```

```java
thread.setPriority(Thread.MAX_PRIORITY);

int p = thread.getPriority();
```

### Priority Constants:

- `Thread.MIN_PRIORITY` = 1
    
- `Thread.NORM_PRIORITY` = 5
    
- `Thread.MAX_PRIORITY` = 10
    
## Thread Synchronization

In multithreading, **race conditions** can occur when multiple threads access and modify shared resources concurrently.

To prevent data corruption and ensure only one thread accesses the critical section at a time the activities of the threads need to be coordinated.

### Java Synchronization Tools:

1. Synchronized Methods
    
2. Synchronized Blocks
    
## Synchronized Methods

To synchronize access to a method it is modified with the `synchronized` keyword. 

When a thread enters a synchronized method, it locks the object (using monitor) . Other threads must wait until the lock is released.

While locked, no other thread can enter the method, or enter any other synchronized method defined by the object’s class.

When the thread returns from the method, the monitor unlocks the object, allowing it to be used by the next thread. Thus, synchronization is achieved.

```java
class Shared {
    int sum;

    synchronized int sumArray(int[] nums) {
        sum = 0;
        for (int num : nums) {
            sum += num;
            System.out.println("Running total for " + Thread.currentThread().getName() + ": " + sum);
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted.");
            }
        }
        return sum;
    }
}
```

## Synchronized Blocks

Synchronized block is used when there is no need to synchronize the whole method, or the method can't be modified (e.g., third-party libraries).

```java
synchronized(sharedObject) {
    // only the necessary part is synchronized
    shared.sumArray(nums);
}
```

Placing the call to the method is placed in synchronized block, this locks the `sharedObject` so only one thread can execute inside the block at a time.

`sharedObject` is a reference to the object being synchronized. Once a synchronized block has been entered, no other thread can call a synchronized method on the object referred to by `sharedObject` until the block has been exited.

## Thread Communication (`wait()`, `notify()`, `notifyAll()`)

**Thread communication** allows threads to cooperate with each other rather than compete.

- `wait()` — Pauses the thread and releases the lock.
    
- `notify()` — Wakes up one thread waiting on the object.
    
- `notifyAll()` — Wakes up all waiting threads.
    
```java
synchronized(obj) {
    while (!condition) {
        obj.wait();  // releases lock and waits
    }
    // condition met, continue
}
```

```java
synchronized(obj) {
    // change condition
    obj.notify(); // or obj.notifyAll();
}
```

> These methods must be called from within synchronized context.

## Suspending, Resuming, and Stopping Threads

These operations are discouraged in modern Java because they are unsafe and deprecated.

- `suspend()`, `resume()`, and `stop()` methods were part of early Java versions but were removed due to potential for deadlocks and inconsistent state.
    
### Safe Alternatives:

- Use a flag variable to pause or terminate a thread safely.
    
```java
class MyThread implements Runnable {
    private volatile boolean running = true;

    public void run() {
        while (running) {
            // thread work here
        }
    }

    public void stopRunning() {
        running = false;
    }
}
```

This method uses a `volatile` flag to safely signal the thread to stop.

