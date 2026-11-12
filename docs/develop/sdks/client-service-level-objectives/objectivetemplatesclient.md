## objectiveTemplatesClient

```js
import { objectiveTemplatesClient } from '@dynatrace-sdk/client-service-level-objectives';
```

### getObjectiveTemplateById

**objectiveTemplatesClient.getObjectiveTemplateById(config): Promise\<[ObjectiveTemplate](#objectivetemplate)>**

Get an objective template by ID

**One of the following scopes is required:**

- slo:objective-templates:read
- slo:slos:read

#### Parameters

| Name                 | Type   | Description           |
| -------------------- | ------ | --------------------- |
| config.id (required) | string | objective template ID |

#### Returns

| Return type                             | Status code | Description                 |
| --------------------------------------- | ----------- | --------------------------- |
| [ObjectiveTemplate](#objectivetemplate) | 200         | A single objective template |

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
import { objectiveTemplatesClient } from "@dynatrace-sdk/client-service-level-objectives";

const data =
  await objectiveTemplatesClient.getObjectiveTemplateById({
    id: "...",
  });
```

### getObjectiveTemplates

**objectiveTemplatesClient.getObjectiveTemplates(config): Promise\<[ObjectiveTemplateList](#objectivetemplatelist)>**

List objective templates

**One of the following scopes is required:**

- slo:objective-templates:read
- slo:slos:read

#### Parameters

| Name            | Type   | Description                                                                                                                                                                                                                                      |
| --------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.filter   | string | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering). Filtering is supported on the following fields: * `id`
* `name`
* `builtIn`
* `deprecated`
* `applicableScope`
* `tag.key`
   and&#x20;
  `tag.value` |
| config.page     | number | The page number to retrieve, 1-indexed. Can't be used together with `page-key`.                                                                                                                                                                  |
| config.pageKey  | string | Cursor for the next page of results, obtained from `nextPageKey` in the previous response. Can't be used together with `page`.                                                                                                                   |
| config.pageSize | number | How many items to return at one time (max 500)                                                                                                                                                                                                   |
| config.sort     | string | The sort parameter, as explained [here](https://dt-url.net/platform-services-filtering). Sorting is supported on the following fields: * `name`                                                                                                  |

#### Returns

| Return type                                     | Status code | Description                          |
| ----------------------------------------------- | ----------- | ------------------------------------ |
| [ObjectiveTemplateList](#objectivetemplatelist) | 200         | A paged array of objective templates |

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
import { objectiveTemplatesClient } from "@dynatrace-sdk/client-service-level-objectives";

const data =
  await objectiveTemplatesClient.getObjectiveTemplates();
```
