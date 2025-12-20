# Repository Custom Instructions for Copilot

## Environment

- Development happens on **Windows** using **PowerShell**
- Node.js 20+ required (ES modules enabled via `"type": "module"`)
- Build tool: **Vite 6** with `@vitejs/plugin-react`
- Dev server runs on port 3000 (`npm run dev` or `npm start`)

## React Guidelines

- Use **React 19** with functional components and React Hooks
- Write components in JavaScript (ES6+) using JSX syntax in `.js` files
- Use **default exports** for components (matching existing codebase pattern)
- Routing via **React Router DOM v7** (`Routes`, `Route`, `NavLink`)

## Project Structure

- Organize components under `src/components/`, grouping by feature (e.g., `menu/`, `articles/`, `about/`)
- Place API utilities in `src/api/`
- Store images in `src/images/` organized by topic

## Styling

- Use plain CSS files imported directly (e.g., `import "./Component.css"`)
- Apply BEM-style class naming conventions
- Use semantic HTML elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`) with appropriate ARIA roles

## Accessibility

- Include `role` attributes on landmark elements (`role="banner"`, `role="main"`, `role="contentinfo"`)
- Add `aria-label` for interactive elements and navigation links
- Always provide `alt` text for images

## Testing

- Test framework: **Vitest** with **React Testing Library**
- Place tests in the `test/` directory, mirroring `src/` structure
- Test files use `.test.js` extension
- Run tests with `npm test` (watch mode) or `npm run test:run` (single run)
- Use `vi` from Vitest for mocking (available globally via setup)

## Code Style

- Keep function and variable names descriptive and in camelCase
- Use arrow function syntax for components: `const Component = () => { ... }`
- Prefer named imports for React Router and other libraries

## Build & Deployment

- Build output goes to `build/` directory
- Production build: `npm run build`
- Preview production build: `npm run preview`
