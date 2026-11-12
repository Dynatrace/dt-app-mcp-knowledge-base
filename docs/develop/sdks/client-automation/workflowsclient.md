## workflowsClient

```js
import { workflowsClient } from '@dynatrace-sdk/client-automation';
```

### createWorkflow

**workflowsClient.createWorkflow(config): Promise\<[Workflow](#workflow)>**

**Required scope:** automation:workflows:write

Creates a workflow and sets usages

#### Parameters

| Name                   | Type                              | Description                                                                                                                     |
| ---------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess     | boolean                           | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.body (required) | [WorkflowCreate](#workflowcreate) |                                                                                                                                 |

#### Returns

| Return type           | Status code | Description |
| --------------------- | ----------- | ----------- |
| [Workflow](#workflow) | 201         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.createWorkflow({
  body: { title: "...", throttle: { isLimitHit: false } },
});
```

### deleteTrashedWorkflow

**workflowsClient.deleteTrashedWorkflow(config): Promise\<void>**

**Required scope:** automation:workflows:write

Permanently delete a workflow that is in the trash. Returns 404 if the workflow does not exist or is not in the trash.

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required) | string  | A UUID string identifying this workflow.                                                                                        |

#### Returns

| Return type | Status code | Description      |
| ----------- | ----------- | ---------------- |
| void        | 204         | No response body |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.deleteTrashedWorkflow({
  id: "...",
});
```

### deleteWorkflow

**workflowsClient.deleteWorkflow(config): Promise\<void>**

**Required scope:** automation:workflows:write

Move the workflow to trash (`trash=true`) or permanently delete it (`trash=false` or omitted). Trashed workflows can be permanently deleted via `/trash/workflows/{id}`.

#### Parameters

| Name                 | Type    | Description                                                                                                                                                                   |
| -------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false`                                               |
| config.id (required) | string  | A UUID string identifying this workflow.                                                                                                                                      |
| config.trash         | boolean | When `true`, moves the workflow to trash instead of permanently deleting it. Trashed workflows are hidden from all list and detail endpoints.<br /><br />**Default:** `false` |

#### Returns

| Return type | Status code | Description      |
| ----------- | ----------- | ---------------- |
| void        | 204         | No response body |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.deleteWorkflow({
  id: "...",
});
```

### duplicateWorkflow

**workflowsClient.duplicateWorkflow(config): Promise\<[Workflow](#workflow)>**

**Required scope:** automation:workflows:write

#### Parameters

| Name                   | Type                                      | Description                                                                                                                     |
| ---------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess     | boolean                                   | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.body (required) | [DuplicationRequest](#duplicationrequest) |                                                                                                                                 |
| config.id (required)   | string                                    | A UUID string identifying this workflow.                                                                                        |

#### Returns

| Return type           | Status code | Description |
| --------------------- | ----------- | ----------- |
| [Workflow](#workflow) | 201         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.duplicateWorkflow({
  id: "...",
  body: {},
});
```

### exportWorkflow

**workflowsClient.exportWorkflow(config): Promise\<[WorkflowExport](#workflowexport)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required) | string  | A UUID string identifying this workflow.                                                                                        |

#### Returns

| Return type                       | Status code | Description |
| --------------------------------- | ----------- | ----------- |
| [WorkflowExport](#workflowexport) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.exportWorkflow({
  id: "...",
});
```

### exportWorkflowHistoryRecord

**workflowsClient.exportWorkflowHistoryRecord(config): Promise\<[Workflow](#workflow)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                      | Type    | Description                                                                                                                     |
| ------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess        | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required)      | string  | A UUID string identifying this workflow.                                                                                        |
| config.version (required) | string  | Pattern: `^[\d]+$`                                                                                                              |

#### Returns

| Return type           | Status code | Description |
| --------------------- | ----------- | ----------- |
| [Workflow](#workflow) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data =
  await workflowsClient.exportWorkflowHistoryRecord({
    id: "...",
    version: "...",
  });
```

### exportWorkflowHistoryRecordTemplate

**workflowsClient.exportWorkflowHistoryRecordTemplate(config): Promise\<[WorkflowTemplate](#workflowtemplate)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                      | Type    | Description                                                                                                                     |
| ------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess        | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required)      | string  | A UUID string identifying this workflow.                                                                                        |
| config.version (required) | string  | Pattern: `^[\d]+$`                                                                                                              |

#### Returns

| Return type                           | Status code | Description |
| ------------------------------------- | ----------- | ----------- |
| [WorkflowTemplate](#workflowtemplate) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data =
  await workflowsClient.exportWorkflowHistoryRecordTemplate(
    { id: "...", version: "..." },
  );
```

### exportWorkflowTemplate

**workflowsClient.exportWorkflowTemplate(config): Promise\<[WorkflowTemplate](#workflowtemplate)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required) | string  | A UUID string identifying this workflow.                                                                                        |

#### Returns

| Return type                           | Status code | Description |
| ------------------------------------- | ----------- | ----------- |
| [WorkflowTemplate](#workflowtemplate) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.exportWorkflowTemplate({
  id: "...",
});
```

### getTrashedWorkflows

**workflowsClient.getTrashedWorkflows(config): Promise\<[PaginatedTrashedWorkflowList](#paginatedtrashedworkflowlist)>**

**Required scope:** automation:workflows:read

List workflows that have been moved to trash based on the current user access (or all users with `adminAccess`).

#### Parameters

| Name               | Type    | Description                                                                                                                     |
| ------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.limit       | number  | Number of results to return per page.                                                                                           |
| config.offset      | number  | The initial index from which to return the results.                                                                             |
| config.ordering    | string  | Which field to use when ordering the results.                                                                                   |

#### Returns

| Return type                                                   | Status code | Description |
| ------------------------------------------------------------- | ----------- | ----------- |
| [PaginatedTrashedWorkflowList](#paginatedtrashedworkflowlist) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.getTrashedWorkflows();
```

### getWorkflow

**workflowsClient.getWorkflow(config): Promise\<[Workflow](#workflow)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required) | string  | A UUID string identifying this workflow.                                                                                        |

#### Returns

| Return type           | Status code | Description |
| --------------------- | ----------- | ----------- |
| [Workflow](#workflow) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.getWorkflow({
  id: "...",
});
```

### getWorkflowActions

**workflowsClient.getWorkflowActions(config): Promise\<Array\<string>>**

**Required scope:** automation:workflows:read

Return list of actions assigned to tasks in a given Workflow.

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required) | string  | A UUID string identifying this workflow.                                                                                        |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.getWorkflowActions({
  id: "...",
});
```

### getWorkflowHistoryRecord

**workflowsClient.getWorkflowHistoryRecord(config): Promise\<[Workflow](#workflow)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                      | Type    | Description                                                                                                                     |
| ------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess        | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required)      | string  | A UUID string identifying this workflow.                                                                                        |
| config.version (required) | string  | Pattern: `^[\d]+$`                                                                                                              |

#### Returns

| Return type           | Status code | Description |
| --------------------- | ----------- | ----------- |
| [Workflow](#workflow) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.getWorkflowHistoryRecord(
  { id: "...", version: "..." },
);
```

### getWorkflowHistoryRecords

**workflowsClient.getWorkflowHistoryRecords(config): Promise\<[PaginatedChangeHistory](#paginatedchangehistory)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.all           | boolean | When false, the latest historical record is not returned.<br /><br />**Default:** `false`                                       |
| config.id (required) | string  | A UUID string identifying this workflow.                                                                                        |

#### Returns

| Return type                                       | Status code | Description |
| ------------------------------------------------- | ----------- | ----------- |
| [PaginatedChangeHistory](#paginatedchangehistory) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data =
  await workflowsClient.getWorkflowHistoryRecords({
    id: "...",
  });
```

### getWorkflowTask

**workflowsClient.getWorkflowTask(config): Promise\<[Task](#task)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                         | Type    | Description                                                                                                                     |
| ---------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess           | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required)         | string  |                                                                                                                                 |
| config.workflowId (required) | string  |                                                                                                                                 |

#### Returns

| Return type   | Status code | Description |
| ------------- | ----------- | ----------- |
| [Task](#task) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.getWorkflowTask({
  id: "...",
  workflowId: "...",
});
```

### getWorkflowTasks

**workflowsClient.getWorkflowTasks(config): Promise\<[Tasks](#tasks)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required) | string  | A UUID string identifying this workflow.                                                                                        |

#### Returns

| Return type     | Status code | Description |
| --------------- | ----------- | ----------- |
| [Tasks](#tasks) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.getWorkflowTasks({
  id: "...",
});
```

### getWorkflows

**workflowsClient.getWorkflows(config): Promise\<[PaginatedWorkflowList](#paginatedworkflowlist)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                                      | Type              | Description                                                                                                                     |
| ----------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess                        | boolean           | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id                                 | string            |                                                                                                                                 |
| config.isDeployed                         | boolean           |                                                                                                                                 |
| config.lastExecutionStateIn               | Array\<string>    | Multiple values may be separated by commas.                                                                                     |
| config.limit                              | number            | Number of results to return per page.                                                                                           |
| config.modificationInfoLastModifiedBy     | Array\<string>    | Multiple values may be separated by commas.                                                                                     |
| config.offset                             | number            | The initial index from which to return the results.                                                                             |
| config.ordering                           | string            | Which field to use when ordering the results.                                                                                   |
| config.owner                              | string            |                                                                                                                                 |
| config.ownerType                          | "GROUP" \| "USER" |                                                                                                                                 |
| config.search                             | string            | A search term.                                                                                                                  |
| config.throttleIsLimitHit                 | boolean           |                                                                                                                                 |
| config.triggerScheduleIsFaulty            | boolean           |                                                                                                                                 |
| config.triggerType                        | string            |                                                                                                                                 |
| config.type                               | string            |                                                                                                                                 |
| config.unacknowledgedSkippedScheduleAtGte | string            |                                                                                                                                 |
| config.unacknowledgedSkippedScheduleAtLte | string            |                                                                                                                                 |

#### Returns

| Return type                                     | Status code | Description |
| ----------------------------------------------- | ----------- | ----------- |
| [PaginatedWorkflowList](#paginatedworkflowlist) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.getWorkflows();
```

### patchWorkflow

**workflowsClient.patchWorkflow(config): Promise\<[Workflow](#workflow)>**

**Required scope:** automation:workflows:write

#### Parameters

| Name                   | Type                              | Description                                                                                                                     |
| ---------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess     | boolean                           | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.body (required) | [WorkflowUpdate](#workflowupdate) |                                                                                                                                 |
| config.id (required)   | string                            | A UUID string identifying this workflow.                                                                                        |

#### Returns

| Return type           | Status code | Description |
| --------------------- | ----------- | ----------- |
| [Workflow](#workflow) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.patchWorkflow({
  id: "...",
  body: { throttle: { isLimitHit: false } },
});
```

### resetWorkflowThrottles

**workflowsClient.resetWorkflowThrottles(config): Promise\<[WorkflowThrottlesResetStatus](#workflowthrottlesresetstatus)>**

**Required scope:** automation:workflows:write

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required) | string  | A UUID string identifying this workflow.                                                                                        |

#### Returns

| Return type                                                   | Status code | Description |
| ------------------------------------------------------------- | ----------- | ----------- |
| [WorkflowThrottlesResetStatus](#workflowthrottlesresetstatus) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.resetWorkflowThrottles({
  id: "...",
});
```

### restoreTrashedWorkflow

**workflowsClient.restoreTrashedWorkflow(config): Promise\<[Workflow](#workflow)>**

**Required scope:** automation:workflows:write

Restore a trashed workflow back to the active workflow list. When `isDeployed` is `true` (default), the workflow's triggers are reactivated. When `false`, the workflow is restored as draft-only with no active triggers.

#### Parameters

| Name                   | Type                                              | Description                                                                                                                     |
| ---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess     | boolean                                           | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.body (required) | [RestoreTrashedWorkflow](#restoretrashedworkflow) |                                                                                                                                 |
| config.id (required)   | string                                            | A UUID string identifying this workflow.                                                                                        |

#### Returns

| Return type           | Status code | Description |
| --------------------- | ----------- | ----------- |
| [Workflow](#workflow) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.restoreTrashedWorkflow({
  id: "...",
  body: {},
});
```

### restoreWorkflowHistoryRecord

**workflowsClient.restoreWorkflowHistoryRecord(config): Promise\<void>**

**Required scope:** automation:workflows:write

Restores the workflow to the specified history version which is deployed afterward.

#### Parameters

| Name                      | Type    | Description                                                                                                                     |
| ------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess        | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required)      | string  | A UUID string identifying this workflow.                                                                                        |
| config.version (required) | string  | Pattern: `^[\d]+$`                                                                                                              |

#### Returns

| Return type | Status code | Description      |
| ----------- | ----------- | ---------------- |
| void        | 200         | No response body |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data =
  await workflowsClient.restoreWorkflowHistoryRecord({
    id: "...",
    version: "...",
  });
```

### runWorkflow

**workflowsClient.runWorkflow(config): Promise\<[Execution](#execution)>**

**Required scope:** automation:workflows:run

Creates an Execution for the Workflow.

#### Parameters

| Name                   | Type                                              | Description                                                                                                                                                   |
| ---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess     | boolean                                           | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false`                               |
| config.body (required) | [ExecutionInputsRequest](#executioninputsrequest) |                                                                                                                                                               |
| config.id (required)   | string                                            | A UUID string identifying this workflow.                                                                                                                      |
| config.monitor         | boolean                                           | Specifies whether the execution data of the SIMPLE workflow type is available for monitoring until the execution is complete.<br /><br />**Default:** `false` |

#### Returns

| Return type             | Status code | Description                                                                   |
| ----------------------- | ----------- | ----------------------------------------------------------------------------- |
| [Execution](#execution) | 201         | Execution successfully created                                                |
| [Execution](#execution) | 202         | No execution created - execution with uniqueQualifier provided already exists |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.runWorkflow({
  id: "...",
  body: { input: {}, params: {} },
});
```

### updateWorkflow

**workflowsClient.updateWorkflow(config): Promise\<[Workflow](#workflow)>**

**Required scope:** automation:workflows:write

#### Parameters

| Name                   | Type                              | Description                                                                                                                     |
| ---------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess     | boolean                           | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.body (required) | [WorkflowUpdate](#workflowupdate) |                                                                                                                                 |
| config.id (required)   | string                            | A UUID string identifying this workflow.                                                                                        |

#### Returns

| Return type           | Status code | Description |
| --------------------- | ----------- | ----------- |
| [Workflow](#workflow) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { workflowsClient } from "@dynatrace-sdk/client-automation";

const data = await workflowsClient.updateWorkflow({
  id: "...",
  body: { throttle: { isLimitHit: false } },
});
```
