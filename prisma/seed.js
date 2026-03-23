const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const domains = [
  { key: "general-security-concepts", name: "General Security Concepts", weightPct: 12 },
  {
    key: "threats-vulnerabilities-mitigations",
    name: "Threats, Vulnerabilities & Mitigations",
    weightPct: 22,
  },
  { key: "security-architecture", name: "Security Architecture", weightPct: 18 },
  { key: "security-operations", name: "Security Operations", weightPct: 28 },
  {
    key: "security-program-management-oversight",
    name: "Security Program Management & Oversight",
    weightPct: 20,
  },
];

const topicMap = {
  "general-security-concepts": [
    {
      slug: "security-controls-types",
      title: "Security Control Types and Categories",
      coverage: [
        "Technical, managerial, and operational controls",
        "Preventive, detective, corrective, deterrent, and compensating controls",
        "Directive versus physical controls",
      ],
      terms: ["preventive control", "detective control", "compensating control", "directive control"],
      examples: [
        "An organization deploys MFA as a preventive technical control and SIEM alerts as detective controls.",
        "A legacy application without native encryption uses compensating network segmentation and strict ACLs.",
      ],
      tips: [
        "Remember PDC (Preventive-Detective-Corrective) as the baseline control triad for exam questions.",
        "When the BEST answer is unavailable, choose the strongest compensating control.",
      ],
    },
    {
      slug: "cia-aaa-nonrepudiation",
      title: "CIA, AAA, and Non-repudiation",
      coverage: [
        "Confidentiality, integrity, and availability trade-offs",
        "Authentication, authorization, and accounting",
        "Non-repudiation through signatures and audit evidence",
      ],
      terms: ["CIA triad", "AAA", "non-repudiation", "audit trail"],
      examples: [
        "A file integrity monitoring tool preserves integrity by alerting on unauthorized changes.",
        "Digital signatures plus timestamping provide non-repudiation for transaction approvals.",
      ],
      tips: [
        "Map each security requirement to CIA first before selecting tools.",
        "Accounting answers usually involve logs, traceability, and evidence retention.",
      ],
    },
    {
      slug: "zero-trust-and-deception",
      title: "Zero Trust, Segmentation, and Deception",
      coverage: [
        "Never trust, always verify principles",
        "Microsegmentation and continuous verification",
        "Deception technologies such as honeypots and honeytokens",
      ],
      terms: ["zero trust", "microsegmentation", "honeypot", "honeytoken"],
      examples: [
        "A finance subnet requires continuous device posture checks before granting app access.",
        "A planted credential honeytoken triggers high-priority incident response workflows.",
      ],
      tips: [
        "Zero trust answers prioritize identity, context, and least privilege over network location.",
        "Deception controls are high-signal detective mechanisms.",
      ],
    },
    {
      slug: "secure-protocols-and-services",
      title: "Secure Protocols and Services",
      coverage: [
        "TLS, SSH, IPsec, and secure email concepts",
        "Insecure legacy protocols and secure replacements",
        "Certificate-based trust and service hardening",
      ],
      terms: ["TLS", "SSH", "IPsec", "certificate chain"],
      examples: [
        "SSH replaces Telnet for encrypted remote administration.",
        "SMTP relay is hardened with STARTTLS and strict authentication.",
      ],
      tips: [
        "If plaintext protocol appears in options, prefer encrypted alternatives.",
        "Choose modern protocol versions and disable weak ciphers when asked for BEST practice.",
      ],
    },
    {
      slug: "pki-certificates-lifecycle",
      title: "PKI and Certificate Lifecycle",
      coverage: [
        "Certificate authorities, registration authorities, and trust chains",
        "CSR generation, issuance, renewal, and revocation",
        "OCSP, CRL, and key escrow considerations",
      ],
      terms: ["CA", "RA", "CRL", "OCSP"],
      examples: [
        "A web team automates certificate renewal to prevent service outage.",
        "Compromised certificates are revoked and validated through OCSP stapling.",
      ],
      tips: [
        "Revocation checking usually points to OCSP/CRL choices.",
        "Private key protection is often more important than certificate distribution itself.",
      ],
    },
    {
      slug: "encryption-hashing-signatures",
      title: "Encryption, Hashing, and Digital Signatures",
      coverage: [
        "Symmetric versus asymmetric encryption use cases",
        "Hash functions and integrity validation",
        "Digital signatures and message authentication",
      ],
      terms: ["AES", "RSA", "SHA-2", "digital signature"],
      examples: [
        "A VPN tunnel uses symmetric keys for bulk throughput and asymmetric exchange for setup.",
        "Software release files are validated by hash and publisher signature before deployment.",
      ],
      tips: [
        "Confidentiality questions usually lead to encryption; integrity questions often lead to hashing/signatures.",
        "Asymmetric is slower but enables key exchange and non-repudiation.",
      ],
    },
    {
      slug: "change-management-and-versioning",
      title: "Change Management and Version Control",
      coverage: [
        "Approval workflows, rollback plans, and maintenance windows",
        "Documented risk impact and stakeholder communication",
        "Version control and change traceability",
      ],
      terms: ["change advisory board", "rollback plan", "maintenance window", "version control"],
      examples: [
        "A firewall rule update follows peer review, testing, approval, and rollback readiness.",
        "IaC pull requests record why and when a production security change was made.",
      ],
      tips: [
        "In incident scenarios, emergency changes still require post-change documentation.",
        "For exam safety questions, pick answers that include testing + approval + rollback.",
      ],
    },
    {
      slug: "physical-environmental-security",
      title: "Physical and Environmental Security Basics",
      coverage: [
        "Badge access, guards, cameras, and visitor controls",
        "Mantraps, bollards, and secured equipment rooms",
        "Power, HVAC, and environmental monitoring considerations",
      ],
      terms: ["mantrap", "CCTV", "HVAC", "environmental controls"],
      examples: [
        "A data center uses mantraps and logs escort requirements for contractors.",
        "Environmental sensors alert operations before overheating affects availability.",
      ],
      tips: [
        "If the threat is theft or unauthorized entry, prioritize physical controls.",
        "Availability scenarios often include UPS, generator, and environmental safeguards.",
      ],
    },
  ],
  "threats-vulnerabilities-mitigations": [
    {
      slug: "threat-actors-and-motivations",
      title: "Threat Actors, Intent, and Motivation",
      coverage: [
        "Nation-state, insider, organized crime, and hacktivist profiles",
        "Motivations such as espionage, disruption, extortion, and financial gain",
        "Capability versus opportunity in threat modeling",
      ],
      terms: ["threat actor", "insider threat", "organized crime", "espionage"],
      examples: [
        "A financially motivated ransomware group targets exposed remote services.",
        "A malicious insider abuses privileged access to exfiltrate customer records.",
      ],
      tips: [
        "Match actor type with likely objective and attack pattern.",
        "Insider scenarios often include privilege misuse or data exfiltration.",
      ],
    },
    {
      slug: "social-engineering-and-human-attacks",
      title: "Social Engineering and Human-layer Attacks",
      coverage: [
        "Phishing, spear phishing, vishing, smishing, and pretexting",
        "Impersonation, tailgating, and influence tactics",
        "Awareness controls and reporting channels",
      ],
      terms: ["pretexting", "spear phishing", "vishing", "tailgating"],
      examples: [
        "Attackers impersonate IT support to request MFA reset approvals.",
        "A receptionist challenge-response script prevents unauthorized tailgating.",
      ],
      tips: [
        "User training + technical filters is stronger than either control alone.",
        "When choosing mitigation, include verification procedures and reporting.",
      ],
    },
    {
      slug: "malware-and-fileless-techniques",
      title: "Malware Families and Fileless Techniques",
      coverage: [
        "Ransomware, trojans, worms, spyware, rootkits, and botnets",
        "Fileless execution, living-off-the-land techniques",
        "Indicators of compromise and containment priorities",
      ],
      terms: ["ransomware", "rootkit", "botnet", "fileless malware"],
      examples: [
        "A fileless attack abuses PowerShell to avoid disk-based detection.",
        "Endpoint telemetry reveals lateral movement after initial malware execution.",
      ],
      tips: [
        "Contain first, then eradicate and recover.",
        "Behavioral detections can catch fileless attacks better than signature-only controls.",
      ],
    },
    {
      slug: "application-and-web-vulnerabilities",
      title: "Application and Web Vulnerabilities",
      coverage: [
        "Injection, broken access control, insecure deserialization, and race conditions",
        "Cross-site scripting and cross-site request forgery",
        "Secure coding, code review, and dependency hygiene",
      ],
      terms: ["SQL injection", "XSS", "CSRF", "secure SDLC"],
      examples: [
        "Input validation and parameterized queries reduce injection risk.",
        "A flawed access control check exposes admin endpoints to regular users.",
      ],
      tips: [
        "If user input is involved, suspect validation and sanitization weaknesses.",
        "Least privilege and server-side authorization checks are core mitigations.",
      ],
    },
    {
      slug: "network-wireless-attacks",
      title: "Network and Wireless Attack Techniques",
      coverage: [
        "DoS/DDoS, spoofing, on-path attacks, and replay",
        "Rogue AP, evil twin, and wireless encryption weaknesses",
        "Network segmentation and secure protocol selection",
      ],
      terms: ["DDoS", "on-path attack", "evil twin", "network segmentation"],
      examples: [
        "An evil twin hotspot captures credentials from unmanaged devices.",
        "Traffic shaping and upstream scrubbing mitigate volumetric DDoS traffic.",
      ],
      tips: [
        "Wireless exam questions often reward WPA3 + 802.1X + rogue AP detection.",
        "Segmentation limits blast radius when compromise occurs.",
      ],
    },
    {
      slug: "cloud-virtualization-and-container-threats",
      title: "Cloud, Virtualization, and Container Threats",
      coverage: [
        "Misconfiguration risks in cloud storage and identity policies",
        "Hypervisor, VM escape, and container isolation concerns",
        "Shared responsibility and workload hardening",
      ],
      terms: ["shared responsibility model", "VM escape", "container isolation", "misconfiguration"],
      examples: [
        "Public object storage exposure leaks sensitive customer files.",
        "Runtime policies block privileged containers in production clusters.",
      ],
      tips: [
        "Cloud incidents often start with identity or configuration errors.",
        "For hybrid scenarios, select controls that cover both host and orchestration layers.",
      ],
    },
    {
      slug: "vulnerability-management-lifecycle",
      title: "Vulnerability Management Lifecycle",
      coverage: [
        "Discovery, analysis, prioritization, remediation, and validation",
        "Authenticated versus unauthenticated scanning",
        "Risk scoring and exception management",
      ],
      terms: ["CVSS", "authenticated scan", "remediation", "validation"],
      examples: [
        "Critical internet-facing vulnerabilities are patched within emergency SLA windows.",
        "A false positive finding is validated before closure in the ticketing workflow.",
      ],
      tips: [
        "The best workflow answer includes verify-fix-retest steps.",
        "Prioritize by exploitability, business impact, and exposure.",
      ],
    },
    {
      slug: "mitigation-strategies-and-hardening",
      title: "Mitigation Strategy and Hardening",
      coverage: [
        "Secure configuration baselines and patch governance",
        "Isolation, segmentation, and access enforcement",
        "Allow-listing, EDR, and continuous monitoring",
      ],
      terms: ["hardening baseline", "allow-listing", "EDR", "isolation"],
      examples: [
        "Default credentials are removed and unnecessary services disabled during baseline hardening.",
        "Compromised hosts are isolated from production VLANs to stop lateral movement.",
      ],
      tips: [
        "Hardening questions usually favor reducing attack surface first.",
        "If speed matters during compromise, isolate before rebuilding.",
      ],
    },
  ],
  "security-architecture": [
    {
      slug: "architecture-models-and-tradeoffs",
      title: "Architecture Models and Trade-offs",
      coverage: [
        "On-premises, cloud, hybrid, and multi-cloud models",
        "Traditional, virtualized, and containerized deployments",
        "Security implications of each architecture choice",
      ],
      terms: ["hybrid cloud", "multi-cloud", "virtualization", "containerization"],
      examples: [
        "A regulated workload remains on-prem while analytics scales in cloud.",
        "A container platform requires runtime controls and image provenance validation.",
      ],
      tips: [
        "Choose architecture answers that align control placement with data sensitivity.",
        "For migration questions, include compensating controls during transition.",
      ],
    },
    {
      slug: "secure-network-design-and-zones",
      title: "Secure Network Design and Security Zones",
      coverage: [
        "Segmentation, DMZs, and trust boundaries",
        "Out-of-band management and jump hosts",
        "Network access control and east-west visibility",
      ],
      terms: ["DMZ", "trust boundary", "jump host", "NAC"],
      examples: [
        "Critical databases are isolated behind layered internal firewalls.",
        "Administrative access is restricted to hardened jump servers.",
      ],
      tips: [
        "When minimizing blast radius is the goal, segmentation is usually correct.",
        "Prefer architecture answers with explicit boundary controls.",
      ],
    },
    {
      slug: "secure-communication-and-remote-access",
      title: "Secure Communication and Remote Access",
      coverage: [
        "VPN patterns and secure tunneling",
        "Bastion hosts and conditional access",
        "Certificate-based service authentication",
      ],
      terms: ["remote access VPN", "bastion host", "conditional access", "mutual TLS"],
      examples: [
        "Contractors receive time-bound VPN access with device posture checks.",
        "Service-to-service APIs use mutual TLS with short-lived certificates.",
      ],
      tips: [
        "Remote access answers should include strong identity controls and encryption.",
        "Mutual authentication is often the strongest option in machine-to-machine scenarios.",
      ],
    },
    {
      slug: "identity-and-access-architecture",
      title: "Identity and Access Architecture",
      coverage: [
        "Federation, SSO, and identity providers",
        "RBAC, ABAC, and least privilege models",
        "Privileged access design and separation of duties",
      ],
      terms: ["IdP", "SSO", "RBAC", "ABAC"],
      examples: [
        "Workforce SaaS access is integrated through federation and centralized IAM policy.",
        "Privileged tasks require just-in-time access with full session logging.",
      ],
      tips: [
        "If flexibility by context is required, ABAC is typically stronger than static role-only models.",
        "Privileged access scenarios usually require additional controls and approvals.",
      ],
    },
    {
      slug: "data-classification-and-protection",
      title: "Data Classification and Protection",
      coverage: [
        "Data states: at rest, in transit, and in use",
        "Classification labels and handling requirements",
        "Tokenization, masking, and data loss prevention",
      ],
      terms: ["data classification", "tokenization", "masking", "DLP"],
      examples: [
        "PII records are tagged and routed through stricter retention and encryption policy.",
        "Production datasets are masked before use in test environments.",
      ],
      tips: [
        "Select controls based on data state and sensitivity.",
        "Exam distractors often ignore lifecycle handling requirements.",
      ],
    },
    {
      slug: "cloud-security-controls",
      title: "Cloud Security Design and Controls",
      coverage: [
        "Identity-centric cloud security patterns",
        "Security groups, private endpoints, and key management",
        "CASB and cloud posture management concepts",
      ],
      terms: ["cloud posture management", "CASB", "private endpoint", "KMS"],
      examples: [
        "Sensitive workloads use private endpoints instead of internet-exposed service access.",
        "Cloud posture scans continuously identify high-risk misconfigurations.",
      ],
      tips: [
        "Cloud architecture answers should reflect shared responsibility boundaries.",
        "Identity misconfiguration is one of the highest-impact cloud risks.",
      ],
    },
    {
      slug: "iot-ot-embedded-security",
      title: "IoT, OT, and Embedded Security",
      coverage: [
        "Industrial control systems and constrained devices",
        "Firmware, protocol, and patching limitations",
        "Compensating controls for legacy operational technology",
      ],
      terms: ["ICS", "SCADA", "firmware signing", "compensating controls"],
      examples: [
        "A manufacturing PLC segment is isolated with strict one-way monitoring paths.",
        "Unsigned firmware updates are blocked through secure boot policy.",
      ],
      tips: [
        "OT scenarios often prioritize safety and uptime, then phased security hardening.",
        "When patching is limited, focus on segmentation and monitoring.",
      ],
    },
    {
      slug: "resilience-redundancy-recovery",
      title: "Resilience, Redundancy, and Recovery",
      coverage: [
        "High availability, failover, and fault tolerance",
        "Backups, replication, and recovery testing",
        "RTO, RPO, and continuity of operations",
      ],
      terms: ["RTO", "RPO", "failover", "fault tolerance"],
      examples: [
        "A tier-1 service uses active-passive failover with quarterly recovery tests.",
        "Backup strategy combines immutable snapshots with offsite replication.",
      ],
      tips: [
        "If uptime objective is strict, pick high availability controls over simple backup-only options.",
        "Recovery plans without testing are incomplete answers.",
      ],
    },
  ],
  "security-operations": [
    {
      slug: "secure-baselines-and-hardening-ops",
      title: "Operational Baselines and Hardening",
      coverage: [
        "Secure baseline creation for endpoints and servers",
        "Patch cadence and configuration compliance",
        "Mobile, wireless, and application hardening",
      ],
      terms: ["secure baseline", "configuration compliance", "hardening", "patch cadence"],
      examples: [
        "Endpoint baseline enforces disk encryption, EDR, and approved application controls.",
        "Wireless infrastructure disables weak ciphers and unused SSIDs.",
      ],
      tips: [
        "Hardening questions often reward removing unnecessary services first.",
        "Baselines should be measured continuously, not once at deployment.",
      ],
    },
    {
      slug: "asset-management-and-inventory",
      title: "Asset Management and Inventory Control",
      coverage: [
        "Hardware, software, and data asset tracking",
        "Onboarding, ownership, and lifecycle status",
        "Secure disposal and decommission procedures",
      ],
      terms: ["asset inventory", "CMDB", "decommissioning", "ownership"],
      examples: [
        "Unauthorized software discovery triggers a remediation workflow and policy review.",
        "Disk sanitization certificates are required before device disposal.",
      ],
      tips: [
        "You cannot protect what you cannot inventory.",
        "Lifecycle controls often appear as governance + operational combined answers.",
      ],
    },
    {
      slug: "vulnerability-scanning-and-prioritization",
      title: "Vulnerability Scanning and Prioritization",
      coverage: [
        "Internal and external scan planning",
        "Risk-based prioritization and remediation SLAs",
        "Retesting and closure evidence",
      ],
      terms: ["vulnerability scanner", "SLA", "risk-based prioritization", "false positive"],
      examples: [
        "Critical CVEs on internet-facing services are remediated within accelerated SLA windows.",
        "Closed tickets require validation scans to confirm exposure removal.",
      ],
      tips: [
        "Prioritize exploitable, exposed, and high-impact vulnerabilities first.",
        "Validation evidence is essential before marking findings complete.",
      ],
    },
    {
      slug: "logging-monitoring-and-siem",
      title: "Logging, Monitoring, and SIEM Operations",
      coverage: [
        "Centralized log collection and correlation",
        "Alert tuning and false-positive reduction",
        "Telemetry sources from endpoints, network, cloud, and identity",
      ],
      terms: ["SIEM", "correlation rule", "false positive", "telemetry"],
      examples: [
        "A SIEM rule correlates impossible travel with abnormal MFA activity.",
        "SOC engineers tune noisy alerts after validating benign automation behavior.",
      ],
      tips: [
        "In monitoring questions, data quality and context are as important as tool choice.",
        "Correlation-based detections are stronger than single-event triggers.",
      ],
    },
    {
      slug: "security-tools-enterprise-controls",
      title: "Enterprise Security Tools and Controls",
      coverage: [
        "Firewalls, IDS/IPS, WAF, DNS filtering, and NAC",
        "DLP, endpoint protection, EDR/XDR, and sandboxing",
        "Control placement and policy tuning",
      ],
      terms: ["IDS/IPS", "WAF", "NAC", "XDR"],
      examples: [
        "DNS filtering blocks command-and-control domains used by malware campaigns.",
        "NAC denies unmanaged devices from joining production network segments.",
      ],
      tips: [
        "Match control to attack stage: prevent, detect, contain, or recover.",
        "WAF answers generally target web-layer threats, not endpoint malware.",
      ],
    },
    {
      slug: "iam-operations-and-account-lifecycle",
      title: "IAM Operations and Account Lifecycle",
      coverage: [
        "Provisioning, deprovisioning, and periodic access review",
        "MFA, SSO, and privileged access workflows",
        "Service account governance and secret rotation",
      ],
      terms: ["provisioning", "deprovisioning", "PAM", "access recertification"],
      examples: [
        "Departed employees are automatically deprovisioned through HR-driven identity workflows.",
        "Privileged sessions are brokered and recorded via PAM tooling.",
      ],
      tips: [
        "Lifecycle questions usually favor automation and least privilege.",
        "Stale account removal is a common exam objective and high-risk issue.",
      ],
    },
    {
      slug: "incident-response-and-threat-hunting",
      title: "Incident Response and Threat Hunting",
      coverage: [
        "Preparation, identification, containment, eradication, recovery, lessons learned",
        "Playbooks, runbooks, and communication planning",
        "Proactive hunting hypotheses and validation",
      ],
      terms: ["incident lifecycle", "playbook", "runbook", "threat hunting"],
      examples: [
        "The IR team isolates compromised endpoints before beginning eradication activities.",
        "Threat hunters pivot from suspicious parent-child process activity to lateral movement traces.",
      ],
      tips: [
        "Containment before eradication is usually the correct sequence.",
        "Lessons learned should include control improvements, not just timeline review.",
      ],
    },
    {
      slug: "forensics-and-evidence-handling",
      title: "Digital Forensics and Evidence Handling",
      coverage: [
        "Chain of custody and legal defensibility",
        "Volatile and non-volatile data acquisition",
        "Time synchronization and timeline reconstruction",
      ],
      terms: ["chain of custody", "volatile data", "forensic image", "timeline analysis"],
      examples: [
        "Investigators capture memory before shutting down a potentially compromised host.",
        "All evidence transfers are documented to preserve admissibility.",
      ],
      tips: [
        "If legal action is possible, chain-of-custody documentation is mandatory.",
        "Capture volatile evidence first when system state may be lost.",
      ],
    },
    {
      slug: "automation-and-orchestration",
      title: "Automation, Orchestration, and SOAR",
      coverage: [
        "Automating repetitive security tasks and enrichments",
        "SOAR playbooks and approval gates",
        "Scripting considerations and change control",
      ],
      terms: ["SOAR", "automation playbook", "orchestration", "script safety"],
      examples: [
        "A SOAR workflow enriches phishing indicators before analyst triage.",
        "Automation isolates endpoints only after confidence threshold and validation checks.",
      ],
      tips: [
        "Automation should improve speed without removing critical decision checkpoints.",
        "The best answer balances response velocity and false-positive risk.",
      ],
    },
  ],
  "security-program-management-oversight": [
    {
      slug: "governance-structure-and-roles",
      title: "Governance Structure and Security Roles",
      coverage: [
        "Governance committees and accountability models",
        "Role definitions, separation of duties, and ownership",
        "Security strategy alignment with business goals",
      ],
      terms: ["governance", "accountability", "separation of duties", "ownership"],
      examples: [
        "A governance board approves risk tolerance and major control investments.",
        "Conflicting duties are separated between development and production access.",
      ],
      tips: [
        "Governance questions usually focus on decision authority and accountability.",
        "When scope is enterprise-wide, choose policy-driven oversight structures.",
      ],
    },
    {
      slug: "policies-standards-procedures",
      title: "Policies, Standards, Procedures, and Guidelines",
      coverage: [
        "Hierarchy and purpose of policy documents",
        "Operational procedures and technical standards",
        "Review cycles, approvals, and communication",
      ],
      terms: ["policy", "standard", "procedure", "guideline"],
      examples: [
        "A password policy defines requirements while a procedure describes reset workflow.",
        "Standards enforce baseline encryption settings across all business units.",
      ],
      tips: [
        "Policy tells WHAT; procedure tells HOW.",
        "Exam choices often mix these terms; pick the one matching implementation detail level.",
      ],
    },
    {
      slug: "risk-identification-analysis-treatment",
      title: "Risk Identification, Analysis, and Treatment",
      coverage: [
        "Risk registers, scoring, and ownership",
        "Qualitative and quantitative analysis methods",
        "Risk responses: accept, avoid, transfer, and mitigate",
      ],
      terms: ["risk register", "risk appetite", "ALE", "risk treatment"],
      examples: [
        "A business-impacting vulnerability is entered into the risk register with owner and due date.",
        "Cyber insurance is selected as partial risk transfer for specific scenarios.",
      ],
      tips: [
        "If a control is too costly, risk acceptance with leadership sign-off may be appropriate.",
        "Quantitative methods usually involve monetary calculations.",
      ],
    },
    {
      slug: "business-impact-and-resilience-planning",
      title: "Business Impact Analysis and Resilience Planning",
      coverage: [
        "Critical process identification and dependency mapping",
        "RTO/RPO target definition and prioritization",
        "Continuity and disaster recovery plan integration",
      ],
      terms: ["BIA", "criticality", "RTO", "RPO"],
      examples: [
        "A BIA identifies payroll and authentication as top-priority recovery services.",
        "Dependency mapping reveals single points of failure in vendor-managed connectivity.",
      ],
      tips: [
        "BIA comes before finalizing continuity priorities.",
        "Recovery requirements should align with business impact, not convenience.",
      ],
    },
    {
      slug: "third-party-and-supply-chain-risk",
      title: "Third-party and Supply Chain Risk",
      coverage: [
        "Vendor due diligence and security questionnaires",
        "Contract clauses, SLAs, and right-to-audit",
        "Continuous monitoring and offboarding controls",
      ],
      terms: ["third-party risk", "SLA", "right-to-audit", "vendor due diligence"],
      examples: [
        "A SaaS provider contract includes breach notification timelines and audit rights.",
        "Vendors with privileged access are re-assessed annually based on risk tier.",
      ],
      tips: [
        "For supplier scenarios, choose ongoing monitoring over one-time assessment.",
        "Contracts should define security obligations before onboarding.",
      ],
    },
    {
      slug: "compliance-privacy-and-legal-considerations",
      title: "Compliance, Privacy, and Legal Considerations",
      coverage: [
        "Regulatory obligations and evidence requirements",
        "Privacy principles and data handling obligations",
        "Consequences of non-compliance and remediation planning",
      ],
      terms: ["compliance", "privacy", "regulatory requirement", "evidence"],
      examples: [
        "A compliance gap triggers corrective action plan and executive reporting.",
        "Data retention practices are updated to align with privacy obligations.",
      ],
      tips: [
        "Compliance proves alignment; security reduces risk—they overlap but are not identical.",
        "If asked for defensibility, choose documented evidence and auditability.",
      ],
    },
    {
      slug: "audits-assessments-and-testing",
      title: "Audits, Assessments, and Testing",
      coverage: [
        "Internal versus external audits",
        "Control assessments, attestation, and penetration test scope",
        "Corrective actions and continuous improvement",
      ],
      terms: ["audit", "attestation", "assessment", "penetration testing"],
      examples: [
        "An external audit requests control evidence and remediation status for prior findings.",
        "A scoped penetration test validates exploitability of high-risk exposure paths.",
      ],
      tips: [
        "Audits evaluate conformance; penetration testing evaluates exploitability.",
        "A strong response includes remediation tracking and verification.",
      ],
    },
    {
      slug: "security-awareness-and-metrics",
      title: "Security Awareness, Training, and Metrics",
      coverage: [
        "Role-based awareness and phishing resilience",
        "Behavioral reporting and secure user practices",
        "Program metrics and maturity improvement",
      ],
      terms: ["security awareness", "phishing simulation", "KPI", "maturity"],
      examples: [
        "Quarterly phishing simulations are tracked by department and targeted remediation plans.",
        "Awareness metrics are tied to reduced click rates and faster incident reporting.",
      ],
      tips: [
        "Training effectiveness is measured by behavior change, not attendance only.",
        "Metrics should be actionable and tied to risk outcomes.",
      ],
    },
  ],
};

const difficultyModels = ["easy", "medium", "hard"];

const makeTopicContent = (domainName, topic) => {
  const objectiveLines = topic.coverage.map((line) => `- ${line}`).join("\n");
  return {
    content: `## ${topic.title}\n${topic.title} is part of ${domainName} in SY0-701. Focus on when to apply each control, how to evaluate trade-offs, and how to choose the best remediation under exam constraints.\n\nObjective coverage:\n${objectiveLines}`,
    keyTerms: JSON.stringify(topic.terms),
    examples: JSON.stringify(topic.examples),
    tips: JSON.stringify(topic.tips),
  };
};

const optionSets = {
  single: [
    ["Least privilege", "Shared admin account", "Open inbound ACL", "Local guest login"],
    ["Input validation", "Disable logging", "Use default passwords", "Flat network"],
    ["Tokenization", "Telnet", "WEP", "Anonymous FTP"],
    ["MFA", "Single-factor reused password", "Unpatched firmware", "Disabled EDR"],
  ],
  multi: [
    ["Patch management", "Asset inventory", "Continuous monitoring", "Disable backups"],
    ["Segmentation", "Allow-listing", "Incident runbooks", "Public admin portals"],
    ["SIEM correlation", "Vulnerability scanning", "Threat hunting", "Shared credentials"],
    ["Data classification", "DLP policies", "Key rotation", "Open S3 bucket"],
  ],
};

function pick(arr, index) {
  return arr[index % arr.length];
}

function buildQuestion({ domain, topic, idx, difficulty, type }) {
  const seed = idx + difficulty.length + type.length;

  if (type === "multiple-choice-single") {
    const options = pick(optionSets.single, seed);
    const correct = [options[0]];
    return {
      prompt: `Which control best improves ${topic.title.toLowerCase()} effectiveness in a ${difficulty} scenario?`,
      options,
      answer: correct,
      explanation: `${options[0]} is most appropriate because it improves security posture with minimal operational risk while aligning to SY0-701 best practices for ${topic.title}.`,
      scenario: `You are assessing ${topic.title} in a production environment that recently had control drift. Select the BEST corrective action.`,
    };
  }

  if (type === "multiple-choice-multiple") {
    const options = pick(optionSets.multi, seed);
    const correct = [options[0], options[1], options[2]];
    return {
      prompt: `Select THREE controls that should be prioritized to strengthen ${topic.title.toLowerCase()}.`,
      options,
      answer: correct,
      explanation: `${correct.join(", ")} are complementary controls that reduce attack surface and improve detection/response capability in this domain.`,
      scenario: `A security manager is planning quarterly improvements related to ${topic.title}. Choose all controls that directly reduce risk.`,
    };
  }

  const options = [
    "Containment → Eradication → Recovery",
    "Recovery → Lessons Learned → Triage",
    "Identification → Closure → Ignore",
    "Escalation → Recovery → Procurement",
  ];
  const correct = [options[0]];
  return {
    prompt: `A SOC detects suspicious behavior affecting ${topic.title.toLowerCase()}. Which sequence is most appropriate?`,
    options,
    answer: correct,
    explanation: "The incident handling sequence must prioritize containment first, then eradication, then validated recovery to restore trust.",
    scenario: `PBQ: Simulated incident timeline with alerts, host telemetry, and change records. Select the BEST operational sequence.`,
  };
}

async function seed() {
  const existingQuestions = await prisma.question.count();
  if (existingQuestions > 0) {
    console.log(`Seed skipped: ${existingQuestions} questions already exist.`);
    return;
  }

  await prisma.wrongAnswer.deleteMany();
  await prisma.domainScore.deleteMany();
  await prisma.testResult.deleteMany();
  await prisma.studyProgress.deleteMany();
  await prisma.question.deleteMany();
  await prisma.topic.deleteMany();
  await prisma.domain.deleteMany();

  for (const domain of domains) {
    await prisma.domain.create({ data: domain });
  }

  const allDomains = await prisma.domain.findMany();
  const domainByKey = Object.fromEntries(allDomains.map((domain) => [domain.key, domain]));

  const allTopics = [];
  for (const [domainKey, topics] of Object.entries(topicMap)) {
    const domain = domainByKey[domainKey];
    for (const topic of topics) {
      const content = makeTopicContent(domain.name, topic);
      const created = await prisma.topic.create({
        data: {
          slug: topic.slug,
          title: topic.title,
          studyPath: `/study#${topic.slug}`,
          domainId: domain.id,
          ...content,
        },
      });
      allTopics.push({ ...created, domainKey });
    }
  }

  const types = ["multiple-choice-single", "multiple-choice-multiple", "performance-based"];

  let qCount = 1;
  for (const domain of allDomains) {
    const domainTopics = allTopics.filter((topic) => topic.domainKey === domain.key);

    for (const topic of domainTopics) {
      for (const difficulty of difficultyModels) {
        for (let idx = 1; idx <= 8; idx += 1) {
          const type = types[(idx - 1) % types.length];
          const model = buildQuestion({ domain, topic, idx, difficulty, type });
          await prisma.question.create({
            data: {
              qid: `Q-${String(qCount).padStart(4, "0")}`,
              prompt: model.prompt,
              type,
              difficulty,
              options: JSON.stringify(model.options),
              answer: JSON.stringify(model.answer),
              explanation: model.explanation,
              scenario: model.scenario,
              domainId: domain.id,
              topicId: topic.id,
            },
          });
          qCount += 1;
        }
      }
    }
  }

  console.log(`Seeded ${qCount - 1} questions across ${allDomains.length} domains.`);
}

seed()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
