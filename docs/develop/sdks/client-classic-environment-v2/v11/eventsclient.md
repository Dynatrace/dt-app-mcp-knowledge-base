## eventsClient

```js
import { eventsClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### createEvent

**eventsClient.createEvent(config): Promise\<[EventIngestResults](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#eventingestresults)>**

Ingests a custom event

**One of the following scopes is required:**

- openpipeline:events.davis:ingest
- storage:events:write
- environment-api:events:write

**One of the following permissions is required:**

- environment:roles:viewer
- openpipeline:events.davis:ingest

The ingestion of custom events is subject to licensing (see [licensing documentation](https://www.dynatrace.com/support/help/shortlink/dps-events)).

#### Parameters

| Name                   | Type                                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------ |
| config.body (required) | [EventIngest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#eventingest) |

#### Returns

| Return type                                                                                                                      | Status code | Description                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [EventIngestResults](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#eventingestresults) | 201         | The event ingest request was received by the server. The response body indicates for each event whether its creation was successful. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { eventsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await eventsClient.createEvent({
  body: { eventType: "AVAILABILITY_EVENT", title: "..." },
});
```

### ~~getEvent~~

> ⚠️ **Deprecated**

**eventsClient.getEvent(config): Promise\<[Event](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#event)>**

Gets the properties of an event

**Required scope:** environment-api:events:read
**Required permission:** environment:roles:viewer

**Deprecation notice:** This endpoint is deprecated. Use the [Grail Query API](https://dt-url.net/zb0381u) instead.

#### Parameters

| Name                      | Type   | Description                   |
| ------------------------- | ------ | ----------------------------- |
| config.eventId (required) | string | The ID of the required event. |

#### Returns

| Return type                                                                                            | Status code | Description                                                    |
| ------------------------------------------------------------------------------------------------------ | ----------- | -------------------------------------------------------------- |
| [Event](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#event) | 200         | Success. The response contains the configuration of the event. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { eventsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await eventsClient.getEvent({
  eventId: "...",
});
```

### getEventProperties

**eventsClient.getEventProperties(config): Promise\<[EventPropertiesList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#eventpropertieslist)>**

Lists all event properties

**One of the following scopes is required:**

- storage:events:read
- environment-api:events:read

**One of the following permissions is required:**

- environment:roles:viewer
- storage:events:read

#### Parameters

| Name               | Type   | Description                                                                                                                                                                                                                                                                                                       |
| ------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.nextPageKey | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize    | number | The amount of event properties in a single response payload. The maximal allowed page size is 500. If not set, 100 is used.                                                                                                                                                                                       |

#### Returns

| Return type                                                                                                                        | Status code | Description |
| ---------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [EventPropertiesList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#eventpropertieslist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { eventsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await eventsClient.getEventProperties();
```

### getEventProperty

**eventsClient.getEventProperty(config): Promise\<[EventPropertyDetails](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#eventpropertydetails)>**

Gets the details of an event property

**One of the following scopes is required:**

- storage:events:read
- environment-api:events:read

**One of the following permissions is required:**

- environment:roles:viewer
- storage:events:read

#### Parameters

| Name                          | Type   | Description                              |
| ----------------------------- | ------ | ---------------------------------------- |
| config.propertyKey (required) | string | The event property key you're inquiring. |

#### Returns

| Return type                                                                                                                          | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------ | ----------- | ----------- |
| [EventPropertyDetails](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#eventpropertydetails) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { eventsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await eventsClient.getEventProperty({
  propertyKey: "...",
});
```

### getEventType

**eventsClient.getEventType(config): Promise\<[EventType](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#eventtype)>**

Gets the properties of an event type

**One of the following scopes is required:**

- storage:events:read
- environment-api:events:read

**One of the following permissions is required:**

- environment:roles:viewer
- storage:events:read

#### Parameters

| Name                        | Type   | Description                      |
| --------------------------- | ------ | -------------------------------- |
| config.eventType (required) | string | The event type you're inquiring. |

#### Returns

| Return type                                                                                                    | Status code | Description |
| -------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [EventType](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#eventtype) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { eventsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await eventsClient.getEventType({
  eventType: "...",
});
```

### getEventTypes

**eventsClient.getEventTypes(config): Promise\<[EventTypeList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#eventtypelist)>**

Lists all event types

**One of the following scopes is required:**

- storage:events:read
- environment-api:events:read

**One of the following permissions is required:**

- environment:roles:viewer
- storage:events:read

#### Parameters

| Name               | Type   | Description                                                                                                                                                                                                                                                                                                       |
| ------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.nextPageKey | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize    | number | The amount of event types in a single response payload. The maximal allowed page size is 500. If not set, 100 is used.                                                                                                                                                                                            |

#### Returns

| Return type                                                                                                            | Status code | Description |
| ---------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [EventTypeList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#eventtypelist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { eventsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await eventsClient.getEventTypes();
```

### ~~getEvents~~

> ⚠️ **Deprecated**

**eventsClient.getEvents(config): Promise\<[EventList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#eventlist)>**

Lists events within the specified timeframe

**Required scope:** environment-api:events:read
**Required permission:** environment:roles:viewer

**Deprecation notice:** This endpoint is deprecated. Use the [Grail Query API](https://dt-url.net/zb0381u) instead.

#### Parameters

| Name                  | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.entitySelector | string | The entity scope of the query. You must set one of these criteria: * Entity type:&#x20;
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
  . For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation. To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in the response. The maximum string length is 2,000 characters. The number of entities that can be selected is limited to 10000. |
| config.eventSelector  | string | Defines the scope of the query. Only events matching the specified criteria are included in the response. You can add one or several of the criteria listed below. For each criterion you can specify multiple comma-separated values, unless stated otherwise. If several values are specified, the **OR** logic applies. * Event ID:&#x20;
  `eventId("id-1", "id-2")`
  .
* ID of related entity:&#x20;
  `entityId("id-1", "id-2")`
  .
* Event status:&#x20;
  `status("OPEN")`
   or&#x20;
  `status("CLOSED")`
  . You can specify only one status.
* Management zone ID:&#x20;
  `managementZoneId("123", "321")`
  .
* Event type:&#x20;
  `eventType("event-type")`
  . You can specify only one event type. You can fetch the list of possible event types with the&#x20;
  [GET event types](https://dt-url.net/qc03u6w)
   call.
* Correlation ID:&#x20;
  `correlationId("id-1", "id-2")`
  .
* Happened during maintenance (true, false):&#x20;
  `underMaintenance(true)`
  .
* Notifications are suppressed (true, false):&#x20;
  `suppressAlert(true)`
  .
* Problem creation is suppressed (true, false):&#x20;
  `suppressProblem(true)`
  .
* Frequent event (true, false):&#x20;
  `frequentEvent(true)`
  .
* Event property:&#x20;
  `property.<key>("value-1", "value-2")`
  . Only properties with the&#x20;
  **filterable**
   property set to&#x20;
  `true`
   can be used. You can check event properties via the&#x20;
  [GET event properties](https://dt-url.net/es03nwo)
   call. To set several criteria, separate them with commas (`,`). Only results matching **all** criteria are included in the response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
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
  &#x20; If not set, the relative timeframe of two hours is used (`now-2h`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| config.nextPageKey    | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| config.pageSize       | number | The amount of events in a single response payload. The maximal allowed page size is 1000. If not set, 100 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
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
  &#x20; If not set, the current timestamp is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### Returns

| Return type                                                                                                    | Status code | Description                                        |
| -------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------- |
| [EventList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#eventlist) | 200         | Success. The response contains the list of events. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { eventsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await eventsClient.getEvents();
```
