## syntheticMonitorsClient

```js
import { syntheticMonitorsClient } from '@dynatrace-sdk/client-synthetic';
```

### createMonitor

**syntheticMonitorsClient.createMonitor(config): Promise\<[MonitorEntityIdDto](#monitorentityiddto)>**

Creates a synthetic monitor definition. Currently browser and network availability monitors only. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:monitors:write

#### Parameters

| Name                   | Type                                                                                                                                               |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [SyntheticBrowserMonitorRequest](#syntheticbrowsermonitorrequest) \| [SyntheticMultiProtocolMonitorRequest](#syntheticmultiprotocolmonitorrequest) |

#### Returns

| Return type                               | Status code | Description |
| ----------------------------------------- | ----------- | ----------- |
| [MonitorEntityIdDto](#monitorentityiddto) | 200         | Success     |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticMonitorsClient } from "@dynatrace-sdk/client-synthetic";

const data = await syntheticMonitorsClient.createMonitor(
  {},
);
```

### deleteMonitor

**syntheticMonitorsClient.deleteMonitor(config): Promise\<void>**

Deletes a synthetic monitor definition for the given monitor ID. Currently browser and network availability monitors only. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:monitors:write

#### Parameters

| Name                        | Type   | Description                    |
| --------------------------- | ------ | ------------------------------ |
| config.monitorId (required) | string | The identifier of the monitor. |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticMonitorsClient } from "@dynatrace-sdk/client-synthetic";

const data = await syntheticMonitorsClient.deleteMonitor({
  monitorId: "...",
});
```

### getMonitor

**syntheticMonitorsClient.getMonitor(config): Promise\<[SyntheticBrowserMonitorResponse](#syntheticbrowsermonitorresponse) | [SyntheticMultiProtocolMonitorResponse](#syntheticmultiprotocolmonitorresponse)>**

Gets a synthetic monitor definition for the given monitor ID. Currently browser and network availability monitors only. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:monitors:read

#### Parameters

| Name                        | Type   | Description                    |
| --------------------------- | ------ | ------------------------------ |
| config.monitorId (required) | string | The identifier of the monitor. |

#### Returns

| Return type                                                         | Status code | Description |
| ------------------------------------------------------------------- | ----------- | ----------- |
| [SyntheticBrowserMonitorResponse](#syntheticbrowsermonitorresponse) | 200         | Success     |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticMonitorsClient } from "@dynatrace-sdk/client-synthetic";

const data = await syntheticMonitorsClient.getMonitor({
  monitorId: "...",
});
```

### getMonitors

**syntheticMonitorsClient.getMonitors(config): Promise\<[SyntheticMonitorListDto](#syntheticmonitorlistdto)>**

Gets all synthetic monitors. Currently browser and network availability monitors only. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:monitors:read

#### Parameters

| Name                   | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.monitorSelector | string | Defines the scope of the query. Only monitors matching **all** criteria are included in the response. You can add one or several of the criteria listed below. For each criterion you can specify multiple comma-separated values, unless stated otherwise. If several values are specified, the **OR** logic applies. * Monitor type:&#x20;
  `type(HTTP,MULTI_PROTOCOL)`
  . Possible values: 'HTTP', 'BROWSER', 'MULTI_PROTOCOL' (Note that only 'BROWSER' and 'MULTI_PROTOCOL' are currently supported).
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
  . To set several criteria, separate them with a comma (`,`). |

#### Returns

| Return type                                         | Status code | Description |
| --------------------------------------------------- | ----------- | ----------- |
| [SyntheticMonitorListDto](#syntheticmonitorlistdto) | 200         | Success     |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticMonitorsClient } from "@dynatrace-sdk/client-synthetic";

const data = await syntheticMonitorsClient.getMonitors();
```

### updateMonitor

**syntheticMonitorsClient.updateMonitor(config): Promise\<void>**

Updates a synthetic monitor definition for the given monitor ID. Currently browser and network availability monitors only. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:monitors:write

#### Parameters

| Name                        | Type                                                                                                                                               | Description                    |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| config.body (required)      | [SyntheticBrowserMonitorRequest](#syntheticbrowsermonitorrequest) \| [SyntheticMultiProtocolMonitorRequest](#syntheticmultiprotocolmonitorrequest) |                                |
| config.monitorId (required) | string                                                                                                                                             | The identifier of the monitor. |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticMonitorsClient } from "@dynatrace-sdk/client-synthetic";

const data = await syntheticMonitorsClient.updateMonitor({
  monitorId: "...",
});
```
