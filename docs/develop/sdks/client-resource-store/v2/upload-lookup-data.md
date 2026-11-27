# &#x20;Upload lookup data

Upload lookup data and store it as a new tabular file in the Grail Resource Store or replace an existing one.
The request body needs to be submitted as `multipart/form-data` with the following parts:

- request: containing the request parameters (see below) in JSON format
- content: containing the lookup data in text format

The uploaded data is parsed using the
[Dynatrace Pattern Language (DPL)](https://docs.dynatrace.com/docs/discover-dynatrace/references/dynatrace-pattern-language).
For examples, see the [Dynatrace Documentation](https://docs.dynatrace.com/docs/discover-dynatrace/platform/grail).

## &#x20;Request parameters

- `filePath` (**required**)  - The fully qualified file path of the tabular file to store the
  lookup
  data in Grail. Example: /lookups/mydata. The following constraints apply:
  - must only contain alphanumeric characters `[a-zA-Z0-9]`, `-`, `_`, `.`, `/`
  - must start with `/lookups`
  - must end with `[a-zA-Z0-9]`
  - must contain at least two `/` characters
  - between any two consecutive `/` characters there must be at least one `[a-zA-Z0-9]` character
  - can be up to 500 characters long
- `overwrite` - If false and the file already exists, the upload fails. Set to true to allow
  overwriting existing files. Default: false
- `displayName` - An optional name for the file. The length is limited to 500 characters.
- `description` - An optional description for the file. The length is limited to 500 characters.
- `parsePattern` (**required**) - The DPL pattern to parse the uploaded data. Every pattern match
  produces a record. Example: `LD:id ',' LD:value`.
- `skippedRecords` - The number of initial records to discard. Can be used to skip header rows.
  Default: 0
- `lookupField` (**required**) - The name of the lookup field whose value identifies a record in
  the lookup data. **The uniqueness of the values is ensured by deduplicating records during
  upload, if  necessary.**
- `timezone` - The timezone for parsing time and date fields. The list of valid input values
  matches that of the IANA Time Zone Database (TZDB). Example: UTC.
- `locale` - The locale for parsing locale-specific day and month names. The input values take the
  ISO-639 Language code with an optional ISO-3166 country code appended to it with an underscore.
  Example: en_US.
- `autoFlatten` - Set to true to extract nested fields to the root level when the specified DPL
  pattern results in a single record-type field. Default: true
- `dt.cost.costcenter` - Can be used to assign usage to a Cost Center.
- `dt.cost.product` - Can be used to assign usage to a Product or Application Id.

## &#x20;Permissions

Required permissions: `storage:files:write`

#### Parameters

| Name                   | Type                                                            |
| ---------------------- | --------------------------------------------------------------- |
| config.body (required) | [ResourceUploadRequestEnvelope](#resourceuploadrequestenvelope) |

#### Returns

| Return type                                       | Status code | Description                                      |
| ------------------------------------------------- | ----------- | ------------------------------------------------ |
| [ResourceUploadResponse](#resourceuploadresponse) | 200         | The requested table has been saved successfully. |

#### Throws

| Error Type         | Error Message                                                                                                                                                                                                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Bad request for uploading the lookup data. \| Unauthorized. \| Access forbidden. \| Conflict because the requested table already exists and `override` parameter was set to false. \| The uploaded file or the JSON request were too large. \| Too many concurrent requests. \| Internal Server Error \| Client Error \| Server Error |

**Code example**

```ts
import { lookupDataClient } from "@dynatrace-sdk/client-resource-store";

const data = await lookupDataClient.upload({
  body: {
    content: "...",
    request: {
      filePath: "/lookups/mydata",
      lookupField: "id",
      parsePattern: "LD:id ',' LD:value",
    },
  },
});
```

### uploadToTestPattern

**lookupDataClient.uploadToTestPattern(config): Promise\<[ResourceTestPatternResponse](#resourcetestpatternresponse)>**

Test parsing lookup data without storing the result in the Grail Resource Store.

**Required scope:** storage:files:write
