## businessEventsClient

```js
import { businessEventsClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### ingest

**businessEventsClient.ingest(config): Promise\<void>**

Ingests a business event

**Required scope:** storage:events:write
**Required permission:** storage:events:write

The maximum payload size of a single request is **5 MiB**. Requests with a greater payload are rejected, and the API returns a 413 response code.

The ingestion of business events is subject to licensing (see [licensing documentation](https://www.dynatrace.com/support/help/shortlink/dps-events)).

#### Parameters

| Name                   | Type                                                                                                                                                                                                                                                     |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [CloudEvent](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#cloudevent) \| Array\<[CloudEvent](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#cloudevent)> \| IngestBody |
| config.type (required) | "application/cloudevent+json" \| "application/cloudevents+json" \| "application/cloudevent-batch+json" \| "application/cloudevents-batch+json" \| "application/json; charset=utf-8"                                                                      |

#### Returns

| Return type | Status code | Description                                                          |
| ----------- | ----------- | -------------------------------------------------------------------- |
| void        | 202         | The provided business events are all accepted and will be processed. |

#### Throws

| Error Type                | Error Message                                                                                                                                                               |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BizEventIngestResultError | Some business events are invalid. Valid business events are accepted and will be processed. \| Content too large \| Too many requests \| Service is temporarily unavailable |
| ErrorEnvelopeError        | Client side error. \| Server side error.                                                                                                                                    |

**Code example**

```ts
import { businessEventsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await businessEventsClient.ingest({
  type: "application/cloudevent+json",
  body: {
    specversion: "1.0",
    id: "1",
    source: "custom.source",
    type: "com.mycompany.shop.checkout",
    dtcontext:
      'dt.session_id="234234234324235345345",dt.entity.rum_application="APPLICATION-53453458340758",host.name="123.123.123.123"',
    dataschema:
      "http://dynatrace.com/schema/bizevents/generic/1.0",
    traceparent:
      "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-00",
    data: {
      id: "OR-838475",
      paymentType: "paypal",
      plannedDeliveryDate: "01.01.2021",
      total: 234,
    },
  },
});
```
