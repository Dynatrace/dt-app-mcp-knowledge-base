## javaScriptMappingFilesClient

```js
import { javaScriptMappingFilesClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### ~~deleteJavaScriptMappingFile~~

> ⚠️ **Deprecated**

**javaScriptMappingFilesClient.deleteJavaScriptMappingFile(config): Promise\<void>**

Deletes the specified JavaScript mapping file

**Required scope:** deobfuscation:symbol-files:delete

#### Parameters

| Name                                | Type                                  | Description                              |
| ----------------------------------- | ------------------------------------- | ---------------------------------------- |
| config.fileType (required)          | "MINIFIED" \| "SOURCE" \| "SOURCEMAP" | The type of the JavaScript mapping file. |
| config.minifiedJsFileUrl (required) | string                                | The URL of the minified JavaScript file. |

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
import { javaScriptMappingFilesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await javaScriptMappingFilesClient.deleteJavaScriptMappingFile(
    { minifiedJsFileUrl: "...", fileType: "MINIFIED" },
  );
```

### deleteJavaScriptMappingFileAlias

**javaScriptMappingFilesClient.deleteJavaScriptMappingFileAlias(config): Promise\<void>**

Deletes the specified JavaScript mapping file

**Required scope:** deobfuscation:symbol-files:delete

#### Parameters

| Name                                | Type                                  | Description                              |
| ----------------------------------- | ------------------------------------- | ---------------------------------------- |
| config.fileType (required)          | "MINIFIED" \| "SOURCE" \| "SOURCEMAP" | The type of the JavaScript mapping file. |
| config.minifiedJsFileUrl (required) | string                                | The URL of the minified JavaScript file. |

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
import { javaScriptMappingFilesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await javaScriptMappingFilesClient.deleteJavaScriptMappingFileAlias(
    { minifiedJsFileUrl: "...", fileType: "MINIFIED" },
  );
```

### ~~getJavaScriptMappingFilesMetadata~~

> ⚠️ **Deprecated**

**javaScriptMappingFilesClient.getJavaScriptMappingFilesMetadata(config): Promise\<[JavaScriptMappingFileListDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#javascriptmappingfilelistdto)>**

Lists metadata of JavaScript mapping files

**Required scope:** deobfuscation:symbol-files:read

#### Parameters

| Name                     | Type                                  | Description                                                                                                                                                                                                                                                                                                       |
| ------------------------ | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.fileType          | "MINIFIED" \| "SOURCE" \| "SOURCEMAP" | Filters the resulting set of JavaScript mapping files by file type.                                                                                                                                                                                                                                               |
| config.minifiedJsFileUrl | string                                | Filters the resulting set of JavaScript mapping files by the minified JavaScript file URL. Only equals are taken into account.                                                                                                                                                                                    |
| config.nextPageKey       | string                                | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize          | number                                | The amount of JavaScript mapping files in a single response payload. The maximal allowed page size is 100. If not set, 20 is used.                                                                                                                                                                                |

#### Returns

| Return type                                                                                                                                          | Status code | Description |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [JavaScriptMappingFileListDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#javascriptmappingfilelistdto) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { javaScriptMappingFilesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await javaScriptMappingFilesClient.getJavaScriptMappingFilesMetadata();
```

### getJavaScriptMappingFilesMetadataAlias

**javaScriptMappingFilesClient.getJavaScriptMappingFilesMetadataAlias(config): Promise\<[JavaScriptMappingFileListDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#javascriptmappingfilelistdto)>**

Lists metadata of JavaScript mapping files

**Required scope:** deobfuscation:symbol-files:read

#### Parameters

| Name                     | Type                                  | Description                                                                                                                                                                                                                                                                                                       |
| ------------------------ | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.fileType          | "MINIFIED" \| "SOURCE" \| "SOURCEMAP" | Filters the resulting set of JavaScript mapping files by file type.                                                                                                                                                                                                                                               |
| config.minifiedJsFileUrl | string                                | Filters the resulting set of JavaScript mapping files by the minified JavaScript file URL. Only equals are taken into account.                                                                                                                                                                                    |
| config.nextPageKey       | string                                | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize          | number                                | The amount of JavaScript mapping files in a single response payload. The maximal allowed page size is 100. If not set, 20 is used.                                                                                                                                                                                |

#### Returns

| Return type                                                                                                                                          | Status code | Description |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [JavaScriptMappingFileListDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#javascriptmappingfilelistdto) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { javaScriptMappingFilesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await javaScriptMappingFilesClient.getJavaScriptMappingFilesMetadataAlias();
```

### ~~updateJavaScriptMappingFileMetadata~~

> ⚠️ **Deprecated**

**javaScriptMappingFilesClient.updateJavaScriptMappingFileMetadata(config): Promise\<[JavaScriptMappingFileDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#javascriptmappingfiledto)>**

Updates metadata of the specified JavaScript mapping file

**Required scope:** deobfuscation:symbol-files:write

#### Parameters

| Name                                | Type                                                                                                                                                         | Description                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| config.body (required)              | [JavaScriptMappingFileMetadataDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#javascriptmappingfilemetadatadto) |                                          |
| config.fileType (required)          | "MINIFIED" \| "SOURCE" \| "SOURCEMAP"                                                                                                                        | The type of the JavaScript mapping file. |
| config.minifiedJsFileUrl (required) | string                                                                                                                                                       | The URL of the minified JavaScript file. |

#### Returns

| Return type                                                                                                                                  | Status code | Description                |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------- |
| [JavaScriptMappingFileDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#javascriptmappingfiledto) | 200         | Success. Metadata updated. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { javaScriptMappingFilesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await javaScriptMappingFilesClient.updateJavaScriptMappingFileMetadata(
    {
      minifiedJsFileUrl: "...",
      fileType: "MINIFIED",
      body: {},
    },
  );
```

### updateJavaScriptMappingFileMetadataAlias

**javaScriptMappingFilesClient.updateJavaScriptMappingFileMetadataAlias(config): Promise\<[JavaScriptMappingFileDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#javascriptmappingfiledto)>**

Updates metadata of the specified JavaScript mapping file

**Required scope:** deobfuscation:symbol-files:write

#### Parameters

| Name                                | Type                                                                                                                                                         | Description                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| config.body (required)              | [JavaScriptMappingFileMetadataDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#javascriptmappingfilemetadatadto) |                                          |
| config.fileType (required)          | "MINIFIED" \| "SOURCE" \| "SOURCEMAP"                                                                                                                        | The type of the JavaScript mapping file. |
| config.minifiedJsFileUrl (required) | string                                                                                                                                                       | The URL of the minified JavaScript file. |

#### Returns

| Return type                                                                                                                                  | Status code | Description                |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------- |
| [JavaScriptMappingFileDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#javascriptmappingfiledto) | 200         | Success. Metadata updated. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { javaScriptMappingFilesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await javaScriptMappingFilesClient.updateJavaScriptMappingFileMetadataAlias(
    {
      minifiedJsFileUrl: "...",
      fileType: "MINIFIED",
      body: {},
    },
  );
```

### ~~uploadJavaScriptMappingFile~~

> ⚠️ **Deprecated**

**javaScriptMappingFilesClient.uploadJavaScriptMappingFile(config): Promise\<void>**

Uploads new or updates existing JavaScript mapping file

**Required scope:** deobfuscation:symbol-files:write

#### Parameters

| Name                                | Type                                                                                                                                                       | Description                              |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| config.body (required)              | [UploadJavaScriptMappingFileBody](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#uploadjavascriptmappingfilebody) |                                          |
| config.fileType (required)          | "MINIFIED" \| "SOURCE" \| "SOURCEMAP"                                                                                                                      | The type of the JavaScript mapping file. |
| config.minifiedJsFileUrl (required) | string                                                                                                                                                     | The URL of the minified JavaScript file. |

#### Returns

| Return type | Status code | Description                                                             |
| ----------- | ----------- | ----------------------------------------------------------------------- |
| void        | 200         | Success. The file has been uploaded and stored. Existing file replaced. |
| void        | 201         | Success. The file has been uploaded and stored.                         |

#### Throws

| Error Type         | Error Message                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The symbol file storage quota is exhausted. \| Client side error. \| Server side error. |

**Code example**

```ts
import { javaScriptMappingFilesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await javaScriptMappingFilesClient.uploadJavaScriptMappingFile(
    {
      minifiedJsFileUrl: "...",
      fileType: "MINIFIED",
      body: { file: "..." },
    },
  );
```

### uploadJavaScriptMappingFileAlias

**javaScriptMappingFilesClient.uploadJavaScriptMappingFileAlias(config): Promise\<void>**

Uploads new or updates existing JavaScript mapping file

**Required scope:** deobfuscation:symbol-files:write

#### Parameters

| Name                                | Type                                                                                                                                                                 | Description                              |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| config.body (required)              | [UploadJavaScriptMappingFileAliasBody](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v11/types.md#uploadjavascriptmappingfilealiasbody) |                                          |
| config.fileType (required)          | "MINIFIED" \| "SOURCE" \| "SOURCEMAP"                                                                                                                                | The type of the JavaScript mapping file. |
| config.minifiedJsFileUrl (required) | string                                                                                                                                                               | The URL of the minified JavaScript file. |

#### Returns

| Return type | Status code | Description                                                             |
| ----------- | ----------- | ----------------------------------------------------------------------- |
| void        | 200         | Success. The file has been uploaded and stored. Existing file replaced. |
| void        | 201         | Success. The file has been uploaded and stored.                         |

#### Throws

| Error Type         | Error Message                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The symbol file storage quota is exhausted. \| Client side error. \| Server side error. |

**Code example**

```ts
import { javaScriptMappingFilesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await javaScriptMappingFilesClient.uploadJavaScriptMappingFileAlias(
    {
      minifiedJsFileUrl: "...",
      fileType: "MINIFIED",
      body: { file: "..." },
    },
  );
```
