# CSS / Tailwind / daisyUI Refactor Plan (Post-MVP)

## Why

`src/index.css` currently duplicates a color/design system already defined in `tailwind.config.js`'s `theme.extend.colors.brand`, via a separate set of raw CSS custom properties (`--palette-1` through `--palette-6`) and global element selectors (`h1`-`h4`, `a`, `.button-*`, `.badge`, `.section-title`, `.header-footer-bg`). daisyUI is also enabled as a Tailwind plugin but has no custom theme configured, so daisyUI component classes (`card`, `btn-primary`, `bg-base-100`, etc.) currently render from daisyUI's stock default theme, unrelated to the brand palette.

Having three disconnected styling sources (raw CSS vars, Tailwind `brand.*` config, daisyUI default theme) risks silent visual mismatches: any element without an explicit Tailwind utility class falls back to the raw CSS system instead of the brand palette, and daisyUI components don't reflect brand colors at all.

## Goal

Consolidate on Tailwind's config (`tailwind.config.js`) as the single source of truth for color and design tokens, using Tailwind utility classes and daisyUI component classes instead of custom global CSS wherever possible.

## Planned Steps (confirm scope/order before starting; do one at a time)

1. Configure a custom daisyUI theme in `tailwind.config.js` (`daisyui: { themes: [...] }`) built from the existing `brand.*` hex values, so daisyUI components (`card`, `btn-primary`, `badge`, `base-100`, etc.) render using the brand palette instead of daisyUI's default theme.
2. Remove `--palette-1` through `--palette-6` and the global element rules that consume them (`h1`-`h4` colors, `a`/`a:hover` colors, `.button-primary`/`.button-secondary`/`.button-cancel`, `.badge`, `.section-title`, `.header-footer-bg`, `.on-dark-bg`) from `index.css`.
3. Migrate any component currently using the removed custom classes (`.button-*`, `.badge`, `.section-title`, `.header-footer-bg`) to daisyUI equivalents (`btn btn-primary`, `badge`, etc.) or Tailwind utility classes. Audit `DesignGuide.jsx` and other components for usages before removing the CSS.
4. Move `#root`/`body` layout concerns (width, flex, box-sizing, antialiasing) from `index.css` onto the actual `<body>`/`<div id="root">` elements in `index.html` as Tailwind utility classes, where feasible.
5. Configure `theme.extend.fontFamily` in `tailwind.config.js` for the `--sans`/`--heading`/`--mono` stacks; replace `font-family: var(...)` usages with `font-sans`/`font-mono` utility classes.
6. Consider replacing the global `a`/`code` base styling with an `@layer base` block using Tailwind's `@apply` and brand tokens (e.g. `@apply text-brand-tertiary underline;`) instead of raw CSS variables, so link/code styling still derives from the Tailwind theme even though it needs to remain a global rule (Preflight strips default anchor/code styling and there's no per-element JSX to attach classes to for every link).
7. Decide whether to configure Tailwind's `dark:` variant support (`darkMode` config) to replace the existing `@media (prefers-color-scheme: dark)` variable block, if/when dark theme support is picked back up (currently deferred per the main Implementation Plan).

## Out of Scope for This Plan

- Dark/light theme toggle feature work (tracked separately in the main Implementation Plan's Deferred Work).
- Any new visual design decisions — this is a consolidation/cleanup pass on the existing brand palette, not a redesign.

## Follow-up Notes from Visual Direction Brief

- Preserve the human-facing semantic color-role names when mapping the existing `brand.*` implementation tokens into the consolidated design-token system.
- Preserve the browser-safe primary font stack and treat monospace as optional decoration for small technical details only; do not introduce it for general content or code samples.
