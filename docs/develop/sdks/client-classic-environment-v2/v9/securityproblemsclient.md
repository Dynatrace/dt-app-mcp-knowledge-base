## securityProblemsClient

```js
import { securityProblemsClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### bulkMuteRemediationItems

**securityProblemsClient.bulkMuteRemediationItems(config): Promise\<[RemediationItemsBulkMuteResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remediationitemsbulkmuteresponse)>**

Mutes several remediation items

**Required scope:** environment-api:security-problems:write
**Required permission:** environment:roles:manage-security-problems

#### Parameters

| Name                   | Type                                                                                                                                        | Description                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| config.body (required) | [RemediationItemsBulkMute](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remediationitemsbulkmute) |                                                       |
| config.id (required)   | string                                                                                                                                      | The ID of the requested third-party security problem. |

#### Returns

| Return type                                                                                                                                                 | Status code | Description                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------- |
| [RemediationItemsBulkMuteResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remediationitemsbulkmuteresponse) | 200         | Success. The remediation item(s) have been muted. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { securityProblemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await securityProblemsClient.bulkMuteRemediationItems({
    id: "...",
    body: {
      reason: "CONFIGURATION_NOT_AFFECTED",
      remediationItemIds: ["..."],
    },
  });
```

### bulkMuteSecurityProblems

**securityProblemsClient.bulkMuteSecurityProblems(config): Promise\<[SecurityProblemsBulkMuteResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#securityproblemsbulkmuteresponse)>**

Mutes several security problems

**Required scope:** environment-api:security-problems:write
**Required permission:** environment:roles:manage-security-problems

#### Parameters

| Name                   | Type                                                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [SecurityProblemsBulkMute](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#securityproblemsbulkmute) |

#### Returns

| Return type                                                                                                                                                 | Status code | Description                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------- |
| [SecurityProblemsBulkMuteResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#securityproblemsbulkmuteresponse) | 200         | Success. The security problem(s) have been muted. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { securityProblemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await securityProblemsClient.bulkMuteSecurityProblems({
    body: {
      reason: "CONFIGURATION_NOT_AFFECTED",
      securityProblemIds: ["..."],
    },
  });
```

### bulkUnmuteRemediationItems

**securityProblemsClient.bulkUnmuteRemediationItems(config): Promise\<[RemediationItemsBulkUnmuteResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remediationitemsbulkunmuteresponse)>**

Un-mutes several remediation items

**Required scope:** environment-api:security-problems:write
**Required permission:** environment:roles:manage-security-problems

#### Parameters

| Name                   | Type                                                                                                                                            | Description                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| config.body (required) | [RemediationItemsBulkUnmute](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remediationitemsbulkunmute) |                                                       |
| config.id (required)   | string                                                                                                                                          | The ID of the requested third-party security problem. |

#### Returns

| Return type                                                                                                                                                     | Status code | Description                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------- |
| [RemediationItemsBulkUnmuteResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remediationitemsbulkunmuteresponse) | 200         | Success. The remediation item(s) have been un-muted. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { securityProblemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await securityProblemsClient.bulkUnmuteRemediationItems({
    id: "...",
    body: {
      reason: "AFFECTED",
      remediationItemIds: ["..."],
    },
  });
```

### bulkUnmuteSecurityProblems

**securityProblemsClient.bulkUnmuteSecurityProblems(config): Promise\<[SecurityProblemsBulkUnmuteResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#securityproblemsbulkunmuteresponse)>**

Un-mutes several security problems

**Required scope:** environment-api:security-problems:write
**Required permission:** environment:roles:manage-security-problems

#### Parameters

| Name                   | Type                                                                                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [SecurityProblemsBulkUnmute](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#securityproblemsbulkunmute) |

#### Returns

| Return type                                                                                                                                                     | Status code | Description                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------- |
| [SecurityProblemsBulkUnmuteResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#securityproblemsbulkunmuteresponse) | 200         | Success. The security problem(s) have been un-muted. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { securityProblemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await securityProblemsClient.bulkUnmuteSecurityProblems({
    body: {
      reason: "AFFECTED",
      securityProblemIds: ["..."],
    },
  });
```

### getEventsForSecurityProblem

**securityProblemsClient.getEventsForSecurityProblem(config): Promise\<[SecurityProblemEventsList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#securityproblemeventslist)>**

Lists all events of a security problem

**Required scope:** environment-api:security-problems:read
**One of the following permissions is required:**

- environment:roles:manage-security-problems
- environment:roles:view-security-problems

#### Parameters

| Name                 | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.from          | string | The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the relative timeframe of thirty days is used (`now-30d`). |
| config.id (required) | string | The ID of the requested security problem.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| config.to            | string | The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the current timestamp is used.                               |

#### Returns

| Return type                                                                                                                                   | Status code | Description                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------- |
| [SecurityProblemEventsList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#securityproblemeventslist) | 200         | Success. The response contains the list of security problem events. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { securityProblemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await securityProblemsClient.getEventsForSecurityProblem({
    id: "...",
  });
```

### getRemediationItem

**securityProblemsClient.getRemediationItem(config): Promise\<[RemediationDetailsItem](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remediationdetailsitem)>**

Gets parameters of a remediation item of a security problem

**Required scope:** environment-api:security-problems:read
**One of the following permissions is required:**

- environment:roles:manage-security-problems
- environment:roles:view-security-problems

#### Parameters

| Name                                | Type   | Description                                           |
| ----------------------------------- | ------ | ----------------------------------------------------- |
| config.id (required)                | string | The ID of the requested third-party security problem. |
| config.remediationItemId (required) | string | The ID of the remediation item.                       |

#### Returns

| Return type                                                                                                                             | Status code | Description                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------ |
| [RemediationDetailsItem](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remediationdetailsitem) | 200         | Success. The response contains details of a single remediation item of a security problem. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { securityProblemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await securityProblemsClient.getRemediationItem({
    id: "...",
    remediationItemId: "...",
  });
```

### getRemediationItems

**securityProblemsClient.getRemediationItems(config): Promise\<[RemediationItemList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remediationitemlist)>**

Lists remediation items of a third-party security problem

**Required scope:** environment-api:security-problems:read
**One of the following permissions is required:**

- environment:roles:manage-security-problems
- environment:roles:view-security-problems

#### Parameters

| Name                           | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.id (required)           | string | The ID of the requested third-party security problem.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| config.remediationItemSelector | string | Defines the scope of the query. Only remediable entities matching the specified criteria are included in the response. You can add one or more of the following criteria. Values are *not* case-sensitive and the `EQUALS` operator is used unless otherwise specified. * Vulnerability state:&#x20;
  `vulnerabilityState("value")`
  . Possible values are&#x20;
  `VULNERABLE`
  , and&#x20;
  `RESOLVED`
  . If not set, all entities are returned.
* Muted:&#x20;
  `muted("value")`
  . Possible values are&#x20;
  `TRUE`
   or&#x20;
  `FALSE`
  .
* Reachable data asset assessment:&#x20;
  `assessment.dataAssets("value")`
   Possible values are&#x20;
  `REACHABLE`
  , and&#x20;
  `NOT_DETECTED`
  .
* Network exposure assessment:&#x20;
  `assessment.exposure("value")`
   Possible values are&#x20;
  `PUBLIC_NETWORK`
  , and&#x20;
  `NOT_DETECTED`
  .
* Vulnerable function usage assessment:&#x20;
  `assessment.vulnerableFunctionUsage("value")`
   Possible values are&#x20;
  `IN_USE`
  , and&#x20;
  `NOT_IN_USE`
  .
* Vulnerable function restart required:&#x20;
  `assessment.vulnerableFunctionRestartRequired("value")`
   Possible values are&#x20;
  `TRUE`
   or&#x20;
  `FALSE`
  .
* Vulnerable function in use contains:&#x20;
  `assessment.vulnerableFunctionInUseContains("value")`
  . Possible values are&#x20;
  `class::function`
  ,&#x20;
  `class::`
   and&#x20;
  `function`
  . The&#x20;
  `CONTAINS`
   operator is used. Only vulnerable functions in use are considered.
* Assessment accuracy:&#x20;
  `assessment.accuracy("value")`
   Possible values are&#x20;
  `FULL`
   and&#x20;
  `REDUCED`
  .
* Entity name contains:&#x20;
  `entityNameContains("value-1")`
  . The&#x20;
  `CONTAINS`
   operator is used.
* Tracking link display name:&#x20;
  `trackingLink.displayNameContains("value")`
  . The&#x20;
  `CONTAINS`
   operator is used. To set several criteria, separate them with a comma (`,`). Only results matching **all** criteria are included in the response. Specify the value of a criterion as a quoted string. The following special characters must be escaped with a tilde (`~`) inside quotes: * Tilde&#x20;
  `~`
* Quote&#x20;
  `"` |

#### Returns

| Return type                                                                                                                       | Status code | Description                                                                |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------- |
| [RemediationItemList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remediationitemlist) | 200         | Success. The response contains the list of remediation items of a problem. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { securityProblemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await securityProblemsClient.getRemediationItems({
    id: "...",
  });
```

### getRemediationProgressEntities

**securityProblemsClient.getRemediationProgressEntities(config): Promise\<[RemediationProgressEntityList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remediationprogressentitylist)>**

Lists remediation progress entities

**Required scope:** environment-api:security-problems:read
**One of the following permissions is required:**

- environment:roles:manage-security-problems
- environment:roles:view-security-problems

#### Parameters

| Name                                     | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.id (required)                     | string | The ID of the requested third-party security problem.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.remediationItemId (required)      | string | The ID of the remediation item.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.remediationProgressEntitySelector | string | Defines the scope of the query. Only remediation progress entities matching the specified criteria are included in the response. You can add one or more of the following criteria. Values are *not* case-sensitive and the `EQUALS` operator is used unless otherwise specified. * State:&#x20;
  `state("value")`
  . Possible values the&#x20;
  **state**
   field are&#x20;
  `AFFECTED`
   and&#x20;
  `UNAFFECTED`
  . If not set, all entities are returned.
* Vulnerable function usage assessment:&#x20;
  `assessment.vulnerableFunctionUsage("value")`
   Possible values are&#x20;
  `IN_USE`
  , and&#x20;
  `NOT_IN_USE`
  .
* Vulnerable function restart required:&#x20;
  `assessment.vulnerableFunctionRestartRequired("value")`
   Possible values are&#x20;
  `TRUE`
   or&#x20;
  `FALSE`
  .
* Vulnerable function in use contains:&#x20;
  `assessment.vulnerableFunctionInUseContains("value")`
  . Possible values are&#x20;
  `class::function`
  ,&#x20;
  `class::`
   and&#x20;
  `function`
  . The&#x20;
  `CONTAINS`
   operator is used. Only vulnerable functions in use are considered.
* Entity name contains:&#x20;
  `entityNameContains("value-1")`
  . The&#x20;
  `CONTAINS`
   operator is used. To set several criteria, separate them with a comma (`,`). Only results matching **all** criteria are included in the response. Specify the value of a criterion as a quoted string. The following special characters must be escaped with a tilde (`~`) inside quotes: * Tilde&#x20;
  `~`
* Quote&#x20;
  `"` |

#### Returns

| Return type                                                                                                                                           | Status code | Description                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [RemediationProgressEntityList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remediationprogressentitylist) | 200         | Success. The response contains a list of remediation progress entities of a remediation item of a security problem. The number of entities returned is limited. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { securityProblemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await securityProblemsClient.getRemediationProgressEntities(
    { id: "...", remediationItemId: "..." },
  );
```

### getSecurityProblem

**securityProblemsClient.getSecurityProblem(config): Promise\<[SecurityProblemDetails](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#securityproblemdetails)>**

Gets parameters of a security problem

**Required scope:** environment-api:security-problems:read
**One of the following permissions is required:**

- environment:roles:manage-security-problems
- environment:roles:view-security-problems

#### Parameters

| Name                        | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.fields               | string | A list of additional security problem properties you can add to the response. The following properties are available (all other properties are always included and you can't remove them from the response): * `riskAssessment`
  : A risk assessment of the security problem.
* `managementZones`
  : The management zone where the security problem occurred.
* `codeLevelVulnerabilityDetails`
  : Details of the code-level vulnerability.
* `globalCounts`
  : Globally calculated statistics about the security problem. No management zone information is taken into account.
* `filteredCounts`
  : Statistics about the security problem, filtered by the management zone and timeframe start ('from') query parameters.
* `description`
  : The description of the vulnerability.
* `remediationDescription`
  : Description of how to remediate the vulnerability.
* `events`
  : The security problem's last 10 events within the last 365 days, sorted from newest to oldest.
* `vulnerableComponents`
  : A list of vulnerable components of the security problem within the provided filter range.
* `affectedEntities`
  : A list of affected entities of the security problem within the provided filter range.
* `exposedEntities`
  : A list of exposed entities of the security problem within the provided filter range.
* `reachableDataAssets`
  : A list of data assets reachable by affected entities of the security problem within the provided filter range.
* `relatedEntities`
  : A list of related entities of the security problem within the provided filter range.
* `relatedContainerImages`
  : A list of related container images of the security problem within the provided filter range.
* `relatedAttacks`
  : A list of attacks detected on the exposed security problem.
* `entryPoints`
  : A list of entry points and a flag which indicates whether this list was truncated or not. To add properties, specify them in a comma-separated list and prefix each property with a plus (for example, `+riskAssessment,+managementZones`). |
| config.from                 | string | Based on the timeframe start the affected-, related- and vulnerable entities are being calculated. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the default timeframe start of 24 hours in the past is used (`now-24h`). The timeframe start must not be older than 365 days.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| config.id (required)        | string | The ID of the requested security problem.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| config.managementZoneFilter | string | To specify management zones, use one of the options listed below. For each option you can specify multiple comma-separated values. If several values are specified, the **OR** logic applies. All values are case-sensitive and must be quoted. * Management zone ID: ids("mzId-1", "mzId-2").
* Management zone names: names("mz-1", "mz-2"). You can specify several comma-separated criteria (for example, `names("myMz"),ids("9130632296508575249")`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Returns

| Return type                                                                                                                             | Status code | Description                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------ |
| [SecurityProblemDetails](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#securityproblemdetails) | 200         | Success. The response contains parameters of the security problem. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { securityProblemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await securityProblemsClient.getSecurityProblem({
    id: "...",
  });
```

### getSecurityProblems

**securityProblemsClient.getSecurityProblems(config): Promise\<[SecurityProblemList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#securityproblemlist)>**

Lists all security problems

**Required scope:** environment-api:security-problems:read
**One of the following permissions is required:**

- environment:roles:manage-security-problems
- environment:roles:view-security-problems

#### Parameters

| Name                           | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.fields                  | string | A list of additional security problem properties you can add to the response. The following properties are available (all other properties are always included and you can't remove them from the response): * `riskAssessment`
  : A risk assessment of the security problem.
* `managementZones`
  : The management zone where the security problem occurred.
* `codeLevelVulnerabilityDetails`
  : Details of the code-level vulnerability.
* `globalCounts`
  : Globally calculated statistics about the security problem. No management zone information is taken into account. To add properties, specify them in a comma-separated list and prefix each property with a plus (for example, `+riskAssessment,+managementZones`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| config.from                    | string | The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the relative timeframe of thirty days is used (`now-30d`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| config.nextPageKey             | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| config.pageSize                | number | The amount of security problems in a single response payload. The maximal allowed page size is 500. If not set, 100 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| config.securityProblemSelector | string | Defines the scope of the query. Only security problems matching the specified criteria are included in the response. You can add one or more of the following criteria. Values are *not* case-sensitive and the `EQUALS` operator is used unless otherwise specified. * Status:&#x20;
  `status("value")`
  . Find the possible values in the description of the&#x20;
  **status**
   field of the response. If not set, all security problems are returned.
* Muted:&#x20;
  `muted("value")`
  . Possible values are&#x20;
  `TRUE`
   or&#x20;
  `FALSE`
  .
* Risk level:&#x20;
  `riskLevel("value")`
  . The Davis risk level. Find the possible values in the description of the&#x20;
  **riskLevel**
   field of the response.
* Minimum risk score:&#x20;
  `minRiskScore("5.5")`
  . The Davis minimum risk score. The&#x20;
  `GREATER THAN OR EQUAL TO`
   operator is used. Specify a number between&#x20;
  `1.0`
   and&#x20;
  `10.0`
  .
* Maximum risk score:&#x20;
  `maxRiskScore("5.5")`
  . The Davis maximum risk score. The&#x20;
  `LESS THAN`
   operator is used. Specify a number between&#x20;
  `1.0`
   and&#x20;
  `10.0`
  .
* Base risk level:&#x20;
  `baseRiskLevel("value")`
  . The Base risk level from the CVSS. Find the possible values in the description of the&#x20;
  **riskLevel**
   field of the response.
* Minimum base risk score:&#x20;
  `minBaseRiskScore("5.5")`
  . The minimum base risk score from the CVSS. The&#x20;
  `GREATER THAN OR EQUAL TO`
   operator is used. Specify a number between&#x20;
  `1.0`
   and&#x20;
  `10.0`
  .
* Maximum base risk score:&#x20;
  `maxBaseRiskScore("5.5")`
  . The maximum base risk score from the CVSS. The&#x20;
  `LESS THAN`
   operator is used. Specify a number between&#x20;
  `1.0`
   and&#x20;
  `10.0`
  .
* External vulnerability ID contains:&#x20;
  `externalVulnerabilityIdContains("id-1")`
  . The&#x20;
  `CONTAINS`
   operator is used. Maximum value length is 48 characters.
* External vulnerability ID:&#x20;
  `externalVulnerabilityId("id-1", "id-2")`
  .
* CVE ID:&#x20;
  `cveId("id")`
  .
* Risk assessment&#x20;
  `riskAssessment("value-1", "value-2")`
   Possible values are&#x20;
  `EXPOSED`
  ,&#x20;
  `SENSITIVE`
  ,&#x20;
  `EXPLOIT`
  ,&#x20;
  `VULNERABLE_FUNCTION_IN_USE`
   and&#x20;
  `ACCURACY_REDUCED`
  .
* Related host ID:&#x20;
  `relatedHostIds("value-1", "value-2")`
  . Specify Dynatrace entity IDs here.
* Related host name:&#x20;
  `relatedHostNames("value-1", "value-2")`
  . Values are case-sensitive.
* Related host name contains:&#x20;
  `relatedHostNameContains("value-1")`
  . The&#x20;
  `CONTAINS`
   operator is used.
* Related Kubernetes cluster ID:&#x20;
  `relatedKubernetesClusterIds("value-1", "value-2")`
  . Specify Dynatrace entity IDs here.
* Related Kubernetes cluster name:&#x20;
  `relatedKubernetesClusterNames("value-1", "value-2")`
  . Values are case-sensitive.
* Related Kubernetes cluster name contains:&#x20;
  `relatedKubernetesClusterNameContains("value-1")`
  . The&#x20;
  `CONTAINS`
   operator is used.
* Related Kubernetes workload ID:&#x20;
  `relatedKubernetesWorkloadIds("value-1", "value-2")`
  . Specify Dynatrace entity IDs here.
* Related Kubernetes workload name:&#x20;
  `relatedKubernetesWorkloadNames("value-1", "value-2")`
  . Values are case-sensitive.
* Related Kubernetes workload name contains:&#x20;
  `relatedKubernetesWorkloadNameContains("value-1")`
  . The&#x20;
  `CONTAINS`
   operator is used.
* Management zone ID:&#x20;
  `managementZoneIds("mzId-1", "mzId-2")`
  .
* Management zone name:&#x20;
  `managementZones("name-1", "name-2")`
  . Values are case-sensitive.
* Affected process group instance ID:&#x20;
  `affectedPgiIds("pgiId-1", "pgiId-2")`
  . Specify Dynatrace entity IDs here.
* Affected process group ID:&#x20;
  `affectedPgIds("pgId-1", "pgId-2")`
  . Specify Dynatrace entity IDs here.
* Affected process group name:&#x20;
  `affectedPgNames("name-1", "name-2")`
  . Values are case-sensitive.
* Affected process group name contains:&#x20;
  `affectedPgNameContains("name-1")`
  . The&#x20;
  `CONTAINS`
   operator is used.
* Vulnerable component ID:&#x20;
  `vulnerableComponentIds("componentId-1", "componentId-2")`
  . Specify component IDs here.
* Vulnerable component name:&#x20;
  `vulnerableComponentNames("name-1", "name-2")`
  . Values are case-sensitive.
* Vulnerable component name contains:&#x20;
  `vulnerableComponentNameContains("name-1")`
  . The&#x20;
  `CONTAINS`
   operator is used.
* Host tags:&#x20;
  `hostTags("hostTag-1")`
  . The&#x20;
  `CONTAINS`
   operator is used. Maximum value length is 48 characters.
* Process group tags:&#x20;
  `pgTags("pgTag-1")`
  . The&#x20;
  `CONTAINS`
   operator is used. Maximum value length is 48 characters.
* Process group instance tags:&#x20;
  `pgiTags("pgiTag-1")`
  . The&#x20;
  `CONTAINS`
   operator is used. Maximum value length is 48 characters.
* Tags:&#x20;
  `tags("tag-1")`
  . The&#x20;
  `CONTAINS`
   operator is used. This selector picks hosts, process groups, and process group instances at the same time. Maximum value length is 48 characters.
* Display ID:&#x20;
  `displayIds("S-1234", "S-5678")`
  . The&#x20;
  `EQUALS`
   operator is used.
* Security problem ID:&#x20;
  `securityProblemIds("12544152654387159360", "5904857564184044850")`
  . The&#x20;
  `EQUALS`
   operator is used.
* Technology:&#x20;
  `technology("technology-1", "technology-2")`
  . Find the possible values in the description of the&#x20;
  **technology**
   field of the response. The&#x20;
  `EQUALS`
   operator is used.
* Vulnerability type:&#x20;
  `vulnerabilityType("type-1", "type-2")`
  . Possible values are&#x20;
  `THIRD_PARTY`
  ,&#x20;
  `CODE_LEVEL`
  ,&#x20;
  `RUNTIME`
  . Risk score and risk category are mutually exclusive (cannot be used at the same time). To set several criteria, separate them with a comma (`,`). Only results matching **all** criteria are included in the response. Specify the value of a criterion as a quoted string. The following special characters must be escaped with a tilde (`~`) inside quotes: * Tilde&#x20;
  `~`
* Quote&#x20;
  `"` |
| config.sort                    | string | Specifies one or more fields for sorting the security problem list. Multiple fields can be concatenated using a comma (`,`) as a separator (e.g. `+status,-timestamp`). You can sort by the following properties with a sign prefix for the sorting order. * `status`
  : The security problem status (
  `+`
   open first or&#x20;
  `-`
   resolved first)
* `muted`
  : The security problem mute state (
  `+`
   unmuted first or&#x20;
  `-`
   muted first)
* `technology`
  : The security problem technology
* `firstSeenTimestamp`
  : The timestamp of the first occurrence of the security problem (
  `+`
   new problems first or&#x20;
  `-`
   old problems first)
* `lastUpdatedTimestamp`
  : The timestamp of the last update of the security problem (
  `+`
   recently updated problems first or&#x20;
  `-`
    earlier updated problems first)
* `securityProblemId`
  : The auto-generated ID of the security problem (
  `+`
   lower number first or&#x20;
  `-`
   higher number first)
* `externalVulnerabilityId`
  : The ID of the external vulnerability (
  `+`
   lower number first or&#x20;
  `-`
   higher number first)
* `displayId`
  : The display ID (
  `+`
   lower number first or&#x20;
  `-`
   higher number first)
* `riskAssessment.riskScore`
  : Davis Security Score (
  `+`
   lower score first or&#x20;
  `-`
   higher score first)
* `riskAssessment.riskLevel`
  : Davis Security Score level (
  `+`
   lower level first or&#x20;
  `-`
   higher level first)
* `riskAssessment.exposure`
  : Whether the problem is exposed to the internet
* `riskAssessment.baseRiskScore`
  : The CVSS score (
  `+`
   lower score first or&#x20;
  `-`
   higher score first)
* `riskAssessment.baseRiskLevel`
  : The CVSS level (
  `+`
   lower level first or&#x20;
  `-`
   higher level first)
* `riskAssessment.dataAssets`
  : Whether data assets are affected
* `riskAssessment.vulnerableFunctionUsage`
  : Whether vulnerable functions are used
* `riskAssessment.assessmentAccuracy`
  : The assessments accuracy (
  `+`
   less accuracy first or&#x20;
  `-`
   more accuracy first)
* `globalCounts.affectedNodes`
  : Number of affected nodes (
  `+`
   lower number first or&#x20;
  `-`
   higher number first)
* `globalCounts.affectedProcessGroupInstances`
  : Number of affected process group instances (
  `+`
   lower number first or&#x20;
  `-`
   higher number first)
* `globalCounts.affectedProcessGroups`
  : Number of affected process groups (
  `+`
   lower number first or&#x20;
  `-`
   higher number first)
* `globalCounts.exposedProcessGroups`
  : Number of exposed process groups (
  `+`
   lower number first or&#x20;
  `-`
   higher number first)
* `globalCounts.reachableDataAssets`
  : Number of reachable data assets (
  `+`
   lower number first or&#x20;
  `-`
   higher number first)
* `globalCounts.relatedApplications`
  : Number of related applications (
  `+`
   lower number first or&#x20;
  `-`
   higher number first)
* `globalCounts.relatedAttacks`
  : Number of attacks on the security problem (
  `+`
   lower number first or&#x20;
  `-`
   higher number first)
* `globalCounts.relatedHosts`
  : Number of related hosts (
  `+`
   lower number first or&#x20;
  `-`
   higher number first)
* `globalCounts.relatedKubernetesClusters`
  : Number of related Kubernetes cluster (
  `+`
   lower number first or&#x20;
  `-`
   higher number first)
* `globalCounts.relatedKubernetesWorkloads`
  : Number of related Kubernetes workloads (
  `+`
   lower number first or&#x20;
  `-`
   higher number first)
* `globalCounts.relatedServices`
  : Number of related services (
  `+`
   lower number first or&#x20;
  `-`
   higher number first)
* `globalCounts.vulnerableComponents`
  : Number of vulnerable components (
  `+`
   lower number first or&#x20;
  `-`
   higher number first) If no prefix is set, `+` is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| config.to                      | string | The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the current timestamp is used. The end of the timeframe must not be older than 365 days.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

#### Returns

| Return type                                                                                                                       | Status code | Description                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------- |
| [SecurityProblemList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#securityproblemlist) | 200         | Success. The response contains the list of security problems. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { securityProblemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await securityProblemsClient.getSecurityProblems();
```

### getVulnerableFunctions

**securityProblemsClient.getVulnerableFunctions(config): Promise\<[VulnerableFunctionsContainer](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#vulnerablefunctionscontainer)>**

Lists all vulnerable functions and their usage for a third-party security problem

**Required scope:** environment-api:security-problems:read
**One of the following permissions is required:**

- environment:roles:manage-security-problems
- environment:roles:view-security-problems

#### Parameters

| Name                               | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.groupBy                     | string | Defines additional grouping types in which vulnerable functions should be displayed. You can add one of the following grouping types. * Process group:&#x20;
  `PROCESS_GROUP`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| config.id (required)               | string | The ID of the requested third-party security problem.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.vulnerableFunctionsSelector | string | Defines the scope of the query. Only vulnerable functions matching the specified criteria are included in the response. You can add the following criteria. Values are *not* case sensitive and the `EQUALS` operator is used unless otherwise specified. * Management zone ID:&#x20;
  `managementZoneIds("mzId-1", "mzId-2")`
  .
* Management zone name:&#x20;
  `managementZones("name-1", "name-2")`
  . Values are case sensitive.
* Process group ID:&#x20;
  `processGroupIds("pgId-1", "pgId-2")`
  . Specify Dynatrace entity IDs here.
* Process group name:&#x20;
  `processGroupNames("name-1", "name-2")`
  . Values are case sensitive.
* Process group name contains:&#x20;
  `processGroupNameContains("name-1")`
  . The&#x20;
  `CONTAINS`
   operator is used. Specify the value of a criterion as a quoted string. The following special characters must be escaped with a tilde (`~`) inside quotes: * Tilde&#x20;
  `~`
* Quote&#x20;
  `"` |

#### Returns

| Return type                                                                                                                                         | Status code | Description                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------- |
| [VulnerableFunctionsContainer](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#vulnerablefunctionscontainer) | 200         | Success. The response contains the list of vulnerable functions. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { securityProblemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await securityProblemsClient.getVulnerableFunctions({
    id: "...",
  });
```

### muteSecurityProblem

**securityProblemsClient.muteSecurityProblem(config): Promise\<void>**

Mutes a security problem

**Required scope:** environment-api:security-problems:write
**Required permission:** environment:roles:manage-security-problems

#### Parameters

| Name                   | Type                                                                                                                              | Description                               |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| config.body (required) | [SecurityProblemMute](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#securityproblemmute) |                                           |
| config.id (required)   | string                                                                                                                            | The ID of the requested security problem. |

#### Returns

| Return type | Status code | Description                                          |
| ----------- | ----------- | ---------------------------------------------------- |
| void        | 200         | Success. The security problem has been muted.        |
| void        | 204         | Not executed. The security problem is already muted. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { securityProblemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await securityProblemsClient.muteSecurityProblem({
    id: "...",
    body: { reason: "CONFIGURATION_NOT_AFFECTED" },
  });
```

### setRemediationItemMuteState

**securityProblemsClient.setRemediationItemMuteState(config): Promise\<void>**

Sets the mute state of a remediation item

**Required scope:** environment-api:security-problems:write
**Required permission:** environment:roles:manage-security-problems

#### Parameters

| Name                                | Type                                                                                                                                                    | Description                                           |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| config.body (required)              | [RemediationItemMuteStateChange](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remediationitemmutestatechange) |                                                       |
| config.id (required)                | string                                                                                                                                                  | The ID of the requested third-party security problem. |
| config.remediationItemId (required) | string                                                                                                                                                  | The ID of the remediation item.                       |

#### Returns

| Return type | Status code | Description                                                                                                                            |
| ----------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| void        | 200         | Success. The requested mute state has been applied to the remediation item.                                                            |
| void        | 204         | Not executed. The remediation item was previously put into the requested mute state by the same user with the same reason and comment. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { securityProblemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await securityProblemsClient.setRemediationItemMuteState({
    id: "...",
    remediationItemId: "...",
    body: {
      comment: "...",
      muted: false,
      reason: "IGNORE",
    },
  });
```

### trackingLinkBulkUpdateAndDelete

**securityProblemsClient.trackingLinkBulkUpdateAndDelete(config): Promise\<void>**

Updates the external tracking links of the remediation items. | maturity=EARLY_ADOPTER

**Required scope:** environment-api:security-problems:write
**Required permission:** environment:roles:manage-security-problems

#### Parameters

| Name                   | Type                                                                                                                                                              | Description                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| config.body (required) | [RemediationItemsBulkUpdateDeleteDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remediationitemsbulkupdatedeletedto) |                                                       |
| config.id (required)   | string                                                                                                                                                            | The ID of the requested third-party security problem. |

#### Returns

| Return type | Status code | Description                                              |
| ----------- | ----------- | -------------------------------------------------------- |
| void        | 204         | Success. The requested tracking links have been updated. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { securityProblemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await securityProblemsClient.trackingLinkBulkUpdateAndDelete(
    { id: "...", body: {} },
  );
```

### unmuteSecurityProblem

**securityProblemsClient.unmuteSecurityProblem(config): Promise\<void>**

Un-mutes a security problem

**Required scope:** environment-api:security-problems:write
**Required permission:** environment:roles:manage-security-problems

#### Parameters

| Name                   | Type                                                                                                                                  | Description                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| config.body (required) | [SecurityProblemUnmute](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#securityproblemunmute) |                                           |
| config.id (required)   | string                                                                                                                                | The ID of the requested security problem. |

#### Returns

| Return type | Status code | Description                                             |
| ----------- | ----------- | ------------------------------------------------------- |
| void        | 200         | Success. The security problem has been un-muted.        |
| void        | 204         | Not executed. The security problem is already un-muted. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { securityProblemsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await securityProblemsClient.unmuteSecurityProblem({
    id: "...",
    body: { reason: "AFFECTED" },
  });
```
