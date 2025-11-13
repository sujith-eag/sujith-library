# Lab 4: WHOIS and RDAP: Domain and IP Intelligence

This document provides a comprehensive overview of the WHOIS and Registration Data Access Protocol (RDAP) services, which are used to query information about domain names, IP addresses, and other internet resources.

## 1. WHOIS: The Legacy Protocol

WHOIS is a query-and-response protocol that is widely used for querying databases that store the registered users or assignees of an internet resource, such as a domain name, an IP address block, or an autonomous system number.

### 1.1. How WHOIS Works

The WHOIS system is decentralized. Each registrar maintains its own WHOIS server with information about the domains registered with them. A central registry (like Verisign for `.com`) maintains a WHOIS server that points to the registrar's server for a given domain.

When you run a `whois` query:
1.  Your client may first query a root WHOIS server.
2.  This server refers your client to the appropriate top-level domain (TLD) registry (e.g., for `.com` or `.org`).
3.  The TLD registry's WHOIS server then provides the details or refers you to the specific registrar's WHOIS server where the full record is stored.

### 1.2. Common Usage and Commands

The most common way to use WHOIS is through the command line.

**Basic Syntax:**
```bash
whois [options] <query>
```

**Common Use Cases:**

*   **Querying a Domain Name:**
    ```bash
    whois google.com
    ```
    This command will return information about the `google.com` domain, including the registrar, registration dates, and contact information (though often redacted for privacy).

*   **Querying an IP Address:**
    ```bash
    whois 8.8.8.8
    ```
    This will show who owns the IP address block, typically an Internet Service Provider (ISP) or a large corporation.

*   **Querying an Autonomous System Number (ASN):**
    ```bash
    whois AS15169
    ```
    This provides details about the network's owner (in this case, Google).

### 1.3. Interpreting WHOIS Output

A WHOIS record typically contains the following fields:
*   **Registrar:** The company that registered the domain for the user.
*   **Registrant/Registrant Organization:** The person or organization that owns the domain.
*   **Admin/Tech Contact:** Contact details for the administrative and technical managers of the domain. (Often redacted now due to GDPR and other privacy laws).
*   **Registration Date:** When the domain was first registered.
*   **Expiration Date:** When the registration will expire.
*   **Last Updated Date:** The last time the record was modified.
*   **Name Servers:** The DNS servers responsible for the domain.
*   **Domain Status:** Codes indicating the status of the domain (e.g., `clientTransferProhibited`, `ok`).

### 1.4. Advanced Techniques and Special Use Cases

*   **Specifying a WHOIS Server:** You can query a specific WHOIS server directly, which is useful for getting more detailed or authoritative information.
    ```bash
    # Query Verisign's server for .com domains
    whois -h whois.verisign-grs.com google.com

    # Query the ARIN server for an IP address
    whois -h whois.arin.net 208.67.222.222
    ```

*   **Finding the Authoritative Server:** To find the right server for a TLD, you can query the IANA WHOIS server.
    ```bash
    whois -h whois.iana.org com
    ```

*   **Scripting and Automation:** `whois` can be used in scripts to automate reconnaissance. For example, a bash script to check the creation date of a list of domains:
    ```bash
    #!/bin/bash
    for domain in $(cat domains.txt); do
      echo -n "$domain: "
      whois $domain | grep -i "Creation Date"
    done
    ```

### 1.5. Limitations and Privacy Issues

*   **Lack of Standardized Format:** The output format varies between servers, making automated parsing difficult.
*   **Privacy Redaction:** Due to GDPR and other privacy regulations, much of the contact information is now redacted, reducing its usefulness for investigations.
*   **Rate Limiting:** Most WHOIS servers will block your IP if you send too many queries in a short period.
*   **Text-Only:** The protocol is based on plain text, with no support for internationalization or structured data.

## 2. RDAP: The Modern Successor

The **Registration Data Access Protocol (RDAP)** was created by the IETF to address the shortcomings of WHOIS. It is a modern, RESTful web service that provides access to registration data in a standardized, machine-readable JSON format.

### 2.1. Key Advantages Over WHOIS

*   **Standardized JSON Output:** Easy to parse and use in applications.
*   **RESTful API:** Uses standard HTTP methods (`GET`).
*   **Secure Access:** Supports HTTPS and authentication, allowing for tiered access to data.
*   **Internationalization:** Standardized support for multiple languages.
*   **Differentiated Access:** Registrars can provide different levels of access to data, showing more detailed information to authenticated users.

### 2.2. Common Usage and Commands

RDAP is accessed via HTTP. The `curl` command is a common tool for this.

**Basic Syntax:**
```bash
curl -s -H "Accept: application/rdap+json" <rdap_bootstrap_server>/<object_type>/<query>
```

RDAP servers are discoverable via a bootstrap mechanism. For example, the bootstrap server for domain names is `https://rdap.org/`.

**Common Use Cases:**

*   **Querying a Domain Name:**
    ```bash
    curl -s "https://rdap.org/domain/google.com" | jq .
    ```
    The `jq` command is used here to pretty-print the JSON output.

*   **Querying an IP Address:**
    ```bash
    # For IPv4
    curl -s "https://rdap.arin.net/registry/ip/8.8.8.8" | jq .

    # For IPv6
    curl -s "https://rdap.arin.net/registry/ip/2001:4860:4860::8888" | jq .
    ```

*   **Querying an ASN:**
    ```bash
    curl -s "https://rdap.arin.net/registry/autnum/15169" | jq .
    ```

### 2.3. Interpreting RDAP Output (JSON)

The JSON output is structured and self-describing. Key objects include:
*   `objectClassName`: The type of object (e.g., `domain`, `ip network`).
*   `handle`: A unique identifier for the object.
*   `entities`: An array of objects representing contacts (registrant, admin, etc.). Each entity has roles (e.g., `registrant`, `abuse`).
*   `events`: An array of important dates (registration, expiration, last update).
*   `nameservers`: An array of name server objects.
*   `links`: An array of related links, including the URL of the authoritative server.
*   `notices`: Legal disclaimers and terms of use.

### 2.4. Advanced Techniques and Special Use Cases

*   **Automated Reconnaissance:** RDAP's standardized JSON makes it ideal for scripting.
    **Python Example (using `requests`):**
    ```python
    import requests
    import json

    def get_rdap_info(domain):
        url = f"https://rdap.org/domain/{domain}"
        response = requests.get(url)
        if response.status_code == 200:
            return response.json()
        return None

    info = get_rdap_info("google.com")
    if info:
        for event in info.get('events', []):
            if event.get('eventAction') == 'expiration':
                print(f"Expires: {event['eventDate']}")
    ```

*   **Following Referrals:** An RDAP response may contain a `links` array with a `rel` type of `related`. This points to a more authoritative server, which you can then query.

*   **Searching:** RDAP supports searching for domains or entities. For example, to search for domains matching a pattern:
    ```bash
    # This functionality depends on the server's implementation
    curl -s "https://rdap.example.com/domains?name=example-*" | jq .
    ```

## 3. WHOIS vs. RDAP: A Comparison

| Feature               | WHOIS                                       | RDAP                                                     |
| --------------------- | ------------------------------------------- | -------------------------------------------------------- |
| **Protocol**          | Custom TCP-based (Port 43)                  | HTTP/HTTPS (RESTful API)                                 |
| **Data Format**       | Plain text, non-standardized                | Standardized JSON                                        |
| **Security**          | None (unencrypted)                          | HTTPS for encryption, plus authentication/authorization  |
| **Parsing**           | Difficult and brittle                       | Easy and reliable                                        |
| **Internationalization**| No standard support                         | Built-in (UTF-8)                                         |
| **Discoverability**   | Manual (querying IANA) or referral chains   | Centralized bootstrap servers (e.g., `rdap.org`)         |
| **Access Control**    | Public, with data often redacted for all    | Tiered access; authenticated users can see more data     |

## 4. Practical Application in Ethical Hacking

Both tools are essential for the reconnaissance phase of a penetration test.

*   **Footprinting:** Discover a target's registered domains, IP ranges, and ASNs.
*   **Identifying Contacts:** Find email addresses for social engineering or to report vulnerabilities (look for `abuse` contacts in RDAP).
*   **Discovering Infrastructure:** Use name server information to find related DNS infrastructure.
*   **Checking Domain Age:** A very new domain might be suspicious (e.g., for a phishing campaign).
*   **Finding Related Domains:** Use registrant information (if available) to pivot and find other domains owned by the same entity. RDAP's search capabilities can be particularly powerful here.
