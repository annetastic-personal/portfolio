# Implementation Plan

## MVP Goal

Deliver a public, employment-focused portfolio by September 10, 2026, for inclusion in the September 11 job application.

## Implementation Order

1. DONE: Confirm the existing React and Vite application runs and builds.
2. Establish a fun, friendly, accessible, and clear light-theme presentation with a direct recruiter-facing resume structure.
3. DONE: Define project content in a consistent data structure within the application source.
4. Build the shared site layout, navigation, About section, skills section, contact information, and resume link.
5. Build reusable project cards for the main page with a labeled project-details action.
6. Configure client-side routes for project-details pages under `/projects/{project-slug}` and support direct navigation to each route.
7. Add a lead image to each project card. Add visitor-controlled, keyboard-accessible image galleries to details pages only when additional screenshots materially improve the project story; do not enable automatic rotation.
8. Add live-application and source-repository links where available.
9. Handle unavailable live applications with a friendly message while keeping project information accessible.
10. Add the initial projects and verify that each has complete, readable content.
11. Deploy to `https://annetasticthoughts.com` on the personal server.
12. Test the deployed site and complete the final content review.

## MVP Scope

- Include at least 2 projects.
- Target 3 projects if the third is presentation-ready by the deadline.
- Feature TTGCollector most prominently.
- Include dedicated project-details pages for TTGCollector and Pest Degree Day Calculator.
- Prioritize speed, clarity, accessibility, and reliable navigation.
- Keep interactions lightweight and purposeful; avoid visual or interactive complexity that does not improve evaluation.

## Deferred Work

- Add an illustrated personal avatar.
- Add an easy-to-run project-content script.
- Add a project-content web interface.
- Add measurable outcomes when credible information becomes available.
- Reconsider JavaScript dependence after the application deadline.
- Consider adding a light/dark theme toggle after the application deadline.

## Technical Notes

- Confirm that the deployment server supports direct navigation to project routes.
- Keep deployment credentials outside the repository and documentation.
- Use the existing React and Vite setup.
- Use Tailwind CSS or the existing comparable styling approach.
- Keep `src/data/projects.js` as the source of truth for project metadata, Vite-imported screenshots, meaningful alternative text, external links, and current project-status notes. Derive project-details routes from each project's `slug`.
- Keep guest credentials, if ever needed, on project-details pages only and never in project cards or source-controlled content notes.
- Keep live-application and source-repository links independent from the project-details action.
- Present the Pest Degree Day Calculator as a project case study. Do not provide a live-application link until its forecasting deployment is repaired; show screenshots of currently accessible functionality and display a factual maintenance status note.

## Validation Checklist

- Build the production bundle successfully.
- Test Firefox, Chrome, and Edge on PC and mobile-sized viewports.
- Verify project routes, images, live links, source links, resume link, and visible email information.
- Test direct navigation, refresh, and external opening of project-detail URLs.
- Check keyboard navigation, accessible names, independent link focus, readable contrast, image alternative text, and layout at mobile widths.
- Verify the light-only MVP theme remains readable and accessible across supported browsers and viewport sizes.
- Confirm the deployed site serves the production build over HTTPS.
- Confirm `https://annetasticthoughts.com` is the canonical public URL and any configured alternate host redirects to it.
- Verify carousel controls are clearly labeled, keyboard accessible, and keep the selected image stable until the visitor changes it.
- Avoid nested or ambiguous interactive controls in project cards.
- Review for misspellings, missing information, broken links, and unstable CSS behavior.
