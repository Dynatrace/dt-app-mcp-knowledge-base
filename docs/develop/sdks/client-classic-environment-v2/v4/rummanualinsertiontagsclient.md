## rumManualInsertionTagsClient

```js
import { rumManualInsertionTagsClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getInlineCode

**rumManualInsertionTagsClient.getInlineCode(config): Promise\<string>**

Download the inline code | maturity=EARLY_ADOPTER

**Required scope:** environment-api:rum:read
**Required permission:** environment:roles:manage-settings

Returns the inline code, which embeds the full RUM monitoring code and configuration directly into the page, minimizing additional web requests. It needs to be updated after configuration changes and monitoring code updates.

#### Parameters

| Name                            | Type   | Description                    |
| ------------------------------- | ------ | ------------------------------ |
| config.applicationId (required) | string | The ID of the web application. |

#### Returns

| Return type | Status code | Description                                     |
| ----------- | ----------- | ----------------------------------------------- |
| void        | 200         | Success. The response contains the inline code. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumManualInsertionTagsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await rumManualInsertionTagsClient.getInlineCode({
    applicationId: "...",
  });
```

### getJavaScriptTag

**rumManualInsertionTagsClient.getJavaScriptTag(config): Promise\<string>**

Download the JavaScript tag | maturity=EARLY_ADOPTER

**Required scope:** environment-api:rum:read
**Required permission:** environment:roles:manage-settings

Returns the JavaScript tag, which references an external file containing monitoring code and configuration. Due to its dynamic update mechanism, it is recommended for most use cases.

#### Parameters

| Name                            | Type                         | Description                                                                                                                   |
| ------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| config.applicationId (required) | string                       | The ID of the web application.                                                                                                |
| config.crossOriginAnonymous     | boolean                      | Indicates whether to add the crossorigin="anonymous" attribute to the tag. If specified, this overrides the configured value. |
| config.scriptExecutionAttribute | "NONE" \| "ASYNC" \| "DEFER" | Specifies the script execution attribute: async, defer, or none. If specified, this overrides the configured value.           |

#### Returns

| Return type | Status code | Description                                        |
| ----------- | ----------- | -------------------------------------------------- |
| void        | 200         | Success. The response contains the JavaScript Tag. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumManualInsertionTagsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await rumManualInsertionTagsClient.getJavaScriptTag({
    applicationId: "...",
  });
```

### getOneAgentJavaScriptTag

**rumManualInsertionTagsClient.getOneAgentJavaScriptTag(config): Promise\<string>**

Download the OneAgent JavaScript tag | maturity=EARLY_ADOPTER

**Required scope:** environment-api:rum:read
**Required permission:** environment:roles:manage-settings

Returns the OneAgent JavaScript tag, which includes configuration and a reference to an external file containing the monitoring code. It needs to be updated after configuration changes and monitoring code updates.

#### Parameters

| Name                            | Type                         | Description                                                                                                         |
| ------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| config.applicationId (required) | string                       | The ID of the web application.                                                                                      |
| config.scriptExecutionAttribute | "NONE" \| "ASYNC" \| "DEFER" | Specifies the script execution attribute: async, defer, or none. If specified, this overrides the configured value. |

#### Returns

| Return type | Status code | Description                                                 |
| ----------- | ----------- | ----------------------------------------------------------- |
| void        | 200         | Success. The response contains the OneAgent JavaScript Tag. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumManualInsertionTagsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await rumManualInsertionTagsClient.getOneAgentJavaScriptTag(
    { applicationId: "..." },
  );
```

### getOneAgentJavaScriptTagWithSri

**rumManualInsertionTagsClient.getOneAgentJavaScriptTagWithSri(config): Promise\<string>**

Download the OneAgent JavaScript tag with SRI | maturity=EARLY_ADOPTER

**Required scope:** environment-api:rum:read
**Required permission:** environment:roles:manage-settings

Returns the OneAgent JavaScript tag with SRI. It includes configuration, a reference to an external file containing the monitoring code, and a hash that allows the browser to verify the integrity of the monitoring code before executing it using its Subresource Integrity (SRI) feature. It needs to be updated after configuration changes and monitoring code updates.

#### Parameters

| Name                            | Type                         | Description                                                                                                         |
| ------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| config.applicationId (required) | string                       | The ID of the web application.                                                                                      |
| config.scriptExecutionAttribute | "NONE" \| "ASYNC" \| "DEFER" | Specifies the script execution attribute: async, defer, or none. If specified, this overrides the configured value. |

#### Returns

| Return type | Status code | Description                                                          |
| ----------- | ----------- | -------------------------------------------------------------------- |
| void        | 200         | Success. The response contains the OneAgent JavaScript Tag with SRI. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumManualInsertionTagsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await rumManualInsertionTagsClient.getOneAgentJavaScriptTagWithSri(
    { applicationId: "..." },
  );
```
