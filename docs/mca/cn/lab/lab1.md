# IP Addressing

## Classful Addressing (Class A: 10.0.0.0/8)

Set up a basic LAN in GNS3 using a hub and four VPCS nodes. Use Class A private IP addresses (10.0.0.0/8), assign static IPs, test connectivity, and observe ARP/ICMP behavior.

• All PCs (VPCS1 to VPCS4) should communicate via the hub or switch.
• Each PC should reply to ping from other PCs.
• ARP tables should show MAC mappings after pinging.
• Wireshark should capture ARP and ICMP packets.

### Steps:

1. Open GNS3 → create a new project (e.g., `LAN_Hub_Test`).
	
2. **Add Devices**
    
    - Search for and add a **Hub** to the workspace.
        
    - Add 4 **VPCS nodes** (name them VPCS1 to VPCS4).
        
3. **Connect the Devices**
    
    - Use the **Add a Link** tool (cable icon).
        
    - Connect each VPCS’s `Ethernet0` interface to a separate port on the hub.
        
4. **Assign IP Addresses (Class A: 10.0.0.0/8)**  
    Open each VPCS console and enter:
    
```
ip 10.0.0.1 255.0.0.0    → VPCS1

ip 10.0.0.2 255.0.0.0    → VPCS2

ip 10.0.0.3 255.0.0.0    → VPCS3

ip 10.0.0.4 255.0.0.0    → VPCS4

save     → On each VPCS after assigning IP
```
    
5. **Test Network Connectivity**  
    From **VPCS1**, run:
    
```
ping 10.0.0.2
ping 10.0.0.3
ping 10.0.0.4
```
    
- Each ping should return replies → means successful communication.
      
6. **Check ARP Table on VPCs  (optional)**
    - You should see IP-to-MAC mappings of other PCs.        
```
show arp
```


### Understanding What’s Happening
    
- When pinging a device for the first time: An **ARP Request** is sent to find the destination MAC. The target replies with an **ARP Reply**. This MAC address is stored in the ARP table.
	
- **ICMP Echo Request** and **Echo Reply** are what you see during a ping.
	
- **TTL (Time To Live)** field in the IP header indicates the number of routes (hops) a packet has taken. If TTL expires before reaching the destination then packet is dropped. This helps avoid endless loops:
	
	- Windows: 128, Linux: 64, Routers: 255
            

### Optional – Capture Traffic with Wireshark
    
- Right-click a link → Start capture with Wireshark.
	
- You’ll see ARP and ICMP packets when you ping.
        
### Extra Practice
    
- Replace **Hub** with a **Switch** → compare behavior.
	
- Try same setup with:
	
	- Class B: `172.16.0.0/16`
		
	- Class C: `192.168.1.0/24`
		
- Notice differences in IP range and subnet masks.
	
## Outcome

- All PCs must be on the **same subnet** for direct communication.
    
- Hub broadcasts traffic to all nodes → good for observing ARP behavior.
    
- Switches only forward to intended recipients (MAC-based filtering).
    

