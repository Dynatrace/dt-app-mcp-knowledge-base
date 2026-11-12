## Why Vite

The old dev server was one of the oldest, most interconnected parts of the toolchain, and esbuild's plugin model made it brittle to extend. Plugins weren't chainable and each file could pass through only one loader, which caused friction for features like i18n combined with vanilla-extract. Adding support for common tooling such as Sass meant hand-rolling it in the build.

Vite solves this the way the rest of the ecosystem already has—Angular, SolidStart, Remix, Astro, and React's own recommended setup all build on it. Its Rollup-compatible plugin system gives you a huge catalog of integrations out of the box, and it leaves the toolchain far easier to maintain and evolve. The migration also moved the toolchain onto Vite 8 with Rolldown support, keeping it aligned with where the ecosystem is heading.
