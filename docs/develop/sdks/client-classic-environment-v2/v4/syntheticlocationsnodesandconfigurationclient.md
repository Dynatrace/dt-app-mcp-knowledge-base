## syntheticLocationsNodesAndConfigurationClient

```js
import { syntheticLocationsNodesAndConfigurationClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### addLocation

**syntheticLocationsNodesAndConfigurationClient.addLocation(config): Promise\<[SyntheticLocationIdsDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#syntheticlocationidsdto)>**

Creates a new private synthetic location

**Required scope:** environment-api:synthetic:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                   | Type                                                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [PrivateSyntheticLocation](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#privatesyntheticlocation) |

#### Returns

| Return type                                                                                                                               | Status code | Description                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| [SyntheticLocationIdsDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#syntheticlocationidsdto) | 201         | Success. The private location has been created. The response contains the ID of the new location. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsNodesAndConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticLocationsNodesAndConfigurationClient.addLocation(
    {
      body: {
        latitude: 10,
        longitude: 10,
        name: "...",
        nodes: ["..."],
        type: "CLUSTER",
      },
    },
  );
```

### getConfiguration

**syntheticLocationsNodesAndConfigurationClient.getConfiguration(config): Promise\<[SyntheticConfigDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#syntheticconfigdto)>**

Gets set of synthetic related parameters defined for whole tenant (affects all monitors and all private locations). | maturity=EARLY_ADOPTER

**Required scope:** environment-api:synthetic:read
**Required permission:** environment:roles:manage-settings

#### Returns

| Return type                                                                                                                     | Status code | Description                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------- |
| [SyntheticConfigDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#syntheticconfigdto) | 200         | Success. The response contains synthetic related parameters defined for whole tenant. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsNodesAndConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticLocationsNodesAndConfigurationClient.getConfiguration();
```

### getLocation

**syntheticLocationsNodesAndConfigurationClient.getLocation(config): Promise\<[PrivateSyntheticLocation](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#privatesyntheticlocation) | [SyntheticLocation](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#syntheticlocation)>**

Gets properties of the specified location

**Required scope:** environment-api:synthetic:read
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                         | Type   | Description                                       |
| ---------------------------- | ------ | ------------------------------------------------- |
| config.locationId (required) | string | The Dynatrace entity ID of the required location. |

#### Returns

| Return type                                                                                                                                 | Status code | Description                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------- |
| [PrivateSyntheticLocation](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#privatesyntheticlocation) | 200         | Success. The response contains parameters of the synthetic location. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsNodesAndConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticLocationsNodesAndConfigurationClient.getLocation(
    { locationId: "..." },
  );
```

### getLocationDeploymentApplyCommands

**syntheticLocationsNodesAndConfigurationClient.getLocationDeploymentApplyCommands(config): Promise\<void>**

Gets list of commands to deploy synthetic location in Kubernetes/Openshift cluster | maturity=EARLY_ADOPTER

**Required scope:** environment-api:synthetic:read
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name             | Type   | Description                                                                                         |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------- |
| config.filename  | string | Filename                                                                                            |
| config.namespace | string | Namespace                                                                                           |
| config.platform  | string | Container platform, currently supported are: KUBERNETES and OPENSHIFT. Default value is KUBERNETES. |

#### Returns

| Return type | Status code | Description                                                                                                   |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| void        | 200         | Success. The response contains the list of commands that needs to be executed to deploy a synthetic location. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsNodesAndConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticLocationsNodesAndConfigurationClient.getLocationDeploymentApplyCommands();
```

### getLocationDeploymentDeleteCommands

**syntheticLocationsNodesAndConfigurationClient.getLocationDeploymentDeleteCommands(config): Promise\<void>**

Gets list of commands to delete synthetic location in Kubernetes/Openshift cluster | maturity=EARLY_ADOPTER

**Required scope:** environment-api:synthetic:read
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                         | Type   | Description                                                                                         |
| ---------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| config.filename              | string | Filename                                                                                            |
| config.locationId (required) | string | The Dynatrace entity ID of the required location.                                                   |
| config.namespace             | string | Namespace                                                                                           |
| config.platform              | string | Container platform, currently supported are: KUBERNETES and OPENSHIFT. Default value is KUBERNETES. |

#### Returns

| Return type | Status code | Description                                                                                                   |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| void        | 200         | Success. The response contains the list of commands that needs to be executed to delete a synthetic location. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsNodesAndConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticLocationsNodesAndConfigurationClient.getLocationDeploymentDeleteCommands(
    { locationId: "..." },
  );
```

### getLocationDeploymentYaml

**syntheticLocationsNodesAndConfigurationClient.getLocationDeploymentYaml(config): Promise\<void>**

Gets yaml file content to deploy location in Kubernetes/Openshift cluster | maturity=EARLY_ADOPTER

**Required scope:** environment-api:synthetic:read
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                         | Type   | Description                                                                                              |
| ---------------------------- | ------ | -------------------------------------------------------------------------------------------------------- |
| config.activeGateName        | string | Active gate name                                                                                         |
| config.customRegistry        | string | Custom images registry prefix - this will replace 'dynatrace' in image URLs in generated yaml.           |
| config.locationId (required) | string | The Dynatrace entity ID of the required location.                                                        |
| config.namespace             | string | Namespace                                                                                                |
| config.tagVersionActiveGate  | string | Custom version tag for Active Gate - this will be used as desired Active Gate version in generated yaml. |
| config.tagVersionSynthetic   | string | Custom version tag for Synthetic- this will be used as desired Synthetic version in generated yaml       |

#### Returns

| Return type | Status code | Description                                                         |
| ----------- | ----------- | ------------------------------------------------------------------- |
| void        | 200         | Success. The response contains the content of deployment yaml file. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsNodesAndConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticLocationsNodesAndConfigurationClient.getLocationDeploymentYaml(
    { locationId: "..." },
  );
```

### getLocations

**syntheticLocationsNodesAndConfigurationClient.getLocations(config): Promise\<[SyntheticLocations](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#syntheticlocations)>**

Lists all synthetic locations (both public and private) available for your environment

**Required scope:** environment-api:synthetic:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                 | Type                                                                      | Description                                                                                    |
| -------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| config.capability    | "BROWSER" \| "HTTP" \| "HTTP_HIGH_RESOURCE" \| "ICMP" \| "TCP" \| "DNS" | Filters the resulting set of locations to those which support specific capability.             |
| config.cloudPlatform | "AWS" \| "AZURE" \| "ALIBABA" \| "GOOGLE_CLOUD" \| "OTHER"               | Filters the resulting set of locations to those which are hosted on a specific cloud platform. |
| config.type          | "PUBLIC" \| "PRIVATE"                                                     | Filters the resulting set of locations to those of a specific type.                            |

#### Returns

| Return type                                                                                                                     | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [SyntheticLocations](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#syntheticlocations) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsNodesAndConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticLocationsNodesAndConfigurationClient.getLocations();
```

### getLocationsStatus

**syntheticLocationsNodesAndConfigurationClient.getLocationsStatus(config): Promise\<[SyntheticPublicLocationsStatus](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#syntheticpubliclocationsstatus)>**

Checks the status of public synthetic locations

**Required scope:** environment-api:synthetic:read
**Required permission:** environment:roles:manage-settings

#### Returns

| Return type                                                                                                                                             | Status code | Description                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------------------------------------------------------- |
| [SyntheticPublicLocationsStatus](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#syntheticpubliclocationsstatus) | 200         | Success. The response contains the public locations status. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsNodesAndConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticLocationsNodesAndConfigurationClient.getLocationsStatus();
```

### getNode

**syntheticLocationsNodesAndConfigurationClient.getNode(config): Promise\<[Node](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#node)>**

Lists properties of the specified synthetic node

**Required scope:** environment-api:synthetic:read
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                     | Type   | Description                            |
| ------------------------ | ------ | -------------------------------------- |
| config.nodeId (required) | string | The ID of the required synthetic node. |

#### Returns

| Return type                                                                                         | Status code | Description |
| --------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [Node](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#node) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsNodesAndConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticLocationsNodesAndConfigurationClient.getNode(
    { nodeId: "..." },
  );
```

### getNodes

**syntheticLocationsNodesAndConfigurationClient.getNodes(config): Promise\<[Nodes](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#nodes)>**

Lists all synthetic nodes available in your environment

**Required scope:** environment-api:synthetic:read
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                      | Type              | Description                                                                                    |
| ------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| config.assignedToLocation | "TRUE" \| "FALSE" | Filters the resulting set of nodes to those which are assigned to a synthetic location or not. |
| config.isContainerized    | boolean           | If set to true, returns only containerized nodes.                                              |

#### Returns

| Return type                                                                                           | Status code | Description |
| ----------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [Nodes](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#nodes) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsNodesAndConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticLocationsNodesAndConfigurationClient.getNodes();
```

### removeLocation

**syntheticLocationsNodesAndConfigurationClient.removeLocation(config): Promise\<void>**

Deletes the specified private synthetic location

**Required scope:** environment-api:synthetic:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                         | Type   | Description                                                              |
| ---------------------------- | ------ | ------------------------------------------------------------------------ |
| config.locationId (required) | string | The Dynatrace entity ID of the private synthetic location to be deleted. |

#### Returns

| Return type | Status code | Description                                                           |
| ----------- | ----------- | --------------------------------------------------------------------- |
| void        | 204         | Success. The location has been deleted. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsNodesAndConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticLocationsNodesAndConfigurationClient.removeLocation(
    { locationId: "..." },
  );
```

### updateConfiguration

**syntheticLocationsNodesAndConfigurationClient.updateConfiguration(config): Promise\<[SyntheticConfigDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#syntheticconfigdto)>**

Updates set of synthetic related parameters defined for whole tenant (affects all monitors and all private locations). | maturity=EARLY_ADOPTER

**Required scope:** environment-api:synthetic:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                   | Type                                                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [SyntheticConfigDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#syntheticconfigdto) |

#### Returns

| Return type                                                                                                                     | Status code | Description                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------ |
| [SyntheticConfigDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#syntheticconfigdto) | 204         | Success. The set of synthetic related parameters has been updated. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsNodesAndConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticLocationsNodesAndConfigurationClient.updateConfiguration(
    { body: { bmMonitorTimeout: 10, bmStepTimeout: 10 } },
  );
```

### updateLocation

**syntheticLocationsNodesAndConfigurationClient.updateLocation(config): Promise\<void>**

Updates the specified synthetic location

**Required scope:** environment-api:synthetic:write
**Required permission:** environment:roles:manage-settings

For public locations you can only change the location status.

#### Parameters

| Name                         | Type                                                                                                                                      | Description                                                      |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| config.body (required)       | [SyntheticLocationUpdate](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#syntheticlocationupdate) |                                                                  |
| config.locationId (required) | string                                                                                                                                    | The Dynatrace entity ID of the synthetic location to be updated. |

#### Returns

| Return type | Status code | Description                                                           |
| ----------- | ----------- | --------------------------------------------------------------------- |
| void        | 204         | Success. The location has been updated. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsNodesAndConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticLocationsNodesAndConfigurationClient.updateLocation(
    { locationId: "...", body: { type: "PRIVATE" } },
  );
```

### updateLocationsStatus

**syntheticLocationsNodesAndConfigurationClient.updateLocationsStatus(config): Promise\<void>**

Changes the status of public synthetic locations

**Required scope:** environment-api:synthetic:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                   | Type                                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [SyntheticPublicLocationsStatus](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#syntheticpubliclocationsstatus) |

#### Returns

| Return type | Status code | Description                                 |
| ----------- | ----------- | ------------------------------------------- |
| void        | 204         | Success. Locations status has been updated. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsNodesAndConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticLocationsNodesAndConfigurationClient.updateLocationsStatus(
    { body: { publicLocationsEnabled: false } },
  );
```
