```bash
npm install @dynatrace-sdk/react-hooks
```

### Why should I use this package?

This package simplifies interactions with Grail, documents, and app states in React by encapsulating complex state management. It offers easy-to-use hooks that integrate seamlessly with client packages, enhancing developer productivity and usability in React applications.

### Simplified data querying from Grail

Traditionally, querying data in Dynatrace involves using the client-query package and managing complex React state. The `useDql` hook in this package streamlines this process. The following example showcases how to fetch data with a DQL query:

```javascript
const { data, error, isLoading } = useDql('fetch logs');
```

This hook is fully compatible with the parameters used in the `queryExecute` function of the `@dynatrace-sdk/client-query` package.

For instance, to limit the number of results returned:

```javascript
const { data, error, isLoading, refetch } = useDql({
  query: 'fetch logs',
  maxResultRecords: 2000,
});
```

You can delay the execution of the query until a user clicks on a button by passing additional query options to the hook:

```javascript
const { data, error, isLoading, refetch } = useDql('fetch logs', { enabled: false });

function onClickQuery() {
  refetch();
}
```

You should add appropriate scopes to your app's configuration based on the query type. For more details, refer to the [Bucket and table permissions in Grail documentation](https://www.dynatrace.com/support/help/platform/grail/assign-permissions-in-grail).

### Interacting with documents and app states

Beyond DQL queries, our hooks facilitate interactions with documents and app state. They allow control over immediate or deferred query execution.

```javascript
const { data, error, isLoading } = useDocument({ id: documentId }, { autoFetch: true });
```

For creating, updating, or deleting documents or app state, an explicit execute call is necessary:

```javascript
const { data, execute, error } = useCreateDocument();

function onClickCreateDocument() {
  execute(DOCUMENT_DATA);
}
```

Depending on your interaction type, add these scopes to your app configuration:

| Function              | Scope                        |
| --------------------- | ---------------------------- |
| Document read         | document:documents:read      |
| Document write/update | document:documents:write     |
| Document delete       | document:documents:delete    |
| State read            | state:app-states:read        |
| State write           | state:app-states:write       |
| State delete          | state:app-states:delete      |
| User state read       | state:user-app-states:read   |
| User state write      | state:user-app-states:write  |
| User state delete     | state:user-app-states:delete |

### Simplified Use of Davis® Analyzers

Leveraging Davis® analyzers traditionally involves complex state management and polling logic, alongside the `@dynatrace-sdk/client-davis-analyzers` package. The `useAnalyzer` hook in this package makes this process much more straightforward:

```javascript
const { data, error, isLoading } = useAnalyzer({
  analyzerName: 'dt.statistics.GenericForecastAnalyzer',
  body: {
    timeSeriesData: {
      expression: query,
    },
  },
});
```

This hook supports all the parameters available in the executeAnalyzer method from the `@dynatrace-sdk/client-davis-analyzers` package.

To defer the execution of the analyzer until a user action, like a button click, configure the hook with additional options:

```javascript
const { data, error, isLoading, refetch } = useAnalyzer({
  analyzerName: 'dt.statistics.GenericForecastAnalyzer',
  body: {
    timeSeriesData: {
      expression: query,
    },
  },
  {
    autoFetch: false,
    autoFetchOnUpdate: true,
  }
});

function onExecuteAnalyzer() {
  refetch();
}
```

In your app's configuration, include the necessary scope:

| Function     | Scope                   |
| ------------ | ----------------------- |
| Use analyzer | davis:analyzers:execute |

### App functions

The useAppFunction hook is the simplest way to call app functions. As the other hooks in this package, it provides state handling for loading and error states:

```javascript
const { data, error, isLoading } = useAppFunction({ name: 'functionName', data: 'data' });
```

Sometimes you want to delay the execution of the app function until a user clicks on a button. This can be achieved by passing additional options to the hook:

```javascript
const { data, error, isLoading, refetch } = useAppFunction(
  { name: 'functionName', data: 'data' },
  { autoFetch: false, autoFetchOnUpdate: false },
);

function onClick() {
  refetch();
}
```
