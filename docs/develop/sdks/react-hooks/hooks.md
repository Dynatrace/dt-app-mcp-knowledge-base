## Hooks

### useAccessorPermissionsV2

**useAccessorPermissionsV2(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

Load accessor permissions.

#### Parameters

| Name              | Type                        | Description                            |
| ----------------- | --------------------------- | -------------------------------------- |
| params (required) | AccessorPermissionsParamsV2 | Parameters for the client sdk call.    |
| options           | HookOptions                 | Additional options for the react hook. |

### useAllUsersPermissionsV2

**useAllUsersPermissionsV2(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

Load all-users permissions.

#### Parameters

| Name              | Type                            | Description                            |
| ----------------- | ------------------------------- | -------------------------------------- |
| params (required) | LoadAllUsersPermissionsParamsV2 | Parameters for the client sdk call.    |
| options           | HookOptions                     | Additional options for the react hook. |

### useAnalyzer

**useAnalyzer(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

Execute an analyzer with the given data.

#### Parameters

| Name              | Type           | Description                            |
| ----------------- | -------------- | -------------------------------------- |
| params (required) | AnalyzerParams | Parameters for the client sdk call.    |
| options           | HookOptions    | Additional options for the react hook. |

### useAppFunction

**useAppFunction(params,options?): \{ cancel, data, error, isError, isLoading, isSuccess, refetch, status }**

Call specified app function by name.

#### Parameters

| Name              | Type              | Description                            |
| ----------------- | ----------------- | -------------------------------------- |
| params (required) | AppFunctionParams | App function params.                   |
| options           | HookOptions       | Additional options for the react hook. |

### useAppState

**useAppState(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

Gets app state

#### Parameters

| Name              | Type           | Description                            |
| ----------------- | -------------- | -------------------------------------- |
| params (required) | AppStateParams | Parameters for the client sdk call.    |
| options           | HookOptions    | Additional options for the react hook. |

### useAppStates

**useAppStates(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

List app states

#### Parameters

| Name              | Type            | Description                            |
| ----------------- | --------------- | -------------------------------------- |
| params (required) | AppStatesParams | Parameters for the client sdk call.    |
| options           | HookOptions     | Additional options for the react hook. |

### useCreateDocument

**useCreateDocument(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Create a new document.

### useCreatePermissionsV2

**useCreatePermissionsV2(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Create a new permissions.

### ~~useCreateSettings~~

> ⚠️ **Deprecated**
> Use V2 instead.

**useCreateSettings(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Create a new setting.

### useCreateSettingsV2

**useCreateSettingsV2(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Create a new setting.

### useDeleteAccessorPermissionsV2

**useDeleteAccessorPermissionsV2(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Delete the accessor permissions

### useDeleteAllUsersPermissionsV2

**useDeleteAllUsersPermissionsV2(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Delete the all-users permissions

### useDeleteAppState

**useDeleteAppState(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Deletes app state

### useDeleteAppStates

**useDeleteAppStates(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Delete all app states

### useDeleteDocument

**useDeleteDocument(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Delete the document

### ~~useDeleteSettings~~

> ⚠️ **Deprecated**
> Use V2 instead.

**useDeleteSettings(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Delete the setting

### useDeleteSettingsV2

**useDeleteSettingsV2(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Delete the setting

### useDeleteUserAppState

**useDeleteUserAppState(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Delete user app state

### useDeleteUserAppStates

**useDeleteUserAppStates(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Delete all user app states

### useDocument

**useDocument(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

Retrieve metadata and content for documents.

#### Parameters

| Name              | Type           | Description                            |
| ----------------- | -------------- | -------------------------------------- |
| params (required) | DocumentParams | Parameters for the client sdk call.    |
| options           | HookOptions    | Additional options for the react hook. |

### useDocumentMetaData

**useDocumentMetaData(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

Retrieve document metadata.

#### Parameters

| Name              | Type                   | Description                            |
| ----------------- | ---------------------- | -------------------------------------- |
| params (required) | DocumentMetaDataParams | Parameters for the client sdk call.    |
| options           | HookOptions            | Additional options for the react hook. |

### useDownloadDocument

**useDownloadDocument(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

Download document content

#### Parameters

| Name              | Type                   | Description                            |
| ----------------- | ---------------------- | -------------------------------------- |
| params (required) | DownloadDocumentParams | Parameters for the client sdk call.    |
| options           | HookOptions            | Additional options for the react hook. |

### useDql

**useDql(query,options?): [UseDqlResult](#usedqlresult)\<T>**

React hook for executing DQL (Dynatrace Query Language) queries against Grail.

Use this hook to run DQL queries in React components and manage query state with less boilerplate.
It returns query data, loading and error state, and functions to cancel or rerun the query.

- By default, queries that are in-flight are **cancelled when the browser tab
  loses focus**. Set `runInBackground: true` to keep them running.
- Results are cached for 60 seconds by default (`staleTime`). Calling `refetch`
  while data is still fresh returns the cached result; use `forceRefetch` to
  bypass the cache.
- The hook automatically retries on HTTP 429 (Too Many Requests) responses
  using the `retryAfterSeconds` header when available, falling back to exponential
  back-off.
- When `enablePreview` is set on the query params, intermediate partial results
  are exposed via `data` while the query is still running.

#### Parameters

| Name             | Type                                        | Description                                                                                                                                                                                                                                                                                                    |
| ---------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| query (required) | string \| [DqlQueryParams](#dqlqueryparams) | A DQL query string, or a [DqlQueryParams](#dqlqueryparams) object for full control over execution parameters (timezone, timeframe, locale, etc.). Parameters provided here are merged with any values from a parent [DqlQueryParamsProvider](#dqlqueryparamsprovider), with per-call values taking precedence. |
| options          | [UseDqlOptions](#usedqloptions)\<T>         | Optional configuration for the hook behavior.                                                                                                                                                                                                                                                                  |

#### Returns

| Return type                   | Description                                                                                                          |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [UseDqlResult](#usedqlresult) | Returns the query result, loading and error state, progress information, and functions to cancel or rerun the query. |

**Basic usage**

```tsx
function HostList() {
  const { data, isLoading, error } = useDql(
    'fetch dt.entity.host | fields entity.name, state'
  );

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <ul>
      {data?.records.map((host) => (
        <li key={host['entity.name']}>{host['entity.name']}</li>
      ))}
    </ul>
  );
}
```

**Typed records**

```tsx
interface MyRecord {
  state: string;
}

const { data } = useDql<MyRecord>(
  'fetch dt.entity.host | fields state'
);
// data?.records is typed as MyRecord[]
```

**Advanced query parameters**

```tsx
const result = useDql({
  query: 'fetch logs | sort timestamp desc | limit 100',
  defaultTimeframeStart: 'now()-2h',
  defaultTimeframeEnd: 'now()',
  timezone: 'Europe/Berlin',
  locale: 'en_US',
  enablePreview: true,
});
```

**Shared query parameters via context**

```tsx
<DqlQueryParamsProvider
  defaultTimeframeStart="now()-1h"
  defaultTimeframeEnd="now()"
>
  <HostList />
  <LogViewer />
</DqlQueryParamsProvider>
```

**Cancellation and refetching**

```tsx
const { cancel, refetch, forceRefetch } = useDql('fetch logs');

// Cancel the in-flight query
await cancel();

// Refetch only if data is stale
await refetch();

// Force a fresh fetch regardless of stale time
await forceRefetch();
```

**Tracking progress**

```tsx
const { data, state, progress } = useDql('fetch logs | summarize count()');

if (state === 'RUNNING') {
  return <ProgressBar value={progress} />;
}
```

### ~~useDqlQuery~~

> ⚠️ **Deprecated**
> Use `useDql` hook instead.

**useDqlQuery(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

Use this hook to execute a DQL query.

#### Parameters

| Name                                | Type        | Description                                     |
| ----------------------------------- | ----------- | ----------------------------------------------- |
| ~~params~~**DEPRECATED** (required) | QueryParams | Query and enrich options that will be executed. |
| ~~options~~**DEPRECATED**           | HookOptions | Additional options for the react hook.          |

#### Returns

| Description                                                                                |
| ------------------------------------------------------------------------------------------ |
| The state of the query, including the result and functions to refetch or cancel the query. |

### ~~useEffectivePermissions~~

> ⚠️ **Deprecated**
> Use V2 instead.

**useEffectivePermissions(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

Retrieve effective settings permissions for the calling user.

#### Parameters

| Name                                | Type                                           | Description                            |
| ----------------------------------- | ---------------------------------------------- | -------------------------------------- |
| ~~params~~**DEPRECATED** (required) | Omit\<\{ abortSignal, body } \| "abortSignal"> | Parameters for the client sdk call.    |
| ~~options~~**DEPRECATED**           | HookOptions                                    | Additional options for the react hook. |

### useEffectivePermissionsV2

**useEffectivePermissionsV2(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

Retrieve effective settings permissions for the calling user.

#### Parameters

| Name              | Type                                           | Description                            |
| ----------------- | ---------------------------------------------- | -------------------------------------- |
| params (required) | Omit\<\{ abortSignal, body } \| "abortSignal"> | Parameters for the client sdk call.    |
| options           | HookOptions                                    | Additional options for the react hook. |

### useGrailFields

**useGrailFields(options): [UseGrailFieldsResult](#usegrailfieldsresult)\<TData>**

Fetches Grail fields from both autocomplete and DSS query sources
and exposes standard React Query status flags.

#### Parameters

| Name               | Type                                                    |
| ------------------ | ------------------------------------------------------- |
| options (required) | [UseGrailFieldsOptions](#usegrailfieldsoptions)\<TData> |

#### Returns

| Return type                                   | Description                                                                                                                                                |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [UseGrailFieldsResult](#usegrailfieldsresult) | The raw query data (or the value returned by `select`), plus React Query state flags (`isLoading`, `isError`, `isSuccess`, `errors`, `refetch`, `cancel`). |

**Basic usage:**

```tsx
const { data, isLoading } = useGrailFields({
  autocompleteQueryOptions: { query: 'fetch logs' },
  dssQueryOptions: { query: 'fieldsSnapshot logs' },
});
// data.autocompleteData, data.dssData
```

**With select transform:**

```tsx
const { data } = useGrailFields({
  autocompleteQueryOptions: { query: 'fetch logs' },
  dssQueryOptions: { query: 'fieldsSnapshot logs' },
  select: ({ autocompleteData }) =>
    autocompleteData?.suggestions?.map((s) => s.suggestion ?? '') ?? [],
});
```

### useListDocuments

**useListDocuments(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

List all documents accessible to you.

#### Parameters

| Name              | Type                             | Description                            |
| ----------------- | -------------------------------- | -------------------------------------- |
| params (required) | undefined \| ListDocumentsParams | Parameters for the client sdk call.    |
| options           | HookOptions                      | Additional options for the react hook. |

### usePermissionsV2

**usePermissionsV2(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

Load permissions.

#### Parameters

| Name              | Type                | Description                            |
| ----------------- | ------------------- | -------------------------------------- |
| params (required) | PermissionsParamsV2 | Parameters for the client sdk call.    |
| options           | HookOptions         | Additional options for the react hook. |

### useSetAppState

**useSetAppState(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Updates app state

### useSetUserAppState

**useSetUserAppState(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Updates user app state

### ~~useSettings~~

> ⚠️ **Deprecated**
> Use V2 instead.

**useSettings(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

Retrieve metadata and content for settings.

#### Parameters

| Name                                | Type           | Description                            |
| ----------------------------------- | -------------- | -------------------------------------- |
| ~~params~~**DEPRECATED** (required) | SettingsParams | Parameters for the client sdk call.    |
| ~~options~~**DEPRECATED**           | HookOptions    | Additional options for the react hook. |

### ~~useSettingsObjects~~

> ⚠️ **Deprecated**
> Use V2 instead.

**useSettingsObjects(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

Retrieve metadata and content for settings.

#### Parameters

| Name                                | Type                 | Description                            |
| ----------------------------------- | -------------------- | -------------------------------------- |
| ~~params~~**DEPRECATED** (required) | SettingsObjectParams | Parameters for the client sdk call.    |
| ~~options~~**DEPRECATED**           | HookOptions          | Additional options for the react hook. |

### useSettingsObjectsV2

**useSettingsObjectsV2(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

Retrieve metadata and content for settings.

#### Parameters

| Name              | Type                   | Description                            |
| ----------------- | ---------------------- | -------------------------------------- |
| params (required) | SettingsObjectParamsV2 | Parameters for the client sdk call.    |
| options           | HookOptions            | Additional options for the react hook. |

### useSettingsV2

**useSettingsV2(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

Retrieve metadata and content for settings.

#### Parameters

| Name              | Type             | Description                            |
| ----------------- | ---------------- | -------------------------------------- |
| params (required) | SettingsParamsV2 | Parameters for the client sdk call.    |
| options           | HookOptions      | Additional options for the react hook. |

### useTransferOwnershipV2

**useTransferOwnershipV2(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Transfer ownership.

### useUpdateAccessorPermissionsV2

**useUpdateAccessorPermissionsV2(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Update accessor permissions.

### useUpdateAllUsersPermissionsV2

**useUpdateAllUsersPermissionsV2(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Update all-users permissions.

### useUpdateDocument

**useUpdateDocument(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Update metadata and content.

### useUpdateDocumentMetadata

**useUpdateDocumentMetadata(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Update document metadata

### ~~useUpdateSettings~~

> ⚠️ **Deprecated**
> Use V2 instead.

**useUpdateSettings(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Update metadata and content.

### useUpdateSettingsV2

**useUpdateSettingsV2(): \{ data, error, errorDetails, execute, isError, isLoading, isSuccess, status }**

Update metadata and content.

### useUser

**useUser(uuid,options): UseUserResult**

React hook for fetching a single user by UUID.

Internally batches multiple concurrent `useUser` calls into a single bulk
POST request to the IAM API, deduplicating UUIDs and chunking into batches
of ≤100 to avoid silent truncation.

#### Parameters

| Name               | Type                              | Description                                                  |
| ------------------ | --------------------------------- | ------------------------------------------------------------ |
| uuid (required)    | undefined \| string               | The user UUID to fetch, or `undefined` to disable the query. |
| options (required) | [UseUserOptions](#useuseroptions) | Additional options for the hook.                             |

#### Returns

| Description                                          |
| ---------------------------------------------------- |
| The user data, loading state, and error information. |

**Code example**

```ts
const { data: user, isLoading, error } = useUser('user-uuid-123');
```

### useUserAppState

**useUserAppState(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

Get user app state

#### Parameters

| Name              | Type               | Description                            |
| ----------------- | ------------------ | -------------------------------------- |
| params (required) | UserAppStateParams | Parameters for the client sdk call.    |
| options           | HookOptions        | Additional options for the react hook. |

### useUserAppStates

**useUserAppStates(params,options?): \{ cancel, data, error, errorDetails, isError, isLoading, isSuccess, refetch, status }**

List user app states

#### Parameters

| Name              | Type                | Description                            |
| ----------------- | ------------------- | -------------------------------------- |
| params (required) | UserAppStatesParams | Parameters for the client sdk call.    |
| options           | HookOptions         | Additional options for the react hook. |

### useUsers

**useUsers(uuids,options): [UseUsersResult](#useusersresult)**

React hook for fetching multiple users by their UUIDs.

Internally batches all UUID lookups into chunked bulk POST requests
to the IAM API (≤100 UUIDs per chunk), with per-UUID caching.

#### Parameters

| Name               | Type                              | Description                      |
| ------------------ | --------------------------------- | -------------------------------- |
| uuids (required)   | Array\<string>                    | Array of user UUIDs to fetch.    |
| options (required) | [UseUserOptions](#useuseroptions) | Additional options for the hook. |

#### Returns

| Description                                                        |
| ------------------------------------------------------------------ |
| Aggregated result with a Map of UUID→user data and loading states. |

**Code example**

```ts
const { data, users, isLoading } = useUsers(['uuid-1', 'uuid-2', 'uuid-3']);
```
