# TCP/IP Server Socket

In Java, server applications are created using the `ServerSocket` class, which is specifically designed to listen for and accept incoming network connections from clients.

-   **Core Function**: A `ServerSocket` listens on a specific port for connection requests from local or remote client programs.

-   **Distinction from `Socket`**: Unlike a regular `Socket`, which represents a point-to-point connection, a `ServerSocket` acts as a "listener" that waits for clients to connect. When a client connects, the `ServerSocket` creates a new `Socket` object to handle the communication with that specific client.

### Constructors

* When creating a `ServerSocket`, **port** on which to listen on must be specified. 
* Can also define a **queue length**, which is the maximum number of incoming connections that can be pending before the server starts refusing them. The default queue length is 50.

```java
ServerSocket(int port) throws IOException
```

Creates a server socket on the specified port with a queue length of 50.

```java
ServerSocket(int port, int maxQueue) throws IOException
```

Creates a server socket on the specified port with a maximum queue length of `maxQueue`.

```java
ServerSocket(int port, int maxQueue, InetAddress localAddress) throws IOException
```

Creates a server socket that binds to a specific IP address (`localAddress`), which is useful for hosts with multiple network interfaces.

> **Note:** All these constructors can throw an `IOException` if the port is already in use or another error occurs.


## Accepting Connections

The primary method of a `ServerSocket` is `accept()`, which waits for a client to connect.

```java
Socket accept() throws IOException
```

-   `accept()` is a **blocking call**, meaning the program execution will pause at this line until a client establishes a connection.

-   Once a connection is made, `accept()` returns a regular `Socket` object, which is then used for all further communication with that client.

## Datagrams: Connectionless Communication

While TCP/IP provides reliable, connection-oriented communication, its built-in mechanisms for congestion control and handling packet loss can introduce overhead, making it less efficient for certain applications.

For faster, connectionless communication, Java provides **datagrams**, which use the **User Datagram Protocol (UDP)**. A datagram is an independent, self-contained bundle of information sent between machines.

-   **No Guarantees**: With datagrams, there is no guarantee of delivery, no confirmation of receipt, and no assurance of the order in which packets will arrive.

-   **"Fire and Forget"**: Sending a datagram is like like a blind throw, once it's sent, there's no way to know if it was caught, dropped, or lost.

Java implements datagram communication using two main classes:
-   `DatagramPacket`: The data container that holds the message.

-   `DatagramSocket`: The mechanism for sending and receiving the `DatagramPacket`.

## `DatagramSocket`

A `DatagramSocket` is used to send and receive datagrams. It can be bound to a specific port or let the system assign an available one.

### Constructors

Creates a socket bound to any available local port:
```java
DatagramSocket() throws SocketException
```

Creates a socket bound to the specified `port`:
```java
DatagramSocket(int port) throws SocketException
```

Binds to a specific `port` and `ipAddress`:
```java
DatagramSocket(int port, InetAddress ipAddress) 
	throws SocketException
```

Binds to a `SocketAddress` (typically an `InetSocketAddress` that combines an IP and port):
```java
DatagramSocket(SocketAddress address) throws SocketException
```

### Key Methods

```java
void send(DatagramPacket packet) throws IOException

void receive(DatagramPacket packet) throws IOException
```

| Method                        | Description                                                                                                                   |
| :---------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| `void send(..)`               | Sends the specified packet.                                                                                                   |
| `void receive(..)`            | A **blocking call** that waits to receive a packet and fills the buffer of the provided `packet`.                             |
| `setSoTimeout(int millis)`    | Sets a timeout in milliseconds. If a `receive()` call blocks for longer than this time, a `SocketTimeoutException` is thrown. |
| `isBound()` / `isConnected()` | Returns whether the socket is bound to an address or connected to a server.                                                   |

> Since `DatagramSocket` implements `AutoCloseable`, it is recommended to use it within a **try-with-resources** block to ensure it is always closed properly.


## `DatagramPacket`

A `DatagramPacket` is a data container. One constructor form is used for receiving data (by providing a buffer) and another for sending data (by including the destination address and port).

### Constructors

**Receiving:** Creates a packet with a buffer (`data`) of a certain `size` to store incoming data:
```java
DatagramPacket(byte[] data, int size)
```

**Receiving:** Similar to the above, but with a specified `offset` in the buffer:
```java
DatagramPacket(byte[] data, int offset, int size)
```

**Sending:** Creates a packet containing the `data` to be sent to the specified `ip` and `port`:
```java
DatagramPacket(byte[] data, int size, InetAddress ipAddress, int port)
```

**Sending:** Similar to the above, but allows specifying an `offset` and `size` for the data:
```java
DatagramPacket(byte[] data, int offset, int size, InetAddress ipAddress, int port)
```

### Key Methods

| Method                       | Description                                                                                             |
| :--------------------------- | :------------------------------------------------------------------------------------------------------ |
| `getAddress()` / `getPort()` | Returns the IP address and port of the sender (for received packets) or destination (for sent packets). |
| `getData()` / `getLength()`  | Returns the byte array buffer and the actual length of the data received or to be sent.                 |
| `setData()` / `setLength()`  | Modifies the data buffer, its offset, and its length.                                                   |
| `setAddress()` / `setPort()` | Sets the destination address and port for sending a packet.                                             |

## Datagram Communication Example

A simple client-server model using datagrams. One instance acts as a server, listening for keyboard input, while the other acts as a client, printing the received messages.

```java

import java.net.*;

class WriteServer {
    public static int serverPort = 5000;
    public static int clientPort = 5001;
    public static int buffer_size = 1024;
    
    public static DatagramSocket ds;
    
    public static byte[] buffer = new byte[buffer_size];

    public static void TheServer() 
	    throws Exception {
        int pos = 0;
        System.out.println("Server is running. Type messages and press Enter to send.");
        while (true) {
            int c = System.in.read();
            switch (c) {
                case -1:
                    System.out.println("Server Quits.");
                    ds.close();
                    return;
                case '\r': // Ignore carriage return
                    break;
                case '\n': // Send packet on newline
					DatagramPacket packet = new DatagramPacket(buffer, pos, InetAddress.getLocalHost(), clientPort);
					
					ds.send(packet);
                    pos = 0; // Reset buffer position
                    break;
                default:
                    buffer[pos++] = (byte) c;
            }
        }
    }

    public static void TheClient() 
	    throws Exception {
        System.out.println("Client is running. Waiting for messages...");
        while (true) {
            DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
            
            ds.receive(packet);
            System.out.println("Received: " 
	            + new String(packet.getData(), 0, packet.getLength()));
        }
    }

    public static void main(String[] args) 
	    throws Exception {
	    
        if (args.length == 1) {
            ds = new DatagramSocket(serverPort);
            TheServer();
        } else {
            ds = new DatagramSocket(clientPort);
            TheClient();
        }
    }
}
```



In the first terminal, start the Client:
```bash
java WriteServer
```

In the second terminal, start the Server by giving some input:
```bash
java WriteServer 1
```

