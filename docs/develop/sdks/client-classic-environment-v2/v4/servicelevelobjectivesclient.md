## serviceLevelObjectivesClient

```js
import { serviceLevelObjectivesClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### createAlert

**serviceLevelObjectivesClient.createAlert(config): Promise\<[EntityShortRepresentation](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#entityshortrepresentation)>**

Creates an alert of the provided alert type for an SLO

**Required scope:** environment-api:slo:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- settings:objects:write

#### Parameters

| Name                   | Type                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [AbstractSloAlertDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#abstractsloalertdto) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| config.from            | string                                                                                                                            | The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
* Human-readable format of&#x20;
  `2021-01-25T05:57:01.123+01:00`
  . If no time zone is specified, UTC is used. You can use a space character instead of the&#x20;
  `T`
  . Seconds and fractions of a second are optional.
* Relative timeframe, back from now. The format is&#x20;
  `now-NU/A`
  , where&#x20;
  `N`
   is the amount of time,&#x20;
  `U`
   is the unit of time, and&#x20;
  `A`
   is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example,&#x20;
  `now-1y/w`
   is one year back, aligned by a week. You can also specify relative timeframe without an alignment:&#x20;
  `now-NU`
  . Supported time units for the relative timeframe are:&#x20;
  - `m`
    : minutes
  - `h`
    : hours
  - `d`
    : days
  - `w`
    : weeks
  - `M`
    : months
  - `y`
    : years
  &#x20; If not set, the relative timeframe of two weeks is used (`now-2w`). |
| config.id (required)   | string                                                                                                                            | The ID of the required SLO.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.timeFrame       | "CURRENT" \| "GTF"                                                                                                                | The timeframe to calculate the SLO values: * `CURRENT`
  : SLO's own timeframe.
* `GTF`
  : timeframe specified by&#x20;
  **from**
   and&#x20;
  **to**
   parameters. If not set, the `CURRENT` value is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.to              | string                                                                                                                            | The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
* Human-readable format of&#x20;
  `2021-01-25T05:57:01.123+01:00`
  . If no time zone is specified, UTC is used. You can use a space character instead of the&#x20;
  `T`
  . Seconds and fractions of a second are optional.
* Relative timeframe, back from now. The format is&#x20;
  `now-NU/A`
  , where&#x20;
  `N`
   is the amount of time,&#x20;
  `U`
   is the unit of time, and&#x20;
  `A`
   is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example,&#x20;
  `now-1y/w`
   is one year back, aligned by a week. You can also specify relative timeframe without an alignment:&#x20;
  `now-NU`
  . Supported time units for the relative timeframe are:&#x20;
  - `m`
    : minutes
  - `h`
    : hours
  - `d`
    : days
  - `w`
    : weeks
  - `M`
    : months
  - `y`
    : years
  &#x20; If not set, the current timestamp is used.                            |

#### Returns

| Return type                                                                                                                                   | Status code | Description                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [EntityShortRepresentation](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#entityshortrepresentation) | 201         | Success. The new alert has been created. The response contains the parameters of the new alert. The **location** response header contains the ID of the new alert. |

#### Throws

| Error Type         | Error Message                                                                                                                                                                                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. The requested resource doesn't exist. \| Precondition for creating an SLO alert not fulfilled. The SLO func metric cannot be created or is not created by the SLO. \| Internal server error. \| Client side error. \| Server side error. |

**Code example**

```ts
import { serviceLevelObjectivesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await serviceLevelObjectivesClient.createAlert(
  {
    id: "...",
    body: {
      alertName: "...",
      alertThreshold: 10,
      alertType: "BURN_RATE",
    },
  },
);
```

### createSlo

**serviceLevelObjectivesClient.createSlo(config): Promise\<void>**

Creates a new SLO

**Required scope:** environment-api:slo:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- settings:objects:write

#### Parameters

| Name                   | Type                                                                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [SloConfigItemDtoImpl](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#sloconfigitemdtoimpl) |

#### Returns

| Return type | Status code | Description                                                                                                                           |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| void        | 201         | Success. The new SLO has been created. Response doesn't have a body. The **location** response header contains the ID of the new SLO. |

#### Throws

| Error Type         | Error Message                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. Conflicting resource. \| Internal server error. \| Client side error. \| Server side error. |

**Code example**

```ts
import { serviceLevelObjectivesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await serviceLevelObjectivesClient.createSlo({
  body: {
    evaluationType: "AGGREGATE",
    name: "Payment service availability",
    target: 95,
    timeframe: "-1d",
    warning: 97.5,
  },
});
```

### deleteSlo

**serviceLevelObjectivesClient.deleteSlo(config): Promise\<void>**

Deletes an SLO

**Required scope:** environment-api:slo:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- settings:objects:write

#### Parameters

| Name                 | Type   |
| -------------------- | ------ |
| config.id (required) | string |

#### Returns

| Return type | Status code | Description                                                      |
| ----------- | ----------- | ---------------------------------------------------------------- |
| void        | 204         | Success. The SLO has been deleted. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                                                                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The requested resource doesn't exist. \| Failed. Conflicting resource. \| Internal server error. \| Client side error. \| Server side error. |

**Code example**

```ts
import { serviceLevelObjectivesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await serviceLevelObjectivesClient.deleteSlo({
  id: "...",
});
```

### getSlo

**serviceLevelObjectivesClient.getSlo(config): Promise\<[SLOs](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#slos)>**

Lists all available SLOs along with calculated values

**Required scope:** environment-api:slo:read
**One of the following permissions is required:**

- environment:roles:viewer
- settings:objects:read

By default the values are calculated for the SLO's own timeframe. You can use a custom timeframe:

1. Set the **timeFrame** parameter to `GTF`.
2. Provide the timeframe in **from** and **to** parameters.

#### Parameters

| Name                  | Type                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.demo           | boolean                    | Get your SLOs (`false`) or a set of demo SLOs (`true`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.enabledSlos    | "false" \| "true" \| "all" | Get your enabled SLOs (`true`), disabled ones (`false`) or both enabled and disabled ones (`all`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| config.evaluate       | "false" \| "true"          | Get your SLOs without them being evaluated (`false`) or with evaluations (`true`) with maximum `pageSize` of 25.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.from           | string                     | The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
* Human-readable format of&#x20;
  `2021-01-25T05:57:01.123+01:00`
  . If no time zone is specified, UTC is used. You can use a space character instead of the&#x20;
  `T`
  . Seconds and fractions of a second are optional.
* Relative timeframe, back from now. The format is&#x20;
  `now-NU/A`
  , where&#x20;
  `N`
   is the amount of time,&#x20;
  `U`
   is the unit of time, and&#x20;
  `A`
   is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example,&#x20;
  `now-1y/w`
   is one year back, aligned by a week. You can also specify relative timeframe without an alignment:&#x20;
  `now-NU`
  . Supported time units for the relative timeframe are:&#x20;
  - `m`
    : minutes
  - `h`
    : hours
  - `d`
    : days
  - `w`
    : weeks
  - `M`
    : months
  - `y`
    : years
  &#x20; If not set, the relative timeframe of two weeks is used (`now-2w`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.nextPageKey    | string                     | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.pageSize       | number                     | The amount of SLOs in a single response payload. The maximal allowed page size is 10000. If not set, 10 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.showGlobalSlos | boolean                    | Get your global SLOs (`true`) regardless of the selected filter or filter them out (`false`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| config.sloSelector    | string                     | The scope of the query. Only SLOs matching the provided criteria are included in the response. You can add one or several of the criteria listed below. * SLO ID:&#x20;
  `id("id-1","id-2")`
  .
* Name:&#x20;
  `name("name")`
  . Filters for an SLO with the given name. The filter is case-sensitive.
* Health state:&#x20;
  `healthState("HEALTHY")`
   or&#x20;
  `healthState("UNHEALTHY")`
  . Filters for SLOs that have no related open problems (
  `HEALTHY`
  ) or SLOs that have related open problems (
  `UNHEALTHY`
  ). You can specify only one health state.
* Text:&#x20;
  `text("value")`
  . Filters for all SLOs that contain the given value in their name or description. The filter is case-insensitive.
* Problem:&#x20;
  `problemDisplayName("value")`
  . Filters for all SLOs that are related to a given problem display name (e.g. P-12345).
* Management zone name:&#x20;
  `managementZone("MZ-A")`
  . Filters for all SLOs that are related to the given management zone name. Returned SLOs are evaluated against the given management zone.
* Management zone ID:&#x20;
  `managementZoneID("123")`
  . Filters for all SLOs that are related to the given management zone ID. Returned SLOs are evaluated against the given management zone. To set several criteria, separate them with comma (`,`). Only SLOs matching all criteria are included in the response. Examples: * .../api/v2/slo?sloSelector=name("Service Availability")
* .../api/v2/slo?sloSelector=id("id")
* .../api/v2/slo?sloSelector=text("Description"),healthState("HEALTHY"). The special characters `~` and `"` need to be escaped using a `~` (e.g. double quote search `text("~"")`). |
| config.sort           | string                     | The sorting of SLO entries: * `name`
  : Names in ascending order.
* `-name`
  : Names in descending order. If not set, the ascending order is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| config.timeFrame      | "CURRENT" \| "GTF"         | The timeframe to calculate the SLO values: * `CURRENT`
  : SLO's own timeframe.
* `GTF`
  : timeframe specified by&#x20;
  **from**
   and&#x20;
  **to**
   parameters. If not set, the `CURRENT` value is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.to             | string                     | The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
* Human-readable format of&#x20;
  `2021-01-25T05:57:01.123+01:00`
  . If no time zone is specified, UTC is used. You can use a space character instead of the&#x20;
  `T`
  . Seconds and fractions of a second are optional.
* Relative timeframe, back from now. The format is&#x20;
  `now-NU/A`
  , where&#x20;
  `N`
   is the amount of time,&#x20;
  `U`
   is the unit of time, and&#x20;
  `A`
   is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example,&#x20;
  `now-1y/w`
   is one year back, aligned by a week. You can also specify relative timeframe without an alignment:&#x20;
  `now-NU`
  . Supported time units for the relative timeframe are:&#x20;
  - `m`
    : minutes
  - `h`
    : hours
  - `d`
    : days
  - `w`
    : weeks
  - `M`
    : months
  - `y`
    : years
  &#x20; If not set, the current timestamp is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Returns

| Return type                                                                                         | Status code | Description                                                                               |
| --------------------------------------------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| [SLOs](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#slos) | 200         | Success. The response contains the parameters and calculated values of the requested SLO. |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { serviceLevelObjectivesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await serviceLevelObjectivesClient.getSlo();
```

### getSloById

**serviceLevelObjectivesClient.getSloById(config): Promise\<[SLO](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#slo)>**

Gets parameters and calculated values of a specific SLO

**Required scope:** environment-api:slo:read
**One of the following permissions is required:**

- environment:roles:viewer
- settings:objects:read

If **from** and **to** parameters are provided, the SLO is calculated for that timeframe; otherwise the SLO's own timeframe is used.

#### Parameters

| Name                 | Type               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.from          | string             | The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
* Human-readable format of&#x20;
  `2021-01-25T05:57:01.123+01:00`
  . If no time zone is specified, UTC is used. You can use a space character instead of the&#x20;
  `T`
  . Seconds and fractions of a second are optional.
* Relative timeframe, back from now. The format is&#x20;
  `now-NU/A`
  , where&#x20;
  `N`
   is the amount of time,&#x20;
  `U`
   is the unit of time, and&#x20;
  `A`
   is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example,&#x20;
  `now-1y/w`
   is one year back, aligned by a week. You can also specify relative timeframe without an alignment:&#x20;
  `now-NU`
  . Supported time units for the relative timeframe are:&#x20;
  - `m`
    : minutes
  - `h`
    : hours
  - `d`
    : days
  - `w`
    : weeks
  - `M`
    : months
  - `y`
    : years
  &#x20; If not set, the relative timeframe of two weeks is used (`now-2w`). |
| config.id (required) | string             | The ID of the required SLO.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.timeFrame     | "CURRENT" \| "GTF" | The timeframe to calculate the SLO values: * `CURRENT`
  : SLO's own timeframe.
* `GTF`
  : timeframe specified by&#x20;
  **from**
   and&#x20;
  **to**
   parameters. If not set, the `CURRENT` value is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.to            | string             | The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
* Human-readable format of&#x20;
  `2021-01-25T05:57:01.123+01:00`
  . If no time zone is specified, UTC is used. You can use a space character instead of the&#x20;
  `T`
  . Seconds and fractions of a second are optional.
* Relative timeframe, back from now. The format is&#x20;
  `now-NU/A`
  , where&#x20;
  `N`
   is the amount of time,&#x20;
  `U`
   is the unit of time, and&#x20;
  `A`
   is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example,&#x20;
  `now-1y/w`
   is one year back, aligned by a week. You can also specify relative timeframe without an alignment:&#x20;
  `now-NU`
  . Supported time units for the relative timeframe are:&#x20;
  - `m`
    : minutes
  - `h`
    : hours
  - `d`
    : days
  - `w`
    : weeks
  - `M`
    : months
  - `y`
    : years
  &#x20; If not set, the current timestamp is used.                            |

#### Returns

| Return type                                                                                       | Status code | Description                                                                               |
| ------------------------------------------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| [SLO](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#slo) | 200         | Success. The response contains the parameters and calculated values of the requested SLO. |

#### Throws

| Error Type         | Error Message                                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { serviceLevelObjectivesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await serviceLevelObjectivesClient.getSloById({
  id: "...",
});
```

### updateSloById

**serviceLevelObjectivesClient.updateSloById(config): Promise\<void>**

Updates an existing SLO

**Required scope:** environment-api:slo:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- settings:objects:write

#### Parameters

| Name                   | Type                                                                                                                                | Description                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| config.body (required) | [SloConfigItemDtoImpl](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#sloconfigitemdtoimpl) |                             |
| config.id (required)   | string                                                                                                                              | The ID of the required SLO. |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Internal server error. \| Client side error. \| Server side error. |

**Code example**

```ts
import { serviceLevelObjectivesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await serviceLevelObjectivesClient.updateSloById({
    id: "...",
    body: {
      evaluationType: "AGGREGATE",
      name: "Payment service availability",
      target: 95,
      timeframe: "-1d",
      warning: 97.5,
    },
  });
```
