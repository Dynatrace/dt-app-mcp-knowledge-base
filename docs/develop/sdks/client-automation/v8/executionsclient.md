## executionsClient

```js
import { executionsClient } from '@dynatrace-sdk/client-automation';
```

### cancelExecution

**executionsClient.cancelExecution(config): Promise\<void>**

**Required scope:** automation:workflows:run

Tries to cancel an Execution.
Can only be done, if the Execution is in an active state.

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required) | string  | A UUID string identifying this execution.                                                                                       |

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
import { executionsClient } from "@dynatrace-sdk/client-automation";

const data = await executionsClient.cancelExecution({
  id: "...",
});
```

### cancelTaskExecution

**executionsClient.cancelTaskExecution(config): Promise\<void>**

**Required scope:** automation:workflows:run

Cancels task execution.
Canceling action executions cause the task to be cancelled, which
causes the workflow to be canceled.

#### Parameters

| Name                          | Type    | Description                                                                                                                     |
| ----------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess            | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.executionId (required) | string  |                                                                                                                                 |
| config.id (required)          | string  | Task name                                                                                                                       |

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
import { executionsClient } from "@dynatrace-sdk/client-automation";

const data = await executionsClient.cancelTaskExecution({
  executionId: "...",
  id: "...",
});
```

### getAllEventLogs

**executionsClient.getAllEventLogs(config): Promise\<[EventLogs](#eventlogs)>**

**Required scope:** automation:workflows:read

Get all event logs

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required) | string  | A UUID string identifying this execution.                                                                                       |

#### Returns

| Return type             | Status code | Description |
| ----------------------- | ----------- | ----------- |
| [EventLogs](#eventlogs) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { executionsClient } from "@dynatrace-sdk/client-automation";

const data = await executionsClient.getAllEventLogs({
  id: "...",
});
```

### getExecution

**executionsClient.getExecution(config): Promise\<[Execution](#execution)>**

**Required scope:** automation:workflows:read

Get execution

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required) | string  | A UUID string identifying this execution.                                                                                       |

#### Returns

| Return type             | Status code | Description |
| ----------------------- | ----------- | ----------- |
| [Execution](#execution) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { executionsClient } from "@dynatrace-sdk/client-automation";

const data = await executionsClient.getExecution({
  id: "...",
});
```

### getExecutionActions

**executionsClient.getExecutionActions(config): Promise\<Array\<string>>**

**Required scope:** automation:workflows:read

Return list of actions assigned to tasks in a given Execution.

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required) | string  | A UUID string identifying this execution.                                                                                       |

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
import { executionsClient } from "@dynatrace-sdk/client-automation";

const data = await executionsClient.getExecutionActions({
  id: "...",
});
```

### getExecutionLog

**executionsClient.getExecutionLog(config): Promise\<string>**

**Required scope:** automation:workflows:read

Gets the execution log

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required) | string  | A UUID string identifying this execution.                                                                                       |

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
import { executionsClient } from "@dynatrace-sdk/client-automation";

const data = await executionsClient.getExecutionLog({
  id: "...",
});
```

### getExecutions

**executionsClient.getExecutions(config): Promise\<[PaginatedExecutionList](#paginatedexecutionlist)>**

**Required scope:** automation:workflows:read

Get list of executions (executions of draft and simple workflows aren't included in the response).

#### Parameters

| Name                     | Type           | Description                                                                                                                     |
| ------------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess       | boolean        | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.limit             | number         | Number of results to return per page.                                                                                           |
| config.offset            | number         | The initial index from which to return the results.                                                                             |
| config.ordering          | string         | Which field to use when ordering the results.                                                                                   |
| config.parentExecution   | string         |                                                                                                                                 |
| config.parentWorkflow    | string         |                                                                                                                                 |
| config.schedule          | Array\<string> | Multiple values may be separated by commas.                                                                                     |
| config.search            | string         | A search term.                                                                                                                  |
| config.startedAtGte      | string         |                                                                                                                                 |
| config.startedAtLte      | string         |                                                                                                                                 |
| config.state             | Array\<string> | Multiple values may be separated by commas.                                                                                     |
| config.subworkflowOfTask | string         | Filter executions by `parentExecution/task`.                                                                                    |
| config.trigger           | string         |                                                                                                                                 |
| config.triggerType       | string         |                                                                                                                                 |
| config.user              | Array\<string> | Multiple values may be separated by commas.                                                                                     |
| config.workflow          | Array\<string> | Multiple values may be separated by commas.                                                                                     |

#### Returns

| Return type                                       | Status code | Description |
| ------------------------------------------------- | ----------- | ----------- |
| [PaginatedExecutionList](#paginatedexecutionlist) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { executionsClient } from "@dynatrace-sdk/client-automation";

const data = await executionsClient.getExecutions();
```

### getTaskExecution

**executionsClient.getTaskExecution(config): Promise\<[TaskExecution](#taskexecution)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                          | Type    | Description                                                                                                                     |
| ----------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess            | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.executionId (required) | string  |                                                                                                                                 |
| config.id (required)          | string  | Task name                                                                                                                       |

#### Returns

| Return type                     | Status code | Description |
| ------------------------------- | ----------- | ----------- |
| [TaskExecution](#taskexecution) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { executionsClient } from "@dynatrace-sdk/client-automation";

const data = await executionsClient.getTaskExecution({
  executionId: "...",
  id: "...",
});
```

### getTaskExecutionInput

**executionsClient.getTaskExecutionInput(config): Promise\<[any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)>**

**Required scope:** automation:workflows:read

Returns merged inputs from all ActionExecutions belonging to the TaskExecution.

#### Parameters

| Name                          | Type    | Description                                                                                                                     |
| ----------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess            | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.executionId (required) | string  |                                                                                                                                 |
| config.id (required)          | string  | Task name                                                                                                                       |

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
import { executionsClient } from "@dynatrace-sdk/client-automation";

const data = await executionsClient.getTaskExecutionInput({
  executionId: "...",
  id: "...",
});
```

### getTaskExecutionLog

**executionsClient.getTaskExecutionLog(config): Promise\<string>**

**Required scope:** automation:workflows:read

Returns the log output of a specific task.
This can be large as its the STDOUT of the Action
as defined by the user.

#### Parameters

| Name                          | Type    | Description                                                                                                                     |
| ----------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess            | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.executionId (required) | string  |                                                                                                                                 |
| config.id (required)          | string  | Task name                                                                                                                       |

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
import { executionsClient } from "@dynatrace-sdk/client-automation";

const data = await executionsClient.getTaskExecutionLog({
  executionId: "...",
  id: "...",
});
```

### getTaskExecutionResult

**executionsClient.getTaskExecutionResult(config): Promise\<[any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)>**

**Required scope:** automation:workflows:read

Returns merged results from all ActionExecutions belonging to the TaskExecution.

#### Parameters

| Name                          | Type    | Description                                                                                                                     |
| ----------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess            | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.executionId (required) | string  |                                                                                                                                 |
| config.id (required)          | string  | Task name                                                                                                                       |

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
import { executionsClient } from "@dynatrace-sdk/client-automation";

const data = await executionsClient.getTaskExecutionResult({
  executionId: "...",
  id: "...",
});
```

### getTaskExecutions

**executionsClient.getTaskExecutions(config): Promise\<[TaskExecutions](#taskexecutions)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                          | Type    | Description                                                                                                                     |
| ----------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess            | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.executionId (required) | string  |                                                                                                                                 |

#### Returns

| Return type                       | Status code | Description |
| --------------------------------- | ----------- | ----------- |
| [TaskExecutions](#taskexecutions) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { executionsClient } from "@dynatrace-sdk/client-automation";

const data = await executionsClient.getTaskExecutions({
  executionId: "...",
});
```

### getTransitions

**executionsClient.getTransitions(config): Promise\<[TaskTransitions](#tasktransitions)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                          | Type    | Description                                                                                                                     |
| ----------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess            | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.executionId (required) | string  |                                                                                                                                 |

#### Returns

| Return type                         | Status code | Description |
| ----------------------------------- | ----------- | ----------- |
| [TaskTransitions](#tasktransitions) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { executionsClient } from "@dynatrace-sdk/client-automation";

const data = await executionsClient.getTransitions({
  executionId: "...",
});
```

### pauseExecution

**executionsClient.pauseExecution(config): Promise\<void>**

**Required scope:** automation:workflows:run

Pauses an Execution.
Can only be done, if the Execution is in an active state.

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required) | string  | A UUID string identifying this execution.                                                                                       |

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
import { executionsClient } from "@dynatrace-sdk/client-automation";

const data = await executionsClient.pauseExecution({
  id: "...",
});
```

### resumeExecution

**executionsClient.resumeExecution(config): Promise\<void>**

**Required scope:** automation:workflows:run

Resumes an Execution.
Can only be done, if the Execution is in an inactive state.

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required) | string  | A UUID string identifying this execution.                                                                                       |

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
import { executionsClient } from "@dynatrace-sdk/client-automation";

const data = await executionsClient.resumeExecution({
  id: "...",
});
```
