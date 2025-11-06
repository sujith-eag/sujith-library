# Google Dorking


## 1. Introduction to Google Dorking

Google Dorking, also known as using Google Advanced Search Operators, is a reconnaissance technique that utilizes specialized search queries to identify publicly exposed information, misconfigurations, and sensitive files indexed by search engines. This method is employed by ethical hackers, penetration testers, and security analysts **only within an authorized scope** for assessment and awareness purposes.


## 2. Ethical and Legal Considerations

**Important:** Using Google Dorks to access, download, manipulate, or exploit sensitive data **without permission is illegal**.

Approved ethical uses for this technique are strictly limited to vulnerability and exposure assessment, authorized penetration testing, academic training and awareness, and defensive reconnaissance in controlled environments.

## 3. Comprehensive Google Search Operators

This section details the core and advanced operators used for reconnaissance.

### Basic Syntax Operators

- Exact Phrase Search ("") : Returns pages containing the exact phrase provided within the quotes.
    ```
    "your phrase"
	
    "ethical hacking lab exercises"
    ```
    
- Excluding Terms (-) : Finds pages that include the primary keyword but excludes any result containing the word after the minus sign.
    
    ```
    keyword -excludedWord
    
    ethical hacking -course
    ```
    
- Logical OR Search (OR) : Returns pages containing either of the specified terms.
    
    ```
    term1 OR term2
    
    "cyber attack" OR "data breach"
    ```
    
- Wildcard Matching (*) : The asterisk * acts as a placeholder for one or more words, matching structured phrases.
    
    ```
    "keyword * keyword"

    "cyber * attack"
    ```
    
    This query matches phrases like "cyber phishing attack" or "cyber warfare attack".
    
____

### Location-Specific Operators

- site: (Site-Specific Search) : Limits search results to a single domain, subdomain, or top-level domain.
        
    ```
    site:<domain> <search terms>
    ```
    
    Ethical Hacking Relevance: This is critical for authorized reconnaissance to find exposed directories, files, or misconfigurations on a specific target.

    ```
    cybersecurity site:edu
    
    site:darkreading.com Netwire
    
    site:example.com filetype:pdf
    ```
    
- intitle: and allintitle: (Title-Based Search) : Locates pages containing specific words in their HTML title tag. intitle: finds pages with one specific word, while allintitle: finds pages with all specified words in the title.
    
    ```
    intitle:"phrase"

    allintitle:<multiple words>
    ```
    
    Ethical Hacking Relevance: Highly effective for discovering open directories or misconfigured admin sections.
    
    ```
    intitle:"cyber security tutorial"

    intitle:"Index of" "backup"
  
    allintitle:index of admin
    ```
    
- inurl: and allinurl: (URL-Based Search) : Locates pages where certain keywords appear within the URL. inurl: finds one word, while allinurl: finds all specified words.
    
    ```
    inurl:<word>
  
    allinurl:<word1> <word2>
    ```
    
    Ethical Hacking Relevance: Used extensively to find admin portals, dashboards, and misconfigured endpoints.

    ```
    inurl:/intranet/login.php
    
    allinurl:admin login.php
    ```
    
- allintext: (Body Text Search) : Finds pages containing all specified words within the visible body text of the page.

    ```
    allintext:<word1> <word2> ...
    ```
    
    Ethical Hacking Relevance: Useful for discovering sensitive text content indexed by Google, including configuration references or leaked file references.
    
    ```
    allintext:"Index of" "sftp-config.json"
    ```
    

### File and Relationship Operators

- filetype: (File Type Search) : Finds files of a specific extension (e.g., pdf, xls, sql, conf).
        
    ```
    keyword filetype:ext

    cybersecurity syllabus filetype:pdf
    ```
    
- link: (Backlink Search) : Finds pages that contain hyperlinks pointing to a specified site or URL.
        
    ```
    link:<domain>
    ```
    
    Ethical Hacking Relevance: Useful for footprinting, backlink analysis, and determining which external websites reference the target.
    
    ```
    link:starbucks.com

    link:example.com/login
    ```
    
- related: (Related Website Search) : Shows websites that Google considers similar to a given site.
        
    ```
    related:<domain>
    ```
    
    Ethical Hacking Relevance: Useful for expanding reconnaissance to sister sites, subsidiaries, or infrastructure operated by related organizations.
    
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
    

## 4. Common Dorks for Security Assessment

The following queries combine operators to find common misconfigurations and exposures.

**Finding Login Pages**

```
inurl:login OR intitle:login
```

**Finding Admin Panels**

```
inurl:admin OR inurl:dashboard OR inurl:manage
```

**Finding Open Directories**

```
intitle:"index of"
```

**Finding Configuration Files**

```
filetype:xml OR filetype:conf "database"

filetype:env "DB_PASSWORD"
```

**Finding Exposed Databases and Backups**

```
filetype:sql "password"

filetype:sql "INSERT INTO"

inurl:backup OR inurl:bak OR inurl:old
```

**Finding Sensitive Documents**

```
site:gov filetype:xls "password"

filetype:pdf "confidential"
```

**Finding Informational Pages**

```
inurl:"phpinfo.php"
```


## 5. Ethical Google Dork Reconnaissance Lab

This section outlines a lab to simulate real-world reconnaissance in an ethical, controlled setting.

### 5.1 Goal

Use Google Advanced Operators to identify publicly exposed files, directories, and misconfigurations within an **authorized** domain. The objective is to gather findings, verify them safely, and prepare mitigation recommendations.

### 5.2 Prerequisites

Prerequisites include Kali Linux (or any Linux with Internet access), **written authorization** to target domain(s), basic command-line skills, and optional tools like `googler`, `curl`, `lynx`, `grep`, or `jq`.

To install the optional `googler` tool on a Debian-based system:

```bash
sudo apt update
sudo apt install googler -y
```

### 5.3 Lab Tasks

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

### 5.4 Common Red Flags (What to Look For)

Common red flags include public `.env`, `.sql`, `.bak`, `.old`, `.ini`, or `.conf` files; enabled directory listings (`Index of /`); publicly exposed admin/login panels; unrestricted `phpinfo.php` pages; public spreadsheets containing PII; exposed backups or database dumps; and error logs containing stack traces or sensitive paths.

### 5.5 Documenting Findings (Professional Format)

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
    

### 5.6 Recommended Mitigations

Recommended mitigations include removing sensitive files from public directories, disabling directory listing, implementing authentication and IP restrictions for admin panels, hardening file permissions and environment variable storage, avoiding storing credentials in plaintext, rotating exposed credentials, implementing WAF/IDS monitoring, and periodically running Google-index exposure checks.

### 5.7 Sample Short Report Template

This template summarizes findings from an assessment.

Findings

Three exposures found: one .env file, one SQL backup, one open directory listing.

1. `/config/.env` – High – Contains DB credentials
    
2. `/backups/backup_2025.sql.bak` – High – SQL dump accessible
    
3. `/uploads/` – Medium – Directory listing enabled
    

* Recommendations include removing sensitive files and rotating credentials, disabling directory listing, locking down admin endpoints, enforcing authentication, and enabling continuous monitoring.

* Attachments should include the full query list and any header captures.

* Suggested follow-up exercises are to create a self-managed dorks.txt and triage script, practice remediation on a controlled domain and verify index removal, and add Google Dork exposure checks to quarterly security audits.

## 6. Operator Summary Table

| **Operator**               | **Description**               | **Ethical Use**                 |
| -------------------------- | ----------------------------- | ------------------------------- |
| `link:`                    | Finds pages linking to a site | Footprinting, backlink analysis |
| `numrange:`                | Legacy number range           | OSINT on numerical datasets     |
| `..`                       | Modern number range           | Timeline-filtered searches      |
| `site:`                    | Restrict to domain            | Domain-specific reconnaissance  |
| `intitle:` / `allintitle:` | Search in page titles         | Directory/admin discovery       |
| `allintext:`               | Search page body text         | Detect sensitive text leaks     |
| `inurl:` / `allinurl:`     | Search in URLs                | Admin/login page discovery      |
| `related:`                 | Similar websites              | Expanding reconnaissance scope  |

