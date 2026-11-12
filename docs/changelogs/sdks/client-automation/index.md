@dynatrace-sdk/client-automation

## 9.0.0 (2026-11-11) \{#900}

### Major changes

- BREAKING: Change the `triggerType` parameter of `WorkflowsClient.getWorkflows` from `string` to `string[]`. Wrap an existing single value in an array, for example `['Schedule']`.

### Minor changes

- Add optional `alertGroups?: string[]` to `DavisEventConfig` and `DavisProblemConfig`.
- Add optional `alertGroups?: string[]` filter to `WorkflowsClient.getWorkflows`.
- Add optional `limit` and `offset` parameters to the change-history methods of `WorkflowsClient`, `BusinessCalendarsClient` and `SchedulingRulesClient`. They are returned as `PaginatedChangeHistory`.

### Patch changes

- Updated the minimum required versions of `@dynatrace-sdk/http-client` (`^1.5.2`) and `@dynatrace-sdk/shared-errors` (`^1.1.0`).

## 8.14.1 (2026-10-20) \{#8141}

### Patch changes

- Published packages now include an `exports` map in their `package.json` (with `types`, `require` and `import` conditions), so Node.js resolves the `esm/` output as native ES modules. Previously the `module` field was only honoured by bundlers, so the `type: module` marker in `esm/package.json` had no effect in plain Node.js ESM resolution. Deep imports into `cjs/`, `esm/` or `types/` that are not listed in the map are no longer permitted.

- Updated dependencies

- Updated dependencies

- Updated dependencies

- Updated dependencies

- Updated dependencies

- Updated dependencies

  - @dynatrace-sdk/http-client\@1.5.2
  - @dynatrace-sdk/shared-errors\@1.1.0

## 8.14.0 (2026-10-20) \{#8140}

### Minor changes

- Retire auto-disable of event triggers on repeated execution limit hits and deprecate throttleIsLimitHit query param

## 8.13.0 (2026-09-24) \{#8130}

### Minor changes

- Add the optional `maintenanceWindowTriggerBehavior` field to `DavisProblemConfig`. It accepts `always`, `inside`, or `outside`, and defaults to `always`.

### Patch changes

- A `package.json` containing `{"type":"module"}` is now emitted into the `esm/` output directory of each published package. This allows Node.js and bundlers to correctly identify the ESM output as ES modules without requiring the `.mjs` file extension.

## 8.12.0 (2026-09-11) \{#8120}

### Minor changes

- Add `getTrashedWorkflow` method to get details of a trashed workflow

## 8.11.1 (2026-09-10) \{#8111}

### Patch changes

- Fix URL encoding of path parameters in generated API methods. Path segment values are now properly percent-encoded, preventing issues when IDs contain special characters. (APPDEV-19699, APPDEV-19700)

## 8.11.0 (2026-08-31) \{#8110}

### Minor changes

- Updated the `Task.action` field pattern to align with the AutomationEngine API contract.

## 8.10.0 (2026-08-19) \{#8100}

### Minor changes

- Include isDeployed in trash workflow list response

## 8.9.0 (2026-08-18) \{#890}

### Minor changes

- Restore workflows from trash

## 8.8.0 (2026-08-13) \{#880}

### Minor changes

- Add ordering query param for sorting worklows in trash
- Introduce workflow pause endpoint in Global Dev Ops

## 8.7.0 (2026-08-06) \{#870}

### Minor changes

- Add `getTrashedWorkflows` and `deleteTrashedWorkflow` methods, and a `trash` parameter on `deleteWorkflow` to support moving workflows to trash instead of permanently deleting them.

## 8.6.0 (2026-08-03) \{#860}

### Minor changes

- `TriggerWorkflowDetail` adds `isTaskTest`

## 8.5.0 (2026-07-09) \{#850}
