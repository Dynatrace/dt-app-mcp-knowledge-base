## rumUserSessionsClient

```js
import { rumUserSessionsClient } from '@dynatrace-sdk/client-classic-environment-v1';
```

### getUsqlResultAsTable

**rumUserSessionsClient.getUsqlResultAsTable(config): Promise\<[UsqlResultAsTable](#usqlresultastable)>**

Returns the result of the query as a table structure

**Required scope:** environment-api:usersessionquerylanguage:read
**Required permission:** environment:roles:viewer

The result is a flat list of rows containing the requested columns.

#### Parameters

| Name                     | Type    | Description                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addDeepLinkFields | boolean | Add (`true`) to enable deep linking of additional fields in the query. If not set, then `false` is used                                                                                                                                                                                                                                                       |
| config.endTimestamp      | number  | The end timestamp of the query, in UTC milliseconds. If not set or set as `0`, the current timestamp is used. If the exact times are important, set the timeframe in the query itself (**query** parameter).                                                                                                                                                  |
| config.explain           | boolean | Add (`true`) or don't add (`false`) some additional information about the result to the response. It helps to understand the query and how the result was calculated. If not set, then `false` is used                                                                                                                                                        |
| config.offsetUtc         | number  | Optional offset of local time to UTC time in minutes. Offset will be applied to Date fields encountered in the query. Can be positive or negative. E.g. if the local time is UTC+02:00, the timeOffset is 120. If it is UTC-05:00, timeOffset is -300.                                                                                                        |
| config.pageOffset        | number  | Optional offset of the requested results from the start of tabular results. Relates to pageSize. E.g. on a query that might return 500 results, you might want to receive results in chunks of 50 rows. this can be achieved by using pageSize=50, and setting pageOffset in subsequent calls.In the example adding pageOffset=50 returns result rows 51-100. |
| config.pageSize          | number  | Optional limit on how many of the actual query results should be returned in the tabular result.                                                                                                                                                                                                                                                              |
| config.query (required)  | string  | The user session query to be executed. See [USQL documentation page](https://dt-url.net/dtusql) for syntax details. You can find the available columns of the **usersession** table in the `UserSession` object. Here is an example of the query: `SELECT country, city, COUNT(*) FROM usersession GROUP BY country, city`.                                   |
| config.startTimestamp    | number  | The start timestamp of the query, in UTC milliseconds. If not set or set as `0`, 2 hours behind the current time is used. If the exact times are important, set the timeframe in the query itself (**query** parameter).                                                                                                                                      |

#### Returns

| Return type                             | Status code | Description                                             |
| --------------------------------------- | ----------- | ------------------------------------------------------- |
| [UsqlResultAsTable](#usqlresultastable) | 200         | Success. The response contains the result of the query. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumUserSessionsClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await rumUserSessionsClient.getUsqlResultAsTable({
    query: "...",
  });
```

### getUsqlResultAsTree

**rumUserSessionsClient.getUsqlResultAsTree(config): Promise\<[UsqlResultAsTree](#usqlresultastree)>**

Returns the result of the query as a tree structure

**Required scope:** environment-api:usersessionquerylanguage:read
**Required permission:** environment:roles:viewer

To get a proper tree structure, you need to specify grouping in the query.

#### Parameters

| Name                     | Type    | Description                                                                                                                                                                                                                                                                                                                 |
| ------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addDeepLinkFields | boolean | Add (`true`) to enable deep linking of additional fields in the query. If not set, then `false` is used                                                                                                                                                                                                                     |
| config.endTimestamp      | number  | The end timestamp of the query, in UTC milliseconds. If not set or set as `0`, the current timestamp is used. If the exact times are important, set the timeframe in the query itself (**query** parameter).                                                                                                                |
| config.explain           | boolean | Add (`true`) or don't add (`false`) some additional information about the result to the response. It helps to understand the query and how the result was calculated. If not set, then `false` is used                                                                                                                      |
| config.offsetUtc         | number  | Optional offset of local time to UTC time in minutes. Offset will be applied to Date fields encountered in the query. Can be positive or negative. E.g. if the local time is UTC+02:00, the timeOffset is 120. If it is UTC-05:00, timeOffset is -300.                                                                      |
| config.query (required)  | string  | The user session query to be executed. See [USQL documentation page](https://dt-url.net/dtusql) for syntax details. You can find the available columns of the **usersession** table in the `UserSession` object. Here is an example of the query: `SELECT country, city, COUNT(*) FROM usersession GROUP BY country, city`. |
| config.startTimestamp    | number  | The start timestamp of the query, in UTC milliseconds. If not set or set as `0`, 2 hours behind the current time is used. If the exact times are important, set the timeframe in the query itself (**query** parameter).                                                                                                    |

#### Returns

| Return type                           | Status code | Description                                             |
| ------------------------------------- | ----------- | ------------------------------------------------------- |
| [UsqlResultAsTree](#usqlresultastree) | 200         | Success. The response contains the result of the query. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumUserSessionsClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await rumUserSessionsClient.getUsqlResultAsTree({
    query: "...",
  });
```
