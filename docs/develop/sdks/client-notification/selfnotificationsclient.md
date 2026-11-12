## selfNotificationsClient

```js
import { selfNotificationsClient } from '@dynatrace-sdk/client-notification';
```

### ~~createSelfNotification~~

> ⚠️ **Deprecated**

**selfNotificationsClient.createSelfNotification(config): Promise\<[SelfNotification](#selfnotification)>**

**Required scope:** notification:self-notifications:write

#### Parameters

| Name                   | Type                                              |
| ---------------------- | ------------------------------------------------- |
| config.body (required) | [SelfNotificationCreate](#selfnotificationcreate) |

#### Returns

| Return type                           | Status code | Description |
| ------------------------------------- | ----------- | ----------- |
| [SelfNotification](#selfnotification) | 201         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { selfNotificationsClient } from "@dynatrace-sdk/client-notification";

const data =
  await selfNotificationsClient.createSelfNotification({
    body: {
      resourceId: "...",
      notificationType: "...",
      triggerConfiguration: {
        type: "event",
        value: { query: "..." },
      },
    },
  });
```

### ~~deleteSelfNotification~~

> ⚠️ **Deprecated**

**selfNotificationsClient.deleteSelfNotification(config): Promise\<void>**

**Required scope:** notification:self-notifications:write

#### Parameters

| Name                 | Type   | Description                                       |
| -------------------- | ------ | ------------------------------------------------- |
| config.id (required) | string | A UUID string identifying this self notification. |

#### Returns

| Return type | Status code | Description      |
| ----------- | ----------- | ---------------- |
| void        | 204         | No response body |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { selfNotificationsClient } from "@dynatrace-sdk/client-notification";

const data =
  await selfNotificationsClient.deleteSelfNotification({
    id: "...",
  });
```

### ~~getSelfNotification~~

> ⚠️ **Deprecated**

**selfNotificationsClient.getSelfNotification(config): Promise\<[SelfNotification](#selfnotification)>**

**Required scope:** notification:self-notifications:read

#### Parameters

| Name                 | Type   | Description                                       |
| -------------------- | ------ | ------------------------------------------------- |
| config.id (required) | string | A UUID string identifying this self notification. |

#### Returns

| Return type                           | Status code | Description |
| ------------------------------------- | ----------- | ----------- |
| [SelfNotification](#selfnotification) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { selfNotificationsClient } from "@dynatrace-sdk/client-notification";

const data =
  await selfNotificationsClient.getSelfNotification({
    id: "...",
  });
```

### ~~getSelfNotifications~~

> ⚠️ **Deprecated**

**selfNotificationsClient.getSelfNotifications(config): Promise\<[PaginatedSelfNotificationList](#paginatedselfnotificationlist)>**

**Required scope:** notification:self-notifications:read

#### Parameters

| Name                    | Type   | Description                                         |
| ----------------------- | ------ | --------------------------------------------------- |
| config.appId            | string |                                                     |
| config.limit            | number | Number of results to return per page.               |
| config.notificationType | string |                                                     |
| config.offset           | number | The initial index from which to return the results. |
| config.ordering         | string | Which field to use when ordering the results.       |
| config.owner            | string |                                                     |
| config.resourceId       | string |                                                     |
| config.search           | string | A search term.                                      |

#### Returns

| Return type                                                     | Status code | Description |
| --------------------------------------------------------------- | ----------- | ----------- |
| [PaginatedSelfNotificationList](#paginatedselfnotificationlist) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { selfNotificationsClient } from "@dynatrace-sdk/client-notification";

const data =
  await selfNotificationsClient.getSelfNotifications();
```

### ~~patchSelfNotification~~

> ⚠️ **Deprecated**

**selfNotificationsClient.patchSelfNotification(config): Promise\<[SelfNotification](#selfnotification)>**

**Required scope:** notification:self-notifications:write

#### Parameters

| Name                   | Type                                              | Description                                       |
| ---------------------- | ------------------------------------------------- | ------------------------------------------------- |
| config.body (required) | [SelfNotificationUpdate](#selfnotificationupdate) |                                                   |
| config.id (required)   | string                                            | A UUID string identifying this self notification. |

#### Returns

| Return type                           | Status code | Description |
| ------------------------------------- | ----------- | ----------- |
| [SelfNotification](#selfnotification) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { selfNotificationsClient } from "@dynatrace-sdk/client-notification";

const data =
  await selfNotificationsClient.patchSelfNotification({
    id: "...",
    body: {
      triggerConfiguration: {
        type: "event",
        value: { query: "..." },
      },
    },
  });
```

### ~~updateSelfNotification~~

> ⚠️ **Deprecated**

**selfNotificationsClient.updateSelfNotification(config): Promise\<[SelfNotification](#selfnotification)>**

**Required scope:** notification:self-notifications:write

#### Parameters

| Name                   | Type                                              | Description                                       |
| ---------------------- | ------------------------------------------------- | ------------------------------------------------- |
| config.body (required) | [SelfNotificationUpdate](#selfnotificationupdate) |                                                   |
| config.id (required)   | string                                            | A UUID string identifying this self notification. |

#### Returns

| Return type                           | Status code | Description |
| ------------------------------------- | ----------- | ----------- |
| [SelfNotification](#selfnotification) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { selfNotificationsClient } from "@dynatrace-sdk/client-notification";

const data =
  await selfNotificationsClient.updateSelfNotification({
    id: "...",
    body: {
      triggerConfiguration: {
        type: "event",
        value: { query: "..." },
      },
    },
  });
```
