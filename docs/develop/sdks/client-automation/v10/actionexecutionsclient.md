## actionExecutionsClient

```js
import { actionExecutionsClient } from '@dynatrace-sdk/client-automation';
```

### getActionExecution

**actionExecutionsClient.getActionExecution(config): Promise\<[ActionExecution](#actionexecution)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required) | string  | A UUID string identifying this action execution.                                                                                |

#### Returns

| Return type                         | Status code | Description |
| ----------------------------------- | ----------- | ----------- |
| [ActionExecution](#actionexecution) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { actionExecutionsClient } from "@dynatrace-sdk/client-automation";

const data =
  await actionExecutionsClient.getActionExecution({
    id: "...",
  });
```

### getActionExecutionLog

**actionExecutionsClient.getActionExecutionLog(config): Promise\<string>**

**Required scope:** automation:workflows:read

Returns the log output of a specific ActionExecution.

#### Parameters

| Name                 | Type    | Description                                                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Allow access to all workflows/executions - additionally requires **automation:workflows:admin**<br /><br />**Default:** `false` |
| config.id (required) | string  | A UUID string identifying this action execution.                                                                                |

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
import { actionExecutionsClient } from "@dynatrace-sdk/client-automation";

const data =
  await actionExecutionsClient.getActionExecutionLog({
    id: "...",
  });
```
