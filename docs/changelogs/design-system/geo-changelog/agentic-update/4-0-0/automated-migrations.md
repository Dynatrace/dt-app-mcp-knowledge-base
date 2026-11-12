## Automated migrations

Run the automated migration tool first to apply all available codemods for this release:

```bash
dt-app update @dynatrace/strato-components
```

Sections marked **Automated by codemod** below have already been applied — verify the result rather than applying them manually. Sections without that marker require manual code changes.

---

Each section below corresponds to a change in this release that requires consumer attention. Sections are separated by `---`.

---

Replace `@dynatrace-sdk/client-classic-environment-v2` with `@dynatrace-sdk/client-settings` in your app's `package.json` dependencies:

- Remove `@dynatrace-sdk/client-classic-environment-v2` from your `dependencies` or `devDependencies`
- Add `"@dynatrace-sdk/client-settings": "^1.1.0"` to your `dependencies`

---

If your app imports `maplibre-gl` directly, upgrade it to a v6 version compatible with `@dynatrace/strato-geo` and make sure it is imported as ESM. The CJS build of `@dynatrace/strato-geo` is no longer published, so replace any `require('@dynatrace/strato-geo')` or `require('maplibre-gl')` with an ESM `import`.
