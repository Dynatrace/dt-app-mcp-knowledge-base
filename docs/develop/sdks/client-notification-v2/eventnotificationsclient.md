## eventNotificationsClient

```js
import { eventNotificationsClient } from '@dynatrace-sdk/client-notification-v2';
```

### createEventNotification

**eventNotificationsClient.createEventNotification(config): Promise\<[EventNotification](#eventnotification)>**

**Required scope:** notification:notifications:write

#### Parameters

| Name                   | Type                                                  |
| ---------------------- | ----------------------------------------------------- |
| config.body (required) | [EventNotificationRequest](#eventnotificationrequest) |

#### Returns

| Return type                             | Status code | Description |
| --------------------------------------- | ----------- | ----------- |
| [EventNotification](#eventnotification) | 201         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { eventNotificationsClient } from "@dynatrace-sdk/client-notification-v2";

const data =
  await eventNotificationsClient.createEventNotification({
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

### deleteEventNotification

**eventNotificationsClient.deleteEventNotification(config): Promise\<void>**

**Required scope:** notification:notifications:write

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
import { eventNotificationsClient } from "@dynatrace-sdk/client-notification-v2";

const data =
  await eventNotificationsClient.deleteEventNotification({
    id: "...",
  });
```

### getEventNotification

**eventNotificationsClient.getEventNotification(config): Promise\<[EventNotification](#eventnotification)>**

**Required scope:** notification:notifications:read

#### Parameters

| Name                 | Type   | Description                                       |
| -------------------- | ------ | ------------------------------------------------- |
| config.id (required) | string | A UUID string identifying this self notification. |

#### Returns

| Return type                             | Status code | Description |
| --------------------------------------- | ----------- | ----------- |
| [EventNotification](#eventnotification) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { eventNotificationsClient } from "@dynatrace-sdk/client-notification-v2";

const data =
  await eventNotificationsClient.getEventNotification({
    id: "...",
  });
```

### getEventNotifications

**eventNotificationsClient.getEventNotifications(config): Promise\<[PaginatedEventNotificationList](#paginatedeventnotificationlist)>**

**Required scope:** notification:notifications:read

#### Parameters

| Name                    | Type   | Description                                                                                                                                                                  |
| ----------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.appId            | string | Application id associated with the notification. Optional, by default automatically inferred from the request header. Only relevant for manual testing purposes via swagger. |
| config.limit            | number | Number of results to return per page.                                                                                                                                        |
| config.notificationType | string | String that defines the type of a notification in context of an app. Allows to differentiate between multiple types of notifications in context of one app.                  |
| config.offset           | number | The initial index from which to return the results.                                                                                                                          |
| config.ordering         | string | Which field to use when ordering the results.                                                                                                                                |
| config.owner            | string |                                                                                                                                                                              |
| config.resourceId       | string | Unique identifier of resource to notify on. Used to determine if there is a notification registered for a resource in context of the app and notification type for a user.   |
| config.search           | string | A search term.                                                                                                                                                               |

#### Returns

| Return type                                                       | Status code | Description |
| ----------------------------------------------------------------- | ----------- | ----------- |
| [PaginatedEventNotificationList](#paginatedeventnotificationlist) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { eventNotificationsClient } from "@dynatrace-sdk/client-notification-v2";

const data =
  await eventNotificationsClient.getEventNotifications();
```

### patchEventNotification

**eventNotificationsClient.patchEventNotification(config): Promise\<[EventNotification](#eventnotification)>**

**Required scope:** notification:notifications:write

#### Parameters

| Name                   | Type                                                | Description                                       |
| ---------------------- | --------------------------------------------------- | ------------------------------------------------- |
| config.body (required) | [EventNotificationUpdate](#eventnotificationupdate) |                                                   |
| config.id (required)   | string                                              | A UUID string identifying this self notification. |

#### Returns

| Return type                             | Status code | Description |
| --------------------------------------- | ----------- | ----------- |
| [EventNotification](#eventnotification) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { eventNotificationsClient } from "@dynatrace-sdk/client-notification-v2";

const data =
  await eventNotificationsClient.patchEventNotification({
    id: "...",
    body: {
      triggerConfiguration: {
        type: "event",
        value: { query: "..." },
      },
    },
  });
```

### updateEventNotification

**eventNotificationsClient.updateEventNotification(config): Promise\<[EventNotification](#eventnotification)>**

**Required scope:** notification:notifications:write

#### Parameters

| Name                   | Type                                                | Description                                       |
| ---------------------- | --------------------------------------------------- | ------------------------------------------------- |
| config.body (required) | [EventNotificationUpdate](#eventnotificationupdate) |                                                   |
| config.id (required)   | string                                              | A UUID string identifying this self notification. |

#### Returns

| Return type                             | Status code | Description |
| --------------------------------------- | ----------- | ----------- |
| [EventNotification](#eventnotification) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { eventNotificationsClient } from "@dynatrace-sdk/client-notification-v2";

const data =
  await eventNotificationsClient.updateEventNotification({
    id: "...",
    body: {
      triggerConfiguration: {
        type: "event",
        value: { query: "..." },
      },
    },
  });
```
