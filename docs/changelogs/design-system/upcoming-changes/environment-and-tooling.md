## Environment and tooling

### React 18

Support for React 18 will be dropped. React 19 will be the minimum supported version. Update your app to React 19 before upgrading to the next MAJOR release.

### Jest

Jest support will be dropped in favor of [Vitest](https://vitest.dev/). Migrate your test setup to Vitest before upgrading. The `setupTableVirtualizationMock` and `clearTableVirtualizationMock` helpers (already removed in 4.0.0) will not be replaced with Jest-compatible variants.

### CommonJS

CommonJS support will be dropped. All Strato packages will ship ES modules (ESM) only. If your build pipeline requires CommonJS output, you must update your bundler or transpiler configuration to handle ESM before upgrading.
