# Outstanding Questions

Use this page to resolve requirements before implementation. Answer each question briefly; `defer` is a valid answer for decisions that are not required for the September 10 MVP.

## Employment Positioning

1. **Priority:** What job title or role is this portfolio targeting?
   Target Job title: Full-Stack web and application developer roles
   Seniority: mid-level, but portfolio should avoid label and focus on capabilities
   Emphasize skills: React, JavaScript, C#, .NET, PostgreSQL, Microsoft SQL Server, and practical business application development
   Additional experience: Tailwind, Bootstrap, MongoDB, Python, HTML, CSS.
2. Is the portfolio intended for one specific application or multiple roles?
   Will use it for all future job applications
3. What should a hiring manager understand about you within the first 10 seconds?

- Full-Stack Web and Application Programmer
- Technical areas of expertise
- Approachable, personable, and effective at communicating with both technical and non-technical people.
- Builds business and research applications that collect, clean, manage, analyze, and use data effectively.

4. What is your strongest selling point: technical breadth, problem-solving, design, delivery, domain knowledge, or something else?

- Primary: Problem-solving.
- Technical value: Builds practical business and research applications that collect, clean, manage, analyze, and use data.
- Technical breadth: Works across multiple technology stacks.
- Interpersonal value: Approachable, personable, and effective with technical and non-technical people.
- Personal differentiator: Brings curiosity, compassion, and joy to the work.

5. Are there technologies or skills you specifically need the portfolio to emphasize?
   Primarily:

- React.
- JavaScript.
- .Net, VB.Net, C#
- PostgreSQL.
- Microsoft SQL Server.
- Experience across multiple stacks

Secondary:

- Tailwind and Bootstrap.
- MongoDB. (do not yet have a project that demonstrates this knowledge)
- Python.
- HTML and CSS.

Presentation: Include the secondary list in the general skills section and mention each skill on relevant project-details pages.
MongoDB: Include it as experience, but do not imply project evidence until a project demonstrates it.

## Content Scope

6. **Priority:** How many projects should the MVP include?
   Minimum: 2 projects.
   Target: 3 projects.
   Future goal: 5 projects.

Projects to include:

- Required: TTG Collector
- Required: Pest Degree Day Calculator
- Maybe: Excel sheet parser (depends on being presentation-ready based on content and anonymization)

7. **Priority:** Which project is the strongest and should receive the most visual emphasis?
   TTGCollector
8. Are any projects unfinished, private, outdated, academic, or based on someone else's work?

- Pest Degree Day calculator - no github available, code is private, finished application is not. However, the finished application is maintained by a different developer at an old employer, and it is not always functioning properly; content suggestions in Content-Notes.md for future content creation
- Excel spreadsheet parsing console information - created for a previous job application but still showcases skills. Excel spreadsheet content provided by the interviewers, may need to adjust/anonymize content - content suggestions in Content-Notes.md

9. **Priority:** Can you publicly show all screenshots, code, names, data, and interfaces?

- Pest Degree Day Calculator code: private; screenshots and description allowed.
- Excel parser sample data: fictionalize or anonymize before publication.
- Other project code and screenshots: allowed.

10. Do you want to include non-application work such as documentation, illustrations, writing, automation, or design artifacts?
    defer

## Project Details

11. Should each project have its own URL, such as `/projects/project-name`, so it can be linked directly?
    Main URL: www.annetasticthoughts.com
    Project details pages: mainurl/projects/project-name
12. What should happen when a project has no live application?
    Include brief explanation for why live not available
13. What should happen when a live application is unavailable, requires credentials, or is only a partial demo?
    Requires credentials: Provide guest credentials only if safe and practical.
    Credentials unavailable: Explain that access is restricted and provide screenshots or project details instead.
    Unavailable application: Show the friendly unavailable message and keep the project information accessible.
    Partial demo: Exclude from the MVP
14. Should source-code links point to a repository, a specific folder, or a specific commit?
    a repository
15. Do you want project pages to include code snippets, architecture diagrams, technical decisions, or only prose and screenshots?
    prose and screenshots, easy to read, thourough but scannable via structured layout
16. Should project pages include measurable outcomes, such as performance improvements, users, completion time, or delivered features?
    defer

## About and Contact

17. **Priority:** What name should appear publicly?
    Anne Odom
18. Do you want a professional headshot, illustrated avatar, or no personal image?
    Undecided
19. **Priority:** Which contact methods should be shown?
    email only
20. Should the email address be visible, placed behind a mail link, or replaced with a contact form?
    email should be visible, do not include mailto link
21. Which professional profiles should be linked: GitHub, LinkedIn, resume, or others?
    Github, LinkedIn, Resume. Github links will be included with project cards/details. LinkedIn will duplicate everything on the resume and the branding, so it can go on the about me page. It's only there because people like to see you have one. Resume link should be main navigation
22. Should the resume be downloadable from the site?
    Yes
23. Do you want a short bio only, or a fuller career/about page?
    For MVP: Short, concise about on home page
    For future: Also more detailed "About" page

## Navigation and Interaction

24. Should clicking anywhere on a project card open the details page, or only a specific button?
    Clearly labeled link/button for opening the details page
25. Should live-app and source-code links be separate buttons that do not trigger the card link?
    Yes
26. Should the carousel rotate automatically, or only change when the visitor interacts?
    Rotate only when requested by visitor, user clearly labeled controls, ensure controls are keyboard accessible
27. What should a card display when it has only one image?
    Single static image
28. Should visitors be able to open images in a larger viewer?
    The larger views would be on a project details page, so no independent viewing of images only
29. Do you need project filtering by technology, category, or role for the MVP?
    No

## Visual Direction

30. **Priority:** Should the visual tone feel more like a technical case-study site, a personal brand site, an editorial portfolio, or a direct recruiter-facing resume?
    Primary category: Direct recruiter-facing resume.
    Guiding tone: Fun, friendly, and approachable.
    Driving principles: Curiosity, compassion, and joy.
    Supporting content style: Technical evidence presented clearly and quickly.
    Avoid: Dense case-study presentation, unnecessary visual complexity, and interactions that slow down evaluation.
31. What existing websites or portfolios do you like?
32. Are there colors, fonts, layouts, or visual styles you want to avoid?
    I want to avoid anything that creates accessibility issues for colorblind, neuro-divergent, mobility, screen reader
33. Should the site use a light theme, dark theme, or both?
    Light theme only for MVP. Consider toggle for dark/light as a future feature
34. Do you need a logo or personal mark for the MVP?
    No
35. Is animation important to the impression you want to make, or should the site prioritize speed and clarity?
    Prioritize speed and clarity

## Technical and Deployment Constraints

36. **Priority:** Where will the site be deployed?
    bearware.dev personal server; credentials are local and private, don't want to include in this document
37. Do you already have a domain name?
    annetasticthoughts.com
38. Do you need client-side routing to work correctly on direct links to project pages?
    Yes
39. Does the deployment platform support the required single-page-application fallback behavior?
    Yes
40. Should the site work without JavaScript, or is a JavaScript-dependent React experience acceptable?
    Javascript-dependent React experience is acceptable for Sept 10 implementation, reconsider after application
41. Do you need analytics, visitor tracking, or contact-form handling?
    No
42. Are there any restrictions on third-party libraries, external image hosts, fonts, or APIs?
    Not at this time
43. Do you need a custom favicon, page titles, descriptions, and social-preview image?
    Important: Page titles, descriptions
    Optional: custom favicon, social-preview image

## Deadline and Priorities

44. **Priority:** What is the minimum acceptable portfolio if time runs short?
    Preferred MVP: cards link to project-details pages.
    Deadline fallback: cards contain enough information to stand alone, with details pages deferred.
45. **Priority:** Which features are explicitly optional: carousels, animations, filters, a separate About page, a contact form, or dark mode?
    carousels, animations, filters, contact form, dark mode
46. Do you have a hard time limit for polishing versus adding more projects?
    Complete required projects and core functionality by September 8.
    Deploy a reviewable release candidate by September 9.
    Reserve September 10 for bug fixes, polish, content review, and final verification.
    Include the optional Excel parser only if it is presentation-ready without reducing review time.
    Do not add projects or features during the final review window unless they fix a blocking issue.
47. Who will review the portfolio before the application deadline?
    Just me, review by third party deferred
48. What devices and browsers must be tested?
    Firefox, Chrome, Edge
    PC, mobile
    Do not have access to test on mac
49. What would make you decide the portfolio is ready to submit on September 10?
    No glaring content mistakes (misspellings, typos, missing information)
    No volatile CSS issues
    Ability to see page, follow links, with intuitive layout and simple but clear information that conveys the most critical information about each project: purpose, tech used, description
    The site is live at https://annetasticthoughts.com.
    The production build is deployed successfully over HTTPS.
    Required project URLs work when opened directly.
    The portfolio works in the supported browsers and mobile-sized layouts.
