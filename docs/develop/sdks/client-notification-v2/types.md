## Types

### DavisEventConfig

| Name                             | Type                                              | Description                                                                                                                                                                      |
| -------------------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| customFilter                     | null \| string                                    | Additional DQL matcher expression to further filter events to match. *default:* `""`                                                                                             |
| entityTags                       | null \| [EntityTags](#entitytags)                 |                                                                                                                                                                                  |
| entityTagsMatch                  | null \| "all" \| "any"                            |                                                                                                                                                                                  |
| maintenanceWindowTriggerBehavior | "always" \| "inside" \| "outside"                 | *default:* `"always"`                                                                                                                                                            |
| names                            | null \| Array\<[DavisEventName](#daviseventname)> |                                                                                                                                                                                  |
| ~~onProblemClose~~**DEPRECATED** | boolean                                           | Trigger on Davis event open only or also on close. Deprecated — use triggerOn instead. *default:* `false`                                                                        |
| triggerOn                        | null \| "open" \| "open-and-close" \| "close"     | Event state to trigger on. "open" (active only), "open-and-close" (both phases), or "close" (closure only). When unset, falls back to onProblemClose for backward compatibility. |
| ~~types~~**DEPRECATED**          | null \| Array\<string>                            |                                                                                                                                                                                  |

### DavisEventName

| Name             | Type                   | Description                                                 |
| ---------------- | ---------------------- | ----------------------------------------------------------- |
| match (required) | "equals" \| "contains" | Davis event name must equal or contain the string provided. |
| name (required)  | string                 |                                                             |

### DavisEventTriggerConfig

| Name             | Type                                  |
| ---------------- | ------------------------------------- |
| type (required)  | "davis-event"                         |
| value (required) | [DavisEventConfig](#daviseventconfig) |

### DavisProblemCategories

| Name                  | Type    | Default |
| --------------------- | ------- | ------- |
| availability          | boolean | `false` |
| custom                | boolean | `false` |
| error                 | boolean | `false` |
| info                  | boolean | `false` |
| monitoringUnavailable | boolean | `false` |
| resource              | boolean | `false` |
| slowdown              | boolean | `false` |

### DavisProblemConfig

| Name                             | Type                                                                                                                                                                          | Description                                                                                                                                                                        |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| analysisReady                    | boolean                                                                                                                                                                       | Run only after first root cause analysis run completed. *default:* `false`                                                                                                         |
| categories (required)            | [DavisProblemCategories](#davisproblemcategories)                                                                                                                             |                                                                                                                                                                                    |
| customFilter                     | null \| string                                                                                                                                                                | Additional DQL matcher expression to further filter events to match. *default:* `""`                                                                                               |
| entityTags                       | null \| [EntityTags](#entitytags)                                                                                                                                             |                                                                                                                                                                                    |
| entityTagsMatch                  | null \| "all" \| "any"                                                                                                                                                        |                                                                                                                                                                                    |
| ~~onProblemClose~~**DEPRECATED** | boolean                                                                                                                                                                       | Trigger on Davis problem open only or also on close. Deprecated — use triggerOn instead. *default:* `false`                                                                        |
| problemOpenDuration              | null \| 5 \| 10 \| 15 \| 30 \| 60 \| 120 \| 240 \| 1440 \| 10080                                                                                                              | Minimum problem duration in minutes before the trigger fires.                                                                                                                      |
| severityThreshold                | null \| number                                                                                                                                                                | Triggers only for problems whose severity is this value or more severe. Lower numbers are more severe (1 = critical, 5 = informational), so 3 matches severities 1, 2, and 3.      |
| triggerOn                        | null \| "open" \| "open-and-close" \| "close"                                                                                                                                 | Problem state to trigger on. "open" (active only), "open-and-close" (both phases), or "close" (closure only). When unset, falls back to onProblemClose for backward compatibility. |
| triggerOnUpdateFields            | Array\<"dt.davis.affected_users_count" \| "dt.davis.impact_level" \| "event.category" \| "event.severity" \| "root_cause_entity_id" \| "smartscape.affected_entities"> | Problem event fields tracked for value changes. Changes to any selected field cause re-triggering.                                                                                 |

### DavisProblemTriggerConfig

| Name             | Type                                      |
| ---------------- | ----------------------------------------- |
| type (required)  | "davis-problem"                           |
| value (required) | [DavisProblemConfig](#davisproblemconfig) |

### EntityTags

Entity tags to match by key and (optional) values. For example \{"foo": [], "bar": ["a", "b", "c"]}

**type**: Record\<string, string | string[]>

### Error

| Name               | Type                          |
| ------------------ | ----------------------------- |
| code (required)    | number                        |
| details            | [ErrorDetails](#errordetails) |
| message (required) | string                        |

### ErrorDetails

| Name      | Type   |
| --------- | ------ |
| errorCode | string |
| errorRef  | string |

### ErrorEnvelope

| Name             | Type            |
| ---------------- | --------------- |
| error (required) | [Error](#error) |

### EventNotification

| Name                            | Type                                              | Description                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appId                           | string                                            | App id for registered notification. Optional, by default automatically inferred from the request. Only relevant for manual testing purposes via swagger.                                                                                                                                                                                          |
| id (required)                   | string                                            |                                                                                                                                                                                                                                                                                                                                                   |
| input                           | [EventNotificationInput](#eventnotificationinput) | Input object consisting of subject and content. Supports automation expressions [https://dt-url.net/workflows-expression-reference](https://dt-url.net/workflows-expression-reference) and markdown syntax. A template provided with an app (\{notification_type}.notification-template.json) will take precedence over the input provided here. |
| modificationInfo (required)     | [ModificationInfo](#modificationinfo)             |                                                                                                                                                                                                                                                                                                                                                   |
| notificationType (required)     | string                                            | String that defines the type of a notification in context of an app. Allows to differentiate between multiple types of notifications in context of one app.                                                                                                                                                                                       |
| owner (required)                | string                                            |                                                                                                                                                                                                                                                                                                                                                   |
| resourceId (required)           | string                                            | Unique identifier of resource to notify on. Used to determine if there is a notification registered for a resource in context of the app and notification type for a user.                                                                                                                                                                        |
| title                           | string                                            |                                                                                                                                                                                                                                                                                                                                                   |
| triggerConfiguration (required) | EventTriggerConfig                                |                                                                                                                                                                                                                                                                                                                                                   |

### EventNotificationInput

| Name    | Type           |
| ------- | -------------- |
| content | null \| string |
| subject | null \| string |

### EventNotificationRequest

| Name                            | Type                                              | Description                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appId                           | string                                            | App id for registered notification. Optional, by default automatically inferred from the request. Only relevant for manual testing purposes via swagger.                                                                                                                                                                                          |
| id                              | string                                            |                                                                                                                                                                                                                                                                                                                                                   |
| input                           | [EventNotificationInput](#eventnotificationinput) | Input object consisting of subject and content. Supports automation expressions [https://dt-url.net/workflows-expression-reference](https://dt-url.net/workflows-expression-reference) and markdown syntax. A template provided with an app (\{notification_type}.notification-template.json) will take precedence over the input provided here. |
| notificationType (required)     | string                                            | String that defines the type of a notification in context of an app. Allows to differentiate between multiple types of notifications in context of one app.                                                                                                                                                                                       |
| resourceId (required)           | string                                            | Unique identifier of resource to notify on. Used to determine if there is a notification registered for a resource in context of the app and notification type for a user.                                                                                                                                                                        |
| title                           | string                                            |                                                                                                                                                                                                                                                                                                                                                   |
| triggerConfiguration (required) | EventTriggerConfig                                |                                                                                                                                                                                                                                                                                                                                                   |

### EventNotificationUpdate

| Name                 | Type                                              | Description                                                                                                                                                                                                                                                                                                                                       |
| -------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appId                | string                                            | App id for registered notification. Optional, by default automatically inferred from the request. Only relevant for manual testing purposes via swagger.                                                                                                                                                                                          |
| input                | [EventNotificationInput](#eventnotificationinput) | Input object consisting of subject and content. Supports automation expressions [https://dt-url.net/workflows-expression-reference](https://dt-url.net/workflows-expression-reference) and markdown syntax. A template provided with an app (\{notification_type}.notification-template.json) will take precedence over the input provided here. |
| notificationType     | string                                            | String that defines the type of a notification in context of an app. Allows to differentiate between multiple types of notifications in context of one app.                                                                                                                                                                                       |
| resourceId           | string                                            | Unique identifier of resource to notify on. Used to determine if there is a notification registered for a resource in context of the app and notification type for a user.                                                                                                                                                                        |
| title                | string                                            |                                                                                                                                                                                                                                                                                                                                                   |
| triggerConfiguration | EventTriggerConfig                                |                                                                                                                                                                                                                                                                                                                                                   |

### EventQuery

| Name             | Type                                                               | Description                                            |
| ---------------- | ------------------------------------------------------------------ | ------------------------------------------------------ |
| eventType        | "events" \| "bizevents" \| "dt.system.events" \| "security.events" | Grail event type.                                      |
| query (required) | string                                                             | DQL matcher expression defining which events to match. |

### EventQueryTriggerConfig

| Name             | Type                      |
| ---------------- | ------------------------- |
| type (required)  | "event"                   |
| value (required) | [EventQuery](#eventquery) |

### ModificationInfo

| Name                        | Type           |
| --------------------------- | -------------- |
| createdBy (required)        | null \| string |
| createdTime (required)      | Date           |
| lastModifiedBy (required)   | null \| string |
| lastModifiedTime (required) | Date           |

### PaginatedEventNotificationList

| Name               | Type                                            |
| ------------------ | ----------------------------------------------- |
| count (required)   | number                                          |
| results (required) | Array\<[EventNotification](#eventnotification)> |

### PaginatedResourceNotificationList

| Name               | Type                                                  |
| ------------------ | ----------------------------------------------------- |
| count (required)   | number                                                |
| results (required) | Array\<[ResourceNotification](#resourcenotification)> |

### ResourceNotification

| Name                        | Type                                  | Description                                                                                                                                                                |
| --------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appId                       | null \| string                        | App id for registered notification. Optional, by default automatically inferred from the request. Only relevant for manual testing purposes via swagger.                   |
| id (required)               | string                                |                                                                                                                                                                            |
| modificationInfo (required) | [ModificationInfo](#modificationinfo) |                                                                                                                                                                            |
| notificationType (required) | string                                | String that defines the type of a notification in context of an app. Allows to differentiate between multiple types of notifications in context of one app.                |
| owningUser (required)       | string                                |                                                                                                                                                                            |
| resourceId (required)       | string                                | Unique identifier of resource to notify on. Used to determine if there is a notification registered for a resource in context of the app and notification type for a user. |

### ResourceNotificationRequest

| Name                        | Type           | Description                                                                                                                                                                |
| --------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appId                       | null \| string | App id for registered notification. Optional, by default automatically inferred from the request. Only relevant for manual testing purposes via swagger.                   |
| notificationType (required) | string         | String that defines the type of a notification in context of an app. Allows to differentiate between multiple types of notifications in context of one app.                |
| resourceId (required)       | string         | Unique identifier of resource to notify on. Used to determine if there is a notification registered for a resource in context of the app and notification type for a user. |

### EventTriggerConfig

**type**: [EventQueryTriggerConfig](#eventquerytriggerconfig) | [DavisProblemTriggerConfig](#davisproblemtriggerconfig) | [DavisEventTriggerConfig](#daviseventtriggerconfig)
