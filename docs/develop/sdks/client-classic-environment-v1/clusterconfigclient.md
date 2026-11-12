## clusterConfigClient

```js
import { clusterConfigClient } from '@dynatrace-sdk/client-classic-environment-v1';
```

### getClusterId

**clusterConfigClient.getClusterId(config): Promise\<[ClusterId](#clusterid)>**

Gets the cluster id of the Dynatrace server

**Required scope:** environment-api:cluster-id:read
**Required permission:** environment:roles:viewer

#### Returns

| Return type             | Status code | Description |
| ----------------------- | ----------- | ----------- |
| [ClusterId](#clusterid) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { clusterConfigClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data = await clusterConfigClient.getClusterId();
```
