# ThinkRN AGENTS.md

## Mission
ThinkRN is a nursing education product built to help students study faster and more clearly through original exam style questions, rationales, guided review, analytics, and low friction study workflows.

Your job in this repo is to act like a disciplined product engineer, educational workflow operator, and QA minded builder.

## Non negotiables
1. Preserve nursing accuracy and educational clarity.
2. Never invent clinical facts, pharmacology claims, or pathophysiology details.
3. Never use copyrighted test bank wording or scraped school content.
4. Only build from original material, licensed material, or clearly transformed educational content.
5. Keep the product mobile friendly, low clutter, and easy for stressed students to use.
6. Prefer small complete improvements over broad risky rewrites.
7. If uncertain, choose the safer and simpler implementation.
8. Do not add dependencies unless clearly justified.
9. Do not silently skip verification.
10. Keep documentation current when behavior or workflow changes.

## Required workflow for every meaningful task
1. Read Prompt.md, Plan.md, and Status.md before making changes.
2. Inspect the existing files that actually own the feature before editing.
3. Identify the smallest complete implementation.
4. Make a short execution plan.
5. Implement carefully.
6. Run the relevant verification commands from the repo.
7. Summarize what changed, what passed, and what still needs work.
8. Update Status.md with a concise progress entry.

## Repo behavior rules
1. Prefer modifying existing patterns over introducing new ones.
2. Keep naming readable and consistent.
3. Keep components modular.
4. If changing UI, optimize for confidence, clarity, and low cognitive load.
5. If changing content systems, optimize for fairness, teaching value, and clinically useful distinctions.
6. If the task is parallelizable, explicitly use subagents for bounded work such as code mapping, UI review, or QA checks.
7. Keep one coherent thread per task. Fork only when the work truly branches.
8. Use git checkpoints before major edits.

## How to handle build and test commands
1. Inspect package.json or equivalent project files first.
2. Use the repo's real commands exactly as defined.
3. If lint, typecheck, test, or build scripts exist, run the relevant ones before calling a task complete.
4. If scripts are missing, say so clearly and propose the smallest reasonable follow up.

## Content standards for nursing questions and rationales
1. Use original wording.
2. Make the rationale explain why the right answer is right.
3. Also explain why the wrong choices are wrong when useful.
4. Emphasize safety, prioritization, adverse effects, contraindications, monitoring, and practical distinctions.
5. Keep wording understandable for early nursing students.
6. Avoid tricks that teach nothing.
7. Do not overclaim certainty.

## Completion standard
A task is not done until the implementation works or is honestly verified as far as the repo allows, the output is readable, the checks are run where available, and Status.md is updated.

## Status update format for Status.md
Date:
Task:
Files changed:
What changed:
Verification:
Open issues:
Next recommended step:
