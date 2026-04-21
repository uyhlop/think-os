# Google Drive Hub Setup for ThinkRN Builder OS

Use this as your required folder/file structure so Codex and Claude can reference consistent assets.

## Folder structure
- `ThinkRN Builder OS/`
  - `01_Product/`
    - `Course Objectives/`
    - `Exam Blueprint/`
  - `02_Content_Operations/`
    - `Exam Batches (Raw)/`
    - `Exam Batches (Normalized)/`
    - `Rationales QA/`
  - `03_Analytics/`
    - `Datadog Exports/`
    - `Weekly KPI Snapshots/`
  - `04_Handoff/`
    - `Project Memory/`
    - `Next Wake Steps/`
    - `Launch Readiness/`

## Required files to keep updated
1. `04_Handoff/Project Memory/PROJECT_HANDOFF_MEMORY.md`
2. `04_Handoff/Next Wake Steps/NEXT_WAKE_STEPS.md`
3. `03_Analytics/Datadog Exports/datadog_exam_scrub_latest.csv`
4. `01_Product/Course Objectives/course_objectives_master.md`

## Sync rule
At end of each work block:
1. Export/refresh Datadog output files.
2. Update the two memory files.
3. Move today's finalized exam set into `Exam Batches (Normalized)`.
4. Add unresolved blockers into `NEXT_WAKE_STEPS.md`.
