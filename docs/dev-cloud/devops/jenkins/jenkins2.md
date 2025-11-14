# Jenkins Installation, Setup and Debugging

## 1\. DevOps: Jenkins and Java Compatibility Debugging

These notes document a common issue encountered when installing or running Jenkins with an unsupported Java version, followed by the systematic debugging, uninstallation, and reinstallation process.

### 1.1. Error: Jenkins Failure due to Unsupported Java Version

**Environment Check:**

```bash
$ java --version
java 25.0.1 2025-10-21 LTS
Java(TM) SE Runtime Environment (build 25.0.1+8-LTS-27)
Java HotSpot(TM) 64-Bit Server VM (build 25.0.1+8-LTS-27, mixed mode, sharing)
```

**Jenkins Status:**

```bash
$ sudo systemctl status jenkins.service 
# ... (Output showing Active: failed and exit-code status=1/FAILURE)
× jenkins.service - Jenkins Continuous Integration Server
     Loaded: loaded (/usr/lib/systemd/system/jenkins.service; enabled>
     Active: failed (Result: exit-code) since Fri 2025-10-31 14:54:59>
    Process: 2080 ExecStart=/usr/bin/jenkins (code=exited, status=1/F>
   Main PID: 2080 (code=exited, status=1/FAILURE)
```

The initial error indicates that the Jenkins service is failing to start because it is running on an unsupported Java version (Java 25). Jenkins has specific version requirements for its stability and security.

**Root Cause Identification (from Journal Logs):**

The system journal clearly states the version incompatibility.

```bash
$ sudo journalctl -u jenkins.service 
# ...
Oct 27 12:06:46 mcalab1 jenkins[7636]: Running with Java 25 from /usr>
Oct 27 12:06:46 mcalab1 jenkins[7636]: Run the command again with the>
Oct 27 12:06:46 mcalab1 jenkins[7636]: Supported Java versions are: [> # Key line: Supported versions are [17, 21]
Oct 27 12:06:46 mcalab1 jenkins[7636]: See https://jenkins.io/redirec>
# ...
```

Jenkins version 2.528.1 (or similar) does not fully support Java 25. The required or supported LTS versions are Java 17 or 21.

### 1.2. Debugging and Resolution Steps

The resolution involves three main steps: 
* A) Uninstalling Jenkins, 
* B) Downgrading Java, and 
* C) Reinstalling and Configuring Jenkins.

#### A. Jenkins Uninstallation

1.  **Check Jenkins Version (Confirmation):**
    ```bash
    $ jenkins --version
    Running with Java 25 from /usr/lib/jvm/jdk-25.0.1-oracle-x64, which is not yet fully supported.
    # ... (Confirms unsupported Java)
    Supported Java versions are: [17, 21]
    ```
2.  **Stop the Jenkins Service:**
    ```bash
    $ sudo systemctl stop jenkins
    ```
3.  **Purge Jenkins and Configuration:**
    ```bash
    $ sudo apt-get purge jenkins -y
    ```
4.  **Remove Jenkins Data Directory:**
    ```bash
    $ sudo rm -rf /var/lib/jenkins
    ```
5.  **Remove Jenkins User/Group (if they exist and are no longer needed):**
    ```bash
    $ sudo userdel jenkins
    $ sudo groupdel jenkins
    ```
6.  **Remove Jenkins APT Source List:**
    ```bash
    $ sudo rm /etc/apt/sources.list.d/jenkins.list
    ```
7.  **Update Package List:**
    ```bash
    $ sudo apt-get update 
    
    $ jenkins --version
	jenkins: command not found
    ```

#### B. Java Downgrade (Switching to Java 17)

```bash
$ dpkg --list | grep openjdk
ii  openjdk-17-jre:amd64                           17.0.16+8~us1-0ubuntu1~24.04.1           amd64        OpenJDK Java runtime, using Hotspot JIT
ii  openjdk-17-jre-headless:amd64                  17.0.16+8~us1-0ubuntu1~24.04.1           amd64        OpenJDK Java runtime, using Hotspot JIT (headless)

$ java --version
java 25.0.1 2025-10-21 LTS
Java(TM) SE Runtime Environment (build 25.0.1+8-LTS-27)
Java HotSpot(TM) 64-Bit Server VM (build 25.0.1+8-LTS-27, mixed mode, sharing)
```

The system had both Java 25 (Oracle) and Java 17 (OpenJDK) installed. The goal is to set Java 17 as the default and remove the Java 25 installation.

1.  **List Java Alternatives:**
    ```bash
    $ sudo update-alternatives --list java
    /usr/lib/jvm/java-17-openjdk-amd64/bin/java
    /usr/lib/jvm/jdk-25.0.1-oracle-x64/bin/java
    ```
2.  **Remove Java 25 from the Alternatives System (which automatically switches to the next available option, Java 17):**
    ```bash
    $ sudo update-alternatives --remove "java" "/usr/lib/jvm/jdk-25.0.1-oracle-x64/bin/java"
    update-alternatives: using /usr/lib/jvm/java-17-openjdk-amd64/bin/java to provide /usr/bin/java (java) in auto mode

    $ sudo update-alternatives --remove "javac" "/usr/lib/jvm/jdk-25.0.1-oracle-x64/bin/javac"
    ```
3.  **Remove the Java 25 Installation Directory:**
    ```bash
    $ sudo rm -rf /usr/lib/jvm/jdk-25.0.1-oracle-x64
    ```
4.  **Verify New Default Java Version:**
    ```bash
    $ java --version 
    openjdk 17.0.16 2025-07-15 # Success: Now using a supported version
    # ...
    ```

#### C. Jenkins Reinstallation and Initial Setup

1.  **Add Jenkins Repository Key and Source List:**
    ```bash
    $ sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
      https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
    # ... (output showing key saved)

    $ echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc]" \
      https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
      /etc/apt/sources.list.d/jenkins.list > /dev/null
    ```
2.  **Update Package Index and Install Jenkins:**
    ```bash
    $ sudo apt update 
    $ sudo apt install jenkins
    ```
3.  **Verify Installation:**
    ```bash
    $ jenkins --version
    2.528.1 # Now installed, and should run on Java 17
    ```

### 1.3. Service Configuration and Initial Access

#### Firewall Configuration (UFW)

Ensure the firewall allows access to the Jenkins default port (8080) and SSH (22).

```bash
$ sudo ufw allow 8080
$ sudo ufw allow ssh
$ sudo ufw enable 
$ sudo ufw status 
# ... (output showing 8080 and 22/tcp allowed)
```

#### Starting and Enabling Jenkins

1.  **Start the Service:**
    ```bash
    $ sudo systemctl start jenkins.service 
    ```
2.  **Enable Auto-start on Boot:**
    ```bash
    $ sudo systemctl enable jenkins.service 
    ```
3.  **Verify Service Status (should be `active (running)`):**
    ```bash
    $ sudo systemctl status jenkins.service 
    ● jenkins.service - Jenkins Continuous Integration Server
    # ...
    Active: active (running) since Fri 2025-10-31 09:59:28 IST; 1min 51s ago
    # ...
    ```

#### Initial Login Credentials

The initial administrator password is required for the web-based setup at `http://<server-ip>:8080`.

```bash
$ sudo cat /var/lib/jenkins/secrets/initialAdminPassword
e06ddbeb34b14d3da0f318c7a16378f9
```

### 1.4. Changing the Jenkins Default Port

To change the default HTTP port from 8080 to another port, edit the configuration file relevant to the system's init manager.

| Init System | Configuration File Location | Configuration Line to Modify |
| :--- | :--- | :--- |
| **Systemd (Common Linux)** | `/usr/lib/systemd/system/jenkins.service` | `Environment="JENKINS_PORT=8080"` |
| **System V init (Older Linux)** | `/etc/default/jenkins` | `HTTP_PORT=8080` |
| **Windows** | `C:\Program Files\Jenkins\jenkins.xml` | `--httpPort=8080` (inside `<arguments>` tag) |

**Steps for systemd:**

1.  Open `/usr/lib/systemd/system/jenkins.service` with root privileges.
2.  Change `Environment="JENKINS_PORT=8080"` to the desired port (e.g., `8090`).
3.  Save the file.
4.  Restart Jenkins:
    ```bash
    sudo systemctl restart jenkins.service 
    ```


> The config file can be edited to disable security to allow login without password.
> Or changing password in the file.

