# FTP Server using ProFTPD

Set up an FTP server on Virtual Machine **PC1** using **ProFTPD**, allowing clients to upload and download files via FTP.

## Install and Configure FTP Server

### 1. Update Package Repository and Install ProFTPD

```bash
sudo apt-get update

sudo apt-get install proftpd
```

- During installation, select **"standalone"** mode using the arrow keys and press **Enter**.
    
### 2. Configure ProFTPD Settings

Edit the main configuration file by opening in nano:

```bash
sudo nano /etc/proftpd/proftpd.conf
```

Make the following changes and save the file:

1. Disable IPv6:

```apache
UseIPv6 off
```

2. Set a custom server name:

```apache
ServerName "CNLAB.com"
```

3. Restrict FTP users to a specific directory (absolute path):

Replace `/absolute/path/to/ftp-folder` with the actual path of the folder the users should be locked into.

```apache
DefaultRoot /absolute/path/to/ftp-folder
```

4. Only allow users with valid shells to log in:

```apache
RequireValidShell on
```

5. Uncomment authentication module line to use Standard Unix authentication :

```apache
AuthOrder mod_auth_unix.c
```

**Save and exit:**  
Press `Ctrl + O` → `Enter` → `Ctrl + X`

---

### 3. Add `/bin/false` to Valid Shells

This step ensures that users with `/bin/false` as their shell can still authenticate for FTP.

```bash
sudo nano /etc/shells
```

Add this line at the end:

```
/bin/false
```

Or in a single command: 
```bash
echo "/bin/false" | sudo tee -a /etc/shells
```

> [!note]
> ProFTPD checks if a user has a valid shell (if `RequireValidShell on` is enabled). Since `/bin/false` is not considered a "login shell," we must add it to `/etc/shells`.

---

### 4. Create FTP User

Create a user with restricted shell access and assign a home directory:

```bash
sudo useradd -d /var/www/ -s /bin/false ftpuser

sudo passwd ftpuser
```

> When prompted, enter and confirm a password (e.g., `myftp123`).

- `-d /var/www/` sets the FTP home directory.
    
- `-s /bin/false` prevents shell login (good for FTP-only users).

---

### 5. Create FTP Directory and Set Ownership

Ensure the user's home directory exists and has correct permissions:

```bash
sudo mkdir -p /var/www/
sudo chown ftpuser:ftpuser /var/www/
sudo chmod 755 /var/www/
```

> `chmod 755` allows read & execute access to others so FTP commands work.

---

### 6. Allow FTP Through the Firewall (If UFW Is Enabled)

If the firewall is active, allow FTP traffic:

```bash
sudo ufw allow 21/tcp
sudo ufw reload
```

---

### 7. Restart ProFTPD Service

Apply the configuration changes:

```bash
sudo systemctl restart proftpd
```

Check the status:
```bash
systemctl status proftpd
```

---

### 8. Test FTP Connection from Client PC (PC2 or PC3)

On another PC in the same network:

```bash
ftp 172.20.10.X
```

> Replace `X` with PC1’s actual IP address.  
> Log in using:
> - **Username:** `ftpuser`
> - **Password:** `myftp123` (or your chosen password)

---

### 9. Test File Upload/Download

Inside the FTP session:

```bash
ftp> put Hello.txt      # Upload a file
ftp> get Hello.txt      # Download a file
ftp> ls                 # List directory contents
ftp> quit               # Exit FTP session
```

---

### 10. Fixing Common Errors (Permission Denied)

If you see:

```
550 Hello.txt: Permission denied
```

Run:

```bash
sudo chown ftpuser:ftpuser /var/www/
sudo chmod 755 /var/www/
sudo systemctl restart proftpd
```

---

### Final Verification

- FTP login should succeed using `ftpuser`.
    
- Uploads (`put`) and downloads (`get`) should complete without errors.
    
- Directory listing (`ls`) should show files in `/var/www/`.
    