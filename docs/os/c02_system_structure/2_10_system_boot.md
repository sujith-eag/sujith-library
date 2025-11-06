---
title: "OS 2.10 - System Boot"
description: ""
date: 2025-01-12T21:27:49+05:30
lastmod: 2025-01-12T21:27:49+05:30
draft: false
---



 # OS 2.10 - System Boot

Booting a computer system refers to the process of starting it up by loading the kernel into memory and initiating its execution. This procedure is vital for initializing the operating system and setting up the system for user operations.

The process begins with a small piece of code called the **bootstrap program** or **bootstrap loader**. This program is responsible for finding and loading the operating system kernel into the main memory and starting its execution.

Some computer systems, such as PCs, use a two-step process in which a simple bootstrap loader fetches a more complex boot program from disk, which in turn loads the kernel.


---

### Steps in the Boot Process

1. **Reset Event**:
   - When a computer is powered on or rebooted, the **CPU** receives a reset signal.
   - The **Instruction Register (IR)** is loaded with a predefined memory location, and execution begins from that location.
   
2. **Initial Bootstrap Program**:
   - The initial bootstrap program is stored in **read-only memory (ROM)** because at this stage, **RAM** is in an unknown state. ROM is used because it doesn't need initialization and is not easily infected by viruses.
   - The bootstrap program is typically stored in a small, non-volatile storage like **ROM** or **firmware**.
   
3. **Diagnostics and Initialization**:
   - The bootstrap program usually runs system diagnostics to check the machine’s hardware and ensure that all components are functioning properly.
   - If diagnostics pass, the program continues to initialize the system, including the CPU registers, device controllers, and memory contents.
   - Eventually, the program begins loading the **operating system (OS)**.

4. **Firmware and Read-Only Memory (ROM)**:
   - All forms of ROM are also known as ﬁrmware, since their characteristics fall somewhere between those of hardware and those of software.
   - Some systems, especially simpler ones (like cell phones, tablets, or game consoles), may store the entire operating system in **ROM**. This is often done for simplicity and ruggedness.
   - However, **firmware** (a combination of hardware and software) comes with limitations:
     - **Speed**: Executing code in ROM is slower than executing code in **RAM**.
     - **Flexibility**: Changing the firmware requires replacing the ROM hardware, which can be costly. To address this, **EPROM (Erasable Programmable Read-Only Memory)** is used, allowing the code to be rewritten.
   
   - While firmware is durable, it typically provides only small amounts of storage and slower execution compared to RAM.

5. **Bootloader on Disk for Larger OS**:
   - For larger or more dynamic operating systems (like **Windows**, **macOS**, or **UNIX**), the **bootstrap loader** is stored in **firmware**, but the operating system itself resides on a **disk**.
   - The bootstrap program stored in the firmware runs diagnostics and reads a small **boot block** (often from the first block on disk).
   - This boot block contains enough code to load the remaining bootstrap program into memory.
   
   The boot block itself is typically small and only contains instructions to load the remainder of the **bootstrap program** from a specific address on the disk.

6. **Loading the Operating System**:
   - Once the bootstrap program has been loaded into memory, it traverses the file system on disk to find and load the kernel of the operating system.
   - After locating the kernel, it is loaded into memory and execution starts, and the system begins to **run** the operating system.

**GRUB (Grand Unified Bootloader)**:    
One of the most widely used bootstrap programs for Linux systems is **GRUB**, which helps manage the boot process and allows users to choose between different operating systems or kernel versions at startup.



**Boot Disk**:      
The disk that contains the boot partition and the operating system is often referred to as the **boot disk** or **system disk**.    
This disk is critical for loading the operating system during the boot process.


---

### Key Concepts:

- **Bootstrap Loader**: A small program responsible for loading the operating system kernel into memory.
- **ROM (Read-Only Memory)**: Non-volatile memory used for storing the initial bootstrap program. It is essential for starting the system because it doesn't require initialization like RAM.
- **Firmware**: Code stored in ROM or EPROM that can control hardware and run basic system functions.
- **Boot Block**: A small, fixed location on the disk that contains the first part of the bootstrap program.
- **Boot Disk/System Disk**: The disk that holds the operating system and contains the boot partition necessary for system startup.
- **GRUB (Grand Unified Bootloader)**: A popular bootloader used in Linux systems for loading and managing multiple operating systems.

---


___

