## filterSegmentsClient

```js
import { filterSegmentsClient } from '@dynatrace-sdk/client-filter-segment-management';
```

### createFilterSegment

**filterSegmentsClient.createFilterSegment(config): Promise\<[DetailedFilterSegment](#detailedfiltersegment)>**

Create a new filter-segment.

Create a new segment and define data.

Required scopes:

- `storage:filter-segments:write`
- `storage:filter-segments:share` if `isPublic` is set to `true`

### &#x20;New Filter-Segment

Provide a name and an optional description for the filter-segment.

#### &#x20;Variables

Create variables to apply in your filter-segment data filters

#### &#x20;Includes (Segment data)

Include all data that should be accessible when applying the filter-segment

#### &#x20;IsPublic (Visibility)

- `false`: The filter-segment is private and only visible to the owner
- `true`: The filter-segment is visible to everyone in the environment

#### Parameters

| Name                   | Type                                  |
| ---------------------- | ------------------------------------- |
| config.body (required) | [NewFilterSegment](#newfiltersegment) |

#### Returns

| Return type                                     | Status code | Description                          |
| ----------------------------------------------- | ----------- | ------------------------------------ |
| [DetailedFilterSegment](#detailedfiltersegment) | 201         | Filter-segment successfully created. |

#### Throws

| Error Type         | Error Message                                                      |
| ------------------ | ------------------------------------------------------------------ |
| ErrorEnvelopeError | Filter-segment Bad Request. \| unauthorized \| missing permissions |

**Code example**

```ts
import { filterSegmentsClient } from "@dynatrace-sdk/client-filter-segment-management";

const data = await filterSegmentsClient.createFilterSegment(
  {
    body: {
      name: "dev_environment",
      description:
        "only includes data of the dev environment",
      variables: {
        type: "query",
        value: "fetch logs | limit 1",
      },
      isPublic: false,
      includes: [
        {
          filter:
            '{"type":"Group","range":{"from":0,"to":19},"logicalOperator":"AND","explicit":false,"children":[{"type":"Statement","range":{"from":0,"to":19},"key":{"type":"Key","textValue":"content","value":"content","range":{"from":0,"to":7}},"operator":{"type":"ComparisonOperator","textValue":"=","value":"=","range":{"from":8,"to":9}},"value":{"type":"String","textValue":"\\"[debug]\\"","value":"[debug]","range":{"from":10,"to":19},"isEscaped":true}}]}',
          dataObject: "logs",
        },
        {
          filter:
            '{"type":"Group","range":{"from":0,"to":18},"logicalOperator":"AND","explicit":false,"children":[{"type":"Statement","range":{"from":0,"to":18},"key":{"type":"Key","textValue":"content","value":"content","range":{"from":0,"to":7}},"operator":{"type":"ComparisonOperator","textValue":"=","value":"=","range":{"from":8,"to":9}},"value":{"type":"String","textValue":"\\"[info]\\"","value":"[info]","range":{"from":10,"to":18},"isEscaped":true}}]}',
          dataObject: "events",
        },
      ],
    },
  },
);
```

### deleteFilterSegment

**filterSegmentsClient.deleteFilterSegment(config): Promise\<void>**

Delete a filter-segment.

Remove the filter-segment from the environment for all users.

Required scopes:

- `storage:filter-segments:delete`

#### Parameters

| Name                               | Type   | Description               |
| ---------------------------------- | ------ | ------------------------- |
| config.filterSegmentUid (required) | string | UID of the filter-segment |

#### Returns

| Return type | Status code | Description                          |
| ----------- | ----------- | ------------------------------------ |
| void        | 204         | Filter-segment successfully deleted. |

#### Throws

| Error Type         | Error Message                                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | bad request \| unauthorized \| missing permissions \| Not found: the server cannot find the requested filter-segment. |

**Code example**

```ts
import { filterSegmentsClient } from "@dynatrace-sdk/client-filter-segment-management";

const data = await filterSegmentsClient.deleteFilterSegment(
  { filterSegmentUid: "D82a1jdA23a" },
);
```

### getFilterSegment

**filterSegmentsClient.getFilterSegment(config): Promise\<[DetailedFilterSegment](#detailedfiltersegment)>**

Get filter-segment by UID.

Get filter-segment by its UID.

Required scopes:

- `storage:filter-segments:read`

#### Parameters

| Name                               | Type                                                                           | Description               |
| ---------------------------------- | ------------------------------------------------------------------------------ | ------------------------- |
| config.addFields                   | null \| Array\<"INCLUDES" \| "VARIABLES" \| "EXTERNALID" \| "RESOURCECONTEXT"> | Add additional fields.    |
| config.filterSegmentUid (required) | string                                                                         | UID of the filter-segment |

#### Returns

| Return type                                     | Status code | Description                            |
| ----------------------------------------------- | ----------- | -------------------------------------- |
| [DetailedFilterSegment](#detailedfiltersegment) | 200         | Filter-segment successfully retrieved. |

#### Throws

| Error Type         | Error Message                                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | bad request \| unauthorized \| missing permissions \| Not found: the server cannot find the requested filter-segment. |

**Code example**

```ts
import { filterSegmentsClient } from "@dynatrace-sdk/client-filter-segment-management";

const data = await filterSegmentsClient.getFilterSegment({
  filterSegmentUid: "D82a1jdA23a",
});
```

### getFilterSegments

**filterSegmentsClient.getFilterSegments(config): Promise\<[FilterSegments](#filtersegments)>**

Get all filter-segments.

Returns all filter-segments.
If details like description are not needed then consider using the `:lean` endpoint.

Required scopes:

- `storage:filter-segments:read`

#### Parameters

| Name             | Type                                                             | Description            |
| ---------------- | ---------------------------------------------------------------- | ---------------------- |
| config.addFields | null \| Array\<"VARIABLES" \| "EXTERNALID" \| "RESOURCECONTEXT"> | Add additional fields. |

#### Returns

| Return type                       | Status code | Description                             |
| --------------------------------- | ----------- | --------------------------------------- |
| [FilterSegments](#filtersegments) | 200         | Filter-segments successfully retrieved. |

#### Throws

| Error Type         | Error Message                                      |
| ------------------ | -------------------------------------------------- |
| ErrorEnvelopeError | bad request \| unauthorized \| missing permissions |

**Code example**

```ts
import { filterSegmentsClient } from "@dynatrace-sdk/client-filter-segment-management";

const data = await filterSegmentsClient.getFilterSegments();
```

### getFilterSegmentsEntityModel

**filterSegmentsClient.getFilterSegmentsEntityModel(config): Promise\<[FilterSegmentNamespaceDto](#filtersegmentnamespacedto)>**

Get filter-segment-entity-model.

Returns the filter-segment-entity-model.

Required scopes:

- `storage:filter-segments:read`

#### Returns

| Return type                                             | Status code | Description                                          |
| ------------------------------------------------------- | ----------- | ---------------------------------------------------- |
| [FilterSegmentNamespaceDto](#filtersegmentnamespacedto) | 200         | Filter-segments-entity-model successfully retrieved. |

#### Throws

| Error Type         | Error Message                                      |
| ------------------ | -------------------------------------------------- |
| ErrorEnvelopeError | bad request \| unauthorized \| missing permissions |

**Code example**

```ts
import { filterSegmentsClient } from "@dynatrace-sdk/client-filter-segment-management";

const data =
  await filterSegmentsClient.getFilterSegmentsEntityModel();
```

### getLeanFilterSegments

**filterSegmentsClient.getLeanFilterSegments(config): Promise\<[LeanFilterSegments](#leanfiltersegments)>**

Get all filter-segments in a minimal/lean form.

Returns all filter-segments in a minimal representational form. This endpoint saves resources
and as a result quicker response times can be expected over the more detailed get-all
endpoint.

Required scopes:

- `storage:filter-segments:read`

#### Parameters

| Name             | Type                                                                        | Description            |
| ---------------- | --------------------------------------------------------------------------- | ---------------------- |
| config.addFields | null \| Array\<"VARIABLES" \| "EXTERNALID" \| "RESOURCECONTEXT" \| "OWNER"> | Add additional fields. |

#### Returns

| Return type                               | Status code | Description                             |
| ----------------------------------------- | ----------- | --------------------------------------- |
| [LeanFilterSegments](#leanfiltersegments) | 200         | Filter-segments successfully retrieved. |

#### Throws

| Error Type         | Error Message                                      |
| ------------------ | -------------------------------------------------- |
| ErrorEnvelopeError | bad request \| unauthorized \| missing permissions |

**Code example**

```ts
import { filterSegmentsClient } from "@dynatrace-sdk/client-filter-segment-management";

const data =
  await filterSegmentsClient.getLeanFilterSegments();
```

### partiallyUpdateFilterSegment

**filterSegmentsClient.partiallyUpdateFilterSegment(config): Promise\<void>**

Partially update a filter-segment.

Update one or more fields of a filter-segment.

Required scopes:

- `storage:filter-segments:write`
- `storage:filter-segments:share` to change `isPublic` to `true`

Following fields can be updated:

- `name`
- `description`
- `isPublic`
- `variables`\*
- `includes`\*

\* If given the value will be overridden.

Fields not given will be ignored.

#### Parameters

| Name                                       | Type                                                      | Description                                                   |
| ------------------------------------------ | --------------------------------------------------------- | ------------------------------------------------------------- |
| config.body (required)                     | [PartialUpdateFilterSegment](#partialupdatefiltersegment) |                                                               |
| config.filterSegmentUid (required)         | string                                                    | UID of the filter-segment                                     |
| config.optimisticLockingVersion (required) | number                                                    | version which should be updated. used for optimistic locking. |

#### Returns

| Return type | Status code | Description                          |
| ----------- | ----------- | ------------------------------------ |
| void        | 200         | Filter-segment successfully updated. |

#### Throws

| Error Type         | Error Message                                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | bad request \| unauthorized \| missing permissions \| Not found: the server cannot find the requested filter-segment. |

**Code example**

```ts
import { filterSegmentsClient } from "@dynatrace-sdk/client-filter-segment-management";

const data =
  await filterSegmentsClient.partiallyUpdateFilterSegment({
    filterSegmentUid: "D82a1jdA23a",
    optimisticLockingVersion: 1,
    body: {
      description:
        "only includes data of the development environment",
    },
  });
```

### updateFilterSegment

**filterSegmentsClient.updateFilterSegment(config): Promise\<void>**

Update a filter-segment. All fields will be overwritten (also undefined or null fields).

Update one or more fields of a filter-segment.

Required scopes:

- `storage:filter-segments:write`
- `storage:filter-segments:share` to change `isPublic` to `true`

Following fields can be updated:

- `name`
- `description`
- `isPublic`
- `variables`\*
- `includes`\*

\* Values of the fields will be overridden or removed if not given.

Provide all other fields with unchanged values.

#### Parameters

| Name                                       | Type                                        | Description                                                   |
| ------------------------------------------ | ------------------------------------------- | ------------------------------------------------------------- |
| config.body (required)                     | [UpdateFilterSegment](#updatefiltersegment) |                                                               |
| config.filterSegmentUid (required)         | string                                      | UID of the filter-segment                                     |
| config.optimisticLockingVersion (required) | number                                      | version which should be updated. used for optimistic locking. |

#### Returns

| Return type | Status code | Description                          |
| ----------- | ----------- | ------------------------------------ |
| void        | 200         | Filter-segment successfully updated. |

#### Throws

| Error Type         | Error Message                                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | bad request \| unauthorized \| missing permissions \| Not found: the server cannot find the requested filter-segment. |

**Code example**

```ts
import { filterSegmentsClient } from "@dynatrace-sdk/client-filter-segment-management";

const data = await filterSegmentsClient.updateFilterSegment(
  {
    filterSegmentUid: "D82a1jdA23a",
    optimisticLockingVersion: 1,
    body: {
      uid: "D82a1jdA23a",
      name: "dev_environment",
      description:
        "only includes data of the development environment",
      variables: {
        type: "query",
        value: "fetch logs | limit 1",
      },
      isPublic: false,
      owner: "john.doe",
      includes: [
        {
          filter:
            '{"type":"Group","range":{"from":0,"to":19},"logicalOperator":"AND","explicit":false,"children":[{"type":"Statement","range":{"from":0,"to":19},"key":{"type":"Key","textValue":"content","value":"content","range":{"from":0,"to":7}},"operator":{"type":"ComparisonOperator","textValue":"=","value":"=","range":{"from":8,"to":9}},"value":{"type":"String","textValue":"\\"[debug]\\"","value":"[debug]","range":{"from":10,"to":19},"isEscaped":true}}]}',
          dataObject: "logs",
        },
        {
          filter:
            '{"type":"Group","range":{"from":0,"to":18},"logicalOperator":"AND","explicit":false,"children":[{"type":"Statement","range":{"from":0,"to":18},"key":{"type":"Key","textValue":"content","value":"content","range":{"from":0,"to":7}},"operator":{"type":"ComparisonOperator","textValue":"=","value":"=","range":{"from":8,"to":9}},"value":{"type":"String","textValue":"\\"[info]\\"","value":"[info]","range":{"from":10,"to":18},"isEscaped":true}}]}',
          dataObject: "events",
        },
      ],
    },
  },
);
```
