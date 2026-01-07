# Unit-3: Deadlocks

## Deadlock Basics & Conditions

* Define a deadlock. Describe the necessary and sufficient conditions for a deadlock to occur in a system.

**Answer :**

Deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource that is held by another process in the set. This leads to a cycle of dependencies where no process can proceed.

A deadlock occurs when the following four conditions are met simultaneously:

* **Mutual Exclusion** : At least one resource must be held in a non-shareable mode. Only one process can use the resource at a time. If another process requests, it must wait until the resource is released.

* **Hold and Wait** : A process must be holding at least one resource and waiting to acquire additional resources held by other processes.

* **No Preemption** : Resources cannot be preempted (taken away) from processes; they must only be released voluntarily by process holding it.

* **Circular Wait** : A set of processes exist such that each process in the set is waiting for a resource that is held by another process in the set, forming a circular chain of dependencies.


## Deadlock Prevention, Avoidance, Detection and Handling

* What are the different ways a deadlock can be handled? How can deadlocks be prevented?
* Explain the deadlock prevention algorithms.
* What is deadlock detection and recovery? Discuss different mechanisms to achieve the same.
* What are the different ways a deadlock can be handled? Discuss different ways of recovering from deadlocks.
* Differentiate between deadlock prevention and deadlock avoidance.
* Discuss different ways of recovering from deadlocks.

**Answer :**

Deadlocks can be handled in several ways in operating systems. 

- **Deadlock Prevention** : Proactively avoids deadlock by eliminating one of the four necessary conditions.

- **Deadlock Avoidance** : Dynamically allocates resources but ensures the system always stays in a safe state.

- **Deadlock Detection and Recovery** : Allows deadlock to occur but detects and recovers from it using various algorithms.



### 1. Deadlock Prevention

A deadlock occurs when all four of the following conditions are met:
- Mutual Exclusion
- Hold and Wait
- No Preemption
- Circular Wait

To prevent deadlocks, at least one of these conditions must be eliminated. Deadlock prevention is a proactive method that ensures that at least one of these conditions cannot hold, thus preventing the occurrence of a deadlock.


**Mutual Exclusion** : This condition states that at least one resource must be held in a non-shareable mode. 
* In many cases, mutual exclusion cannot be eliminated for certain resources (e.g., mutex lock, printers, disk drives).

**Hold and Wait** : To prevent this condition, we can require that a process must request all the resources it needs in the beginning at once.  
* If a process cannot obtain all the resources it needs, it releases the ones it already has and tries again later. 
* This approach avoids a process holding resources while waiting for others.

**No Preemption** : To prevent the no preemption condition. 
* if a process holding a resource is preempted (interrupted) and has to wait, the resources are preempted and allocated to other processes. 
* This ensures that a process cannot hold onto a resource while waiting for another one.

**Circular Wait** : To avoid circular wait, we impose a total ordering on all resource types. 
* Processes must request resources in a specific order, and if a process requests a resource that it cannot obtain, it releases the resources it holds and retries. 
* This ensures that a cycle in the resource allocation graph cannot form by seeing that lower-priority resources are released before requesting higher priority resources.


### 2. Deadlock Avoidance

Deadlock avoidance allows the system to allocate resources dynamically in a way that ensures that deadlock is always avoided. 

This requires the system be given more information about the resource needs of processes ahead of time. With knowledge of the complete sequence of requests and releases for each thread, the system can decide whether or not a thread should wait to avoid a potential deadlock.

To determine if the current request can be satisfied or if the thread must be delayed, the system must consider:
- The resources currently available
- The resources currently allocated to each process
- The future requests and releases of each process

One common approach to deadlock avoidance is the Banker’s Algorithm.

- System state is considered safe if there exists at least one sequence of processes that all processes can complete execution without causing a deadlock. If no such sequence exists, the state is unsafe, and deadlock could occur.

- Banker's Algorithm checks whether a resource allocation would result in a safe state. It does this by simulating the allocation and determining if there is a sequence of processes that can execute without resulting in deadlock.

- If the allocation would result in a deadlock, the system denies the request. It is like a "safety check" before allocating resources to ensure no circular wait is possible.

- In this approach, if a thread requests a resource that is currently available, it may still need to wait. As a result, resource utilization may be lower than optimal.


### 3. Deadlock Detection and Recovery

In deadlock detection and recovery, the system allows deadlocks to occur but has mechanisms to detect them and recover from them when they do occur. This involves:


**Deadlock Detection** : The system must periodically check for the presence of deadlocks using algorithms such as the Resource Allocation Graph (RAG) or Wait-for Graph. If a cycle is detected in the graph, a deadlock exists.

<figure>
  <img src="/os/7_09_TwoGraphs-min.jpg" alt="." />
  <figcaption>Two Graphs</figcaption>
</figure>


**Deadlock Recovery** : Once a deadlock is detected, the system must take action to recover from it.

- **Process Termination** : is to kill one or more processes involved in the deadlock to break the circular wait cycle (at cost of loosing partial computation). This can be done by either aborting a process or rolling back the process to some safe state.

- **Resource Preemption** : from the processes involved in the deadlock and reallocating them to other processes. The preempted process may be restarted later. (The issue to handle are Selecting a victim, Rollback of affected process, Not choosing a process repeatedly causing starvation)


## Resource Allocation Graph

* Discuss the Resource Allocation Graph.
* Narrate the different components of the Resource Allocation Graph. How do you analyze RAG with respect to safe state and unsafe state?
* Demonstrate how to identify deadlocks using the Resource Allocation Graph.
* Deadlock exists if a cycle exists. Yes or No? Justify your answer with a suitable example.
* Present the definitions for the following terms:  i) Safe state   ii) Aborted state  iii) Claim edge iv) Cycle state

**Answer :**

The Resource Allocation Graph (RAG) is a directed graph used to represent the allocation and request of resources in a system. It allows for identifying deadlocks by visualizing the relationships between processes and resources. 

Components of RAG :
- **Processes** are represented by nodes (Circles).
- **Resources** are represented by nodes (Rectangles).
- **Request Edge** : A directed edge from a process to a resource signifies a request for that resource by the process. (Pi → Rj) Pi is waiting or Rj.
- **Assignment Edge** : A directed edge from a resource to a process indicates that the resource has been allocated to the process. ((Ri → Pj)) indicates Ri assigned to Pj


**Deadlock Detection in RAG** : A cycle in the Resource Allocation Graph can be used to detect deadlocks.

- If no cycle is present in the graph, the system is considered to be deadlock-free.

- If each resource type has exactly one instance, then a cycle implies that a deadlock has occurred.

The existence of a cycle is necessary but not sufficient for deadlock:
- If there is a cycle in the graph, it indicates that each process is holding a resource and waiting for another resource held by another process creating a circular wait, this cycle can indicate a potential deadlock.

<figure>
  <img src="/os/7_01_ResourceAllocation-min.jpg" alt="7.01 Resource Allocation Graph" />
  <figcaption>7.01 Resource Allocation Graph</figcaption>
</figure>

- If each resource type has several instances, then a cycle does not necessarily imply that a deadlock has occurred. In this case, a cycle in the graph is a necessary but not a sufﬁcient condition for the existence of deadlock.

____

Processes: P1, P2    Resources: R1, R2

Allocation and Request:
- P1 holds R1 and requests R2.
- P2 holds R2 and requests R1.

The Resource Allocation Graph will look like this:
```
P1 → R2 → P2 → R1 → P1
```

We have a cycle (P1 → R2 → P2 → R1 → P1), indicating a deadlock as no process can proceed because they are all waiting for resources held by other processes in the cycle, and no resources are available to break the cycle.


### Deadlock Avoidance Using RAG

Resource Allocation Graph Algorithm is also used for deadlock avoidance by using a claim edge in addition to request and assignment edge. It is a graph-based approach that helps determine whether granting a resource request will lead to a safe state or an unsafe state, potentially causing a deadlock.

- **Claim edge** : This edge resembles a request edge but is represented in the graph by a dashed line. (Ti → Rj) indicates that thread Ti may request resource Rj at some point in the future. 


Initial Claim: All claim edges must be present in the resource-allocation graph before execution.

When thread Ti requests resource Rj, the request can be granted only if converting the claim edge (Ti → Rj) to an assignment edge (Rj → Ti) does not create a cycle in the graph (detected using a cycle-detection algorithm).

If granting request does not create cycle, the allocation is safe and the resource is granted.

If a cycle is detected, the allocation would put the system in an unsafe state, and thread Ti must wait for its request to be satisfied.

<figure>
  <img src="/os/7_07_DeadlockAvoidance-min.jpg" alt="Deadlock Avoidance" />
  <figcaption>Deadlock Avoidance</figcaption>
</figure>

Suppose thread T2 requests resource R2. Although R2 is free, allocating it to T2 would create a cycle in the graph. A cycle indicates an unsafe state, and a deadlock could occur if T1 requests R2 and T2 requests R1.
<figure>
  <img src="/os/7_08_UnsafeState-min.jpg" alt="Unsafe State" />
  <figcaption>Unsafe State</figcaption>
</figure>

The resource-allocation graph algorithm does not apply to systems with multiple instances of each resource type.



### Readers-Writers Problem

* Explain the Readers Writers Problem with code snippets and explain how deadlock is avoided in the scenario.

**Answer :**

The Readers-Writers Problem is a classic synchronization problem in which a shared resource (such as a database) must be accessed by multiple processes. In this problem, two types of processes are involved:

- Readers: Processes that only read from the resource and do not modify it.
- Writers: Processes that modify the resource.

The challenge is to allow concurrent access to the shared resource by multiple readers, while ensuring that only one writer can access the resource at a time and that no reader can access the resource while a writer is writing.

Deadlock is avoided through proper synchronization mechanisms:

A Writer follows this structure
```c
do {
    wait(rw_mutex);      // Acquire exclusive access for writing
    // Writing is performed
    signal(rw_mutex);    // Release exclusive access
} while (true);
```
- `rw_mutex` ensures that only one writer can access the database at a time.

A Reader follows this structure
```c
do {
    wait(mutex);         
	    //mutual exclusion when updating read_count
    read_count++; // Increment active readers
    if (read_count == 1)
        wait(rw_mutex);  
	        // First reader locks the writer mutex
    signal(mutex);       
	    // Release mutex after updating read_count
    
    // Reading is performed
    
    wait(mutex);         
	    // mutual exclusion
    read_count--;  // Decrement active readers
    if (read_count == 0)
        signal(rw_mutex); 
	        // Last reader unlocks the writer mutex
    signal(mutex);       
	    // Release mutex after updating read_count
} while (true);
```

- Semaphores are used to ensure that the writers are blocked when there are active readers, and readers are blocked when a writer is writing. This prevents circular waits (the fourth condition of deadlock).

- The readCount variable ensures that writers are blocked as long as at least one reader is accessing the resource. The first reader blocks writers and the last reader releases the writer lock, preventing a circular wait between readers and writers.

- The mutex is used to protect the critical section where `readCount` is incremented or decremented, ensuring that race conditions do not occur when updating the reader count.

Thus, by carefully managing the resources (through the use of semaphores), the system ensures that deadlock does not occur, even though there are multiple processes interacting with shared resources.

____

* Explain the dining philosophers problem with code snippets and explain how the deadlock situation is avoided in the problem.

* Let a system have P1, P2, P3, P4 processes and r1 and r2 resources. Both resources have 2 instances. The set E is given by:  `E = {<P1 -> r1>, <r1 -> P2>, <r1 -> P3>, <P3 -> r2>, <r2 -> P4>, <r2 -> P1> }` Does the system lead to a deadlock?

- In a real computer system, neither the resources available nor the demands of processes for resources remain consistent over long periods. If deadlock is controlled by the Banker’s algorithm, analyze whether the following changes can be made safely, and under what circumstances:  
  i) Increase Available (new resources added)  
  ii) Decrease Available (resource permanently removed)  
  iii) Increase Max for one process (the process may need more resources)  
  iv) Decrease Max for one process (the process needs fewer resources)  
  v) Increase the number of processes  
  vi) Decrease the number of processes


## Problems on Resource Allocation

1. Consider a system with five processes P_0 through P_4 and three resource types ( A ), ( B ), and ( C ). Resource type ( A ) has 10 instances, ( B ) has 5 instances, and  C  has 8 instances. Suppose at time ( t_0 ), the following snapshot of the system has been taken:

| Processes | Allocation A | Allocation B | Allocation C | Max A | Max B | Max C | Available A | Available B | Available C |
| --------- | ------------ | ------------ | ------------ | ----- | ----- | ----- | ----------- | ----------- | ----------- |
| P0        | 0            | 1            | 2            | 7     | 5     | 3     | 3           | 3           | 2           |
| P1        | 2            | 0            | 0            | 3     | 2     | 2     | -           | -           | -           |
| P2        | 3            | 0            | 1            | 9     | 0     | 2     | -           | -           | -           |
| P3        | 2            | 1            | 1            | 2     | 2     | 2     | -           | -           | -           |
| P4        | 0            | 0            | 2            | 4     | 3     | 3     | -           | -           | -           |

Answer the following questions using Banker’s Algorithm:
i) What will be the content of the Need matrix?
ii) If a request from process \( P_2 \) arrives for (2, 0, 1), can it be granted?

____

2. Considering a system with five processes P0 through P4 and three resources types A, B, C. Resource type A has 10 instances, B has 5 instances and type C has 9 instances. Suppose at time t0 following snapshot of the system has been taken:

| Processes | Allocation A | Allocation B | Allocation C | Max A | Max B | Max C | Available A | Available B | Available C |
| --------- | ------------ | ------------ | ------------ | ----- | ----- | ----- | ----------- | ----------- | ----------- |
| P0        | 0            | 1            | 2            | 7     | 5     | 3     | 3           | 3           | 2           |
| P1        | 2            | 0            | 0            | 3     | 2     | 2     | -           | -           | -           |
| P2        | 3            | 0            | 2            | 9     | 0     | 2     | -           | -           | -           |
| P3        | 2            | 1            | 1            | 2     | 2     | 2     | -           | -           | -           |
| P4        | 0            | 0            | 2            | 4     | 3     | 3     | -           | -           | -           |

Answer the following questions using Banker’s algorithm:
i) What will be the content of the Need matrix?
ii) If a request from process P1 arrives for (1 0 2), can it be granted?

___

3. Consider the following snapshot of a system:

| Processes | Maximum R0 | Maximum R1 | Maximum R2 | Allocation R0 | Allocation R1 | Allocation R2 | Available R0 | Available R1 | Available R2 |
| --------- | ---------- | ---------- | ---------- | ------------- | ------------- | ------------- | ------------ | ------------ | ------------ |
| P0        | 4          | 1          | 2          | 1             | 0             | 2             | 2            | 2            | 0            |
| P1        | 1          | 5          | 1          | 0             | 3             | 1             | -            | -            | -            |
| P2        | 1          | 2          | 3          | 1             | 0             | 2             | -            | -            | -            |

Answer the following questions using Banker's Algorithm:
i) Is the system in a safe state?
ii) Will the system be able to satisfy a request by process P0 for one unit of resource type R1?
iii) Will the system be able to satisfy a request by process P1 for one unit of resource type R0?

___

4. Consider the following system state, there are three resources and three processes

| Processes | Maximum R1 | Maximum R2 | Maximum R3 | Allocation R1 | Allocation R2 | Allocation R3 | Available R1 | Available R2 | Available R3 |
| --------- | ---------- | ---------- | ---------- | ------------- | ------------- | ------------- | ------------ | ------------ | ------------ |
| P1        | 2          | 1          | 2          | 1             | 0             | 1             | 2            | 1            | 2            |
| P2        | 3          | 2          | 4          | 0             | 0             | 1             | -            | -            | -            |
| P3        | 4          | 2          | 1          | 1             | 1             | 1             | -            | -            | -            |

Answer following questions using Bankers algorithm.
i) Is the system in a safe state?
ii) Consider each of the following requests and say if it can be
granted. i. P3 requests 1 0 0 ii. P1 requests 0 1 0
iii) P2 requests 2 0 0 iv. P2 requests 1 0 1.

___

5. Consider the following snapshot of a system.

| Processes | Allocation A | Allocation B | Allocation C | Max A | Max B | Max C | Available A | Available B | Available C |
| --------- | ------------ | ------------ | ------------ | ----- | ----- | ----- | ----------- | ----------- | ----------- |
| P0        | 0            | 1            | 0            | 7     | 5     | 3     | 3           | 3           | 2           |
| P1        | 2            | 0            | 0            | 3     | 2     | 2     | -           | -           | -           |
| P2        | 3            | 0            | 2            | 9     | 0     | 2     | -           | -           | -           |
| P3        | 2            | 1            | 1            | 2     | 2     | 2     | -           | -           | -           |
| P4        | 0            | 0            | 2            | 4     | 3     | 3     | -           | -           | -           |


Consider the a system with 5 processes P0 through P4 and 3 resource types A,B,C. Resource type A has 10 instances, B has 5 instances and C has 7 instances.
Answer the following questions using the Banker’s algorithm.
i) Find the content of the Need matrix?
ii) Judge the system is in Safe state?

___

6. Assume that there are 5 processes, P0 through P4, and 4 types of resources. At time T0, the system state is as follows:

| Processes | Allocation A | Allocation B | Allocation C | Max A | Max B | Max C | Available A | Available B | Available C |
| --------- | ------------ | ------------ | ------------ | ----- | ----- | ----- | ----------- | ----------- | ----------- |
| P0        | 5            | 2            | 3            | 3     | 1     | 2     | 1           | 2           | 2           |
| P1        | 4            | 6            | 2            | 3     | 4     | 1     | -           | -           | -           |
| P2        | 2            | 1            | 7            | 0     | 0     | 5     | -           | -           | -           |
| P3        | 6            | 3            | 1            | 5     | 1     | 0     | -           | -           | -           |
| P4        | 3            | 5            | 1            | 1     | 4     | 0     | -           | -           | -           |

Answer the following questions:
i) Construct the need matrix.
ii) Is the system in a safe state? If yes, what is the safe sequence?
iii) If a request for process p2 arrives for (1, 2, 0) can it be granted immediately.

____

7. Consider the following Snapshot of the system:

| Processes | Allocation A | Allocation B | Allocation C | Allocation D | Max A | Max B | Max C | Max D | Available A | Available B | Available C | Available D |
| --------- | ------------ | ------------ | ------------ | ------------ | ----- | ----- | ----- | ----- | ----------- | ----------- | ----------- | ----------- |
| P0        | 0            | 1            | 2            | 0            | 1     | 5     | 2     | 0     | 1           | 2           | 1           | 5           |
| P1        | 1            | 0            | 0            | 1            | 7     | 5     | 3     | 0     | -           | -           | -           | -           |
| P2        | 1            | 3            | 5            | 2            | 3     | 4     | 2     | 3     | -           | -           | -           | -           |
| P3        | 0            | 1            | 4            | 0            | 6     | 5     | 6     | 5     | -           | -           | -           | -           |
| P4        | 0            | 1            | 4            | 6            | 5     | 6     | 5     | 6     | -           | -           | -           | -           |

Answer following questions using Bankers algorithm.
i) Is the system in a safe state?
ii) Can a request for (0, 4, 2, 0) by P1 be granted immediately?   Give reason.

___

8. For the following snapshot find the safe sequence using Banker’s algorithm. The number of resource units are R1, R2, R3 which are 7, 7, 10 respectively.

| Process | Allocated A | Allocated B | Allocated C | Max A | Max B | Max C |
| ------- | ----------- | ----------- | ----------- | ----- | ----- | ----- |
| P1      | 2           | 2           | 3           | 3     | 6     | 8     |
| P2      | 2           | 0           | 3           | 4     | 3     | 3     |
| P3      | 1           | 2           | 4           | 3     | 4     | 4     |

___

9 Consider the Snapshot of the system:

| Process | Allocation A | Allocation B | Allocation C | Allocation D | Max A | Max B | Max C | Max D | Available A | Available B | Available C | Available D |
| ------- | ------------ | ------------ | ------------ | ------------ | ----- | ----- | ----- | ----- | ----------- | ----------- | ----------- | ----------- |
| P0      | 0            | 0            | 1            | 2            | 0     | 0     | 1     | 2     | 1           | 5           | 2           | 0           |
| P1      | 1            | 0            | 0            | 0            | 1     | 7     | 5     | 0     | -           | -           | -           | -           |
| P2      | 1            | 3            | 5            | 4            | 2     | 3     | 5     | 6     | -           | -           | -           | -           |
| P3      | 0            | 6            | 3            | 2            | 0     | 6     | 5     | 2     | -           | -           | -           | -           |
| P4      | 0            | 0            | 1            | 4            | 0     | 6     | 5     | 6     | -           | -           | -           | -           |


Answer the following questions using the banker’s algorithm:
(i)What is the content of the matrix Need?
(ii)Is the system in a safe state?
If a request from a process P1 arrives for (0, 4, 2, 0), can the request be granted immediately?


