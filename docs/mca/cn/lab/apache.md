# Apache2 Server

Installing and configuring an Apache2 web server on Ubuntu to serve content from the `/var/www/` directory (the default web root). 

### 1. Update System Packages

```bash
sudo apt update
sudo apt upgrade -y
```

### 2. Install Apache2

```bash
sudo apt install apache2 -y
```

Apache will automatically start after installation.

### 3. Verify Apache2 is Running

```bash
sudo systemctl status apache2
```

You should see `active (running)`. If not, start it:

```bash
sudo systemctl start apache2
```

### 4. Allow HTTP Through Firewall (Optional)

If you're using UFW (Uncomplicated Firewall):

```bash
sudo ufw allow 'Apache'
sudo ufw enable
```

To check the status:

```bash
sudo ufw status
```

### 5. Check Apache Default Page in Browser

To find your server’s IP address:

```bash
ip a
```

Open a browser on the same machine or from another PC on the same network:

```
http://<server-ip>
```

> You should see the **"Apache2 Ubuntu Default Page."**



## Serving files from Directory

### 1: Open Nautilus with Root Permissions

1. Open Terminal.
    
2. Run:
    
```bash
sudo nautilus /var/www/
```
    
3. A new **Nautilus window with root access** will open.
    
4. Now you can drag and drop or create files and folders inside `/var/www/`.
    

---

### 2: Use a Custom Directory (Safer)

If you want to avoid using root access frequently, it’s safer to:

1. Create a folder inside your home directory:
    
```bash
mkdir ~/myweb
```
    
2. Move your files there via Nautilus normally.
    
3. Then change Apache’s default web root to this new folder (optional).
    
4. Edit Apache's default site configuration:
    
```bash
sudo nano /etc/apache2/sites-available/000-default.conf
```

5. Modify the `DocumentRoot` line:
    
```apache
DocumentRoot /home/yourusername/myweb
```
    
```bash
sudo systemctl restart apache2
```

4. Visit `http://localhost` to see your custom content.
    

---

### Apache Folder Structure Basics

| Folder                          | Purpose                   |
| ------------------------------- | ------------------------- |
| `/var/www/`                     | Default document root     |
| `/etc/apache2/sites-available/` | Virtual host config files |
| `/etc/apache2/apache2.conf`     | Main config file          |
| `/etc/apache2/ports.conf`       | Port settings             |
| `/var/log/apache2/`             | Apache logs               |
