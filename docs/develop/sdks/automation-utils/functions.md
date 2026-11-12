## Functions

### actionExecution

**actionExecution(id?): Promise\<ActionExecution>**

**Required scope:** automation:workflows:read

Retrieves the action execution details for the current workflow.
Available for executions of workflows type standard only (simple workflow executions will result in 404)

#### Parameters

| Name | Type   | Description                                                                                                   |
| ---- | ------ | ------------------------------------------------------------------------------------------------------------- |
| id   | string | The ID of the action execution to retrieve. If not provided, the ID from the caller service metadata is used. |

#### Returns

| Description                   |
| ----------------------------- |
| The action execution details. |

**Code example**

```ts
// To get current action execution detail
import { actionExecution } from '@dynatrace-sdk/automation-utils';
const actionExe = await actionExecution();
```

**Code example**

```ts
// To get loopItem from current action execution
import { actionExecution } from '@dynatrace-sdk/automation-utils';

const actionExe = await actionExecution();
const loopItem = actionExe.loopItem;
// or
const { loopItem } = actionExe;
```

### execution

**execution(id?): Promise\<[IExecution](#iexecution)>**

**Required scope:** automation:workflows:read

Retrieves the execution details for the current workflow.
Available for executions of workflows type standard only (simple workflow executions will result in 404)

#### Parameters

| Name | Type   | Description                                                                                            |
| ---- | ------ | ------------------------------------------------------------------------------------------------------ |
| id   | string | The ID of the execution to retrieve. If not provided, the ID from the caller service metadata is used. |

#### Returns

| Description            |
| ---------------------- |
| The execution details. |

**Code example**

```ts
// To get current execution detail
import { execution } from '@dynatrace-sdk/automation-utils';

const exe = await execution();
```

**Code example**

```ts
// To get event context from current execution
import { execution } from '@dynatrace-sdk/automation-utils';

const exe = await execution();
const eventContext = exe.event();
```

**Code example**

```ts
// To get current task execution result
import { execution } from '@dynatrace-sdk/automation-utils';

const exe = await execution();
const result = await exe.result();
```

### getExecutionLink

**getExecutionLink(): null | string**

#### Returns

| Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- |
| The link to a workflow execution, or `null` if called within a simple workflow or outside a workflow. |

### getTaskExecutionLink

**getTaskExecutionLink(): null | string**

#### Returns

| Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| The link to a workflow execution, including the currently executed task name, or `null` if called within a simple workflow or outside a workflow. |

### getWorkflowLink

**getWorkflowLink(): null | string**

#### Returns

| Description                                                     |
| --------------------------------------------------------------- |
| The link to a workflow, or `null` if called outside a workflow. |

### result

**result(predecessorTaskName): Promise\<[any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)>**

**Required scope:** automation:workflows:read

Retrieves the result of a task execution in the current workflow.

#### Parameters

| Name                           | Type   | Description                       |
| ------------------------------ | ------ | --------------------------------- |
| predecessorTaskName (required) | string | The name of the predecessor task. |

#### Returns

| Description                                   |
| --------------------------------------------- |
| The result of the predecessor task execution. |

**Code example**

```ts
//To get a predecessor task execution's result
import { result } from '@dynatrace-sdk/automation-utils';

const taskExecutionResult = await result('predecessor_task_1');
```
