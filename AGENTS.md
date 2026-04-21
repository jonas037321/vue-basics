# Agent Instructions for vue-basics

## Project Context

- Vue 3 application scaffolded with Vite and TypeScript.
- Routing is handled with `vue-router`.
- Source code lives in `src/` and uses the `@` alias for `src/` imports.
- The project already includes ESLint, Prettier, Oxlint, and `vue-tsc` for validation.

## Working Rules

- Always use the Composition API for new and changed Vue code.
- Always use the Composition API for all Vue code.
- Prefer Vue 3 Composition API with `<script setup lang="ts">` for new components and views.
- Keep components small and colocate related logic in the same feature area when practical.
- Use the existing router structure in `src/router/index.ts` for navigation changes.
- Use `@/` imports for files under `src/` instead of long relative paths.
- Preserve the current Vite + Vue + TypeScript setup unless the user explicitly asks for a framework change.
- Use Bootstrap for design and UI styling whenever possible.

## UI and Code Style

- Follow the existing single-file component style used in the project.
- Keep template, script, and style sections readable and minimal.
- Use German names for displayed labels and visible text, but use English terms for code identifiers such as view names.
- Prefer descriptive names for views, components, routes, and reactive state.
- Match the current styling approach unless a redesign is requested.

## Validation

- After code changes, prefer the relevant checks:
	- `npm run type-check`
	- `npm run lint`
	- `npm run build`
- Always verify accessibility for UI changes, especially keyboard navigation, semantic structure, contrast, and meaningful labels.
- Always verify responsive design for UI changes, especially layout behavior at mobile, tablet, and desktop breakpoints.
- If you touch only formatting-sensitive files, `npm run format` may be enough when appropriate.

## Notes for Future Changes

- `src/views/HomeView.vue` and `src/views/AboutView.vue` are routed views.
- `src/components/` is the preferred place for reusable UI pieces.
- Keep route definitions in sync with navigation links in `src/App.vue`.
