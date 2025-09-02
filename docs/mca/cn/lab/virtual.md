# VirtualBox VM Setup Guide

## Add Oracle’s GPG key and repository:

```bash
sudo apt update
sudo apt install -y gnupg wget
```

Downloads Oracle's public key and adds it to your system. This key is a digital signature that lets your system verify that the VirtualBox software is authentic and hasn't been tampered with.`
```bash
wget -O- https://www.virtualbox.org/download/oracle_vbox_2016.asc | sudo gpg --yes --output /usr/share/keyrings/oracle-virtualbox-2016.gpg --dearmor
```

Adding the official VirtualBox repository to your list of software sources, specifying `noble` for Ubuntu 24.04 version.
```bash
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/oracle-virtualbox-2016.gpg] https://download.virtualbox.org/virtualbox/debian noble contrib" | sudo tee /etc/apt/sources.list.d/virtualbox.list
```

## Install VirtualBox:

```bash
sudo apt update
sudo apt install virtualbox-7.1
```

Check installation: `virtualbox`


Download Lubuntu 16.04 ISO. Official archived ISO :  
    [https://cdimage.ubuntu.com/lubuntu/releases/16.04/release/](https://cdimage.ubuntu.com/lubuntu/releases/16.04/release/)

> [!important]
> If VMWare is installed then it has to be turned off from using KVM
> `sudo rmmod kvm_intel` or for amd `sudo rmmod kvm_amd`
> Then Unload the main KVM Module `sudo rmmod kvm`


## Create a Virtual Machine in VirtualBox

Launch VirtualBox, Click **"New"** and configure :

**Network Settings**

Two main options depending on your use case.

**a. NAT (Default – For Internet Access)**

- Go to **Settings > Network**
    
- Adapter 1: Attached to **NAT**
    
- This allows the VM to access the internet through your host system
    

**b. Detached Mode (for GNS3 or Host-only networking)**

- Go to **Settings > Network**
    
- Adapter 1: Attached to **Bridged Adapter** or **Host-only Adapter**
    
- Bridged: VM will get IP from the same network as the host (works for GNS3)
    
- Host-only: Useful for isolated lab setups without internet
    
**c. Add a second adapter for dual-networking**

- Adapter 2: Enable and attach to **Host-only Adapter** or **Internal Network** as needed for GNS3 or Program Design
    
## Post-Installation Linux Setup

After first login:

* Install `sudo`
	
```bash
su

apt-get install sudo

usermod -aG sudo vboxuser

exit
reboot
```

- Update packages:
    
```bash
sudo apt update && sudo apt upgrade -y
```

- Install `openssh-server` (for remote access):
    
```bash
sudo apt install openssh-server
```

* Check SSH service status:
	
```bash
sudo systemctl status ssh
```

Should see `active (running)`. If not, start and enable it:
	
```bash
sudo systemctl enable ssh
sudo systemctl start ssh
```
	
Check listening port (default is 22):

```bash
ss -tlnp | grep ssh
```

Optional: Adjust firewall to allow SSH (if UFW is enabled):

```bash
sudo ufw allow ssh
sudo ufw enable
```

Test SSH Access from Another PC:

```bash
ssh yourusername@<ip-of-vm>
```

> ProFTPD Setup is covered in the next programs.

