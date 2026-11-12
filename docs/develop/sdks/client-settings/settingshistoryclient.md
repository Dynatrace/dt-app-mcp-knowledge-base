## settingsHistoryClient

```js
import { settingsHistoryClient } from '@dynatrace-sdk/client-settings';
```

### listSettingsHistory

**settingsHistoryClient.listSettingsHistory(config): Promise\<[RevisionDiffPage](#revisiondiffpage)>**

Gets the history of settings objects

**Required scope:** settings:objects:read

Returns revision history for settings objects, based on audit logs read from Grail with `event.provider == 'SETTINGS'` filter as described [here](https://dt-url.net/rkjl0jtw).

You can use query parameters to sort, filter and paginate the results. If `filter` isn't provided, the API returns revisions from the last 2 weeks.

#### Parameters

| Name               | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields   | string  | A list of fields to be included in the response. The provided set of fields extends the default set. Specify the required top-level fields, separated by commas (for example, **revision,modificationInfo**). Supported fields: **revision**, **jsonPatch**, **jsonBefore**, **jsonAfter**, **objectId**, **type**, **schemaVersion**,  **modificationInfo**, **schemaId**, **schemaDisplayName**, **summary**, **appId**, **source**, **ownerBefore**, **ownerAfter**. Default fields: revision, modificationInfo. <br /><br />**Default:** `revision,modificationInfo`                                                                                                                                                                                                                 |
| config.adminAccess | boolean | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| config.filter      | string  | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering).  Nesting and unary operators aren't supported.  Filtering is supported on the following fields: * `revision`
* `objectId`
* `schemaVersion`
* `modificationInfo.lastModifiedTime`
* `modificationInfo.lastModifiedBy` If this parameter is omitted only revisions of the last 2 weeks are returned. If **modificationInfo.lastModifiedTime** doesn't specify a full range, it will be completed with current time minus 1 year for the missing lower bound or the current time for the upper bound. When the **admin-access** is set to **false**, this parameter is required for schemas with enabled owner based access control and must contain **objectId** field with operator **`==`**. |
| config.pageKey     | string  | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.pageSize    | number  | The amount of settings objects in a single response payload. The maximal allowed page size is 5000. If not set, 100 is used. <br /><br />**Default:** `100`<br />**Minimum:** `1`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| config.schemaIds   | string  | Schema IDs to which the requested revisions belong as a comma-separated list. To load the first page, when the **page-key** isn't set, this parameter is required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.scope       | string  | Scope to which the requested revisions belong. To load the first page, when the **page-key** isn't set, this parameter is required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| config.sort        | string  | The sort parameter, as explained [here](https://dt-url.net/platform-services-filtering)  Sorting is supported on the following fields: * `modificationInfo.lastModifiedTime` <br /><br />**Default:** `-modificationInfo.lastModifiedTime`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### Returns

| Return type                           | Status code | Description |
| ------------------------------------- | ----------- | ----------- |
| [RevisionDiffPage](#revisiondiffpage) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                              |
| ------------------ | ------------------------------------------ |
| NotFoundSchema     | Failed. The specified schema wasn't found. |
| TooManyRequests    | Failed. Too many requests.                 |
| ServiceUnavailable | Failed. Service unavailable.               |
| GeneralError       | Error.                                     |

**Code example**

```ts
import { settingsHistoryClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsHistoryClient.listSettingsHistory();
```
