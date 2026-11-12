## problemsClient

```js
import { problemsClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### closeProblem

**problemsClient.closeProblem(config): Promise\<void | [ProblemCloseResult](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#problemcloseresult)>**

Closes the specified problem and adds a closing comment on it

**One of the following scopes is required:**

- openpipeline:events.davis:ingest
- environment-api:problems:write

**One of the following permissions is required:**

- environment:roles:viewer
- openpipeline:events.davis:ingest

#### Parameters

| Name                        | Type                                                                                                                                            | Description                     |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| config.body (required)      | [ProblemCloseRequestDtoImpl](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#problemcloserequestdtoimpl) |                                 |
| config.problemId (required) | string                                                                                                                                          | The ID of the required problem. |

#### Returns

| Return type                                                                                                                     | Status code | Description                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------- |
| [ProblemCloseResult](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#problemcloseresult) | 200         | Success                                                         |
| void                                                                                                                            | 204         | The problem is closed already the request hasn't been executed. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { problemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await problemsClient.closeProblem({
  problemId: "...",
  body: { message: "..." },
});
```

### createComment

**problemsClient.createComment(config): Promise\<void>**

Adds a new comment on the specified problem

**Required scope:** environment-api:problems:write
**Required permission:** environment:roles:viewer

#### Parameters

| Name                        | Type                                                                                                                                  | Description                     |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| config.body (required)      | [CommentRequestDtoImpl](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#commentrequestdtoimpl) |                                 |
| config.problemId (required) | string                                                                                                                                | The ID of the required problem. |

#### Returns

| Return type | Status code | Description                          |
| ----------- | ----------- | ------------------------------------ |
| void        | 201         | Success. The comment has been added. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { problemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await problemsClient.createComment({
  problemId: "...",
  body: { message: "..." },
});
```

### deleteComment

**problemsClient.deleteComment(config): Promise\<void>**

Deletes the specified comment from a problem

**Required scope:** environment-api:problems:write
**Required permission:** environment:roles:viewer

#### Parameters

| Name                        | Type   | Description                     |
| --------------------------- | ------ | ------------------------------- |
| config.commentId (required) | string | The ID of the required comment. |
| config.problemId (required) | string | The ID of the required problem. |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. The comment has been deleted. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { problemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await problemsClient.deleteComment({
  problemId: "...",
  commentId: "...",
});
```

### getComment

**problemsClient.getComment(config): Promise\<[Comment](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#comment)>**

Gets the specified comment on a problem

**Required scope:** environment-api:problems:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                        | Type   | Description                     |
| --------------------------- | ------ | ------------------------------- |
| config.commentId (required) | string | The ID of the required comment. |
| config.problemId (required) | string | The ID of the required problem. |

#### Returns

| Return type                                                                                               | Status code | Description |
| --------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [Comment](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#comment) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { problemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await problemsClient.getComment({
  problemId: "...",
  commentId: "...",
});
```

### getComments

**problemsClient.getComments(config): Promise\<[CommentsList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#commentslist)>**

Gets all comments on the specified problem

**Required scope:** environment-api:problems:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                        | Type   | Description                                                                                                                                                                                                                                                                                                                                                |
| --------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.nextPageKey          | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters except the optional **fields** parameter. |
| config.pageSize             | number | The amount of comments in a single response payload. The maximal allowed page size is 500. If not set, 10 is used.                                                                                                                                                                                                                                         |
| config.problemId (required) | string | The ID of the required problem.                                                                                                                                                                                                                                                                                                                            |

#### Returns

| Return type                                                                                                         | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [CommentsList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#commentslist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { problemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await problemsClient.getComments({
  problemId: "...",
});
```

### getProblem

**problemsClient.getProblem(config): Promise\<[Problem](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#problem)>**

Gets the properties of the specified problem

**Required scope:** environment-api:problems:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                        | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.fields               | string | A list of additional problem properties you can add to the response. The following properties are available (all other properties are always included and you can't remove them from the response): * `evidenceDetails`
  : The details of the root cause.
* `impactAnalysis`
  : The impact analysis of the problem on other entities/users.
* `recentComments`
  : A list of the most recent comments to the problem. To add properties, specify them as a comma-separated list (for example, `evidenceDetails,impactAnalysis`). |
| config.problemId (required) | string | The ID of the required problem.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Returns

| Return type                                                                                               | Status code | Description |
| --------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [Problem](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#problem) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { problemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await problemsClient.getProblem({
  problemId: "...",
});
```

### getProblems

**problemsClient.getProblems(config): Promise\<[Problems](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#problems)>**

Lists problems observed within the specified timeframe

**Required scope:** environment-api:problems:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                   | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.entitySelector  | string | The entity scope of the query. You must set one of these criteria: * Entity type:&#x20;
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
  . For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation. To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in the response. The maximum string length is 2,000 characters. The maximum number of entities that may be selected is limited to 10000. |
| config.fields          | string | A list of additional problem properties you can add to the response. The following properties are available (all other properties are always included and you can't remove them from the response): * `evidenceDetails`
  : The details of the root cause.
* `impactAnalysis`
  : The impact analysis of the problem on other entities/users.
* `recentComments`
  : A list of the most recent comments to the problem. To add properties, specify them as a comma-separated list (for example, `evidenceDetails,impactAnalysis`). The field is valid only for the current page of results. You must set it for each page you're requesting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| config.from            | string | The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the relative timeframe of two hours is used (`now-2h`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| config.nextPageKey     | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters except the optional **fields** parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.pageSize        | number | The amount of problems in a single response payload. The maximal allowed page size is 500. If not set, 50 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| config.problemSelector | string | Defines the scope of the query. Only problems matching the specified criteria are included into response. You can add one or several of the criteria listed below. For each criterion you can specify multiple comma-separated values, unless stated otherwise. If several values are specified, the **OR** logic applies. All values must be quoted. * Status:&#x20;
  `status("open")`
   or&#x20;
  `status("closed")`
  . You can specify only one status.
* Severity level:&#x20;
  `severityLevel("level-1","level-2")`
  . Find the possible values in the description of the&#x20;
  **severityLevel**
   field of the response.
* Impact level:&#x20;
  `impactLevel("level-11","level-2")`
   Find the possible values in the description of the&#x20;
  **impactLevel**
   field of the response.
* Root cause entity:&#x20;
  `rootCauseEntity("id-1", "id-2")`
  .
* Management zone ID:&#x20;
  `managementZoneIds("mZId-1", "mzId-2")`
  .
* Management zone name (contains, case-insensitive):&#x20;
  `managementZones("value-1","value-2")`
  .
* Impacted entities:&#x20;
  `impactedEntities("id-1", "id-2")`
  .
* Affected entities:&#x20;
  `affectedEntities("id-1", "id-2")`
  .
* Type of affected entities:&#x20;
  `affectedEntityTypes("value-1","value-2")`
  .
* Problem ID:&#x20;
  `problemId("id-1", "id-2")`
  .
* Alerting profile ID:&#x20;
  `problemFilterIds("id-1", "id-2")`
  .
* Alerting profile name (contains, case-insensitive):&#x20;
  `problemFilterNames("value-1","value-2")`
  .
* Alerting profile name (exact match, case-insensitive):&#x20;
  `problemFilterNames.equals("value-1","value-2")`
  .
* Entity tags:&#x20;
  `entityTags("[context]key:value","key:value")`
  . Tags in&#x20;
  `[context]key:value`
  ,&#x20;
  `key:value`
  , and&#x20;
  `value`
   formats are detected and parsed automatically. If a value-only tag has a colon (
  `:`
  ) in it, you must escape the colon with a backslash(
  `\`
  ). Otherwise, the tag will be parsed as a&#x20;
  `key:value tag`
  . All tag values are case-sensitive.
* Display ID of the problem:&#x20;
  `displayId("id-1", "id-2")`
  .
* Under maintenance:&#x20;
  `underMaintenance(true\|false)`
  . Shows (true) or hides (false) all problems created during maintenance mode.
* Text search:&#x20;
  `text("value")`
  . Text search on the following fields: problem title, event titles, displayId and the id of affected and impacted entities. The text search is case insensitive, partial matching and based on a relevance score. Therefore the&#x20;
  `relevance`
   sort option should be used to get the most relevant problems first. The special characters&#x20;
  `\~`
   and&#x20;
  `"`
   need to be escaped using a&#x20;
  `\~`
   (e.g. double quote search&#x20;
  `text("\~"")`
  ). The search value is limited to 30 characters. To set several criteria, separate them with a comma (`,`). Only results matching **all** criteria are included in the response.                                                                                                                       |
| config.sort            | string | Specifies a set of comma-separated (`,`) fields for sorting in the problem list. You can sort by the following properties with a sign prefix for the sorting order. * `status`
  : problem status (
  `+`
   open problems first or&#x20;
  `-`
   closed problems first)
* `startTime`
  : problem start time (
  `+`
   old problems first or&#x20;
  `-`
   new problems first)
* `relevance`
  : problem relevance (
  `+`
   least relevant problems first or&#x20;
  `-`
   most relevant problems first) - can be used only in combination with text search If no prefix is set, `+` is used. You can specify several levels of sorting. For example, `+status,-startTime` sorts problems by status, open problems first. Within the status, problems are sorted by start time, oldest first.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.to              | string | The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the current timestamp is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

#### Returns

| Return type                                                                                                 | Status code | Description |
| ----------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [Problems](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#problems) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { problemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await problemsClient.getProblems();
```

### updateComment

**problemsClient.updateComment(config): Promise\<void>**

Updates the specified comment on a problem

**Required scope:** environment-api:problems:write
**Required permission:** environment:roles:viewer

#### Parameters

| Name                        | Type                                                                                                                                  | Description                     |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| config.body (required)      | [CommentRequestDtoImpl](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#commentrequestdtoimpl) |                                 |
| config.commentId (required) | string                                                                                                                                | The ID of the required comment. |
| config.problemId (required) | string                                                                                                                                | The ID of the required problem. |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. The comment has been updated. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { problemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await problemsClient.updateComment({
  problemId: "...",
  commentId: "...",
  body: { message: "..." },
});
```
