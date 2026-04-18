# Think OS

**Think OS** is the orchestration layer behind Ray Kosgei’s broader **ThinkEdu** ecosystem. Where **ThinkRN** is the product-facing NCLEX preparation application, Think OS documents and operationalizes the system Ray uses to keep product development, founder operations, monitoring, and agent handoffs organized.

The practical purpose of this repository is to preserve a clean record of how the system works. It captures the prompt architecture, handoff model, workflow logic, status materials, and proof-of-concept templates that show how the operating layer supports product execution.

## What Think OS is

Think OS is best understood as a **multi-agent operating system for startup execution**. In this model, Manus acts as the orchestration and routing layer, while Claude Code and Codex serve as complementary engineering agents that can continue work through GitHub-based handoffs, local validation, and documented prompts.

| Layer | Role | Primary use |
|---|---|---|
| Manus | Orchestration and monitoring | Routes work, summarizes state, checks operations, and decides when Ray needs to be notified |
| Claude Code | Engineering continuation | Writes and integrates code, reconstructs missing features, and prepares safe handoffs |
| Codex | Engineering and automation support | Handles implementation support, recurring ops logic, and automation-oriented workflows |

The repository is intentionally documentation-first. It is not the product app itself. Instead, it explains **how the product work is coordinated**, how prompts are organized, what the current system status is, and how the broader ecosystem connects.

## Repository structure

| Path | Purpose |
|---|---|
| `prompts/` | Prompt files for Claude Code, Codex, and recurring Manus operations |
| `docs/` | Status reports, deployment remediation notes, and the ecosystem project map |
| `templates/` | CodePen-derived HTML proof-of-concept templates for product and growth experiments |
| `AGENT_WORKFLOW_REFERENCE.md` | Plain-language explanation of the agent rotation and continue/deny approval model |

## Relationship to the broader ecosystem

Think OS supports a larger brand and product structure anchored by **ThinkEdu**.

| Entity | Function | Location |
|---|---|---|
| ThinkEdu | Umbrella brand | Brand layer |
| ThinkRN | NCLEX prep product | Product repo: `uyhlop/thinkrn` |
| Think OS | Agent orchestration and founder operating layer | Repo: `uyhlop/think-os` |
| ray.kosgei | Personal links and routing hub | Repo: `uyhlop/ray-kosgei` |
| Patreon | Build-in-public monetization channel | External platform |

## Why this repository exists

This repository creates a stable operating reference so Ray can keep product execution clear even when multiple systems, branches, and agents are involved. It reduces ambiguity, preserves working prompts, and makes the overall operating model easier to explain to collaborators, supporters, and future contributors.

In short, **ThinkRN is the product; Think OS is the system that helps Ray build and operate it.**

## Maintainer

**Ray Kosgei**  
Founder, ThinkEdu  
GitHub: [uyhlop](https://github.com/uyhlop)  
Instagram: [@think.bsn](https://instagram.com/think.bsn)  
Email: ray.kosgei1@gmail.com
