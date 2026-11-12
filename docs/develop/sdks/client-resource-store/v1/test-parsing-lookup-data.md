# &#x20;Test parsing lookup data

Test parsing lookup data without storing the result in the Grail Resource Store.
The request body needs to be submitted as `multipart/form-data` with the following parts:

- request: containing the request parameters (see below) in JSON format
- content: containing the lookup data in text format

The uploaded data is parsed using the
[Dynatrace Pattern Language (DPL)](https://docs.dynatrace.com/docs/discover-dynatrace/references/dynatrace-pattern-language).
For examples, see the [Dynatrace Documentation](https://docs.dynatrace.com/docs/discover-dynatrace/platform/grail).

## &#x20;Request parameters

- `parsePattern` (**required**) - The DPL pattern to parse the uploaded data. Every pattern match
  produces a record. Example: `LD:id ',' LD:value`.
- `skippedRecords` - The number of initial records to discard. Can be used to skip header rows.
  Default: 0
- `lookupField` - The name of the lookup field whose value identifies a record in
  the lookup data. The uniqueness of the values is ensured by deduplicating records during
  upload, if  necessary.
- `timezone` - The timezone for parsing time and date fields. The list of valid input values
  matches that of the IANA Time Zone Database (TZDB). Example: UTC.
- `locale` - The locale for parsing locale-specific day and month names. The input values take the
  ISO-639 Language code with an optional ISO-3166 country code appended to it with an underscore.
  Example: en_US.
- `autoFlatten` - Set to true to extract nested fields to the root level when the specified DPL
  pattern results in a single record-type field. Default: true

## &#x20;Permissions

Required permissions: `storage:files:write`

#### Parameters

| Name                   | Type                                                                      |
| ---------------------- | ------------------------------------------------------------------------- |
| config.body (required) | [ResourceTestPatternRequestEnvelope](#resourcetestpatternrequestenvelope) |

#### Returns

| Return type                                                 | Status code | Description                                                                                                                            |
| ----------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [ResourceTestPatternResponse](#resourcetestpatternresponse) | 200         | The result of applying the pattern to the uploaded file. The schema for the `records` and `types` is the same as in the DQL Query API. |

#### Throws

| Error Type         | Error Message                                                                                                                                                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Bad request for uploading the lookup data. \| Unauthorized. \| Access forbidden. \| The uploaded file or the JSON request were too large. \| Too many concurrent requests. \| Internal Server Error \| Client Error \| Server Error |

**Code example**

```ts
import { lookupDataClient } from "@dynatrace-sdk/client-resource-store";

const data = await lookupDataClient.uploadToTestPattern({
  body: {
    content: "...",
    request: { parsePattern: "LD:id ',' LD:value" },
  },
});
```

## Types

### CustomValidationErrorInfo

| Name               | Type   |
| ------------------ | ------ |
| message (required) | string |

### ErrorEnvelope

| Name  | Type                                    |
| ----- | --------------------------------------- |
| error | [ExceptionalReturn](#exceptionalreturn) |

### ErrorInfo

| Name               | Type   |
| ------------------ | ------ |
| message (required) | string |

### ExceptionalReturn

| Name                    | Type                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code                    | number                                                                                                                                                                                                                                                                                                                                                                    |
| errorDetails (required) | Array\<[CustomValidationErrorInfo](#customvalidationerrorinfo) \| [InvalidAuditEventsErrorInfo](#invalidauditeventserrorinfo) \| [MediaTypeErrorInfo](#mediatypeerrorinfo) \| [ParameterErrorInfo](#parametererrorinfo) \| [ProxyErrorInfo](#proxyerrorinfo) \| [QueryFrontendRawErrorInfo](#queryfrontendrawerrorinfo) \| [RequestBodyErrorInfo](#requestbodyerrorinfo)> |
| message (required)      | string                                                                                                                                                                                                                                                                                                                                                                    |

### InvalidAuditEventsErrorInfo

| Name                                | Type           |
| ----------------------------------- | -------------- |
| invalidAuditEventIndices (required) | Array\<number> |
| invalidEventIndices                 | Array\<number> |
| message (required)                  | string         |

### MediaTypeErrorInfo

| Name                           | Type           |
| ------------------------------ | -------------- |
| message (required)             | string         |
| supportedMediaTypes (required) | Array\<string> |

### ParameterErrorInfo

| Name                           | Type   |
| ------------------------------ | ------ |
| message (required)             | string |
| parameterDescriptor (required) | string |

### ProxyErrorInfo

| Name               | Type   |
| ------------------ | ------ |
| message (required) | string |

### QueryFrontendRawErrorInfo

| Name                                | Type   |
| ----------------------------------- | ------ |
| message (required)                  | string |
| rawQueryFrontendResponse (required) | string |

### RequestBodyErrorInfo

| Name                      | Type   |
| ------------------------- | ------ |
| bodyDescriptor (required) | string |
| message (required)        | string |

### ResourceDeleteRequest

Request Details

| Name                | Type   | Description                                                                                                                    |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------ |
| filePath (required) | string | The fully qualified file path of the tabular file to store the lookup data in Grail.<br /><br />**Example:** `/lookups/mydata` |

### ResourceTestPatternRequest

The JSON metadata for the test pattern request.

| Name                    | Type    | Description                                                                                                                                                                                                           |
| ----------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoFlatten             | boolean | Set to true to extract nested fields to the root level when the specified DPL pattern results in a single record-type field.<br /><br />**Default:** `true`                                                           |
| locale                  | string  | The locale for parsing locale-specific day and month names. The input values take the ISO-639 Language code with an optional ISO-3166 country code appended to it with an underscore.<br /><br />**Example:** `en_US` |
| lookupField             | string  | The name of the lookup field whose value identifies a record in the lookup data.The uniqueness of the values is ensured by deduplicating records during upload, if necessary.<br /><br />**Example:** `id`            |
| parsePattern (required) | string  | The DPL pattern to parse the uploaded data. Every pattern match produces a record.<br /><br />**Example:** `LD:id ',' LD:value`                                                                                       |
| skippedRecords          | number  | The number of initial records to discard. Can be used to skip header rows.<br /><br />**Default:** `0`                                                                                                                |
| timezone                | string  | The timezone for parsing time and date fields. The list of valid input values matches that of the IANA Time Zone Database (TZDB).<br /><br />**Example:** `UTC`                                                       |

### ResourceTestPatternRequestEnvelope

Multipart request containing JSON metadata and file content.

| Name               | Type                                                      | Description                                     |
| ------------------ | --------------------------------------------------------- | ----------------------------------------------- |
| content (required) | Binary                                                    |                                                 |
| request (required) | [ResourceTestPatternRequest](#resourcetestpatternrequest) | The JSON metadata for the test pattern request. |

### ResourceTestPatternResponse

The result of applying the pattern to the uploaded file.

| Name            | Type                                                                                      | Description                                                                                                                                            |
| --------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| numberOfRecords | number                                                                                    | The total number of records in the uploaded file that match the provided pattern.<br /><br />**Example:** `1000000`                                    |
| records         | Array\<[ResourceTestPatternResponseRecordsItem](#resourcetestpatternresponserecordsitem)> | List of records that result from applying the pattern to the uploaded file. If there are more than 100 records, this list contains only the first 100. |
| types           | Array\<[ResourceTestPatternResponseTypesItem](#resourcetestpatternresponsetypesitem)>     | The data types for the result records.                                                                                                                 |

### ResourceTestPatternResponseRecordsItem

List of records that result from applying the pattern to the uploaded file. If there are more than 100 records, this list contains only the first 100.

**type**: Record\<string, Record\<string, any>>

### ResourceTestPatternResponseTypesItem

The data types for the result records.

**type**: Record\<string, Record\<string, any>>

### ResourceUploadRequest

The JSON metadata for the upload request.

| Name                    | Type    | Description                                                                                                                                                                                                           |
| ----------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoFlatten             | boolean | Set to true to extract nested fields to the root level when the specified DPL pattern results in a single record-type field.<br /><br />**Default:** `true`                                                           |
| description             | string  | An optional description for the file.<br /><br />**Example:** `Description of my lookup data`                                                                                                                         |
| displayName             | string  | An optional name for the file.<br /><br />**Example:** `My lookup data`                                                                                                                                               |
| dt.cost.costcenter      | string  | Can be used to assign usage to a Cost Center.                                                                                                                                                                         |
| dt.cost.product         | string  | Can be used to assign usage to a Product or Application Id.                                                                                                                                                           |
| filePath (required)     | string  | The fully qualified file path of the tabular file to store the lookup data in Grail.<br /><br />**Example:** `/lookups/mydata`                                                                                        |
| locale                  | string  | The locale for parsing locale-specific day and month names. The input values take the ISO-639 Language code with an optional ISO-3166 country code appended to it with an underscore.<br /><br />**Example:** `en_US` |
| lookupField (required)  | string  | The name of the lookup field whose value identifies a record in the lookup data.The uniqueness of the values is ensured by deduplicating records during upload, if necessary.<br /><br />**Example:** `id`            |
| overwrite               | boolean | If false and the file already exists, the upload fails. Set to true to allow overwriting existing files.<br /><br />**Default:** `false`                                                                              |
| parsePattern (required) | string  | The DPL pattern to parse the uploaded data. Every pattern match produces a record.<br /><br />**Example:** `LD:id ',' LD:value`                                                                                       |
| skippedRecords          | number  | The number of initial records to discard. Can be used to skip header rows.<br /><br />**Default:** `0`                                                                                                                |
| timezone                | string  | The timezone for parsing time and date fields. The list of valid input values matches that of the IANA Time Zone Database (TZDB).<br /><br />**Example:** `UTC`                                                       |

### ResourceUploadRequestEnvelope

Multipart request containing JSON metadata and file content.

| Name               | Type                                            | Description                               |
| ------------------ | ----------------------------------------------- | ----------------------------------------- |
| content (required) | Binary                                          |                                           |
| request (required) | [ResourceUploadRequest](#resourceuploadrequest) | The JSON metadata for the upload request. |

### ResourceUploadResponse

| Name                           | Type   | Description                                                                                    |
| ------------------------------ | ------ | ---------------------------------------------------------------------------------------------- |
| discardedDuplicates (required) | number | The number of records that were discarded because their lookup field was not unique.           |
| fileSize (required)            | number | The size of the tabular file in the resource store, in bytes.                                  |
| patternMatches (required)      | number | The number of records in the uploaded file that match the parse pattern.                       |
| records (required)             | number | The number of records in the final lookup data.                                                |
| skippedRecords (required)      | number | The number of records that were skipped, based on the skippedRecords parameter in the request. |
| uploadedBytes (required)       | number | The number of bytes that were sent in the request content.                                     |
