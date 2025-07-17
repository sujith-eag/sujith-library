# URL and URLConnection

## `URL` Class — The Address of a Resource

A **Uniform Resource Locator (URL)** provides a standard, human-readable way to address any resource on the internet. In Java, this concept is encapsulated by the `java.net.URL` class, which is used for parsing and representing a URL, but not for communicating with it. Think of a `URL` object as a well-formatted mailing address, not the mail truck itself.

#### The Anatomy of a URL

A URL is composed of several distinct parts, each providing a piece of information needed to locate a resource.

Example from `https://example.com:9090/path/file?query=123#fragment`

| Component    |               |                                                                                                      |
| :----------- | :------------ | ---------------------------------------------------------------------------------------------------- |
| **Protocol** | `https`       | The method of communication (e.g., `http`, `https`, `ftp`, `file`).                                  |
| **Host**     | `example.com` | The domain name or IP address of the server.                                                         |
| **Port**     | `9090`        | The network port to connect to. If omitted, a default is used (`80` for `http`, `443` for `https`).. |
| **Path**     | `/path/file`  | The specific location of the resource on the server.                                                 |
| **Query**    | `query=123`   | Optional parameters sent to the server.                                                              |
| **Fragment** | `fragment`    | A reference to a specific section within the resource (handled by the client).                       |

* Protocol is separated from the rest of the URL by a colon (`:`)
* Host name is preceded by `//` and followed by `/` or `:`
* Port number is preceded by `:`

#### Creating a `URL` Object

You can create a `URL` object from a String. This process can throw a `MalformedURLException` if the string isn't a valid URL.

```java
// Common Constructors
URL(String urlSpecifier)

URL(String protocol, String host, String file)

URL(String protocol, String host, int port, String file)
```

#### Example: Parsing a URL

This example demonstrates how the `URL` class breaks a complex URL into its constituent parts.

```java
import java.net.URL;
import java.net.MalformedURLException;

class URLDemo {
    public static void main(String[] args) throws MalformedURLException {
        URL url = new URL("https://example.com:9090/path/file?query=123#fragment");

        System.out.println("URL is: " + url.toString());
        System.out.println("Protocol: " + url.getProtocol());
        System.out.println("Host:     " + url.getHost());
        System.out.println("Port:     " + url.getPort());
        System.out.println("Path:     " + url.getPath());
        System.out.println("File:     " + url.getFile()); 
									    // Path + Query
        System.out.println("Query:    " + url.getQuery());
        System.out.println("Fragment: " + url.getRef()); 
        // In Java, it's a "reference"
    }
}
```

**Output:**

```
URL is: https://example.com:9090/path/file?query=123#fragment
Protocol: https
Host:     example.com
Port:     9090
Path:     /path/file
File:     /path/file?query=123
Query:    query=123
Fragment: fragment
```

## `URLConnection` Class — The Connection Itself

While the `URL` class represents an address, the `java.net.URLConnection` class is used to establish a connection to that address to interact with the resource. It's the "mail truck" that goes to the address to fetch or deliver data.

You get a `URLConnection` object by calling the `openConnection()` method on a `URL` object.

```java
URL url = new URL("https://example.com");
URLConnection connection = url.openConnection(); 
	// Throws IOException
```

For HTTP(S) URLs, this method returns an `HttpURLConnection` object, which provides additional methods specific to the HTTP protocol (like setting request methods, e.g., `GET` or `POST`).

#### Reading Data from a Connection

The primary use of `URLConnection` is to read metadata (HTTP headers) and the resource content itself.

| Key Method               | Description                                                          |
| :----------------------- | :------------------------------------------------------------------- |
| `getHeaderFields()`      | Returns a `Map` of all HTTP response headers.                        |
| `getContentType()`       | Returns the MIME type of the content (e.g., `text/html`).            |
| `getContentLengthLong()` | Returns the size of the content in bytes (`-1` if unknown).          |
| `getLastModified()`      | Returns the last-modified date of the resource as a timestamp.       |
| `getInputStream()`       | Returns an `InputStream` to read the actual content from the server. |

Of course. You are right, the previous example can be a bit overwhelming with collections (`Map`, `List`) and the `java.time` API.

### Reading Headers and Content

This example demonstrates the fundamental use of `URLConnection`. It connects to a URL, prints a few key pieces of information from the headers, and then displays the content. 

```java
import java.net.*;
import java.io.*;
import java.util.Date;

class UCDemoSimple {
    public static void main(String[] args) throws Exception {

        // 1. Create a URL object for an endpoint.
        URL url = new URL("https://example.com");

        // 2. Open a connection to that URL.
        URLConnection connection = url.openConnection();

        System.out.println("--- Specific Header Information ---");

        // Get the server's date and time.
        long dateMillis = connection.getDate();
        if (dateMillis == 0) {
            System.out.println("No date information available.");
        } else {
            System.out.println("Server Date: " + new Date(dateMillis));
        }

        // Getting the content type ("text/html").
        System.out.println("Content-Type: " + connection.getContentType());

        // Getting the content length in bytes.
        long contentLength = connection.getContentLengthLong();
        if (contentLength == -1) {
            System.out.println("Content length is not available.");
        } else {
            System.out.println("Content-Length: " + contentLength 
							            + " bytes");
        }

        // --- Read and display the content from the server ---
        if (contentLength != 0) {
            System.out.println("\n--- Content ---");

            try (InputStream input = connection.getInputStream()) {
                int c;
			// Read one character (byte) at a time until the end of the stream (-1).
                while ((c = input.read()) != -1) {
                    System.out.print((char) c);
                }
            } // The 'input' stream is automatically closed here.

        } else {
            System.out.println("No content available.");
        }
    }
}
```

### The Modern Alternative (`java.net.http.HttpClient`)

While `URL` and `URLConnection` are fundamental, for any new application development involving HTTP, you should use the **`java.net.http.HttpClient`** class, available since Java 11. It is a far superior, modern API.

**Why `HttpClient` is better:**
*   Supports modern protocols like **HTTP/2** and **WebSockets**.
*   Offers both **synchronous** and **asynchronous** (non-blocking) programming models.
*   Features a clean, fluent, and immutable builder-based API.
*   Handles common tasks like redirection and authentication more elegantly.

Unless you are working with legacy code or non-HTTP protocols, **`HttpClient` is the recommended choice**.

