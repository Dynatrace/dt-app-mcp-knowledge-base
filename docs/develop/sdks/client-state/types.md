## Types

### AppState

| Name             | Type                                  | Description                                                                                                                                                                                   |
| ---------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modificationInfo | [ModificationInfo](#modificationinfo) |                                                                                                                                                                                               |
| validUntilTime   | null \| string                        | Specify the date until the state is persisted. Allowed are values from now+1m to now+90d! Returned validUntilTimes are always a string formatted in ISO 8601<br /><br />**Example:** `now+2d` |
| value (required) | string                                |                                                                                                                                                                                               |

### AppStates

**type**: Array\<[ListAppState](#listappstate)>

### Error

| Name               | Type                          |
| ------------------ | ----------------------------- |
| code (required)    | number                        |
| details            | [ErrorDetails](#errordetails) |
| message (required) | string                        |

### ErrorDetails

| Name               | Type                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| errorCode          | "AppStateOverallSizeLimitExceeded" \| "AppStateSizeLimitExceeded" \| "UserAppStateSizeLimitExceeded" \| "UserAppStateCountLimitExceeded" \| "UserAppStateSizeLimitPerUserExceeded" | Error code indicating the reason why the request failed * `AppStateOverallSizeLimitExceeded`
   \- The overall size limit for the combined size of app states of this app was exceeded
* `AppStateSizeLimitExceeded`
   \- The app state value exceeded the size limit for a single app state
* `UserAppStateSizeLimitPerUserExceeded`
   \- The size of user app state values of a user for an app exceeds the limit
* `UserAppStateSizeLimitExceeded`
   \-&#x20;
  ***deprecated***
   The user app state content exceeded the size limit for a single user app state. No longer returned by the API.
* `UserAppStateCountLimitExceeded`
   \-&#x20;
  ***deprecated***
   The maximum number of user app states for this user and app was exceeded. No longer returned by the API. |
| missingPermissions | Array\<string>                                                                                                                                                                     | IAM permissions that the user is missing. Present on 403 responses where the token carries the required scope but the user's IAM policies do not grant the permission.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| missingScopes      | Array\<string>                                                                                                                                                                     | OAuth scopes that the bearer token is missing. Present on 403 responses caused by an insufficient token scope. Add the listed scopes to the token to resolve this error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### ErrorResponse

| Name             | Type            |
| ---------------- | --------------- |
| error (required) | [Error](#error) |

### ListAppState

| Name             | Type                                  | Description                                                                                                                                                                                   |
| ---------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key (required)   | string                                |                                                                                                                                                                                               |
| modificationInfo | [ModificationInfo](#modificationinfo) |                                                                                                                                                                                               |
| validUntilTime   | null \| string                        | Specify the date until the state is persisted. Allowed are values from now+1m to now+90d! Returned validUntilTimes are always a string formatted in ISO 8601<br /><br />**Example:** `now+2d` |
| value            | string                                |                                                                                                                                                                                               |

### ListUserAppState

| Name             | Type                                  | Description                                                                                                                                                                                   |
| ---------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key (required)   | string                                |                                                                                                                                                                                               |
| modificationInfo | [ModificationInfo](#modificationinfo) |                                                                                                                                                                                               |
| validUntilTime   | null \| string                        | Specify the date until the state is persisted. Allowed are values from now+1m to now+90d! Returned validUntilTimes are always a string formatted in ISO 8601<br /><br />**Example:** `now+2d` |
| value            | string                                |                                                                                                                                                                                               |

### ModificationInfo

| Name                        | Type   |
| --------------------------- | ------ |
| lastModifiedBy (required)   | string |
| lastModifiedTime (required) | Date   |

### PersistenceState

| Name             | Type                                  | Description                                                                                                                                                                                   |
| ---------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modificationInfo | [ModificationInfo](#modificationinfo) |                                                                                                                                                                                               |
| validUntilTime   | null \| string                        | Specify the date until the state is persisted. Allowed are values from now+1m to now+90d! Returned validUntilTimes are always a string formatted in ISO 8601<br /><br />**Example:** `now+2d` |
| value            | string                                |                                                                                                                                                                                               |

### UserAppState

| Name             | Type                                  | Description                                                                                                                                                                                   |
| ---------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modificationInfo | [ModificationInfo](#modificationinfo) |                                                                                                                                                                                               |
| validUntilTime   | null \| string                        | Specify the date until the state is persisted. Allowed are values from now+1m to now+90d! Returned validUntilTimes are always a string formatted in ISO 8601<br /><br />**Example:** `now+2d` |
| value (required) | string                                |                                                                                                                                                                                               |

### UserAppStates

**type**: Array\<[ListUserAppState](#listuserappstate)>
