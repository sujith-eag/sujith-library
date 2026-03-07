---
title: The Quantum Computing Threat to Modern Cryptography
description: Understanding how quantum computers will break current encryption and the standardization efforts to address this challenge
date: 2026-03-07
author: Sujith Kumar
tags:
  - quantum-computing
  - cryptography
  - security
  - post-quantum-cryptography
---

# The Quantum Computing Threat to Modern Cryptography

## Introduction

Modern digital security relies fundamentally on cryptographic systems that have protected sensitive data for decades. However, the emergence of quantum computing poses an existential threat to the mathematical foundations of current public-key cryptography. This article examines the quantum threat landscape and the standardization efforts addressing this challenge.

## The Quantum Computing Challenge

### How Quantum Computers Break Encryption

Quantum computers leverage quantum mechanical phenomena—superposition and entanglement—to perform calculations fundamentally differently from classical computers. For certain mathematical problems, this provides exponential speedup over traditional computing methods.

Shor's algorithm, developed in 1994, demonstrated that a sufficiently powerful quantum computer could efficiently solve two problems underlying modern public-key cryptography:

- **Integer factorization**: The basis of RSA encryption
- **Discrete logarithm problem**: The foundation of Elliptic Curve Cryptography (ECC) and Diffie-Hellman key exchange

These algorithms, which currently secure internet communications, banking transactions, digital signatures, and government communications, would become vulnerable to quantum attacks.

### Cryptographically Relevant Quantum Computers (CRQC)

A CRQC is defined as a quantum computer powerful enough to break current cryptographic systems in practical timeframes. While estimates vary, expert consensus suggests CRQCs may emerge within 10-15 years, though this timeline carries significant uncertainty.

The critical metric is the number of logical qubits required. Breaking RSA-2048 encryption is estimated to require approximately 20 million noisy physical qubits or 4,000-8,000 fault-tolerant logical qubits. Current quantum computers operate with fewer than 1,000 qubits, but progress continues steadily.

### The "Harvest Now, Decrypt Later" Threat

A more immediate concern is the "Harvest Now, Decrypt Later" (HNDL) attack vector. Adversaries with sufficient resources can capture encrypted data today and store it for future decryption once CRQCs become available.

This threat is particularly severe for:

- **Long-lived sensitive data**: Medical records, financial information, government secrets
- **Data with extended confidentiality requirements**: Classified documents, intellectual property
- **Infrastructure with slow update cycles**: Embedded systems, industrial control systems

Evidence suggests nation-state actors are already conducting large-scale data harvesting operations, making this a present rather than future threat.

## Vulnerable Cryptographic Systems

The following widely deployed systems face quantum vulnerability:

### Public-Key Cryptography
- **RSA**: All key sizes theoretically vulnerable to Shor's algorithm
- **Elliptic Curve Cryptography (ECC)**: ECDSA, ECDH completely broken
- **Diffie-Hellman (DH)**: Key exchange mechanisms compromised
- **DSA**: Digital Signature Algorithm vulnerable

### Impact on Protocols and Infrastructure
- **TLS/SSL**: Current handshake mechanisms rely on RSA or ECDH
- **SSH**: Key exchange and authentication affected
- **VPNs**: IPsec, IKEv2 key establishment compromised
- **Code Signing**: Software authenticity verification at risk
- **PKI Infrastructure**: Certificate authorities, digital certificates
- **Blockchain**: Many cryptocurrencies rely on ECDSA signatures

### Quantum-Resistant Cryptography

Importantly, symmetric cryptography (AES, ChaCha20) and hash functions (SHA-256, SHA-3) remain secure against known quantum attacks with appropriate key length increases:

- **AES-128** → **AES-256** (provides 128-bit quantum security)
- **SHA-256** remains secure (Grover's algorithm provides only quadratic speedup)

## International Standardization Response

### NIST Post-Quantum Cryptography Project

The U.S. National Institute of Standards and Technology (NIST) initiated a global standardization effort in 2016 to identify quantum-resistant cryptographic algorithms. After multiple evaluation rounds involving international cryptographers, NIST finalized standards in 2024.

**Standardized Algorithms (August 2024):**

**Key Encapsulation Mechanisms (KEM):**
- **ML-KEM** (formerly CRYSTALS-Kyber) - FIPS 203
  - Use: Secure key establishment
  - Basis: Module Learning With Errors (MLWE) lattice problem

**Digital Signatures:**
- **ML-DSA** (formerly CRYSTALS-Dilithium) - FIPS 204
  - Use: General-purpose digital signatures
  - Basis: Module LWE lattice problem

- **SLH-DSA** (formerly SPHINCS+) - FIPS 205
  - Use: Backup signature scheme, stateless hash-based
  - Basis: Hash function security

- **Falcon** - FIPS 206 (anticipated)
  - Use: Applications requiring smaller signatures
  - Basis: NTRU lattice problem

These algorithms are based on mathematical problems believed to be resistant to both classical and quantum attacks, primarily leveraging lattice-based and hash-based cryptography.

### Additional International Standards Bodies

**ISO/IEC JTC 1/SC 27**: Developing international standards for quantum-safe cryptography, harmonizing with NIST selections.

**ETSI (European Telecommunications Standards Institute)**: Published specifications for quantum key distribution (QKD) and post-quantum algorithm migration.

**IETF (Internet Engineering Task Force)**: Developing protocol specifications for integrating PQC into TLS, IPsec, SSH, and other internet protocols.

**ITU-T**: Released recommendations for quantum-safe networks and quantum key distribution infrastructure (Y.3800 series).

## Standardized Migration Principles

International guidance emphasizes several core principles for transitioning to post-quantum cryptography:

### Crypto-Agility

Organizations must design systems capable of rapidly switching cryptographic algorithms without extensive code changes. This requires:

- Algorithm abstraction through APIs and configuration
- Modular cryptographic implementations
- Centralized cryptographic policy management
- Automated update mechanisms

### Hybrid Approaches

During the transition period, combining classical and post-quantum algorithms provides defense-in-depth:

- **Hybrid Key Exchange**: Classical (ECDH) + PQC (ML-KEM) → combined key material
- **Dual Signatures**: Both classical and PQC signatures validated
- **Backward Compatibility**: Gradual ecosystem transition without breaking interoperability

Hybrid approaches ensure security if either the classical or PQC algorithm proves vulnerable.

### Cryptographic Inventory

Organizations must comprehensively catalog all cryptographic implementations across:

- Source code (API calls to cryptographic libraries)
- Binary executables and firmware
- Network protocols and configurations
- Certificates and PKI infrastructure
- Hardware security modules (HSMs) and key management systems

This inventory, formalized as a Cryptographic Bill of Materials (CBOM), enables risk assessment and migration planning.

### Risk-Based Prioritization

Migration efforts should prioritize systems based on:

- **Data sensitivity and shelf-life**: Long-lived secrets require urgent attention
- **Migration complexity**: Systems difficult to update need early planning
- **Threat timeline**: Mosca's inequality (X + Y > Z) where:
  - X = data confidentiality requirement duration
  - Y = time required to migrate to quantum-safe cryptography
  - Z = time until CRQCs threaten current cryptography

If X + Y > Z, immediate action is critical.

## Timeline and Urgency

While CRQC emergence remains uncertain, several factors drive urgency:

1. **HNDL attacks are occurring now**: Data harvesting is ongoing
2. **Migration complexity**: Large organizations require 5-10 years for complete transitions
3. **Ecosystem dependencies**: Vendor readiness, protocol standardization, interoperability testing
4. **Legacy systems**: Non-upgradable infrastructure requires containment strategies

Expert consensus recommends organizations begin inventory and planning immediately, with high-priority system migrations commencing within 2-3 years.

## Conclusion

The quantum threat to cryptography is not hypothetical but an approaching reality requiring proactive response. International standardization efforts have provided quantum-resistant algorithms, but organizational migration represents a multi-year, resource-intensive undertaking.

Understanding the threat landscape, vulnerable systems, and standardized migration principles forms the foundation for successful transition to quantum-safe security. Organizations delaying action face increasing risk of catastrophic data exposure when quantum computing capabilities mature.

The next article in this series examines how governments and industries worldwide are responding to this challenge through policy, regulation, and practical implementation initiatives.

---

**References:**

- NIST Post-Quantum Cryptography Project: https://csrc.nist.gov/projects/post-quantum-cryptography
- FIPS 203 (ML-KEM): https://csrc.nist.gov/pubs/fips/203/final
- FIPS 204 (ML-DSA): https://csrc.nist.gov/pubs/fips/204/final
- FIPS 205 (SLH-DSA): https://csrc.nist.gov/pubs/fips/205/final
- Shor, P. (1994). "Algorithms for quantum computation: discrete logarithms and factoring"
