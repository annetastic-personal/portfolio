# Implementation Timeline

## Objective

Publish the employment-focused portfolio to `https://annetasticthoughts.com` by **Thursday, September 10, 2026**, ready to include in the job application on September 11.

This schedule prioritizes the MVP acceptance criteria: a polished main page, at least two complete projects, dedicated project-details pages, responsive and accessible presentation, and a verified public deployment.

## Friday, September 4 (3-4 hours)

### Goals

- [x] Confirm the existing React and Vite application starts locally and produces a production build.
- [x] Review the current application structure and choose the reusable data and component structure for project content, cards, and project-details pages. (Implementation is future work.)
- [x] Gather and organize the MVP content for TTGCollector and Pest Degree Day Calculator: summaries, responsibilities, technologies, key features, links, and safe screenshots.
- [x] Draft the concise professional introduction, About Me content, skills list, contact information, resume link, and professional profile links.

### Completion Check

- [x] Confirm the production build succeeds.
- [x] Confirm the content needed to build two complete project pages is available or has a clear, time-boxed replacement.

## Saturday, September 5 (4 hours)

### Goals

- [ ] Establish the light-theme visual direction and shared site layout.
- [ ] Build the main-page introduction, navigation, About Me, skills, contact, and resume/profile link areas.
- [ ] Add the structured project data for TTGCollector and Pest Degree Day Calculator.
- [ ] Implement the reusable project-card component and feature TTGCollector first.

### Completion Check

- [ ] Confirm the main page explains the target role and strongest work within the first screen.
- [ ] Confirm both project cards show a summary, visual preview placeholder or final image, technologies, and independent details, live, and source actions where applicable.

## Sunday, September 6 (0 hours)

### Goal

- [ ] Keep the day free. Do not plan critical implementation or validation work for this date.

## Monday, September 7 (4-6 hours)

### Goals

- [ ] Configure client-side routing with stable URLs under `/projects/{project-slug}`.
- [ ] Build the reusable project-details page structure.
- [ ] Complete the TTGCollector project-details page, including purpose, features, technologies, architecture, contributions, screenshots, and available links.
- [ ] Confirm direct navigation and refresh behavior for the TTGCollector route in the local production preview.

### Completion Check

- [ ] Confirm TTGCollector is complete, readable, and accessible at its shareable project URL.
- [ ] Confirm the card's project-details action, live link, and source link are separate and keyboard accessible.

## Tuesday, September 8 (4 hours)

### Goals

- [ ] Complete the Pest Degree Day Calculator project-details page to the same content and quality standard.
- [ ] Add final project images with meaningful alternative text.
- [ ] Implement a visitor-controlled, keyboard-accessible image gallery only where multiple images improve a project page.
- [ ] Add friendly, informative unavailable-live-application messaging where required.

### Completion Check

- [ ] Confirm both featured projects meet the required project-content criteria and have working details routes.
- [ ] Confirm images load, have meaningful alt text, and galleries do not rotate automatically.

## Wednesday, September 9 (4 hours)

### Goals

- [ ] Decide whether the Excel sheet parser is presentation-ready; add it only if it does not delay the two-project MVP.
- [ ] Complete responsive layout work for desktop, tablet, and mobile widths.
- [ ] Perform the accessibility and content review: keyboard navigation, focus visibility, link labels, contrast, heading structure, copy, and layout overflow.
- [ ] Test every external link, resume link, project-details route, live application, and source repository link.
- [ ] Run the production build and resolve MVP-blocking defects.

### Completion Check

- [ ] Confirm the two-project MVP meets the acceptance criteria locally.
- [ ] Confirm any third project is included only when its page, images, links, and content are presentation-ready.

## Thursday, September 10 (4-6 hours)

### Goals

- [ ] Draft the repository README for a public-facing portfolio project: purpose, stack, links, docs map, and current status.
- [ ] Deploy the production build to the personal server.
- [ ] Configure and verify `https://annetasticthoughts.com` as the canonical HTTPS URL.
- [ ] Test the deployed site in Firefox, Chrome, and Edge at desktop and mobile-sized viewports.
- [ ] Verify direct navigation, refresh, and external opening for each project-details URL.
- [ ] Complete final visual and content review; fix deployment, routing, broken-link, image, accessibility, and responsive-layout defects.
- [ ] Record the final public URL for use in the September 11 application.

### Release Check

- [ ] Confirm the deployed portfolio is publicly accessible without authentication over HTTPS.
- [ ] Confirm the canonical URL, main page, project cards, at least two project-details pages, images, links, resume, contact information, mobile layout, and production build all work as expected.
- [ ] Treat any failure in these checks as release-blocking and use the remaining time for correction and retesting.

## Scope Guardrails

- Deliver two polished projects before starting a third.
- Defer the avatar, content-management tooling, dark theme, and other future enhancements until after the application deadline.
- Prefer clear, reliable, accessible content and navigation over additional visual complexity.

## Caveats

The largest risk is that the plan assumes these can all fit together cleanly:

- A polished custom visual design and responsive implementation.
- Reusable cards, routing, and two full project-details pages.
- Collecting or cleaning screenshots and writing credible project content.
- Deployment configuration, including direct-route refresh support and HTTPS.
- Cross-browser, mobile, accessibility, and link validation.

### Non-negotiable scope for MVP

- Main page with a clear professional summary, About section, skills, contact, resume, and two project cards.
- TTGCollector and Pest Degree Day Calculator with concise but complete details pages.
- Final screenshots and working external links.
- Reliable public deployment and responsive checks.

### Timebox or drop if timeline compromised

- Design polish: stop after the layout is coherent, readable, and responsive; do not chase visual refinement before content and routing work.
- Image galleries: use one image per project unless multiple screenshots add real evidence. A gallery is optional and introduces accessibility/testing work.
- Third project: decide by Wednesday morning; omit it immediately unless its copy, screenshot, links, and detail content are already ready.
- Cross-browser testing: verify the deployed site in one primary browser first, then use Chrome/Edge/Firefox checks as a final defect sweep.
