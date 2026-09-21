# Project Card Implementation Checklist

## Define The Contract

- [ ] Identify the project fields the card must display.
- [ ] Define required and optional project fields in the project data source.
- [ ] Establish fallbacks for missing images, descriptions, links, and technology tags.
- [ ] Decide which destination is the primary card action.

## Build The Component

- [ ] Create the `ProjectCard` component structure.
- [ ] Render the project image with descriptive alternative text.
- [ ] Render the project title, summary, and technology tags.
- [ ] Add links for the live project and source repository when available.
- [ ] Keep external-link behavior consistent with the rest of the site.
- [ ] Avoid rendering empty visual sections when optional data is absent.

## Style The Card

- [ ] Match the portfolio's existing typography, color, spacing, and border conventions.
- [ ] Keep the card layout readable at narrow and wide viewport sizes.
- [ ] Constrain image dimensions to prevent layout shifts.
- [ ] Provide visible hover and keyboard-focus states for interactive elements.
- [ ] Ensure long project names and tag lists wrap without overlapping content.

## Integrate The Card

- [ ] Render project data through `ProjectGallery` or the owning projects view.
- [ ] Provide stable keys when rendering a project-card list.
- [ ] Confirm cards render correctly for projects with minimal and complete metadata.
- [ ] Verify navigation targets and external URLs.

## Validate

- [ ] Add or update focused component tests for required and optional project data.
- [ ] Verify all card actions are reachable and operable by keyboard.
- [ ] Check image alternative text and heading hierarchy.
- [ ] Run the relevant test, lint, and production-build commands.
- [ ] Review the card at mobile and desktop viewport sizes.
