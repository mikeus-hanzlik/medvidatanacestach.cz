# Repository Custom Instructions for Copilot

Always generate React code that uses functional components and React Hooks.

Ensure all components are written in JavaScript (ES6+) and use named exports.

Organize components under a `src/components` folder, grouping by feature.

Use semantic HTML elements (`<header>`, `<main>`, `<section>`, `<footer>`) in JSX.

Apply BEM-style CSS class names and import styles via CSS Modules (`.module.css`).

Preserve accessibility best practices: include `aria-*` attributes and `alt` text.

Use React Router v6 for any client-side routing and lazy-load routes with `React.lazy()` and `Suspense`.

Write unit tests with Jest and React Testing Library; place tests alongside components in `__tests__` files.

Always include a top-level `<div id="root">` in `public/index.html` and reference the bundled JS in a `<script>` tag before `</body>`.

Keep function and variable names descriptive and in camelCase.

When asked for examples or boilerplate, include minimal working code that can be dropped into the existing build (Webpack or Create React App) without modification.
