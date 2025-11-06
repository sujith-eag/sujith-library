---
title: "OS 6.02 - Critical-Section Problem"
description: ""
date: 2025-01-12T21:27:49+05:30
lastmod: 2025-01-12T21:27:49+05:30
draft: false
---


# OS 6.02 - Critical-Section Problem

Consider a system with **n processes**: {P0, P1, ..., Pn-1}. Each process has a **critical section**, a segment of code where the process manipulates shared resources (such as common variables, a table, or a file). 

The key requirement is that **no two processes** can be executing in their critical sections at the same time. In other words, if one process is in its critical section, no other process can enter its critical section simultaneously. The challenge is to design a protocol that coordinates access to the critical section.

Each process must request permission to enter its critical section, and this request is handled in the **entry section** of the code.     
The **exit section** follows the critical section, and any remaining code is called the **remainder section**.

### Requirements for a Solution:

A solution to the critical-section problem must meet the following three conditions:

1. **Mutual Exclusion:**
   - If process Pi is executing in its critical section, no other process can execute in its critical section. 
   
2. **Progress:**
   - If no process is executing in its critical section and some processes wish to enter their critical sections, then the processes that are not in their remainder sections should participate in selecting which process will enter the critical section next.
   - This selection cannot be postponed indefinitely.

3. **Bounded Waiting:**
   - There is a bound (limit) on the number of times other processes are allowed to enter their critical sections after a process has requested to enter its critical section, but before that request is granted.

___

### Race Conditions in Operating Systems:

At any given time, many kernel-mode processes might be active in the operating system, and kernel code is prone to **race conditions**. 

Example: 
- A **kernel data structure** that maintains a list of all open files in the system. When a file is opened or closed, the list must be modified (adding or removing the file).
  - If two processes try to open files simultaneously, their updates to the list could conflict, resulting in a **race condition**.
  
Other kernel data structures that are vulnerable to race conditions include:
- **Memory allocation** structures
- **Process lists**
- **Interrupt handling mechanisms**

### Approaches to Handling Critical Sections:

1. **Preemptive Kernels:**
   - In a **preemptive kernel**, a process can be preempted (interrupted) while it is running in **kernel mode**.
   - **Preemptive kernels** are **more complex** because they need to handle race conditions in shared kernel data, especially on **multiprocessor (SMP) architectures**, where multiple kernel processes can run concurrently on different processors.

2. **Nonpreemptive Kernels:**
   - In a **nonpreemptive kernel**, a process running in kernel mode cannot be preempted. The process will continue running until it exits kernel mode, blocks, or voluntarily yields control of the CPU.
   - **Nonpreemptive kernels** are effectively free from race conditions since only one process can be executing in kernel mode at any time.


### Why Choose a Preemptive Kernel?

- A **preemptive kernel** may be preferred because it ensures that no process can run for an arbitrarily long period, improving **system responsiveness**.
- It is particularly beneficial in **real-time systems**, where a real-time process may need to **preempt** a kernel-mode process.
- The main benefit of a preemptive kernel is that it prevents any kernel-mode process from monopolizing the CPU, which can lead to better **responsiveness** and **suitability for real-time programming**.

___
