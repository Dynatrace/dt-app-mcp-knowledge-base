## Using the SDK in ad-hoc functions

You can use the SDK for TypeScript in ad-hoc functions in Dynatrace Workflows and Dynatrace Notebooks, which applies to all convenience packages (except UI-related ones) and low-level clients.

Following is an example of how to ingest metrics in a workflow:

```tsx testable
import { metricsClient } from '@dynatrace-sdk/client-classic-environment-v2';

export default async function () {
  return metricsClient.ingest({ body: 'cpu.temperature,hostname=hostA,cpu=1 55' });
}
```
