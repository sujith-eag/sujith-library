---
title: "OS 5.01 - Process Scheduling"
description: ""
date: 2025-01-12T21:27:49+05:30
lastmod: 2025-01-12T21:27:49+05:30
draft: false
---

# OS 5.01 - Process Scheduling

In multiprogrammed OS, the aim of CPU scheduling is to maximize CPU utilization by switching between processes and have some process running all the time.     

The operating system allocates the CPU to processes, allowing for multiple processes to be in memory. When one process has to wait, the operating system takes the CPU away from that process and gives the CPU to another process. thus improving efficiency.

Almost all computer resources are scheduled before use.

### 5.1.1 CPU-I/O Burst Cycle

**CPU-I/O Cycle**: Process execution alternates between CPU bursts and I/O waits till the program terminates. This alternating cycle is crucial in choosing the right CPU scheduling algorithm.

  - **I/O-bound programs**: Short CPU bursts with frequent I/O operations.
  - **CPU-bound programs**: Few, long CPU bursts.


### 5.1.2 CPU Scheduler

- **CPU Scheduler** or **Short-term Scheduler**: Whenever the CPU becomes idle, a short-term scheduler selects processes from the ready queue and allocates the CPU to one of them.
- **Ready Queue**: Stores processes in memory that are ready to execute, usually represented by **Process Control Blocks (PCBs)**.

### 5.1.3 Preemptive Scheduling

CPU scheduling occurs in the following situations:
1. **Running → Waiting**: Process requests I/O or another resource.
2. **Running → Ready**: An interrupt causes the process to move back to the ready state.
3. **Waiting → Ready**: Process completes I/O.
4. **Process Termination**: When a process ends.

- **Nonpreemptive Scheduling**: Once a process gets the CPU, it holds it until it terminates or switches to waiting.
- **Preemptive Scheduling**: CPU allocation can be interrupted, which may lead to race conditions if processes share data.

### 5.1.4 Dispatcher

The **dispatcher** is responsible for transferring control of the CPU to the process selected by the short-term scheduler. Its functions include:

- **Switching context**: Saving and loading the process states.
- **Switching to user mode**: Transitioning from kernel to user mode.
- **Jumping to the process location**: Restarting the process at the correct point in its code.

**Dispatch Latency**: The time it takes to switch from one process to another (time it takes for the dispatcher to stop one process and start another).     

The dispatcher should be as fast as possible, as it is invoked during every process switch.



## 5.2 Scheduling Criteria

CPU-scheduling algorithms vary in performance, and the choice of algorithm depends on process characteristics. Key criteria for comparing these algorithms include:

- **CPU Utilization**: Maximize CPU usage. In real systems, it should range from 40% (light load) to 90% (heavy load).
- **Throughput**: Measure of work done, defined as the number of processes completed per unit of time.
- **Turnaround Time**: Total time from process submission to completion, including waiting in memory, ready queue, CPU execution, and I/O operations.
- **Waiting Time**: Time spent waiting in the ready queue, not during execution or I/O.
- **Response Time**: Time from process submission to the first response, important in interactive systems where quick feedback is needed.

Optimization Goals:
- **Maximize**: CPU utilization and throughput.
- **Minimize**: Turnaround time, waiting time, and response time.

#### Performance Optimization

In most cases, **average values** are optimized, like minimizing average waiting or response time.

In some cases (e.g., user fairness), it’s important to minimize the maximum waiting time or response time.

___
