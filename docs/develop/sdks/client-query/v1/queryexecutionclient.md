## queryExecutionClient

```js
import { queryExecutionClient } from '@dynatrace-sdk/client-query';
```

### queryCancel

**queryExecutionClient.queryCancel(config): Promise\<void | [QueryPollResponse](#querypollresponse)>**

Cancels the query and returns the result if the query was already finished, otherwise discards it.

For information about the required permissions see the [Bucket and table permissions in Grail documentation](https://docs.dynatrace.com/docs/shortlink/assign-bucket-table-permissions).
