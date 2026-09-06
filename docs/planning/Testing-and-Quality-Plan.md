# Testing and Quality Plan

## Scope

This plan is future work after the initial employment-portfolio MVP. It must not delay the MVP deadline or expand the MVP release criteria.

The goal is to turn the portfolio's existing manual acceptance checks into repeatable, executable quality checks for future changes.

## Implementation Plan

### 1. Establish the test foundation

- Choose and configure the test runner for React component and unit tests.
- Add the required test scripts to `package.json`.
- Add a predictable test environment and shared test setup.
- Document how to run focused tests and the complete test suite.

### 2. Add content and data-shape tests

- Validate that every project entry has the required fields.
- Verify that every project slug is unique and URL-safe.
- Verify that project images include meaningful alternative text.
- Verify that links use the expected formats and remain independently represented.
- Verify that project status data is complete and internally consistent.

### 3. Add component and route tests

- Test the home page and its primary sections.
- Test project cards and their independent details, live-application, and source links.
- Test project-details pages for valid project slugs.
- Test unknown project slugs and the not-found experience.
- Test navigation and direct route behavior within the client application.
- Test unavailable or maintenance-status messaging.

### 4. Add accessibility checks

- Test meaningful accessible names for links, buttons, navigation, and gallery controls.
- Test keyboard navigation and visible focus behavior.
- Add automated accessibility checks where practical.
- Check heading structure, image alternative text, color contrast, and landmark structure.

### 5. Add browser smoke coverage

- Test loading the production build in a browser.
- Test navigation from the home page to each project-details page.
- Test direct navigation and refresh for project URLs.
- Test resume, contact, professional-profile, source-code, and live-application links.
- Test representative desktop, tablet, and mobile-sized viewports.
- Confirm there is no clipped, overlapping, or unreadable content.

### 6. Add CI quality gates

- Run dependency installation with `npm ci`.
- Run linting.
- Run unit and component tests.
- Run browser smoke tests when the CI environment supports them.
- Run the production build.
- Block deployment when required checks fail.

### 7. Add deployment verification

- Verify the deployed HTTPS URL after release.
- Verify the canonical host and SPA route fallback behavior.
- Verify project routes after refresh and direct external navigation.
- Verify images, downloads, and external links in the deployed environment.
- Record the verification result for each release.

## Future Release Gate

A future portfolio release should not be considered complete until:

- The test suite passes.
- Linting passes.
- The production build succeeds.
- Browser smoke coverage passes for critical routes and links.
- Accessibility checks have no unresolved release-blocking findings.
- The deployed site has been checked at representative viewport sizes.
- Direct project-route navigation and refresh work on the production host.

## Deferred from MVP

Do not add this work to the initial MVP timeline unless a release-blocking defect requires it. Prioritize the MVP's required content, routes, responsive presentation, accessibility review, production build, and public deployment first.
