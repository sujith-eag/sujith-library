# Wake-on-LAN (WoL)

Wake-on-LAN (WoL) is a hardware-, firmware-, and network-level capability that allows a powered-off or suspended computer to be remotely awakened through the delivery of a specially crafted Ethernet frame known as a **magic packet**. WoL is widely used in enterprise environments to support remote maintenance, patch management, asset inventory, and controlled power-management workflows.


## 1. Technical Overview: How WoL Works

1. **NIC Power State**  
    When the system enters a low-power state (S3/S4) or soft-off state (S5), the network interface card (NIC) remains partially powered so it can listen for incoming WoL frames.
    
2. **Magic Packet Format**  
    A valid magic packet contains:
    
    - Six bytes of `FF FF FF FF FF FF`, followed by
        
    - The target device’s MAC address repeated **16 consecutive times** (binary).
        
3. **Packet Delivery**  
    Magic packets are typically delivered via:
    
    - **Ethernet broadcast frames**, or
        
    - **UDP broadcasts** (commonly to ports **7** or **9**) so the NIC can receive the packet regardless of operating-system state.
        
4. **Wake Trigger**  
    When the NIC detects its MAC address in the packet payload, it signals the system’s power circuitry to initiate the startup process.
    
5. **Cross-Subnet Limitations**  
    Broadcasts do not traverse routers by default. Waking a host across subnets requires **directed broadcast forwarding**, a **relay**, or **specialized management appliances**.
    

## 2. Security Relevance

### 2.1 Potential Misuse and Offensive Scenarios

- Unauthorized users with the ability to send local broadcasts may:
    
    - Wake systems intentionally kept offline for security reasons.
        
    - Reactivate remote-access services (RDP/SSH/SMB) that administrators intended to disable.
        
    - Increase the available attack surface by powering on dormant hosts.
        
    - Enable persistence mechanisms that depend on the host being powered.
        
- WoL provides **no authentication**; any user with network access and the target MAC address can attempt to wake a machine.
    
- Attackers may combine WoL with:
    
    - Credential theft
        
    - Lateral movement
        
    - Misconfigured routing or ACLs  
        to compromise hosts intended to remain offline.
        

### 2.2 Defensive and Monitoring Considerations

- Unexpected wake events may indicate:
    
    - Reconnaissance
        
    - Misconfiguration
        
    - Unauthorized administrative activity
        
- Because WoL lacks authentication, defenders must rely on:
    
    - Network segmentation
        
    - Broadcast control
        
    - Log correlation
        
    - Monitoring and alerting to detect or prevent abuse.
        

## 3. Configuration and Operational Usage

### 3.1 BIOS/UEFI Configuration (Required Step)

Before the operating system can enable WoL, corresponding BIOS/UEFI options must be enabled.  

Restart your PC → press F2 / F10 / DEL (depending on manufacturer).

Typical settings include:

- Wake on LAN
    
- Wake on PCI-E / Wake by PCI Device
    
- Power on by PME / Wake Up Events
 
- Enable `Wake on LAN`, `Power On by PCI-E/PCI Device`, or similar.
   
Configuration path varies by vendor. After enabling, save and reboot.

---

### 3.2 Linux Usage

#### Check Existing WoL Configuration

```bash
sudo apt install ethtool

ethtool eth0 | grep -i "Wake-on"
```

Expected status:
- `g` = WoL enabled for magic packets
- `d` = WoL disabled
    
#### Enable WoL (Temporary)

```bash
sudo ethtool -s eth0 wol g
```

Note: This change does **not persist** across reboots.

#### Make WoL Persistent

Options include:

1. **Using /etc/network/interfaces**
    
    ```bash
    auto eth0
    iface eth0 inet dhcp
        post-up /sbin/ethtool -s eth0 wol g
    ```
    
2. **Using systemd service**  
    Create a small unit that runs the ethtool command on boot.
    
3. **Using rc.local** (if enabled by the distribution)
    
    ```bash
    ethtool -s eth0 wol g
    ```
    

#### Sending a Magic Packet

```bash
wakeonlan AA:BB:CC:DD:EE:FF
# Or:
sudo etherwake -i eth0 AA:BB:CC:DD:EE:FF
```

Notes:

- `wakeonlan` sends UDP broadcasts.
    
- `etherwake` sends raw Ethernet frames and may require root privileges.
    

#### Capturing Magic Packets for Analysis

```bash
sudo tcpdump -i eth0 -s 0 -w wol.pcap 'udp and (dst port 7 or dst port 9) and ether broadcast'
```

Or a simpler live filter:

```bash
tcpdump -n -i eth0 'udp and (port 7 or port 9)'
```

Or live check for the pattern with tshark/Wireshark (look for FF:FF:FF:FF:FF:FF followed by MAC ×16).

---

### 3.3 Windows Usage

#### Enabling WoL

1. Device Manager → Network Adapter → Properties
    
    - Enable "Allow this device to wake the computer"
        
    - Optionally restrict wake-up to "Only allow a magic packet"
        
2. BIOS/UEFI settings for PCI-E/PME wake must also be enabled.
    
3. Domain environments may require:
    
    - Group Policy configurations
        
    - Vendor driver configuration tools
        

#### Sending Magic Packets on Windows

Tools include:

- NirSoft **WakeMeOnLan** (GUI/CLI)
    
- **wolcmd.exe** (third-party)
    
- PowerShell scripts (example provided later)
    

## 4. Magic Packet Format (Detailed Specification)

- **Header:**  
    `FF FF FF FF FF FF` (6 bytes)
    
- **Payload:**  
    `<MAC> × 16` (each MAC is 6 bytes, repeated 16 times)
    
- **Total Payload Length:**  
    102 bytes (excluding frame, IP, and UDP headers)
    
- **Transport:**  
    Raw Ethernet or UDP broadcast (ports 7 or 9)
    
- **Limitations:**  
    Broadcast packets typically do not cross router boundaries unless explicitly permitted or relayed.
    

## 5. Example Scripts

### 5.1 Python Script (UDP Magic Packet Sender)

```python
#!/usr/bin/env python3
# send_wol.py — send a magic packet over UDP

import socket
import sys
import re

def mac_to_bytes(mac: str) -> bytes:
    mac = re.sub('[.:-]', '', mac).lower()
    if len(mac) != 12:
        raise ValueError("MAC address must be 12 hex digits")
    return bytes.fromhex(mac)

def create_magic_packet(mac: str) -> bytes:
    mac_bytes = mac_to_bytes(mac)
    return b'\xff' * 6 + mac_bytes * 16

def send_magic_packet(mac: str, broadcast_ip: str = '255.255.255.255', port: int = 9):
    packet = create_magic_packet(mac)
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
        s.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
        s.sendto(packet, (broadcast_ip, port))

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: send_wol.py <MAC> [broadcast_ip] [port]")
        sys.exit(1)
    mac = sys.argv[1]
    bcast = sys.argv[2] if len(sys.argv) >= 3 else '255.255.255.255'
    port = int(sys.argv[3]) if len(sys.argv) >= 4 else 9
    send_magic_packet(mac, bcast, port)
    print(f"Sent magic packet to {mac} via {bcast}:{port}")
```

### 5.2 PowerShell Scripts

Two versions were included in your draft; you can keep either. The following remains clean and formal:

```powershell
# Send-WoL.ps1 — Send a magic packet to a MAC address

param (
    [Parameter(Mandatory = $true)][string] $Mac,
    [string] $Broadcast = "255.255.255.255",
    [int] $Port = 9
)

function MacToBytes($mac) {
    $clean = $mac -replace '[-:.]', ''
    if ($clean.Length -ne 12) { throw "MAC must be 12 hex digits" }
    $bytes = for ($i=0; $i -lt 12; $i+=2) { [byte]::Parse($clean.Substring($i,2),'HexNumber') }
    return ,$bytes
}

$macBytes = MacToBytes $Mac
$packet = [byte[]]@(0xFF,0xFF,0xFF,0xFF,0xFF,0xFF) + (foreach ($i in 1..16) { $macBytes })

$udp = New-Object System.Net.Sockets.UdpClient
$udp.EnableBroadcast = $true
$endpoint = New-Object System.Net.IPEndPoint ([System.Net.IPAddress]::Parse($Broadcast)), $Port
$udp.Send($packet, $packet.Length, $endpoint) | Out-Null
$udp.Close()

Write-Output "Magic packet sent to $Mac via $Broadcast:$Port"
```


## 6. Attack Surface and Abuse Scenarios

- **Local Broadcast Abuse:**  
    In unsegmented networks, a malicious host can broadcast WoL packets to many devices simultaneously.
    
- **Combination with Remote Access Services:**  
    Attackers may wake hosts and then attempt RDP/SMB/SSH access using stolen credentials.
    
- **Wake Storms:**  
    Repeated or mass wake-ups can deliberately increase noise, strain resources, or disrupt operations.
    
- **Cross-Subnet Misconfigurations:**  
    Improperly configured directed broadcast forwarding can expose WoL to unintended networks.
    

## 7. Detection and Forensic Considerations

NICs typically do not log wake events, so analysis must rely on external data sources:

- **Network Capture Analysis:**  
    Look for the `FF FF FF FF FF FF` + `MAC × 16` pattern.

    ```bash
    sudo tcpdump -i eth0 -w wol.pcap udp and \(port 7 or port 9\)
    ```
    
- **Switch Logs & CAM Tables:**  
    Observe link activity or MAC aging events corresponding with wake times.
    
- **DHCP Logs:**  
    Systems often request a lease shortly after waking.
    
- **Management System Logs:**  
    MDM/WSUS/patching tools may indicate unexpected check-ins.
    
- **System Boot Logs:**  
    Correlate OS event logs with known or unknown wake events.
    
- **IDS Signatures:**  
    Custom signatures can match the magic-packet pattern to identify unexpected WoL traffic.

## 8. Mitigation Strategies and Best Practices

- Disable WoL in BIOS/UEFI and NIC settings when not required.
    
- Restrict broadcast traffic between VLANs and across routers.
    
- Use ACLs to limit which hosts may send WoL packets.
    
- Prefer authenticated out-of-band management solutions for remote power control.
    
- Monitor and alert on magic-packet traffic outside maintenance windows.
    
- Maintain an inventory of MAC addresses authorized for WoL.
    
- Configure NICs to require magic packets only, minimizing accidental wake triggers.
    
- Avoid exposing WoL mechanisms across the Internet unless encapsulated within authenticated channels.
    

## Safe Lab Scenarios for Ethical Learning

### 1. Basic Two-Host Wake-on-LAN Lab

This scenario demonstrates the fundamental WoL workflow.

1. Prepare two physical machines on the same Layer-2 network segment. (WoL support is inconsistent in virtualized environments unless the hypervisor explicitly supports wake-packet passthrough.)
    
2. On the target system, enable WoL in BIOS/UEFI and configure the NIC for WoL within the operating system (for example, `ethtool` on Linux or Device Manager on Windows).
    
3. On the sender system, start a packet capture using Wireshark or `tcpdump`. Send a magic packet using one of the provided Python or PowerShell scripts. Observe the magic packet in the capture and verify that the target system powers on as expected.
    
This exercise demonstrates packet structure, delivery requirements, and NIC wake behavior.

### 2. Packet Capture and Detection Lab

This scenario focuses on packet analysis and detection logic.

1. Configure port mirroring (SPAN) on the switch so that all broadcast traffic from the target VLAN is replicated to a monitoring system.
    
2. Use Wireshark or `tcpdump` to capture traffic and filter specifically for WoL patterns, such as the six `FF` bytes followed by the repeated MAC address.
    
3. Develop a simple detection script (for example, in Python) that continuously inspects packet payloads for the WoL signature (`FF FF FF FF FF FF` followed by MAC × 16) and generates an alert.  
    This helps reinforce both payload inspection techniques and signature-based detection concepts.
    

### 3. Hardening and Policy Enforcement Lab

This scenario focuses on understanding and applying defensive controls.

1. Create a configuration checklist for disabling or restricting WoL:  
    BIOS/UEFI configurations, NIC driver power-management settings, and Group Policy controls (for Windows environments).
    
2. Apply and test network-layer restrictions. Implement ACLs or firewall rules that block UDP broadcasts to ports 7 and 9 from unauthorized segments. Confirm that legitimate management tools still function as intended.
    
3. Document the effect of segmentation and ACLs on the ability to deliver magic packets across VLAN boundaries.
    

This exercise helps illustrate how network design and access control influence WoL behavior.


## Practical Checklists

### Device-Level Verification Checklist

Use this list to confirm whether a device is correctly configured for WoL or deliberately restricted based on policy.

- BIOS/UEFI configuration explicitly enables or disables WoL/PME according to organizational requirements.
    
- NIC driver settings (Linux `ethtool` or Windows Device Manager) match policy, including whether magic-packet wake is allowed.
    
- For Linux, `ethtool` output confirms the expected status (for example, `Wake-on: g` when WoL is required).
    
- If WoL is enabled, administrators maintain an updated record of permitted MAC addresses and scheduled maintenance windows.
    

### Network Hardening Checklist

Use this list to ensure the network infrastructure does not allow uncontrolled magic-packet delivery.

- Broadcast domains are restricted, and directed broadcasts are disabled or tightly controlled on routers.
    
- ACLs limit which hosts or management systems are authorized to send broadcast or directed-broadcast UDP traffic to ports 7 and 9.
    
- Monitoring and alerting detect abnormal volumes of WoL traffic or packets originating outside approved maintenance windows.
    
- Out-of-band or authenticated remote management solutions (such as IPMI, vPro/AMT, or vendor-specific management controllers) are preferred for remote power operations across subnets or remote locations.
    