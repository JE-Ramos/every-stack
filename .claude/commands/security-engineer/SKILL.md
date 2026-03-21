---
name: security-engineer
description: "Guide to Security Engineering — OWASP Top 10, threat modeling, SAST/DAST, penetration testing, zero-trust. Use this skill whenever the user asks about application security, threat modeling, security testing, compliance (SOC2/GDPR), or security architecture."
---

# Security Engineer

> The engineer who makes security an enabling constraint — not a bottleneck — by embedding threat awareness, automated defenses, and compliance rigor into every layer of the system.

## What Elite Looks Like

A staff-level security engineer doesn't just find vulnerabilities — they build systems and cultures where vulnerabilities are structurally difficult to introduce. They think in threat models, not checklists. They design security architectures that make the secure path the easiest path for developers. They automate relentlessly — SAST/DAST in every pipeline, secrets scanning on every commit, dependency auditing on every build — so that security doesn't depend on human vigilance alone.

What separates elite from competent:
- **Threat modeling fluency**: Can decompose any system into trust boundaries, data flows, and attack surfaces using STRIDE or PASTA — and explain findings to both engineers and executives
- **Defense in depth**: Designs layered security controls so that any single failure doesn't compromise the system — never relies on a single perimeter
- **Developer empathy**: Makes security tools and guidelines that developers actually use, not security theater that gets bypassed
- **Incident response readiness**: Has runbooks, detection rules, and communication plans ready before breaches happen — not scrambling during them
- **Supply chain awareness**: Understands that your security posture includes every dependency, container base image, CI plugin, and third-party integration
- **Risk quantification**: Can articulate security risks in business terms — probability, impact, cost of mitigation vs. cost of breach — not just "this is a critical finding"
- **Zero-trust thinking**: Assumes compromise and designs systems that limit blast radius through least privilege, microsegmentation, and continuous verification

## Core Responsibilities

- Conduct threat modeling sessions for new features, architectures, and integrations
- Implement and maintain SAST, DAST, and SCA tooling across all CI/CD pipelines
- Perform penetration testing and security assessments on applications and infrastructure
- Design authentication, authorization, and secrets management architectures
- Establish and maintain compliance frameworks (SOC 2, GDPR, HIPAA, PCI-DSS)
- Build and maintain incident response plans, detection rules, and forensic capabilities
- Review code for security vulnerabilities — injection, authentication bypass, data exposure
- Manage vulnerability disclosure and remediation programs
- Train developers on secure coding practices and common vulnerability patterns
- Evaluate and secure third-party dependencies, APIs, and SaaS integrations
- Monitor for emerging threats and CVEs relevant to the organization's technology stack

## Key Skills & Tools

### Application Security

| Domain | Tools & Techniques |
|--------|-------------------|
| **SAST** | Semgrep, CodeQL, SonarQube, Snyk Code — static analysis integrated into CI, custom rule authoring for organization-specific patterns |
| **DAST** | OWASP ZAP, Burp Suite, Nuclei — dynamic scanning against running applications, authenticated scanning, API fuzzing |
| **SCA** | Snyk, Dependabot, Trivy, Grype — dependency vulnerability scanning, license compliance, SBOM generation |
| **Secrets Detection** | GitLeaks, TruffleHog, GitHub Secret Scanning — pre-commit hooks and CI pipeline scanning for leaked credentials |
| **Container Security** | Trivy, Grype, Docker Scout, Cosign — image scanning, runtime security, image signing and verification |

### Threat Modeling

- **STRIDE**: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege — systematic threat categorization per component
- **PASTA**: Process for Attack Simulation and Threat Analysis — risk-centric, seven-stage methodology connecting business objectives to technical threats
- **Attack trees**: Decomposing attack goals into sub-goals to identify all viable attack paths
- **Data flow diagrams**: Mapping trust boundaries, data stores, processes, and external entities to identify attack surfaces
- **MITRE ATT&CK**: Using the adversary tactics and techniques knowledge base for threat intelligence and detection engineering

### Infrastructure Security

- **Zero-trust architecture**: Identity-based access, microsegmentation, continuous verification, least privilege everywhere
- **Cloud security**: AWS Security Hub / Azure Defender / GCP Security Command Center, IAM policy design, VPC architecture, encryption at rest and in transit
- **Kubernetes security**: Pod security standards, network policies, RBAC, admission controllers (OPA/Kyverno), runtime security (Falco)
- **Network security**: Firewall rules, WAF configuration (Cloudflare, AWS WAF), DDoS mitigation, TLS configuration

### Identity & Access Management

- OAuth 2.0 / OIDC flows and their security implications (PKCE, token binding, audience restriction)
- JWT security — algorithm confusion attacks, token validation, short-lived tokens with refresh rotation
- API authentication patterns — API keys, mTLS, signed requests
- RBAC/ABAC design — principle of least privilege, permission boundaries, service accounts

### Compliance & Governance

- SOC 2 Type II — control design, evidence collection, continuous compliance monitoring
- GDPR — data mapping, consent management, data subject rights, breach notification
- HIPAA — PHI handling, BAAs, access controls, audit logging
- PCI-DSS — cardholder data environment scoping, network segmentation, encryption requirements

## AI-First Practices

AI is both a powerful security tool and a new attack surface to defend:

- **Security code review**: Use AI agents to scan codebases for vulnerability patterns — SQL injection, XSS, SSRF, insecure deserialization. AI catches subtle variants that regex-based SAST misses, but always validate findings manually
- **Vulnerability analysis**: Feed CVE descriptions and your dependency tree to AI to assess actual exploitability in your specific context — not every CVE is a real risk in your deployment
- **Threat model generation**: Describe a system architecture to AI to generate initial STRIDE analysis and attack trees, then refine with domain expertise and organizational context
- **Compliance documentation**: Use AI to draft control descriptions, evidence narratives, and policy documents from templates and existing configurations — dramatically reduces SOC 2 and GDPR documentation burden
- **Incident response assistance**: During incidents, use AI to correlate log entries, identify attack patterns, and suggest containment actions based on MITRE ATT&CK framework mappings
- **Security policy generation**: Generate initial security policies (CSP headers, CORS configurations, IAM policies) from application requirements, then harden through review
- **Penetration test reporting**: Use AI to structure findings, write clear reproduction steps, and map vulnerabilities to CWE/OWASP categories

### AI Security Concerns
- **Prompt injection**: Understand and defend against prompt injection attacks in any AI-powered features your application exposes
- **Data leakage**: Ensure sensitive data (PII, secrets, proprietary code) is not sent to AI services without appropriate controls
- **Model supply chain**: Evaluate the security of AI models and their training data — model poisoning and backdoor attacks are real threats
- **AI-generated code risks**: AI-generated code frequently contains security vulnerabilities — insecure defaults, missing input validation, hardcoded secrets in examples. Always run SAST on AI output

## How They Collaborate

- **Developers**: Embed security reviews in pull requests, provide secure coding guidelines, run threat modeling sessions for new features
- **DevOps/Platform Engineers**: Co-design secure CI/CD pipelines, manage secrets infrastructure, implement network security controls
- **QA Engineers**: Integrate security testing into the test pipeline, share fuzzing and negative testing techniques
- **Architects**: Review system designs for security implications, validate trust boundaries, approve authentication/authorization patterns
- **Legal/Compliance**: Translate regulatory requirements into technical controls, maintain compliance evidence, coordinate breach notification
- **Engineering Managers**: Report security risk posture, prioritize vulnerability remediation, justify security investment
- **Incident Response Team**: Lead technical investigation during security incidents, coordinate containment, conduct post-mortems

## Hiring Signals

### Green Flags
- Can walk through a threat model for a real system they've secured — trust boundaries, attack surfaces, mitigations
- Explains security in terms of risk tradeoffs, not absolute mandates — "we accepted this risk because..."
- Has automated security tooling in CI/CD and can explain what each tool catches (and doesn't)
- Demonstrates developer empathy — makes secure paths easy, not just blocking insecure ones
- Can explain OWASP Top 10 with real examples from their experience, not just reciting the list
- Has incident response experience and can describe their role clearly
- Understands the difference between compliance and security — and why you need both
- Shows curiosity about new attack vectors (AI security, supply chain, cloud-native threats)

### Red Flags
- Security through obscurity — "we hide the admin panel URL"
- Only does penetration testing, no threat modeling or architecture review
- Cannot explain why a vulnerability matters in business terms — only CVSS scores
- "Just add a WAF" as the answer to application security
- No experience with automation — relies entirely on manual reviews and annual penetration tests
- Treats developers as adversaries rather than partners in security
- Cannot distinguish between vulnerability scanning output and actual exploitable findings
- No understanding of cloud-native or container security — still thinks in perimeter terms

## Growth Path

| Level | Markers |
|-------|---------|
| **Junior** | Runs security scanning tools and triages findings. Understands OWASP Top 10 fundamentals. Assists with compliance evidence collection. Follows secure coding guidelines in their own code |
| **Mid** | Conducts threat modeling for features. Configures and maintains SAST/DAST/SCA in CI pipelines. Performs basic penetration testing. Writes security documentation and runbooks. Handles routine vulnerability remediation |
| **Senior** | Owns application security program for a product area. Designs authentication/authorization architectures. Leads incident response for security events. Mentors developers on secure coding. Conducts advanced penetration testing. Manages compliance for a specific framework (SOC 2, GDPR) |
| **Staff** | Defines organization-wide security architecture and strategy. Builds security tooling and frameworks used across all teams. Conducts advanced threat modeling for complex distributed systems. Drives security culture through training, tooling, and process. Evaluates and mitigates emerging threat categories (AI security, supply chain). Makes risk-based prioritization decisions that balance security with velocity |
| **Principal** | Sets security vision across the organization. Engages with executive leadership on risk posture and investment. Drives industry-level security contributions (open-source tools, conference talks, vulnerability research). Architects zero-trust transformations. Makes build-vs-buy decisions for security infrastructure. Defines security requirements for new technology adoptions |

## RTFM — Essential Reading

### Books
- [The Web Application Hacker's Handbook](https://www.wiley.com/en-us/The+Web+Application+Hacker%27s+Handbook%3A+Finding+and+Exploiting+Security+Flaws%2C+2nd+Edition-p-9781118026472) — Dafydd Stuttard & Marcus Pinto. The comprehensive guide to web application security testing and exploitation
- [The Tangled Web](https://nostarch.com/tangledweb) — Michal Zalewski. Deep dive into browser security, same-origin policy, and the web security model — essential for anyone securing web applications
- [Practical Cloud Security](https://www.oreilly.com/library/view/practical-cloud-security/9781492037507/) — Chris Dotson. Cloud security architecture for AWS, Azure, and GCP with practical implementation guidance
- [Threat Modeling: Designing for Security](https://www.wiley.com/en-us/Threat+Modeling%3A+Designing+for+Security-p-9781118809990) — Adam Shostack. The definitive text on threat modeling methodology from a Microsoft security veteran
- [Alice and Bob Learn Application Security](https://www.wiley.com/en-us/Alice+and+Bob+Learn+Application+Security-p-9781119687351) — Tanya Janca. Modern application security practices with an emphasis on building security into the SDLC

### Standards & Frameworks
- [OWASP Top 10](https://owasp.org/www-project-top-ten/) — The industry-standard list of critical web application security risks, updated regularly
- [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/) — Comprehensive security requirements checklist for application design, development, and testing
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) — The five-function framework (Identify, Protect, Detect, Respond, Recover) for organizational cybersecurity
- [CWE/SANS Top 25](https://cwe.mitre.org/top25/) — The 25 most dangerous software weaknesses, mapped to specific code patterns
- [MITRE ATT&CK](https://attack.mitre.org/) — Adversary tactics and techniques knowledge base for threat intelligence and detection engineering

### Documentation & Guides
- [Semgrep Documentation](https://semgrep.dev/docs/) — Custom SAST rule authoring and CI integration
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) — Practical secure coding guidelines organized by topic (authentication, input validation, cryptography, etc.)
- [Google Project Zero Blog](https://googleprojectzero.blogspot.com/) — World-class vulnerability research and exploitation techniques
- [PortSwigger Web Security Academy](https://portswigger.net/web-security) — Free, hands-on web security training from the creators of Burp Suite

### Articles & Resources
- [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/) — Comprehensive methodology for security testing web applications
- [Trail of Bits Blog](https://blog.trailofbits.com/) — Advanced security research, tool development, and audit findings
- [tl;dr sec Newsletter](https://tldrsec.com/) — Clint Gibler's weekly curated security newsletter covering tools, research, and industry developments

### Tools & OSS Projects
- [Semgrep](https://github.com/semgrep/semgrep) — Lightweight static analysis with custom rule support for multiple languages
- [Trivy](https://github.com/aquasecurity/trivy) — All-in-one security scanner for containers, filesystems, Git repos, and Kubernetes
- [Nuclei](https://github.com/projectdiscovery/nuclei) — Fast, template-based vulnerability scanner
- [GitLeaks](https://github.com/gitleaks/gitleaks) — Secrets detection for Git repos and CI pipelines
- [OWASP ZAP](https://github.com/zaproxy/zaproxy) — The world's most widely used web app security scanner

## References

- OWASP Foundation — [owasp.org](https://owasp.org/)
- NIST Computer Security Resource Center — [csrc.nist.gov](https://csrc.nist.gov/)
- MITRE ATT&CK — [attack.mitre.org](https://attack.mitre.org/)
- progression.fyi — [progression.fyi](https://progression.fyi/)
- Engineering Ladders — [github.com/jorgef/engineeringladders](https://github.com/jorgef/engineeringladders)
