## fleetManagementContainerImagesClient

```js
import { fleetManagementContainerImagesClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getContainerImages

**fleetManagementContainerImagesClient.getContainerImages(config): Promise\<[ContainerImageData](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#containerimagedata)>**

Returns container images data

**One of the following scopes is required:**

- environment-api:deployment:download
- fleet-management:container-images:read

**One of the following permissions is required:**

- environment:roles:agent-install
- fleet-management:container-images:read

#### Parameters

| Name                  | Type   | Description                                                                                                                              |
| --------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| config.registry       | string | Registry name containing the container images. For a list of registries, see [Dynatrace Documentation](https://dt-url.net/mf239va)       |
| config.registryFilter | string | Partial registry name filter. Returns images for the first registry whose name contains this value. Ignored when 'registry' is provided. |

#### Returns

| Return type                                                                                                                     | Status code | Description                    |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------ |
| [ContainerImageData](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#containerimagedata) | 200         | Container images data returned |

#### Throws

| Error Type         | Error Message                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Internal server error. \| Client side error. \| Server side error. |

**Code example**

```ts
import { fleetManagementContainerImagesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await fleetManagementContainerImagesClient.getContainerImages();
```
