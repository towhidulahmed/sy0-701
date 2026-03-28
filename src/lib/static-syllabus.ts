export type StaticTopic = {
  id: number;
  slug: string;
  title: string;
  studyPath: string;
  content: string;
  keyTerms: string[];
  examples: string[];
  tips: string[];
};

export type StaticDomain = {
  id: number;
  key: string;
  name: string;
  weightPct: number;
  topics: StaticTopic[];
};

export const STATIC_SYLLABUS: StaticDomain[] = [
  {
    "id": 1,
    "key": "general-security-concepts",
    "name": "General Security Concepts",
    "weightPct": 12,
    "topics": [
      {
        "id": 1,
        "slug": "authentication",
        "title": "Authentication",
        "studyPath": "/study#authentication",
        "content": "## Authentication\n\nAuthentication is the process of verifying the identity of a user, device, or system before granting access to resources. It answers the question: **\"Are you who you claim to be?\"**\n\n### Authentication Factors\n\nThe three classic authentication factors are:\n\n- **Something you know**, Passwords, PINs, security questions. The weakest factor because it can be guessed, stolen, or shared.\n- **Something you have**, Smart cards, hardware tokens (YubiKey), authenticator apps (TOTP), push notifications. Stronger because the attacker needs physical possession.\n- **Something you are**, Biometrics: fingerprints, facial recognition, iris scans, voice patterns. Unique to the individual but cannot be changed if compromised.\n\nAdditional factors recognized in modern security:\n- **Somewhere you are**, Geolocation, GPS, IP-based location.\n- **Something you do**, Behavioral biometrics like typing cadence, gait analysis.\n\n### Multi-Factor Authentication (MFA)\n\nMFA requires **two or more different factor types** for authentication. A password + PIN is NOT MFA (both are \"something you know\"). A password + fingerprint IS MFA (know + are).\n\n**Phishing-resistant MFA** methods include FIDO2/WebAuthn hardware keys, which use public-key cryptography and are bound to the legitimate site origin, making them immune to phishing.\n\n### Authentication Protocols\n\n- **Kerberos**, Ticket-based authentication used in Windows Active Directory. The Key Distribution Center (KDC) issues Ticket Granting Tickets (TGT) and service tickets. Vulnerable to Pass-the-Ticket, Kerberoasting, and Golden Ticket attacks.\n- **LDAP/LDAPS**, Directory access protocol for querying identity stores (Active Directory, OpenLDAP). LDAPS adds TLS encryption.\n- **RADIUS**, Centralized AAA (Authentication, Authorization, Accounting) for network access, Wi-Fi, VPN, dial-up. Uses UDP.\n- **TACACS+**, Cisco-developed AAA protocol. Uses TCP, encrypts the entire payload (more secure than RADIUS which only encrypts passwords).\n- **SAML 2.0**, XML-based federation protocol for browser-based SSO. The Identity Provider (IdP) issues signed assertions to the Service Provider (SP).\n- **OAuth 2.0**, Authorization framework (not authentication). Issues access tokens with scoped permissions. Used by APIs.\n- **OpenID Connect (OIDC)**, Authentication layer built on top of OAuth 2.0. Returns an ID token (JWT) with user identity claims.\n\n### Single Sign-On (SSO)\n\nSSO allows users to authenticate once and access multiple applications without re-authenticating. Implemented via SAML, OAuth/OIDC, or Kerberos. Risk: if the SSO credential is compromised, all linked applications are exposed.\n\n### Common Authentication Attacks\n\n- **Pass-the-Hash**, Attacker uses a captured NTLM hash to authenticate without knowing the password.\n- **Kerberoasting**, Extracts service ticket hashes and cracks them offline to discover service account passwords.\n- **Pass-the-Ticket**, Steals or forges Kerberos tickets for unauthorized access.\n- **Credential stuffing**, Uses breached username/password pairs on other sites.\n- **Brute force / Password spraying**, Tries many passwords against one account, or one common password against many accounts.",
        "keyTerms": [
          "MFA",
          "TOTP",
          "FIDO2/WebAuthn",
          "SSO",
          "SAML 2.0",
          "OAuth 2.0",
          "OpenID Connect",
          "Kerberos",
          "LDAP",
          "RADIUS",
          "TACACS+",
          "biometrics",
          "Pass-the-Hash",
          "Kerberoasting"
        ],
        "examples": [
          "Executives have complained that SMS codes are inconvenient when traveling internationally. IT also needs a solution resilient to SIM-swapping attacks. FIDO2 hardware keys solve both issues, they work offline and cannot be phished.",
          "During incident response, forensic analysis shows an attacker authenticated to multiple services using a service account without knowing the cleartext password. This is a Pass-the-Hash attack using captured NTLM hashes."
        ],
        "tips": [
          "Remember: MFA requires different TYPES of factors. Password + PIN = single factor (both 'something you know'). Password + fingerprint = two factors.",
          "Kerberos = tickets, RADIUS = network access (Wi-Fi/VPN), TACACS+ = device administration (Cisco). Know which protocol fits which scenario.",
          "SAML is for browser SSO (XML assertions). OAuth is for API authorization (access tokens). OIDC adds authentication to OAuth (ID tokens)."
        ]
      },
      {
        "id": 2,
        "slug": "cryptography",
        "title": "Cryptography",
        "studyPath": "/study#cryptography",
        "content": "## Cryptography\n\nCryptography protects data confidentiality, integrity, and authenticity through mathematical transformations. It is foundational to nearly every security control on the SY0-701 exam.\n\n### Symmetric Encryption\n\nUses the **same key** for encryption and decryption. Fast and efficient for large data volumes.\n\n- **AES (Advanced Encryption Standard)**, The current standard. Key sizes: 128, 192, or 256 bits. Used for disk encryption (BitLocker), VPNs, TLS data transfer, and database encryption.\n- **3DES (Triple DES)**, Applies DES three times. Deprecated, too slow and only 112-bit effective security.\n- **ChaCha20**, Modern stream cipher used in TLS 1.3 and WireGuard VPN. Faster than AES on devices without hardware AES acceleration.\n\n**Key challenge**: How do two parties securely share the symmetric key? This is solved by asymmetric encryption or key exchange protocols.\n\n### Asymmetric Encryption\n\nUses a **key pair**: public key (shared openly) encrypts, private key (kept secret) decrypts. Slower than symmetric but solves the key distribution problem.\n\n- **RSA**, Most widely used. Key sizes: 2048+ bits. Used for digital signatures, key exchange, and certificate signing.\n- **ECC (Elliptic Curve Cryptography)**, Smaller keys with equivalent security (256-bit ECC ≈ 3072-bit RSA). Used in mobile devices, IoT, and modern TLS.\n- **Diffie-Hellman (DH/DHE/ECDHE)**, Key exchange protocol. DHE and ECDHE provide **perfect forward secrecy**, if the server's private key is later compromised, past session keys remain safe.\n\n### Hashing\n\nA one-way function that produces a fixed-size digest (fingerprint) from any input. Used for integrity verification and password storage.\n\n- **SHA-256 / SHA-3**, Current standards for integrity checks, digital signatures, and certificate fingerprints.\n- **MD5**, Cryptographically broken. Collision attacks are trivial. Should NOT be used for security purposes.\n- **SHA-1**, Deprecated. Collision attacks demonstrated. Being phased out of certificates and signatures.\n- **HMAC**, Hash-based Message Authentication Code. Combines a hash with a secret key to provide both integrity and authenticity.\n\n**Password hashing** uses specialized slow algorithms: **bcrypt**, **scrypt**, **Argon2**, or **PBKDF2**. These add salt (random data) and computational cost to resist brute-force and rainbow table attacks.\n\n### Digital Signatures\n\nThe sender hashes the message, then encrypts the hash with their **private key**. The recipient decrypts with the sender's **public key** and compares hashes. This provides:\n- **Integrity**, Message wasn't altered\n- **Authentication**, Sender is who they claim\n- **Non-repudiation**, Sender cannot deny sending it\n\n### Key Management\n\n- **KMS (Key Management System)**, Centralized key storage, rotation, and access control (e.g., AWS KMS, Azure Key Vault, HashiCorp Vault).\n- **Key escrow**, A trusted third party holds a copy of encryption keys for recovery purposes.\n- **Key rotation**, Regularly replacing keys to limit exposure if compromised.\n- **Key stretching**, Making short passwords into longer keys using PBKDF2 or bcrypt.\n\n### Steganography & Obfuscation\n\n- **Steganography**, Hiding data within other data (images, audio, video). The existence of the message is concealed.\n- **Obfuscation**, Making code or data difficult to understand (e.g., obfuscated JavaScript). Not true encryption, security through obscurity.",
        "keyTerms": [
          "AES",
          "RSA",
          "ECC",
          "Diffie-Hellman",
          "SHA-256",
          "MD5",
          "HMAC",
          "bcrypt",
          "digital signature",
          "perfect forward secrecy",
          "key escrow",
          "KMS",
          "steganography",
          "symmetric vs asymmetric"
        ],
        "examples": [
          "Audit logs show AES-128 encrypted backups being exfiltrated to an unauthorized S3 bucket. The key is stored in the same repository as the backup script, a critical key management failure. The key should be in a KMS with access controls.",
          "A network administrator needs fast encryption for terabytes daily. AES-256 with hardware acceleration (AES-NI) is the answer, symmetric encryption is designed for bulk data."
        ],
        "tips": [
          "Symmetric = same key, fast, bulk data (AES). Asymmetric = key pair, slow, key exchange & signatures (RSA, ECC). The exam loves asking which to use when.",
          "MD5 and SHA-1 are BROKEN, never the correct answer for security. SHA-256 or SHA-3 for hashing. bcrypt/Argon2 for passwords.",
          "Digital signatures use the PRIVATE key to sign (not encrypt). The public key verifies. This is the reverse of encryption."
        ]
      },
      {
        "id": 3,
        "slug": "physical-security",
        "title": "Physical Security",
        "studyPath": "/study#physical-security",
        "content": "## Physical Security\n\nPhysical security protects personnel, hardware, software, networks, and data from physical actions and events that could cause serious loss or damage. Even the strongest digital controls fail if an attacker gains physical access.\n\n### Physical Access Controls\n\n- **Mantraps / Access control vestibules**, Two interlocking doors where only one opens at a time. Prevents tailgating by trapping unauthorized individuals between doors.\n- **Badge readers / Smart cards**, Proximity cards (RFID) or smart cards (chip-based) used with card readers for building entry. Can log entry/exit times.\n- **Biometric locks**, Fingerprint, retina, or facial recognition scanners for high-security areas.\n- **Bollards**, Concrete or steel posts preventing vehicle-borne attacks against buildings.\n- **Fencing**, Perimeter barrier. Height matters: 3-4 ft deters casual trespassers, 7+ ft with barbed wire deters determined attackers.\n- **Security guards**, Human verification of identity. Can make judgment calls that automated systems cannot.\n- **Visitor logs**, Paper or digital sign-in records tracking who enters and exits a facility.\n\n### Surveillance Controls\n\n- **CCTV / IP cameras**, Visual monitoring and recording. Acts as both a deterrent and a detective control.\n- **Motion sensors**, Detect movement in restricted areas. Can trigger alarms or camera recording.\n- **Security lighting**, Well-lit areas deter unauthorized access, especially around entrances and parking areas.\n\n### Physical Attack Techniques\n\n- **Tailgating (Piggybacking)**, Following an authorized person through a secured door without presenting credentials. The most common physical social engineering attack.\n- **Shoulder surfing**, Observing someone's screen, keyboard, or documents to steal information (passwords, PINs).\n- **Dumpster diving**, Searching through discarded materials (trash, recycling) for sensitive information like printed documents, old hard drives, or sticky notes with passwords.\n- **Lock picking / Lock bypass**, Physically defeating lock mechanisms.\n\n### Environmental Controls\n\n- **Fire suppression**, Clean agent systems (FM-200, Novec 1230) for server rooms, suppress fire without water damage. Sprinklers (wet-pipe, dry-pipe, pre-action) for general areas.\n- **HVAC**, Temperature and humidity control for data centers. Overheating causes hardware failure; excess humidity causes condensation and corrosion.\n- **Hot/cold aisles**, Data center layout where server fronts face cold aisles (intake) and backs face hot aisles (exhaust) for efficient cooling.\n- **UPS (Uninterruptible Power Supply)**, Battery backup providing short-term power during outages, allowing graceful shutdown.\n- **Generator**, Long-term backup power for extended outages.\n- **PDU (Power Distribution Unit)**, Distributes electrical power to equipment in a server rack.",
        "keyTerms": [
          "mantrap/access control vestibule",
          "tailgating",
          "bollards",
          "CCTV",
          "shoulder surfing",
          "dumpster diving",
          "FM-200",
          "hot/cold aisle",
          "UPS",
          "badge reader",
          "biometric lock",
          "fencing"
        ],
        "examples": [
          "A penetration tester documents physical security weaknesses at a corporate headquarters. An employee held the door open for someone carrying boxes, this is tailgating. An access control vestibule (mantrap) would prevent this.",
          "A colocation facility reviews its physical security after a social engineering incident. Key controls: mantraps, biometric entry, CCTV with 90-day retention, visitor escort policies, and cable locks for equipment."
        ],
        "tips": [
          "Mantrap/access control vestibule is THE answer for preventing tailgating. If the question mentions following someone through a door, look for this control.",
          "Know fire suppression types: clean agent (FM-200) for server rooms (no water damage), wet-pipe sprinklers for general areas. The exam tests this distinction.",
          "Physical controls are often categorized: deterrent (fencing, lighting), preventive (locks, mantraps), detective (CCTV, motion sensors), compensating (guards when badge readers fail)."
        ]
      },
      {
        "id": 4,
        "slug": "pki-certificates",
        "title": "PKI and Certificates",
        "studyPath": "/study#pki-certificates",
        "content": "## PKI and Certificates\n\nPublic Key Infrastructure (PKI) is a framework of policies, hardware, software, and procedures for creating, managing, distributing, and revoking digital certificates. It underpins TLS/HTTPS, email encryption (S/MIME), code signing, VPNs, and more.\n\n### PKI Components\n\n- **Certificate Authority (CA)**, The trusted entity that issues and signs digital certificates. The root CA sits at the top of the trust hierarchy.\n- **Registration Authority (RA)**, Verifies the identity of certificate requestors before the CA issues a certificate. Handles the validation process.\n- **Certificate Revocation List (CRL)**, A periodically published list of revoked certificates. Browsers download and check this list. Disadvantage: can be stale between updates.\n- **Online Certificate Status Protocol (OCSP)**, Real-time certificate revocation checking. The browser queries the OCSP responder for a specific certificate's status. Faster and more current than CRLs.\n- **OCSP Stapling**, The web server itself queries OCSP and 'staples' the signed response to the TLS handshake. Eliminates the client needing to contact the CA directly, improving performance and privacy.\n\n### Certificate Types\n\n- **DV (Domain Validation)**, Verifies domain ownership only. Cheapest and fastest. Green padlock but no organization info.\n- **OV (Organization Validation)**, Verifies domain ownership AND organization identity. Shows company name in certificate details.\n- **EV (Extended Validation)**, Most rigorous validation. Historically showed green address bar (now deprecated in most browsers). Used by banks and e-commerce.\n- **Wildcard certificate**, Covers a domain and all single-level subdomains (*.example.com covers mail.example.com, www.example.com but NOT sub.mail.example.com).\n- **SAN (Subject Alternative Name)**, Certificate that covers multiple specific domains listed in the SAN field.\n- **Self-signed certificate**, Signed by the entity itself, not a trusted CA. Used for testing or internal services. Browsers show a warning.\n- **Code signing certificate**, Verifies the identity of a software publisher and ensures code hasn't been tampered with.\n\n### Certificate Formats\n\n- **PEM (.pem, .crt)**, Base64 encoded, text format. Most common on Linux/Apache.\n- **DER (.der, .cer)**, Binary format. Common on Windows/Java.\n- **PFX/PKCS#12 (.pfx, .p12)**, Contains both the certificate and private key in one encrypted file.\n- **PKCS#7 (.p7b)**, Contains certificate chain without private key.\n\n### Trust Model\n\nThe **chain of trust** works: Root CA → Intermediate CA → End-entity certificate. Browsers and OSes ship with pre-installed root CA certificates in their **trust store**. If any certificate in the chain is untrusted or revoked, the entire chain fails.\n\n### Certificate Pinning\n\nApplications or browsers pin (hardcode) the expected certificate or public key for a specific domain. Prevents MITM attacks even if a rogue CA issues a fraudulent certificate. Used in mobile apps and critical web services.\n\n### Key Escrow & Recovery\n\n- **Key escrow**, A copy of a private key is held by a trusted third party for recovery purposes. Required in some government and enterprise scenarios.\n- **Key recovery agent**, A designated person or system authorized to recover escrowed keys when needed (e.g., employee departure, lost key).",
        "keyTerms": [
          "Certificate Authority (CA)",
          "CRL",
          "OCSP",
          "OCSP stapling",
          "wildcard certificate",
          "SAN",
          "self-signed certificate",
          "chain of trust",
          "root CA",
          "intermediate CA",
          "DV/OV/EV",
          "PEM/DER/PFX",
          "certificate pinning",
          "key escrow"
        ],
        "examples": [
          "A wildcard TLS certificate (*.internal.corp) was issued to a dev team without approval, a certificate issuance policy (requiring RA approval or Certificate Template restrictions) would have prevented this.",
          "An e-commerce site's private key was exposed. OCSP allows browsers to check revocation in real time. OCSP stapling is even better, the server includes the OCSP response in the TLS handshake."
        ],
        "tips": [
          "CRL = periodic list (can be stale). OCSP = real-time check. OCSP Stapling = server includes the proof. The exam often asks which provides the FASTEST revocation check.",
          "Wildcard (*.domain.com) covers one subdomain level only. SAN certificates list multiple specific domains. Know the difference.",
          "Chain of trust: Root CA → Intermediate CA → Server cert. If any link is broken or untrusted, the whole chain fails."
        ]
      },
      {
        "id": 5,
        "slug": "security-controls",
        "title": "Security Controls",
        "studyPath": "/study#security-controls",
        "content": "## Security Controls\n\nSecurity controls are safeguards or countermeasures implemented to reduce risk. The SY0-701 exam tests your ability to classify controls by **category** (what it is) and **type** (what it does).\n\n### Control Categories\n\n- **Technical (Logical)**, Implemented through technology. Examples: firewalls, encryption, ACLs, antivirus, IDS/IPS, MFA, DLP software.\n- **Administrative (Managerial)**, Policies, procedures, and governance. Examples: security policies, risk assessments, security awareness training, background checks, change management procedures, incident response plans.\n- **Operational**, Day-to-day procedures performed by people. Examples: guard patrols, log reviews, media handling, configuration management, patch management.\n- **Physical**, Tangible barriers. Examples: locks, fences, mantraps, CCTV, lighting, bollards.\n\n### Control Types (Functions)\n\n- **Preventive**, Stops an incident before it happens. Examples: firewalls, encryption, locks, access control lists, security awareness training.\n- **Detective**, Identifies that an incident has occurred or is occurring. Examples: IDS, SIEM alerts, audit logs, CCTV, motion sensors.\n- **Corrective**, Fixes the damage after an incident. Examples: patching, restoring from backups, incident response procedures, antivirus quarantine.\n- **Deterrent**, Discourages an attacker from attempting. Examples: warning banners, security cameras (visible), fencing, login banners.\n- **Compensating**, Alternative controls when the primary control is not feasible. Example: network segmentation and additional monitoring for a legacy system that cannot be patched.\n- **Directive**, Policies or rules that direct behavior. Examples: acceptable use policies, regulations, compliance requirements.\n\n### Important Distinctions\n\nA single control can span multiple types:\n- A **security camera** is physical + detective (records events) + deterrent (visible presence discourages attacks).\n- A **security policy** is administrative + directive + preventive.\n- A **firewall** is technical + preventive.\n\n### Compensating Controls\n\nWhen a system cannot meet a security requirement (e.g., a legacy POS terminal that cannot support TLS 1.2), a compensating control provides equivalent protection through alternative means. Examples:\n- Network segmentation to isolate the vulnerable system\n- Enhanced monitoring and logging\n- Additional access controls\n- Encryption at a different layer\n\nCompensating controls are common in PCI-DSS compliance when merchants cannot meet a specific requirement directly.",
        "keyTerms": [
          "technical/logical control",
          "administrative/managerial control",
          "operational control",
          "physical control",
          "preventive",
          "detective",
          "corrective",
          "deterrent",
          "compensating control",
          "directive control"
        ],
        "examples": [
          "A CISO classifies controls for ISO 27001: firewall = technical/preventive, security policy = administrative/directive, guard patrol = operational/detective, badge reader = physical/preventive.",
          "A legacy POS terminal cannot support TLS 1.2. Compensating controls: isolate it on a dedicated VLAN, add IDS monitoring, restrict access to authorized IPs only, encrypt at the application layer."
        ],
        "tips": [
          "The exam loves asking 'what TYPE of control is this?' Learn the grid: categories (technical, admin, operational, physical) × types (preventive, detective, corrective, deterrent, compensating, directive).",
          "Compensating control = 'we can't do X, so we do Y instead to achieve equivalent security.' Always look for this when a question says a system CANNOT be patched or upgraded.",
          "Detective ≠ Preventive. CCTV that only records = detective. A locked door = preventive. A warning sign = deterrent. The exam tests these distinctions heavily."
        ]
      },
      {
        "id": 6,
        "slug": "wireless-security",
        "title": "Wireless Security",
        "studyPath": "/study#wireless-security",
        "content": "## Wireless Security\n\nWireless networks are inherently less secure than wired networks because radio signals extend beyond physical boundaries. Understanding wireless standards, encryption protocols, and attack methods is essential for the SY0-701 exam.\n\n### Wireless Encryption Standards\n\n- **WEP (Wired Equivalent Privacy)**, Broken. Uses RC4 with a 24-bit IV that repeats quickly. Can be cracked in minutes. Never use.\n- **WPA (Wi-Fi Protected Access)**, Interim fix for WEP. Uses TKIP (Temporal Key Integrity Protocol) with RC4. Also considered weak.\n- **WPA2**, Current widely-deployed standard. Uses AES-CCMP encryption. Two modes:\n  - **WPA2-Personal (PSK)**, Pre-shared key (passphrase). All users share the same password. Suitable for home/small office.\n  - **WPA2-Enterprise**, Uses 802.1X with a RADIUS server. Each user authenticates with individual credentials. Required for corporate environments.\n- **WPA3**, Latest standard with significant improvements:\n  - **SAE (Simultaneous Authentication of Equals)**, Replaces PSK handshake. Resistant to offline dictionary attacks.\n  - **Perfect forward secrecy**, Each session uses unique keys.\n  - **192-bit security suite** for enterprise mode.\n  - **Enhanced Open (OWE)**, Encrypts traffic on open (public) networks without a password.\n\n### 802.1X / EAP Framework\n\n802.1X is a port-based network access control standard. Components:\n- **Supplicant**, The client device requesting access.\n- **Authenticator**, The access point or switch that controls access.\n- **Authentication server**, Typically a RADIUS server that validates credentials.\n\nEAP (Extensible Authentication Protocol) types:\n- **EAP-TLS**, Mutual certificate authentication. Most secure. Requires client certificates.\n- **PEAP**, Creates a TLS tunnel, then authenticates with username/password inside. No client cert needed.\n- **EAP-TTLS**, Similar to PEAP. TLS tunnel with inner authentication.\n- **EAP-FAST**, Cisco-developed. Uses Protected Access Credentials (PAC) instead of certificates.\n\n### Wireless Attacks\n\n- **Evil twin**, A rogue AP mimicking a legitimate network's SSID. Victims connect and traffic is intercepted. Often combined with a deauthentication attack.\n- **Deauthentication attack**, Sends forged deauth frames to disconnect clients from a legitimate AP, forcing reconnection to an evil twin.\n- **Rogue access point**, An unauthorized AP connected to the corporate network, bypassing security controls.\n- **War driving**, Driving around to discover wireless networks using directional antennas and scanning tools.\n- **WPS attacks**, Wi-Fi Protected Setup uses an 8-digit PIN that can be brute-forced. Always disable WPS.\n- **KRACK (Key Reinstallation Attack)**, Exploits WPA2's four-way handshake to replay cryptographic keys. Patched in most implementations.\n\n### Wireless Security Best Practices\n\n- Use WPA3 or WPA2-Enterprise with 802.1X/RADIUS\n- Disable WPS\n- Use strong, unique SSIDs (hiding SSID is NOT effective security)\n- Implement wireless IDS/IPS (WIDS/WIPS) to detect rogue APs\n- Segment guest Wi-Fi from corporate network\n- Regularly rotate PSKs if using WPA2-Personal\n- Use MAC filtering as a supplementary (not primary) control",
        "keyTerms": [
          "WPA2-Personal (PSK)",
          "WPA2-Enterprise",
          "WPA3/SAE",
          "802.1X",
          "RADIUS",
          "EAP-TLS",
          "PEAP",
          "evil twin",
          "rogue access point",
          "deauthentication attack",
          "WEP",
          "AES-CCMP",
          "WIDS/WIPS"
        ],
        "examples": [
          "After an employee departure, the company must change the shared Wi-Fi password for all users. Solution: migrate to WPA2-Enterprise with 802.1X/RADIUS, each user has individual credentials that can be disabled independently.",
          "A penetration tester near the building sets up a rogue AP with the corporate SSID. Employees auto-connect and enter VPN credentials in a fake captive portal, this is an evil twin attack. WIPS would detect the rogue AP."
        ],
        "tips": [
          "WPA2-Personal = shared password (home). WPA2-Enterprise = individual creds via RADIUS (corporate). Enterprise is ALWAYS the answer for corporate Wi-Fi questions.",
          "Evil twin = fake AP with same SSID. Rogue AP = unauthorized AP on the network. Different attacks with different mitigations. Evil twin → user awareness + WIPS. Rogue AP → NAC + port security + WIPS.",
          "EAP-TLS is the most secure (mutual cert auth) but hardest to deploy. PEAP is most common in enterprise (no client certs needed)."
        ]
      },
      {
        "id": 7,
        "slug": "zero-trust",
        "title": "Zero Trust",
        "studyPath": "/study#zero-trust",
        "content": "## Zero Trust\n\nZero Trust is a security model based on the principle: **\"Never trust, always verify.\"** Unlike traditional perimeter-based security (castle-and-moat), Zero Trust assumes that threats exist both inside and outside the network. Every access request must be authenticated, authorized, and continuously validated.\n\n### Core Principles\n\n1. **Verify explicitly**, Always authenticate and authorize based on all available data points: identity, location, device health, service/workload, data classification, and anomalies.\n2. **Least privilege access**, Limit user access with just-in-time (JIT) and just-enough-access (JEA). Use risk-based adaptive policies.\n3. **Assume breach**, Minimize blast radius and segment access. Verify end-to-end encryption. Use analytics for threat detection.\n\n### Zero Trust Architecture Components\n\n- **Policy Engine (PE)**, The brain of Zero Trust. Makes the access decision (grant/deny) based on identity, device posture, threat intelligence, and environmental context.\n- **Policy Administrator (PA)**, Executes the PE's decision by signaling the Policy Enforcement Point to allow or block the connection.\n- **Policy Enforcement Point (PEP)**, The gatekeeper that enables, monitors, and terminates connections between subjects and resources. Sits in the data path.\n\nThese three components are defined in NIST SP 800-207 (Zero Trust Architecture).\n\n### Key Concepts\n\n- **Control Plane vs Data Plane**, The control plane (PE + PA) makes decisions. The data plane (PEP) enforces them. Separating these is fundamental to Zero Trust.\n- **Implicit trust zones**, Zero Trust eliminates implicit trust. Being on the corporate LAN does NOT automatically grant access. Every request is treated as if it originates from an untrusted network.\n- **Micro-segmentation**, Dividing the network into small, isolated segments where each segment enforces its own access policies. Limits lateral movement if one segment is compromised.\n- **Software-Defined Perimeter (SDP)**, Creates one-to-one network connections between users and resources. Resources are invisible to unauthorized users (dark cloud).\n- **Continuous authentication**, Ongoing verification during a session, not just at login. If device posture changes or anomalous behavior is detected, access can be revoked mid-session.\n\n### Zero Trust Network Access (ZTNA)\n\nZTNA is the technology that implements Zero Trust for remote access, replacing traditional VPNs:\n- Users authenticate to an identity-aware proxy\n- Access is granted per-application, not per-network\n- The user never has direct network access to the entire corporate network\n- Applications are hidden from unauthorized users\n\n### Comparison: Traditional vs Zero Trust\n\n| Traditional | Zero Trust |\n|---|---|\n| Trust internal network | Trust nothing |\n| Perimeter firewall | Identity-centric |\n| VPN for remote access | ZTNA per-app access |\n| Flat internal network | Micro-segmented |\n| One-time authentication | Continuous validation |",
        "keyTerms": [
          "never trust, always verify",
          "Policy Engine (PE)",
          "Policy Administrator (PA)",
          "Policy Enforcement Point (PEP)",
          "control plane vs data plane",
          "micro-segmentation",
          "ZTNA",
          "Software-Defined Perimeter",
          "least privilege",
          "assume breach",
          "NIST SP 800-207",
          "continuous authentication"
        ],
        "examples": [
          "An enterprise deploys ZTNA. The Policy Engine evaluates each access request using identity (Azure AD), device posture (is the endpoint compliant?), location (is the user in a known geography?), and threat intelligence before allowing access.",
          "After a breach from a trusted internal device, the company migrates from a flat network to Zero Trust with micro-segmentation. Internal devices must now authenticate per-application, and lateral movement is blocked by default."
        ],
        "tips": [
          "Zero Trust = 'never trust, always verify.' If a question asks about the CORE assumption, it's that no network location (internal or external) is inherently trusted.",
          "Know the three components: Policy Engine (decides), Policy Administrator (signals), Policy Enforcement Point (enforces). The PE is the one 'making access decisions.'",
          "ZTNA replaces VPN. VPN = network-level access (once connected, you see everything). ZTNA = per-application access (you only see what you're authorized for)."
        ]
      }
    ]
  },
  {
    "id": 2,
    "key": "threats-vulnerabilities-mitigations",
    "name": "Threats, Vulnerabilities & Mitigations",
    "weightPct": 22,
    "topics": [
      {
        "id": 8,
        "slug": "application-attacks",
        "title": "Application Attacks",
        "studyPath": "/study#application-attacks",
        "content": "## Application Attacks\n\nApplication-layer attacks exploit vulnerabilities in software code and web application logic. These are among the most heavily tested topics on the SY0-701 exam.\n\n### Injection Attacks\n\n- **SQL Injection (SQLi)**, Attacker inserts malicious SQL statements into input fields that are passed directly to a database query. Can read, modify, or delete entire databases. Mitigation: **parameterized queries (prepared statements)**, input validation, stored procedures, least-privilege database accounts.\n- **Command injection**, Injecting OS commands through application inputs (e.g., `; rm -rf /`). Mitigation: input validation, avoid passing user input to system commands.\n- **LDAP injection**, Manipulating LDAP queries to bypass authentication or access unauthorized directory data.\n- **XML injection / XXE (XML External Entity)**, Injecting malicious XML to read local files, perform SSRF, or cause DoS. Mitigation: disable external entity processing.\n\n### Cross-Site Scripting (XSS)\n\nInjecting malicious JavaScript that executes in other users' browsers.\n\n- **Stored (Persistent) XSS**, Malicious script is saved in the server's database (e.g., forum post, comment). Executes for every user who views the page. Most dangerous type.\n- **Reflected XSS**, Malicious script is included in a URL and reflected back in the server's response. Requires the victim to click a crafted link.\n- **DOM-based XSS**, Script manipulates the page's DOM directly in the browser without server involvement.\n\nMitigation: **output encoding**, Content Security Policy (CSP) headers, input validation, HTTPOnly cookies (prevents JavaScript from reading session cookies).\n\n### Cross-Site Request Forgery (CSRF/XSRF)\n\nTricks an authenticated user into unknowingly submitting a malicious request to a web application where they're already logged in. The attacker exploits the user's active session.\n\nMitigation: **anti-CSRF tokens** (unique per-request tokens), SameSite cookie attribute, requiring re-authentication for sensitive actions.\n\n### Server-Side Request Forgery (SSRF)\n\nThe attacker causes the server to make HTTP requests to internal resources that are normally not accessible from outside. Can access internal APIs, metadata services (cloud), or internal network hosts.\n\n### Other Application Attacks\n\n- **Buffer overflow**, Writing more data to a buffer than it can hold, overwriting adjacent memory. Can lead to code execution. Mitigation: input validation, ASLR, DEP/NX bit, safe coding practices.\n- **Race condition / TOCTOU**, Exploiting the time gap between checking a condition and using the result. Example: checking file permissions, then a different process modifies the file before it's used.\n- **Directory traversal**, Using `../` sequences to access files outside the intended directory (e.g., `../../etc/passwd`).\n- **API attacks**, Exploiting insecure API endpoints: broken authentication, excessive data exposure, lack of rate limiting, broken object-level authorization.\n- **Privilege escalation**, Gaining higher privileges than authorized. Vertical (user → admin) or horizontal (user A → user B's data).\n\n### OWASP Top 10\n\nThe OWASP Top 10 is the industry-standard list of the most critical web application security risks. Key entries include: Injection, Broken Access Control, Cryptographic Failures, Security Misconfiguration, and SSRF. Know that this list exists and its purpose.",
        "keyTerms": [
          "SQL injection",
          "XSS (stored/reflected/DOM)",
          "CSRF",
          "SSRF",
          "buffer overflow",
          "directory traversal",
          "race condition",
          "parameterized queries",
          "output encoding",
          "anti-CSRF token",
          "OWASP Top 10",
          "privilege escalation",
          "XXE",
          "API attacks"
        ],
        "examples": [
          "A forum post contains a stored XSS payload that redirects visitors to a phishing site. Fix: implement output encoding on all user-generated content and add a strict Content Security Policy header.",
          "An employee clicks a link while logged into the HR portal, unknowingly submitting a salary change request, this is CSRF. Fix: implement anti-CSRF tokens on all state-changing forms."
        ],
        "tips": [
          "SQLi → parameterized queries. XSS → output encoding + CSP. CSRF → anti-CSRF tokens. These are the canonical mitigations, memorize these pairings.",
          "Stored XSS = saved in database (affects ALL visitors). Reflected XSS = in URL (victim must click link). DOM XSS = client-side only. The exam tests these distinctions.",
          "SSRF targets the SERVER (makes it fetch internal resources). CSRF targets the USER (makes them perform unwanted actions). Don't confuse them."
        ]
      },
      {
        "id": 9,
        "slug": "insider-threats",
        "title": "Insider Threats",
        "studyPath": "/study#insider-threats",
        "content": "## Insider Threats\n\nInsider threats originate from individuals who have authorized access to an organization's systems, data, or facilities, employees, contractors, partners, or former staff. They are particularly dangerous because insiders bypass perimeter defenses by design.\n\n### Types of Insider Threats\n\n- **Malicious insider**, Intentionally abuses access for personal gain, espionage, or sabotage. Examples: stealing trade secrets before joining a competitor, planting logic bombs, selling customer data.\n- **Negligent insider**, Causes harm through carelessness, not malice. Examples: clicking phishing links, misconfiguring cloud storage to public, leaving a laptop unattended, sharing passwords.\n- **Compromised insider**, An external attacker gains control of a legitimate user's credentials through phishing, malware, or social engineering. The insider is an unwitting participant.\n\n### Indicators of Insider Threats\n\n- Accessing resources outside normal working hours or job responsibilities\n- Large or unusual data downloads or transfers to external storage\n- Attempts to access restricted systems or escalate privileges\n- Disgruntled behavior, complaints about the organization, or pending termination\n- Financial difficulties or unexplained lifestyle changes\n- Circumventing security controls (disabling antivirus, using unauthorized VPNs)\n\n### Mitigation Controls\n\n- **Immediate account deprovisioning**, Disable accounts on termination day (ideally before the employee is notified). The #1 control failure in insider threat scenarios.\n- **Principle of least privilege**, Users only have access required for their job function.\n- **Separation of duties**, Critical tasks require multiple people (e.g., two-person integrity for financial transactions).\n- **Mandatory vacation**, Forces another employee to perform the person's duties, potentially uncovering fraud.\n- **Job rotation**, Regularly moving employees between roles prevents long-term fraud schemes.\n- **User Activity Monitoring (UAM)**, SIEM, DLP, and UEBA (User and Entity Behavior Analytics) to detect anomalous behavior.\n- **Background checks**, Pre-employment screening for criminal history, financial issues, and reference verification.\n- **Exit interviews and offboarding procedures**, Structured process to recover assets, revoke access, and remind departing employees of NDAs.\n- **DLP (Data Loss Prevention)**, Monitors and blocks unauthorized data transfers via email, USB, cloud storage, or printing.",
        "keyTerms": [
          "malicious insider",
          "negligent insider",
          "compromised insider",
          "least privilege",
          "separation of duties",
          "mandatory vacation",
          "job rotation",
          "UEBA",
          "account deprovisioning",
          "DLP",
          "offboarding"
        ],
        "examples": [
          "A terminated employee's AD account was still active 3 days after departure, they exfiltrated confidential files. Root cause: failed offboarding process. Fix: automate account deprovisioning tied to HR termination workflow.",
          "UEBA detects an engineer downloading 50GB of source code to a personal USB drive the week before resignation. DLP should block USB transfers of classified data; UAM flags the anomalous volume."
        ],
        "tips": [
          "If a question says 'terminated employee accessed systems after leaving,' the answer is almost always 'failure to deprovision/disable the account promptly.'",
          "Separation of duties prevents ONE person from having too much power. Mandatory vacation and job rotation help DETECT ongoing fraud. Know the difference.",
          "UEBA uses machine learning to detect behavioral anomalies, it's the answer when the question asks about detecting unusual insider behavior patterns."
        ]
      },
      {
        "id": 10,
        "slug": "malware",
        "title": "Malware",
        "studyPath": "/study#malware",
        "content": "## Malware\n\nMalware (malicious software) is any software intentionally designed to cause damage, gain unauthorized access, or disrupt operations. Understanding malware types and their behaviors is critical for the SY0-701 exam.\n\n### Malware Types\n\n- **Virus**, Malicious code that attaches to a host file or program. Requires user action to execute (opening a file, running a program). Can be boot sector, macro, polymorphic (changes signature), or metamorphic (rewrites itself).\n- **Worm**, Self-replicating malware that spreads across networks WITHOUT user interaction. Exploits network vulnerabilities. Examples: WannaCry, Conficker. Worms consume bandwidth and can carry destructive payloads.\n- **Trojan**, Disguised as legitimate software. Does NOT self-replicate. Relies on social engineering to trick users into installing it. Common types: Remote Access Trojan (RAT), banking trojan, backdoor trojan.\n- **Ransomware**, Encrypts files and demands payment for the decryption key. Modern variants also exfiltrate data before encryption (double extortion). Indicators: encrypted files with unusual extensions, ransom notes, deleted shadow copies/backups.\n- **Rootkit**, Hides deep in the OS (kernel-level or firmware) to maintain persistent, hidden access. Modifies system tools to conceal its presence. Very difficult to detect and remove, may require OS reinstallation or firmware reflashing.\n- **Spyware**, Secretly monitors user activity: keystrokes (keylogger), screen captures, browsing history, credentials. Sends data to the attacker.\n- **Adware**, Displays unwanted advertisements. May track browsing habits. Often bundled with free software.\n- **Logic bomb**, Malicious code that triggers on a specific condition (date, event, user action). Often planted by disgruntled insiders.\n- **RAT (Remote Access Trojan)**, Gives the attacker full remote control of the victim's system. Can activate webcam, capture keystrokes, browse files, and pivot to other systems.\n- **Botnet**, Network of compromised devices (bots/zombies) controlled by a command-and-control (C2) server. Used for DDoS attacks, spam, cryptomining, and credential stuffing.\n\n### Advanced Malware Concepts\n\n- **Fileless malware**, Executes entirely in memory (RAM) without writing files to disk. Uses legitimate tools like PowerShell, WMI, or process injection. Evades traditional antivirus that scans files. Detection requires EDR with behavioral analysis and memory scanning.\n- **Polymorphic malware**, Changes its code signature with each infection to evade signature-based detection. The core functionality remains the same.\n- **Living off the land (LOLBins)**, Malware uses legitimate system tools (PowerShell, cmd, certutil, mshta) for malicious purposes. Blends in with normal system activity.\n\n### Malware Defenses\n\n- **Antivirus/Antimalware**, Signature-based detection (known threats), heuristic analysis (suspicious behavior), sandboxing (execute in isolated environment).\n- **EDR (Endpoint Detection and Response)**, Records detailed telemetry, enables threat hunting, and provides automated response capabilities. Superior to traditional AV for advanced threats.\n- **Application allowlisting**, Only permits approved executables to run.\n- **Email filtering**, Blocks malicious attachments and links before they reach users.\n- **User awareness training**, Teaches users to recognize social engineering and suspicious files.\n- **Regular patching**, Closes vulnerabilities that malware exploits for initial access.",
        "keyTerms": [
          "virus",
          "worm",
          "trojan/RAT",
          "ransomware",
          "rootkit",
          "spyware/keylogger",
          "logic bomb",
          "botnet/C2",
          "fileless malware",
          "polymorphic",
          "living off the land",
          "EDR",
          "double extortion"
        ],
        "examples": [
          "A rootkit on a compromised server hides from standard process listing tools, but network analysis reveals outbound C2 traffic. Rootkits modify system utilities, use a trusted boot media or EDR with kernel-level visibility to detect them.",
          "PowerShell executes a Base64-encoded payload that injects code into explorer.exe. No files on disk, this is fileless malware using living-off-the-land techniques. Traditional AV won't detect it; EDR with behavioral analysis is required."
        ],
        "tips": [
          "Virus = needs a host file + user action. Worm = self-replicates over network, no user action. Trojan = disguised, no replication. The exam tests these distinctions.",
          "Fileless malware = memory-only, uses PowerShell/WMI. Rootkit = hides in OS/firmware. Ransomware = encrypts files. Know the defining characteristic of each.",
          "If the scenario mentions 'encrypted files, ransom note, deleted shadow copies' = ransomware. If 'hidden from process listings' = rootkit. If 'spreads without user action across network' = worm."
        ]
      },
      {
        "id": 11,
        "slug": "network-attacks",
        "title": "Network Attacks",
        "studyPath": "/study#network-attacks",
        "content": "## Network Attacks\n\nNetwork attacks target the protocols, services, and infrastructure that enable communication between systems. Understanding these attacks and their mitigations is essential for the SY0-701 exam.\n\n### DNS Attacks\n\n- **DNS cache poisoning**, Injecting fraudulent DNS records into a resolver's cache, redirecting users to attacker-controlled servers. Users type the correct URL but reach a fake site. Mitigation: DNSSEC (authenticates DNS responses with digital signatures).\n- **DNS tunneling**, Encoding data in DNS queries and responses to exfiltrate data or establish C2 channels. Indicators: unusually long subdomain strings, high DNS query volume to a single domain, Base64-encoded subdomain labels.\n- **Domain hijacking**, Taking control of a domain's registration to redirect traffic. Different from cache poisoning, the actual domain record is changed at the registrar level.\n\n### Layer 2 Attacks\n\n- **ARP poisoning (ARP spoofing)**, Sending fake ARP replies to associate the attacker's MAC address with the default gateway's IP. All traffic passes through the attacker (man-in-the-middle). Mitigation: Dynamic ARP Inspection (DAI), static ARP entries.\n- **MAC flooding**, Overwhelming a switch's MAC address table (CAM table) with fake MAC addresses. When full, the switch fails open and broadcasts all traffic like a hub, enabling eavesdropping. Mitigation: port security (limiting MACs per port).\n- **VLAN hopping**, Exploiting switch trunk port configurations (switch spoofing or double tagging) to access traffic on other VLANs. Mitigation: disable auto-trunking (DTP), set native VLAN to unused VLAN.\n\n### Denial of Service (DoS/DDoS)\n\n- **SYN flood**, Sends massive SYN packets without completing the TCP handshake, exhausting the server's connection table. Often uses spoofed source IPs.\n- **Amplification attacks**, DNS amplification, NTP amplification. Small request generates a large response sent to the spoofed victim's IP. Amplification factor can be 50-100x.\n- **Smurf attack**, Sends ICMP echo requests to a broadcast address with the victim's spoofed source IP. All hosts reply to the victim.\n- **DDoS (Distributed DoS)**, DoS from thousands of sources (botnet). Much harder to mitigate than single-source DoS.\n\nMitigations: rate limiting, SYN cookies, anti-DDoS services (Cloudflare, Akamai), BCP38 (ingress filtering to prevent IP spoofing).\n\n### Man-in-the-Middle (MITM) / On-Path Attacks\n\nThe attacker positions themselves between two communicating parties to intercept, modify, or inject traffic. Implemented via ARP poisoning, DNS spoofing, or rogue Wi-Fi. Mitigation: TLS/HTTPS, certificate pinning, mutual authentication, HSTS.\n\n### Replay Attacks\n\nCapturing valid authentication data (tokens, hashes, packets) and retransmitting it to gain unauthorized access. Mitigation: timestamps, nonces, session tokens, challenge-response protocols.\n\n### Other Network Attacks\n\n- **BGP hijacking**, Manipulating internet routing tables to redirect traffic through attacker-controlled networks.\n- **Wireless deauthentication**, Sending forged deauth frames to disconnect clients from a Wi-Fi network (precursor to evil twin attacks).\n- **On-path attack (formerly MITM)**, CompTIA now uses the term 'on-path attack' in place of man-in-the-middle.",
        "keyTerms": [
          "DNS cache poisoning",
          "DNS tunneling",
          "ARP poisoning",
          "MAC flooding",
          "VLAN hopping",
          "SYN flood",
          "DDoS",
          "amplification attack",
          "on-path/MITM attack",
          "replay attack",
          "DNSSEC",
          "Dynamic ARP Inspection",
          "port security"
        ],
        "examples": [
          "Users reach a fake banking site despite typing the correct URL, DNS cache poisoning. The resolver's cache has fraudulent records. Fix: implement DNSSEC to authenticate DNS responses.",
          "Thousands of SYN packets from spoofed IPs overwhelm a web server, SYN flood DDoS. The half-open connection table fills up. Fix: SYN cookies, rate limiting, anti-DDoS service."
        ],
        "tips": [
          "DNS poisoning = fake DNS responses in cache. ARP poisoning = fake MAC-to-IP mapping. Both enable MITM. Know which layer each operates at (DNS = application, ARP = data link).",
          "SYN flood = TCP handshake abuse. Amplification = small query → huge response to victim. Smurf = ICMP broadcast with spoofed source. Each has a distinct mechanism.",
          "CompTIA uses 'on-path attack' instead of 'man-in-the-middle.' Same concept, new terminology. Look for this in exam questions."
        ]
      },
      {
        "id": 12,
        "slug": "password-attacks",
        "title": "Password Attacks",
        "studyPath": "/study#password-attacks",
        "content": "## Password Attacks\n\nPasswords remain the most common authentication mechanism and the most frequently attacked. Understanding attack methods and defenses is critical for SY0-701.\n\n### Attack Types\n\n- **Brute force**, Systematically trying every possible combination of characters. Effective against short, simple passwords. Mitigated by account lockout policies, rate limiting, and complex password requirements.\n- **Dictionary attack**, Uses a list of common words, phrases, and known passwords. Faster than brute force because it targets likely passwords first.\n- **Password spraying**, Tries one or two common passwords (e.g., 'Welcome1!', 'Summer2024!') against MANY accounts simultaneously. Effective because it avoids lockout thresholds (only 1-2 attempts per account). Harder to detect than brute force.\n- **Credential stuffing**, Uses username/password pairs from previous data breaches to attempt logins on other services. Exploits password reuse. Automated tools test millions of stolen credentials.\n- **Rainbow table attack**, Uses precomputed tables that map hash values back to plaintext passwords. Extremely fast lookup. Defeated by **salting**, adding random data to each password before hashing makes rainbow tables useless.\n- **Hybrid attack**, Combines dictionary words with modifications (appending numbers, symbols, capitalizing letters). Targets passwords like 'Password123!' or 'Summer2024#'.\n\n### Offline vs Online Attacks\n\n- **Online attack**, Attempting logins against a live system. Limited by network speed, account lockouts, and detection systems. Password spraying and credential stuffing are online attacks.\n- **Offline attack**, Attacker has obtained password hashes (from a database breach or captured NTLM hashes) and cracks them locally. No lockout limits, can try billions of combinations per second with GPU acceleration. Rainbow tables, brute force, and dictionary attacks on hashes are offline attacks.\n\n### Password Defenses\n\n- **Salting**, Adding unique random data to each password before hashing. Even identical passwords produce different hashes. Defeats rainbow tables and makes bulk cracking impractical.\n- **Key stretching**, Using algorithms like bcrypt, scrypt, Argon2, or PBKDF2 that are intentionally slow and computationally expensive. Makes brute-force attacks much slower.\n- **Account lockout policies**, Lock the account after N failed attempts. Mitigates brute force but can be exploited for denial of service.\n- **Password complexity requirements**, Minimum length (12+ characters recommended), character variety. NIST SP 800-63B now recommends long passphrases over complex short passwords.\n- **MFA**, Even if the password is compromised, the second factor prevents access.\n- **Password managers**, Generate and store unique, complex passwords for every service. Eliminates password reuse.\n- **Credential monitoring**, Services that check if organizational credentials appear in known breaches (e.g., Have I Been Pwned integration).",
        "keyTerms": [
          "brute force",
          "dictionary attack",
          "password spraying",
          "credential stuffing",
          "rainbow table",
          "salting",
          "key stretching",
          "bcrypt/PBKDF2",
          "offline vs online attack",
          "account lockout",
          "NIST SP 800-63B",
          "hybrid attack"
        ],
        "examples": [
          "SIEM shows 1-2 login attempts per account across 5,000 accounts using 'Welcome1!', this is password spraying. It avoids lockout thresholds. Fix: MFA, detect distributed login patterns, ban common passwords.",
          "Thousands of logins succeed using credentials from a third-party breach, credential stuffing exploiting password reuse. Fix: MFA, credential monitoring services, encourage password managers."
        ],
        "tips": [
          "Password spraying = few passwords against MANY accounts. Brute force = MANY passwords against one account. Credential stuffing = stolen pairs from OTHER sites. Know the distinctions.",
          "Rainbow tables are defeated by SALTING. Brute force is slowed by KEY STRETCHING (bcrypt/Argon2). Both are needed for proper password storage.",
          "NIST now recommends long passphrases (16+ chars) over complex short passwords. 'correct-horse-battery-staple' is stronger than 'P@s5w0rd!'. The exam may reference this shift."
        ]
      },
      {
        "id": 13,
        "slug": "social-engineering",
        "title": "Social Engineering",
        "studyPath": "/study#social-engineering",
        "content": "## Social Engineering\n\nSocial engineering exploits human psychology rather than technical vulnerabilities. It is the most common initial attack vector and is heavily tested on SY0-701.\n\n### Phishing Variants\n\n- **Phishing**, Mass emails impersonating trusted entities (banks, IT departments) to trick users into clicking malicious links, opening attachments, or entering credentials on fake sites.\n- **Spear phishing**, Targeted phishing aimed at a specific individual or group. The attacker researches the target's role, relationships, and interests to craft a convincing, personalized message.\n- **Whaling**, Spear phishing targeting senior executives (CEO, CFO, CTO). Often involves fake legal documents, board communications, or wire transfer requests.\n- **Business Email Compromise (BEC)**, The attacker compromises or spoofs an executive's email account to request urgent wire transfers or sensitive data. Often uses a domain that looks nearly identical to the real one (e.g., examp1e.com vs example.com).\n- **Vishing**, Voice phishing via phone calls. The attacker impersonates IT support, a bank, or law enforcement to extract information or credentials.\n- **Smishing**, SMS/text message phishing. Links in text messages lead to credential-harvesting sites or malware downloads.\n\n### Social Engineering Techniques\n\n- **Pretexting**, Creating a fabricated scenario (pretext) to manipulate someone. Example: calling the help desk pretending to be a manager to get a password reset.\n- **Impersonation**, Assuming the identity of a trusted person (colleague, vendor, authority figure).\n- **Watering hole attack**, Compromising a website frequently visited by the target group. Instead of attacking the target directly, the attacker infects a site they know the targets use.\n- **Typosquatting**, Registering domains similar to legitimate ones (e.g., gogle.com, amaz0n.com) to catch mistyped URLs.\n- **Influence campaigns**, Coordinated efforts to shape public opinion through social media, fake news, or disinformation. Used for political manipulation or brand damage.\n\n### Psychological Principles Exploited\n\n- **Authority**, People comply with requests from perceived authority figures.\n- **Urgency**, Creating time pressure prevents careful thinking ('Your account will be locked in 1 hour').\n- **Social proof**, 'Everyone else is doing it' pressure.\n- **Scarcity**, Limited availability creates pressure to act quickly.\n- **Familiarity/Trust**, Using personal details or established relationships to build trust.\n- **Fear/Intimidation**, Threatening consequences if the target doesn't comply.\n\n### Defenses\n\n- **Security awareness training**, Regular training with simulated phishing campaigns is the #1 defense.\n- **Email authentication**, SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), DMARC (Domain-based Message Authentication) to prevent email spoofing.\n- **Verification procedures**, Out-of-band verification for sensitive requests (call back on a known number, not the one provided in the email).\n- **Reporting mechanisms**, Easy-to-use 'Report Phishing' buttons in email clients.",
        "keyTerms": [
          "phishing",
          "spear phishing",
          "whaling",
          "BEC",
          "vishing",
          "smishing",
          "pretexting",
          "watering hole",
          "typosquatting",
          "SPF/DKIM/DMARC",
          "social proof",
          "authority/urgency"
        ],
        "examples": [
          "An attacker calls the help desk pretending to be a regional manager, referencing a real company event, this is pretexting + impersonation. Fix: verify identity through callback to a known number before performing password resets.",
          "An APT group researches executives on LinkedIn and Twitter, then sends personalized emails referencing recent events, this is spear phishing (or whaling if targeting C-level). Fix: executive-focused security training, email authentication (DMARC), and BEC detection tools."
        ],
        "tips": [
          "Phishing = mass emails. Spear phishing = targeted individual. Whaling = targeted executive. BEC = impersonating/compromising executive email. Know the hierarchy.",
          "Pretexting = creating a fake story/scenario. Impersonation = pretending to be someone else. They often go together but are distinct techniques.",
          "SPF verifies the sending server. DKIM verifies the message wasn't altered (digital signature). DMARC ties them together with a policy. All three together prevent email spoofing."
        ]
      },
      {
        "id": 14,
        "slug": "supply-chain-attacks",
        "title": "Supply Chain Attacks",
        "studyPath": "/study#supply-chain-attacks",
        "content": "## Supply Chain Attacks\n\nSupply chain attacks compromise a trusted vendor, supplier, or partner to infiltrate the ultimate target. Instead of attacking the target directly, the attacker poisons a component the target trusts.\n\n### Types of Supply Chain Attacks\n\n- **Software supply chain**, Injecting malicious code into a legitimate software product, update, or library. When the vendor distributes the compromised version, all customers are affected. Example: SolarWinds attack (malicious code in Orion platform updates).\n- **Hardware supply chain**, Tampering with hardware during manufacturing or shipping. Examples: implanting chips on server motherboards, modifying firmware on network devices, counterfeit components with backdoors.\n- **Service provider compromise**, Attacking a managed service provider (MSP) or cloud provider to gain access to their customers' environments.\n- **Open-source dependency attacks**, Compromising widely-used open-source libraries (npm packages, Python pip packages). Developers unknowingly include the malicious dependency in their applications.\n\n### Attack Vectors\n\n- **Build pipeline compromise**, Injecting code during the CI/CD build process. The source code may be clean, but the compiled output contains malware. The malicious code is signed with the vendor's legitimate certificate.\n- **Update mechanism hijacking**, Compromising the software update distribution channel. Users who install 'legitimate' updates receive malware.\n- **Dependency confusion**, Uploading a malicious package with the same name as an internal/private package to a public repository. Build systems may pull the public version instead.\n\n### Mitigations\n\n- **Vendor risk assessment**, Evaluate vendors' security posture before engagement and continuously.\n- **Software Bill of Materials (SBOM)**, Inventory of all components in a software product. Enables rapid identification of affected systems when a vulnerability is discovered.\n- **Code signing verification**, Verify digital signatures on all software and updates.\n- **Trusted supply chain validation**, Verify hardware and software integrity at each stage.\n- **Supplier diversity**, Avoid single points of failure by using multiple vendors for critical components.\n- **Contractual security requirements**, SLAs, security audits, breach notification requirements in vendor contracts.\n- **Dependency scanning**, Automated tools that check open-source dependencies for known vulnerabilities (e.g., Dependabot, Snyk).",
        "keyTerms": [
          "supply chain attack",
          "SolarWinds",
          "SBOM",
          "dependency confusion",
          "build pipeline",
          "code signing",
          "vendor risk assessment",
          "MSP compromise",
          "hardware tampering",
          "open-source dependency"
        ],
        "examples": [
          "A build pipeline is compromised, malicious code is inserted and signed with the vendor's legitimate certificate. All downstream customers receive the trojanized update. The SolarWinds attack followed this exact pattern.",
          "An attacker uploads a malicious 'internal-utils' package to npm public registry. The company's build system pulls the public version instead of the private one, dependency confusion. Fix: configure package managers to prioritize private registries."
        ],
        "tips": [
          "Supply chain attacks are devastating because they exploit TRUST. The victim trusts the vendor, so they install the compromised update without suspicion.",
          "SBOM (Software Bill of Materials) is the key answer for 'how to identify affected systems when a dependency has a vulnerability.' Think of it as an ingredient list for software.",
          "If the question mentions 'trusted vendor's update contains malware' or 'compromised build pipeline,' it's a supply chain attack."
        ]
      },
      {
        "id": 15,
        "slug": "threat-intelligence",
        "title": "Threat Intelligence",
        "studyPath": "/study#threat-intelligence",
        "content": "## Threat Intelligence\n\nThreat intelligence is evidence-based knowledge about existing or emerging threats that helps organizations make informed security decisions. It transforms raw data into actionable information.\n\n### Intelligence Types\n\n- **Strategic intelligence**, High-level, non-technical. For executives and board members. Covers threat landscape trends, geopolitical risks, industry-specific threats. Informs business decisions and budget allocation.\n- **Tactical intelligence**, TTPs (Tactics, Techniques, and Procedures) used by threat actors. For security architects and engineers. Informs defense design and detection rule creation.\n- **Operational intelligence**, Details about specific attacks: who, what, when, where. For SOC analysts and incident responders. Includes campaign details, attack timing, and target information.\n- **Technical intelligence**, Specific IOCs (Indicators of Compromise): IP addresses, domain names, file hashes, URLs, email addresses. For automated security tools (SIEM, firewall, IDS). Shortest lifespan, IOCs change rapidly.\n\n### Threat Intelligence Frameworks\n\n- **MITRE ATT&CK**, A comprehensive knowledge base of adversary tactics and techniques based on real-world observations. Organized in a matrix: Tactics (columns) = the 'why' (e.g., Initial Access, Persistence, Lateral Movement). Techniques (rows) = the 'how' (e.g., Phishing, DLL Side-Loading). Used for threat modeling, detection gap analysis, and red team planning.\n- **Cyber Kill Chain (Lockheed Martin)**, Seven-stage model of a cyberattack: Reconnaissance → Weaponization → Delivery → Exploitation → Installation → Command & Control → Actions on Objectives. Used to identify where defenses can disrupt the attack.\n- **Diamond Model**, Analyzes intrusions using four features: Adversary, Capability, Infrastructure, Victim. Useful for tracking relationships between threat actors and their tools.\n\n### Sharing Frameworks\n\n- **STIX (Structured Threat Information eXpression)**, Standardized language (JSON format) for expressing threat intelligence: IOCs, TTPs, threat actors, campaigns, vulnerabilities.\n- **TAXII (Trusted Automated eXchange of Intelligence Information)**, Transport protocol for sharing STIX data between organizations. Supports push (collection) and pull (channel) models.\n- **OpenIOC**, Open framework for describing IOCs in a machine-readable XML format.\n\n### Intelligence Sources\n\n- **OSINT (Open Source Intelligence)**, Publicly available information: news, social media, forums, government advisories, CVE databases.\n- **ISACs (Information Sharing and Analysis Centers)**, Industry-specific organizations for sharing threat intelligence (Financial Services ISAC, Healthcare ISAC, etc.).\n- **Dark web monitoring**, Monitoring underground forums and markets for stolen credentials, planned attacks, or data breaches.\n- **Vendor threat feeds**, Commercial intelligence from security vendors (CrowdStrike, Mandiant, Recorded Future).\n\n### Threat Actors\n\n- **Nation-state (APT)**, Government-sponsored. Highest capability. Motivation: espionage, disruption, influence. Examples: APT28 (Russia), APT41 (China).\n- **Organized crime**, Financially motivated. Ransomware, fraud, data theft.\n- **Hacktivists**, Politically or ideologically motivated. Website defacement, DDoS, data leaks.\n- **Insider threats**, Current/former employees. Motivation: financial gain, revenge, negligence.\n- **Script kiddies**, Low skill. Use existing tools and exploits without deep understanding.",
        "keyTerms": [
          "MITRE ATT&CK",
          "Cyber Kill Chain",
          "Diamond Model",
          "STIX",
          "TAXII",
          "IOC",
          "TTP",
          "OSINT",
          "ISAC",
          "APT/nation-state",
          "strategic/tactical/operational/technical intel",
          "threat actor types"
        ],
        "examples": [
          "SOC team classifies an APT's TTPs using MITRE ATT&CK matrix, mapping specific techniques to detection rules helps identify gaps in current defenses and prioritize new detections.",
          "CISO wants to automatically share threat data with industry peers, use STIX (format) + TAXII (transport) for machine-readable, automated intelligence sharing through the sector's ISAC."
        ],
        "tips": [
          "MITRE ATT&CK = TTP matrix (adversary behaviors). Cyber Kill Chain = attack stages (reconnaissance → actions). Diamond Model = adversary-capability-infrastructure-victim relationships.",
          "STIX = the FORMAT (what the data looks like). TAXII = the TRANSPORT (how it's shared). They work together. Always select 'STIX and TAXII' when the question asks about standardized sharing.",
          "Nation-state = most capable, espionage-focused. Organized crime = money-motivated. Hacktivist = ideology. Script kiddie = low skill. The exam tests matching motivation to actor type."
        ]
      },
      {
        "id": 16,
        "slug": "vulnerability-scanning",
        "title": "Vulnerability Scanning",
        "studyPath": "/study#vulnerability-scanning",
        "content": "## Vulnerability Scanning\n\nVulnerability scanning is the automated process of identifying security weaknesses in systems, applications, and network devices. It is a core component of a vulnerability management program.\n\n### Scan Types\n\n- **Credentialed (authenticated) scan**, Uses domain or local credentials to log into systems during the scan. Provides the MOST comprehensive results because it can examine installed software, configurations, registry settings, patch levels, and file permissions from inside the system. Always preferred over non-credentialed scans.\n- **Non-credentialed (unauthenticated) scan**, Scans from outside without credentials. Sees only what's externally visible (open ports, exposed services, banner information). Simulates an external attacker's perspective. More false negatives.\n- **Internal scan**, Run from inside the network. Finds vulnerabilities visible to insiders or compromised internal systems.\n- **External scan**, Run from outside the network perimeter. Identifies vulnerabilities visible from the internet.\n- **Agent-based scan**, Lightweight agent installed on endpoints reports vulnerabilities continuously. Better for remote/mobile devices.\n- **Passive scan**, Monitors network traffic for vulnerability indicators without sending any packets. Non-intrusive but less comprehensive.\n\n### CVSS (Common Vulnerability Scoring System)\n\nCVSS v3.1 provides a standardized score (0-10) for vulnerability severity.\n\n**Base metrics:**\n- **Attack Vector (AV)**, Network (N), Adjacent (A), Local (L), Physical (P). Network = remotely exploitable (most severe).\n- **Attack Complexity (AC)**, Low (L) or High (H). Low = no special conditions needed.\n- **Privileges Required (PR)**, None (N), Low (L), High (H).\n- **User Interaction (UI)**, None (N) or Required (R).\n- **Scope (S)**, Unchanged (U) or Changed (C). Changed = impact extends beyond the vulnerable component.\n- **CIA Impact**, Confidentiality, Integrity, Availability each rated None/Low/High.\n\nA score of 9.8 typically means: AV:N/AC:L/PR:N/UI:N, remotely exploitable, no complexity, no privileges, no user interaction.\n\n### Vulnerability Assessment vs Penetration Test\n\n| Vulnerability Assessment | Penetration Test |\n|---|---|\n| Identifies vulnerabilities | Exploits vulnerabilities |\n| Automated scanning | Manual + automated |\n| Broad coverage | Targeted, deep |\n| Low risk to systems | Higher risk (may cause disruption) |\n| Frequent (weekly/monthly) | Periodic (annually/quarterly) |\n| Reports what COULD be exploited | Proves what CAN be exploited |\n\n### Vulnerability Management Lifecycle\n\n1. **Discovery**, Identify all assets and their configurations.\n2. **Scanning**, Run vulnerability scans against discovered assets.\n3. **Analysis**, Prioritize findings based on CVSS score, asset criticality, exposure, and exploitability.\n4. **Remediation**, Patch, reconfigure, or apply compensating controls.\n5. **Verification**, Re-scan to confirm vulnerabilities are fixed.\n6. **Reporting**, Document findings, actions taken, and remaining risk.\n\n### Key Concepts\n\n- **False positive**, Scanner reports a vulnerability that doesn't actually exist. Wastes analyst time.\n- **False negative**, Scanner misses a real vulnerability. More dangerous than false positives.\n- **Zero-day vulnerability**, A vulnerability unknown to the vendor with no available patch. Cannot be detected by signature-based scanning.\n- **CVE (Common Vulnerabilities and Exposures)**, Standardized identifier for publicly known vulnerabilities (e.g., CVE-2021-44228 = Log4Shell).",
        "keyTerms": [
          "credentialed vs non-credentialed scan",
          "CVSS",
          "Attack Vector/Complexity",
          "CVE",
          "false positive/negative",
          "zero-day",
          "vulnerability assessment vs penetration test",
          "internal vs external scan",
          "agent-based scan",
          "vulnerability management lifecycle"
        ],
        "examples": [
          "A CVSS 9.8 vulnerability on an internal-only database: while the base score is critical, the environmental score should consider that it has no internet exposure. Prioritize based on both CVSS and actual exposure/asset criticality.",
          "Choosing between scan types: credentialed scan with domain read-only access gives comprehensive internal visibility (patch levels, configs). Non-credentialed scan shows only what's externally visible."
        ],
        "tips": [
          "Credentialed scan = MOST comprehensive (logs in, sees everything inside). Non-credentialed = external attacker view only. The exam always asks which gives BETTER results.",
          "CVSS base score alone doesn't determine patching priority. Consider: asset criticality, internet exposure, compensating controls, and whether an exploit exists in the wild.",
          "Vulnerability assessment = IDENTIFY weaknesses (scan). Penetration test = EXPLOIT weaknesses (attack). Assessment is broader; pentest is deeper. Know the distinction."
        ]
      }
    ]
  },
  {
    "id": 3,
    "key": "security-architecture",
    "name": "Security Architecture",
    "weightPct": 18,
    "topics": [
      {
        "id": 17,
        "slug": "cloud-security",
        "title": "Cloud Security",
        "studyPath": "/study#cloud-security",
        "content": "## Cloud Security\n\nCloud computing delivers IT resources over the internet. Understanding cloud models, the shared responsibility model, and cloud-specific security controls is essential for SY0-701.\n\n### Cloud Service Models\n\n- **IaaS (Infrastructure as a Service)**, Provider supplies compute, storage, networking. Customer manages OS, middleware, applications, data. Example: AWS EC2, Azure VMs.\n- **PaaS (Platform as a Service)**, Provider manages infrastructure + OS + runtime. Customer manages applications and data. Example: AWS Elastic Beanstalk, Azure App Service.\n- **SaaS (Software as a Service)**, Provider manages everything except user data and access. Customer configures users and data policies. Example: Microsoft 365, Salesforce.\n\n### Cloud Deployment Models\n\n- **Public cloud**, Resources shared among multiple tenants (AWS, Azure, GCP).\n- **Private cloud**, Dedicated to one organization. On-premises or hosted.\n- **Hybrid cloud**, Combination of public and private, with orchestration between them.\n- **Community cloud**, Shared among organizations with common requirements (government, healthcare).\n\n### Shared Responsibility Model\n\nThe provider and customer share security responsibilities. The division depends on the service model:\n- **IaaS**: Customer responsible for OS, applications, data, network controls. Provider handles physical, hypervisor.\n- **PaaS**: Customer responsible for applications and data. Provider handles everything below.\n- **SaaS**: Customer responsible for data, user access, and configuration. Provider handles almost everything else.\n\n**Key rule**: The customer is ALWAYS responsible for their data and user access management, regardless of the model.\n\n### Cloud Security Controls\n\n- **CASB (Cloud Access Security Broker)**, Policy enforcement between users and cloud services. Provides visibility into shadow IT, DLP, threat protection, and access control across all cloud applications.\n- **CSPM (Cloud Security Posture Management)**, Continuously monitors cloud infrastructure configurations for misconfigurations and compliance violations (e.g., open S3 buckets, overly permissive security groups).\n- **CWPP (Cloud Workload Protection Platform)**, Secures workloads (VMs, containers, serverless) across cloud environments.\n\n### Container Security\n\n- Use minimal/hardened base images\n- Scan images for vulnerabilities before deployment\n- Run containers as non-root users\n- Implement network policies between pods (Kubernetes)\n- Use container runtime security monitoring\n- Enforce image signing and registry access controls\n\n### Serverless & Microservices\n\n- **Serverless (FaaS)**, Functions execute on demand without managing servers. Security: input validation, least-privilege IAM roles, dependency scanning.\n- **Microservices**, Application split into small, independent services. Security: API gateway, mutual TLS between services, service mesh.",
        "keyTerms": [
          "IaaS/PaaS/SaaS",
          "shared responsibility model",
          "CASB",
          "CSPM",
          "CWPP",
          "public/private/hybrid cloud",
          "container security",
          "serverless",
          "microservices",
          "shadow IT"
        ],
        "examples": [
          "A SaaS HR application: under shared responsibility, the customer is still responsible for user access management (who has access, MFA enforcement, role assignments) and data governance. The provider handles infrastructure, patching, and availability.",
          "Kubernetes deployment security baseline: scan images for CVEs, enforce non-root containers, use network policies to restrict pod-to-pod communication, enable audit logging, use RBAC for cluster access."
        ],
        "tips": [
          "In shared responsibility, the customer ALWAYS owns data and identity/access, even in SaaS. This is the #1 tested concept for cloud questions.",
          "CASB = visibility + policy for cloud apps (shadow IT). CSPM = configuration compliance (misconfigs). CWPP = workload protection. Know which solves which problem.",
          "IaaS = you manage the most. SaaS = you manage the least. PaaS = middle ground. More control = more responsibility."
        ]
      },
      {
        "id": 18,
        "slug": "firewalls-ids-ips",
        "title": "Firewalls and IDS/IPS",
        "studyPath": "/study#firewalls-ids-ips",
        "content": "## Firewalls and IDS/IPS\n\nFirewalls and intrusion detection/prevention systems are fundamental network security controls. The SY0-701 exam tests your understanding of their types, capabilities, and limitations.\n\n### Firewall Types\n\n- **Packet filtering (stateless)**, Examines individual packets against ACL rules (source/destination IP, port, protocol). Fast but no session awareness. Cannot inspect application content.\n- **Stateful inspection**, Tracks the state of active connections. Understands that a response packet belongs to an established session. More secure than stateless.\n- **Application layer (proxy) firewall**, Operates at Layer 7. Inspects application content (HTTP headers, payloads). Can filter by URL, content type, and application behavior. Slower but most thorough.\n- **Next-Generation Firewall (NGFW)**, Combines stateful inspection + deep packet inspection + application awareness + IPS + threat intelligence. The modern enterprise standard.\n- **Web Application Firewall (WAF)**, Specifically protects web applications from Layer 7 attacks: SQL injection, XSS, CSRF, and other OWASP Top 10 threats. Can inspect HTTPS traffic (with TLS termination). Deployed as reverse proxy in front of web servers.\n\n### IDS vs IPS\n\n| Feature | IDS (Detection) | IPS (Prevention) |\n|---|---|---|\n| Placement | Passive (monitors copy of traffic) | Inline (traffic passes through it) |\n| Action | Alerts only | Blocks malicious traffic |\n| Risk | No impact on traffic flow | Can block legitimate traffic (false positive) |\n| Failure mode | Traffic continues unmonitored | Can cause outage if it fails closed |\n\n### Detection Methods\n\n- **Signature-based**, Matches traffic against a database of known attack patterns. Fast and accurate for known threats. Cannot detect zero-day attacks or novel techniques.\n- **Anomaly-based (behavioral)**, Establishes a baseline of normal behavior and alerts on deviations. Can detect unknown attacks. Higher false positive rate. Requires training period.\n- **Heuristic**, Uses rules and algorithms to identify suspicious behavior patterns. Middle ground between signature and anomaly.\n\n### Alert Types\n\n- **True positive**, Correctly identifies an actual attack. Desired outcome.\n- **False positive**, Incorrectly flags legitimate traffic as malicious. Wastes analyst time, causes alert fatigue.\n- **True negative**, Correctly identifies legitimate traffic. Desired outcome.\n- **False negative**, Misses an actual attack. Most dangerous, the threat goes undetected.\n\n### Deployment\n\n- **NIDS/NIPS**, Network-based. Monitors network traffic via span port or network tap.\n- **HIDS/HIPS**, Host-based. Installed on individual endpoints. Monitors system files, logs, and processes.",
        "keyTerms": [
          "stateful vs stateless firewall",
          "NGFW",
          "WAF",
          "IDS vs IPS",
          "signature-based",
          "anomaly-based",
          "false positive/negative",
          "NIDS/HIDS",
          "deep packet inspection",
          "alert fatigue"
        ],
        "examples": [
          "IDS alerts on 'SELECT * FROM' in HTTP traffic, legitimate DB admin tools trigger it too. This is a false positive. Fix: tune the signature to exclude known-good source IPs, or switch to anomaly-based detection for better context.",
          "Protecting an e-commerce site from OWASP Top 10 attacks (SQLi, XSS): a WAF is the answer, it operates at Layer 7, understands HTTP/HTTPS, and can block application-layer attacks that network firewalls miss."
        ],
        "tips": [
          "IDS = passive, alerts only. IPS = inline, blocks traffic. WAF = web-app specific, Layer 7. NGFW = everything combined. Know which to recommend for each scenario.",
          "False positive = crying wolf (alert but no attack). False negative = missed attack (no alert but real attack). False negatives are MORE dangerous because the threat goes undetected.",
          "Signature-based = known threats only. Anomaly-based = can detect unknown threats but more false positives. The exam asks which detects zero-day attacks, anomaly-based."
        ]
      },
      {
        "id": 19,
        "slug": "network-segmentation",
        "title": "Network Segmentation",
        "studyPath": "/study#network-segmentation",
        "content": "## Network Segmentation\n\nNetwork segmentation divides a network into smaller, isolated segments to limit lateral movement, contain breaches, and enforce access controls. It is a core defense-in-depth strategy.\n\n### Key Concepts\n\n- **DMZ (Demilitarized Zone)**, A network segment between the internet and the internal network. Hosts public-facing services (web servers, email gateways, DNS servers) that need internet access but must be isolated from internal systems. Traffic flows: Internet → DMZ (allowed), DMZ → Internal (restricted), Internet → Internal (blocked).\n- **Intranet**, Internal network accessible only to employees. Contains internal applications, file servers, databases.\n- **Extranet**, Controlled network access extended to external partners, vendors, or customers. Limited access to specific resources.\n\n### Segmentation Technologies\n\n- **VLANs (Virtual LANs)**, Logically separate broadcast domains on the same physical switch. Devices in different VLANs cannot communicate without a router or Layer 3 switch with ACLs. VLANs alone are NOT sufficient security, they need firewall rules between them.\n- **Subnets**, IP address-based network divisions. Combined with routing and firewall rules for segmentation.\n- **Micro-segmentation**, Granular segmentation at the workload or application level. Each server or service has its own security policy. Used in Zero Trust architectures and cloud environments (e.g., VMware NSX, cloud security groups).\n- **Air gap**, Complete physical separation. No network connection between segments. Used for the most sensitive systems (classified military, industrial control systems). Most secure but least convenient.\n- **Jump server (bastion host)**, A hardened intermediary system that administrators must connect through to access internal systems. All admin access is funneled through this single, heavily monitored point.\n\n### Defense-in-Depth Network Zones\n\nTypical enterprise network zones (outer to inner):\n1. **Internet**, Untrusted.\n2. **DMZ**, Public-facing services.\n3. **Internal user zone**, Employee workstations.\n4. **Application zone**, Internal application servers.\n5. **Data zone**, Databases and sensitive storage (most restricted).\n6. **Management zone**, Network infrastructure management (switches, routers, firewalls).\n\nEach zone boundary is controlled by firewalls with rules that permit only necessary traffic.\n\n### East-West vs North-South Traffic\n\n- **North-South**, Traffic entering or leaving the network (internet ↔ internal). Controlled by perimeter firewalls.\n- **East-West**, Traffic moving laterally within the network (server ↔ server). Traditional perimeter security misses this. Micro-segmentation and internal firewalls are needed to control east-west traffic.",
        "keyTerms": [
          "DMZ",
          "VLAN",
          "micro-segmentation",
          "air gap",
          "jump server/bastion host",
          "defense-in-depth",
          "east-west vs north-south",
          "intranet/extranet",
          "network zones",
          "subnet"
        ],
        "examples": [
          "PBQ: Place web server → DMZ, ERP database → secure data zone, workstations → user zone, email gateway → DMZ. Each zone has firewall rules: DMZ cannot initiate connections to the data zone; only the application zone can query the database.",
          "A hospital isolates IoT medical devices on a dedicated VLAN with firewall rules blocking all traffic to the EHR server, micro-segmentation limits the blast radius of a compromised device."
        ],
        "tips": [
          "DMZ is ALWAYS the answer for 'where to place a public-facing web server.' The DMZ is accessible from the internet but isolated from internal systems.",
          "Air gap = most secure isolation (physically disconnected). Jump server = controlled access point for admins. Micro-segmentation = workload-level isolation.",
          "East-west traffic (lateral movement) is the #1 post-breach concern. Micro-segmentation is the answer for 'how to limit lateral movement within the network.'"
        ]
      },
      {
        "id": 20,
        "slug": "secure-coding",
        "title": "Secure Coding",
        "studyPath": "/study#secure-coding",
        "content": "## Secure Coding\n\nSecure coding practices integrate security into the software development lifecycle (SDLC) to prevent vulnerabilities from reaching production.\n\n### Security Testing Methods\n\n- **SAST (Static Application Security Testing)**, Analyzes source code, bytecode, or binary WITHOUT executing the application. Scans for vulnerabilities like SQL injection patterns, hardcoded credentials, buffer overflow-prone functions, and insecure configurations. Runs early in development (shift-left). High false positive rate but catches issues before deployment.\n- **DAST (Dynamic Application Security Testing)**, Tests the running application from the outside, simulating an attacker. Sends malicious inputs and observes responses. Finds runtime vulnerabilities that SAST cannot detect. No access to source code needed.\n- **IAST (Interactive Application Security Testing)**, Combines SAST and DAST. Instruments the application to observe behavior during testing. Lower false positive rate.\n- **SCA (Software Composition Analysis)**, Scans open-source dependencies and third-party libraries for known vulnerabilities (CVEs). Essential for supply chain security.\n- **Fuzzing**, Sends random, malformed, or unexpected input to the application to find crashes, memory leaks, and unhandled exceptions. Discovers edge-case vulnerabilities.\n\n### Secure SDLC Practices\n\n- **Input validation**, Validate all user input on the server side. Reject unexpected characters, enforce data types, and limit input length. The #1 defense against injection attacks.\n- **Output encoding**, Encode all output displayed in web pages to prevent XSS.\n- **Parameterized queries**, Use prepared statements for database queries to prevent SQL injection.\n- **Least privilege**, Application service accounts should have minimum necessary permissions.\n- **Error handling**, Never expose stack traces, database errors, or internal paths to users. Display generic error messages.\n- **Code review**, Peer review of all code changes before merging. Catches logic errors and security issues.\n- **Secure defaults**, Applications should be secure out of the box. Security features enabled by default.\n\n### DevSecOps\n\nIntegrating security into the DevOps CI/CD pipeline:\n- SAST in the build phase\n- SCA for dependency checking\n- DAST in the staging/testing phase\n- Container image scanning before deployment\n- Infrastructure as Code (IaC) scanning for misconfigurations\n- Automated security gates (fail the build if critical vulnerabilities found)",
        "keyTerms": [
          "SAST",
          "DAST",
          "IAST",
          "SCA",
          "fuzzing",
          "input validation",
          "parameterized queries",
          "output encoding",
          "DevSecOps",
          "shift-left",
          "code review",
          "secure defaults"
        ],
        "examples": [
          "Integrating security into CI/CD: SAST scans code at commit, SCA checks dependencies, DAST tests the deployed staging app, container images are scanned before production push. This is DevSecOps, shift-left security.",
          "A code review catches a function that concatenates user input directly into a SQL query, this is an SQL injection vulnerability. Fix: replace with parameterized queries (prepared statements)."
        ],
        "tips": [
          "SAST = analyzes code WITHOUT running it (white-box). DAST = tests running app FROM OUTSIDE (black-box). The exam loves asking which does what.",
          "Input validation = server-side defense against injection. Output encoding = defense against XSS. Parameterized queries = defense against SQLi. Memorize these pairings.",
          "Fuzzing finds UNEXPECTED vulnerabilities by sending random input. It's the answer when the question asks about discovering edge-case bugs or unhandled exceptions."
        ]
      },
      {
        "id": 21,
        "slug": "secure-protocols",
        "title": "Secure Protocols",
        "studyPath": "/study#secure-protocols",
        "content": "## Secure Protocols\n\nKnowing which protocols are secure and which should be replaced is critical for SY0-701. The exam tests your ability to identify insecure protocols and recommend their secure alternatives.\n\n### Insecure → Secure Protocol Mappings\n\n| Insecure Protocol | Port | Secure Replacement | Port | Why |\n|---|---|---|---|---|\n| Telnet | 23 | SSH | 22 | Telnet sends everything in cleartext |\n| FTP | 20/21 | SFTP (SSH-based) or FTPS | 22 / 989-990 | FTP credentials in cleartext |\n| HTTP | 80 | HTTPS (HTTP + TLS) | 443 | HTTP traffic unencrypted |\n| SNMP v1/v2c | 161/162 | SNMPv3 | 161/162 | v1/v2c use community strings in cleartext |\n| SMTP (unencrypted) | 25 | SMTP with STARTTLS or SMTPS | 587/465 | Email content and credentials exposed |\n| POP3 | 110 | POP3S (POP3 + TLS) | 995 | Credentials in cleartext |\n| IMAP | 143 | IMAPS (IMAP + TLS) | 993 | Credentials in cleartext |\n| LDAP | 389 | LDAPS (LDAP + TLS) | 636 | Directory queries in cleartext |\n| RDP (unencrypted) | 3389 | RDP with NLA + TLS | 3389 | Credentials exposed without NLA |\n\n### Important Secure Protocols\n\n- **TLS 1.2 / TLS 1.3**, Current standards for encrypting communications. TLS 1.3 removes legacy ciphers and reduces handshake latency. SSL (all versions) and TLS 1.0/1.1 are deprecated.\n- **SSH (Secure Shell)**, Encrypted remote terminal access, file transfer (SFTP/SCP), and tunneling. Replaces Telnet. Uses public-key or password authentication.\n- **IPsec**, Encrypts IP-layer traffic. Two modes: Transport (encrypts payload only, host-to-host) and Tunnel (encrypts entire packet, gateway-to-gateway/VPN). Protocols: AH (Authentication Header, integrity only) and ESP (Encapsulating Security Payload, encryption + integrity).\n- **DNSSEC**, Adds digital signatures to DNS records to prevent cache poisoning. Provides integrity and authentication but NOT confidentiality.\n- **S/MIME**, Secure email using certificates for encryption and digital signatures.\n- **SRTP**, Secure Real-time Transport Protocol for encrypted voice/video communications (VoIP).\n\n### Protocols to Disable/Replace\n\nOn a hardened system, disable:\n- Telnet, FTP, SNMP v1/v2c, SSL/TLS 1.0/1.1, TFTP, rlogin, rsh\n- Unencrypted versions of any protocol where encrypted alternatives exist\n\n### Common Port Numbers (Must Know)\n\nHTTP: 80, HTTPS: 443, SSH/SFTP: 22, FTP: 20/21, Telnet: 23, SMTP: 25, DNS: 53, DHCP: 67/68, TFTP: 69, POP3: 110, IMAP: 143, SNMP: 161, LDAP: 389, LDAPS: 636, SMTPS: 465/587, POP3S: 995, IMAPS: 993, RDP: 3389, Kerberos: 88, RADIUS: 1812/1813, TACACS+: 49",
        "keyTerms": [
          "TLS 1.2/1.3",
          "SSH",
          "IPsec (AH/ESP)",
          "DNSSEC",
          "S/MIME",
          "SFTP vs FTPS",
          "SNMPv3",
          "LDAPS",
          "common port numbers",
          "deprecated protocols"
        ],
        "examples": [
          "Hardening a switch: disable Telnet (use SSH), disable SNMP v1/v2c (use SNMPv3 with authentication and encryption), disable HTTP management (use HTTPS), disable unused services.",
          "Legacy Telnet management interface flagged in audit: Telnet transmits credentials and commands in cleartext. Replace with SSH (port 22) which encrypts the entire session."
        ],
        "tips": [
          "Memorize the insecure → secure mappings: Telnet→SSH, FTP→SFTP, HTTP→HTTPS, SNMPv1→v3, LDAP→LDAPS. The exam will ask 'which protocol to use instead of X.'",
          "Know your port numbers. The exam gives scenarios where you identify the protocol by its port number (e.g., 'traffic on port 22' = SSH, 'port 443' = HTTPS).",
          "IPsec ESP provides encryption + integrity. IPsec AH provides integrity only (no encryption). ESP is almost always the correct answer for VPN encryption."
        ]
      },
      {
        "id": 22,
        "slug": "virtualization",
        "title": "Virtualization",
        "studyPath": "/study#virtualization",
        "content": "## Virtualization\n\nVirtualization creates abstracted, software-defined versions of physical resources (servers, storage, networks). Understanding virtualization security is essential as organizations rely heavily on virtual infrastructure.\n\n### Hypervisor Types\n\n- **Type 1 (Bare-metal)**, Runs directly on hardware. No underlying OS. More secure and performant. Examples: VMware ESXi, Microsoft Hyper-V, Citrix Xen. Used in enterprise data centers and cloud providers.\n- **Type 2 (Hosted)**, Runs on top of a host OS. Less secure (depends on host OS security). Examples: VMware Workstation, VirtualBox, Parallels. Used for development and testing.\n\n### Virtualization Security Concepts\n\n- **VM escape**, The most critical virtualization threat. An attacker exploits a vulnerability in a VM to break out of the virtual environment and gain access to the hypervisor or other VMs on the same host. Compromises all VMs on that host.\n- **VM sprawl**, Uncontrolled proliferation of VMs that are forgotten, unpatched, or unused. Creates security blind spots, unmonitored VMs may have outdated software and unpatched vulnerabilities.\n- **Resource reuse / Data remnants**, When a VM is deleted or migrated, residual data may remain on the physical storage. Proper sanitization is required to prevent data leakage between tenants.\n\n### Container vs VM Security\n\n| VMs | Containers |\n|---|---|\n| Full OS per instance | Share host OS kernel |\n| Stronger isolation (separate kernel) | Lighter isolation (namespace/cgroup) |\n| Larger attack surface per VM | Smaller attack surface per container |\n| Slower to deploy | Faster, ephemeral |\n| VM escape = hypervisor compromise | Container escape = host OS compromise |\n\n### Virtualization Security Best Practices\n\n- Keep hypervisors patched and hardened\n- Use Type 1 hypervisors for production workloads\n- Implement VM lifecycle management (prevent sprawl)\n- Use virtual firewalls and network segmentation between VMs\n- Monitor VM resource usage for anomalies\n- Encrypt VM disks and snapshots\n- Apply least privilege to hypervisor management access\n- Implement integrity monitoring for VM images\n\n### Infrastructure as Code (IaC)\n\n- **IaC**, Defining infrastructure (VMs, networks, storage) in code files (Terraform, CloudFormation, Ansible). Enables version control, repeatable deployments, and security scanning of configurations before deployment.\n- **Immutable infrastructure**, Instead of patching existing servers, deploy new ones from a verified image and destroy the old ones. Reduces configuration drift and ensures consistent security posture.",
        "keyTerms": [
          "Type 1 vs Type 2 hypervisor",
          "VM escape",
          "VM sprawl",
          "container vs VM",
          "container escape",
          "IaC",
          "immutable infrastructure",
          "data remnants",
          "virtual firewall",
          "namespace/cgroup"
        ],
        "examples": [
          "A VM interacts with memory addresses outside its allocated space, this is a VM escape attack. The attacker has broken out of the VM and can access the hypervisor and potentially all other VMs on the host.",
          "VM sprawl scenario: an audit discovers 200 VMs but only 120 are documented. The remaining 80 have outdated OS patches and no monitoring. Fix: implement VM lifecycle management, automated discovery, and regular audits."
        ],
        "tips": [
          "VM escape is THE critical virtualization threat. If a question describes breaking out of a VM to access the hypervisor or other VMs, the answer is VM escape.",
          "Type 1 = bare-metal, production, more secure. Type 2 = runs on host OS, dev/test, less secure. The exam tests this distinction.",
          "Containers share the host kernel (lighter isolation). VMs have separate kernels (stronger isolation). Container escape gives access to the host OS; VM escape gives access to the hypervisor."
        ]
      },
      {
        "id": 23,
        "slug": "vpn",
        "title": "VPN",
        "studyPath": "/study#vpn",
        "content": "## VPN (Virtual Private Network)\n\nA VPN creates an encrypted tunnel over a public network (internet) to provide secure remote access or connect geographically separated networks.\n\n### VPN Types\n\n- **Remote Access VPN**, Connects individual users to the corporate network from remote locations. The user's device runs a VPN client that establishes an encrypted tunnel to the VPN gateway.\n- **Site-to-Site VPN**, Connects two networks (e.g., headquarters to branch office) through a persistent encrypted tunnel between VPN gateways. Users don't need individual VPN clients.\n- **Always-on VPN**, VPN connection is established automatically whenever the device connects to any network. No user action required. Ensures all traffic is always protected.\n\n### VPN Protocols\n\n- **IPsec VPN**, Industry standard. Uses IKE (Internet Key Exchange) for authentication and key negotiation. Two modes:\n  - **Tunnel mode**, Encrypts the entire IP packet (header + payload). Used for site-to-site VPNs. Creates a new IP header.\n  - **Transport mode**, Encrypts only the payload. Original IP header remains. Used for host-to-host or remote access with IKEv2.\n- **IKEv2/IPsec**, Modern remote access VPN. Natively supported on most OSes (Windows, macOS, iOS, Android). Supports MOBIKE for seamless reconnection when switching networks (Wi-Fi ↔ cellular). The answer for 'native OS support without third-party clients.'\n- **SSL/TLS VPN**, Uses TLS (port 443) for remote access. Works through firewalls and proxies since it uses HTTPS port. Can be clientless (browser-based) or use a lightweight agent.\n- **WireGuard**, Modern, lightweight VPN protocol. Uses ChaCha20 encryption. Simpler configuration, better performance. Gaining enterprise adoption.\n- **L2TP/IPsec**, Layer 2 Tunneling Protocol wrapped in IPsec. Provides encryption (via IPsec) that L2TP alone lacks. Being replaced by IKEv2.\n\n### Split Tunneling vs Full Tunneling\n\n- **Full tunnel**, ALL traffic (corporate AND personal/internet) goes through the VPN. More secure (all traffic inspected) but slower (bandwidth bottleneck at VPN gateway).\n- **Split tunnel**, Only corporate traffic goes through the VPN; personal internet traffic goes directly to the internet. Better performance but less secure (personal traffic bypasses corporate security controls).\n\nThe choice depends on the organization's security requirements. High-security environments use full tunnel. Split tunnel is a compromise for user experience.\n\n### VPN vs ZTNA\n\nTraditional VPNs grant network-level access, once connected, users can potentially reach any resource on the network. ZTNA (Zero Trust Network Access) provides per-application access with continuous verification, offering better security and granularity. Many organizations are replacing VPNs with ZTNA.",
        "keyTerms": [
          "remote access vs site-to-site VPN",
          "IPsec tunnel vs transport mode",
          "IKEv2",
          "SSL/TLS VPN",
          "WireGuard",
          "split vs full tunnel",
          "always-on VPN",
          "ZTNA vs VPN",
          "L2TP/IPsec",
          "IKE"
        ],
        "examples": [
          "Remote workers complain about slow internet, all traffic routes through VPN (full tunnel). Switch to split tunnel: only corporate traffic goes through VPN, personal browsing goes direct. Trade-off: less security oversight of personal traffic.",
          "Need native OS VPN support without third-party clients: IKEv2/IPsec is built into Windows, macOS, iOS, and Android. Supports NAT traversal and MOBIKE for seamless network switching."
        ],
        "tips": [
          "Split tunnel = corporate traffic through VPN only (faster, less secure). Full tunnel = ALL traffic through VPN (slower, more secure). The exam tests which configuration a scenario describes.",
          "IPsec Tunnel mode = encrypts everything (site-to-site). Transport mode = encrypts payload only (host-to-host). Know the difference.",
          "IKEv2/IPsec = native OS support, good for mobile. SSL VPN = works through firewalls (port 443), browser-based option. Match the protocol to the scenario requirements."
        ]
      }
    ]
  },
  {
    "id": 4,
    "key": "security-operations",
    "name": "Security Operations",
    "weightPct": 28,
    "topics": [
      {
        "id": 24,
        "slug": "data-security",
        "title": "Data Security",
        "studyPath": "/study#data-security",
        "content": "## Data Security\n\nData security protects information throughout its lifecycle, from creation to destruction. The SY0-701 exam heavily tests data protection techniques, classifications, and DLP.\n\n### Data States\n\n- **Data at rest**, Stored on disk, database, backup media. Protection: full-disk encryption (BitLocker, FileVault), database encryption (TDE), file-level encryption.\n- **Data in transit**, Moving over a network. Protection: TLS/HTTPS, VPN (IPsec), SSH, encrypted email (S/MIME, PGP).\n- **Data in use**, Actively being processed in memory/CPU. Most difficult to protect. Emerging solutions: hardware enclaves (Intel SGX), homomorphic encryption.\n\n### Data Protection Techniques\n\n- **Tokenization**, Replaces sensitive data with a non-sensitive placeholder (token). The original data is stored in a secure vault. The token has no mathematical relationship to the original. Common for payment card data (PCI-DSS compliance).\n- **Data masking**, Obscures parts of data (e.g., showing only last 4 digits of SSN: ***-**-1234). Used in non-production environments and reports.\n- **Anonymization**, Permanently removes identifying information. Cannot be reversed. Used for research datasets.\n- **Pseudo-anonymization**, Replaces identifiers with artificial ones. CAN be reversed with the mapping key. GDPR recognizes this as a privacy technique but not full anonymization.\n- **Encryption**, Transforms data using cryptographic algorithms. Reversible with the correct key.\n\n### Data Loss Prevention (DLP)\n\nDLP systems monitor, detect, and block unauthorized data transfers.\n\n**Inspection methods:**\n- **Pattern matching (regex)**, Detects structured data patterns like credit card numbers (16 digits), SSNs (XXX-XX-XXXX), email addresses.\n- **Keyword matching**, Scans for specific words or phrases (e.g., 'confidential', 'top secret').\n- **Document fingerprinting**, Creates a hash-based fingerprint of sensitive documents. Detects when copies or modified versions are transmitted.\n- **Machine learning/statistical analysis**, Classifies data based on context and patterns.\n\n**DLP deployment points:** Network (email gateway, web proxy), Endpoint (agent on workstations), Cloud (CASB integration).\n\n### Data Classifications\n\n- **Public**, No impact if disclosed. Published marketing materials, public website content.\n- **Internal/Private**, For internal use. Minor impact if disclosed. Internal memos, org charts.\n- **Confidential**, Significant impact if disclosed. Financial data, employee PII, customer data.\n- **Restricted/Top Secret**, Severe impact if disclosed. Trade secrets, classified government data, encryption keys.\n\n### Data Lifecycle\n\nCreate → Store → Use → Share → Archive → Destroy. Security controls must be applied at every stage. Destruction methods: crypto-shredding (destroying encryption keys), degaussing (magnetic media), physical destruction (shredding), secure wipe (overwriting).",
        "keyTerms": [
          "data at rest/transit/use",
          "tokenization",
          "data masking",
          "anonymization",
          "DLP",
          "pattern matching",
          "document fingerprinting",
          "data classification",
          "crypto-shredding",
          "degaussing",
          "PII/PHI/PCI"
        ],
        "examples": [
          "DLP triggers on 16-digit sequences in an email attachment, pattern matching (regex) detected credit card number format. Even if the employee claims they're invoice numbers, the DLP policy correctly flagged the pattern for review.",
          "Credit cards stored as tokens (7291-xxxx-xxxx-3847) with originals in a secure vault, this is tokenization. The tokens are useless to attackers because they have no mathematical relationship to the real numbers."
        ],
        "tips": [
          "Tokenization = replace with token (vault stores original). Masking = hide parts of data. Anonymization = permanently remove identity (irreversible). Know the distinctions.",
          "DLP pattern matching = structured data (CC numbers, SSNs). Document fingerprinting = detecting copies of specific documents. The exam asks which method detected what.",
          "Data at rest = encrypt the disk. Data in transit = encrypt the connection (TLS/VPN). Data in use = hardest to protect (enclaves). Know protection methods for each state."
        ]
      },
      {
        "id": 25,
        "slug": "digital-forensics",
        "title": "Digital Forensics",
        "studyPath": "/study#digital-forensics",
        "content": "## Digital Forensics\n\nDigital forensics is the process of collecting, preserving, analyzing, and presenting digital evidence in a manner that is legally admissible. Proper forensic procedures ensure evidence integrity.\n\n### Key Forensic Principles\n\n- **Chain of custody**, Documented record of who handled evidence, when, where, and what they did with it. Any break in the chain can make evidence inadmissible in court. Must be maintained from collection through presentation.\n- **Evidence integrity**, The original evidence must not be modified. Verified using cryptographic hashes (SHA-256). Hash the original BEFORE and AFTER imaging. If hashes match, integrity is maintained.\n- **Legal hold**, An order to preserve all relevant data when litigation is anticipated. Overrides normal data retention/deletion policies.\n- **Non-repudiation**, The subject cannot deny their actions when evidence is properly collected and preserved.\n\n### Order of Volatility\n\nCollect the most volatile evidence first (lost soonest):\n1. **CPU registers/cache**, Lost immediately on power off\n2. **RAM**, Contains running processes, encryption keys, network connections\n3. **Network state**, Active connections, routing tables, ARP cache\n4. **Running processes**, Process trees, open files, loaded DLLs\n5. **Disk**, File system, logs, deleted files\n6. **Removable media**, USB drives, external storage\n7. **Archived/backup data**, Tapes, cloud backups (least volatile)\n\n### Forensic Process\n\n1. **Identification**, Determine what evidence exists and where it is located.\n2. **Collection**, Acquire evidence using proper forensic tools and procedures.\n3. **Preservation**, Protect evidence from alteration or destruction. Use write blockers, store in evidence bags.\n4. **Analysis**, Examine evidence to reconstruct events and establish timelines.\n5. **Reporting**, Document findings in a clear, factual report suitable for legal proceedings.\n6. **Presentation**, Present findings to management, legal, or court.\n\n### Forensic Tools & Techniques\n\n- **Write blocker**, Hardware or software that prevents any writes to the source drive during imaging. Essential for maintaining evidence integrity.\n- **Forensic imaging**, Creating a bitwise (sector-by-sector) copy of a drive. Tools: dd, FTK Imager, EnCase. The image is an exact replica including deleted files and slack space.\n- **Live forensics**, Collecting evidence from a running system (RAM capture, network connections). Necessary when volatile evidence is critical.\n- **Timeline analysis**, Reconstructing the sequence of events using timestamps from file system, logs, and registry.\n- **File carving**, Recovering deleted files from unallocated disk space based on file headers/footers.",
        "keyTerms": [
          "chain of custody",
          "order of volatility",
          "write blocker",
          "forensic imaging",
          "SHA-256 hash",
          "legal hold",
          "live forensics",
          "evidence integrity",
          "file carving",
          "timeline analysis"
        ],
        "examples": [
          "Forensic analyst creates a bitwise copy and documents SHA-256 hashes before and after imaging, this demonstrates evidence integrity. Matching hashes prove the copy is an exact, unmodified replica.",
          "Compromised workstation may be powered down anytime, collect in order of volatility: RAM first (encryption keys, processes), then network state, then disk image. RAM contents are lost on power-off."
        ],
        "tips": [
          "Order of volatility: CPU registers → RAM → Network → Disk → Backups. Always collect the MOST volatile first. RAM before disk, always.",
          "Write blocker = prevents modification of source drive during imaging. This is THE tool for maintaining forensic integrity. Always mentioned in correct forensic procedures.",
          "Chain of custody must be UNBROKEN from collection to court. Any gap = evidence potentially inadmissible. Document every person who touches the evidence."
        ]
      },
      {
        "id": 26,
        "slug": "endpoint-security",
        "title": "Endpoint Security",
        "studyPath": "/study#endpoint-security",
        "content": "## Endpoint Security\n\nEndpoints (workstations, laptops, mobile devices, servers) are the most common attack targets. Protecting and monitoring endpoints is a critical security operations function.\n\n### Endpoint Protection Solutions\n\n- **Antivirus/Antimalware (AV)**, Traditional signature-based detection. Scans files against a database of known malware signatures. Limited against zero-day and fileless threats.\n- **EDR (Endpoint Detection and Response)**, Advanced endpoint security that records detailed behavioral telemetry: process trees, file changes, network connections, registry modifications. Enables retrospective threat hunting, automated response, and forensic investigation. The modern replacement for traditional AV.\n- **XDR (Extended Detection and Response)**, Extends EDR across multiple security layers: endpoints, network, cloud, email, identity. Provides correlated visibility across the entire environment.\n- **MDM/MAM (Mobile Device Management / Mobile Application Management)**, MDM manages the entire device (remote wipe, enforce encryption, deploy policies). MAM manages only corporate applications (containerization, selective wipe of corporate data only). Used for BYOD and corporate mobile devices.\n\n### Endpoint Hardening\n\n- **Application allowlisting (whitelisting)**, Only explicitly approved applications can execute. Most restrictive and effective against unauthorized software.\n- **Application blocklisting (blacklisting)**, Blocks known-bad applications. Less secure than allowlisting because new threats aren't blocked until added to the list.\n- **Host-based firewall**, Controls inbound/outbound traffic per endpoint. Windows Firewall, iptables.\n- **Disk encryption**, Full-disk encryption (BitLocker, FileVault, LUKS) protects data at rest if the device is lost or stolen.\n- **Patch management**, Regular OS and application updates to close vulnerabilities.\n- **USB/peripheral control**, Block USB storage devices while allowing keyboards/mice (block USB Mass Storage Class, allow HID class). Prevents data exfiltration via removable media.\n- **BIOS/UEFI protection**, Secure Boot ensures only signed bootloaders execute. BIOS passwords prevent unauthorized boot configuration changes.\n\n### Hardware Security\n\n- **TPM (Trusted Platform Module)**, Hardware chip that stores encryption keys, certificates, and passwords securely. Used by BitLocker for disk encryption, measured boot, and hardware-based attestation.\n- **HSM (Hardware Security Module)**, Dedicated hardware for cryptographic operations and key storage. Used by CAs, payment systems, and high-security environments. More secure than software-based key storage.\n- **Secure Boot**, UEFI feature that verifies the digital signature of the bootloader and OS kernel before execution. Prevents bootkits and rootkits from loading at startup.\n- **Measured Boot**, Records (measures) each component loaded during boot into the TPM. Allows remote attestation to verify boot integrity.",
        "keyTerms": [
          "EDR",
          "XDR",
          "MDM/MAM",
          "application allowlisting",
          "TPM",
          "HSM",
          "Secure Boot",
          "full-disk encryption",
          "USB device control",
          "patch management",
          "BYOD"
        ],
        "examples": [
          "Investigating a breach 30 days later: traditional AV only logged the infection event. EDR recorded the entire attack chain, process trees, lateral movement, file changes, enabling full forensic reconstruction.",
          "Block USB storage but allow keyboards/mice: configure endpoint management to block USB Mass Storage Class devices while allowing HID (Human Interface Device) class. This is a device class-level policy, not a blanket USB block."
        ],
        "tips": [
          "EDR = records everything, enables threat hunting and forensics. AV = signature-based, limited. XDR = EDR across all security layers. Know the progression.",
          "TPM = hardware chip on the motherboard (stores keys, enables BitLocker). HSM = dedicated crypto hardware (CAs, payment systems). Both provide hardware-based key protection.",
          "MDM = controls the whole device. MAM = controls only corporate apps. For BYOD, MAM is preferred because it doesn't control the employee's personal data."
        ]
      },
      {
        "id": 27,
        "slug": "identity-access-management",
        "title": "Identity and Access Management",
        "studyPath": "/study#identity-access-management",
        "content": "## Identity and Access Management (IAM)\n\nIAM governs who can access what resources and under what conditions. It encompasses identity lifecycle management, access control models, and privileged access management.\n\n### Access Control Models\n\n- **RBAC (Role-Based Access Control)**, Permissions assigned based on job roles/functions (e.g., 'Sales Manager', 'DB Admin'). Most common in enterprises. Users inherit permissions from their assigned role.\n- **DAC (Discretionary Access Control)**, Resource owners decide who gets access. Used in most file systems (Windows NTFS permissions). Flexible but less secure, owners may grant overly permissive access.\n- **MAC (Mandatory Access Control)**, System-enforced access based on classification labels and clearance levels. Users cannot change permissions. Used in military/government (Top Secret, Secret, Confidential, Unclassified). Most restrictive.\n- **ABAC (Attribute-Based Access Control)**, Access decisions based on attributes: user attributes (role, department, clearance), resource attributes (classification, type), environmental attributes (time, location, device). Most flexible and granular. Used in cloud and Zero Trust.\n- **Rule-based access control**, Access determined by predefined rules (e.g., 'allow access only during business hours from corporate network'). Often used in firewalls.\n\n### IAM Principles\n\n- **Least privilege**, Users get only the minimum permissions needed for their job. No more, no less.\n- **Need to know**, Access to information only when required for a specific task, even if clearance level permits it.\n- **Separation of duties**, No single person should have enough access to complete a critical process alone (e.g., one person creates purchase orders, another approves them).\n- **Privileged Access Management (PAM)**, Controls and monitors privileged accounts (admin, root, domain admin). Includes:\n  - **Just-in-Time (JIT) access**, Temporary elevated privileges granted only when needed and automatically revoked.\n  - **Privilege bracketing**, Elevating privileges only for the specific task duration.\n  - **Privileged session monitoring**, Recording all actions taken during privileged sessions.\n\n### OAuth 2.0 Concepts\n\n- **Scope**, Defines what permissions an access token grants. A calendar app requesting 'calendar.read' scope gets read-only calendar access, not email. Scope limits the app's permissions.\n- **Access token**, Short-lived token granting specific API access.\n- **Refresh token**, Long-lived token used to obtain new access tokens without re-authentication.\n- **Consent**, User explicitly approves what permissions the app receives.\n\n### Identity Lifecycle\n\nProvisioning → Management → Review → Deprovisioning\n- **Provisioning**, Creating accounts and assigning initial permissions when an employee joins.\n- **Access reviews**, Periodic audits of who has access to what. Remove unnecessary permissions (privilege creep).\n- **Deprovisioning**, Disabling/deleting accounts when employees leave. Must be immediate for terminated employees.",
        "keyTerms": [
          "RBAC",
          "DAC",
          "MAC",
          "ABAC",
          "least privilege",
          "separation of duties",
          "PAM",
          "JIT access",
          "OAuth scope",
          "access review",
          "privilege creep",
          "provisioning/deprovisioning"
        ],
        "examples": [
          "OAuth scope: a calendar app receives a token with 'calendar.read' scope, it can read calendars but NOT access email. Scope limits permissions to exactly what was consented to.",
          "Admin needs 2-hour root access for patching: use JIT (Just-in-Time) access via PAM. Privileges are automatically granted for the window and revoked after. No permanent admin access needed."
        ],
        "tips": [
          "RBAC = roles (most common enterprise). MAC = labels/clearance (military). DAC = owner decides (file systems). ABAC = attributes (most flexible, Zero Trust). Know which model fits which scenario.",
          "OAuth scope = limits what an app can do with a token. If the question mentions 'app can access calendar but not email,' the answer is scope.",
          "JIT access is THE answer for 'temporary admin access with minimum risk.' Privileges are granted on-demand and automatically revoked, no standing admin accounts."
        ]
      },
      {
        "id": 28,
        "slug": "incident-response",
        "title": "Incident Response",
        "studyPath": "/study#incident-response",
        "content": "## Incident Response\n\nIncident response (IR) is a structured approach to handling security breaches and cyberattacks. The goal is to limit damage, reduce recovery time, and prevent recurrence.\n\n### IR Lifecycle (NIST SP 800-61)\n\n1. **Preparation**, Before any incident. Creating IR plans, playbooks, and communication templates. Training the IR team. Deploying monitoring tools (SIEM, EDR). Establishing relationships with legal, HR, law enforcement. The MOST important phase.\n2. **Detection and Analysis (Identification)**, Detecting that an incident has occurred using alerts, logs, and user reports. Analyzing the scope, impact, and nature of the incident. Determining if it's a true incident or false positive.\n3. **Containment**, Stopping the incident from spreading. Two types:\n   - **Short-term containment**, Immediate actions: isolate affected systems, block attacker IPs, disable compromised accounts.\n   - **Long-term containment**, Temporary fixes while preparing for eradication: apply patches, redirect traffic, implement additional monitoring.\n4. **Eradication**, Removing the root cause: deleting malware, closing vulnerabilities, removing attacker backdoors, rebuilding compromised systems from clean images.\n5. **Recovery**, Restoring systems to normal operations. Validate systems are clean, restore from backups, monitor closely for re-infection, gradually return to production.\n6. **Lessons Learned (Post-Incident)**, After-action review. What happened? What worked? What needs improvement? Update IR plans, playbooks, and security controls. Document everything.\n\n### Key IR Concepts\n\n- **Playbook/Runbook**, Pre-written step-by-step procedures for specific incident types (ransomware, data breach, phishing). Ensures consistent, efficient response.\n- **Escalation procedures**, Defined criteria for when and to whom incidents are escalated (SOC → IR team → CISO → legal → CEO).\n- **Communication plan**, Who to notify: internal stakeholders, legal, law enforcement, affected customers, regulators, media. Timing and method for each.\n- **Indicators of Compromise (IOCs)**, Artifacts that indicate a breach: unusual log entries, suspicious file hashes, unexpected network connections, new user accounts.\n\n### Evidence Collection During IR\n\nKey artifacts from a compromised Windows workstation:\n- Windows Event Logs (Security, System, Application)\n- Running process list with parent-child relationships\n- Prefetch files and recently accessed file list\n- Network connections and DNS cache\n- Memory dump (RAM capture)\n- Registry hives (persistence mechanisms)\n\nNever reinstall or reimage before collecting evidence. Follow order of volatility.",
        "keyTerms": [
          "preparation",
          "detection/identification",
          "containment",
          "eradication",
          "recovery",
          "lessons learned",
          "playbook/runbook",
          "escalation",
          "IOC",
          "NIST SP 800-61",
          "short-term vs long-term containment"
        ],
        "examples": [
          "Compromised workstation, collect before remediation: Event Logs (authentication, process creation), running processes (active malware), prefetch files (execution history). Never reinstall before evidence collection.",
          "CISO reviews IR maturity: the Preparation phase is most important, without playbooks, trained staff, and monitoring tools, the team cannot effectively respond when an incident occurs."
        ],
        "tips": [
          "IR phases in order: Preparation → Detection → Containment → Eradication → Recovery → Lessons Learned. Memorize this sequence, the exam tests 'what comes NEXT after X.'",
          "Preparation is the phase BEFORE incidents (playbooks, training, tools). If the question asks 'which phase occurs before an incident,' the answer is Preparation.",
          "Containment = stop the spread. Eradication = remove the cause. Recovery = restore operations. These three are often confused, know the difference."
        ]
      },
      {
        "id": 29,
        "slug": "network-monitoring",
        "title": "Network Monitoring",
        "studyPath": "/study#network-monitoring",
        "content": "## Network Monitoring\n\nNetwork monitoring provides visibility into traffic patterns, security events, and anomalies. It's the foundation of detecting threats and maintaining operational awareness.\n\n### Monitoring Technologies\n\n- **Packet capture (PCAP)**, Records full network packets for detailed analysis. Tools: Wireshark, tcpdump. Provides the most detail but requires significant storage. Used for forensic investigation and deep protocol analysis.\n- **NetFlow/sFlow/IPFIX**, Collects network flow metadata (source/destination IP, ports, protocol, bytes transferred, timestamps) from routers and switches WITHOUT capturing full packet contents. Much less storage than PCAP. Used for traffic pattern analysis, bandwidth monitoring, and anomaly detection.\n- **SPAN port (port mirroring)**, Configures a switch to copy all traffic from one or more ports to a monitoring port. Allows IDS/IPS or packet capture tools to see traffic without being inline.\n- **Network tap**, Hardware device that copies network traffic for monitoring. More reliable than SPAN (doesn't drop packets under load). Passive, does not affect network performance.\n- **Protocol analyzer**, Software that decodes and analyzes network protocols (Wireshark). Used to troubleshoot network issues and investigate security incidents.\n\n### Log Sources\n\n- **Firewall logs**, Connection attempts (allowed/denied), source/destination IPs, ports.\n- **DNS logs**, Domain queries and responses. Critical for detecting DNS tunneling, C2 communication, and domain generation algorithms (DGA).\n- **Proxy/web filter logs**, URL requests, categorization, blocked sites.\n- **DHCP logs**, IP address assignments. Maps IP addresses to MAC addresses and hostnames at specific times.\n- **Authentication logs**, Login successes and failures, account lockouts. Windows Security Event Log, Linux auth.log.\n- **Application logs**, Application-specific events, errors, and transactions.\n\n### Network Security Monitoring Indicators\n\n- **DNS tunneling indicators**, Long, random-looking subdomain strings (often Base64 encoded), high query volume to a single domain, regular timing intervals (beaconing).\n- **Beaconing**, Compromised system regularly contacting a C2 server at fixed intervals. Detected by analyzing connection timing patterns.\n- **Data exfiltration indicators**, Large outbound transfers, unusual protocols for data transfer, connections to known-bad IPs/domains, encrypted traffic to unknown destinations.\n- **Lateral movement indicators**, Internal-to-internal connections on unusual ports, use of admin tools (PsExec, WMI, PowerShell remoting) across multiple hosts.",
        "keyTerms": [
          "packet capture (PCAP)",
          "NetFlow/sFlow",
          "SPAN port",
          "network tap",
          "protocol analyzer",
          "DNS tunneling",
          "beaconing",
          "Wireshark",
          "firewall/DNS/auth logs",
          "lateral movement"
        ],
        "examples": [
          "Monitoring traffic patterns without full PCAP storage: NetFlow/sFlow collects metadata (who talked to whom, on what port, how much data) from routers. Provides 80% of the visibility at 1% of the storage cost.",
          "DNS queries with long Base64 subdomain strings (aGVsbG8gd29ybGQ.evil-c2.com) every 60 seconds, classic DNS tunneling pattern. Data is being exfiltrated or C2 commands are being received through DNS."
        ],
        "tips": [
          "NetFlow = flow metadata (IPs, ports, bytes). PCAP = full packet contents. NetFlow for pattern analysis; PCAP for deep forensics. The exam asks which provides what level of detail.",
          "SPAN port = switch copies traffic to monitoring port. Network tap = hardware device copies traffic. Tap is more reliable (no packet drops under load).",
          "DNS tunneling indicators: long random subdomains + single destination domain + regular timing. If you see Base64 in DNS queries, think DNS tunneling."
        ]
      },
      {
        "id": 30,
        "slug": "siem-soar",
        "title": "SIEM and SOAR",
        "studyPath": "/study#siem-soar",
        "content": "## SIEM and SOAR\n\nSIEM and SOAR are the core technologies of a Security Operations Center (SOC). SIEM provides visibility; SOAR provides automated response.\n\n### SIEM (Security Information and Event Management)\n\nSIEM aggregates, normalizes, correlates, and analyzes log data from across the entire environment.\n\n**Core functions:**\n- **Log aggregation**, Collects logs from all sources: firewalls, IDS/IPS, servers, endpoints, applications, cloud services.\n- **Normalization**, Converts logs from different formats into a common format for analysis.\n- **Correlation**, Connects related events across multiple sources to identify patterns. Example: 5 failed logins followed by a successful login from the same IP = potential brute force.\n- **Alerting**, Generates alerts when correlation rules or thresholds are triggered.\n- **Dashboards and reporting**, Real-time visibility into security posture, compliance reporting, trend analysis.\n- **Retention**, Stores logs for compliance and forensic purposes (often 90 days to 7 years depending on regulations).\n\n**SIEM correlation rule examples:**\n- Failed logins followed by success from same IP → brute force attempt\n- Login from two geographic locations within impossible travel time → compromised account\n- Privileged account login outside business hours → potential insider threat or compromise\n- Large data transfer to external IP after hours → potential exfiltration\n\n### SOAR (Security Orchestration, Automation, and Response)\n\nSOAR automates repetitive security tasks and orchestrates response across multiple security tools.\n\n**Core functions:**\n- **Orchestration**, Coordinates actions across multiple security tools (firewall, EDR, email gateway, ticketing system) through a single platform.\n- **Automation**, Automates repetitive, low-complexity tasks: enriching alerts with threat intelligence, blocking known-bad IPs, isolating compromised endpoints, creating tickets.\n- **Playbooks**, Automated workflows that define step-by-step response procedures for specific alert types. Example: phishing playbook automatically checks URL reputation, extracts IOCs, blocks sender, quarantines email, and notifies the user.\n- **Case management**, Tracks incidents from detection through resolution.\n\nSOAR is the answer when the question asks about reducing analyst workload, automating triage, or handling high alert volumes.\n\n### SOC Roles\n\n- **Tier 1 (Triage)**, Initial alert review, false positive filtering, ticket creation.\n- **Tier 2 (Investigation)**, Deep-dive analysis, correlation, threat hunting.\n- **Tier 3 (Advanced)**, Malware analysis, forensics, tool development, threat intelligence.\n- **SOC Manager**, Oversees operations, metrics, staffing, and process improvement.",
        "keyTerms": [
          "SIEM",
          "SOAR",
          "log aggregation",
          "correlation rules",
          "normalization",
          "automated playbooks",
          "orchestration",
          "SOC tiers",
          "alert fatigue",
          "impossible travel"
        ],
        "examples": [
          "SIEM correlation: 5 failed logins → 1 success from same IP within 10 minutes. This rule detects a successful brute-force attack. The correlation of failure-then-success from the same source is the key pattern.",
          "SOC analyst handles 800 alerts/day manually, SOAR automates triage of known, low-complexity alerts (auto-enrichment, auto-blocking, auto-ticketing), letting analysts focus on complex investigations."
        ],
        "tips": [
          "SIEM = collect, correlate, alert (visibility). SOAR = automate, orchestrate, respond (action). SIEM tells you something happened; SOAR helps you respond faster.",
          "SOAR is THE answer for 'automate alert triage,' 'reduce analyst workload,' or 'handle high alert volume.' It automates the repetitive Tier 1 tasks.",
          "Know common SIEM correlation patterns: failed-then-success logins (brute force), impossible travel (compromised credentials), after-hours privileged access (insider threat/compromise)."
        ]
      },
      {
        "id": 31,
        "slug": "vulnerability-management",
        "title": "Vulnerability Management",
        "studyPath": "/study#vulnerability-management",
        "content": "## Vulnerability Management\n\nVulnerability management is the ongoing process of identifying, evaluating, prioritizing, remediating, and reporting on security vulnerabilities across an organization's assets.\n\n### Patch Management\n\nPatching is the primary remediation for known vulnerabilities.\n\n**Patch management process:**\n1. **Identify**, Monitor vendor advisories, CVE databases, and vulnerability scan results for applicable patches.\n2. **Evaluate**, Assess the patch's relevance, criticality (CVSS score), and potential impact on systems.\n3. **Test**, Deploy the patch in a non-production environment to verify it doesn't break functionality.\n4. **Deploy**, Roll out to production systems according to priority and change management procedures.\n5. **Verify**, Re-scan to confirm the vulnerability is resolved.\n\n**Emergency patching**, For critical vulnerabilities with public exploits (CVSS 9.0+), normal change management windows may be bypassed. Implement compensating controls (WAF rules, network isolation) while expediting the patch.\n\n### Prioritization Factors\n\nCVSS score alone is NOT sufficient for prioritization. Consider:\n- **Asset criticality**, Is this a public-facing server or an isolated test system?\n- **Internet exposure**, Can the vulnerability be exploited from the internet?\n- **Exploit availability**, Is there a public proof-of-concept or active exploitation in the wild?\n- **Compensating controls**, Are there mitigations already in place (WAF, IPS, network segmentation)?\n- **Business impact**, What's the potential impact of both the vulnerability AND the patch (downtime)?\n\n### Remediation Options\n\n- **Patching**, Apply vendor-provided fix. Preferred solution.\n- **Compensating controls**, When patching isn't immediately possible: WAF rules, network segmentation, enhanced monitoring, disabling the vulnerable feature.\n- **Accepting risk**, Formally documenting and accepting the risk when remediation cost exceeds potential loss. Requires management sign-off.\n- **System replacement**, For end-of-life systems that no longer receive patches.\n\n### Vulnerability Disclosure\n\n- **Responsible disclosure**, Researcher reports vulnerability to the vendor and gives them time (typically 90 days) to fix it before public disclosure.\n- **Bug bounty program**, Organization pays researchers for discovering and responsibly reporting vulnerabilities.\n- **Full disclosure**, Publicly releasing vulnerability details immediately. Controversial, pressures vendors but helps attackers.\n- **Zero-day**, A vulnerability that is unknown to the vendor and has no patch. Exploited before a fix is available.",
        "keyTerms": [
          "patch management",
          "CVSS prioritization",
          "compensating controls",
          "risk acceptance",
          "emergency patching",
          "responsible disclosure",
          "bug bounty",
          "zero-day",
          "change management",
          "asset criticality"
        ],
        "examples": [
          "CVSS 10.0 Apache CVE with public exploit code: assess exposure (3 public-facing servers = highest priority), implement compensating controls immediately (WAF rules, network isolation), and expedite emergency patching. Don't wait for the 2-week change window.",
          "CVSS 9.8 on internal-only database: while critical by base score, the environmental context (no internet exposure, accessible only from internal HR app) lowers the effective risk. Prioritize public-facing systems first."
        ],
        "tips": [
          "CVSS score + asset criticality + exposure + exploit availability = actual priority. A 9.8 on an isolated internal system may be lower priority than a 7.5 on a public-facing server with active exploitation.",
          "Emergency/critical patches can bypass normal change management. If the question mentions 'CVSS 10 with public exploit,' the answer is NOT 'wait for the 2-week window.'",
          "Compensating controls = temporary protection when patching isn't immediately possible. WAF rules, network segmentation, and enhanced monitoring are common examples."
        ]
      }
    ]
  },
  {
    "id": 5,
    "key": "security-program-management-oversight",
    "name": "Security Program Management & Oversight",
    "weightPct": 20,
    "topics": [
      {
        "id": 32,
        "slug": "business-continuity-disaster-recovery",
        "title": "Business Continuity and Disaster Recovery",
        "studyPath": "/study#business-continuity-disaster-recovery",
        "content": "## Business Continuity and Disaster Recovery\n\nBusiness Continuity Planning (BCP) ensures critical business functions continue during and after a disaster. Disaster Recovery (DR) focuses specifically on restoring IT systems and data.\n\n### Key Metrics\n\n- **RTO (Recovery Time Objective)**, Maximum acceptable time to restore a system after a disaster. 'How long can we be down?' Example: RTO of 4 hours means the system must be operational within 4 hours.\n- **RPO (Recovery Point Objective)**, Maximum acceptable data loss measured in time. 'How much data can we lose?' Example: RPO of 30 minutes means no more than 30 minutes of transactions can be lost. Determines backup frequency.\n- **MTTR (Mean Time to Repair)**, Average time to repair a failed component and restore service.\n- **MTBF (Mean Time Between Failures)**, Average time between system failures. Higher MTBF = more reliable.\n- **MTTF (Mean Time to Failure)**, For non-repairable components, the expected lifespan.\n\n### DR Site Types (Fastest to Slowest)\n\n1. **Hot site**, Fully equipped with hardware, software, data (real-time replication), and network connectivity. Can take over within minutes to hours. Most expensive.\n2. **Warm site**, Has hardware and network connectivity but requires data restoration from backups. Recovery: hours to days. Moderate cost.\n3. **Cold site**, Empty facility with power and network only. All equipment must be procured and installed. Recovery: days to weeks. Cheapest.\n4. **Cloud-based DR**, Infrastructure replicated in cloud (AWS, Azure DR regions). Cost-effective alternative to physical hot/warm sites. Pay-as-you-go pricing.\n\n### DR Testing Types (Least to Most Disruptive)\n\n1. **Tabletop exercise**, Team discusses a scenario in a conference room. No systems activated. Tests communication and decision-making. Least disruptive.\n2. **Walkthrough/Simulation**, Team steps through the DR plan more formally, verifying each step is feasible. Still no actual failover.\n3. **Parallel test**, DR systems are activated and tested alongside production. Production is NOT disrupted. Validates that DR systems work.\n4. **Full interruption test**, Production is actually shut down and operations switch to DR. Most realistic but highest risk. Validates true recovery capability.\n\n### Business Impact Analysis (BIA)\n\nThe BIA identifies critical business processes and quantifies the impact of disruption:\n- Which processes are most critical?\n- What are the financial, operational, and legal impacts of downtime?\n- What are the dependencies between systems?\n- What are the acceptable RTO and RPO for each process?\n\nThe BIA drives the DR strategy, more critical systems get lower RTO/RPO (faster recovery, less data loss).\n\n### Backup Strategies\n\n- **Full backup**, Copies all data. Longest backup time, fastest restore.\n- **Incremental backup**, Copies only data changed since the LAST backup (full or incremental). Fastest backup, slowest restore (needs full + all incrementals).\n- **Differential backup**, Copies data changed since the LAST FULL backup. Middle ground. Restore needs only full + latest differential.\n- **3-2-1 Rule**, 3 copies of data, on 2 different media types, with 1 copy offsite.",
        "keyTerms": [
          "RTO",
          "RPO",
          "MTTR/MTBF",
          "hot/warm/cold site",
          "BIA",
          "tabletop exercise",
          "parallel test",
          "full/incremental/differential backup",
          "3-2-1 rule",
          "cloud DR"
        ],
        "examples": [
          "Financial institution: RTO = 4 hours (must be operational within 4 hours), RPO = 30 minutes (max 30 minutes of lost transactions). RTO determines DR site type; RPO determines backup/replication frequency.",
          "DR test in a conference room, walking through scenarios without activating systems, this is a tabletop exercise. Least disruptive, tests procedures and communication."
        ],
        "tips": [
          "RTO = time to recover (how long down). RPO = data loss tolerance (how much data lost). These are THE two most tested DR metrics. Know them cold.",
          "Hot site = fastest, most expensive. Cold site = slowest, cheapest. Warm site = middle ground. The exam asks to rank them by speed and cost.",
          "Incremental = since last ANY backup (fast backup, slow restore). Differential = since last FULL backup (moderate backup, faster restore). This distinction is heavily tested."
        ]
      },
      {
        "id": 33,
        "slug": "compliance-frameworks",
        "title": "Compliance Frameworks",
        "studyPath": "/study#compliance-frameworks",
        "content": "## Compliance Frameworks\n\nCompliance frameworks and regulations define the security requirements organizations must meet. The SY0-701 exam tests your knowledge of major frameworks, regulations, and audit types.\n\n### Major Regulations\n\n- **GDPR (General Data Protection Regulation)**, EU regulation protecting personal data of EU residents. Key requirements: consent for data processing, right to be forgotten, data portability, breach notification within **72 hours**, Data Protection Officer (DPO) requirement, heavy fines (up to 4% of global annual revenue or €20 million).\n- **HIPAA (Health Insurance Portability and Accountability Act)**, US regulation protecting Protected Health Information (PHI). Applies to healthcare providers, insurers, and their business associates. Requires administrative, physical, and technical safeguards.\n- **PCI-DSS (Payment Card Industry Data Security Standard)**, Industry standard for organizations handling credit card data. 12 requirements covering network security, access control, encryption, monitoring, and testing. Mandates quarterly vulnerability scans and annual penetration tests.\n- **SOX (Sarbanes-Oxley Act)**, US regulation requiring internal controls over financial reporting for publicly traded companies. IT controls must ensure integrity of financial data.\n- **FERPA**, US regulation protecting student educational records.\n- **COPPA**, US regulation protecting children's online privacy (under 13).\n- **CCPA/CPRA**, California privacy law giving consumers rights over their personal data (similar to GDPR for California residents).\n\n### Security Frameworks\n\n- **NIST Cybersecurity Framework (CSF)**, Risk-based framework with 5 core functions: **Identify, Protect, Detect, Respond, Recover**. Voluntary (not a regulation). Widely adopted in US private sector.\n- **NIST SP 800-53**, Comprehensive catalog of security and privacy controls for US federal systems. Controls organized in families (AC, AU, CM, IA, etc.).\n- **ISO 27001/27002**, International standard for Information Security Management Systems (ISMS). 27001 = requirements (certifiable). 27002 = implementation guidance.\n- **CIS Controls**, Prioritized set of cybersecurity best practices. 18 control categories ranked by implementation priority.\n- **COBIT**, Framework for IT governance and management, focused on aligning IT with business objectives.\n- **CSA CCM (Cloud Controls Matrix)**, Security controls framework specifically for cloud computing environments.\n\n### Audit Types\n\n- **SOC 2 Type I**, Point-in-time assessment of whether security controls are properly DESIGNED. Snapshot, no testing of operational effectiveness.\n- **SOC 2 Type II**, Assessment of whether controls are properly designed AND operating effectively over a PERIOD of time (typically 6-12 months). Much more valuable than Type I.\n- **SOC 3**, Similar to SOC 2 Type II but a general-use report (less detail, suitable for public distribution).\n- **Internal audit**, Conducted by the organization's own audit team. Independent but may lack objectivity.\n- **External audit**, Conducted by independent third-party auditors. More objective and credible.\n\n### Compliance Concepts\n\n- **Due diligence**, Doing research and investigation BEFORE taking action (evaluating a vendor's security posture).\n- **Due care**, Taking reasonable steps to protect assets (implementing controls, following policies).\n- **Legal liability**, Failure to exercise due care can result in legal consequences.",
        "keyTerms": [
          "GDPR",
          "HIPAA",
          "PCI-DSS",
          "SOX",
          "NIST CSF",
          "ISO 27001",
          "CIS Controls",
          "SOC 2 Type I vs II",
          "due diligence",
          "due care",
          "CCPA",
          "breach notification"
        ],
        "examples": [
          "Hospital selecting a cloud EHR vendor: require SOC 2 Type II (proves controls work over time, not just designed well). Type I is a snapshot; Type II proves sustained effectiveness.",
          "US company selling to EU customers: GDPR applies because it protects EU RESIDENTS' data regardless of where the company is located. Breach notification must occur within 72 hours."
        ],
        "tips": [
          "SOC 2 Type I = controls designed properly (snapshot). SOC 2 Type II = controls designed AND operating effectively (over time). Type II is always more valuable.",
          "NIST CSF = Identify, Protect, Detect, Respond, Recover (5 functions). This is the most commonly tested framework on the exam. Memorize the five functions.",
          "GDPR = EU data privacy (72-hour breach notification, right to be forgotten). HIPAA = US healthcare (PHI). PCI-DSS = payment cards. Know which regulation applies to which scenario."
        ]
      },
      {
        "id": 34,
        "slug": "risk-management",
        "title": "Risk Management",
        "studyPath": "/study#risk-management",
        "content": "## Risk Management\n\nRisk management is the process of identifying, assessing, and responding to risks that could affect the organization's objectives. It is fundamental to every security decision.\n\n### Risk Concepts\n\n- **Threat**, Anything that could potentially cause harm (natural disaster, hacker, malware, insider).\n- **Vulnerability**, A weakness that could be exploited by a threat (unpatched software, weak password, misconfiguration).\n- **Risk**, The likelihood that a threat will exploit a vulnerability AND the potential impact. Risk = Threat × Vulnerability × Impact.\n- **Risk appetite/tolerance**, The level of risk an organization is willing to accept. Varies by industry and regulatory requirements.\n\n### Risk Assessment Types\n\n- **Quantitative risk analysis**, Uses numerical values and financial calculations.\n  - **SLE (Single Loss Expectancy)** = Asset Value × Exposure Factor. What one incident costs.\n  - **ARO (Annualized Rate of Occurrence)** = How many times per year the incident is expected to occur.\n  - **ALE (Annualized Loss Expectancy)** = SLE × ARO. Expected annual cost of a risk.\n  - Example: Data center worth $5M, flood damages 20% = SLE of $1M. Floods happen once every 10 years = ARO of 0.1. ALE = $1M × 0.1 = **$100,000/year**. If flood mitigation costs less than $100K/year, it's financially justified.\n\n- **Qualitative risk analysis**, Uses subjective ratings (High/Medium/Low) rather than dollar amounts. Based on expert judgment, interviews, and questionnaires. Faster but less precise.\n- **Semi-quantitative**, Combines both approaches (e.g., rating likelihood 1-5 and impact 1-5, then multiplying).\n\n### Risk Treatment Strategies\n\n- **Risk mitigation (reduction)**, Implement controls to reduce likelihood or impact. Most common response. Example: installing a firewall, patching systems.\n- **Risk avoidance**, Eliminate the activity that creates the risk entirely. Example: not storing credit card data eliminates PCI-DSS risk.\n- **Risk transference (sharing)**, Transfer the financial impact to a third party. Example: purchasing cyber insurance, outsourcing to a managed security provider.\n- **Risk acceptance**, Formally acknowledge and accept the risk without additional controls. Used when the cost of mitigation exceeds the potential loss. **Must be documented and signed by management.**\n\n### Risk Register\n\nA formal document tracking all identified risks. Contents:\n- Risk description and category\n- Likelihood and impact ratings\n- Risk score/priority\n- Risk owner (person responsible)\n- Treatment strategy chosen\n- Status and timeline for remediation\n- Residual risk (risk remaining after controls)\n\n### Risk Frameworks\n\n- **Risk matrix (heat map)**, Visual representation of risks plotted by likelihood (y-axis) and impact (x-axis). Red = critical, yellow = moderate, green = low.\n- **Risk appetite statement**, Executive-level document defining acceptable risk levels for different categories.\n- **KRI (Key Risk Indicators)**, Metrics that signal increasing risk levels before incidents occur.",
        "keyTerms": [
          "SLE/ARO/ALE",
          "risk mitigation",
          "risk avoidance",
          "risk transference",
          "risk acceptance",
          "risk register",
          "quantitative vs qualitative",
          "threat/vulnerability/risk",
          "risk appetite",
          "residual risk",
          "risk matrix",
          "KRI"
        ],
        "examples": [
          "Flood risk: 10% annual probability (ARO = 0.1) × $500,000 loss per event (SLE) = ALE of $50,000/year. If flood mitigation costs $40K/year, it's financially justified (saves $10K/year).",
          "Legacy system vulnerability accepted because mitigation cost exceeds expected loss, documented and signed by executive, this is formal risk acceptance. The key is management sign-off and documentation."
        ],
        "tips": [
          "ALE = SLE × ARO. If the exam gives you numbers, calculate ALE. If mitigation costs less than ALE, the investment is justified.",
          "Risk acceptance MUST be formally documented and signed by management. An employee ignoring a risk is NOT acceptance, that's negligence.",
          "Mitigation = reduce risk. Avoidance = eliminate activity. Transference = insurance/outsource. Acceptance = document and accept. Know all four and when each applies."
        ]
      },
      {
        "id": 35,
        "slug": "security-awareness-training",
        "title": "Security Awareness Training",
        "studyPath": "/study#security-awareness-training",
        "content": "## Security Awareness Training\n\nSecurity awareness training transforms employees from the weakest link into an active layer of defense. It is considered the most effective control against social engineering attacks.\n\n### Training Program Components\n\n- **New hire training**, Security orientation during onboarding. Covers acceptable use policies, password requirements, incident reporting, data handling, and social engineering awareness.\n- **Annual refresher training**, Mandatory annual training covering evolving threats, policy updates, and reinforcing core concepts.\n- **Role-based training**, Specialized training based on job function. Developers get secure coding training. Finance staff get BEC/wire fraud training. IT admins get privileged access training. Executives get whaling awareness.\n- **Just-in-time training**, Immediate educational feedback when an employee makes a security mistake (e.g., clicking a simulated phishing link). Most effective learning moment, the lesson is delivered when the behavior occurs.\n\n### Phishing Simulations\n\nSimulated phishing campaigns are the cornerstone of awareness programs:\n- Send realistic phishing emails to employees\n- Track who clicks links, opens attachments, or enters credentials\n- Provide immediate feedback (just-in-time training) to those who fall for it\n- Track improvement over time\n- Vary difficulty and techniques to match real-world threats\n\n**Purpose**: Educational, NOT punitive. The goal is behavior change, not punishment. Organizations that punish employees for failing simulations create fear and discourage reporting of real incidents.\n\n### Measuring Effectiveness\n\nKey metrics:\n- **Phishing click rate**, Percentage of employees who click simulated phishing links. Should decrease over time.\n- **Phishing reporting rate**, Percentage who correctly report the simulation. Should INCREASE over time. More important than click rate.\n- **Time to report**, How quickly employees report suspicious emails.\n- **Training completion rate**, Percentage of employees who complete required training.\n- **Security incident rate**, Number of user-caused security incidents over time.\n\n### Training Topics to Cover\n\n- Phishing recognition (email, SMS, voice)\n- Password hygiene and MFA usage\n- Social engineering tactics (pretexting, impersonation)\n- Physical security (tailgating, clean desk policy)\n- Data handling and classification\n- Removable media risks\n- Mobile device security\n- Incident reporting procedures\n- Remote work security best practices\n\n### Gamification and Engagement\n\nModern programs use gamification (leaderboards, badges, competitions), short interactive modules, real-world scenarios, and varied content formats (video, interactive, quizzes) to maintain engagement.",
        "keyTerms": [
          "phishing simulation",
          "just-in-time training",
          "role-based training",
          "click rate",
          "reporting rate",
          "gamification",
          "new hire training",
          "annual refresher",
          "security champion",
          "behavior change"
        ],
        "examples": [
          "35% of employees click a phishing simulation link and receive immediate feedback, this is just-in-time training. The purpose is behavioral education, not punishment. Immediate feedback at the moment of the mistake is the most effective learning approach.",
          "CISO reports to the board: click rate decreased from 35% to 8% over 12 months, reporting rate increased from 5% to 45%, average time-to-report decreased from 4 hours to 20 minutes. These data-driven metrics demonstrate program ROI."
        ],
        "tips": [
          "Phishing simulations are EDUCATIONAL, not punitive. If the question asks about the PRIMARY purpose, it's behavior change and awareness, not punishment.",
          "Reporting rate is MORE important than click rate. An employee who clicks but immediately reports is more valuable than one who ignores a real phishing email.",
          "Just-in-time training = immediate feedback at the moment of the mistake. It's the most effective training delivery method and the exam's preferred answer for 'when should training be delivered.'"
        ]
      },
      {
        "id": 36,
        "slug": "security-policies",
        "title": "Security Policies",
        "studyPath": "/study#security-policies",
        "content": "## Security Policies\n\nSecurity policies establish the rules, expectations, and governance framework for an organization's security program. They form a hierarchy from high-level policies to detailed technical procedures.\n\n### Policy Hierarchy\n\n- **Policy**, High-level statement of management intent. Defines WHAT must be done but not HOW. Approved by senior management. Mandatory. Example: 'All sensitive data must be encrypted.'\n- **Standard**, Specific mandatory requirements that support a policy. Defines the specific technologies, methodologies, or configurations. Example: 'AES-256 encryption must be used for data at rest.'\n- **Guideline**, Recommended best practices. Not mandatory, provides flexibility. Example: 'It is recommended to use passphrases of 16+ characters.'\n- **Procedure**, Step-by-step instructions for accomplishing a specific task. The most detailed document. Example: 'To enable BitLocker: 1. Open Control Panel → 2. Click BitLocker Drive Encryption → 3. Click Turn on BitLocker...'\n\n### Key Security Policies\n\n- **Acceptable Use Policy (AUP)**, Defines what employees may and may not do with company IT resources. Covers personal use, social media, software installation, and internet browsing. Employees typically sign this as a condition of employment.\n- **Data Retention and Disposal Policy**, Specifies how long different types of data must be retained, storage requirements, and how data must be securely destroyed when no longer needed. Must address: retention periods by data type, storage location and protection, disposal methods (crypto-shredding, degaussing, physical destruction), legal hold exceptions.\n- **Password Policy**, Defines password complexity, length, expiration, and history requirements. Modern policies (NIST SP 800-63B) recommend long passphrases over complex short passwords and eliminating forced periodic rotation.\n- **Change Management Policy**, Requires formal approval, testing, and documentation for all changes to IT systems. Prevents unauthorized modifications and reduces outage risk.\n- **Incident Response Policy**, Defines what constitutes a security incident, roles and responsibilities, escalation procedures, and communication requirements.\n- **BYOD (Bring Your Own Device) Policy**, Rules for using personal devices for work: required security controls (encryption, screen lock, MDM enrollment), acceptable use, data ownership, and remote wipe consent.\n- **Data Classification Policy**, Defines classification levels (Public, Internal, Confidential, Restricted) and handling requirements for each level.\n\n### Governance Documents\n\n- **NDA (Non-Disclosure Agreement)**, Legal contract preventing disclosure of confidential information. Signed by employees, contractors, and partners.\n- **MOU (Memorandum of Understanding)**, Non-binding agreement between parties outlining the terms of a partnership or collaboration. Less formal than a contract.\n- **MOA (Memorandum of Agreement)**, Similar to MOU but more detailed and may be legally binding.\n- **SLA (Service Level Agreement)**, Defines specific performance metrics and guarantees (uptime, response time, resolution time) with penalties for non-compliance.",
        "keyTerms": [
          "AUP",
          "policy vs standard vs guideline vs procedure",
          "data retention policy",
          "change management",
          "NDA",
          "MOU/MOA",
          "SLA",
          "BYOD policy",
          "data classification policy",
          "password policy"
        ],
        "examples": [
          "Policy says 'encrypt sensitive data' but doesn't specify how, a STANDARD would specify 'use AES-256.' A PROCEDURE would give step-by-step instructions for enabling encryption.",
          "HR asks for a document employees sign about IT resource usage, this is an Acceptable Use Policy (AUP). It defines what employees can and cannot do with company systems, and is typically signed during onboarding."
        ],
        "tips": [
          "Policy = WHAT (high-level, mandatory). Standard = specific requirements. Guideline = recommendation (not mandatory). Procedure = HOW (step-by-step). Know the hierarchy.",
          "AUP = acceptable use of IT resources. The exam often describes an AUP scenario and asks you to identify the policy type.",
          "SLA = performance guarantees with penalties. MOU = non-binding agreement. NDA = confidentiality. Know which document fits which scenario."
        ]
      },
      {
        "id": 37,
        "slug": "vendor-management",
        "title": "Vendor Management",
        "studyPath": "/study#vendor-management",
        "content": "## Vendor Management\n\nVendor (third-party) management ensures that external partners, suppliers, and service providers meet the organization's security requirements. Vendor risk is a major concern because your security is only as strong as your weakest vendor.\n\n### Vendor Risk Management Lifecycle\n\n1. **Due diligence**, Evaluate the vendor's security posture BEFORE engagement: security certifications (ISO 27001, SOC 2), financial stability, reputation, breach history, compliance status.\n2. **Contract negotiation**, Establish security requirements, SLAs, data protection terms, breach notification requirements, audit rights, and exit/termination clauses.\n3. **Ongoing monitoring**, Continuously assess vendor performance and security: periodic security questionnaires, audit reports (SOC 2 Type II), vulnerability scanning results, compliance certifications.\n4. **Offboarding/exit**, Secure termination: data return/destruction, access revocation, knowledge transfer, transition to alternative vendor.\n\n### Key Vendor Agreements\n\n- **MSA (Master Service Agreement)**, Overarching legal contract defining the terms of the entire vendor relationship.\n- **SLA (Service Level Agreement)**, Specific performance metrics: uptime (99.9% = 8.7 hours downtime/year), response times, resolution times, penalties for non-compliance.\n- **BAA (Business Associate Agreement)**, Required by HIPAA when a vendor handles PHI. Defines the vendor's obligations for protecting health data.\n- **DPA (Data Processing Agreement)**, Required by GDPR when a vendor processes personal data. Defines purpose, scope, and security requirements for data processing.\n- **ISA (Interconnection Security Agreement)**, Defines security requirements for network connections between two organizations.\n- **Right to audit clause**, Contractual provision allowing the customer to audit the vendor's security controls.\n\n### Vendor Risk Categories\n\n- **Concentration risk**, Over-reliance on a single vendor for critical services. If the vendor fails, the organization has no alternative. Mitigated by vendor diversification and exit planning.\n- **Supply chain risk**, Vendor compromise can propagate to your organization (SolarWinds-style attacks). Mitigated by SBOM, code signing verification, and continuous monitoring.\n- **Data sovereignty risk**, Vendor stores data in jurisdictions with different privacy laws. Must ensure data residency requirements are met.\n- **Compliance risk**, Vendor fails to meet regulatory requirements that apply to your data (GDPR, HIPAA, PCI-DSS).\n\n### Vendor Assessment Methods\n\n- **Security questionnaires**, Standardized questionnaires (SIG, CAIQ) sent to vendors assessing their security controls.\n- **On-site audits**, Physical inspection of vendor facilities and practices.\n- **SOC reports**, Independent third-party audit reports (SOC 2 Type II preferred).\n- **Penetration test results**, Vendor provides results of recent security testing.\n- **Evidence of compliance**, Certificates (ISO 27001), PCI-DSS AOC, HIPAA attestation.",
        "keyTerms": [
          "vendor risk management",
          "due diligence",
          "SLA",
          "BAA",
          "DPA",
          "right to audit",
          "concentration risk",
          "data sovereignty",
          "MSA",
          "vendor assessment",
          "SOC 2 report",
          "exit strategy"
        ],
        "examples": [
          "Critical SaaS vendor shuts down with 30 days notice, this is concentration risk (single point of failure). The company had no exit strategy, no contract provisions for data portability, and no alternative vendor. Fix: vendor diversification and contractual exit clauses.",
          "Payroll processor handles employee PII, a Data Processing Agreement (DPA) or BAA (if healthcare) establishes security requirements the vendor must meet, including encryption, access controls, breach notification, and right to audit."
        ],
        "tips": [
          "BAA = HIPAA (healthcare/PHI). DPA = GDPR (EU personal data). Both are legally required when vendors process regulated data. Know which applies to which regulation.",
          "Concentration risk = reliance on one vendor. The exam describes a vendor failure scenario and asks what risk was ignored, the answer is vendor concentration/single point of failure.",
          "Due diligence = BEFORE engagement (evaluate vendor). Ongoing monitoring = DURING relationship (audit, questionnaires). Exit strategy = PLANNED termination process. All three stages are required."
        ]
      }
    ]
  }
];
