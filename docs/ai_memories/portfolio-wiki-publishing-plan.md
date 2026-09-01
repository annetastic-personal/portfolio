# portfolio wiki publishing plan (repo-specific memory backup)

Repo: portfolio

## Background

- seed-wiki.js (formerly docs/scaffold-wiki.js) is a one-time setup script only — confirmed via its original commit message ("scaffolding starter wiki pages"). It has been reverted to its original committed state, renamed to seed-wiki.js, and given a prominent warning header explaining it's not for ongoing updates.
- portfolio has no CI wiki automation (unlike references, which has a recurring, CI-wired publish pipeline). Decision: build a references-style recurring publish tool for portfolio's wiki.

## Target design (mirrors references/docs/scaffold-wiki.js)

- docs/wiki = tracked source content (authored markdown, committed into portfolio's own git history) — this is the new folder to create.
- docs/.wiki-build = gitignored disposable clone of the wiki repo (was docs/wiki, renamed to this to match references's naming convention).
- publish-wiki.js (new script): clone wiki into docs/.wiki-build, copy docs/wiki source over it, git add, skip commit/push if nothing changed, commit and push if something changed.

## Status

- Renamed docs/wiki (clone) -> docs/.wiki-build - done.
- Updated .gitignore entry from docs/wiki to docs/.wiki-build - done.

## Remaining steps (one at a time, confirm before each)

1. Create docs/wiki/ as new tracked source folder; move real wiki content there (the actual published pages, not seed-wiki.js's placeholder templates). - DONE (user did this manually).
2. Write new publish-wiki.js script (clone into docs/.wiki-build, copy source over it, commit only if changed, push) mirroring references/docs/scaffold-wiki.js logic. - DONE (created, with header comment explaining purpose).
3. Decide later whether to wire into CI (references triggers on wiki-path changes on default branch); not needed yet for portfolio.

## Conflict-detection design for publish-wiki.js (needed because CI runs on every commit, by anyone; must not silently clobber direct wiki edits)

Key insight: git's own push rejection only catches race conditions (two pushes colliding). It does NOT catch "someone edited a page online days ago, my local source is stale, my push succeeds cleanly and silently reverts their edit" — that's a normal-looking sequential commit from git's perspective, no conflict. Need explicit pre/post-pull diff check instead.

Sub-steps (do one at a time, confirm before each):

1. Make docs/.wiki-build persistent instead of wiped every run: clone if missing, git pull if valid existing repo, throw clear error if folder exists but isn't a git repo (do not auto-delete/auto-recover).
2. Before pulling, capture current commit via git rev-parse HEAD (the "last known state" baseline).
3. After pulling, run git diff --name-only on old-HEAD..new-HEAD to get the list of files that changed as a result of the pull (i.e., pages edited directly online/via web UI since the last publish run).
4. When copying docs/wiki over docs/.wiki-build, skip overwriting any file in that changed-by-pull list; collect those filenames into a "conflicts" array instead of writing them.
5. Proceed with commit/push as normal for all non-conflicting files (skip commit/push if nothing changed, as already designed).
6. After the normal publish flow completes, if the conflicts array is non-empty: print a GitHub Actions error annotation per conflicting file (format: two colons, error, file=docs/wiki/name, two colons, then message: this page was edited directly on the wiki since the last publish, reconcile manually before publishing), then exit with a non-zero status code so CI fails visibly (red X in Actions tab, PR check failure, GitHub's default failed-workflow email notification).

Rationale for using rev-parse/diff instead of a custom fingerprint/hash system: this is literally standard git plumbing (git diff, git log) used to answer "what changed since I last looked" — not reinventing git's engine, just using its existing commands for a purpose the simple copy-and-push flow doesn't otherwise surface.
