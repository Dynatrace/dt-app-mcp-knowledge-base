## mobileDeobfuscationAndSymbolicationClient

```js
import { mobileDeobfuscationAndSymbolicationClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### delete_1

**mobileDeobfuscationAndSymbolicationClient.delete_1(config): Promise\<void>**

Deletes React Native mapping file | maturity=EARLY_ADOPTER

**Required scope:** deobfuscation:symbol-files:delete

#### Parameters

| Name                            | Type               | Description                                                                      |
| ------------------------------- | ------------------ | -------------------------------------------------------------------------------- |
| config.appId (required)         | string             | The UUID of the application the mapping file belongs to.                         |
| config.bundleName (required)    | string             | The name of the bundle.                                                          |
| config.bundleVersion (required) | string             | The version of the bundle.                                                       |
| config.fileName (required)      | string             | The name of the mapping file, e.g. "index.android.bundle" or "index.ios.bundle". |
| config.platform (required)      | "ANDROID" \| "IOS" | The platform (operating system) the mapping file belongs to.                     |

#### Returns

| Return type | Status code | Description            |
| ----------- | ----------- | ---------------------- |
| void        | 200         | Success. File deleted. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { mobileDeobfuscationAndSymbolicationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await mobileDeobfuscationAndSymbolicationClient.delete_1({
    appId: "...",
    bundleName: "...",
    platform: "ANDROID",
    fileName: "...",
    bundleVersion: "...",
  });
```

### get

**mobileDeobfuscationAndSymbolicationClient.get(config): Promise\<void>**

Gets content of React Native mapping file, as a single zipped file | maturity=EARLY_ADOPTER

**One of the following scopes is required:**

- environment-api:symbol-files:read
- deobfuscation:symbol-files:read

**One of the following permissions is required:**

- environment:roles:manage-settings
- deobfuscation:symbol-files:read

#### Parameters

| Name                            | Type               | Description                                                                                        |
| ------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------- |
| config.appId (required)         | string             | The UUID of the application the mapping file belongs to.                                           |
| config.bundleName (required)    | string             | The name of the bundle.                                                                            |
| config.bundleVersion (required) | string             | The version of the bundle.                                                                         |
| config.fileName (required)      | string             | The name of the mapping file, e.g. "index.android.bundle" or "index.ios.bundle".                   |
| config.ifNoneMatch              | string             | The entity tags (comma separated) of mapping files that should not be returned even if they exist. |
| config.platform (required)      | "ANDROID" \| "IOS" | The platform (operating system) the mapping file belongs to.                                       |

#### Returns

| Return type | Status code | Description                                                                            |
| ----------- | ----------- | -------------------------------------------------------------------------------------- |
| void        | 200         | Success. Response body contains a newer file than defined in the If-None-Match header. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { mobileDeobfuscationAndSymbolicationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await mobileDeobfuscationAndSymbolicationClient.get({
    appId: "...",
    bundleName: "...",
    platform: "ANDROID",
    fileName: "...",
    bundleVersion: "...",
  });
```

### list

**mobileDeobfuscationAndSymbolicationClient.list(config): Promise\<[ReactNativeMappingFileListDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#reactnativemappingfilelistdto)>**

Lists all React Native files | maturity=EARLY_ADOPTER

**One of the following scopes is required:**

- environment-api:symbol-files:read
- deobfuscation:symbol-files:read

**One of the following permissions is required:**

- environment:roles:manage-settings
- deobfuscation:symbol-files:read

#### Parameters

| Name               | Type   | Description                                                                                                                                                                                                                                                                                                       |
| ------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.nextPageKey | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize    | number | The amount of React Native mapping files in a single response payload. The maximal allowed page size is 100. If not set, 20 is used.                                                                                                                                                                              |

#### Returns

| Return type                                                                                                                                        | Status code | Description |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ReactNativeMappingFileListDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#reactnativemappingfilelistdto) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { mobileDeobfuscationAndSymbolicationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await mobileDeobfuscationAndSymbolicationClient.list();
```

### list_1

**mobileDeobfuscationAndSymbolicationClient.list_1(config): Promise\<[ReactNativeMappingFileListDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#reactnativemappingfilelistdto)>**

Lists React Native files belonging to certain application | maturity=EARLY_ADOPTER

**One of the following scopes is required:**

- environment-api:symbol-files:read
- deobfuscation:symbol-files:read

**One of the following permissions is required:**

- environment:roles:manage-settings
- deobfuscation:symbol-files:read

#### Parameters

| Name                    | Type   | Description                                                                                                                                                                                                                                                                                                       |
| ----------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.appId (required) | string | The UUID of the application the mapping file belongs to.                                                                                                                                                                                                                                                          |
| config.nextPageKey      | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize         | number | The amount of React Native mapping files in a single response payload. The maximal allowed page size is 100. If not set, 20 is used.                                                                                                                                                                              |

#### Returns

| Return type                                                                                                                                        | Status code | Description |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ReactNativeMappingFileListDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#reactnativemappingfilelistdto) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { mobileDeobfuscationAndSymbolicationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await mobileDeobfuscationAndSymbolicationClient.list_1({
    appId: "...",
  });
```

### put

**mobileDeobfuscationAndSymbolicationClient.put(config): Promise\<void>**

Adds new or updates existing React Native mapping file | maturity=EARLY_ADOPTER

**Required scope:** deobfuscation:symbol-files:write

#### Parameters

| Name                            | Type                                                                                                   | Description                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| config.appId (required)         | string                                                                                                 | The UUID of the application the mapping file belongs to.                         |
| config.body (required)          | [PutBody](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#putbody) |                                                                                  |
| config.bundleName (required)    | string                                                                                                 | The name of the bundle.                                                          |
| config.bundleVersion (required) | string                                                                                                 | The version of the bundle.                                                       |
| config.fileName (required)      | string                                                                                                 | The name of the mapping file, e.g. "index.android.bundle" or "index.ios.bundle". |
| config.platform (required)      | "ANDROID" \| "IOS"                                                                                     | The platform (operating system) the mapping file belongs to.                     |

#### Returns

| Return type | Status code | Description                                                             |
| ----------- | ----------- | ----------------------------------------------------------------------- |
| void        | 200         | Success. The file has been uploaded and stored. Existing file replaced. |
| void        | 201         | Success. The file has been uploaded and stored.                         |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { mobileDeobfuscationAndSymbolicationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await mobileDeobfuscationAndSymbolicationClient.put({
    appId: "...",
    bundleName: "...",
    platform: "ANDROID",
    fileName: "...",
    bundleVersion: "...",
    body: { file: "..." },
  });
```

### putMetadata

**mobileDeobfuscationAndSymbolicationClient.putMetadata(config): Promise\<[ReactNativeMappingFileMetadataDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#reactnativemappingfilemetadatadto)>**

Updates metadata of the specified React Native mapping file | maturity=EARLY_ADOPTER

**Required scope:** deobfuscation:symbol-files:write

#### Parameters

| Name                            | Type                                                                                                                                                                   | Description                                                                      |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| config.appId (required)         | string                                                                                                                                                                 | The UUID of the application the mapping file belongs to.                         |
| config.body (required)          | [ReactNativeMappingFileMetadataUpdateDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#reactnativemappingfilemetadataupdatedto) |                                                                                  |
| config.bundleName (required)    | string                                                                                                                                                                 | The name of the bundle.                                                          |
| config.bundleVersion (required) | string                                                                                                                                                                 | The version of the bundle.                                                       |
| config.fileName (required)      | string                                                                                                                                                                 | The name of the mapping file, e.g. "index.android.bundle" or "index.ios.bundle". |
| config.platform (required)      | "ANDROID" \| "IOS"                                                                                                                                                     | The platform (operating system) the mapping file belongs to.                     |

#### Returns

| Return type                                                                                                                                                | Status code | Description                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------- |
| [ReactNativeMappingFileMetadataDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#reactnativemappingfilemetadatadto) | 200         | Success. Metadata updated. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { mobileDeobfuscationAndSymbolicationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await mobileDeobfuscationAndSymbolicationClient.putMetadata(
    {
      appId: "...",
      bundleName: "...",
      platform: "ANDROID",
      fileName: "...",
      bundleVersion: "...",
      body: {},
    },
  );
```
