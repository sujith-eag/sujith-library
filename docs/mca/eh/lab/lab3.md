# Lab 3: Advanced Reconnaissance with Search Engine Dorking

**Objective:** To provide a formal, detailed analysis of search engine dorking techniques, starting with Google and expanding to other critical platforms like Bing, Shodan, and GitHub, for the purpose of authorized security reconnaissance.

## 1. Introduction to Dorking

**Dorking** is an advanced reconnaissance technique that uses specialized search operators to uncover information that is not intended to be public but has been inadvertently indexed by search engines. This can include sensitive files, login pages, misconfigurations, vulnerable software versions, and private data.

For an ethical hacker, dorking is one of the most powerful and fundamental tools for passive reconnaissance, allowing for a deep understanding of a target's digital footprint without sending a single packet to their servers directly.

### 1.1. The Google Hacking Database (GHDB)

The **Google Hacking Database (GHDB)**, hosted by Exploit-DB, is a curated repository of dorks used to find vulnerable servers and sensitive information. It is an essential resource for security professionals to understand common exposure patterns.

### 1.2. Ethical and Legal Warning

**Using dorking techniques to access, download, or exploit data on systems for which you do not have explicit, written authorization is illegal and unethical.** All activities described herein must be confined to authorized penetration testing and security assessment scenarios.

## 2. Google Dorking: The Foundation

Google's powerful indexing capabilities make it the primary tool for dorking.

### 2.1. Core Google Dork Operators

| Operator    | Description                                    | Example                                                                       |
| :---------- | :--------------------------------------------- | :---------------------------------------------------------------------------- |
| `site:`     | Restricts search to a specific domain.         | `site:example.com filetype:pdf`                                               |
| `inurl:`    | Finds keywords within the URL.                 | `inurl:login.php`<br><br>`allinurl:admin login.php`                           |
| `intitle:`  | Finds keywords in the page title.              | `intitle:"index of /"`                                                        |
| `intext:`   | Finds keywords in the body of the page.        | `intext:"database password"`<br><br>`allintext:"Index of" "sftp-config.json"` |
| `filetype:` | Restricts search to a specific file extension. | `filetype:sql "passwords"`                                                    |
| `cache:`    | Shows Google's cached version of a site.       | `cache:example.com`                                                           |
| `related:`  | Finds sites Google considers similar.          | `related:example.com`                                                         |
| `""`        | Forces an exact phrase match.                  | `"Welcome to nginx!"`                                                         |
| `-`         | Excludes a term from the search.               | `passwords -site:github.com`, <br><br>`ethical hacking -course`               |
| `*`         | Wildcard for one or more words.                | `"forgot * password"`                                                         |


- link: (Backlink Search) : Finds pages that contain hyperlinks pointing to a specified site or URL. Useful for footprinting, backlink analysis, and determining which external websites reference the target.
    
    ```
    link:starbucks.com

    link:example.com/login
    ```
    
- related: (Related Website Search) : Shows websites that Google considers similar to a given site. Useful for expanding reconnaissance to sister sites, subsidiaries, or infrastructure operated by related organizations.
        
    ```
    related:wiley.com
    ```
    

### Value and Date Operators

- Modern Number Range (..) : Searches for results containing numbers within a specified numeric range. This is the modern equivalent of numrange:.
    
    ```
    <keyword> <start>..<end>
    ```
    
    Ethical Hacking Relevance: Useful for time-based OSINT, such as filtering breach reports or vendor advisories.
    
    ```
    hack 2015..2020

    cybersecurity report 2019..2025
    ```
    
- numrange: (Legacy Number Range)
    
    Purpose: Searches for numbers between two values. This operator is partially deprecated and has limited support.
    
    ```
    numrange:<start>-<end>
    ```
    
    Ethical Hacking Relevance: Occasionally useful in OSINT or dataset enumeration when analyzing documents with numbered fields.
    
    ```
    numrange:10000-99999
    ```
    
- Date Range Filter (after: / before:) : Filters results to a specific time frame.
    
    ```
    keyword after:YYYY-MM-DD before:YYYY-MM-DD

    cybersecurity news after:2024-01-01 before:2024-12-31
    ```

### 2.2. Common Dorks for Security Assessment

These queries combine operators to find common misconfigurations.

- **Finding Login Pages:**
```
site:target.com (inurl:login OR intitle:login)
```

- **Finding Admin Panels:**
```
site:target.com (inurl:admin OR intitle:dashboard OR inurl:/manage)
```

- **Discovering Open Directories:**
```
intitle:"index of /" "parent directory"
```

- **Locating Configuration and Environment Files:**
```
filetype:env "DB_PASSWORD"
filetype:config "username" "password"

filetype:xml OR filetype:conf "database"
```

- **Finding Exposed Database Backups:**
```
filetype:sql OR filetype:bak OR filetype:dump "INSERT INTO"

inurl:backup OR inurl:bak OR inurl:old
```

- **Uncovering Sensitive Documents:**
```
site:target.com filetype:xls OR filetype:csv "CONFIDENTIAL"

site:gov filetype:xls "password"

filetype:pdf "confidential"
```

- **Identifying Vulnerable Software (e.g., via error messages):**
```
intitle:"Apache Tomcat" "Error Report"
intext:"Fatal error: Uncaught Error: Call to undefined function"
```

* **Finding Informational Pages**

```
inurl:"phpinfo.php"
```

## 3. Beyond Google: Dorking on Other Platforms

Relying solely on Google is a mistake. Different platforms index different types of data and offer unique operators.

### 3.1. Bing

Bing is a powerful alternative with some unique operators that are extremely useful for reconnaissance.

| Bing Operator | Description | Example |
| :--- | :--- | :--- |
| `ip:` | Finds sites hosted at a specific IP address. | `ip:8.8.8.8` |
| `loc:` or `location:` | Finds results from a specific country or region. | `inurl:gov loc:US` |
| `contains:` | Finds files that contain links to other specific files. | `contains:bootstrap.min.js` |

**Use Case:** The `ip:` operator is invaluable for discovering all websites hosted on a shared server after identifying one target domain's IP address.

```bash
# Find other sites on the same server as example.com
bing-dork "ip:192.168.1.100"
```

### 3.2. DuckDuckGo

While DuckDuckGo has fewer unique dorking operators than Google or Bing, its privacy-respecting nature makes it a safe choice for initial reconnaissance, as it does not log user search history. It supports the core operators like `site:`, `inurl:`, `intitle:`, and `filetype:`.

### 3.3. Shodan: The IoT and Device Search Engine

**Shodan** is a search engine for internet-connected devices, not websites. It scans the internet and indexes service banners from servers, webcams, industrial control systems (ICS), and more. It is arguably the most critical dorking tool for infrastructure assessment.

**Core Shodan Dorks:**

| Shodan Operator | Description | Example |
| :--- | :--- | :--- |
| `port:` | Finds devices with a specific port open. | `port:3389` (RDP) |
| `org:` | Finds devices owned by a specific organization. | `org:"Amazon Web Services"` |
| `net:` | Finds devices within a specific IP range or CIDR. | `net:8.8.8.0/24` |
| `os:` | Searches for a specific operating system. | `os:"Windows Server 2016"` |
| `product:` | Searches for a specific software or product name. | `product:"Apache Tomcat"` |
| `vuln:` | Searches for hosts with a specific CVE number. | `vuln:CVE-2020-1938` |

**Use Case:** Finding exposed, unauthenticated services on a target's network.

```bash
# Find open MongoDB instances within a target's IP range
shodan-dork 'org:"Target Corp" port:27017 -authentication'

# Find webcams running a specific server software
shodan-dork 'server: "webcam-httpd"'
```

### 3.4. GitHub Dorking: Finding Secrets in Code

GitHub is a treasure trove of leaked API keys, passwords, private keys, and configuration files.

**Core GitHub Dorks:**

| GitHub Qualifier | Description | Example |
| :--- | :--- | :--- |
| `filename:` | Searches for a specific filename. | `filename:.npmrc _auth` |
| `path:` | Searches within a specific path in a repository. | `path:/config filename:settings.yml` |
| `extension:` | Searches for files with a specific extension. | `extension:pem "private key"` |
| `language:` | Restricts search to a specific programming language. | `language:python "api_key"` |

**Use Case:** Finding hardcoded credentials in a target organization's public repositories.

```bash
# Find AWS keys
"AKIA[0-9A-Z]{16}"

# Find private keys
filename:id_rsa or filename:id_dsa

# Find configuration files with passwords
org:Target-Corp filename:config.js "password"
```

## 4. Mitigation: How to Prevent Being "Dorked"

Organizations can take several steps to prevent sensitive information from being indexed:

- **`robots.txt`:** Use a `robots.txt` file at the root of your web server to instruct search engine crawlers not to index specific directories (e.g., `/admin`, `/config`). **Note:** This is a guideline, not a security control; malicious crawlers will ignore it.

- **Authentication and Authorization:** Protect all sensitive pages and directories with strong authentication. Never rely on obscurity.

- **Proper File Permissions:** Ensure that sensitive files (configs, backups) are not web-accessible. Store them outside the webroot.

- **Disable Directory Listing:** Configure your web server (e.g., Apache, Nginx) to disable directory indexing.

- **Regular Security Audits:** Periodically perform dorking against your own organization to identify and remediate exposures before attackers do.

## 5. Lab Exercise: Multi-Platform Reconnaissance

This lab simulates a real-world reconnaissance scenario using multiple platforms. **Obtain written authorization before proceeding against any target.**

1.  **Google/Bing:** Map out the target's web presence.
    - `site:target.com filetype:pdf "internal use only"`
    - `ip:<target_ip_address>` (using Bing)

2.  **Shodan:** Analyze the target's exposed infrastructure.
    - `org:"Target Company Name"`
    - `ssl:"target.com"` (finds devices with SSL certs for the target)

3.  **GitHub:** Search for leaked secrets.
    - `org:TargetGitHubOrg "api_key"`
    - `"target.com" "password"`

Document all findings, assess their risk, and propose remediation steps in a formal report.

## 6 Ethical Google Dork Reconnaissance Lab

This section outlines a lab to simulate real-world reconnaissance in an ethical, controlled setting.

Use Google Advanced Operators to identify publicly exposed files, directories, and misconfigurations within an **authorized** domain. The objective is to gather findings, verify them safely, and prepare mitigation recommendations.

### 6.1 Prerequisites

Prerequisites include Kali Linux (or any Linux with Internet access), **written authorization** to target domain(s), basic command-line skills, and optional tools like `googler`, `curl`, `lynx`, `grep`, or `jq`.

To install the optional `googler` tool on a Debian-based system:

```bash
sudo apt update
sudo apt install googler -y
```

### 6.2 Lab Tasks

Replace `target.com` with your authorized domain for all tasks.

Task 1: Basic Reconnaissance

Run these queries directly in Google Search or use the googler tool.

```bash
# Look for pages with "login" in URL or title
googler -n 10 'site:target.com inurl:login OR intitle:login'

# Find PDF documents on the site
googler -n 50 'site:target.com filetype:pdf'

# Look for spreadsheets (possible leaked contact lists)
googler -n 50 'site:target.com filetype:xls OR filetype:xlsx OR filetype:csv'

# Find exposed config/database files (do not download)
googler -n 50 'site:target.com "DB_PASSWORD" OR "database" filetype:env OR filetype:conf OR filetype:sql'

# Find backup or old files
googler -n 50 'site:target.com inurl:backup OR inurl:old OR inurl:bak'

# Admin panels and dashboards
googler -n 50 'site:target.com inurl:admin OR inurl:dashboard OR inurl:manage'
```

Task 2: Passive Verification (Safe)

Check only HTTP headers to confirm whether a file is publicly accessible. Do not download the file unless explicitly authorized.

```bash
curl -I 'https://target.com/path/to/file.pdf'
```

Task 3: Limited Automated Queries (Optional)

This task uses a simple bash loop to run queries from a file named dorks.txt.

```bash
while read d; do
    echo "QUERY: $d"
    googler -n 10 "$d"
    sleep 5
done < dorks.txt
```

### 6.3 Common Red Flags (What to Look For)

Common red flags include public `.env`, `.sql`, `.bak`, `.old`, `.ini`, or `.conf` files; enabled directory listings (`Index of /`); publicly exposed admin/login panels; unrestricted `phpinfo.php` pages; public spreadsheets containing PII; exposed backups or database dumps; and error logs containing stack traces or sensitive paths.

### 6.4 Documenting Findings (Professional Format)

Record each finding using a structured format.

**Example Entry**

- **Timestamp:** 2025-11-03T08:44:32+05:30
    
- **Query:**
    
    ```
    site:target.com filetype:env "DB_PASSWORD"
    ```
    
- **URL:** `https://target.com/config/.env`
    
- **Status:** 200 OK
    
- **Risk:** High – likely contains database credentials.
    
- **Mitigation:** Remove public .env from webroot, move to non-web-accessible path, rotate credentials, add access control.
    

### 6.5 Recommended Mitigations

Recommended mitigations include removing sensitive files from public directories, disabling directory listing, implementing authentication and IP restrictions for admin panels, hardening file permissions and environment variable storage, avoiding storing credentials in plaintext, rotating exposed credentials, implementing WAF/IDS monitoring, and periodically running Google-index exposure checks.

### 6.6 Sample Short Report Template

This template summarizes findings from an assessment.

Findings

Three exposures found: one .env file, one SQL backup, one open directory listing.

1. `/config/.env` – High – Contains DB credentials
    
2. `/backups/backup_2025.sql.bak` – High – SQL dump accessible
    
3. `/uploads/` – Medium – Directory listing enabled
    

* Recommendations include removing sensitive files and rotating credentials, disabling directory listing, locking down admin endpoints, enforcing authentication, and enabling continuous monitoring.

* Attachments should include the full query list and any header captures.

* Suggested follow-up exercises are to create a self-managed dorks.txt and triage script, practice remediation on a controlled domain and verify index removal, and add Google Dork exposure checks to quarterly security audits.
