# TCP/IP Client Sockets

TCP/IP sockets are the foundation for creating reliable, two-way, and continuous connections between programs over a network. Think of a TCP socket connection as a telephone call for data: once the call is established, both parties can communicate back and forth until one hangs up.

In Java, the `Socket` class allows a client program to connect to a server, which can be on the local machine or anywhere on the internet (security permissions allowing).

At its core, a TCP/IP connection is about **reliability**. Think of it not just as sending a letter, but as a registered courier service. The courier (TCP) ensures your package (data) arrives in one piece, in the correct order, and gets a signature (acknowledgment) upon delivery. If something goes wrong, the courier tries again. This makes TCP the ideal choice for most applications where data integrity is non-negotiable, like web browsing, file transfers, and database connections.

In Java, this client-side interaction is managed primarily by the `java.net.Socket` class. The client's role is always to **initiate** the connection to a server that is already listening.

## Client vs. Server Sockets

Java provides two primary classes for TCP communications, each with a distinct role:

*   **`ServerSocket` (The Listener):** This class is used by a *server* application. Its job is to "listen" on a specific network port for incoming connection requests from clients.

*   **`Socket` (The Initiator):** This class is used by a *client* application. Its purpose is to initiate a connection to a listening `ServerSocket`.

This document focuses on the client-side `Socket` class.

### Establishing a Connection

Creating a `Socket` object implicitly establishes a connection. Provide the server's address and the port number, and the `Socket` constructor handles the underlying network handshake without any explicit method calls.

#### Primary Constructors:

```java
Socket(String hostName, int port)
``` 
Creates a socket by connecting to the specified `hostName` (e.g., `"www.google.com"`) on the given `port`.
*   Throws `UnknownHostException` if the host's IP address cannot be found.
*   Throws `IOException` if an I/O error occurs during the connection.

```java
Socket(InetAddress ipAddress, int port)
```
: Creates a socket by connecting to a pre-existing `InetAddress` object on the specified `port`.
*   Throws `IOException` if an I/O error occurs.

### Managing and Inspecting the Socket

The `Socket` class provides several methods to check its state and connection details.

| Method | Description |
| :--- | :--- |
| `InetAddress getInetAddress()` | Returns the `InetAddress` of the remote server. |
| `int getPort()` | Returns the remote port the socket is connected to. |
| `int getLocalPort()` | Returns the local port the socket is bound to on your machine. |
| `boolean isConnected()` | Returns `true` if the socket is successfully connected to a server. |
| `boolean isBound()` | Returns `true` if the socket has been bound to a local address and port. |
| `boolean isClosed()` | Returns `true` if the socket has been closed. |

### Closing the Socket: The Modern Approach

It is crucial to close a socket when you are finished with it to release system resources.

The `Socket` class implements the `AutoCloseable` interface, which makes the **try-with-resources** block the recommended way to manage a socket's lifecycle. This ensures that the socket (and its associated streams) are automatically closed at the end of the `try` block, whether it completes normally or an exception is thrown.

### Communicating Over the Socket

Once a `Socket` is connected, data can be sent and receive using Java's I/O streams.

*   `InputStream getInputStream()`: Returns an `InputStream` to read data *sent by the server*.

*   `OutputStream getOutputStream()`: Returns an `OutputStream` to write data *to the server*.

**Crucial Best Practice: Wrapping the Streams**  
Working with raw byte streams is tedious and error-prone. Almost always wrap them in higher-level classes.

- **For Text Data (like HTTP):** Use `BufferedReader` to read text line-by-line and `PrintWriter` to send text.
    
- **For Binary Data (like files):** Use `BufferedInputStream` and `BufferedOutputStream` for efficient byte-level I/O.

### Example: Simple "Whois" Client

Creating a client that connects to a "whois" server (port 43). The client sends a domain name and prints the registration information returned by the server.

**Note:** The classic `whois.internic.net` server can be unreliable. The code is correct, but the server may not respond.

The Socket is not closed manually using `close()` but by using `try-with-resources`

```java
import java.net.*;
import java.io.*;

class WhoisProtocol {
    public static void main(String[] args) throws Exception {
        // The domain to look up.
        String domainName = (args.length == 0 ? "oracle.com" : args[0]);

        // Creating a socket in a try-with-resources block.
        try ( Socket s = new Socket("whois.internic.net", 43) ) 
        {
            // Obtain input and output streams.
            InputStream in = s.getInputStream();
            OutputStream out = s.getOutputStream();
			
            // Construct the request string
            String request = domainName + "\n";
			// convert request to bytes
			byte[] requestBytes = request.getBytes();
	        // Sending request
            out.write(requestBytes);

            // Read the server's response and print it
            int c;
            while ((c = in.read()) != -1) {
                System.out.print((char) c);
            }
        }
        // The 's' socket is now guaranteed to be closed.
    }
}
```

## Advanced Guide to TCP/IP Client Sockets

### The Lifecycle of a Client Socket

Every client socket follows a clear, three-stage lifecycle:

1.  **Connection:** The client reaches out to a server and establishes a dedicated, two-way communication channel.

2.  **Communication:** The client and server exchange data over this channel using I/O streams.

3.  **Termination:** The connection is closed, and all resources are released.

#### 1. Connection: Initiating the Handshake

To create a connection, instantiate a `Socket` object, providing the server's address and port. This single action performs the entire network handshake.

The two primary ways to create a client socket:
```java
// 1. By host name (most common)
Socket socket = new Socket("example.com", 80); 
// Connect to the web server for example.com
```

```java
// 2. By a pre-resolved InetAddress object
InetAddress addr = InetAddress.getByName("example.com");
Socket socketByIp = new Socket(addr, 80);
```

**Crucial Best Practice: Timeouts**
If the server is down or a firewall is blocking the connection, program will hang indefinitely. A professional application **must** set a connection timeout.

```java
import java.net.Socket;
import java.net.InetSocketAddress;
import java.io.IOException;

// Set a 5-second connection timeout
int timeoutMs = 5000;
Socket socket = new Socket();
socket.connect(new InetSocketAddress("example.com", 80), timeoutMs);
```

#### 2. Communication: Sending and Receiving Data

Once connected, a `Socket` gives access to raw `InputStream` and `OutputStream`. However, it is almost always better to **wrap** these streams in more convenient, higher-level classes.

*   **For Text Data (like HTTP):** Use `BufferedReader` to read text line-by-line and `PrintWriter` to send text. This is far easier than manually handling bytes and character encodings.

*   **For Binary Data (like files):** Use `BufferedInputStream` and `BufferedOutputStream` for efficient byte handling.

**Best Practice: Always specify character encoding (like UTF-8) and use buffering.**

```java
// Wrap the raw streams for efficient and easy text communication
PrintWriter out = new PrintWriter(socket.getOutputStream(), true); 
// 'true' for auto-flushing

BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream(), "UTF-8"));
```

#### 3. Termination: Hanging Up Gracefully

Releasing network resources is critical. A failure to close sockets can lead to resource leaks that crash your application.

The `Socket` class implements the `AutoCloseable` interface, making the **try-with-resources** statement the unequivocally correct way to manage its lifecycle. It guarantees that `socket.close()` is called, even if errors occur.

```java
try (Socket socket = new Socket("example.com", 80)) {
    // ... communication logic here ...
} // socket.close() is automatically called right here!
```

### Simple HTTP GET Client

Sending an HTTP GET request to a web server and printing the response.

```java
import java.net.*;
import java.io.*;

public class HttpClient {

    public static void main(String[] args) {
        String host = "example.com";
        int port = 80;
        
        try (Socket socket = new Socket(host, port)) {
			
            // Setting a 5-second read timeout on the socket.
            socket.setSoTimeout(5000);
		
            // 1. WRAP THE STREAMS for easy text-based communication.
            
            // PrintWriter for sending HTTP request. Auto-flush is enabled.
            PrintWriter request = new PrintWriter(socket.getOutputStream(), true);

            // BufferedReader for reading the server's HTTP response.
            BufferedReader response = new BufferedReader(
		            new InputStreamReader(socket.getInputStream(), 
		            "UTF-8"));
				
            // 2. SEND THE HTTP REQUEST
            System.out.println("-> Sending request to " + host);
            request.println("GET / HTTP/1.1");    // The main request line
            request.println("Host: " + host);  
            request.println("Connection: close");   
            request.println();     
            // An empty line signifies end of the request headers

            // 3. READ THE HTTP RESPONSE
            System.out.println("<- Receiving response:\n");
            String line;
            while ((line = response.readLine()) != null) {
                System.out.println(line);
            }

        } catch (UnknownHostException ex) {
            System.err.println("Host not found: " + ex.getMessage());
        } catch (SocketTimeoutException ex) {
            System.err.println("Read timed out: " + ex.getMessage());
        } catch (IOException ex) {
            System.err.println("I/O Error: " + ex.getMessage());
        }
        // The socket is guaranteed to be closed here.
    }
}
```

