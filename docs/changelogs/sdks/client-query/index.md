@dynatrace-sdk/client-query

## 1.30.0 (2026-11-24) \{#1300}

### Minor changes

- Add the `DatastoreContribution` interface (`name`, `scannedBytes`) and the optional `datastores` field on `Contributions`.
- Add the `TokenType` enum members `UriPattern`, `TimeframeValue`, `Locale` and `Timezone`. The `type` and `referenceType` unions on `AutocompleteSuggestionPart` and `DQLTerminalNode` now also accept `'URI_PATTERN'`, `'TIMEFRAME_VALUE'`, `'LOCALE'` and `'TIMEZONE'`.

### Patch changes

- Updated the minimum required versions of `@dynatrace-sdk/http-client` (`^1.5.2`) and `@dynatrace-sdk/shared-errors` (`^1.1.0`).

## 1.29.0 (2026-10-22) \{#1290}

### Minor changes

- Add the GeneralError error-envelope type and isGeneralError type guard.
- Add new Query token classifications, including FIELD_NAME, FIELD_VALUE, SEMICOLON, UNKNOWN, and SYNOPSIS_INFO.

## 1.28.1 (2026-10-20) \{#1281}

### Patch changes

- Published packages now include an `exports` map in their `package.json` (with `types`, `require` and `import` conditions), so Node.js resolves the `esm/` output as native ES modules. Previously the `module` field was only honoured by bundlers, so the `type: module` marker in `esm/package.json` had no effect in plain Node.js ESM resolution. Deep imports into `cjs/`, `esm/` or `types/` that are not listed in the map are no longer permitted.

- A `package.json` containing `{"type":"module"}` is now emitted into the `esm/` output directory of each published package. This allows Node.js and bundlers to correctly identify the ESM output as ES modules without requiring the `.mjs` file extension.

- Updated dependencies

- Updated dependencies

- Updated dependencies

- Updated dependencies

- Updated dependencies

- Updated dependencies

  - @dynatrace-sdk/http-client\@1.5.2
  - @dynatrace-sdk/shared-errors\@1.1.0

## 1.28.0 (2026-08-26) \{#1280}
