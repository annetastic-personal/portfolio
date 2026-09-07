# Visual Direction Brief

## Status

Working brief for the September 10 employment-portfolio MVP. Confirmed decisions are recorded below; open questions identify decisions still needed before implementation.

## 1. Visual Thesis and Keywords

Create a warm, approachable portfolio that invites curiosity through bright color and thoughtful visual details, while using editorial structure, strong hierarchy, and generous whitespace to keep the work easy to understand. The site should feel distinctive without becoming noisy or difficult to scan.

No single visual reference is required. The design should be developed from the values and constraints in this brief because existing references did not include enough whimsy.

Primary visual values:

- Approachable: make the site feel welcoming, legible, and human.
- Curious: create invitations to explore through detail, variation, and thoughtful visual surprises.
- Warm: use color, tone, and visual softness to make the professional presentation feel personal rather than cold.

Secondary values:

- Polished and professional: maintain credibility for recruiters and technical interviewers.
- Joyful: retain personality and energy without making the experience feel childish or chaotic.
- Scannable: present technical evidence clearly and quickly.
- Accessible: ensure that warmth, whimsy, and color never compromise usability.

Design implication:

- Use quiet editorial-tech structure as the foundation: strong typography, generous whitespace, clear hierarchy, and crisp content groupings.
- Use the bright multi-color palette, friendly details, and small moments of visual surprise to supply warmth, curiosity, and whimsy.
- Keep the foundation calm and the accents intentional rather than making every surface bright or decorative.

Guiding values:

- Live curious: show curiosity, learning, exploration, and thoughtful problem-solving.
- Create with compassion: demonstrate empathy for users and collaborators, including accessibility and practical needs.
- Bring joy: make the experience warm, friendly, approachable, and engaging while remaining professional.

Confirmed keywords: approachable, curious, warm, friendly, compassionate, joyful, polished, professional, scannable, accessible.

## 2. Typography Choices

### Decisions

| Area         | Starting decision                                    |
| ------------ | ---------------------------------------------------- |
| Primary font | `"Trebuchet MS", "Segoe UI", sans-serif`             |
| Use          | Body text and headings                               |
| Font loading | Browser-safe; no external font dependency            |
| Weights      | `400` body, `700` headings and intentional emphasis  |
| Monospace    | Optional decoration for small technical details only |

### Type Scale

| Role            | Size / line height |
| --------------- | ------------------ |
| Body            | `1rem` / `1.6`     |
| Supporting text | `0.875rem` / `1.4` |
| Project title   | `1.25rem` / `1.25` |
| Section heading | `1.75rem` / `1.2`  |
| Page title      | `2.5rem` / `1.1`   |
| Hero title      | `3.5rem` / `1.05`  |

### Heading Hierarchy

| Heading | Structural role                      | Size / line height | Weight |
| ------- | ------------------------------------ | -----------------: | -----: |
| `h1`    | Page or primary title                |   `2.5rem` / `1.1` |  `700` |
| `h2`    | Major page section                   |  `1.75rem` / `1.2` |  `700` |
| `h3`    | Subsection or project group          | `1.25rem` / `1.25` |  `700` |
| `h4`    | Minor subsection or supporting group |    `1rem` / `1.25` |  `700` |

### Text Measure

| Content role                            |                Starting measure |
| --------------------------------------- | ------------------------------: |
| Long-form body and project-detail prose |                          `65ch` |
| Hero introduction                       |                          `48ch` |
| About content                           |                   `50ch`-`65ch` |
| Project-card descriptions               | Card width and internal padding |

### Implementation Rules

- Prioritize the shared scale and consistent component rules over one-off adjustments.
- Adjust type scale or measure only when content, wrapping, or readability demonstrates a need.
- Validate typography across desktop, tablet, mobile, and increased browser zoom.
- Do not use monospace for general content, navigation, project descriptions, or code samples.

## 3. Neutral Foundation and Accent Colors

Confirmed direction:

- Use a light theme for the MVP.
- Use white (`#ffffff`) for the neutral page background.
- Retain the existing bright, multi-color palette as part of the personal identity.
- Pair the bright palette with restrained neutral foundations so the overall presentation remains calm and scannable.
- Use color to support hierarchy and personality, not to make every surface visually loud.

Starting semantic role map:

| Token              | Current color                                                                                                                                               | Use                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `page-background`  | ![White swatch](../assets/White_ffffff.svg) `#ffffff` | Main page canvas                                                          |
| `text-primary`     | ![Dark purple swatch](../assets/DarkPurple_2d033b.svg) `#2d033b` | Headings, body copy, project descriptions, and other essential content    |
| `text-secondary`   | ![Muted purple-gray swatch](../assets/MutedPurpleGray_6b6375.svg) `#6b6375` | Metadata, captions, labels, helper text, and other supporting information |
| `surface-header`   | ![White swatch](../assets/White_ffffff.svg) `#ffffff` | Header background or header emphasis                                      |
| `surface-footer`   | ![Indigo swatch](../assets/Indigo_6366f1.svg) `#6366f1` | Footer background or deep visual anchor; matches `action-secondary`       |
| `surface-emphasis` | ![Teal swatch](../assets/Teal_14b8a6.svg) `#14b8a6` | Featured panels or joyful emphasis                                        |
| `surface-card`     | ![Surface card lavender swatch](../assets/SurfaceCard_e0d9e2.svg) `#e0d9e2` | Project cards; derived as a 15% tint of `text-primary` (`#2d033b`) blended with white |
| `action-primary`   | ![Green swatch](../assets/Green_65a30d.svg) `#65a30d` | Primary buttons, highest-priority actions, and positive status            |
| `action-secondary` | ![Indigo swatch](../assets/Indigo_6366f1.svg) `#6366f1` | Supporting buttons and secondary actions                                  |
| `link`             | ![Pink swatch](../assets/Pink_ff1fae.svg) `#ff1fae` | Text links and navigation links; use a persistent underline               |
| `focus`            | ![Dark purple swatch](../assets/DarkPurple_2d033b.svg) `#2d033b` | Keyboard focus indicator, separate from link color                        |
| `border-subtle`    | ![Muted purple-gray swatch](../assets/MutedPurpleGray_6b6375.svg) `#6b6375` | Quiet borders and content separation                                      |
| `border-emphasis`  | ![Teal swatch](../assets/Teal_14b8a6.svg) `#14b8a6` | Stronger borders or intentional card accents                              |

Heading color map:

| Heading | Current color                                                                                                                                                   |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `h1`    | ![Dark purple swatch](../assets/DarkPurple_2d033b.svg) `#2d033b` (`text-primary`) |
| `h2`    | ![Indigo swatch](../assets/Indigo_6366f1.svg) `#6366f1` (`surface-footer`) |
| `h3`    | ![Teal swatch](../assets/Teal_14b8a6.svg) `#14b8a6` (`surface-emphasis`) |
| `h4`    | ![Dark purple swatch](../assets/DarkPurple_2d033b.svg) `#2d033b` (`text-primary`), bold |

Use the semantic role names when choosing styles. Keep the existing `brand.*` names as implementation details until the design-token refactor is planned.

Starting accessibility treatment:

- Keep `link` and `focus` as separate semantic roles even when they appear on the same element.
- Use a visible `2px` focus outline with approximately `3px` offset as the initial focus treatment.
- Do not communicate focus through color change alone.
- Validate `#ff1fae` for normal-sized link text on white and other light surfaces; keep the underline even if the color passes.

Open decisions:

- Contrast-safe text pairings for the bright surfaces and actions.
- Whether the starting role assignments need adjustment after visual implementation.
- How much bright color is appropriate in the first viewport.

## 4. Color Roles and Accessibility Rules

Confirmed rules:

- Maintain readable color contrast.
- Do not rely on color alone to communicate meaning, status, or interaction.
- Preserve visible focus states and clear interactive feedback.
- Keep link identification and keyboard-focus indication visually distinct.
- Use a visible outline, ring, border, or equivalent non-color treatment for keyboard focus.
- Avoid color choices that create problems for colorblind visitors.
- Validate text, controls, links, cards, images, and focus indicators at mobile and desktop sizes.

Open decisions:

- Contrast targets for text, controls, borders, and decorative accents.
- Accessible pairings for each bright accent.
- Error/status treatment.
- Whether each accent needs a text label, icon, pattern, border, or other non-color cue.

## 5. Spacing and Layout Rules

Confirmed direction:

- Use generous whitespace while keeping the recruiter-facing content efficient to scan.
- Maintain clear visual hierarchy and consistent spacing.
- Keep the first screen focused on the professional purpose and strongest work.
- Support desktop, tablet, and mobile widths without clipping, overlap, or unstable layout.
- Prefer simple, reliable composition over dense case-study presentation.

Open decisions:

- Maximum content width.
- Page gutters at each responsive breakpoint.
- Section spacing scale.
- Hero composition and first-screen height.
- Project-card grid behavior and breakpoint changes.
- Text measure for introductions, About content, and project details.

## 6. Component and Surface Treatments

Confirmed direction:

- Project cards should be concise, scannable, and visually consistent.
- Each card should keep details, live-application, and source links separate and independently accessible.
- Interactions should be lightweight and purposeful.
- Images should show the actual application or relevant work and include meaningful alternative text.
- Use Tailwind utilities and daisyUI patterns consistently with the repository convention.

Open decisions:

- Card border, radius, shadow, and background treatment.
- Button and link hierarchy.
- Badge and technology-indicator treatment.
- Image aspect ratio, crop behavior, and caption treatment.
- Hover, focus, pressed, disabled, and unavailable states.
- Whether bright accents appear on cards as borders, labels, backgrounds, or image treatments.

## 7. Header, Footer, and Mobile Navigation

Confirmed direction:

- Navigation should be simple and intuitive.
- The resume link belongs in the main navigation.
- GitHub and LinkedIn belong in the appropriate professional/contact areas.
- Email should be visible and should not depend on a mailto link.
- The site shell must remain usable at mobile widths.

Open decisions:

- Header layout and visual weight.
- Whether the header is fixed, sticky, or in normal document flow.
- Navigation links and their order.
- Mobile navigation pattern.
- Footer content, grouping, and visual relationship to the header.
- How the tagline appears in the site shell, hero, or About section.

## 8. Motion and Interaction Principles

Confirmed direction:

- Prioritize speed, clarity, accessibility, and reliable navigation.
- Keep interactions lightweight and purposeful.
- Do not use automatic image rotation.
- Image galleries, when used, change only in response to visitor interaction and must be keyboard accessible.

Open decisions:

- Whether page-load or section-reveal motion is needed.
- Transition duration and easing.
- Hover and focus motion for cards, links, and buttons.
- Reduced-motion behavior.
- Whether motion is part of the MVP or deferred until after the layout is stable.

## 9. Boundaries and Anti-Patterns

Avoid:

- Dense case-study layouts that slow evaluation.
- Generic template styling without a deliberate visual direction.
- Excessive visual or interactive complexity.
- Bright color on every surface or uncontrolled use of the full palette.
- Accessibility problems caused by color, motion, contrast, focus, or responsive behavior.
- Ambiguous or nested interactive controls in project cards.
- Layouts that clip, overlap, or become difficult to scan on mobile.

Deferred from the MVP:

- Dark/light theme toggle.
- Illustrated avatar.
- Content-management tooling.
- Third-project expansion when its page, images, links, and content are not presentation-ready.
- Elaborate galleries or animation that do not materially improve project evaluation.
