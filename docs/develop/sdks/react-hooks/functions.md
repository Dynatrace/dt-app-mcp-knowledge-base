## Functions

### DqlQueryParamsContext

**DqlQueryParamsContext(props): ReactNode**

Context storing Dql query params.

#### Parameters

| Name             | Type                                                                      |
| ---------------- | ------------------------------------------------------------------------- |
| props (required) | ProviderProps\<[DqlQueryParamsContextProps](#dqlqueryparamscontextprops)> |

#### Properties

| Name                | Type                                                                 | Description                                                                                                                     |
| ------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| $$typeof (required) | symbol                                                               |                                                                                                                                 |
| Consumer (required) | Consumer\<[DqlQueryParamsContextProps](#dqlqueryparamscontextprops)> |                                                                                                                                 |
| Provider (required) | Provider\<[DqlQueryParamsContextProps](#dqlqueryparamscontextprops)> |                                                                                                                                 |
| displayName         | string                                                               | Used in debugging messages. You might want to set it explicitly if you want to display a different name for debugging purposes. |

### UseUsersProvider

**UseUsersProvider(props): ReactElement\<unknown | string | JSXElementConstructor\<[any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)>>**

Provider component for configuring the `useUser` and `useUsers` hooks.

#### Parameters

| Name             | Type                              |
| ---------------- | --------------------------------- |
| props (required) | [UseUsersConfig](#useusersconfig) |

**Code example**

```ts
<UseUsersProvider levelType="account" levelId="abc-123">
  <MyTable />
</UseUsersProvider>
```

### getGrailFieldsQueryOptions

**getGrailFieldsQueryOptions(autocompleteOptions,dssOptions): [GrailFieldsQueryOptions](#grailfieldsqueryoptions)**

Creates combined query options for both autocomplete and DSS queries used in [useGrailFields](#usegrailfields).
This allows consumers to prefetch both queries in parallel.

#### Parameters

| Name                           | Type                                                  | Description                         |
| ------------------------------ | ----------------------------------------------------- | ----------------------------------- |
| autocompleteOptions (required) | [AutocompleteQueryOptions](#autocompletequeryoptions) | Options for the autocomplete query. |
| dssOptions (required)          | [DssQueryOptions](#dssqueryoptions)                   | Options for the DSS query.          |

#### Returns

| Description                                                               |
| ------------------------------------------------------------------------- |
| An object containing query options for both autocomplete and DSS queries. |

**Code example**

```tsx
const queryClient = useQueryClient();
const { autocomplete, dss } = getGrailFieldsQueryOptions(
  { query: 'fetch logs' },
  { query: 'fieldsSnapshot logs' },
);
await Promise.all([
  queryClient.prefetchQuery(autocomplete),
  queryClient.prefetchQuery(dss),
]);
```
