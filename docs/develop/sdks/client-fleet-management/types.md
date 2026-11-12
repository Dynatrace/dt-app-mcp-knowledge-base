## Types

### ActiveGateInstallerVersion

ActiveGate Installer version

| Name               | Type   | Description                   |
| ------------------ | ------ | ----------------------------- |
| version (required) | string | ActiveGate installer version. |

### ActiveGateInstallerVersions

List of available ActiveGate Installer versions

| Name                  | Type           | Description                                                                                                                                                                                                         |
| --------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nextPageKey           | string         | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **page-key** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==` |
| pageSize              | number         | The number of entries per page.<br /><br />**Example:** `100`                                                                                                                                                       |
| totalCount (required) | string         | The total number of entries in the result.<br /><br />**Example:** `1000`                                                                                                                                           |
| versions (required)   | Array\<string> | ActiveGate installer versions.                                                                                                                                                                                      |

### ActiveGateToken

Metadata of an ActiveGate token.

| Name                    | Type    | Description                                                                                                                                                             |
| ----------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| creationDate (required) | Date    | The token creation date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).<br /><br />**Example:** `2020-11-22T08:15:30.144Z`                                         |
| expirationDate          | Date    | The token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`). If not set, the token never expires. <br /><br />**Example:** `2020-11-24T08:15:30.144Z` |
| id (required)           | string  | The ActiveGate token identifier, consisting of the [prefix and public parts](https://dt-url.net/rn00tjg) of the token.<br /><br />**Example:** `dt0g02.4KWZO5EF`        |
| lastUsedDate            | Date    | The token last used date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).<br /><br />**Example:** `2020-11-23T08:15:30.144Z`                                        |
| name (required)         | string  | The name of the token.<br /><br />**Example:** `myToken`                                                                                                                |
| owner (required)        | string  | The owner of the token.<br /><br />**Example:** `john.smith`                                                                                                            |
| seedToken               | boolean | The token is a seed token (`true`) or an individual token (`false`).<br /><br />**Default:** `false`<br />**Example:** `false`                                          |

### ActiveGateTokenCreate

Parameters of a new ActiveGate token.

| Name            | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expirationDate  | string  | The expiration date of the token. You can use one of the following formats: * Timestamp in UTC milliseconds.
* Human-readable format of&#x20;
  `2021-01-25T05:57:01.123+01:00`
  . If no time zone is specified, UTC is used. You can use a space character instead of the&#x20;
  `T`
  . Seconds and fractions of a second are optional.
* Relative timeframe, back from now. The format is&#x20;
  `now-NU/A`
  , where&#x20;
  `N`
   is the amount of time,&#x20;
  `U`
   is the unit of time, and&#x20;
  `A`
   is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example,&#x20;
  `now-1y/w`
   is one year back, aligned by a week. You can also specify relative timeframe without an alignment:&#x20;
  `now-NU`
  . Supported time units for the relative timeframe are:&#x20;
  - `m`
    : minutes
  - `h`
    : hours
  - `d`
    : days
  - `w`
    : weeks
  - `M`
    : months
  - `y`
    : years
  &#x20; If not set, the token never expires. Ensure that it's not set in the past and doesn't exceed `2 years` from the moment of creation. <br /><br />**Example:** `now+6M` |
| name (required) | string  | The name of the token.<br /><br />**Example:** `myToken`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| seedToken       | boolean | The token is a seed token (`true`) or an individual token (`false`). We recommend the individual token option (false). <br /><br />**Default:** `false`<br />**Example:** `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### ActiveGateTokenCreated

The newly created ActiveGate token.

| Name             | Type    | Description                                                                                                                                                                                        |
| ---------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expirationDate   | Date    | The token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).<br /><br />**Example:** `2020-11-24T08:15:30.144Z`                                                                  |
| id (required)    | string  | The ActiveGate token identifier, consisting of the [prefix and public parts](https://dt-url.net/rn00tjg) of the token.<br /><br />**Example:** `dt0g02.4KWZO5EF`                                   |
| seedToken        | boolean | The token is a seed token (`true`) or an individual token (`false`).<br /><br />**Example:** `false`                                                                                               |
| token (required) | string  | The secret of the token. Make sure to copy it-—-you won't be able to retrieve it again.<br /><br />**Example:** `dt0g02.4KWZO5EF.XT47R5DRADJIZUFOX4UDNOKTSUSABGLN7XSMJG7UXHRXKNY4WLORH4OF4T75MG7E` |

### ActiveGateTokenList

A list of ActiveGate tokens.

| Name                        | Type                                        | Description                                                                                                                                                                                                         |
| --------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| activeGateTokens (required) | Array\<[ActiveGateToken](#activegatetoken)> | A list of ActiveGate tokens.                                                                                                                                                                                        |
| nextPageKey                 | string                                      | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **page-key** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==` |
| pageSize                    | number                                      | The number of entries per page.<br /><br />**Example:** `100`                                                                                                                                                       |
| totalCount (required)       | string                                      | The total number of entries in the result.<br /><br />**Example:** `1000`                                                                                                                                           |

### ConnectionInfo

Connection info with tenant data and initial tenant endpoint

| Name            | Type   | Description              |
| --------------- | ------ | ------------------------ |
| initialEndpoint | string | Initial tenant endpoint. |
| tenantToken     | string | Tenant token.            |
| tenantUUID      | string | Tenant UUID.             |

### ConstraintViolation

A list of constraint violations

| Name              | Type                                             |
| ----------------- | ------------------------------------------------ |
| location          | string                                           |
| message           | string                                           |
| parameterLocation | "HEADER" \| "PATH" \| "PAYLOAD_BODY" \| "QUERY" |
| path              | string                                           |

### ContainerImageComponent

Information about component type and images registry URI.

| Name     | Type                                                                                                                                                                                                                                         | Description                                    |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| imageUri | string                                                                                                                                                                                                                                       | Registry URI of the container image component. |
| type     | "activegate" \| "codemodules" \| "database-datasource-executor" \| "sql-extension-executor" \| "dynatrace-sql-extension-executor" \| "eec" \| "logmodule" \| "oneagent" \| "ncc" \| "otel-collector" \| "target-allocator" \| "edge-connect" | Container image component type.                |

### ContainerImageData

Information about images registry and components with URI.

| Name                  | Type                                                        | Description                                |
| --------------------- | ----------------------------------------------------------- | ------------------------------------------ |
| components (required) | Array\<[ContainerImageComponent](#containerimagecomponent)> | List of container image components.        |
| registry              | string                                                      | Registry name containing container images. |

### Error

| Name                 | Type                                                | Description                     |
| -------------------- | --------------------------------------------------- | ------------------------------- |
| code                 | number                                              | The HTTP status code            |
| constraintViolations | Array\<[ConstraintViolation](#constraintviolation)> | A list of constraint violations |
| message              | string                                              | The error message               |

### ErrorEnvelope

| Name  | Type            |
| ----- | --------------- |
| error | [Error](#error) |

### NetworkAddresses

List of Dynatrace addresses

| Name                  | Type           | Description                                                                                                                                                                                                         |
| --------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| addresses (required)  | Array\<string> | List of Dynatrace addresses.                                                                                                                                                                                        |
| nextPageKey           | string         | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **page-key** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==` |
| pageSize              | number         | The number of entries per page.<br /><br />**Example:** `100`                                                                                                                                                       |
| totalCount (required) | string         | The total number of entries in the result.<br /><br />**Example:** `1000`                                                                                                                                           |

### ResourceStatus

Lifecycle status of a long-running operation resource.

| Name              | Type                                                                                                                                                                                                                                                                                                                                 | Description                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| status (required) | "ANALYZING_ARCHIVE" \| "ANALYZING_DONE" \| "ANALYZING_FAILED" \| "CANCELED" \| "COLLECTED" \| "COLLECT_ERROR" \| "COLLECT_IN_PROGRESS" \| "DELETED" \| "DELETE_ERROR" \| "DELETE_IN_PROGRESS" \| "MANUAL_CLEANUP" \| "REANALYZING_NEEDED" \| "SENDING_FAILED" \| "SENDING_IN_PROGRESS" \| "SENT_TO_DYNATRACE_CLOUD" | The current lifecycle status of the resource. |

### StartSupportArchiveRequest

Request to start collecting a support archive.

| Name                    | Type   | Description                                                               |
| ----------------------- | ------ | ------------------------------------------------------------------------- |
| description (required)  | string | A description for the support archive.                                    |
| lookbackDays (required) | number | The number of days to look back for log data.<br /><br />**Minimum:** `1` |

### StartSupportArchiveResponse

Response after starting a support archive collection.

| Name          | Type   | Description                                  |
| ------------- | ------ | -------------------------------------------- |
| id (required) | string | The ID of the newly created support archive. |

### SupportArchive

Represents a support archive.

| Name                        | Type                              | Description                                                                                                 |
| --------------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| collectedBy (required)      | string                            | The user who triggered the collection.                                                                      |
| collectionTimestamp         | Date                              | The ISO 8601 UTC timestamp when the archive was collected. Null while the archive is still being collected. |
| description (required)      | string                            | User-provided description.                                                                                  |
| id (required)               | string                            | The support archive ID.                                                                                     |
| lookbackDays (required)     | number                            | The lookback duration in days.                                                                              |
| resourceStatus (required)   | [ResourceStatus](#resourcestatus) | Lifecycle status of a long-running operation resource.                                                      |
| sizeKb                      | string                            | The size of the support archive in KB. Null while the archive is still being collected.                     |
| smartscapeNodeId (required) | string                            | The Smartscape node ID of the entity.                                                                       |

### SupportArchiveListResponse

A list of support archives.

| Name                  | Type                                      | Description                                                                                                                                                                                                         |
| --------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| items (required)      | Array\<[SupportArchive](#supportarchive)> | The list of support archives.                                                                                                                                                                                       |
| nextPageKey           | string                                    | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **page-key** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==` |
| pageSize              | number                                    | The number of entries per page.<br /><br />**Example:** `100`                                                                                                                                                       |
| totalCount (required) | string                                    | The total number of entries in the result.<br /><br />**Example:** `1000`                                                                                                                                           |
