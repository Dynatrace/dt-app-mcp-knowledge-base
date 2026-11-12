## Smaller production bundles with code splitting

The new production build is opt-in behind the `--optimize` flag, which is available on the `build`, `deploy`, and `analyze` commands. Add `--enable-code-splitting` to break your bundle into chunks that load on demand instead of shipping everything upfront:

```bash
npx dt-app build --optimize --enable-code-splitting
npx dt-app deploy --optimize --enable-code-splitting
```

When code splitting is on, the build automatically splits lazy loaded components into their own chunks. The build splits CSS the same way. If you use vanilla-extract, it keeps working, though you might need its dedicated Vite plugin. You don't create a `vite.config.js` — the toolkit manages Vite configuration internally.

Check out the [Lazy loading quickstart](pathname:///develop/guides/code-optimization/lazy-loading-quickstart/) for a step-by-step guide to converting your routes and heavy components to lazy loading. The [Understand lazy loading](pathname:///develop/guides/code-optimization/lazy-loading/) guide explains the principles and provides more detailed guidance.
