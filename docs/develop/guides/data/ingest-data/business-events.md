## Business events

To ingest business events, you can use the `ingest` function from the `businessEventsClient` namespace provided by the `@dynatrace-sdk/client-classic-environment-v2` package. In the following example, you're ingesting a [CloudEvent](https://github.com/cloudevents/spec).

```ts testable
import { businessEventsClient } from '@dynatrace-sdk/client-classic-environment-v2';

const bizevent = {
  specversion: '1.0',
  source: 'booking.app.tutorial',
  id: crypto.randomUUID().toString(),
  type: 'booking.process.started',
  data: {
    amount: 869,
    startdate: '2020-04-06',
    arrivaldate: '2022-04-16',
    currency: 'USD',
    numbertravelers: 2,
    product: 'Vienna - New York',
  },
};

businessEventsClient
  .ingest({
    body: bizevent,
    // highlight-next-line
    type: 'application/cloudevent+json',
  })
  .then(() => console.log('Event ingested'))
  .catch((e) => console.error('Failed to ingest event: ' + e));
```

### Key things to remember

- It's important that you specify the correct content `type` as highlighted in the previous code.
- Dynatrace support both CloudEvent and pure JSON data. For cloud events, the content type is `application/cloudevent+json` and for pure JSON data it is `application/json; charset=utf-8`.

You can query this event with the following DQL statement:

```dql
fetch bizevents
| filter event.type == "booking.process.started"
```

This operation requires the scope `storage:events:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
