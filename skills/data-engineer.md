# Data Engineer

> The engineer who builds the infrastructure that turns raw data into reliable, queryable, governed assets — ensuring every analyst, data scientist, and ML model has data they can trust, when they need it, at the grain they need it.

## What Elite Looks Like

A staff-level data engineer doesn't just build pipelines — they design data platforms. They think about data as a product with contracts, SLAs, and documentation. They model data for both analytical performance and business semantics, choose between batch and streaming based on actual latency requirements (not hype), and build quality checks that catch problems before downstream consumers do.

What separates elite from competent:
- **Data modeling rigor**: Understands dimensional modeling (Kimball), Data Vault 2.0, and wide/OBT approaches — chooses based on use case, not fashion
- **Pipeline architecture**: Designs for idempotency, replayability, and fault tolerance. Every pipeline can be re-run without side effects
- **Data quality as code**: Builds quality checks into pipelines, not as an afterthought. Uses frameworks like Great Expectations, dbt tests, or Soda to enforce contracts
- **Cost-aware design**: Understands the cost implications of full table scans, materialization strategies, partition pruning, and storage formats
- **Schema evolution discipline**: Designs for change — backward-compatible schema evolution, versioned data contracts, and migration strategies
- **Batch/streaming spectrum**: Treats batch and streaming as a continuum, choosing the right latency/cost/complexity tradeoff for each use case
- **Data governance integration**: Builds lineage, cataloging, and access controls into the platform rather than documenting them in spreadsheets

## Core Responsibilities

- Design and implement data pipelines (ETL/ELT) for batch and real-time processing
- Build and maintain data warehouse and data lakehouse architectures
- Implement data modeling strategies appropriate to business needs and query patterns
- Build and manage data orchestration (Airflow, Dagster, Prefect)
- Implement data quality frameworks with automated testing and alerting
- Design and manage streaming data infrastructure (Kafka, Flink, Kinesis)
- Manage data storage optimization: partitioning, clustering, materialization strategies, file formats
- Implement data governance: lineage tracking, cataloging, access controls, PII management
- Build and maintain dbt projects with testing, documentation, and CI/CD
- Design data contracts between producers and consumers
- Optimize query performance and warehouse costs
- Support data scientists and analysts with reliable, well-documented data assets

## Key Skills & Tools

### Data Warehousing & Lakehouse

| Tool | Key Competencies |
|------|-----------------|
| **Snowflake** | Warehouse sizing, virtual warehouses, time travel, data sharing, streams and tasks, materialized views, micro-partitioning, cost optimization (auto-suspend, resource monitors) |
| **BigQuery** | Slot management, partitioning/clustering, materialized views, BI Engine, federated queries, BigLake, cost control (on-demand vs. flat-rate) |
| **Redshift** | Distribution styles (KEY, EVEN, ALL), sort keys, WLM (Workload Management), Redshift Spectrum, RA3 nodes, AQUA |
| **Databricks** | Delta Lake, Unity Catalog, medallion architecture (bronze/silver/gold), photon engine, Delta Live Tables, MLflow integration |

### Data Modeling

| Approach | When to Use |
|----------|------------|
| **Kimball Dimensional** | Business-user-facing analytics, BI dashboards, when business processes are well-defined. Star schemas, slowly changing dimensions (SCD Type 1/2/3), conformed dimensions |
| **Data Vault 2.0** | Enterprise data integration, auditability requirements, when source systems change frequently. Hubs, links, satellites, point-in-time tables |
| **One Big Table (OBT)** | Simple analytics, single-domain use cases, modern columnar warehouses that handle wide tables efficiently |
| **Activity Schema** | Event-centric modeling, behavioral analytics, flexible ad-hoc analysis |

### Transformation & Orchestration

| Tool | Key Competencies |
|------|-----------------|
| **dbt** | Model design (staging → intermediate → marts), testing (schema, data, custom), documentation, incremental models, snapshots, macros, packages, CI/CD (dbt Cloud or dbt-core in pipelines) |
| **Apache Airflow** | DAG design, custom operators, XComs, connection management, pools, SLA monitoring, task dependencies, dynamic DAG generation |
| **Dagster** | Software-defined assets, IO managers, resources, sensors, schedules, asset materialization, partitions, type checking |
| **Prefect** | Flow orchestration, task caching, retries, notifications, deployment management |

### Streaming

| Tool | Key Competencies |
|------|-----------------|
| **Apache Kafka** | Topic design, partitioning strategies, consumer groups, exactly-once semantics, Schema Registry, Kafka Connect, retention policies, cluster management |
| **Apache Flink** | Stream/batch unification, windowing (tumbling, sliding, session), state management, checkpointing, watermarks, event-time processing |
| **Kafka Streams / ksqlDB** | Lightweight stream processing, KTables, joins, aggregations, interactive queries |

### Data Quality & Governance

| Tool | Key Competencies |
|------|-----------------|
| **Great Expectations** | Expectation suites, data docs, checkpoints, custom expectations, integration with Airflow/dbt |
| **dbt Tests** | Schema tests (unique, not_null, accepted_values, relationships), custom data tests, freshness checks |
| **Soda** | SodaCL checks, anomaly detection, schema evolution monitoring, distribution checks |
| **Data Catalogs** | Datahub, Amundsen, or Atlan for discovery, lineage, and documentation |

## AI-First Practices

Data engineering is pattern-heavy and involves massive amounts of SQL, configuration, and schema work — making it one of the most AI-augmentable engineering disciplines.

### Pipeline Code Generation
- Use AI to generate dbt models from source system documentation or raw table schemas
- Generate Airflow DAGs from pipeline descriptions with proper error handling and retries
- Create Kafka producer/consumer boilerplate with schema validation
- Generate incremental model logic from full-refresh models

### SQL Optimization
- Feed slow queries and execution plans to AI for optimization recommendations
- Generate partition and clustering strategies based on query patterns
- Use AI to rewrite correlated subqueries, identify missing indexes, and suggest materialization strategies
- Convert between SQL dialects (Snowflake SQL to BigQuery SQL, etc.)

### Data Quality Rule Generation
- Generate Great Expectations suites from data profiling results
- Use AI to suggest dbt tests based on column names, types, and business context
- Create data contract definitions from existing pipeline behavior
- Generate anomaly detection thresholds from historical data patterns

### Schema Design & Migration
- Generate dimensional models from business process descriptions
- Create SCD Type 2 implementation from existing Type 1 tables
- Generate migration scripts for schema evolution with backward compatibility
- Produce data dictionary documentation from schema definitions and sample data

### Documentation
- Generate dbt model documentation from SQL logic and column lineage
- Create data pipeline architecture diagrams from code analysis
- Produce consumer-facing data catalog entries from technical metadata
- Generate onboarding guides for data consumers from existing data assets

## How They Collaborate

- **Data Analysts / BI Engineers**: Primary consumers — data engineers build the reliable, well-modeled data assets that analysts query and visualize
- **Data Scientists / ML Engineers**: Provides feature engineering pipelines, training data sets, and feature stores that feed ML models
- **Software Engineers**: Partners on data capture — ensures application databases emit events and maintain schemas that data pipelines can consume
- **Platform Engineers**: Data engineers consume platform capabilities; platform engineers may build self-service data infrastructure
- **SRE**: Partners on data pipeline reliability — SLOs for data freshness, completeness, and quality
- **Product Managers**: Translates data requirements into pipeline specifications, ensures data assets support product analytics
- **Compliance / Legal**: Implements PII handling, data retention policies, access controls, and audit trails

## Hiring Signals

### Green Flags
- Can discuss data modeling tradeoffs — when to denormalize, when SCD Type 2 matters, when to use Data Vault vs. Kimball
- Talks about data quality as a first-class concern with specific tools and practices
- Understands the cost model of their data warehouse and has optimized it
- Can explain their pipeline design in terms of idempotency and replayability
- Has opinions on dbt project structure and can defend them
- Understands streaming vs. batch tradeoffs beyond "streaming is faster"
- Talks about data contracts and producer/consumer relationships
- Can describe how they handle schema evolution and backward compatibility

### Red Flags
- Writes SQL without understanding execution plans or cost implications
- No data quality testing — "we spot-check the dashboards"
- One-size-fits-all modeling approach (always star schema, or always OBT)
- Can't explain partitioning and clustering decisions
- Treats orchestration as a cron job — no error handling, retries, or SLA monitoring
- No documentation for data models or pipeline behavior
- Ignores data governance — "we'll add lineage later"
- Builds streaming pipelines when batch would serve the latency requirement at a fraction of the cost

## Growth Path

| Level | Markers |
|-------|---------|
| **Junior** | Writes SQL transformations, maintains existing dbt models, follows established pipeline patterns, writes basic data quality tests |
| **Mid** | Designs data models for new domains, builds orchestration DAGs, implements data quality frameworks, optimizes query performance, manages streaming pipelines |
| **Senior** | Architects data platform components, designs cross-domain data models, leads data governance initiatives, mentors on modeling and pipeline design, owns data warehouse cost optimization |
| **Staff** | Defines org-wide data architecture strategy, designs data mesh/data product frameworks, establishes data quality SLOs, drives data platform evolution, builds self-service data infrastructure |
| **Principal** | Sets the technical vision for data infrastructure, designs data platforms for hundreds of producers and consumers, influences industry data engineering practices, balances data investment against business outcomes |

## RTFM -- Essential Reading

### Books
- **Fundamentals of Data Engineering** (Joe Reis, Matt Housley) -- The modern comprehensive guide to data engineering. Covers the full lifecycle from ingestion to serving. Start here
- **The Data Warehouse Toolkit, 3rd Edition** (Ralph Kimball, Margy Ross) -- The definitive guide to dimensional modeling. Required reading for anyone designing analytical data models
- **Designing Data-Intensive Applications** (Martin Kleppmann) -- The bible for understanding distributed data systems: replication, partitioning, consistency, stream processing. Essential
- **Data Mesh** (Zhamak Dehghani) -- Domain-oriented data architecture. Important for understanding data-as-a-product thinking even if you don't adopt full data mesh
- **Streaming Systems** (Tyler Akidau, Slava Chernyak, Reuven Lax) -- Deep dive into stream processing: windowing, watermarks, triggers, and exactly-once semantics
- **Data Quality Fundamentals** (Barr Moses, Lior Gavish, Molly Vorwerck) -- Data observability and quality engineering practices

### Documentation & Guides
- [dbt Documentation](https://docs.getdbt.com/) -- Official dbt docs covering models, tests, documentation, deployment, and best practices. The "Best Practices" section is essential
- [Apache Airflow Documentation](https://airflow.apache.org/docs/) -- Official Airflow docs. Start with "Concepts" and "Best Practices"
- [Apache Kafka Documentation](https://kafka.apache.org/documentation/) -- Official Kafka docs. The "Design" section is particularly valuable
- [Snowflake Documentation](https://docs.snowflake.com/) -- Official Snowflake docs. The "Performance" and "Cost Management" sections are essential
- [Delta Lake Documentation](https://docs.delta.io/) -- Open-source storage layer for data lakehouses

### Articles & Resources
- [dbt Best Practices](https://docs.getdbt.com/best-practices) -- Official dbt project structure, naming conventions, and modeling best practices
- [Data Engineering Weekly Newsletter](https://www.dataengineeringweekly.com/) -- Curated data engineering articles and news
- [Seattle Data Guy (YouTube & Blog)](https://www.theseattledataguy.com/) -- Practical data engineering content covering pipelines, modeling, and career growth
- [Start Data Engineering](https://www.startdataengineering.com/) -- Hands-on tutorials for building data pipelines with modern tools
- [Kimball Group Design Tips](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/) -- Original dimensional modeling techniques from Ralph Kimball's group

### Courses
- [DataExpert.io (Zach Wilson)](https://www.dataexpert.io/) -- Data engineering bootcamp covering dimensional modeling, Spark, Flink, and Iceberg
- [dbt Learn](https://learn.getdbt.com/) -- Free official dbt courses from dbt Labs
- [Confluent Developer](https://developer.confluent.io/) -- Free Kafka and streaming courses from Confluent

### Open Source Projects to Study
- [dbt-core](https://github.com/dbt-labs/dbt-core) -- The analytics engineering transformation framework
- [Apache Airflow](https://github.com/apache/airflow) -- The standard for workflow orchestration in data engineering
- [Apache Iceberg](https://github.com/apache/iceberg) -- Open table format for huge analytic datasets. The future of data lakehouse
- [Great Expectations](https://github.com/great-expectations/great_expectations) -- Data quality testing and documentation framework
- [Dagster](https://github.com/dagster-io/dagster) -- Software-defined assets and modern orchestration

## References

- Fundamentals of Data Engineering (Joe Reis) -- [fundamentalsofdataengineering.com](https://www.fundamentalsofdataengineering.com/)
- dbt Best Practices -- [docs.getdbt.com/best-practices](https://docs.getdbt.com/best-practices)
- Data Engineering Wiki -- [dataengineering.wiki](https://dataengineering.wiki/)
- progression.fyi -- [progression.fyi](https://progression.fyi/)
- Engineering Ladders -- [github.com/jorgef/engineeringladders](https://github.com/jorgef/engineeringladders)
