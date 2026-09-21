<!--
Remaining MVP checklist. Complete the sections from top to bottom where
possible; each checkbox represents one independently verifiable goal.
-->

# End-of-Days MVP Checklist

## Project Content and Links

- [ ] Add the live-application URL for each project when a working public application is available.
- [ ] Add the source-repository URL for each project when the repository can be shared.
- [ ] Render the project details action independently from the live-application action.
- [ ] Render the source-repository action independently from the live-application action.
- [ ] Replace the project-details placeholder text for live access with project-specific content.
- [ ] Display a factual maintenance-status message for the Pest Degree Day Calculator.
- [ ] Keep the Pest Degree Day Calculator project information and screenshots accessible while its forecasting deployment is unavailable.
- [ ] Confirm TTGCollector has complete, readable content for its purpose, role, features, technologies, architecture, screenshots, and available links.
- [ ] Confirm the Pest Degree Day Calculator has complete, readable content for its purpose, role, features, technologies, architecture, screenshots, and available links.
- [ ] Decide whether the Excel sheet parser is presentation-ready for the MVP.
- [ ] Omit the Excel sheet parser if its content, screenshot, links, or detail page are not presentation-ready.

## Navigation and Error States

- [x] Confirm the home page details action opens `/projects/ttgcollector`.
- [x] Confirm the home page details action opens `/projects/pest-degree-day-calculator`.
- [ ] Register the not-found experience for unknown routes and project slugs.
- [ ] Confirm direct navigation to each project-details URL works in the local production preview.
- [ ] Confirm refreshing each project-details URL preserves the page instead of returning a server error.
- [ ] Confirm project, resume, profile, and contact links are independently keyboard accessible.

## Accessibility and Responsive Review

- [ ] Verify the main page presents the professional summary and strongest work within the first screen at desktop width.
- [ ] Verify the main page remains readable and usable at tablet width.
- [ ] Verify the main page remains readable and usable at mobile width.
- [ ] Verify each project-details page remains readable and usable at desktop width.
- [ ] Verify each project-details page remains readable and usable at tablet width.
- [ ] Verify each project-details page remains readable and usable at mobile width.
- [ ] Verify every meaningful project image has meaningful alternative text.
- [ ] Verify gallery controls have clear accessible names.
- [ ] Verify gallery controls are keyboard accessible.
- [ ] Verify gallery images remain selected until the visitor changes them.
- [ ] Verify galleries do not rotate automatically.
- [ ] Verify visible keyboard focus states for navigation, links, and gallery controls.
- [ ] Verify heading structure is logical on the home, About, and project-details pages.
- [ ] Verify link and text contrast against each actual background.
- [ ] Verify no content is clipped, overlapped, or unreadable at supported viewport sizes.
- [ ] Verify the light-only MVP presentation remains readable when the operating system prefers dark mode.
- [ ] Verify reduced-motion preferences do not introduce unnecessary motion.

## Testing and Validation

- [ ] Run the production build successfully.
- [ ] Run linting and resolve MVP-blocking defects.
- [ ] Test the home page in the primary desktop browser.
- [ ] Test the home page in Firefox.
- [ ] Test the home page in Edge.
- [ ] Test the project-details pages in the primary desktop browser.
- [ ] Test the project-details pages in Firefox.
- [ ] Test the project-details pages in Edge.
- [ ] Test project routes after direct navigation and refresh.
- [ ] Test every external project link.
- [ ] Test the GitHub link.
- [ ] Test the LinkedIn link.
- [ ] Test the resume download link.
- [ ] Test the visible email information.
- [ ] Review all visible copy for misspellings and missing information.
- [ ] Review all project images for loading failures and incorrect alternative text.
- [ ] Record any validation failures that cannot be resolved before release.

## Release and Deployment

- [ ] Draft the public-facing repository README with the project purpose.
- [ ] Document the application stack in the repository README.
- [ ] Document the public portfolio URL in the repository README.
- [ ] Document the relevant project and planning files in the repository README.
- [ ] Document the current project status in the repository README.
- [ ] Confirm the deployment server supports direct navigation to project routes.
- [ ] Deploy the production build to the personal server.
- [ ] Configure `https://annetasticthoughts.com` as the canonical HTTPS URL.
- [ ] Configure any alternate host to redirect to the canonical URL.
- [ ] Confirm the deployed site is publicly accessible without authentication.
- [ ] Confirm the deployed site serves the production build over HTTPS.
- [ ] Confirm the deployed home page loads correctly.
- [ ] Confirm the deployed TTGCollector route loads correctly.
- [ ] Confirm the deployed Pest Degree Day Calculator route loads correctly.
- [ ] Confirm deployed project routes work after refresh.
- [ ] Confirm deployed images load correctly.
- [ ] Confirm deployed resume downloads correctly.
- [ ] Confirm deployed external links work correctly.
- [ ] Test the deployed site in Firefox at desktop and mobile-sized viewports.
- [ ] Test the deployed site in Chrome at desktop and mobile-sized viewports.
- [ ] Test the deployed site in Edge at desktop and mobile-sized viewports.

## Final Application Readiness

- [ ] Complete the final visual review.
- [ ] Complete the final content review.
- [ ] Resolve any deployment, routing, link, image, accessibility, or responsive defects found during final review.
- [ ] Confirm the two-project MVP meets the required acceptance criteria locally.
- [ ] Confirm the two-project MVP meets the required acceptance criteria on the deployed site.
- [ ] Record the final public URL for the September 11 job application.
