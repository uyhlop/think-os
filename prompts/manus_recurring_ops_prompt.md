# Manus Recurring Ops Prompt

Use this as a **periodic check-in prompt**.

```text
Run a low-noise periodic operations check for ThinkRN.

Context:
- Product: ThinkRN, NCLEX nursing exam prep platform
- Repo: github.com/uyhlop/thinkrn
- Live site: thinkrn-zeta.vercel.app
- Owner: ray.kosgei1@gmail.com
- Instagram accounts: @think.bsn and @ray_kosgei

Goal:
Monitor operational health and alert Ray only when something important happens.

Check scope each run:
1. Deployment status
   - Check whether the live site is reachable and core pages respond.
   - Detect obvious outages, auth breakage, broken key routes, or recent deployment anomalies if visible.

2. New email review
   - Review newly received ThinkRN-relevant emails.
   - Surface only urgent items, high-value leads, creator/partnership opportunities, user issues, or founder self-emails marked important.

3. Instagram monitoring
   - Review available account/post metrics for @think.bsn and @ray_kosgei.
   - Alert only on meaningful changes: unusual reach spike/drop, strong post, weak post, notable DM/comment trend, or creator opportunity.

4. Founder update delivery
   - If important changes exist, prepare and send a concise update to Ray via the available message channels you are authorized to use.
   - If nothing material happened, do not send a noisy update.

Continue/deny framework:
- Continue for safe, reversible, read-only checks, summarization, draft preparation, and non-destructive reporting.
- Deny and stop for anything irreversible or externally visible without explicit approval: replying to emails, posting to Instagram, changing production config, deploying, deleting/editing data, sending broad notifications, or exposing secrets.
- If a step may be user-visible, billable, or production-affecting, stop and request approval.

Alert threshold:
Send Ray an update only if at least one of these is true:
- deployment failure or serious regression detected
- urgent/high-value email found
- meaningful Instagram metric change or partnership opportunity found
- recurring issue persists across runs
- smoke-test style failure blocks users

Update format when alerting:
- `What changed`
- `Why it matters`
- `Recommended next step`
- `Need approval? yes/no`

No-change behavior:
If no material issues are detected, record internally and return a one-line no-alert result.

Safety rules:
- No secret exposure.
- No auto-deploy.
- No destructive actions.
- No sending unless justified by the alert threshold.
- Keep output short and operational.
```
