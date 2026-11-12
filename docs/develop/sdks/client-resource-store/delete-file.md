# &#x20;Delete file

Delete a file from the Grail Resource Store.

**ATTENTION - This operation is irreversible.**

The request body needs to contain the request parameters (see below) in JSON format.

## &#x20;Request parameters

- `filePath` (**required**) - The fully qualified file path of the file. Example: \* /lookups/mydata\*.

## &#x20;Permissions

Required permissions: `storage:files:delete`

#### Parameters

| Name                   | Type                                            |
| ---------------------- | ----------------------------------------------- |
| config.body (required) | [ResourceDeleteRequest](#resourcedeleterequest) |

#### Returns

| Return type | Status code | Description                                       |
| ----------- | ----------- | ------------------------------------------------- |
| void        | 204         | The requested file has been deleted successfully. |

#### Throws

| Error Type         | Error Message                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Bad request for deleting the file. \| Unauthorized. \| Access forbidden. \| The file does not exist. \| Internal Server Error \| Client Error \| Server Error |

**Code example**

```ts
import { lookupDataClient } from "@dynatrace-sdk/client-resource-store";

const data = await lookupDataClient.delete({
  body: { filePath: "/lookups/mydata" },
});
```

### upload

**lookupDataClient.upload(config): Promise\<[ResourceUploadResponse](#resourceuploadresponse)>**

Upload lookup data
