## Logs

To ingest logs, you can use the `storeLog` method of the `logsClient` namespace, which is provided by the `@dynatrace-sdk/client-classic-environment-v2` package.
The method accepts a single log line as a JSON object or multiple log lines as an array.

An example of this could look like the following:

```ts testable
import { logsClient } from '@dynatrace-sdk/client-classic-environment-v2';

const logs = [
  {
    'content': 'example log content 1',
    'log.source': '/var/log/syslog',
    'log.tag': ['tag1', 'tag2'],
  },
  { content: 'example log content 2' },
];

logsClient
  .storeLog({
    body: logs,
    type: 'application/json; charset=utf-8',
  })
  .then((response) => console.log(response))
  .catch((e) => console.error(e));
```

In case of a successful ingest, the API returns an empty response body ([see API docs](https://docs.dynatrace.com/docs/shortlink/api-log-monitoring-v2-post-ingest#response-codes)). So the `response` object of the `storeLog` method is `undefined`.

You can query the ingested logs with the following DQL statement:

```dql
fetch logs
| filter contains(content, "example")
```

This operation requires the scope `storage:logs:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
