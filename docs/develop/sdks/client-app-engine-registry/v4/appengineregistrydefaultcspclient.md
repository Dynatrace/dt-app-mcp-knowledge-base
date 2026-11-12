## appEngineRegistryDefaultCspClient

```js
import { appEngineRegistryDefaultCspClient } from '@dynatrace-sdk/client-app-engine-registry';
```

### getDefaultCspProperties

**appEngineRegistryDefaultCspClient.getDefaultCspProperties(config): Promise\<[AppDefaultCsp](#appdefaultcsp)>**

Get default CSP rules for apps

#### Returns

| Return type                     | Status code | Description |
| ------------------------------- | ----------- | ----------- |
| [AppDefaultCsp](#appdefaultcsp) | 200         | OK          |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { appEngineRegistryDefaultCspClient } from "@dynatrace-sdk/client-app-engine-registry";

const data =
  await appEngineRegistryDefaultCspClient.getDefaultCspProperties();
```
