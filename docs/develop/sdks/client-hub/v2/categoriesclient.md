## categoriesClient

```js
import { categoriesClient } from '@dynatrace-sdk/client-hub';
```

### getCategories

**categoriesClient.getCategories(config): Promise\<[Categories](#categories)>**

List Hub categories, including the IDs of the associated items and their content blocks if any

**Required scope:** hub:catalog:read

#### Returns

| Return type               | Status code | Description    |
| ------------------------- | ----------- | -------------- |
| [Categories](#categories) | 200         | The categories |

#### Throws

| Error Type    | Error Message     |
| ------------- | ----------------- |
| ErrorResponse | An error occurred |

**Code example**

```ts
import { categoriesClient } from "@dynatrace-sdk/client-hub";

const data = await categoriesClient.getCategories();
```
