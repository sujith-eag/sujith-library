# Static Routing

Static routing is a method of manually configuring routes in a router’s routing table. In this approach:

- The network administrator defines the path for data packets manually.
    
- Unlike **dynamic routing**, routers do **not** automatically learn routes.
    
- **Dynamic routing** uses protocols like **RIP** and **OSPF** to discover routes automatically.
    
## Introduction to Router

A **router** is a networking device that connects multiple computer networks and directs data packets between them.

### Key Functions:

- Operates at **Layer 3** (Network Layer) of the OSI model, Analyzes incoming data packets to determine destination address.
    
- Determines the best path to forward incoming packets.
    
- Facilitates communication between different **IP networks**.
    
- Manages traffic between different IP networks like  **LANs** (Local Area Networks) and the **WAN** (Wide Area Network).
    
### Cisco Router Configuration Modes:

|Mode|Prompt|Description|
|---|---|---|
|User EXEC Mode|`Router>`|Basic monitoring commands|
|Privileged EXEC Mode|`Router#`|Full access to show and debug commands|
|Global Config Mode|`Router(config)#`|Configure global router settings|
|Interface Config Mode|`Router(config-if)#`|Configure individual interfaces|

## For Modes of Cisco Router Configuration

Cisco routers operate through a hierarchical command-line interface with different modes, each serving specific purposes in configuration and monitoring. The four primary configuration modes are:

### 1. User EXEC Mode

- **Prompt:** `Router>`
    
- **Access Level:** Basic user access; read-only.
    
- **Entered by:** Logging into the router.
    
- **Purpose:** Basic monitoring and diagnostics. No configuration allowed.
    
- **Exit:** Type `logout` or `exit`.
    
#### Common Commands:

- `ping 8.8.8.8` – Test connectivity to a remote host.
    
- `traceroute 8.8.8.8` – Show the path packets take to Google DNS.
    
- `show version` – Display IOS version and system information.
    
- `show ip interface brief` – Summarize interfaces and statuses.
    
- `?` – View available commands.
    

---

### 2. Privileged EXEC Mode

- **Prompt:** `Router#`
    
- **Access Level:** Full read access and limited write access.
    
- **Entered by:** Typing `enable` from User EXEC Mode.
    
- **Purpose:** View detailed configuration, debug, and access all operational commands.
    
- **Exit:** Use `disable` to return to User EXEC Mode.
    
#### Common Commands:

- `show running-config` – Display current configuration.
    
- `show startup-config` – View saved configuration in NVRAM.
    
- `copy running-config startup-config` – Save current configuration.
    
- `reload` – Reboot the router.
    
- `debug [option]` – Enable troubleshooting/debugging.
    
- `configure terminal` – Enter Global Configuration Mode.
    
- `Ctrl + Z` – Return to Privileged EXEC Mode from any configuration mode.
    

---

### 3. Global Configuration Mode

- **Prompt:** `Router(config)#`
    
- **Access Level:** Full write access to system-wide settings.
    
- **Entered by:** Typing `configure terminal` from Privileged EXEC Mode.
    
- **Purpose:** Modify global device configurations.
    
- **Exit:** Use `exit` to return to Privileged EXEC Mode or `Ctrl + Z`.
    
#### Common Commands:

- `hostname CoreRouter` – Change the device name.
    
- `enable secret [password]` – Set encrypted Privileged EXEC password.
    
- `line console 0` / `line vty 0 4` – Configure console/remote access.
    
- `interface FastEthernet0/0` – Enter Interface Configuration Mode.
    
- `ip route [dest] [mask] [next-hop]` – Add static routes.
	
- `ip route 10.0.0.0 255.0.0.0 192.168.1.2` — Add static route to 10.0.0.0 via 192.168.1.2
	
- `banner motd #Message#` – Set login banner message.
    
---

### 4. Interface Configuration Mode

- **Prompt:** `Router(config-if)#`
    
- **Access Level:** Modify settings specific to an interface.
    
- **Entered by:** From Global Config Mode: `interface [type] [number]`  
    _(e.g., `interface FastEthernet0/0`)_
    
- **Purpose:** Configure individual router interfaces (IP, speed, duplex).
    
- **Exit:** Use `exit` to return to Global Configuration Mode.
    
#### Common Commands:

- `ip address 192.168.1.1 255.255.255.0` – Assign IP address.
    
- `no shutdown` – Enable the interface (bring it up).
    
- `shutdown` – Disable the interface.
    
- `description Link-to-Switch1` – Label interface.
    
- `duplex full` – Set full-duplex communication.
    
- `speed 100` – Set speed to 100 Mbps.
    

---

### Useful Keyboard Shortcuts and CLI Tips

|Shortcut|Function|
|---|---|
|`TAB`|Auto-complete the current command.|
|`?`|Display available commands or options.|
|`Ctrl + C`|Cancel current command or operation.|
|`Ctrl + Z`|Exit to Privileged EXEC Mode.|
|`UP/DOWN arrows`|Scroll through command history.|
|`SHOW ?`|List all "show" command options.|

## Static Routing Configuration Example

Configure static routing between **R1** and **R2** using FastEthernet interfaces.

### Network Details

| Router | Interface       | IP Address | Network    |
| ------ | --------------- | ---------- | ---------- |
| R1     | FastEthernet0/0 | 10.0.0.1   | 10.0.0.0/8 |
| R1     | FastEthernet0/1 | 20.0.0.1   | 20.0.0.0/8 |
| R2     | FastEthernet0/0 | 20.0.0.2   | 20.0.0.0/8 |
| R2     | FastEthernet0/1 | 30.0.0.1   | 30.0.0.0/8 |

Interconnecting Network (between R1 and R2): 20.0.0.0/8

---

### Configuration Steps

#### Static Route Syntax

```bash
ip route <destination-network> <subnet-mask> <next-hop-IP>
```

#### R1 Configuration

```bash
R1# configure terminal
R1(config)# interface fastethernet0/0
R1(config-if)# ip address 10.0.0.1 255.0.0.0
R1(config-if)# no shutdown
R1(config-if)# exit
```

```bash
R1(config)# interface fastethernet0/1
R1(config-if)# ip address 20.0.0.1 255.0.0.0
R1(config-if)# no shutdown
R1(config-if)# exit
```

Telling R1: "To reach the `30.0.0.0` network, send traffic to `20.0.0.2` (R2)."
```bash
R1(config)# ip route 30.0.0.0 255.0.0.0 20.0.0.2
```

Checking Configuration
```bash
R1# show ip route
R1# show ip interface brief
```

#### R2 Configuration

```bash
R2# configure terminal
R2(config)# interface fastethernet0/0
R2(config-if)# ip address 20.0.0.2 255.0.0.0
R2(config-if)# no shutdown
R2(config-if)# exit
```

```bash
R2(config)# interface fastethernet0/1
R2(config-if)# ip address 30.0.0.1 255.0.0.0
R2(config-if)# no shutdown
R2(config-if)# exit
```

Tells R2: "To reach the `10.0.0.0` network, send traffic to `20.0.0.1` (R1)."
```bash
R2(config)# ip route 10.0.0.0 255.0.0.0 20.0.0.1
```

```bash
R2# show ip route
R2# show ip interface brief
```

## Expected Outcome

- All interfaces should be in **up/up** state after using `no shutdown`.
    
- R1 and R2 should successfully **ping each other's LAN IPs**:
    
    - From R1: `ping 30.0.0.1`
        
    - From R2: `ping 10.0.0.1`
        
- `show ip route` should display manually configured static routes.
    
- `show ip interface brief` should confirm correct IP assignments and interface status.
    

