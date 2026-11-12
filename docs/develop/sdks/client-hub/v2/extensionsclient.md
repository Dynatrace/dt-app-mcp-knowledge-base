## extensionsClient

```js
import { extensionsClient } from '@dynatrace-sdk/client-hub';
```

### getExtensionDetails

**extensionsClient.getExtensionDetails(config): Promise\<[Detail](#detail)>**

Provides detailed information about an extension

**Required scope:** hub:catalog:read

#### Parameters

| Name                 | Type                                                                                 | Description                                                                                |
| -------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| config.addFields     | Array\<"hubItemId" \| "contentCount" \| "extensionMetadata" \| "extensionDocuments"> | A list of fields that are added to the default set of fields.<br /><br />**Default:** `[]` |
| config.id (required) | string                                                                               |                                                                                            |

#### Returns

| Return type       | Status code | Description                             |
| ----------------- | ----------- | --------------------------------------- |
| [Detail](#detail) | 200         | Detailed information about an extension |

#### Throws

| Error Type    | Error Message     |
| ------------- | ----------------- |
| ErrorResponse | An error occurred |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-hub";

const data = await extensionsClient.getExtensionDetails({
  id: "...",
});
```

### getExtensionOverviewList

**extensionsClient.getExtensionOverviewList(config): Promise\<[OverviewsList](#overviewslist)>**

List overview information of all extensions

**Required scope:** hub:catalog:read

#### Parameters

| Name                  | Type                                  | Description                                                                                                                          |
| --------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| config.addFields      | Array\<"hubItemId" \| "contentCount"> | A list of fields that are added to the default set of fields.<br /><br />**Default:** `[]`                                           |
| config.onlyCompatible | boolean                               | A flag to reduce the list to only include compatible extensions with their latest compatible version.<br /><br />**Default:** `true` |

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
import { extensionsClient } from "@dynatrace-sdk/client-hub";

const data =
  await extensionsClient.getExtensionOverviewList();
```

### getExtensionReleases

**extensionsClient.getExtensionReleases(config): Promise\<[ReleasesList](#releaseslist)>**

Provides a list of releases published for an extension, including revoked releases

**Required scope:** hub:catalog:read

#### Parameters

| Name                 | Type                                                                  | Description                                                                                |
| -------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| config.addFields     | Array\<"contentCount" \| "extensionMetadata" \| "extensionDocuments"> | A list of fields that are added to the default set of fields.<br /><br />**Default:** `[]` |
| config.id (required) | string                                                                |                                                                                            |

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
import { extensionsClient } from "@dynatrace-sdk/client-hub";

const data = await extensionsClient.getExtensionReleases({
  id: "...",
});
```
