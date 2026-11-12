## syntheticMonitorsClient

```js
import { syntheticMonitorsClient } from '@dynatrace-sdk/client-synthetic';
```

### createMonitor

**syntheticMonitorsClient.createMonitor(config): Promise\<[MonitorIdResponse](#monitoridresponse)>**

Creates a synthetic monitor definition. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:monitors:write

#### Parameters

| Name                   | Type                                                                                                                                                                    |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [BrowserMonitorRequest](#browsermonitorrequest) \| [HttpMonitorRequest](#httpmonitorrequest) \| [NetworkAvailabilityMonitorRequest](#networkavailabilitymonitorrequest) |

#### Returns

| Return type                             | Status code | Description |
| --------------------------------------- | ----------- | ----------- |
| [MonitorIdResponse](#monitoridresponse) | 200         | Success     |

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

Deletes a synthetic monitor definition for the given monitor ID. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:monitors:write

#### Parameters

| Name                        | Type   | Description            |
| --------------------------- | ------ | ---------------------- |
| config.monitorId (required) | string | The ID of the monitor. |

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

**syntheticMonitorsClient.getMonitor(config): Promise\<[BrowserMonitorResponse](#browsermonitorresponse) | [HttpMonitorResponse](#httpmonitorresponse) | [NetworkAvailabilityMonitorResponse](#networkavailabilitymonitorresponse)>**

Gets a synthetic monitor definition for the given monitor ID. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:monitors:read

#### Parameters

| Name                        | Type   | Description            |
| --------------------------- | ------ | ---------------------- |
| config.monitorId (required) | string | The ID of the monitor. |

#### Returns

| Return type                                 | Status code | Description |
| ------------------------------------------- | ----------- | ----------- |
| [HttpMonitorResponse](#httpmonitorresponse) | 200         | Success     |

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

**syntheticMonitorsClient.getMonitors(config): Promise\<[SyntheticMonitorListResponse](#syntheticmonitorlistresponse)>**

Gets all synthetic monitors. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:monitors:read

#### Parameters

| Name                   | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.monitorSelector | string | Defines the scope of the query. Only monitors matching **all** criteria are included in the response. You can add one or more of the criteria listed below. For each criterion you can specify multiple comma-separated values, unless stated otherwise. If several values are specified, the **OR** logic applies. * Monitor type:&#x20;
  `type(HTTP,NETWORK_AVAILABILITY)`
  . Possible values:&#x20;
  `HTTP`
  ,&#x20;
  `BROWSER`
  ,&#x20;
  `NETWORK_AVAILABILITY`
  .
* Synthetic Location ME ID:&#x20;
  `location(SYNTHETIC_LOCATION-123)`
  .
* Monitored entity ID:&#x20;
  `monitors(HOST-123,FRONTEND-456,SERVICE-789)`
  . Accepts HOST, application (
  `FRONTEND`
  ), and SERVICE entity IDs.
* Manually assigned application ID:&#x20;
  `isAssignedTo(FRONTEND-123)`
  . Accepts application (
  `FRONTEND`
  ) IDs.
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
  ) in it, you must escape the colon with a backslash (
  `\`
  ). Otherwise, the tag will be parsed as a&#x20;
  `key:value`
   tag. All tag values are case-sensitive. Values listed within a single&#x20;
  `tag(...)`
   are combined with&#x20;
  **OR**
  . To require multiple tags (
  **AND**
  ), specify several&#x20;
  `tag(...)`
   selectors. For example,&#x20;
  `tag(tag-a),tag(tag-b)`
   matches only monitors that have&#x20;
  **both**
   tags, while&#x20;
  `tag(tag-a,tag-b)`
   matches monitors that have&#x20;
  **either**
  .
* Monitor enablement:&#x20;
  `enabled(true)`
  .
* Security context:&#x20;
  `securityContext(value1,value2)`
  . To set several criteria, separate them with a comma (`,`). |

#### Returns

| Return type                                                   | Status code | Description |
| ------------------------------------------------------------- | ----------- | ----------- |
| [SyntheticMonitorListResponse](#syntheticmonitorlistresponse) | 200         | Success     |

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

Updates a synthetic monitor definition for the given monitor ID. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:monitors:write

#### Parameters

| Name                        | Type                                                                                                                                                                    | Description            |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| config.body (required)      | [BrowserMonitorRequest](#browsermonitorrequest) \| [HttpMonitorRequest](#httpmonitorrequest) \| [NetworkAvailabilityMonitorRequest](#networkavailabilitymonitorrequest) |                        |
| config.monitorId (required) | string                                                                                                                                                                  | The ID of the monitor. |

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
