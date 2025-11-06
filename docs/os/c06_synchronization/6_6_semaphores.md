---
title: "OS 6.06 - Semaphores"
description: ""
date: 2025-01-12T21:27:49+05:30
lastmod: 2025-01-12T21:27:49+05:30
draft: false
---


# OS 6.06 - Semaphores

Semaphores are a more advanced and flexible synchronization mechanism compared to mutex locks. They allow processes to synchronize their actions in more sophisticated ways.

A **semaphore** is an integer variable that controls access to a shared resource. Apart from being initialized, the semaphore can only be accessed using two operations: `wait()` and `signal()`, both of which are atomic (indivisible) operations.

___

#### The wait() and signal() Operations

- The **`wait()`** operation checks the value of the semaphore. If the value is greater than 0, it decrements the value and allows the process to proceed. If the value is 0 or less, the process will wait (i.e., it will keep checking the value until it can proceed). This prevents the process from proceeding if resources are unavailable.

```c
wait(S) {
    while (S <= 0)
        ; // busy wait
    S--;
}
```

- The **`signal()`** operation increments the semaphore value, signaling that a resource has been released or an event has occurred. This operation allows waiting processes to continue if necessary.

```c
signal(S) {
    S++;
}
```

Both the `wait()` and `signal()` operations modify the semaphore’s value. These operations must be executed atomically—meaning no other process can change the semaphore’s value while it’s being modified. This ensures that the operation is performed correctly and without interruption.
(in the case of `wait(S)`, both the testing of the semaphore’s value `(S ≤ 0)` and its modification `(S--)` must be executed without interruption.)

___

### 6.6.1 Semaphore Usage in Synchronization

##### Types of Semaphores

Semaphores are typically divided into two types:
- **Counting semaphores**: These semaphores can have any non-negative integer value, making them useful for managing multiple instances of a resource (e.g., a pool of identical resources). They are commonly used in scenarios where multiple resources are available, and each process needs to track how many resources are in use.

- **Binary semaphores**: These semaphores can only have two values: 0 or 1. This behavior makes them similar to mutex locks, where the semaphore can either be in a locked (0) or unlocked (1) state.

___

Counting semaphores are particularly useful when controlling access to resources that have a limited number of instances. 

For example, in a system with a finite number of identical resources. A semaphore is initialized with the number of available resources. 

Each process that wants to use a resource must perform a `wait()` operation, which decreases the semaphore’s value. 

When the process is done using the resource, it performs a `signal()` operation to increase the semaphore’s value, making the resource available again. 

If the semaphore’s value is 0, it indicates that no resources are available, and any process attempting to use a resource will block (wait) until a resource is freed.

___

#### Example: Process Synchronization with Semaphores

Consider two processes, P1 and P2, running concurrently. Let’s say we want to ensure that process P2 executes its statement **S2** only after process P1 has executed its statement **S1**. 

We can achieve this synchronization using a common semaphore, `synch`, initialized to 0. 

In **P1**:
```c
S1;                // Execute some operation
signal(synch);     // Signal that S1 is complete
```

In **P2**:
```c
wait(synch);       // Wait until P1 signals
S2;                // Execute the operation only after S1 is done
```

Since `synch` is initialized to 0, process P2 will be blocked at `wait(synch)` until process P1 executes `signal(synch)` after completing S1. Only then can process P2 proceed with S2.


---

### 6.6.2 Semaphore Implementation

The `wait()` and `signal()` operations have a **busy-waiting** issue similar to that of mutex locks. 

To avoid this inefficiency, we can modify these operations so that processes do not repeatedly check the semaphore value in a busy-wait loop.

When a process executes the `wait()` operation and finds the semaphore value is **not positive**, it does not engage in busy waiting. Instead, the process blocks itself, placing it in a waiting queue associated with the semaphore. The process state is switched to the waiting state, and control is transferred to the CPU scheduler, which selects another process to execute. 

When another process executes the `signal()` operation, the blocked process is restarted by the `wakeup()` operation, which transitions it from the waiting state to the ready state and places it in the ready queue allowing it ti resume execution.

To implement this, a semaphore is defined as:

```c
typedef struct {
    int value;          // Semaphore's value (integer)
    struct process *list;  // List of processes waiting on the semaphore
} semaphore;
```

Each semaphore has:
1. An **integer value** to track the available resources (or events).
2. A **list** of processes that are currently waiting for the semaphore.
The `signal()` operation removes a process from the list and awakens it.

The `wait()` operation is now defined as:

```c
wait(semaphore *S) {
    S->value--;  // Decrement the semaphore value
    if (S->value < 0) {  // If the value is negative, the process must wait
        add this process to S->list;  // Add the process to the waiting list
        block();  // Block the process (move it to the waiting state)
    }
}
```

The `signal()` operation is defined as:

```c
signal(semaphore *S) {
    S->value++;  // Increment the semaphore value
    if (S->value <= 0) {  // If there are processes waiting
        remove a process P from S->list;  // Remove a process from the waiting list
        wakeup(P);  // Wake up the process and move it to the ready state
    }
}
```

- **`block()`**: This operation suspends the invoking process and places it in the waiting state.
- **`wakeup(P)`**: This operation resumes the execution of a blocked process `P`, moving it to the ready state, where it can be scheduled by the CPU.

These operations are handled by the operating system as system calls.

___

#### Ensuring Atomicity

It is essential that semaphore operations (`wait()` and `signal()`) are **atomic**. This means that no two processes should be able to execute `wait()` or `signal()` on the same semaphore at the same time. If this atomicity is not ensured, it could lead to incorrect behavior and synchronization problems.

To achieve atomicity, we need to prevent context switching during the execution of the semaphore operations. One way to do this is by **disabling interrupts** temporarily during the execution of `wait()` and `signal()`. While this guarantees atomicity, it comes with a performance cost, as it reduces the system's responsiveness.

In **Symmetric Multiprocessing (SMP)** systems, where multiple processors might be involved, **alternative locking mechanisms** such as `compare and swap()` or **spinlocks** can be used to ensure that semaphore operations are atomic. 

However, while these mechanisms solve the atomicity issue, they do not completely eliminate **busy waiting**—they only move the busy waiting from the entry section (where processes wait to enter a critical section) to the critical sections of application programs.


---

### 6.6.3 Deadlock and Starvation

**Deadlock** occurs when two or more processes are stuck, each waiting indefinitely for an event (such as a `signal()` operation) that can only be triggered by one of the processes in the group. 

In other words, a set of processes is deadlocked when every process is waiting for an event that can only be caused by another process in the same set, creating a circular dependency.

#### Example of Deadlock

Consider two processes, P0 and P1, each trying to access two semaphores, `S` and `Q`, which are both initialized to 1:

**P0**:
```
wait(S);
wait(Q);
...
signal(S);
signal(Q);
```

**P1**:
```
wait(Q);
wait(S);
...
signal(Q);
signal(S);
```

- P0 executes `wait(S)` and successfully acquires semaphore `S`.
- P1 then executes `wait(Q)` and successfully acquires semaphore `Q`.
- Next, P0 tries to execute `wait(Q)`, but it must wait because P1 holds `Q`.
- Meanwhile, P1 tries to execute `wait(S)`, but it must wait because P0 holds `S`.

At this point, P0 is waiting for P1 to release `Q`, and P1 is waiting for P0 to release `S`. Neither process can proceed because they are waiting for each other to signal the other. This creates a **deadlock**, where both processes are stuck in a cycle of waiting.

___

#### Starvation (Indefinite Blocking)

Another issue related to deadlock is **starvation**, or **indefinite blocking**, which happens when a process is perpetually delayed because other processes keep taking priority. 

This can occur if processes are removed from the semaphore’s waiting list in a **LIFO (Last-In, First-Out)** order, meaning that newer processes are always allowed to proceed before older ones. As a result, processes at the front of the list may be blocked indefinitely while newer processes keep getting executed.


---

