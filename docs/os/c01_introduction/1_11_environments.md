---
title: "OS 1.11 - Computing Environments"
description: ""
date: 2025-01-12T21:21:44+05:30
lastmod: 2025-01-12T21:21:44+05:30
draft: false
---

# OS 1.11 - Computing Environments
---



#### 1.11.1 Traditional Computing

Traditional computing refers to the setup where computing resources, such as servers and workstations, are located locally in a company or institution. Web technologies and increasing WAN (Wide Area Network) bandwidth are expanding the boundaries of traditional computing.

- Companies establish **portals** to provide web access to their internal servers, improving accessibility and collaboration.
- **Network Computers (NCs)** or **Thin Clients** are now used in place of traditional workstations. These terminals mainly handle web-based computing and have limited local processing power. NCs are ideal for environments where:
  - More security is required.
  - Easier maintenance and management are desired.
  
This shift towards thin clients helps reduce the complexity and cost of maintaining individual workstations, as most tasks are handled on centralized servers.

---

#### 1.11.2 Mobile Computing

Mobile computing refers to the use of portable computing devices (like smartphones, tablets, and laptops) that can connect to networks wirelessly.

- OS for mobile devices is designed to be lightweight and optimized for touch interfaces. Ex: iOS, Android, Windows Mobile
- Key features:
  - **Portability**: Devices are highly portable, allowing users to stay connected anytime, anywhere.
  - **Battery Optimization**: Mobile OSes are designed to conserve battery life while providing performance.
  - **Wireless Networking**: Mobile devices depend on wireless technologies like Wi-Fi, Bluetooth, and cellular networks for connectivity.

Mobile computing plays a crucial role in enabling personal and professional communication, productivity, and entertainment on the go.

---

#### 1.11.3 Distributed Systems

A distributed system is a collection of independent computers that appear to the user as a single system. These systems are designed to distribute workloads across multiple machines, providing benefits in terms of reliability, scalability, and performance.

- **Examples**: Cloud services, large-scale web applications
- Key Features:
  - **Fault Tolerance**: If one node fails, others can continue the task.
  - **Scalability**: More machines can be added to increase computational power.
  - **Resource Sharing**: Multiple devices can share resources like storage, processing power, and data.
  
Distributed systems rely heavily on networked communication and require sophisticated OS management to ensure that the entire system functions efficiently.

---

#### 1.11.4 Client-Server Computing

In client-server computing, tasks are divided between service providers (servers) and requesters (clients).

- **Clients**: These are devices or programs that request services or resources from a server.
- **Servers**: These are machines or applications that provide services, data, or resources to clients over a network.
  
**Examples**: 
- A web browser (client) requesting a webpage from a web server.
- An email client (client) requesting and receiving emails from an email server.

Key benefits of client-server architecture:
  - Centralized data management and security.
  - Efficient use of resources.
  
The OS in client-server systems manages both the server-side and client-side processes, ensuring smooth communication and operation.

---

#### 1.11.5 Peer-to-Peer Computing

Peer-to-peer (P2P) computing refers to a network model in which each participant (node) acts both as a client and a server, sharing resources with other nodes.

- **Decentralization**: There is no central server. All nodes are equal and share resources.
- **File Sharing**: Popular for file-sharing systems like BitTorrent, where files are distributed across multiple peers.
  
Key Advantages:
  - Scalability and resilience due to the lack of a single point of failure.
  - Direct communication between peers, reducing network congestion.

However, P2P systems can be less secure compared to client-server models because data is directly exchanged between users.

---

#### 1.11.6 Virtualization

Virtualization refers to the technology that enables running multiple virtual operating systems (VMs) on a single physical machine.

- **Emulation**: In emulation, the CPU architecture of the host machine is different from the guest machine. It allows programs written for one system to run on a completely different one (e.g., Apple's Rosetta emulator enabling software built for IBM architecture to run on Intel processors).
- **Interpretation**: This involves running programs in a non-native format, often by translating high-level code into a language understood by the host machine (e.g., Java being interpreted by the Java Virtual Machine, or JVM). (Computer language is not compiled to native code but instead is either executed in its high-level form or translated to an intermediate form.)
  
In contrast to full emulation, virtualization runs a guest OS natively on the host's hardware, allowing for efficient resource utilization.

Key Benefits:
  - Allows multiple OS environments on a single machine.
  - Facilitates better resource management and isolation.
  - Enables testing and development of different OS setups without needing separate hardware.

<figure>
  <img src="/os/1_20_Virtual_Models.jpg" alt="1.20 Virtualization" />
  <figcaption>1.20 Virtualization</figcaption>
</figure>


Java is always interpreted. Interpretation is a form of emulation, the high level language code is translated to native CPU instructions, emulating a theoretical virtual machine on which that language could run natively.

Java programs are run on "Java virtual machines", but technically those virtual machines are Java emulators.


<figure>
  <img src="/os/1_21_Java_VM.jpg" alt="1.21 Java Virtual Machine" />
  <figcaption>1.21 Java Virtual Machine</figcaption>
</figure>


---

#### 1.11.7 Cloud Computing

Cloud computing refers to the delivery of computing services—including storage, networking, databases, software applications, and processing power—over the internet. Rather than owning and maintaining physical servers and infrastructure, organizations and individuals can rent computing resources from cloud service providers on-demand.

Cloud computing allows users to access services remotely from any device with an internet connection, offering flexibility, scalability, and cost efficiency. Cloud services are typically offered under a subscription-based model.

#### **Types of Clouds**:

##### **Public Cloud**:       

In a public cloud, the cloud resources (servers, storage, and applications) are owned and operated by a third-party provider and made available to the general public. 

**Examples**: 
- **Amazon Web Services (AWS)**: Offers cloud computing services, including EC2 (Elastic Compute Cloud) and S3 (Simple Storage Service), which provide virtual servers and scalable storage for businesses.
- **Microsoft Azure**: Provides services such as virtual machines, storage solutions, and cloud databases. Azure is widely used by enterprises for hosting applications and services.
- **Google Cloud Platform (GCP)**: Offers infrastructure services such as Compute Engine and Cloud Storage.

**Pros**: 
- Lower upfront costs, pay-as-you-go pricing model.
- Scalable resources that can be adjusted based on demand.
- Reduced management and maintenance overhead.

**Cons**: 
- Data security concerns, as the data is stored off-site with a third-party provider.
- Limited customization options compared to private clouds.

___

##### **Private Cloud**:      

In a private cloud, the cloud infrastructure is used exclusively by a single organization. The resources may be hosted on-premises or by a third-party provider.

**Examples**: 
- **VMware vSphere**: Offers virtualization technologies for building private clouds and managing virtual machines.
- **OpenStack**: An open-source platform for building and managing private clouds.

**Pros**: 
- Enhanced security and control over data.
- Customizable infrastructure to meet specific organizational needs.
- Typically better suited for businesses with compliance or regulatory requirements.

**Cons**: 
- Higher upfront cost for hardware and management.
- Limited scalability compared to public cloud services.

___

##### **Hybrid Cloud**:      

A hybrid cloud combines both public and private clouds, allowing data and applications to be shared between them. This provides businesses with greater flexibility and optimization of existing infrastructure.

**Examples**: 
- A company might run sensitive workloads (such as financial data) in a private cloud for security and compliance, while using a public cloud for less sensitive workloads (like customer relationship management or backup storage).
- **Microsoft Azure Hybrid Cloud**: Allows seamless integration of on-premises infrastructure with Azure's cloud services.

**Pros**: 
- Flexibility to scale and deploy workloads across multiple environments.
- Offers cost-efficiency by utilizing public cloud resources for less sensitive operations, while maintaining private cloud for more secure processes.

**Cons**: 
- Complexity in managing both private and public clouds simultaneously.
- Potential integration challenges between different cloud environments.

___

##### **Community Cloud**:   

A community cloud is shared by several organizations with similar interests or requirements, typically in a specific industry or regulatory domain. It allows for shared infrastructure and resources, yet still maintains a level of privacy and security for each organization.

**Examples**: 
- A healthcare provider network might use a community cloud to store and manage patient data while ensuring HIPAA compliance.
- Government agencies with shared security protocols may opt for a community cloud to meet regulatory standards while sharing resources.

**Pros**: 
- Cost-effective for organizations with similar needs or regulatory requirements.
- Offers higher control and privacy compared to public clouds.

**Cons**: 
- Limited customization compared to private clouds.
- May involve more complex governance compared to private or public clouds.

____

#### **Cloud Service Models**:

Cloud services are typically categorized into three primary service models, which differ in the level of control and responsibility retained by the user:

##### **Infrastructure as a Service (IaaS)**:        

IaaS provides virtualized computing resources over the internet, including virtual machines, storage, and networks. The user is responsible for managing the operating system, applications, and data, while the provider handles the physical infrastructure.

**Examples**: 
- **Amazon EC2 (Elastic Compute Cloud)**: Offers scalable computing capacity and allows users to launch virtual servers to run applications.
- **Microsoft Azure Virtual Machines**: Allows users to deploy and manage virtual machines on the Azure cloud.
- **Google Compute Engine**: Provides virtual servers and storage solutions for building cloud applications.

**Pros**: 
- Flexible and scalable infrastructure.
- Users can scale resources up or down based on demand.
- Ideal for hosting websites, applications, and testing environments.

**Cons**: 
- Requires users to manage the operating system and applications, which may increase complexity.
- Security and compliance need to be managed by the user.

___

##### **Platform as a Service (PaaS)**: 

PaaS provides a platform that allows developers to build, deploy, and manage applications without dealing with the underlying hardware or operating systems. The provider handles the infrastructure, operating systems, and runtime environments.

**Examples**: 
- **Google App Engine**: Allows developers to build and deploy applications on Google's infrastructure without worrying about hardware or OS management.
- **Heroku**: A cloud platform for building, running, and scaling applications, supporting several programming languages.
- **Microsoft Azure App Services**: Provides a platform for building web applications, APIs, and mobile backends.

**Pros**: 
- Simplifies development and deployment of applications.
- Scalable with built-in tools for monitoring and managing applications.
- Developers can focus on coding without worrying about infrastructure or hardware.

**Cons**: 
- Limited flexibility compared to IaaS.
- Can lead to vendor lock-in if relying heavily on a specific platform.

___

##### **Software as a Service (SaaS)**:        

SaaS delivers software applications over the internet on a subscription basis. Users access applications through a web browser, and the provider manages the underlying infrastructure, platform, and software updates.

**Examples**: 
- **Google Workspace (formerly G Suite)**: A suite of productivity applications, including Gmail, Google Docs, Sheets, and Drive, all accessible via a web browser.
- **Salesforce**: A CRM (Customer Relationship Management) software that is fully hosted on the cloud and accessible from anywhere.
- **Dropbox**: A cloud-based file storage and sharing platform.

**Pros**: 
- No need to manage infrastructure or software updates.
- Accessible from any device with an internet connection.
- Subscription-based, reducing upfront costs.

**Cons**: 
- Limited customization options for software features.
- Data security concerns, as the data is hosted on third-party servers.

___

##### **Function as a Service (FaaS)**:    

FaaS, or serverless computing, allows users to execute individual functions or code in response to events without managing the underlying infrastructure. The cloud provider automatically handles the scaling and resources needed for the execution.

**Examples**: 
- **AWS Lambda**: Enables users to run code in response to events such as file uploads or API calls, without managing servers.
- **Azure Functions**: Provides a serverless compute service for running event-driven functions.

**Pros**: 
- No need to manage servers, reducing operational complexity.
- Cost-efficient, as users only pay for the execution time of the functions.

**Cons**: 
- Limited control over infrastructure.
- May not be suitable for long-running or stateful applications.

___

##### **Database as a Service (DBaaS)**:      

DBaaS allows users to host, manage, and scale databases without handling the underlying infrastructure. The cloud provider manages database performance, backups, and scalability.

**Examples**: 
- **Amazon RDS (Relational Database Service)**: Allows users to host, manage, and scale relational databases such as MySQL, PostgreSQL, and Oracle.
- **Google Cloud SQL**: A fully-managed relational database service for MySQL, PostgreSQL, and SQL Server.

**Pros**: 
- Managed database services reduce administrative overhead.
- Automated backups, scaling, and performance optimization.

**Cons**: 
- Limited customization compared to on-premises databases.
- May involve data security and compliance challenges.

___

#### **Key Benefits of Cloud Computing**:

- **Scalable Resources on Demand**: Cloud services allow businesses to scale their computing resources up or down based on demand. For example, an e-commerce website might require more resources during a holiday sale and scale back afterward.
- **Pay-as-You-Go Pricing Models**: With cloud computing, users only pay for the resources they use. This helps businesses avoid upfront infrastructure costs and scale efficiently.
- **Accessibility**: Cloud services can be accessed from any device with an internet connection, allowing for greater flexibility and mobility. Remote work and collaboration become more efficient, as users can access their data and applications from anywhere.


---

#### 1.11.8 Real-Time Embedded Systems

These are the most prevalent type of computers which are in all kinds of devices with very specific tasks. Their systems are limited, have little or no user interface. Mostly monitoring and managing hardware devices.

Embedded systems are specialized computing systems designed to perform dedicated functions with specific requirements. Many embedded systems are real-time systems.

- **Real-Time Operating System (RTOS)**: An OS designed to handle real-time tasks with strict timing constraints. These systems must process inputs and produce outputs within a defined time period, or they will fail.
  
**Examples of Real-Time Systems**:
- **Scientific Instruments**: Used in laboratories to process experimental data in real-time.
- **Medical Devices**: Devices like pacemakers or MRI machines that need to operate under strict time constraints.
- **Automobile Systems**: Engine control units (ECUs) and safety systems that require immediate responses to sensor data.
- In home appliance controllers and weapon systems.
  
Real-time embedded systems are commonly found in industries such as aerospace, healthcare, automotive, and industrial automation.

**Key Features**:
  - Predictable response time.
  - High reliability and uptime.
  - Low latency for critical operations.


There are embedded systems with OS and special purpose applications to implement the functionality.
Others are devices with special purpose OS providing just the desired functionality.
Others are (ASICs) application-specific Integrated circuits that perform the tasks without an operating system.


---
#### Areas of Real Time Embedded systems usage
##### 1. **Aerospace & Defense**

**Flight Control Systems**: ensure that the flight control systems (e.g., autopilot, navigation, and thrust management) respond promptly to inputs like altitude changes, turns, or environmental factors.
   
**Missile Guidance Systems**: In missiles or drones perform real-time processing of sensor data (e.g., GPS, radar, infrared) to guide the missile to its target with precise timing for tracking and course corrections.
   
**Radar Systems**: processing of signals and data from radars ensures immediate response to changing environmental conditions or threats.
 - **Air Traffic Control Radar Systems**: Process the movement of aircraft in real-time to ensure safe air traffic management.

---

##### 2. **Automotive**

**Anti-lock Braking System (ABS)**: Continuously monitors wheel speed sensors and adjusts brake pressure to prevent skidding during hard braking.

**Autonomous Vehicles**: Used to process data from sensors (LIDAR, cameras, radar) to make split-second decisions for autonomous driving and braking.

**Engine Control Units (ECU)**: Manage engine performance, including fuel injection, ignition timing, and exhaust controls, ensuring optimal engine behavior, fuel efficiency and emissions.

---

#### 3. **Healthcare & Medical Devices**

**Pacemakers**: Monitor heart activity and adjust pacing to maintain a regular heartbeat.
   
**Infusion Pumps**: Control the rate at which drugs or fluids are administered to patients, responding instantly to changes in dosage or medical parameters.
   
**Medical Imaging Systems**: Systems like MRI, CT scanners, and ultrasound machines rely on real-time embedded systems to process large amounts of imaging data in real-time.
   
**Vital Signs Monitors**: Embedded systems continuously monitor heart rate, oxygen saturation, and blood pressure in patients, providing immediate alerts for any abnormalities.

---

#### 4. **Industrial Automation**

**Robotic Arm Control**:  Embedded systems control robotic arms used in manufacturing and assembly lines, ensuring real-time precision and accuracy.
   
**Process Control Systems**:  In industries like oil and gas, power generation, and chemicals, real-time embedded systems control and monitor critical processes (e.g., temperature, pressure, flow rate).
 - Precise control of chemical reactions or energy generation, responding immediately to sensor data to maintain system stability.
   
**Conveyor Systems**:  Real-time embedded systems manage the speed and direction of conveyor belts used in sorting or assembly lines.

---

#### 5. **Consumer Electronics**

**Smartphones**: rely on real-time embedded systems to handle various functions like touch screen input, GPS navigation, and camera operation.
   
**Smart TVs**: allow smart TVs to process streaming data, manage user interfaces, and synchronize audio and video streams.
   
**Game Consoles**: manage processing power, network connections, and gameplay responses in real-time.

---

#### 6. **Telecommunications**

**Network Routers and Switches**: manage network traffic, ensuring that data packets are transmitted efficiently and with minimal delay.
   
**Base Stations in Mobile Networks**: cellular base stations process signals from mobile devices and handle real-time communication. Managing high-speed data transmission, adjusting frequencies and power levels for efficient communication.

---

#### 7. **Energy Management**

**Smart Grids**:  Monitor and control energy distribution in smart grids, responding to changes in demand and grid conditions to prevent outages.

**Wind Turbine Control Systems**: Adjust blade angles and motor speed to maximize energy generation while maintaining safe operation.
   
**Solar Panel Controllers**: Manage the charging of batteries or the direct supply of power to the grid.


---

#### 8. **Entertainment & Media**

**Digital Cameras**:  Real-time embedded systems in digital cameras process images from sensors and adjust settings like exposure, focus, and white balance in real-time. Ensuring clear, high-quality photos are captured instantly.
   
**Virtual Reality (VR) and Augmented Reality (AR)**:  Devices process real-time inputs from motion sensors, cameras, and external controllers to create immersive experiences.

---

#### 9. **Security & Surveillance**

**Surveillance Cameras**: Process video feeds, detect motion, and trigger recording or alerts when necessary.

**Biometric Systems**: Process inputs like fingerprints, retina scans, or facial recognition for immediate authentication.

---


#### 10. Real-Time Embedded Systems in Home Appliances

* Smart Thermostats
* Washing Machines
* Dishwashers
* Refrigerators
* Microwave Ovens
* Air Conditioners
* Smart Coffee Makers
* Smart Locks
* Smart Light Bulbs
* Vacuum Cleaners
* Smoke Detectors


---


