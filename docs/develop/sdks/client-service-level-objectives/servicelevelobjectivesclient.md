## serviceLevelObjectivesClient

```js
import { serviceLevelObjectivesClient } from '@dynatrace-sdk/client-service-level-objectives';
```

### createSlo

**serviceLevelObjectivesClient.createSlo(config): Promise\<[Slo](#slo)>**

Add a new service-level objective

**Required scope:** slo:slos:write

#### Parameters

| Name                   | Type                    |
| ---------------------- | ----------------------- |
| config.body (required) | [SloConfig](#sloconfig) |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| [Slo](#slo) | 201         | Created     |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| TooManyRequests     | The client has sent too many requests in a given amount of time and has been rate-limited.                                                                               |
| InternalServerError | Internal server error.                                                                                                                                                   |

**Code example**

```ts
import { serviceLevelObjectivesClient } from "@dynatrace-sdk/client-service-level-objectives";

const data = await serviceLevelObjectivesClient.createSlo({
  body: {
    name: "New SLO",
    sliReference: {
      templateId: "...",
      variables: [
        {
          name: "hostIds",
          value: '"HOST-123456789ABCDEFG"',
        },
      ],
    },
    customSli: {
      indicator: "timeseries sli=avg(dt.host.cpu.idle)",
    },
    criteria: [{ timeframeFrom: "now-7d", target: 99.8 }],
  },
});
```

### deleteSlo

**serviceLevelObjectivesClient.deleteSlo(config): Promise\<void>**

Delete a service-level objective by ID

**Required scope:** slo:slos:write

#### Parameters

| Name                                       | Type   | Description                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.id (required)                       | string | service-level objective ID                                                                                                                                                                                                                                                                                                    |
| config.optimisticLockingVersion (required) | string | The version of the object for optimistic locking. You can use it to detect simultaneous modifications by different users. It's generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 204         | No Content  |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| NotFound            | Not found.                                                                                                                                                               |
| TooManyRequests     | The client has sent too many requests in a given amount of time and has been rate-limited.                                                                               |
| InternalServerError | Internal server error.                                                                                                                                                   |

**Code example**

```ts
import { serviceLevelObjectivesClient } from "@dynatrace-sdk/client-service-level-objectives";

const data = await serviceLevelObjectivesClient.deleteSlo({
  id: "...",
  optimisticLockingVersion: "...",
});
```

### getSloById

**serviceLevelObjectivesClient.getSloById(config): Promise\<[Slo](#slo)>**

Get a service-level objective by ID

**Required scope:** slo:slos:read

#### Parameters

| Name                 | Type   |
| -------------------- | ------ |
| config.id (required) | string |

#### Returns

| Return type | Status code | Description                      |
| ----------- | ----------- | -------------------------------- |
| [Slo](#slo) | 200         | A single service-level objective |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| NotFound            | Not found.                                                                                                                                                               |
| TooManyRequests     | The client has sent too many requests in a given amount of time and has been rate-limited.                                                                               |
| InternalServerError | Internal server error.                                                                                                                                                   |

**Code example**

```ts
import { serviceLevelObjectivesClient } from "@dynatrace-sdk/client-service-level-objectives";

const data = await serviceLevelObjectivesClient.getSloById({
  id: "...",
});
```

### getSlos

**serviceLevelObjectivesClient.getSlos(config): Promise\<[SloObjectsList](#sloobjectslist)>**

List service-level objectives

**Required scope:** slo:slos:read

#### Parameters

| Name            | Type   | Description                                                                                                                                                                                       |
| --------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.filter   | string | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering). Filtering is supported on the following fields: * `id`
* `name`
* `tag.key`
   and&#x20;
  `tag.value` |
| config.page     | number | The page number to retrieve, 1-indexed. Can't be used together with `page-key`.<br /><br />**Minimum:** `1`                                                                                       |
| config.pageKey  | string | Cursor for the next page of results, obtained from `nextPageKey` in the previous response. Can't be used together with `page`.                                                                    |
| config.pageSize | number | How many items to return at one time (max 500)<br /><br />**Default:** `100`<br />**Minimum:** `1`                                                                                                |
| config.sort     | string | The sort parameter, as explained [here](https://dt-url.net/platform-services-filtering). Sorting is supported on the following fields: * `name`                                                   |

#### Returns

| Return type                       | Status code | Description                               |
| --------------------------------- | ----------- | ----------------------------------------- |
| [SloObjectsList](#sloobjectslist) | 200         | A paged array of service-level objectives |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| TooManyRequests     | The client has sent too many requests in a given amount of time and has been rate-limited.                                                                               |
| InternalServerError | Internal server error.                                                                                                                                                   |

**Code example**

```ts
import { serviceLevelObjectivesClient } from "@dynatrace-sdk/client-service-level-objectives";

const data = await serviceLevelObjectivesClient.getSlos();
```

### updateSlo

**serviceLevelObjectivesClient.updateSlo(config): Promise\<void>**

Update a service-level objective by ID

**Required scope:** slo:slos:write

#### Parameters

| Name                                       | Type                    | Description                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------ | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required)                     | [SloConfig](#sloconfig) |                                                                                                                                                                                                                                                                                                                               |
| config.id (required)                       | string                  | service-level objective ID                                                                                                                                                                                                                                                                                                    |
| config.optimisticLockingVersion (required) | string                  | The version of the object for optimistic locking. You can use it to detect simultaneous modifications by different users. It's generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Updated     |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| NotFound            | Not found.                                                                                                                                                               |
| Conflict            | Optimistic locking failed, or the document is actively locked\ \ by another user, or some other conflict.                                                                |
| TooManyRequests     | The client has sent too many requests in a given amount of time and has been rate-limited.                                                                               |
| InternalServerError | Internal server error.                                                                                                                                                   |

**Code example**

```ts
import { serviceLevelObjectivesClient } from "@dynatrace-sdk/client-service-level-objectives";

const data = await serviceLevelObjectivesClient.updateSlo({
  id: "...",
  optimisticLockingVersion: "...",
  body: {
    name: "New SLO",
    sliReference: {
      templateId: "...",
      variables: [
        {
          name: "hostIds",
          value: '"HOST-123456789ABCDEFG"',
        },
      ],
    },
    customSli: {
      indicator: "timeseries sli=avg(dt.host.cpu.idle)",
    },
    criteria: [{ timeframeFrom: "now-7d", target: 99.8 }],
  },
});
```
