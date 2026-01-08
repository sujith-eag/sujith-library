# Amazon S3 Advanced Features

Topics: Static Website Hosting, Versioning, Cross-Region Replication

Date: 16-10-2025, 23-10-2025

## S3 Advanced Features Overview

This lab covers three major S3 capabilities:

| Feature | Purpose |
|---------|--------|
|Static Website Hosting|Convert a bucket into a web server for HTML/CSS/JS sites|
|Versioning|Keep multiple versions of objects for recovery|
|Cross-Region Replication|Automatically copy objects to another region for disaster recovery|

## Amazon S3 Static Website Hosting

Amazon S3 can host a static website – a website consisting of only HTML, CSS, JavaScript, images, etc. – no server-side scripting like PHP or Python.

```mermaid
flowchart TD
    User((Web User)) -->|HTTP Request| Bucket[S3 Bucket]
    
    subgraph Bucket_Config [Bucket Configuration]
        Policy[Bucket Policy: Public Read]
        Config[Index & Error Documents]
        Files[HTML, CSS, JS Files]
    end
    
    Bucket --> Policy
    Policy -->|Allowed| Config
    Config -->|Serves| Files
    Files -->|Response| User
```

### Improved S3 Static Website Architecture

```mermaid
flowchart TD
    User[Web User] -->|HTTP Request| S3[S3 Bucket<br/>Static Website Hosting]
    
    S3 --> Policy[Bucket Policy<br/>Public Read Access]
    S3 --> Config[Static Website Config<br/>Index & Error Documents]
    S3 --> Files[Static Files<br/>HTML, CSS, JS, Images]
    
    Policy -.->|Enables| Access[Public Access]
    Config -.->|Configures| Hosting[Website Hosting]
    Files -.->|Serves| User
```

When you enable "Static Website Hosting," your S3 bucket acts like a web server, and AWS provides a public website URL to access it. You can create a multi-page static website (e.g., `index.html`, `about.html`, `contact.html`) and upload it to S3. Links within these pages allow users to navigate between them just like a normal website.

### Static Website Setup Flow

```mermaid
flowchart TD
    Start([Start]) --> Bucket[Create S3 Bucket<br/>Unique Name<br/>ACLs Enabled]
    Bucket --> Files[Upload Website Files<br/>HTML, CSS, JS, Images]
    Files --> Hosting[Enable Static Website Hosting<br/>Set Index & Error Documents]
    Hosting --> Policy[Attach Bucket Policy<br/>Public Read Access]
    Policy --> URL[Website URL Generated<br/>Access Your Site]
```

**Step 1:** Create an S3 Bucket

- Open the AWS Management Console → Navigate to S3.
    
- Click Create bucket.
    
- Select Bucket type: General purpose.
    
- Enter a unique bucket name (e.g., `my-static-web-demo`).
    
- **Select ACLs enabled under Object Ownership section.**
    
- Uncheck “Block all public access.”
    
- Click Create bucket.

**Step 2:** Prepare Website Files

- Before uploading, organize your files in a folder structure as follows:
    
```
my-website/
|
+-- index.html
+-- about.html
+-- contact.html
+-- error.html
+-- images/
+-- banner.jpg
```

- Each HTML file should include navigation links.

**Step 3:** Upload Website Files

- Open your S3 bucket → Click Upload.
    
- Add all files and folders (HTML, CSS, JS, images).
    
- Click Upload to store them in S3.

**Step 4:** Enable Static Website Hosting

- Go to the **Properties** tab of the bucket.
    
- Scroll down to **Static website hosting** → Click Edit.
    
- Choose Enable and select ‘Host a static website’.
    
- Set:
    
    - Index document: `index.html`
        
    - Error document: `error.html`
        
- Click Save changes.

**Step 5:** Make Files Public (Bucket Policy)

- By default, your files are private. To make them public:
    
- Go to the **Permissions** tab → **Bucket Policy** → Edit.
    
- Paste the following policy (replace `my-static-web-demo` with your actual bucket name):
    

```json
{
    "Version": "2012-10-17",
    "Statement": [
    {
        "Sid": "PublicReadGetObject",
        "Effect": "Allow",
        "Principal": "*",
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::my-static-web-demo/*"
    }
    ]
}
```

- Save the changes.

**Step 6:** Access Your Website

- Go to the **Properties** tab → Scroll to **Static website hosting**.
    
- Copy the **Bucket Website Endpoint URL**.
    
- Paste it into your browser — your homepage (`index.html`) should appear.
    
- Use the header links to navigate between pages (About, Contact, etc.).

>[!NOTE]
>S3 Static Website Hosting provides an **HTTP** endpoint (not secure). Your browser might warn "Not Secure." To get HTTPS (the lock icon), you must put **CloudFront** (CDN) in front of S3.

	
### When Will the Error Page Be Shown?

If a user enters a wrong URL or tries to access a file that doesn't exist (e.g., `/abc.html`), Amazon S3 automatically displays the file you set as the Error document (`error.html`).

## Amazon S3 Versioning

Versioning allows you to keep multiple versions of an object in a bucket. If a file is accidentally deleted or overwritten, you can recover the previous version. Each version gets a unique version ID.

### Enable Versioning

1. Go to your S3 bucket.
    
2. Open the **Properties** tab.
    
3. Scroll to **Bucket Versioning**.
    
4. Click Edit → Enable.
    
5. Click Save changes.
    

Now whenever you upload a file with the same name, S3 will keep both versions. You can view versions by clicking "List versions" in the bucket objects page.

> [!NOTE]
> When you enable versioning, if you overwrite a 1GB file 10 times, you are paying for **11GB** of storage (10 old versions + 1 current). You must set up a **Lifecycle Policy** to delete old versions automatically after 30 days to save money.

### Restore or Delete a Specific Version

1. Click the object name → Versions.

2. Select the desired version → Download / Delete (Deleting only adds a delete marker — older versions are still stored).

## Cross-Region Replication (CRR)

CRR automatically copies objects from one S3 bucket (source) to another (destination) in a different AWS Region. It is used for disaster recovery, compliance, or low-latency access in another region.

**Requirement:** Versioning must be enabled on both buckets.

> [!NOTE]
> Cross-Region Replication **doubles your storage cost** (data in 2 regions) AND adds **Data Transfer costs** (paying to move data across the country).

### Cross-Region Replication Flow

```mermaid
flowchart TD
    Upload[Upload Object] --> Source[Source Bucket<br/>Region A<br/>Versioning Enabled]
    
    Source --> Rule[Replication Rule<br/>Configured]
    Rule --> IAM[IAM Role<br/>S3 Replication Permissions]
    
    IAM -->|Asynchronous Copy| Dest[Destination Bucket<br/>Region B<br/>Versioning Enabled]
    
    Dest --> Replicated[Object Replicated<br/>Disaster Recovery<br/>Low Latency Access]
```

### Set Up CRR

**NOTE:** Enable Versioning on both:

- Source bucket
    
- Destination bucket

**Step 1:** Choose a different region before you create the Destination bucket.

**Step 2:** Create Destination Bucket first.

**Step 3:** Create Source Bucket

- Give replication permission:
    
- Source bucket → Management tab → Replication rules → Create rule.

**Step 4:** Create Replication Rule page

- Enter a Replication rule name.
    
- Status: Enabled.
    
- **Source bucket section:**
    
    - Choose a rule scope: select “Apply to all objects in the bucket”.
        
- **Destination:**
    
    - Select “Choose a bucket in this account”.
        
    - Bucket name: Select the destination bucket.
        
- **IAM role:**
    
- Select "Create new role".

**Step 5:** Save

Any new objects uploaded to the source bucket will automatically replicate to the destination region.

Note: Replication is not retroactive — only new uploads after enabling CRR are copied.

Reminder: Resource cleanup – release/delete/terminate the resources created when finished.

>[!NOTE]
>**Delete Markers:** When you "delete" a file in a versioned bucket, AWS puts a "Delete Marker" on it. The file is hidden, not gone. It still costs money until you delete the specific version ID.
   