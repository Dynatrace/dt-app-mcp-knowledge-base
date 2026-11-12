## monitoredEntitiesMonitoringStateClient

```js
import { monitoredEntitiesMonitoringStateClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getStates

**monitoredEntitiesMonitoringStateClient.getStates(config): Promise\<[MonitoredStates](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#monitoredstates)>**

Lists monitoring states of entities

**Required scope:** environment-api:entities:read
**Required permission:** environment:roles:viewer

Only process group instances are supported.

#### Parameters

| Name                  | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.entitySelector | string | Specifies the process group instances where you're querying the state. Use the `PROCESS_GROUP_INSTANCE` entity type. You must set one of these criteria: * Entity type:&#x20;
  `type("TYPE")`
* Dynatrace entity ID:&#x20;
  `entityId("id")`
  . You can specify several IDs, separated by a comma (
  `entityId("id-1","id-2")`
  ). All requested entities must be of the same type. You can add one or more of the following criteria. Values are case-sensitive and the `EQUALS` operator is used unless otherwise specified. * Tag:&#x20;
  `tag("value")`
  . Tags in&#x20;
  `[context]key:value`
  ,&#x20;
  `key:value`
  , and&#x20;
  `value`
   formats are detected and parsed automatically. Any colons (
  `:`
  ) that are part of the key or value must be escaped with a backslash(
  `\`
  ). Otherwise, it will be interpreted as the separator between the key and the value. All tag values are case-sensitive.
* Management zone ID:&#x20;
  `mzId(123)`
* Management zone name:&#x20;
  `mzName("value")`
* Entity name:&#x20;
  - `entityName.equals`
    : performs a non-casesensitive&#x20;
    `EQUALS`
     query.
  - `entityName.startsWith`
    : changes the operator to&#x20;
    `BEGINS WITH`
    .
  - `entityName.in`
    : enables you to provide multiple values. The&#x20;
    `EQUALS`
     operator applies.
  - `caseSensitive(entityName.equals("value"))`
    : takes any entity name criterion as an argument and makes the value case-sensitive.
  &#x20;
* Health state (HEALTHY,UNHEALTHY):&#x20;
  `healthState("HEALTHY")`
* First seen timestamp:&#x20;
  `firstSeenTms.<operator>(now-3h)`
  . Use any timestamp format from the&#x20;
  **from**
   /
  **to**
   parameters. The following operators are available:&#x20;
  - `lte`
    : earlier than or at the specified time
  - `lt`
    : earlier than the specified time
  - `gte`
    : later than or at the specified time
  - `gt`
    : later than the specified time
  &#x20;
* Entity attribute:&#x20;
  `<attribute>("value1","value2")`
   and&#x20;
  `<attribute>.exists()`
  . To fetch the list of available attributes, execute the&#x20;
  [GET entity type](https://dt-url.net/2ka3ivt)
   request and check the&#x20;
  **properties**
   field of the response.
* Relationships:&#x20;
  `fromRelationships.<relationshipName>()`
   and&#x20;
  `toRelationships.<relationshipName>()`
  . This criterion takes an entity selector as an attribute. To fetch the list of available relationships, execute the&#x20;
  [GET entity type](https://dt-url.net/2ka3ivt)
   request and check the&#x20;
  **fromRelationships**
   and&#x20;
  **toRelationships**
   fields.
* Negation:&#x20;
  `not(<criterion>)`
  . Inverts any criterion except for&#x20;
  **type**
  . For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation. To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in the response. The maximum string length is 2,000 characters. |
| config.from           | string | The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the relative timeframe of 24 hours is used (`now-24h`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.nextPageKey    | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.pageSize       | number | The amount of monitoring states in a single response payload. The maximal allowed page size is 500. If not set, 500 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| config.to             | string | The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the current timestamp is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Returns

| Return type                                                                                                               | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [MonitoredStates](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#monitoredstates) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                           |
| ------------------ | ------------------------------------------------------- |
| ErrorEnvelopeError | Unavailable \| Client side error. \| Server side error. |

**Code example**

```ts
import { monitoredEntitiesMonitoringStateClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await monitoredEntitiesMonitoringStateClient.getStates();
```
