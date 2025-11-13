# Lab 2: Network Tunneling

**Objective:** To provide a formal, detailed analysis of network tunneling techniques, including SSH, DNS, and HTTP tunneling, for the purpose of bypassing firewalls, securing traffic, and establishing persistence in authorized penetration testing scenarios.

## 1. Introduction to Network Tunneling

**Network Tunneling** is the process of encapsulating one network protocol within another. This creates a "tunnel" that can securely and covertly transport data across a network, bypassing filtering rules and encrypting traffic. 

While essential for legitimate remote administration and creating VPNs, tunneling is also a fundamental technique for ethical hackers to achieve objectives like data exfiltration, C2 (Command and Control) communications, phishing, payload delivery and pivoting within a target network.

**Legitimate vs. Malicious Use Cases:**

| Use Case | Legitimate (Administrator) | Malicious (Attacker) |
| :--- | :--- | :--- |
| **Bypassing Firewalls** | Accessing an internal server from home. | Exfiltrating data from a corporate network. |
| **Encrypting Traffic** | Securing non-encrypted protocols (e.g., VNC). | Hiding malicious traffic from inspection tools. |
| **Pivoting** | Managing multiple devices from one entry point. | Moving laterally through a compromised network. |

## 2. SSH Tunneling: The Versatile Workhorse

The Secure Shell (SSH) protocol is the most common and powerful tool for creating tunnels due to its robust encryption and built-in port forwarding capabilities.

### 2.1. Local Port Forwarding (`-L`)

**Concept:** Makes a remote service accessible on your local machine. It "pulls" a remote port to your local system.

**Use Case:** You have compromised a server (`target.com`) and want to access a database running on it at port `5432`, which is firewalled from the internet.

**Syntax:**
`ssh -L <local_port>:<destination_host>:<destination_port> <user>@<ssh_server>`

**Command:**
```bash
# Forward remote port 5432 on target.com to our local port 9000
ssh -L 9000:localhost:5432 user@target.com
```
- **Result:** You can now connect your local database client to `localhost:9000`, and the traffic will be securely tunneled to `target.com:5432`.

### 2.2. Remote Port Forwarding (`-R`)

**Concept:** Makes a local service accessible on a remote machine. It "pushes" a local port to a remote system. This is the principle behind tools like `ngrok`.

**Use Case:** You are running a web server on your local machine (e.g., for a phishing demo) and need to expose it to the internet via a public server (`public-vps.com`).

**Syntax:**
`ssh -R <remote_port>:<destination_host>:<destination_port> <user>@<ssh_server>`

**Command:**
```bash
# Expose our local web server on port 8080 to port 80 on public-vps.com
ssh -R 80:localhost:8080 user@public-vps.com
```
- **Result:** Anyone visiting `http://public-vps.com` will see the content from your local server running on `localhost:8080`.

#### Simplified Remote Forwarding with `ngrok` and `serveo.net`

Tools like `ngrok` automate this process without needing your own public server.

- **ngrok:**
  ```bash
  # 1. Install and authenticate ngrok
  # 2. Run the tunnel
  ngrok http 8080
  ```
  This command creates a secure tunnel to ngrok's cloud service and provides a public URL (`https://<random-id>.ngrok.io`) that forwards to your `localhost:8080`.

- **serveo.net (SSH-based):** is a lightweight, zero-configuration alternative that uses the local machine's SSH client to create a tunnel.
  ```bash
  ssh -R 80:localhost:8080 serveo.net
  ```
  This uses the same SSH remote forwarding principle but connects to `serveo.net`'s public service.

### 2.3. Dynamic Port Forwarding (`-D`)

**Concept:** Creates a versatile SOCKS proxy on your local machine that tunnels traffic through a remote SSH server. This allows you to pivot your tools (e.g., a web browser, `nmap`) through the remote host.

**Use Case:** You have compromised a server (`target.com`) and want to scan its internal network (`10.0.0.0/24`) as if you were on that machine.

**Syntax:**
`ssh -D <local_port> <user>@<ssh_server>`

**Command:**
```bash
# Create a SOCKS proxy on our local port 1080 that pivots through target.com
ssh -D 1080 user@target.com
```
- **Result:** You can now configure your web browser or tools like `proxychains` to use `socks5://127.0.0.1:1080`. All traffic sent through this proxy will originate from `target.com`, allowing you to access internal web apps or scan the internal network.


## 3. DNS Tunneling: The Stealthy Channel

**Concept:** Encapsulates data within DNS queries and responses. This is extremely slow but highly effective at bypassing restrictive firewalls where only DNS traffic (port 53) is allowed.

**How it Works:** Data is encoded into a series of DNS queries (e.g., `data.attacker.com`) sent to a C2 server that acts as an authoritative DNS server. The server responds with encoded data in DNS records (e.g., TXT records).

**Common Tools:**
- **`iodine`:** One of the most popular tools for creating a full IP-over-DNS tunnel.
- **`dnscat2`:** A more modern tool focused on creating an encrypted command-and-control channel.

**Use Case:** Establishing a C2 channel from a highly restricted corporate guest network where all outbound traffic is blocked except for DNS lookups.


## 4. HTTP/HTTPS Tunneling

**Concept:** Encapsulates traffic within standard HTTP or HTTPS requests. Since most corporate firewalls allow outbound web traffic on ports 80 and 443, this is a reliable method for data exfiltration and C2.

**How it Works:** A client on the compromised machine sends data encoded in POST requests to an attacker-controlled web server. The server responds with commands in the HTTP response body.

**Common Tools:**
- Many modern C2 frameworks (e.g., Cobalt Strike, Metasploit) use HTTP/HTTPS as their primary communication channel.
- Custom scripts can be written in Python or PowerShell to perform simple data exfiltration over HTTP.


## 5. Detection and Mitigation

From a defensive (Blue Team) perspective, detecting and preventing malicious tunneling is critical.

| Tunneling Method | Detection Techniques | Mitigation Strategies |
| :--- | :--- | :--- |
| **SSH Tunneling** | - Monitor SSH logs for unusual or long-lived sessions.<br>- Analyze network traffic for encrypted flows to non-standard ports. | - Use SSH jump hosts (bastions).<br>- Apply egress filtering to block outbound SSH to unknown servers.<br>- Disable port forwarding in `sshd_config` on sensitive servers. |
| **DNS Tunneling** | - Monitor for abnormally high volumes of DNS queries from a single host.<br>- Look for unusually long or strangely encoded subdomains.<br>- Analyze TXT record requests, which are less common in normal traffic. | - Use a DNS firewall or sinkhole to block requests to known malicious domains.<br>- Rate-limit DNS queries.<br>- Deep Packet Inspection (DPI) to identify non-standard DNS traffic. |
| **HTTP Tunneling** | - Analyze web traffic for unusual User-Agent strings, periodic "beaconing" patterns, and large data transfers in POST requests. | - Use a web proxy and TLS/SSL inspection to analyze encrypted traffic.<br>- Block connections to uncategorized or known malicious IP addresses.<br>- Egress filtering to allow web traffic only through a proxy. |


## The Need for Tunneling: Bypassing NAT and Firewalls

In a typical home or office network, a local server has a private IP address (e.g., `192.168.x.x`). To make it accessible from the internet, you normally need to configure:

1.  **Public IP Address:** The router's external IP, which is accessible to the world.
2.  **Port Forwarding:** A firewall rule on the router to redirect incoming traffic on a public port (e.g., 80) to the internal private IP and port of the local server (e.g., `192.168.1.10:8080`).

**Tunneling tools (like ngrok and serveo.net)** bypass this complex manual configuration. They establish a secure, outbound connection from the local server to a cloud-based server, creating a **secure tunnel**. The cloud server then assigns a public URL, and any traffic to that URL is relayed back through the tunnel to the local machine.

## Step 1: Setting up the Local Web Service (Target)

Before creating a tunnel, a service must be running locally to receive the traffic.

#### A. Using Python's Simple HTTP Server

This is the fastest way to serve files from the current directory.

| Command | Explanation |
| :--- | :--- |
| `python3 -m http.server 5006` | Starts a basic, non-production HTTP server on the local machine on port `5006`. |

**Code and Expected Output (Example using port 8090):**

```bash
$ python3 -m http.server 8090
Serving HTTP on 0.0.0.0 port 8090 (http://0.0.0.0:8090/) ... 
# The server is now listening on the local network.
```

#### B. Using a Custom Python Web Application (Advanced Target)

For a more functional target, a simple custom HTTP server can be used (e.g., for serving a custom phishing page or payload).

**Custom Python Server Code:**

```python
from http.server import BaseHTTPRequestHandler, HTTPServer

class MyHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        html = b"""
        <html>
        <head><title>Test Page</title></head>
        <body><h1>Hello from Python HTTP Server!</h1></body>
        </html>
        """
        self.wfile.write(html)

def run(server_class=HTTPServer, handler_class=MyHandler, port=8080):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Serving custom HTML at http://localhost:{port}")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
```

## Step 2: Creating the Public Tunnel with ngrok

**ngrok** is the most popular tunneling tool, offering stability, public URLs, and a traffic inspection dashboard.

#### A. Installation and Authentication

1.  **Installation (Linux - Debian/Ubuntu):** The command adds the ngrok repository key, sets up the source list, updates the package index, and installs the utility.

    ```bash
    $ curl -sSL https://ngrok-agent.s3.amazonaws.com/ngrok.asc \
      | sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null \
      && echo "deb https://ngrok-agent.s3.amazonaws.com buster main" \
      | sudo tee /etc/apt/sources.list.d/ngrok.list \
      && sudo apt update \
      && sudo apt install ngrok
    ```

2.  **Authentication:** You must have an account and obtain an authtoken from the ngrok dashboard to utilize the service. This links your local client to your account.

    ```bash
    $ ngrok config add-authtoken $YOUR_TOKEN 
    # Replace $YOUR_TOKEN with the actual token.
    Authtoken saved to configuration file: /home/user/.config/ngrok/ngrok.yml
    ```

#### B. Tunnel Execution

Start the tunnel, forwarding the public traffic to the local port where your target service is running (e.g., port 8090).

```bash
$ ngrok http 8090
```

**Expected ngrok Output:**

| Field | Description |
| :--- | :--- |
| `Session Status` | `online` (Indicates a successful connection) |
| `Forwarding` | `http://<random-id>.ngrok.io -> http://localhost:8090` |
| `Forwarding` | `https://<random-id>.ngrok.io -> http://localhost:8090` |

The `https://<random-id>.ngrok.io` URL is the public link to be used in the attack scenario.

## Step 4: Facading and Link Shortening (Obfuscation)

In ethical hacking/social engineering, the publicly exposed ngrok or serveo link (e.g., `https://e01b34.ngrok.io`) often looks suspicious. **Facading** (or cascading) involves using a URL shortener to mask the true destination.

| Step                     | Action                                                                                                                            | Purpose                                                                                                                              |
| :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| 1. **Obtain Tunnel URL** | `https://random-id.ngrok.io`                                                                                                      | This is the actual server destination.                                                                                               |
| 2. **Shorten Link**      | Use a service (e.g., bit.ly, tinyurl.com) to convert the ngrok URL into a shorter one (e.g., `https://tinyurl.com/trusted-link`). | Obfuscates the suspicious domain (`ngrok.io` or `serveo.net`) and makes the link look more credible in a social engineering context. |
| 3. **Deployment**        | Use the shortened link in the attack (e.g., in an email or SMS).                                                                  | The traffic flow is: **Shortened Link** $\to$ **Tunnel URL** $\to$ **Local Server**.                                                 |


