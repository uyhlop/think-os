# Claude Code Prompt

Use this as a **continue-mode engineering prompt** for the ThinkRN repo.

```text
Project: ThinkRN (NCLEX prep platform)
Repo: github.com/uyhlop/thinkrn
Stack: Next.js 14 + Supabase + Vercel
GitHub user: uyhlop
Live site: thinkrn-zeta.vercel.app
Primary owner: ray.kosgei1@gmail.com

Objective:
1. Merge the full quiz engine from `claude/quiz-mvp`.
2. Rebuild and commit the missing `metrics-v1` work because it was built locally but never pushed.
3. Add/restore the founder ops control plane at `/admin/ops`.

Known branch context:
- `claude/quiz-mvp` exists and is ready to merge.
- `claude/metrics-v1` was local-only and never pushed. Assume code is missing from remote history and must be recreated from the spec below.
- Work from a new integration branch off the current default branch, not directly on main.

Branch strategy:
1. Fetch all remotes.
2. Identify the default branch.
3. Create a fresh branch named `claude/founder-ops-integration` from the default branch.
4. Merge `origin/claude/quiz-mvp` into it first.
5. Rebuild the missing `metrics-v1` features on top of that branch in small commits.
6. Stop before opening a PR, pushing, deploying, changing production env vars, or performing any irreversible action unless explicitly approved.

Authorization model:
- Use **continue** for safe, reversible actions: inspect repo, create branch, read files, edit code, run local typecheck/tests, create local commits.
- Use **deny** for irreversible or external actions unless explicitly approved: `git push`, PR creation, deploys, env var changes, secret rotation, deleting branches/data, writing to production services, sending real emails/webhooks.
- If an action might be user-visible, billable, or production-affecting, stop and ask.

Hard constraints:
- No auto-deploy.
- No secret exposure in logs, code, commits, or summaries.
- Do not print full `.env` values.
- Stop before irreversible actions.
- Prefer minimal diffs and preserve existing architecture.

Exact worktree setup:
- Confirm clean status before editing.
- If needed, create a sibling worktree so quiz merge and rebuilt metrics work stay isolated.
- Preferred pattern:
  - main worktree: current default branch for inspection only
  - integration worktree: `claude/founder-ops-integration` for all edits
- If using PowerShell on Windows, use these commands as needed:
  - `git fetch --all --prune`
  - `$default = (git remote show origin | Select-String 'HEAD branch' | ForEach-Object { $_.ToString().Split(':')[-1].Trim() })`
  - `git switch $default`
  - `git pull --ff-only origin $default`
  - `git worktree add ..\thinkrn-founder-ops -b claude/founder-ops-integration $default`
  - `cd ..\thinkrn-founder-ops`
  - `git merge --no-ff origin/claude/quiz-mvp`

Rebuild spec for missing `metrics-v1` work:
Recreate these features with production-safe guards and owner-only access where applicable:
- `/admin/metrics`: owner-only metrics dashboard.
- `/admin/ops`: founder control plane for operating the business.
- Signup segments and campaign attribution tracking.
- `ntfy` push hooks for notable events.
- Daily PDF email route for summary reporting.
- Campaign link reporting.
- AI explainability page at `/how-ai-works`.
- Outreach templates and founder-facing operational utilities.

Implementation guidance:
- Reuse existing auth, server actions, route handlers, and UI patterns already in the repo.
- Gate owner-only routes by `OWNER_EMAIL` and existing auth/session checks.
- Use `NEXT_PUBLIC_SITE_URL`, `NTFY_TOPIC`, `RESEND_API_KEY`, Supabase keys, and `CRON_SECRET` only through existing env patterns; do not hardcode.
- Add smoke tests for critical flows where cheap.
- Ensure all scheduled/reporting routes are protected against unauthenticated abuse.
- For campaign tracking, prefer lightweight URL param capture persisted server-side.
- For summaries/PDF/email, build but do not send real mail without approval; stub or dry-run locally where possible.
- For notifications, implement hooks but avoid firing real external notifications unless explicitly approved.

Execution order:
1. Inspect current repo structure, branch list, auth patterns, admin patterns, and env usage.
2. Merge `claude/quiz-mvp` and resolve conflicts carefully.
3. Verify app builds and the quiz engine routes/components state machine are intact.
4. Rebuild `metrics-v1` in vertical slices:
   - data model/helpers for attribution + segments
   - `/admin/metrics`
   - `/admin/ops`
   - notification/report plumbing
   - `/how-ai-works`
   - outreach templates/utilities
5. Run local validation: install if needed, lint, typecheck, tests, smoke checks.
6. Produce a concise summary with:
   - files changed
   - remaining risks
   - exact commands to push and open PR manually
7. Stop and wait.

Deliverable format:
At the end, provide only:
- what was merged
- what was rebuilt
- validation results
- blockers/risk notes
- manual next commands

Do not pad the response. Be terse and operational.
```
