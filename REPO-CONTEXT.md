# REPO-CONTEXT — portfolio

## Purpose
Personal portfolio site showcasing my full-stack and application development work for potential employers.

## Tech stack
- React 19, Vite, Tailwind CSS + daisyUI, React Router

## Run / build / test
- `npm run dev` — local dev server (Vite)
- `npm run build` — production build (Vite)
- `npm run clean-build` — remove `dist` and `node_modules/.vite`, then build
- `npm run lint` — ESLint
- `npm run preview` — preview the production build

## Deployment
Static site deployed via GitHub Actions (`.github/workflows/deploy.yml`) into a timestamped release directory with a `current` symlink (5-release retention). Target values come from repository secrets: `SERVER_HOST`, `SERVER_USER`, `SERVER_PORT`, `SERVER_PATH`, `SSH_PRIVATE_KEY`, `SERVER_KNOWN_HOSTS`.

## Relationships
- Showcases `TTGCollector` and the Pest Degree Day Calculator.
- One of the four active repos in the multi-repo workspace (see the matching `.code-workspace` file).
