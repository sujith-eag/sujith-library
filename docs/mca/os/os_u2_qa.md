# Unit-2: Process Scheduling


## Process

- Define a process. List the different fields of a Process Control Block (PCB).
- What is a Process Control Block (PCB)? Explain its contents.
- Write a short note on the following with respect to processes:   i) Process State   ii) Process Control Block (PCB)

**Answer :**

A process is an active instance of a program in execution. While a program is a passive set of instructions stored on disk (such as an executable file). A process includes everything needed to execute those instructions — including memory, CPU registers, and input/output resources.

When a program is loaded into memory for execution, it becomes a process and is assigned a unique Process ID (PID) by the operating system.

### Process Memory Layout:

A process typically consists of the following memory sections:

* Text Section: Contains the actual code (instructions) of the program.
* Data Section: Stores global and static variables.
* Heap: Used for dynamic memory allocation during runtime that grows and shrinks as the program executes.
* Stack: Stores function parameters, local variables, and return addresses.


<figure>
  <img src="/os/3_01_Process_Memory.jpg" alt="3.01 A Process in Memory" />
  <figcaption>3.01 A Process in Memory</figcaption>
</figure>

Multiple processes can be associated with the same program, each process is considered a separate execution sequence.
- Different users running distinct copies of the same program, or
- A single user running multiple instances of a program, like a web browser.

In these cases, each process is independent, even though their text sections (program code) may be identical. The data, heap, and stack sections will differ for each process.


## Process Control Block (PCB)

The Process Control Block (PCB) is a data structure maintained by the operating system to store all information about a process. Every process in an OS is represented by a PCB, also known as a Task Control Block.

The PCB holds important information related to a process:

- **Process State**: Current status of the process (e.g., New, Ready, Running, Waiting, Terminated).

- **Process ID (PID)**: Unique identifier for the process.

- **Program Counter**: Address of the next instruction to execute in that process.

- **CPU Registers**: Contents of all registers (general-purpose and special-purpose) the process uses. Snapshot of register values (used to restore process state during context switches).

- **CPU Scheduling Information**: Priority of the process, scheduling queue pointers, and other parameters used by the scheduler.

- **Memory Management Information**: Includes base/limit registers, page tables, segment tables depending on the memory system used.

- **Accounting Information**: CPU usage, execution time, time limits, process start time, and owner/user ID.

- **I/O Status Information**: List of allocated I/O devices, open files, and I/O requests.

<figure>
  <img src="/os/3_03_PCB.jpg" alt="3.03 Process Control Block" />
  <figcaption>3.03 Process Control Block</figcaption>
</figure>

___

When an interrupt occurs, OS saves the PCB of a process when switching out of it (context switch), and restores it when the process resumes once the interrupt is handled, ensuring smooth multitasking and process isolation.

<figure>
  <img src="/os/3_04_ProcessSwitch.jpg" alt="3.04 Process Switching" />
  <figcaption>3.04 Process Switching</figcaption>
</figure>


## Process State

- Define a process and present its various states.
- Explain the different states of a process with a neat diagram.
- Explain how a system process is created and terminated.

**Answer :**

A process state represents the current activity of a process. A process transitions between various states during its lifecycle:

- New: The process is in the process of being created.
- Ready: The process is ready and waiting to be assigned to the CPU.
- Running: The process is actively executing instructions.
- Waiting (Blocked): The process is waiting for some event, such as I/O completion or signal reception.
- Terminated: The process has completed its execution or it was killed.


<figure>
  <img src="/os/3_02_ProcessState.jpg" alt="3.02 States Of Process" />
  <figcaption>3.02 States Of Process</figcaption>
</figure>

Note:
- Only one process can be in the running state on the CPU at any given moment.
- Multiple processes can be in the ready or waiting states at the same time.



## Scheduling and Execution

- Explain the various process schedulers.
- Why is it important for the scheduler to distinguish I/O-bound programs and CPU-bound programs?
- Describe the role and functioning of context switching.
- Define the following terms:  
	i) Dispatcher  
	ii) Short-term scheduler  
	iii) Context switching  
	iv) CPU-bound processes  
	v) I/O-bound processes  
	vi) Device queue

**Answer :**

The goal of multiprogramming is to improve CPU utilization by ensuring the CPU always has a process to execute. It allows multiple processes to reside in memory simultaneously so that when one process is waiting (e.g., for I/O), the CPU can switch to another ready process.

In time-sharing systems, the objective is to enable multiple users to interact with their processes concurrently. The operating system rapidly switches the CPU between user processes, providing the illusion that each user has their own dedicated system. This is achieved through frequent context switches, allowing real-time user interaction with running programs.

---

Whenever a running process enters a waiting state (e.g., for I/O), the **CPU Scheduler** (short-term scheduler) selects another process from the **ready queue** to execute. This mechanism ensures efficient CPU usage and system responsiveness.

If the number of processes exceeds the CPU’s capacity, some must wait their turn, leading to queueing and scheduling delays. Proper scheduling ensures fairness and efficient resource use.


### Scheduling Queues

In an operating system, various queues manage the state and progress of processes:

* **Job Queue** : When a user submits a process for execution, it is added to the job queue. Contains all processes in the system.

* **Ready Queue** : Contains processes that are in main memory and ready to execute. The CPU scheduler picks processes from this queue based on the scheduling algorithm.

* **Device Queue**: Each I/O device has a separate device queue. If a process requests an I/O operation and the device is busy, it waits in the corresponding device queue.

<figure>
  <img src="/os/3_06_QueueingDiagram.jpg" alt="3.06 Queueing Diagram Representing Process Scheduling" />
  <figcaption>3.06 Queueing Diagram Representing Process Scheduling</figcaption>
</figure>

### **CPU–I/O Cycle**:

A process typically executes in a cycle of CPU bursts and I/O bursts until it terminates:

- **I/O-bound processes**: Spend more time on I/O than computation. These have short CPU bursts and frequent I/O operations.

- **CPU-bound processes**: Perform intensive computation with long CPU bursts (arithmetic computations, logical operations, and program execution) and infrequent I/O. 

This cycle allows the operating system to balance workloads and maximize device utilization.


### Schedulers

Schedulers are responsible for selecting processes at various stages of execution:

**Long-Term Scheduler (Job Scheduler)** : Determines and selects processes and loads them into the system memory for processing. Controls the degree of multiprogramming (i.e., how many processes are loaded in memory). It may favor a mix of I/O-bound and CPU-bound processes for optimal resource use.

**Short-Term Scheduler (CPU Scheduler)** : When the CPU is idle, Selects from the ready queue the process that will execute next. Executes frequently (milliseconds) to ensure fast and fair CPU allocation. Must be fast and efficient due to its frequent execution.

**Medium-Term Scheduling** : In multiprogramming systems, sometimes it’s beneficial to temporarily remove processes from main memory (swapping them to disk) to reduce the level of multiprogramming and reduce the load on system and free up memory. 

Swapped-out processes are moved to secondary storage and reloaded later into memory and continue execution from where they left off, helping balance memory load and system performance.

<figure>
  <img src="/os/3_07_QueuingDiagram2.jpg" alt="3.07 Medium Term Scheduling in Queueing Diagram" />
  <figcaption>3.07 Medium Term Scheduling in Queueing Diagram</figcaption>
</figure>


### Context Switching

A context switch is the process of saving the state of a currently running process and loading the state of another process. This allows multiple processes to share the CPU effectively.

Key Elements of Context Switching:
* Saves the CPU state (program counter, registers, etc.) of the current process into its PCB.
* Loads the CPU state of the next process from its PCB.
* Updates scheduling and memory management information accordingly.

A context switch occurs when the operating system switches from one process to another.  Context switching happens frequently as the CPU alternates between tasks.

- Overhead: Context switches add overhead because the system must spend time saving and loading process states, no useful work is done while switching.

- Factors Affecting Speed : The time taken for a context switch can vary depending on system factors, such as memory access speed, the number of registers involved. System architecture and optimization of the OS kernel.


### Dispatcher

The dispatcher is a system component that is responsible for transferring control of the CPU to the process selected by the short-term scheduler. 

The dispatcher performs operations like context switching, switching the CPU from kernel mode to user mode, and Starts execution at the correct program counter for the selected process..

**Dispatch Latency** is the time taken to perform a context switch and start executing a new process. To stop one process and start another. This latency is crucial for optimizing process scheduling efficiency.


### Scheduling Criteria

* Present various criteria to evaluate the best CPU scheduling algorithm.

**Answer :**

To compare different scheduling algorithms, the following criteria are considered:

- **CPU Utilization** : The percentage of time the CPU is actively working (not idle). The goal is to maximize CPU Utilization (e.g., from 40% to 90%). A well-utilized CPU means the system is efficiently using hardware resources.

- **Throughput** : The number of processes completed per unit of time (processes per second), indicating system efficiency. Goal is to Maximize throughput. Higher throughput implies better overall system productivity.

- **Turnaround Time** : The total time taken for a process to complete — from submission to completion including the waiting time. Goal is to Minimize turnaround time. Lower turnaround time means faster job completion, which is essential for batch systems.
* `Turnaround Time = Completion Time - Arrival Time`

- **Waiting Time** : The total time a process spends in the ready queue waiting for CPU allocation. Goal is to Minimize waiting time. High waiting time indicates inefficiency and can lead to poor responsiveness, especially in interactive systems.
* `Waiting Time = Turnaround Time - CPU Burst Time`

- **Response Time** : The time from submission of a process to the first time the process gets the CPU (i.e., when it starts responding). Goal is to Minimize response time. Critical in time-sharing and interactive systems where users expect quick feedback (e.g., typing in a text editor or web browser).

Optimization goals:
- Maximize CPU Utilization and Throughput.
- Minimize Turnaround Time, Waiting Time, and Response Time.


## Scheduling Algorithms

CPU scheduling involves determining which process from the ready queue should be allocated CPU time.

### First-Come, First-Served Scheduling (FCFS)

The FCFS scheduling algorithm allocates CPU to processes in the order they arrive, using a FIFO queue. The process at the front of the queue gets the CPU, and when it completes, it is removed.

**Drawbacks of FCFS :**

* **Monopolization of CPU** : A CPU-bound process consumes the CPU while I/O-bound processes, which could proceed with little CPU time, wait. This leads to inefficient use of I/O devices.

* **Transition and Idle CPU** : Once a CPU-bound process finishes its burst, it moves to the I/O queue, causing idle periods for the CPU while I/O-bound processes complete their tasks.

* **Convoy Effect** : A long CPU-bound process delays smaller, I/O-bound processes, causing inefficient use of resources.

---

### Shortest Job First Scheduling

The Shortest Job First (SJF) scheduling algorithm assigns the CPU to the process with the shortest CPU burst.   If two processes have the same burst, FCFS is used to break the tie.

- Nonpreemptive SJF: The process that starts executing runs until it completes, even if another process arrives with a shorter burst.

- Preemptive SJF: If a process arrives with a shorter CPU burst than the currently running process, the CPU is preempted and allocated to the new process. This is also known as Shortest-Remaining-Time-First (SRTF) scheduling.

---

### Priority Scheduling

The Priority Scheduling algorithm allocates CPU time based on process priority. The process with the highest priority gets the CPU.   If two processes have the same priority, FCFS is used.

- Preemptive Priority Scheduling: A higher-priority process preempts a lower-priority process that is already running.

- Nonpreemptive Priority Scheduling: A higher-priority process waits until the current process completes or blocks before it executes.

**Issues:**

* Indefinite Blocking (Starvation): Low-priority processes may never get to execute because higher-priority processes continuously preempt them.

* Aging is used to solve starvation by gradually increasing the priority of long-waiting processes, ensuring that they eventually get executed.

---

### Round Robin Scheduling

The Round-Robin (RR) scheduling algorithm is a variant of FCFS, but with preemption.

The Ready Queue functions as a circular queue. The CPU scheduler allocates the CPU to each process for a time quantum. After the time quantum ends, the process is preempted and placed back at the end of the ready queue.

- Time Quantum (or Time Slice): A small time unit (typically between 10 to 100 milliseconds) allocated to each process.
- Preemption: No process is allowed to monopolize the CPU for more than 1 time quantum.

This approach prevents any single process from monopolizing the CPU, allowing for better time-sharing.

___

### CPU Scheduling Problems

1. Consider the following set of processes:  

| Process | Priority | Arrival Time (ms) | Burst Time (ms) |
| ------- | -------- | ----------------- | --------------- |
| P1      | 2        | 0                 | 10              |
| P2      | 1        | 2                 | 4               |
| P3      | 4        | 0                 | 2               |
| P4      | 1        | 5                 | 1               |
| P5      | 3        | 4                 | 6               |

The lowest number in priority indicates the highest priority of the process.

   i) Draw Gantt charts for SJF and Preemptive-Priority scheduling algorithms.  
   ii) Calculate the waiting time and average waiting time for each algorithm.  
   iii) Calculate the turnaround time and average turnaround time for each algorithm.  
   iv) Which is the more efficient algorithm?

___

2. Consider the following processes:  

| Process | Arrival Time (ms) | CPU Time (ms) |
| ------- | ----------------- | ------------- |
| P1      | 0                 | 3             |
| P2      | 2                 | 3             |
| P3      | 3                 | 5             |
| P4      | 4                 | 2             |
| P5      | 8                 | 3             |

   i) Draw the Gantt chart for the SJF algorithm.  
   ii) Calculate the average waiting and turnaround times for FCFS and Round-Robin scheduling (time slice = 1 ms).  

____

3. Consider the following set of processes, with the length of the CPU burst given in milliseconds. The processes arrived in the order P1, P2, P3, P4, P5, all at time 0:  

| Process | Burst Time | Priority |
|---------|------------|----------|
| P1      | 8          | 4        |
| P2      | 2          | 1        |
| P3      | 2          | 3        |
| P4      | 3          | 3        |
| P5      | 5          | 2        |

i) Draw Gantt charts for the following scheduling algorithms:  
   - First-Come-First-Serve (FCFS)  
   - Non-Preemptive Priority Scheduling  
   - Round Robin (Time Quantum = 1 ms)  

ii) Calculate the waiting time of each process for each scheduling algorithm. Also, find the average waiting time for each algorithm.  
iii) Calculate the turnaround time of each process for each scheduling algorithm. Also, find the average turnaround time for each algorithm.

___

4. Assume the following jobs are executed with one processor:  

| Process | Burst Time |
|---------|------------|
| P0      | 80         |
| P1      | 20         |
| P2      | 10         |
| P3      | 20         |
| P4      | 50         |

   i) Draw a Gantt chart for FCFS scheduling.  
   ii) Calculate the turnaround time for process P3.  
   iii) Determine the average waiting time.  

___

5. Five batch jobs arrive simultaneously. Their estimated running times (in milliseconds) and priorities (with 5 being the highest priority) are as follows:  

| Job | Estimated Time | Priority |
|-----|----------------|----------|
| A   | 10             | 3        |
| B   | 6              | 5        |
| C   | 2              | 2        |
| D   | 4              | 1        |
| E   | 8              | 4        |

   i) Draw Gantt charts for Round Robin (Quantum = 5 ms), Priority Scheduling, and SJF algorithms.  
   ii) Determine average waiting and turnaround times for each algorithm.  


