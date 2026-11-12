## clusterVersionClient

```js
import { clusterVersionClient } from '@dynatrace-sdk/client-classic-environment-v1';
```

### getVersion

**clusterVersionClient.getVersion(config): Promise\<[ClusterVersion](#clusterversion)>**

Gets the current version of the Dynatrace server

**Required scope:** environment-api:cluster-version:read
**Required permission:** environment:roles:viewer

#### Returns

| Return type                       | Status code | Description |
| --------------------------------- | ----------- | ----------- |
| [ClusterVersion](#clusterversion) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { clusterVersionClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data = await clusterVersionClient.getVersion();
```
