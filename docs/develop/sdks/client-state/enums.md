## Enums

### ~~ErrorDetailsErrorCode~~

> ⚠️ **Deprecated**
> Use literal values.

Error code indicating the reason why the request failed

- `AppStateOverallSizeLimitExceeded` - The overall size limit for the combined size of app states of this app was exceeded
- `AppStateSizeLimitExceeded` - The app state value exceeded the size limit for a single app state
- `UserAppStateSizeLimitPerUserExceeded` - The size of user app state values of a user for an app exceeds the limit
- `UserAppStateSizeLimitExceeded` - ***deprecated*** The user app state content exceeded the size limit for a single user app state. No longer returned by the API.
- `UserAppStateCountLimitExceeded` - ***deprecated*** The maximum number of user app states for this user and app was exceeded. No longer returned by the API.

#### Enum keys

`AppStateOverallSizeLimitExceeded` | `AppStateSizeLimitExceeded` | `UserAppStateCountLimitExceeded` | `UserAppStateSizeLimitExceeded` | `UserAppStateSizeLimitPerUserExceeded`
