## syntheticNodesClient

```js
import { syntheticNodesClient } from '@dynatrace-sdk/client-synthetic';
```

### getNode

**syntheticNodesClient.getNode(config): Promise\<[ExtendedNodeResponse](#extendednoderesponse)>**

Gets properties of the specified synthetic node. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:read

#### Parameters

| Name                     | Type   | Description                            |
| ------------------------ | ------ | -------------------------------------- |
| config.nodeId (required) | string | The ID of the required synthetic node. |

#### Returns

| Return type                                   | Status code | Description |
| --------------------------------------------- | ----------- | ----------- |
| [ExtendedNodeResponse](#extendednoderesponse) | 200         | Success     |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticNodesClient } from "@dynatrace-sdk/client-synthetic";

const data = await syntheticNodesClient.getNode({
  nodeId: "...",
});
```

### getNodes

**syntheticNodesClient.getNodes(config): Promise\<[NodesResponse](#nodesresponse)>**

Lists all synthetic nodes available in your environment. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:read

#### Parameters

| Name                      | Type    | Description                                                                                                                                                                                 |
| ------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.assignedToLocation | boolean | If set to true, returns the set of nodes that are assigned to a synthetic location. If set to false, returns only unassigned nodes. If omitted, returns both assigned and unassigned nodes. |
| config.containerized      | boolean | If set to true, returns only containerized nodes. If set to false, returns only non-containerized nodes. If omitted, returns both containerized and non-containerized nodes.                |

#### Returns

| Return type                     | Status code | Description |
| ------------------------------- | ----------- | ----------- |
| [NodesResponse](#nodesresponse) | 200         | Success     |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticNodesClient } from "@dynatrace-sdk/client-synthetic";

const data = await syntheticNodesClient.getNodes();
```
