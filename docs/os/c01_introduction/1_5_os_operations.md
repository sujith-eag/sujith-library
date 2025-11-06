---
title: "OS 1.05 - OS Operations"
description: ""
date: 2025-01-12T21:21:19+05:30
lastmod: 2025-01-12T21:21:19+05:30
draft: false
---

# OS 1.05 - OS Operations

Interrupts, System Calls, and Modes of Operation

### **Interrupt-Driven Systems**

Modern Operating Systems are **interrupt-driven**, meaning they rely on **interrupts** to perform tasks. If there are no I/O devices to service or no user requests, the OS remains idle, waiting for events to occur.


An **interrupt** is a signal to the processor indicating that an event has occurred, prompting the OS to take specific actions.      

A **trap** (or **exception**) is a software-generated interrupt triggered by errors (e.g., division by zero, invalid memory access) or by a user program requesting an operating system service.

### **Interrupt vs. Trap**

Both **traps** and **interrupts** allow the operating system to take control of the processor but are triggered differently and serve distinct purposes:

- **Interrupts** are hardware-driven, typically caused by external events (e.g., I/O operations, timers), while **traps** are software-driven, usually caused by program errors or system service requests.

#### 1. **Interrupt**:
   - **Cause**: Hardware-driven events, such as I/O operations or timers.
   - **Function**: Temporarily halts the processor to handle the event, after which execution resumes.
   - **Example**: Keyboard press, network packet, disk I/O completion.

#### 2. **Trap (Exception)**:
   - **Cause**: Software-generated, typically due to errors or system calls during program execution.
   - **Function**: Signals the OS for special handling (e.g., error handling or service request).
   - **Example**: Division by zero or invalid memory access.

**Interrupts** are hardware-managed and often require privileged instructions, while **traps** can be triggered by user programs for system calls but cannot directly cause interrupts.

| Feature          | **Interrupt**                                   | **Trap (Exception)**                                                         |
| ---------------- | ----------------------------------------------- | ---------------------------------------------------------------------------- |
| **Trigger**      | Hardware event (asynchronous)                   | Software event (synchronous)                                                 |
| **Cause**        | External devices (I/O, timer, etc.)             | Program errors or system calls (e.g., divide by zero, invalid memory access) |
| **Control Flow** | OS takes control to handle the event            | OS takes control via a system call or error during program execution         |
| **Handling**     | Handled by service routines for hardware events | Handled by error handling or system service routines                         |

 ___

### **Interrupt Service Routine**

For each type of interrupt, the OS contains specific code that determines the appropriate action. The OS uses an **Interrupt Service Routine (ISR)** to handle interrupts when they occur.

Since both the OS and users share the hardware and software resources, any error in a user program should only affect that particular program, not the entire system. However, issues such as infinite loops or erroneous programs modifying data from other programs can cause system-wide problems.


> [!note]
A properly designed OS ensures that a faulty or malicious program does not negatively affect other running programs or the OS itself.




## 1.5.1 Dual-Mode and Multi-Mode Operation

### **User Mode vs Kernel Mode**

To protect the OS from errant user programs and vice versa, the OS operates in two main modes: **User Mode** and **Kernel Mode** (also called **system mode**, **privileged mode**, or **supervisor mode**).

- **User Mode (1)**: The mode in which user applications run.
- **Kernel Mode (0)**: The privileged mode in which the OS operates and can execute sensitive instructions.

A **mode bit** is added to the CPU to indicate the current mode of operation. This dual-mode operation helps protect the OS by restricting certain instructions, called **privileged instructions**, to **Kernel Mode**.

> [!note]
**Examples of privileged instructions**:  
- Switching between modes (User to Kernel or Kernel to User)
- I/O control
- Timer management
- Interrupt management
 

<figure>
  <img src="/os/1_10_user_to_kernel_mode.jpg" alt="1.10 User Mode to Kernel Mode" />
  <figcaption>1.10 User Mode to Kernel Mode</figcaption>
</figure>

---

### **Multi-Mode Operation**

Some CPU's support more than two modes of operation.      
For example, systems supporting **virtualization** may have a mode for the **Virtual Machine Manager (VMM)** that has more privileges than user programs to create virtual machines and to change the state of CPU but fewer privileges than the Kernel.

> [!note]
CPU's like the Intel 64 family support **privilege levels** for virtualization, but they do not have a separate mode specifically for virtualization.

---

#### **Mode Transition and Control Flow**


1. **Boot time**: The system starts in **Kernel Mode**.
2. **User applications**: When the OS loads user applications, it switches to **User Mode**.
3. **System Call/Interrupt/Trap**: When a user application requests OS services or an error occurs, the system switches to **Kernel Mode** to process the request or handle the issue.
4. **Return to User Mode**: Once the OS has completed the task, it returns to **User Mode** to resume the user application.



## **System Calls**

A **System Call** is a mechanism that allows a user program to request services from the OS to perform tasks on the user program's behalf, typically involving privileged operations that are otherwise restricted.

System calls are usually implemented as **traps** that transfer control to a specific location in the **interrupt vector**.

##### Execution of a system call

- When a system call is executed, it is treated by the hardware as a **software interrupt**.
- The **interrupt vector** passes control to a **service routine** in the OS, and the system switches to **Kernel Mode**. (The **system-call service routine** is a part of the operating system. )
- The kernel examines the interrupting instruction to determine what system call has occurred.
- A parameter indicates what type of service the user program is requesting.
- The OS then verifies the system call parameters to be legal.
- Executes the requested task, and returns control to the user program.


Control Flow of a System call
* Interrupt / Trap
* Interrupt Vector
* OS
* Service routine (System-call service routine in OS)
* Kernel




**Example in MIPS**: A specific `syscall` instruction is used to invoke a system call.


---

### **Preventing Illegal Execution**

Once hardware protection like mode bit is in place, it detects errors that violate modes. 

When the system is in **Kernel Mode**, it can detect errors that violate the operating modes, such as illegal instruction execution or unauthorized memory access. These errors are handled by the OS:

- If a user program attempts to execute an illegal instruction or access unauthorized memory which is not in the user's address space, the hardware **traps** to the OS.
- The OS handles the error, typically terminating the program abnormally and providing an error message.
- The system may also generate a **memory dump** for debugging purposes, which is saved to a file for analysis.


The absence of hardware-supported dual-mode operation can lead to serious issues. For instance, **MS-DOS**, which was designed for the Intel 8088 without a mode bit, allowed user programs to overwrite the OS and access hardware directly, resulting in potential system crashes.


---

### **1.5.2 Timer**

**Timer** is a component that can interrupt the system after a fixed or variable period, preventing user programs from running indefinitely.
It is a critical component in the OS to maintain control over execution. 

- A **fixed-rate clock** and a **counter** are used to implement a variable timer.
- The OS initializes the counter, and each time the clock ticks, the counter is decremented. When the counter reaches zero, an interrupt occurs.
- Timer interrupts ensure that a program does not run too long or gets stuck in an infinite loop and never return control to OS.

OS ensures that timer is set before transferring control to a user program. If the timer interrupts, control is passed back to the OS, which can either treat the interrupt as an error or extend the program's time.

Instructions that modify the content of the timer are privileged.

___

#### **Timer Usage Example**

- A program with a 7-minute limit could have its timer initialized to **420** (7 minutes in seconds).
- Each second, the counter decrements by 1, and control returns to the user program as long as the counter is positive.
- If the counter reaches zero, the OS terminates the program for exceeding its time limit.

**Example Timer Configuration**:  
A 10-bit counter with a 1-millisecond clock allows for interrupts at intervals ranging from 1 millisecond to 1,024 milliseconds (1 second).


---

