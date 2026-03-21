## RTFM — Essential Reading

### Books
- **Operating Systems: Three Easy Pieces (OSTEP)** by Remzi & Andrea Arpaci-Dusseau — The best OS textbook, freely available at [ostep.org](https://pages.cs.wisc.edu/~remzi/OSTEP/). Covers virtualization, concurrency, and persistence with clarity and depth.
- **Computer Networking: A Top-Down Approach** by Kurose & Ross — Comprehensive networking from application layer to physical layer. The standard university textbook for good reason.
- **Distributed Systems** by Maarten van Steen & Andrew Tanenbaum — Broad coverage of distributed systems concepts: communication, coordination, consistency, replication, and fault tolerance.
- **Linux Kernel Development** by Robert Love — Practical guide to Linux kernel internals: process scheduling, memory management, VFS, and block I/O.
- **Systems Performance** by Brendan Gregg — The definitive guide to systems performance analysis. Covers methodology, tools (perf, BPF, ftrace), and every subsystem.
- **Is Parallel Programming Hard, And If So, What Can You Do About It?** by Paul McKenney — Deep treatment of parallel programming, RCU, and memory ordering. Freely available.
- **The Rust Programming Language** ("The Book") — Essential if pursuing systems programming in Rust.

### Documentation & References
- [Linux kernel documentation](https://www.kernel.org/doc/html/latest/) — Official kernel documentation; especially the memory management, networking, and driver guides
- [Linux man pages (sections 2 and 7)](https://man7.org/linux/man-pages/) — System call interface and concepts; Michael Kerrisk's man pages are exceptionally detailed
- [Intel 64 and IA-32 Architectures Software Developer's Manual](https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html) — The x86 architecture reference
- [ARM Architecture Reference Manual](https://developer.arm.com/documentation/) — The ARM architecture reference
- [RFCs](https://www.rfc-editor.org) — Original protocol specifications (TCP: RFC 9293, DNS: RFC 1035, HTTP/2: RFC 9113, QUIC: RFC 9000)

### Articles & Blogs
- Brendan Gregg's blog ([brendangregg.com](https://www.brendangregg.com)) — Performance analysis methodology, flame graphs, BPF tools
- Julia Evans' blog ([jvns.ca](https://jvns.ca)) — Systems concepts made accessible; networking, Linux, and debugging
- Eli Bendersky's blog ([eli.thegreenplace.net](https://eli.thegreenplace.net)) — Compilers, concurrency, and systems programming
- Dan Luu's blog ([danluu.com](https://danluu.com)) — Hardware, performance, and systems analysis with rigorous methodology
- Marc Brooker's blog ([brooker.co.za](https://brooker.co.za/blog/)) — Distributed systems, formal methods, and AWS systems design
- Mara Bos' work on Rust atomics and locks — Essential for understanding memory ordering in practice

### Courses & Projects
- [MIT 6.824 Distributed Systems](https://pdos.csail.mit.edu/6.824/) — Build Raft, implement a distributed key-value store. The canonical distributed systems course.
- [MIT 6.S081 Operating System Engineering](https://pdos.csail.mit.edu/6.S081/) — Build an OS (xv6) from scratch. Hands-on kernel programming.
- [CMU 15-213 Introduction to Computer Systems](https://www.cs.cmu.edu/~213/) — The course behind CS:APP. Covers data representation, assembly, memory hierarchy, and system-level I/O.
- [Nand2Tetris](https://www.nand2tetris.org) — Build a computer from logic gates to a high-level language; invaluable for full-stack systems understanding.

### Open Source Projects to Study
- [Linux kernel](https://github.com/torvalds/linux) — The scheduler (`kernel/sched/`), memory management (`mm/`), and networking stack (`net/`) are masterclasses in systems design
- [TigerBeetle](https://github.com/tigerbeetledb/tigerbeetle) — Financial transactions database designed for correctness and performance; exemplary systems engineering
- [Tokio](https://github.com/tokio-rs/tokio) — Rust async runtime; study the I/O driver, task scheduler, and synchronization primitives
- [FoundationDB](https://github.com/apple/foundationdb) — Distributed database with deterministic simulation testing; study the testing methodology

## References

- [The Morning Paper](https://blog.acolyer.org) (Adrian Colyer) — Summaries of influential computer science papers, many on systems topics
- [USENIX ;login:](https://www.usenix.org/publications/loginonline) — Systems research and practice from the USENIX community
- [ACM Queue](https://queue.acm.org) — Practice-oriented articles on systems topics from industry practitioners
- [SOSP/OSDI proceedings](https://www.usenix.org/conferences) — Top-tier systems research conferences
- [Jepsen analyses](https://jepsen.io/analyses) — Rigorous correctness testing of distributed systems; essential reading for understanding real-world consistency guarantees
