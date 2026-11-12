## actionsSampleResultClient

```js
import { actionsSampleResultClient } from '@dynatrace-sdk/client-automation';
```

### ~~getActionSampleResult~~

> ⚠️ **Deprecated**

**actionsSampleResultClient.getActionSampleResult(config): Promise\<[any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                               | Type   |
| ---------------------------------- | ------ |
| config.actionIdentifier (required) | string |

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
import { actionsSampleResultClient } from "@dynatrace-sdk/client-automation";

const data =
  await actionsSampleResultClient.getActionSampleResult({
    actionIdentifier: "...",
  });
```
