---
name: embedded-engineer
description: "Guide to Embedded Engineering — C/C++/Rust, RTOS, hardware protocols, power management, OTA updates. Use this skill whenever the user asks about embedded systems, firmware development, RTOS, hardware interfaces (SPI/I2C/UART), or IoT device programming."
disable-model-invocation: true
---

# Embedded Engineer
> The engineer who writes software that touches hardware, where every byte of RAM and every microsecond of latency is a design decision.

## What Elite Looks Like

An elite embedded engineer lives at the boundary between software and physics. They write code that runs on processors with kilobytes of memory, communicates over protocols measured in megabits, and must operate reliably for years without a reboot. They understand that in embedded systems, "it works" is the beginning of the conversation, not the end. The real questions are: Does it work at -40C? Does it work when the power supply droops? Does it work after 10 years of continuous operation? Does it work when a cosmic ray flips a bit?

They read datasheets the way web developers read API documentation — fluently and skeptically. They know that the datasheet describes ideal behavior and that real hardware has errata, timing variations, and undocumented quirks. They own an oscilloscope and know how to use it.

Elite embedded engineers think in constraints. Every line of code must justify its RAM footprint, its flash footprint, its execution time, and its power consumption. They understand that an embedded system is not a slow computer — it is a different kind of machine with different rules, different failure modes, and different performance profiles.

They bridge the gap between hardware and software teams, reading schematics, understanding PCB layout implications, and participating in hardware design reviews to prevent problems that no amount of firmware can fix.

## Core Responsibilities

- **Firmware development** — Write bare-metal or RTOS-based firmware in C, C++, or Rust. Implement device drivers, interrupt handlers, DMA configurations, and peripheral initialization. Write code that is correct, deterministic, and fits in constrained memory.
- **Communication protocols** — Implement and debug hardware protocols (SPI, I2C, UART, CAN, USB) and wireless protocols (BLE, Wi-Fi, LoRa, Zigbee, Thread/Matter). Understand timing requirements, bus arbitration, error detection, and recovery.
- **RTOS and scheduling** — Configure and use real-time operating systems (FreeRTOS, Zephyr, ThreadX, NuttX). Design task priorities, manage inter-task communication (queues, semaphores, mutexes), and avoid priority inversion and deadlocks.
- **Power management** — Design software that minimizes power consumption: sleep modes, clock gating, peripheral power control, duty-cycling, and wake-on-event strategies. Profile power consumption and optimize for battery-operated products.
- **Hardware debugging** — Use oscilloscopes, logic analyzers, JTAG/SWD debuggers, and protocol analyzers to diagnose hardware-software integration issues. Read schematics to understand pin assignments, voltage levels, and signal routing.
- **Bootloaders and OTA updates** — Implement secure bootloaders with firmware validation, A/B partition schemes, rollback capabilities, and over-the-air update mechanisms. Ensure that a failed update never bricks a device.
- **Safety-critical systems** — For automotive (ISO 26262), medical (IEC 62304), aviation (DO-178C), or industrial (IEC 61508) applications, follow rigorous development processes: formal requirements, code coverage analysis, static analysis, and traceability matrices.
- **Board bring-up** — Take a new PCB from first power-on to running application code. Verify power rails, clock configurations, peripheral connectivity, and memory interfaces. Document the bring-up process for reproducibility.

## Key Skills & Tools

| Category | Technologies & Concepts |
|---|---|
| Languages | C (C11/C17), C++ (modern C++17/20 subset), Rust (embedded Rust with `no_std`), Assembly (ARM, RISC-V) |
| RTOS | FreeRTOS, Zephyr, ThreadX/Azure RTOS, NuttX, RT-Thread |
| Processors | ARM Cortex-M (M0/M3/M4/M7/M33), ARM Cortex-A, RISC-V, ESP32, Nordic nRF, STM32, NXP |
| Protocols | SPI, I2C, UART, CAN/CAN FD, USB, Ethernet, BLE, Wi-Fi, LoRa, Thread/Matter, Modbus |
| Build Systems | CMake, Make, Zephyr west, PlatformIO, Meson, Bazel |
| Debugging | JTAG/SWD (Segger J-Link, ST-Link), GDB, OpenOCD, oscilloscope, logic analyzer (Saleae), protocol analyzer |
| IDE/Editors | VS Code + Cortex-Debug, STM32CubeIDE, Segger Embedded Studio, CLion |
| Static Analysis | Coverity, PC-lint/FlexeLint, cppcheck, clang-tidy, MISRA-C checkers |
| Testing | Unity (C test framework), CppUTest, CMock, Hardware-in-the-Loop (HIL), Renode (emulation) |
| Version Control | Git (with submodules for vendor HALs), binary artifact management |
| Power Profiling | Nordic Power Profiler Kit, Joulescope, Otii Arc |

## AI-First Practices

Embedded engineering has unique AI integration challenges — you cannot run AI models on your target hardware — but AI dramatically accelerates firmware development on the host side.

- **Protocol implementation with Claude Code** — Use AI to generate driver scaffolding for communication protocols (SPI flash drivers, I2C sensor interfaces, CAN message parsing). Provide the datasheet register map and timing diagrams; AI generates the register definitions, initialization sequences, and read/write functions. Always verify against the datasheet and test on hardware.
- **Test harness generation** — Generate unit test scaffolds for firmware modules, including mock implementations for hardware abstraction layers. AI excels at producing the boilerplate of embedded test frameworks (Unity, CppUTest) while the engineer defines the meaningful test cases.
- **Documentation of hardware interfaces** — Use AI to generate documentation from register maps, pin configurations, and protocol implementations. Feed schematic excerpts to multimodal AI for circuit analysis and documentation.
- **MISRA-C compliance assistance** — Use AI to review code for MISRA-C/C++ violations and generate compliant alternatives. AI can explain why specific MISRA rules exist and suggest refactoring patterns.
- **State machine generation** — Describe device behavior as states and transitions; use AI to generate state machine implementations with proper error handling, timeout management, and logging.
- **Datasheet interpretation** — Feed relevant datasheet sections to AI for summarization and extraction of critical parameters: timing constraints, power consumption figures, register configurations. Cross-reference AI summaries with the original datasheet.
- **Build system configuration** — Generate CMake files, linker scripts, and toolchain configurations for new targets. AI handles the boilerplate; the engineer verifies memory layout and optimization flags.

Critical caveat: embedded code generated by AI must be verified against hardware. AI has no access to your physical system and may generate code that is syntactically correct but violates timing constraints, exceeds memory budgets, or triggers hardware errata.

## How They Collaborate

- **With hardware engineers** — Review schematics and PCB layouts before fabrication. Identify pin conflicts, missing pull-ups/pull-downs, inadequate decoupling, and debug access points. Participate in design reviews as a firmware perspective. Coordinate on bring-up when new boards arrive.
- **With mechanical engineers** — Provide thermal constraints for component placement, antenna clearance requirements, and button/LED placement feedback. Thermal management directly affects firmware (thermal throttling, fan control).
- **With cloud/backend engineers** — Define device-to-cloud communication protocols, data formats, and telemetry schemas. Coordinate on OTA update infrastructure, device provisioning, and fleet management APIs.
- **With test/QA engineers** — Design hardware-in-the-loop (HIL) test fixtures. Define automated test protocols for production testing. Create debug interfaces that enable efficient quality verification.
- **With safety/compliance engineers** — Collaborate on regulatory compliance (FCC, CE, UL) and functional safety standards (ISO 26262, IEC 62304). Provide evidence of code quality through static analysis, code coverage, and requirements traceability.

## Hiring Signals

### Green Flags
- Can read a schematic and identify potential firmware implications (pull-ups, clock sources, power sequencing)
- Has debugged a timing issue using an oscilloscope or logic analyzer
- Understands interrupt priorities, latency, and the consequences of doing too much work in an ISR
- Can explain memory layout (stack, heap, .text, .bss, .data) and has dealt with memory constraints
- Has implemented a communication protocol from a datasheet (not just used a library)
- Understands power management modes and has optimized firmware for battery life
- Has experience with bootloaders and OTA update mechanisms
- Can write C code that is correct under strict aliasing rules and handles volatile properly

### Red Flags
- Cannot explain the difference between bare-metal and RTOS-based development
- Has never used a hardware debugger (JTAG/SWD)
- Relies entirely on HAL libraries without understanding what they abstract
- Cannot reason about stack size, heap fragmentation, or memory-mapped I/O
- Has no experience with real hardware — only simulators
- Does not understand interrupt context vs. task context
- Treats embedded C like application-level C (dynamic allocation everywhere, no resource constraints)

## Growth Path

| Level | Focus | Scope | Expectations |
|---|---|---|---|
| **Junior** | Learn the hardware-software interface | Single peripherals | Write basic drivers, understand GPIO/UART/SPI, use a debugger, read datasheets, write simple interrupt handlers |
| **Mid** | Own subsystems | Complete subsystems | Design driver architectures, implement communication stacks, manage RTOS tasks, handle power modes, write unit tests, bring up new peripherals |
| **Senior** | Drive firmware architecture | Full product firmware | Architect firmware for a product, design bootloader and OTA systems, establish coding standards, lead hardware-firmware co-design, optimize for power/performance/size, mentor juniors |
| **Staff** | Set platform direction | Org-wide | Define the firmware platform strategy (RTOS choice, HAL design, build system), establish safety/quality processes, drive hardware-software co-design across product lines, own embedded developer tooling |
| **Principal** | Shape embedded engineering practice | Company-wide / industry | Define the company's embedded technology roadmap, evaluate new processor architectures, establish embedded Rust adoption strategy, influence vendor relationships, contribute to standards bodies |

## Essential Reading

For books, articles, courses, and open-source projects to study, see [references.md](references.md).
