---
title: "OS 5.03.05 - Multi-Level Queue Scheduling"
description: ""
date: 2025-01-12T21:27:49+05:30
lastmod: 2025-01-12T21:27:49+05:30
draft: false
---


# OS 5.03.05 - Multi-Level Queue Scheduling

Multilevel Queue Scheduling is used in situations where processes can be easily classified into different groups.

A common division is made between **foreground (interactive)** processes and **background (batch)** processes. These two types of processes have different response-time requirements and, therefore, may have different scheduling needs. Additionally, **foreground processes** may have higher priority (externally defined) over **background processes**.

- The ready queue is **partitioned into several separate queues**.
- Each queue is dedicated to a specific type of process, such as based on **memory size**, **process priority**, or **process type**.
- Each queue has its own **scheduling algorithm**.
  - For example, the foreground queue might use **Round-Robin (RR)** scheduling, while the background queue could use **First-Come, First-Served (FCFS)** scheduling.
  
#### Scheduling Among Queues:

- Scheduling between the different queues is usually implemented as **fixed-priority preemptive scheduling**.
  - **Higher-priority queues** always take precedence over **lower-priority queues**.
  - For example, the **foreground queue** may have absolute priority over the **background queue**.

Example list in order of **priority**:
1. **System processes**
2. **Interactive processes**
3. **Interactive editing processes**
4. **Batch processes**
5. **Student processes**

In this system:
- Processes in the **system queue** have the highest priority and will run before any other processes.
- A **batch process** (lowest priority) can only run when the queues for **system**, **interactive**, and **interactive editing processes** are empty.
- If a process from a **higher-priority queue** enters the ready queue, it will **preempt** processes from **lower-priority queues**.

#### Time-Slicing Among Queues:

Another possibility is to allocate **CPU time slices among the queues**:
- Each queue receives a certain portion of the **CPU time**, which it can then schedule among its individual processes.

Example:
- The **foreground queue** may receive **80% of the CPU time** and use **Round-Robin (RR)** scheduling to allocate time to its processes.
- The **background queue** may receive **20% of the CPU time** and use **First-Come, First-Served (FCFS)** scheduling for its processes.

---


In traditional **multilevel queue scheduling**, processes are permanently assigned to a specific queue when they enter the system. For example, if separate queues are used for **foreground** and **background** processes, the processes do not move from one queue to another. This setup is efficient with **low scheduling overhead**, but it is **inflexible**.

### 5.3.5 Multilevel Feedback Queue Scheduling:

Unlike the traditional approach, the **multilevel feedback queue scheduling** algorithm allows **processes to move between queues**. The primary idea is to separate processes based on the **characteristics of their CPU bursts**:
- If a process consumes too much **CPU time**, it is moved to a **lower-priority queue**.
- This allows **I/O-bound** and **interactive processes** (which tend to use less CPU time) to remain in the **higher-priority queues**.
- Processes that have been waiting too long in a **lower-priority queue** are **upgraded** to a **higher-priority queue**. This mechanism, known as **aging**, helps to **prevent starvation**.

A multilevel feedback queue scheduler is defined by the following parameters:

1. **Number of Queues:** The total number of queues in the system.
2. **Scheduling Algorithm for Each Queue:** The algorithm used for scheduling processes within each individual queue (e.g., Round-Robin, FCFS).
3. **Method for Upgrading Processes:** The criteria or mechanism used to determine when a process should be moved to a **higher-priority queue**.
4. **Method for Demoting Processes:** The criteria or mechanism used to determine when a process should be moved to a **lower-priority queue**.
5. **Method for Assigning Processes to Queues:** The criteria used to decide which queue a process will enter when it first arrives in the system or requires service.

### Advantages:

- **Flexibility:** Unlike fixed multilevel queues, this algorithm adapts to the behavior of processes, allowing better handling of varying workloads.
- **Prevents Starvation:** The aging mechanism ensures that processes in lower-priority queues will eventually be promoted to avoid indefinite waiting.


The **multilevel feedback queue** scheduler is the most **general CPU-scheduling algorithm**, offering high configurability to match the specific requirements of a given system design.

---
