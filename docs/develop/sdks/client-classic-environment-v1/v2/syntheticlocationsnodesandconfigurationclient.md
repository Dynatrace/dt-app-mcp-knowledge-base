## syntheticLocationsNodesAndConfigurationClient

```js
import { syntheticLocationsNodesAndConfigurationClient } from '@dynatrace-sdk/client-classic-environment-v1';
```

### getNode

**syntheticLocationsNodesAndConfigurationClient.getNode(config): Promise\<[Node](#node)>**

Lists properties of the specified synthetic node

**Required scope:** environment-api:synthetic:read
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                     | Type   | Description                            |
| ------------------------ | ------ | -------------------------------------- |
| config.nodeId (required) | string | The ID of the required synthetic node. |

#### Returns

| Return type   | Status code | Description |
| ------------- | ----------- | ----------- |
| [Node](#node) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsNodesAndConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await syntheticLocationsNodesAndConfigurationClient.getNode(
    { nodeId: "..." },
  );
```

### getNodes

**syntheticLocationsNodesAndConfigurationClient.getNodes(config): Promise\<[Nodes](#nodes)>**

Lists all synthetic nodes available in your environment

**Required scope:** environment-api:synthetic:read
**Required permission:** environment:roles:manage-settings

#### Returns

| Return type     | Status code | Description |
| --------------- | ----------- | ----------- |
| [Nodes](#nodes) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticLocationsNodesAndConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await syntheticLocationsNodesAndConfigurationClient.getNodes();
```
