import type { QuestionPayload } from "@/lib/exam";

export type ExamSet = {
  setNumber: number;
  questions: QuestionPayload[];
};

export const EXAM_SETS: ExamSet[] = [
  {
    "setNumber": 1,
    "questions": [
      {
        "id": 1,
        "qid": "Q0001",
        "prompt": "Performance-based: A security team discovers that encrypted database backups are being sent to an untrusted third-party cloud. Place the CORRECT response sequence to address this incident and prevent future occurrences.",
        "type": "performance-based",
        "difficulty": "hard",
        "options": [
          "Revoke the exposed encryption key → re-encrypt existing backups with a new key stored in a KMS → implement backup destination allowlists → audit and alert on backup job changes",
          "Continue backup operations unchanged → rotate encryption keys quarterly → notify affected users after 90 days",
          "Delete all cloud backups immediately → disable backup jobs → wait for audit completion",
          "Increase AES key length to 256-bit → continue sending to the same destination → log the incident"
        ],
        "explanation": "The correct sequence addresses immediate exposure (revoke the key), remediates existing data (re-encrypt), prevents recurrence (destination controls), and maintains visibility (alerting). Continuing operations ignores an active compromise. Deleting backups may destroy evidence and business data. Simply upgrading key length while continuing to the unauthorized destination does not stop exfiltration.",
        "correctAnswers": [
          "Revoke the exposed encryption key → re-encrypt existing backups with a new key stored in a KMS → implement backup destination allowlists → audit and alert on backup job changes"
        ],
        "scenario": "PBQ: Audit logs show AES-128 encrypted backups being exfiltrated to an unauthorized S3 bucket. The encryption key is stored in the same repository as the backup script. Evidence includes access logs, backup scripts, and key management records.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#cryptography"
      },
      {
        "id": 2,
        "qid": "Q0002",
        "prompt": "A critical CVE is published for an Apache web server with a CVSS score of 10.0. Proof-of-concept exploit code is publicly available. What is the MOST important first action the security team should take?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Immediately patch all 15 Apache servers without testing",
          "Submit a change management request for the 2-week window",
          "Assess exposure and implement compensating controls for internet-facing servers while expediting the patch",
          "Wait for the vendor to confirm severity before acting"
        ],
        "explanation": "A CVSS 10.0 with public exploit code requires immediate action that doesn't wait for standard change windows. Assess which servers are exposed (3 public-facing = highest priority), implement compensating controls (WAF rules, network isolation, disable the vulnerable feature), and expedite emergency patching. Patching without testing can cause outages. The 2-week window is inappropriate for a critical public exploit.",
        "correctAnswers": [
          "Assess exposure and implement compensating controls for internet-facing servers while expediting the patch"
        ],
        "scenario": "The security team is alerted at 6 PM. The company has 15 Apache servers, 3 public-facing and 12 internal. IT change management requires a 2-week patch window.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#vulnerability-management"
      },
      {
        "id": 3,
        "qid": "Q0003",
        "prompt": "An attacker poisons a DNS resolver's cache with a forged response, redirecting users of a legitimate banking website to a fake site. What attack technique is this?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Domain hijacking",
          "DNS cache poisoning",
          "BGP hijacking",
          "Typosquatting"
        ],
        "explanation": "DNS cache poisoning injects fraudulent DNS records into a resolver's cache, redirecting users to attacker-controlled servers. Domain hijacking transfers domain registration control to the attacker. BGP hijacking reroutes internet traffic by manipulating routing tables. Typosquatting registers domains similar to legitimate ones (e.g., g00gle.com) to catch mistyped URLs.",
        "correctAnswers": [
          "DNS cache poisoning"
        ],
        "scenario": "Users are being redirected to a convincing clone of their bank's website even though they type the correct URL. Packet capture shows the DNS response coming from an unauthorized source.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#network-attacks"
      },
      {
        "id": 4,
        "qid": "Q0004",
        "prompt": "Select THREE artifacts that should be collected from a compromised Windows workstation during the identification phase of incident response.",
        "type": "multiple-choice-multiple",
        "difficulty": "hard",
        "options": [
          "Windows Event Logs (Security, System, Application)",
          "Running process list and parent-child relationships",
          "Physical removal of the hard drive without imaging",
          "Prefetch files and recently accessed file list",
          "Reinstall the OS to remove malware before evidence collection"
        ],
        "explanation": "Event logs contain authentication, process creation, and service events critical to timeline reconstruction. Running processes show active malware and parent-child relationships reveal execution chains. Prefetch files show program execution history. Physical hard drive removal without imaging destroys evidence integrity (bitwise imaging with a write-blocker is required). Never reinstall before collecting evidence.",
        "correctAnswers": [
          "Windows Event Logs (Security, System, Application)",
          "Running process list and parent-child relationships",
          "Prefetch files and recently accessed file list"
        ],
        "scenario": "A workstation shows signs of compromise. The incident response team must collect digital evidence before any remediation steps are taken.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#incident-response"
      },
      {
        "id": 5,
        "qid": "Q0005",
        "prompt": "A company wants to add a second authentication factor that is resistant to phishing attacks and does not require a mobile phone. Which option BEST meets this requirement?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "SMS one-time password",
          "TOTP authenticator app",
          "FIDO2 hardware security key",
          "Push notification via mobile app"
        ],
        "explanation": "FIDO2 hardware security keys (e.g., YubiKey) are phishing-resistant because authentication is bound to the origin domain, a fake site cannot intercept and replay the credential. SMS OTP is vulnerable to SIM-swapping. TOTP codes can be phished in real-time. Push notifications can be exploited via MFA fatigue attacks.",
        "correctAnswers": [
          "FIDO2 hardware security key"
        ],
        "scenario": "Executives have complained that SMS codes are inconvenient when traveling internationally. IT also needs a solution resilient to SIM-swapping attacks.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#authentication"
      },
      {
        "id": 6,
        "qid": "Q0006",
        "prompt": "Select THREE protocols that should be DISABLED or replaced on a hardened network switch to reduce attack surface.",
        "type": "multiple-choice-multiple",
        "difficulty": "medium",
        "options": [
          "Telnet",
          "SNMPv1",
          "SSH v2",
          "Spanning Tree PortFast on user ports",
          "HTTP-based management interface"
        ],
        "explanation": "Telnet transmits all data including credentials in cleartext. SNMPv1 uses unencrypted community strings. HTTP management interfaces transmit credentials and configs in cleartext. All three should be replaced with SSH, SNMPv3, and HTTPS respectively. SSH v2 is the secure replacement for Telnet and should be enabled. STP PortFast is a performance/security feature, not inherently insecure on user ports.",
        "correctAnswers": [
          "Telnet",
          "SNMPv1",
          "HTTP-based management interface"
        ],
        "scenario": "A security engineer is hardening a core distribution switch following the CIS Benchmarks. The task is to identify protocols that are either deprecated or unnecessary in a secure environment.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#secure-protocols"
      },
      {
        "id": 7,
        "qid": "Q0007",
        "prompt": "An attacker calls the IT help desk pretending to be a regional manager and convinces a technician to reset a VIP user's account password. What social engineering technique is being used?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Phishing",
          "Pretexting",
          "Baiting",
          "Tailgating"
        ],
        "explanation": "Pretexting involves creating a fabricated scenario (pretext) to manipulate a target into performing an action or divulging information. The attacker researched background information to make the false identity believable. Phishing is email-based. Baiting uses physical media or promises of reward. Tailgating is physical access through a secured door.",
        "correctAnswers": [
          "Pretexting"
        ],
        "scenario": "The attacker researched the target company's org chart on LinkedIn, knew the regional manager's name, and referenced a recent company event to appear legitimate.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#social-engineering"
      },
      {
        "id": 8,
        "qid": "Q0008",
        "prompt": "An API uses OAuth 2.0 and a user grants a third-party app access to their calendar data. The app receives a token that allows calendar access only, not email. Which OAuth concept limits the app's permissions?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "OAuth state parameter",
          "OAuth scope",
          "OAuth grant type",
          "OAuth PKCE"
        ],
        "explanation": "OAuth scopes define the specific permissions a client application can request (e.g., 'calendar.read' but not 'email.read'), limiting access to only what's necessary. The state parameter prevents CSRF in OAuth flows. Grant types (authorization code, implicit, client credentials) define the authentication flow. PKCE (Proof Key for Code Exchange) prevents authorization code interception attacks.",
        "correctAnswers": [
          "OAuth scope"
        ],
        "scenario": "A calendar scheduling app requests permissions during OAuth flow. The developer is concerned about the app having more access than it needs.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#identity-access-management"
      },
      {
        "id": 9,
        "qid": "Q0009",
        "prompt": "Select THREE components that should be included in a formal risk register.",
        "type": "multiple-choice-multiple",
        "difficulty": "hard",
        "options": [
          "Risk description and unique identifier",
          "Risk owner (responsible party)",
          "Stock price on the day the risk was identified",
          "Risk likelihood and impact rating",
          "Current treatment strategy and residual risk"
        ],
        "explanation": "A risk register must include: a clear risk description with unique ID (for tracking), a risk owner (accountability), and a risk rating (likelihood × impact for prioritization). Current treatment strategy and residual risk are also core elements (noting all five selected options minus stock price would be ideal). Stock price is irrelevant to risk management. All other options listed are legitimate risk register components.",
        "correctAnswers": [
          "Risk description and unique identifier",
          "Risk owner (responsible party)",
          "Risk likelihood and impact rating"
        ],
        "scenario": "A GRC analyst is building the organization's first risk register for an ISO 27001 certification. The auditor will review it for completeness.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#risk-management"
      },
      {
        "id": 10,
        "qid": "Q0010",
        "prompt": "A terminated employee's credentials are used to exfiltrate confidential project files three days after their last day. Which control failure MOST directly contributed to this incident?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Lack of DLP solution",
          "Failure to revoke access promptly after termination",
          "Absence of an acceptable use policy",
          "Insufficient security awareness training"
        ],
        "explanation": "The most direct cause is that the terminated employee's account was not disabled at termination. Offboarding procedures must include immediate access revocation. DLP could have detected exfiltration but doesn't prevent authentication. An AUP governs behavior but can't stop a determined departing employee. Security training wouldn't prevent a motivated insider.",
        "correctAnswers": [
          "Failure to revoke access promptly after termination"
        ],
        "scenario": "The HR system notified IT of the termination but the helpdesk queue was backed up. The former employee's Active Directory account was still active.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#insider-threats"
      },
      {
        "id": 11,
        "qid": "Q0011",
        "prompt": "An administrator finds that an internal CA issued a wildcard certificate for *.internal.corp to an unauthorized service. Which PKI control would have BEST prevented this?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Enabling OCSP on the root CA",
          "Implementing certificate transparency with policy constraints",
          "Requiring CA authorization records (CAA DNS records) for all issuances",
          "Switching from RSA-2048 to ECDSA certificates"
        ],
        "explanation": "Certificate Transparency (CT) with CA policy constraints (including name constraints and issuance policies enforced on the CA) creates an auditable log and enforces what certificates can be issued. CAA records restrict which CAs can issue for external domains but don't apply to internal CAs. OCSP manages revocation, not issuance control. Key algorithm changes don't prevent unauthorized issuance.",
        "correctAnswers": [
          "Implementing certificate transparency with policy constraints"
        ],
        "scenario": "During an audit, security found a wildcard TLS certificate was issued to a development team without approval. The certificate is valid for all internal subdomains.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#pki-certificates"
      },
      {
        "id": 12,
        "qid": "Q0012",
        "prompt": "A security team discovers an attacker is attempting to log in to multiple accounts using only one or two common passwords (e.g., 'Welcome1!') across thousands of accounts. What attack is this and why is it effective?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Brute force, it tries all possible combinations",
          "Password spraying, it avoids account lockout thresholds",
          "Credential stuffing, it uses breached credentials",
          "Dictionary attack, it uses a wordlist of common passwords"
        ],
        "explanation": "Password spraying attempts one or a few common passwords against many accounts, staying below the lockout threshold per account. It's effective because many organizations have users with passwords like 'Welcome1!' that meet basic complexity requirements. Brute force targets one account with many passwords. Credential stuffing uses known username/password pairs. Dictionary attacks try many passwords against fewer accounts.",
        "correctAnswers": [
          "Password spraying, it avoids account lockout thresholds"
        ],
        "scenario": "The SIEM shows login attempts across 5,000 accounts over 24 hours, each account attempted only twice. The password 'Welcome1!' appears in 90% of the attempts.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#password-attacks"
      },
      {
        "id": 13,
        "qid": "Q0013",
        "prompt": "Performance-based: A new corporate network is being designed. Place the CORRECT components in their appropriate network zones to implement defense-in-depth.",
        "type": "performance-based",
        "difficulty": "hard",
        "options": [
          "Web server → Internet DMZ | Email gateway → Internet DMZ | Workstations → User zone | ERP database → Secure data zone",
          "Web server → User zone | Email gateway → Secure data zone | Workstations → Internet DMZ | ERP database → Internal zone",
          "Web server → Secure data zone | All others → Internet DMZ",
          "All assets → Single flat network with perimeter firewall only"
        ],
        "explanation": "Public-facing assets (web server, email gateway) belong in the DMZ where they can receive internet traffic but are isolated from internal resources. Employee workstations in the user zone have access to business applications but not directly to sensitive databases. The ERP database with sensitive business data sits in the most protected zone with restricted access only from authorized application servers.",
        "correctAnswers": [
          "Web server → Internet DMZ | Email gateway → Internet DMZ | Workstations → User zone | ERP database → Secure data zone"
        ],
        "scenario": "PBQ: Assets to place: public web server, internal ERP database, employee workstations, email gateway. Zones: Internet-facing DMZ, Internal application zone, Secure data zone, User zone. Each must be placed in the zone that provides appropriate access control and isolation.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#network-segmentation"
      },
      {
        "id": 14,
        "qid": "Q0014",
        "prompt": "Which incident response phase focuses on activities BEFORE an incident occurs, such as creating playbooks, training staff, and deploying monitoring tools?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Containment",
          "Detection and Analysis",
          "Preparation",
          "Post-incident Activity"
        ],
        "explanation": "The Preparation phase includes all proactive activities: developing and documenting incident response playbooks, training the IR team, deploying detection tools (SIEM, EDR), establishing communication chains, and setting up IR infrastructure. Containment stops an active incident from spreading. Detection and Analysis identifies and investigates incidents. Post-incident Activity reviews what happened after resolution.",
        "correctAnswers": [
          "Preparation"
        ],
        "scenario": "The CISO is reviewing the incident response program maturity. Several phases are funded but the team has no documented procedures or communication plans.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#incident-response"
      },
      {
        "id": 15,
        "qid": "Q0015",
        "prompt": "An attacker uses a list of username and password pairs leaked from a different website breach to attempt logins on a banking application. Many attempts succeed because users reuse passwords. What attack technique is this?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Brute force",
          "Dictionary attack",
          "Credential stuffing",
          "Password spraying"
        ],
        "explanation": "Credential stuffing uses breached username/password pairs from one service to attack another, exploiting password reuse. Brute force tries all possible character combinations. Dictionary attacks use a wordlist of common passwords. Password spraying tries one or few passwords against many accounts to avoid lockout.",
        "correctAnswers": [
          "Credential stuffing"
        ],
        "scenario": "The bank's security team sees thousands of login attempts with valid usernames and various passwords. The attempts use real credentials from a known third-party breach.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#password-attacks"
      },
      {
        "id": 16,
        "qid": "Q0016",
        "prompt": "A NIDS generates an alert every time port 80 traffic contains the string 'SELECT * FROM'. Legitimate database administration web tools on the same network also trigger this alert. What is this called?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "False negative",
          "True positive",
          "False positive",
          "Alert fatigue only, this is expected behavior"
        ],
        "explanation": "A false positive occurs when a security system incorrectly identifies benign activity as malicious. The legitimate database tool triggers the signature because the traffic pattern matches, but it's not an actual attack. Excessive false positives cause alert fatigue. A false negative is a missed real attack. A true positive is a correctly identified real attack.",
        "correctAnswers": [
          "False positive"
        ],
        "scenario": "The SOC receives 500 alerts per day from the IDS. Analysis reveals that 480 are from an authorized internal web-based database admin tool. Analysts are ignoring all IDS alerts as a result.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#firewalls-ids-ips"
      },
      {
        "id": 17,
        "qid": "Q0017",
        "prompt": "A vulnerability scan identifies a finding with a CVSS v3.1 base score of 9.8 (Critical). The affected system is an internal-only database with no internet exposure. What should guide the organization's patching priority?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Patch it immediately because CVSS 9.8 always requires emergency response",
          "Deprioritize it because the system has no internet exposure, CVSS alone determines priority",
          "Consider CVSS score alongside asset exposure, data sensitivity, and compensating controls to assign real priority",
          "Ignore it since internal systems are not at risk from external attackers"
        ],
        "explanation": "CVSS provides a standardized severity score but does not account for environmental context. Risk-based prioritization considers CVSS + asset value, data sensitivity, exploitability in the current environment, existing compensating controls, and threat intelligence. A 9.8 on an isolated, well-compensated system may be lower priority than a 7.0 on an internet-facing payment server.",
        "correctAnswers": [
          "Consider CVSS score alongside asset exposure, data sensitivity, and compensating controls to assign real priority"
        ],
        "scenario": "The security team has 200 findings from the latest scan. Resources allow patching 20 systems this week. The 9.8-score vulnerability is on a database server accessible only from the internal HR application.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#vulnerability-scanning"
      },
      {
        "id": 18,
        "qid": "Q0018",
        "prompt": "Select THREE security controls specific to containerized environments (e.g., Docker/Kubernetes) that reduce the risk of container-based attacks.",
        "type": "multiple-choice-multiple",
        "difficulty": "hard",
        "options": [
          "Running containers as non-root with read-only filesystem",
          "Using the same container image for all environments regardless of security scan results",
          "Enabling network policies to restrict pod-to-pod communication",
          "Implementing image scanning in the CI/CD pipeline",
          "Granting all containers host-level privileges for simplicity"
        ],
        "explanation": "Non-root containers with read-only filesystems reduce the impact of a container compromise. Kubernetes network policies implement microsegmentation between pods. Image scanning detects vulnerabilities before deployment. Using the same image in all environments without scanning perpetuates vulnerabilities. Granting host-level privileges enables container escape to the host OS.",
        "correctAnswers": [
          "Running containers as non-root with read-only filesystem",
          "Enabling network policies to restrict pod-to-pod communication",
          "Implementing image scanning in the CI/CD pipeline"
        ],
        "scenario": "A DevOps team is deploying microservices in Kubernetes on a public cloud. The security team must define the container security baseline.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#cloud-security"
      },
      {
        "id": 19,
        "qid": "Q0019",
        "prompt": "A company needs to deploy enterprise Wi-Fi where each user authenticates with their individual domain credentials rather than a shared passphrase. Which solution BEST meets this requirement?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "WPA3-Personal with SAE",
          "WPA2-Enterprise with 802.1X and RADIUS",
          "WEP with MAC address filtering",
          "WPA2-Personal with a complex passphrase change"
        ],
        "explanation": "WPA2/WPA3-Enterprise with 802.1X and RADIUS authenticates each user with individual credentials (domain username/password, certificates). Revoking a single user's account immediately denies Wi-Fi access. WPA3-Personal still uses a shared passphrase (SAE). WEP is deprecated. Changing the shared passphrase requires reconfiguring all devices.",
        "correctAnswers": [
          "WPA2-Enterprise with 802.1X and RADIUS"
        ],
        "scenario": "The current Wi-Fi uses WPA2-Personal with a shared passphrase. After an employee departure, the company needs a solution that prevents former employees from accessing the network.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#wireless-security"
      },
      {
        "id": 20,
        "qid": "Q0020",
        "prompt": "A healthcare organization's cloud provider undergoes a SOC 2 Type II audit. What does this audit assess, and how does it differ from SOC 2 Type I?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Type I assesses design of controls at a point in time; Type II assesses operating effectiveness over a period (typically 6-12 months)",
          "Type I is for security only; Type II covers all five trust service criteria",
          "Type I requires external auditor; Type II is self-assessed",
          "Type I covers SaaS providers only; Type II applies to IaaS providers"
        ],
        "explanation": "SOC 2 Type I evaluates whether controls are suitably designed at a specific point in time. Type II evaluates both design AND operating effectiveness over a sustained period (6-12 months), providing stronger assurance that controls consistently work as intended. Both types can cover any or all five trust service criteria. Both require external auditing.",
        "correctAnswers": [
          "Type I assesses design of controls at a point in time; Type II assesses operating effectiveness over a period (typically 6-12 months)"
        ],
        "scenario": "A hospital is selecting a cloud EHR vendor. Their legal team asks whether they should require a SOC 2 Type I or Type II report.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#compliance-frameworks"
      },
      {
        "id": 21,
        "qid": "Q0021",
        "prompt": "Performance-based: The SOC receives a SIEM alert for unusual after-hours login to a privileged account followed by access to HR file shares. Arrange the CORRECT incident response sequence.",
        "type": "performance-based",
        "difficulty": "hard",
        "options": [
          "Investigate the IP, verify with the user, if confirmed malicious → isolate affected systems → reset credentials → document and escalate → review EDR for lateral movement scope",
          "Immediately delete the account → restore from last night's backup → close the ticket",
          "Wait until business hours → escalate to the account owner → check logs next week",
          "Send the user an email asking if this was them → wait 48 hours for a response → then decide"
        ],
        "explanation": "The correct sequence: gather context (IP geolocation, user confirmation), confirm compromise, contain (isolate affected systems and terminate active sessions), eradicate (credential reset, revoke tokens), investigate lateral movement scope via EDR, then document and escalate. Deleting accounts destroys evidence. Waiting until business hours allows ongoing exfiltration. Emailing a compromised or absent user wastes critical response time.",
        "correctAnswers": [
          "Investigate the IP, verify with the user, if confirmed malicious → isolate affected systems → reset credentials → document and escalate → review EDR for lateral movement scope"
        ],
        "scenario": "PBQ: Alert at 2:17 AM: Domain admin account logs in from an unrecognized IP in Eastern Europe. Access to \\\\HR-SERVER\\Payroll and \\\\HR-SERVER\\Personnel. The user's manager confirms the user is on vacation in Asia. EDR shows lateral movement attempts.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#siem-soar"
      },
      {
        "id": 22,
        "qid": "Q0022",
        "prompt": "A policy that defines what employees may and may not do with company IT resources, including personal use, social media, and software installation, is called a/an:",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Incident Response Plan",
          "Acceptable Use Policy (AUP)",
          "Business Continuity Plan",
          "Data Retention Policy"
        ],
        "explanation": "An Acceptable Use Policy defines the permitted and prohibited uses of an organization's IT resources. Employees sign it to acknowledge they understand the rules. An Incident Response Plan documents how to handle security incidents. A BCP addresses continuity during disasters. A Data Retention Policy specifies how long data must be kept and when it must be destroyed.",
        "correctAnswers": [
          "Acceptable Use Policy (AUP)"
        ],
        "scenario": "HR asks the security team to help create a document that all employees must sign, acknowledging the rules for using company computers, phones, and networks.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#security-policies"
      },
      {
        "id": 23,
        "qid": "Q0023",
        "prompt": "Which protocol collects network flow data (source/destination IP, port, protocol, bytes transferred) from routers and switches WITHOUT capturing full packet contents?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Wireshark",
          "SNMP",
          "NetFlow/IPFIX",
          "Syslog"
        ],
        "explanation": "NetFlow (Cisco) and IPFIX (IETF standard) collect network flow metadata, 5-tuple (source/destination IP, source/destination port, protocol) plus byte/packet counts and timing, without capturing the actual payload. This provides traffic visibility with manageable storage. Wireshark captures full packets. SNMP monitors device health metrics. Syslog collects device event logs.",
        "correctAnswers": [
          "NetFlow/IPFIX"
        ],
        "scenario": "A network administrator wants to monitor traffic patterns and detect anomalies without the storage overhead of full packet capture.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#network-monitoring"
      },
      {
        "id": 24,
        "qid": "Q0024",
        "prompt": "A malicious script is stored in a web forum database and executes in the browser of every user who views the affected post. Which vulnerability does this represent?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Reflected XSS",
          "Stored XSS",
          "DOM-based XSS",
          "SSRF"
        ],
        "explanation": "Stored (persistent) XSS injects a malicious script that is saved on the server (e.g., in a database) and executes in the browsers of all users who access the affected page. Reflected XSS reflects the payload back in a single response without storing it. DOM-based XSS manipulates the DOM without server involvement. SSRF causes the server to make requests to internal resources.",
        "correctAnswers": [
          "Stored XSS"
        ],
        "scenario": "A user reports that visiting the company's internal support forum opens a pop-up and redirects them to an external site. The forum allows HTML in posts.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#application-attacks"
      },
      {
        "id": 25,
        "qid": "Q0025",
        "prompt": "Which social engineering attack targets a specific individual by researching their role, relationships, and interests to craft a highly personalized and convincing message?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Phishing",
          "Spear phishing",
          "Whaling",
          "Vishing"
        ],
        "explanation": "Spear phishing is targeted phishing using research about the individual to personalize the attack and increase credibility. Whaling is specifically targeting executives (C-suite), a subcategory of spear phishing. Generic phishing uses the same message for thousands of recipients. Vishing uses voice calls rather than email.",
        "correctAnswers": [
          "Spear phishing"
        ],
        "scenario": "A threat intelligence report describes an APT group researching executives' Twitter feeds and LinkedIn profiles before sending targeted emails with references to recent family events.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#social-engineering"
      },
      {
        "id": 26,
        "qid": "Q0026",
        "prompt": "An attacker follows an authorized employee through a secured door without presenting credentials. What physical attack technique is this?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Vishing",
          "Tailgating",
          "Shoulder surfing",
          "Dumpster diving"
        ],
        "explanation": "Tailgating (also called piggybacking) occurs when an unauthorized person follows an authorized employee through a secured entry point without authenticating. Vishing is voice-based social engineering. Shoulder surfing involves observing someone's screen or keyboard. Dumpster diving involves searching through discarded materials.",
        "correctAnswers": [
          "Tailgating"
        ],
        "scenario": "A penetration tester documents physical security weaknesses at a corporate headquarters. An employee held the door open for someone who appeared to be a colleague carrying boxes.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#physical-security"
      },
      {
        "id": 27,
        "qid": "Q0027",
        "prompt": "An employee receives an email appearing to be from their CEO requesting an urgent wire transfer to a new vendor. The sender's domain differs slightly from the company domain. What type of attack is this?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Vishing",
          "Business Email Compromise (BEC)",
          "Smishing",
          "Watering hole attack"
        ],
        "explanation": "BEC attacks impersonate executives or trusted parties via email to fraudulently authorize financial transfers or sensitive data disclosure. The slight domain typo (c0mpany vs company) is a common BEC tactic. Vishing uses voice calls. Smishing uses SMS. Watering hole attacks compromise websites frequented by the target organization.",
        "correctAnswers": [
          "Business Email Compromise (BEC)"
        ],
        "scenario": "The CFO's assistant receives an email from 'ceo@c0mpany.com' (note: the company domain is company.com) asking for a $47,000 wire transfer to complete an acquisition before close of business.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#social-engineering"
      },
      {
        "id": 28,
        "qid": "Q0028",
        "prompt": "An attacker exploits a vulnerability in a VM to break out of the virtualized environment and gain access to the hypervisor and other VMs on the same host. What is this attack called?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "VM sprawl",
          "Hypervisor escape (VM escape)",
          "Container breakout",
          "Side-channel attack"
        ],
        "explanation": "VM escape (hypervisor escape) occurs when a virtual machine breaks its isolation boundary and gains unauthorized access to the hypervisor or other VMs on the same host. VM sprawl is uncontrolled VM proliferation. Container breakout escapes container isolation (e.g., from a Docker container to the host). Side-channel attacks infer information through indirect means like timing or power consumption.",
        "correctAnswers": [
          "Hypervisor escape (VM escape)"
        ],
        "scenario": "A cloud hosting provider discovers that a customer VM is interacting with memory addresses outside its allocated space. Other VMs on the same physical host are potentially compromised.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#virtualization"
      },
      {
        "id": 29,
        "qid": "Q0029",
        "prompt": "A web server's certificate has been revoked due to a compromised private key. Which mechanism allows browsers to check certificate revocation status in real time WITHOUT downloading a full CRL?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Certificate Transparency logs",
          "OCSP stapling",
          "CRL Distribution Point",
          "Certificate pinning"
        ],
        "explanation": "OCSP stapling allows the web server to proactively fetch and cache the OCSP response from the CA, then attach (staple) it to the TLS handshake, giving clients real-time revocation status without contacting the CA directly. CRL requires downloading the full revocation list. Certificate Transparency improves issuance auditing. Certificate pinning prevents substitution but doesn't handle revocation.",
        "correctAnswers": [
          "OCSP stapling"
        ],
        "scenario": "An e-commerce site's TLS certificate private key was exposed. The CA revoked the certificate. The company needs browsers to detect this immediately.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#pki-certificates"
      },
      {
        "id": 30,
        "qid": "Q0030",
        "prompt": "A DLP alert fires when an employee emails a file to a personal Gmail account. The file contains a pattern matching credit card numbers (16-digit sequences). Which DLP inspection method triggered this alert?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Keyword matching",
          "Regular expression (regex) pattern matching",
          "Fingerprinting",
          "Exact data match (EDM)"
        ],
        "explanation": "Regular expression pattern matching identifies data based on structural patterns (e.g., 16-digit sequences matching Luhn algorithm). This can produce false positives when non-card numbers match the pattern (hence the analyst's concern). Keyword matching flags specific words. Fingerprinting detects copies of specific documents. EDM matches against a database of known sensitive values (exact strings).",
        "correctAnswers": [
          "Regular expression (regex) pattern matching"
        ],
        "scenario": "The DLP policy was configured to scan outbound email attachments. The employee claims the file contains invoice numbers, not credit cards.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#data-security"
      },
      {
        "id": 31,
        "qid": "Q0031",
        "prompt": "A company's critical SaaS vendor announces it is shutting down with 30 days' notice. The company relied on this vendor for customer invoicing. Which risk management failure does this MOST represent?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Failure to implement MFA on the SaaS platform",
          "Inadequate third-party risk management and exit strategy planning",
          "Not conducting regular penetration testing of the SaaS application",
          "Failure to encrypt data stored in the SaaS platform"
        ],
        "explanation": "Vendor dependency risk, including what happens if a vendor fails, exits, or terminates service, must be addressed in third-party risk management. Contracts should include: exit clauses, data portability rights, transition assistance, and minimum notice periods. An exit strategy should be documented. MFA, pen testing, and encryption are security controls but don't address vendor continuity risk.",
        "correctAnswers": [
          "Inadequate third-party risk management and exit strategy planning"
        ],
        "scenario": "The vendor's shutdown means the company cannot generate or send invoices. The company has no contract provisions addressing vendor exit or data portability.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#vendor-management"
      },
      {
        "id": 32,
        "qid": "Q0032",
        "prompt": "A database stores credit card numbers as tokens (e.g., '7291-xxxx-xxxx-3847'). The original card numbers are stored in a separate, highly secured vault. What data protection technique is this?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Hashing with salt",
          "Data masking",
          "Tokenization",
          "Format-preserving encryption"
        ],
        "explanation": "Tokenization replaces sensitive data with non-sensitive placeholder tokens that retain the format but have no mathematical relationship to the original value, they are only meaningful with the secure vault mapping. Hashing is one-way and can't be reversed to the original. Masking replaces values with realistic-looking fake data but is often not reversible. Format-preserving encryption is mathematically derived from the original and is reversible with the key.",
        "correctAnswers": [
          "Tokenization"
        ],
        "scenario": "The company processes payments but doesn't want to store raw PAN (Primary Account Number) data. The tokens are used throughout the application for reference but are worthless to attackers.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#data-security"
      },
      {
        "id": 33,
        "qid": "Q0033",
        "prompt": "A company uses a SaaS HR application. Under the shared responsibility model, which security function remains the customer's responsibility?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Physical security of the data center",
          "Patching the application's underlying OS",
          "Managing user access and identity provisioning",
          "Maintaining the hypervisor and host hardware"
        ],
        "explanation": "In the SaaS shared responsibility model, the cloud provider manages everything from infrastructure to the application itself. The customer remains responsible for: data, user identity and access management, and endpoint security. Physical security, OS patching, and hypervisor management all fall under the provider's responsibility.",
        "correctAnswers": [
          "Managing user access and identity provisioning"
        ],
        "scenario": "The CISO is reviewing a cloud security policy and needs to clarify responsibility boundaries with the SaaS vendor for an upcoming compliance audit.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#cloud-security"
      },
      {
        "id": 34,
        "qid": "Q0034",
        "prompt": "A security analyst sees large amounts of DNS query traffic to a single external domain at regular intervals, with the subdomain portion of each query containing seemingly random long strings. What attack technique does this most likely indicate?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "DNS cache poisoning",
          "DNS tunneling for C2 communication",
          "DDoS amplification attack",
          "BGP route injection"
        ],
        "explanation": "DNS tunneling encodes data (often Base64) in DNS query subdomains to communicate with a C2 server. DNS traffic is rarely blocked by firewalls, making it an effective covert channel. The regular interval, long random-looking subdomains, and consistent destination domain are classic indicators. DNS cache poisoning modifies resolver caches. DDoS amplification uses DNS servers as reflectors. BGP involves routing table manipulation.",
        "correctAnswers": [
          "DNS tunneling for C2 communication"
        ],
        "scenario": "DNS queries like 'aGVsbG8gd29ybGQ.evil-c2-domain.com' and 'dGhpcyBpcyBhIHRlc3Q.evil-c2-domain.com' are appearing in DNS logs every 60 seconds from an internal workstation.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#network-monitoring"
      },
      {
        "id": 35,
        "qid": "Q0035",
        "prompt": "A security analyst needs to capture all network packets traversing a core switch for analysis. Which network device feature should be configured to accomplish this?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Enable promiscuous mode on all endpoints",
          "Configure a SPAN (port mirroring) session on the switch",
          "Deploy a network tap between the analyst's workstation and the switch",
          "Enable NetFlow on all routers"
        ],
        "explanation": "A SPAN (Switched Port ANalyzer) session mirrors traffic from source ports or VLANs to a designated monitoring port where a packet capture tool is connected, without interrupting network traffic. Promiscuous mode on endpoints only captures traffic on the local segment. A network tap requires physical insertion between devices. NetFlow provides flow metadata (IP, port, bytes) but not full packet content.",
        "correctAnswers": [
          "Configure a SPAN (port mirroring) session on the switch"
        ],
        "scenario": "The analyst needs to run Wireshark on a separate monitoring workstation to capture traffic between two VLANs without interrupting network operations.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#network-monitoring"
      },
      {
        "id": 36,
        "qid": "Q0036",
        "prompt": "Which endpoint security solution records detailed behavioral telemetry (process trees, file changes, network connections) from endpoints, enabling retrospective threat hunting after an incident?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Traditional signature-based antivirus",
          "Host-based firewall",
          "Endpoint Detection and Response (EDR)",
          "Full-disk encryption (FDE)"
        ],
        "explanation": "EDR continuously records rich behavioral telemetry (process executions, parent-child relationships, file modifications, registry changes, network connections) enabling retrospective investigation of past events. Traditional AV only detects and logs known-signature matches. Host-based firewalls control network traffic. FDE protects data at rest but provides no behavioral visibility.",
        "correctAnswers": [
          "Endpoint Detection and Response (EDR)"
        ],
        "scenario": "During a breach investigation, the security team needs to reconstruct exactly what happened on a compromised laptop 30 days ago. Traditional antivirus only logged infection events.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#endpoint-security"
      },
      {
        "id": 37,
        "qid": "Q0037",
        "prompt": "A healthcare organization needs to share patient data with a research partner for statistical analysis. The data must be usable for research but cannot expose individual patient identities. Which data protection technique BEST meets this requirement?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Encryption at rest with AES-256",
          "Data masking replacing identifiers with realistic fake values",
          "Tokenization replacing data with random tokens",
          "Anonymization removing all direct and indirect identifiers"
        ],
        "explanation": "Anonymization removes all direct identifiers (name, SSN, DOB) AND indirect identifiers (rare conditions + ZIP code combinations) that could re-identify individuals, creating a dataset safe for research. HIPAA's Safe Harbor method specifies 18 identifiers to remove. Encryption protects data at rest but not when shared. Masking replaces with fake but realistic data, still potentially re-identifiable. Tokenization maintains referential integrity but requires the token vault to reverse.",
        "correctAnswers": [
          "Anonymization removing all direct and indirect identifiers"
        ],
        "scenario": "HIPAA prohibits sharing PHI. The research partner only needs aggregate patterns, not individual records. The data is structured in a database.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#data-security"
      },
      {
        "id": 38,
        "qid": "Q0038",
        "prompt": "Select THREE elements that a data retention and disposal policy MUST address to be effective for compliance purposes.",
        "type": "multiple-choice-multiple",
        "difficulty": "hard",
        "options": [
          "Defined retention periods for each data category aligned with legal requirements",
          "A process for secure data destruction with documented evidence",
          "Employee social media use guidelines",
          "Legal hold procedures that suspend normal retention schedules during litigation",
          "The organization's marketing budget for the fiscal year"
        ],
        "explanation": "A complete data retention policy requires: defined retention periods (GDPR, HIPAA, tax law have different requirements per data type), secure disposal methods with verification documentation (certificate of destruction), and legal hold procedures (suspend deletion when litigation is anticipated or pending). Social media guidelines and marketing budgets are unrelated to data retention compliance.",
        "correctAnswers": [
          "Defined retention periods for each data category aligned with legal requirements",
          "A process for secure data destruction with documented evidence",
          "Legal hold procedures that suspend normal retention schedules during litigation"
        ],
        "scenario": "The company is preparing for a GDPR audit. The Data Protection Officer reviews the existing data retention policy and identifies critical gaps.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#security-policies"
      },
      {
        "id": 39,
        "qid": "Q0039",
        "prompt": "A risk analysis calculates that a flood has a 10% annual probability of damaging a data center and the estimated loss per event is $500,000. What is the Annualized Loss Expectancy (ALE)?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "$500,000",
          "$50,000",
          "$5,000,000",
          "$45,000"
        ],
        "explanation": "ALE = ARO × SLE. ARO (Annual Rate of Occurrence) = 10% = 0.10. SLE (Single Loss Expectancy) = $500,000. ALE = 0.10 × $500,000 = $50,000. Since the ALE ($50,000) is less than the control cost ($60,000), the quantitative analysis does not justify the investment on financial grounds alone, other factors like compliance and reputation must be considered.",
        "correctAnswers": [
          "$50,000"
        ],
        "scenario": "The CFO asks for a quantitative justification for investing $60,000/year in flood mitigation controls.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#risk-management"
      },
      {
        "id": 40,
        "qid": "Q0040",
        "prompt": "Which application security testing method analyzes source code for vulnerabilities WITHOUT executing the application?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "DAST (Dynamic Application Security Testing)",
          "SAST (Static Application Security Testing)",
          "Fuzzing",
          "Runtime Application Self-Protection (RASP)"
        ],
        "explanation": "SAST analyzes source code, bytecode, or binaries without executing the application, making it suitable for early integration into CI/CD pipelines (shift-left security). DAST tests the running application by simulating attacks from the outside. Fuzzing sends malformed input to a running application. RASP protects applications at runtime by monitoring and blocking attacks in execution.",
        "correctAnswers": [
          "SAST (Static Application Security Testing)"
        ],
        "scenario": "A development team wants to integrate security testing into their CI/CD pipeline to catch vulnerabilities as early as possible in the development lifecycle.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#secure-coding"
      },
      {
        "id": 41,
        "qid": "Q0041",
        "prompt": "Which type of malware is specifically designed to allow an attacker to maintain persistent, hidden administrative access to a compromised system?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Keylogger",
          "Rootkit",
          "Worm",
          "Botnet agent"
        ],
        "explanation": "A rootkit modifies operating system components to hide its presence, it intercepts system calls to conceal processes, files, and network connections from standard tools. Keyloggers capture keystrokes but don't hide themselves. Worms self-replicate across networks. Botnet agents are remotely controlled malware but don't inherently include rootkit-level stealth.",
        "correctAnswers": [
          "Rootkit"
        ],
        "scenario": "A forensic analyst discovers a compromised server where standard process listing tools show no suspicious processes, but network traffic analysis reveals outbound C2 communication.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#malware"
      },
      {
        "id": 42,
        "qid": "Q0042",
        "prompt": "Which security device inspects web application traffic and can block SQL injection and XSS attacks at layer 7, even if traffic uses HTTPS?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Stateful firewall",
          "Packet filtering firewall",
          "Web Application Firewall (WAF)",
          "Network IDS"
        ],
        "explanation": "A WAF operates at Layer 7 and understands HTTP/HTTPS application context, inspecting request parameters, headers, and cookies to block attacks like SQLi, XSS, CSRF, and OWASP Top 10. It can decrypt HTTPS traffic for inspection. Stateful and packet filtering firewalls operate at layers 3-4 and don't understand application-layer payloads. Network IDS can detect but not block attacks and lacks deep HTTP context.",
        "correctAnswers": [
          "Web Application Firewall (WAF)"
        ],
        "scenario": "An e-commerce application is being protected from OWASP Top 10 attacks. The security team needs a control that understands HTTP/HTTPS application context.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#firewalls-ids-ips"
      },
      {
        "id": 43,
        "qid": "Q0043",
        "prompt": "A user needs temporary administrative access to a production server for a 2-hour maintenance window. Which IAM practice BEST minimizes risk in this scenario?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Create a shared admin account for the maintenance window",
          "Grant permanent admin rights to the user's account",
          "Use a Privileged Access Management (PAM) solution to issue time-limited, session-recorded credentials",
          "Add the user to the local administrators group permanently, then remove after maintenance"
        ],
        "explanation": "PAM solutions provide just-in-time privileged access, granting elevated permissions only for the required window, recording all actions, and automatically revoking access afterward. Shared accounts eliminate accountability. Permanent admin rights violate least privilege. Manually adding/removing group membership is error-prone and doesn't provide session recording or automatic revocation.",
        "correctAnswers": [
          "Use a Privileged Access Management (PAM) solution to issue time-limited, session-recorded credentials"
        ],
        "scenario": "The system administrator needs root access to a Linux production server for scheduled patching. Granting permanent admin access violates the principle of least privilege.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#identity-access-management"
      },
      {
        "id": 44,
        "qid": "Q0044",
        "prompt": "An organization places its public web server in a network segment that can receive internet traffic but is isolated from the internal corporate network. What is this network segment called?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Air gap",
          "Intranet",
          "DMZ (Demilitarized Zone)",
          "VLAN trunk"
        ],
        "explanation": "A DMZ is a network segment that sits between the internet and the internal network, containing public-facing services (web, mail, DNS servers). Traffic from the internet can reach the DMZ but is blocked from reaching the internal network. An air gap is a complete physical network separation with no connections. A VLAN trunk carries traffic for multiple VLANs but doesn't describe this architecture.",
        "correctAnswers": [
          "DMZ (Demilitarized Zone)"
        ],
        "scenario": "A network architect is designing a new infrastructure. The web server must accept connections from the internet but should not be able to initiate connections to internal HR and finance servers.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#network-segmentation"
      },
      {
        "id": 45,
        "qid": "Q0045",
        "prompt": "Which access control model assigns permissions based on a user's job function within an organization?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Mandatory Access Control (MAC)",
          "Discretionary Access Control (DAC)",
          "Role-Based Access Control (RBAC)",
          "Attribute-Based Access Control (ABAC)"
        ],
        "explanation": "RBAC assigns permissions to roles (e.g., Accountant, HR Manager, Developer), and users inherit permissions by being assigned to a role. This simplifies administration, adding a new employee just requires assigning the appropriate role. MAC uses security labels and is policy-enforced (used in government). DAC lets resource owners control access. ABAC uses multiple attributes (user, environment, resource) for fine-grained decisions.",
        "correctAnswers": [
          "Role-Based Access Control (RBAC)"
        ],
        "scenario": "A new employee joins the accounting department. They automatically receive read access to financial reports, write access to expense systems, and no access to HR records.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#identity-access-management"
      },
      {
        "id": 46,
        "qid": "Q0046",
        "prompt": "Which encryption type uses the SAME key for both encryption and decryption?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Asymmetric encryption",
          "Public key encryption",
          "Symmetric encryption",
          "Elliptic curve cryptography"
        ],
        "explanation": "Symmetric encryption uses a single shared key for both encryption and decryption, making it much faster than asymmetric encryption, ideal for bulk data encryption. Asymmetric (public key) encryption uses a key pair (public/private). ECC is a form of asymmetric cryptography. Symmetric algorithms include AES, DES, and 3DES.",
        "correctAnswers": [
          "Symmetric encryption"
        ],
        "scenario": "A network administrator is designing a file encryption system for internal storage. Speed is a priority because terabytes of data are encrypted daily.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#cryptography"
      },
      {
        "id": 47,
        "qid": "Q0047",
        "prompt": "Which regulation requires organizations to protect the privacy of EU residents' personal data and mandates breach notification within 72 hours?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "HIPAA",
          "PCI-DSS",
          "GDPR",
          "SOX"
        ],
        "explanation": "GDPR (General Data Protection Regulation) governs the processing of personal data of EU/EEA residents, applies to any organization handling such data regardless of location, and requires breach notification to supervisory authorities within 72 hours of discovery. HIPAA protects US health information. PCI-DSS governs payment card data. SOX governs financial reporting for US public companies.",
        "correctAnswers": [
          "GDPR"
        ],
        "scenario": "A US-based company that sells products to European customers asks their legal team which regulation governs their data handling obligations for EU customer data.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#compliance-frameworks"
      },
      {
        "id": 48,
        "qid": "Q0048",
        "prompt": "A SIEM correlation rule fires when five failed logins are followed by a successful login from the same source IP within 10 minutes. What type of activity is this rule designed to detect?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Insider threat using authorized credentials",
          "Brute force attack followed by successful compromise",
          "Ransomware encryption activity",
          "Exfiltration via DNS tunneling"
        ],
        "explanation": "The pattern, multiple failures followed by success from the same source, is a classic indicator of a successful brute force or credential stuffing attack where the attacker eventually guesses or finds the correct password. Insider threats typically succeed on first attempt. Ransomware and DNS exfiltration have different log signatures (file encryption events, high-volume DNS queries).",
        "correctAnswers": [
          "Brute force attack followed by successful compromise"
        ],
        "scenario": "The SOC is tuning detection rules for the new SIEM deployment. An analyst reviews the rule logic and asks what threat it targets.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#siem-soar"
      },
      {
        "id": 49,
        "qid": "Q0049",
        "prompt": "Select THREE physical security controls that would MOST effectively prevent unauthorized access to a data center.",
        "type": "multiple-choice-multiple",
        "difficulty": "medium",
        "options": [
          "Mantrap with badge and PIN",
          "Security guard verification at entrance",
          "Cable locks on all servers",
          "Motion-activated CCTV with alerting",
          "Visitor logs maintained in a shared spreadsheet"
        ],
        "explanation": "A mantrap enforces two-factor physical authentication preventing tailgating. Guard verification adds human judgment to validate identities. Motion-activated CCTV detects and records unauthorized movement. Cable locks prevent device theft but not room access. Visitor logs in an uncontrolled spreadsheet are easily falsified and provide no real-time protection.",
        "correctAnswers": [
          "Mantrap with badge and PIN",
          "Security guard verification at entrance",
          "Motion-activated CCTV with alerting"
        ],
        "scenario": "A colocation facility is reviewing its physical security posture after a social engineering incident allowed an unauthorized visitor to access a server room.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#physical-security"
      },
      {
        "id": 50,
        "qid": "Q0050",
        "prompt": "Which VPN protocol uses IPsec in Transport mode with IKEv2 to provide strong authentication and is natively supported on most modern operating systems without third-party clients?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "L2TP/IPsec with PSK",
          "IKEv2/IPsec",
          "OpenVPN over TLS",
          "PPTP"
        ],
        "explanation": "IKEv2/IPsec is natively supported on Windows, macOS, iOS, and Android, uses strong cryptographic suites, supports MOBIKE for seamless IP changes (important for mobile users), and handles NAT traversal. L2TP/IPsec is older and slower. OpenVPN requires a third-party client. PPTP uses weak encryption (MPPE) and has known cryptographic vulnerabilities.",
        "correctAnswers": [
          "IKEv2/IPsec"
        ],
        "scenario": "An enterprise needs a remote access VPN solution for employee laptops. The requirement is native OS support (no agent deployment), strong authentication, and compatibility with network address translation.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#vpn"
      },
      {
        "id": 51,
        "qid": "Q0051",
        "prompt": "An attacker sends a massive flood of SYN packets to a web server from spoofed IP addresses, exhausting the server's TCP connection table. What type of attack is this?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Smurf attack",
          "SYN flood DDoS",
          "Ping of death",
          "DNS amplification"
        ],
        "explanation": "A SYN flood exploits the TCP three-way handshake by sending many SYN packets without completing the handshake (ACK), filling the server's half-open connection table. Spoofed source IPs prevent mitigation via blocking. A Smurf attack uses ICMP echo broadcast. Ping of death sends oversized ICMP packets. DNS amplification uses spoofed DNS queries to overwhelm victims with large responses.",
        "correctAnswers": [
          "SYN flood DDoS"
        ],
        "scenario": "A web server becomes unresponsive. Packet capture shows thousands of SYN packets arriving from different source IPs. No SYN-ACK responses are being completed.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#network-attacks"
      },
      {
        "id": 52,
        "qid": "Q0052",
        "prompt": "A company accepts a known vulnerability in a legacy system because the cost of mitigation exceeds the expected loss. An executive formally documents and signs this decision. What risk treatment strategy has been applied?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Risk transference",
          "Risk avoidance",
          "Risk mitigation",
          "Risk acceptance"
        ],
        "explanation": "Risk acceptance acknowledges a risk and chooses not to implement controls, accepting the potential consequences. Formal documentation and executive sign-off are required for proper risk acceptance (especially for compliance). Risk transference shifts risk to a third party (e.g., insurance). Risk avoidance eliminates the risk-causing activity. Risk mitigation implements controls to reduce likelihood or impact.",
        "correctAnswers": [
          "Risk acceptance"
        ],
        "scenario": "The legacy ERP system has a vulnerability that would cost $2M to fix. Risk analysis shows the expected annual loss is $80,000. The CIO signs a formal risk acceptance memo.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#risk-management"
      },
      {
        "id": 53,
        "qid": "Q0053",
        "prompt": "A threat analyst identifies a pattern of attacker behavior including lateral movement techniques, persistence mechanisms, and command-and-control communication methods. Which framework BEST maps these behaviors?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "CVSS v3.1",
          "MITRE ATT&CK Framework",
          "Diamond Model of Intrusion Analysis",
          "Cyber Kill Chain"
        ],
        "explanation": "MITRE ATT&CK is a knowledge base of adversary tactics and techniques based on real-world observations, enabling defenders to map observed behaviors to known TTPs and identify detection/coverage gaps. CVSS rates vulnerability severity. The Diamond Model analyzes adversary-capability-infrastructure-victim relationships. The Kill Chain describes attack stages at a higher level.",
        "correctAnswers": [
          "MITRE ATT&CK Framework"
        ],
        "scenario": "The SOC team wants to classify a newly discovered APT group's tactics and techniques to improve detection logic and identify gaps in current defenses.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#threat-intelligence"
      },
      {
        "id": 54,
        "qid": "Q0054",
        "prompt": "An organization wants to prevent data exfiltration via removable USB drives on employee workstations while still allowing USB keyboards and mice. Which control BEST achieves this?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Physically destroying all USB ports on workstations",
          "Deploying a DLP solution to monitor all file transfers",
          "Configuring endpoint management to block USB storage class devices while allowing HID class devices",
          "Requiring employees to sign an AUP prohibiting USB use"
        ],
        "explanation": "USB device control policies in endpoint management (e.g., via MDM, GPO, or EDR policy) can restrict access by USB device class, blocking USB Mass Storage Class (drives) while allowing Human Interface Devices (keyboards, mice). Physically destroying ports is destructive and removes legitimate device support. DLP detects but may not prevent USB exfiltration. An AUP is a policy, not a technical control.",
        "correctAnswers": [
          "Configuring endpoint management to block USB storage class devices while allowing HID class devices"
        ],
        "scenario": "After a data theft incident involving a USB thumb drive, the CISO mandates that USB storage must be blocked but input devices must continue to function.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#endpoint-security"
      },
      {
        "id": 55,
        "qid": "Q0055",
        "prompt": "Select THREE characteristics of a properly implemented data classification program.",
        "type": "multiple-choice-multiple",
        "difficulty": "medium",
        "options": [
          "Clear categories with defined handling requirements for each level",
          "Automated labeling of all data upon creation without any human review",
          "Data owners assigned for each data category to authorize access",
          "Regular review and reclassification as data sensitivity changes",
          "Classifying all data as 'Confidential' by default to maximize protection"
        ],
        "explanation": "Effective classification programs define clear categories (Public, Internal, Confidential, Restricted) with specific handling requirements. Data owners are accountable for access decisions. Periodic review ensures classification remains accurate as context changes. Fully automated labeling without review leads to misclassification. Classifying everything as Confidential makes the scheme meaningless and impractical.",
        "correctAnswers": [
          "Clear categories with defined handling requirements for each level",
          "Data owners assigned for each data category to authorize access",
          "Regular review and reclassification as data sensitivity changes"
        ],
        "scenario": "A compliance officer is evaluating the company's data classification framework against NIST guidelines. The framework must be practical and enforceable.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#data-security"
      },
      {
        "id": 56,
        "qid": "Q0056",
        "prompt": "A legitimate authenticated user unknowingly executes a malicious action on a web application because they clicked a link in an email that made a state-changing request using their active session. What vulnerability is exploited?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Session hijacking",
          "Cross-site request forgery (CSRF)",
          "Reflected XSS",
          "Broken authentication"
        ],
        "explanation": "CSRF tricks an authenticated user's browser into sending unauthorized requests to a web application, leveraging the user's active session credentials. The application cannot distinguish the forged request from a legitimate one. Session hijacking steals the session token directly. Reflected XSS executes scripts in the victim's browser from a malicious URL. Broken authentication is a broader category.",
        "correctAnswers": [
          "Cross-site request forgery (CSRF)"
        ],
        "scenario": "An employee clicks a link in a phishing email while logged into the internal HR portal. Their session is used to submit a salary change request to the attacker's account.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#application-attacks"
      },
      {
        "id": 57,
        "qid": "Q0057",
        "prompt": "Select THREE examples of administrative (managerial) security controls.",
        "type": "multiple-choice-multiple",
        "difficulty": "medium",
        "options": [
          "Acceptable use policy",
          "Firewall rules",
          "Security awareness training program",
          "Background check procedures",
          "Intrusion detection system"
        ],
        "explanation": "Administrative (managerial) controls are policies, procedures, and guidelines, they govern how people behave. An AUP, training programs, and background checks are all administrative controls. Firewall rules and IDS systems are technical controls that are implemented in technology.",
        "correctAnswers": [
          "Acceptable use policy",
          "Security awareness training program",
          "Background check procedures"
        ],
        "scenario": "A CISO is classifying all existing controls for an upcoming ISO 27001 audit. Controls must be categorized as technical, operational, or managerial.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#security-controls"
      },
      {
        "id": 58,
        "qid": "Q0058",
        "prompt": "An administrator needs to remotely manage a Linux server securely. Which protocol should be used instead of Telnet?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "FTP",
          "SSH",
          "HTTP",
          "SNMP v1"
        ],
        "explanation": "SSH (Secure Shell) encrypts all traffic including credentials and commands between the administrator and the server. Telnet transmits everything in cleartext and should never be used for remote management. FTP is also cleartext (SFTP or FTPS should be used for file transfer). HTTP is unencrypted. SNMPv1/v2 use community strings in cleartext.",
        "correctAnswers": [
          "SSH"
        ],
        "scenario": "The legacy management interface uses Telnet. A security audit flags this as a high-risk finding because credentials and commands are transmitted in cleartext.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#secure-protocols"
      },
      {
        "id": 59,
        "qid": "Q0059",
        "prompt": "A company purchases cyber liability insurance to cover potential costs of a data breach. What risk management strategy is being applied?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Risk acceptance",
          "Risk avoidance",
          "Risk mitigation",
          "Risk transference"
        ],
        "explanation": "Risk transference shifts the financial consequences of a risk to a third party, in this case, an insurance company. The risk still exists but the potential financial loss is transferred. Risk acceptance acknowledges and accepts the potential loss. Risk avoidance eliminates the risk-causing activity entirely. Risk mitigation implements controls to reduce likelihood or impact.",
        "correctAnswers": [
          "Risk transference"
        ],
        "scenario": "After a breach simulation exercise revealed potential losses of $5M, the CFO asks the security team what options exist beyond remediation.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#risk-management"
      },
      {
        "id": 60,
        "qid": "Q0060",
        "prompt": "A remote employee's VPN connection is configured so that only corporate traffic goes through the VPN tunnel while personal internet traffic goes directly to the internet. What VPN configuration is this?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Full tunnel VPN",
          "Split tunnel VPN",
          "Site-to-site VPN",
          "SSL VPN portal"
        ],
        "explanation": "Split tunneling routes only specific traffic (corporate destinations) through the VPN tunnel while other traffic (internet browsing, streaming) goes directly to the internet. Full tunnel VPN routes ALL traffic through the VPN. Site-to-site VPN connects entire networks. SSL VPN portal is an access method, not a tunneling mode.",
        "correctAnswers": [
          "Split tunnel VPN"
        ],
        "scenario": "The IT team receives complaints that internet speed is slow for remote workers. Investigation reveals all internet traffic is routed through the corporate VPN gateway, consuming bandwidth.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#vpn"
      },
      {
        "id": 61,
        "qid": "Q0061",
        "prompt": "Which security framework provides a risk-based approach to managing cybersecurity risk using five core functions: Identify, Protect, Detect, Respond, and Recover?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "ISO 27001",
          "NIST Cybersecurity Framework (CSF)",
          "SOC 2",
          "PCI-DSS"
        ],
        "explanation": "The NIST CSF organizes cybersecurity activities around five core functions: Identify, Protect, Detect, Respond, Recover, providing a flexible, risk-based framework applicable to any sector. ISO 27001 is an international standard requiring a formal ISMS with certification audits. SOC 2 is a third-party audit framework for service organizations. PCI-DSS is a prescriptive standard specific to payment card data.",
        "correctAnswers": [
          "NIST Cybersecurity Framework (CSF)"
        ],
        "scenario": "A new CISO joining a manufacturing company wants to assess and improve the organization's security posture using a voluntary, industry-agnostic framework.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#compliance-frameworks"
      },
      {
        "id": 62,
        "qid": "Q0062",
        "prompt": "A PCI-DSS audit finds that a legacy payment terminal cannot be patched to meet current encryption standards. What type of control should the security team implement to address this gap?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Corrective control",
          "Deterrent control",
          "Compensating control",
          "Directive control"
        ],
        "explanation": "A compensating control provides an alternative measure when the primary control cannot be implemented due to technical or business constraints. PCI-DSS explicitly allows compensating controls for legacy systems. A corrective control fixes issues after they occur. A deterrent control discourages attacks. A directive control establishes required behavior through policy.",
        "correctAnswers": [
          "Compensating control"
        ],
        "scenario": "A retail chain uses point-of-sale terminals that cannot support TLS 1.2 or higher due to hardware limitations. Replacement is budgeted for next fiscal year.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#security-controls"
      },
      {
        "id": 63,
        "qid": "Q0063",
        "prompt": "A company launches a phishing simulation and 35% of employees click the link. Clickers receive immediate feedback explaining the mistake. What is the PRIMARY purpose of this program element?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "To identify employees for termination",
          "To create a metric that looks good on compliance reports",
          "To provide a teachable moment and improve phishing resistance through reinforced learning",
          "To fulfill the annual security training checkbox requirement"
        ],
        "explanation": "Immediate post-click education (the 'teachable moment') is the most effective phishing simulation element, users learn from their mistake in context, improving real-world phishing resistance over time. Research shows immediate feedback is more effective than delayed training. Using simulations purely for punishment or compliance checkbox reduces employee trust and engagement with the security program.",
        "correctAnswers": [
          "To provide a teachable moment and improve phishing resistance through reinforced learning"
        ],
        "scenario": "The security team is designing a security awareness program. They debate whether to use punitive measures or educational interventions for employees who click simulated phishing emails.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#security-awareness-training"
      },
      {
        "id": 64,
        "qid": "Q0064",
        "prompt": "An attacker captures Windows NTLM authentication hashes from a network segment and uses precomputed lookup tables to reverse them. Which type of attack uses these precomputed tables?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Birthday attack",
          "Rainbow table attack",
          "Pass-the-hash",
          "Replay attack"
        ],
        "explanation": "Rainbow table attacks use precomputed tables of hash-to-plaintext mappings to crack hashes efficiently. NTLMv1 without salting is particularly vulnerable. Adding a cryptographic salt to each hash defeats rainbow tables. Pass-the-hash uses the hash directly for authentication without cracking it. Replay attacks retransmit captured authentication tokens.",
        "correctAnswers": [
          "Rainbow table attack"
        ],
        "scenario": "Packet capture on the network contains NTLMv1 authentication challenges and responses. The attacker already has a large collection of precomputed hash-to-password mappings.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#password-attacks"
      },
      {
        "id": 65,
        "qid": "Q0065",
        "prompt": "An attacker sends gratuitous ARP replies that associate their MAC address with the default gateway's IP address. All traffic destined for the internet now passes through the attacker's machine. What attack has occurred?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "DNS cache poisoning",
          "ARP spoofing (ARP poisoning)",
          "VLAN hopping",
          "MAC flooding"
        ],
        "explanation": "ARP spoofing sends forged ARP replies to associate the attacker's MAC with a legitimate IP (e.g., default gateway), redirecting traffic for a man-in-the-middle position. DNS cache poisoning corrupts DNS resolver caches. VLAN hopping exploits trunking misconfiguration to access other VLANs. MAC flooding overwhelms a switch's MAC table to force broadcast behavior.",
        "correctAnswers": [
          "ARP spoofing (ARP poisoning)"
        ],
        "scenario": "Network monitoring shows duplicate ARP entries for the default gateway IP pointing to an unauthorized MAC address. Users report intermittent internet connectivity.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#network-attacks"
      },
      {
        "id": 66,
        "qid": "Q0066",
        "prompt": "What is the purpose of a Certificate Revocation List (CRL)?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "It lists all certificates issued by a CA",
          "It identifies certificates that are no longer valid before their expiration date",
          "It contains the public keys of all trusted CAs",
          "It encrypts certificate data during transmission"
        ],
        "explanation": "A CRL is a list published by a Certificate Authority containing serial numbers of certificates that have been revoked, made invalid, before their scheduled expiration, typically due to compromise or policy violation. It does not list all issued certificates, contain CA public keys, or encrypt data.",
        "correctAnswers": [
          "It identifies certificates that are no longer valid before their expiration date"
        ],
        "scenario": "A security administrator is reviewing PKI documentation for a compliance audit and needs to explain the function of a CRL.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#pki-certificates"
      },
      {
        "id": 67,
        "qid": "Q0067",
        "prompt": "Performance-based: A web application vulnerability scan reveals both SQL injection and stored XSS vulnerabilities. Arrange the CORRECT remediation priority and action sequence.",
        "type": "performance-based",
        "difficulty": "hard",
        "options": [
          "Prioritize XSS first → deploy WAF rule for SQLi → wait for next release cycle → test in production",
          "Prioritize SQLi remediation with parameterized queries → apply WAF virtual patching → remediate XSS with output encoding → penetration test before next release",
          "Fix both vulnerabilities in comments in the code → deploy untested → notify customers later",
          "Deploy the application to a staging environment → test both vulnerabilities → wait for automatic patches from the framework"
        ],
        "explanation": "SQL injection affecting payment data poses the highest risk (potential full database compromise, PCI-DSS violation) and should be prioritized using parameterized queries. WAF rules provide interim protection while code is fixed. XSS is remediated with output encoding and Content-Security-Policy. Penetration testing verifies the fixes before release. Testing in production exposes customers to risk.",
        "correctAnswers": [
          "Prioritize SQLi remediation with parameterized queries → apply WAF virtual patching → remediate XSS with output encoding → penetration test before next release"
        ],
        "scenario": "PBQ: The application is a public-facing e-commerce site handling credit card data. SQL injection in the checkout flow and stored XSS in the product review section are confirmed. A patch release is scheduled for next week.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#application-attacks"
      },
      {
        "id": 68,
        "qid": "Q0068",
        "prompt": "Select THREE DR site types ordered from FASTEST to SLOWEST recovery capability.",
        "type": "multiple-choice-multiple",
        "difficulty": "medium",
        "options": [
          "Hot site, fully operational duplicate facility",
          "Warm site, partially configured with hardware but no live data",
          "Cold site, empty facility with power/connectivity but no equipment",
          "Mobile site, trailer-based deployable facility",
          "Cloud-based DR, pay-per-use infrastructure provisioned on demand"
        ],
        "explanation": "Recovery speed: Hot site (minutes to hours, systems already running, data replicated in real time) > Warm site (hours to days, hardware ready, needs data restoration) > Cold site (days to weeks, must procure, install, and configure equipment from scratch). Mobile and cloud DR don't neatly fit this ordered sequence, though cloud can approximate a warm or hot site depending on configuration.",
        "correctAnswers": [
          "Hot site, fully operational duplicate facility",
          "Warm site, partially configured with hardware but no live data",
          "Cold site, empty facility with power/connectivity but no equipment"
        ],
        "scenario": "The BC team is evaluating three DR options for the CIO. Cost, complexity, and recovery time must all be considered in the recommendation.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#business-continuity-disaster-recovery"
      },
      {
        "id": 69,
        "qid": "Q0069",
        "prompt": "A forensic analyst creates a bitwise copy of a suspect hard drive and documents the SHA-256 hash of both the original and the copy before and after imaging. What forensic principle does this demonstrate?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Chain of custody",
          "Order of volatility",
          "Legal hold",
          "Write blocking"
        ],
        "explanation": "Chain of custody documents who handled evidence, when, and what was done, ensuring evidence integrity from collection to court. Hashing both drives before and after demonstrates the copy is forensically identical to the original (integrity verification). Write blocking prevents modifications during imaging. Order of volatility is about collection priority. Legal hold preserves data from deletion.",
        "correctAnswers": [
          "Chain of custody"
        ],
        "scenario": "The evidence must be presentable in court. The defense may challenge the integrity of the forensic copy.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#digital-forensics"
      },
      {
        "id": 70,
        "qid": "Q0070",
        "prompt": "A company shares customer data with a third-party payroll processor. Which document establishes the security requirements the vendor must meet to protect this data?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Non-Disclosure Agreement (NDA)",
          "Service Level Agreement (SLA)",
          "Business Associate Agreement (BAA) or Data Processing Agreement (DPA)",
          "Master Service Agreement (MSA)"
        ],
        "explanation": "A BAA (required under HIPAA for healthcare data) or DPA (required under GDPR) establishes the vendor's data protection obligations, including security requirements, breach notification timelines, and data use restrictions. An NDA covers confidentiality of business information. An SLA specifies service performance metrics. An MSA is a general commercial framework that doesn't address data protection specifics.",
        "correctAnswers": [
          "Business Associate Agreement (BAA) or Data Processing Agreement (DPA)"
        ],
        "scenario": "The legal team is drafting agreements for a new vendor relationship. The vendor will process employee PII. The security team must ensure contractual protections exist.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#vendor-management"
      },
      {
        "id": 71,
        "qid": "Q0071",
        "prompt": "A web application fetches URLs provided by user input to retrieve external content. An attacker uses this to access http://169.254.169.254/latest/meta-data/ and obtain cloud instance credentials. What vulnerability is this?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Directory traversal",
          "Server-Side Request Forgery (SSRF)",
          "Remote code execution",
          "XML External Entity (XXE)"
        ],
        "explanation": "SSRF tricks a server into making requests to internal resources on behalf of the attacker, in this case, the AWS EC2 metadata endpoint (169.254.169.254) which exposes IAM credentials. Directory traversal accesses files on the server's filesystem. RCE executes arbitrary code. XXE exploits XML parsers to access internal files or perform SSRF via XML entities.",
        "correctAnswers": [
          "Server-Side Request Forgery (SSRF)"
        ],
        "scenario": "The application is hosted on AWS EC2 and has a feature that previews external URLs. The attacker bypasses allow-listing by encoding the IP address.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#application-attacks"
      },
      {
        "id": 72,
        "qid": "Q0072",
        "prompt": "Which cloud security control brokers access between cloud services and users, enforcing security policy (DLP, threat protection, access control) regardless of the user's location?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Cloud Access Security Broker (CASB)",
          "Web Application Firewall (WAF)",
          "Cloud Security Posture Management (CSPM)",
          "Secure Web Gateway (SWG)"
        ],
        "explanation": "A CASB is a security policy enforcement point between cloud service users and cloud applications, providing visibility, threat protection, compliance, and DLP across all cloud services, including unsanctioned shadow IT. A WAF protects web applications from attacks. CSPM monitors cloud infrastructure configuration. A SWG filters web traffic but lacks deep cloud application intelligence.",
        "correctAnswers": [
          "Cloud Access Security Broker (CASB)"
        ],
        "scenario": "A company has employees using multiple unauthorized SaaS applications (shadow IT) and needs visibility and control over cloud application usage without requiring a traditional proxy.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#cloud-security"
      },
      {
        "id": 73,
        "qid": "Q0073",
        "prompt": "During incident response, the team identifies the scope of a malware infection across 50 workstations. What is the NEXT phase of the incident response lifecycle after identification?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Recovery",
          "Eradication",
          "Containment",
          "Lessons learned"
        ],
        "explanation": "The NIST incident response lifecycle phases are: Preparation → Detection/Identification → Containment → Eradication → Recovery → Post-incident/Lessons Learned. After identifying affected systems, containment (isolating affected systems to prevent spread) comes before eradication (removing malware) or recovery (restoring systems).",
        "correctAnswers": [
          "Containment"
        ],
        "scenario": "The SOC has confirmed a malware outbreak. Affected systems are identified. The CISO asks what the team should do next.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#incident-response"
      },
      {
        "id": 74,
        "qid": "Q0074",
        "prompt": "A SOC analyst receives 800 alerts per day and manually investigates each one. Which technology would MOST effectively automate the triage and initial response to known, low-complexity alerts?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Adding more SOC analysts",
          "Upgrading the SIEM to a newer version",
          "Implementing a SOAR platform with automated playbooks",
          "Deploying additional IDS sensors"
        ],
        "explanation": "SOAR (Security Orchestration, Automation, and Response) automates repetitive SOC tasks through playbooks, automatically triaging alerts, querying threat intelligence, isolating hosts, and closing false positives without analyst intervention. Simply adding analysts scales linearly with cost. Upgrading the SIEM improves detection but not response speed. More IDS sensors generate more alerts, exacerbating the problem.",
        "correctAnswers": [
          "Implementing a SOAR platform with automated playbooks"
        ],
        "scenario": "Alert volume has tripled in the past year. Analysts spend 70% of their time on repetitive, routine triage tasks, leaving little time for complex threat hunting.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#siem-soar"
      },
      {
        "id": 75,
        "qid": "Q0075",
        "prompt": "A security policy states that all sensitive data must be encrypted, but does not specify which encryption algorithm or key length to use. What document would provide those technical specifications?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Risk register",
          "Security standard",
          "Incident response procedure",
          "Business impact analysis"
        ],
        "explanation": "The policy hierarchy is: Policy (high-level mandate: 'what') → Standard (specific technical requirements: 'how') → Guideline (recommendations) → Procedure (step-by-step instructions). A security standard specifies the required encryption algorithm (AES-256), key length, and key management requirements. The policy establishes the requirement; the standard defines the implementation specifics.",
        "correctAnswers": [
          "Security standard"
        ],
        "scenario": "An engineer asks the security team which encryption standard to implement for a new database. The policy mandates encryption but doesn't specify details.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#security-policies"
      },
      {
        "id": 76,
        "qid": "Q0076",
        "prompt": "An employee changes roles from HR to Finance. Their new manager reports they still have access to the HR payroll system. Which IAM process failure caused this?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Failure to implement MFA",
          "Account lockout policy misconfiguration",
          "Incomplete access recertification and role change provisioning",
          "Lack of a password complexity policy"
        ],
        "explanation": "Access recertification (periodic review of user rights) and proper role-change provisioning processes would catch and remove stale access. This is an example of access creep, accumulating permissions over time without proper revocation. MFA, lockout, and password policies address authentication security, not authorization lifecycle management.",
        "correctAnswers": [
          "Incomplete access recertification and role change provisioning"
        ],
        "scenario": "Quarterly access reviews have not been conducted. Role change requests go to HR but access provisioning is handled separately by IT with no automated triggers.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#identity-access-management"
      },
      {
        "id": 77,
        "qid": "Q0077",
        "prompt": "A security team is deciding whether to immediately disconnect a compromised server or leave it connected for further monitoring. Which factor MOST influences this containment decision?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "The cost of the server hardware",
          "Whether the incident response retainer covers this type of incident",
          "The balance between business impact of disconnection and risk of continued compromise",
          "Whether the server has a recent backup"
        ],
        "explanation": "Containment decisions require weighing the business impact of taking a system offline (production halt, revenue loss) against the security risk of leaving it connected (ongoing exfiltration, lateral movement). This decision often requires CISO and business leadership input. Backups are relevant to recovery, not containment timing. Retainer coverage doesn't affect the technical decision.",
        "correctAnswers": [
          "The balance between business impact of disconnection and risk of continued compromise"
        ],
        "scenario": "The compromised server hosts a critical manufacturing control interface. Disconnecting it would halt production. Leaving it connected may allow continued exfiltration.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#incident-response"
      },
      {
        "id": 78,
        "qid": "Q0078",
        "prompt": "A company discovers that a developer misconfigured an S3 bucket, making customer PII publicly accessible. Which cloud security tool would have MOST effectively detected this misconfiguration before the breach?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Cloud Access Security Broker (CASB)",
          "Cloud Security Posture Management (CSPM)",
          "Web Application Firewall (WAF)",
          "Data Loss Prevention (DLP)"
        ],
        "explanation": "CSPM continuously monitors cloud infrastructure configurations against security best practices and compliance frameworks, alerting on misconfigurations like publicly accessible S3 buckets. CASB focuses on user-cloud application interactions. WAF protects web applications from attacks, not infrastructure misconfigurations. DLP focuses on data movement, not infrastructure configuration.",
        "correctAnswers": [
          "Cloud Security Posture Management (CSPM)"
        ],
        "scenario": "The bucket had been publicly accessible for 45 days before a security researcher notified the company. The configuration was made during a rushed deployment.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#cloud-security"
      },
      {
        "id": 79,
        "qid": "Q0079",
        "prompt": "Which type of vulnerability scan provides the MOST comprehensive view of vulnerabilities from an attacker's internal perspective by using domain credentials during the scan?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "External unauthenticated scan",
          "Internal unauthenticated scan",
          "Credentialed (authenticated) scan",
          "Passive network scan"
        ],
        "explanation": "Credentialed scans authenticate to target systems and can read installed software versions, registry keys, and configuration details, finding vulnerabilities invisible to unauthenticated scans (e.g., unpatched software with no open ports). Unauthenticated scans only see externally observable services. Passive scans analyze traffic without probing targets.",
        "correctAnswers": [
          "Credentialed (authenticated) scan"
        ],
        "scenario": "The security team is choosing between scan configurations. One scans anonymously and another uses a service account with read-only domain access.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#vulnerability-scanning"
      },
      {
        "id": 80,
        "qid": "Q0080",
        "prompt": "A hospital wants to ensure that a compromised IoT medical device cannot communicate with the EHR server. Which network architecture BEST limits the blast radius of such a compromise?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Adding NAT between all device types",
          "Implementing microsegmentation with device-specific access policies",
          "Deploying a next-generation firewall at the perimeter",
          "Installing endpoint agents on all medical devices"
        ],
        "explanation": "Microsegmentation creates fine-grained, software-defined network segments with precise access policies for each device or workload, an IoT device can only communicate with its authorized management system, not the EHR. NAT provides some isolation but not granular access control. A perimeter NGFW doesn't control east-west (internal) traffic. Most IoT/medical devices cannot run endpoint agents.",
        "correctAnswers": [
          "Implementing microsegmentation with device-specific access policies"
        ],
        "scenario": "The hospital has thousands of connected medical devices (IV pumps, monitoring equipment) on the same flat network as clinical workstations and servers. A penetration test showed lateral movement was trivial.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#network-segmentation"
      },
      {
        "id": 81,
        "qid": "Q0081",
        "prompt": "A malware sample uses no files on disk, executing entirely from memory via injected shellcode into a legitimate process. Which malware category BEST describes this?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Trojan",
          "Fileless malware",
          "Worm",
          "Adware"
        ],
        "explanation": "Fileless malware operates entirely in memory, abusing legitimate tools like PowerShell, WMI, or process injection to avoid writing to disk, evading traditional signature-based AV. Trojans masquerade as legitimate software but still write files. Worms self-replicate across networks. Adware displays unwanted advertisements.",
        "correctAnswers": [
          "Fileless malware"
        ],
        "scenario": "EDR telemetry shows PowerShell executing a Base64-encoded payload that injects code into explorer.exe. Antivirus finds no malicious files on disk.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#malware"
      },
      {
        "id": 82,
        "qid": "Q0082",
        "prompt": "Which metric in the CVSS v3.1 scoring system represents how easily an attacker can exploit a vulnerability without requiring special conditions?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Scope (S)",
          "Attack Complexity (AC)",
          "Privileges Required (PR)",
          "User Interaction (UI)"
        ],
        "explanation": "Attack Complexity (AC) represents conditions beyond the attacker's control required for successful exploitation. AC:L (Low) means no special conditions, the attack can be reliably repeated. Combined with AV:N (network accessible), PR:N (no privileges), and UI:N (no user interaction), these metrics drive the 9.8 score. Scope refers to whether the impact crosses security boundaries. PR is about required privileges. UI is about whether a user must take action.",
        "correctAnswers": [
          "Attack Complexity (AC)"
        ],
        "scenario": "A security analyst is reviewing a CVE with CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H and needs to explain why it scores 9.8.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#vulnerability-management"
      },
      {
        "id": 83,
        "qid": "Q0083",
        "prompt": "A company that stores and processes payment card data wants to demonstrate compliance to customers without sharing their full audit report. Which report type BEST supports this?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Full ROC (Report on Compliance) shared under NDA",
          "Attestation of Compliance (AOC)",
          "SOC 2 Type II report",
          "Self-assessment questionnaire (SAQ)"
        ],
        "explanation": "The PCI-DSS Attestation of Compliance (AOC) is a summary document signed by a QSA confirming compliance without revealing infrastructure details. It is the standard document shared with business partners. The full ROC contains sensitive system details. SOC 2 covers security/availability/confidentiality but is not PCI-DSS specific. The SAQ is for smaller merchants who self-assess.",
        "correctAnswers": [
          "Attestation of Compliance (AOC)"
        ],
        "scenario": "A merchant bank requires proof of the company's PCI-DSS compliance before entering a processing agreement. The company's full QSA report contains proprietary infrastructure details.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#compliance-frameworks"
      },
      {
        "id": 84,
        "qid": "Q0084",
        "prompt": "Select THREE application control techniques that prevent unauthorized software from executing on endpoints.",
        "type": "multiple-choice-multiple",
        "difficulty": "hard",
        "options": [
          "Application allowlisting (whitelisting)",
          "Software restriction policies via GPO",
          "Full-disk encryption",
          "Code signing enforcement",
          "Disabling Windows Defender to reduce false positives"
        ],
        "explanation": "Application allowlisting permits only approved, explicitly listed applications to execute, the most restrictive and effective approach. GPO Software Restriction Policies can block execution from unauthorized paths (e.g., %TEMP%, %APPDATA%). Code signing enforcement rejects unsigned or improperly signed executables. Full-disk encryption protects data at rest but doesn't control application execution. Disabling Defender removes protection.",
        "correctAnswers": [
          "Application allowlisting (whitelisting)",
          "Software restriction policies via GPO",
          "Code signing enforcement"
        ],
        "scenario": "A healthcare organization wants to prevent staff from installing unauthorized applications that could introduce malware or violate HIPAA compliance.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#endpoint-security"
      },
      {
        "id": 85,
        "qid": "Q0085",
        "prompt": "An organization uses federated identity. An employee authenticates to their company's IdP and can then access a SaaS partner application without re-authenticating. Which protocol enables this?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "RADIUS",
          "LDAP",
          "SAML 2.0",
          "Kerberos"
        ],
        "explanation": "SAML 2.0 (Security Assertion Markup Language) enables browser-based federated identity, the IdP (identity provider) issues signed XML assertions that the SP (service provider) trusts, enabling cross-domain SSO without re-authentication. RADIUS is used for network access authentication (Wi-Fi, VPN). LDAP is a directory protocol for internal identity stores. Kerberos is for internal Windows domain authentication.",
        "correctAnswers": [
          "SAML 2.0"
        ],
        "scenario": "The IT team is documenting the authentication flow between the company's Azure AD and a SaaS partner using a browser-based SSO workflow.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#identity-access-management"
      },
      {
        "id": 86,
        "qid": "Q0086",
        "prompt": "Select THREE metrics that BEST measure the effectiveness of a security awareness training program.",
        "type": "multiple-choice-multiple",
        "difficulty": "medium",
        "options": [
          "Phishing simulation click rate trend over time",
          "Employee training course completion rate",
          "Reduction in reported security incidents involving human error",
          "Number of employees who completed the annual quiz",
          "Time to report suspicious emails to the security team"
        ],
        "explanation": "Effective metrics measure behavioral change and outcomes, not just activity. Phishing click rate trends show whether employees are better at recognizing attacks. Reduction in human-error incidents shows real-world behavior change. Faster suspicious email reporting shows improved security culture. Completion rates and quiz scores only measure activity, not behavioral change or actual risk reduction.",
        "correctAnswers": [
          "Phishing simulation click rate trend over time",
          "Reduction in reported security incidents involving human error",
          "Time to report suspicious emails to the security team"
        ],
        "scenario": "The CISO needs to report on the ROI of the security awareness program to the board. The board wants data-driven evidence, not just completion rates.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#security-awareness-training"
      },
      {
        "id": 87,
        "qid": "Q0087",
        "prompt": "Performance-based: The board asks for a risk treatment recommendation for a critical finding identified during an external penetration test. Select the CORRECT sequence for presenting a defensible risk treatment decision.",
        "type": "performance-based",
        "difficulty": "hard",
        "options": [
          "Quantify the risk (likelihood × impact, regulatory exposure) → identify treatment options with costs → recommend treatment with compensating controls → document residual risk and obtain executive sign-off → monitor and track to remediation",
          "Accept the risk without analysis → inform customers after 6 months → wait for the next penetration test cycle",
          "Classify the finding as low priority → remove it from the report → plan for remediation in 2 years",
          "Immediately blame the penetration testing firm → dispute the finding → close the ticket"
        ],
        "explanation": "A defensible risk treatment process: quantify exposure (financial, regulatory, reputational), evaluate treatment options (immediate patching vs. compensating controls vs. WAF rules), recommend the option balancing risk and business impact, document residual risk, obtain executive acknowledgment of accepted residual risk, and track to full remediation. Hiding or dismissing findings creates legal and regulatory exposure.",
        "correctAnswers": [
          "Quantify the risk (likelihood × impact, regulatory exposure) → identify treatment options with costs → recommend treatment with compensating controls → document residual risk and obtain executive sign-off → monitor and track to remediation"
        ],
        "scenario": "PBQ: An external pen test found that the company's customer portal has an authentication bypass vulnerability. The portal handles 50,000 customer accounts. Fixing requires 3 months of development. Temporary fix options and their limitations are available.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#risk-management"
      },
      {
        "id": 88,
        "qid": "Q0088",
        "prompt": "Select THREE differences between an Intrusion Detection System (IDS) and an Intrusion Prevention System (IPS).",
        "type": "multiple-choice-multiple",
        "difficulty": "medium",
        "options": [
          "An IPS can block malicious traffic inline; an IDS only alerts",
          "An IDS is always signature-based; an IPS always uses anomaly detection",
          "An IPS requires inline network placement; an IDS can use a network tap",
          "An IDS generates alerts without blocking traffic",
          "An IPS requires more careful tuning to avoid blocking legitimate traffic"
        ],
        "explanation": "Key IDS vs IPS differences: IPS is inline and actively drops/blocks malicious traffic; IDS passively monitors (via tap/span port) and only generates alerts. Both can use signature and anomaly detection, this is not a distinguishing characteristic. IPS requires careful tuning because false positives result in blocking legitimate traffic, not just alert noise.",
        "correctAnswers": [
          "An IPS can block malicious traffic inline; an IDS only alerts",
          "An IPS requires inline network placement; an IDS can use a network tap",
          "An IDS generates alerts without blocking traffic"
        ],
        "scenario": "A security architect is documenting the existing security stack for a compliance audit. The auditor asks to distinguish IDS from IPS capabilities.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#firewalls-ids-ips"
      },
      {
        "id": 89,
        "qid": "Q0089",
        "prompt": "A financial institution requires that its core banking system be restored within 4 hours of a disaster, and data loss must not exceed 30 minutes of transactions. Which DR metrics define these requirements?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "MTTR and MTBF",
          "RPO and RTO",
          "BIA and BCP",
          "MTTD and MTTR"
        ],
        "explanation": "RTO (Recovery Time Objective) = 4 hours, the maximum time to restore a system after a disaster. RPO (Recovery Point Objective) = 30 minutes, the maximum acceptable data loss measured in time (backups must occur at least every 30 minutes). MTTR is mean time to repair. MTBF is mean time between failures. BIA is the Business Impact Analysis process. MTTD is mean time to detect.",
        "correctAnswers": [
          "RPO and RTO"
        ],
        "scenario": "The BCP team is documenting DR requirements for a regulatory exam. The exam requires specific recovery metrics to be documented and tested.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#business-continuity-disaster-recovery"
      },
      {
        "id": 90,
        "qid": "Q0090",
        "prompt": "A hospital's files are suddenly encrypted and a ransom demand appears on screens. Files have the extension '.LOCK' and shadow copies have been deleted. What type of malware is responsible?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Spyware",
          "Ransomware",
          "Rootkit",
          "Logic bomb"
        ],
        "explanation": "Ransomware encrypts victim files and demands payment for decryption. Deletion of shadow copies (Volume Shadow Copies) via vssadmin.exe is a characteristic ransomware behavior to prevent recovery. Spyware covertly collects data. Rootkits provide persistent privileged access while hiding their presence. Logic bombs trigger on specific conditions but don't typically encrypt files for ransom.",
        "correctAnswers": [
          "Ransomware"
        ],
        "scenario": "The incident response team is called at 3 AM. Radiology workstations cannot access patient imaging files. Event logs show vssadmin.exe was executed before file encryption began.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#malware"
      },
      {
        "id": 91,
        "qid": "Q0091",
        "prompt": "Which hashing algorithm is considered cryptographically broken and should NOT be used for password storage?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "bcrypt",
          "SHA-256",
          "MD5",
          "Argon2"
        ],
        "explanation": "MD5 is cryptographically broken, collision attacks are computationally feasible, making it unsuitable for password storage. bcrypt and Argon2 are purpose-built, slow password hashing algorithms. SHA-256 is collision-resistant for general use but lacks the cost factor needed for passwords.",
        "correctAnswers": [
          "MD5"
        ],
        "scenario": "A legacy web application stores user passwords using a hashing function from the early 2000s. A security audit flags the implementation as high risk.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#cryptography"
      },
      {
        "id": 92,
        "qid": "Q0092",
        "prompt": "What is the PRIMARY difference between a vulnerability assessment and a penetration test?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "A vulnerability assessment uses automated tools; penetration testing is entirely manual",
          "A vulnerability assessment identifies and reports potential weaknesses; a penetration test actively exploits vulnerabilities to demonstrate impact",
          "Penetration tests are done by internal staff; vulnerability assessments require external contractors",
          "Vulnerability assessments always include social engineering; penetration tests never do"
        ],
        "explanation": "A vulnerability assessment scans and identifies potential weaknesses but does not exploit them. A penetration test actively attempts to exploit vulnerabilities to demonstrate real-world impact and attacker paths. Both can use automated tools and both can be conducted by internal or external teams, those are not the defining differences.",
        "correctAnswers": [
          "A vulnerability assessment identifies and reports potential weaknesses; a penetration test actively exploits vulnerabilities to demonstrate impact"
        ],
        "scenario": "A CISO is planning the annual security testing program and must explain the difference between two budget line items to the board of directors.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#vulnerability-scanning"
      },
      {
        "id": 93,
        "qid": "Q0093",
        "prompt": "A forensic investigator must collect evidence from a compromised workstation. In what order should evidence be collected according to the order of volatility?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Hard drive → RAM → CPU registers → network connections",
          "CPU registers/RAM → network connections → disk → archived media",
          "Disk image → RAM → then power off",
          "Network connections first only, as the rest can wait"
        ],
        "explanation": "The order of volatility (most to least volatile): CPU registers/cache → RAM → network connections/routing tables → running processes → disk → removable media → archived/backups. The most volatile evidence is lost first when the system is powered off. RAM (containing running processes, encryption keys, network state) must be captured before disk imaging.",
        "correctAnswers": [
          "CPU registers/RAM → network connections → disk → archived media"
        ],
        "scenario": "The workstation may be powered down at any time by facilities staff. The investigator must prioritize evidence collection.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#digital-forensics"
      },
      {
        "id": 94,
        "qid": "Q0094",
        "prompt": "A penetration tester enters the value ' OR '1'='1 into a login form's username field and bypasses authentication without a valid password. Which vulnerability is being exploited?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Cross-site scripting (XSS)",
          "SQL injection",
          "Command injection",
          "Cross-site request forgery (CSRF)"
        ],
        "explanation": "SQL injection inserts malicious SQL syntax into input fields, manipulating the database query. ' OR '1'='1 makes the WHERE clause always true, bypassing authentication. XSS injects scripts into web pages viewed by other users. Command injection runs OS commands. CSRF tricks authenticated users into submitting malicious requests.",
        "correctAnswers": [
          "SQL injection"
        ],
        "scenario": "The web application's login page passes user input directly to a SQL database query without sanitization.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#application-attacks"
      },
      {
        "id": 95,
        "qid": "Q0095",
        "prompt": "In a Zero Trust model, which component is responsible for making access decisions based on identity, device posture, and environmental signals?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Policy Enforcement Point (PEP)",
          "Policy Decision Point (PDP)",
          "Security Information and Event Manager (SIEM)",
          "Network Access Control (NAC) server"
        ],
        "explanation": "In Zero Trust architecture (per NIST SP 800-207), the Policy Decision Point (PDP) evaluates identity, device posture, risk signals, and policies to make access decisions. The Policy Enforcement Point (PEP) enforces those decisions. The SIEM aggregates logs but doesn't make real-time access decisions. NAC is a perimeter-era control.",
        "correctAnswers": [
          "Policy Decision Point (PDP)"
        ],
        "scenario": "An enterprise is deploying a Zero Trust Network Access solution. The architects need to identify which component evaluates contextual signals before allowing resource access.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#zero-trust"
      },
      {
        "id": 96,
        "qid": "Q0096",
        "prompt": "Select THREE characteristics that distinguish advanced persistent threat (APT) actors from opportunistic cybercriminals.",
        "type": "multiple-choice-multiple",
        "difficulty": "hard",
        "options": [
          "Long dwell time within compromised environments before detection",
          "Use of living-off-the-land (LOTL) techniques to blend with legitimate tools",
          "Immediate deployment of ransomware for quick financial return",
          "Nation-state or well-funded organizational backing",
          "Targeting of random victims for maximum infection volume"
        ],
        "explanation": "APTs are characterized by persistence (long dwell time to achieve strategic objectives), sophistication (LOTL techniques, custom tools), and resources (state or organized-crime backing). Immediate ransomware deployment is a financially motivated opportunistic behavior. APTs target specific organizations for intelligence or disruption, not random victims.",
        "correctAnswers": [
          "Long dwell time within compromised environments before detection",
          "Use of living-off-the-land (LOTL) techniques to blend with legitimate tools",
          "Nation-state or well-funded organizational backing"
        ],
        "scenario": "A threat intelligence team is briefing the board on two recent incidents: one from a financially motivated criminal group and one suspected state-sponsored APT.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#malware"
      },
      {
        "id": 97,
        "qid": "Q0097",
        "prompt": "A developer must ensure that sensitive financial data sent between a mobile app and a backend API cannot be read if intercepted in transit. Which solution BEST addresses this requirement?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Sign each API request with the user's private RSA key",
          "Encode payloads using Base64 before transmission",
          "Encrypt all traffic using TLS 1.3 with AES-256-GCM",
          "Hash the payload with SHA-256 before sending"
        ],
        "explanation": "TLS 1.3 with AES-256-GCM provides authenticated encryption for data in transit, ensuring confidentiality. RSA signing provides integrity/non-repudiation but not confidentiality. Base64 is encoding, not encryption. SHA-256 hashing provides integrity but no confidentiality.",
        "correctAnswers": [
          "Encrypt all traffic using TLS 1.3 with AES-256-GCM"
        ],
        "scenario": "A fintech company's mobile app transmits account balances and transaction history over public Wi-Fi. The security team requires confidentiality for all API calls.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#cryptography"
      },
      {
        "id": 98,
        "qid": "Q0098",
        "prompt": "Select THREE technical controls that MOST effectively reduce the risk of a successful phishing attack reaching users.",
        "type": "multiple-choice-multiple",
        "difficulty": "medium",
        "options": [
          "Email filtering with DMARC/DKIM/SPF enforcement",
          "FIDO2 hardware security keys for all accounts",
          "Annual phishing awareness training only",
          "URL sandboxing and rewriting",
          "Blocking all email attachments regardless of sender"
        ],
        "explanation": "DMARC/DKIM/SPF validates email sender authenticity, reducing spoofed email delivery. FIDO2 keys prevent credential theft even if a user is phished (phishing-resistant MFA). URL sandboxing detonates links safely before allowing access. Annual training alone is insufficient as a technical control. Blocking all attachments causes significant business disruption and has limited effectiveness against links.",
        "correctAnswers": [
          "Email filtering with DMARC/DKIM/SPF enforcement",
          "FIDO2 hardware security keys for all accounts",
          "URL sandboxing and rewriting"
        ],
        "scenario": "A company experienced three successful phishing attacks in the past quarter. The CISO wants both preventive and detective controls to reduce exposure.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#social-engineering"
      },
      {
        "id": 99,
        "qid": "Q0099",
        "prompt": "Malicious code was inserted into a widely-used open-source build tool, affecting thousands of downstream software products. What type of attack does this represent?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Watering hole attack",
          "Supply chain attack",
          "Zero-day exploit",
          "Fileless malware"
        ],
        "explanation": "A supply chain attack compromises software, hardware, or services before delivery to the end customer, often through third-party vendors, libraries, or build systems. The SolarWinds attack is a real-world example. A watering hole attack compromises websites visited by targets. Zero-day exploits target unknown vulnerabilities. Fileless malware operates in memory without disk artifacts.",
        "correctAnswers": [
          "Supply chain attack"
        ],
        "scenario": "A threat intelligence report describes attackers compromising a build pipeline used by multiple software vendors. The malicious code was signed with the vendor's legitimate signing certificate.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#supply-chain-attacks"
      },
      {
        "id": 100,
        "qid": "Q0100",
        "prompt": "A company uses Kerberos for internal authentication. An attacker obtains the NTLM hash of a service account and uses it to request Kerberos tickets for that service. What attack has occurred?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Pass-the-ticket",
          "Kerberoasting",
          "Pass-the-hash",
          "AS-REP Roasting"
        ],
        "explanation": "Pass-the-hash uses a captured NTLM hash to authenticate without knowing the cleartext password. Kerberoasting extracts and cracks service ticket hashes offline to discover service account passwords. Pass-the-ticket forges or steals Kerberos tickets (not hashes). AS-REP Roasting targets accounts without pre-authentication enabled to get crackable hashes.",
        "correctAnswers": [
          "Pass-the-hash"
        ],
        "scenario": "During incident response, forensic analysis shows an attacker authenticated to multiple services using a service account without knowing the cleartext password.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#authentication"
      },
      {
        "id": 101,
        "qid": "Q0101",
        "prompt": "A user presents a username, password, and a fingerprint scan to log into a workstation. How many authentication factors are being used?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "One factor",
          "Two factors",
          "Three factors",
          "Four factors"
        ],
        "explanation": "Authentication factors are: something you know (password), something you have (token/card), and something you are (biometric). A username is an identifier, not an authentication factor. The password is 'something you know' and the fingerprint is 'something you are', that is two factors. The username is simply the identity claim.",
        "correctAnswers": [
          "Two factors"
        ],
        "scenario": "A classified government facility requires multi-factor authentication for all workstation logins.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#authentication"
      },
      {
        "id": 102,
        "qid": "Q0102",
        "prompt": "During a wireless security assessment, a tester sets up an access point with the same SSID as the corporate network and captures credentials. What type of attack is this?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Deauthentication attack",
          "Evil twin attack",
          "Replay attack",
          "Bluesnarfing"
        ],
        "explanation": "An evil twin attack creates a rogue access point mimicking a legitimate one (same SSID, possibly stronger signal) to intercept traffic and credentials. A deauthentication attack disconnects clients from a real AP (often used to force reconnection to an evil twin). A replay attack retransmits captured authentication exchanges. Bluesnarfing exploits Bluetooth to access device data.",
        "correctAnswers": [
          "Evil twin attack"
        ],
        "scenario": "The penetration tester positioned near a building entrance sets up a rogue hotspot. Employees automatically connect and their VPN credentials are captured via a captive portal.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#wireless-security"
      },
      {
        "id": 103,
        "qid": "Q0103",
        "prompt": "A company is migrating to a Zero Trust architecture. Which principle BEST describes the core assumption of Zero Trust?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Internal network traffic is implicitly trusted",
          "All users must use VPN to access resources",
          "No user or device is trusted by default, regardless of location",
          "The perimeter firewall is sufficient to protect internal resources"
        ],
        "explanation": "Zero Trust operates on the principle of 'never trust, always verify', no implicit trust is granted based on network location or device type. Every access request must be verified. VPN is a perimeter-based control inconsistent with Zero Trust philosophy. Implicit internal trust is the traditional perimeter model that Zero Trust replaces.",
        "correctAnswers": [
          "No user or device is trusted by default, regardless of location"
        ],
        "scenario": "The IT security team is redesigning network access policies after a breach originated from a trusted internal device.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#zero-trust"
      },
      {
        "id": 104,
        "qid": "Q0104",
        "prompt": "Select THREE properties that a cryptographic hash function must provide to be considered secure for integrity verification.",
        "type": "multiple-choice-multiple",
        "difficulty": "medium",
        "options": [
          "Pre-image resistance",
          "Confidentiality of the original input",
          "Collision resistance",
          "Second pre-image resistance",
          "Reversibility for authorized users"
        ],
        "explanation": "A secure hash function requires: pre-image resistance (cannot reverse the hash to find input), collision resistance (cannot find two inputs with the same hash), and second pre-image resistance (cannot find a second input matching a known input's hash). Hash functions are one-way and do not provide confidentiality, and reversibility would undermine their security.",
        "correctAnswers": [
          "Pre-image resistance",
          "Collision resistance",
          "Second pre-image resistance"
        ],
        "scenario": "A software vendor needs to publish checksums for firmware images so customers can verify authenticity before flashing devices.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#cryptography"
      },
      {
        "id": 105,
        "qid": "Q0105",
        "prompt": "Which tool is specifically designed to create a bitwise forensic copy of a hard drive while ensuring the source drive is not modified?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Robocopy with the /NOCOPY flag",
          "dd with a write-blocker device",
          "Windows backup utility",
          "rsync with checksums"
        ],
        "explanation": "The 'dd' command creates bitwise (sector-by-sector) copies of storage media, capturing all data including deleted files and slack space. A hardware write-blocker prevents any writes to the source drive, preserving the original evidence. Robocopy copies files but not unallocated space or deleted data. Windows backup creates backup archives, not forensic images. rsync syncs files but not raw disk sectors.",
        "correctAnswers": [
          "dd with a write-blocker device"
        ],
        "scenario": "An investigator must image a suspect's laptop hard drive. The evidence must be forensically sound and admissible in legal proceedings.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#digital-forensics"
      },
      {
        "id": 106,
        "qid": "Q0106",
        "prompt": "A company's DR test involves IT staff walking through a written scenario step-by-step in a conference room without actually activating any systems. What type of DR test is this?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Full interruption test",
          "Parallel test",
          "Tabletop exercise",
          "Simulation test"
        ],
        "explanation": "A tabletop exercise is a discussion-based DR test where stakeholders walk through a simulated scenario verbally without activating actual recovery systems. It's low-cost and good for identifying procedure gaps and testing team communication. A parallel test activates the alternate site alongside the primary. Full interruption actually fails over to the DR site. A simulation test uses simulated (not real) DR procedures with some system activation.",
        "correctAnswers": [
          "Tabletop exercise"
        ],
        "scenario": "The CISO is scheduling the annual DR exercise. Budget constraints prevent a full failover test. The team will review procedures and identify gaps through discussion.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#business-continuity-disaster-recovery"
      },
      {
        "id": 107,
        "qid": "Q0107",
        "prompt": "A security team wants to share indicators of compromise (IOCs) with partner organizations in a standardized machine-readable format. Which framework and protocol combination BEST supports this?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "CVSS and NVD",
          "STIX and TAXII",
          "MITRE ATT&CK and OpenIOC",
          "NIST CSF and OSCAL"
        ],
        "explanation": "STIX (Structured Threat Information eXpression) is the standardized format for expressing threat intelligence (IOCs, TTPs, threat actors). TAXII (Trusted Automated eXchange of Intelligence Information) is the transport protocol for sharing STIX data. CVSS/NVD rates vulnerabilities. MITRE ATT&CK documents adversary behaviors but TAXII/STIX is the sharing mechanism.",
        "correctAnswers": [
          "STIX and TAXII"
        ],
        "scenario": "After a targeted attack, the CISO wants to share threat data including attacker TTPs and malware hashes with an industry ISAC and other peer companies automatically.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#threat-intelligence"
      },
      {
        "id": 108,
        "qid": "Q0108",
        "prompt": "A security engineer needs to establish a shared encryption key between two parties over an untrusted channel WITHOUT transmitting the key itself. Which protocol accomplishes this?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "RSA key transport",
          "Diffie-Hellman key exchange",
          "AES-256 key wrapping",
          "ECDSA key derivation"
        ],
        "explanation": "Diffie-Hellman allows two parties to derive a shared secret over an untrusted channel without transmitting the key itself. RSA key transport encrypts the key with the recipient's public key, the key material is transmitted. AES-256 requires a pre-existing key. ECDSA is a signing algorithm, not key agreement.",
        "correctAnswers": [
          "Diffie-Hellman key exchange"
        ],
        "scenario": "Two remote offices need to negotiate an encryption key for a new VPN tunnel. The negotiation must happen over the public internet with no pre-shared secret.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#cryptography"
      },
      {
        "id": 109,
        "qid": "Q0109",
        "prompt": "A security camera that records footage of a parking lot but does not trigger any alerts is an example of which type of security control?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Preventive control",
          "Detective control",
          "Corrective control",
          "Compensating control"
        ],
        "explanation": "A security camera that records footage is a detective control, it identifies and records security events after they occur. A preventive control stops incidents before they happen (e.g., a fence). A corrective control restores systems after an incident. A compensating control substitutes for a primary control when it cannot be implemented.",
        "correctAnswers": [
          "Detective control"
        ],
        "scenario": "A facilities security review is categorizing all physical and technical controls by function.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#security-controls"
      },
      {
        "id": 110,
        "qid": "Q0110",
        "prompt": "A security administrator writes a PowerShell script that automatically disables user accounts that have been inactive for 90 days. Which security concept does this BEST demonstrate?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Automation and scripting for security operations",
          "Incident response containment",
          "Vulnerability scanning",
          "Data loss prevention"
        ],
        "explanation": "Automating the disabling of inactive accounts is a prime example of using scripting for security operations. It enforces access control policies consistently without manual intervention. This is not incident response (no incident triggered it), not vulnerability scanning, and not DLP.",
        "correctAnswers": [
          "Automation and scripting for security operations"
        ],
        "scenario": "The IT department wants to reduce the risk of dormant account exploitation. Manual quarterly reviews have proven inconsistent.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#endpoint-security"
      },
      {
        "id": 111,
        "qid": "Q0111",
        "prompt": "Which scripting use case BEST demonstrates the principle of automating security compliance checks?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "A script that scans all servers for missing patches and generates a compliance report",
          "An administrator manually reviewing firewall logs each morning",
          "A help desk technician resetting passwords upon request",
          "A security analyst reading threat intelligence feeds daily"
        ],
        "explanation": "A script that automatically scans for missing patches and generates reports is automating compliance checks, it replaces manual effort with consistent, repeatable verification. Manual log reviews, password resets, and reading feeds are all human-driven activities, not automation.",
        "correctAnswers": [
          "A script that scans all servers for missing patches and generates a compliance report"
        ],
        "scenario": "An organization must demonstrate PCI-DSS compliance by showing all systems are patched within 30 days of critical CVE publication.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#vulnerability-management"
      },
      {
        "id": 112,
        "qid": "Q0112",
        "prompt": "A Python script is used to automatically parse SIEM alerts, enrich them with threat intelligence, and create tickets for analysts. This is an example of:",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "SOAR playbook automation",
          "Static application security testing",
          "Network segmentation",
          "Data classification"
        ],
        "explanation": "Automatically parsing alerts, enriching with threat intel, and creating tickets is exactly what SOAR (Security Orchestration, Automation, and Response) playbooks do. SAST analyzes source code. Network segmentation divides networks. Data classification labels data.",
        "correctAnswers": [
          "SOAR playbook automation"
        ],
        "scenario": "The SOC team receives 500+ alerts per day and needs to reduce analyst fatigue by automating repetitive triage tasks.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#siem-soar"
      },
      {
        "id": 113,
        "qid": "Q0113",
        "prompt": "A manufacturing plant's SCADA system controlling water treatment processes is connected to the corporate network for remote monitoring. Which security concern is MOST critical?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Lack of network segmentation between IT and OT environments",
          "The SCADA system not having antivirus software",
          "Employees using weak passwords on workstations",
          "The corporate website lacking a WAF"
        ],
        "explanation": "The most critical concern is the lack of segmentation between IT (corporate) and OT (operational technology/SCADA) networks. A compromise of the corporate network could directly impact physical industrial processes. SCADA systems often cannot run traditional AV. While weak passwords and missing WAFs are concerns, they don't pose the same physical safety risk as unsegmented IT/OT convergence.",
        "correctAnswers": [
          "Lack of network segmentation between IT and OT environments"
        ],
        "scenario": "A security audit of the water treatment facility reveals the SCADA HMI (Human Machine Interface) is on the same VLAN as employee workstations.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#network-segmentation"
      },
      {
        "id": 114,
        "qid": "Q0114",
        "prompt": "Which of the following is a unique security challenge for IoT devices compared to traditional IT endpoints?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "IoT devices often have limited processing power and cannot run traditional security agents",
          "IoT devices always use encrypted communications by default",
          "IoT devices are only used in home environments",
          "IoT devices have the same patching lifecycle as desktop computers"
        ],
        "explanation": "IoT devices typically have constrained resources (limited CPU, memory, storage), making it impossible to install traditional endpoint protection agents. They do NOT always use encryption by default (many use plaintext protocols). IoT is used extensively in enterprise and industrial settings. IoT patching is often difficult or impossible due to firmware limitations.",
        "correctAnswers": [
          "IoT devices often have limited processing power and cannot run traditional security agents"
        ],
        "scenario": "A hospital is deploying 500 IoT medical sensors throughout the facility and needs to determine the appropriate security strategy.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#network-segmentation"
      },
      {
        "id": 115,
        "qid": "Q0115",
        "prompt": "An organization discovers that IoT cameras on their network are using default credentials and communicating with an external IP address. Select THREE appropriate immediate actions.",
        "type": "multiple-choice-multiple",
        "difficulty": "hard",
        "options": [
          "Isolate the IoT cameras on a separate VLAN with restricted internet access",
          "Change default credentials on all IoT devices",
          "Block the external IP address at the firewall",
          "Replace all cameras with laptop webcams",
          "Disable the corporate firewall to investigate traffic",
          "Ignore the traffic since IoT devices frequently phone home"
        ],
        "explanation": "The three correct actions are: (1) Isolate cameras on a separate VLAN to limit lateral movement and control traffic flow, (2) Change default credentials to prevent unauthorized access, (3) Block the suspicious external IP at the firewall to stop potential C2 communication. Replacing with webcams doesn't solve the problem. Disabling the firewall would make things worse. Ignoring suspicious traffic to unknown IPs is negligent.",
        "correctAnswers": [
          "Isolate the IoT cameras on a separate VLAN with restricted internet access",
          "Change default credentials on all IoT devices",
          "Block the external IP address at the firewall"
        ],
        "scenario": "The SOC identifies unusual outbound traffic from the IoT camera subnet during a routine network analysis.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#network-monitoring"
      },
      {
        "id": 116,
        "qid": "Q0116",
        "prompt": "Which protocol is used to add digital signatures to DNS records, preventing DNS cache poisoning attacks?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "DNSSEC",
          "HTTPS",
          "IPsec",
          "S/MIME"
        ],
        "explanation": "DNSSEC (Domain Name System Security Extensions) adds digital signatures to DNS records, enabling resolvers to verify that responses are authentic and haven't been tampered with. HTTPS encrypts web traffic. IPsec encrypts IP-layer traffic. S/MIME secures email.",
        "correctAnswers": [
          "DNSSEC"
        ],
        "scenario": null,
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#secure-protocols"
      },
      {
        "id": 117,
        "qid": "Q0117",
        "prompt": "An organization implements SPF, DKIM, and DMARC for their email domain. What is the PRIMARY purpose of this combination?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Prevent email spoofing and verify sender authenticity",
          "Encrypt all email content end-to-end",
          "Block all spam emails from reaching users",
          "Ensure emails are backed up in the cloud"
        ],
        "explanation": "SPF (Sender Policy Framework) specifies which mail servers can send on behalf of the domain. DKIM (DomainKeys Identified Mail) adds a digital signature to verify the email wasn't altered. DMARC (Domain-based Message Authentication, Reporting, and Conformance) ties SPF and DKIM together with a policy for handling failures. Together they prevent email spoofing. They do NOT encrypt email content (S/MIME or PGP does that) or block all spam.",
        "correctAnswers": [
          "Prevent email spoofing and verify sender authenticity"
        ],
        "scenario": "The security team notices that phishing emails are being sent to customers with forged 'From' addresses appearing to come from the company's domain.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#secure-protocols"
      },
      {
        "id": 118,
        "qid": "Q0118",
        "prompt": "Which email security record is a DNS TXT record that specifies which mail servers are authorized to send email on behalf of a domain?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "SPF (Sender Policy Framework)",
          "DKIM (DomainKeys Identified Mail)",
          "DMARC (Domain-based Message Authentication, Reporting, and Conformance)",
          "MX (Mail Exchange)"
        ],
        "explanation": "SPF is a DNS TXT record listing the IP addresses and mail servers authorized to send email for the domain. DKIM adds a cryptographic signature to email headers. DMARC is a policy that builds on SPF and DKIM. MX records specify which servers receive email for the domain, not which can send.",
        "correctAnswers": [
          "SPF (Sender Policy Framework)"
        ],
        "scenario": null,
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#secure-protocols"
      },
      {
        "id": 119,
        "qid": "Q0119",
        "prompt": "An email gateway quarantines a message because the DKIM signature verification failed. What does this indicate?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "The email content may have been modified in transit or the sender is not authorized",
          "The email was encrypted with an expired TLS certificate",
          "The recipient's mailbox is full",
          "The email contained a ZIP attachment"
        ],
        "explanation": "DKIM failure means the cryptographic signature attached to the email header does not match the email content or the signing domain's public key. This indicates the email was either modified in transit (tampering) or sent by someone not authorized to sign for that domain (spoofing). DKIM has nothing to do with TLS certificates, mailbox capacity, or attachment types.",
        "correctAnswers": [
          "The email content may have been modified in transit or the sender is not authorized"
        ],
        "scenario": "The mail administrator is reviewing quarantined emails and sees multiple messages flagged for DKIM verification failure.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#secure-protocols"
      },
      {
        "id": 120,
        "qid": "Q0120",
        "prompt": "An organization wants to ensure that employees can only install company-approved applications on their corporate mobile devices. Which technology BEST achieves this?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "MDM (Mobile Device Management) with application allowlisting",
          "A corporate VPN",
          "Full-disk encryption on the device",
          "A web application firewall"
        ],
        "explanation": "MDM with application allowlisting (whitelisting) restricts which apps can be installed on managed devices. IT can push approved apps and block unapproved ones. A VPN secures network traffic but doesn't control app installation. FDE protects data at rest. A WAF protects web applications, not mobile device app installation.",
        "correctAnswers": [
          "MDM (Mobile Device Management) with application allowlisting"
        ],
        "scenario": "The CISO is concerned about employees installing unauthorized apps that could contain malware or exfiltrate corporate data.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#endpoint-security"
      },
      {
        "id": 121,
        "qid": "Q0121",
        "prompt": "An employee's personal phone is used for work email under a BYOD policy. The employee leaves the company. Which mobile management approach allows the IT team to wipe ONLY corporate data without affecting personal photos and apps?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "MAM (Mobile Application Management) with selective wipe",
          "Full device remote wipe via MDM",
          "Disabling the device's Wi-Fi remotely",
          "Revoking the employee's building access badge"
        ],
        "explanation": "MAM (Mobile Application Management) manages only corporate applications and data within a container on the device. A selective wipe removes only the corporate container (email, apps, documents) while leaving personal data intact. Full remote wipe erases everything, inappropriate for personal BYOD devices. Disabling Wi-Fi and revoking badges don't address data on the device.",
        "correctAnswers": [
          "MAM (Mobile Application Management) with selective wipe"
        ],
        "scenario": "The HR department notifies IT that an employee using their personal iPhone for work has resigned effective immediately.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#endpoint-security"
      },
      {
        "id": 122,
        "qid": "Q0122",
        "prompt": "Select THREE capabilities typically provided by an MDM (Mobile Device Management) solution.",
        "type": "multiple-choice-multiple",
        "difficulty": "medium",
        "options": [
          "Remote wipe of lost or stolen devices",
          "Enforce screen lock and encryption policies",
          "Push and manage corporate applications",
          "Perform SQL injection testing on web apps",
          "Configure firewall rules on network switches",
          "Conduct employee background checks"
        ],
        "explanation": "MDM provides: (1) Remote wipe to protect data on lost/stolen devices, (2) Policy enforcement including screen lock, encryption, and password requirements, (3) Application management to push, update, and remove corporate apps. MDM does not perform web app security testing, configure network infrastructure, or handle HR functions.",
        "correctAnswers": [
          "Remote wipe of lost or stolen devices",
          "Enforce screen lock and encryption policies",
          "Push and manage corporate applications"
        ],
        "scenario": "A company is evaluating MDM solutions for its fleet of 2,000 corporate smartphones.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#endpoint-security"
      },
      {
        "id": 123,
        "qid": "Q0123",
        "prompt": "Which hardware component stores encryption keys, supports Secure Boot, and provides hardware-based attestation on a laptop?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "TPM (Trusted Platform Module)",
          "GPU (Graphics Processing Unit)",
          "NIC (Network Interface Card)",
          "PSU (Power Supply Unit)"
        ],
        "explanation": "The TPM is a dedicated hardware chip that securely stores cryptographic keys, certificates, and passwords. It enables Secure Boot (verifying boot integrity), BitLocker drive encryption, and remote attestation. GPU handles graphics processing, NIC handles network connectivity, and PSU provides power, none store cryptographic material.",
        "correctAnswers": [
          "TPM (Trusted Platform Module)"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#endpoint-security"
      },
      {
        "id": 124,
        "qid": "Q0124",
        "prompt": "A Certificate Authority (CA) needs to perform thousands of digital signing operations per second while ensuring private keys never leave the hardware. Which device should be used?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "HSM (Hardware Security Module)",
          "TPM (Trusted Platform Module)",
          "USB flash drive with encryption",
          "Standard server with software-based key storage"
        ],
        "explanation": "An HSM is a dedicated, tamper-resistant hardware device designed for high-performance cryptographic operations and secure key storage. Private keys are generated, stored, and used within the HSM and never exported. A TPM is built into individual endpoints and lacks the performance for CA-scale operations. USB drives and software key storage are not tamper-resistant and lack hardware-accelerated crypto.",
        "correctAnswers": [
          "HSM (Hardware Security Module)"
        ],
        "scenario": "The organization operates an enterprise PKI issuing certificates for 50,000 employees and 100,000 devices.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#pki-certificates"
      },
      {
        "id": 125,
        "qid": "Q0125",
        "prompt": "A UEFI Secure Boot verification fails during laptop startup. What is the MOST likely cause?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "The bootloader or OS kernel has been modified or replaced with unsigned code",
          "The laptop's Wi-Fi driver needs updating",
          "The battery is low",
          "The user entered the wrong password"
        ],
        "explanation": "Secure Boot verifies the digital signature of the bootloader and OS kernel before allowing them to execute. A verification failure means the code has been modified, replaced, or is unsigned, possibly by a bootkit or rootkit. Wi-Fi drivers, battery level, and login passwords are unrelated to the Secure Boot chain.",
        "correctAnswers": [
          "The bootloader or OS kernel has been modified or replaced with unsigned code"
        ],
        "scenario": "A laptop that was left unattended overnight now displays a Secure Boot violation error and refuses to start the operating system.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#endpoint-security"
      },
      {
        "id": 126,
        "qid": "Q0126",
        "prompt": "A company's change management policy requires that all changes to production systems be approved, tested, and documented before implementation. A developer pushes a code fix directly to production to resolve a user complaint. What policy has been violated?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Change management policy",
          "Acceptable use policy",
          "Data retention policy",
          "Password policy"
        ],
        "explanation": "The change management policy requires formal approval, testing, and documentation before any production changes. Pushing code directly to production without following this process violates change management. The AUP covers general IT resource usage. Data retention covers how long data is kept. Password policy covers credential requirements.",
        "correctAnswers": [
          "Change management policy"
        ],
        "scenario": "The production deployment caused a brief outage affecting 200 users. The developer had good intentions but bypassed the required approval process.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#security-policies"
      },
      {
        "id": 127,
        "qid": "Q0127",
        "prompt": "Which type of attack specifically targets industrial control systems (ICS) and SCADA environments by manipulating the physical processes they control?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "An attack that modifies PLC (Programmable Logic Controller) logic to alter physical processes",
          "A SQL injection attack against a web application",
          "A brute-force attack against user passwords",
          "A DNS cache poisoning attack"
        ],
        "explanation": "Attacks targeting ICS/SCADA environments (like Stuxnet) manipulate PLC logic to alter physical processes, changing motor speeds, valve positions, temperature settings, etc. This can cause physical damage or safety hazards. SQL injection targets databases, brute-force targets authentication, and DNS poisoning targets name resolution, none directly affect physical industrial processes.",
        "correctAnswers": [
          "An attack that modifies PLC (Programmable Logic Controller) logic to alter physical processes"
        ],
        "scenario": "A nuclear enrichment facility discovers that centrifuge speeds are fluctuating unexpectedly, causing equipment damage.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#network-attacks"
      },
      {
        "id": 128,
        "qid": "Q0128",
        "prompt": "An embedded system in a medical device runs a real-time operating system (RTOS) that cannot be patched without FDA recertification. Which is the BEST compensating control?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Place the device on an isolated network segment with strict firewall rules limiting connectivity to only required systems",
          "Install a third-party antivirus agent on the device",
          "Connect the device directly to the internet for remote vendor support",
          "Ignore the risk since the device is FDA-approved"
        ],
        "explanation": "When patching is not possible (regulatory constraints), network isolation is the best compensating control. Place the device on a dedicated VLAN with firewall rules allowing only necessary communication. Most embedded/RTOS devices cannot run traditional AV agents. Direct internet connectivity dramatically increases attack surface. FDA approval does not mean the device is secure from cyber threats.",
        "correctAnswers": [
          "Place the device on an isolated network segment with strict firewall rules limiting connectivity to only required systems"
        ],
        "scenario": "A hospital's MRI machine runs Windows XP Embedded, which is end-of-life and no longer receives security patches.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#network-segmentation"
      },
      {
        "id": 129,
        "qid": "Q0129",
        "prompt": "What is the PRIMARY difference between a vulnerability scan and a penetration test?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "A vulnerability scan identifies potential weaknesses; a penetration test actively exploits them to prove impact",
          "A vulnerability scan is performed monthly; a penetration test is performed daily",
          "A vulnerability scan requires physical access; a penetration test is always remote",
          "A vulnerability scan tests applications; a penetration test tests networks only"
        ],
        "explanation": "A vulnerability scan is an automated tool that identifies potential weaknesses (open ports, missing patches, misconfigurations) but does not exploit them. A penetration test goes further, a tester actively attempts to exploit vulnerabilities to demonstrate real-world impact and prove that the vulnerability can actually be leveraged. Frequency, access method, and scope vary for both.",
        "correctAnswers": [
          "A vulnerability scan identifies potential weaknesses; a penetration test actively exploits them to prove impact"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#vulnerability-scanning"
      },
      {
        "id": 130,
        "qid": "Q0130",
        "prompt": "During a penetration test, the tester is given no information about the target environment, no IP ranges, no network diagrams, no credentials. What type of test is this?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Black-box (unknown environment) test",
          "White-box (known environment) test",
          "Gray-box (partially known environment) test",
          "Red team exercise"
        ],
        "explanation": "A black-box test (unknown environment) gives the tester zero prior knowledge, simulating an external attacker. White-box provides full knowledge (source code, network diagrams, credentials). Gray-box provides partial knowledge. A red team exercise is a broader adversarial simulation that may include social engineering and physical testing, not just network penetration.",
        "correctAnswers": [
          "Black-box (unknown environment) test"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#vulnerability-scanning"
      },
      {
        "id": 131,
        "qid": "Q0131",
        "prompt": "An attacker sends a specially crafted USB device to an employee as a promotional gift. When plugged in, the device emulates a keyboard and rapidly types commands to download malware. What is this attack called?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "USB HID (Human Interface Device) attack / Rubber Ducky attack",
          "SQL injection",
          "ARP poisoning",
          "DNS tunneling"
        ],
        "explanation": "A USB HID attack (commonly known as a Rubber Ducky attack) uses a device that appears as a keyboard to the operating system. It types pre-programmed keystrokes at high speed to execute commands, download payloads, or exfiltrate data. SQL injection targets databases. ARP poisoning targets network traffic. DNS tunneling uses DNS for covert communication.",
        "correctAnswers": [
          "USB HID (Human Interface Device) attack / Rubber Ducky attack"
        ],
        "scenario": "Security cameras show an employee plugging in a USB drive received in the mail. Within seconds, a command prompt appeared and closed on their screen.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#malware"
      },
      {
        "id": 132,
        "qid": "Q0132",
        "prompt": "Which type of malware resides entirely in memory, leaves no files on disk, and often uses legitimate system tools like PowerShell to execute its payload?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Fileless malware",
          "Boot sector virus",
          "Macro virus",
          "Polymorphic virus"
        ],
        "explanation": "Fileless malware operates entirely in RAM without writing files to disk, making it extremely difficult for traditional signature-based AV to detect. It commonly leverages legitimate tools (PowerShell, WMI, .NET framework), a technique called 'living off the land.' Boot sector viruses infect the MBR. Macro viruses embed in documents. Polymorphic viruses change their code with each infection.",
        "correctAnswers": [
          "Fileless malware"
        ],
        "scenario": "EDR detects suspicious PowerShell commands executing on a workstation, but antivirus finds no malicious files on the hard drive.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#malware"
      },
      {
        "id": 133,
        "qid": "Q0133",
        "prompt": "An insider threat program detects that a departing employee has been emailing large volumes of proprietary files to a personal email account over the past two weeks. Which control would have BEST prevented this?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "DLP (Data Loss Prevention) policy blocking sensitive file transfers to external email addresses",
          "Mandatory vacation policy",
          "Background check during hiring",
          "Security awareness training"
        ],
        "explanation": "A DLP policy configured to block or alert on sensitive file transfers to external/personal email addresses would directly prevent this exfiltration. Background checks happen at hiring (too late). Mandatory vacations detect fraud, not data theft. Awareness training educates but doesn't technically block transfers.",
        "correctAnswers": [
          "DLP (Data Loss Prevention) policy blocking sensitive file transfers to external email addresses"
        ],
        "scenario": "The employee submitted their two-week resignation notice. During this period, email gateway logs show 47 emails with attachments sent to a personal Gmail address.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#insider-threats"
      },
      {
        "id": 134,
        "qid": "Q0134",
        "prompt": "Select THREE indicators that an insider threat may be occurring.",
        "type": "multiple-choice-multiple",
        "difficulty": "hard",
        "options": [
          "Unusual data access patterns outside the employee's normal job function",
          "Large file downloads or transfers to external storage during off-hours",
          "An employee expressing dissatisfaction and discussing resignation",
          "An employee arriving early to work consistently",
          "An employee attending all required security training",
          "An employee using their corporate laptop for approved work tasks"
        ],
        "explanation": "Insider threat indicators include: (1) Accessing data outside normal job scope suggests unauthorized snooping, (2) Large off-hours transfers suggest data exfiltration, (3) Expressed dissatisfaction combined with other indicators raises risk level. Arriving early, completing training, and normal laptop use are positive or neutral behaviors.",
        "correctAnswers": [
          "Unusual data access patterns outside the employee's normal job function",
          "Large file downloads or transfers to external storage during off-hours",
          "An employee expressing dissatisfaction and discussing resignation"
        ],
        "scenario": "The insider threat team is developing behavioral analytics rules for their user and entity behavior analytics (UEBA) platform.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#insider-threats"
      },
      {
        "id": 135,
        "qid": "Q0135",
        "prompt": "A VM escape vulnerability is discovered in the hypervisor used by a cloud provider. Which statement BEST describes the risk?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "An attacker in one tenant's VM could access the hypervisor and potentially all other tenants' VMs on the same physical host",
          "Only the attacker's own VM would be affected",
          "The vulnerability only affects the cloud provider's management console",
          "VM escape only works against Type 2 hypervisors"
        ],
        "explanation": "VM escape allows an attacker to break out of their VM and access the hypervisor layer. Since the hypervisor manages all VMs on the host, this could compromise every tenant's VM on that physical server, a catastrophic multi-tenant breach. VM escape affects both Type 1 and Type 2 hypervisors. It is not limited to the management console.",
        "correctAnswers": [
          "An attacker in one tenant's VM could access the hypervisor and potentially all other tenants' VMs on the same physical host"
        ],
        "scenario": "A cloud provider is assessing the impact of a newly disclosed CVE in their VMware ESXi hypervisor.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#virtualization"
      },
      {
        "id": 136,
        "qid": "Q0136",
        "prompt": "Which secure coding practice BEST prevents SQL injection attacks?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Using parameterized queries (prepared statements)",
          "Using a longer database password",
          "Enabling HTTPS on the web server",
          "Adding a CAPTCHA to the login form"
        ],
        "explanation": "Parameterized queries (prepared statements) separate SQL code from user input, making it impossible for injected SQL to alter the query structure. Longer database passwords don't prevent injection. HTTPS encrypts traffic but doesn't validate input. CAPTCHAs prevent automated submissions but don't filter malicious SQL input.",
        "correctAnswers": [
          "Using parameterized queries (prepared statements)"
        ],
        "scenario": null,
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#secure-coding"
      },
      {
        "id": 137,
        "qid": "Q0137",
        "prompt": "A development team runs a SAST tool in their CI/CD pipeline. The tool reports a hardcoded API key in the source code. Why is this a security concern?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Anyone with access to the code repository can see and use the API key, and it cannot be rotated without a code change",
          "SAST tools always produce false positives for API keys",
          "Hardcoded keys improve application performance",
          "API keys are only used for testing and have no production impact"
        ],
        "explanation": "Hardcoded API keys in source code are accessible to anyone who can view the repository (including attackers if the repo is compromised). The key cannot be rotated without modifying and redeploying the code. Best practice: store secrets in a vault (AWS Secrets Manager, HashiCorp Vault) or environment variables, never in source code.",
        "correctAnswers": [
          "Anyone with access to the code repository can see and use the API key, and it cannot be rotated without a code change"
        ],
        "scenario": "The SAST scan flagged the line: const API_KEY = 'sk-prod-a8f3b2c1d4e5...' in the payment processing module.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#secure-coding"
      },
      {
        "id": 138,
        "qid": "Q0138",
        "prompt": "A software supply chain attack is discovered where a widely-used open-source library was compromised with a backdoor. Which security practice would BEST detect this before deployment?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Software Composition Analysis (SCA) scanning dependencies against known vulnerability databases",
          "Changing the administrator password on the web server",
          "Implementing a VPN for remote developers",
          "Requiring developers to use two monitors"
        ],
        "explanation": "SCA tools scan open-source dependencies and third-party libraries for known vulnerabilities (CVEs) and license compliance issues. They would detect a compromised library if the vulnerability is published. Changing passwords, VPNs, and monitor counts are unrelated to supply chain dependency verification.",
        "correctAnswers": [
          "Software Composition Analysis (SCA) scanning dependencies against known vulnerability databases"
        ],
        "scenario": "A critical backdoor similar to the XZ Utils incident is found in a compression library used by thousands of applications.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#supply-chain-attacks"
      },
      {
        "id": 139,
        "qid": "Q0139",
        "prompt": "An organization requires all software bills of materials (SBOMs) from vendors before deploying their products. What risk does this practice mitigate?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Supply chain risk by providing visibility into all software components and their known vulnerabilities",
          "Physical theft of server hardware",
          "Social engineering attacks against employees",
          "Denial of service attacks against the network"
        ],
        "explanation": "A Software Bill of Materials (SBOM) lists all components, libraries, and dependencies in a software product. This visibility allows the organization to check for known vulnerabilities in any component, assess supply chain risk, and respond quickly when a new CVE affects a listed dependency. SBOMs don't address physical theft, social engineering, or DoS attacks.",
        "correctAnswers": [
          "Supply chain risk by providing visibility into all software components and their known vulnerabilities"
        ],
        "scenario": "After the Log4Shell vulnerability, the CISO mandates that all new vendor software must include an SBOM.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#supply-chain-attacks"
      },
      {
        "id": 140,
        "qid": "Q0140",
        "prompt": "Which concept in data privacy requires that an organization collect only the minimum amount of personal data necessary for the stated purpose?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Data minimization",
          "Data masking",
          "Data aggregation",
          "Data replication"
        ],
        "explanation": "Data minimization is a core privacy principle (emphasized in GDPR) that requires organizations to collect only the personal data that is directly necessary for the specified purpose. Data masking hides parts of data. Data aggregation combines data from multiple sources. Data replication copies data for availability.",
        "correctAnswers": [
          "Data minimization"
        ],
        "scenario": null,
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#compliance-frameworks"
      },
      {
        "id": 141,
        "qid": "Q0141",
        "prompt": "Under GDPR, a data subject requests that an organization permanently delete all their personal data. What is this right called?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Right to be forgotten (right to erasure)",
          "Right to data portability",
          "Right to access",
          "Right to restrict processing"
        ],
        "explanation": "The right to be forgotten (Article 17 GDPR) allows individuals to request permanent deletion of their personal data when it is no longer necessary for the original purpose, consent is withdrawn, or processing is unlawful. Data portability is the right to receive data in a portable format. Right to access is the right to see what data is collected. Right to restrict processing limits how data is used.",
        "correctAnswers": [
          "Right to be forgotten (right to erasure)"
        ],
        "scenario": "A former customer contacts the company's Data Protection Officer requesting that all their account data be permanently removed from all systems.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#compliance-frameworks"
      },
      {
        "id": 142,
        "qid": "Q0142",
        "prompt": "A security team configures a SIEM rule to alert when a user account successfully authenticates from two different countries within a 30-minute window. What detection technique is this?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Impossible travel detection",
          "Brute-force detection",
          "Port scan detection",
          "Malware signature detection"
        ],
        "explanation": "Impossible travel detection identifies when a user authenticates from geographically distant locations within a timeframe that makes physical travel impossible. This indicates compromised credentials being used from a different location. Brute-force detection looks for repeated failed logins. Port scan detection identifies network reconnaissance. Malware signatures match known malware patterns.",
        "correctAnswers": [
          "Impossible travel detection"
        ],
        "scenario": "An alert fires: user jsmith logged in from New York at 14:00 UTC and from Moscow at 14:22 UTC.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#siem-soar"
      },
      {
        "id": 143,
        "qid": "Q0143",
        "prompt": "What is the PRIMARY advantage of an incremental backup compared to a full backup?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "It takes less time and storage because it only backs up data changed since the last backup",
          "It provides faster restore times than a full backup",
          "It eliminates the need for a full backup entirely",
          "It encrypts data more securely than a full backup"
        ],
        "explanation": "Incremental backups only copy data that changed since the last backup (full or incremental), requiring less time and storage. However, restore is SLOWER because you need the full backup plus every incremental backup in sequence. Incremental does not replace full backups, you still need periodic full backups. Encryption is independent of backup type.",
        "correctAnswers": [
          "It takes less time and storage because it only backs up data changed since the last backup"
        ],
        "scenario": null,
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#business-continuity-disaster-recovery"
      },
      {
        "id": 144,
        "qid": "Q0144",
        "prompt": "A Zero Trust architecture requires continuous verification. Which statement BEST describes this principle?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Every access request is verified regardless of the user's location or previous authentication status",
          "Users are trusted after the initial VPN connection",
          "Only external users need to be verified; internal users are automatically trusted",
          "Verification is only required for administrative accounts"
        ],
        "explanation": "Zero Trust's core principle is 'never trust, always verify.' Every access request, from any user, device, or location, must be authenticated, authorized, and continuously validated. There is no concept of a 'trusted' internal network. VPN connectivity does not grant implicit trust. The policy applies to ALL accounts, not just admins.",
        "correctAnswers": [
          "Every access request is verified regardless of the user's location or previous authentication status"
        ],
        "scenario": null,
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#zero-trust"
      },
      {
        "id": 145,
        "qid": "Q0145",
        "prompt": "Which wireless security protocol uses Simultaneous Authentication of Equals (SAE) to replace the vulnerable PSK four-way handshake?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "WPA3",
          "WPA2",
          "WEP",
          "WPA"
        ],
        "explanation": "WPA3 introduces SAE (Simultaneous Authentication of Equals), which replaces the PSK (Pre-Shared Key) four-way handshake used in WPA2. SAE provides stronger protection against offline dictionary attacks and forward secrecy. WPA2 uses PSK or 802.1X. WEP and WPA use older, broken authentication methods.",
        "correctAnswers": [
          "WPA3"
        ],
        "scenario": null,
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#wireless-security"
      },
      {
        "id": 146,
        "qid": "Q0146",
        "prompt": "An organization implements geofencing on corporate mobile devices. What does this control do?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Restricts or modifies device functionality based on geographic location",
          "Encrypts all data stored on the device",
          "Blocks all incoming phone calls",
          "Prevents the device from connecting to any Wi-Fi network"
        ],
        "explanation": "Geofencing uses GPS or network location to define geographic boundaries. When a device enters or leaves a defined zone, policies are triggered, such as disabling the camera in sensitive areas, requiring additional authentication, or blocking certain apps. It does not encrypt data, block calls, or prevent Wi-Fi connections as its primary function.",
        "correctAnswers": [
          "Restricts or modifies device functionality based on geographic location"
        ],
        "scenario": "A defense contractor wants to automatically disable smartphone cameras when employees enter a classified work area.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#endpoint-security"
      },
      {
        "id": 147,
        "qid": "Q0147",
        "prompt": "A company stores backup tapes in a fireproof safe at the same building as their primary data center. What is the BIGGEST risk with this approach?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "A site-wide disaster (flood, earthquake) could destroy both primary data and backups simultaneously",
          "The fireproof safe provides too much protection",
          "Backup tapes are obsolete technology",
          "The safe takes up too much office space"
        ],
        "explanation": "Storing backups at the same location as the primary data center means a site-wide disaster could destroy both. This violates the offsite component of the 3-2-1 backup rule (3 copies, 2 media types, 1 offsite). Fireproof safes protect against fire but not floods, earthquakes, or building-level disasters. Tape is still widely used for archival storage.",
        "correctAnswers": [
          "A site-wide disaster (flood, earthquake) could destroy both primary data and backups simultaneously"
        ],
        "scenario": "The DR team is reviewing the backup strategy after a regional flooding event affected a nearby business.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#business-continuity-disaster-recovery"
      },
      {
        "id": 148,
        "qid": "Q0148",
        "prompt": "Which access control model would be MOST appropriate for a cloud application that needs to grant or deny access based on the user's department, time of day, device type, and location simultaneously?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "ABAC (Attribute-Based Access Control)",
          "RBAC (Role-Based Access Control)",
          "DAC (Discretionary Access Control)",
          "MAC (Mandatory Access Control)"
        ],
        "explanation": "ABAC evaluates multiple attributes simultaneously, user attributes (department, clearance), resource attributes, environmental attributes (time, location), and device attributes, to make access decisions. RBAC uses roles only. DAC uses owner discretion. MAC uses labels and clearance. Only ABAC natively supports evaluating all these factors together in a single policy decision.",
        "correctAnswers": [
          "ABAC (Attribute-Based Access Control)"
        ],
        "scenario": "The cloud security team needs fine-grained access control that considers multiple contextual factors for each access request.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#identity-access-management"
      },
      {
        "id": 149,
        "qid": "Q0149",
        "prompt": "A bash script runs nightly to compare current firewall rules against an approved baseline and emails the security team if any unauthorized changes are detected. This is an example of:",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Configuration management and integrity monitoring via automation",
          "Penetration testing",
          "Social engineering assessment",
          "Physical security audit"
        ],
        "explanation": "Automated comparison of current configurations against a known-good baseline is configuration management and integrity monitoring. The script detects unauthorized changes (configuration drift) and alerts the security team. This is not penetration testing (no exploitation), social engineering (no human manipulation), or physical security (no physical assessment).",
        "correctAnswers": [
          "Configuration management and integrity monitoring via automation"
        ],
        "scenario": "After a firewall rule was changed without approval, causing a security incident, the team automated baseline comparisons.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#siem-soar"
      },
      {
        "id": 150,
        "qid": "Q0150",
        "prompt": "Which type of agreement is legally required by HIPAA when a healthcare organization shares Protected Health Information (PHI) with a third-party vendor?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "BAA (Business Associate Agreement)",
          "NDA (Non-Disclosure Agreement)",
          "SLA (Service Level Agreement)",
          "MOU (Memorandum of Understanding)"
        ],
        "explanation": "HIPAA requires a Business Associate Agreement (BAA) whenever a covered entity shares PHI with a business associate (vendor). The BAA defines the vendor's obligations for safeguarding PHI, including security controls, breach notification requirements, and permitted uses. An NDA covers confidentiality generally. SLAs cover performance. MOUs are non-binding.",
        "correctAnswers": [
          "BAA (Business Associate Agreement)"
        ],
        "scenario": "A hospital is onboarding a cloud-based medical records vendor that will store and process patient data.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#vendor-management"
      },
      {
        "id": 151,
        "qid": "Q0151",
        "prompt": "A security team uses a Python script to automatically query a threat intelligence API, check all firewall logs against known malicious IPs, and generate a daily report. Which benefit of automation does this BEST demonstrate?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Consistent, repeatable analysis at scale that would be impractical manually",
          "Elimination of all false positives",
          "Replacement of all security analysts",
          "Guaranteed prevention of all cyber attacks"
        ],
        "explanation": "Automation provides consistent, repeatable processes at a scale impossible for manual work. Checking thousands of log entries against threat intel feeds daily would take analysts hours, a script does it in minutes with perfect consistency. Automation does NOT eliminate false positives, replace analysts entirely, or guarantee prevention of all attacks.",
        "correctAnswers": [
          "Consistent, repeatable analysis at scale that would be impractical manually"
        ],
        "scenario": "The SOC processes 2 million firewall log entries per day. Manual review of each entry against threat feeds is impossible.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#siem-soar"
      },
      {
        "id": 152,
        "qid": "Q0152",
        "prompt": "An organization's security policy states that all sensitive data must be encrypted. The corresponding security STANDARD would specify:",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "The specific encryption algorithm and key length to use (e.g., AES-256)",
          "A high-level statement that encryption is important",
          "Recommended but optional encryption guidelines",
          "Step-by-step instructions for installing encryption software"
        ],
        "explanation": "A security standard provides specific, mandatory technical requirements that support the policy. If the policy says 'encrypt sensitive data,' the standard specifies 'use AES-256 for data at rest and TLS 1.2+ for data in transit.' A policy gives the high-level intent. Guidelines are optional. Procedures give step-by-step instructions.",
        "correctAnswers": [
          "The specific encryption algorithm and key length to use (e.g., AES-256)"
        ],
        "scenario": null,
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#security-policies"
      },
      {
        "id": 153,
        "qid": "Q0153",
        "prompt": "Which NIST Cybersecurity Framework function includes activities like asset management, risk assessment, and supply chain risk management?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Identify",
          "Protect",
          "Detect",
          "Respond"
        ],
        "explanation": "The Identify function covers understanding the organization's environment to manage cybersecurity risk: asset management, business environment, governance, risk assessment, risk management strategy, and supply chain risk management. Protect implements safeguards. Detect identifies occurrences. Respond takes action on detected events.",
        "correctAnswers": [
          "Identify"
        ],
        "scenario": null,
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#compliance-frameworks"
      },
      {
        "id": 154,
        "qid": "Q0154",
        "prompt": "An email security gateway blocks an inbound email because the DMARC policy for the sender's domain is set to 'p=reject' and both SPF and DKIM checks failed. What does 'p=reject' instruct the receiving mail server to do?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Reject (block) emails that fail both SPF and DKIM alignment",
          "Quarantine emails for manual review",
          "Allow all emails regardless of authentication results",
          "Forward failed emails to the sender's postmaster"
        ],
        "explanation": "DMARC policy 'p=reject' instructs receiving mail servers to reject (not deliver) emails that fail SPF and DKIM alignment checks. This is the strictest DMARC policy. 'p=quarantine' sends to spam/quarantine. 'p=none' takes no action (monitoring only). There is no forward-to-postmaster policy in DMARC.",
        "correctAnswers": [
          "Reject (block) emails that fail both SPF and DKIM alignment"
        ],
        "scenario": "The organization recently upgraded their DMARC policy from 'p=none' (monitoring) to 'p=reject' (enforcement) to stop domain spoofing.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#secure-protocols"
      },
      {
        "id": 155,
        "qid": "Q0155",
        "prompt": "A network administrator notices that an IoT thermostat is sending DNS queries to unusual external domains every 5 minutes. The thermostat should only communicate with the building management system on the local network. What should the administrator do FIRST?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Isolate the thermostat on a restricted VLAN and investigate the traffic",
          "Factory reset the thermostat immediately",
          "Upgrade the thermostat's firmware",
          "Ignore it since IoT devices often send telemetry"
        ],
        "explanation": "The first step is containment, isolate the device on a restricted network segment to prevent potential lateral movement or data exfiltration while preserving evidence for investigation. Factory reset could destroy forensic evidence. Firmware upgrade doesn't address the immediate threat. Ignoring suspicious outbound traffic from a device that should only communicate locally is negligent.",
        "correctAnswers": [
          "Isolate the thermostat on a restricted VLAN and investigate the traffic"
        ],
        "scenario": "DNS logs show the thermostat querying domains like 'x7f2a.suspect-domain.com' every 300 seconds, a pattern consistent with beaconing.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#network-monitoring"
      },
      {
        "id": 156,
        "qid": "Q0156",
        "prompt": "What is the purpose of an air-gapped network in a SCADA/ICS environment?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "To physically isolate the industrial control network from the internet and corporate networks",
          "To improve internet browsing speed for operators",
          "To allow wireless access for maintenance technicians",
          "To enable cloud-based monitoring of industrial processes"
        ],
        "explanation": "An air gap provides complete physical isolation, no network connectivity between the SCADA/ICS network and external networks (internet, corporate LAN). This prevents remote cyber attacks from reaching critical infrastructure. It does not improve browsing (no internet connection), does not provide wireless access, and is the opposite of cloud connectivity.",
        "correctAnswers": [
          "To physically isolate the industrial control network from the internet and corporate networks"
        ],
        "scenario": "A power utility is designing the network architecture for a new power generation facility.",
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#network-segmentation"
      },
      {
        "id": 157,
        "qid": "Q0157",
        "prompt": "A quantitative risk analysis determines that the ALE (Annualized Loss Expectancy) for a specific risk is $120,000. A proposed mitigation control costs $150,000 per year to implement. What is the MOST appropriate risk treatment?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Accept the risk with formal documentation, since the mitigation cost exceeds the expected annual loss",
          "Implement the control regardless of cost",
          "Transfer the risk to an insurance company for $200,000 per year",
          "Avoid the risk by shutting down the business function entirely"
        ],
        "explanation": "When the cost of mitigation ($150K) exceeds the ALE ($120K), the mitigation is not financially justified. Risk acceptance with formal documentation is appropriate, management acknowledges the risk and signs off. Implementing a control that costs more than the risk is wasteful. Insurance at $200K is even more expensive. Shutting down the business function may be disproportionate.",
        "correctAnswers": [
          "Accept the risk with formal documentation, since the mitigation cost exceeds the expected annual loss"
        ],
        "scenario": "The CFO requests a quantitative justification for each proposed security investment exceeding $100,000.",
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#risk-management"
      },
      {
        "id": 158,
        "qid": "Q0158",
        "prompt": "Which type of social engineering attack uses voice calls (telephone) to trick victims into revealing sensitive information?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Vishing",
          "Phishing",
          "Smishing",
          "Whaling"
        ],
        "explanation": "Vishing (voice phishing) uses phone calls to socially engineer victims. Phishing uses email. Smishing uses SMS/text messages. Whaling targets high-profile executives specifically. All are forms of social engineering but use different communication channels.",
        "correctAnswers": [
          "Vishing"
        ],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#social-engineering"
      },
      {
        "id": 159,
        "qid": "Q0159",
        "prompt": "A security engineer configures an email gateway to strip all macros from incoming Microsoft Office attachments. Which threat does this MOST effectively mitigate?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Macro-based malware delivered via email attachments",
          "SQL injection attacks",
          "ARP spoofing on the local network",
          "Brute-force password attacks"
        ],
        "explanation": "Stripping macros from Office attachments at the email gateway prevents macro-based malware (a common delivery mechanism for trojans, ransomware, and other malware) from reaching users. SQL injection targets web applications. ARP spoofing targets local networks. Brute-force targets authentication, none are delivered via document macros.",
        "correctAnswers": [
          "Macro-based malware delivered via email attachments"
        ],
        "scenario": "The organization experienced a ransomware infection last quarter that originated from a malicious Excel spreadsheet emailed to an employee.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#malware"
      },
      {
        "id": 160,
        "qid": "Q0160",
        "prompt": "What is the PRIMARY purpose of a honeytoken?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "To detect unauthorized access by placing a fake credential, file, or record that triggers an alert when accessed",
          "To encrypt sensitive data in a database",
          "To provide high-availability failover for web servers",
          "To accelerate DNS lookups"
        ],
        "explanation": "A honeytoken is a decoy, a fake credential, database record, file, or account that has no legitimate use. Any access to the honeytoken indicates unauthorized activity and triggers an alert. Examples: a fake admin account that nobody should use, a fake file named 'employee-salaries.xlsx' in a shared drive. Honeytokens are detective controls, not related to encryption, HA, or DNS.",
        "correctAnswers": [
          "To detect unauthorized access by placing a fake credential, file, or record that triggers an alert when accessed"
        ],
        "scenario": "The security team plants a file named 'CEO-passwords.docx' on a file share and configures alerts for any access to it.",
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#threat-intelligence"
      },
      {
        "id": 161,
        "qid": "Q0161",
        "prompt": "Which physical security control uses a mantrap (or security vestibule) to prevent?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Tailgating / piggybacking into secure areas",
          "SQL injection attacks",
          "Phishing emails",
          "DNS cache poisoning"
        ],
        "explanation": "A mantrap (security vestibule) is a small room with two interlocking doors, only one can be open at a time. This prevents tailgating, where an unauthorized person follows an authorized person through a secured door. SQL injection, phishing, and DNS poisoning are all cyber attacks, not physical security concerns.",
        "correctAnswers": [
          "Tailgating / piggybacking into secure areas"
        ],
        "scenario": null,
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#physical-security"
      },
      {
        "id": 162,
        "qid": "Q0162",
        "prompt": "An organization uses certificate pinning in their mobile banking app. What does this protect against?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "Man-in-the-middle attacks using fraudulent certificates, even if signed by a trusted CA",
          "SQL injection in the database",
          "DDoS attacks against the server",
          "Physical theft of the mobile device"
        ],
        "explanation": "Certificate pinning hardcodes (pins) the expected server certificate or public key into the application. Even if an attacker presents a valid certificate from a different CA (e.g., through a compromised CA or corporate proxy), the app rejects it because it doesn't match the pinned certificate. This prevents MitM attacks that traditional certificate validation would miss.",
        "correctAnswers": [
          "Man-in-the-middle attacks using fraudulent certificates, even if signed by a trusted CA"
        ],
        "scenario": "The bank's security team discovered that a state-sponsored attacker had obtained a fraudulent certificate from a compromised CA for the bank's domain.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#pki-certificates"
      },
      {
        "id": 163,
        "qid": "Q0163",
        "prompt": "Which of the following BEST describes the concept of 'least functionality' in system hardening?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Disabling or removing unnecessary services, ports, protocols, and features from a system",
          "Granting all users full administrative access",
          "Installing every available software update",
          "Connecting all devices to the same network segment"
        ],
        "explanation": "Least functionality means configuring systems to provide only the essential capabilities required for their intended function. Unnecessary services, ports, protocols, and applications are disabled or removed to reduce the attack surface. This is different from least privilege (user permissions), least functionality applies to system configuration.",
        "correctAnswers": [
          "Disabling or removing unnecessary services, ports, protocols, and features from a system"
        ],
        "scenario": null,
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#security-controls"
      },
      {
        "id": 164,
        "qid": "Q0164",
        "prompt": "A security analyst discovers that an attacker used a watering hole attack to compromise several employees. What technique did the attacker use?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Compromised a website frequently visited by the target group and injected malware into it",
          "Sent personalized phishing emails to specific executives",
          "Used brute-force to crack VPN passwords",
          "Exploited a zero-day vulnerability in the firewall"
        ],
        "explanation": "A watering hole attack compromises a legitimate website that the target group frequently visits (their 'watering hole'). When victims visit the site, malware is delivered through drive-by downloads or exploit kits. Personalized emails targeting executives is spear-phishing/whaling. Brute-force and firewall exploits are different attack vectors.",
        "correctAnswers": [
          "Compromised a website frequently visited by the target group and injected malware into it"
        ],
        "scenario": "Multiple employees from the same department were infected with the same malware within a week. Investigation traced the infection to a popular industry news website they all visit regularly.",
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#social-engineering"
      },
      {
        "id": 165,
        "qid": "Q0165",
        "prompt": "Which encryption mode should be used for AES encryption of large amounts of data to avoid the pattern-preservation weakness of ECB mode?",
        "type": "multiple-choice-single",
        "difficulty": "hard",
        "options": [
          "CBC (Cipher Block Chaining) or GCM (Galois/Counter Mode)",
          "ECB (Electronic Codebook) mode",
          "No encryption mode is needed for AES",
          "ROT13"
        ],
        "explanation": "ECB mode encrypts each block independently, preserving patterns in the plaintext (identical plaintext blocks produce identical ciphertext blocks). CBC chains blocks together so identical plaintext blocks produce different ciphertext. GCM provides both encryption and authentication (AEAD). ROT13 is a simple letter substitution, not encryption.",
        "correctAnswers": [
          "CBC (Cipher Block Chaining) or GCM (Galois/Counter Mode)"
        ],
        "scenario": "A developer is implementing AES encryption for a file storage system and needs to choose the appropriate block cipher mode.",
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#cryptography"
      },
      {
        "id": 166,
        "qid": "Q0166",
        "prompt": "What does the acronym CIA stand for in information security?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Confidentiality, Integrity, Availability",
          "Control, Identification, Authentication",
          "Compliance, Investigation, Authorization",
          "Cybersecurity, Intelligence, Assessment"
        ],
        "explanation": "The CIA triad is the foundational model of information security: Confidentiality (protecting data from unauthorized access), Integrity (ensuring data is accurate and unaltered), and Availability (ensuring systems and data are accessible when needed).",
        "correctAnswers": [
          "Confidentiality, Integrity, Availability"
        ],
        "scenario": null,
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#security-controls"
      },
      {
        "id": 167,
        "qid": "Q0167",
        "prompt": "What is the default port number for HTTPS?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "443",
          "80",
          "22",
          "8080"
        ],
        "explanation": "HTTPS (HTTP Secure) uses port 443 by default. Port 80 is HTTP (unencrypted). Port 22 is SSH. Port 8080 is commonly used as an alternative HTTP port.",
        "correctAnswers": [
          "443"
        ],
        "scenario": null,
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#secure-protocols"
      },
      {
        "id": 168,
        "qid": "Q0168",
        "prompt": "What is the default port number for SSH?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "22",
          "23",
          "443",
          "3389"
        ],
        "explanation": "SSH (Secure Shell) uses port 22 by default. Port 23 is Telnet (insecure). Port 443 is HTTPS. Port 3389 is RDP (Remote Desktop Protocol).",
        "correctAnswers": [
          "22"
        ],
        "scenario": null,
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#secure-protocols"
      },
      {
        "id": 169,
        "qid": "Q0169",
        "prompt": "What is the default port number for RDP (Remote Desktop Protocol)?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "3389",
          "22",
          "443",
          "1433"
        ],
        "explanation": "RDP uses port 3389 by default. Port 22 is SSH. Port 443 is HTTPS. Port 1433 is Microsoft SQL Server.",
        "correctAnswers": [
          "3389"
        ],
        "scenario": null,
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#secure-protocols"
      },
      {
        "id": 170,
        "qid": "Q0170",
        "prompt": "Which port does DNS typically use?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "53",
          "80",
          "25",
          "110"
        ],
        "explanation": "DNS (Domain Name System) uses port 53 for both TCP and UDP. Port 80 is HTTP. Port 25 is SMTP. Port 110 is POP3.",
        "correctAnswers": [
          "53"
        ],
        "scenario": null,
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#secure-protocols"
      },
      {
        "id": 171,
        "qid": "Q0171",
        "prompt": "What does AAA stand for in the context of network security?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Authentication, Authorization, Accounting",
          "Access, Administration, Auditing",
          "Assessment, Analysis, Architecture",
          "Application, Automation, Availability"
        ],
        "explanation": "AAA stands for Authentication (verifying identity), Authorization (granting permissions based on identity), and Accounting (tracking user activities and resource usage). AAA frameworks include RADIUS and TACACS+.",
        "correctAnswers": [
          "Authentication, Authorization, Accounting"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#authentication"
      },
      {
        "id": 172,
        "qid": "Q0172",
        "prompt": "What type of authentication factor is a fingerprint scan?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Something you are (biometric)",
          "Something you know",
          "Something you have",
          "Somewhere you are"
        ],
        "explanation": "A fingerprint is a biometric, 'something you are.' It is a unique physical characteristic. 'Something you know' is a password or PIN. 'Something you have' is a token or smart card. 'Somewhere you are' is location-based authentication.",
        "correctAnswers": [
          "Something you are (biometric)"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#authentication"
      },
      {
        "id": 173,
        "qid": "Q0173",
        "prompt": "What does MFA stand for?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Multi-Factor Authentication",
          "Multiple Firewall Architecture",
          "Managed File Access",
          "Maximum Failure Attempts"
        ],
        "explanation": "MFA stands for Multi-Factor Authentication, requiring two or more different types of authentication factors (something you know, have, are, or somewhere you are) to verify identity.",
        "correctAnswers": [
          "Multi-Factor Authentication"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#authentication"
      },
      {
        "id": 174,
        "qid": "Q0174",
        "prompt": "What is the PRIMARY function of a firewall?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Filter network traffic based on predefined rules",
          "Encrypt all stored data",
          "Scan files for viruses",
          "Manage user passwords"
        ],
        "explanation": "A firewall filters network traffic by comparing packets against a set of predefined rules (ACLs) to allow or deny traffic. Encryption is handled by encryption tools/protocols. Virus scanning is done by antivirus/antimalware. Password management is done by IAM systems.",
        "correctAnswers": [
          "Filter network traffic based on predefined rules"
        ],
        "scenario": null,
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#firewalls-ids-ips"
      },
      {
        "id": 175,
        "qid": "Q0175",
        "prompt": "What is the difference between an IDS and an IPS?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "An IDS detects and alerts on threats; an IPS detects and actively blocks them",
          "An IDS blocks threats; an IPS only alerts",
          "An IDS is hardware only; an IPS is software only",
          "There is no difference; they are the same technology"
        ],
        "explanation": "An IDS (Intrusion Detection System) monitors traffic and alerts when suspicious activity is detected but takes no blocking action. An IPS (Intrusion Prevention System) sits inline and can actively block or drop malicious traffic in real-time. Both can be hardware or software.",
        "correctAnswers": [
          "An IDS detects and alerts on threats; an IPS detects and actively blocks them"
        ],
        "scenario": null,
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#firewalls-ids-ips"
      },
      {
        "id": 176,
        "qid": "Q0176",
        "prompt": "What does the term 'non-repudiation' mean in information security?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "A party cannot deny having performed an action, such as sending a message or signing a document",
          "Data is encrypted so no one can read it",
          "Systems are always available to users",
          "Only authorized users can access the network"
        ],
        "explanation": "Non-repudiation ensures that a party cannot deny the authenticity of their signature or the sending of a message. Digital signatures provide non-repudiation by cryptographically binding an action to an identity. Encryption provides confidentiality. Availability ensures uptime. Access control limits users.",
        "correctAnswers": [
          "A party cannot deny having performed an action, such as sending a message or signing a document"
        ],
        "scenario": null,
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#cryptography"
      },
      {
        "id": 177,
        "qid": "Q0177",
        "prompt": "What type of encryption uses the SAME key for both encryption and decryption?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Symmetric encryption",
          "Asymmetric encryption",
          "Hashing",
          "Steganography"
        ],
        "explanation": "Symmetric encryption uses a single shared key for both encryption and decryption (e.g., AES, 3DES). Asymmetric encryption uses a key pair (public and private). Hashing is a one-way function that does not decrypt. Steganography hides data within other data.",
        "correctAnswers": [
          "Symmetric encryption"
        ],
        "scenario": null,
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#cryptography"
      },
      {
        "id": 178,
        "qid": "Q0178",
        "prompt": "Which encryption algorithm is an example of asymmetric (public-key) cryptography?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "RSA",
          "AES",
          "DES",
          "Blowfish"
        ],
        "explanation": "RSA (Rivest-Shamir-Adleman) is an asymmetric algorithm that uses a public/private key pair. AES (Advanced Encryption Standard), DES (Data Encryption Standard), and Blowfish are all symmetric algorithms that use a single shared key.",
        "correctAnswers": [
          "RSA"
        ],
        "scenario": null,
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#cryptography"
      },
      {
        "id": 179,
        "qid": "Q0179",
        "prompt": "What is the purpose of a hash function in cryptography?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Produce a fixed-length digest that uniquely represents input data for integrity verification",
          "Encrypt data so only authorized parties can read it",
          "Generate random passwords for users",
          "Compress files to save storage space"
        ],
        "explanation": "A cryptographic hash function takes any input and produces a fixed-length output (digest/hash). It is one-way (cannot be reversed) and is used to verify data integrity, if the data changes, the hash changes. Common algorithms: SHA-256, SHA-3, MD5 (deprecated). Hashing does not encrypt, generate passwords, or compress files.",
        "correctAnswers": [
          "Produce a fixed-length digest that uniquely represents input data for integrity verification"
        ],
        "scenario": null,
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#cryptography"
      },
      {
        "id": 180,
        "qid": "Q0180",
        "prompt": "What does SIEM stand for?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Security Information and Event Management",
          "System Integration and Endpoint Monitoring",
          "Secure Internet and Email Management",
          "Software Incident and Error Management"
        ],
        "explanation": "SIEM stands for Security Information and Event Management. It collects, aggregates, and analyzes log data from across the environment to detect threats, generate alerts, and support compliance reporting.",
        "correctAnswers": [
          "Security Information and Event Management"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#siem-soar"
      },
      {
        "id": 181,
        "qid": "Q0181",
        "prompt": "What does the principle of least privilege state?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Users should be given only the minimum permissions necessary to perform their job duties",
          "All users should have administrator access for convenience",
          "Privileges should be assigned based on seniority",
          "Users should share accounts to simplify access management"
        ],
        "explanation": "Least privilege means granting only the minimum access rights and permissions needed for a user to perform their specific job function, nothing more. This limits the blast radius if an account is compromised. Admin access for all, seniority-based access, and shared accounts all violate this principle.",
        "correctAnswers": [
          "Users should be given only the minimum permissions necessary to perform their job duties"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#identity-access-management"
      },
      {
        "id": 182,
        "qid": "Q0182",
        "prompt": "What is a VPN?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "A Virtual Private Network that creates an encrypted tunnel over a public network",
          "A Verified Public Network for open internet access",
          "A Virus Protection Node on the firewall",
          "A Virtual Proxy Navigator for anonymous browsing"
        ],
        "explanation": "A VPN (Virtual Private Network) creates an encrypted tunnel between two endpoints over an untrusted network (like the internet), providing confidentiality and integrity for data in transit. Common VPN protocols include IPsec, OpenVPN, and WireGuard.",
        "correctAnswers": [
          "A Virtual Private Network that creates an encrypted tunnel over a public network"
        ],
        "scenario": null,
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#vpn"
      },
      {
        "id": 183,
        "qid": "Q0183",
        "prompt": "What does RBAC stand for in access control?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Role-Based Access Control",
          "Rule-Based Authentication Control",
          "Risk-Based Audit Compliance",
          "Remote Backup and Configuration"
        ],
        "explanation": "RBAC (Role-Based Access Control) assigns permissions based on a user's role within the organization (e.g., 'nurse,' 'manager,' 'developer') rather than individual user accounts. Users are assigned to roles, and roles have predefined permissions.",
        "correctAnswers": [
          "Role-Based Access Control"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#identity-access-management"
      },
      {
        "id": 184,
        "qid": "Q0184",
        "prompt": "What is phishing?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "A social engineering attack that uses fraudulent emails to trick users into revealing sensitive information",
          "A type of denial-of-service attack",
          "A wireless network scanning technique",
          "A method of encrypting email"
        ],
        "explanation": "Phishing is a social engineering attack where attackers send deceptive emails (or messages) impersonating trusted entities to trick recipients into clicking malicious links, providing credentials, or downloading malware. It is the most common initial attack vector.",
        "correctAnswers": [
          "A social engineering attack that uses fraudulent emails to trick users into revealing sensitive information"
        ],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#social-engineering"
      },
      {
        "id": 185,
        "qid": "Q0185",
        "prompt": "What type of malware encrypts a victim's files and demands payment for the decryption key?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Ransomware",
          "Spyware",
          "Adware",
          "Rootkit"
        ],
        "explanation": "Ransomware encrypts victim files or locks system access and demands a ransom payment (usually cryptocurrency) for the decryption key. Spyware monitors user activity. Adware displays unwanted ads. A rootkit hides its presence and maintains persistent access.",
        "correctAnswers": [
          "Ransomware"
        ],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#malware"
      },
      {
        "id": 186,
        "qid": "Q0186",
        "prompt": "What type of malware disguises itself as legitimate software to trick users into installing it?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Trojan",
          "Worm",
          "Ransomware",
          "Logic bomb"
        ],
        "explanation": "A Trojan (Trojan horse) disguises itself as useful or legitimate software but contains hidden malicious functionality. Unlike viruses, Trojans do not self-replicate. A worm self-replicates across networks. Ransomware encrypts files. A logic bomb triggers on a specific condition.",
        "correctAnswers": [
          "Trojan"
        ],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#malware"
      },
      {
        "id": 187,
        "qid": "Q0187",
        "prompt": "What is the difference between a virus and a worm?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "A virus requires a host file or user action to spread; a worm self-replicates across networks without user interaction",
          "A virus is more dangerous than a worm",
          "A worm requires user action; a virus spreads automatically",
          "There is no difference between them"
        ],
        "explanation": "A virus attaches to a host file (executable, document) and requires user action (opening the file) to spread. A worm is standalone malware that self-replicates across networks by exploiting vulnerabilities, requiring no user interaction. Both can be equally dangerous depending on payload.",
        "correctAnswers": [
          "A virus requires a host file or user action to spread; a worm self-replicates across networks without user interaction"
        ],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#malware"
      },
      {
        "id": 188,
        "qid": "Q0188",
        "prompt": "What does DLP stand for?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Data Loss Prevention",
          "Digital Login Protocol",
          "Domain Level Protection",
          "Device Lifecycle Planning"
        ],
        "explanation": "DLP (Data Loss Prevention) is a set of tools and policies designed to prevent sensitive data from being leaked, exfiltrated, or shared outside the organization. DLP can monitor and block data transfers via email, USB, cloud storage, and other channels.",
        "correctAnswers": [
          "Data Loss Prevention"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#data-security"
      },
      {
        "id": 189,
        "qid": "Q0189",
        "prompt": "Which protocol replaced the insecure Telnet for remote command-line access?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "SSH (Secure Shell)",
          "FTP",
          "SNMP",
          "HTTP"
        ],
        "explanation": "SSH (Secure Shell) replaced Telnet by providing encrypted remote command-line access. Telnet transmits everything (including passwords) in plaintext. FTP is for file transfer. SNMP manages network devices. HTTP is for web browsing.",
        "correctAnswers": [
          "SSH (Secure Shell)"
        ],
        "scenario": null,
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#secure-protocols"
      },
      {
        "id": 190,
        "qid": "Q0190",
        "prompt": "What is a zero-day vulnerability?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "A vulnerability that is unknown to the vendor and has no available patch",
          "A vulnerability that has been patched for zero days",
          "A vulnerability that only exists for one day",
          "A vulnerability found during a scheduled scan"
        ],
        "explanation": "A zero-day vulnerability is a previously unknown flaw that the software vendor is not aware of and has not yet patched. Attackers can exploit it before any fix is available. The term 'zero-day' means the vendor has had zero days to address it.",
        "correctAnswers": [
          "A vulnerability that is unknown to the vendor and has no available patch"
        ],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#application-attacks"
      },
      {
        "id": 191,
        "qid": "Q0191",
        "prompt": "What does RPO (Recovery Point Objective) measure?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "The maximum acceptable amount of data loss measured in time",
          "The time it takes to restore a system after failure",
          "The number of servers in a disaster recovery site",
          "The cost of implementing a backup solution"
        ],
        "explanation": "RPO defines the maximum acceptable age of data that can be lost during a disaster. An RPO of 4 hours means the organization can tolerate losing up to 4 hours of data, so backups must run at least every 4 hours. RTO (Recovery Time Objective) measures restoration time.",
        "correctAnswers": [
          "The maximum acceptable amount of data loss measured in time"
        ],
        "scenario": null,
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#business-continuity-disaster-recovery"
      },
      {
        "id": 192,
        "qid": "Q0192",
        "prompt": "What does RTO (Recovery Time Objective) measure?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "The maximum acceptable downtime before a system must be restored",
          "The amount of data that can be lost",
          "The time between vulnerability scans",
          "The frequency of security training"
        ],
        "explanation": "RTO defines the maximum acceptable time a system can be down after a disruption before it must be operational again. An RTO of 2 hours means the system must be restored within 2 hours of failure. RPO measures acceptable data loss.",
        "correctAnswers": [
          "The maximum acceptable downtime before a system must be restored"
        ],
        "scenario": null,
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#business-continuity-disaster-recovery"
      },
      {
        "id": 193,
        "qid": "Q0193",
        "prompt": "What is the purpose of a digital certificate?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Bind a public key to an identity, verified by a trusted Certificate Authority",
          "Store a user's private key in the cloud",
          "Encrypt all files on a hard drive",
          "Provide antivirus protection"
        ],
        "explanation": "A digital certificate (X.509) binds a public key to an identity (person, server, or organization). It is issued and signed by a Certificate Authority (CA), which vouches for the identity. Certificates enable secure communication (TLS/SSL), code signing, and email encryption.",
        "correctAnswers": [
          "Bind a public key to an identity, verified by a trusted Certificate Authority"
        ],
        "scenario": null,
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#pki-certificates"
      },
      {
        "id": 194,
        "qid": "Q0194",
        "prompt": "What does a CRL contain?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "A list of revoked digital certificates that should no longer be trusted",
          "A list of all active user accounts",
          "A list of firewall rules",
          "A list of approved software applications"
        ],
        "explanation": "A CRL (Certificate Revocation List) is published by a Certificate Authority and contains the serial numbers of digital certificates that have been revoked before their expiration date. OCSP (Online Certificate Status Protocol) provides real-time revocation checking as an alternative to CRLs.",
        "correctAnswers": [
          "A list of revoked digital certificates that should no longer be trusted"
        ],
        "scenario": null,
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#pki-certificates"
      },
      {
        "id": 195,
        "qid": "Q0195",
        "prompt": "What is the first step in the incident response process according to NIST?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Preparation",
          "Detection and Analysis",
          "Containment",
          "Eradication"
        ],
        "explanation": "The NIST Incident Response lifecycle has four phases: (1) Preparation, (2) Detection and Analysis, (3) Containment, Eradication, and Recovery, (4) Post-Incident Activity (Lessons Learned). Preparation comes first, establishing the IR plan, team, tools, and communication procedures before an incident occurs.",
        "correctAnswers": [
          "Preparation"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#incident-response"
      },
      {
        "id": 196,
        "qid": "Q0196",
        "prompt": "What is the order of volatility in digital forensics, from MOST to LEAST volatile?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "CPU registers → RAM → disk cache → hard drive → backups",
          "Hard drive → RAM → CPU registers → backups → disk cache",
          "Backups → hard drive → RAM → CPU registers → disk cache",
          "RAM → backups → hard drive → CPU registers → disk cache"
        ],
        "explanation": "The order of volatility ranks evidence sources by how quickly they change or are lost. CPU registers and cache are the most volatile (lost immediately when power is removed). RAM is next. Disk cache, then hard drive data, then removable media, and finally backups/archives are least volatile. Forensic collection should start with the most volatile evidence.",
        "correctAnswers": [
          "CPU registers → RAM → disk cache → hard drive → backups"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#digital-forensics"
      },
      {
        "id": 197,
        "qid": "Q0197",
        "prompt": "What does the acronym SOAR stand for?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Security Orchestration, Automation, and Response",
          "System Operations and Recovery",
          "Secure Online Access Restriction",
          "Software Optimization and Resource allocation"
        ],
        "explanation": "SOAR stands for Security Orchestration, Automation, and Response. SOAR platforms integrate security tools, automate repetitive tasks (like alert triage), and orchestrate incident response workflows through playbooks.",
        "correctAnswers": [
          "Security Orchestration, Automation, and Response"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#siem-soar"
      },
      {
        "id": 198,
        "qid": "Q0198",
        "prompt": "What type of attack floods a target server with traffic to make it unavailable to legitimate users?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Denial of Service (DoS)",
          "Man-in-the-middle",
          "SQL injection",
          "Phishing"
        ],
        "explanation": "A Denial of Service (DoS) attack overwhelms a target with traffic or requests to exhaust its resources, making it unavailable to legitimate users. A DDoS (Distributed DoS) uses multiple sources. MitM intercepts communication. SQL injection targets databases. Phishing targets users via email.",
        "correctAnswers": [
          "Denial of Service (DoS)"
        ],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#network-attacks"
      },
      {
        "id": 199,
        "qid": "Q0199",
        "prompt": "What is the purpose of network segmentation?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Divide a network into isolated segments to limit the scope of a breach and control traffic flow",
          "Increase network speed by removing firewalls",
          "Connect all devices to a single network for easier management",
          "Encrypt all network traffic automatically"
        ],
        "explanation": "Network segmentation divides a network into smaller, isolated segments (using VLANs, subnets, firewalls). This limits lateral movement if one segment is compromised, enables granular access control, and reduces the attack surface. It does not remove firewalls, merge devices, or automatically encrypt traffic.",
        "correctAnswers": [
          "Divide a network into isolated segments to limit the scope of a breach and control traffic flow"
        ],
        "scenario": null,
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#network-segmentation"
      },
      {
        "id": 200,
        "qid": "Q0200",
        "prompt": "Which regulation specifically protects the privacy of personal data for EU citizens?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "GDPR (General Data Protection Regulation)",
          "HIPAA (Health Insurance Portability and Accountability Act)",
          "SOX (Sarbanes-Oxley Act)",
          "PCI-DSS (Payment Card Industry Data Security Standard)"
        ],
        "explanation": "GDPR is the European Union regulation that protects the personal data and privacy of EU citizens. HIPAA protects healthcare information in the US. SOX covers financial reporting for US public companies. PCI-DSS protects payment card data globally.",
        "correctAnswers": [
          "GDPR (General Data Protection Regulation)"
        ],
        "scenario": null,
        "domainKey": "security-program-management-oversight",
        "domainName": "Security Program Management & Oversight",
        "topicId": 0,
        "studyPath": "/study#compliance-frameworks"
      },
      {
        "id": 201,
        "qid": "Q0201",
        "prompt": "What type of attack intercepts communication between two parties without their knowledge?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Man-in-the-middle (MitM) attack",
          "Brute-force attack",
          "Denial of Service attack",
          "Privilege escalation"
        ],
        "explanation": "A Man-in-the-middle (MitM) attack positions the attacker between two communicating parties, allowing them to intercept, read, and potentially modify the traffic. Brute-force attacks guess passwords. DoS attacks disrupt availability. Privilege escalation gains higher-level access.",
        "correctAnswers": [
          "Man-in-the-middle (MitM) attack"
        ],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#network-attacks"
      },
      {
        "id": 202,
        "qid": "Q0202",
        "prompt": "What does SSO stand for?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Single Sign-On",
          "Secure Socket Operations",
          "System Security Officer",
          "Standard Service Objective"
        ],
        "explanation": "SSO (Single Sign-On) allows users to authenticate once and gain access to multiple applications and systems without re-entering credentials. Common SSO protocols include SAML, OAuth, and OpenID Connect.",
        "correctAnswers": [
          "Single Sign-On"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#identity-access-management"
      },
      {
        "id": 203,
        "qid": "Q0203",
        "prompt": "What is the purpose of salting a password hash?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Add random data to each password before hashing to prevent identical passwords from producing the same hash",
          "Encrypt the password with AES",
          "Make the password longer for display purposes",
          "Store the password in plaintext alongside the hash"
        ],
        "explanation": "A salt is random data added to a password before hashing. This ensures that two users with the same password produce different hashes, defeating precomputed rainbow table attacks. Salts are stored alongside the hash (not secret) but must be unique per user. Salting is not encryption.",
        "correctAnswers": [
          "Add random data to each password before hashing to prevent identical passwords from producing the same hash"
        ],
        "scenario": null,
        "domainKey": "general-security-concepts",
        "domainName": "General Security Concepts",
        "topicId": 0,
        "studyPath": "/study#password-attacks"
      },
      {
        "id": 204,
        "qid": "Q0204",
        "prompt": "What type of password attack uses a precomputed table of hash values to quickly reverse password hashes?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Rainbow table attack",
          "Phishing attack",
          "SQL injection",
          "Cross-site scripting"
        ],
        "explanation": "A rainbow table is a precomputed lookup table of password hashes. If an attacker obtains a database of unsalted password hashes, they can quickly look up the plaintext password by matching the hash. Salting passwords defeats rainbow table attacks.",
        "correctAnswers": [
          "Rainbow table attack"
        ],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#password-attacks"
      },
      {
        "id": 205,
        "qid": "Q0205",
        "prompt": "What is the main purpose of a honeypot?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "A decoy system designed to attract and detect attackers while gathering intelligence about their methods",
          "A high-performance production server",
          "A backup server for disaster recovery",
          "A DNS server for name resolution"
        ],
        "explanation": "A honeypot is an intentionally vulnerable decoy system placed on a network to attract attackers. It serves no legitimate production purpose, any interaction with it is suspicious. Honeypots gather intelligence about attacker techniques, tools, and procedures (TTPs) while diverting them from real assets.",
        "correctAnswers": [
          "A decoy system designed to attract and detect attackers while gathering intelligence about their methods"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#threat-intelligence"
      },
      {
        "id": 206,
        "qid": "Q0206",
        "prompt": "What does XSS stand for in web security?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Cross-Site Scripting",
          "Cross-Server Security",
          "Extended Security Standard",
          "External System Scanning"
        ],
        "explanation": "XSS (Cross-Site Scripting) is a web vulnerability where attackers inject malicious scripts into web pages viewed by other users. The scripts execute in the victim's browser, potentially stealing cookies, session tokens, or performing actions on behalf of the user. Types include reflected, stored, and DOM-based XSS.",
        "correctAnswers": [
          "Cross-Site Scripting"
        ],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations",
        "domainName": "Threats, Vulnerabilities & Mitigations",
        "topicId": 0,
        "studyPath": "/study#application-attacks"
      },
      {
        "id": 207,
        "qid": "Q0207",
        "prompt": "What is the purpose of a VLAN?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Create logically separate networks on the same physical switch infrastructure",
          "Encrypt all network traffic",
          "Provide wireless access to guests",
          "Monitor bandwidth usage"
        ],
        "explanation": "A VLAN (Virtual Local Area Network) creates logically separate broadcast domains on the same physical network infrastructure. Devices on different VLANs cannot communicate without a router or Layer 3 switch, providing segmentation and isolation without requiring separate physical hardware.",
        "correctAnswers": [
          "Create logically separate networks on the same physical switch infrastructure"
        ],
        "scenario": null,
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#network-segmentation"
      },
      {
        "id": 208,
        "qid": "Q0208",
        "prompt": "What does EDR stand for?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "Endpoint Detection and Response",
          "External Data Recovery",
          "Encrypted Domain Routing",
          "Enterprise Disaster Readiness"
        ],
        "explanation": "EDR (Endpoint Detection and Response) provides continuous monitoring and response capabilities for endpoints (workstations, laptops, servers). EDR tools detect suspicious behavior, collect telemetry, and enable investigation and automated response to threats that bypass traditional antivirus.",
        "correctAnswers": [
          "Endpoint Detection and Response"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#endpoint-security"
      },
      {
        "id": 209,
        "qid": "Q0209",
        "prompt": "What are the four phases of the NIST Incident Response lifecycle?",
        "type": "multiple-choice-single",
        "difficulty": "medium",
        "options": [
          "Preparation; Detection & Analysis; Containment, Eradication & Recovery; Post-Incident Activity",
          "Planning; Implementation; Testing; Deployment",
          "Identify; Protect; Detect; Respond",
          "Assessment; Remediation; Validation; Reporting"
        ],
        "explanation": "The NIST SP 800-61 Incident Response lifecycle has four phases: (1) Preparation, (2) Detection and Analysis, (3) Containment, Eradication, and Recovery, (4) Post-Incident Activity (Lessons Learned). The third option lists the NIST CSF functions, not the IR phases.",
        "correctAnswers": [
          "Preparation; Detection & Analysis; Containment, Eradication & Recovery; Post-Incident Activity"
        ],
        "scenario": null,
        "domainKey": "security-operations",
        "domainName": "Security Operations",
        "topicId": 0,
        "studyPath": "/study#incident-response"
      },
      {
        "id": 210,
        "qid": "Q0210",
        "prompt": "Which port does SMTP (Simple Mail Transfer Protocol) use by default?",
        "type": "multiple-choice-single",
        "difficulty": "easy",
        "options": [
          "25",
          "110",
          "143",
          "993"
        ],
        "explanation": "SMTP uses port 25 for email transmission between mail servers. Port 587 is used for SMTP submission (client to server with authentication). Port 110 is POP3. Port 143 is IMAP. Port 993 is IMAPS (IMAP over TLS).",
        "correctAnswers": [
          "25"
        ],
        "scenario": null,
        "domainKey": "security-architecture",
        "domainName": "Security Architecture",
        "topicId": 0,
        "studyPath": "/study#secure-protocols"
      },
      {
        "id": 211, "qid": "Q0211",
        "prompt": "A company requires that two administrators must independently authorize any changes to the firewall ruleset before they take effect. Which security principle does this BEST represent?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Separation of duties","Least privilege","Defense in depth","Job rotation"],
        "explanation": "Separation of duties (also called dual control) requires more than one person to complete a critical task, preventing a single individual from making unauthorized changes. Least privilege limits access. Defense in depth uses layered controls. Job rotation periodically reassigns roles.",
        "correctAnswers": ["Separation of duties"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#security-controls"
      },
      {
        "id": 212, "qid": "Q0212",
        "prompt": "Which of the following BEST describes the concept of defense in depth?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Using multiple layers of security controls so that if one fails, others still protect the asset","Installing the strongest possible firewall","Encrypting all data at rest","Using a single comprehensive security appliance"],
        "explanation": "Defense in depth is a strategy that employs multiple, overlapping security controls at different layers (network, host, application, data). If one control fails, others still provide protection. It is not about a single strong control.",
        "correctAnswers": ["Using multiple layers of security controls so that if one fails, others still protect the asset"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#security-controls"
      },
      {
        "id": 213, "qid": "Q0213",
        "prompt": "An organization implements biometric scanners at building entrances, requires smart card badge-in at server room doors, and uses PIN-based locks on equipment cabinets. Which type of security control is being applied at all three points?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Physical control","Technical control","Administrative control","Compensating control"],
        "explanation": "All three, biometric scanners, smart card readers, and PIN locks, are physical controls that restrict physical access to facilities and equipment. Technical controls are software/hardware-based (firewalls, encryption). Administrative controls are policies and procedures.",
        "correctAnswers": ["Physical control"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#physical-security"
      },
      {
        "id": 214, "qid": "Q0214",
        "prompt": "Which of the following is an example of a detective control?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Security camera monitoring","Door lock","Firewall ACL","Security awareness training"],
        "explanation": "A detective control identifies and records security events after they occur. Security cameras detect and record incidents. Door locks are preventive (stop unauthorized entry). Firewall ACLs are preventive. Security training is a preventive administrative control.",
        "correctAnswers": ["Security camera monitoring"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#security-controls"
      },
      {
        "id": 215, "qid": "Q0215",
        "prompt": "What is the PRIMARY purpose of a mantrap (access control vestibule)?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Prevent tailgating by allowing only one person to pass through at a time","Detect fire hazards in the building","Monitor network traffic at the entrance","Provide emergency exit during evacuations"],
        "explanation": "A mantrap (access control vestibule) is a small room with two interlocking doors, the second door will not open until the first door closes. This prevents tailgating/piggybacking, ensuring each person must individually authenticate before entering.",
        "correctAnswers": ["Prevent tailgating by allowing only one person to pass through at a time"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#physical-security"
      },
      {
        "id": 216, "qid": "Q0216",
        "prompt": "Which cryptographic key exchange protocol allows two parties to establish a shared secret over an insecure channel without prior shared keys?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Diffie-Hellman","AES","SHA-256","RC4"],
        "explanation": "Diffie-Hellman (DH) is a key exchange protocol that enables two parties to agree on a shared secret over an insecure channel. AES is a symmetric cipher. SHA-256 is a hash function. RC4 is a deprecated stream cipher.",
        "correctAnswers": ["Diffie-Hellman"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#cryptography"
      },
      {
        "id": 217, "qid": "Q0217",
        "prompt": "A security analyst needs to verify that a downloaded ISO file has not been tampered with. Which of the following should the analyst use?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Compare the SHA-256 hash of the downloaded file against the published hash","Encrypt the file with AES-256","Sign the file with a digital certificate","Compress the file and check the size"],
        "explanation": "Comparing a cryptographic hash (like SHA-256) of the downloaded file with the hash published by the vendor verifies file integrity. If the hashes match, the file has not been altered. Encryption protects confidentiality, not integrity verification of downloads.",
        "correctAnswers": ["Compare the SHA-256 hash of the downloaded file against the published hash"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#cryptography"
      },
      {
        "id": 218, "qid": "Q0218",
        "prompt": "Which of the following describes ephemeral keys?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Temporary keys generated for a single session and discarded afterward","Permanent keys stored in a hardware security module","Keys shared between all users in an organization","Backup copies of the master encryption key"],
        "explanation": "Ephemeral keys are temporary cryptographic keys generated for one session or transaction and then discarded. They enable perfect forward secrecy (PFS), even if a long-term key is later compromised, past session traffic cannot be decrypted because the ephemeral keys no longer exist.",
        "correctAnswers": ["Temporary keys generated for a single session and discarded afterward"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#cryptography"
      },
      {
        "id": 219, "qid": "Q0219",
        "prompt": "What does perfect forward secrecy (PFS) ensure?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Compromise of a long-term private key does not compromise past session keys","All future communications are automatically encrypted","Data is encrypted with the strongest available algorithm","Keys are rotated every 24 hours"],
        "explanation": "PFS ensures that if a server's long-term private key is compromised, previously recorded encrypted sessions cannot be decrypted. This is achieved by using ephemeral Diffie-Hellman (DHE or ECDHE) key exchange, which generates unique session keys that are not derived from the long-term key.",
        "correctAnswers": ["Compromise of a long-term private key does not compromise past session keys"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#cryptography"
      },
      {
        "id": 220, "qid": "Q0220",
        "prompt": "A company stores its root CA offline and uses intermediate CAs for day-to-day certificate issuance. What is the PRIMARY reason for keeping the root CA offline?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["To protect the root CA private key from compromise, since all trust chains depend on it","To improve certificate issuance speed","To reduce storage costs","To allow multiple administrators to share the root key"],
        "explanation": "The root CA is the trust anchor of the entire PKI. If its private key is compromised, every certificate in the hierarchy becomes untrustworthy. Keeping it offline (air-gapped) protects it from network-based attacks. Intermediate CAs handle daily operations, and if compromised, only their certificates are affected and can be revoked.",
        "correctAnswers": ["To protect the root CA private key from compromise, since all trust chains depend on it"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#pki-certificates"
      },
      {
        "id": 221, "qid": "Q0221",
        "prompt": "Which certificate type is used to secure an entire domain AND all its subdomains with a single certificate?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Wildcard certificate","Self-signed certificate","Extended Validation (EV) certificate","Code signing certificate"],
        "explanation": "A wildcard certificate (e.g., *.example.com) secures the domain and all first-level subdomains. Self-signed certificates are not trusted by public browsers. EV certificates provide the highest validation level but are issued per-domain. Code signing certificates sign software, not websites.",
        "correctAnswers": ["Wildcard certificate"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#pki-certificates"
      },
      {
        "id": 222, "qid": "Q0222",
        "prompt": "Which protocol provides real-time certificate revocation checking as an alternative to downloading a full CRL?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["OCSP (Online Certificate Status Protocol)","LDAP","SNMP","SCEP"],
        "explanation": "OCSP allows a client to query a responder for the revocation status of a specific certificate in real-time, rather than downloading an entire CRL. OCSP stapling further improves performance by having the server attach the OCSP response to the TLS handshake.",
        "correctAnswers": ["OCSP (Online Certificate Status Protocol)"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#pki-certificates"
      },
      {
        "id": 223, "qid": "Q0223",
        "prompt": "A company wants to ensure that only authorized wireless clients can connect to its corporate Wi-Fi. Which authentication protocol should be implemented?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["802.1X with EAP-TLS using client certificates","WEP with a shared key","MAC address filtering only","Hidden SSID"],
        "explanation": "802.1X with EAP-TLS provides certificate-based mutual authentication, ensuring only devices with valid certificates can connect. WEP is deprecated and easily cracked. MAC filtering is easily spoofed. Hidden SSIDs provide no real security, the SSID is still transmitted in probe requests.",
        "correctAnswers": ["802.1X with EAP-TLS using client certificates"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#wireless-security"
      },
      {
        "id": 224, "qid": "Q0224",
        "prompt": "Which wireless encryption standard should be used on enterprise networks for the STRONGEST security?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["WPA3-Enterprise","WPA2-Personal","WEP","WPA-TKIP"],
        "explanation": "WPA3-Enterprise provides the strongest wireless security with 192-bit encryption (CNSA suite), SAE key exchange resistant to offline dictionary attacks, and mandatory 802.1X authentication. WPA2-Personal uses a pre-shared key. WEP and WPA-TKIP are deprecated.",
        "correctAnswers": ["WPA3-Enterprise"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#wireless-security"
      },
      {
        "id": 225, "qid": "Q0225",
        "prompt": "Which wireless attack involves an attacker setting up a rogue access point that mimics a legitimate network to intercept user traffic?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Evil twin attack","Bluesnarfing","Jamming","IV attack"],
        "explanation": "An evil twin attack creates a rogue AP with the same SSID as a legitimate network. Unsuspecting users connect to the attacker's AP, allowing traffic interception. Bluesnarfing targets Bluetooth. Jamming disrupts signals. IV attacks target weak WEP initialization vectors.",
        "correctAnswers": ["Evil twin attack"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#wireless-security"
      },
      {
        "id": 226, "qid": "Q0226",
        "prompt": "In a zero trust architecture, which statement BEST describes the security model?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Never trust, always verify, every access request is authenticated and authorized regardless of network location","Trust all internal users but verify external users","Trust users after initial authentication for the duration of their session","Trust devices that are connected to the corporate LAN"],
        "explanation": "Zero trust operates on the principle of 'never trust, always verify.' Every access request is authenticated, authorized, and continuously validated regardless of whether the user is inside or outside the network perimeter. No implicit trust is granted based on network location.",
        "correctAnswers": ["Never trust, always verify, every access request is authenticated and authorized regardless of network location"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#zero-trust"
      },
      {
        "id": 227, "qid": "Q0227",
        "prompt": "Which component of a zero trust architecture makes real-time access decisions based on identity, device health, and context?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Policy engine / policy decision point (PDP)","DNS server","Load balancer","DHCP server"],
        "explanation": "The policy engine (or policy decision point) is the brain of a zero trust architecture. It evaluates access requests against policies considering identity, device posture, location, time, risk level, and other contextual factors to grant or deny access in real-time.",
        "correctAnswers": ["Policy engine / policy decision point (PDP)"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#zero-trust"
      },
      {
        "id": 228, "qid": "Q0228",
        "prompt": "A security administrator configures a system so that users are denied access by default and must be explicitly granted permissions. Which access control model does this follow?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Implicit deny (deny-all, permit-by-exception)","Allow-all","Open access","Discretionary access"],
        "explanation": "Implicit deny (also called deny-all, permit-by-exception or default-deny) blocks all access unless explicitly allowed. This is a fundamental security principle used in firewalls, ACLs, and zero trust architectures. It is the most secure default posture.",
        "correctAnswers": ["Implicit deny (deny-all, permit-by-exception)"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#security-controls"
      },
      {
        "id": 229, "qid": "Q0229",
        "prompt": "Which of the following BEST describes key escrow?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["A trusted third party holds a copy of encryption keys so they can be recovered if needed","Keys are automatically destroyed after one use","Keys are shared publicly on a blockchain","Keys are stored only in RAM and never written to disk"],
        "explanation": "Key escrow involves a trusted third party holding a copy of cryptographic keys. This enables key recovery in cases like employee departure, lost keys, or legal/regulatory requirements (e.g., court orders). The risk is that the escrow agent becomes a high-value target.",
        "correctAnswers": ["A trusted third party holds a copy of encryption keys so they can be recovered if needed"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#cryptography"
      },
      {
        "id": 230, "qid": "Q0230",
        "prompt": "An organization uses RADIUS for centralized authentication of VPN users. Which AAA protocol is RADIUS?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Authentication, Authorization, and Accounting protocol that uses UDP","A routing protocol for network traffic","An encryption algorithm for VPN tunnels","A certificate management protocol"],
        "explanation": "RADIUS (Remote Authentication Dial-In User Service) is an AAA protocol that centralizes authentication, authorization, and accounting for network access. It uses UDP ports 1812/1813 (or legacy 1645/1646). TACACS+ is a similar AAA protocol that uses TCP port 49.",
        "correctAnswers": ["Authentication, Authorization, and Accounting protocol that uses UDP"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#authentication"
      },
      {
        "id": 231, "qid": "Q0231",
        "prompt": "What is the PRIMARY advantage of TACACS+ over RADIUS?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["TACACS+ separates authentication, authorization, and accounting into independent processes and encrypts the entire packet","TACACS+ is faster because it uses UDP","TACACS+ does not require a server","TACACS+ only supports wireless authentication"],
        "explanation": "TACACS+ separates AAA functions, allowing granular control (e.g., different authorization policies per command). It encrypts the entire packet payload (RADIUS only encrypts the password). TACACS+ uses TCP 49 for reliability. RADIUS uses UDP and only encrypts the password field.",
        "correctAnswers": ["TACACS+ separates authentication, authorization, and accounting into independent processes and encrypts the entire packet"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#authentication"
      },
      {
        "id": 232, "qid": "Q0232",
        "prompt": "A user logs into a corporate portal and can then access email, file storage, and the HR system without logging in again. Which technology enables this?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Single Sign-On (SSO)","Multi-Factor Authentication","Certificate pinning","Network Access Control"],
        "explanation": "SSO allows a user to authenticate once and access multiple applications without re-entering credentials. Federated identity protocols like SAML, OAuth 2.0, and OpenID Connect enable SSO across different systems and organizations.",
        "correctAnswers": ["Single Sign-On (SSO)"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#authentication"
      },
      {
        "id": 233, "qid": "Q0233",
        "prompt": "Which federation protocol uses XML-based assertions and is commonly used for enterprise SSO between an Identity Provider and a Service Provider?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["SAML (Security Assertion Markup Language)","OAuth 2.0","RADIUS","Kerberos"],
        "explanation": "SAML uses XML-based security assertions exchanged between an Identity Provider (IdP) and Service Provider (SP) to enable web-based SSO. OAuth 2.0 is an authorization framework (not authentication). RADIUS is an AAA protocol. Kerberos uses ticket-based authentication within a single domain.",
        "correctAnswers": ["SAML (Security Assertion Markup Language)"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#authentication"
      },
      {
        "id": 234, "qid": "Q0234",
        "prompt": "Which of the following is a corrective security control?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Restoring systems from backup after a ransomware attack","Installing a firewall","Conducting a security audit","Implementing an acceptable use policy"],
        "explanation": "A corrective control remediates or restores systems after a security incident. Restoring from backup is corrective, it fixes damage from ransomware. Firewalls are preventive. Audits are detective. Policies are administrative/preventive.",
        "correctAnswers": ["Restoring systems from backup after a ransomware attack"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#security-controls"
      },
      {
        "id": 235, "qid": "Q0235",
        "prompt": "A company cannot implement its preferred two-factor authentication solution due to budget constraints. Instead, it implements a longer password policy with account lockout. What type of control is the longer password policy?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Compensating control","Preventive control","Detective control","Deterrent control"],
        "explanation": "A compensating control is an alternative control used when the preferred control cannot be implemented. The longer password + lockout policy compensates for the absence of 2FA. While it is also a preventive control by nature, the key characteristic here is that it substitutes for the primary control.",
        "correctAnswers": ["Compensating control"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#security-controls"
      },
      {
        "id": 236, "qid": "Q0236",
        "prompt": "Which of the following uses blockchain technology to provide a decentralized approach to identity management?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Decentralized identity / self-sovereign identity","LDAP directory services","Active Directory Federation Services","RADIUS authentication"],
        "explanation": "Decentralized identity (self-sovereign identity) uses blockchain/distributed ledger technology to give individuals control over their own identity credentials without relying on a central authority. Users store verifiable credentials in digital wallets.",
        "correctAnswers": ["Decentralized identity / self-sovereign identity"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#authentication"
      },
      {
        "id": 237, "qid": "Q0237",
        "prompt": "What is the purpose of a Faraday cage in physical security?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Block electromagnetic signals to prevent wireless eavesdropping and data exfiltration","Provide fire suppression in server rooms","Generate backup electrical power","Cool equipment in data centers"],
        "explanation": "A Faraday cage is a metallic enclosure that blocks electromagnetic fields. It prevents wireless signals from entering or leaving, protecting against eavesdropping, TEMPEST attacks (electromagnetic emanation surveillance), and RF-based side-channel attacks.",
        "correctAnswers": ["Block electromagnetic signals to prevent wireless eavesdropping and data exfiltration"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#physical-security"
      },
      {
        "id": 238, "qid": "Q0238",
        "prompt": "Which of the following is TRUE about steganography?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["It hides data within other data (such as images or audio) so the existence of the hidden message is concealed","It encrypts data using symmetric algorithms","It is the same as hashing","It converts plaintext to ciphertext using a public key"],
        "explanation": "Steganography hides the existence of a message by embedding it within another medium (image, audio, video, text). Unlike encryption which makes data unreadable, steganography conceals that any secret communication is occurring at all.",
        "correctAnswers": ["It hides data within other data (such as images or audio) so the existence of the hidden message is concealed"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#cryptography"
      },
      {
        "id": 239, "qid": "Q0239",
        "prompt": "An organization is implementing a passwordless authentication strategy. Which technology would BEST support this initiative?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["FIDO2/WebAuthn with hardware security keys","LDAP with complex password policies","RADIUS with CHAP","Kerberos with password hashing"],
        "explanation": "FIDO2/WebAuthn enables passwordless authentication using public-key cryptography. Users authenticate with biometrics or hardware security keys (e.g., YubiKey). The private key never leaves the device, eliminating password-based attacks like phishing, credential stuffing, and brute force.",
        "correctAnswers": ["FIDO2/WebAuthn with hardware security keys"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#authentication"
      },
      {
        "id": 240, "qid": "Q0240",
        "prompt": "Which hashing algorithm is considered DEPRECATED and should NOT be used for security purposes?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["MD5","SHA-256","SHA-3","bcrypt"],
        "explanation": "MD5 produces a 128-bit hash and has known collision vulnerabilities, making it unsuitable for security purposes (digital signatures, certificate validation, password hashing). SHA-256, SHA-3, and bcrypt are all considered secure for their respective use cases.",
        "correctAnswers": ["MD5"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#cryptography"
      },
      {
        "id": 241, "qid": "Q0241",
        "prompt": "Performance-based: A new branch office needs secure wireless access. Place the following steps in the CORRECT order to deploy enterprise-grade wireless security.",
        "type": "performance-based", "difficulty": "hard",
        "options": ["Install enterprise APs → configure WPA3-Enterprise with 802.1X → deploy RADIUS server with certificate-based EAP-TLS → issue client certificates via internal CA → test and validate connectivity","Install consumer-grade router → set WPA2-Personal → share the PSK with all employees → disable logging","Set up open network → add MAC filtering → hide SSID → deploy VPN for all users","Configure WEP → distribute the key via email → monitor with SNMP"],
        "explanation": "Enterprise wireless security requires: (1) proper hardware, (2) WPA3-Enterprise with 802.1X for authentication, (3) RADIUS server for centralized AAA, (4) certificate-based authentication (EAP-TLS) for mutual authentication, and (5) validation. Consumer routers, WEP, open networks, and shared PSKs are all inappropriate for enterprise environments.",
        "correctAnswers": ["Install enterprise APs → configure WPA3-Enterprise with 802.1X → deploy RADIUS server with certificate-based EAP-TLS → issue client certificates via internal CA → test and validate connectivity"],
        "scenario": "PBQ: A company is opening a new branch office with 50 employees who need secure wireless access to corporate resources. The security team must deploy wireless infrastructure that meets enterprise security standards.",
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#wireless-security"
      },
      {
        "id": 242, "qid": "Q0242",
        "prompt": "Which of the following BEST describes the function of a Certificate Signing Request (CSR)?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["A message sent to a CA containing the public key and identity information, requesting a signed certificate","A request to revoke an existing certificate","A document authorizing a user to access encrypted files","A log of all certificates issued by a CA"],
        "explanation": "A CSR is generated by the entity requesting a certificate. It contains the public key, organization details, and domain name. The CSR is submitted to a Certificate Authority, which verifies the information and issues a signed digital certificate binding the public key to the identity.",
        "correctAnswers": ["A message sent to a CA containing the public key and identity information, requesting a signed certificate"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#pki-certificates"
      },
      {
        "id": 243, "qid": "Q0243",
        "prompt": "Which of the following is an advantage of Elliptic Curve Cryptography (ECC) over RSA?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["ECC provides equivalent security with shorter key lengths, resulting in faster operations and less resource consumption","ECC is simpler to implement than RSA","ECC has been in use longer than RSA","ECC does not require a key pair"],
        "explanation": "ECC achieves the same security level as RSA with significantly shorter keys (256-bit ECC ≈ 3072-bit RSA). This means faster computations, lower power consumption, and smaller certificates, making ECC ideal for mobile devices, IoT, and TLS connections.",
        "correctAnswers": ["ECC provides equivalent security with shorter key lengths, resulting in faster operations and less resource consumption"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#cryptography"
      },
      {
        "id": 244, "qid": "Q0244",
        "prompt": "A security team is evaluating post-quantum cryptographic algorithms. Why is this effort important?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Quantum computers could break current asymmetric algorithms like RSA and ECC by efficiently solving their underlying mathematical problems","Quantum computers make symmetric encryption obsolete","Current hash functions will no longer work after quantum computing","All current TLS implementations will be immediately broken"],
        "explanation": "Quantum computers using Shor's algorithm could efficiently factor large integers (breaking RSA) and solve discrete logarithm problems (breaking ECC/DH). Symmetric algorithms like AES and hash functions are less affected, they only need doubled key lengths. NIST has standardized post-quantum algorithms like CRYSTALS-Kyber and CRYSTALS-Dilithium.",
        "correctAnswers": ["Quantum computers could break current asymmetric algorithms like RSA and ECC by efficiently solving their underlying mathematical problems"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#cryptography"
      },
      {
        "id": 245, "qid": "Q0245",
        "prompt": "Which type of security control is a warning sign that says 'Premises under 24/7 CCTV surveillance'?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Deterrent control","Detective control","Corrective control","Compensating control"],
        "explanation": "A deterrent control discourages potential attackers from attempting an action. Warning signs about surveillance deter intruders by making them aware they will be caught. The actual cameras are detective controls (they detect incidents). The sign itself is deterrent.",
        "correctAnswers": ["Deterrent control"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#security-controls"
      },
      {
        "id": 246, "qid": "Q0246",
        "prompt": "Which of the following describes the concept of data sovereignty?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Data is subject to the laws and regulations of the country where it is physically stored","Data must always be encrypted at rest","Data must be backed up to at least two locations","Data ownership transfers to the cloud provider upon upload"],
        "explanation": "Data sovereignty means that data is subject to the laws and governance structures of the country in which it is located. This affects where organizations can store data (e.g., GDPR requires EU citizen data to remain within the EU or in countries with adequate protections).",
        "correctAnswers": ["Data is subject to the laws and regulations of the country where it is physically stored"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#security-controls"
      },
      {
        "id": 247, "qid": "Q0247",
        "prompt": "An attacker captures wireless handshake packets and uses a dictionary to crack the pre-shared key offline. Which attack is this?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Offline brute-force / dictionary attack against the WPA2 4-way handshake","Evil twin attack","Deauthentication flood","ARP spoofing"],
        "explanation": "By capturing the WPA2 4-way handshake, an attacker can attempt to crack the pre-shared key offline using dictionary or brute-force attacks with tools like aircrack-ng or hashcat. WPA3-SAE mitigates this by using Simultaneous Authentication of Equals, which resists offline dictionary attacks.",
        "correctAnswers": ["Offline brute-force / dictionary attack against the WPA2 4-way handshake"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#wireless-security"
      },
      {
        "id": 248, "qid": "Q0248",
        "prompt": "Which of the following authentication methods uses a time-based code that changes every 30 seconds?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["TOTP (Time-based One-Time Password)","Static password","Biometric scan","Smart card"],
        "explanation": "TOTP generates a new one-time password every 30 seconds (typically 6 digits) based on a shared secret and the current time. Apps like Google Authenticator and Microsoft Authenticator implement TOTP. HOTP is event-based (counter) rather than time-based.",
        "correctAnswers": ["TOTP (Time-based One-Time Password)"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#authentication"
      },
      {
        "id": 249, "qid": "Q0249",
        "prompt": "A security analyst discovers that a digital signature on a document is invalid. What does this indicate?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["The document has been modified after signing, or the signing certificate is untrusted/expired","The document is encrypted and cannot be read","The document was created by an authorized user","The document needs to be compressed before verification"],
        "explanation": "A digital signature validates both integrity (document hasn't been altered) and authenticity (signed by the claimed sender). An invalid signature means either: (1) the document was modified after signing, (2) the certificate used to sign is expired/revoked/untrusted, or (3) the wrong public key is being used to verify.",
        "correctAnswers": ["The document has been modified after signing, or the signing certificate is untrusted/expired"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#cryptography"
      },
      {
        "id": 250, "qid": "Q0250",
        "prompt": "Which physical security mechanism uses bollards?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Prevent vehicle-based attacks by blocking vehicle access to a building","Lock server room doors","Detect intruders with motion sensors","Encrypt data stored on hard drives"],
        "explanation": "Bollards are sturdy, short vertical posts installed around buildings to prevent vehicles from ramming into the structure (vehicle-borne attacks). They are a physical preventive control commonly seen around government buildings, data centers, and public spaces.",
        "correctAnswers": ["Prevent vehicle-based attacks by blocking vehicle access to a building"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#physical-security"
      },
      {
        "id": 251, "qid": "Q0251",
        "prompt": "An attacker sends a crafted URL containing malicious JavaScript to a victim. When the victim clicks the link, the script executes in their browser within the context of a trusted website. Which type of XSS attack is this?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Reflected XSS","Stored XSS","DOM-based XSS","CSRF"],
        "explanation": "Reflected XSS occurs when malicious input is reflected off the web server in the immediate response (e.g., via a URL parameter). The script is not stored on the server but executes when the victim clicks a crafted link. Stored XSS persists on the server. DOM-based XSS manipulates the DOM directly.",
        "correctAnswers": ["Reflected XSS"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#application-attacks"
      },
      {
        "id": 252, "qid": "Q0252",
        "prompt": "A web application allows users to post comments. An attacker posts a comment containing malicious JavaScript that executes whenever any user views the page. Which attack is this?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Stored (persistent) XSS","Reflected XSS","SQL injection","Directory traversal"],
        "explanation": "Stored XSS (persistent XSS) occurs when malicious script is permanently stored on the target server (in a database, forum post, comment field). Every user who views the affected page has the script execute in their browser. It is more dangerous than reflected XSS because it doesn't require the victim to click a crafted link.",
        "correctAnswers": ["Stored (persistent) XSS"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#application-attacks"
      },
      {
        "id": 253, "qid": "Q0253",
        "prompt": "An attacker enters ' OR 1=1 -- into a login form's username field and gains unauthorized access. Which vulnerability is being exploited?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["SQL injection","Cross-site scripting","Buffer overflow","LDAP injection"],
        "explanation": "SQL injection occurs when user input is not properly sanitized and is inserted directly into SQL queries. The input ' OR 1=1 -- modifies the query logic to always return true, bypassing authentication. Prevention includes parameterized queries (prepared statements) and input validation.",
        "correctAnswers": ["SQL injection"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#application-attacks"
      },
      {
        "id": 254, "qid": "Q0254",
        "prompt": "Which of the following BEST prevents SQL injection attacks?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Use parameterized queries (prepared statements) with input validation","Increase the database password length","Install a stronger firewall","Encrypt the database at rest"],
        "explanation": "Parameterized queries (prepared statements) separate SQL code from user data, preventing injected input from being interpreted as SQL commands. Input validation adds another layer. Firewall rules, password length, and encryption at rest do not address the root cause of SQL injection.",
        "correctAnswers": ["Use parameterized queries (prepared statements) with input validation"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#application-attacks"
      },
      {
        "id": 255, "qid": "Q0255",
        "prompt": "An attacker sends more data than a program's memory buffer can hold, overwriting adjacent memory with malicious code. Which attack is this?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Buffer overflow","SQL injection","Cross-site scripting","Race condition"],
        "explanation": "A buffer overflow occurs when a program writes more data to a buffer than it can hold, overwriting adjacent memory. Attackers exploit this to inject and execute malicious code or crash the application. Prevention includes bounds checking, ASLR, DEP/NX bit, and using memory-safe languages.",
        "correctAnswers": ["Buffer overflow"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#application-attacks"
      },
      {
        "id": 256, "qid": "Q0256",
        "prompt": "Which type of social engineering attack targets a specific high-profile individual such as a CEO or CFO?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Whaling","Phishing","Vishing","Smishing"],
        "explanation": "Whaling is a targeted phishing attack aimed at senior executives (the 'big fish'). These attacks are highly customized and often impersonate board members, legal counsel, or business partners. Phishing is general. Vishing uses voice calls. Smishing uses SMS/text messages.",
        "correctAnswers": ["Whaling"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#social-engineering"
      },
      {
        "id": 257, "qid": "Q0257",
        "prompt": "An attacker calls the help desk pretending to be a locked-out executive and convinces the technician to reset the password. Which social engineering technique is being used?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Pretexting (impersonation)","Tailgating","Shoulder surfing","Dumpster diving"],
        "explanation": "Pretexting involves creating a fabricated scenario (pretext) to manipulate someone into providing information or taking action. Impersonating an executive to trick help desk staff is a classic pretexting attack. Tailgating is following someone through a door. Shoulder surfing is watching someone's screen.",
        "correctAnswers": ["Pretexting (impersonation)"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#social-engineering"
      },
      {
        "id": 258, "qid": "Q0258",
        "prompt": "Which social engineering attack uses SMS text messages to trick victims into clicking malicious links or providing credentials?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Smishing","Phishing","Vishing","Pharming"],
        "explanation": "Smishing (SMS phishing) uses text messages to deliver social engineering attacks. Phishing uses email. Vishing uses voice calls (phone). Pharming redirects users to malicious websites by poisoning DNS.",
        "correctAnswers": ["Smishing"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#social-engineering"
      },
      {
        "id": 259, "qid": "Q0259",
        "prompt": "An attacker leaves infected USB drives in a company parking lot, hoping employees will plug them into their work computers. Which attack technique is this?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Baiting","Tailgating","Watering hole","Credential harvesting"],
        "explanation": "Baiting exploits curiosity by leaving malware-infected physical media (USB drives, CDs) in locations where targets will find them. When plugged in, the device can execute malware, install backdoors, or exfiltrate data. Organizations mitigate this by disabling USB ports and security awareness training.",
        "correctAnswers": ["Baiting"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#social-engineering"
      },
      {
        "id": 260, "qid": "Q0260",
        "prompt": "Which type of malware hides deep in the operating system, often modifying the kernel, to maintain persistent and undetectable access?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Rootkit","Adware","Spyware","Keylogger"],
        "explanation": "A rootkit embeds itself deep in the OS (often at the kernel level) to hide its presence and maintain persistent privileged access. It can hide processes, files, and network connections from detection tools. Removal often requires reimaging the system. Adware shows ads. Spyware monitors activity. Keyloggers record keystrokes.",
        "correctAnswers": ["Rootkit"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#malware"
      },
      {
        "id": 261, "qid": "Q0261",
        "prompt": "What is a fileless malware attack?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Malware that operates entirely in memory without writing files to disk, making it difficult to detect with traditional antivirus","Malware that only targets file servers","Malware that deletes all files on the system","Malware that encrypts files for ransom"],
        "explanation": "Fileless malware resides entirely in RAM and uses legitimate system tools (PowerShell, WMI, macros) to execute. Since it doesn't write files to disk, traditional signature-based antivirus cannot detect it. Detection requires behavioral analysis, memory forensics, and EDR tools.",
        "correctAnswers": ["Malware that operates entirely in memory without writing files to disk, making it difficult to detect with traditional antivirus"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#malware"
      },
      {
        "id": 262, "qid": "Q0262",
        "prompt": "Which of the following is a characteristic of an Advanced Persistent Threat (APT)?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["A well-funded, sophisticated threat actor that maintains long-term unauthorized access to a target network","A script kiddie using publicly available tools","A one-time denial-of-service attack","A worm that spreads randomly across the internet"],
        "explanation": "An APT is a prolonged, targeted cyberattack by a sophisticated, well-resourced adversary (often nation-state sponsored). APTs use advanced techniques, maintain persistent access over months or years, and focus on espionage, intellectual property theft, or sabotage. They differ from opportunistic attacks in their persistence and targeting.",
        "correctAnswers": ["A well-funded, sophisticated threat actor that maintains long-term unauthorized access to a target network"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#threat-intelligence"
      },
      {
        "id": 263, "qid": "Q0263",
        "prompt": "Which threat intelligence framework uses a matrix of tactics, techniques, and procedures (TTPs) to describe adversary behavior?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["MITRE ATT&CK","NIST CSF","ISO 27001","COBIT"],
        "explanation": "MITRE ATT&CK is a knowledge base and framework that catalogs adversary tactics, techniques, and procedures (TTPs) based on real-world observations. It helps security teams understand attacker behavior, improve detection, and assess defensive coverage. NIST CSF is a cybersecurity framework. ISO 27001 is an ISMS standard.",
        "correctAnswers": ["MITRE ATT&CK"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#threat-intelligence"
      },
      {
        "id": 264, "qid": "Q0264",
        "prompt": "What is a watering hole attack?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Compromising a website frequently visited by the target group and infecting it with malware","Flooding a network with traffic","Sending phishing emails to all employees","Physically accessing a restricted area"],
        "explanation": "A watering hole attack targets a specific group by infecting websites they commonly visit. The attacker identifies frequently visited sites, compromises them, and plants malware. When targets visit the site, their devices are infected. It exploits trust in known websites.",
        "correctAnswers": ["Compromising a website frequently visited by the target group and infecting it with malware"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#social-engineering"
      },
      {
        "id": 265, "qid": "Q0265",
        "prompt": "A security analyst discovers that an attacker has been using a compromised service account to move laterally across the network, accessing file shares and databases. Which attack technique is this?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Lateral movement using credential abuse","Denial of service","Port scanning","DNS poisoning"],
        "explanation": "Lateral movement is a post-exploitation technique where attackers use compromised credentials to move through the network, accessing additional systems and data. Common methods include pass-the-hash, pass-the-ticket, RDP, and using legitimate admin tools. Prevention includes network segmentation, least privilege, and monitoring for anomalous authentication patterns.",
        "correctAnswers": ["Lateral movement using credential abuse"],
        "scenario": "A SIEM alert shows a service account authenticating to 47 different file servers within 10 minutes during off-hours. The account normally only accesses 3 specific servers.",
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#network-attacks"
      },
      {
        "id": 266, "qid": "Q0266",
        "prompt": "Which attack manipulates ARP tables to redirect network traffic through an attacker's machine?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["ARP spoofing / ARP poisoning","DNS poisoning","SYN flood","VLAN hopping"],
        "explanation": "ARP spoofing (ARP poisoning) sends falsified ARP messages to link the attacker's MAC address with the IP address of a legitimate host (often the default gateway). This redirects traffic through the attacker, enabling man-in-the-middle attacks. Mitigation includes Dynamic ARP Inspection (DAI) and static ARP entries.",
        "correctAnswers": ["ARP spoofing / ARP poisoning"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#network-attacks"
      },
      {
        "id": 267, "qid": "Q0267",
        "prompt": "Which type of DDoS attack exploits the TCP three-way handshake by sending a flood of SYN packets without completing the connection?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["SYN flood","HTTP flood","DNS amplification","Smurf attack"],
        "explanation": "A SYN flood sends a massive number of TCP SYN (synchronize) packets to a target without responding to the SYN-ACK replies. This fills the target's connection table with half-open connections, exhausting resources and preventing legitimate connections. SYN cookies mitigate this attack.",
        "correctAnswers": ["SYN flood"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#network-attacks"
      },
      {
        "id": 268, "qid": "Q0268",
        "prompt": "An attacker uses a compromised DNS server to redirect users from a legitimate banking website to a fake one. Which attack is this?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["DNS poisoning / DNS spoofing","ARP spoofing","SQL injection","Cross-site request forgery"],
        "explanation": "DNS poisoning (DNS spoofing) corrupts the DNS cache to redirect domain name lookups to malicious IP addresses. Users type the correct URL but are directed to a fake site controlled by the attacker. DNSSEC (DNS Security Extensions) prevents this by digitally signing DNS responses.",
        "correctAnswers": ["DNS poisoning / DNS spoofing"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#network-attacks"
      },
      {
        "id": 269, "qid": "Q0269",
        "prompt": "An attacker systematically tries every possible combination of characters to crack a password. Which attack is this?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Brute-force attack","Dictionary attack","Rainbow table attack","Credential stuffing"],
        "explanation": "A brute-force attack tries every possible combination of characters until the correct password is found. It is guaranteed to succeed given enough time but is extremely slow for long, complex passwords. Dictionary attacks use word lists. Rainbow tables use precomputed hashes. Credential stuffing uses breached credentials.",
        "correctAnswers": ["Brute-force attack"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#password-attacks"
      },
      {
        "id": 270, "qid": "Q0270",
        "prompt": "An attacker uses credentials stolen from one data breach to try logging into other unrelated services. What is this attack called?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Credential stuffing","Brute-force attack","Password spraying","Keylogging"],
        "explanation": "Credential stuffing uses username/password pairs leaked from one breach to attempt logins on other sites, exploiting password reuse. Password spraying tries one common password against many accounts. Brute force tries all combinations. Keylogging captures keystrokes.",
        "correctAnswers": ["Credential stuffing"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#password-attacks"
      },
      {
        "id": 271, "qid": "Q0271",
        "prompt": "An attacker tries a single commonly used password (like 'Password123') against a large number of user accounts. Which attack is this?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Password spraying","Brute-force attack","Dictionary attack","Credential stuffing"],
        "explanation": "Password spraying tries one or a few common passwords against many accounts, then moves to the next password. This avoids account lockout thresholds (which trigger after multiple failed attempts on one account). It exploits organizations where some users choose weak, common passwords.",
        "correctAnswers": ["Password spraying"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#password-attacks"
      },
      {
        "id": 272, "qid": "Q0272",
        "prompt": "Which of the following is a supply chain attack vector?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Compromising a software vendor's build system to inject malware into legitimate software updates","Sending phishing emails to end users","Performing a port scan on a target network","Cracking passwords with a rainbow table"],
        "explanation": "Supply chain attacks compromise a trusted vendor, supplier, or partner to distribute malware through legitimate channels. The SolarWinds attack (2020) is a prime example, attackers compromised the build system and injected malware into software updates distributed to thousands of customers.",
        "correctAnswers": ["Compromising a software vendor's build system to inject malware into legitimate software updates"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#supply-chain-attacks"
      },
      {
        "id": 273, "qid": "Q0273",
        "prompt": "A disgruntled employee scheduled a script to delete critical databases on their last day of employment. What type of malware is this?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Logic bomb","Time bomb variant of a Trojan","Ransomware","Worm"],
        "explanation": "A logic bomb is malicious code that executes when specific conditions are met (a date, event, or action, such as the employee being removed from the system). In this case, the trigger is the employee's last day. Logic bombs are a common insider threat vector.",
        "correctAnswers": ["Logic bomb"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#insider-threats"
      },
      {
        "id": 274, "qid": "Q0274",
        "prompt": "Which vulnerability scanning technique interacts with target systems by sending packets and analyzing responses?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Active scanning","Passive scanning","Log analysis","Code review"],
        "explanation": "Active scanning directly probes target systems by sending packets, attempting connections, and analyzing responses to identify vulnerabilities. Passive scanning monitors network traffic without direct interaction. Active scans are more thorough but can disrupt services.",
        "correctAnswers": ["Active scanning"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#vulnerability-scanning"
      },
      {
        "id": 275, "qid": "Q0275",
        "prompt": "What is the difference between a vulnerability scan and a penetration test?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["A vulnerability scan identifies known weaknesses; a penetration test actively exploits them to assess real-world impact","They are the same thing","A penetration test only scans for vulnerabilities","A vulnerability scan exploits weaknesses"],
        "explanation": "Vulnerability scans use automated tools to identify known vulnerabilities and misconfigurations. Penetration tests go further, skilled testers actively exploit vulnerabilities to demonstrate real-world impact and assess how far an attacker could get. Pen tests are manual, targeted, and simulate actual attacks.",
        "correctAnswers": ["A vulnerability scan identifies known weaknesses; a penetration test actively exploits them to assess real-world impact"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#vulnerability-scanning"
      },
      {
        "id": 276, "qid": "Q0276",
        "prompt": "What does CVSS measure?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["The severity of a vulnerability on a scale from 0.0 to 10.0","The number of systems affected by a vulnerability","The cost to remediate a vulnerability","The time to exploit a vulnerability"],
        "explanation": "CVSS (Common Vulnerability Scoring System) rates the severity of vulnerabilities on a 0.0-10.0 scale. It considers factors like attack vector, complexity, privileges required, user interaction, and impact on confidentiality, integrity, and availability. Scores: 0.0 (none), 0.1-3.9 (low), 4.0-6.9 (medium), 7.0-8.9 (high), 9.0-10.0 (critical).",
        "correctAnswers": ["The severity of a vulnerability on a scale from 0.0 to 10.0"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#vulnerability-scanning"
      },
      {
        "id": 277, "qid": "Q0277",
        "prompt": "Which type of cross-site request forgery (CSRF) attack tricks a user's browser into performing an unwanted action on a site where the user is authenticated?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["CSRF / session riding, the attacker crafts a request that the victim's browser sends with valid session cookies","SQL injection","Buffer overflow","Denial of service"],
        "explanation": "CSRF (also called session riding or XSRF) tricks a user's browser into making unintended requests to a site where they are authenticated. The attacker exploits the browser's automatic inclusion of cookies. Prevention includes anti-CSRF tokens, SameSite cookies, and requiring re-authentication for sensitive actions.",
        "correctAnswers": ["CSRF / session riding, the attacker crafts a request that the victim's browser sends with valid session cookies"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#application-attacks"
      },
      {
        "id": 278, "qid": "Q0278",
        "prompt": "What is privilege escalation?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Gaining higher-level permissions than originally authorized, such as moving from a standard user to administrator","Logging into a system with valid credentials","Scanning a network for open ports","Encrypting files on a server"],
        "explanation": "Privilege escalation occurs when an attacker gains elevated access rights beyond what is authorized. Vertical escalation moves from a low-privilege to high-privilege account (user → admin). Horizontal escalation accesses another user's resources at the same privilege level.",
        "correctAnswers": ["Gaining higher-level permissions than originally authorized, such as moving from a standard user to administrator"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#application-attacks"
      },
      {
        "id": 279, "qid": "Q0279",
        "prompt": "An attacker intercepts an authentication token and replays it to gain access to a system. Which attack is this?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Replay attack","Brute-force attack","SQL injection","Phishing"],
        "explanation": "A replay attack captures valid authentication data (tokens, hashes, tickets) and retransmits them to gain unauthorized access. Prevention includes timestamps, nonces (numbers used once), session tokens that expire, and mutual authentication protocols that detect replayed messages.",
        "correctAnswers": ["Replay attack"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#network-attacks"
      },
      {
        "id": 280, "qid": "Q0280",
        "prompt": "Which of the following describes an on-path attack (formerly man-in-the-middle)?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["An attacker positions themselves between two communicating parties to intercept and potentially modify traffic","An attacker floods a server with traffic","An attacker guesses passwords","An attacker installs malware via email"],
        "explanation": "An on-path (MitM) attack places the attacker between two endpoints. The attacker can passively eavesdrop or actively modify traffic. Common techniques include ARP spoofing, DNS spoofing, and SSL stripping. TLS with certificate validation prevents most on-path attacks.",
        "correctAnswers": ["An attacker positions themselves between two communicating parties to intercept and potentially modify traffic"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#network-attacks"
      },
      {
        "id": 281, "qid": "Q0281",
        "prompt": "A vulnerability scanner reports a critical finding, but upon investigation the security team determines the system is not actually vulnerable. What is this called?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["False positive","False negative","True positive","True negative"],
        "explanation": "A false positive occurs when a scanner incorrectly reports a vulnerability that does not actually exist. A false negative is when a scanner fails to detect an actual vulnerability (more dangerous). True positive = correctly identified vulnerability. True negative = correctly reported no vulnerability.",
        "correctAnswers": ["False positive"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#vulnerability-scanning"
      },
      {
        "id": 282, "qid": "Q0282",
        "prompt": "Which threat actor motivation is MOST commonly associated with hacktivists?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Political or social activism","Financial gain","Espionage","Accidental data exposure"],
        "explanation": "Hacktivists are motivated by political, social, or ideological causes. They use hacking techniques (website defacement, DDoS, data leaks) to promote their agenda or protest. Financial gain motivates cybercriminals. Espionage motivates nation-states. Accidental exposure is an unintentional insider threat.",
        "correctAnswers": ["Political or social activism"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#threat-intelligence"
      },
      {
        "id": 283, "qid": "Q0283",
        "prompt": "Which type of indicator of compromise (IoC) would a security analyst find in DNS logs showing connections to a known command-and-control server?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Malicious domain or IP address associated with C2 infrastructure","Successful user logins during business hours","Normal web browsing traffic","Scheduled system updates"],
        "explanation": "DNS queries to known malicious domains or C2 (command-and-control) infrastructure are strong IoCs indicating malware infection. The compromised host is beaconing to the attacker's server for instructions. Other IoCs include unusual outbound traffic, unexpected processes, and file hash matches to known malware.",
        "correctAnswers": ["Malicious domain or IP address associated with C2 infrastructure"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#threat-intelligence"
      },
      {
        "id": 284, "qid": "Q0284",
        "prompt": "What is a race condition vulnerability?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["A flaw where the outcome depends on the timing of events, allowing an attacker to exploit the window between a security check and the use of the checked resource","A vulnerability in encryption algorithms","A weakness in physical access controls","A flaw in network routing protocols"],
        "explanation": "A race condition (TOCTOU, Time of Check to Time of Use) occurs when a system checks a condition then acts on it, but the condition can change between the check and the action. Attackers exploit this timing window to bypass security checks, modify files, or escalate privileges.",
        "correctAnswers": ["A flaw where the outcome depends on the timing of events, allowing an attacker to exploit the window between a security check and the use of the checked resource"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#application-attacks"
      },
      {
        "id": 285, "qid": "Q0285",
        "prompt": "An attacker uses a tool like Mimikatz to extract password hashes from a Windows system's memory and uses those hashes to authenticate to other systems without knowing the plaintext password. Which attack is this?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Pass-the-hash","Brute force","Credential stuffing","Rainbow table"],
        "explanation": "Pass-the-hash (PtH) is an attack where the attacker captures NTLM password hashes from memory and uses them directly to authenticate to other systems. The attacker never needs to crack the hash to obtain the plaintext password. Mitigation includes disabling NTLM, using Credential Guard, and implementing least privilege.",
        "correctAnswers": ["Pass-the-hash"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#password-attacks"
      },
      {
        "id": 286, "qid": "Q0286",
        "prompt": "What is the PRIMARY purpose of threat hunting?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Proactively search for threats that have evaded existing security controls","React to SIEM alerts","Perform vulnerability scans","Write firewall rules"],
        "explanation": "Threat hunting is a proactive approach where analysts actively search for hidden threats in the environment that automated tools may have missed. Unlike reactive incident response (responding to alerts), threat hunting assumes the network may already be compromised and searches for evidence of undetected intrusions.",
        "correctAnswers": ["Proactively search for threats that have evaded existing security controls"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#threat-intelligence"
      },
      {
        "id": 287, "qid": "Q0287",
        "prompt": "Which of the following BEST describes an indicator of attack (IoA) compared to an indicator of compromise (IoC)?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["IoAs focus on detecting attacker behavior and intent in real-time; IoCs are evidence that a compromise has already occurred","IoAs and IoCs are the same thing","IoAs are only used for physical security","IoCs detect attacks before they happen"],
        "explanation": "IoAs detect active attacker behavior (reconnaissance, lateral movement, privilege escalation) in real-time, enabling earlier detection. IoCs (file hashes, malicious IPs, registry changes) indicate a compromise has already occurred. IoAs are proactive; IoCs are reactive.",
        "correctAnswers": ["IoAs focus on detecting attacker behavior and intent in real-time; IoCs are evidence that a compromise has already occurred"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#threat-intelligence"
      },
      {
        "id": 288, "qid": "Q0288",
        "prompt": "Which attack technique involves injecting malicious code into a running process to hide malicious activity within a legitimate application?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Process injection / DLL injection","Port scanning","Packet sniffing","Brute force"],
        "explanation": "Process injection (including DLL injection) involves inserting malicious code into the address space of a legitimate running process. This allows the attacker's code to execute under the context of the trusted process, evading detection by security tools that whitelist known processes.",
        "correctAnswers": ["Process injection / DLL injection"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#malware"
      },
      {
        "id": 289, "qid": "Q0289",
        "prompt": "Which of the following describes a directory traversal attack?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Manipulating file path inputs (e.g., using ../) to access files outside the intended directory","Scanning all directories on a network share","Encrypting directory listings","Creating new directories on a web server"],
        "explanation": "Directory traversal (path traversal) exploits insufficient input validation to access files outside the web root directory. By using sequences like ../ or ..\\, attackers can read sensitive files such as /etc/passwd or configuration files. Prevention includes input validation and chroot jails.",
        "correctAnswers": ["Manipulating file path inputs (e.g., using ../) to access files outside the intended directory"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#application-attacks"
      },
      {
        "id": 290, "qid": "Q0290",
        "prompt": "Performance-based: An organization discovers indicators of a supply chain compromise in a recently deployed software update. Place the response steps in the CORRECT order.",
        "type": "performance-based", "difficulty": "hard",
        "options": ["Isolate affected systems → block the malicious update at the proxy/firewall → collect forensic evidence → roll back to the last known-good version → notify the vendor and affected stakeholders → implement application allowlisting","Continue using the software → notify users after 90 days → change the admin password","Delete all installed software → rebuild all systems from scratch immediately → do not preserve evidence","Ignore the indicators → wait for the vendor to release a patch"],
        "explanation": "Supply chain compromise response requires: (1) isolate to prevent spread, (2) block the malicious update from reaching more systems, (3) preserve forensic evidence, (4) roll back to a clean version, (5) notify relevant parties, and (6) implement controls to prevent recurrence. Evidence preservation is critical for investigation.",
        "correctAnswers": ["Isolate affected systems → block the malicious update at the proxy/firewall → collect forensic evidence → roll back to the last known-good version → notify the vendor and affected stakeholders → implement application allowlisting"],
        "scenario": "PBQ: A network monitoring tool deployed across 200 endpoints has been found to contain a backdoor in its latest update. The vendor's build server was compromised. Several indicators of compromise have been identified on the network.",
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#supply-chain-attacks"
      },
      {
        "id": 291, "qid": "Q0291",
        "prompt": "Which cloud service model gives the customer the MOST control over the infrastructure, including the operating system, middleware, and applications?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["IaaS (Infrastructure as a Service)","PaaS (Platform as a Service)","SaaS (Software as a Service)","FaaS (Function as a Service)"],
        "explanation": "IaaS provides virtualized computing resources (VMs, storage, networking). The customer manages the OS, middleware, runtime, and applications. PaaS manages the OS and runtime. SaaS manages everything, the customer only uses the application. FaaS (serverless) manages everything except the function code.",
        "correctAnswers": ["IaaS (Infrastructure as a Service)"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#cloud-security"
      },
      {
        "id": 292, "qid": "Q0292",
        "prompt": "In the shared responsibility model for cloud security, which of the following is ALWAYS the customer's responsibility regardless of the service model?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Data classification and user access management","Physical security of the data center","Hardware maintenance","Network cabling"],
        "explanation": "In the shared responsibility model, the customer is always responsible for their data, user identities, access management, and data classification, regardless of whether they use IaaS, PaaS, or SaaS. The cloud provider handles physical infrastructure, hardware, and facility security.",
        "correctAnswers": ["Data classification and user access management"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#cloud-security"
      },
      {
        "id": 293, "qid": "Q0293",
        "prompt": "Which cloud deployment model provides dedicated infrastructure for a single organization, hosted either on-premises or by a third party?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Private cloud","Public cloud","Community cloud","Hybrid cloud"],
        "explanation": "A private cloud is dedicated to a single organization, providing greater control, security, and customization. It can be hosted on-premises or by a third-party provider. Public cloud is shared multi-tenant infrastructure. Community cloud serves organizations with shared concerns. Hybrid cloud combines two or more deployment models.",
        "correctAnswers": ["Private cloud"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#cloud-security"
      },
      {
        "id": 294, "qid": "Q0294",
        "prompt": "A company deploys a next-generation firewall (NGFW) at the network perimeter. Which capability distinguishes an NGFW from a traditional stateful firewall?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Application-layer inspection and intrusion prevention capabilities","Packet filtering based on IP addresses and ports","Stateful tracking of TCP connections","NAT translation"],
        "explanation": "NGFWs combine traditional stateful inspection with deep packet inspection (DPI), application awareness (identifying apps regardless of port), integrated IPS, SSL/TLS inspection, and threat intelligence feeds. Traditional firewalls only filter by IP, port, and protocol.",
        "correctAnswers": ["Application-layer inspection and intrusion prevention capabilities"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#firewalls-ids-ips"
      },
      {
        "id": 295, "qid": "Q0295",
        "prompt": "What is the PRIMARY difference between an IDS and an IPS?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["An IDS detects and alerts on threats; an IPS detects and actively blocks them","An IDS blocks traffic; an IPS only monitors","An IDS is hardware; an IPS is software","An IDS uses signatures; an IPS uses heuristics"],
        "explanation": "An Intrusion Detection System (IDS) monitors and alerts on suspicious activity but does not block it (passive). An Intrusion Prevention System (IPS) is inline and can actively block or drop malicious traffic (active). Both can use signature-based, anomaly-based, or heuristic detection methods.",
        "correctAnswers": ["An IDS detects and alerts on threats; an IPS detects and actively blocks them"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#firewalls-ids-ips"
      },
      {
        "id": 296, "qid": "Q0296",
        "prompt": "A security architect is designing a network where the web servers are placed in a separate network segment accessible from the internet but isolated from internal systems. What is this segment called?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["DMZ (Demilitarized Zone)","VLAN","VPN tunnel","Intranet"],
        "explanation": "A DMZ is a perimeter network segment that hosts public-facing services (web servers, email servers, DNS) while isolating them from the internal network. Traffic from the internet can reach the DMZ, but cannot directly access internal systems. This limits the blast radius if a DMZ server is compromised.",
        "correctAnswers": ["DMZ (Demilitarized Zone)"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#network-segmentation"
      },
      {
        "id": 297, "qid": "Q0297",
        "prompt": "Which network segmentation technique uses software to create isolated network segments on a single physical switch?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["VLAN (Virtual Local Area Network)","VPN","NAT","Port mirroring"],
        "explanation": "VLANs logically segment a physical network into separate broadcast domains using switch configuration. Devices on different VLANs cannot communicate without a router or Layer 3 switch. This isolates traffic, reduces broadcast domains, and improves security by containing lateral movement.",
        "correctAnswers": ["VLAN (Virtual Local Area Network)"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#network-segmentation"
      },
      {
        "id": 298, "qid": "Q0298",
        "prompt": "Which concept divides a network into very small, granular segments, often down to individual workloads, to enforce strict access policies?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Microsegmentation","VLAN segmentation","Subnetting","Air gapping"],
        "explanation": "Microsegmentation divides a network into very small zones, often at the workload or application level, and applies security policies to each segment. This limits lateral movement and is a key component of zero trust architectures. Unlike VLANs which segment at the network layer, microsegmentation operates at the workload level using software-defined policies.",
        "correctAnswers": ["Microsegmentation"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#network-segmentation"
      },
      {
        "id": 299, "qid": "Q0299",
        "prompt": "Which secure coding practice involves checking all user-supplied input against a set of allowed values before processing it?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Input validation / allowlisting","Encryption at rest","Load balancing","Network segmentation"],
        "explanation": "Input validation verifies that user-supplied data matches expected format, type, length, and range before the application processes it. Allowlisting (whitelist validation) only accepts known-good input, which is more secure than blocklisting (denying known-bad input). This prevents injection attacks, buffer overflows, and other input-based vulnerabilities.",
        "correctAnswers": ["Input validation / allowlisting"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#secure-coding"
      },
      {
        "id": 300, "qid": "Q0300",
        "prompt": "Which SDLC practice involves automatically testing code for security vulnerabilities during the build process?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["SAST (Static Application Security Testing) integrated into CI/CD pipelines","Manual code review after deployment","Penetration testing in production","User acceptance testing"],
        "explanation": "SAST analyzes source code for security vulnerabilities without executing it, and is integrated into CI/CD pipelines for continuous automated security testing. DAST tests running applications. Both should be used. Manual review and pen testing complement automated testing but are not continuous.",
        "correctAnswers": ["SAST (Static Application Security Testing) integrated into CI/CD pipelines"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#secure-coding"
      },
      {
        "id": 301, "qid": "Q0301",
        "prompt": "Which protocol replaced SSL and is the current standard for encrypting web traffic?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["TLS (Transport Layer Security)","SSH","IPsec","S/MIME"],
        "explanation": "TLS replaced SSL (which is deprecated due to vulnerabilities) as the standard protocol for encrypting communications between web browsers and servers. TLS 1.3 is the current version, offering improved security and performance over TLS 1.2. All SSL versions and TLS 1.0/1.1 are deprecated.",
        "correctAnswers": ["TLS (Transport Layer Security)"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#secure-protocols"
      },
      {
        "id": 302, "qid": "Q0302",
        "prompt": "Which protocol secures email transmission between mail servers by encrypting the SMTP connection?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["STARTTLS","POP3","IMAP","FTP"],
        "explanation": "STARTTLS is an extension that upgrades an existing plaintext SMTP connection to an encrypted TLS connection. It secures email in transit between mail servers. Implicit TLS (SMTPS on port 465) is an alternative that starts encrypted immediately. POP3 and IMAP are mailbox access protocols, not mail transfer.",
        "correctAnswers": ["STARTTLS"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#secure-protocols"
      },
      {
        "id": 303, "qid": "Q0303",
        "prompt": "Which protocol provides secure remote command-line access and has replaced Telnet?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["SSH (Secure Shell)","FTP","HTTP","SNMP"],
        "explanation": "SSH (port 22) provides encrypted remote access, replacing Telnet (port 23) which transmits everything including passwords in plaintext. SSH supports secure file transfer (SCP, SFTP), port forwarding, and key-based authentication. It uses public-key cryptography for authentication and symmetric encryption for the session.",
        "correctAnswers": ["SSH (Secure Shell)"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#secure-protocols"
      },
      {
        "id": 304, "qid": "Q0304",
        "prompt": "Which of the following is a benefit of infrastructure as code (IaC) from a security perspective?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Consistent, repeatable, and auditable infrastructure deployments that reduce configuration drift","Faster internet connectivity","Lower hardware costs","Easier physical server management"],
        "explanation": "Infrastructure as Code (IaC) defines infrastructure in version-controlled templates (Terraform, CloudFormation, Ansible). Security benefits include: consistent configurations across environments, version-controlled changes with audit trails, automated security scanning of templates, and rapid recovery by redeploying known-good configurations.",
        "correctAnswers": ["Consistent, repeatable, and auditable infrastructure deployments that reduce configuration drift"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#virtualization"
      },
      {
        "id": 305, "qid": "Q0305",
        "prompt": "What is the security benefit of containerization compared to traditional virtual machines?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Containers share the host OS kernel with a smaller attack surface and faster startup, enabling immutable deployments","Containers provide stronger isolation than VMs","Containers do not need any security configuration","Containers eliminate all malware risks"],
        "explanation": "Containers are lightweight, share the host OS kernel, and enable immutable infrastructure (deploy new containers rather than patching in place). However, containers share the kernel, so kernel vulnerabilities affect all containers. VMs provide stronger isolation through separate OS instances. Container security requires image scanning, least privilege, and runtime protection.",
        "correctAnswers": ["Containers share the host OS kernel with a smaller attack surface and faster startup, enabling immutable deployments"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#virtualization"
      },
      {
        "id": 306, "qid": "Q0306",
        "prompt": "Which VPN protocol operates at Layer 3 and provides both encryption and authentication for IP traffic?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["IPsec","SSL/TLS VPN","PPTP","L2TP alone"],
        "explanation": "IPsec operates at the network layer (Layer 3) and provides encryption (ESP, Encapsulating Security Payload), authentication (AH, Authentication Header), and key management (IKE). It can operate in tunnel mode (encrypts entire IP packet) or transport mode (encrypts payload only). L2TP alone provides no encryption and is typically paired with IPsec.",
        "correctAnswers": ["IPsec"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#vpn"
      },
      {
        "id": 307, "qid": "Q0307",
        "prompt": "Which type of VPN allows remote users to connect to a corporate network from any location using a client application?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Remote access VPN","Site-to-site VPN","MPLS VPN","Split tunnel VPN"],
        "explanation": "A remote access VPN allows individual users to securely connect to the corporate network from remote locations using VPN client software. Site-to-site VPNs connect entire networks (e.g., branch offices). Split tunneling is a configuration option that routes only corporate traffic through the VPN.",
        "correctAnswers": ["Remote access VPN"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#vpn"
      },
      {
        "id": 308, "qid": "Q0308",
        "prompt": "A web application firewall (WAF) operates at which layer of the OSI model?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Layer 7 (Application)","Layer 3 (Network)","Layer 4 (Transport)","Layer 2 (Data Link)"],
        "explanation": "A WAF operates at Layer 7 (Application layer) to inspect HTTP/HTTPS traffic and protect web applications from attacks like SQL injection, XSS, and CSRF. Traditional firewalls operate at Layers 3-4. A WAF understands web application logic and can enforce rules specific to HTTP methods, URLs, and content.",
        "correctAnswers": ["Layer 7 (Application)"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#firewalls-ids-ips"
      },
      {
        "id": 309, "qid": "Q0309",
        "prompt": "Which security solution acts as an intermediary between users and cloud services to enforce security policies, visibility, and compliance?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["CASB (Cloud Access Security Broker)","WAF","SIEM","EDR"],
        "explanation": "A CASB sits between users and cloud service providers to enforce security policies (DLP, access control, threat protection, compliance) for cloud application usage. CASBs provide visibility into shadow IT, enforce encryption, and detect anomalous behavior in cloud services like Office 365, Salesforce, and AWS.",
        "correctAnswers": ["CASB (Cloud Access Security Broker)"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#cloud-security"
      },
      {
        "id": 310, "qid": "Q0310",
        "prompt": "Which technology combines SD-WAN, secure web gateway, CASB, firewall as a service, and zero trust network access into a single cloud-delivered service?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["SASE (Secure Access Service Edge)","SIEM","SOAR","NAC"],
        "explanation": "SASE (pronounced 'sassy') converges networking (SD-WAN) and security (SWG, CASB, FWaaS, ZTNA) into a unified cloud-delivered service. It provides secure access for users regardless of location, eliminating the need to backhaul traffic through a central data center. SASE is aligned with zero trust principles.",
        "correctAnswers": ["SASE (Secure Access Service Edge)"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#cloud-security"
      },
      {
        "id": 311, "qid": "Q0311",
        "prompt": "Which secure protocol should be used instead of FTP to transfer files securely?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["SFTP (SSH File Transfer Protocol)","Telnet","HTTP","SNMP v1"],
        "explanation": "SFTP uses SSH (port 22) to provide encrypted file transfer, replacing FTP which transmits credentials and data in plaintext. FTPS (FTP over TLS) is another secure alternative. Both encrypt data in transit. Telnet, HTTP, and SNMP v1 are all insecure protocols that transmit data in plaintext.",
        "correctAnswers": ["SFTP (SSH File Transfer Protocol)"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#secure-protocols"
      },
      {
        "id": 312, "qid": "Q0312",
        "prompt": "Which type of firewall tracks the state of active connections and makes filtering decisions based on the context of traffic?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Stateful inspection firewall","Packet-filtering firewall","Proxy firewall","Circuit-level gateway"],
        "explanation": "A stateful inspection firewall maintains a state table that tracks active connections (source/destination IP, ports, sequence numbers, connection phase). It allows return traffic for established connections and blocks unsolicited inbound traffic. Packet-filtering firewalls examine each packet independently without connection context.",
        "correctAnswers": ["Stateful inspection firewall"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#firewalls-ids-ips"
      },
      {
        "id": 313, "qid": "Q0313",
        "prompt": "An organization wants to prevent VM escape attacks in its virtualization environment. Which of the following is the BEST mitigation?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Keep the hypervisor patched and updated, and limit the attack surface by disabling unnecessary services","Install antivirus on each VM only","Use the same admin password for all VMs","Allow all inter-VM communication"],
        "explanation": "VM escape occurs when an attacker breaks out of a VM and accesses the hypervisor or other VMs. Mitigation includes keeping the hypervisor patched, minimizing the hypervisor attack surface, using hardware-assisted virtualization, network segmentation between VMs, and monitoring hypervisor logs for anomalies.",
        "correctAnswers": ["Keep the hypervisor patched and updated, and limit the attack surface by disabling unnecessary services"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#virtualization"
      },
      {
        "id": 314, "qid": "Q0314",
        "prompt": "Which DNS security feature digitally signs DNS records to prevent DNS spoofing and cache poisoning?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["DNSSEC (DNS Security Extensions)","DNS over HTTPS (DoH)","DNS over TLS (DoT)","Dynamic DNS"],
        "explanation": "DNSSEC adds digital signatures to DNS records, allowing resolvers to verify that responses are authentic and have not been tampered with. It prevents DNS spoofing and cache poisoning. DoH and DoT encrypt DNS queries for privacy but do not authenticate DNS data the way DNSSEC does.",
        "correctAnswers": ["DNSSEC (DNS Security Extensions)"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#secure-protocols"
      },
      {
        "id": 315, "qid": "Q0315",
        "prompt": "Which SNMPv3 feature addresses the security weaknesses of SNMPv1 and v2c?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Authentication, encryption, and access control for network management traffic","Faster polling of network devices","Support for more OIDs","Backward compatibility with SNMPv1"],
        "explanation": "SNMPv3 adds authentication (verifies message sender), encryption (protects message confidentiality), and access control (restricts who can perform which operations). SNMPv1/v2c use community strings sent in plaintext, providing no real security. SNMPv3 should always be used in production environments.",
        "correctAnswers": ["Authentication, encryption, and access control for network management traffic"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#secure-protocols"
      },
      {
        "id": 316, "qid": "Q0316",
        "prompt": "Performance-based: A security architect must design a secure network for a company with public web servers, internal systems, and a database tier. Place the network zones in the CORRECT security architecture.",
        "type": "performance-based", "difficulty": "hard",
        "options": ["Internet → External firewall → DMZ (web servers) → Internal firewall → LAN (workstations) → Database VLAN (most restricted, no direct internet access)","Internet → Database → Web servers → Workstations → Firewall","Put all systems on a single flat network with one firewall","Internet → Workstations → Web servers → Database"],
        "explanation": "Proper security architecture uses defense in depth with multiple zones: (1) Internet-facing DMZ for public services, (2) internal LAN for workstations, (3) restricted database tier with no direct internet access. Dual firewalls (external and internal) control traffic between zones. A flat network offers no segmentation or lateral movement protection.",
        "correctAnswers": ["Internet → External firewall → DMZ (web servers) → Internal firewall → LAN (workstations) → Database VLAN (most restricted, no direct internet access)"],
        "scenario": "PBQ: A company needs to host customer-facing web applications while protecting its internal employee systems and sensitive database servers. The architect must implement proper network segmentation with appropriate security zones.",
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#network-segmentation"
      },
      {
        "id": 317, "qid": "Q0317",
        "prompt": "Which load balancing technique distributes traffic based on the current number of active connections to each server?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Least connections","Round robin","IP hash","Random"],
        "explanation": "Least connections sends new requests to the server with the fewest active connections, ensuring even workload distribution when requests have varying processing times. Round robin distributes sequentially. IP hash maps clients to specific servers based on IP. Load balancers also provide high availability and can offload SSL/TLS.",
        "correctAnswers": ["Least connections"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#network-segmentation"
      },
      {
        "id": 318, "qid": "Q0318",
        "prompt": "Which of the following is a security concern specific to serverless computing?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Limited visibility into the underlying infrastructure and runtime environment makes traditional security monitoring difficult","The customer must patch the operating system","Physical server security is the customer's responsibility","The customer must manage hypervisor updates"],
        "explanation": "In serverless computing (FaaS), the cloud provider manages all infrastructure, leaving customers with limited visibility into the runtime environment. Traditional security tools cannot be installed. Security must focus on function code security, IAM permissions (least privilege), input validation, dependency scanning, and API gateway controls.",
        "correctAnswers": ["Limited visibility into the underlying infrastructure and runtime environment makes traditional security monitoring difficult"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#cloud-security"
      },
      {
        "id": 319, "qid": "Q0319",
        "prompt": "Which of the following BEST describes the difference between full-disk encryption (FDE) and file-level encryption?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["FDE encrypts the entire drive including the OS; file-level encryption encrypts individual files and allows granular access control","FDE is faster than file-level encryption","File-level encryption protects against all attacks","FDE only encrypts the boot sector"],
        "explanation": "FDE (e.g., BitLocker, FileVault) encrypts the entire disk, all data including the OS is encrypted at rest. File-level encryption (e.g., EFS) encrypts individual files, allowing different keys for different files and granular sharing. FDE protects against physical theft; file-level protects against unauthorized user access on the same system.",
        "correctAnswers": ["FDE encrypts the entire drive including the OS; file-level encryption encrypts individual files and allows granular access control"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#data-security"
      },
      {
        "id": 320, "qid": "Q0320",
        "prompt": "Which data loss prevention (DLP) technique inspects data leaving the network and blocks unauthorized transfers?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Network DLP (monitoring egress points for sensitive data patterns)","Endpoint DLP only","Full disk encryption","Data masking"],
        "explanation": "Network DLP monitors data in transit at network egress points (email gateways, web proxies, firewalls) and blocks or alerts on unauthorized transfers of sensitive data. It uses content inspection, pattern matching, and data classification. Endpoint DLP protects data on devices. Both types should be used together for comprehensive protection.",
        "correctAnswers": ["Network DLP (monitoring egress points for sensitive data patterns)"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#data-security"
      },
      {
        "id": 321, "qid": "Q0321",
        "prompt": "What is the correct order of the incident response lifecycle according to NIST SP 800-61?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Preparation → Detection & Analysis → Containment, Eradication & Recovery → Post-Incident Activity","Detection → Preparation → Recovery → Eradication","Containment → Detection → Preparation → Recovery","Recovery → Detection → Containment → Preparation"],
        "explanation": "NIST SP 800-61 defines four phases: (1) Preparation, policies, tools, training; (2) Detection & Analysis, identify and investigate incidents; (3) Containment, Eradication & Recovery, stop the threat, remove it, restore systems; (4) Post-Incident Activity, lessons learned, documentation, process improvement.",
        "correctAnswers": ["Preparation → Detection & Analysis → Containment, Eradication & Recovery → Post-Incident Activity"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#incident-response"
      },
      {
        "id": 322, "qid": "Q0322",
        "prompt": "During a forensic investigation, what is the PRIMARY reason for maintaining a chain of custody?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["To document every person who handled the evidence and prove it has not been tampered with, ensuring admissibility in court","To encrypt the evidence","To delete duplicate copies of evidence","To speed up the investigation"],
        "explanation": "Chain of custody is a chronological documentation of who collected, handled, transferred, and stored evidence. It proves evidence integrity and that the evidence presented in court is the same evidence collected at the scene, unaltered. Breaking chain of custody can make evidence inadmissible.",
        "correctAnswers": ["To document every person who handled the evidence and prove it has not been tampered with, ensuring admissibility in court"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#digital-forensics"
      },
      {
        "id": 323, "qid": "Q0323",
        "prompt": "Which forensic tool creates a bit-for-bit exact copy of a storage device, including deleted files and slack space?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Forensic disk image (dd, FTK Imager)","File backup utility","Screen capture tool","Network packet capture"],
        "explanation": "A forensic disk image creates an exact bit-for-bit copy of the entire storage device, including active files, deleted files, unallocated space, and slack space. Tools like dd, FTK Imager, and EnCase create forensically sound images. A hash is computed to verify the image matches the original.",
        "correctAnswers": ["Forensic disk image (dd, FTK Imager)"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#digital-forensics"
      },
      {
        "id": 324, "qid": "Q0324",
        "prompt": "Which endpoint security solution uses behavioral analysis and machine learning to detect and respond to threats in real-time?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["EDR (Endpoint Detection and Response)","Traditional signature-based antivirus","Host-based firewall only","File integrity monitoring only"],
        "explanation": "EDR continuously monitors endpoints for suspicious behavior, uses behavioral analysis and ML to detect threats (including zero-days and fileless malware), provides real-time response capabilities (isolation, remediation), and stores telemetry for forensic investigation. XDR extends this across multiple security layers.",
        "correctAnswers": ["EDR (Endpoint Detection and Response)"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#endpoint-security"
      },
      {
        "id": 325, "qid": "Q0325",
        "prompt": "Which access control model assigns permissions based on user roles within an organization (e.g., Manager, Developer, Auditor)?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["RBAC (Role-Based Access Control)","DAC (Discretionary Access Control)","MAC (Mandatory Access Control)","ABAC (Attribute-Based Access Control)"],
        "explanation": "RBAC assigns permissions to roles, and users are assigned to roles. This simplifies access management in organizations, when an employee changes roles, their permissions change by updating their role assignment. DAC lets owners set permissions. MAC uses labels/classifications. ABAC uses attributes (time, location, department).",
        "correctAnswers": ["RBAC (Role-Based Access Control)"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#identity-access-management"
      },
      {
        "id": 326, "qid": "Q0326",
        "prompt": "Which access control model uses labels such as 'Top Secret,' 'Secret,' and 'Confidential' to enforce access based on clearance levels?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["MAC (Mandatory Access Control)","DAC (Discretionary Access Control)","RBAC (Role-Based Access Control)","Rule-based access control"],
        "explanation": "MAC enforces access based on security labels/classifications assigned to both users (clearance) and resources (classification). Access is granted only when the user's clearance meets or exceeds the resource's classification. The system administrator sets the labels, users cannot change them (non-discretionary).",
        "correctAnswers": ["MAC (Mandatory Access Control)"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#identity-access-management"
      },
      {
        "id": 327, "qid": "Q0327",
        "prompt": "What is the purpose of network flow data (NetFlow/sFlow) in security monitoring?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Provide metadata about network conversations (source, destination, ports, bytes, duration) for traffic analysis and anomaly detection","Encrypt network traffic","Block malicious packets","Replace firewall logging"],
        "explanation": "NetFlow/sFlow/IPFIX collect metadata about network conversations: source/destination IPs, ports, protocols, byte counts, and timing. This data enables traffic analysis, baseline establishment, anomaly detection (unusual traffic patterns), capacity planning, and forensic investigation, without capturing full packet content.",
        "correctAnswers": ["Provide metadata about network conversations (source, destination, ports, bytes, duration) for traffic analysis and anomaly detection"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#network-monitoring"
      },
      {
        "id": 328, "qid": "Q0328",
        "prompt": "Which SIEM capability automatically correlates events from multiple sources to identify potential security incidents?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Event correlation and alerting rules","Log storage","Report generation","User provisioning"],
        "explanation": "SIEM platforms aggregate logs from firewalls, IDS/IPS, servers, endpoints, and applications, then apply correlation rules to identify patterns indicating security incidents. For example, correlating a failed login attempt with subsequent successful login from a different geo-location might indicate a compromised account.",
        "correctAnswers": ["Event correlation and alerting rules"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#siem-soar"
      },
      {
        "id": 329, "qid": "Q0329",
        "prompt": "What is the PRIMARY difference between SIEM and SOAR?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["SIEM collects and correlates security data for detection; SOAR automates response actions through playbooks and orchestration","SIEM and SOAR are the same technology","SOAR replaces SIEM entirely","SIEM automates incident response"],
        "explanation": "SIEM focuses on data aggregation, correlation, alerting, and analysis. SOAR (Security Orchestration, Automation, and Response) automates response workflows through playbooks, for example, automatically isolating an infected endpoint, blocking a malicious IP, and creating a ticket. SOAR complements SIEM by automating the response to SIEM alerts.",
        "correctAnswers": ["SIEM collects and correlates security data for detection; SOAR automates response actions through playbooks and orchestration"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#siem-soar"
      },
      {
        "id": 330, "qid": "Q0330",
        "prompt": "Which vulnerability management metric measures the average time from when a patch is released to when it is applied in the environment?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Mean time to patch / mean time to remediate (MTTR)","Mean time between failures (MTBF)","Mean time to detect (MTTD)","Recovery time objective (RTO)"],
        "explanation": "Mean time to remediate (MTTR) in vulnerability management measures how quickly an organization applies patches after they are released. A shorter MTTR reduces the window of exposure. MTBF measures reliability. MTTD measures detection speed. RTO is a disaster recovery metric.",
        "correctAnswers": ["Mean time to patch / mean time to remediate (MTTR)"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#vulnerability-management"
      },
      {
        "id": 331, "qid": "Q0331",
        "prompt": "Which data sanitization method overwrites data multiple times with random patterns to ensure it cannot be recovered?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Secure erase / data wiping with overwrite passes","Deleting files from the recycle bin","Quick formatting the drive","Defragmenting the drive"],
        "explanation": "Secure erase overwrites data with random patterns (often multiple passes) to make recovery impossible. Simple deletion only removes file system pointers, the data remains on disk. Quick format reinitializes the file system without overwriting data. For SSDs, cryptographic erase (destroying the encryption key) is preferred.",
        "correctAnswers": ["Secure erase / data wiping with overwrite passes"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#data-security"
      },
      {
        "id": 332, "qid": "Q0332",
        "prompt": "A security team needs to ensure that a laptop's hard drive data is completely irrecoverable before disposal. Which method is MOST appropriate for an SSD?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Cryptographic erase (destroy the encryption key)","Degaussing","Single-pass overwrite","Deleting all files"],
        "explanation": "Cryptographic erase destroys the encryption key used to encrypt the SSD, rendering all data permanently unreadable. Degaussing does not work on SSDs (it only works on magnetic media like HDDs and tapes). Single-pass overwrite is unreliable on SSDs due to wear leveling. Physical destruction is the only alternative.",
        "correctAnswers": ["Cryptographic erase (destroy the encryption key)"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#data-security"
      },
      {
        "id": 333, "qid": "Q0333",
        "prompt": "Which of the following BEST describes the concept of data masking?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Replacing sensitive data with realistic but fake data to protect it in non-production environments","Encrypting data at rest","Deleting old data","Compressing data for storage"],
        "explanation": "Data masking (data obfuscation) replaces sensitive data with realistic but fictitious data. For example, replacing real SSNs with fake ones in a test database. This allows developers and testers to work with realistic data structures without accessing actual sensitive information. Tokenization is a related technique.",
        "correctAnswers": ["Replacing sensitive data with realistic but fake data to protect it in non-production environments"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#data-security"
      },
      {
        "id": 334, "qid": "Q0334",
        "prompt": "During an incident, a security analyst needs to contain a compromised workstation while preserving evidence. Which action should be taken FIRST?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Isolate the workstation from the network (disconnect the network cable or disable the port) while keeping it powered on","Immediately power off the workstation","Reformat the hard drive","Delete the malware files"],
        "explanation": "Network isolation prevents the compromised system from communicating with C2 servers or spreading to other systems while preserving volatile evidence (RAM contents, running processes, network connections). Powering off loses volatile evidence. Reformatting destroys evidence. Deleting files modifies the system state.",
        "correctAnswers": ["Isolate the workstation from the network (disconnect the network cable or disable the port) while keeping it powered on"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#incident-response"
      },
      {
        "id": 335, "qid": "Q0335",
        "prompt": "Which of the following is the correct order of volatility for digital evidence collection?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["CPU registers/cache → RAM → swap/pagefile → disk → remote logging → archival media","Disk → RAM → CPU cache → archival media","Archival media → disk → RAM → CPU registers","Remote logs → RAM → disk → swap"],
        "explanation": "The order of volatility dictates evidence collection priority from most volatile (lost first) to least volatile: CPU registers/cache (nanoseconds) → RAM (lost at power-off) → swap/pagefile → hard drive → remote logs → archival media (tapes, backups). Collect the most volatile evidence first to minimize data loss.",
        "correctAnswers": ["CPU registers/cache → RAM → swap/pagefile → disk → remote logging → archival media"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#digital-forensics"
      },
      {
        "id": 336, "qid": "Q0336",
        "prompt": "A company wants to monitor all network traffic entering and leaving a specific network segment. Which device should be used to copy traffic for analysis without disrupting the flow?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Network TAP (Test Access Point)","Router","DHCP server","DNS server"],
        "explanation": "A network TAP is a hardware device that sits inline on a network link and creates an exact copy of all traffic passing through it. The copied traffic is sent to monitoring tools (IDS, SIEM, packet analyzer) without introducing latency or modifying the original traffic. Port mirroring (SPAN) on a switch is a software-based alternative.",
        "correctAnswers": ["Network TAP (Test Access Point)"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#network-monitoring"
      },
      {
        "id": 337, "qid": "Q0337",
        "prompt": "What is the PRIMARY function of a privileged access management (PAM) solution?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Secure, manage, and monitor privileged accounts and sessions to prevent misuse of administrative access","Manage user email accounts","Provide network connectivity","Generate SSL certificates"],
        "explanation": "PAM solutions vault privileged credentials, enforce just-in-time access, record privileged sessions for auditing, rotate passwords automatically, and provide least-privilege access for administrative tasks. This reduces the risk of credential theft, insider threats, and unauthorized administrative actions.",
        "correctAnswers": ["Secure, manage, and monitor privileged accounts and sessions to prevent misuse of administrative access"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#identity-access-management"
      },
      {
        "id": 338, "qid": "Q0338",
        "prompt": "Which identity management concept ensures that users are periodically reviewed to verify they still need their current access permissions?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["User access review / access recertification","Account provisioning","Password reset","Single sign-on"],
        "explanation": "Access reviews (recertification) periodically verify that users still require their assigned permissions. Managers review their team's access and remove unnecessary permissions. This prevents privilege creep, the gradual accumulation of access rights beyond what is needed for the current role.",
        "correctAnswers": ["User access review / access recertification"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#identity-access-management"
      },
      {
        "id": 339, "qid": "Q0339",
        "prompt": "Which type of backup copies only the files that have changed since the last FULL backup?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Differential backup","Incremental backup","Full backup","Snapshot"],
        "explanation": "A differential backup copies all files changed since the last full backup. Each differential grows larger over time. An incremental backup copies only files changed since the last backup of ANY type (full or incremental), making each incremental smaller. Restoring from differential requires the last full + last differential. Restoring from incremental requires the last full + all incrementals.",
        "correctAnswers": ["Differential backup"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#data-security"
      },
      {
        "id": 340, "qid": "Q0340",
        "prompt": "Which endpoint security feature prevents unauthorized applications from executing by maintaining a list of approved software?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Application allowlisting / application whitelisting","Antivirus signatures","Disk encryption","Screen lock"],
        "explanation": "Application allowlisting only permits pre-approved applications to execute, blocking all others by default. This is more restrictive than blocklisting (which blocks known-bad and allows everything else). Allowlisting is highly effective against zero-day malware, unauthorized software, and fileless attacks because only trusted applications can run.",
        "correctAnswers": ["Application allowlisting / application whitelisting"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#endpoint-security"
      },
      {
        "id": 341, "qid": "Q0341",
        "prompt": "Performance-based: A security analyst discovers a compromised server. Place the incident response steps in the CORRECT order for handling this incident.",
        "type": "performance-based", "difficulty": "hard",
        "options": ["Document the initial indicators → isolate the server from the network → capture volatile evidence (RAM dump) → create a forensic disk image → identify and remove the root cause → restore from clean backup → update detection rules and conduct lessons learned","Immediately restore from backup → document findings later → skip evidence collection","Delete all logs → rebuild the server → change one password","Power off the server immediately → format the drive → reinstall the OS"],
        "explanation": "Proper incident response follows: (1) document indicators, (2) contain by isolating, (3) preserve volatile evidence first (RAM), (4) create forensic image for investigation, (5) eradicate the threat, (6) recover from clean state, (7) improve defenses. Skipping evidence collection prevents root cause analysis and may result in reinfection.",
        "correctAnswers": ["Document the initial indicators → isolate the server from the network → capture volatile evidence (RAM dump) → create a forensic disk image → identify and remove the root cause → restore from clean backup → update detection rules and conduct lessons learned"],
        "scenario": "PBQ: A SIEM alert triggers at 2:00 AM indicating unusual outbound traffic from a production web server. The security analyst confirms the server is compromised with a web shell providing remote access to an attacker.",
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#incident-response"
      },
      {
        "id": 342, "qid": "Q0342",
        "prompt": "Which network monitoring tool captures and analyzes full packet data on a network?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Protocol analyzer / packet capture (Wireshark, tcpdump)","Vulnerability scanner","Port scanner","Password cracker"],
        "explanation": "Protocol analyzers (packet sniffers) like Wireshark and tcpdump capture and analyze network packets in real-time or from saved capture files. They provide detailed protocol decoding, enabling troubleshooting, forensic analysis, and security monitoring. Full packet capture provides the most complete network evidence.",
        "correctAnswers": ["Protocol analyzer / packet capture (Wireshark, tcpdump)"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#network-monitoring"
      },
      {
        "id": 343, "qid": "Q0343",
        "prompt": "Which of the following describes the concept of 'just-in-time' (JIT) access in identity management?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Granting elevated privileges only when needed and automatically revoking them after a set time period","Giving all administrators permanent elevated access","Removing all admin accounts entirely","Sharing admin credentials among team members"],
        "explanation": "JIT access grants elevated privileges on demand for a specific, limited time period, then automatically revokes them. This reduces the window of exposure for privileged accounts, admins only have elevated access when actively performing administrative tasks. JIT is a key component of PAM and zero trust architectures.",
        "correctAnswers": ["Granting elevated privileges only when needed and automatically revoking them after a set time period"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#identity-access-management"
      },
      {
        "id": 344, "qid": "Q0344",
        "prompt": "What does XDR (Extended Detection and Response) provide beyond EDR?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Unified detection and response across endpoints, network, cloud, and email, correlating data from multiple security layers","Only endpoint protection","Physical security monitoring","Backup management"],
        "explanation": "XDR extends EDR by integrating and correlating telemetry across multiple security layers: endpoints, network traffic, cloud workloads, email, and identity. This provides a holistic view of threats, reduces alert fatigue through cross-layer correlation, and enables coordinated response actions across the entire environment.",
        "correctAnswers": ["Unified detection and response across endpoints, network, cloud, and email, correlating data from multiple security layers"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#endpoint-security"
      },
      {
        "id": 345, "qid": "Q0345",
        "prompt": "Which vulnerability management practice involves categorizing discovered vulnerabilities by severity and business impact to determine remediation priority?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Risk-based vulnerability prioritization","Vulnerability scanning","Penetration testing","Threat modeling"],
        "explanation": "Risk-based vulnerability prioritization considers CVSS score, asset criticality, exploit availability, business context, and threat intelligence to determine which vulnerabilities to fix first. Not all critical CVSS vulnerabilities pose the same risk, a critical vulnerability on an internet-facing production server is more urgent than one on an isolated test system.",
        "correctAnswers": ["Risk-based vulnerability prioritization"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#vulnerability-management"
      },
      {
        "id": 346, "qid": "Q0346",
        "prompt": "Which of the following describes tokenization as a data protection method?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Replacing sensitive data with a non-sensitive placeholder (token) that maps back to the original data in a secure vault","Encrypting data with AES-256","Compressing data for storage","Hashing data for integrity verification"],
        "explanation": "Tokenization replaces sensitive data elements (like credit card numbers) with non-sensitive tokens that have no exploitable value. The mapping between tokens and original data is stored in a secure token vault. Unlike encryption, tokenized data cannot be mathematically reversed, the token has no relationship to the original data.",
        "correctAnswers": ["Replacing sensitive data with a non-sensitive placeholder (token) that maps back to the original data in a secure vault"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#data-security"
      },
      {
        "id": 347, "qid": "Q0347",
        "prompt": "Which log management practice ensures logs cannot be tampered with by storing them on a separate, restricted system?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Centralized log collection to a write-once / immutable log server","Storing logs only on the local system","Disabling logging to save storage","Allowing all users to manage log files"],
        "explanation": "Centralized, immutable log storage ensures that even if an attacker compromises a system, they cannot modify or delete the logs. Write-once storage, log forwarding to a SIEM, and restricted access prevent log tampering. This is critical for forensic investigations and compliance.",
        "correctAnswers": ["Centralized log collection to a write-once / immutable log server"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#siem-soar"
      },
      {
        "id": 348, "qid": "Q0348",
        "prompt": "What is the PRIMARY purpose of a honeypot?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["A decoy system designed to attract attackers and study their methods without risking production assets","A backup server for disaster recovery","A load balancer for web traffic","A DNS server for internal use"],
        "explanation": "A honeypot is a deliberately vulnerable system deployed to attract attackers, divert them from real targets, and gather intelligence about attack methods and tools. A honeynet is a network of honeypots. Honeytokens are fake data (credentials, files) planted to detect unauthorized access.",
        "correctAnswers": ["A decoy system designed to attract attackers and study their methods without risking production assets"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#network-monitoring"
      },
      {
        "id": 349, "qid": "Q0349",
        "prompt": "Which of the following describes attribute-based access control (ABAC)?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Access decisions based on multiple attributes such as user role, department, time of day, location, and device type","Access based solely on file ownership","Access based only on username and password","Access based on IP address only"],
        "explanation": "ABAC makes access decisions by evaluating multiple attributes: subject attributes (role, department, clearance), resource attributes (classification, type), environment attributes (time, location, network), and action attributes (read, write, delete). ABAC provides the most granular and flexible access control but is more complex to implement than RBAC.",
        "correctAnswers": ["Access decisions based on multiple attributes such as user role, department, time of day, location, and device type"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#identity-access-management"
      },
      {
        "id": 350, "qid": "Q0350",
        "prompt": "Which of the following is a key benefit of automated patch management?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Consistent, timely deployment of security patches across all systems, reducing the window of vulnerability","Eliminating the need for testing patches","Making all systems immune to attacks","Removing the need for vulnerability scanning"],
        "explanation": "Automated patch management ensures patches are deployed consistently and promptly across the environment, reducing the window during which vulnerabilities can be exploited. However, patches should still be tested in a staging environment before production deployment to avoid breaking changes.",
        "correctAnswers": ["Consistent, timely deployment of security patches across all systems, reducing the window of vulnerability"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#vulnerability-management"
      },
      {
        "id": 351, "qid": "Q0351",
        "prompt": "Which risk management strategy involves purchasing cyber insurance to offset potential financial losses from a security breach?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Risk transference","Risk acceptance","Risk avoidance","Risk mitigation"],
        "explanation": "Risk transference shifts the financial impact of a risk to a third party, typically through insurance or contractual agreements. Risk acceptance acknowledges and accepts the risk. Risk avoidance eliminates the activity causing the risk. Risk mitigation reduces the likelihood or impact.",
        "correctAnswers": ["Risk transference"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#risk-management"
      },
      {
        "id": 352, "qid": "Q0352",
        "prompt": "What is the formula for calculating Single Loss Expectancy (SLE)?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["SLE = Asset Value (AV) × Exposure Factor (EF)","SLE = AV × ARO","SLE = ALE / ARO","SLE = AV + EF"],
        "explanation": "SLE = AV × EF. Asset Value is the worth of the asset. Exposure Factor is the percentage of loss expected from a single incident (0% to 100%). For example, if a $100,000 server has a 40% exposure factor from fire damage, SLE = $100,000 × 0.40 = $40,000.",
        "correctAnswers": ["SLE = Asset Value (AV) × Exposure Factor (EF)"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#risk-management"
      },
      {
        "id": 353, "qid": "Q0353",
        "prompt": "What is the formula for Annualized Loss Expectancy (ALE)?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["ALE = SLE × ARO (Annualized Rate of Occurrence)","ALE = AV × EF","ALE = SLE + ARO","ALE = AV / ARO"],
        "explanation": "ALE = SLE × ARO. ALE represents the expected annual cost of a risk. If SLE is $40,000 and the event is expected to occur twice per year (ARO = 2), then ALE = $40,000 × 2 = $80,000. ALE is used to justify security control investments, if a control costs less than the ALE it prevents, it is cost-effective.",
        "correctAnswers": ["ALE = SLE × ARO (Annualized Rate of Occurrence)"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#risk-management"
      },
      {
        "id": 354, "qid": "Q0354",
        "prompt": "Which risk assessment approach uses numerical values (dollar amounts, probabilities) to quantify risk?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Quantitative risk assessment","Qualitative risk assessment","Hybrid risk assessment","Compliance assessment"],
        "explanation": "Quantitative risk assessment assigns numerical values to risk components: asset values in dollars, probabilities as percentages, and losses as monetary amounts. It produces metrics like SLE, ALE, and ROI for security controls. Qualitative uses subjective ratings (high/medium/low). Both approaches are often combined.",
        "correctAnswers": ["Quantitative risk assessment"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#risk-management"
      },
      {
        "id": 355, "qid": "Q0355",
        "prompt": "Which risk assessment approach categorizes risks using subjective ratings like High, Medium, and Low?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Qualitative risk assessment","Quantitative risk assessment","Penetration testing","Vulnerability scanning"],
        "explanation": "Qualitative risk assessment uses subjective categories (high/medium/low or 1-5 scales) based on expert judgment, interviews, and questionnaires. It is faster and easier than quantitative assessment but less precise. A risk matrix (likelihood × impact) is a common qualitative tool.",
        "correctAnswers": ["Qualitative risk assessment"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#risk-management"
      },
      {
        "id": 356, "qid": "Q0356",
        "prompt": "Which compliance framework is MANDATORY for organizations that process credit card payments?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["PCI DSS (Payment Card Industry Data Security Standard)","HIPAA","SOX","FERPA"],
        "explanation": "PCI DSS is mandatory for any organization that stores, processes, or transmits credit card data. It has 12 requirements covering network security, data protection, vulnerability management, access control, monitoring, and security policies. HIPAA covers healthcare data. SOX covers financial reporting. FERPA covers student education records.",
        "correctAnswers": ["PCI DSS (Payment Card Industry Data Security Standard)"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#compliance-frameworks"
      },
      {
        "id": 357, "qid": "Q0357",
        "prompt": "Which US regulation protects the privacy and security of individuals' health information?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["HIPAA (Health Insurance Portability and Accountability Act)","PCI DSS","SOX","GDPR"],
        "explanation": "HIPAA establishes standards for protecting PHI (Protected Health Information). It includes the Privacy Rule (who can access PHI), Security Rule (safeguards for electronic PHI), and Breach Notification Rule (reporting breaches). Covered entities include healthcare providers, health plans, and healthcare clearinghouses.",
        "correctAnswers": ["HIPAA (Health Insurance Portability and Accountability Act)"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#compliance-frameworks"
      },
      {
        "id": 358, "qid": "Q0358",
        "prompt": "Which European regulation provides comprehensive data privacy rights to EU citizens and imposes strict penalties for non-compliance?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["GDPR (General Data Protection Regulation)","HIPAA","PCI DSS","FISMA"],
        "explanation": "GDPR applies to all organizations handling EU citizens' personal data, regardless of where the organization is based. Key rights include right to access, right to erasure (right to be forgotten), data portability, and consent requirements. Penalties can reach €20 million or 4% of global annual revenue.",
        "correctAnswers": ["GDPR (General Data Protection Regulation)"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#compliance-frameworks"
      },
      {
        "id": 359, "qid": "Q0359",
        "prompt": "Which NIST framework provides a structured approach to managing cybersecurity risk through five core functions: Identify, Protect, Detect, Respond, and Recover?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["NIST Cybersecurity Framework (CSF)","NIST SP 800-61","NIST SP 800-53","NIST SP 800-88"],
        "explanation": "NIST CSF organizes cybersecurity activities into five functions: Identify (asset management, risk assessment), Protect (access control, training, data security), Detect (monitoring, detection processes), Respond (response planning, communications), Recover (recovery planning, improvements). SP 800-61 covers incident response. SP 800-53 covers security controls. SP 800-88 covers media sanitization.",
        "correctAnswers": ["NIST Cybersecurity Framework (CSF)"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#compliance-frameworks"
      },
      {
        "id": 360, "qid": "Q0360",
        "prompt": "What is the PRIMARY purpose of a Business Impact Analysis (BIA)?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Identify critical business functions and determine the impact of their disruption to establish recovery priorities","Test firewall rules","Conduct a penetration test","Review employee performance"],
        "explanation": "A BIA identifies critical business processes, determines the impact of disruption (financial, operational, reputational), and establishes recovery time objectives (RTO), recovery point objectives (RPO), and maximum tolerable downtime (MTD). The BIA drives disaster recovery and business continuity planning priorities.",
        "correctAnswers": ["Identify critical business functions and determine the impact of their disruption to establish recovery priorities"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#business-continuity-disaster-recovery"
      },
      {
        "id": 361, "qid": "Q0361",
        "prompt": "What does RTO (Recovery Time Objective) define?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["The maximum acceptable time to restore a system or process after a disruption","The maximum amount of data that can be lost, measured in time","The total cost of a disaster recovery plan","The number of backup copies to maintain"],
        "explanation": "RTO is the maximum acceptable downtime, how long a system or process can be unavailable before the impact becomes unacceptable. For example, an RTO of 4 hours means the system must be restored within 4 hours of failure. RPO defines acceptable data loss. Together, RTO and RPO drive DR planning decisions.",
        "correctAnswers": ["The maximum acceptable time to restore a system or process after a disruption"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#business-continuity-disaster-recovery"
      },
      {
        "id": 362, "qid": "Q0362",
        "prompt": "What does RPO (Recovery Point Objective) define?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["The maximum acceptable amount of data loss, measured as the time since the last backup","The time to restore a system","The cost of a backup solution","The number of servers needed for recovery"],
        "explanation": "RPO defines the maximum acceptable data loss measured in time. If RPO is 1 hour, backups must occur at least every hour, at most 1 hour of data can be lost. An RPO of zero requires real-time replication. RPO drives backup frequency and replication strategy.",
        "correctAnswers": ["The maximum acceptable amount of data loss, measured as the time since the last backup"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#business-continuity-disaster-recovery"
      },
      {
        "id": 363, "qid": "Q0363",
        "prompt": "Which disaster recovery site provides immediate failover with real-time data replication and fully operational infrastructure?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Hot site","Warm site","Cold site","Mobile site"],
        "explanation": "A hot site is a fully equipped, operational duplicate of the primary site with real-time data replication. It provides near-instant failover (minutes). A warm site has hardware but requires data restoration (hours). A cold site is an empty facility that needs hardware, software, and data (days to weeks). Hot sites are the most expensive.",
        "correctAnswers": ["Hot site"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#business-continuity-disaster-recovery"
      },
      {
        "id": 364, "qid": "Q0364",
        "prompt": "Which type of security policy defines the acceptable behaviors and responsibilities of employees when using company IT resources?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Acceptable Use Policy (AUP)","Incident response plan","Disaster recovery plan","Change management policy"],
        "explanation": "An AUP defines what employees can and cannot do with company IT resources (computers, email, internet, mobile devices). It covers personal use restrictions, prohibited activities, monitoring disclosure, and consequences of violations. Employees typically must sign the AUP during onboarding.",
        "correctAnswers": ["Acceptable Use Policy (AUP)"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#security-policies"
      },
      {
        "id": 365, "qid": "Q0365",
        "prompt": "Which security awareness training topic is MOST effective at reducing phishing attacks?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Simulated phishing exercises with immediate training feedback for users who click malicious links","Annual compliance videos only","Posting security posters in the break room","Sending a company-wide email about security best practices once a year"],
        "explanation": "Simulated phishing exercises actively test employees by sending realistic phishing emails. Users who click receive immediate feedback and targeted training. This experiential learning is far more effective than passive methods like videos or posters. Regular simulations (monthly/quarterly) build lasting behavioral change.",
        "correctAnswers": ["Simulated phishing exercises with immediate training feedback for users who click malicious links"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#security-awareness-training"
      },
      {
        "id": 366, "qid": "Q0366",
        "prompt": "Which third-party risk management practice involves assessing a vendor's security posture before entering into a business relationship?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Vendor security assessment / due diligence","Vendor payment processing","Marketing review","Sales negotiation"],
        "explanation": "Vendor due diligence assesses a third party's security controls, compliance certifications, data handling practices, incident response capabilities, and financial stability before signing contracts. This includes reviewing SOC 2 reports, penetration test results, security questionnaires, and compliance certifications.",
        "correctAnswers": ["Vendor security assessment / due diligence"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#vendor-management"
      },
      {
        "id": 367, "qid": "Q0367",
        "prompt": "Which document defines specific security requirements that a vendor must meet as part of a contract?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Service Level Agreement (SLA) with security requirements","Marketing brochure","Vendor's annual report","Press release"],
        "explanation": "An SLA with security requirements contractually obligates the vendor to maintain specific security controls, uptime guarantees, incident notification timeframes, data handling standards, and compliance requirements. It provides legal recourse if the vendor fails to meet agreed-upon security standards.",
        "correctAnswers": ["Service Level Agreement (SLA) with security requirements"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#vendor-management"
      },
      {
        "id": 368, "qid": "Q0368",
        "prompt": "Which type of audit report provides an independent assessment of a service organization's controls relevant to security, availability, processing integrity, confidentiality, and privacy?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["SOC 2 (System and Organization Controls 2) report","Financial audit report","Marketing audit","Employee performance review"],
        "explanation": "SOC 2 reports are independent audits of a service organization's controls based on AICPA Trust Services Criteria: security, availability, processing integrity, confidentiality, and privacy. Type I assesses control design at a point in time. Type II assesses control design AND operating effectiveness over a period (typically 6-12 months). SOC 2 Type II is preferred.",
        "correctAnswers": ["SOC 2 (System and Organization Controls 2) report"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#compliance-frameworks"
      },
      {
        "id": 369, "qid": "Q0369",
        "prompt": "Which change management principle requires that changes are tested in a non-production environment before being deployed to production?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Change testing and validation in a staging environment","Deploying directly to production","Making changes without documentation","Allowing any employee to modify production systems"],
        "explanation": "Change management requires testing changes in a staging/pre-production environment that mirrors production before deployment. This prevents unintended outages, security vulnerabilities, or compatibility issues. The change management process includes: request → review → approve → test → implement → verify → document.",
        "correctAnswers": ["Change testing and validation in a staging environment"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#security-policies"
      },
      {
        "id": 370, "qid": "Q0370",
        "prompt": "Which of the following is an example of a data retention policy requirement?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Financial records must be retained for 7 years, then securely destroyed","All data must be kept forever","Data should be deleted as soon as it is no longer in active use","Data retention does not need documentation"],
        "explanation": "Data retention policies specify how long different types of data must be stored based on legal, regulatory, and business requirements. After the retention period expires, data must be securely destroyed. Over-retention increases breach exposure; under-retention risks compliance violations. Common requirements: financial (7 years), healthcare (6 years), GDPR (as long as necessary).",
        "correctAnswers": ["Financial records must be retained for 7 years, then securely destroyed"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#security-policies"
      },
      {
        "id": 371, "qid": "Q0371",
        "prompt": "Which business continuity testing method involves walking through the plan step-by-step with key stakeholders but does NOT actually disrupt operations?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Tabletop exercise","Full interruption test","Parallel test","Simulation test"],
        "explanation": "A tabletop exercise is a discussion-based walkthrough where key personnel review the BC/DR plan, discuss their roles, and identify gaps, without any actual operational disruption. Full interruption tests shut down primary systems. Parallel tests run backup systems alongside primary. Tabletop exercises are low-cost and low-risk.",
        "correctAnswers": ["Tabletop exercise"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#business-continuity-disaster-recovery"
      },
      {
        "id": 372, "qid": "Q0372",
        "prompt": "Which risk management concept describes the level of risk that remains after security controls have been applied?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Residual risk","Inherent risk","Risk appetite","Risk threshold"],
        "explanation": "Residual risk is the risk that remains after controls are implemented. Inherent risk is the risk before any controls. Risk appetite is the amount of risk an organization is willing to accept. The goal is to reduce residual risk to a level within the organization's risk appetite.",
        "correctAnswers": ["Residual risk"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#risk-management"
      },
      {
        "id": 373, "qid": "Q0373",
        "prompt": "Which security governance concept ensures that security responsibilities are clearly defined and that someone is answerable for security decisions?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Security accountability and ownership","Security automation","Security budgeting","Security marketing"],
        "explanation": "Security accountability ensures that individuals or teams are responsible for specific security functions, decisions, and outcomes. Data owners are accountable for data classification and protection. System owners are accountable for system security. Clear accountability prevents security gaps caused by assumed responsibility.",
        "correctAnswers": ["Security accountability and ownership"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#security-policies"
      },
      {
        "id": 374, "qid": "Q0374",
        "prompt": "Which of the following roles is responsible for classifying data and determining who should have access to it?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Data owner","Data custodian","Data processor","End user"],
        "explanation": "The data owner (usually a business unit leader or executive) is responsible for classifying data, defining access policies, and ensuring appropriate protection. The data custodian (usually IT) implements and manages the technical controls. The data processor handles data on behalf of the controller. End users access data as authorized.",
        "correctAnswers": ["Data owner"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#security-policies"
      },
      {
        "id": 375, "qid": "Q0375",
        "prompt": "Which of the following BEST describes a risk register?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["A documented list of identified risks, their severity, likelihood, potential impact, mitigation strategies, and risk owners","A list of all company employees","A backup of all company data","A log of all network traffic"],
        "explanation": "A risk register is a centralized document that tracks identified risks, their assessment (likelihood × impact), risk owners, mitigation strategies, and current status. It is a living document updated regularly as new risks emerge or existing risks change. The risk register supports informed decision-making and resource allocation.",
        "correctAnswers": ["A documented list of identified risks, their severity, likelihood, potential impact, mitigation strategies, and risk owners"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#risk-management"
      },
      {
        "id": 376, "qid": "Q0376",
        "prompt": "Performance-based: A healthcare organization must ensure HIPAA compliance for its new cloud-based electronic health records system. Arrange the compliance steps in the CORRECT order.",
        "type": "performance-based", "difficulty": "hard",
        "options": ["Conduct a risk assessment → identify ePHI data flows → implement required safeguards (administrative, physical, technical) → establish BAA with cloud provider → train workforce on HIPAA policies → monitor and audit compliance continuously","Deploy the system immediately → worry about compliance later → train users after a breach","Skip the risk assessment → encrypt everything → assume compliance","Choose the cheapest cloud provider → store all data unencrypted → disable logging"],
        "explanation": "HIPAA compliance requires: (1) risk assessment to identify threats to ePHI, (2) understanding data flows, (3) implementing required safeguards, (4) Business Associate Agreement with third parties, (5) workforce training, and (6) ongoing monitoring and auditing. Compliance is not a one-time event, it requires continuous oversight.",
        "correctAnswers": ["Conduct a risk assessment → identify ePHI data flows → implement required safeguards (administrative, physical, technical) → establish BAA with cloud provider → train workforce on HIPAA policies → monitor and audit compliance continuously"],
        "scenario": "PBQ: A hospital is migrating its electronic health records to a cloud platform. The CISO must ensure the migration and ongoing operation comply with HIPAA requirements for protecting patient health information.",
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#compliance-frameworks"
      },
      {
        "id": 377, "qid": "Q0377",
        "prompt": "Which ISO standard specifies requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS)?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["ISO 27001","ISO 9001","ISO 14001","ISO 22301"],
        "explanation": "ISO 27001 is the international standard for ISMS. It provides a systematic approach to managing sensitive information, including risk assessment, security controls (Annex A), and continuous improvement. ISO 9001 covers quality management. ISO 14001 covers environmental management. ISO 22301 covers business continuity.",
        "correctAnswers": ["ISO 27001"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#compliance-frameworks"
      },
      {
        "id": 378, "qid": "Q0378",
        "prompt": "What is the purpose of a memorandum of understanding (MOU) in vendor management?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["A non-binding agreement that outlines the terms and expectations between two parties regarding a shared activity","A legally binding contract with financial penalties","A technical specification document","An employee handbook"],
        "explanation": "An MOU outlines mutual intentions and expectations between parties. Unlike contracts, MOUs are typically non-binding but establish a framework for cooperation. They often precede formal contracts and define roles, responsibilities, and expectations. MOAs (Memoranda of Agreement) are similar but may carry more weight.",
        "correctAnswers": ["A non-binding agreement that outlines the terms and expectations between two parties regarding a shared activity"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#vendor-management"
      },
      {
        "id": 379, "qid": "Q0379",
        "prompt": "Which type of security assessment involves a third party evaluating the organization's controls against a specific standard?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["External audit","Internal vulnerability scan","Self-assessment","Employee review"],
        "explanation": "An external audit is conducted by an independent third party that evaluates the organization's security controls against a specific standard (ISO 27001, PCI DSS, SOC 2). External audits provide objective, unbiased assessments and are often required for regulatory compliance and customer assurance.",
        "correctAnswers": ["External audit"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#compliance-frameworks"
      },
      {
        "id": 380, "qid": "Q0380",
        "prompt": "Which of the following describes the concept of 'security by design'?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Integrating security considerations from the earliest stages of system and application development","Adding security features only after deployment","Relying solely on perimeter security","Addressing security only when a breach occurs"],
        "explanation": "Security by design (also called shift-left security) integrates security throughout the SDLC, from requirements and architecture through coding, testing, and deployment. This is far more effective and cost-efficient than retrofitting security after development. Threat modeling, secure coding guidelines, and security testing are key practices.",
        "correctAnswers": ["Integrating security considerations from the earliest stages of system and application development"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#security-policies"
      },
      {
        "id": 381, "qid": "Q0381",
        "prompt": "A company's web application receives user input and constructs LDAP queries without sanitizing the input. An attacker crafts input that modifies the LDAP query to return all user records. Which attack is this?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["LDAP injection","SQL injection","XSS","CSRF"],
        "explanation": "LDAP injection exploits unsanitized user input used in LDAP queries, similar to SQL injection but targeting LDAP directories. Attackers can modify search filters to bypass authentication, enumerate directory entries, or access unauthorized data. Prevention includes input validation and parameterized LDAP queries.",
        "correctAnswers": ["LDAP injection"],
        "scenario": "A penetration tester submits the input *)(&) into a web application's search field. The application returns a complete listing of all directory objects instead of the expected filtered results.",
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#application-attacks"
      },
      {
        "id": 382, "qid": "Q0382",
        "prompt": "An organization's security team discovers that an employee has been accessing sensitive financial data unrelated to their job function for the past 3 months. Which control failed?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Least privilege and periodic access review","Firewall rules","Antivirus updates","Physical security"],
        "explanation": "The least privilege principle was violated, the employee had access to data they didn't need for their role. Additionally, periodic access reviews should have detected the unnecessary access and revoked it. This scenario demonstrates privilege creep and the importance of regular access recertification.",
        "correctAnswers": ["Least privilege and periodic access review"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#identity-access-management"
      },
      {
        "id": 383, "qid": "Q0383",
        "prompt": "A company uses a cloud service provider but retains responsibility for encrypting data before uploading it. This arrangement is an example of which cloud security concept?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Client-side encryption in the shared responsibility model","Server-side encryption","Key escrow","Data masking"],
        "explanation": "Client-side encryption means the customer encrypts data before sending it to the cloud provider. The provider stores encrypted data but cannot read it because they don't have the encryption keys. This gives the customer full control over data confidentiality, even if the provider's systems are compromised.",
        "correctAnswers": ["Client-side encryption in the shared responsibility model"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#cloud-security"
      },
      {
        "id": 384, "qid": "Q0384",
        "prompt": "A security analyst notices that a critical patch for Apache Log4j has been available for 45 days but has not been applied to any production servers. Which security metric highlights this gap?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Mean time to remediate (MTTR) / patch latency","Mean time between failures (MTBF)","Mean time to detect (MTTD)","Network uptime percentage"],
        "explanation": "MTTR (mean time to remediate) or patch latency measures the time between patch availability and patch deployment. A 45-day gap for a critical vulnerability like Log4Shell is unacceptable. Industry best practice for critical vulnerabilities is remediation within 24-72 hours. Risk-based prioritization should fast-track critical, exploited vulnerabilities.",
        "correctAnswers": ["Mean time to remediate (MTTR) / patch latency"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#vulnerability-management"
      },
      {
        "id": 385, "qid": "Q0385",
        "prompt": "An organization uses a SIEM and notices 15,000 alerts per day. After tuning, the meaningful alerts are reduced to 200 per day. Which SIEM function was used?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Alert tuning and noise reduction through baseline adjustments and rule optimization","Log deletion","Disabling all alerts","Reducing log sources"],
        "explanation": "Alert tuning adjusts SIEM rules, thresholds, and baselines to reduce false positives while maintaining detection of true threats. This includes suppressing known benign events, adjusting severity levels, and refining correlation rules. Effective tuning is essential to prevent alert fatigue, where analysts become desensitized to the high volume of alerts.",
        "correctAnswers": ["Alert tuning and noise reduction through baseline adjustments and rule optimization"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#siem-soar"
      },
      {
        "id": 386, "qid": "Q0386",
        "prompt": "A company experiences a ransomware attack. The attackers demand 5 Bitcoin for decryption keys. The company decides to restore from backups instead of paying. Which risk response strategy is the company following?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Risk mitigation (reducing impact by restoring from backups)","Risk acceptance","Risk transference","Risk avoidance"],
        "explanation": "By restoring from backups instead of paying ransom, the company is mitigating the impact of the attack. Risk mitigation reduces the likelihood or impact of a risk. Risk acceptance would accept the data loss. Risk transference would use insurance to cover costs. Risk avoidance would prevent the attack from occurring.",
        "correctAnswers": ["Risk mitigation (reducing impact by restoring from backups)"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#risk-management"
      },
      {
        "id": 387, "qid": "Q0387",
        "prompt": "Which type of penetration testing gives the tester no prior knowledge of the target environment?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Black box (unknown environment)","White box (known environment)","Gray box (partially known environment)","Compliance scan"],
        "explanation": "Black box testing simulates an external attacker with no insider knowledge. The tester receives no information about the target (no network diagrams, credentials, or source code). White box testing provides full knowledge. Gray box provides partial knowledge (e.g., user-level credentials). Each approach tests different aspects of security.",
        "correctAnswers": ["Black box (unknown environment)"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#vulnerability-scanning"
      },
      {
        "id": 388, "qid": "Q0388",
        "prompt": "Which of the following BEST describes the purpose of a data classification scheme?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Categorize data by sensitivity level to determine appropriate security controls and handling requirements","Sort data alphabetically","Compress data for storage","Delete old data automatically"],
        "explanation": "Data classification categorizes data by sensitivity level (e.g., Public, Internal, Confidential, Restricted/Top Secret). Each level has defined security controls for storage, transmission, access, and disposal. Classification ensures that the most sensitive data receives the strongest protection without over-protecting low-sensitivity data.",
        "correctAnswers": ["Categorize data by sensitivity level to determine appropriate security controls and handling requirements"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#data-security"
      },
      {
        "id": 389, "qid": "Q0389",
        "prompt": "A security architect proposes implementing a NAC (Network Access Control) solution. What is the PRIMARY purpose of NAC?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Enforce security policies on devices before allowing them to access the network, checking for compliance (patching, antivirus, configuration)","Encrypt all network traffic","Replace the firewall","Manage DNS records"],
        "explanation": "NAC evaluates devices attempting to connect to the network against security policies (OS patch level, antivirus status, configuration compliance, certificate validity). Non-compliant devices are quarantined or given limited access until remediated. NAC works with 802.1X for authentication and can integrate with MDM for mobile devices.",
        "correctAnswers": ["Enforce security policies on devices before allowing them to access the network, checking for compliance (patching, antivirus, configuration)"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#endpoint-security"
      },
      {
        "id": 390, "qid": "Q0390",
        "prompt": "An attacker sends a specially crafted XML input to a web application that causes the server to read local files and return their contents. Which attack is this?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["XML External Entity (XXE) injection","SQL injection","Cross-site scripting","Buffer overflow"],
        "explanation": "XXE injection exploits applications that parse XML input. The attacker includes external entity references in the XML that cause the server to read local files (e.g., /etc/passwd), perform SSRF attacks, or cause denial of service. Prevention includes disabling external entity processing in XML parsers.",
        "correctAnswers": ["XML External Entity (XXE) injection"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#application-attacks"
      },
      {
        "id": 391, "qid": "Q0391",
        "prompt": "Which of the following is a key difference between symmetric and asymmetric encryption?",
        "type": "multiple-choice-single", "difficulty": "easy",
        "options": ["Symmetric uses one shared key for both encryption and decryption; asymmetric uses a public/private key pair","Symmetric is always slower than asymmetric","Asymmetric uses one shared key","Symmetric encryption is more secure than asymmetric"],
        "explanation": "Symmetric encryption uses the same key for encryption and decryption (AES, 3DES). Asymmetric uses a key pair, public key encrypts, private key decrypts (RSA, ECC). Symmetric is much faster and used for bulk data. Asymmetric is used for key exchange, digital signatures, and encrypting small amounts of data. TLS uses both.",
        "correctAnswers": ["Symmetric uses one shared key for both encryption and decryption; asymmetric uses a public/private key pair"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#cryptography"
      },
      {
        "id": 392, "qid": "Q0392",
        "prompt": "Which of the following describes a VLAN hopping attack?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["An attacker exploits switch misconfigurations (like DTP auto-negotiation or double tagging) to access traffic on VLANs they are not authorized for","An attacker physically moves a cable to another switch port","An attacker brute-forces a switch password","An attacker floods a switch with MAC addresses"],
        "explanation": "VLAN hopping allows an attacker to send traffic to or receive traffic from a VLAN they shouldn't access. Methods include switch spoofing (negotiating a trunk link using DTP) and double tagging (nesting VLAN tags). Prevention includes disabling DTP, explicitly configuring trunk/access ports, and using a dedicated native VLAN.",
        "correctAnswers": ["An attacker exploits switch misconfigurations (like DTP auto-negotiation or double tagging) to access traffic on VLANs they are not authorized for"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#network-attacks"
      },
      {
        "id": 393, "qid": "Q0393",
        "prompt": "Which attack floods a switch's MAC address table with fake MAC addresses, causing the switch to operate like a hub and broadcast all traffic to all ports?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["MAC flooding / CAM table overflow","ARP spoofing","DNS poisoning","SYN flood"],
        "explanation": "MAC flooding sends thousands of frames with different fake source MAC addresses, filling the switch's CAM (Content Addressable Memory) table. Once full, the switch cannot learn new MAC addresses and broadcasts all traffic to all ports, allowing the attacker to sniff traffic. Port security limits the number of MACs per port.",
        "correctAnswers": ["MAC flooding / CAM table overflow"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#network-attacks"
      },
      {
        "id": 394, "qid": "Q0394",
        "prompt": "Which security testing method involves analyzing running application behavior by sending crafted inputs to identify vulnerabilities?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["DAST (Dynamic Application Security Testing)","SAST (Static Application Security Testing)","Code review","Configuration audit"],
        "explanation": "DAST tests running applications from the outside by sending various inputs (malformed data, injection strings, edge cases) and analyzing responses. It finds runtime vulnerabilities that SAST cannot detect (authentication issues, server misconfigurations, business logic flaws). SAST analyzes source code without execution.",
        "correctAnswers": ["DAST (Dynamic Application Security Testing)"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#secure-coding"
      },
      {
        "id": 395, "qid": "Q0395",
        "prompt": "Which of the following is a characteristic of a polymorphic virus?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["It changes its code signature each time it replicates, evading signature-based detection","It only infects documents","It requires user interaction to spread","It is always detected by antivirus software"],
        "explanation": "Polymorphic malware mutates its code (using encryption, code transposition, or instruction substitution) each time it replicates, generating a different signature each time. This evades signature-based antivirus detection. Metamorphic malware completely rewrites its code. Detection requires behavioral analysis, heuristics, and sandbox detonation.",
        "correctAnswers": ["It changes its code signature each time it replicates, evading signature-based detection"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#malware"
      },
      {
        "id": 396, "qid": "Q0396",
        "prompt": "A security engineer configures email security and implements DKIM. What does DKIM verify?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["That the email message has not been altered in transit and was sent from an authorized mail server using cryptographic signatures","That the sender's IP address is authorized","That the email was encrypted end-to-end","That the recipient exists"],
        "explanation": "DKIM (DomainKeys Identified Mail) adds a digital signature to email headers using a private key. Recipients verify the signature using the public key published in DNS. This proves the message wasn't modified in transit and was sent by an authorized server. SPF verifies sender IP. DMARC combines SPF and DKIM with reporting.",
        "correctAnswers": ["That the email message has not been altered in transit and was sent from an authorized mail server using cryptographic signatures"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#secure-protocols"
      },
      {
        "id": 397, "qid": "Q0397",
        "prompt": "Which email security protocol allows a domain owner to publish a DNS record specifying which mail servers are authorized to send email on behalf of their domain?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["SPF (Sender Policy Framework)","DKIM","DMARC","S/MIME"],
        "explanation": "SPF publishes a DNS TXT record listing the IP addresses and mail servers authorized to send email for a domain. Receiving mail servers check the sending server's IP against the SPF record. If it doesn't match, the email may be rejected or marked as spam. SPF prevents email spoofing from unauthorized servers.",
        "correctAnswers": ["SPF (Sender Policy Framework)"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#secure-protocols"
      },
      {
        "id": 398, "qid": "Q0398",
        "prompt": "An ICS (Industrial Control System) network at a power plant should be isolated from the corporate IT network. Which segmentation method provides the STRONGEST protection?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Air gap (complete physical isolation with no network connectivity)","VLAN segmentation","Firewall with ACLs","VPN tunnel"],
        "explanation": "An air gap provides the strongest isolation by physically disconnecting the ICS/OT network from the IT network and the internet. No network connectivity means no remote attack vector. However, air gaps can be bridged by removable media (Stuxnet used USB drives). Defense in depth should still be applied within the air-gapped network.",
        "correctAnswers": ["Air gap (complete physical isolation with no network connectivity)"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#network-segmentation"
      },
      {
        "id": 399, "qid": "Q0399",
        "prompt": "Which type of social engineering attack uses a sense of urgency, authority, or scarcity to pressure the victim into acting quickly without thinking?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Urgency and authority-based manipulation (social engineering principles)","Brute-force attack","Port scanning","SQL injection"],
        "explanation": "Social engineering exploits human psychology. Common principles include: urgency ('Act now or your account will be locked!'), authority ('This is the CEO, I need this done immediately'), scarcity ('Only 2 spots left'), social proof ('Everyone else has done this'), and familiarity/trust. Recognizing these triggers is key to defense.",
        "correctAnswers": ["Urgency and authority-based manipulation (social engineering principles)"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#social-engineering"
      },
      {
        "id": 400, "qid": "Q0400",
        "prompt": "Which of the following describes the concept of threat modeling?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["A structured approach to identifying potential threats, attack vectors, and vulnerabilities in a system during the design phase","Installing antivirus software","Performing a port scan","Creating user accounts"],
        "explanation": "Threat modeling systematically identifies threats to an application or system during design. Common methodologies include STRIDE (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege), DREAD (scoring methodology), and PASTA (process for attack simulation and threat analysis). It helps prioritize security controls before code is written.",
        "correctAnswers": ["A structured approach to identifying potential threats, attack vectors, and vulnerabilities in a system during the design phase"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#secure-coding"
      },
      {
        "id": 401, "qid": "Q0401",
        "prompt": "A security analyst observes that a server is making outbound connections to unusual IP addresses during non-business hours and the connections use encrypted protocols on non-standard ports. Which type of activity does this MOST likely indicate?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["Command-and-control (C2) beaconing from a compromised system","Normal system updates","Scheduled backup operations","Routine DNS resolution"],
        "explanation": "C2 beaconing is when compromised systems periodically connect to attacker-controlled servers for instructions. Indicators include: outbound connections to unusual IPs, non-standard ports, encrypted traffic, periodic timing patterns, and off-hours activity. This is a strong IoC requiring immediate investigation and network isolation.",
        "correctAnswers": ["Command-and-control (C2) beaconing from a compromised system"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#network-monitoring"
      },
      {
        "id": 402, "qid": "Q0402",
        "prompt": "Which of the following describes split-tunnel VPN?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Only traffic destined for the corporate network goes through the VPN; internet traffic goes directly to the internet","All traffic goes through the VPN tunnel","The VPN connection splits between two servers","Two VPN clients are used simultaneously"],
        "explanation": "Split-tunnel VPN routes only corporate-bound traffic through the VPN while allowing internet traffic to go directly to the internet. This reduces VPN bandwidth usage but creates a security risk, the user's device is simultaneously connected to the corporate network and the internet, potentially allowing malware to bridge the two.",
        "correctAnswers": ["Only traffic destined for the corporate network goes through the VPN; internet traffic goes directly to the internet"],
        "scenario": null,
        "domainKey": "security-architecture", "domainName": "Security Architecture", "topicId": 0, "studyPath": "/study#vpn"
      },
      {
        "id": 403, "qid": "Q0403",
        "prompt": "Which of the following BEST describes a Kerberos authentication process?",
        "type": "multiple-choice-single", "difficulty": "hard",
        "options": ["A user authenticates to a KDC, receives a TGT, then uses the TGT to request service tickets for accessing specific resources","A user sends their password directly to each service they want to access","A user authenticates via a web browser using cookies","A user scans their fingerprint at every resource"],
        "explanation": "Kerberos uses ticket-based authentication: (1) User authenticates to the Key Distribution Center (KDC) and receives a Ticket-Granting Ticket (TGT). (2) The TGT is presented to the Ticket-Granting Service (TGS) to request service tickets. (3) Service tickets grant access to specific resources. Passwords are never sent over the network after initial authentication.",
        "correctAnswers": ["A user authenticates to a KDC, receives a TGT, then uses the TGT to request service tickets for accessing specific resources"],
        "scenario": null,
        "domainKey": "general-security-concepts", "domainName": "General Security Concepts", "topicId": 0, "studyPath": "/study#authentication"
      },
      {
        "id": 404, "qid": "Q0404",
        "prompt": "Which of the following attacks specifically targets an organization's DNS infrastructure by overwhelming it with bogus queries?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["DNS amplification DDoS attack","SQL injection","Phishing","Credential stuffing"],
        "explanation": "DNS amplification is a DDoS technique where the attacker sends small DNS queries with a spoofed source IP (the victim's IP) to open DNS resolvers. The resolvers send large responses to the victim, amplifying the traffic volume. A small query can generate a response 50-70x larger, overwhelming the target's bandwidth.",
        "correctAnswers": ["DNS amplification DDoS attack"],
        "scenario": null,
        "domainKey": "threats-vulnerabilities-mitigations", "domainName": "Threats, Vulnerabilities & Mitigations", "topicId": 0, "studyPath": "/study#network-attacks"
      },
      {
        "id": 405, "qid": "Q0405",
        "prompt": "Which of the following describes the difference between an on-premises SIEM and a cloud-native SIEM?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Cloud-native SIEMs offer elastic scalability, lower infrastructure management, and faster deployment; on-premises SIEMs provide more control over data location","They are identical in functionality","On-premises SIEMs are always cheaper","Cloud SIEMs cannot process logs"],
        "explanation": "Cloud-native SIEMs (e.g., Microsoft Sentinel, Google Chronicle) scale elastically, reduce infrastructure management burden, and integrate natively with cloud services. On-premises SIEMs (e.g., Splunk on-prem) give organizations full control over data residency and security. The choice depends on compliance requirements, budget, and IT capabilities.",
        "correctAnswers": ["Cloud-native SIEMs offer elastic scalability, lower infrastructure management, and faster deployment; on-premises SIEMs provide more control over data location"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#siem-soar"
      },
      {
        "id": 406, "qid": "Q0406",
        "prompt": "Which access control concept ensures that no single individual has end-to-end control over a critical business process?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Separation of duties / dual control","Mandatory vacation","Job rotation","Least privilege"],
        "explanation": "Separation of duties divides critical tasks among multiple people so no single person can complete a high-risk process alone. For example, one person creates a purchase order and a different person approves payment. This prevents fraud and errors. Mandatory vacation and job rotation are related detective controls.",
        "correctAnswers": ["Separation of duties / dual control"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#identity-access-management"
      },
      {
        "id": 407, "qid": "Q0407",
        "prompt": "An organization requires employees to take at least one consecutive week of vacation per year. What is the security purpose of this policy?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Detect fraudulent or malicious activity by having someone else perform the employee's duties during their absence","Improve employee morale","Reduce overtime costs","Comply with labor laws only"],
        "explanation": "Mandatory vacation is a detective control that forces employees away from their duties for a period. A substitute performing the duties may discover irregularities, fraud, or unauthorized activities that the employee was hiding. It is especially important for roles with access to financial systems or sensitive data.",
        "correctAnswers": ["Detect fraudulent or malicious activity by having someone else perform the employee's duties during their absence"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#security-policies"
      },
      {
        "id": 408, "qid": "Q0408",
        "prompt": "Which of the following describes the purpose of a security control baseline?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["A minimum set of security controls that all systems in an organization must implement","The maximum possible security configuration","A list of optional security recommendations","A performance benchmark for network speed"],
        "explanation": "A security baseline defines the minimum security configuration standards that must be applied to all systems. It includes settings like password policies, audit logging, service configurations, and patch levels. Systems are hardened to meet or exceed the baseline. CIS Benchmarks and DISA STIGs are commonly used baselines.",
        "correctAnswers": ["A minimum set of security controls that all systems in an organization must implement"],
        "scenario": null,
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#security-policies"
      },
      {
        "id": 409, "qid": "Q0409",
        "prompt": "Performance-based: A company needs to calculate whether implementing a $50,000/year intrusion prevention system is justified. The asset being protected is worth $500,000, the exposure factor for the threat is 20%, and the threat occurs an estimated 3 times per year. Calculate the ALE and determine if the investment is justified.",
        "type": "performance-based", "difficulty": "hard",
        "options": ["SLE = $100,000, ALE = $300,000, the $50,000 IPS is justified because it costs less than the potential annual loss","SLE = $50,000, ALE = $150,000, the IPS is not justified","SLE = $500,000, ALE = $1,500,000, cannot determine","The calculation cannot be performed with the given information"],
        "explanation": "SLE = AV × EF = $500,000 × 0.20 = $100,000. ALE = SLE × ARO = $100,000 × 3 = $300,000. The IPS costs $50,000/year. Since $50,000 < $300,000, the control is cost-effective, it costs significantly less than the expected annual loss it prevents. The ROI is $250,000/year.",
        "correctAnswers": ["SLE = $100,000, ALE = $300,000, the $50,000 IPS is justified because it costs less than the potential annual loss"],
        "scenario": "PBQ: A CISO presents a business case for a new IPS to the board. The protected asset (customer database) is valued at $500,000. Historical data shows the threat (successful network intrusion) has a 20% exposure factor and occurs approximately 3 times per year.",
        "domainKey": "security-program-management", "domainName": "Security Program Management & Oversight", "topicId": 0, "studyPath": "/study#risk-management"
      },
      {
        "id": 410, "qid": "Q0410",
        "prompt": "Which of the following describes the concept of 'defense in depth' applied specifically to endpoint security?",
        "type": "multiple-choice-single", "difficulty": "medium",
        "options": ["Combining multiple endpoint controls: antivirus, EDR, host firewall, application allowlisting, disk encryption, and patching","Installing only one security product on each endpoint","Relying solely on the network firewall to protect endpoints","Using only password protection"],
        "explanation": "Defense in depth for endpoints means layering multiple security controls: antivirus/anti-malware (signature + behavioral), EDR (advanced detection and response), host-based firewall (network control), application allowlisting (execution control), FDE (data protection), and automated patching (vulnerability reduction). If one layer fails, others provide protection.",
        "correctAnswers": ["Combining multiple endpoint controls: antivirus, EDR, host firewall, application allowlisting, disk encryption, and patching"],
        "scenario": null,
        "domainKey": "security-operations", "domainName": "Security Operations", "topicId": 0, "studyPath": "/study#endpoint-security"
      }
    ]
  }
];
