## oneAgentSupportArchivesClient

```js
import { oneAgentSupportArchivesClient } from '@dynatrace-sdk/client-fleet-management';
```

### cancelOrDeleteOneAgentSupportArchive

**oneAgentSupportArchivesClient.cancelOrDeleteOneAgentSupportArchive(config): Promise\<void>**

Cancels (if collecting) or deletes (if finished) OneAgent support archive

**Required scope:** fleet-management:oneagent.support-archives:delete

#### Parameters

| Name                               | Type   | Description                                                                |
| ---------------------------------- | ------ | -------------------------------------------------------------------------- |
| config.smartscapeNodeId (required) | string | The Smartscape node ID of the entity. Valid node types: ONEAGENT, PROCESS. |
| config.supportArchiveId (required) | string | The ID of the support archive.                                             |

#### Returns

| Return type | Status code | Description                                                                  |
| ----------- | ----------- | ---------------------------------------------------------------------------- |
| void        | 204         | No content. Cancellation requested (if collecting) or deleted (if finished). |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { oneAgentSupportArchivesClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await oneAgentSupportArchivesClient.cancelOrDeleteOneAgentSupportArchive(
    { smartscapeNodeId: "...", supportArchiveId: "..." },
  );
```

### downloadOneAgentSupportArchiveZip

**oneAgentSupportArchivesClient.downloadOneAgentSupportArchiveZip(config): Promise\<void>**

Downloads OneAgent support archive ZIP

**Required scope:** fleet-management:oneagent.support-archives:download

#### Parameters

| Name                               | Type   | Description                                                                |
| ---------------------------------- | ------ | -------------------------------------------------------------------------- |
| config.smartscapeNodeId (required) | string | The Smartscape node ID of the entity. Valid node types: ONEAGENT, PROCESS. |
| config.supportArchiveId (required) | string | The ID of the support archive.                                             |

#### Returns

| Return type | Status code | Description          |
| ----------- | ----------- | -------------------- |
| void        | 200         | Support archive ZIP. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { oneAgentSupportArchivesClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await oneAgentSupportArchivesClient.downloadOneAgentSupportArchiveZip(
    { smartscapeNodeId: "...", supportArchiveId: "..." },
  );
```

### getOneAgentSupportArchive

**oneAgentSupportArchivesClient.getOneAgentSupportArchive(config): Promise\<[SupportArchive](#supportarchive)>**

Gets OneAgent support archive by ID

**Required scope:** fleet-management:oneagent.support-archives:read

#### Parameters

| Name                               | Type   | Description                                                                |
| ---------------------------------- | ------ | -------------------------------------------------------------------------- |
| config.smartscapeNodeId (required) | string | The Smartscape node ID of the entity. Valid node types: ONEAGENT, PROCESS. |
| config.supportArchiveId (required) | string | The ID of the support archive.                                             |

#### Returns

| Return type                       | Status code | Description              |
| --------------------------------- | ----------- | ------------------------ |
| [SupportArchive](#supportarchive) | 200         | Support archive details. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { oneAgentSupportArchivesClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await oneAgentSupportArchivesClient.getOneAgentSupportArchive(
    { smartscapeNodeId: "...", supportArchiveId: "..." },
  );
```

### listOneAgentSupportArchives

**oneAgentSupportArchivesClient.listOneAgentSupportArchives(config): Promise\<[SupportArchiveListResponse](#supportarchivelistresponse)>**

Lists OneAgent support archives

**Required scope:** fleet-management:oneagent.support-archives:read

#### Parameters

| Name                               | Type   | Description                                                                                                                                                                                                                                                                                                 |
| ---------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.pageKey                     | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize                    | number | The amount of Support archives in a single response payload. The maximal allowed page size is 500 and the minimum size is 100. If not set, 100 is used. <br /><br />**Default:** `100`<br />**Minimum:** `100`                                                                                              |
| config.smartscapeNodeId (required) | string | The Smartscape node ID of the entity. Valid node types: ONEAGENT, PROCESS.                                                                                                                                                                                                                                  |

#### Returns

| Return type                                               | Status code | Description               |
| --------------------------------------------------------- | ----------- | ------------------------- |
| [SupportArchiveListResponse](#supportarchivelistresponse) | 200         | List of support archives. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { oneAgentSupportArchivesClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await oneAgentSupportArchivesClient.listOneAgentSupportArchives(
    { smartscapeNodeId: "..." },
  );
```

### startOneAgentSupportArchiveCollection

**oneAgentSupportArchivesClient.startOneAgentSupportArchiveCollection(config): Promise\<[StartSupportArchiveResponse](#startsupportarchiveresponse)>**

Starts collecting OneAgent support archive

**Required scope:** fleet-management:oneagent.support-archives:write

#### Parameters

| Name                               | Type                                                      | Description                                                                |
| ---------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| config.body (required)             | [StartSupportArchiveRequest](#startsupportarchiverequest) |                                                                            |
| config.smartscapeNodeId (required) | string                                                    | The Smartscape node ID of the entity. Valid node types: ONEAGENT, PROCESS. |

#### Returns

| Return type                                                 | Status code | Description                   |
| ----------------------------------------------------------- | ----------- | ----------------------------- |
| [StartSupportArchiveResponse](#startsupportarchiveresponse) | 202         | Accepted. Collection started. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { oneAgentSupportArchivesClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await oneAgentSupportArchivesClient.startOneAgentSupportArchiveCollection(
    {
      smartscapeNodeId: "...",
      body: { description: "...", lookbackDays: 10 },
    },
  );
```
