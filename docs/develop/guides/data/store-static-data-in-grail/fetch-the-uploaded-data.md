## Fetch the uploaded data

The uploaded data in Grail can be accessed using the DQL `load` command. Here is a DQL example:

```dql untestable
load "/lookups/currencyrates"
```

### Fetch data in Dynatrace app

In the following example, we mimic real user event data with DQL's `data` command and convert the balance from USD into EUR with the uploaded currency rates. We'll fetch this data using the `useDql` React hook and show it in the Strato `DataTable` component.

```tsx title="ui/app/App.tsx" skip-dql
import React from 'react';
import { Flex } from '@dynatrace/strato-components/layouts';
import { useDql } from '@dynatrace-sdk/react-hooks';
import { convertToColumns, DataTable } from '@dynatrace/strato-components/tables';

export const App = () => {
  const query = `data json:"""
  [
    {
        "email": "first@first.com",
        "balance": 10,
        "currency": "USD"
    },
    {
        "email": "second@first.com",
        "balance": 130,
        "currency": "USD"
    },
    {
        "email": "third@first.com",
        "balance": 20,
        "currency": "USD"
    }
  ]
  """
| fieldsAdd eurBalance = balance * lookup([
  load "/lookups/currencyrates"], sourceField: currency, lookupField:data[source])[data][EUR]`;

  const result = useDql(query);

  return (
    <Flex flexDirection="column" alignItems="center" padding={32}>
      {result.data && <DataTable data={result.data?.records} columns={convertToColumns(result.data?.types)} />}
    </Flex>
  );
};
```

This operation requires the scope `storage:files:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
