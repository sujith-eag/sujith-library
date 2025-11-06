---
title: "OS 2.03 - System Calls"
description: ""
date: 2025-01-12T21:23:06+05:30
lastmod: 2025-01-12T21:23:06+05:30
draft: false
---



# OS 2.03 - System Calls

The process of making a system call is essential for interaction between software and hardware components.

System calls provide the essential interface between user-level programs and the operating system by allowing applications to request services, such as **file manipulation, process control, and communication** with I/O devices, from the OS kernel. 


---

### **System Calls: An Overview**

* System calls are the fundamental interface between applications and the operating system.      
* They are typically implemented as **routines in C or C++**, although **assembly language** might be used for low-level operations requiring direct hardware access.        
* The OS can execute thousands of system calls per second, as they are used to manage resources and provide services to running applications.

Applications are designed based on an **Application Programming Interface (API)**.      
The API outlines the available system services, set of functions, their parameters, and the return values that a programmer can expect when interacting with the operating system.

Some common **APIs** include:
- **Windows API**: Used for applications running on Windows systems.
- **POSIX API**: Used in UNIX-based systems, including **Linux** and **macOS**.
- **Java API**: Used by applications that run on the **Java Virtual Machine (JVM)**.

For **Linux** and **UNIX**, the `libc` library provides a collection of standard APIs, enabling applications to interact with system calls.

____

#### **System Call Execution and API Invocation**

In practice, when an application calls a function provided by the API, that function typically invokes an underlying system call on behalf of the programmer. For example:
- In **Windows**, a call to `CreateProcess()` triggers the system call `NTCreateProcess()`.
- In UNIX-like systems, functions such as `open()` or `read()` are API functions that, behind the scenes, call lower-level system calls such as `sys_open()` or `sys_read()`.

The **API** abstracts the complexity of interacting with the OS kernel directly, making system calls easier to work with and providing greater portability across systems that support the same API.

#### **Program Portability**

The use of an API ensures that applications designed on one platform can be easily ported to others, as long as the target system supports the same API. For instance, a program designed using the **POSIX API** can be compiled and run on any system that implements the POSIX standard, including UNIX, Linux, or macOS. This portability is a significant advantage for developers, as they can write applications that run on multiple platforms without modification.

---

#### **System-Call Interface**

The **system-call interface** acts as the intermediary between the user program and the operating system kernel. 

* When an application invokes an API function, the system-call interface intercepts that call and translates it into the appropriate system call.
* The OS kernel then executes the request and returns any relevant data or status information back to the application via the system-call interface.


---

#### **Passing Parameters to the Operating System**

There are three general methods for passing parameters from user applications to the operating system during a system call. The choice of method depends on the OS and the number of parameters involved.

1. **Passing Parameters in Registers:**
   - The simplest and fastest method, where parameters are passed directly in CPU registers.
   - Suitable for system calls that require a small number of parameters.
   - **Example**: If a system call has only one or two arguments, passing them via registers is most efficient.

2. **Using a Block or Table in Memory:**
   - When there are more parameters than available registers, the parameters are stored in a memory block (or table). The address of the block is then passed in a register to the OS.
   - This method allows for more flexibility and is used by operating systems like **Linux** and **Solaris**.
   - **Example**: A system call that requires many parameters, such as a file operation with multiple options, can use this method.


3. **Passing Parameters via the Stack:**
   - In this method, the application pushes parameters onto the stack before making the system call. The OS then pops the parameters from the stack when the call is invoked.
   - This method does not limit the number of parameters, making it flexible for system calls with a variable or large number of parameters.

---

#### **Summary**

System calls are essential for interaction between applications and the operating system. They are the mechanism by which programs request services such as I/O operations, memory management, and process control from the OS. 

APIs provide a high-level interface to these system calls, making them easier for application developers to use. 

The **system-call interface** serves as the link between the application and the OS, handling the translation of API function calls into actual system calls.

- **APIs** abstract the complexity of making system calls directly.
- **System-call interfaces** enable user applications to invoke OS services.
- The **passing of parameters** to system calls can be done via registers, memory blocks, or the stack, depending on the number of parameters and the OS.



____

