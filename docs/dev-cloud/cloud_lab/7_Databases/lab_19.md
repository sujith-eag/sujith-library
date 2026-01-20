---
title: ElastiCache (Valkey) as an In-Memory Cache
description: Deploy and use Amazon ElastiCache with Valkey for in-memory caching operations
---

# ElastiCache (Valkey) as an In-Memory Cache

**Topics:** Databases, Caching, ElastiCache, Valkey, AWS

## Overview

This lab demonstrates Amazon ElastiCache using Valkey as an in-memory caching layer to improve application performance. You'll deploy a Valkey cluster, connect from an EC2 instance, and perform basic cache operations like storing, retrieving, and expiring data.

## Key Concepts

| Concept | Description |
|---------|-------------|
| ElastiCache | Managed in-memory caching service compatible with Valkey/Redis/Memcached |
| Valkey | High-performance, Redis-compatible data structure store used as cache |
| Redis OSS | Open-source alternative, but Valkey is recommended for new deployments |
| TTL (Time To Live) | Automatic expiration of cached data |
| Cache Hit/Miss | Data found in cache (hit) or fetched from DB (miss) |
| Subnet Groups | Define subnets for ElastiCache clusters in VPC (not needed for serverless) |
| Serverless | Auto-scaling, pay-per-use deployment option |
| Encryption | Data protection at rest and in transit |
| Authentication | Secure access using passwords/tokens |

### Prerequisites

- Active AWS account with billing enabled
- IAM permissions for ElastiCache and EC2
- Basic knowledge of Redis and caching concepts


## Architecture Overview

::: details Click to expand ElastiCache Data Flow
```mermaid
flowchart TD
    User[User Request] --> App[Application Layer]
    
    App --> Cache{Data in Cache?<br/>Check ElastiCache Valkey}
    
    Cache -->|HIT - Data Found| ReturnCache[Return Cached Data<br/>⚡ Fast Response]
    Cache -->|MISS - Data Not Found| FetchDB[Fetch from Database<br/>RDS/MySQL]
    
    FetchDB --> StoreCache[Store in Cache<br/>Set TTL]
    StoreCache --> ReturnData[Return Fresh Data]
    
    ReturnCache --> User
    ReturnData --> User
```
:::

## Phase 1: Launch EC2 Client using Amazon Linux 2023

**Purpose:** To create an EC2 instance that will act as a client machine to connect to ElastiCache using `valkey-cli`.

1. Select Region. 
    Ensure EC2 and ElastiCache stay in the same region.

2. Launch Instance
    - **Name:** `RedisClient-AL2023`
    - **AMI:** Amazon Linux 2023 AMI
    - **Instance Type:** `t3.micro` (Free Tier)
    - **Key Pair:** Select an existing `.pem` file

3. Network & Security Group
    - **VPC:** Default VPC
    - **Security Group Name:** `SG-RedisClient`
    - **Inbound Rules:** | Type: SSH | Port: 22 | Source : 0.0.0.0/0 |

> [!IMPORTANT]
> Do NOT add Redis (6379) here. The client does not listen on 6379.

- **Outbound rules:** Allow all (default)

4. Connect & Install Client
    Connect via EC2 Instance Connect and run:

```bash
sudo dnf update -y
sudo dnf install -y valkey
# Verify installation
valkey-cli --version
```

> [!NOTE]
> Amazon Linux 2023 uses **Valkey**, which is fully Redis-protocol compatible.

**Verification:** Confirm EC2 status is "Running" and valkey-cli version displays.


## Phase 2: Create Amazon ElastiCache (Valkey) Cache

**Purpose:** To create an Amazon ElastiCache Valkey serverless cache that will act as an in-memory cache, accessible from the EC2 client created in Phase-1.

1. Confirm AWS Region
    - Ensure you are in the **same region** used in Phase-1
    - EC2 and ElastiCache must be in the **SAME region and VPC**

2. Open ElastiCache Console
    1. AWS Console → **Services**
    2. Select **ElastiCache**
    3. Click **Create cache**

3. Select Cache Engine
    - **Engine:** Valkey

4. Choose Deployment Settings
    - **Deployment option:** Serverless
    - **Creation method:** Easy create

> [!TIP]
> Serverless deployment provides automatic scaling and simplifies management for development and testing.

5. Select Configuration
    - **Configuration:** Demo
    - This automatically selects suitable defaults for labs and practice

6. Provide Cluster Information
    - **Cache name:** `lab-valkey`
    - **Description:** Optional (`lab-valkey`)

7. Configure Network
    - **VPC:** Default VPC
    - **Security Group:** Create or select a security group named **SG-ValkeyCache**
    - **Inbound Rule for Valkey:** Add **one inbound rule** to SG-ValkeyCache:
    | Type | Port | Source |
    |------|------|--------|
    | Custom TCP | 6379 | SG-RedisClient |

> [!NOTE]
> This allows only the EC2 client to access Valkey.

8. Configure Security and Encryption
    - **Authentication:** Enabled
        - Set a strong password (e.g., `MySecurePass123!`)
        - Note: Store this password securely; you'll need it to connect
    - **Encryption in transit:** Enabled
    - **Encryption at rest:** Enabled (using AWS managed key)

> [!IMPORTANT]
> Enabling authentication and encryption follows AWS security best practices for production workloads.

9. Create Cache

    1. Review all settings
    2. Click **Create**
    3. Wait until **Status = Available** (This may take a few minutes)

10. Note the Valkey Endpoint
    1. Click on the cache name `lab-valkey`
    2. Copy the **Serverless endpoint** (for serverless deployment)
       - Example: `lab-valkey-xxxxxx.serverless.use1.cache.amazonaws.com`
    3. If using cluster mode, copy the **Configuration endpoint**
       - Example: `clustercfg.lab-valkey-xxxxxx.use1.cache.amazonaws.com:6379`
    4. This endpoint will be used in Phase-3 to connect from EC2

> [!NOTE]
> For serverless deployment, use the serverless endpoint. For cluster mode, use the configuration endpoint and add `-c` flag to valkey-cli for cluster support.

**Verification:** Confirm cache status is "Available" and endpoint is noted.


## Phase 3: Connect EC2 to ElastiCache Valkey and Execute Cache Commands

**Purpose:** To connect the EC2 client (Amazon Linux 2023) to the ElastiCache Valkey serverless cache using valkey-cli and demonstrate basic in-memory cache operations.

### Pre-checks

Before connecting, confirm:

- EC2 and ElastiCache are in the same AWS region
- EC2 security group = `SG-RedisClient`
- Valkey security group = `SG-ValkeyCache`
- Valkey security group allows port 6379 from `SG-RedisClient`
- Valkey Status = **Available**
- You have copied the **Serverless endpoint**
- You have the authentication password set in Phase 2

1. Connect to EC2
    1. AWS Console → **EC2**
    2. Select instance `RedisClient-AL2023`
    3. Click **Connect**
    4. Choose **EC2 Instance Connect** and click **Connect**
    5. You are now inside the EC2 terminal

2. Verify Valkey Client

```bash
valkey-cli --version
```

3. Connect to ElastiCache Valkey

Use the Serverless Endpoint from Phase-2 and the password:

```bash
valkey-cli -h <Serverless_ENDPOINT> -p 6379 -a <PASSWORD>
```

For cluster mode, use the Configuration endpoint:

```bash
valkey-cli -h <Configuration_ENDPOINT> -p 6379 -a <PASSWORD> -c
```

**Expected Result:** You should see a prompt like `lab-valkey-xxxxxx.serverless.use1.cache.amazonaws.com:6379>`. This means the connection is successful.

4. Execute Valkey Commands

These commands simulate what an application does internally.

#### 4.1 Test Connectivity

```
PING
```

**Expected Output:** `PONG`

#### 4.2 Store and Retrieve Data (SET / GET)

```
SET course "Cloud Computing"
GET course
```

**Expected Output:** `"Cloud Computing"`

> [!NOTE]
> Demonstrates key–value storage in memory.

#### 4.3 Counter Example (INCR)

```
INCR visits
INCR visits
GET visits
```

**Expected Output:** `"2"`

> [!TIP]
> Common real-world use - page views, hit counters.

#### 4.4 Set Data with Expiry (TTL)

```
SET notice "Results Published" EX 60
TTL notice
GET notice
```

**Expected Output:**

- TTL shows a value ≤ 60
- GET returns "Results Published"

#### 4.5 Verify Automatic Expiry

Wait ~60 seconds, then run:

```
GET notice
```

**Expected Output:** `(nil)`

> [!NOTE]
> Confirms data is automatically removed from memory.

#### 4.6 Delete Data Manually

```
DEL course
GET course
```

**Expected Output:** `(nil)`

5. Exit Valkey Client

```
EXIT
```

> [!TIP]
> The application first checks Valkey. If data is present, it is returned immediately from memory. If not present, the application fetches data from the database and stores it in Valkey with a TTL. Valkey automatically removes the data after expiry.

**Verification:** Confirm all commands executed as expected (e.g., GET returns values, TTL expires).

- EC2 successfully connected to ElastiCache Valkey
- In-memory key–value operations verified
- Temporary storage and TTL behavior observed
- Valkey used as a cache, not as a primary database

### Validation

::: details Validation

- **EC2 Setup:** Confirm instance is running, valkey-cli installed, and connected to Valkey.
- **ElastiCache Cache:** Verify status is "Available" and endpoint is accessible.
- **Cache Operations:** Test SET/GET, INCR, TTL, and DEL commands.
- **Expiry:** Confirm data is removed after TTL expires.
- **Security:** Ensure only authorized EC2 can connect via security groups, with authentication and encryption enabled.

:::


### Cleanup

::: details Cleanup

**Step 1: Delete Valkey Cache**

ElastiCache → Select `lab-valkey` → **Delete** (Disable snapshots)

**Step 2: Terminate EC2 Instance**

EC2 → Instances → **Terminate** `RedisClient-AL2023`

**Step 3: Optional**

Delete unused security groups

:::

## Valkey Commands Explanation

- `SET course "Cloud Computing"`: Stores frequently accessed data in cache
- `GET course`: Retrieves data from memory
- `EXPIRE course 30`: Sets a 30-second timer for the data
- `TTL course`: Checks remaining time before the data is removed

> [!NOTE]
> The above commands simulate application caching behavior. Cached data is temporary and stored in memory. After expiry, the application would fetch fresh data from the database again.


## Result

Successfully deployed an ElastiCache Valkey serverless cache with encryption and authentication enabled, and performed in-memory caching operations from an EC2 instance. Demonstrated key concepts like TTL, cache hits/misses, and integration with databases for improved application performance, following AWS security best practices.


## Viva Questions

1. What is the primary purpose of ElastiCache in AWS?
2. Explain the difference between a cache hit and a cache miss.
3. How does TTL work in Valkey, and why is it important?
4. Why would you use ElastiCache instead of storing data directly in RDS?
5. What security measures are implemented when connecting EC2 to ElastiCache?
6. What are the benefits of using ElastiCache Serverless deployment?
7. Why is encryption important for cached data?
