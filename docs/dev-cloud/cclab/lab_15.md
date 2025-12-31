# Hosting a WordPress Website on Amazon Lightsail

## Prerequisites

- An active AWS account with billing enabled.
- Basic familiarity with web interfaces and WordPress (optional but helpful)
- Free-tier eligibility for Lightsail (first-time users get 3 months free on 512 MB plan)

## What is Amazon Lightsail?

Amazon Lightsail is a beginner-friendly cloud platform in AWS that provides:

- **Virtual servers:** Simplified EC2 instances
- **Fixed monthly pricing:** Predictable costs
- **Simple UI:** Easy setup and management
- **One-click application launch:** Pre-configured stacks like WordPress, LAMP, and Node.js
- **Built-in networking:** Static IP, DNS management, and Firewall
- **Automatic SSH terminal:** Browser-based access
- **Snapshots:** Simplified backups

**Ideal Use Cases:**

- Personal websites
- Student projects
- Small web apps
- WordPress blogs
- Quick prototyping


## Why Lightsail Instead of EC2?

Lightsail = “EC2 with all hard things simplified.”

|**Feature**|**EC2**|**Lightsail**|
|---|---|---|
|**Pricing**|Pay per hour|Fixed monthly|
|**Setup**|Complex (VPC, SG, AMI)|Simple|
|**SSH**|Need .pem or PuTTY|Built-in SSH|
|**DNS**|Basic|Easy DNS panel|
|**Apps**|Install manually|One-click WordPress, LAMP|

## What is WordPress in Lightsail?

WordPress is a full-stack content management system (CMS) pre-installed on Lightsail. It includes:

- **Frontend (UI):** HTML, CSS, JS, Themes, Templates, and Page layouts
- **Backend:** PHP (server-side logic) and the WordPress core engine
- **Database:** MySQL/MariaDB (Stores pages, media, lessons, posts, settings)
- **Server:** Apache web server
- **Hosting:** Lightsail VM + static IP + firewall
    

**Conclusion:** WordPress is a full-stack application (LAMP stack).

## Lightsail Free-Tier Eligibility

- **Eligibility:** 3 months free for first-time users
- **Plan:** Only for the 512 MB RAM plan ($3.50/month normally)
- **Performance:** Suitable for basic WordPress, but may be slow for multiple users or media-heavy sites
- **Cost After Free-Tier:** ~₹350–₹400/month for 512 MB; upgrade to 1 GB RAM (~$5/month) for better performance
- **Note:** Free-tier applies per AWS account; charges start if you exceed limits or use paid features
- **Recommended:** 1 GB RAM plan for better performance

## Create Server on Lightsail

**Step 1: Open Lightsail Console**

AWS Console → Search "Lightsail" → Open it. The Lightsail dashboard appears.

**Step 2: Create Instance**

Click "Create Instance".

**Step 3: Select Platform**

Choose **Linux/Unix**. (WordPress works best on Linux).

**Step 4: Select Blueprint**

Select **App + OS** → **WordPress**.

> [!NOTE]
> Lightsail will install automatically: Apache, PHP, MySQL/MariaDB, WordPress application. No manual setup required.

**Step 5: Choose Instance Plan**

Select 512 MB RAM (free-tier for 3 months but slower).

**Step 6: Name the Instance**

Give a name (example: `MyCMS`). Click "Create Instance".

**Step 7: Wait Until Status = Running**

Takes 1–2 minutes.

**Verification:** Confirm public IP is assigned and instance status is "Running".
    

## Access and Configure WordPress

**Step 8: Connect Through Browser-Based SSH**

Click **Connect** → **Connect using SSH**. (Lightsail gives built-in SSH; no need for a .pem file.)

**Step 9: Retrieve WordPress Admin Password**

In the SSH terminal, run:

```bash
cat bitnami_application_password
```

This outputs a long randomly generated password. Copy it—you need it for login. Example: `INBV03eMcWX:`

**Step 10: Open Your WordPress Website**

Copy the **Public IP** from the instance details. Visit: `http://<your-lightsail-ip>`. You will see a WordPress homepage.

**Step 11: Login to WordPress Admin**

Visit: `http://<your-lightsail-ip>/wp-admin`

- **Username:** `user`
- **Password:** Paste the password from SSH
- **Initial Setup:** Change the default password immediately (Users → Profile), set site title (Settings → General), and update permalinks (Settings → Permalinks → Post name)

**Verification:** Confirm you can access the admin dashboard and the public site loads. You now have full access to your site's backend.

## Build CMS Website

- **Step 12 — Install a Clean Education Theme:** Dashboard → Appearance → Themes → Add New. Recommended theme: **Astra** (best). Install and activate the theme.
    
- **Step 13 — Create Main Website Pages:** Dashboard → Pages → Add New. Create: Home, Courses & Subjects, Lesson Notes, Assignments, Study Material (PDFs/PPTs), and Contact.
    
    - **Sample Content for Home Page:** "Welcome to [Your Site Name]. Explore courses, notes, and assignments."
        
    - **Sample Content for Contact Page:** "Email: your-email@example.com | Phone: 123-456-7890"
        
- **Step 14 — Create Lesson-Wise Pages:** Under Courses or Notes, add sub-pages for specific lessons (e.g., "Lesson 1: Introduction").
    
- **Step 15 — Upload PDFs, PPTs, Notes:** Dashboard → Media → Add New. Upload: PDFs, DOCX files, PPTs, Images, and Notes. Then insert into pages using “Add Media”.
    
- **Step 16 — Create Menus:** Dashboard → Appearance → Menus. Add: Home | Courses | Notes | Assignments | Contact. Add submenus under Courses and Notes.
    
- **Step 17 — Install Basic Plugins:** Dashboard → Plugins → Add New. Install "Wordfence Security" for protection and "Yoast SEO" for optimization.

## Secure and Finalize

**Step 18: Attach Static IP**

Lightsail → Networking → Create Static IP → Attach to instance.

> [!IMPORTANT]
> Without this, your IP changes if the instance stops/starts, which breaks the site.

**Step 19: Enable HTTPS**

Lightsail → Networking → Attach SSL certificate (free via Let's Encrypt). Update site URL to HTTPS in WordPress settings.

> [!TIP]
> Secures data transmission and improves SEO.

**Step 20: Configure Firewall**

Lightsail → Instance → Networking → Firewall. Restrict SSH to your IP only; ensure HTTP/HTTPS are open.

**Step 21: Take Snapshot**

Lightsail → Snapshots → Create snapshot.

> [!NOTE]
> This acts as a backup of your entire site.

**Step 22: Update WordPress**

Dashboard → Updates → Update core, themes, and plugins regularly.

## Troubleshooting

- **SSH Connection Fails:** Ensure your browser allows pop-ups; try a different browser.
- **WordPress Login Issues:** Double-check username ("user") and password from SSH. Reset via SSH if needed.
- **Site Not Loading:** Check instance status in Lightsail; ensure firewall allows HTTP/HTTPS.
- **Slow Performance:** Upgrade to a larger plan or optimize images/plugins.

## Cleanup Procedure

To avoid ongoing charges:
1. Delete the instance: Lightsail → Instances → Select → Delete.
2. Delete static IP: Networking → Static IPs → Delete.
3. Delete snapshots if no longer needed: Snapshots → Delete.
4. Monitor billing to confirm no charges.