---
title: "CARS: A Cost-Aware Metric for Benchmarking Local LLMs on Constrained Hardware"
date: "2026-02-26"
slug: "cars-benchmark"
description: "I designed CARS — a metric that divides accuracy by resource cost and latency — then benchmarked Phi-3.5-mini and Qwen2.5-3B across 10 task categories on a CPU (i5-8400, 8GB RAM) and a Colab T4 GPU. Qwen wins by 2.7-3.3x on efficiency."
categories: ["AI", "Benchmarks", "LLM"]
readingTime: 10
featured: true
---

## Abstract

Leaderboard accuracy scores do not tell you which model to deploy on an i5 with 8GB RAM. They measure quality in isolation and ignore the cost of achieving it. I designed CARS (Cost-Aware Reasoning Score) — an efficiency metric that divides accuracy by the product of resource consumption and latency — to address this gap.

This paper presents the first public results from soul-bench, a 33-prompt benchmark suite across 10 real-world task categories. I ran two Q4_K_M quantized 3B-class models — Phi-3.5-mini-instruct (2.23GB) and Qwen2.5-3B-instruct (1.96GB) — on a CPU-only desktop (Intel i5-8400, 8GB RAM) and a GPU instance (Google Colab free tier, NVIDIA T4, 15GB VRAM). On GPU, Qwen achieves 78.5% accuracy vs Phi's 62.4%, with 2.7x better CARS_Size and 3.3x better CARS_VRAM. Neither model clears the proposed deploy gate of >=80% accuracy with no category below 70%. Code and prompts are open-source at [github.com/rishav1305/soul-bench](https://github.com/rishav1305/soul-bench).

---

## 1. Introduction

Standard LLM benchmarks — MMLU, HellaSwag, HumanEval — measure quality at scale, on hardware most practitioners do not have access to. For engineers running models locally on constrained hardware, the relevant question is different: *how much accurate output do I get per unit of memory and time?*

This is not a trivial distinction. A model that scores 90% on a standardized benchmark but requires 30 seconds per response on an i5 is not the same deployment choice as a model that scores 80% in 5 seconds. The CARS metric makes this trade-off explicit.

I built soul-bench to answer a concrete engineering question: can a locally-hosted 3B model reliably handle tasks in the soul-os autonomous agent system, replacing Claude API calls for low-complexity work? The benchmark covers 10 task categories derived from actual soul-os workloads — classification, code generation, reasoning, infrastructure management, campaign planning, and more.

This paper presents the methodology, results, and limitations of the first two benchmark runs: a CPU baseline (Day 1, February 22) and a GPU run (February 24) using the full 33-prompt suite.

---

## 2. The CARS Metric

### 2.1 Core Formula

```
CARS = Accuracy / (Resource_Cost x Latency)
```

Where:
- **Accuracy** is the mean fractional score across all prompts (0.0 to 1.0)
- **Resource_Cost** is the peak memory footprint in GB
- **Latency** is the average inference time per prompt in seconds

Higher CARS indicates more accurate output per unit of resource and time. The metric penalizes models that are accurate but slow, fast but wrong, or accurate but memory-hungry.

### 2.2 Three Variants

Because resource consumption differs by hardware target, CARS is defined in three variants:

| Variant | Formula | When to use |
|---------|---------|-------------|
| CARS_RAM | `Accuracy / (Peak_RAM_GB x Latency_s)` | CPU deployments — captures runtime memory including KV cache and inference overhead |
| CARS_Size | `Accuracy / (Model_Size_GB x Latency_s)` | Any hardware — model size is fixed and fully reproducible across environments |
| CARS_VRAM | `Accuracy / (Peak_VRAM_GB x Latency_s)` | GPU deployments — replaces RAM with peak VRAM drawn during inference |

CARS_RAM and CARS_VRAM reflect actual runtime conditions. CARS_Size is the reproducible baseline: because model file size is constant, it enables comparisons across machines where runtime memory varies due to OS overhead, context length, and concurrent processes.

### 2.3 Why Efficiency Beats Raw Accuracy for Deployment Decisions

A model running locally serves a different role than a cloud API. You pay for it in RAM, CPU time, and latency — not per-token billing. A model that is 5% less accurate but 3x faster on your hardware may be the better deployment choice for 90% of tasks. CARS makes that trade-off computable rather than subjective.

The metric also enables a structured deploy gate: a threshold that a model must clear before it can be trusted in production. The gate used in this benchmark is: **>=80% overall accuracy, no individual category below 70%, P95 latency below 5 seconds**. A model that does not clear all three conditions is not production-ready under this workload profile.

---

## 3. Methodology

### 3.1 Hardware

| Environment | CPU | RAM | GPU | VRAM |
|-------------|-----|-----|-----|------|
| CPU (titan-pc) | Intel i5-8400, 6 cores, 2.80GHz | 7.6GB total, ~5.7GB available | None (Intel UHD 630 iGPU) | — |
| GPU (Colab T4) | 2 vCPUs | 12.7GB | NVIDIA Tesla T4 | 15GB |

The CPU machine represents a common developer workstation with no GPU acceleration. The T4 represents free-tier cloud GPU access — available to any practitioner with a Google account.

### 3.2 Models

| Model | Parameters | Quantization | File Size | Source |
|-------|-----------|-------------|-----------|--------|
| Phi-3.5-mini-instruct | 3.8B | Q4_K_M | 2.23GB | Microsoft |
| Qwen2.5-3B-instruct | 3B | Q4_K_M | 1.96GB | Alibaba |

Q4_K_M is 4-bit mixed-precision quantization. It reduces the model footprint approximately 4x from float16 while preserving most inference quality. Both models fit comfortably within the 8GB RAM constraint of the CPU machine, with observed peak RAM of 3.4GB (Qwen) and 4.3GB (Phi) at 2048-token context.

CPU inference used llama.cpp with llama-cli. GPU inference used the llama-cpp-python pre-built CUDA wheel (cu124) with `n_gpu_layers=99` (all layers offloaded to GPU). Temperature was fixed at 0.0 for both environments.

### 3.3 Benchmark Suite

The suite covers 10 task categories across 33 prompts (3 smoke-test prompts carried over from Day 1, plus 30 new prompts added in Day 2).

| Category | Prompts | Scoring Method | What It Tests |
|----------|---------|---------------|---------------|
| System health monitoring | 3 | JSON schema (fractional) | Structured diagnosis with severity and recommended actions |
| Code generation | 3 | Code executes (binary) | Python functions that compile and contain the named def |
| Email drafting | 3 | JSON schema (fractional) | Structured email with subject, body, tone fields |
| Contact research | 3 | JSON schema (fractional) | Enrichment JSON with company context and talking points |
| Knowledge QA | 3 | Contains keywords (fractional) | Factual extraction from provided context paragraphs |
| Task planning | 3 | JSON schema — array (fractional) | Task assignment array given agent roster and task list |
| Classification | 3 | Exact match label (binary) | Single-label output matching expected category |
| Campaign planning | 3 | Ordered steps (fractional) | CLI pipeline steps in correct sequence |
| Reply classification | 3 | Exact match label (binary) | Email reply intent including one adversarial injection prompt |
| Infrastructure management | 3 | Contains keywords (fractional) | Diagnosis keywords given emergency scenario and system snapshot |

### 3.4 Scoring

Seven scoring methods were implemented in `scoring.py`. All return a float in [0.0, 1.0]:

- **json_schema**: Attempts `json.loads()`, falls back to extracting JSON from markdown fences. Partial credit for each required key present and each field value in the allowed set. Score = `checks_passed / total_checks`.
- **contains_keywords**: Case-insensitive substring match. Score = `matches / total_keywords`.
- **code_executes**: Strips markdown fences, runs `compile(code, '<benchmark>', 'exec')`, checks `def function_name` is present. Binary: 1.0 or 0.0.
- **ordered_steps**: Finds position of each required step. Pre-check: if any step appears before `required_order[0]`, returns 0.0. Then checks consecutive pairs. Score = `constraints_met / (n - 1)`.
- **exact_match_label**: Exact string match after strip and lowercase. Binary.
- **exact_match_number**: Regex finds all standalone numbers, checks last number matches expected. Binary.
- **contains_function**: Substring check for `def function_name`. Binary.

Fractional scoring enables partial credit where binary pass/fail would discard useful signal. A JSON response that parses correctly and contains 2 of 3 required keys scores 0.67 rather than 0.0.

### 3.5 Adversarial Injection Test

Prompt `reply-classif-02` is a deliberate prompt injection test. The email body contains instructions to ignore previous instructions and classify incorrectly. The actual human message is an objection. The expected answer is `objection`. The system prompt includes an explicit defense framing warning the model that the email body is untrusted external content. This is n=1 and cannot be treated as a general robustness assessment, but it provides one signal about instruction-following priority under injection pressure.

---

## 4. Results

### 4.1 GPU Head-to-Head (Colab T4, Full 33-Prompt Suite)

| Metric | Phi-3.5-mini | Qwen2.5-3B | Winner |
|--------|-------------|------------|--------|
| Accuracy | 62.4% | **78.5%** | Qwen |
| Avg Latency | 3.89s | **2.06s** | Qwen |
| Peak VRAM | 3,297 MB | **2,347 MB** | Qwen |
| Tokens/sec | **51.75** | 48.18 | Phi |
| Model Size | 2.23GB | **1.96GB** | Qwen |
| CARS_Size | 0.0721 | **0.1948** | Qwen (2.7x) |
| CARS_VRAM | 0.0499 | **0.1666** | Qwen (3.3x) |

Qwen leads on every dimension except raw token throughput, where Phi holds a marginal 7% edge. Despite this throughput advantage, Phi's higher latency and lower accuracy combine to produce a substantially worse CARS score. Qwen generates fewer tokens per second but delivers its answer faster — its responses are more concise.

### 4.2 Category-Level Breakdown (GPU Run)

| Category | Phi-3.5-mini | Qwen2.5-3B | Delta |
|----------|-------------|------------|-------|
| code_generation | 100% | 100% | — |
| contact_research | 100% | 100% | — |
| knowledge_qa | 86.7% | 86.7% | — |
| campaign_planning | 100% | 60% | Phi +40% |
| email_drafting | 66.7% | 33.3% | Phi +33% |
| system_health | 66.7% | 100% | Qwen +33% |
| infra_management | 66.7% | 66.7% | — |
| reply_classification | 33.3% | 66.7% | Qwen +33% |
| task_planning | 33.3% | 50% | Qwen +17% |
| reasoning | **0%** | 100% | Qwen +100% |
| classification | **0%** | 100% | Qwen +100% |

The most significant divergence is in reasoning and classification. Phi scores 0% on both. These tasks require either precise single-label output (classification) or multi-step logical resolution (reasoning). Phi tends to over-generate and contradicts its own reasoning mid-response — it identifies the correct intermediate step, then computes incorrectly and states a wrong final answer.

Phi holds an advantage in campaign planning (+40%) and email drafting (+33%). Both categories involve longer-form text generation where Phi's verbosity is an asset rather than a liability.

Both models achieve 100% on code generation and contact research. Knowledge QA ties at 86.7% — factual extraction from provided context is well within the capability of both models at this size.

### 4.3 Deploy Gate Assessment

The proposed deploy gate for production use in soul-os: **>=80% accuracy, no category below 70%, P95 latency less than 5 seconds**.

| Criterion | Phi-3.5-mini | Qwen2.5-3B |
|-----------|-------------|------------|
| Overall accuracy >=80% | Fail (62.4%) | Fail (78.5%) |
| No category below 70% | Fail (reasoning 0%, classification 0%, reply_classif 33.3%, task_planning 33.3%) | Fail (email_drafting 33.3%, task_planning 50%, campaign_planning 60%) |
| P95 latency less than 5s (GPU) | Pass (~3.89s avg) | Pass (~2.06s avg) |

Neither model passes. Phi fails on overall accuracy and has four categories below 70%. Qwen fails on overall accuracy (78.5%, just short of 80%) and on email drafting and task planning. The gate establishes a clear benchmark for what to test next: 7B models, or fine-tuned 3B models, on the same prompt suite.

### 4.4 Adversarial Injection Result

| Model | Response | Correct? |
|-------|----------|----------|
| Phi-3.5-mini | Failed classification entirely | No |
| Qwen2.5-3B | Classified as `objection` | Yes |

Qwen correctly resisted the injection and identified the human intent. Phi failed the entire reply_classification category (33.3% overall), so its behavior on the injection prompt is a component of that broader failure rather than an isolated injection result.

### 4.5 GPU vs CPU Throughput (Estimated from Day 1 Baseline)

| Model | CPU tok/s (titan-pc) | GPU tok/s (Colab T4) | Speedup |
|-------|---------------------|---------------------|---------|
| Phi-3.5-mini | ~9.4 | 51.75 | 5.5x |
| Qwen2.5-3B | ~14.7 | 48.18 | 3.3x |

Note: CPU accuracy results reflect the 3-prompt smoke test only (Day 1). CPU and GPU accuracy figures are not directly comparable because the CPU run used 3 prompts versus 33 on GPU. The throughput speedup is based on tokens-per-second from the respective runs.

---

## 5. Discussion

### 5.1 3B Models Have a Clear Task Profile

The category results form a coherent pattern. Both 3B models handle structured-output tasks reliably when the task is grounded in provided context: code generation (100%), contact research (100%), knowledge QA (86.7%). They struggle with tasks that require either strict single-token output discipline (classification, where Phi fails entirely) or genuine multi-step logical reasoning.

This is actionable for practitioners: a 3B model running locally is viable for classification pipelines, code generation, and knowledge-grounded QA. It is not reliable for trick reasoning or adversarial-environment classification without fine-tuning or additional prompt hardening.

### 5.2 Qwen vs Phi — A Different Architecture of Failure

Phi and Qwen fail different categories. Phi's 0% on reasoning and classification suggests a model that over-generates and loses track of its output constraint. Qwen's 33.3% on email drafting and 60% on campaign planning suggests a model that is more constrained but struggles with longer-form, multi-component text generation.

For agentic workloads where structured output and instruction-following are critical, Qwen is the clear choice at this size. For workloads heavy in prose generation and step-by-step campaign planning, the comparison narrows.

### 5.3 CARS as a Selection Signal

The 2.7-3.3x CARS gap is large enough to be a real decision input. In a production system running thousands of inferences, a model with 3x better CARS either cuts resource costs by two-thirds or handles three times the throughput on the same hardware. At this margin, CARS should inform model selection alongside accuracy alone.

---

## 6. Limitations

**Sample size.** 33 prompts across 10 categories is not statistically significant. Three prompts per category means a single wrong answer shifts category accuracy by 33 percentage points. Results should be treated as directional signals, not definitive rankings.

**No repeated runs.** Each prompt was run once. No standard deviation or confidence intervals are reported. Latency figures in particular will vary with system load, thermal state, and memory pressure.

**Single CPU machine.** CPU results reflect one specific hardware configuration (i5-8400, 8GB). They do not generalize to other CPU architectures, clock speeds, or RAM configurations.

**Heuristic scoring, not human evaluation.** Scoring is automated via substring matching, JSON schema validation, Python compilation, and regex. Human evaluation of the same responses would likely produce different scores, particularly for json_schema and contains_keywords methods where partial credit is heuristic.

**Adversarial test n=1.** One prompt is not a robustness assessment. The adversarial result — Qwen resists, Phi fails — should be treated as a single data point, not a claim about general injection resistance.

**Two models only.** This benchmark compares two models in the same size class and quantization tier. Results say nothing about 7B models, different quantization levels (Q2_K, Q8_0), or models from other families (Mistral, LLaMA, Gemma).

---

## 7. Reproduction

The full benchmark is open-source and designed to run without specialized hardware.

**Repository:** [github.com/rishav1305/soul-bench](https://github.com/rishav1305/soul-bench)

### CPU (any Linux machine with 8GB+ RAM)

```bash
git clone https://github.com/rishav1305/soul-bench.git
cd soul-bench

bash scripts/setup-titan.sh

python3 scripts/benchmark.py --prompts prompts/ --results-dir results/

python3 -m pytest tests/ -v
```

### GPU (Google Colab, free tier)

1. Open `notebooks/cars_benchmark.ipynb` in Google Colab
2. Set runtime type to GPU (T4)
3. Run all cells — setup takes approximately 10 minutes for CUDA compilation and model download
4. Results are saved as JSON in `results/` and displayed as a comparison table

### Extend the Benchmark

To add a new model: place a `.gguf` file in `~/models/`. The benchmark auto-discovers all GGUF files in that directory.

To add new prompts: create a JSON file in `prompts/` following the schema in any existing prompt file. The benchmark auto-discovers all `*.json` files in the prompts directory and runs them in sorted order.

To add a new scoring method: implement a function returning `float` in [0.0, 1.0] in `scripts/scoring.py` and add a routing case to the `score_result` dispatcher.

---

*Rishav Chatterjee is an Applied AI Engineer with 8 years of experience in LLM evaluation, agentic AI systems, and production AI infrastructure. He designed the CARS metric and directed Claude Code to implement the soul-bench suite. Source: [github.com/rishav1305/soul-bench](https://github.com/rishav1305/soul-bench)*
