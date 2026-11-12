## eventTriggersClient

```js
import { eventTriggersClient } from '@dynatrace-sdk/client-automation';
```

### ~~previewFilter~~

> ⚠️ **Deprecated**

**eventTriggersClient.previewFilter(config): Promise\<[EventTriggerPreviewResponse](#eventtriggerpreviewresponse)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                   | Type                                                      |
| ---------------------- | --------------------------------------------------------- |
| config.body (required) | [EventTriggerPreviewRequest](#eventtriggerpreviewrequest) |

#### Returns

| Return type                                                 | Status code | Description |
| ----------------------------------------------------------- | ----------- | ----------- |
| [EventTriggerPreviewResponse](#eventtriggerpreviewresponse) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { eventTriggersClient } from "@dynatrace-sdk/client-automation";

const data = await eventTriggersClient.previewFilter({
  body: {
    triggerConfiguration: {
      type: "event",
      value: { query: "..." },
    },
  },
});
```
