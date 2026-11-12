## `useDql` has built-in SWR

The `useDql` hook from `@dynatrace-sdk/react-hooks` is built on top of TanStack Query and ships with full SWR support out of the box. You don't need to add `react-query` separately or build your own caching layer for Grail queries—it's already there.

### Key options

```tsx
const result = useDql(query, {
  staleTime: number, // How long cached data is considered "fresh" (ms)
  refetchInterval: number, // Auto-refetch at this interval (ms)
  placeholderData: data, // Data to show while the first fetch is in flight
  enabled: boolean, // Set to false to disable automatic execution
});
```

### Key return values

```tsx
const {
  data, // The last successfully resolved data
  isLoading, // true only during the *first* fetch (no cached data yet)
  isFetching, // true during *any* fetch, including background revalidation
  isStale, // true if the cached data is older than staleTime
  isPlaceholderData, // true if currently showing placeholderData
  refetch, // Manually trigger a revalidation
  forceRefetch, // Refetch ignoring staleTime
} = useDql(query, options);
```

The distinction between `isLoading` and `isFetching` is the core of SWR:

- **`isLoading`** is `true` only when there is no cached data at all—the very first fetch, or after the cache has been cleared. This is when you show a skeleton or loading state.
- **`isFetching`** is `true` whenever a network request is in flight, including background revalidations. This is not a reason to show a spinner. Use it for subtle refresh indicators.
