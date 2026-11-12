## 1. Define the intent

First, you need to define the intent payload. An intent payload is a set of key-value pairs that contains information you want to share.

Define the intent payload using the `IntentPayload` type from `@dynatrace-sdk/navigation` as follows:

```ts testable
import { IntentPayload } from '@dynatrace-sdk/navigation';

// Intent payload definition
const intent: IntentPayload = {
  'dt.query': 'fetch logs',
  'custom.type': { foo: 'bar' },
};
```
