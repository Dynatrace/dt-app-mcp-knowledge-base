## Metrics

To ingest metrics, you can use the `ingest` method of the `metricsClient` namespace, which is provided by the `@dynatrace-sdk/client-classic-environment-v2` package.
You have to pass the metric values in the form of a string based on the [Metrics ingestion protocol](https://docs.dynatrace.com/docs/shortlink/metric-ingestion-protocol). Further ways of ingesting metrics can be found [here](https://docs.dynatrace.com/docs/shortlink/extend-metric).

```ts testable
import { metricsClient } from '@dynatrace-sdk/client-classic-environment-v2';

metricsClient
  .ingest({ body: 'cpu.temperature,hostname=host 55' })
  .then((response) => {
    console.log(response);
  })
  .catch((e) => {
    console.error(e);
  });
```

The ingested metrics can be queried with the following DQL statement:

```dql
timeseries avg(cpu.temperature)
```

This operation requires the scope `storage:metrics:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
