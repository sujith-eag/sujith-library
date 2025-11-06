---
title: "OS 2.04 - Types Of System Calls"
description: ""
date: 2025-01-12T21:24:56+05:30
lastmod: 2025-01-12T21:24:56+05:30
draft: false
---

# OS 2.04 - Types Of System Calls

System calls are typically grouped into six major categories, each providing different functions necessary for operating system tasks.

These categories include **process control**, **file management**, **device management**, **information maintenance**, **communications**, and **protection**.


By organizing system calls into categories, operating systems allow developers to interact with the underlying hardware and system services efficiently.

---

#### 2.4.1 **Process Control**

Process control system calls are used to manage the execution of processes in the operating system. These calls allow programs to create, terminate, and control other processes. 

Common process control system calls include:
- **end()** and **abort()**: Terminate a running program either normally or due to an error.
- **load()** and **execute()**: Load a program into memory and begin its execution.
- **create process** and **terminate process**: Used to create a new process and terminate an existing one.
- **get process attributes** and **set process attributes**: Retrieve or modify the attributes of a process (e.g., priority).
- **wait for time**: Makes the process wait for a specific time or until a certain condition is met.
- **wait event**, **signal event**: Synchronize process execution by waiting for or signaling events (e.g., semaphores).
- **allocate and free memory**: Manage dynamic memory allocation for processes.

**Examples of Process Control System Calls:**

| **Function**               | **Windows**                  | **UNIX**    |
|----------------------------|------------------------------|-------------|
| Process Creation            | CreateProcess()              | fork()      |
| Process Termination         | ExitProcess()                | exit()      |
| Process Waiting             | WaitingForSingleObject()     | wait()      |


In an interactive system, if a program terminates abnormally, the OS usually handles the termination and outputs an error message. In GUI systems, a pop-up may alert the user. In batch systems, the job may be terminated and the next job executed.


---

#### 2.4.2 **File Management**

File management system calls allow processes to manage files and directories. These calls are essential for operations like creating, reading, writing, and closing files.

Key file management system calls include:
- **create()** and **delete()**: Create and delete files with specific attributes.
- **open()**: Open a file for reading, writing, or both.
- **read()**: Read data from a file into memory.
- **write()**: Write data from memory to a file.
- **reposition()**: Move the file pointer to a different position in the file (e.g., skip to the beginning or end).
- **close()**: Close a file once operations are complete.

| **Function**  | **Windows**   | **UNIX** |
| ------------- | ------------- | -------- |
| File Creation | CreateFile()  | open()   |
| File Reading  | ReadFile()    | read()   |
| File Writing  | WriteFile()   | write()  |
| File Closing  | CloseHandle() | close()  |

---

#### 2.4.3 **Device Management**

Device management system calls allow processes to interact with hardware devices like printers, disk drives, and network devices. These calls are used for requesting and releasing device access, reading/writing data, and managing device attributes.

Common device management system calls include:
- **request device** and **release device**: Request or release control of a device.
- **read()**, **write()**, **reposition()**: Perform I/O operations on devices.
- **get device attributes**, **set device attributes**: Retrieve or set attributes of a device (e.g., device status).
- **logically attach or detach devices**: Attach or detach devices from the system for use.

| **Function**               | **Windows**                  | **UNIX**    |
|----------------------------|------------------------------|-------------|
| Console Mode Control        | SetConsolMode()              | ioctl()     |
| Reading from Console        | ReadConsole()                | read()      |
| Writing to Console          | WriteConsole()               | write()     |

---

#### 2.4.4 **Information Maintenance**

Information maintenance system calls provide information about the system, process, file, or device attributes. These calls are crucial for system monitoring and configuration.

Key information maintenance system calls include:
- **get time or date** and **set time or date**: Retrieve or modify the system's date and time.
- **get system data**, **set system data**: Retrieve or modify various system settings or configuration data.
- **get process/file/device attributes**: Retrieve information about processes, files, or devices.
- **set process/file/device attributes**: Modify attributes of processes, files, or devices.

| **Function**   | **Windows**           | **UNIX** |
| -------------- | --------------------- | -------- |
| Get Process ID | GetCurrentProcessID() | getpid() |
| System Sleep   | Sleep()               | sleep()  |

---

#### 2.4.5 **Communication**

Communication system calls enable processes to communicate with each other, either on the same machine or over a network. These calls manage the creation of communication channels, sending and receiving messages, and transferring status information.

Common communication system calls include:
- **create communication connection** and **delete communication connection**: Establish or remove communication channels between processes.
- **send()**, **receive()**: Transmit and receive messages between processes.
- **transfer status information**: Send status updates between communicating processes.
- **attach or detach remote devices**: Connect or disconnect remote devices for communication.

| **Function**               | **Windows**                  | **UNIX**    |
|----------------------------|------------------------------|-------------|
| Create Pipe                | CreatePipe()                 | pipe()      |
| Shared Memory Management    | CreateFileMapping()          | shm_open()  |
| Memory Mapping             | MapViewOfFile()              | mmap()      |

---

#### 2.4.6 **Protection**

Protection system calls manage access to system resources to ensure that unauthorized users or processes cannot access or interfere with protected data. They include functions for setting permissions, ensuring security, and managing access control.

Common protection system calls include:
- **set file security**: Set permissions for files to control who can access them.
- **initialize security descriptor**: Set up a security descriptor for managing access control.
- **set security descriptor group**: Assign security groups to resources for access control.
- **change file permissions**: Modify file access rights for users.

| **Function**               | **Windows**                  | **UNIX**    |
|----------------------------|------------------------------|-------------|
| Set File Permissions        | SetFileSecurity()            | chmod()     |
| Modify File Ownership       | SetSecurityDescriptorGroup() | chown()     |

---


