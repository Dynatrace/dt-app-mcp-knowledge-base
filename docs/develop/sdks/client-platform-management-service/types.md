## Types

### EffectivePermission

| Name                  | Type                                            | Description                                                                                                                                                                                                                                                                                      |
| --------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| context               | Array\<[PermissionContext](#permissioncontext)> |                                                                                                                                                                                                                                                                                                  |
| granted (required)    | "true" \| "false" \| "condition"                | true: The caller has the permission false: The caller does not have the permission condition: The caller conditionally has the permission or in case of scopes starting with 'environment-api:' the caller only has the permission for specific management zones.<br /><br />**Example:** `true` |
| permission (required) | string                                          | **Example:** `state:app-states:write`                                                                                                                                                                                                                                                            |

### EffectivePermissions

**type**: Array\<[EffectivePermission](#effectivepermission)>

### EnvironmentInfo

| Name                     | Type                                                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| blockTime                | Date                                                                                                                                                    |
| createTime (required)    | Date                                                                                                                                                    |
| environmentId (required) | string                                                                                                                                                  |
| state (required)         | "BEING_CREATED" \| "CREATED_NOT_INITIALIZED" \| "ACTIVE" \| "DEACTIVATED" \| "BEING_DELETED" \| "BLOCKED" \| "DELETION_FAILED" \| "PRE_ALLOCATED" |
| type (required)          | "INTERNAL" \| "CUSTOMER" \| "SELF_MONITORING"                                                                                                          |

### Error

Standard error response

| Name               | Type                          | Description                          |
| ------------------ | ----------------------------- | ------------------------------------ |
| code (required)    | number                        | **Example:** `500`                   |
| details            | [ErrorDetails](#errordetails) |                                      |
| message (required) | string                        | **Example:** `Internal server error` |

### ErrorDetails

| Name               | Type           |
| ------------------ | -------------- |
| missingPermissions | Array\<string> |
| missingScopes      | Array\<string> |

### ErrorEnvelope

| Name             | Type            | Description             |
| ---------------- | --------------- | ----------------------- |
| error (required) | [Error](#error) | Standard error response |

### License

| Name                            | Type    |
| ------------------------------- | ------- |
| platformSubscription (required) | boolean |
| trial (required)                | boolean |

### LicenseSetting

| Name             | Type   |
| ---------------- | ------ |
| key (required)   | string |
| value (required) | string |

### LicenseSettingsResponse

| Name                | Type                                      |
| ------------------- | ----------------------------------------- |
| settings (required) | Array\<[LicenseSetting](#licensesetting)> |

### PermissionContext

| Name             | Type   | Description                        |
| ---------------- | ------ | ---------------------------------- |
| key (required)   | string | **Example:** `shared:app-id`       |
| value (required) | string | **Example:** `dynatrace.notebooks` |

### ResolutionRequest

| Name                   | Type                                                        |
| ---------------------- | ----------------------------------------------------------- |
| permissions (required) | Array\<[SinglePermissionRequest](#singlepermissionrequest)> |

### SettingsResponse

| Name                           | Type    | Description                                                                                                                                                                         |
| ------------------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| activeTrialSubscriptionEndDate | Date    | Date when the trial period ends.<br /><br />**Example:** `2025-04-25T10:08:09.193592Z`                                                                                              |
| chatEnabled (required)         | boolean |                                                                                                                                                                                     |
| countryCode                    | string  | ISO3166-1 alpha-2 two letter country code. See: [https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)<br /><br />**Example:** `ES` |

### SinglePermissionRequest

Optional generic set of context data

| Name                  | Type                                                    | Description                           |
| --------------------- | ------------------------------------------------------- | ------------------------------------- |
| context               | null \| Array\<[PermissionContext](#permissioncontext)> |                                       |
| permission (required) | string                                                  | **Example:** `state:app-states:write` |
