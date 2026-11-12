## appEngineRegistrySchemaManifestClient

```js
import { appEngineRegistrySchemaManifestClient } from '@dynatrace-sdk/client-app-engine-registry';
```

### getAppManifestSchema

**appEngineRegistrySchemaManifestClient.getAppManifestSchema(config): Promise\<Record\<string | [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)>>**

Get JSON schema for app manifests

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | OK          |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { appEngineRegistrySchemaManifestClient } from "@dynatrace-sdk/client-app-engine-registry";

const data =
  await appEngineRegistrySchemaManifestClient.getAppManifestSchema();
```
