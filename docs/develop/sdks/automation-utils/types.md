## Types

### IExecution

Extended execution type.
Adds helper methods to the base [Execution](#execution):

- [IExecution.result](#iexecution.result)—retrieve the result of a task execution.
- [IExecution.event](#iexecution.event)—get the event payload context of the execution.

#### Properties

| Name                       | Type                                                                      | Description                                                                                                       |
| -------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| actor (required)           | string                                                                    |                                                                                                                   |
| endedAt                    | null \| Date                                                              |                                                                                                                   |
| eventTrigger               | null \| string                                                            |                                                                                                                   |
| id (required)              | string                                                                    |                                                                                                                   |
| input                      | ExecutionInput                                                            |                                                                                                                   |
| isDraft                    | boolean                                                                   |                                                                                                                   |
| params                     | ExecutionParams                                                           |                                                                                                                   |
| parentExecution (required) | null \| string                                                            |                                                                                                                   |
| parentTaskName (required)  | null \| string                                                            | Parent task execution's name (subworkflows only)                                                                  |
| providedInput              | null \| ExecutionProvidedInput                                            |                                                                                                                   |
| rootExecution              | null \| string                                                            |                                                                                                                   |
| rootWorkflow               | null \| string                                                            |                                                                                                                   |
| runtime (required)         | number                                                                    | Calculate the runtime of an execution in seconds. If the execution is not ended, runtime is calculated until now. |
| schedule                   | null \| string                                                            |                                                                                                                   |
| startedAt                  | Date                                                                      |                                                                                                                   |
| state (required)           | "CANCELLED" \| "ERROR" \| "PAUSED" \| "RUNNING" \| "SUCCESS" \| "UNKNOWN" |                                                                                                                   |
| stateInfo                  | null \| string                                                            |                                                                                                                   |
| title (required)           | string                                                                    |                                                                                                                   |
| trigger                    | null \| string                                                            |                                                                                                                   |
| triggerType (required)     | "Manual" \| "Schedule" \| "Event" \| "Workflow"                           |                                                                                                                   |
| triggerTypeDetail          | TriggerTypeDetail                                                         |                                                                                                                   |
| user                       | null \| string                                                            |                                                                                                                   |
| workflow (required)        | string                                                                    | Executed Workflow                                                                                                 |
| workflowType (required)    | "STANDARD" \| "SIMPLE"                                                    |                                                                                                                   |
| workflowVersion (required) | null \| number                                                            |                                                                                                                   |

#### Methods

##### event

**event(): null | Record\<string | string>**

**Required scope:** automation:workflows:read

Returns the event context payload associated with the execution.

#### Returns

| Description                                                      |
| ---------------------------------------------------------------- |
| A key-value object if event data is available, otherwise `null`. |

**Code example**

```ts
import { execution } from '@dynatrace-sdk/automation-utils';

const exe = await execution();
const eventContext = exe.event();
```

##### result

**result(taskId): Promise\<[any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)>**

**Required scope:** automation:workflows:read

Retrieves the result of a task execution.

#### Parameters

| Name              | Type   | Description                                          |
| ----------------- | ------ | ---------------------------------------------------- |
| taskId (required) | string | The ID of the task whose result should be retrieved. |

#### Returns

| Description                                         |
| --------------------------------------------------- |
| A promise resolving with the task execution result. |

**Code example**

```ts
import { execution } from '@dynatrace-sdk/automation-utils';

const exe = await execution();
const result = await exe.result("task-id");
```
