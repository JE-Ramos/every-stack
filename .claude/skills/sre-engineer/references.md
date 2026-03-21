## RTFM -- Essential Reading

### Books
- **Site Reliability Engineering: How Google Runs Production Systems** (Betsy Beyer, Chris Jones, Jennifer Petoff, Niall Richard Murphy) -- The original SRE book. Chapters on SLOs, error budgets, toil, monitoring, and incident management are foundational. Free at sre.google
- **The Site Reliability Workbook** (Betsy Beyer, Niall Richard Murphy, David Rensin, Kent Kawahara, Stephen Thorne) -- Practical companion to the SRE book with worked examples. The SLO chapter is essential. Free at sre.google
- **Observability Engineering** (Charity Majors, Liz Fong-Jones, George Miranda) -- Defines the shift from monitoring to observability. Core-sampling, high-cardinality data, and asking arbitrary questions about production
- **Implementing Service Level Objectives** (Alex Hidalgo) -- The definitive guide to SLOs, SLIs, and error budgets. Covers both the math and the organizational change management
- **Learning Chaos Engineering** (Russ Miles) -- Practical introduction to chaos engineering principles and practices
- **Incident Management for Operations** (Rob Schnepp, Ron Vidal, Chris Hawley) -- Adapts ICS (Incident Command System) for tech. Structured incident response

### Documentation & Guides
- [Google SRE Books (free online)](https://sre.google/books/) -- All three Google SRE books available free online
- [OpenTelemetry Documentation](https://opentelemetry.io/docs/) -- The vendor-neutral observability standard. Start with "Getting Started" and "Concepts"
- [Prometheus Documentation](https://prometheus.io/docs/) -- PromQL reference, alerting best practices, and architecture
- [PagerDuty Incident Response Guide](https://response.pagerduty.com/) -- Open-source incident response documentation covering roles, severity levels, and communication
- [Grafana SLO Documentation](https://grafana.com/docs/grafana-cloud/alerting-and-irm/slo/) -- Practical SLO implementation in Grafana

### Articles & Resources
- [The SLO Book (Sloth)](https://sloth.dev/) -- Practical SLO implementation with Prometheus, including multi-window/multi-burn-rate alerting
- [How They SRE](https://github.com/upgundecha/howtheysre) -- Collection of real-world SRE practices from companies across the industry
- [Charity Majors' Blog](https://charity.wtf/) -- Foundational writing on observability, on-call health, and engineering culture
- [SRE Weekly Newsletter](https://sreweekly.com/) -- Curated collection of SRE-relevant articles, incident reports, and discussions
- [Google SRE Classroom](https://sre.google/classroom/) -- Training materials from Google's SRE team

### Courses & Community
- [Google Cloud SRE Course](https://www.coursera.org/learn/site-reliability-engineering-slos) -- Coursera course on SLOs by Google Cloud
- [SREcon](https://www.usenix.org/conferences/byname/925) -- Premier SRE conference by USENIX, with recordings freely available
- [ChaosConf](https://www.gremlin.com/chaosconf) -- Conference focused on chaos engineering practices

### Open Source Projects to Study
- [Sloth](https://github.com/slok/sloth) -- SLO generator for Prometheus with multi-window/multi-burn-rate alerting
- [Litmus](https://github.com/litmuschaos/litmus) -- Cloud-native chaos engineering framework for Kubernetes
- [OpenTelemetry Collector](https://github.com/open-telemetry/opentelemetry-collector) -- Vendor-agnostic telemetry collection, processing, and export
- [Pyrra](https://github.com/pyrra-dev/pyrra) -- SLO monitoring and alerting for Prometheus with a UI
- [k6](https://github.com/grafana/k6) -- Modern load testing tool written in Go with JavaScript scripting

## References

- Google SRE Books -- [sre.google/books](https://sre.google/books/)
- DORA Research Program -- [dora.dev](https://dora.dev/)
- How They SRE -- [github.com/upgundecha/howtheysre](https://github.com/upgundecha/howtheysre)
- progression.fyi -- [progression.fyi](https://progression.fyi/)
- Engineering Ladders -- [github.com/jorgef/engineeringladders](https://github.com/jorgef/engineeringladders)
