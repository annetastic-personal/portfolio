# Requirements

## 1. Purpose

Define the requirements for an employment-focused portfolio website that presents professional background, selected work, and evidence of technical ability to prospective employers.

Position the portfolio for Full-Stack Web Developer and Application Developer roles across future job applications. Present mid-level capabilities through demonstrated work rather than displaying a seniority label.

## 2. Goal

Deliver a polished, publicly accessible portfolio by **September 10, 2026**, so it can be included in a job application submitted on **September 11, 2026**.

## 3. Target Audience

The primary audience is:

- Hiring managers.
- Recruiters.
- Technical interviewers.
- Potential employers evaluating professional experience and project quality.

The portfolio should communicate its value quickly and make relevant work easy to inspect.

Within the first 10 seconds, visitors should understand that Anne Odom:

- Is a Full-Stack Web and Application Programmer.
- Has broad technical expertise across multiple technology stacks.
- Builds business and research applications that collect, clean, manage, analyze, and use data effectively.
- Is approachable and communicates effectively with technical and non-technical people.

### 3.1 Selling Points

Prioritize these selling points in the portfolio's content and presentation:

- Problem-solving.
- Practical business and research application development.
- Technical breadth across multiple stacks.
- Interpersonal skills.
- Curiosity, compassion, and joy in the work.

## 4. Portfolio Content

### 4.1 About Me

Include a concise About Me section on the main page for the MVP. It should cover:

- Professional introduction.
- Relevant skills and experience.
- Career interests or target roles.
- Short explanation of professional strengths.
- Emphasis on problem-solving and interpersonal skills.
- Positioning as an approachable developer who works across multiple technology stacks.
- Links to professional profiles, contact information, and a downloadable resume.

Defer a separate full career or About page unless it can be added without delaying the MVP. Keep the content structure expandable for a future dedicated page.

### 4.2 Projects

The portfolio must present selected samples of work. Each project should include:

- Project name.
- Short description.
- Your role and contributions.
- Technologies used.
- Important features or capabilities.
- Project images.
- Link to the live application when available.
- Link to source code when appropriate.

For the MVP:

- Include a minimum of 2 projects.
- Target 3 projects by September 10 if the third project is presentation-ready.
- Do not delay the MVP to reach the 3-project target.
- Plan to grow the portfolio to 5 featured projects over time.

The initial project candidates are:

- TTGCollector.
- Pest Degree Day Calculator.
- Excel sheet parser.

### 4.3 Project Cards

The main page must display a card for each selected project.

Each card should provide:

- Project title.
- Brief summary.
- Primary image or visual preview.
- Technology indicators.
- Link to project details.
- Live application link when available.
- Source-code link when appropriate.

Cards should make projects easy to scan without requiring the visitor to open every project.

Use a clearly labeled project-details link or button as the card's primary action. Keep live-application and source-repository links separate and independently accessible.

Feature TTGCollector first or most prominently on the main page. Use it to demonstrate the primary skills where applicable, and use the other projects to demonstrate complementary skills and technical breadth.

### 4.4 Project Details Pages

Each selected project should have a dedicated details page accessible by clicking its project card.

- Each page must have a stable, shareable URL under `/projects/{project-slug}`.
- Each page must explain the application's purpose, key features, technologies, architecture, and your contributions.
- Use structured prose and screenshots to keep the content thorough but scannable.
- Include live-application and source-repository links when appropriate.
- Include measurable outcomes when credible information is available; do not invent metrics.

Project cards should remain concise and scannable rather than duplicating the full project documentation.

### 4.5 Project Images

Project images should:

- Show the actual application, interface, or relevant work.
- Support the project description.
- Load reliably.
- Include meaningful alternative text.
- Avoid exposing private or sensitive information.

A project card may include a carousel or image gallery when multiple screenshots help demonstrate the work.

When a carousel is used, change images only in response to visitor interaction. Do not rotate images automatically. Provide clearly labeled, keyboard-accessible controls.

### 4.6 Live Applications

When a live application exists:

- Provide a clearly identifiable link.
- Open the application reliably.
- Indicate when a project is unavailable, incomplete, or requires special access.
- Detect when a live application is unavailable and display a friendly, informative message instead of a broken or blank experience.
- Explain when no live link is available.
- Exclude partial-demo projects from the MVP.

## 5. Main Page Structure

The main page should include:

1. A clear introduction or professional summary.
2. A concise About Me section.
3. A featured projects section.
4. Concise project cards that link to dedicated project-details pages.
5. Links to live applications, source repositories, professional profiles, and a downloadable resume.
6. Visible contact information.

The first screen should make the portfolio's purpose and the strongest available work apparent within a few seconds. Cards should provide enough information to encourage inspection without duplicating the full project documentation.

Use a direct recruiter-facing resume structure. Present technical evidence clearly and quickly, prioritizing speed, clarity, and simple navigation. Avoid dense case-study presentation, unnecessary visual complexity, and interactions that slow evaluation.

## 6. Design and User Experience

### 6.1 Brand and Experience Principles

The portfolio should reflect Anne Odom's personal tagline:

> Live curious. Create with compassion. Bring joy.

Use these principles to guide the portfolio's content, visual direction, and interactions:

- **Live curious:** Show curiosity, learning, exploration, and thoughtful problem-solving.
- **Create with compassion:** Demonstrate empathy for users and collaborators, with attention to accessibility and practical needs.
- **Bring joy:** Make the experience warm, friendly, approachable, and engaging while remaining clear and professional.

The portfolio should:

- Feel polished and employment-focused.
- Use a deliberate visual direction rather than a generic template.
- Make project content easy to scan.
- Use responsive layouts for desktop, tablet, and mobile screens.
- Maintain clear visual hierarchy.
- Keep navigation simple.
- Use consistent spacing, typography, colors, and card treatments.
- Use a light theme for the MVP.
- Avoid unnecessary pages or features that do not support the job application.

Present relevant technical skills consistently in the general skills section and on project-details pages.

Consider a light/dark theme toggle as future scope; it is not required for the MVP.

## 7. Technical Requirements

The portfolio should:

- Use the existing React and Vite application.
- Use Tailwind CSS or a comparable CSS framework to simplify layout and responsive styling.
- Use client-side routing for project-details pages and support direct navigation to each project URL.
- Support reusable project-card and image-gallery components.
- Produce a successful production build.
- Be deployable to a publicly accessible URL.

## 8. Accessibility and Quality

The portfolio should:

- Provide meaningful image alt text.
- Support keyboard navigation.
- Use readable color contrast.
- Use descriptive link labels.
- Preserve usability at mobile widths.
- Avoid overlapping, clipped, or unreadable content.
- Provide visible feedback for interactive controls such as carousels.
- Test external links and live applications before deployment.

## 9. Content Management

### 9.1 MVP Requirement

For the September 10 deadline, project content may be defined directly in the application source using a consistent data structure.

### 9.2 Future Scope

An easy-to-run script or web interface for adding project content may be added later.

An illustrated personal avatar may be added later to support the fun and friendly visual direction. It is not required for the September 10 MVP.

These features are not required for the initial employment portfolio and must not delay the MVP.

## 10. Deployment Requirements

Before September 10:

- Deploy the portfolio publicly.
- Use `https://annetasticthoughts.com` as the canonical public URL.
- Confirm the deployed URL works without authentication.
- Serve the deployed portfolio over HTTPS.
- Test the site on desktop and mobile-sized viewports.
- Verify project images load.
- Verify live-application, source-code, and professional links.
- Confirm the final URL is ready for inclusion in the September 11 application.

## 11. Out of Scope for MVP

The initial release does not require:

- A project-management web interface.
- A content administration dashboard.
- Automated project importing.
- User accounts or authentication.
- Portfolio editing by external users.
- Complex backend services.
- General-purpose contribution workflows.
- Documentation intended to help others fork or extend the portfolio.

The existing broad Wiki documentation is intentionally reduced because this portfolio is being built for employment presentation rather than outside contribution.

## 12. Acceptance Criteria

The MVP is complete when:

- The site is publicly accessible.
- The About Me content is present and polished.
- Selected projects appear as cards on the main page.
- Each featured project links to a dedicated project-details page.
- Each project has the required descriptive content.
- Each project-details page explains the application's purpose, main features, technical tools, and architecture.
- Project cards remain concise and scannable rather than containing the full project description.
- Project images display correctly.
- Image carousels work where included.
- Live-application links work where available.
- Source-code links work where included.
- The site is responsive on mobile and desktop.
- Accessibility basics have been reviewed.
- The production build succeeds.
- The portfolio is ready to include in the September 11 job application.
