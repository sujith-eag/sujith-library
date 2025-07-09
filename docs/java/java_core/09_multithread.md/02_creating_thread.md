# Creating and Managing Threads

## Creating a Thread by Implementing `Runnable`

1. Create a class that implements the `Runnable` interface.
    
2. Override the `run()` method with the code that should execute in the new thread.
    
3. Create a `Thread` object by passing an instance of your class to the `Thread` constructor.
    
4. Start the thread using `start()`.
    
```java
class MyThread implements Runnable {
    String threadName;

    MyThread(String name) {
        threadName = name;
    }

    public void run() {
        System.out.println(threadName + " Starting.");
        try {
            for (int count = 0; count < 10; count++) {
                Thread.sleep(400);
                System.out.println("In " + threadName + ", count is " + count);
            }
        } catch (InterruptedException exc) {
            System.out.println(threadName + " interrupted.");
        }
        System.out.println(threadName + " terminating.");
    }
}

class UseThreads {
    public static void main(String[] args) {
        System.out.println("Main thread starting.");
        MyThread mt = new MyThread("Child #1");
        Thread newThrd = new Thread(mt);  
        // Associate thread with MyThread
        newThrd.start();                  
        // Start the thread

        for (int i = 0; i < 50; i++) {
            System.out.print(".");
            try {
                Thread.sleep(100);
            } catch (InterruptedException exc) {
                System.out.println("Main thread interrupted.");
            }
        }
        System.out.println("Main thread ending.");
    }
}
```

After calling `start()`, execution returns to `main()`, and it enters `main()’`s for loop. Both threads continue running, sharing the CPU in single-CPU systems, until their loops finish.

> Java provides much better ways of waiting for a thread to end. 

A program continues to run until all of its threads have ended. 


In a multi-threaded program, the main thread should be the last thread to finish running. Thus, having the main thread finish last is not a requirement. It is, however, often a good practice to follow.

## 2. Thread with Factory Method (Cleaner Structure)

- Store the `Thread` object as an instance variable (`thrd`).
    
- Provide a **static factory method** `createAndStart()` to create and start the thread.
    
```java
class MyThread implements Runnable {
    Thread thrd;

    MyThread(String name) {
        thrd = new Thread(this, name);
    }

    public static MyThread createAndStart(String name) {
        MyThread myThrd = new MyThread(name);
        myThrd.thrd.start(); // Start the thread
        return myThrd;
    }

    public void run() {
        System.out.println(thrd.getName() + " starting.");
        try {
            for (int count = 0; count < 10; count++) {
                Thread.sleep(400);
                System.out.println("In " + thrd.getName() + ", count is " + count);
            }
        } catch (InterruptedException exc) {
            System.out.println(thrd.getName() + " interrupted.");
        }
        System.out.println(thrd.getName() + " terminating.");
    }
}

class ThreadVariations {
    public static void main(String[] args) {
        System.out.println("Main thread starting.");
        MyThread mt = MyThread.createAndStart("Child #1");

        for (int i = 0; i < 50; i++) {
            System.out.print(".");
            try {
                Thread.sleep(100);
            } catch (InterruptedException exc) {
                System.out.println("Main thread interrupted.");
            }
        }
        System.out.println("Main thread ending.");
    }
}
```

## 3. Creating a Thread by Extending `Thread`

1. Create a class that **extends** `Thread`.
    
2. Override the `run()` method.
    
3. Start the thread using `start()`.
    
```java
class MyThread extends Thread {
    MyThread(String name) {
        super(name);  // Set thread name
    }

    public void run() {
        System.out.println(getName() + " starting.");
        try {
            for (int count = 0; count < 10; count++) {
                Thread.sleep(400);
                System.out.println("In " + getName() + ", count is " + count);
            }
        } catch (InterruptedException exc) {
            System.out.println(getName() + " interrupted.");
        }
        System.out.println(getName() + " terminating.");
    }
}

class ExtendedThread {
    public static void main(String[] args) {
        System.out.println("Main thread starting.");
        MyThread mt = new MyThread("Child #1");
        mt.start(); // Start the thread

        for (int i = 0; i < 50; i++) {
            System.out.print(".");
            try {
                Thread.sleep(100);
            } catch (InterruptedException exc) {
                System.out.println("Main thread interrupted.");
            }
        }
        System.out.println("Main thread ending.");
    }
}
```

## 4. Creating Multiple Threads

Multiple threads can be started using the same approach as used for a single thread. Each thread will run independently, sharing CPU time.

Running several threads concurrently by creating multiple `MyThread` instances.

```java
class MyThread implements Runnable {
    Thread thrd;

    MyThread(String name) {
        thrd = new Thread(this, name);
    }

    public static MyThread createAndStart(String name) {
        MyThread myThrd = new MyThread(name);
        myThrd.thrd.start();
        return myThrd;
    }

    public void run() {
        System.out.println(thrd.getName() + " starting.");
        try {
            for (int count = 0; count < 10; count++) {
                Thread.sleep(400);
                System.out.println("In " + thrd.getName() + ", count is " + count);
            }
        } catch (InterruptedException exc) {
            System.out.println(thrd.getName() + " interrupted.");
        }
        System.out.println(thrd.getName() + " terminating.");
    }
}

class MoreThreads {
    public static void main(String[] args) {
        System.out.println("Main thread starting.");
        MyThread mt1 = MyThread.createAndStart("Child #1");
        MyThread mt2 = MyThread.createAndStart("Child #2");
        MyThread mt3 = MyThread.createAndStart("Child #3");

        for (int i = 0; i < 50; i++) {
            System.out.print(".");
            try {
                Thread.sleep(100);
            } catch (InterruptedException exc) {
                System.out.println("Main thread interrupted.");
            }
        }
        System.out.println("Main thread ending.");
    }
}
```

## Best Practices and Notes

- Threads share CPU time and run **concurrently**, not necessarily in order.
    
- `Thread.sleep(milliseconds)` pauses the thread; always wrap it in a `try-catch` block.
    
- A program continues to run until **all non-daemon threads finish**, including the main thread.
    
- You may want to ensure the **main thread finishes last** for demonstration purposes, but it's not required.
    
- Use `join()` if you need the main thread to wait for others to finish.
    
