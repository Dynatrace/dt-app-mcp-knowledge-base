## appsClient

```js
import { appsClient } from '@dynatrace-sdk/client-hub';
```

### getAppDetails

**appsClient.getAppDetails(config): Promise\<[Detail](#detail)>**

Provides detailed information about an app

**Required scope:** hub:catalog:read

#### Parameters

| Name                 | Type                                                                     | Description                                                   |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------- |
| config.addFields     | Array\<"hubItemId" \| "manifest" \| "resourceContext" \| "contentCount"> | A list of fields that are added to the default set of fields. |
| config.id (required) | string                                                                   |                                                               |

#### Returns

| Return type       | Status code | Description                       |
| ----------------- | ----------- | --------------------------------- |
| [Detail](#detail) | 200         | Detailed information about an app |

#### Throws

| Error Type    | Error Message     |
| ------------- | ----------------- |
| ErrorResponse | An error occurred |

**Code example**

```ts
import { appsClient } from "@dynatrace-sdk/client-hub";

const data = await appsClient.getAppDetails({ id: "..." });
```

### getAppOverviewList

**appsClient.getAppOverviewList(config): Promise\<[OverviewsList](#overviewslist)>**

List overview information of all apps

**Required scope:** hub:catalog:read

#### Parameters

| Name                  | Type                                                       | Description                                                                                                                                                    |
| --------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields      | Array\<"hubItemId" \| "resourceContext" \| "contentCount"> | A list of fields that are added to the default set of fields.                                                                                                  |
| config.onlyCompatible | boolean                                                    | Filters apps and their releases to exclude incompatible instances. If true or missing the resulting releases will have compatibility of COMPATIBLE or UNKNOWN. |

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
import { appsClient } from "@dynatrace-sdk/client-hub";

const data = await appsClient.getAppOverviewList();
```

### getAppReleases

**appsClient.getAppReleases(config): Promise\<[ReleasesList](#releaseslist)>**

Provides a list of releases published for an app, including revoked releases

**Required scope:** hub:catalog:read

#### Parameters

| Name                 | Type                                 |
| -------------------- | ------------------------------------ |
| config.addFields     | Array\<"manifest" \| "contentCount"> |
| config.id (required) | string                               |

#### Returns

| Return type                   | Status code | Description        |
| ----------------------------- | ----------- | ------------------ |
| [ReleasesList](#releaseslist) | 200         | A list of releases |

#### Throws

| Error Type    | Error Message     |
| ------------- | ----------------- |
| ErrorResponse | An error occurred |

**Code example**

```ts
import { appsClient } from "@dynatrace-sdk/client-hub";

const data = await appsClient.getAppReleases({ id: "..." });
```
