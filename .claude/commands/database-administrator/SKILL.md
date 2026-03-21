---
name: database-administrator
description: "Guide to Database Administration — PostgreSQL/MySQL, query optimization, replication, sharding, backup/recovery. Use this skill whenever the user asks about database performance, query tuning, database replication, connection pooling, or DBA practices."
---

# Database Administrator (DBA)

> The engineer who ensures databases are fast, reliable, and secure — designing schemas that model the business correctly, optimizing queries that run in milliseconds instead of minutes, and building replication and backup strategies that mean data is never lost.

## What Elite Looks Like

A staff-level DBA doesn't just keep databases running — they design data architectures that scale with the business. They understand query optimization at the execution plan level, design schemas that balance normalization with query performance, and build replication topologies that provide both high availability and disaster recovery. They treat database performance as a continuous practice, not a firefighting exercise.

What separates elite from competent:
- **Query optimization depth**: Reads execution plans like prose. Understands index selection, join algorithms, sort strategies, and the optimizer's cost model. Knows when the optimizer is wrong and how to guide it
- **Schema design judgment**: Balances normalization principles with practical query performance. Understands when to denormalize, when to add computed columns, and when to restructure tables entirely
- **Indexing strategy**: Designs indexes for workload patterns, not individual queries. Understands composite index ordering, covering indexes, partial indexes, and the write-cost of over-indexing
- **Replication architecture**: Designs for the specific HA/DR requirements — synchronous vs. asynchronous, single-primary vs. multi-primary, read replicas for scaling reads, and the consistency tradeoffs of each
- **Migration discipline**: Plans and executes schema migrations with zero downtime. Understands backward-compatible migrations, expand-contract patterns, and the operational complexity of large table alterations
- **Capacity and cost modeling**: Predicts storage growth, connection needs, and compute requirements from workload analysis — provisions proactively, not reactively
- **Security-first data management**: Implements encryption, access controls, audit logging, and data masking as foundational practices, not afterthoughts

## Core Responsibilities

- Design and maintain database schemas that model business domains correctly and perform well
- Optimize query performance through indexing, query rewriting, and schema improvements
- Build and manage replication topologies for high availability and disaster recovery
- Implement and test backup and recovery procedures (and actually restore from backups regularly)
- Plan and execute schema migrations with minimal or zero downtime
- Manage database security: access controls, encryption at rest and in transit, audit logging
- Monitor database performance: query latency, connection utilization, lock contention, replication lag
- Implement connection pooling and manage connection lifecycle
- Plan capacity based on growth projections and workload analysis
- Evaluate and recommend database technologies for new workloads
- Manage database upgrades (major version upgrades, patch management)
- Build and maintain database-related automation: provisioning, configuration management, health checks

## Key Skills & Tools

### Database Systems

| System | Key Competencies |
|--------|-----------------|
| **PostgreSQL** | MVCC internals, TOAST storage, table partitioning (declarative), logical replication, pg_stat_statements, EXPLAIN ANALYZE, CTEs and window functions, JSONB operations, extensions (pg_stat_kcache, pg_repack, pgvector), vacuuming and autovacuum tuning |
| **MySQL / MariaDB** | InnoDB internals (buffer pool, doublewrite buffer, redo/undo logs), replication (GTID-based, group replication), query optimizer hints, partitioning, Performance Schema, sys schema, pt-tools (Percona Toolkit) |
| **SQL Server** | Execution plans, columnstore indexes, Always On availability groups, Query Store, dynamic management views (DMVs), tempdb optimization, in-memory OLTP |
| **MongoDB** | Document modeling, aggregation framework, sharding strategies (hashed, ranged), replica sets, WiredTiger storage engine, change streams, Atlas configuration |

### Query Optimization

| Technique | When to Apply |
|-----------|--------------|
| **Execution plan analysis** | Always. Read the plan before optimizing. Understand sequential scans vs. index scans, nested loops vs. hash joins vs. merge joins, sort operations |
| **Index optimization** | When queries scan too many rows. Composite index column ordering (equality → range → sort), covering indexes (include columns), partial indexes (WHERE clauses), expression indexes |
| **Query rewriting** | When the optimizer chooses suboptimal plans. Replace correlated subqueries with JOINs, use CTEs for readability (but understand CTE materialization), leverage window functions |
| **Statistics and hints** | When the optimizer's estimates are wrong. Update statistics, adjust work_mem/sort_buffer, use query hints sparingly |
| **Partitioning** | When tables grow beyond effective index management. Range partitioning for time-series, list partitioning for categorical data, hash partitioning for even distribution |

### Replication & High Availability

| Topology | Use Case |
|----------|---------|
| **Streaming replication (sync)** | Zero data loss requirement. Higher write latency due to synchronous commit |
| **Streaming replication (async)** | Read scaling and DR. Accepts small replication lag and potential data loss on failover |
| **Logical replication** | Selective replication, cross-version replication, data integration between different database versions |
| **Multi-primary** | Write scaling in specific patterns. Conflict resolution complexity. Galera (MySQL), BDR (PostgreSQL) |
| **Patroni / Orchestrator** | Automated failover management for PostgreSQL (Patroni) and MySQL (Orchestrator). Health checking, leader election, switchover |

### Backup & Recovery

| Strategy | Implementation |
|----------|---------------|
| **Physical backups** | pg_basebackup, Barman, pgBackRest (PostgreSQL); Percona XtraBackup (MySQL). Full + incremental, compression, encryption |
| **Logical backups** | pg_dump / mysqldump for schema-level backups. Slower but portable and granular |
| **Point-in-time recovery (PITR)** | WAL archiving (PostgreSQL), binary log archiving (MySQL). Restore to any point in time within retention |
| **Testing** | Regular restore drills. Measure RTO (Recovery Time Objective). Automated restore verification |
| **Retention policies** | Define RPO/RTO, implement tiered storage (hot/warm/cold), comply with data retention regulations |

### Connection Management

| Tool | Key Competencies |
|------|-----------------|
| **PgBouncer** | Transaction-mode pooling, session-mode pooling, configuration tuning, monitoring stats, prepared statement handling |
| **ProxySQL** | MySQL connection pooling, query routing, read/write splitting, query caching, query rules |
| **Application-level pooling** | HikariCP (Java), SQLAlchemy pool (Python), connection lifecycle management, pool sizing formulas |

### Monitoring & Observability

| Domain | Tools & Metrics |
|--------|----------------|
| **Query performance** | pg_stat_statements, Performance Schema, slow query log, query latency percentiles (p50/p95/p99) |
| **Resource utilization** | CPU, memory, disk I/O, connection count, buffer/cache hit ratios |
| **Replication health** | Replication lag, WAL/binlog position, replication state, failover readiness |
| **Lock contention** | pg_stat_activity, pg_locks, InnoDB lock waits, deadlock frequency |
| **Storage** | Table/index bloat, TOAST usage, tablespace growth rate, vacuum progress |
| **Tools** | Prometheus + postgres_exporter/mysqld_exporter, Grafana dashboards, pgwatch2, PMM (Percona Monitoring and Management) |

## AI-First Practices

Database administration involves pattern-heavy tasks like query optimization, index design, and migration scripting — all areas where AI provides significant leverage when combined with DBA expertise.

### Query Optimization
- Feed slow queries and their execution plans to AI for optimization suggestions
- Use AI to identify missing indexes based on query patterns from pg_stat_statements
- Generate query rewrites that preserve semantics while improving performance
- Analyze query patterns across an application to suggest schema denormalization opportunities

### Index Recommendations
- Feed workload analysis data (top queries by time, frequency, and rows) to AI for index suggestions
- Use AI to identify redundant or unused indexes that add write overhead without read benefit
- Generate composite index definitions with optimal column ordering based on query patterns
- Analyze index usage statistics to recommend index consolidation

### Migration Script Generation
- Generate zero-downtime migration scripts from schema change requirements
- Use AI to plan expand-contract migrations for large schema changes
- Generate data migration scripts with proper batching, error handling, and progress tracking
- Review migration scripts for potential locking issues, data loss risks, and backward compatibility

### Schema Review
- Use AI to review schema designs for normalization violations, missing constraints, and naming inconsistencies
- Generate data model documentation from existing schema definitions
- Analyze foreign key relationships and suggest missing referential integrity constraints
- Review JSONB/document column usage for opportunities to promote to proper columns

### Operational Automation
- Generate monitoring queries and alert definitions for common database health metrics
- Create runbooks for common operational procedures (failover, backup restore, vacuum operations)
- Generate database provisioning scripts with proper configuration tuning for workload type
- Produce capacity planning reports from historical growth data

## How They Collaborate

- **Backend Engineers**: Close partners on query design, schema changes, and connection management. DBAs review query patterns and migration plans
- **Data Engineers**: Partners on analytical workloads — DBAs optimize the operational database, data engineers build pipelines that extract from it without impacting production performance
- **SRE**: Partners on database reliability — SLOs for query latency and availability, incident response for database issues, capacity planning
- **Security Engineers**: Partners on database security — encryption, access controls, audit logging, data masking, compliance requirements
- **Cloud Engineers**: Partners on managed database services — RDS/Aurora/Cloud SQL configuration, networking, and cost optimization
- **DevOps Engineers**: Partners on database automation — provisioning, configuration management, backup automation, monitoring integration
- **Product Managers / Analysts**: Translates data requirements into schema designs that support both operational and analytical needs

## Hiring Signals

### Green Flags
- Can read and interpret an execution plan and explain what the optimizer is doing and why
- Has strong opinions on indexing strategies and can explain the tradeoffs of different index types
- Understands replication topologies and can explain consistency tradeoffs
- Has practiced restoring from backup and can describe their recovery testing process
- Talks about schema migrations in terms of zero-downtime strategies and backward compatibility
- Understands connection pooling and can explain when to use transaction vs. session mode
- Can describe how they monitor database health and what metrics they track
- Knows when to use a relational database and when another technology is more appropriate

### Red Flags
- Optimizes queries without reading the execution plan
- Adds indexes for every slow query without considering write impact or workload holistically
- "We've never tested a restore" — backup confidence without verification
- No connection pooling awareness — relies on application connections directly to the database
- Schema changes that require downtime for every migration
- Over-relies on ORM-generated queries without understanding what SQL is being executed
- No monitoring beyond "is the database up" — no query performance tracking, no replication monitoring
- Treats the database as a black box — no understanding of internals (MVCC, buffer management, WAL)

## Growth Path

| Level | Markers |
|-------|---------|
| **Junior** | Writes SQL queries, performs basic index analysis, follows migration patterns established by seniors, monitors dashboards, runs backup procedures |
| **Mid** | Optimizes complex queries, designs schemas for new features, implements replication, plans and executes migrations, tunes database configuration, manages connection pooling |
| **Senior** | Architects database topologies for services, designs sharding strategies, leads major version upgrades, mentors on query optimization, drives performance culture across engineering teams |
| **Staff** | Defines org-wide database standards and architecture patterns, evaluates new database technologies, designs multi-region database architectures, drives database cost optimization, builds self-service database tooling |
| **Principal** | Sets technical vision for data persistence across the organization, designs database platforms for hundreds of services, influences database vendor roadmaps, balances consistency/availability/partition-tolerance tradeoffs at organizational scale |

## RTFM -- Essential Reading

### Books
- **Database Internals** (Alex Petrov) -- Deep dive into how databases work: storage engines, B-trees, LSM-trees, transaction processing, distributed systems. Essential for understanding why databases behave the way they do
- **High Performance MySQL, 4th Edition** (Silvia Botros, Jeremy Tinley) -- The definitive MySQL performance guide. Schema optimization, indexing, query optimization, replication, and operational practices
- **PostgreSQL 14 Internals** (Egor Rogov) -- Deep technical exploration of PostgreSQL internals: processes, memory, vacuum, WAL, indexes, query planning
- **Designing Data-Intensive Applications** (Martin Kleppmann) -- Essential context on distributed data systems, replication, partitioning, and consistency models
- **SQL Performance Explained** (Markus Winand) -- The companion to Use The Index, Luke. Focused, practical SQL performance optimization

### Documentation (Essential)
- [PostgreSQL Official Documentation](https://www.postgresql.org/docs/current/) -- The gold standard of database documentation. The "Performance Tips" and "Indexes" chapters are essential
- [MySQL Reference Manual](https://dev.mysql.com/doc/refman/en/) -- Official MySQL documentation. The "Optimization" chapter is required reading
- [Use The Index, Luke](https://use-the-index-luke.com/) -- Markus Winand's free guide to database indexing and SQL performance. Covers B-tree indexes, execution plans, and join optimization. Possibly the single most valuable free DBA resource
- [PgBouncer Documentation](https://www.pgbouncer.org/) -- Connection pooling for PostgreSQL. Understanding pooling modes is critical
- [Patroni Documentation](https://patroni.readthedocs.io/) -- PostgreSQL HA cluster management with automatic failover

### Articles & Resources
- [Percona Blog](https://www.percona.com/blog/) -- In-depth MySQL and PostgreSQL performance articles from the Percona team
- [PostgreSQL Wiki: Don't Do This](https://wiki.postgresql.org/wiki/Don%27t_Do_This) -- Common PostgreSQL anti-patterns to avoid
- [Cybertec PostgreSQL Blog](https://www.cybertec-postgresql.com/en/blog/) -- Advanced PostgreSQL optimization and internals articles
- [Planet PostgreSQL](https://planet.postgresql.org/) -- Aggregated PostgreSQL blog posts from the community
- [pganalyze Blog](https://pganalyze.com/blog) -- PostgreSQL performance monitoring and optimization articles

### Tools & References
- [pgMustard](https://www.pgmustard.com/) -- Visual PostgreSQL EXPLAIN ANALYZE tool with optimization suggestions
- [explain.depesz.com](https://explain.depesz.com/) -- Free online PostgreSQL execution plan visualizer
- [Percona Toolkit](https://docs.percona.com/percona-toolkit/) -- Essential MySQL command-line tools for query analysis, schema changes, and replication management
- [pg_stat_statements Guide](https://www.postgresql.org/docs/current/pgstatstatements.html) -- The most important PostgreSQL extension for query performance analysis

### Open Source Projects to Study
- [Patroni](https://github.com/patroni/patroni) -- PostgreSQL HA cluster management with automatic failover, REST API, and DCS integration
- [pgBackRest](https://github.com/pgbackrest/pgbackrest) -- Reliable PostgreSQL backup and restore with parallel backup/restore and encryption
- [PgBouncer](https://github.com/pgbouncer/pgbouncer) -- Lightweight PostgreSQL connection pooler
- [pg_repack](https://github.com/reorg/pg_repack) -- Online table reorganization without heavy locking — essential for bloat management
- [Vitess](https://github.com/vitessio/vitess) -- Database clustering for horizontal scaling of MySQL, originally from YouTube

## References

- Use The Index, Luke -- [use-the-index-luke.com](https://use-the-index-luke.com/)
- PostgreSQL Documentation -- [postgresql.org/docs](https://www.postgresql.org/docs/current/)
- Percona -- [percona.com](https://www.percona.com/)
- progression.fyi -- [progression.fyi](https://progression.fyi/)
- Engineering Ladders -- [github.com/jorgef/engineeringladders](https://github.com/jorgef/engineeringladders)
