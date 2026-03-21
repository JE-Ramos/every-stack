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
