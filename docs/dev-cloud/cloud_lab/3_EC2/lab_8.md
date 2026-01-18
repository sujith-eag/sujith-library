---
title: Create and Manage Custom AMI
description: Build reusable Amazon Machine Images from configured EC2 instances
---

# Create and Manage Custom AMI

**Topics:** AMI, EBS Snapshots, Image Creation, Instance Replication, Disaster Recovery

## Overview

Amazon Machine Images (AMIs) are pre-configured templates containing the operating system, application software, and configuration settings needed to launch EC2 instances. While AWS provides thousands of public AMIs, custom AMIs allow you to create standardized, repeatable deployments of your specifically configured environments. Custom AMIs are fundamental to infrastructure-as-code practices, enabling rapid scaling, disaster recovery, and consistent deployments across development, staging, and production environments.

This lab demonstrates the complete lifecycle of custom AMI management: creating an AMI from a running instance, launching new instances from your custom AMI, and properly deleting AMIs to avoid unnecessary storage costs. 


## Key Concepts

| Concept | Description |
|---------|-------------|
| AMI (Amazon Machine Image) | Pre-configured template containing OS, software, and settings for launching identical EC2 instances |
| Custom AMI | User-created AMI from a configured instance, capturing all installed software and configurations |
| EBS Snapshot | Point-in-time backup of EBS volume data, automatically created when AMI is generated |
| Golden Image | Master AMI representing ideal server configuration, used to launch all production instances |
| AMI Registration | Process of making an AMI available for launching instances in your account |
| Deregistration | Removing AMI from your account; makes it unavailable but doesn't delete underlying snapshots |
| AMI ID | Unique identifier (ami-xxxxxxxxx) for each AMI, specific to a region |
| Region-Specific | AMIs exist only in the region where created; must be copied to use in other regions |
| Root Device Volume | Primary EBS volume containing the OS; snapshot becomes part of AMI |
| Reboot Option | When checked, reboots instance during AMI creation for filesystem consistency; unchecked for faster creation with risk of inconsistency |

## Prerequisites

- Active AWS account (Free Tier eligible)
- Completed Lab 6 (SSH to Linux EC2) or Lab 7 (Apache on EC2)
- Running EC2 instance with custom configuration (e.g., installed Apache, uploaded files)
- Basic understanding of EBS volumes and snapshots
- Understanding of instance states (running, stopped, terminated)

## Create Custom AMI from EC2 Instance

This section creates a reusable image capturing your instance's current configuration.

### Phase 1: Prepare Source Instance

Before creating an AMI, ensure your instance is properly configured.

1. Launch an EC2 instance with custom configuration (or use existing):
   - Install software (e.g., Apache: `sudo yum install httpd -y`)
   - Upload website files to /var/www/html
   - Configure services, settings, users
   - Test that everything works correctly

> [!NOTE] What Gets Captured
> The AMI includes the entire root EBS volume (OS, installed software, configuration files, data files). It does NOT include instance metadata like Public IP, instance ID, or security group associations.

2. Document your configuration:
   - List of installed packages
   - Configuration file locations
   - Custom scripts or services
   - This documentation helps verify new instances

3. Optional: Clean up instance before AMI creation:
   ```bash
   # Remove temporary files
   sudo rm -rf /tmp/*
   
   # Clear bash history (for sensitive commands)
   history -c
   
   # Remove SSH host keys (new instances generate their own)
   sudo rm -f /etc/ssh/ssh_host_*
   ```

> [!TIP] Security Best Practice
> Before creating an AMI, remove sensitive data (passwords, API keys, private keys) from configuration files and command history. New instances launched from the AMI will inherit all files and data.

### Phase 2: Create the AMI

1. Sign in to AWS Management Console.

2. Navigate to EC2 service → **Instances**.

3. Select the instance you want to image:
   - Click the checkbox next to the instance
   - Instance can be running or stopped (running is fine)

4. Click **Actions** dropdown button (top-right).

5. Navigate to **Image and templates** → **Create image**.

6. Configure AMI details:
   - **Image name:** Enter descriptive name (e.g., `MyWebsiteAMI`, `ApacheServer-v1.0`)
   - **Image description:** Add details (e.g., "AMI created from configured Apache website instance")
   - Good naming helps identify AMIs later

> [!IMPORTANT] Naming Convention
> Use descriptive, versioned names for AMIs (e.g., `webserver-prod-v1.2`, `app-server-2024-01-16`). You may create multiple AMIs over time and need to distinguish between versions.

7. Configure reboot behavior:
   - **Reboot instance:** Checked (default)
   - **Why unchecked:** Faster creation but risks filesystem inconsistency
   - **Why checked:** Allows instance to reboot for filesystem consistency, but takes 2-3 minutes downtime

> [!WARNING] No Reboot Risk
> If you leave "Reboot instance" unchecked, the instance stays online during AMI creation. This is faster but risks data corruption if files are being written when the snapshot occurs. File system may be in an inconsistent state. Always check reboot unless downtime is absolutely unacceptable.

8. Review storage volumes:
   - The **Instance volumes** section shows attached EBS volumes
   - Root volume appears automatically (e.g., /dev/xvda, 8 GiB)
   - Additional volumes (if any) are included
   - Leave default settings unless you need to exclude volumes

9. Click **Create image** button.

10. Confirmation message appears:
    - Note the **AMI ID** (format: ami-xxxxxxxxxxxxxxxxx)
    - Click **AMI ID** link to see status

11. Monitor AMI creation:
    - Go to EC2 → **Images** → **AMIs** (left navigation)
    - Find your AMI by name
    - **Status:** Shows "Pending" → changes to "Available" (5-10 minutes)
    - During creation, instance reboots briefly if "Reboot instance" was checked

> [!NOTE] Creation Time
> AMI creation time depends on EBS volume size. Typical 8 GB root volume takes 5-10 minutes. Larger volumes (50+ GB) may take 20-30 minutes. The instance is briefly unavailable during reboot.

12. Verify AMI details:
    - Select your AMI
    - Check **Details** tab: AMI ID, creation date, root device type (ebs)
    - Check **Block devices** tab: Shows EBS snapshot ID
    - Check **Permissions** tab: Private (only your account can use it)

### Phase 3: Understand AMI and Snapshot Relationship

1. View the associated EBS snapshot:
   - Go to EC2 → **Elastic Block Store** → **Snapshots**
   - Find snapshot with description matching your AMI ID
   - Note the **Snapshot ID** (snap-xxxxxxxxxxxxxxxxx)
   - **Size** matches root volume size (e.g., 8 GB)

2. Understand the relationship:
   - **AMI** = Registration metadata + one or more snapshots
   - **Snapshot** = Actual data backup of EBS volume
   - Deleting AMI does NOT delete snapshot automatically
   - Snapshot continues incurring storage charges even after AMI deletion

> [!IMPORTANT] Cost Trap
> Many users deregister AMIs but forget to delete snapshots, continuing to pay storage costs ($0.05/GB-month). Always delete associated snapshots after deregistering unused AMIs.

## Launch EC2 Instance from Custom AMI

This section demonstrates launching identical instances from your custom AMI.

### Phase 1: Launch from AMI

1. Navigate to EC2 → **Images** → **AMIs** (left navigation).

2. Locate your custom AMI:
   - Use the filter: **Owned by me**
   - Verify **Status** = Available

3. Select your AMI (click checkbox).

4. Click **Launch instance from AMI** button (top-right).
   - Alternative: **Actions** → **Launch instance from image**

5. Configure the new instance:
   - **Name:** `WebServer-from-Custom-AMI` (or descriptive name)
   - **Instance type:** t3.micro (Free tier eligible)
   - **Key pair:** Select existing .pem key for SSH access
   
6. Network settings:
   - **VPC:** Default VPC
   - **Subnet:** Public subnet (for internet access)
   - **Auto-assign Public IP:** Enable
   - **Security group:** Select or create security group with appropriate rules
     - HTTP (80) if web server
     - SSH (22) for management

7. Storage configuration:
   - **Root volume:** Automatically configured from AMI (e.g., 8 GB gp3)
   - **Size:** Matches AMI snapshot size
   - **Delete on termination:** Checked (default)

> [!NOTE] Storage Flexibility
> You can increase the root volume size when launching from AMI (e.g., change 8 GB to 20 GB), but you cannot decrease it. Additional volumes can be added but won't contain AMI data.

8. Review and launch:
   - Review the **Summary** panel
   - AMI ID should match your custom AMI
   - Click **Launch instance**

9. Wait for instance to be ready:
   - **Instance state:** Running (1-2 minutes)
   - **Status check:** 2/2 checks passed (2-3 minutes)

### Phase 2: Verify Inherited Configuration

1. Get the Public IPv4 address of the new instance.

2. If your AMI included a web server, test in browser:
   ```
   http://<New-Public-IP>
   ```
   - You should see the same website from the original instance
   - No Apache installation needed—it's already configured

3. SSH to the new instance:
   ```bash
   ssh -i your-key.pem ec2-user@<New-Public-IP>
   ```

4. Verify inherited software:
   ```bash
   # Check if Apache is installed and running
   sudo systemctl status httpd
   
   # List website files
   ls -la /var/www/html/
   
   # Check installed packages
   rpm -qa | grep httpd
   ```

5. Confirm configuration matches original:
   - Same software versions
   - Same configuration files
   - Same data files
   - Same directory structure

> [!TIP] Golden Image Strategy
> In production, you build one perfect "golden image" AMI with all security patches, software, and configurations. Then launch all production servers from that AMI to ensure consistency and eliminate configuration drift.

## Delete Custom AMI

Deleting an AMI requires two steps: deregistering the AMI and deleting the associated EBS snapshot.

### Phase 1: Deregister the AMI

1. Navigate to EC2 → **Images** → **AMIs**.

2. Find the AMI you want to delete:
   - Use **Owned by me** filter
   - Identify by name or AMI ID

3. Select the AMI (click checkbox).

4. Click **Actions** dropdown → **Deregister AMI**.

5. Confirmation dialog appears:
   - **Warning:** "This operation deregisters the AMI. It will no longer be available to launch new instances."
   - Click **Deregister** button

6. AMI is removed from the AMI list:
   - You cannot launch new instances from this AMI
   - Existing instances are NOT affected
   - **However:** The snapshot still exists and incurs charges

### Phase 2: Delete Associated Snapshot

1. Navigate to EC2 → **Elastic Block Store** → **Snapshots**.

2. Find the snapshot associated with the deleted AMI:
   - Check the **Description** column
   - Look for references to your AMI ID (ami-xxxxx)
   - Or filter by creation date matching AMI creation

3. Select the snapshot (click checkbox).

4. Verify snapshot details:
   - **Size:** Should match your root volume size
   - **Started:** Creation date should match AMI creation
   - **Volume ID:** Shows source volume

5. Click **Actions** dropdown → **Delete snapshot**.

6. Confirmation dialog appears:
   - **Warning:** "Are you sure you want to delete this snapshot?"
   - **Note:** "This operation cannot be undone."
   - Click **Delete** button

7. Snapshot is permanently deleted:
   - Storage is freed
   - Charges stop immediately
   - Cannot be recovered

> [!IMPORTANT] Two-Step Process
> You must BOTH deregister the AMI AND delete the snapshot to completely remove resources and stop all charges. Deregistering the AMI alone leaves the snapshot ($0.05/GB-month charges continue).

## Validation

::: details Validation Checks

Verify successful completion:

- **AMI Creation:**
  - AMI appears in AMIs list with status "Available"
  - AMI ID generated (ami-xxxxxxxxxxxxxxxxx)
  - Description and name are accurate
  - Associated snapshot visible in Snapshots list

- **Launch from AMI:**
  - New instance launches successfully
  - Instance inherits all software and configurations
  - Web server (if applicable) runs without installation
  - Files and settings match original instance

- **AMI Deletion:**
  - AMI no longer appears in AMIs list
  - Cannot launch new instances from deregistered AMI
  - Associated snapshot deleted from Snapshots list
  - No ongoing storage charges for snapshot

- **Functionality:**
  - Instance launched from AMI behaves identically to source instance
  - All services start automatically (e.g., httpd enabled)
  - No manual configuration required
:::

## Cost Considerations

::: details Cost Considerations
- **AMI Storage:**
  - **Free Tier:** Included in 30 GB of EBS snapshots for first 12 months
  - **After Free Tier:** $0.05/GB-month (us-east-1)
  - **Example:** 8 GB AMI = $0.40/month

- **EBS Snapshots:**
  - Same as AMI storage (snapshots are the underlying storage mechanism)
  - Incremental backups: Only changed blocks stored for subsequent snapshots
  - Full cost applies to first snapshot

- **Instance Launched from AMI:**
  - Same costs as any EC2 instance:
    - Compute: t3.micro ~$0.0104/hour
    - Storage: EBS volume charges apply
    - Data transfer: Standard rates

- **AMI Copy Between Regions:**
  - Snapshot copy charges: $0.05/GB one-time
  - Storage in destination region: $0.05/GB-month ongoing

:::

## Cleanup

::: details Cleanup
To avoid ongoing charges:

1. **Terminate instances launched from AMI:**
   - EC2 → Instances
   - Select instances
   - **Instance state** → **Terminate instance**

2. **Deregister the AMI:**
   - EC2 → AMIs
   - Select your custom AMI
   - **Actions** → **Deregister AMI**
   - Confirm deregistration

3. **Delete associated snapshot:**
   - EC2 → Snapshots
   - Find snapshot (check description for AMI ID)
   - **Actions** → **Delete snapshot**
   - Confirm deletion

4. **Verify cleanup:**
   - No AMIs in your AMI list (except AWS-provided public AMIs)
   - No snapshots in Snapshots list (except those you want to keep)
   - No unexpected EBS storage charges
:::

> [!IMPORTANT] Cleanup Order
> You can delete in any order, but best practice is: 
> 1) Terminate instances
> 2) Deregister AMI
> 3) Delete snapshot. 
> This ensures you don't accidentally delete snapshots for AMIs still in use.

## Result

You have successfully created a custom Amazon Machine Image from a configured EC2 instance, launched new identical instances from that AMI, and properly deleted AMIs with their associated snapshots. You now understand the relationship between AMIs and EBS snapshots, the importance of proper naming and versioning, and the two-step deletion process to avoid ongoing storage costs.

## Viva Questions

| Benefit | Description |
|---------|-------------|
|Reusability|Launch multiple identical servers quickly|
|Backup|Acts as a snapshot of your configured instance|
|Auto Scaling|Used by Auto Scaling Groups to create identical instances automatically|
|Disaster Recovery|Recreate your setup if the original instance fails|
|Time-saving|No need to reinstall Apache or re-upload files each time|

1. **What is the relationship between an AMI and an EBS snapshot, and why must you delete both?**
   - An AMI is registration metadata pointing to one or more EBS snapshots that contain the actual volume data. The snapshot is the underlying storage mechanism. When you deregister an AMI, AWS only removes the AMI registration record, making it unavailable for launching instances. The snapshot remains intact and continues incurring storage charges ($0.05/GB-month). To completely remove resources and stop charges, you must both deregister the AMI and separately delete the associated snapshot.

2. **Why are AMIs region-specific, and how would you use an AMI in a different region?**
   - AMIs are stored in specific AWS regions because they rely on EBS snapshots, which are also region-specific. This design improves performance (low-latency access) and enables regional isolation for disaster recovery. To use an AMI in a different region, you must copy it: EC2 → AMIs → Select AMI → Actions → Copy AMI → Select destination region. AWS copies the snapshot to the new region and registers a new AMI there. This incurs data transfer costs and creates separate storage charges in both regions.

3. **What is a "golden image" strategy, and what are its benefits?**
   - A golden image is a master AMI representing the ideal, fully configured and secured server setup. Instead of manually configuring each instance, you build one perfect instance (with all security patches, software, configurations, monitoring agents), create an AMI, and launch all production instances from it.
   
