# Exposing Local Services (Tunneling)

Step-by-step guide on how to expose a local web service (e.g., a simulated login page, a web shell, or a simple HTTP server) to the public internet using tunneling tools. This is a foundational technique in penetration testing for scenarios like phishing, payload delivery, or remote access.

## 1\. The Need for Tunneling: Bypassing NAT and Firewalls

In a typical home or office network, a local server has a private IP address (e.g., `192.168.x.x`). To make it accessible from the internet, you normally need to configure:

1.  **Public IP Address:** The router's external IP, which is accessible to the world.
2.  **Port Forwarding:** A firewall rule on the router to redirect incoming traffic on a public port (e.g., 80) to the internal private IP and port of the local server (e.g., `192.168.1.10:8080`).

**Tunneling tools (like ngrok and serveo.net)** bypass this complex manual configuration. They establish a secure, outbound connection from the local server to a cloud-based server, creating a **secure tunnel**. The cloud server then assigns a public URL, and any traffic to that URL is relayed back through the tunnel to the local machine.

## 2\. Step 1: Setting up the Local Web Service (Target)

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

## 3\. Step 2: Creating the Public Tunnel with ngrok

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

#### C. Traffic Inspection and Configuration

ngrok also provides a web interface for inspecting incoming traffic (requests/responses), which is vital for debugging or capturing credentials/payloads.

  * **Access Dashboard:** Open `http://localhost:4040` in a browser *on the local machine*.

  * **Configuration File Edit:** To add advanced features like IP restrictions or custom domains (available in paid tiers), edit the configuration file:

    ```bash
    $ ngrok config edit
    ```

## 4\. Step 3: Creating the Public Tunnel with serveo.net (SSH)

**Serveo.net** is a lightweight, zero-configuration alternative that uses the local machine's SSH client to create a tunnel. It is simple to use but generally less robust than ngrok.

#### Tunnel Execution

The reverse SSH forward command maps a remote port on `serveo.net` to a local port.

| Command | Explanation |
| :--- | :--- |
| `ssh -R 80:localhost:5006 serveo.net` | Connects to `serveo.net` via SSH. `-R` sets up a **Reverse** tunnel. Remote port `80` is forwarded to the local machine's `localhost:5006`. |

**Expected serveo.net Output:**

```bash
$ ssh -R 80:localhost:5006 serveo.net
Forwarding HTTP traffic from https://<random-subdomain>.serveo.net
```

The output provides the public URL (`https://<random-subdomain>.serveo.net`) that directs to the local server running on port 5006.

## 5\. Step 4: Facading and Link Shortening (Obfuscation)

In ethical hacking/social engineering, the publicly exposed ngrok or serveo link (e.g., `https://e01b34.ngrok.io`) often looks suspicious. **Facading** (or cascading) involves using a URL shortener to mask the true destination.

| Step                     | Action                                                                                                                            | Purpose                                                                                                                              |
| :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| 1. **Obtain Tunnel URL** | `https://random-id.ngrok.io`                                                                                                      | This is the actual server destination.                                                                                               |
| 2. **Shorten Link**      | Use a service (e.g., bit.ly, tinyurl.com) to convert the ngrok URL into a shorter one (e.g., `https://tinyurl.com/trusted-link`). | Obfuscates the suspicious domain (`ngrok.io` or `serveo.net`) and makes the link look more credible in a social engineering context. |
| 3. **Deployment**        | Use the shortened link in the attack (e.g., in an email or SMS).                                                                  | The traffic flow is: **Shortened Link** $\to$ **Tunnel URL** $\to$ **Local Server**.                                                 |