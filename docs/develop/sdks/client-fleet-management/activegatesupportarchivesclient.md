## activeGateSupportArchivesClient

```js
import { activeGateSupportArchivesClient } from '@dynatrace-sdk/client-fleet-management';
```

### cancelOrDeleteActiveGateSupportArchive

**activeGateSupportArchivesClient.cancelOrDeleteActiveGateSupportArchive(config): Promise\<void>**

Cancels (if collecting) or deletes (if finished) ActiveGate support archive

**Required scope:** fleet-management:activegate.support-archives:delete

#### Parameters

| Name                               | Type   | Description                                                                                     |
| ---------------------------------- | ------ | ----------------------------------------------------------------------------------------------- |
| config.smartscapeNodeId (required) | string | The Smartscape node ID of the entity. Valid node types: ACTIVEGATE, SYNTHETIC_ENGINE, ZREMOTE. |
| config.supportArchiveId (required) | string | The ID of the support archive.                                                                  |

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
import { activeGateSupportArchivesClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await activeGateSupportArchivesClient.cancelOrDeleteActiveGateSupportArchive(
    { smartscapeNodeId: "...", supportArchiveId: "..." },
  );
```

### downloadActiveGateSupportArchiveZip

**activeGateSupportArchivesClient.downloadActiveGateSupportArchiveZip(config): Promise\<void>**

Downloads ActiveGate support archive ZIP

**Required scope:** fleet-management:activegate.support-archives:download

#### Parameters

| Name                               | Type   | Description                                                                                     |
| ---------------------------------- | ------ | ----------------------------------------------------------------------------------------------- |
| config.smartscapeNodeId (required) | string | The Smartscape node ID of the entity. Valid node types: ACTIVEGATE, SYNTHETIC_ENGINE, ZREMOTE. |
| config.supportArchiveId (required) | string | The ID of the support archive.                                                                  |

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
import { activeGateSupportArchivesClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await activeGateSupportArchivesClient.downloadActiveGateSupportArchiveZip(
    { smartscapeNodeId: "...", supportArchiveId: "..." },
  );
```

### getActiveGateSupportArchive

**activeGateSupportArchivesClient.getActiveGateSupportArchive(config): Promise\<[SupportArchive](#supportarchive)>**

Gets ActiveGate support archive by ID

**Required scope:** fleet-management:activegate.support-archives:read

#### Parameters

| Name                               | Type   | Description                                                                                     |
| ---------------------------------- | ------ | ----------------------------------------------------------------------------------------------- |
| config.smartscapeNodeId (required) | string | The Smartscape node ID of the entity. Valid node types: ACTIVEGATE, SYNTHETIC_ENGINE, ZREMOTE. |
| config.supportArchiveId (required) | string | The ID of the support archive.                                                                  |

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
import { activeGateSupportArchivesClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await activeGateSupportArchivesClient.getActiveGateSupportArchive(
    { smartscapeNodeId: "...", supportArchiveId: "..." },
  );
```

### listActiveGateSupportArchives

**activeGateSupportArchivesClient.listActiveGateSupportArchives(config): Promise\<[SupportArchiveListResponse](#supportarchivelistresponse)>**

Lists ActiveGate support archives

**Required scope:** fleet-management:activegate.support-archives:read

#### Parameters

| Name                               | Type   | Description                                                                                                                                                                                                                                                                                                 |
| ---------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.pageKey                     | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize                    | number | The amount of Support archives in a single response payload. The maximal allowed page size is 500 and the minimum size is 100. If not set, 100 is used. <br /><br />**Default:** `100`<br />**Minimum:** `100`                                                                                              |
| config.smartscapeNodeId (required) | string | The Smartscape node ID of the entity. Valid node types: ACTIVEGATE, SYNTHETIC_ENGINE, ZREMOTE.                                                                                                                                                                                                             |

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
import { activeGateSupportArchivesClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await activeGateSupportArchivesClient.listActiveGateSupportArchives(
    { smartscapeNodeId: "..." },
  );
```

### startActiveGateSupportArchiveCollection

**activeGateSupportArchivesClient.startActiveGateSupportArchiveCollection(config): Promise\<[StartSupportArchiveResponse](#startsupportarchiveresponse)>**

Starts collecting ActiveGate support archive

**Required scope:** fleet-management:activegate.support-archives:write

#### Parameters

| Name                               | Type                                                      | Description                                                                                     |
| ---------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| config.body (required)             | [StartSupportArchiveRequest](#startsupportarchiverequest) |                                                                                                 |
| config.smartscapeNodeId (required) | string                                                    | The Smartscape node ID of the entity. Valid node types: ACTIVEGATE, SYNTHETIC_ENGINE, ZREMOTE. |

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
import { activeGateSupportArchivesClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await activeGateSupportArchivesClient.startActiveGateSupportArchiveCollection(
    {
      smartscapeNodeId: "...",
      body: { description: "...", lookbackDays: 10 },
    },
  );
```
