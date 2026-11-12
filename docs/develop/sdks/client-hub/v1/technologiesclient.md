## technologiesClient

```js
import { technologiesClient } from '@dynatrace-sdk/client-hub';
```

### getTechnologyDetails

**technologiesClient.getTechnologyDetails(config): Promise\<[Detail](#detail)>**

Provides detailed information about a technology

**Required scope:** hub:catalog:read

#### Parameters

| Name                 | Type                | Description                                                   |
| -------------------- | ------------------- | ------------------------------------------------------------- |
| config.addFields     | Array\<"hubItemId"> | A list of fields that are added to the default set of fields. |
| config.id (required) | string              |                                                               |

#### Returns

| Return type       | Status code | Description                             |
| ----------------- | ----------- | --------------------------------------- |
| [Detail](#detail) | 200         | Detailed information about a technology |

#### Throws

| Error Type    | Error Message     |
| ------------- | ----------------- |
| ErrorResponse | An error occurred |

**Code example**

```ts
import { technologiesClient } from "@dynatrace-sdk/client-hub";

const data = await technologiesClient.getTechnologyDetails({
  id: "...",
});
```

### getTechnologyOverviewList

**technologiesClient.getTechnologyOverviewList(config): Promise\<[OverviewsList](#overviewslist)>**

List overview information of all technologies

**Required scope:** hub:catalog:read

#### Parameters

| Name                  | Type                | Description                                                        |
| --------------------- | ------------------- | ------------------------------------------------------------------ |
| config.addFields      | Array\<"hubItemId"> | A list of fields that are added to the default set of fields.      |
| config.onlyCompatible | boolean             | A flag to reduce the list to only include compatible technologies. |

#### Returns

| Return type                     | Status code | Description                    |
| ------------------------------- | ----------- | ------------------------------ |
| [OverviewsList](#overviewslist) | 200         | A list of overview information |

#### Throws

| Error Type    | Error Message     |
| ------------- | ----------------- |
| ErrorResponse | An error occurred |

**Code example**

```ts
import { technologiesClient } from "@dynatrace-sdk/client-hub";

const data =
  await technologiesClient.getTechnologyOverviewList();
```
