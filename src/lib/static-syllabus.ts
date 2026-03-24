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
        "content": "## Authentication\nAuthentication is covered in General Security Concepts. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- A company wants to add a second authentication factor that is resistant to phishing attacks and does not require a mobile phone. Which option BEST meets this requirement?\\n- A company uses Kerberos for internal authentication. An attacker obtains the NTLM hash of a service account and uses it to request Kerberos tickets for that service. What attack has occurred?\\n- A user presents a username, password, and a fingerprint scan to log into a workstation. How many authentication factors are being used?",
        "keyTerms": [
          "authentication",
          "company",
          "wants",
          "second",
          "factor",
          "resistant"
        ],
        "examples": [
          "Executives have complained that SMS codes are inconvenient when traveling internationally. IT also needs a solution resilient to SIM-swapping attacks.",
          "During incident response, forensic analysis shows an attacker authenticated to multiple services using a service account without knowing the cleartext password."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 2,
        "slug": "cryptography",
        "title": "Cryptography",
        "studyPath": "/study#cryptography",
        "content": "## Cryptography\nCryptography is covered in General Security Concepts. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- Performance-based: A security team discovers that encrypted database backups are being sent to an untrusted third-party cloud. Place the CORRECT response sequence to address this incident and prevent future occurrences.\\n- Which encryption type uses the SAME key for both encryption and decryption?\\n- Which hashing algorithm is considered cryptographically broken and should NOT be used for password storage?",
        "keyTerms": [
          "cryptography",
          "performancebased",
          "security",
          "discovers",
          "encrypted",
          "database"
        ],
        "examples": [
          "PBQ: Audit logs show AES-128 encrypted backups being exfiltrated to an unauthorized S3 bucket. The encryption key is stored in the same repository as the backup script. Evidence includes access logs, backup scripts, and key management records.",
          "A network administrator is designing a file encryption system for internal storage. Speed is a priority because terabytes of data are encrypted daily."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 3,
        "slug": "physical-security",
        "title": "Physical Security",
        "studyPath": "/study#physical-security",
        "content": "## Physical Security\nPhysical Security is covered in General Security Concepts. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- An attacker follows an authorized employee through a secured door without presenting credentials. What physical attack technique is this?\\n- Select THREE physical security controls that would MOST effectively prevent unauthorized access to a data center.",
        "keyTerms": [
          "physical",
          "security",
          "attacker",
          "follows",
          "authorized",
          "employee"
        ],
        "examples": [
          "A penetration tester documents physical security weaknesses at a corporate headquarters. An employee held the door open for someone who appeared to be a colleague carrying boxes.",
          "A colocation facility is reviewing its physical security posture after a social engineering incident allowed an unauthorized visitor to access a server room."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 4,
        "slug": "pki-certificates",
        "title": "PKI and Certificates",
        "studyPath": "/study#pki-certificates",
        "content": "## PKI and Certificates\nPKI and Certificates is covered in General Security Concepts. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- An administrator finds that an internal CA issued a wildcard certificate for *.internal.corp to an unauthorized service. Which PKI control would have BEST prevented this?\\n- A web server's certificate has been revoked due to a compromised private key. Which mechanism allows browsers to check certificate revocation status in real time WITHOUT downloading a full CRL?\\n- What is the purpose of a Certificate Revocation List (CRL)?",
        "keyTerms": [
          "certificates",
          "administrator",
          "finds",
          "internal",
          "issued",
          "wildcard"
        ],
        "examples": [
          "During an audit, security found a wildcard TLS certificate was issued to a development team without approval. The certificate is valid for all internal subdomains.",
          "An e-commerce site's TLS certificate private key was exposed. The CA revoked the certificate. The company needs browsers to detect this immediately."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 5,
        "slug": "security-controls",
        "title": "Security Controls",
        "studyPath": "/study#security-controls",
        "content": "## Security Controls\nSecurity Controls is covered in General Security Concepts. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- Select THREE examples of administrative (managerial) security controls.\\n- A PCI-DSS audit finds that a legacy payment terminal cannot be patched to meet current encryption standards. What type of control should the security team implement to address this gap?\\n- A security camera that records footage of a parking lot but does not trigger any alerts is an example of which type of security control?",
        "keyTerms": [
          "security",
          "controls",
          "select",
          "three",
          "examples",
          "administrative"
        ],
        "examples": [
          "A CISO is classifying all existing controls for an upcoming ISO 27001 audit. Controls must be categorized as technical, operational, or managerial.",
          "A retail chain uses point-of-sale terminals that cannot support TLS 1.2 or higher due to hardware limitations. Replacement is budgeted for next fiscal year."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 6,
        "slug": "wireless-security",
        "title": "Wireless Security",
        "studyPath": "/study#wireless-security",
        "content": "## Wireless Security\nWireless Security is covered in General Security Concepts. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- A company needs to deploy enterprise Wi-Fi where each user authenticates with their individual domain credentials rather than a shared passphrase. Which solution BEST meets this requirement?\\n- During a wireless security assessment, a tester sets up an access point with the same SSID as the corporate network and captures credentials. What type of attack is this?",
        "keyTerms": [
          "wireless",
          "security",
          "company",
          "needs",
          "deploy",
          "enterprise"
        ],
        "examples": [
          "The current Wi-Fi uses WPA2-Personal with a shared passphrase. After an employee departure, the company needs a solution that prevents former employees from accessing the network.",
          "The penetration tester positioned near a building entrance sets up a rogue hotspot. Employees automatically connect and their VPN credentials are captured via a captive portal."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 7,
        "slug": "zero-trust",
        "title": "Zero Trust",
        "studyPath": "/study#zero-trust",
        "content": "## Zero Trust\nZero Trust is covered in General Security Concepts. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- In a Zero Trust model, which component is responsible for making access decisions based on identity, device posture, and environmental signals?\\n- A company is migrating to a Zero Trust architecture. Which principle BEST describes the core assumption of Zero Trust?",
        "keyTerms": [
          "zero",
          "trust",
          "model",
          "which",
          "component",
          "responsible"
        ],
        "examples": [
          "An enterprise is deploying a Zero Trust Network Access solution. The architects need to identify which component evaluates contextual signals before allowing resource access.",
          "The IT security team is redesigning network access policies after a breach originated from a trusted internal device."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
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
        "content": "## Application Attacks\nApplication Attacks is covered in Threats, Vulnerabilities & Mitigations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- A malicious script is stored in a web forum database and executes in the browser of every user who views the affected post. Which vulnerability does this represent?\\n- A legitimate authenticated user unknowingly executes a malicious action on a web application because they clicked a link in an email that made a state-changing request using their active session. What vulnerability is exploited?\\n- Performance-based: A web application vulnerability scan reveals both SQL injection and stored XSS vulnerabilities. Arrange the CORRECT remediation priority and action sequence.",
        "keyTerms": [
          "application",
          "attacks",
          "malicious",
          "script",
          "stored",
          "forum"
        ],
        "examples": [
          "A user reports that visiting the company's internal support forum opens a pop-up and redirects them to an external site. The forum allows HTML in posts.",
          "An employee clicks a link in a phishing email while logged into the internal HR portal. Their session is used to submit a salary change request to the attacker's account."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 9,
        "slug": "insider-threats",
        "title": "Insider Threats",
        "studyPath": "/study#insider-threats",
        "content": "## Insider Threats\nInsider Threats is covered in Threats, Vulnerabilities & Mitigations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- A terminated employee's credentials are used to exfiltrate confidential project files three days after their last day. Which control failure MOST directly contributed to this incident?",
        "keyTerms": [
          "insider",
          "threats",
          "terminated",
          "employees",
          "credentials",
          "exfiltrate"
        ],
        "examples": [
          "The HR system notified IT of the termination but the helpdesk queue was backed up. The former employee's Active Directory account was still active."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 10,
        "slug": "malware",
        "title": "Malware",
        "studyPath": "/study#malware",
        "content": "## Malware\nMalware is covered in Threats, Vulnerabilities & Mitigations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- Which type of malware is specifically designed to allow an attacker to maintain persistent, hidden administrative access to a compromised system?\\n- A malware sample uses no files on disk, executing entirely from memory via injected shellcode into a legitimate process. Which malware category BEST describes this?\\n- A hospital's files are suddenly encrypted and a ransom demand appears on screens. Files have the extension '.LOCK' and shadow copies have been deleted. What type of malware is responsible?",
        "keyTerms": [
          "malware",
          "which",
          "specifically",
          "designed",
          "allow",
          "attacker"
        ],
        "examples": [
          "A forensic analyst discovers a compromised server where standard process listing tools show no suspicious processes, but network traffic analysis reveals outbound C2 communication.",
          "EDR telemetry shows PowerShell executing a Base64-encoded payload that injects code into explorer.exe. Antivirus finds no malicious files on disk."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 11,
        "slug": "network-attacks",
        "title": "Network Attacks",
        "studyPath": "/study#network-attacks",
        "content": "## Network Attacks\nNetwork Attacks is covered in Threats, Vulnerabilities & Mitigations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- An attacker poisons a DNS resolver's cache with a forged response, redirecting users of a legitimate banking website to a fake site. What attack technique is this?\\n- An attacker sends a massive flood of SYN packets to a web server from spoofed IP addresses, exhausting the server's TCP connection table. What type of attack is this?\\n- An attacker sends gratuitous ARP replies that associate their MAC address with the default gateway's IP address. All traffic destined for the internet now passes through the attacker's machine. What attack has occurred?",
        "keyTerms": [
          "network",
          "attacks",
          "attacker",
          "poisons",
          "resolvers",
          "cache"
        ],
        "examples": [
          "Users are being redirected to a convincing clone of their bank's website even though they type the correct URL. Packet capture shows the DNS response coming from an unauthorized source.",
          "A web server becomes unresponsive. Packet capture shows thousands of SYN packets arriving from different source IPs. No SYN-ACK responses are being completed."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 12,
        "slug": "password-attacks",
        "title": "Password Attacks",
        "studyPath": "/study#password-attacks",
        "content": "## Password Attacks\nPassword Attacks is covered in Threats, Vulnerabilities & Mitigations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- A security team discovers an attacker is attempting to log in to multiple accounts using only one or two common passwords (e.g., 'Welcome1!') across thousands of accounts. What attack is this and why is it effective?\\n- An attacker uses a list of username and password pairs leaked from a different website breach to attempt logins on a banking application. Many attempts succeed because users reuse passwords. What attack technique is this?\\n- An attacker captures Windows NTLM authentication hashes from a network segment and uses precomputed lookup tables to reverse them. Which type of attack uses these precomputed tables?",
        "keyTerms": [
          "password",
          "attacks",
          "security",
          "discovers",
          "attacker",
          "attempting"
        ],
        "examples": [
          "The SIEM shows login attempts across 5,000 accounts over 24 hours, each account attempted only twice. The password 'Welcome1!' appears in 90% of the attempts.",
          "The bank's security team sees thousands of login attempts with valid usernames and various passwords. The attempts use real credentials from a known third-party breach."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 13,
        "slug": "social-engineering",
        "title": "Social Engineering",
        "studyPath": "/study#social-engineering",
        "content": "## Social Engineering\nSocial Engineering is covered in Threats, Vulnerabilities & Mitigations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- An attacker calls the IT help desk pretending to be a regional manager and convinces a technician to reset a VIP user's account password. What social engineering technique is being used?\\n- Which social engineering attack targets a specific individual by researching their role, relationships, and interests to craft a highly personalized and convincing message?\\n- An employee receives an email appearing to be from their CEO requesting an urgent wire transfer to a new vendor. The sender's domain differs slightly from the company domain. What type of attack is this?",
        "keyTerms": [
          "social",
          "engineering",
          "attacker",
          "calls",
          "pretending",
          "regional"
        ],
        "examples": [
          "The attacker researched the target company's org chart on LinkedIn, knew the regional manager's name, and referenced a recent company event to appear legitimate.",
          "A threat intelligence report describes an APT group researching executives' Twitter feeds and LinkedIn profiles before sending targeted emails with references to recent family events."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 14,
        "slug": "supply-chain-attacks",
        "title": "Supply Chain Attacks",
        "studyPath": "/study#supply-chain-attacks",
        "content": "## Supply Chain Attacks\nSupply Chain Attacks is covered in Threats, Vulnerabilities & Mitigations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- Malicious code was inserted into a widely-used open-source build tool, affecting thousands of downstream software products. What type of attack does this represent?",
        "keyTerms": [
          "supply",
          "chain",
          "attacks",
          "malicious",
          "inserted",
          "widelyused"
        ],
        "examples": [
          "A threat intelligence report describes attackers compromising a build pipeline used by multiple software vendors. The malicious code was signed with the vendor's legitimate signing certificate."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 15,
        "slug": "threat-intelligence",
        "title": "Threat Intelligence",
        "studyPath": "/study#threat-intelligence",
        "content": "## Threat Intelligence\nThreat Intelligence is covered in Threats, Vulnerabilities & Mitigations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- A threat analyst identifies a pattern of attacker behavior including lateral movement techniques, persistence mechanisms, and command-and-control communication methods. Which framework BEST maps these behaviors?\\n- A security team wants to share indicators of compromise (IOCs) with partner organizations in a standardized machine-readable format. Which framework and protocol combination BEST supports this?",
        "keyTerms": [
          "threat",
          "intelligence",
          "analyst",
          "identifies",
          "pattern",
          "attacker"
        ],
        "examples": [
          "The SOC team wants to classify a newly discovered APT group's tactics and techniques to improve detection logic and identify gaps in current defenses.",
          "After a targeted attack, the CISO wants to share threat data including attacker TTPs and malware hashes with an industry ISAC and other peer companies automatically."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 16,
        "slug": "vulnerability-scanning",
        "title": "Vulnerability Scanning",
        "studyPath": "/study#vulnerability-scanning",
        "content": "## Vulnerability Scanning\nVulnerability Scanning is covered in Threats, Vulnerabilities & Mitigations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- A vulnerability scan identifies a finding with a CVSS v3.1 base score of 9.8 (Critical). The affected system is an internal-only database with no internet exposure. What should guide the organization's patching priority?\\n- Which type of vulnerability scan provides the MOST comprehensive view of vulnerabilities from an attacker's internal perspective by using domain credentials during the scan?\\n- What is the PRIMARY difference between a vulnerability assessment and a penetration test?",
        "keyTerms": [
          "vulnerability",
          "scanning",
          "identifies",
          "finding",
          "score",
          "critical"
        ],
        "examples": [
          "The security team has 200 findings from the latest scan. Resources allow patching 20 systems this week. The 9.8-score vulnerability is on a database server accessible only from the internal HR application.",
          "The security team is choosing between scan configurations. One scans anonymously and another uses a service account with read-only domain access."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
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
        "content": "## Cloud Security\nCloud Security is covered in Security Architecture. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- Select THREE security controls specific to containerized environments (e.g., Docker/Kubernetes) that reduce the risk of container-based attacks.\\n- A company uses a SaaS HR application. Under the shared responsibility model, which security function remains the customer's responsibility?\\n- Which cloud security control brokers access between cloud services and users, enforcing security policy (DLP, threat protection, access control) regardless of the user's location?",
        "keyTerms": [
          "cloud",
          "security",
          "select",
          "three",
          "controls",
          "specific"
        ],
        "examples": [
          "A DevOps team is deploying microservices in Kubernetes on a public cloud. The security team must define the container security baseline.",
          "The CISO is reviewing a cloud security policy and needs to clarify responsibility boundaries with the SaaS vendor for an upcoming compliance audit."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 18,
        "slug": "firewalls-ids-ips",
        "title": "Firewalls and IDS/IPS",
        "studyPath": "/study#firewalls-ids-ips",
        "content": "## Firewalls and IDS/IPS\nFirewalls and IDS/IPS is covered in Security Architecture. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- A NIDS generates an alert every time port 80 traffic contains the string 'SELECT * FROM'. Legitimate database administration web tools on the same network also trigger this alert. What is this called?\\n- Which security device inspects web application traffic and can block SQL injection and XSS attacks at layer 7, even if traffic uses HTTPS?\\n- Select THREE differences between an Intrusion Detection System (IDS) and an Intrusion Prevention System (IPS).",
        "keyTerms": [
          "firewalls",
          "idsips",
          "generates",
          "alert",
          "every",
          "traffic"
        ],
        "examples": [
          "The SOC receives 500 alerts per day from the IDS. Analysis reveals that 480 are from an authorized internal web-based database admin tool. Analysts are ignoring all IDS alerts as a result.",
          "An e-commerce application is being protected from OWASP Top 10 attacks. The security team needs a control that understands HTTP/HTTPS application context."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 19,
        "slug": "network-segmentation",
        "title": "Network Segmentation",
        "studyPath": "/study#network-segmentation",
        "content": "## Network Segmentation\nNetwork Segmentation is covered in Security Architecture. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- Performance-based: A new corporate network is being designed. Place the CORRECT components in their appropriate network zones to implement defense-in-depth.\\n- An organization places its public web server in a network segment that can receive internet traffic but is isolated from the internal corporate network. What is this network segment called?\\n- A hospital wants to ensure that a compromised IoT medical device cannot communicate with the EHR server. Which network architecture BEST limits the blast radius of such a compromise?",
        "keyTerms": [
          "network",
          "segmentation",
          "performancebased",
          "corporate",
          "being",
          "designed"
        ],
        "examples": [
          "PBQ: Assets to place: public web server, internal ERP database, employee workstations, email gateway. Zones: Internet-facing DMZ, Internal application zone, Secure data zone, User zone. Each must be placed in the zone that provides appropriate access control and isolation.",
          "A network architect is designing a new infrastructure. The web server must accept connections from the internet but should not be able to initiate connections to internal HR and finance servers."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 20,
        "slug": "secure-coding",
        "title": "Secure Coding",
        "studyPath": "/study#secure-coding",
        "content": "## Secure Coding\nSecure Coding is covered in Security Architecture. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- Which application security testing method analyzes source code for vulnerabilities WITHOUT executing the application?",
        "keyTerms": [
          "secure",
          "coding",
          "which",
          "application",
          "security",
          "testing"
        ],
        "examples": [
          "A development team wants to integrate security testing into their CI/CD pipeline to catch vulnerabilities as early as possible in the development lifecycle."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 21,
        "slug": "secure-protocols",
        "title": "Secure Protocols",
        "studyPath": "/study#secure-protocols",
        "content": "## Secure Protocols\nSecure Protocols is covered in Security Architecture. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- Select THREE protocols that should be DISABLED or replaced on a hardened network switch to reduce attack surface.\\n- An administrator needs to remotely manage a Linux server securely. Which protocol should be used instead of Telnet?",
        "keyTerms": [
          "secure",
          "protocols",
          "select",
          "three",
          "should",
          "disabled"
        ],
        "examples": [
          "A security engineer is hardening a core distribution switch following the CIS Benchmarks. The task is to identify protocols that are either deprecated or unnecessary in a secure environment.",
          "The legacy management interface uses Telnet. A security audit flags this as a high-risk finding because credentials and commands are transmitted in cleartext."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 22,
        "slug": "virtualization",
        "title": "Virtualization",
        "studyPath": "/study#virtualization",
        "content": "## Virtualization\nVirtualization is covered in Security Architecture. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- An attacker exploits a vulnerability in a VM to break out of the virtualized environment and gain access to the hypervisor and other VMs on the same host. What is this attack called?",
        "keyTerms": [
          "virtualization",
          "attacker",
          "exploits",
          "vulnerability",
          "break",
          "virtualized"
        ],
        "examples": [
          "A cloud hosting provider discovers that a customer VM is interacting with memory addresses outside its allocated space. Other VMs on the same physical host are potentially compromised."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 23,
        "slug": "vpn",
        "title": "VPN",
        "studyPath": "/study#vpn",
        "content": "## VPN\nVPN is covered in Security Architecture. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- Which VPN protocol uses IPsec in Transport mode with IKEv2 to provide strong authentication and is natively supported on most modern operating systems without third-party clients?\\n- A remote employee's VPN connection is configured so that only corporate traffic goes through the VPN tunnel while personal internet traffic goes directly to the internet. What VPN configuration is this?",
        "keyTerms": [
          "which",
          "protocol",
          "ipsec",
          "transport",
          "ikev2",
          "provide"
        ],
        "examples": [
          "An enterprise needs a remote access VPN solution for employee laptops. The requirement is native OS support (no agent deployment), strong authentication, and compatibility with network address translation.",
          "The IT team receives complaints that internet speed is slow for remote workers. Investigation reveals all internet traffic is routed through the corporate VPN gateway, consuming bandwidth."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
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
        "content": "## Data Security\nData Security is covered in Security Operations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- A DLP alert fires when an employee emails a file to a personal Gmail account. The file contains a pattern matching credit card numbers (16-digit sequences). Which DLP inspection method triggered this alert?\\n- A database stores credit card numbers as tokens (e.g., '7291-xxxx-xxxx-3847'). The original card numbers are stored in a separate, highly secured vault. What data protection technique is this?\\n- A healthcare organization needs to share patient data with a research partner for statistical analysis. The data must be usable for research but cannot expose individual patient identities. Which data protection technique BEST meets this requirement?",
        "keyTerms": [
          "data",
          "security",
          "alert",
          "fires",
          "employee",
          "emails"
        ],
        "examples": [
          "The DLP policy was configured to scan outbound email attachments. The employee claims the file contains invoice numbers, not credit cards.",
          "The company processes payments but doesn't want to store raw PAN (Primary Account Number) data. The tokens are used throughout the application for reference but are worthless to attackers."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 25,
        "slug": "digital-forensics",
        "title": "Digital Forensics",
        "studyPath": "/study#digital-forensics",
        "content": "## Digital Forensics\nDigital Forensics is covered in Security Operations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- A forensic analyst creates a bitwise copy of a suspect hard drive and documents the SHA-256 hash of both the original and the copy before and after imaging. What forensic principle does this demonstrate?\\n- A forensic investigator must collect evidence from a compromised workstation. In what order should evidence be collected according to the order of volatility?\\n- Which tool is specifically designed to create a bitwise forensic copy of a hard drive while ensuring the source drive is not modified?",
        "keyTerms": [
          "digital",
          "forensics",
          "forensic",
          "analyst",
          "creates",
          "bitwise"
        ],
        "examples": [
          "The evidence must be presentable in court. The defense may challenge the integrity of the forensic copy.",
          "The workstation may be powered down at any time by facilities staff. The investigator must prioritize evidence collection."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 26,
        "slug": "endpoint-security",
        "title": "Endpoint Security",
        "studyPath": "/study#endpoint-security",
        "content": "## Endpoint Security\nEndpoint Security is covered in Security Operations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- Which endpoint security solution records detailed behavioral telemetry (process trees, file changes, network connections) from endpoints, enabling retrospective threat hunting after an incident?\\n- An organization wants to prevent data exfiltration via removable USB drives on employee workstations while still allowing USB keyboards and mice. Which control BEST achieves this?\\n- Select THREE application control techniques that prevent unauthorized software from executing on endpoints.",
        "keyTerms": [
          "endpoint",
          "security",
          "which",
          "solution",
          "records",
          "detailed"
        ],
        "examples": [
          "During a breach investigation, the security team needs to reconstruct exactly what happened on a compromised laptop 30 days ago. Traditional antivirus only logged infection events.",
          "After a data theft incident involving a USB thumb drive, the CISO mandates that USB storage must be blocked but input devices must continue to function."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 27,
        "slug": "identity-access-management",
        "title": "Identity and Access Management",
        "studyPath": "/study#identity-access-management",
        "content": "## Identity and Access Management\nIdentity and Access Management is covered in Security Operations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- An API uses OAuth 2.0 and a user grants a third-party app access to their calendar data. The app receives a token that allows calendar access only, not email. Which OAuth concept limits the app's permissions?\\n- A user needs temporary administrative access to a production server for a 2-hour maintenance window. Which IAM practice BEST minimizes risk in this scenario?\\n- Which access control model assigns permissions based on a user's job function within an organization?",
        "keyTerms": [
          "identity",
          "access",
          "management",
          "oauth",
          "grants",
          "thirdparty"
        ],
        "examples": [
          "A calendar scheduling app requests permissions during OAuth flow. The developer is concerned about the app having more access than it needs.",
          "The system administrator needs root access to a Linux production server for scheduled patching. Granting permanent admin access violates the principle of least privilege."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 28,
        "slug": "incident-response",
        "title": "Incident Response",
        "studyPath": "/study#incident-response",
        "content": "## Incident Response\nIncident Response is covered in Security Operations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- Select THREE artifacts that should be collected from a compromised Windows workstation during the identification phase of incident response.\\n- Which incident response phase focuses on activities BEFORE an incident occurs, such as creating playbooks, training staff, and deploying monitoring tools?\\n- During incident response, the team identifies the scope of a malware infection across 50 workstations. What is the NEXT phase of the incident response lifecycle after identification?",
        "keyTerms": [
          "incident",
          "response",
          "select",
          "three",
          "artifacts",
          "should"
        ],
        "examples": [
          "A workstation shows signs of compromise. The incident response team must collect digital evidence before any remediation steps are taken.",
          "The CISO is reviewing the incident response program maturity. Several phases are funded but the team has no documented procedures or communication plans."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 29,
        "slug": "network-monitoring",
        "title": "Network Monitoring",
        "studyPath": "/study#network-monitoring",
        "content": "## Network Monitoring\nNetwork Monitoring is covered in Security Operations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- Which protocol collects network flow data (source/destination IP, port, protocol, bytes transferred) from routers and switches WITHOUT capturing full packet contents?\\n- A security analyst sees large amounts of DNS query traffic to a single external domain at regular intervals, with the subdomain portion of each query containing seemingly random long strings. What attack technique does this most likely indicate?\\n- A security analyst needs to capture all network packets traversing a core switch for analysis. Which network device feature should be configured to accomplish this?",
        "keyTerms": [
          "network",
          "monitoring",
          "which",
          "protocol",
          "collects",
          "sourcedestination"
        ],
        "examples": [
          "A network administrator wants to monitor traffic patterns and detect anomalies without the storage overhead of full packet capture.",
          "DNS queries like 'aGVsbG8gd29ybGQ.evil-c2-domain.com' and 'dGhpcyBpcyBhIHRlc3Q.evil-c2-domain.com' are appearing in DNS logs every 60 seconds from an internal workstation."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 30,
        "slug": "siem-soar",
        "title": "SIEM and SOAR",
        "studyPath": "/study#siem-soar",
        "content": "## SIEM and SOAR\nSIEM and SOAR is covered in Security Operations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- Performance-based: The SOC receives a SIEM alert for unusual after-hours login to a privileged account followed by access to HR file shares. Arrange the CORRECT incident response sequence.\\n- A SIEM correlation rule fires when five failed logins are followed by a successful login from the same source IP within 10 minutes. What type of activity is this rule designed to detect?\\n- A SOC analyst receives 800 alerts per day and manually investigates each one. Which technology would MOST effectively automate the triage and initial response to known, low-complexity alerts?",
        "keyTerms": [
          "siem",
          "soar",
          "performancebased",
          "receives",
          "alert",
          "unusual"
        ],
        "examples": [
          "PBQ: Alert at 2:17 AM: Domain admin account logs in from an unrecognized IP in Eastern Europe. Access to \\\\HR-SERVER\\Payroll and \\\\HR-SERVER\\Personnel. The user's manager confirms the user is on vacation in Asia. EDR shows lateral movement attempts.",
          "The SOC is tuning detection rules for the new SIEM deployment. An analyst reviews the rule logic and asks what threat it targets."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 31,
        "slug": "vulnerability-management",
        "title": "Vulnerability Management",
        "studyPath": "/study#vulnerability-management",
        "content": "## Vulnerability Management\nVulnerability Management is covered in Security Operations. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- A critical CVE is published for an Apache web server with a CVSS score of 10.0. Proof-of-concept exploit code is publicly available. What is the MOST important first action the security team should take?\\n- Which metric in the CVSS v3.1 scoring system represents how easily an attacker can exploit a vulnerability without requiring special conditions?",
        "keyTerms": [
          "vulnerability",
          "management",
          "critical",
          "published",
          "apache",
          "server"
        ],
        "examples": [
          "The security team is alerted at 6 PM. The company has 15 Apache servers — 3 public-facing and 12 internal. IT change management requires a 2-week patch window.",
          "A security analyst is reviewing a CVE with CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H and needs to explain why it scores 9.8."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
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
        "content": "## Business Continuity and Disaster Recovery\nBusiness Continuity and Disaster Recovery is covered in Security Program Management & Oversight. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- Select THREE DR site types ordered from FASTEST to SLOWEST recovery capability.\\n- A financial institution requires that its core banking system be restored within 4 hours of a disaster, and data loss must not exceed 30 minutes of transactions. Which DR metrics define these requirements?\\n- A company's DR test involves IT staff walking through a written scenario step-by-step in a conference room without actually activating any systems. What type of DR test is this?",
        "keyTerms": [
          "business",
          "continuity",
          "disaster",
          "recovery",
          "select",
          "three"
        ],
        "examples": [
          "The BC team is evaluating three DR options for the CIO. Cost, complexity, and recovery time must all be considered in the recommendation.",
          "The BCP team is documenting DR requirements for a regulatory exam. The exam requires specific recovery metrics to be documented and tested."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 33,
        "slug": "compliance-frameworks",
        "title": "Compliance Frameworks",
        "studyPath": "/study#compliance-frameworks",
        "content": "## Compliance Frameworks\nCompliance Frameworks is covered in Security Program Management & Oversight. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- A healthcare organization's cloud provider undergoes a SOC 2 Type II audit. What does this audit assess, and how does it differ from SOC 2 Type I?\\n- Which regulation requires organizations to protect the privacy of EU residents' personal data and mandates breach notification within 72 hours?\\n- Which security framework provides a risk-based approach to managing cybersecurity risk using five core functions: Identify, Protect, Detect, Respond, and Recover?",
        "keyTerms": [
          "compliance",
          "frameworks",
          "healthcare",
          "organizations",
          "cloud",
          "provider"
        ],
        "examples": [
          "A hospital is selecting a cloud EHR vendor. Their legal team asks whether they should require a SOC 2 Type I or Type II report.",
          "A US-based company that sells products to European customers asks their legal team which regulation governs their data handling obligations for EU customer data."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 34,
        "slug": "risk-management",
        "title": "Risk Management",
        "studyPath": "/study#risk-management",
        "content": "## Risk Management\nRisk Management is covered in Security Program Management & Oversight. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- Select THREE components that should be included in a formal risk register.\\n- A risk analysis calculates that a flood has a 10% annual probability of damaging a data center and the estimated loss per event is $500,000. What is the Annualized Loss Expectancy (ALE)?\\n- A company accepts a known vulnerability in a legacy system because the cost of mitigation exceeds the expected loss. An executive formally documents and signs this decision. What risk treatment strategy has been applied?",
        "keyTerms": [
          "risk",
          "management",
          "select",
          "three",
          "components",
          "should"
        ],
        "examples": [
          "A GRC analyst is building the organization's first risk register for an ISO 27001 certification. The auditor will review it for completeness.",
          "The CFO asks for a quantitative justification for investing $60,000/year in flood mitigation controls."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 35,
        "slug": "security-awareness-training",
        "title": "Security Awareness Training",
        "studyPath": "/study#security-awareness-training",
        "content": "## Security Awareness Training\nSecurity Awareness Training is covered in Security Program Management & Oversight. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- A company launches a phishing simulation and 35% of employees click the link. Clickers receive immediate feedback explaining the mistake. What is the PRIMARY purpose of this program element?\\n- Select THREE metrics that BEST measure the effectiveness of a security awareness training program.",
        "keyTerms": [
          "security",
          "awareness",
          "training",
          "company",
          "launches",
          "phishing"
        ],
        "examples": [
          "The security team is designing a security awareness program. They debate whether to use punitive measures or educational interventions for employees who click simulated phishing emails.",
          "The CISO needs to report on the ROI of the security awareness program to the board. The board wants data-driven evidence, not just completion rates."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 36,
        "slug": "security-policies",
        "title": "Security Policies",
        "studyPath": "/study#security-policies",
        "content": "## Security Policies\nSecurity Policies is covered in Security Program Management & Oversight. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- A policy that defines what employees may and may not do with company IT resources — including personal use, social media, and software installation — is called a/an:\\n- Select THREE elements that a data retention and disposal policy MUST address to be effective for compliance purposes.\\n- A security policy states that all sensitive data must be encrypted, but does not specify which encryption algorithm or key length to use. What document would provide those technical specifications?",
        "keyTerms": [
          "security",
          "policies",
          "policy",
          "defines",
          "employees",
          "company"
        ],
        "examples": [
          "HR asks the security team to help create a document that all employees must sign, acknowledging the rules for using company computers, phones, and networks.",
          "The company is preparing for a GDPR audit. The Data Protection Officer reviews the existing data retention policy and identifies critical gaps."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      },
      {
        "id": 37,
        "slug": "vendor-management",
        "title": "Vendor Management",
        "studyPath": "/study#vendor-management",
        "content": "## Vendor Management\nVendor Management is covered in Security Program Management & Oversight. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n- A company's critical SaaS vendor announces it is shutting down with 30 days' notice. The company relied on this vendor for customer invoicing. Which risk management failure does this MOST represent?\\n- A company shares customer data with a third-party payroll processor. Which document establishes the security requirements the vendor must meet to protect this data?",
        "keyTerms": [
          "vendor",
          "management",
          "companys",
          "critical",
          "announces",
          "shutting"
        ],
        "examples": [
          "The vendor's shutdown means the company cannot generate or send invoices. The company has no contract provisions addressing vendor exit or data portability.",
          "The legal team is drafting agreements for a new vendor relationship. The vendor will process employee PII. The security team must ensure contractual protections exist."
        ],
        "tips": [
          "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
          "Match the control to the scenario context before selecting the answer."
        ]
      }
    ]
  }
];
