## rumJavaScriptTagManagementClient

```js
import { rumJavaScriptTagManagementClient } from '@dynatrace-sdk/client-classic-environment-v1';
```

### getAppRevision

**rumJavaScriptTagManagementClient.getAppRevision(config): Promise\<string>**

Gets the version of the RUM JavaScript code injected into specified application

**Required scope:** environment-api:rum:read
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                     | Type   | Description                                                                                                                                                               |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.entity (required) | string | The Dynatrace entity ID of the application. You can obtain it from the response of the [GET the list of manually injected applications](https://dt-url.net/dl03sgo) call. |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumJavaScriptTagManagementClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await rumJavaScriptTagManagementClient.getAppRevision({
    entity: "...",
  });
```

### getAsyncCodeSnippet

**rumJavaScriptTagManagementClient.getAsyncCodeSnippet(config): Promise\<string>**

Downloads the asynchronous code snippet

**Required scope:** environment-api:rum:read
**Required permission:** environment:roles:manage-settings

This code provides configuration and basic code to be manually inserted into your web application code.

The full functionality of the monitoring code is loaded asynchronously.

#### Parameters

| Name                     | Type   | Description                                                                                                                                                               |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.entity (required) | string | The Dynatrace entity ID of the application. You can obtain it from the response of the [GET the list of manually injected applications](https://dt-url.net/dl03sgo) call. |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumJavaScriptTagManagementClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await rumJavaScriptTagManagementClient.getAsyncCodeSnippet(
    { entity: "..." },
  );
```

### getJsAllAvailableVersions

**rumJavaScriptTagManagementClient.getJsAllAvailableVersions(config): Promise\<[AllAvailableVersions](#allavailableversions)>**

Gets all available RUM JavaScript versions

**Required scope:** environment-api:rum:read
**Required permission:** environment:roles:manage-settings

#### Returns

| Return type                                   | Status code | Description |
| --------------------------------------------- | ----------- | ----------- |
| [AllAvailableVersions](#allavailableversions) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumJavaScriptTagManagementClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await rumJavaScriptTagManagementClient.getJsAllAvailableVersions();
```

### getJsConfiguredVersions

**rumJavaScriptTagManagementClient.getJsConfiguredVersions(config): Promise\<[ConfiguredVersions](#configuredversions)>**

Gets the configured Latest stable, Previous stable and Custom RUM JavaScript versions

**Required scope:** environment-api:rum:read
**Required permission:** environment:roles:manage-settings

#### Returns

| Return type                               | Status code | Description |
| ----------------------------------------- | ----------- | ----------- |
| [ConfiguredVersions](#configuredversions) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumJavaScriptTagManagementClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await rumJavaScriptTagManagementClient.getJsConfiguredVersions();
```

### getJsInlineScript

**rumJavaScriptTagManagementClient.getJsInlineScript(config): Promise\<string>**

Downloads inline code

**Required scope:** environment-api:rum:read
**Required permission:** environment:roles:manage-settings

Returns the inline code of the most recent OneAgent JavaScript. This is a complete configuration and monitoring code to be manually inserted into your web application code.

#### Parameters

| Name                     | Type   | Description                                                                                                                                                               |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.entity (required) | string | The Dynatrace entity ID of the application. You can obtain it from the response of the [GET the list of manually injected applications](https://dt-url.net/dl03sgo) call. |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumJavaScriptTagManagementClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await rumJavaScriptTagManagementClient.getJsInlineScript({
    entity: "...",
  });
```

### getJsLatestVersion

**rumJavaScriptTagManagementClient.getJsLatestVersion(config): Promise\<string>**

Gets the latest version of OneAgent JavaScript library

**Required scope:** environment-api:rum:read
**Required permission:** environment:roles:manage-settings

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumJavaScriptTagManagementClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await rumJavaScriptTagManagementClient.getJsLatestVersion();
```

### getJsScript

**rumJavaScriptTagManagementClient.getJsScript(config): Promise\<string>**

Downloads OneAgent JavaScript tag

**Required scope:** environment-api:rum:read
**Required permission:** environment:roles:manage-settings

Returns the OneAgent JavaScript tag. This is a complete configuration and monitoring code to be manually inserted into your web application code.

The monitoring code is loaded as a separate file from a CDN.

#### Parameters

| Name                     | Type   | Description                                                                                                                                                               |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.entity (required) | string | The Dynatrace entity ID of the application. You can obtain it from the response of the [GET the list of manually injected applications](https://dt-url.net/dl03sgo) call. |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumJavaScriptTagManagementClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await rumJavaScriptTagManagementClient.getJsScript({
    entity: "...",
  });
```

### getJsTagComplete

**rumJavaScriptTagManagementClient.getJsTagComplete(config): Promise\<string>**

Downloads JavaScript tag

**Required scope:** environment-api:rum:read
**Required permission:** environment:roles:manage-settings

Returns a JavaScript tag to be manually inserted into your web application code. The tag references a JavaScript file with full configuration and monitoring code, which causes a lower possible caching duration.

#### Parameters

| Name                     | Type   | Description                                                                                                                                                               |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.entity (required) | string | The Dynatrace entity ID of the application. You can obtain it from the response of the [GET the list of manually injected applications](https://dt-url.net/dl03sgo) call. |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumJavaScriptTagManagementClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await rumJavaScriptTagManagementClient.getJsTagComplete({
    entity: "...",
  });
```

### getJsTagSri

**rumJavaScriptTagManagementClient.getJsTagSri(config): Promise\<string>**

Downloads OneAgent JavaScript tag with SRI

**Required scope:** environment-api:rum:read
**Required permission:** environment:roles:manage-settings

Returns the OneAgent JavaScript tag with SRI. This is a complete configuration and monitoring code to be manually inserted into your web application code.

The monitoring code is loaded as a separate file from a CDN. A cryptographic hash is included in the tag, enabling the browser to verify the integrity of the monitoring code using its Subresource Integrity (SRI) feature.

#### Parameters

| Name                     | Type   | Description                                                                                                                                                               |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.entity (required) | string | The Dynatrace entity ID of the application. You can obtain it from the response of the [GET the list of manually injected applications](https://dt-url.net/dl03sgo) call. |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumJavaScriptTagManagementClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await rumJavaScriptTagManagementClient.getJsTagSri({
    entity: "...",
  });
```

### getManualApps

**rumJavaScriptTagManagementClient.getManualApps(config): Promise\<Array\<[ManualApplication](#manualapplication)>>**

Lists all manually injected applications

**Required scope:** environment-api:rum:read
**Required permission:** environment:roles:manage-settings

#### Returns

| Return type                             | Status code | Description |
| --------------------------------------- | ----------- | ----------- |
| [ManualApplication](#manualapplication) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumJavaScriptTagManagementClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await rumJavaScriptTagManagementClient.getManualApps();
```

### getSyncCodeSnippet

**rumJavaScriptTagManagementClient.getSyncCodeSnippet(config): Promise\<string>**

Downloads the synchronous code snippet

**Required scope:** environment-api:rum:read
**Required permission:** environment:roles:manage-settings

This code provides configuration and basic code to be manually inserted into your web application code.

The full functionality of the monitoring code is loaded synchronously.

#### Parameters

| Name                     | Type   | Description                                                                                                                                                               |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.entity (required) | string | The Dynatrace entity ID of the application. You can obtain it from the response of the [GET the list of manually injected applications](https://dt-url.net/dl03sgo) call. |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { rumJavaScriptTagManagementClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await rumJavaScriptTagManagementClient.getSyncCodeSnippet(
    { entity: "..." },
  );
```
