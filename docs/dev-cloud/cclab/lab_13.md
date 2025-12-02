# Stress Testing a Linux EC2 Instance

**Date:** 20-11-2025

This lab demonstrates how to generate high CPU load on an Amazon EC2 Linux instance using the `stress-ng` tool and observe CPU utilization in CloudWatch.

```mermaid
flowchart TD
    subgraph User_Actions [User Actions]
        U1[SSH to Instance]
        U2[Run stress-ng]
        U3[Monitor CloudWatch]
    end
    
    subgraph EC2 [EC2 Instance]
        OS[Linux OS]
        Tool[stress-ng Tool]
        CPU[vCPU Resources]
    end
    
    subgraph Monitoring [AWS CloudWatch]
        CW[CloudWatch Metrics]
        Graph[CPU Utilization Graph]
    end

    U1 --> OS
    U2 --> Tool
    Tool --> CPU
    CPU -.->|Reports Usage| CW
    CW --> Graph
    U3 --> Graph
```

## Launch a Linux EC2 Instance

**Step 1:** Log in to the AWS Console.

**Step 2:** Go to EC2 → Instances → Launch Instance.

**Step 3:** Configure instance details:

- Name: `StressTest-EC2`
- AMI: Amazon Linux 2023 (Free Tier eligible)
- Instance type: `t2.micro` / `t3.micro`
- Key pair: Select or create a `.pem` key

**Step 4:** Configure Security Group:

- Allow SSH (22) from My IP
- Allow HTTP (80) from anywhere (optional)

**Step 5:** Launch the instance.

## Connect to the EC2 Instance

Use Windows PowerShell. Navigate to the folder where the `.pem` file is located:

```bash
ssh -i "your-key.pem" ec2-user@<public-ip>
```

## Install Apache (Optional)

To verify the instance is working:

```bash
sudo yum install httpd -y
sudo systemctl start httpd
sudo systemctl enable httpd
```

Create a test web page:

```bash
echo "<h1>EC2 Stress Test Demo - $(hostname)</h1>" | sudo tee /var/www/html/index.html
```

## Install the Stress Testing Tool

For Amazon Linux 2023 EC2 Instances, move to the `ec2-user` home directory:

```bash
cd ~
```

Install stress-ng (Amazon Linux 2023 includes it directly through dnf):

```bash
sudo dnf install stress-ng -y
```

## Run the CPU Stress Test

Generate high CPU load using 4 CPU workers for 2 minutes:

```bash
stress-ng --cpu 4 --timeout 120
```

**Expected Output:**

- Terminal becomes busy during the 120-second load test
- After completion: `successful run completed in 120.02s`
- CPU usage spikes to 90–100% (check using `top`)

>[!NOTE] The "5-Minute" Gap
>By default, EC2 sends metrics to CloudWatch every **5 minutes** (Basic Monitoring). If your stress test runs for only **2 minutes** (120s), CloudWatch might smooth out that spike in the graph, showing an average of 40% instead of a peak of 100%.
>
>Run the stress test for at least **6-10 minutes** to see a clear block on the graph.
>

## Observe CPU Utilization in CloudWatch

```mermaid
flowchart TD
    EC2[EC2 Instance] -->|Sends Metrics| CW[CloudWatch]
    CW --> Nav[Navigate to Metrics]
    Nav --> Select[Select EC2 → Per-Instance]
    Select --> CPU[Choose CPUUtilization]
    CPU --> Graph[View Spike in Graph]
```

**Step 1:** Go to CloudWatch → Metrics → EC2 → Per-Instance Metrics.

**Step 2:** Select CPUUtilization → InstanceId → your instance.

**Step 3:** View graph in 1-minute or 5-minute intervals.

You should see a sharp spike during the 2-minute stress period.

>[!NOTE] Real-time Monitoring
>CloudWatch has a delay. To see _instant_ results, use the Linux command `top` or `htop` inside the SSH terminal while the test is running.
>
  
## Stop or Terminate the Instance

To avoid charges:

### Option A: Stop the Instance (Safe)

Actions → Instance State → Stop

### Option B: Terminate (Permanently Delete)

Actions → Instance State → Terminate

## Expected Results

| Metric | Expected Value |
|--------|---------------|
|CPU Utilization in CloudWatch|90–100%|
|Stress test completion|Without errors|
|Understanding gained|How CPU load affects EC2 metrics|

     
>[!NOTE] The "Burstable" Trap
>`t2.micro` or `t3.micro` utilize **CPU Credits**. If you run a T-instance at 100% CPU for too long, you will burn through your credits. Once empty, AWS **throttles** your CPU down to a baseline (e.g., 10% or 20%), even if `stress-ng` is asking for 100%. This is expected behavior for T-family instances.
>

