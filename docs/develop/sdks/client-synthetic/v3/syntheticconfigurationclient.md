## syntheticConfigurationClient

```js
import { syntheticConfigurationClient } from '@dynatrace-sdk/client-synthetic';
```

### getConfiguration

**syntheticConfigurationClient.getConfiguration(config): Promise\<[SyntheticConfigDto](#syntheticconfigdto)>**

Gets the set of synthetic-related parameters defined for the whole tenant (affects all monitors and all private locations). | maturity=EARLY_ADOPTER

**Required scope:** synthetic:environment-configuration:read

#### Returns

| Return type                               | Status code | Description |
| ----------------------------------------- | ----------- | ----------- |
| [SyntheticConfigDto](#syntheticconfigdto) | 200         | Success     |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticConfigurationClient } from "@dynatrace-sdk/client-synthetic";

const data =
  await syntheticConfigurationClient.getConfiguration();
```

### updateConfiguration

**syntheticConfigurationClient.updateConfiguration(config): Promise\<void>**

Updates the set of synthetic-related parameters defined for the whole tenant (affects all monitors and all private locations). | maturity=EARLY_ADOPTER

**Required scope:** synthetic:environment-configuration:write

#### Parameters

| Name                   | Type                                      |
| ---------------------- | ----------------------------------------- |
| config.body (required) | [SyntheticConfigDto](#syntheticconfigdto) |

#### Returns

| Return type | Status code | Description                                                                                          |
| ----------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| void        | 204         | Success. The set of synthetic-related parameters has been updated. The response doesn't have a body. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticConfigurationClient } from "@dynatrace-sdk/client-synthetic";

const data =
  await syntheticConfigurationClient.updateConfiguration({
    body: { bmMonitorTimeout: 10, bmStepTimeout: 10 },
  });
```
