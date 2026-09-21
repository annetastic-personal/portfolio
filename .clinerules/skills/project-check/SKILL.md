---
name: project-check
description: "Use when the user says project check or asks for a progress review of the portfolio implementation plan, visual direction brief, end-of-days MVP checklist, and codebase. Report findings only; never make changes."
---

# Project Check

Review the current state of the portfolio project against its planning documents. This is a read-only review. Do not edit, create, delete, rename, format, generate, or otherwise change any files. Do not run commands that change repository state. Only report findings and recommendations.

## Review Sources

Read these files first:

- `C:\source\repos\portfolio\docs\planning\Implementation-Plan.md`
- `C:\source\repos\portfolio\docs\planning\Visual-Direction-Brief.md`
- `C:\source\repos\portfolio\docs\progress-checklists\End-of-Days.md`

Then review the relevant portfolio codebase, including source files, configuration, assets, tests, and documentation needed to verify the claims in those documents. Use the current repository state as evidence. Do not infer completion from the planning documents alone.

## Review Method

1. Extract the implementation goals, MVP requirements, visual decisions, validation criteria, timeline commitments, and deferred work from the three documents.
2. Inspect the codebase and repository state for evidence supporting or contradicting each relevant item.
3. Classify meaningful work as:
   - **Complete**: implemented and supported by current code or verification evidence.
   - **In progress**: partially implemented, explicitly deferred, or lacking a required part.
   - **Not started**: no meaningful implementation evidence found.
   - **Blocked or at risk**: dependent on an unresolved issue, unavailable resource, deadline constraint, or contradictory requirement.
4. Identify mismatches between the documents and the implementation, stale timeline entries, missing acceptance criteria, and risks to the MVP deadline.
5. Recommend the single highest-priority next task. Base it on MVP impact, dependencies, deadline risk, and the evidence found during the review.
6. Do not run builds
7. Do not read external websites

## Report Format

Use this structure:

### Project Check

State the overall status in one or two sentences, including whether the MVP appears on track, at risk, or blocked.

### Progress Summary

Use a concise table with these columns:

| Area | Status | Evidence and remaining work |
| ---- | ------ | --------------------------- |

Cover, at minimum:

- Core application and build
- Main page and site shell
- Project data and project cards
- Project-detail routes and pages
- Visual direction alignment
- Accessibility and responsive behavior
- Links, images, and content completeness
- Testing and validation
- Deployment and release readiness

### Findings

List the most important discrepancies, risks, dependencies, or missing evidence. Order them by urgency. Reference the relevant file paths and code locations when available.

### Recommended Next Start

Name one concrete next task, explain why it is the best next start, and identify the expected completion signal. Mention secondary follow-up tasks only when they are direct dependencies of the recommended task.

### Verification Limits

State what could not be verified and why. Do not claim that a build, test, deployment, browser check, or external link works unless the evidence was actually checked during this review.

## Guardrails

- Do not make any changes to anything; only report findings.
- Do not update the planning documents, timeline, code, tests, configuration, assets, or repository metadata.
- Do not silently reinterpret a stale or contradictory plan item. Call out the conflict and recommend which item should control the next decision.
- Prefer concrete evidence over assumptions.
- Keep the report concise enough to support an immediate next action.
