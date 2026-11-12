## Types

### ConstraintViolation

| Name               | Type   |
| ------------------ | ------ |
| message (required) | string |
| parameterLocation  | string |
| path               | string |

### EdgeConnect

Maps the specified host patterns to this EdgeConnect

| Name                       | Type                                  | Description                                                                                                                                                                                                          |
| -------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hostMappings               | Array\<[HostMapping](#hostmapping)>   |                                                                                                                                                                                                                      |
| hostPatterns (required)    | Array\<string>                        |                                                                                                                                                                                                                      |
| id                         | string                                | **Example:** `11111111-2222-4444-3333-555555555555`                                                                                                                                                                  |
| managedByDynatraceOperator | boolean                               | Flag to identify if an EdgeConnect is managed by the Dynatrace operator. False by default!<br /><br />**Example:** `false`                                                                                           |
| metadata                   | [Metadata](#metadata)                 |                                                                                                                                                                                                                      |
| modificationInfo           | [ModificationInfo](#modificationinfo) |                                                                                                                                                                                                                      |
| name (required)            | string                                | **Example:** `internal-services`                                                                                                                                                                                     |
| oauthClientId              | string                                | Id of OAuth client used to connect by the EdgeConnect<br /><br />**Example:** `dt0s02.AIOUP56P`                                                                                                                      |
| oauthClientResource        | string                                | Resource of OAuth client used to connect by the EdgeConnect. Only provided when creating a new EdgeConnect.<br /><br />**Example:** `urn:dtenvironment:wu31a2p3`                                                     |
| oauthClientSecret          | string                                | Secret of OAuth client used to connect by the EdgeConnect. Only provided when creating a new EdgeConnect.<br /><br />**Example:** `dt0s02.AIOUP56P.5ODBJEQYBA4KLD2F6F6EHQZKYK5Q45RARKVCHICXKLMAXVVLIH2L6N5RLMDDY4QA` |

### EdgeConnectInstance

| Name       | Type   | Description           |
| ---------- | ------ | --------------------- |
| instanceId | string |                       |
| version    | string | **Example:** `1.46.2` |

### EdgeConnects

| Name         | Type                                | Description                                       |
| ------------ | ----------------------------------- | ------------------------------------------------- |
| edgeConnects | Array\<[EdgeConnect](#edgeconnect)> |                                                   |
| totalCount   | number                              | Total number of currently configured EdgeConnects |

### Error

| Name               | Type                          |
| ------------------ | ----------------------------- |
| code (required)    | number                        |
| details            | [ErrorDetails](#errordetails) |
| message (required) | string                        |

### ErrorDetails

| Name                 | Type                                                |
| -------------------- | --------------------------------------------------- |
| constraintViolations | Array\<[ConstraintViolation](#constraintviolation)> |
| missingScopes        | Array\<string>                                      |

### ErrorResponse

| Name             | Type            |
| ---------------- | --------------- |
| error (required) | [Error](#error) |

### HostMapping

Todo

| Name            | Type   |
| --------------- | ------ |
| from (required) | string |
| to (required)   | string |

### MatchedEdgeConnect

Contains information about the EdgeConnect and the matched pattern

| Name                      | Type                  | Description                                         |
| ------------------------- | --------------------- | --------------------------------------------------- |
| id (required)             | string                | **Example:** `11111111-2222-4444-3333-555555555555` |
| matchedPattern (required) | string                |                                                     |
| metadata                  | [Metadata](#metadata) |                                                     |
| name (required)           | string                | **Example:** `internal-services`                    |

### MatchedResponse

| Name              | Type                                              | Description                                                        |
| ----------------- | ------------------------------------------------- | ------------------------------------------------------------------ |
| matched           | [MatchedEdgeConnect](#matchededgeconnect)         | Contains information about the EdgeConnect and the matched pattern |
| secondaryMatching | Array\<[MatchedEdgeConnect](#matchededgeconnect)> |                                                                    |

### Metadata

| Name              | Type                                                       | Description                    |
| ----------------- | ---------------------------------------------------------- | ------------------------------ |
| instances         | Array\<[EdgeConnectInstance](#edgeconnectinstance)>        |                                |
| oauthClientStatus | "ACTIVE" \| "INACTIVE" \| "PENDING_DELETION" \| "DELETED" | The status of the OAuth client |

### ModificationInfo

| Name                        | Type   | Description                                      |
| --------------------------- | ------ | ------------------------------------------------ |
| lastModifiedBy (required)   | string | **Example:** `12345678-abcd-efgh-1234-123456789` |
| lastModifiedTime (required) | Date   | **Example:** `2022-01-01T01:02:03.165Z`          |

### OAuthClientRotationResponse

| Name                    | Type   |
| ----------------------- | ------ |
| clientId (required)     | string |
| clientSecret (required) | string |
