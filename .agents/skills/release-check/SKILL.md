---
name: release-check
description: Use when preparing ThinkRN changes for demo, delivery, investor review, or customer handoff and you need a focused release readiness pass.
---

# release-check

Purpose:
Run a final quality pass before showing or shipping work.

Workflow:
1. Identify what changed.
2. Run the relevant repo verification commands.
3. Check empty states, error states, loading states, and mobile layout if UI changed.
4. Check naming, copy clarity, and obvious polish gaps.
5. Check whether documentation and Status.md reflect the current state.
6. Return a concise ship or not yet verdict with reasons.

Standards:
1. No fake confidence.
2. No silent skipped checks.
3. Flag user visible rough edges.
4. Prefer honest readiness over optimistic readiness.
