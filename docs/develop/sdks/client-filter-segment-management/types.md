## Types

### CustomValidationErrorInfo

| Name               | Type   |
| ------------------ | ------ |
| message (required) | string |

### DetailedFilterSegment

| Name              | Type                                                     | Description                                                                                                                                                                                                                                      |
| ----------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| allowedOperations | null \| Array\<"READ" \| "WRITE" \| "DELETE" \| "SHARE"> | Defines the allowed operations of the current user.                                                                                                                                                                                              |
| description       | null \| string                                           | Description of the filter-segment.<br /><br />**Example:** `only includes data of the dev environment`                                                                                                                                           |
| externalId        | null \| string                                           | Optional unique identifier of the filter-segment. Used for Dynatrace Configuration as Code                                                                                                                                                       |
| includes          | null \| Array\<[Include](#include)>                      | List of includes of the filter-segment.                                                                                                                                                                                                          |
| isPublic          | boolean                                                  | Indicates if the filter-segment is publicly accessible within the tenant.<br /><br />**Example:** `false`                                                                                                                                        |
| isReadyMade       | null \| boolean                                          | Indicates if the segment is ready-made.<br /><br />**Example:** `false`                                                                                                                                                                          |
| name (required)   | string                                                   | Name of the filter-segment.<br /><br />**Example:** `dev_environment`                                                                                                                                                                            |
| owner (required)  | string                                                   | Defines the owner of the filter-segment.<br /><br />**Example:** `john.doe`                                                                                                                                                                      |
| uid (required)    | string                                                   | Unique identifier of the filter-segment.<br /><br />**Example:** `D82a1jdA23a`                                                                                                                                                                   |
| variables         | [FilterSegmentVariables](#filtersegmentvariables)        | Variables of the filter-segment.                                                                                                                                                                                                                 |
| version           | number                                                   | Used for optimistic locking. Update requests define with this on which version the data updated is based on. This must match with the version stored, otherwise the update will fail due to concurrent modification.<br /><br />**Example:** `1` |

### ErrorEnvelope

| Name  | Type                                    |
| ----- | --------------------------------------- |
| error | [ExceptionalReturn](#exceptionalreturn) |

### ErrorInfo

| Name               | Type   |
| ------------------ | ------ |
| message (required) | string |

### ExceptionalReturn

| Name                    | Type                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code                    | number                                                                                                                                                                                                                                                                                                                                                                    |
| errorDetails (required) | Array\<[CustomValidationErrorInfo](#customvalidationerrorinfo) \| [InvalidAuditEventsErrorInfo](#invalidauditeventserrorinfo) \| [MediaTypeErrorInfo](#mediatypeerrorinfo) \| [ParameterErrorInfo](#parametererrorinfo) \| [ProxyErrorInfo](#proxyerrorinfo) \| [QueryFrontendRawErrorInfo](#queryfrontendrawerrorinfo) \| [RequestBodyErrorInfo](#requestbodyerrorinfo)> |
| message (required)      | string                                                                                                                                                                                                                                                                                                                                                                    |

### FilterSegment

List of filter-segments.

| Name              | Type                                                     | Description                                                                                                                                                                                                                                      |
| ----------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| allowedOperations | null \| Array\<"READ" \| "WRITE" \| "DELETE" \| "SHARE"> | Defines the allowed operations of the current user.                                                                                                                                                                                              |
| description       | null \| string                                           | Description of the filter-segment.<br /><br />**Example:** `only includes data of the dev environment`                                                                                                                                           |
| externalId        | null \| string                                           | Optional unique identifier of the filter-segment. Used for Dynatrace Configuration as Code                                                                                                                                                       |
| isPublic          | boolean                                                  | Indicates if the filter-segment is publicly accessible within the tenant.<br /><br />**Example:** `false`                                                                                                                                        |
| isReadyMade       | null \| boolean                                          | Indicates if the segment is ready-made.<br /><br />**Example:** `false`                                                                                                                                                                          |
| name (required)   | string                                                   | Name of the filter-segment.<br /><br />**Example:** `dev_environment`                                                                                                                                                                            |
| owner (required)  | string                                                   | Defines the owner of the filter-segment.<br /><br />**Example:** `john.doe`                                                                                                                                                                      |
| uid (required)    | string                                                   | Unique identifier of the filter-segment.<br /><br />**Example:** `D82a1jdA23a`                                                                                                                                                                   |
| variables         | [FilterSegmentVariables](#filtersegmentvariables)        | Variables of the filter-segment.                                                                                                                                                                                                                 |
| version           | number                                                   | Used for optimistic locking. Update requests define with this on which version the data updated is based on. This must match with the version stored, otherwise the update will fail due to concurrent modification.<br /><br />**Example:** `1` |

### FilterSegmentNamespaceDto

| Name                    | Type                                                                              | Description                                                |
| ----------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| allowedFilterOperations | Array\<[FilterSegmentPushDownFilterableDto](#filtersegmentpushdownfilterabledto)> | Allowed filter operations.                                 |
| name (required)         | string                                                                            | Name of the namespace.<br /><br />**Example:** `dt.entity` |
| types                   | Array\<[FilterSegmentTypeDto](#filtersegmenttypedto)>                             | Types of the namespace.                                    |

### FilterSegmentPropertyDto

| Name | Type   |
| ---- | ------ |
| name | string |
| type | string |

### FilterSegmentPushDownFilterableDto

Allowed filter operations.

| Name                | Type           |
| ------------------- | -------------- |
| filterName          | string         |
| supportedAttributes | Array\<string> |

### FilterSegmentRelationshipDto

| Name   | Type   |
| ------ | ------ |
| name   | string |
| target | string |

### FilterSegmentTypeDto

Types of the namespace.

| Name                       | Type                                                                  |
| -------------------------- | --------------------------------------------------------------------- |
| displayName                | string                                                                |
| filtersEntitiesOnly        | boolean                                                               |
| fromTypes                  | Array\<[FilterSegmentRelationshipDto](#filtersegmentrelationshipdto)> |
| name                       | string                                                                |
| properties                 | Array\<[FilterSegmentPropertyDto](#filtersegmentpropertydto)>         |
| relatedTargetEntityOnly    | boolean                                                               |
| restrictedParentProperties | Array\<string>                                                        |

### FilterSegmentVariables

Variables of the filter-segment.

| Name             | Type   | Description            |
| ---------------- | ------ | ---------------------- |
| type (required)  | string | Type of the variable.  |
| value (required) | string | Value of the variable. |

### FilterSegments

| Name                      | Type                                    | Description              |
| ------------------------- | --------------------------------------- | ------------------------ |
| filterSegments (required) | Array\<[FilterSegment](#filtersegment)> | List of filter-segments. |

### Include

List of includes of the filter-segment.

| Name                  | Type                          | Description                                                                                                                                              |
| --------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| applyTo               | null \| Array\<string>        | [Experimental] The tables that the entity-filter will be applied to.<br /><br />**Example:** `["logs","events"]`                                        |
| dataObject (required) | string                        | The data object that the filter will be applied to. Use '\_all_data_object' to apply it to all dataObjects.<br /><br />**Example:** `logs`             |
| filter (required)     | string                        | Data will be filtered by this value. Field names must only contain letters, numbers and underscores, otherwise they need to be escaped using quotes(\`). |
| relationship          | [Relationship](#relationship) | [Experimental] The relationship of an include which has to be be specified when the data object is an entity view.                                      |

### InvalidAuditEventsErrorInfo

| Name                                | Type           |
| ----------------------------------- | -------------- |
| invalidAuditEventIndices (required) | Array\<number> |
| invalidEventIndices                 | Array\<number> |
| message (required)                  | string         |

### LeanFilterSegment

List of filter-segments.

| Name              | Type                                                     | Description                                                                                               |
| ----------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| allowedOperations | null \| Array\<"READ" \| "WRITE" \| "DELETE" \| "SHARE"> | Defines the allowed operations of the current user.                                                       |
| externalId        | null \| string                                           | Optional unique identifier of the filter-segment. Used for Dynatrace Configuration as Code                |
| isPublic          | boolean                                                  | Indicates if the filter-segment is publicly accessible within the tenant.<br /><br />**Example:** `false` |
| isReadyMade       | null \| boolean                                          | Indicates if the segment is ready-made.<br /><br />**Example:** `false`                                   |
| name (required)   | string                                                   | Name of the filter-segment.<br /><br />**Example:** `dev_environment`                                     |
| owner             | null \| string                                           | Defines the owner of the filter-segment.<br /><br />**Example:** `john.doe`                               |
| uid (required)    | string                                                   | Unique identifier of the filter-segment.<br /><br />**Example:** `D82a1jdA23a`                            |
| variables         | [FilterSegmentVariables](#filtersegmentvariables)        | Variables of the filter-segment.                                                                          |

### LeanFilterSegments

| Name                      | Type                                            | Description              |
| ------------------------- | ----------------------------------------------- | ------------------------ |
| filterSegments (required) | Array\<[LeanFilterSegment](#leanfiltersegment)> | List of filter-segments. |

### MediaTypeErrorInfo

| Name                           | Type           |
| ------------------------------ | -------------- |
| message (required)             | string         |
| supportedMediaTypes (required) | Array\<string> |

### NewFilterSegment

| Name                | Type                                              | Description                                                                                               |
| ------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| description         | null \| string                                    | Description of the filter-segment.<br /><br />**Example:** `only includes data of the dev environment`    |
| externalId          | null \| string                                    | Optional unique identifier of the filter-segment. Used for Dynatrace Configuration as Code                |
| includes            | null \| Array\<[NewInclude](#newinclude)>         | List of includes of the filter-segment.                                                                   |
| isPublic (required) | boolean                                           | Indicates if the filter-segment is publicly accessible within the tenant.<br /><br />**Example:** `false` |
| name (required)     | string                                            | Name of the filter-segment.<br /><br />**Example:** `dev_environment`                                     |
| variables           | [FilterSegmentVariables](#filtersegmentvariables) | Variables of the filter-segment.                                                                          |

### NewInclude

List of includes of the filter-segment.

| Name                  | Type                                | Description                                                                                                                                              |
| --------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| applyTo               | null \| Array\<string>              | [Experimental] The tables that the entity-filter will be applied to.<br /><br />**Example:** `["logs","events"]`                                        |
| dataObject (required) | string                              | The data object that the filter will be applied to. Use '\_all_data_object' to apply it to all dataObjects.<br /><br />**Example:** `logs`             |
| filter (required)     | string                              | Data will be filtered by this value. Field names must only contain letters, numbers and underscores, otherwise they need to be escaped using quotes(\`). |
| relationship          | [NewRelationship](#newrelationship) | [Experimental] The relationship of an include which has to be be specified when the data object is an entity view.                                      |

### NewRelationship

[Experimental] The relationship of an include which has to be be specified when the data object is an entity view.

| Name              | Type   | Description                                                          |
| ----------------- | ------ | -------------------------------------------------------------------- |
| name (required)   | string | Name of the relationship.<br /><br />**Example:** `belongs_to`       |
| target (required) | string | Target of the relationship.<br /><br />**Example:** `dt.entity.host` |

### ParameterErrorInfo

| Name                           | Type   |
| ------------------------------ | ------ |
| message (required)             | string |
| parameterDescriptor (required) | string |

### PartialUpdateFilterSegment

| Name        | Type                                              | Description                                                                                               |
| ----------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| description | null \| string                                    | Description of the filter-segment.<br /><br />**Example:** `only includes data of the dev environment`    |
| externalId  | null \| string                                    | Optional unique identifier of the filter-segment. Used for Dynatrace Configuration as Code                |
| includes    | null \| Array\<[NewInclude](#newinclude)>         | List of includes of the filter-segment.                                                                   |
| isPublic    | null \| boolean                                   | Indicates if the filter-segment is publicly accessible within the tenant.<br /><br />**Example:** `false` |
| name        | null \| string                                    | Name of the filter-segment.<br /><br />**Example:** `dev_environment`                                     |
| variables   | [FilterSegmentVariables](#filtersegmentvariables) | Variables of the filter-segment.                                                                          |

### ProxyErrorInfo

| Name               | Type   |
| ------------------ | ------ |
| message (required) | string |

### QueryFrontendRawErrorInfo

| Name                                | Type   |
| ----------------------------------- | ------ |
| message (required)                  | string |
| rawQueryFrontendResponse (required) | string |

### Relationship

[Experimental] The relationship of an include which has to be be specified when the data object is an entity view.

| Name              | Type   | Description                                                          |
| ----------------- | ------ | -------------------------------------------------------------------- |
| name (required)   | string | Name of the relationship.<br /><br />**Example:** `belongs_to`       |
| target (required) | string | Target of the relationship.<br /><br />**Example:** `dt.entity.host` |

### RequestBodyErrorInfo

| Name                      | Type   |
| ------------------------- | ------ |
| bodyDescriptor (required) | string |
| message (required)        | string |

### UpdateFilterSegment

| Name                | Type                                              | Description                                                                                               |
| ------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| description         | null \| string                                    | Description of the filter-segment.<br /><br />**Example:** `only includes data of the dev environment`    |
| externalId          | null \| string                                    | Optional unique identifier of the filter-segment. Used for Dynatrace Configuration as Code                |
| includes            | null \| Array\<[NewInclude](#newinclude)>         | List of includes of the filter-segment.                                                                   |
| isPublic (required) | boolean                                           | Indicates if the filter-segment is publicly accessible within the tenant.<br /><br />**Example:** `false` |
| name (required)     | string                                            | Name of the filter-segment.<br /><br />**Example:** `dev_environment`                                     |
| owner (required)    | string                                            | Defines the owner of the filter-segment.<br /><br />**Example:** `john.doe`                               |
| uid (required)      | string                                            | Unique identifier of the filter-segment.<br /><br />**Example:** `D82a1jdA23a`                            |
| variables           | [FilterSegmentVariables](#filtersegmentvariables) | Variables of the filter-segment.                                                                          |
