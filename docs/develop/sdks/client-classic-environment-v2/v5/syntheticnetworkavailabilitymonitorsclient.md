## syntheticNetworkAvailabilityMonitorsClient

```js
import { syntheticNetworkAvailabilityMonitorsClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### createMonitor

**syntheticNetworkAvailabilityMonitorsClient.createMonitor(config): Promise\<[MonitorEntityIdDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#monitorentityiddto)>**

Creates a synthetic monitor definition. Currently browser and network availability monitors only. | maturity=EARLY_ADOPTER

**Required scope:** environment-api:synthetic-monitors:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                   | Type                                                                                                                                                                                                                                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.body (required) | [SyntheticBrowserMonitorRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#syntheticbrowsermonitorrequest) \| [SyntheticMultiProtocolMonitorRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#syntheticmultiprotocolmonitorrequest) |

#### Returns

| Return type                                                                                                                     | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [MonitorEntityIdDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#monitorentityiddto) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticNetworkAvailabilityMonitorsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticNetworkAvailabilityMonitorsClient.createMonitor(
    {},
  );
```

### deleteMonitor

**syntheticNetworkAvailabilityMonitorsClient.deleteMonitor(config): Promise\<void>**

Deletes a synthetic monitor definition for the given monitor ID. Currently browser and network availability monitors only. | maturity=EARLY_ADOPTER

**Required scope:** environment-api:synthetic-monitors:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                        | Type   | Description                    |
| --------------------------- | ------ | ------------------------------ |
| config.monitorId (required) | string | The identifier of the monitor. |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticNetworkAvailabilityMonitorsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticNetworkAvailabilityMonitorsClient.deleteMonitor(
    { monitorId: "..." },
  );
```

### getMonitor

**syntheticNetworkAvailabilityMonitorsClient.getMonitor(config): Promise\<[SyntheticBrowserMonitorResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#syntheticbrowsermonitorresponse) | [SyntheticMultiProtocolMonitorResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#syntheticmultiprotocolmonitorresponse)>**

Gets a synthetic monitor definition for the given monitor ID. Currently browser and network availability monitors only. | maturity=EARLY_ADOPTER

**Required scope:** environment-api:synthetic-monitors:read
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                        | Type   | Description                    |
| --------------------------- | ------ | ------------------------------ |
| config.monitorId (required) | string | The identifier of the monitor. |

#### Returns

| Return type                                                                                                                                               | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [SyntheticBrowserMonitorResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#syntheticbrowsermonitorresponse) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticNetworkAvailabilityMonitorsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticNetworkAvailabilityMonitorsClient.getMonitor(
    { monitorId: "..." },
  );
```

### getMonitors

**syntheticNetworkAvailabilityMonitorsClient.getMonitors(config): Promise\<[SyntheticMonitorListDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#syntheticmonitorlistdto)>**

Gets all synthetic monitors. Currently browser and network availability monitors only. | maturity=EARLY_ADOPTER

**Required scope:** environment-api:synthetic-monitors:read
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                   | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.monitorSelector | string | Defines the scope of the query. Only monitors matching the specified criteria are included into response. You can add one or several of the criteria listed below. For each criterion you can specify multiple comma-separated values, unless stated otherwise. If several values are specified, the **OR** logic applies. * Monitor type:&#x20;
  `type(HTTP,MULTI_PROTOCOL)`
  . Possible values: 'HTTP', 'BROWSER', 'THIRD_PARTY', 'MULTI_PROTOCOL' (Note that only 'BROWSER' and 'MULTI_PROTOCOL' are currently supported).
* Management zone ID:&#x20;
  `managementZoneId(1, 2)`
  .
* Synthetic Location ME ID:&#x20;
  `location(SYNTHETIC_LOCATION-123)`
  .
* Monitored host ME ID:&#x20;
  `monitoredEntity(HOST-123)`
  .
* Monitor tags:&#x20;
  `tag([context]key:value,key:value,key)`
  . Tags in&#x20;
  `[context]key:value`
  ,&#x20;
  `key:value`
  , and&#x20;
  `key`
   formats are detected and parsed automatically. If a key-only tag has a colon (
  `:`
  ) in it, you must escape the colon with a backslash(
  `\`
  ). Otherwise, the tag will be parsed as a&#x20;
  `key:value tag`
  . All tag values are case-sensitive.
* Monitor enablement:&#x20;
  `enabled(true)`
  . To set several criteria, separate them with a comma (`,`). Only results matching **all** criteria are included in the response. |

#### Returns

| Return type                                                                                                                               | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [SyntheticMonitorListDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#syntheticmonitorlistdto) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticNetworkAvailabilityMonitorsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticNetworkAvailabilityMonitorsClient.getMonitors();
```

### updateMonitor

**syntheticNetworkAvailabilityMonitorsClient.updateMonitor(config): Promise\<void>**

Updates a synthetic monitor definition for the given monitor ID. Currently browser and network availability monitors only. | maturity=EARLY_ADOPTER

**Required scope:** environment-api:synthetic-monitors:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                        | Type                                                                                                                                                                                                                                                                                                                           | Description                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| config.body (required)      | [SyntheticBrowserMonitorRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#syntheticbrowsermonitorrequest) \| [SyntheticMultiProtocolMonitorRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#syntheticmultiprotocolmonitorrequest) |                                |
| config.monitorId (required) | string                                                                                                                                                                                                                                                                                                                         | The identifier of the monitor. |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticNetworkAvailabilityMonitorsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticNetworkAvailabilityMonitorsClient.updateMonitor(
    { monitorId: "..." },
  );
```
