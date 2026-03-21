# ML Engineer

> The engineer who bridges the gap between research notebooks and production systems — turning machine learning models into reliable, monitored, and continuously improving services that deliver business value at scale.

## What Elite Looks Like

A staff-level ML engineer doesn't just train models — they build the systems that make models reliable in production. They understand that the model is often the easy part; the hard part is data pipelines, feature engineering, serving infrastructure, monitoring, and the feedback loops that keep models accurate over time. They treat ML systems as software systems first and apply the same engineering rigor to model code that backend engineers apply to APIs.

What separates elite from competent:
- **Production-first thinking**: Designs for serving latency, throughput, and reliability from the start — not as a retrofit after the notebook works
- **MLOps maturity**: Builds reproducible training pipelines, automated evaluation, model registries, and deployment pipelines that make model updates as routine as code deploys
- **Feature engineering at scale**: Designs feature stores and feature pipelines that serve both training and inference, eliminating training/serving skew
- **Model monitoring discipline**: Instruments models for data drift, concept drift, performance degradation, and business metric correlation — catches problems before users do
- **Experiment rigor**: Runs controlled experiments (A/B tests, multi-armed bandits) with proper statistical methodology, not vibes-based model selection
- **Cost-aware ML**: Understands compute costs for training and inference, optimizes model architecture and serving infrastructure for cost/performance tradeoffs
- **Cross-functional translation**: Can explain model behavior, limitations, and tradeoffs to product managers and stakeholders in business terms

## Core Responsibilities

- Design and build ML training pipelines that are reproducible, versioned, and automated
- Implement feature engineering pipelines and manage feature stores
- Build model serving infrastructure (real-time inference, batch prediction, edge deployment)
- Implement experiment tracking and model registry workflows
- Design and run A/B tests and online experiments for model evaluation
- Build model monitoring systems: data drift detection, performance monitoring, business metric correlation
- Optimize model performance: quantization, distillation, pruning, serving optimization
- Manage ML infrastructure: GPU clusters, training orchestration, serving clusters
- Implement CI/CD for ML: automated training, evaluation, and deployment pipelines
- Collaborate with data scientists on moving models from research to production
- Design data pipelines that serve ML-specific needs (feature computation, training data generation)
- Build feedback loops that capture production data for model retraining

## Key Skills & Tools

### ML Frameworks

| Framework | Key Competencies |
|-----------|-----------------|
| **PyTorch** | Model architecture, custom training loops, distributed training (DDP, FSDP), TorchScript, dynamic graphs, Lightning for structured training |
| **TensorFlow / Keras** | SavedModel format, TF Serving, TFX pipelines, tf.data for input pipelines, distributed strategies |
| **JAX** | Functional transformations (jit, vmap, pmap), Flax/Haiku for neural networks, TPU-optimized training |
| **scikit-learn** | Classical ML pipelines, feature preprocessing, model selection, ensemble methods |

### MLOps & Experiment Tracking

| Tool | Key Competencies |
|------|-----------------|
| **MLflow** | Experiment tracking, model registry, model serving, MLflow Projects for reproducibility, model signatures and input examples |
| **Weights & Biases** | Experiment tracking, hyperparameter sweeps, artifact management, model registry, report generation, collaborative analysis |
| **DVC** | Data versioning, pipeline definition, experiment management, remote storage integration |
| **Kubeflow** | ML pipelines on Kubernetes, Katib for hyperparameter tuning, KServe for model serving, notebook servers |

### Model Serving

| Tool | Key Competencies |
|------|-----------------|
| **TorchServe** | Model archiving (MAR files), custom handlers, batch inference, model versioning, metrics |
| **Triton Inference Server** | Multi-framework serving, dynamic batching, model ensemble, concurrent model execution, GPU sharing |
| **TensorFlow Serving** | SavedModel loading, REST/gRPC APIs, model versioning, batching configuration |
| **BentoML** | Service definition, adaptive batching, model composition, containerized deployment |
| **vLLM / TGI** | LLM-specific serving, PagedAttention, continuous batching, speculative decoding |

### Feature Engineering

| Tool | Key Competencies |
|------|-----------------|
| **Feast** | Feature store management, online/offline serving, feature registration, point-in-time correct joins |
| **Tecton** | Real-time feature computation, feature pipelines, monitoring, Spark/Flink integration |
| **Custom feature pipelines** | Spark/Flink for feature computation, feature freshness management, backfill strategies |

### Model Monitoring

| Concern | Implementation |
|---------|---------------|
| **Data drift** | Distribution monitoring (KS test, PSI, JS divergence), schema validation, feature importance tracking |
| **Concept drift** | Performance metric tracking, label delay handling, proxy metrics, retraining triggers |
| **Model performance** | Accuracy/precision/recall tracking, prediction latency monitoring, throughput metrics |
| **Business metrics** | Model impact on revenue/engagement/conversion, attribution analysis, A/B test results |
| **Tools** | Evidently AI, WhyLabs, Arize, NannyML, custom Prometheus/Grafana dashboards |

### Experiment Design
- A/B testing: sample size calculation, statistical significance, guardrail metrics, sequential testing
- Multi-armed bandits: Thompson sampling, UCB, contextual bandits for continuous optimization
- Offline evaluation: holdout sets, cross-validation, temporal splits for time-series data
- Online/offline metric correlation: ensuring offline improvements translate to online gains

## AI-First Practices

ML engineering is uniquely positioned for AI augmentation — ML engineers use AI to build AI.

### Model Architecture Exploration
- Use AI to suggest model architectures based on problem description, data characteristics, and constraints
- Generate PyTorch/TensorFlow model code from architecture descriptions
- Review model architectures for common pitfalls (vanishing gradients, information bottlenecks, overfitting risks)
- Generate ablation study designs to understand model component contributions

### Hyperparameter Tuning Scripts
- Generate Optuna/Ray Tune hyperparameter search configurations from model specifications
- Use AI to suggest search spaces based on model type and dataset characteristics
- Create hyperparameter sensitivity analysis scripts
- Generate distributed training configurations for multi-GPU/multi-node setups

### Deployment Configuration Generation
- Generate Kubernetes manifests for model serving (resource requests, HPA, readiness probes)
- Create Triton/TorchServe configuration files from model requirements
- Generate model serving benchmarking scripts for latency and throughput testing
- Create canary deployment configurations for model rollouts

### Pipeline & Infrastructure Code
- Generate training pipeline code (Kubeflow, Airflow) from experiment specifications
- Create feature engineering pipelines from feature requirement documents
- Generate monitoring dashboards for model performance metrics
- Build data validation pipelines for training data quality

### Documentation & Communication
- Generate model cards from training metadata and evaluation results
- Create experiment reports from W&B or MLflow tracking data
- Draft model review documents for stakeholder presentations
- Generate runbooks for model retraining and incident response

## How They Collaborate

- **Data Scientists**: ML engineers productionize what data scientists prototype. Close partnership on model design, evaluation criteria, and feature engineering
- **Data Engineers**: Partners on feature pipelines and training data infrastructure. Data engineers build the foundation, ML engineers build the ML-specific layer
- **Backend Engineers**: Partners on model serving integration — APIs, latency requirements, fallback behavior, feature serving at request time
- **Platform Engineers**: ML engineers consume platform capabilities for compute, storage, and deployment. May drive platform requirements for GPU clusters and ML-specific tooling
- **Product Managers**: Translates model capabilities and limitations into product decisions. Explains tradeoffs between accuracy, latency, cost, and fairness
- **SRE**: Partners on model serving reliability — SLOs for inference latency and availability, on-call for model-serving infrastructure

## Hiring Signals

### Green Flags
- Can describe their end-to-end ML pipeline from data ingestion to model monitoring
- Talks about training/serving skew and how they prevent it
- Has opinions on experiment tracking and model versioning workflows
- Understands the cost of ML infrastructure and has optimized it
- Can explain model monitoring: what they track, how they detect drift, when they retrain
- Discusses A/B testing methodology with statistical rigor
- Treats ML systems as software systems — tests, CI/CD, observability, reliability
- Can explain model behavior to non-technical stakeholders

### Red Flags
- Only knows notebooks — can't deploy a model to production
- No experiment tracking or reproducibility practices
- Trains on all data without proper train/validation/test splits or temporal considerations
- No model monitoring — "we retrain on a schedule"
- Can't explain serving infrastructure decisions (batch vs. real-time, latency requirements)
- Ignores training/serving skew as a concern
- No understanding of A/B testing methodology — "we just compare accuracy"
- GPU-maximalist — throws compute at problems without optimizing model architecture or data

## Growth Path

| Level | Markers |
|-------|---------|
| **Junior** | Trains models following established patterns, writes feature engineering code, deploys models using existing infrastructure, monitors model performance dashboards |
| **Mid** | Designs training pipelines, builds feature stores, implements model serving solutions, runs A/B tests, sets up model monitoring, optimizes inference performance |
| **Senior** | Architects ML platforms, designs experiment frameworks, leads model deployment strategy, mentors on MLOps best practices, drives model monitoring culture, optimizes ML infrastructure costs |
| **Staff** | Defines org-wide MLOps strategy, designs ML platform architecture, establishes model governance frameworks, drives ML infrastructure investment decisions, builds reusable ML components across teams |
| **Principal** | Sets technical vision for ML infrastructure, designs ML systems at organizational scale, influences industry MLOps practices, balances ML investment against business outcomes, advises on build-vs-buy for ML capabilities |

## RTFM -- Essential Reading

### Books
- **Designing Machine Learning Systems** (Chip Huyen) -- The definitive guide to production ML systems. Covers the full lifecycle: data engineering, feature engineering, training, serving, monitoring, and iteration. Start here
- **Machine Learning Engineering** (Andriy Burkov) -- Practical guide focused on the engineering side of ML: project planning, data collection, feature engineering, training, serving, and maintenance
- **Machine Learning Design Patterns** (Valliappa Lakshmanan, Sara Robinson, Michael Munn) -- Reusable solutions to common ML engineering challenges, from data representation to serving
- **Building Machine Learning Powered Applications** (Emmanuel Ameisen) -- End-to-end guide from prototype to production ML applications
- **Reliable Machine Learning** (Cathy Chen, et al.) -- Applying SRE principles to ML systems. Model monitoring, testing, and operational excellence

### Documentation & Guides
- [MLflow Documentation](https://mlflow.org/docs/latest/index.html) -- Official docs for experiment tracking, model registry, and model serving
- [Weights & Biases Documentation](https://docs.wandb.ai/) -- Experiment tracking, sweeps, artifacts, and model registry
- [KServe Documentation](https://kserve.github.io/website/) -- Kubernetes-native model serving with autoscaling and canary rollouts
- [Feast Documentation](https://docs.feast.dev/) -- Feature store for managing and serving ML features
- [Evidently AI Documentation](https://docs.evidentlyai.com/) -- ML monitoring: data drift, model performance, and data quality

### Articles & Resources
- [Made With ML](https://madewithml.com/) -- Comprehensive MLOps course covering the full production ML lifecycle. Free and regularly updated
- [Full Stack Deep Learning](https://fullstackdeeplearning.com/) -- Course covering the practical aspects of building ML-powered products, from data to deployment
- [Chip Huyen's Blog](https://huyenchip.com/blog/) -- Foundational articles on ML systems design, real-time ML, and MLOps
- [Eugene Yan's Blog](https://eugeneyan.com/) -- Applied ML and MLOps articles from a senior ML engineer at Amazon
- [Google ML Engineering Best Practices](https://developers.google.com/machine-learning/guides/rules-of-ml) -- Rules of ML from Google, covering practical ML engineering patterns

### Courses
- [Stanford CS 329S: Machine Learning Systems Design](https://stanford-cs329s.github.io/) -- Chip Huyen's Stanford course on ML systems (materials available online)
- [Full Stack Deep Learning](https://fullstackdeeplearning.com/course/) -- Practical MLOps and production ML course
- [Made With ML MLOps Course](https://madewithml.com/) -- Free, comprehensive MLOps curriculum

### Open Source Projects to Study
- [MLflow](https://github.com/mlflow/mlflow) -- The most widely adopted open-source ML lifecycle platform
- [Feast](https://github.com/feast-dev/feast) -- Open-source feature store for ML
- [BentoML](https://github.com/bentoml/BentoML) -- Framework for serving, managing, and deploying ML models
- [Evidently](https://github.com/evidentlyai/evidently) -- ML model monitoring and observability
- [vLLM](https://github.com/vllm-project/vllm) -- High-throughput LLM serving engine with PagedAttention

## References

- Chip Huyen ML Systems Design -- [huyenchip.com](https://huyenchip.com/)
- Made With ML -- [madewithml.com](https://madewithml.com/)
- ML Engineering Community -- [mlops.community](https://mlops.community/)
- progression.fyi -- [progression.fyi](https://progression.fyi/)
- Engineering Ladders -- [github.com/jorgef/engineeringladders](https://github.com/jorgef/engineeringladders)
