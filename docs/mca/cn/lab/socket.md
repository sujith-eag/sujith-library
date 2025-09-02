# Sockets

## TCP Server

```python
# server.py
import socket
import threading
import time

def handle_client(clientsocket, addr):
    print("*" * 50)
    print(f"Client connected from: {addr[0]}:{addr[1]}")
    currentTime = time.ctime(time.time()) + "\r\n"
    print("Sending time:", currentTime.strip())
    print("*" * 50)
    clientsocket.send(currentTime.encode('ascii'))
    clientsocket.close()

def start_server():
    host = "172.1.27.11"  # VM1's IP address
    port = 9998        # Listening port

    serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    serversocket.bind((host, port))
    serversocket.listen(5)

    print(f"Server started at {host} on port {port}")
    print("Waiting for incoming connections...")

    while True:
        clientsocket, addr = serversocket.accept()
        client_thread = threading.Thread(target=handle_client, args=(clientsocket, addr))
        client_thread.start()

if __name__ == "__main__":
    start_server()
```

## TCP Client

```python
# client.py
import socket

host = "172.1.27.11"  # IP address of the server (VM1)
port = 9998        # Same port as server

try:
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client_socket.connect((host, port))
    data = client_socket.recv(1024)
    client_socket.close()

    print("*" * 50)
    print("The time received from the server is:", data.decode('ascii').strip())
    print("*" * 50)

except ConnectionRefusedError:
    print("Connection failed: Make sure the server is running and accessible.")
except Exception as e:
    print("An error occurred:", e)
```

## UDP Server

```python
# UDPServer.py
import socket
import time

def start_udp_server():
    host = "192.168.0.134"  # Your server VM's IP
    port = 9999             # A different port for UDP

    serversocket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    serversocket.bind((host, port))

    print(f"UDP Server started at {host} on port {port}")
    print("Waiting for incoming datagrams...")

    while True:
        data, addr = serversocket.recvfrom(1024)
        print("*" * 50)
        print(f"Received message from: {addr[0]}:{addr[1]}")
        print(f"Message: {data.decode().strip()}")

        currentTime = time.ctime(time.time()) + "\r\n"
        serversocket.sendto(currentTime.encode('ascii'), addr)
        print(f"Sent time back to {addr}")
        print("*" * 50)

if __name__ == "__main__":
    start_udp_server()
```

## UDP Client

```python
# UDPClient.py
import socket

host = "192.168.0.134"  # IP of the server VM
port = 9999             # Same port as UDP server

client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

try:
    message = "Hello UDP Server!"
    client_socket.sendto(message.encode(), (host, port))

    data, server = client_socket.recvfrom(1024)
    print("*" * 50)
    print("The time received from the server is:", data.decode('ascii').strip())
    print("*" * 50)

except Exception as e:
    print("An error occurred:", e)
finally:
    client_socket.close()
```

