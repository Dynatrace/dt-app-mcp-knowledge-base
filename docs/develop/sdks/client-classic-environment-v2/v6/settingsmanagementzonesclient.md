## settingsManagementZonesClient

```js
import { settingsManagementZonesClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getManagementZoneDetails

**settingsManagementZonesClient.getManagementZoneDetails(config): Promise\<[ManagementZoneDetails](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#managementzonedetails)>**

Reads management zone details.

**Required scope:** settings:objects:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- settings:objects:read

Allows to convert from an objectId to the ID of the management zone, and can serve as a replacement for the old config endpoint for that purpose.

#### Parameters

| Name                       | Type   | Description                             |
| -------------------------- | ------ | --------------------------------------- |
| config.objectId (required) | string | The ID of the required settings object. |

#### Returns

| Return type                                                                                                                           | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ManagementZoneDetails](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#managementzonedetails) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| ErrorEnvelopeError | Failed. Forbidden. \| No object available for the given objectId \| Client side error. \| Server side error. |

**Code example**

```ts
import { settingsManagementZonesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await settingsManagementZonesClient.getManagementZoneDetails(
    { objectId: "..." },
  );
```
