## syntheticNodesClient

```js
import { syntheticNodesClient } from '@dynatrace-sdk/client-synthetic';
```

### getNode

**syntheticNodesClient.getNode(config): Promise\<[Node](#node)>**

Lists properties of the specified synthetic node. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:read

#### Parameters

| Name                     | Type   | Description                            |
| ------------------------ | ------ | -------------------------------------- |
| config.nodeId (required) | string | The ID of the required synthetic node. |

#### Returns

| Return type   | Status code | Description |
| ------------- | ----------- | ----------- |
| [Node](#node) | 200         | Success     |

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

**syntheticNodesClient.getNodes(config): Promise\<[Nodes](#nodes)>**

Lists all synthetic nodes available in your environment. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:locations:read

#### Parameters

| Name                      | Type    | Description                                                                                                                                                                                 |
| ------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.assignedToLocation | boolean | If set to true, returns the set of nodes that are assigned to a synthetic location. If set to false, returns only unassigned nodes. If omitted, returns both assigned and unassigned nodes. |
| config.containerized      | boolean | If set to true, returns only containerized nodes. If set to false, returns only uncontainerized nodes. If omitted, returns both containerized and uncontainerized nodes.                    |

#### Returns

| Return type     | Status code | Description |
| --------------- | ----------- | ----------- |
| [Nodes](#nodes) | 200         | Success     |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticNodesClient } from "@dynatrace-sdk/client-synthetic";

const data = await syntheticNodesClient.getNodes();
```
