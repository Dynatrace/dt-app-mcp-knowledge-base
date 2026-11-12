## networkZonesClient

```js
import { networkZonesClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### createOrUpdateNetworkZone

**networkZonesClient.createOrUpdateNetworkZone(config): Promise\<void | [EntityShortRepresentation](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#entityshortrepresentation)>**

Updates an existing network zone or creates a new one

**Required scope:** environment-api:network-zones:write
**Required permission:** environment:roles:manage-settings

If the network zone with the specified ID does not exist, a new network zone is created.

The ID is not case sensitive. Dynatrace stores the ID in lowercase.

#### Parameters

| Name                   | Type                                                                                                              | Description                                                                                                                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [NetworkZone](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#networkzone) |                                                                                                                                                                             |
| config.id (required)   | string                                                                                                            | The ID of the network zone to be updated. If you set the ID in the body as well, it must match this ID. The ID is not case sensitive. Dynatrace stores the ID in lowercase. |

#### Returns

| Return type                                                                                                                                   | Status code | Description                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| [EntityShortRepresentation](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#entityshortrepresentation) | 201         | Success. The new network zone has been created. The response body contains the ID of the new network zone. |
| void                                                                                                                                          | 204         | Success. The network zone has been updated. Response doesn't have a body.                                  |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { networkZonesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await networkZonesClient.createOrUpdateNetworkZone({
    id: "...",
    body: {},
  });
```

### deleteNetworkZone

**networkZonesClient.deleteNetworkZone(config): Promise\<void>**

Deletes the specified network zone

**Required scope:** environment-api:network-zones:write
**Required permission:** environment:roles:manage-settings

You can only delete an empty network zone (a zone that no ActiveGate or OneAgent is using).

If the network zone is used as an alternative zone for any OneAgent, it will be automatically removed from the list of possible alternatives.

#### Parameters

| Name                 | Type   | Description                               |
| -------------------- | ------ | ----------------------------------------- |
| config.id (required) | string | The ID of the network zone to be deleted. |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Deleted. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. See error message in the response body for details. \| Client side error. \| Server side error. |

**Code example**

```ts
import { networkZonesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await networkZonesClient.deleteNetworkZone({
  id: "...",
});
```

### getAllNetworkZones

**networkZonesClient.getAllNetworkZones(config): Promise\<[NetworkZoneList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#networkzonelist)>**

Lists all existing network zones

**Required scope:** environment-api:network-zones:read
**Required permission:** environment:roles:viewer

#### Returns

| Return type                                                                                                               | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [NetworkZoneList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#networkzonelist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { networkZonesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await networkZonesClient.getAllNetworkZones();
```

### getHostStats

**networkZonesClient.getHostStats(config): Promise\<[NetworkZoneConnectionStatistics](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#networkzoneconnectionstatistics)>**

Gets the statistics about hosts using the network zone

**Required scope:** environment-api:network-zones:read
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                 | Type                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.filter        | "all" \| "configuredButNotConnectedOnly" \| "connectedAsAlternativeOnly" \| "connectedAsFailoverOnly" \| "connectedAsFailoverWithoutOwnActiveGatesOnly" | Filters the resulting set of hosts: * `all`
  : All hosts using the zone.
* `configuredButNotConnectedOnly`
  : Hosts from the network zone that use other zones.
* `connectedAsAlternativeOnly`
  : Hosts that use the network zone as an alternative.
* `connectedAsFailoverOnly`
  : Hosts from other zones that use the zone (not configured as an alternative) even though ActiveGates of higher priority are available.
* `connectedAsFailoverWithoutOwnActiveGatesOnly`
  : Hosts from other zones that use the zone (not configured as an alternative) and&#x20;
  **no**
   ActiveGates of higher priority are available. If not set, `all` is used. |
| config.id (required) | string                                                                                                                                                  | The ID of the required network zone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

#### Returns

| Return type                                                                                                                                               | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [NetworkZoneConnectionStatistics](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#networkzoneconnectionstatistics) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { networkZonesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await networkZonesClient.getHostStats({
  id: "...",
});
```

### getNetworkZoneSettings

**networkZonesClient.getNetworkZoneSettings(config): Promise\<[NetworkZoneSettings](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#networkzonesettings)>**

Gets the global configuration of network zones

**Required scope:** environment-api:network-zones:read
**Required permission:** environment:roles:viewer

#### Returns

| Return type                                                                                                                       | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [NetworkZoneSettings](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#networkzonesettings) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { networkZonesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await networkZonesClient.getNetworkZoneSettings();
```

### getSingleNetworkZone

**networkZonesClient.getSingleNetworkZone(config): Promise\<[NetworkZone](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#networkzone)>**

Gets parameters of the specified network zone

**Required scope:** environment-api:network-zones:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                 | Type   | Description                          |
| -------------------- | ------ | ------------------------------------ |
| config.id (required) | string | The ID of the required network zone. |

#### Returns

| Return type                                                                                                       | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [NetworkZone](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#networkzone) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { networkZonesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await networkZonesClient.getSingleNetworkZone({
  id: "...",
});
```

### updateNetworkZoneSettings

**networkZonesClient.updateNetworkZoneSettings(config): Promise\<void>**

Updates the global configuration of network zones

**Required scope:** environment-api:network-zones:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                   | Type                                                                                                                              |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [NetworkZoneSettings](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#networkzonesettings) |

#### Returns

| Return type | Status code | Description                                                                                     |
| ----------- | ----------- | ----------------------------------------------------------------------------------------------- |
| void        | 204         | Success. The global network zones configuration has been updated. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { networkZonesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await networkZonesClient.updateNetworkZoneSettings({
    body: {},
  });
```
