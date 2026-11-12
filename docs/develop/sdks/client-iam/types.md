## Types

### ErrorResponse

| Name    | Type                                          |
| ------- | --------------------------------------------- |
| code    | number                                        |
| details | [ErrorResponseDetails](#errorresponsedetails) |
| message | string                                        |

### ErrorResponseConstraintViolation

| Name              | Type   |
| ----------------- | ------ |
| message           | string |
| parameterLocation | string |
| path              | string |

### ErrorResponseDetails

| Name                 | Type                                                                          |
| -------------------- | ----------------------------------------------------------------------------- |
| constraintViolations | Array\<[ErrorResponseConstraintViolation](#errorresponseconstraintviolation)> |
| missingScopes        | Array\<string>                                                                |

### ErrorThrottlingResponse

| Name              | Type   |
| ----------------- | ------ |
| code              | number |
| message           | string |
| retryAfterSeconds | number |

### PublicExceptionMessage

| Name  | Type                            |
| ----- | ------------------------------- |
| error | [ErrorResponse](#errorresponse) |

### PublicExceptionThrottlingMessage

| Name  | Type                                                |
| ----- | --------------------------------------------------- |
| error | [ErrorThrottlingResponse](#errorthrottlingresponse) |

### RestGroupPublic

Collection containing the paginated result

| Name                 | Type                                        |
| -------------------- | ------------------------------------------- |
| groupName (required) | string                                      |
| type (required)      | "LOCAL" \| "ALL_USERS" \| "SCIM" \| "SAML" |
| uuid (required)      | string                                      |

### RestGroupPublicListResponse

| Name        | Type                                        | Description                                    |
| ----------- | ------------------------------------------- | ---------------------------------------------- |
| nextPageKey | string                                      | Key for requesting the next page of the result |
| results     | Array\<[RestGroupPublic](#restgrouppublic)> | Collection containing the paginated result     |
| totalCount  | number                                      | Total count of records                         |

### RestUserPublic

Collection containing the paginated result

| Name             | Type   |
| ---------------- | ------ |
| description      | string |
| email (required) | string |
| name             | string |
| surname          | string |
| uid (required)   | string |

### RestUserPublicListResponse

| Name        | Type                                      | Description                                    |
| ----------- | ----------------------------------------- | ---------------------------------------------- |
| nextPageKey | string                                    | Key for requesting the next page of the result |
| results     | Array\<[RestUserPublic](#restuserpublic)> | Collection containing the paginated result     |
| totalCount  | number                                    | Total count of records                         |

### SearchResult

| Name        | Type                                      | Description                                    |
| ----------- | ----------------------------------------- | ---------------------------------------------- |
| nextPageKey | string                                    | Key for requesting the next page of the result |
| results     | Array\<[ServiceUserDto](#serviceuserdto)> | Collection containing the paginated result     |
| totalCount  | number                                    | Total count of records                         |

### ServiceUserDto

Collection containing the paginated result

| Name        | Type   |
| ----------- | ------ |
| createdAt   | Date   |
| description | string |
| email       | string |
| name        | string |
| surname     | string |
| uid         | string |
