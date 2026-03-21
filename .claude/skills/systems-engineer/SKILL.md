---
name: systems-engineer
description: "Guide to Systems Engineering — Linux internals, networking, concurrency, memory management, distributed consensus. Use this skill whenever the user asks about systems programming, OS internals, low-level networking, kernel development, or performance at the systems level."
disable-model-invocation: true
---

# Systems Engineer
> The engineer who operates at the metal level, building the infrastructure that all other software depends on.

## What Elite Looks Like

An elite systems engineer understands what happens between a programmer's intent and the hardware's execution. They know how a process gets scheduled, how a packet traverses the network stack, how memory pages are allocated and reclaimed, and how a file system decides where to put bytes on disk. They do not treat the operating system as a black box — they read its source code.

They think in terms of invariants, resource limits, and failure domains. Where an application engineer asks "does it work?", a systems engineer asks "under what conditions does it fail, and what happens when it does?" They design systems that are correct under concurrency, efficient under load, and predictable under pressure.

Elite systems engineers are comfortable reasoning about code at multiple levels of abstraction simultaneously: the user-space application, the system call interface, the kernel implementation, and the hardware behavior. This vertical understanding allows them to diagnose problems that are invisible to engineers who operate at a single layer.

They are the engineers who get called when a production system is exhibiting behavior that nobody can explain. They are the ones who read `perf` output, interpret `ftrace` logs, understand `vmstat` columns, and know why the OOM killer chose that particular process.

## Core Responsibilities

- **Operating system internals** — Understand process management, virtual memory, file systems, I/O scheduling, signal handling, and the system call interface. Contribute to kernel modules, device drivers, or OS-level tooling when needed.
- **Networking** — Implement and optimize network-level systems: TCP/IP stack tuning, socket programming, DNS resolution, load balancing, proxy implementations, and network protocol design. Understand the path of a packet from user-space to the wire.
- **Concurrency and parallelism** — Design lock-free data structures, implement synchronization primitives, reason about memory ordering, and build systems that scale across cores. Understand the difference between concurrency (interleaving) and parallelism (simultaneous execution) and choose the right model.
- **Memory management** — Design custom allocators, understand page tables and TLB behavior, diagnose memory fragmentation, implement memory-efficient data structures, and reason about cache behavior (L1/L2/L3, cache lines, false sharing).
- **Performance engineering** — Profile systems at every level: CPU (instruction-level, branch prediction, pipeline stalls), memory (cache misses, page faults, NUMA effects), I/O (disk IOPS, network throughput), and kernel (context switches, system call overhead). Use profiling data to make targeted optimizations.
- **Distributed systems** — Implement consensus protocols, design consistent hashing schemes, build leader election mechanisms, reason about network partitions, and implement distributed coordination primitives. Understand the theoretical foundations (FLP impossibility, CAP theorem, CRDTs).
- **Compiler and language runtime internals** — Understand compilation pipelines, optimization passes, garbage collection algorithms, JIT compilation, and how language-level abstractions map to machine code.
- **Reliability and fault tolerance** — Design systems that handle hardware failures, software crashes, network partitions, and resource exhaustion gracefully. Implement watchdogs, health checks, circuit breakers, and recovery procedures.

## Key Skills & Tools

| Category | Technologies & Concepts |
|---|---|
| Languages | C, Rust, Go, C++, Python (for tooling), Assembly (x86-64, ARM64) |
| Operating Systems | Linux kernel internals, FreeBSD, container runtimes (cgroups, namespaces), eBPF |
| Networking | TCP/IP, UDP, QUIC, DNS, BGP, iptables/nftables, XDP, DPDK, socket programming |
| Concurrency | pthreads, futexes, lock-free algorithms, memory ordering (acquire/release), async I/O (io_uring, epoll, kqueue) |
| Distributed Systems | Raft, Paxos, CRDTs, consistent hashing, vector clocks, gossip protocols |
| Profiling | `perf`, `ftrace`, `bpftrace`, Flamegraphs, `valgrind`, `cachegrind`, `strace`, `ltrace` |
| Memory | Custom allocators (jemalloc, tcmalloc, mimalloc), mmap, hugepages, NUMA-aware allocation |
| Build Systems | CMake, Meson, Bazel, Cargo, autotools |
| Virtualization | KVM, QEMU, containers (OCI runtime), hypervisors, unikernels |
| Storage | File systems (ext4, XFS, ZFS, Btrfs), block devices, NVMe, io_uring, direct I/O |
| Testing | Fuzzing (AFL++, libFuzzer, cargo-fuzz), property-based testing, Jepsen, deterministic simulation |

## AI-First Practices

Systems engineering involves code that is unforgiving of subtle errors — a race condition, a memory ordering bug, or an off-by-one in a kernel module can crash machines or corrupt data. AI is valuable here as an accelerator and reviewer, but never as an unsupervised author.

- **Systems code analysis with Claude Code** — Feed complex systems code (lock-free data structures, protocol implementations, memory allocators) to AI for review. AI excels at spotting common patterns of error: missing memory barriers, ABA problems, incorrect use of `volatile` or `atomic`, and resource leaks.
- **Concurrency bug detection** — Describe a concurrent system's design (tasks, shared state, synchronization primitives) and ask AI to identify potential race conditions, deadlocks, priority inversions, and livelock scenarios. Use this as a complement to tools like ThreadSanitizer.
- **Performance optimization scripts** — Generate `perf` analysis scripts, `bpftrace` programs, and eBPF tracing code. AI can produce the boilerplate for tracing tools while the engineer defines what to measure and interprets the results.
- **Protocol implementation** — Use AI to generate initial implementations of well-documented protocols (DNS resolver, HTTP/2 parser, TLS handshake). The engineer validates correctness against the RFC and tests against edge cases.
- **Documentation and explanation** — Systems code is often poorly documented because the domain experts who write it find it obvious. AI can generate comprehensive documentation from dense systems code, explaining memory ordering decisions, synchronization strategies, and failure handling.
- **Test generation for systems code** — Generate fuzz harnesses, property-based tests, and stress tests for systems components. AI is effective at producing the scaffolding; the engineer defines the invariants being tested.
- **Architecture exploration** — Use AI to compare approaches to a systems problem (polling vs. event-driven, mmap vs. read/write, user-space vs. kernel-space) with detailed tradeoff analysis.

Absolute rule: AI-generated systems code must pass sanitizers (ASan, TSan, MSan, UBSan), fuzz testing, and stress testing before reaching production. The consequences of bugs at this level are too severe for review-only validation.

## How They Collaborate

- **With application engineers** — Provide the abstractions, libraries, and platforms that application engineers build on. When application code is slow, help diagnose whether the bottleneck is in the application, the runtime, the OS, or the hardware.
- **With SRE/Operations** — Collaborate on capacity planning, performance tuning, and incident response. Provide the deep system knowledge needed to diagnose production issues that defy application-level investigation.
- **With security engineers** — Implement low-level security mechanisms: sandboxing, privilege separation, secure memory handling, and cryptographic primitive integration. Review security boundaries for escape vectors.
- **With hardware engineers** — Understand hardware capabilities and limitations. Provide feedback on hardware designs from a software perspective. Write device drivers and firmware interfaces.
- **With distributed systems architects** — Implement the consensus protocols, coordination primitives, and networking layers that distributed architectures depend on.

## Hiring Signals

### Green Flags
- Can explain the lifecycle of a system call from user-space through the kernel to hardware and back
- Has debugged a production performance issue using `perf`, `strace`, or eBPF tooling
- Understands memory ordering models and can explain why a lock-free algorithm needs specific barriers
- Can reason about cache behavior: cache lines, false sharing, prefetching, and their impact on performance
- Has written concurrent code and can explain the specific correctness guarantees of their synchronization choices
- Understands the networking stack from application to wire: sockets, TCP state machine, congestion control, routing
- Has contributed to or deeply studied an OS kernel, database engine, or language runtime

### Red Flags
- Cannot explain what happens during a context switch
- Treats `mutex.lock()` as a magic incantation without understanding its implementation or cost
- Has never used a profiler beyond "time how long it takes"
- Cannot reason about the difference between stack and heap allocation at the hardware level
- Does not understand the difference between physical and virtual memory
- Confuses concurrency with parallelism
- Has no experience reading or writing code below the application layer

## Growth Path

| Level | Focus | Scope | Expectations |
|---|---|---|---|
| **Junior** | Learn the fundamentals of systems programming | Single components | Write correct C/Rust code, understand process/thread lifecycle, use debugging tools (gdb, strace), implement basic data structures, understand system call interface |
| **Mid** | Own subsystems | Major subsystems | Design concurrent data structures, implement network protocols, write performance-critical code, profile and optimize hot paths, understand kernel interfaces, write comprehensive tests |
| **Senior** | Drive system design | Complete systems | Architect storage engines, network stacks, or runtime systems. Establish performance methodology, lead design reviews for systems code, mentor engineers on systems thinking, make technology choices for critical infrastructure |
| **Staff** | Set systems strategy | Org-wide | Define the organization's systems infrastructure direction, drive adoption of new technologies (eBPF, io_uring, Rust), establish performance culture, own the most critical low-level systems, bridge hardware and software team strategies |
| **Principal** | Shape the field | Company-wide / industry | Influence language and OS evolution, publish research on systems topics, define the company's long-term systems architecture, mentor staff engineers, represent the company in standards bodies and open-source foundations |

## Essential Reading

For books, articles, courses, and open-source projects to study, see [references.md](references.md).
