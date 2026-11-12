## resourceNotificationsClient

```js
import { resourceNotificationsClient } from '@dynatrace-sdk/client-notification-v2';
```

### createResourceNotification

**resourceNotificationsClient.createResourceNotification(config): Promise\<[ResourceNotification](#resourcenotification)>**

**Required scope:** notification:notifications:write

#### Parameters

| Name                   | Type                                                        |
| ---------------------- | ----------------------------------------------------------- |
| config.body (required) | [ResourceNotificationRequest](#resourcenotificationrequest) |

#### Returns

| Return type                                   | Status code | Description |
| --------------------------------------------- | ----------- | ----------- |
| [ResourceNotification](#resourcenotification) | 201         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { resourceNotificationsClient } from "@dynatrace-sdk/client-notification-v2";

const data =
  await resourceNotificationsClient.createResourceNotification(
    {
      body: { notificationType: "...", resourceId: "..." },
    },
  );
```

### deleteResourceNotification

**resourceNotificationsClient.deleteResourceNotification(config): Promise\<void>**

**Required scope:** notification:notifications:write

#### Parameters

| Name                 | Type   | Description                                                                                                                                                                  |
| -------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.appId         | string | Application id associated with the notification. Optional, by default automatically inferred from the request header. Only relevant for manual testing purposes via swagger. |
| config.id (required) | string | A UUID string identifying this resource notification.                                                                                                                        |

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
import { resourceNotificationsClient } from "@dynatrace-sdk/client-notification-v2";

const data =
  await resourceNotificationsClient.deleteResourceNotification(
    { id: "..." },
  );
```

### deleteResourceNotificationByTypeAndResource

**resourceNotificationsClient.deleteResourceNotificationByTypeAndResource(config): Promise\<void>**

**Required scope:** notification:notifications:write

#### Parameters

| Name                               | Type   | Description                                                                                                                                                                  |
| ---------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.appId                       | string | Application id associated with the notification. Optional, by default automatically inferred from the request header. Only relevant for manual testing purposes via swagger. |
| config.notificationType (required) | string | String that defines the type of a notification in context of an app. Allows to differentiate between multiple types of notifications in context of one app.                  |
| config.resourceId (required)       | string | Unique identifier of resource to notify on. Used to determine if there is a notification registered for a resource in context of the app and notification type for a user.   |

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
import { resourceNotificationsClient } from "@dynatrace-sdk/client-notification-v2";

const data =
  await resourceNotificationsClient.deleteResourceNotificationByTypeAndResource(
    { notificationType: "...", resourceId: "..." },
  );
```

### getResourceNotification

**resourceNotificationsClient.getResourceNotification(config): Promise\<[ResourceNotification](#resourcenotification)>**

**Required scope:** notification:notifications:read

#### Parameters

| Name                 | Type   | Description                                                                                                                                                                  |
| -------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.appId         | string | Application id associated with the notification. Optional, by default automatically inferred from the request header. Only relevant for manual testing purposes via swagger. |
| config.id (required) | string | A UUID string identifying this resource notification.                                                                                                                        |

#### Returns

| Return type                                   | Status code | Description |
| --------------------------------------------- | ----------- | ----------- |
| [ResourceNotification](#resourcenotification) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { resourceNotificationsClient } from "@dynatrace-sdk/client-notification-v2";

const data =
  await resourceNotificationsClient.getResourceNotification(
    { id: "..." },
  );
```

### getResourceNotifications

**resourceNotificationsClient.getResourceNotifications(config): Promise\<[PaginatedResourceNotificationList](#paginatedresourcenotificationlist)>**

**Required scope:** notification:notifications:read

#### Parameters

| Name                    | Type   | Description                                                                                                                                                                  |
| ----------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.appId            | string | Application id associated with the notification. Optional, by default automatically inferred from the request header. Only relevant for manual testing purposes via swagger. |
| config.limit            | number | Number of results to return per page.                                                                                                                                        |
| config.notificationType | string | String that defines the type of a notification in context of an app. Allows to differentiate between multiple types of notifications in context of one app.                  |
| config.offset           | number | The initial index from which to return the results.                                                                                                                          |
| config.ordering         | string | Which field to use when ordering the results.                                                                                                                                |
| config.resourceId       | string | Unique identifier of resource to notify on. Used to determine if there is a notification registered for a resource in context of the app and notification type for a user.   |
| config.search           | string | A search term.                                                                                                                                                               |

#### Returns

| Return type                                                             | Status code | Description |
| ----------------------------------------------------------------------- | ----------- | ----------- |
| [PaginatedResourceNotificationList](#paginatedresourcenotificationlist) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { resourceNotificationsClient } from "@dynatrace-sdk/client-notification-v2";

const data =
  await resourceNotificationsClient.getResourceNotifications();
```
