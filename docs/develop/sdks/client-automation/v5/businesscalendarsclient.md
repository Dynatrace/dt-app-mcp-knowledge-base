## businessCalendarsClient

```js
import { businessCalendarsClient } from '@dynatrace-sdk/client-automation';
```

### createBusinessCalendar

**businessCalendarsClient.createBusinessCalendar(config): Promise\<[BusinessCalendarResponse](#businesscalendarresponse)>**

**Required scope:** automation:calendars:write

#### Parameters

| Name                   | Type                                              |
| ---------------------- | ------------------------------------------------- |
| config.body (required) | [BusinessCalendarCreate](#businesscalendarcreate) |

#### Returns

| Return type                                           | Status code | Description |
| ----------------------------------------------------- | ----------- | ----------- |
| [BusinessCalendarResponse](#businesscalendarresponse) | 201         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { businessCalendarsClient } from "@dynatrace-sdk/client-automation";

const data =
  await businessCalendarsClient.createBusinessCalendar({
    body: { title: "..." },
  });
```

### deleteBusinessCalendar

**businessCalendarsClient.deleteBusinessCalendar(config): Promise\<void>**

**Required scope:** automation:calendars:write

#### Parameters

| Name                 | Type   | Description                                       |
| -------------------- | ------ | ------------------------------------------------- |
| config.id (required) | string | A UUID string identifying this business calendar. |

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
import { businessCalendarsClient } from "@dynatrace-sdk/client-automation";

const data =
  await businessCalendarsClient.deleteBusinessCalendar({
    id: "...",
  });
```

### duplicateBusinessCalendar

**businessCalendarsClient.duplicateBusinessCalendar(config): Promise\<[BusinessCalendarResponse](#businesscalendarresponse)>**

**Required scope:** automation:calendars:write

#### Parameters

| Name                   | Type                                      | Description                                       |
| ---------------------- | ----------------------------------------- | ------------------------------------------------- |
| config.body (required) | [DuplicationRequest](#duplicationrequest) |                                                   |
| config.id (required)   | string                                    | A UUID string identifying this business calendar. |

#### Returns

| Return type                                           | Status code | Description |
| ----------------------------------------------------- | ----------- | ----------- |
| [BusinessCalendarResponse](#businesscalendarresponse) | 201         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { businessCalendarsClient } from "@dynatrace-sdk/client-automation";

const data =
  await businessCalendarsClient.duplicateBusinessCalendar({
    id: "...",
    body: {},
  });
```

### getBusinessCalendar

**businessCalendarsClient.getBusinessCalendar(config): Promise\<[BusinessCalendarResponse](#businesscalendarresponse)>**

**Required scope:** automation:calendars:read

#### Parameters

| Name                 | Type   | Description                                       |
| -------------------- | ------ | ------------------------------------------------- |
| config.id (required) | string | A UUID string identifying this business calendar. |

#### Returns

| Return type                                           | Status code | Description |
| ----------------------------------------------------- | ----------- | ----------- |
| [BusinessCalendarResponse](#businesscalendarresponse) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { businessCalendarsClient } from "@dynatrace-sdk/client-automation";

const data =
  await businessCalendarsClient.getBusinessCalendar({
    id: "...",
  });
```

### getBusinessCalendarHistoryRecord

**businessCalendarsClient.getBusinessCalendarHistoryRecord(config): Promise\<[BusinessCalendarResponse](#businesscalendarresponse)>**

**Required scope:** automation:calendars:read

#### Parameters

| Name                      | Type   | Description                                       |
| ------------------------- | ------ | ------------------------------------------------- |
| config.id (required)      | string | A UUID string identifying this business calendar. |
| config.version (required) | string | Pattern: `^[\d]+$`                                |

#### Returns

| Return type                                           | Status code | Description |
| ----------------------------------------------------- | ----------- | ----------- |
| [BusinessCalendarResponse](#businesscalendarresponse) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { businessCalendarsClient } from "@dynatrace-sdk/client-automation";

const data =
  await businessCalendarsClient.getBusinessCalendarHistoryRecord(
    { id: "...", version: "..." },
  );
```

### getBusinessCalendarHistoryRecords

**businessCalendarsClient.getBusinessCalendarHistoryRecords(config): Promise\<[PaginatedChangeHistory](#paginatedchangehistory)>**

**Required scope:** automation:calendars:read

#### Parameters

| Name                 | Type    | Description                                               |
| -------------------- | ------- | --------------------------------------------------------- |
| config.all           | boolean | When false, the latest historical record is not returned. |
| config.id (required) | string  | A UUID string identifying this business calendar.         |

#### Returns

| Return type                                       | Status code | Description |
| ------------------------------------------------- | ----------- | ----------- |
| [PaginatedChangeHistory](#paginatedchangehistory) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { businessCalendarsClient } from "@dynatrace-sdk/client-automation";

const data =
  await businessCalendarsClient.getBusinessCalendarHistoryRecords(
    { id: "..." },
  );
```

### getBusinessCalendars

**businessCalendarsClient.getBusinessCalendars(config): Promise\<[PaginatedBusinessCalendarResponseList](#paginatedbusinesscalendarresponselist)>**

**Required scope:** automation:calendars:read

#### Parameters

| Name            | Type   | Description                                         |
| --------------- | ------ | --------------------------------------------------- |
| config.limit    | number | Number of results to return per page.               |
| config.offset   | number | The initial index from which to return the results. |
| config.ordering | string | Which field to use when ordering the results.       |
| config.search   | string | A search term.                                      |

#### Returns

| Return type                                                                     | Status code | Description |
| ------------------------------------------------------------------------------- | ----------- | ----------- |
| [PaginatedBusinessCalendarResponseList](#paginatedbusinesscalendarresponselist) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { businessCalendarsClient } from "@dynatrace-sdk/client-automation";

const data =
  await businessCalendarsClient.getBusinessCalendars();
```

### patchBusinessCalendar

**businessCalendarsClient.patchBusinessCalendar(config): Promise\<[BusinessCalendarResponse](#businesscalendarresponse)>**

**Required scope:** automation:calendars:write

#### Parameters

| Name                   | Type                                              | Description                                       |
| ---------------------- | ------------------------------------------------- | ------------------------------------------------- |
| config.body (required) | [BusinessCalendarUpdate](#businesscalendarupdate) |                                                   |
| config.id (required)   | string                                            | A UUID string identifying this business calendar. |

#### Returns

| Return type                                           | Status code | Description |
| ----------------------------------------------------- | ----------- | ----------- |
| [BusinessCalendarResponse](#businesscalendarresponse) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { businessCalendarsClient } from "@dynatrace-sdk/client-automation";

const data =
  await businessCalendarsClient.patchBusinessCalendar({
    id: "...",
    body: {},
  });
```

### restoreBusinessCalendarHistoryRecord

**businessCalendarsClient.restoreBusinessCalendarHistoryRecord(config): Promise\<[BusinessCalendarResponse](#businesscalendarresponse)>**

**Required scope:** automation:calendars:write

#### Parameters

| Name                      | Type   | Description                                       |
| ------------------------- | ------ | ------------------------------------------------- |
| config.id (required)      | string | A UUID string identifying this business calendar. |
| config.version (required) | string | Pattern: `^[\d]+$`                                |

#### Returns

| Return type                                           | Status code | Description |
| ----------------------------------------------------- | ----------- | ----------- |
| [BusinessCalendarResponse](#businesscalendarresponse) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { businessCalendarsClient } from "@dynatrace-sdk/client-automation";

const data =
  await businessCalendarsClient.restoreBusinessCalendarHistoryRecord(
    { id: "...", version: "..." },
  );
```

### updateBusinessCalendar

**businessCalendarsClient.updateBusinessCalendar(config): Promise\<[BusinessCalendarResponse](#businesscalendarresponse)>**

**Required scope:** automation:calendars:write

#### Parameters

| Name                   | Type                                              | Description                                       |
| ---------------------- | ------------------------------------------------- | ------------------------------------------------- |
| config.body (required) | [BusinessCalendarUpdate](#businesscalendarupdate) |                                                   |
| config.id (required)   | string                                            | A UUID string identifying this business calendar. |

#### Returns

| Return type                                           | Status code | Description |
| ----------------------------------------------------- | ----------- | ----------- |
| [BusinessCalendarResponse](#businesscalendarresponse) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { businessCalendarsClient } from "@dynatrace-sdk/client-automation";

const data =
  await businessCalendarsClient.updateBusinessCalendar({
    id: "...",
    body: {},
  });
```
