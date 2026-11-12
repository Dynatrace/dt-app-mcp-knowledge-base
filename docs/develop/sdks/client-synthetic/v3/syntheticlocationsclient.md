## syntheticLocationsClient

```js
import { syntheticLocationsClient } from '@dynatrace-sdk/client-synthetic';
```

### addLocation

**syntheticLocationsClient.addLocation(config): Promise\<[SyntheticLocationIdsResponse](#syntheticlocationidsresponse)>**

Creates a new private synthetic location. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:write

#### Parameters

| Name                   | Type                                                        |
| ---------------------- | ----------------------------------------------------------- |
| config.body (required) | [SyntheticPrivateLocationDto](#syntheticprivatelocationdto) |

#### Returns

| Return type                                                   | Status code | Description                                                                                       |
| ------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| [SyntheticLocationIdsResponse](#syntheticlocationidsresponse) | 201         | Success. The private location has been created. The response contains the ID of the new location. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsClient } from "@dynatrace-sdk/client-synthetic";

const data = await syntheticLocationsClient.addLocation({
  body: {
    latitude: 10,
    longitude: 10,
    name: "...",
    type: "CLUSTER",
  },
});
```

### getLocation

**syntheticLocationsClient.getLocation(config): Promise\<[SyntheticPrivateLocationDto](#syntheticprivatelocationdto) | [SyntheticPublicLocationDto](#syntheticpubliclocationdto)>**

Gets properties of the specified location. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:read

#### Parameters

| Name                         | Type   | Description                      |
| ---------------------------- | ------ | -------------------------------- |
| config.locationId (required) | string | The ID of the required location. |

#### Returns

| Return type                                                 | Status code | Description                                                          |
| ----------------------------------------------------------- | ----------- | -------------------------------------------------------------------- |
| [SyntheticPrivateLocationDto](#syntheticprivatelocationdto) | 200         | Success. The response contains parameters of the synthetic location. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsClient } from "@dynatrace-sdk/client-synthetic";

const data = await syntheticLocationsClient.getLocation({
  locationId: "...",
});
```

### getLocationDeploymentYaml

**syntheticLocationsClient.getLocationDeploymentYaml(config): Promise\<Binary>**

Gets the YAML file content to deploy a location in a Kubernetes/OpenShift cluster. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:read

#### Parameters

| Name                         | Type   | Description                                                                                      |
| ---------------------------- | ------ | ------------------------------------------------------------------------------------------------ |
| config.activeGateName        | string | The name of the ActiveGate.                                                                      |
| config.customRegistry        | string | Custom image registry prefix; replaces `dynatrace` in image URLs in the generated YAML.          |
| config.locationId (required) | string | The ID of the required location.                                                                 |
| config.namespace             | string | The target namespace.                                                                            |
| config.tagVersionActiveGate  | string | Custom version tag for ActiveGate; used as the desired ActiveGate version in the generated YAML. |
| config.tagVersionSynthetic   | string | Custom version tag for Synthetic; used as the desired Synthetic version in the generated YAML.   |

#### Returns

| Return type | Status code | Description                                                             |
| ----------- | ----------- | ----------------------------------------------------------------------- |
| void        | 200         | Success. The response contains the content of the YAML deployment file. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsClient } from "@dynatrace-sdk/client-synthetic";

const data =
  await syntheticLocationsClient.getLocationDeploymentYaml({
    locationId: "...",
  });
```

### getLocations

**syntheticLocationsClient.getLocations(config): Promise\<[SyntheticLocationsResponse](#syntheticlocationsresponse)>**

Lists all synthetic locations (both public and private) available for your environment. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:read

#### Parameters

| Name                 | Type                                                                      | Description                                                                                   |
| -------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| config.capability    | "BROWSER" \| "HTTP" \| "HTTP_HIGH_RESOURCE" \| "ICMP" \| "TCP" \| "DNS" | Filters the resulting set of locations to those that support a specific capability.           |
| config.cloudPlatform | "AWS" \| "AZURE" \| "ALIBABA" \| "GOOGLE_CLOUD" \| "OTHER"               | Filters the resulting set of locations to those that are hosted on a specific cloud platform. |
| config.type          | "PUBLIC" \| "PRIVATE"                                                     | Filters the resulting set of locations to those of a specific type.                           |

#### Returns

| Return type                                               | Status code | Description |
| --------------------------------------------------------- | ----------- | ----------- |
| [SyntheticLocationsResponse](#syntheticlocationsresponse) | 200         | Success     |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsClient } from "@dynatrace-sdk/client-synthetic";

const data = await syntheticLocationsClient.getLocations();
```

### getLocationsStatus

**syntheticLocationsClient.getLocationsStatus(config): Promise\<[SyntheticPublicLocationsStatusDto](#syntheticpubliclocationsstatusdto)>**

Checks the status of public synthetic locations. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:read

#### Returns

| Return type                                                             | Status code | Description                                                 |
| ----------------------------------------------------------------------- | ----------- | ----------------------------------------------------------- |
| [SyntheticPublicLocationsStatusDto](#syntheticpubliclocationsstatusdto) | 200         | Success. The response contains the public locations status. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsClient } from "@dynatrace-sdk/client-synthetic";

const data =
  await syntheticLocationsClient.getLocationsStatus();
```

### getMetricAdapterDeploymentYaml

**syntheticLocationsClient.getMetricAdapterDeploymentYaml(config): Promise\<Binary>**

Gets the YAML file content to deploy the metric adapter in a Kubernetes/OpenShift cluster. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:read

#### Parameters

| Name             | Type   | Description                                                                                                             |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |
| config.namespace | string | The target namespace.                                                                                                   |
| config.platform  | string | The container platform. Currently supported values are `KUBERNETES` and `OPENSHIFT`. The default value is `KUBERNETES`. |

#### Returns

| Return type | Status code | Description                                                             |
| ----------- | ----------- | ----------------------------------------------------------------------- |
| void        | 200         | Success. The response contains the content of the YAML deployment file. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsClient } from "@dynatrace-sdk/client-synthetic";

const data =
  await syntheticLocationsClient.getMetricAdapterDeploymentYaml();
```

### removeLocation

**syntheticLocationsClient.removeLocation(config): Promise\<void>**

Deletes the specified private synthetic location. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:write

#### Parameters

| Name                         | Type   | Description                                             |
| ---------------------------- | ------ | ------------------------------------------------------- |
| config.locationId (required) | string | The ID of the private synthetic location to be deleted. |

#### Returns

| Return type | Status code | Description                                                           |
| ----------- | ----------- | --------------------------------------------------------------------- |
| void        | 204         | Success. The location has been deleted. Response doesn't have a body. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsClient } from "@dynatrace-sdk/client-synthetic";

const data = await syntheticLocationsClient.removeLocation({
  locationId: "...",
});
```

### updateLocation

**syntheticLocationsClient.updateLocation(config): Promise\<void>**

Updates the specified synthetic location. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:write

For public locations you can only change the location status.

#### Parameters

| Name                         | Type                                                                                                                                                             | Description                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| config.body (required)       | [SyntheticPrivateLocationUpdateRequest](#syntheticprivatelocationupdaterequest) \| [SyntheticPublicLocationUpdateRequest](#syntheticpubliclocationupdaterequest) |                                                 |
| config.locationId (required) | string                                                                                                                                                           | The ID of the synthetic location to be updated. |

#### Returns

| Return type | Status code | Description                                                           |
| ----------- | ----------- | --------------------------------------------------------------------- |
| void        | 204         | Success. The location has been updated. Response doesn't have a body. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsClient } from "@dynatrace-sdk/client-synthetic";

const data = await syntheticLocationsClient.updateLocation({
  locationId: "...",
});
```

### updateLocationsStatus

**syntheticLocationsClient.updateLocationsStatus(config): Promise\<void>**

Changes the status of public synthetic locations. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:write

#### Parameters

| Name                   | Type                                                                    |
| ---------------------- | ----------------------------------------------------------------------- |
| config.body (required) | [SyntheticPublicLocationsStatusDto](#syntheticpubliclocationsstatusdto) |

#### Returns

| Return type | Status code | Description                                 |
| ----------- | ----------- | ------------------------------------------- |
| void        | 204         | Success. Locations status has been updated. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsClient } from "@dynatrace-sdk/client-synthetic";

const data =
  await syntheticLocationsClient.updateLocationsStatus({
    body: { enabled: false },
  });
```
