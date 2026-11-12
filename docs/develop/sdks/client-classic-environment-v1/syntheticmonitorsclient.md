## syntheticMonitorsClient

```js
import { syntheticMonitorsClient } from '@dynatrace-sdk/client-classic-environment-v1';
```

### addMonitor

**syntheticMonitorsClient.addMonitor(config): Promise\<[EntityIdDto](#entityiddto)>**

Creates a new synthetic monitor

**Required scope:** environment-api:synthetic-monitors:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                   | Type                                              |
| ---------------------- | ------------------------------------------------- |
| config.body (required) | [SyntheticMonitorUpdate](#syntheticmonitorupdate) |

#### Returns

| Return type                 | Status code | Description                                                                                                            |
| --------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| [EntityIdDto](#entityiddto) | 200         | Success. The new synthetic monitor has been created. The response contains the Dynatrace entity ID of the new monitor. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticMonitorsClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data = await syntheticMonitorsClient.addMonitor({
  body: {
    enabled: false,
    frequencyMin: 10,
    locations: ["..."],
    manuallyAssignedApps: ["..."],
    name: "...",
    script: {},
    tags: [{ context: "AWS", key: "..." }],
    type: "BROWSER",
  },
});
```

### deleteMonitor

**syntheticMonitorsClient.deleteMonitor(config): Promise\<void>**

Deletes the specified synthetic monitor

**Required scope:** environment-api:synthetic-monitors:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                        | Type   | Description                                    |
| --------------------------- | ------ | ---------------------------------------------- |
| config.monitorId (required) | string | The ID of the synthetic monitor to be deleted. |

#### Returns

| Return type | Status code | Description                                                                       |
| ----------- | ----------- | --------------------------------------------------------------------------------- |
| void        | 204         | Success. The synthetic monitor has been deleted. The response doesn't have a body |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticMonitorsClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data = await syntheticMonitorsClient.deleteMonitor({
  monitorId: "...",
});
```

### getMonitor

**syntheticMonitorsClient.getMonitor(config): Promise\<[SyntheticMonitor](#syntheticmonitor)>**

Gets parameters of the specified synthetic monitor

**Required scope:** environment-api:synthetic-monitors:read
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                        | Type   | Description                              |
| --------------------------- | ------ | ---------------------------------------- |
| config.monitorId (required) | string | The ID of the required synthetic monitor |

#### Returns

| Return type                           | Status code | Description |
| ------------------------------------- | ----------- | ----------- |
| [SyntheticMonitor](#syntheticmonitor) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticMonitorsClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data = await syntheticMonitorsClient.getMonitor({
  monitorId: "...",
});
```

### getMonitorsCollection

**syntheticMonitorsClient.getMonitorsCollection(config): Promise\<[Monitors](#monitors)>**

Lists all synthetic monitors in your Dynatrace environment

**Required scope:** environment-api:synthetic-monitors:read
**Required permission:** environment:roles:manage-settings

The full list can be lengthy, but you can narrow it down by specifying filter query parameters.

#### Parameters

| Name                   | Type           | Description                                                                                                                                                                                                                                                                                                         |
| ---------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.assignedApps    | Array\<string> | Filters the resulting set of monitors to those assigned to the specified applications. You can specify several applications in the following format: `assignedApps=app1&assignedApps=app2`. The monitor has to have **all** the specified applications assigned. Specify Dynatrace entity IDs of applications here. |
| config.credentialId    | string         | Filters the resulting set of monitors to those using the specified credential set. Specify the ID of the credentials set here.                                                                                                                                                                                      |
| config.credentialOwner | string         | Filters the resulting set of monitors to those using a credential owned by the specified user.                                                                                                                                                                                                                      |
| config.enabled         | boolean        | Filters the resulting set of monitors to those which are enabled (`true`) or disabled (`false`).                                                                                                                                                                                                                    |
| config.location        | string         | Filters the resulting set of monitors to those assigned to a specified Synthetic location. Specify the ID of the location here.                                                                                                                                                                                     |
| config.managementZone  | number         | Filters the resulting set of monitors to those which are part of the specified management zone. Specify the ID of the management zone here.                                                                                                                                                                         |
| config.tag             | Array\<string> | Filters the resulting set of monitors by specified tags. You can specify several tags in the following format: `tag=tag1&tag=tag2`. The monitor has to match **all** the specified tags. In case of key-value tags, such as imported AWS or CloudFoundry tags use following format: `[context]key:value`.           |
| config.type            | string         | Filters the resulting set of monitors to those of the specified type: `BROWSER` or `HTTP`.                                                                                                                                                                                                                          |

#### Returns

| Return type           | Status code | Description |
| --------------------- | ----------- | ----------- |
| [Monitors](#monitors) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticMonitorsClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await syntheticMonitorsClient.getMonitorsCollection();
```

### replaceMonitor

**syntheticMonitorsClient.replaceMonitor(config): Promise\<void>**

Updates parameters of the specified synthetic monitor

**Required scope:** environment-api:synthetic-monitors:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                        | Type                                              | Description                                    |
| --------------------------- | ------------------------------------------------- | ---------------------------------------------- |
| config.body (required)      | [SyntheticMonitorUpdate](#syntheticmonitorupdate) |                                                |
| config.monitorId (required) | string                                            | The ID of the synthetic monitor to be updated. |

#### Returns

| Return type | Status code | Description                                                                        |
| ----------- | ----------- | ---------------------------------------------------------------------------------- |
| void        | 204         | Success. The synthetic monitor has been updated. The response doesn't have a body. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticMonitorsClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data = await syntheticMonitorsClient.replaceMonitor({
  monitorId: "...",
  body: {
    enabled: false,
    frequencyMin: 10,
    locations: ["..."],
    manuallyAssignedApps: ["..."],
    name: "...",
    script: {},
    tags: [{ context: "AWS", key: "..." }],
    type: "BROWSER",
  },
});
```
