# Networking in Java

Java's powerful networking capabilities, primarily found in the `java.net` package, have been a cornerstone of its success. These classes provide a convenient and robust way for programmers to work with network resources. Since JDK 11, the introduction of the **HTTP Client API** in the `java.net.http` package has further modernized and strengthened Java's position in network programming.

## Core Networking Concepts

At the heart of all modern networking is the concept of a **socket**, which represents an endpoint in a network connection.

### Sockets and Ports

A socket allows a single computer to manage connections with multiple clients simultaneously. This is achieved through the use of **ports**, which are numbered sockets on a machine.

*   **Server Process:** A server "listens" on a specific port for incoming client connection requests.

*   **Multiple Clients:** A server can accept connections from multiple clients on the same port, with each connection forming a unique session. To handle these simultaneous connections efficiently, a server must be multithreaded or use other multiplexing techniques.

### Protocols

Communication across sockets is governed by protocols.

*   **IP (Internet Protocol):** A low-level protocol that breaks data into small packets and sends them to a destination address. IP does not guarantee packet delivery.

*   **TCP (Transmission Control Protocol):** A higher-level, connection-oriented protocol built on top of IP. It ensures reliable data transmission by sequencing, acknowledging, and retransmitting packets as needed. This makes it ideal for applications where data integrity is crucial.

*   **UDP (User Datagram Protocol):** A connectionless protocol that also runs on top of IP. UDP is faster than TCP because it does not guarantee delivery or order. This makes it suitable for time-sensitive applications like video streaming or online gaming, where speed is more important than perfect data accuracy.

### Common Ports

TCP/IP reserves the lower 1,024 ports for well-known services. Some common examples include:

| Port | Protocol | Service                                |
| :--- | :------- | :------------------------------------- |
| 21   | FTP      | File Transfer Protocol                 |
| 23   | Telnet   | Remote terminal access                 |
| 25   | SMTP     | Simple Mail Transfer Protocol (E-mail) |
| 80   | HTTP     | Hypertext Transfer Protocol            |
| 443  | HTTPS    | HTTP Secure                            |
| 119  | NNTP     | Network News Transfer Protocol         |

### Internet Addresses (IP Address)

Every computer on the internet is identified by a unique number called an Internet address.

*   **IPv4 (Internet Protocol, version 4):** The original addressing system, which uses 32-bit values (organized as four 8-bit numbers, e.g., `192.168.1.1`).

*   **IPv6 (Internet Protocol, version 6):** A newer, 128-bit addressing system designed to overcome the limitations of IPv4 and provide a vastly larger address space.

## Java Networking Classes and Interfaces

Java provides comprehensive support for networking through its core packages.

*   **`java.net`:** Contains the original, foundational networking classes available since Java 1.0. It supports both TCP (for reliable streams) and UDP (for fast, point-to-point datagrams).

*   **`java.net.http`:** A modern package introduced in JDK 11 that provides an updated and more flexible API for making HTTP requests.

### The `InetAddress` Class

The `InetAddress` class is used to represent an IP address. It encapsulates both the numerical IP address (like `216.92.65.4`) and its corresponding domain name (like `www.HerbSchildt.com`). This class is essential for translating human-readable hostnames into machine-readable IP addresses. `InetAddress` can handle both IPv4 and IPv6 addresses.

#### Factory Methods

The `InetAddress` class does not have public constructors. Instead, you create instances using **factory methods**, which are static methods that return an object of the class. This approach allows for clearer method names that describe how the object is being created.

**Common `InetAddress` Factory Methods:**

```java
static InetAddress getLocalHost()
	throws UnknownHostException
```

Returns an `InetAddress` object representing the local machine. Throws `UnknownHostException` if the local host address cannot be found.

```java
static InetAddress getByName(String hostName)
	throws UnknownHostException
```
Returns an `InetAddress` for the specified host name. Throws `UnknownHostException` if the host cannot be resolved.

```java
static InetAddress[] getAllByName(String hostName)
	throws UnknownHostException
```
Returns an array of `InetAddress` objects, as a single domain name can map to multiple IP addresses for load balancing and redundancy. Throws `UnknownHostException` if the host cannot be resolved.

#### Example: Using `InetAddress`

The following code demonstrates how to use these factory methods to get IP address information.

```java
// Demonstrate InetAddress.
import java.net.*;

class InetAddressTest {
    public static void main(String[] args) throws UnknownHostException {
        // Get the local host address
        InetAddress localAddress = InetAddress.getLocalHost();
        System.out.println("Local Host: " + localAddress);

        // Get the address for a specific domain
        InetAddress herbSchildtAddress = InetAddress.getByName("www.HerbSchildt.com");
        System.out.println("HerbSchildt.com: " + herbSchildtAddress);

        // Get all addresses for a domain
        InetAddress[] nbaAddresses = InetAddress.getAllByName("www.nba.com");
        System.out.println("NBA.com addresses:");
        for (int i = 0; i < nbaAddresses.length; i++) {
            System.out.println("  " + nbaAddresses[i]);
        }
    }
}
```

**Example Output:**

```
Local Host: default/166.203.115.212
HerbSchildt.com: www.HerbSchildt.com/216.92.65.4
NBA.com addresses:
  www.nba.com/23.67.86.30
  www.nba.com/2600:1407:2800:3a4:0:0:0:1f51
  www.nba.com/2600:1407:2800:3ad:0:0:0:1f51
```

#### Other Useful `InetAddress` Methods

Once you have an `InetAddress` object, you can call several instance methods on it:

*   `byte[] getAddress()`: Returns the raw IP address as a byte array.
*   `String getHostAddress()`: Returns the IP address as a String (e.g., "216.92.65.4").
*   `String getHostName()`: Returns the host name for this IP address.
*   `boolean isMulticastAddress()`: Returns `true` if the address is a multicast address.
*   `String toString()`: Returns a String representation of the address, including both the host name and IP address.
*   `boolean equals(Object other)`: Returns `true` if this object represents the same IP address as the `other` object.
