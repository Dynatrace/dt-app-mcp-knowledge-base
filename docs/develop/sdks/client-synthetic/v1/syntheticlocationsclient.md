## syntheticLocationsClient

```js
import { syntheticLocationsClient } from '@dynatrace-sdk/client-synthetic';
```

### addLocation

**syntheticLocationsClient.addLocation(config): Promise\<[SyntheticLocationIdsDto](#syntheticlocationidsdto)>**

Creates a new private synthetic location. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:write

#### Parameters

| Name                   | Type                                                  |
| ---------------------- | ----------------------------------------------------- |
| config.body (required) | [PrivateSyntheticLocation](#privatesyntheticlocation) |

#### Returns

| Return type                                         | Status code | Description                                                                                       |
| --------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| [SyntheticLocationIdsDto](#syntheticlocationidsdto) | 201         | Success. The private location has been created. The response contains the ID of the new location. |

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
    nodes: ["..."],
    type: "CLUSTER",
  },
});
```

### getLocation

**syntheticLocationsClient.getLocation(config): Promise\<[PrivateSyntheticLocation](#privatesyntheticlocation) | [SyntheticLocation](#syntheticlocation)>**

Gets properties of the specified location. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:read

#### Parameters

| Name                         | Type   | Description                                       |
| ---------------------------- | ------ | ------------------------------------------------- |
| config.locationId (required) | string | The Dynatrace entity ID of the required location. |

#### Returns

| Return type                                           | Status code | Description                                                          |
| ----------------------------------------------------- | ----------- | -------------------------------------------------------------------- |
| [PrivateSyntheticLocation](#privatesyntheticlocation) | 200         | Success. The response contains parameters of the synthetic location. |

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

Gets yaml file content to deploy location in Kubernetes/Openshift cluster. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:read

#### Parameters

| Name                         | Type   | Description                                                                                              |
| ---------------------------- | ------ | -------------------------------------------------------------------------------------------------------- |
| config.activeGateName        | string | Active gate name                                                                                         |
| config.customRegistry        | string | Custom images registry prefix - this will replace 'dynatrace' in image URLs in generated yaml.           |
| config.locationId (required) | string | The Dynatrace entity ID of the required location.                                                        |
| config.namespace             | string | Namespace                                                                                                |
| config.tagVersionActiveGate  | string | Custom version tag for Active Gate - this will be used as desired Active Gate version in generated yaml. |
| config.tagVersionSynthetic   | string | Custom version tag for Synthetic - this will be used as desired Synthetic version in generated yaml.     |

#### Returns

| Return type | Status code | Description                                                         |
| ----------- | ----------- | ------------------------------------------------------------------- |
| void        | 200         | Success. The response contains the content of deployment yaml file. |

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

**syntheticLocationsClient.getLocations(config): Promise\<[SyntheticLocations](#syntheticlocations)>**

Lists all synthetic locations (both public and private) available for your environment. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:read

#### Parameters

| Name                 | Type                                                                      | Description                                                                                    |
| -------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| config.capability    | "BROWSER" \| "HTTP" \| "HTTP_HIGH_RESOURCE" \| "ICMP" \| "TCP" \| "DNS" | Filters the resulting set of locations to those which support specific capability.             |
| config.cloudPlatform | "AWS" \| "AZURE" \| "ALIBABA" \| "GOOGLE_CLOUD" \| "OTHER"               | Filters the resulting set of locations to those which are hosted on a specific cloud platform. |
| config.type          | "PUBLIC" \| "PRIVATE"                                                     | Filters the resulting set of locations to those of a specific type.                            |

#### Returns

| Return type                               | Status code | Description |
| ----------------------------------------- | ----------- | ----------- |
| [SyntheticLocations](#syntheticlocations) | 200         | Success     |

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

**syntheticLocationsClient.getLocationsStatus(config): Promise\<[SyntheticPublicLocationsStatus](#syntheticpubliclocationsstatus)>**

Checks the status of public synthetic locations. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:read

#### Returns

| Return type                                                       | Status code | Description                                                 |
| ----------------------------------------------------------------- | ----------- | ----------------------------------------------------------- |
| [SyntheticPublicLocationsStatus](#syntheticpubliclocationsstatus) | 200         | Success. The response contains the public locations status. |

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

Gets yaml file content to deploy metric adapter in Kubernetes/Openshift cluster. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:read

#### Parameters

| Name             | Type   | Description                                                                                         |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------- |
| config.namespace | string | Namespace                                                                                           |
| config.platform  | string | Container platform, currently supported are: KUBERNETES and OPENSHIFT. Default value is KUBERNETES. |

#### Returns

| Return type | Status code | Description                                                         |
| ----------- | ----------- | ------------------------------------------------------------------- |
| void        | 200         | Success. The response contains the content of deployment yaml file. |

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

| Name                         | Type   | Description                                                              |
| ---------------------------- | ------ | ------------------------------------------------------------------------ |
| config.locationId (required) | string | The Dynatrace entity ID of the private synthetic location to be deleted. |

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

| Name                         | Type                                                | Description                                                      |
| ---------------------------- | --------------------------------------------------- | ---------------------------------------------------------------- |
| config.body (required)       | [SyntheticLocationUpdate](#syntheticlocationupdate) |                                                                  |
| config.locationId (required) | string                                              | The Dynatrace entity ID of the synthetic location to be updated. |

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
  body: { type: "PRIVATE" },
});
```

### updateLocationsStatus

**syntheticLocationsClient.updateLocationsStatus(config): Promise\<void>**

Changes the status of public synthetic locations. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:write

#### Parameters

| Name                   | Type                                                              |
| ---------------------- | ----------------------------------------------------------------- |
| config.body (required) | [SyntheticPublicLocationsStatus](#syntheticpubliclocationsstatus) |

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
    body: { publicLocationsEnabled: false },
  });
```
