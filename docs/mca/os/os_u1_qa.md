# Unit-1: OS Introduction


## Operating System Services

* List and explain operating system services.
* Discuss the operating system services.
* List five services provided by an operating system and explain how each creates convenience for users.
* Define an operating system. List and explain the services provided by an operating system.
* List the services provided by the operating system. Elaborate on each service in the context of its convenience to the users.

**Answer :**

An Operating System (OS) is system software that acts as an intermediary between computer hardware and the end user. It provides an environment in which a user can execute programs conveniently and efficiently. 

The OS controls and coordinates the use of hardware, system resource among various applications and users.

Key roles of an OS include:
- **User Interface Provider** : Offers ways for users to interact with the system, such as through command-line interfaces (CLI) or graphical user interfaces (GUI).

- **Resource Manager** : Manages hardware resources like the CPU, memory, storage devices, and I/O devices.

- **Control Program** : Ensures orderly and efficient execution of programs, preventing errors and improper use of system resources.

- **Communication Facilitator** : Manages communication between system components and processes.

---

**Core Services Provided by an Operating System**

* **Program Execution** : OS loads programs into memory, initiates their execution, and handles their termination. This Enables users to run software applications seamlessly without needing to manage low-level hardware tasks.

* **Resource Allocation** : OS Dynamically allocates hardware resources (CPU time, memory space, I/O devices) to various programs and users. This Ensures efficient utilization of system resources, especially in multi-user or multitasking environments.

* **File System Management** : Manages files and directories, and allows for creation, deletion, reading, writing, and access permissions. This Allows users to store, retrieve, and organize data easily.

* **Input/Output (I/O) Operations** : Facilitates communication between user programs and hardware devices through drivers and buffers. This simplifies data transfer and device interaction without needing users to know hardware-level details.

* **Inter-Process Communication (IPC)** : Provides mechanisms (e.g., message passing, shared memory) for processes to exchange data and synchronize their actions. This allows for development of complex software systems that require multiple processes working together.

* **Security and Protection** : Implements access control mechanisms to protect system resources and data from unauthorized access or malicious activity. Ensures data privacy and integrity, protecting user information and preventing interference between programs.

* **Error Detection and Handling** : Monitors the system for errors (hardware failures, software bugs) and takes appropriate recovery actions. Enhances system stability and reliability by minimizing downtime and data loss.

* **Accounting and Monitoring** : Tracks resource usage by users and programs for billing, system tuning, and usage analysis. Useful in enterprise or shared systems to manage costs and optimize performance.


## User Interfaces

Operating systems offers various User interfaces to meet various user needs:

- CLI (Command-Line Interface): Allows users to interact with the system by typing textual commands (e.g., Linux terminal).

- GUI (Graphical User Interface): Provides a visual environment with windows, icons, menus and pointers (WIMP) (e.g., Windows, macOS).

- Batch Interface: Executes a sequence of commands in a script without user interaction.

- Hybrid Interface: Combines features from multiple interfaces to enhance flexibility and usability.


## System Calls

* Write short notes on different types of system calls.
* What are system calls? Discuss any three system calls.  
* What system calls need to be executed by a command interpreter or shell to start a new process?
* Describe any five categories of system calls with an example for each.
* What are system calls? Briefly discuss the various types of system calls.
* What is a system call? Explain the various types of system calls.

**Answer :**

System calls act as the interface between the user space and the kernel space.

A **system call** is a programmatic way through which a user-level program requests a service from the **operating system’s kernel**. They are processed via traps which gets validated, executed by OS and returns control to user program.

These services typically involve access to hardware resources or other operations that require privileged access, such as creating a process, accessing a file, or communicating with a device. Since user programs do not have direct access to critical hardware or protected parts of the system (for reasons of security, control, and abstraction).


### Types of System Calls

**Process Control** : Deals with the creation, execution, termination, and management of processes.
- `fork()` – Create a new process.
- `exit()` – Terminate a process.
- `wait()` – Wait for a child process to finish.
- `exec()` – Replace a process’s memory with a new program.

**File Management** : Handles operations on files and directories like creation, reading, writing, and deletion.
- `open()` – Open a file.
- `read()` – Read data from a file.
- `write()` – Write data to a file.
- `close()` – Close a file.
- `unlink()` – Delete a file.

**Device Management** : Manages input/output devices and their access.
- `read()`/`write()` – Perform I/O operations.
- `open()`/`close()` – Open or close a device (e.g., printer, disk).

**Memory Management** : Allocates and frees memory used by programs during their execution.
- `mmap()` – Map files or devices into memory.
- `munmap()` – Unmap memory.

**Communication (Inter-Process Communication - IPC)** : Enables processes to exchange data and signals.
- `pipe()` – Create a pipe for communication.
- `shmget()` – Create a shared memory segment.
- `send()`, `recv()` – Send or receive data over sockets.
- `signal()` – Send a signal to another process.

---

**Interrupt :** A signal from hardware (like a keyboard or timer) that notifies the OS that an event needs immediate attention. Interrupts are asynchronous and can occur at any time.

**Trap :** (or Exception) A software-generated interrupt, often caused by errors (e.g., division by zero) or intentional user program actions that require OS intervention. Traps are synchronous.

**System Call** : A specific kind of trap intentionally invoked by a user program to request services from the OS (e.g., `fork()`, `read()`).

The OS is interrupt-driven, relying on traps and interrupts to manage events and ensure smooth functioning.


## System Programs

* What are system programs? Explain their categories.
* Define a system program. Explain the different categories provided by system programs.

**Answer :**

Along with core OS services, system programs provide additional functionality to interact with system resources to improve user and developer experience:

- **File Management Tools**: Help users manage files and directories (`cp`, `mv`, `ls`, `mkdir`, etc.).

- **System Status Utilities**: Display real-time information about system performance (`top`, `ps`, `df`, `free`, `uptime`).

- **Programming Support Tools**: Include compilers, linkers, interpreters, and debuggers for software development.

- **Communication Programs**: Enable data exchange, remote login, file transfer, and email.

- **Background Services (Daemons)**: Perform tasks such as scheduling, printing, network monitoring, and error logging in the background.


## Dual-Mode Operation

* Explain the dual-mode operation in an operating system with a neat diagram.
* Discuss the dual-mode operation in an operating system.

**Answer :**

Dual-mode operation is a foundational concept in operating system design that provides a clear separation between user-level programs and kernel-level processes. 

This division enforces security, protection, and stability, ensuring that user applications cannot directly affect the critical workings of the OS or access sensitive resources. thereby protecting the system from accidental or malicious interference.

---

The OS operates in two distinct modes implemented with a mode bit.
A Mode bit is a special hardware-supported bit used to distinguishes the current mode of execution:  0→Kernel Mode .  1→User Mode

**User Mode** : is used when the user applications are running.
- Access to critical system resources is restricted (e.g., hardware, kernel memory).
- Certain privileged instructions are not allowed in user mode.
- Protects the system from accidental or intentional misuse by user-level programs.

**Kernel Mode** (Supervisor or Privileged Mode)
- Operating system runs in this mode and has full access to all system resources, including hardware and all instructions.
- Can execute privileged operations like memory management, device control, and process scheduling.

The system switches between user mode and kernel mode during System Call, Interrupt or Exceptions (Trap). Each of these transitions causes the CPU to switch to kernel mode, handle the request, and then return to user mode after completing the task.

____

A **timer** is a hardware, it prevents a process from monopolizing the CPU indefinitely. Timer is set to a specified duration for a process and when the timer expires, it generates an interrupt, allowing the OS to regain control and possibly switch to another process. This is crucial for preemptive multitasking and system responsiveness.


## Computer Systems

* Compare client-server with peer-to-peer computing. 

* Discuss the essential properties of the following types of computer systems:  
	i) Client-server computing  
	ii) Multiprocessor systems  
	iii) Peer-to-peer computing  
	iv) Embedded systems  
	v) Handheld systems  
	vi) Clustered systems  
	vii) Real-time systems  
	viii) Mainframe systems  
	ix) Desktop systems

**Answer :**

**Types of Computer Systems**

**Client-server computing** : is a specialized distributed system based on centralized model where one or more servers provide services, data, or resources. Client machines request for and make use of these resources. 

This model splits roles between servers and clients. Clients depend on the server to function properly. This is widely used in modern networks, including websites and enterprise systems.

___

**Peer-to-peer computing** : is a distributed system based on decentralized model. It involves computers in a network acting both as clients and servers. Each system(node, peer) in the network can request and provide services, creating a collaborative environment. There is no central server, all peers share resources directly among themselves.

It is scalable and fault-tolerant because there is no single point of failure. This model is often used for decentralized applications, file-sharing networks and blockchain applications.

____

**Cloud computing** : provides computing resources like storage, processing power, and software over the internet. Instead of owning physical hardware, users rent what they need from a cloud provider. This model is flexible, scalable, and cost-effective.

Cloud Service Models:
- IaaS (Infrastructure as a Service): Provides virtualized computing resources like virtual machines, storage, and networks (e.g., Amazon EC2, Azure Virtual Machines).
- PaaS (Platform as a Service): Provides a platform for developers to build and deploy applications without managing the underlying infrastructure (e.g., Google App Engine, Azure App Services, Heroku).
- SaaS (Software as a Service): Delivers software applications over the internet on a subscription basis (e.g., Google Workspace, Salesforce).
- DBaaS (Database as a Service): Offers database hosting and management without requiring users to manage the infrastructure (e.g., Amazon RDS, Google Cloud SQL).

___

**Embedded systems** : are dedicated systems designed to perform a specific task within a larger device. They are often resource-constrained, have limited functionality, and are designed for real-time operation. Examples include systems in washing machines, microwave ovens, and medical devices.

**Real-time systems** : are designed to provide timely and predictable responses to events. They must process inputs and generate outputs within strict time constraints. Examples include flight control systems and medical monitoring devices.

____

**Clustered systems** : consist of multiple computers linked together to function as a single unit. They provide high availability and load balancing. If one node fails, others can take over its tasks. Clustering is commonly used in data centers, scientific computing, and online services requiring high uptime.

**Distributed system** : is made up of multiple independent computers that work together and appear to users as a single system. The goal is to share resources, increase reliability, and improve performance. Distributed systems are common in cloud computing, web services, and large-scale applications.

____

Traditional computing setups refer to systems where computing resources such as servers and workstations are located locally within an organization.

- PC: A single-user system focused on ease of use and performance, but with less emphasis on resource utilization.

- Mainframe: A multi-user system designed for resource maximization and efficient information sharing.

- Workstations: Connected to servers via networks, offering a balance of performance and resource utilization.

- Network Computers / Thin Clients: Focus on easy maintenance and security, with less local processing power.

**Mainframe systems** : are large, powerful machines that support hundreds or thousands of users at the same time. They are known for their reliability, security, and centralized control. Mainframes are used in banking, government, and enterprise data processing.

**Desktop systems** : are personal computers designed for use by one person at a time. They are versatile and can be used for a wide range of tasks, including office work, gaming, media, and software development. These systems typically have graphical interfaces and are designed for convenience and performance.

**Handheld systems** : are portable devices with limited computing power, small screens, and battery operation. These systems typically run mobile operating systems and are optimized for touch input. Examples include smartphones, tablets, and handheld gaming consoles.

**Multiprocessor systems** : are computers that have more than one CPU. These systems allow multiple processes to run simultaneously, increasing performance and efficiency. There are two types: symmetric multiprocessing, where all processors are equal, and asymmetric multiprocessing, where one processor controls others. These systems are used in high-performance computing and servers.


### System Boot

Booting is the process of starting or restarting a computer system by loading the operating system kernel into the system's main memory (RAM) and beginning its execution so that the computer becomes operational.

The Bootstrap Loader is a small, specialized code that resides in firmware, usually in ROM (Read-Only Memory) or flash memory on the motherboard. Because ROM is non-volatile, it retains its contents even when the power is off.

This bootstrap program is the first code that runs when the system is powered on. It Starts the booting process and initializes the system by performing basic system checks and then locate and load the operating system kernel from disk into memory.


