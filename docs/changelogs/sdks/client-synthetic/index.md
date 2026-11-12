@dynatrace-sdk/client-synthetic

## 4.1.0 (2026-10-23) \{#410}

### Minor changes

- Add `TRACEROUTE` to the `requestType` of `NetworkAvailabilityMonitorStepDto` and add the `Traceroute` member to `NetworkAvailabilityMonitorStepDtoRequestType`. Code that exhaustively switches over `'ICMP' | 'TCP' | 'DNS'` needs a `TRACEROUTE` case.
- Raise the documented `primaryGrailTags` limit from 10 to 20 tags on the monitor request and response models.
- Remove the "[FEATURE DISABLED]" marker from the `securityContext` description on the monitor request models

## 4.0.1 (2026-10-20) \{#401}

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

## 4.0.0 (2026-09-18) \{#400}

### Major changes

- **BREAKING:** Replace `SyntheticConfigDto` with two models: `SyntheticConfigRequest` is the body of `updateConfiguration` and all its fields are optional; `SyntheticConfigResponse` is returned by `getConfiguration` and all its fields are always present. To migrate, use `SyntheticConfigResponse` for values read from `getConfiguration`, and `SyntheticConfigRequest` for the `updateConfiguration` body — send only the fields you want to change. (DEM-32916)
- **BREAKING:** Make `nodes` required on `SyntheticPrivateLocationDto`, `SyntheticPrivateLocationUpdateRequest` and `LocationCollectionElementDto`. To migrate, always pass `nodes` when creating or updating a private location — an empty array if it has no nodes. (DEM-32916)
- Add `maintenanceWindowsExcludedFromAvailability` to the synthetic configuration: optional in `SyntheticConfigRequest`, always returned in `SyntheticConfigResponse`. (DEM-11717)
- Add optional `externalId` to the browser, HTTP and network availability monitor request and response models, and to `SyntheticMonitorSummaryDto`. (DEM-2111)
- Add optional `monitorCrossOriginFrames` to `BrowserMonitorConfigurationDto`. (DEM-31183)
- Add the `USER_ACTIONS` wait condition type to `BaseWaitConditionDto`. (DEM-32095)
- Add optional `reason` to `ErrorResponse`. (PPX-14415)

### Patch changes

- A `package.json` containing `{"type":"module"}` is now emitted into the `esm/` output directory of each published package. This allows Node.js and bundlers to correctly identify the ESM output as ES modules without requiring the `.mjs` file extension.

## 3.0.1 (2026-09-10) \{#301}

### Patch changes

- Fix URL encoding of path parameters in generated API methods. Path segment values are now properly percent-encoded, preventing issues when IDs contain special characters. (APPDEV-19699, APPDEV-19700)

## 3.0.0 (2026-07-30) \{#300}
