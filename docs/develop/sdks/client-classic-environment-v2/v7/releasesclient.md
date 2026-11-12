## releasesClient

```js
import { releasesClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getReleases

**releasesClient.getReleases(config): Promise\<[Releases](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#releases)>**

Returns all releases

**Required scope:** environment-api:releases:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                    | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.demo             | boolean | Get your Releases (`false`) or a set of demo Releases (`true`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| config.from             | string  | The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the relative timeframe of two weeks is used (`now-2w`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| config.nextPageKey      | string  | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| config.pageSize         | number  | The amount of Releases in a single response payload. The maximal allowed page size is 1000. If not set, 100 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.releasesSelector | string  | Defines the scope of the query. Only Releases matching the provided criteria are included in the response. You can add one or several of the criteria listed below. * Management zone: type(PROCESS_GROUP_INSTANCE),mzName("ManagementZone-A"). Filters for all releases in the given management zone. The filter is case-sensitive.
* Monitoring state: monitoringState("Active") or monitoringState("Inactive"). You can specify only one monitoring state.
* Health state: healthState("HEALTHY") or healthState("UNHEALTHY"). You can specify only one health state.
* Security vulnerability: affectedBySecurityProblem("Detected") or affectedBySecurityProblem("Not detected"). You can specify only one security vulnerability state.
* Name: entityName("name"). Filters for all releases that contain the given value in their name. The filter is case-insensitive.
* Entity ID: entityId("id").
* Product: releasesProduct("product"). Filters for all releases that contain the given value in their product. The filter is case-insensitive.
* Stage: releasesStage("stage"). Filters for all releases that contain the given value in their stage. The filter is case-insensitive.
* Version: releasesVersion("version"). Filters for all releases that contain the given value in their version. The filter is case-insensitive. To set several criteria, separate them with comma (,). Only results matching all criteria are included in the response. e.g., .../api/v2/releases?releasesSelector=name("Server"),monitoringState("Active"),healthState("HEALTHY"),releasesVersion("1.0.7"). The special characters \~ and " need to be escaped using a \~ (e.g. double quote search entityName("\~""). |
| config.sort             | string  | Specifies the field that is used for sorting the releases list. The field has a sign prefix (+/-) which corresponds to the sorting order ('+' for ascending and '-' for descending). If no sign prefix is set, then the default ascending sorting order will be applied. You can sort by the following properties: * 'product': Product name
* 'name': Release name
* 'stage': Stage name
* 'version': Version
* 'instances': Instances
* 'traffic': Traffic If not set, the ascending order sorting for name is applied.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| config.to               | string  | The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the current timestamp is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### Returns

| Return type                                                                                                 | Status code | Description |
| ----------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [Releases](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#releases) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { releasesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await releasesClient.getReleases();
```
