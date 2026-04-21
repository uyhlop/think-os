---
name: build-and-verify
description: Use when implementing or improving a ThinkRN feature and you need a disciplined build, verify, and status update workflow. Do not use for broad ideation without code changes.
---

# build-and-verify

Purpose:
Implement a requested improvement in the smallest complete way, verify it, and document the result.

Workflow:
1. Read AGENTS.md, Prompt.md, Plan.md, and Status.md.
2. Inspect the real files that own the feature.
3. Identify the smallest complete implementation.
4. Make the change.
5. Run the relevant verification commands that already exist in the repo.
6. Summarize what changed, what passed, and what still needs work.
7. Update Status.md.

Standards:
1. Keep code readable.
2. Avoid unnecessary dependencies.
3. Do not break unrelated functionality.
4. Keep UI clean and mobile friendly.
5. Do not mark complete without verification.
