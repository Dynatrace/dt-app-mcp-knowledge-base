## discoveryClient

```js
import { discoveryClient } from '@dynatrace-sdk/client-extensions-v2';
```

### getJmxProcess

**discoveryClient.getJmxProcess(config): Promise\<JavaProcessDetails>**

Retrieves details of a specified Java process discovered in the environment for JMX metric collection. | maturity=EARLY_ADOPTER

**Required scope:** extensions:discovery.jmx:read

#### Parameters

| Name                        | Type   | Description                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.filter               | string | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering). Filtering is supported on the following field: * `hostId`
   \- the ID of the host the process is running on, in the form&#x20;
  `HOST-XXXXXXXXXXXXXXXX`
  . If the parameter is omitted, all processes are returned. Example: `hostId = 'HOST-1234ABCD5678EFAB'` |
| config.processId (required) | string | Id of the Java process discovered in the environment for JMX metric collection.                                                                                                                                                                                                                                                                               |

#### Returns

| Return type                               | Status code | Description |
| ----------------------------------------- | ----------- | ----------- |
| [JavaProcessDetails](#javaprocessdetails) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                                                                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. Agent data isn't yet available. Try again in a few seconds. \| Failed. Agent communication timeout. \| Client error. \| Server error. |

**Code example**

```ts
import { discoveryClient } from "@dynatrace-sdk/client-extensions-v2";

const data = await discoveryClient.getJmxProcess({
  processId: "...",
});
```

### getPmiProcess

**discoveryClient.getPmiProcess(config): Promise\<PmiProcessDetails>**

Retrieves details of a specified Java process discovered in the environment for PMI metric collection. | maturity=EARLY_ADOPTER

**Required scope:** extensions:discovery.pmi:read

#### Parameters

| Name                        | Type   | Description                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.filter               | string | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering). Filtering is supported on the following field: * `hostId`
   \- the ID of the host the process is running on, in the form&#x20;
  `HOST-XXXXXXXXXXXXXXXX`
  . If the parameter is omitted, all processes are returned. Example: `hostId = 'HOST-1234ABCD5678EFAB'` |
| config.processId (required) | string | Id of the Java process discovered in the environment for PMI metric collection.                                                                                                                                                                                                                                                                               |

#### Returns

| Return type                             | Status code | Description |
| --------------------------------------- | ----------- | ----------- |
| [PmiProcessDetails](#pmiprocessdetails) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                                                                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. Agent data isn't yet available. Try again in a few seconds. \| Failed. Agent communication timeout. \| Client error. \| Server error. |

**Code example**

```ts
import { discoveryClient } from "@dynatrace-sdk/client-extensions-v2";

const data = await discoveryClient.getPmiProcess({
  processId: "...",
});
```

### listJmxProcesses

**discoveryClient.listJmxProcesses(config): Promise\<[JavaProcessContainerList](#javaprocesscontainerlist)>**

Lists all Java processes discovered in the environment that are available for JMX metric collection. | maturity=EARLY_ADOPTER

**Required scope:** extensions:discovery.jmx:read

#### Parameters

| Name          | Type   | Description                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.filter | string | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering). Filtering is supported on the following field: * `hostId`
   \- the ID of the host the process is running on, in the form&#x20;
  `HOST-XXXXXXXXXXXXXXXX`
  . If the parameter is omitted, all processes are returned. Example: `hostId = 'HOST-1234ABCD5678EFAB'` |

#### Returns

| Return type                                           | Status code | Description |
| ----------------------------------------------------- | ----------- | ----------- |
| [JavaProcessContainerList](#javaprocesscontainerlist) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { discoveryClient } from "@dynatrace-sdk/client-extensions-v2";

const data = await discoveryClient.listJmxProcesses();
```

### listPmiProcesses

**discoveryClient.listPmiProcesses(config): Promise\<[JavaProcessContainerList](#javaprocesscontainerlist)>**

Lists all Java processes discovered in the environment that are available for PMI metric collection. | maturity=EARLY_ADOPTER

**Required scope:** extensions:discovery.pmi:read

#### Parameters

| Name          | Type   | Description                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.filter | string | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering). Filtering is supported on the following field: * `hostId`
   \- the ID of the host the process is running on, in the form&#x20;
  `HOST-XXXXXXXXXXXXXXXX`
  . If the parameter is omitted, all processes are returned. Example: `hostId = 'HOST-1234ABCD5678EFAB'` |

#### Returns

| Return type                                           | Status code | Description |
| ----------------------------------------------------- | ----------- | ----------- |
| [JavaProcessContainerList](#javaprocesscontainerlist) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { discoveryClient } from "@dynatrace-sdk/client-extensions-v2";

const data = await discoveryClient.listPmiProcesses();
```
