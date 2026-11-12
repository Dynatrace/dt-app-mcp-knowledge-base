## monitoredEntitiesClient

```js
import { monitoredEntitiesClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### ~~deleteSecurityContext~~

> ⚠️ **Deprecated**

**monitoredEntitiesClient.deleteSecurityContext(config): Promise\<[SecurityContextResultDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#securitycontextresultdto)>**

Deletes the security context for all entities matching the entity selector.

**Required scope:** settings:objects:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- settings:objects:write

Automatic management zone rules will apply again to entities without a security context.

#### Parameters

| Name                             | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.entitySelector (required) | string | Defines the scope of the entities to set the security context for. Only entities that can have management zones are considered for this operation You must set one of these criteria: * Entity type:&#x20;
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
| config.from                      | string | The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the relative timeframe of three days is used (`now-3d`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| config.to                        | string | The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the current timestamp is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### Returns

| Return type                                                                                                                                 | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [SecurityContextResultDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#securitycontextresultdto) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { monitoredEntitiesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await monitoredEntitiesClient.deleteSecurityContext({
    entitySelector: "...",
  });
```

### getEntities

**monitoredEntitiesClient.getEntities(config): Promise\<[EntitiesList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#entitieslist)>**

Gets the information about monitored entities

**Required scope:** environment-api:entities:read
**Required permission:** environment:roles:viewer

Lists entities observed within the specified timeframe along with their properties.

When you query entities of the `SERVICE_METHOD` type, only the following requests are returned:

- [Key requests](https://dt-url.net/a903u9s)
- Top X requests that are used for [baselining](https://dt-url.net/0j23uqb)
- Requests that have caused a [problem](https://dt-url.net/pf43uqg)

You can limit the output by using pagination:

1. Specify the number of results per page in the **pageSize** query parameter.
2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.

#### Parameters

| Name                  | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.entitySelector | string | Defines the scope of the query. Only entities matching the specified criteria are included into response. You must set one of these criteria: * Entity type:&#x20;
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
  . For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation. To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in the response. The maximum string length is 2,000 characters. The field is **required** when you're querying the first page of results. |
| config.fields         | string | Defines the list of entity properties included in the response. The ID and the name of an entity are **always** included to the response. To add properties, list them with leading plus `+`. You can specify several properties, separated by a comma (for example `fields=+lastSeenTms,+properties.BITNESS`). Use the [GET entity type](https://dt-url.net/2ka3ivt) request to fetch the list of properties available for your entity type. Fields from the **properties** object must be specified in the `properties.FIELD` format (for example, `properties.BITNESS`). When requesting large amounts of relationship fields, throttling can apply.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
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
  &#x20; If not set, the relative timeframe of three days is used (`now-3d`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| config.nextPageKey    | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| config.pageSize       | number | The amount of entities. If not set, 50 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.sort           | string | Defines the ordering of the entities returned. This field is **optional**, each field has a sign prefix (+/-), which corresponds to sorting order ( + for ascending and - for descending). If no sign prefix is set, then default ascending sorting order will be applied. Currently ordering is only available for the display name (for example `sort=name or sort =+name for ascending, sort=-name for descending`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
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
  &#x20; If not set, the current timestamp is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

#### Returns

| Return type                                                                                                         | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [EntitiesList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#entitieslist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { monitoredEntitiesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await monitoredEntitiesClient.getEntities();
```

### getEntity

**monitoredEntitiesClient.getEntity(config): Promise\<[Entity](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#entity)>**

Gets the properties of the specified monitored entity

**Required scope:** environment-api:entities:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                       | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.entityId (required) | string | The ID of the required entity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| config.fields              | string | Defines the list of entity properties included in the response. The ID and the name of an entity are **always** included to the response. To add properties, list them with leading plus `+`. You can specify several properties, separated by a comma (for example `fields=+lastSeenTms,+properties.BITNESS`). Use the [GET entity type](https://dt-url.net/2ka3ivt) request to fetch the list of properties available for your entity type. Fields from the **properties** object must be specified in the `properties.FIELD` format (for example, `properties.BITNESS`). When requesting large amounts of relationship fields, throttling can apply.                                                                                                                                                                                                                                                                                                                                                                                                  |
| config.from                | string | The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the relative timeframe of three days is used (`now-3d`). |
| config.to                  | string | The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the current timestamp is used.                             |

#### Returns

| Return type                                                                                             | Status code | Description |
| ------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [Entity](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#entity) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { monitoredEntitiesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await monitoredEntitiesClient.getEntity({
  entityId: "...",
});
```

### getEntityType

**monitoredEntitiesClient.getEntityType(config): Promise\<[EntityType](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#entitytype)>**

Gets a list of properties for the specified entity type

**Required scope:** environment-api:entities:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                   | Type   | Description               |
| ---------------------- | ------ | ------------------------- |
| config.type (required) | string | The required entity type. |

#### Returns

| Return type                                                                                                     | Status code | Description |
| --------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [EntityType](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#entitytype) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { monitoredEntitiesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await monitoredEntitiesClient.getEntityType({
  type: "...",
});
```

### getEntityTypes

**monitoredEntitiesClient.getEntityTypes(config): Promise\<[EntityTypeList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#entitytypelist)>**

Gets a list of properties for all entity types

**Required scope:** environment-api:entities:read
**Required permission:** environment:roles:viewer

You can limit the output by using pagination:

1. Specify the number of results per page in the **pageSize** query parameter.
2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.

#### Parameters

| Name               | Type   | Description                                                                                                                                                                                                                                                                                                       |
| ------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.nextPageKey | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize    | number | The amount of entity types in a single response payload. The maximal allowed page size is 500. If not set, 50 is used.                                                                                                                                                                                            |

#### Returns

| Return type                                                                                                             | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [EntityTypeList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#entitytypelist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { monitoredEntitiesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await monitoredEntitiesClient.getEntityTypes();
```

### pushCustomDevice

**monitoredEntitiesClient.pushCustomDevice(config): Promise\<void | [CustomDeviceCreationResult](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#customdevicecreationresult)>**

Creates or updates a custom device

**Required scope:** environment-api:entities:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                   | Type                                                                                                                                | Description                                                                                                    |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [CustomDeviceCreation](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#customdevicecreation) |                                                                                                                |
| config.uiBased         | boolean                                                                                                                             | If true, it will be handled as if it was created via UI. It will be refreshed automatically and won't age out. |

#### Returns

| Return type                                                                                                                                     | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [CustomDeviceCreationResult](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#customdevicecreationresult) | 201         | Success     |
| void                                                                                                                                            | 204         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { monitoredEntitiesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await monitoredEntitiesClient.pushCustomDevice(
  { body: { customDeviceId: "...", displayName: "..." } },
);
```

### ~~setSecurityContext~~

> ⚠️ **Deprecated**

**monitoredEntitiesClient.setSecurityContext(config): Promise\<[SecurityContextResultDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#securitycontextresultdto)>**

Sets the given security context for all entities matching the entity selector.

**Required scope:** settings:objects:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- settings:objects:write

Matching entities will have a management zone assigned, if the given security context matches the name of an already existing management zone.
This endpoint does not create a new management zone, if there is no management zone with the provided name.
Automatic management zone rules will not apply to entities with a set security context. It will need to be removed, to have them apply again.

#### Parameters

| Name                             | Type                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.body (required)           | [SecurityContextDtoImpl](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#securitycontextdtoimpl) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| config.entitySelector (required) | string                                                                                                                                  | Defines the scope of the entities to set the security context for. Only entities that can have management zones are considered for this operation You must set one of these criteria: * Entity type:&#x20;
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
| config.from                      | string                                                                                                                                  | The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the relative timeframe of three days is used (`now-3d`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| config.to                        | string                                                                                                                                  | The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the current timestamp is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### Returns

| Return type                                                                                                                                 | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [SecurityContextResultDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#securitycontextresultdto) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { monitoredEntitiesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await monitoredEntitiesClient.setSecurityContext({
    entitySelector: "...",
    body: {},
  });
```
