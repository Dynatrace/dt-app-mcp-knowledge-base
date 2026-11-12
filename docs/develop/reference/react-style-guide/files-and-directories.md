## Files and directories

For the most part, files and directories should be named in kebab-case, with some exceptions:

1. Files that contain React components, or are directly linked to react components should be named in PascalCase i.e. `FlexLayout.tsx`, `FlexLayout.test.tsx`, or `FlexLayout.stories.tsx`.
2. Markdown files are usually named in SNAKE_CASE (all caps), i.e. `README.md` or `NAMING_CONVENTIONS.md`.

Applicable to individual component directories, a general directory structure like the following has proven to increase navigability. Empty directories should be omitted.

- component
  - contexts - Containing react contexts.
  - hooks - Containing component specific hooks.
  - providers - Containing provider components.
  - types - Containing general type information (component props should be located with the component).
  - util - Containing further utility functions.
  - Component.test.tsx
  - Component.tsx
  - index.ts
