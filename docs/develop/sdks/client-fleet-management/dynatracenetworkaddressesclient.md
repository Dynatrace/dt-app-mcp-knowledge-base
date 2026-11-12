## dynatraceNetworkAddressesClient

```js
import { dynatraceNetworkAddressesClient } from '@dynatrace-sdk/client-fleet-management';
```

### getDynatraceNetworkAddresses

**dynatraceNetworkAddressesClient.getDynatraceNetworkAddresses(config): Promise\<[NetworkAddresses](#networkaddresses)>**

Provides the Dynatrace addresses

**Required scope:** fleet-management:public-addresses:read

#### Parameters

| Name            | Type   | Description                                                                                                                                                                                                                                                                                                 |
| --------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.pageKey  | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize | number | The amount of Dynatrace addresses in a single response payload. The maximal allowed page size is 1000 and the minimum size is 10. If not set, 10 is used. <br /><br />**Default:** `10`<br />**Minimum:** `10`                                                                                              |

#### Returns

| Return type                           | Status code | Description |
| ------------------------------------- | ----------- | ----------- |
| [NetworkAddresses](#networkaddresses) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { dynatraceNetworkAddressesClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await dynatraceNetworkAddressesClient.getDynatraceNetworkAddresses();
```
