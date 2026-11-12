## attacksClient

```js
import { attacksClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getAttack

**attacksClient.getAttack(config): Promise\<[Attack](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#attack)>**

Gets the specified attack

**Required scope:** environment-api:attacks:read
**One of the following permissions is required:**

- environment:roles:manage-security-problems
- environment:roles:view-security-problems

#### Parameters

| Name                 | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.fields        | string | A list of additional attack properties you can add to the response. The following properties are available (all other properties are always included and you can't remove them from the response): * `attackTarget`
  : The targeted host/database of an attack.
* `request`
  : The request that was sent from the attacker.
* `entrypoint`
  : The entry point used by an attacker to start a specific attack.
* `vulnerability`
  : The vulnerability utilized by the attack.
* `securityProblem`
  : The related security problem.
* `attacker`
  : The attacker of an attack.
* `managementZones`
  : The related management zones. To add properties, specify them in a comma-separated list and prefix each property with a plus (for example, `+attackTarget,+securityProblem`). |
| config.id (required) | string | The ID of the attack.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Returns

| Return type                                                                                             | Status code | Description |
| ------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [Attack](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#attack) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { attacksClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await attacksClient.getAttack({ id: "..." });
```

### getAttacks

**attacksClient.getAttacks(config): Promise\<[AttackList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#attacklist)>**

Lists all attacks

**Required scope:** environment-api:attacks:read
**One of the following permissions is required:**

- environment:roles:manage-security-problems
- environment:roles:view-security-problems

#### Parameters

| Name                  | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.attackSelector | string | Defines the scope of the query. Only attacks matching the specified criteria are included in the response. You can add one or more of the following criteria. Values are *not* case-sensitive and the `EQUALS` operator is used unless otherwise specified. * State:&#x20;
  `state("value")`
  . The state of the attack. Possible values are&#x20;
  `EXPLOITED`
  ,&#x20;
  `BLOCKED`
  , and&#x20;
  `ALLOWLISTED`
  .
* Attack Type:&#x20;
  `attackType("value")`
  . The type of the attack. Find the possible values in the description of the&#x20;
  **attackType**
   field of the response.
* Country Code:&#x20;
  `countryCode("value")`
  . The country code of the attacker. Supported values include all ISO-3166-1 alpha-2 country codes (2-letter). Supplying empty filter value&#x20;
  `countryCode()`
   will return attacks, where location is not available.
* Request path contains:&#x20;
  `requestPathContains("value")`
  . Filters for a substring in the request path. The&#x20;
  `CONTAINS`
   operator is used. A maximum of 48 characters are allowed.
* Process group name contains:&#x20;
  `processGroupNameContains("value")`
  . Filters for a substring in the targeted process group's name. The&#x20;
  `CONTAINS`
   operator is used.
* Vulnerability ID:&#x20;
  `vulnerabilityId("123456789")`
  . The exact ID of the vulnerability.
* Source IPs:&#x20;
  `sourceIps("93.184.216.34", "63.124.6.12")`
  . The exact IPv4/IPv6 addresses of the attacker.
* Management zone ID:&#x20;
  `managementZoneIds("mzId-1", "mzId-2")`
  .
* Management zone name:&#x20;
  `managementZones("name-1", "name-2")`
  . Values are case sensitive.
* Technology:&#x20;
  `technology("technology-1", "technology-2")`
  . Find the possible values in the description of the&#x20;
  **technology**
   field of the response. The&#x20;
  `EQUALS`
   operator is used. To set several criteria, separate them with a comma (`,`). Only results matching (**all** criteria are included in the response. Specify the value of a criterion as a quoted string. The following special characters must be escaped with a tilde (`~`) inside quotes: * Tilde&#x20;
  `~`
* Quote&#x20;
  `"` |
| config.fields         | string | A list of additional attack properties you can add to the response. The following properties are available (all other properties are always included and you can't remove them from the response): * `attackTarget`
  : The targeted host/database of an attack.
* `request`
  : The request that was sent from the attacker.
* `entrypoint`
  : The entry point used by an attacker to start a specific attack.
* `vulnerability`
  : The vulnerability utilized by the attack.
* `securityProblem`
  : The related security problem.
* `attacker`
  : The attacker of an attack.
* `managementZones`
  : The related management zones.
* `affectedEntities`
  : The affected entities of an attack. To add properties, specify them in a comma-separated list and prefix each property with a plus (for example, `+attackTarget,+securityProblem`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
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
  &#x20; If not set, the relative timeframe of thirty days is used (`now-30d`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| config.nextPageKey    | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.pageSize       | number | The amount of attacks in a single response payload. The maximal allowed page size is 500. If not set, 100 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.sort           | string | Specifies one or more fields for sorting the attack list. Multiple fields can be concatenated using a comma (`,`) as a separator (e.g. `+state,-timestamp`). You can sort by the following properties with a sign prefix for the sorting order. * `displayId`
  : The attack's display ID.
* `displayName`
  : The attack's display name.
* `attackType`
  : The type of the attack (e.g. SQL_INJECTION, JNDI_INJECTION, etc.).
* `state`
  : The state of the attack. (
  `+`
   low severity state first&#x20;
  `-`
   high severity state first)
* `sourceIp`
  : The IP address of the attacker. Sorts by the numerical IP value.
* `requestPath`
  : The request path where the attack was started.
* `timestamp`
  : When the attack was executed. (
  `+`
   old attacks first or&#x20;
  `-`
   new attacks first) If no prefix is set,&#x20;
  `+`
   is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
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
  &#x20; If not set, the current timestamp is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Returns

| Return type                                                                                                     | Status code | Description |
| --------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [AttackList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#attacklist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { attacksClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await attacksClient.getAttacks();
```
