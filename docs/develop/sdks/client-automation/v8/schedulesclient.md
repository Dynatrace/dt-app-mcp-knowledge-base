## schedulesClient

```js
import { schedulesClient } from '@dynatrace-sdk/client-automation';
```

### getCountries

**schedulesClient.getCountries(config): Promise\<[CountryList](#countrylist)>**

**Required scope:** automation:workflows:read

Returns the list of countries that can be used to look up the holiday calendar

#### Returns

| Return type                 | Status code | Description |
| --------------------------- | ----------- | ----------- |
| [CountryList](#countrylist) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { schedulesClient } from "@dynatrace-sdk/client-automation";

const data = await schedulesClient.getCountries();
```

### getHolidayCalendar

**schedulesClient.getHolidayCalendar(config): Promise\<[HolidayCalendarList](#holidaycalendarlist)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                  | Type   | Description             |
| --------------------- | ------ | ----------------------- |
| config.from           | string | From date in ISO format |
| config.key (required) | string | The country name        |
| config.to             | string | To date in ISO format   |

#### Returns

| Return type                                 | Status code | Description |
| ------------------------------------------- | ----------- | ----------- |
| [HolidayCalendarList](#holidaycalendarlist) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { schedulesClient } from "@dynatrace-sdk/client-automation";

const data = await schedulesClient.getHolidayCalendar({
  key: "...",
});
```

### getTimezones

**schedulesClient.getTimezones(config): Promise\<Array\<string>>**

**Required scope:** automation:workflows:read

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { schedulesClient } from "@dynatrace-sdk/client-automation";

const data = await schedulesClient.getTimezones();
```

### ~~previewSchedule~~

> ⚠️ **Deprecated**

**schedulesClient.previewSchedule(config): Promise\<[SchedulePreviewResponse](#schedulepreviewresponse)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                   | Type                                              |
| ---------------------- | ------------------------------------------------- |
| config.body (required) | [SchedulePreviewRequest](#schedulepreviewrequest) |

#### Returns

| Return type                                         | Status code | Description |
| --------------------------------------------------- | ----------- | ----------- |
| [SchedulePreviewResponse](#schedulepreviewresponse) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { schedulesClient } from "@dynatrace-sdk/client-automation";

const data = await schedulesClient.previewSchedule({
  body: {
    schedule: {
      trigger: { type: "cron", cron: "0 0 * * *" },
    },
  },
});
```
