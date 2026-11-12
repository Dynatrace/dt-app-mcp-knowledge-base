## containerImagesClient

```js
import { containerImagesClient } from '@dynatrace-sdk/client-fleet-management';
```

### getContainerImages

**containerImagesClient.getContainerImages(config): Promise\<[ContainerImageData](#containerimagedata)>**

Returns container images data

**Required scope:** fleet-management:container-images:read

Returns container image references for Dynatrace components from the specified registry. Returned image versions are resolved based on the configured target versions: dynatrace-activegate, dynatrace-eec, dynatrace-sql-extension-executor, and dynatrace-database-datasource-executor image versions are resolved from the ActiveGate target version; dynatrace-oneagent, dynatrace-codemodules, and dynatrace-logmodule image versions are resolved from the OneAgent target version. If a configured target version does not exist, no image is returned for that component.

#### Parameters

| Name            | Type   | Description                                                                                                                        |
| --------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| config.registry | string | Registry name containing the container images. For a list of registries, see [Dynatrace Documentation](https://dt-url.net/mf239va) |

#### Returns

| Return type                               | Status code | Description                    |
| ----------------------------------------- | ----------- | ------------------------------ |
| [ContainerImageData](#containerimagedata) | 200         | Container images data returned |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { containerImagesClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await containerImagesClient.getContainerImages();
```
