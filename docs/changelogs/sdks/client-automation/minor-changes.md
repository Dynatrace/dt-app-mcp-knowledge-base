# Minor changes

- Hint that task position coordinates are grid based.
- Deprecated unique expression field.

## 8.4.0 (2026-06-23) \{#840}

### Minor changes

- Add TaskExecution's `packageVersions` which is runtime used SDK version of run-javascript action
- Expose processing state of workflows named `isWorkflowProcessingPaused` in setting endpoint

## 8.3.0 (2026-05-26) \{#830}

### Minor changes

- Add `triggerOn` field to `DavisEventConfig` and `DavisProblemConfig` - selects which lifecycle phase fires the trigger: `"open"` (active only, default), `"open-and-close"` (both active and close phases), or `"close"` (closure only). Adds the corresponding `TriggerOn` enum type.
- Deprecate `onProblemClose` boolean in `DavisEventConfig` and `DavisProblemConfig` - use `triggerOn` instead.

### Patch changes

- Narrow `action` field validation pattern in task configuration to restrict allowed characters to alphanumeric, dots, hyphens, slashes, and backslashes.

## 8.2.1 (2026-05-20) \{#821}

### Patch changes

- Properly handle nullable enum schemas. (APPDEV-17637)

## 8.2.0 (2026-05-13) \{#820}

### Minor changes

- Add `problemOpenDuration` to `DavisProblemConfig` — minimum problem duration in minutes before the Davis Problem trigger fires.

## 8.1.0 (2026-05-05) \{#810}

### Minor changes

- Add `TriggerOnUpdateFields` enum type for `triggerOnUpdateFields` field in `DavisProblemConfig`.

## 8.0.0 (2026-04-22) \{#800}

### Major changes

- **Breaking:** Remove `taskDefaults` from workflow schemas (`Workflow`, `WorkflowInput`, `WorkflowResponse`, `WorkflowUpdateInput`)
- **Breaking:** Change `earliestStartTime` format from `HH:mm:ss` (time) to `HH:mm` (pattern-validated string), dropping seconds precision

### Minor changes

- Add `severityThreshold` filter to `DavisProblemConfig` — triggers only for problems at or above the configured severity level (1 = critical, 5 = informational)
- Add `triggerOnUpdateFields` to `DavisProblemConfig` — re-triggers workflow when specified problem event fields change value
- Add `WebhookHandlerWrite` schema used for PUT webhook handler requests, separating writable fields from read-only ones
- Add `hmacSecret` field to `WebhookHandler`
- Add `description` to `connectionId` in `WebhookHandler` and `WebhookHandlerMinimal`
- Add `validFrom`, `validTo`, and `weekstart` to `BusinessCalendarResponse` required fields

## 7.0.1 (2026-03-13) \{#701}

### Patch changes

- Revert: Fix redundant undefined or optional properties in model types. (APPDEV-7583) (APPDEV-16631)

## 7.0.0 (2026-03-05) \{#700}

### Major changes

- Removed read-only and computed properties from workflow template and workflow export endpoints
- Remove guide property from workflow list
- Adapt restore business calendar history response and restore rule history response to return no response body on success (200)

## 6.2.0 (2026-02-09) \{#620}

Add `POST_PROCESSING` state for task execution

## 6.1.0 (2026-01-28) \{#610}

### Minor changes

- Support analysisReady property in Davis Problem trigger configuration

## 6.0.0 (2026-01-13) \{#600}

### Major changes

- Changing Date fields to string
- Require trackingId when specifying basedOnTemplate for creating a new workflow

## 5.22.0 (2025-12-18) \{#5220}

### Minor changes

- Add maintenanceWindowTriggerBehavior for davis event trigger

## 5.21.0 (2025-12-09) \{#5210}

### Minor changes

- Add export workflow template endpoint
- Add new approval task execution state and approval flag

## 5.20.1

### Patch changes

- Fix redundant undefined or optional properties in model types. (APPDEV-7583)

## 5.20.0 (2025-11-03) \{#5200}

Added "ONCE" schedule type.

## 5.19.0 (2025-10-21) \{#5190}

### Minor changes

- Add workflow history export endpoint

## 5.18.0 (2025-10-20) \{#5180}

### Minor changes

- one trigger introduction
- workflow template based
- new workflow export endpoint

## 5.17.0 (2025-09-25) \{#5170}

### Minor changes

- Add guide to workflow persistence

## 5.16.2 (2025-09-16) \{#5162}

- Add missing `nullable` properties
- Add examples for workflow trigger types

## 5.16.1 (2025-09-05) \{#5161}

### Patch changes

- Fix transformations for date format strings. (APPDEV-14400)
- Update dependencies. (APPDEV-13611)

## 5.16.0 (2025-08-14) \{#5160}

### Minor changes

- Handle skipped schedule acknowledgements by datetime column instead of a boolean column

## 5.15.0 (2025-08-08) \{#5150}

### Minor changes

- handle skipped schedule acknowledgements

## 5.14.0 (2025-07-17) \{#5140}

### Minor changes

- Support security.events

## 5.13.1 (2025-07-01) \{#5131}

- ErrorDetails accepts additional properties.

## 5.13.0 (2025-07-01) \{#5130}

### Minor changes

- Improved naming for the execution limits
- Introduced typed component for ErrorDetails

## 5.12.0 (2025-06-26) \{#5120}

### Minor changes

- Add information about provided settings

## 5.11.2 (2025-06-18) \{#5112}

### Patch changes

- Add rule to preview schedule request payload

## 5.11.1 (2025-06-11) \{#5111}

### Patch changes

- Update dependencies. (APPDEV-11813)

## 5.11.0 (2025-05-28) \{#5110}

### Minor changes

- Update restore API description
- Add missing timezones

## 5.10.1 (2025-05-16) \{#5101}

### Patch changes

- Improve performance of date transformations. (APPDEV-12840)

## 5.10.0 (2025-05-12) \{#5100}

### Minor changes

- Support filter workflows list by isDeployed

## 5.9.2 (2025-05-09) \{#592}

### Patch changes

- Improve performance of payload transformations. (APPDEV-12840)

## 5.9.1 (2025-05-08) \{#591}

Expose 'all' query parameter for listing rule history, calendar history

## 5.9.0 (2025-05-06) \{#590}

- Added `all` parameter for getting historical records.
- Allowed deploying/undeploying a workflow by changing `is_deployed` property.

## 5.8.0 (2025-04-25) \{#580}

### Minor changes

- Support workflow version 0 for undeployed workflow

## 5.7.0 (2025-04-23) \{#570}

### Minor changes

\-: run undeployed workflow as draft executions

- remove legacy task input preview endpoint

## 5.6.0 (2025-03-10) \{#560}

- Added `idDeployed` property to `Workflow`

## 5.5.0 (2025-02-26) \{#550}

### Minor changes

- Introduce provided input for executions
- Workflow execution events for subworkflows

## 5.4.0 (2025-02-24) \{#540}

Allow filtering for subworkflow executions using combination of parent execution id and task name
Add parentTaskName to execution model

## 5.3.0 (2025-02-18) \{#530}

### Minor changes

- introduce trigger type detail in execution to track the trigger information

## 5.2.0 (2025-02-07) \{#520}

### Minor changes

- Introduce new `resetWorkflowThrottles` method.
- Add `hourlyExecutionLimit` and read-only `workflowLimit` properties to Workflow.

## 5.1.0 (2025-02-03) \{#510}

- `ThrottleLimitEvent` now includes `ThrottleLimitEventType`
- Execution model exposes `parentTaskExecutiuonId` and `parentExecution`
- Execution list can be filtered by `parentWorkflow` or `parentExecution`

## 5.0.2 (2025-01-29) \{#502}

Actually add code to error schema.

## 5.0.1 (2025-01-28) \{#501}

Add code to error schema.

## 5.0.0 (2025-01-20) \{#500}

### Breaking changes

- Removed duplicated, anonymous references and generated corresponding components.
- Changed multiple property types to align them with their usage.
- The `id` property is no longer exposed on the update components.
- Distinct components have been created for selected entities: `Workflow`, `BusinessCalendar`, and `Rule`. For example:
  - `Workflow` - for fetching requests and responses
  - `WorkflowCreate` - for creation
  - `WorkflowUpdate` - for full and partial updates where all the fields are optional
- Replaced inline enums with reusable components.

### Minor changes

- Deprecated several endpoints not used publicly.
- Updated the `state` property to reference `ActionExecutionState` and `ExecutionState`.

## 4.15.0 (2025-01-13) \{#4150}

### Minor changes

- Introduce workflow and execution result

## 4.14.1 (2025-01-10) \{#4141}

### Patch changes

- Fix date-time format serialization. (APPDEV-11661)

## 4.14.0 (2024-12-12) \{#4140}

### Minor changes

- Added workflow property of Task schema
- Added input property of Workflow schema

## 4.13.1 (2024-12-12) \{#4131}

### Patch changes

- Replace model transformations with single transformation function. (APPDEV-10818)

## 4.13.0 (2024-12-06) \{#4130}

### Minor changes

- Add `UNKNOWN` state in `ExecutionState`, `TaskExecutionState ` and `ActionExecutionState`

## 4.12.0 (2024-11-21) \{#4120}

- WorkflowType is defined as enum (STANDARD | SIMPLE)
- updateAuthorizations requires `workflows:read` permission instead of `workflows:write`

## 4.11.2

### Patch changes

- Applied enum literal type rendering for "additionalProperties". APPDEV-10967

## 4.11.1 (2024-10-22) \{#4111}

Simplify typescript types

## 4.11.0 (2024-10-08) \{#4110}

### Minor changes

- Enums are replaced with unions of literals. APPDEV-10338

## 4.10.0 (2024-09-23) \{#4100}

### Minor changes

- `Workflow` event trigger configuration supports `dt.system.events`.

## 4.9.0 (2024-09-23) \{#490}

### Minor changes

- Interfaces used as response types now have the required `id` property.

## 4.8.0 (2024-09-18) \{#480}

Expose Workflow type

## 4.7.1 (2024-09-11) \{#471}

Deprecate endpoint "/settings/service-users"

## 4.7.0 (2024-09-02) \{#470}

Update execution state enums

## 4.6.0 (2024-08-28) \{#460}

### Features

- Export errors from the package.

### Bugfixes

- Internal type `PreviewTaskInputResponseError` is no longer exported. Use `PreviewTaskInputResponse` instead.

## 4.5.0 (2024-08-27) \{#450}

### Minor changes

- Execution logs internally use JSON.

## 4.4.1 (2024-08-22) \{#441}

Strict the position value in the task

## 4.4.0 (2024-08-14) \{#440}

Introduce Workflow type.

## 4.3.0 (2024-07-31) \{#430}

### Minor changes

- Introduced @dynatrace-sdk/shared-errors package and improved response errors handling.

## 4.2.0 (2024-07-25) \{#420}

added more documentation

## 4.1.0 (2024-07-24) \{#410}

### Minor changes

Introduce wait before task option

## 4.0.0 (2024-07-05) \{#400}

- Stabilize the request/response model for `/business-calendars/*` endpoint
- Stabilize the request/response model for `/schedules/holiday-calendars/*` endpoint
- Add workflow version attribute

## 3.1.2 (2024-06-10) \{#312}

### Patch changes

- Updated boolean serialization handling. APPDEV-9047

## 3.1.1 (2024-05-17) \{#311}

### Patch changes

- Fix broken links in the readme file.

## 3.1.0 (2024-04-19) \{#310}

### Minor changes

- Provide actual error code in the error message instead of wildcard. APPDEV-7744

### Patch changes

- Do not print empty fields in the default message of an error. APPDEV-7630
- Update documentation. APPDEV-8154
- Updated dependencies

## 3.0.2 (2024-03-29) \{#302}

### Patch changes

- Sanitize links in the documentation
- Add API reference to the readme file

## 3.0.1 (2024-03-18) \{#301}

### Patch changes

- Fixed explode method of query parameters serialization.

## 3.0.0 (2024-03-07) \{#300}

### Major changes

- update json types, remove unused fields TaskExecution.triggered_by and Workflow\.usages, update scopes in some doc strings

### Patch changes

- Update http-client

## 2.4.6 (2024-02-22) \{#246}

### Patch changes

- Make task execution position nullable

## 2.4.5 (2024-02-21) \{#245}

### Patch changes

- Correct response structure for history endpoint

## 2.4.4 (2024-02-15) \{#244}

### Patch changes

- correct restore workflow history record spec

## 2.4.3 (2024-01-30) \{#243}

### Patch changes

- Fix an issue with dates serialization.

## 2.4.2 (2024-01-12) \{#242}

### Patch changes

- Update documentation.

## 2.4.1 (2024-01-10) \{#241}

### Patch changes

- Use `Record` type instead of `any` for free-form objects where applicable.

## 2.4.0 (2023-12-28) \{#240}

### Minor changes

- drop action-execution list endpoint, added workflow throttle event

## 2.3.0 (2023-12-19) \{#230}

### Minor changes

- Support for non-distinct entity tags values.

## 2.2.0 (2023-11-27) \{#220}

### Minor changes

- Added task-input-preview, authorizations-update; removed WorkflowListItem.

## 2.1.1 (2023-11-10) \{#211}

### Patch changes

- Fixed a bug that caused abort errors from http-client to be wrapped in ApiClientError('UnexpectedError').

## 2.1.0 (2023-11-09) \{#210}

### Minor changes

- Added action-sample-result endpoint. Removed TaskExecutionResult type, use any instead.

## 2.0.3 (2023-11-08) \{#203}

### Patch changes

- Update dependencies.

## 2.0.2 (2023-11-02) \{#202}

### Patch changes

- Fixed a bug that caused internal http-client errors to be thrown for error responses.

## 2.0.1 (2023-10-18) \{#201}

### Patch changes

- workflow\.lastExecution could be null.

## 2.0.0 (2023-10-10) \{#200}

### Major changes

- Cleanup unsupported fields in Workflow, Execution, TaskExecution entity

### Patch changes

- createWorkflow endpoint schema has adminAccess query

## 1.6.1 (2023-10-03) \{#161}

### Patch changes

- Update JSDoc examples.

## 1.6.0 (2023-09-29) \{#160}

### Minor changes

- Add "actor" field in Execution

## 1.5.0 (2023-08-09) \{#150}

### Minor changes

- Add api settings/user; Add ownerType filter to workflow; remove unused attributes from Rule

## 1.4.5 (2023-08-07) \{#145}

### Patch changes

- Fix transformation of null values for nullable properties

## 1.4.4 (2023-07-28) \{#144}

### Patch changes

- Update documentation
- Fix transformation of null and Date values
- Update package description
- Updated dependencies

  - @dynatrace-sdk/http-client\@1.0.6

## 1.4.3 (2023-07-13) \{#143}

### Patch changes

- Update error messages
- Updated dependencies

  - @dynatrace-sdk/http-client\@1.0.5

## 1.4.2 (2023-06-27) \{#142}

### Patch changes

- Update documentation

## 1.4.1 (2023-06-13) \{#141}

### Patch changes

- The type of task execution result is now "any"

## 1.4.0 (2023-06-09) \{#140}

### Minor changes

- Introduce admin access flag

## 1.3.2 (2023-06-07) \{#132}

### Patch changes

- Update docs.

## 1.3.1 (2023-06-06) \{#131}

### Patch changes

- Add JSDoc @example for operations.

## 1.3.0 (2023-06-05) \{#130}

### Minor changes

- Update client-automation to compatible with automation-server:2.137.0

  ### Changes

  - Add get `service users` API
  - Add capability to transfer `workflow` ownership or change `workflow` actor to the service user
  - Change workflow `task` name to an optional field
  - Update schema for `Davis Event` configuration and `Davis Problem` configuration
  - Add explicit schema for Business Calendar `Holidays` and `Weekdays`

  ### Fixes

  - Correct the method document to show the required permissions on `Business Calendar` API

### Patch changes

- Fix handling of the application/cloudevent+json content type.

## 1.2.0 (2023-04-19) \{#120}

### Minor changes

- Export model transformations

## 1.1.4 (2023-04-19) \{#114}

### Patch changes

- Move model transformations to a separate module
- Update `@dynatrace-sdk/http-client` to `^1.0.3`

## 1.1.3 (2023-04-05) \{#113}

### Patch changes

- Update `@dynatrace-sdk/http-client` to `^1.0.1`
- Use parsed response body in error serializer

## 1.1.2 (2023-04-03) \{#112}

### Patch changes

- Send response body in error serializer
- Updated dependencies
  - @dynatrace-sdk/http-client\@1.0.0

## 1.1.1 (2023-03-23) \{#111}

### Patch changes

- Generate client package with template-typescript-client v0.13.10. Query question mark is now removed from url when there are no search params.

## 1.1.0 (2023-03-23) \{#110}

### Minor changes

- - Omit obsolete workflow attributes
  - Support entity tag filter in Davis Event/Davis Problem
  - Add the permission scopes for each apis method

## 1.0.0 (2023-03-22) \{#100}

### Major changes

- Initial release of @dynatrace-sdk/client-automation
