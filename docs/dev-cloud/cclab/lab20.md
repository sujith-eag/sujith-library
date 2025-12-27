## AWS Lab Manual: Exercise–20

**DATE:** 05-12-25

### Exercise–20: Deploying a Flask Application on AWS Elastic Beanstalk

#### Prerequisites

- Active AWS account with billing enabled.
- IAM permissions for Elastic Beanstalk and EC2.
- Python installed locally for app creation.
- Basic knowledge of Flask and web deployment.

**Objective:** Deploy a simple Flask application on AWS Elastic Beanstalk and verify it using the public URL.

---

### Phase A — Create the Flask App

Step A1: Create a Project Folder

On your local system, create a folder named: eb-flask-lab

Step A2: Create application.py

Inside the folder, create a file named application.py with the following code:

Python

```
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello from Flask on Elastic Beanstalk!"

@app.route("/health")
def health():
    return "OK"

if __name__ == "__main__":
    app.run()
```

Step A3: Create requirements.txt

Create a file named requirements.txt and add the following dependencies:

Plaintext

```
Flask==3.0.3
gunicorn==22.0.0
```

Step A4: Create Procfile (MOST IMPORTANT)

Create a file named exactly Procfile (with no file extension).

Contents:

Plaintext

```
web: gunicorn application:app
```

> **Windows Note:** In Notepad, select **Save as type: All Files** to ensure it doesn't save as `Procfile.txt`.

Step A5: Verify Folder Contents

Ensure your folder contains exactly these 3 files:

- `eb-flask-lab/`
    
    - ├─ `application.py`
        
    - ├─ `requirements.txt`
        
    - └─ `Procfile` (Type should show as “File”)
        

- **Verification:** Run `python application.py` locally to ensure it starts without errors.

---

### Phase B — Create the Root-Level ZIP

Step B1: Select the Files

Inside the eb-flask-lab folder, select all 3 files (application.py, requirements.txt, and Procfile).

Step B2: Create ZIP

Right-click → Compress to ZIP file. Rename it to: eb-flask-lab.zip

Step B3: Confirm ZIP Contents

Open the ZIP file. You must see the files directly at the top level. If the files are inside a sub-folder within the ZIP, the deployment will fail.

- **Verification:** Extract ZIP temporarily to confirm files are at root.

---

### Phase C — Deploy on Elastic Beanstalk (AWS Console)

Step C1: Open Elastic Beanstalk

Navigate to the AWS Console → Search for Elastic Beanstalk. Ensure your region is Asia Pacific (Mumbai) (ap-south-1).

**Step C2: Create Environment**

1. Click **Create environment**.
    
2. **Environment tier:** Select **Web server environment**.
    
3. **Application information:** Name it `EB-Flask-Lab`.
    
4. **Platform:** * Platform: **Python**
    
    - Platform branch: Latest Python on Amazon Linux
        
    - Platform version: Recommended
        

**Step C3: Upload Your Code**

1. In **Application code**, select **Upload your code**.
    
2. **Version label:** `v1`
    
3. **Source code origin:** **Local file**.
    
4. Click **Choose file** and select `eb-flask-lab.zip`.
    
5. **Presets:** Select **Single instance (free tier eligible)**.
    
6. Click **Next**.
    

- **Verification:** Confirm ZIP upload succeeds and environment creation starts.

---

### Phase D — Configure Service Access (IAM Roles)

Step D1: Service Role

If the dropdown is empty:

1. Click **Create role** (opens IAM).
    
2. Use case: **Elastic Beanstalk**.
    
3. Name it `aws-elasticbeanstalk-service-role`.
    
4. Return to EB tab, click **Refresh**, and select the role.
    

Step D2: EC2 Instance Profile

If the dropdown is empty:

1. Click **Create role** → Use case: **EC2**.
    
2. Attach policy: `AWSElasticBeanstalkWebTier`.
    
3. Name it `aws-elasticbeanstalk-ec2-role`.
    
4. Return to EB tab, click **Refresh**, and select the role.
    

Step D3: Finalize

Leave EC2 Key pair blank. Click Next, keep remaining defaults, and click Create environment.

- **Verification:** Environment creation starts without errors.

---

### Phase E — Monitor & Test

Step E1: Wait for Deployment

Open the Events tab. Deployment is successful when:

- Message: "Environment successfully launched"
    
- Health: **OK**
    
- A **Domain URL** appears at the top.
    

Step F1: Test the App

Click the Domain link.

- **Expected Output:** `Hello from Flask on Elastic Beanstalk!`
    

Step F2: Test Health Check

Append /health to the URL.

- **Expected Output:** `OK`
    

- **Verification:** Both URLs load correctly.

### Cost Considerations

- **Pricing:** EB ~$0.01/hour for t3.micro EC2; free tier covers 750 hours.
- **Tip:** Terminate environments immediately to avoid charges. Monitor via CloudWatch.

---

### Phase G — Cleanup (Mandatory)

1. Go to **Elastic Beanstalk** → **Environments**.
    
2. Select your environment → **Actions** → **Terminate environment**.
    

---


**Common Mistakes (quick checklist)**

- Procfile must be "Procfile" (no .txt extension).
- ZIP must contain files at root level (not inside a sub-folder).
- Upload must be **Local file** (not Public S3 URL).
- IAM roles must be created/selected if "No options" appear.
- Python version in requirements.txt must match EB platform.
- Application must listen on 0.0.0.0 in production (handled by Gunicorn).

### Accessing Logs in Elastic Beanstalk

If environment health is "Degraded" or "Severe":
1. Go to EB → Environment → Logs.
2. Click "Request Logs" → "Last 100 Lines" or "Full Logs".
3. Download and review for errors (e.g., import failures, port issues).
4. Alternatively, SSH into EC2 via EB → Environment → EC2 Instance → Connect.

---

### Knowledge Base & FAQs

1. What is Elastic Beanstalk?

Elastic Beanstalk is a Platform as a Service (PaaS) provided by AWS that allows developers to deploy and manage applications without manually handling the underlying infrastructure such as EC2, load balancers, or auto scaling.

The user only uploads the application code, and Elastic Beanstalk automatically:

- Creates required AWS resources
    
- Deploys the application
    
- Handles scaling, monitoring, and health checks
    

  

2. What does “Single instance environment” mean?

A Single instance environment means the application runs on one EC2 instance only, without a load balancer or auto scaling.

It is mainly used for:

- Learning and lab exercises
    
- Development and testing
    
- Low-traffic applications
    

It is cost-effective and simple, but not fault-tolerant.

  

3. Why do we need requirements.txt?

The requirements.txt file lists all Python libraries and their versions required for the application.

Elastic Beanstalk uses this file to:

- Automatically install dependencies using pip
    
- Ensure the application runs consistently across environments
    

Without requirements.txt, the application may fail due to missing modules.

  

4. What is Procfile used for?

A Procfile tells Elastic Beanstalk how to start the application.

It specifies:

- The process type (e.g., web)
    
- The command to run the application (e.g., Gunicorn for Flask)
    

Example:

web: gunicorn application:app

Without a Procfile, Elastic Beanstalk may not know which command to execute, leading to deployment errors.

  

5. What happens if you zip the parent folder instead of the files?

If the parent folder is zipped, Elastic Beanstalk cannot locate key files like:

- application.py
    
- requirements.txt
    
- Procfile
    

As a result:

- Deployment fails
    
- Application shows errors such as _“Application version not found”_ or _502 Bad Gateway_
    

Elastic Beanstalk expects all required files at the root level of the ZIP file.

---

to check the **Logs** in Elastic Beanstalk if your environment shows a "Degraded" or "Severe" health status