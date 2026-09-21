# Visual Implementation Checklist

This checklist records implementation work for each section of the Visual Direction Brief. Add later sections as their visual decisions are ready to implement.

## Section 2: Typography

### Typography Tokens

- [x] Configure the browser-safe primary font stack: Trebuchet MS, Segoe UI, sans-serif.
- [x] Configure the same primary stack for body text and headings.
- [x] Configure a browser-safe monospace fallback stack for optional technical decoration only.
- [x] Define shared Tailwind typography tokens for body text, supporting text, project titles, section headings, page titles, and hero titles.
- [x] Set body text to 1rem with 1.6 line height and weight 400.
- [x] Set supporting text to 0.875rem with 1.4 line height.
- [x] Set heading and intentional emphasis weight to 700.

### Heading Hierarchy

- [x] Apply the agreed h1 size and line height: 2.5rem / 1.1.
- [x] Apply the agreed h3 size and line height: 1.25rem / 1.25.
- [x] Apply the heading tokens consistently to actual page headings and project titles.
- [x] Preserve the semantic HTML heading hierarchy while applying visual styles.

### Text Measure

- [x] Set the hero introduction to a starting maximum measure of 48ch.
- [x] Set About content to a starting measure between 50ch and 65ch.
- [x] Let project-card width and internal padding control card-description measure.

### Existing Implementation Alignment

- [x] Replace the current system-ui typography defaults with the agreed Trebuchet stack.
- [x] Remove or replace the current root font-size overrides that conflict with the shared body size.
- [x] Remove or replace global h1-h4 declarations that conflict with the agreed heading tokens.
- [x] Replace arbitrary typography values in the homepage and project-card components with shared Tailwind tokens.

## Section 3: Neutral Foundation and Accent Colors

### Semantic Palette Tokens

- [x] Add Tailwind aliases for the approved semantic roles: `page-background`, `text-primary`, `text-secondary`, `surface-header`, `surface-footer`, `surface-emphasis`, `surface-card`, `action-primary`, `action-secondary`, `link`, `focus`, `border-subtle`, and `border-emphasis`.
- [x] Map each semantic role to the approved palette value from the Visual Direction Brief.
- [x] Keep the existing `brand.*` values available only as an implementation bridge until active components migrate to semantic roles.

### Active Page and Component Alignment

- [x] Set the global page shell background to `page-background` white.
- [x] Replace the project-card background tint with `surface-card` (`#e0d9e2`).
- [x] Apply `text-primary` to essential homepage text and `text-secondary` only to supporting information.
- [x] Apply the approved heading color map as matching heading levels are present: `h1`/`h4` use `text-primary`, `h2` uses `surface-footer`, and `h3` uses `surface-emphasis`.
- [x] Apply `link` and `focus` semantic roles where links and keyboard-focus treatments are implemented.
- [x] Apply `border-subtle` and `border-emphasis` through Tailwind utilities where component boundaries require them.

### Palette Implementation Cleanup

- [x] Replace active component references to generic `brand.*` color roles with semantic palette roles where the mapping is established.
- [x] Keep dark-theme behavior and legacy global color variables out of this MVP pass unless they directly conflict with the light-theme implementation.

## Section 4: Color Roles and Accessibility

### Contrast and Color Perception

- [ ] Validate `link` (`#ff1fae`) against the white page background and the `surface-card` background for normal-sized text.
- [ ] Adjust link or surface colors if the actual pairings do not meet the intended contrast level.
- [ ] Review text, controls, borders, focus indicators, and status treatments against their actual backgrounds at desktop and mobile sizes.
- [ ] Confirm the active palette does not require color perception to distinguish project status, interaction state, or content meaning.

### Links and Focus

- [x] Preserve a persistent underline or another equally clear non-color treatment for text links.
- [x] Keep link identification visually distinct from keyboard-focus indication.
- [x] Use a visible `2px` focus outline or ring with an approximately `3px` offset for every keyboard-accessible interactive element.
- [x] Apply a visible semantic focus ring to the active project-card and homepage link controls.

### Images and Non-Color Cues

- [x] Provide meaningful alternative text for the active project-card images.
- [x] Audit meaningful images on project detail pages and future site-shell components for useful alternative text.



### Existing Implementation Alignment

- [x] Validate the active homepage and project cards at desktop and mobile sizes for readable text, identifiable links, visible focus, usable controls, meaningful images, and clear status treatments.
- [x] Recheck the accessibility sample pairings against the final implemented palette values.

## Section 5: Spacing and Layout

### Homepage Composition

- [x] Keep the homepage compact enough for quick evaluation.
- [x] Present the summary blurb before the project cards.
- [x] Keep project cards focused on the project name, summary, screenshot, technologies, and links.

### Responsive Layout Values

- [x] Apply a maximum content width of `72rem`.
- [x] Use responsive page gutters of `1rem` on mobile, `1.5rem` on tablet, and `2rem` on desktop.
- [x] Apply the shared spacing rhythm of `0.75rem`, `1.5rem`, `4rem`, and `6rem` where those relationships occur.

### Project-Card Layout

- [x] Render the current two projects as a single-column stack for the MVP.
- [ ] Validate card width, internal spacing, and image proportions at mobile and desktop sizes.
- [ ] Revisit the brief's two-column card layout at `48rem` and above after responsive card proportions are validated.

## Final Validation

Complete this section after the visual implementation has been brought in line with the full brief and the responsive layout is in place.

### Section 2: Typography

- [ ] Review typography at desktop, tablet, and mobile widths.
- [ ] Review typography at 200% browser zoom.
- [ ] Confirm heading wrapping remains natural at narrow widths.
- [ ] Confirm body text and project prose remain readable without one-off sizing adjustments.
- [ ] Confirm fallback fonts do not create clipping, overlap, or unstable layout.
