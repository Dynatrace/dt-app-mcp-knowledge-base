## Events

To ingest events, you need to use the `createEvent` method of the `eventsClient` namespace within the `@dynatrace-sdk/client-classic-environment-v2` package:

```tsx testable
import { EventIngest, eventsClient } from '@dynatrace-sdk/client-classic-environment-v2';

const terminationEvent: EventIngest = {
  eventType: 'MARKED_FOR_TERMINATION',
  title: 'Planned host downscale',
  entitySelector: 'type(HOST),entityId(HOST-7DB082B3599E3EA9)',
  properties: { 'job.number': '21234346' },
};

eventsClient.createEvent({ body: terminationEvent });
```

The example above shows how to ingest an event that should mark a host with a specific host id for termination.

The ingested event can be queried with the following DQL statement:

```dql
fetch events
| filter event.kind == "DAVIS_EVENT"
| filter event.type == "MARKED_FOR_TERMINATION"
```

This operation requires the scope `storage:events:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
