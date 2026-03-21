---
name: ai-engineer
description: "Guide to the AI Engineer role — LLM integration, RAG, vector databases, prompt engineering, agent architectures. Use this skill whenever the user asks about AI engineering, building AI-powered products, RAG pipelines, LLM integration, vector search, or agent frameworks like LangChain/LlamaIndex, even if they don't say 'AI engineer' explicitly."
disable-model-invocation: true
---

# AI Engineer

> The engineer who builds products powered by large language models and generative AI — designing RAG architectures, agent systems, and evaluation frameworks that make AI capabilities reliable, safe, and useful in production.

## What Elite Looks Like

A staff-level AI engineer doesn't just call OpenAI's API — they architect AI-native systems that are reliable, evaluable, and safe. They understand that prompt engineering is necessary but insufficient; real production AI systems need retrieval augmentation, structured outputs, evaluation pipelines, guardrails, and observability. They think about failure modes that don't exist in traditional software: hallucination, prompt injection, context window limits, model regression, and alignment drift.

What separates elite from competent:
- **RAG architecture mastery**: Designs retrieval systems that are precise and comprehensive — understands chunking strategies, embedding models, reranking, hybrid search, and the tradeoffs between them
- **Evaluation-driven development**: Builds evaluation frameworks before shipping features. Understands that AI systems can't be tested with unit tests alone — you need eval suites, human annotation, and statistical analysis
- **Agent design discipline**: Builds agent systems with clear tool definitions, error handling, retry logic, and cost controls — not unbounded loops that burn tokens
- **Prompt engineering depth**: Goes beyond basic prompting to structured outputs, chain-of-thought, few-shot selection strategies, and prompt versioning
- **Safety and alignment awareness**: Designs systems with guardrails, content filtering, PII detection, and adversarial input handling as first-class concerns
- **Cost and latency optimization**: Understands the cost/quality/latency tradeoff space — knows when to use smaller models, caching, streaming, and batching
- **Model evaluation literacy**: Can evaluate model outputs beyond vibes — builds rubrics, uses LLM-as-judge patterns, tracks metrics over time

## Core Responsibilities

- Design and implement RAG (Retrieval-Augmented Generation) architectures
- Build and manage vector databases and embedding pipelines
- Develop prompt engineering strategies and maintain prompt libraries
- Build evaluation frameworks for AI system quality, safety, and performance
- Implement AI agent architectures with tool use, planning, and memory
- Design guardrails and safety layers for production AI systems
- Optimize AI system cost, latency, and quality tradeoffs
- Build AI-powered features that integrate into existing products
- Implement structured output parsing and validation
- Design and run human evaluation workflows
- Monitor AI systems in production: quality metrics, cost tracking, latency monitoring
- Stay current with rapidly evolving models, techniques, and best practices

## Key Skills & Tools

### LLM Integration

| Concept | Key Competencies |
|---------|-----------------|
| **API Integration** | OpenAI, Anthropic, Google, and open-source model APIs. Streaming, function calling, structured outputs, vision, token management |
| **Prompt Engineering** | System prompts, few-shot examples, chain-of-thought, self-consistency, prompt chaining, output formatting, XML/JSON structured outputs |
| **Model Selection** | Understanding model capabilities, context windows, pricing, latency. When to use Claude vs. GPT vs. Gemini vs. open-source |
| **Fine-tuning** | When fine-tuning beats prompting, data preparation, evaluation, cost/benefit analysis. LoRA, QLoRA for efficient fine-tuning |

### RAG Architecture

| Component | Key Competencies |
|-----------|-----------------|
| **Document Processing** | Chunking strategies (semantic, recursive, sentence-window), metadata extraction, document parsing (PDF, HTML, code), multimodal document handling |
| **Embedding Models** | Model selection (OpenAI, Cohere, open-source), embedding dimensions/quality tradeoffs, fine-tuning embeddings, cross-encoder reranking |
| **Vector Databases** | Pinecone, Weaviate, Qdrant, pgvector, Chroma. Index types (HNSW, IVF), filtering, hybrid search (vector + keyword), metadata filtering |
| **Retrieval Strategies** | Hybrid search (BM25 + dense retrieval), reranking (Cohere, cross-encoders), query expansion, HyDE (Hypothetical Document Embeddings), parent-child retrieval, multi-query retrieval |
| **Generation** | Context stuffing, citation generation, hallucination mitigation, long-context vs. RAG tradeoffs, grounded generation |

### Agent Architectures

| Pattern | Key Competencies |
|---------|-----------------|
| **Tool Use** | Function/tool definition, parameter validation, error handling, tool selection strategies, tool composition |
| **Planning** | ReAct pattern, plan-and-execute, tree-of-thought, iterative refinement, goal decomposition |
| **Memory** | Conversation history management, long-term memory (vector store), working memory, summary memory |
| **Multi-Agent** | Agent orchestration, handoff patterns, specialized agents, supervisor patterns, human-in-the-loop |
| **Frameworks** | LangChain, LlamaIndex, Anthropic tool use, OpenAI Assistants, CrewAI, AutoGen |

### Evaluation & Safety

| Domain | Key Competencies |
|--------|-----------------|
| **Evaluation Frameworks** | LLM-as-judge, rubric-based scoring, pairwise comparison, reference-based metrics (ROUGE, BLEU), task-specific evaluation, eval dataset curation |
| **Safety** | Prompt injection defense (input/output filtering), PII detection and redaction, content moderation, OWASP LLM Top 10, jailbreak prevention |
| **Guardrails** | Input validation, output validation, token limits, cost caps, rate limiting, fallback responses, human escalation triggers |
| **Observability** | Trace logging (LangSmith, Arize, Langfuse), cost tracking per request, latency monitoring, quality score tracking, user feedback collection |
| **Tools** | Promptfoo, RAGAS, DeepEval, LangSmith, Braintrust, Humanloop |

### Infrastructure

| Component | Key Competencies |
|-----------|-----------------|
| **Vector Databases** | Pinecone (managed), Weaviate (self-hosted/cloud), Qdrant, pgvector (PostgreSQL extension), Chroma (development) |
| **Orchestration** | LangChain, LlamaIndex, Haystack, custom orchestration with async Python |
| **Caching** | Semantic caching, exact-match caching, prompt caching (Anthropic), KV cache optimization |
| **Serving** | Streaming responses, WebSocket connections, server-sent events, queue-based async processing |

## AI-First Practices

AI engineering is the meta-discipline — AI engineers use AI tools to build AI products. This creates a unique recursive advantage.

### Prompt Chain Development
- Use Claude/GPT to draft and iterate on system prompts, then evaluate systematically
- Generate few-shot example sets from production data or synthetic generation
- Build prompt test suites by generating adversarial and edge-case inputs with AI
- Use AI to analyze prompt failure patterns and suggest improvements

### Evaluation Pipeline Creation
- Generate evaluation datasets using LLMs with human review
- Use AI to create evaluation rubrics from product requirements
- Build LLM-as-judge prompts that correlate with human judgment
- Generate synthetic test cases for edge cases and adversarial inputs

### RAG Pipeline Optimization
- Use AI to analyze retrieval quality and suggest chunking strategy improvements
- Generate metadata extraction prompts for document processing pipelines
- Evaluate retrieval relevance with LLM-as-judge and suggest reranking approaches
- Prototype different RAG architectures rapidly using AI code generation

### Documentation & Communication
- Generate API documentation for AI-powered endpoints
- Create user-facing documentation explaining AI feature behavior and limitations
- Draft safety reviews and model cards for production AI systems
- Generate architecture decision records for AI system design choices

### Code Generation & Prototyping
- Rapidly prototype agent architectures and tool definitions
- Generate integration code for vector databases and model APIs
- Build evaluation scripts and monitoring dashboards
- Create data processing pipelines for document ingestion

## How They Collaborate

- **Product Managers**: Close partners — AI engineers translate product requirements into AI system design, communicate capabilities and limitations, and set expectations about AI behavior
- **UX Designers**: Partners on AI-native interaction design — streaming responses, uncertainty communication, feedback collection, error states for AI failures
- **Backend Engineers**: Integrates AI capabilities into existing services — API design, latency management, fallback behavior, caching strategies
- **ML Engineers**: AI engineers focus on LLM integration and orchestration; ML engineers focus on model training and serving infrastructure. Collaboration on fine-tuning and evaluation
- **Data Engineers**: Partners on data pipelines that feed RAG systems — document ingestion, embedding pipelines, knowledge base maintenance
- **Security Engineers**: Partners on AI safety — prompt injection defense, PII handling, adversarial input testing, compliance requirements
- **Content / Domain Experts**: Partners on knowledge base curation, evaluation rubric design, and domain-specific quality assessment

## Hiring Signals

### Green Flags
- Can explain their RAG architecture decisions: why specific chunking strategies, embedding models, and retrieval approaches
- Has built evaluation frameworks and can describe what they measure and why
- Talks about prompt engineering as a systematic practice with versioning, testing, and iteration
- Understands AI safety concerns and has implemented guardrails in production
- Can discuss cost/quality/latency tradeoffs with specific numbers
- Has experience with multiple models and can articulate when to use each
- Thinks about failure modes unique to AI systems: hallucination, prompt injection, drift
- Can explain agent architectures with clear termination conditions and error handling

### Red Flags
- "Just use GPT-4 for everything" — no understanding of model selection tradeoffs
- No evaluation framework — "we test manually" or "the demo looks good"
- Ignores safety — no guardrails, no prompt injection defense, no PII handling
- Treats RAG as "just throw documents in a vector database" — no chunking strategy, no reranking, no evaluation
- Unbounded agents with no cost controls or termination conditions
- No prompt versioning or testing — prompts are changed ad-hoc in production
- Can't explain how they'd measure whether an AI feature is working well
- Hype-driven architecture — uses every new technique without understanding tradeoffs

## Growth Path

| Level | Markers |
|-------|---------|
| **Junior** | Integrates LLM APIs, writes prompts following established patterns, builds basic RAG pipelines, runs existing evaluation suites |
| **Mid** | Designs RAG architectures, builds evaluation frameworks, implements agent systems with tool use, optimizes cost and latency, handles prompt engineering for complex use cases |
| **Senior** | Architects AI systems end-to-end, designs safety and guardrail frameworks, leads AI feature development, mentors on prompt engineering and evaluation, drives AI quality standards |
| **Staff** | Defines org-wide AI architecture patterns, designs evaluation infrastructure, establishes AI safety practices, drives build-vs-buy decisions for AI capabilities, builds reusable AI components |
| **Principal** | Sets technical vision for AI-powered products, designs AI platforms for multiple product lines, influences industry AI engineering practices, balances AI investment against business outcomes, advises on AI strategy |

## Essential Reading

For books, articles, courses, and open-source projects to study, see [references.md](references.md).

