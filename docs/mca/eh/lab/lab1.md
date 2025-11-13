# Lab 1: Wake-on-LAN (WoL)

**Objective:** To provide a formal, detailed analysis of Wake-on-LAN (WoL), covering its technical implementation, security implications, configuration, and practical usage in both offensive and defensive contexts.

## 1. Introduction to Wake-on-LAN

Wake-on-LAN (WoL) is an industry-standard protocol that allows a computer in a low-power state (e.g., sleep, hibernate, or soft-off) to be remotely awakened. This is achieved by sending a specially crafted network message known as a **magic packet**. WoL is a fundamental technology for enterprise system administration, enabling remote maintenance, patch management, and power conservation strategies. However, its lack of built-in security features also makes it a vector for misuse that security professionals must understand.

## 2. Core Concepts and Technical Breakdown

### 2.1. System Power States and NIC Behavior

WoL functionality depends on the network interface card (NIC) remaining in a low-power listening mode even when the rest of the system is powered down. This is defined by ACPI (Advanced Configuration and Power Interface) power states:

- **S3 (Standby/Sleep):** RAM is still powered. The system can wake very quickly.
- **S4 (Hibernate):** System state is saved to disk, and the system powers down.
- **S5 (Soft-Off):** The system is fully shut down, but the power supply unit (PSU) still provides standby power to certain components, including the NIC for WoL.

For WoL to function, the NIC must continue to receive power and listen for the magic packet in these states.

### 2.2. The Magic Packet

The magic packet is the trigger that initiates the wake-up sequence. It is a small, simple broadcast frame, and its payload has a unique structure that NICs are designed to recognize.

**Magic Packet Structure:**

| Component             | Size      | Description                                                                 | Example (Hex)                  |
| --------------------- | --------- | --------------------------------------------------------------------------- | ------------------------------ |
| **Synchronization Stream** | 6 bytes   | A sequence of six `FF` bytes, acting as a preamble.                         | `FF:FF:FF:FF:FF:FF`            |
| **MAC Address Block** | 96 bytes  | The target computer's 6-byte MAC address, repeated 16 consecutive times.     | `A1:B2:C3:D4:E5:F6` (x16)      |
| **Total Payload**     | **102 bytes** | The complete payload that the NIC's circuitry scans for.                    |                                |

The NIC constantly scans incoming frames for this pattern. If it detects the 6-byte preamble followed by 16 instances of its own MAC address, it signals the motherboard to initiate the system boot process.

### 2.3. Packet Transmission

Magic packets are typically sent as broadcast frames at Layer 2 or Layer 3:

- **Layer 2 (Ethernet Broadcast):** The magic packet is encapsulated in an Ethernet frame with the destination MAC address `FF:FF:FF:FF:FF:FF`. This is the most common method and is confined to the local network segment (VLAN).
- **Layer 3 (IP Broadcast):** The packet is sent as a UDP datagram, typically to port 7 or 9, to the subnet's broadcast address (e.g., `192.168.1.255`). This method is also typically confined to the local subnet, as routers do not forward broadcast traffic by default.

**Cross-Subnet WoL:** To wake a machine in a different subnet, a **directed broadcast** forwarding must be configured on the router, or a relay agent must be used. This is a significant security consideration, as it can expose the WoL mechanism to a wider network.

## 3. Security Analysis

WoL was designed for convenience, not security. It has **no authentication or encryption**, making it a tool that can be easily abused.

### 3.1. Offensive Scenarios and Attack Surface

- **Increasing Attack Surface:** An attacker on the local network can wake up machines that were intentionally powered down for security, such as servers awaiting patching or workstations after hours. This brings their services (e.g., RDP, SSH, SMB) back online and makes them vulnerable to attack.

- **Lateral Movement:** After compromising one machine, an attacker can use WoL to wake other systems on the same subnet to probe them for vulnerabilities.

- **Bypassing Physical Security:** If an attacker gains remote access to a single powered-on machine in an office, they can use WoL to power on other sensitive systems that are otherwise physically secured.

- **Denial of Service / Disruption:** An attacker could create a "wake storm" by repeatedly sending magic packets to all devices, causing disruption and potentially masking other malicious activity.

### 3.2. Defensive Measures and Monitoring

- **Network Segmentation:** Isolate sensitive systems in separate VLANs to contain broadcast traffic, including magic packets.

- **Disable Directed Broadcasts:** Ensure routers are configured to block directed broadcast traffic to prevent cross-subnet WoL abuse.

- **Port Security:** On managed switches, restrict which MAC addresses can communicate on which ports.

- **IDS/IPS Signatures:** Deploy network monitoring tools with signatures to detect and alert on the presence of magic packets, especially outside of normal maintenance windows.

- **Log Correlation:** Correlate network alerts (magic packet detected) with system boot logs, DHCP lease logs, and authentication logs to identify unauthorized wake events.

## 4. Implementation and Configuration

Enabling WoL is a two-step process: first in the system's firmware (BIOS/UEFI) and then in the operating system.

### 4.1. Step 1: BIOS/UEFI Configuration

This is a mandatory prerequisite.
1.  Reboot the computer and enter the BIOS/UEFI setup utility (commonly by pressing `F2`, `F10`, or `Del`).
2.  Navigate to the "Power Management" or "Advanced" settings.
3.  Look for an option named **"Wake on LAN," "Power On by PCI-E Device,"** or **"PME (Power Management Event) Wake Up."**
4.  Enable this setting, save changes, and exit.

### 4.2. Step 2: Operating System Configuration

#### Linux

On Linux, the `ethtool` utility is the standard for configuring NIC properties.

1.  **Check WoL Status:**
    ```bash
    sudo apt install ethtool
    
    # Replace 'eth0' with your network interface name
    sudo ethtool eth0 | grep "Wake-on"
    ```
    The output `Wake-on: g` means WoL with magic packets is enabled. `d` means disabled.

2.  **Enable WoL (Temporarily):**
    ```bash
    sudo ethtool -s eth0 wol g
    ```
    This setting will be lost on reboot.

3.  **Enable WoL (Persistently):**
    - **systemd (Modern approach):** Create a `systemd-link` file.
      ```bash
      # /etc/systemd/network/50-wired.link
      [Match]
      MACAddress=A1:B2:C3:D4:E5:F6

      [Link]
      NamePolicy=kernel
      WakeOnLan=magic
      ```
    - **network-manager:** Use the `nmcli` command.
      ```bash
      nmcli c mod "My Connection" 802-3-ethernet.wake-on-lan magic
      ```
    - **/etc/network/interfaces (Legacy):**
      ```
      auto eth0
      iface eth0 inet dhcp
          ethernet-wol g
      ```

#### Windows

1.  Open **Device Manager** and locate your network adapter.
2.  Right-click the adapter and select **Properties**.
3.  Go to the **Power Management** tab.
4.  Check the boxes for:
    - `Allow this device to wake the computer.`
    - `Only allow a magic packet to wake the computer.` (This is crucial to prevent spurious wake-ups).
5.  Go to the **Advanced** tab. Look for a property named "Wake on Magic Packet" and ensure it is **Enabled**.


## 5. Practical Tooling and Scripts

### 5.1. Sending Magic Packets

- **Linux:**
  ```bash
  # Using wakeonlan (sends UDP packets)
  sudo apt install wakeonlan
  wakeonlan A1:B2:C3:D4:E5:F6

  # Using ether-wake (sends Layer 2 frames, requires root)
  sudo apt install ether-wake
  sudo ether-wake -i eth0 A1:B2:C3:D4:E5:F6
  ```

- **Windows:**
  - Third-party tools like NirSoft's `WakeMeOnLan` are popular.
  - PowerShell can be used for scripting.

### 5.2. Example Scripts

#### Python Magic Packet Sender
```python
#!/usr/bin/env python3
# send_wol.py: Sends a magic packet to a specified MAC address.

import socket
import sys
import re

def create_magic_packet(mac_address: str) -> bytes:
    """Creates the 102-byte magic packet payload."""
    # Sanitize MAC address and convert to bytes
    mac = re.sub(r'[:\-]', '', mac_address).lower()
    if len(mac) != 12:
        raise ValueError("Invalid MAC address format")
    mac_bytes = bytes.fromhex(mac)
    
    # Construct packet: 6 bytes of FF + 16 repetitions of MAC
    return b'\xff' * 6 + mac_bytes * 16

def send_magic_packet(mac: str, broadcast_ip: str = '255.255.255.255', port: int = 9):
    """Sends the magic packet via a UDP broadcast."""
    packet = create_magic_packet(mac)
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
        s.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
        s.sendto(packet, (broadcast_ip, port))
    print(f"Magic packet sent to {mac} via {broadcast_ip}:{port}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(f"Usage: {sys.argv[0]} <MAC_ADDRESS> [BROADCAST_IP] [PORT]")
        sys.exit(1)
    
    send_magic_packet(*sys.argv[1:])
```

#### PowerShell Magic Packet Sender
```powershell
# Send-WoL.ps1: Sends a magic packet using PowerShell.

param (
    [Parameter(Mandatory = $true)]
    [string]$Mac,

    [string]$Broadcast = "255.255.255.255",
    [int]$Port = 9
)

try {
    # Sanitize MAC and convert to byte array
    $macBytes = $Mac -replace '[-:]' | ForEach-Object { [byte[]]($_.Substring(0,2), $_.Substring(2,2), $_.Substring(4,2), $_.Substring(6,2), $_.Substring(8,2), $_.Substring(10,2)) -join '' }
    
    # Construct packet
    $packet = [byte[]](,0xFF * 6) + ($macBytes * 16)

    # Send packet
    $udpClient = New-Object System.Net.Sockets.UdpClient
    $udpClient.Connect($Broadcast, $Port)
    $udpClient.Send($packet, $packet.Length) | Out-Null
    $udpClient.Close()

    Write-Host "Magic packet successfully sent to $Mac."
}
catch {
    Write-Error "Failed to send magic packet: $_"
}
```

## 6. Hands-On Lab Scenarios

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



## 7. Detection and Forensic Considerations

#### Capturing Magic Packets for Analysis

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
    

## 9 Practical Checklists

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

