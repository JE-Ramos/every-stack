---
name: cloud-engineer
description: "Guide to Cloud Engineering — AWS/Azure/GCP, networking, IAM, FinOps, serverless, disaster recovery. Use this skill whenever the user asks about cloud architecture, cloud migrations, cost optimization, VPC design, or multi-cloud strategy."
disable-model-invocation: true
---

# Cloud Engineer

> The engineer who architects and operates cloud infrastructure that is secure, cost-efficient, and resilient by design — turning cloud providers into a competitive advantage rather than a line item on the AWS bill.

## What Elite Looks Like

A staff-level cloud engineer doesn't just provision resources — they design cloud architectures that align with business objectives. They understand the pricing models, failure modes, and operational characteristics of cloud services deeply enough to make informed tradeoffs between cost, performance, reliability, and operational complexity. They think in terms of the Well-Architected Framework pillars and design systems where security and compliance are built in, not bolted on.

What separates elite from competent:
- **Service selection mastery**: Chooses between managed services, self-hosted, and serverless based on total cost of ownership, operational burden, and team capability — not resume-driven development
- **Cost engineering**: Treats cloud costs as an architectural concern, not an afterthought. Uses FinOps practices to forecast, allocate, and optimize spend
- **Security-first architecture**: Designs with least-privilege IAM, encryption at rest and in transit, network segmentation, and defense in depth as defaults
- **Multi-region and disaster recovery**: Architects for regional failures with RPO/RTO targets that match business requirements
- **Cloud-native thinking**: Designs for the cloud, not just in the cloud. Leverages managed services, event-driven architecture, and elastic scaling
- **Vendor strategy**: Understands when multi-cloud adds value vs. complexity, how to avoid vendor lock-in where it matters, and when lock-in is acceptable

## Core Responsibilities

- Design and implement cloud architectures aligned with the Well-Architected Framework
- Manage cloud networking: VPCs, subnets, routing tables, security groups, NACLs, transit gateways, VPN/Direct Connect
- Implement IAM strategies: least-privilege policies, role-based access, service accounts, cross-account access, identity federation
- Design and implement disaster recovery and business continuity solutions
- Optimize cloud costs through reserved instances, savings plans, right-sizing, spot instances, and architectural improvements
- Build and manage serverless architectures (Lambda/Functions, API Gateway, Step Functions, EventBridge)
- Implement cloud security controls: encryption, key management (KMS), secrets management, WAF, Shield, GuardDuty
- Design data storage architectures across cloud storage services (S3, EBS, EFS, RDS, DynamoDB, etc.)
- Manage cloud governance: tagging strategies, SCPs, organizational units, account vending
- Conduct cloud migration planning and execution (6 Rs: Rehost, Replatform, Repurchase, Refactor, Retire, Retain)
- Build landing zones and account structures for enterprise cloud adoption
- Evaluate and adopt cloud services as they become available

## Key Skills & Tools

### Cloud Platforms

| Provider | Key Services & Competencies |
|----------|---------------------------|
| **AWS** | EC2, ECS/EKS, Lambda, S3, RDS/Aurora, DynamoDB, VPC, IAM, CloudFront, Route 53, SQS/SNS/EventBridge, Step Functions, CloudWatch, CloudTrail, Organizations, Control Tower |
| **Azure** | VMs, AKS, Functions, Blob Storage, SQL Database/Cosmos DB, VNet, Entra ID, Front Door, Traffic Manager, Service Bus/Event Grid, Monitor, Defender for Cloud, Management Groups |
| **GCP** | Compute Engine, GKE, Cloud Functions/Cloud Run, Cloud Storage, Cloud SQL/Spanner/Firestore, VPC, IAM, Cloud CDN, Pub/Sub, Workflows, Cloud Monitoring, Security Command Center |

### Networking

| Concept | AWS / Azure / GCP Implementation |
|---------|--------------------------------|
| **Virtual Networks** | VPC / VNet / VPC — CIDR planning, subnet design, public vs. private subnets |
| **Connectivity** | Transit Gateway / vWAN / Cloud Interconnect — hub-spoke topologies, peering, VPN |
| **Load Balancing** | ALB/NLB / Application Gateway / Cloud Load Balancing — L4 vs. L7, health checks, SSL termination |
| **DNS** | Route 53 / Azure DNS / Cloud DNS — routing policies, failover, latency-based routing |
| **Security** | Security Groups + NACLs / NSGs / Firewall Rules — defense in depth, micro-segmentation |

### Security & Identity

| Domain | Key Competencies |
|--------|-----------------|
| **IAM** | Least-privilege policies, role assumption, service-linked roles, identity federation (SAML/OIDC), permission boundaries, SCPs |
| **Encryption** | KMS key management, envelope encryption, CMK rotation, at-rest and in-transit encryption, certificate management (ACM/Let's Encrypt) |
| **Network Security** | WAF rules, DDoS protection (Shield/Azure DDoS/Cloud Armor), private endpoints, VPC endpoints, PrivateLink |
| **Compliance** | CIS benchmarks, SOC2 control mapping, HIPAA/PCI-DSS architectural requirements, Config/Azure Policy/SCC for continuous compliance |

### FinOps & Cost Optimization

| Practice | Implementation |
|----------|---------------|
| **Visibility** | Cost Explorer, tagging strategies, cost allocation, showback/chargeback models |
| **Optimization** | Reserved instances, savings plans, spot/preemptible instances, right-sizing, storage tiering, data transfer optimization |
| **Governance** | Budgets and alerts, approval workflows for expensive resources, cost anomaly detection |
| **Architecture** | Serverless for intermittent workloads, graviton/ARM instances, S3 lifecycle policies, auto-scaling, caching layers |

### Infrastructure as Code
- **Terraform**: Provider configuration, module design for cloud resources, state management, import existing resources
- **CloudFormation / CDK**: Native AWS IaC, CDK constructs, nested stacks, custom resources
- **Pulumi**: Multi-cloud IaC in general-purpose languages, component resources, policy-as-code

## AI-First Practices

Cloud engineering involves extensive configuration, security review, and cost analysis — all areas where AI provides significant leverage.

### IaC Generation & Review
- Use AI to generate Terraform/CloudFormation from architecture descriptions or diagrams
- Generate cloud resource configurations with security best practices baked in
- Review IaC for security issues: overly permissive IAM policies, public S3 buckets, unencrypted resources
- Convert between IaC formats (CloudFormation to Terraform, single-cloud to multi-cloud)

### Cost Analysis & Optimization
- Feed AWS Cost Explorer / Azure Cost Management data to AI for anomaly identification
- Generate cost optimization recommendations based on usage patterns
- Use AI to estimate costs for proposed architectures before deployment
- Generate reserved instance / savings plan recommendations from usage data

### Security Policy Review
- Analyze IAM policies for least-privilege violations and suggest tighter permissions
- Review security group rules for unnecessary exposure
- Generate compliance reports mapping cloud configurations to CIS/SOC2/HIPAA controls
- Audit CloudTrail/Activity Logs for suspicious patterns

### Architecture Design
- Generate architecture diagrams and documentation from existing infrastructure
- Use AI to review architecture designs against Well-Architected Framework pillars
- Generate disaster recovery runbooks from architecture documentation
- Create migration plans with dependency analysis and phasing recommendations

### Troubleshooting
- Analyze CloudWatch/Monitor logs and metrics for root cause identification
- Generate troubleshooting guides for common cloud issues (connectivity, permissions, performance)
- Draft incident responses for cloud-specific failure modes (AZ outage, service degradation, API throttling)

## How They Collaborate

- **DevOps Engineers**: Cloud engineers design the infrastructure architecture, DevOps engineers automate the deployment of applications onto it
- **SRE**: Partners on reliability — cloud engineers ensure infrastructure resilience, SRE defines reliability targets and monitors service health
- **Platform Engineers**: Cloud engineers provide the cloud primitives that platform engineers abstract into self-service offerings
- **Security Engineers**: Close partners on cloud security — shared responsibility for IAM, encryption, network security, and compliance
- **Data Engineers**: Provisions and optimizes cloud data infrastructure (data warehouses, streaming services, storage)
- **Finance / FinOps**: Partners on cost management, forecasting, and optimization initiatives
- **Engineering Managers / CTO**: Advises on cloud strategy, vendor relationships, and infrastructure investment decisions

## Hiring Signals

### Green Flags
- Can explain architectural decisions in terms of business tradeoffs (cost, reliability, performance, operational complexity)
- Talks about security as a design principle, not an afterthought
- Has strong opinions on cost optimization and can describe savings they've achieved
- Understands networking deeply — can troubleshoot connectivity issues from first principles
- Can explain the shared responsibility model and its implications
- Has experience with at least one cloud provider at depth and can learn others (T-shaped knowledge)
- Talks about Well-Architected Framework reviews as a regular practice
- Can describe disaster recovery architectures with specific RPO/RTO targets

### Red Flags
- Console-only operators who can't reproduce infrastructure from code
- Treats cloud services as magic — can't explain how they work or when they fail
- No cost awareness — provisions resources without understanding the bill
- Overly permissive IAM as a default ("just give it admin, we'll fix it later")
- Can't explain networking fundamentals (routing, DNS, load balancing, firewalls)
- Multi-cloud for the sake of multi-cloud without clear business justification
- No disaster recovery testing — "we have backups" but has never restored from them
- Resume-driven architecture — picks services for career growth rather than problem fit

## Growth Path

| Level | Markers |
|-------|---------|
| **Junior** | Provisions resources following established patterns, manages basic networking, writes simple IaC, monitors cloud costs for their services |
| **Mid** | Designs cloud architectures for services, implements security best practices, optimizes costs, handles cloud networking for multi-service environments, manages IAM for teams |
| **Senior** | Architects multi-account/multi-region solutions, designs disaster recovery strategies, leads cloud migration projects, mentors on cloud security, drives significant cost optimization |
| **Staff** | Defines org-wide cloud architecture standards, designs landing zones, establishes cloud governance frameworks, drives FinOps maturity, evaluates cloud provider roadmaps against org strategy |
| **Principal** | Sets cloud strategy for the organization, negotiates enterprise agreements with cloud providers, architects hybrid/multi-cloud solutions at organizational scale, influences cloud provider feature development |

## Essential Reading

For books, articles, courses, and open-source projects to study, see [references.md](references.md).

