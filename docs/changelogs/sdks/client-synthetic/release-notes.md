# Release Notes

## New Capabilities

- More precise typing was introduced for Synthetic monitor models, ensuring that each monitor type uses a dedicated request/response model instead of generic types.

## API Contract Changes

### Request Models

#### Monitor Type Narrowing

Monitor model definitions were changed so that the monitor type is explicitly defined:

- `BrowserMonitorRequest.type` → `'BROWSER'`
- `HttpMonitorRequest.type` → `'HTTP'`
- `NetworkAvailabilityMonitorRequest.type` → `'NETWORK_AVAILABILITY'`

Passing unions containing multiple monitor types within a single model is no longer supported.

### Entity Reference Changes

Application reference naming has been changed:

- `APPLICATION-*`
- → `FRONTEND-*`

in fields such as `manuallyAssignedEntities`.

### Response Models

The following monitor step models were refined:

- `BrowserMonitorStepDto`
- `HttpMonitorStepDto`
- `NetworkAvailabilityMonitorStepDto`

as well as public and private location models.

## 2.0.0 (2026-06-26) \{#200}

### Major architectural changes

- Introduced a dedicated DTO model set for the Synthetic Platform API, decoupling Platform API evolution from the legacy Synthetic API contract.
- Breaking change (Early Adopter APIs): Platform API DTOs were replaced with platform-specific models. Consumers must update imports, type references, DTO mappings, and SDK integrations. Legacy Synthetic API consumers remain unaffected.

### New capabilities

- Added a dedicated SyntheticConfigurationClient.
- Expanded SDK coverage for monitor management, location management, node management, configuration management, and on-demand executions.

### Monitor model restructuring

- Legacy Synthetic monitor DTO hierarchy was replaced with dedicated monitor models:
- BrowserMonitor\*
- HttpMonitor\*
- NetworkAvailabilityMonitor\*
- Platform APIs now use monitor-specific model families instead of legacy Synthetic DTOs.
- UI forms, monitor editors, DTO mapping layers, type guards, and AI workflows consuming monitor data may require updates.

### Network Availability terminology update

- Platform API uses NETWORK_AVAILABILITY monitor terminology instead of legacy Multi-Protocol monitor abstractions.
- Monitor summary responses now expose NETWORK_AVAILABILITY instead of MULTI_PROTOCOL.
- THIRD_PARTY monitor type is no longer included in monitor summary responses.
- Consumers should review monitor-type filters, enum mappings, visualizations, reporting, and AI prompts relying on legacy monitor-type names.

### Locations and Nodes

- Location DTOs were redesigned and renamed.
- Node DTOs were redesigned and renamed.
- Consumers should expect import updates, type reference changes, and DTO mapping adjustments across location and node management features.

### On-demand execution APIs

- Request and response DTOs for on-demand executions were renamed and standardized.
- Group, monitor, execution detail, and response models now follow Platform API naming conventions.
- Consumers should verify response parsing, DTO mappings, execution history views, and AI workflows processing execution results.

### Synthetic Monitors Client

- getMonitor() return types now use Platform API monitor models.
- Monitor list response models were updated.
- Monitor summary models were updated.
- Consumers should review SDK wrappers, data transformers, state management, cache typings, and type guards relying on previous response types.

## 1.0.1 (2026-05-27) \{#101}

- Add Synthetic Locations API — create, read, update and delete synthetic locations.
- Add Synthetic Nodes API — read information about synthetic nodes.

## 1.0.0 (2026-05-13) \{#100}

### Major changes

- A new SDK package (PLATFORM API) for Synthetic Public API that allows creating and managing Synthetic resources.
