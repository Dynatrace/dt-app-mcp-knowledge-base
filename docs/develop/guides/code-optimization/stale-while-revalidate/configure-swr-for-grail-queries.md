## Configure SWR for Grail queries

### Set `staleTime`

`staleTime` controls how long data stays "fresh" in the cache. While data is fresh, navigating back to a component that uses the same query returns the cached result instantly—no network request at all.

Host list doesn't change often, so you can keep it fresh for 5 minutes:

```tsx
const { data, isLoading } = useDql('fetch dt.entity.host | fields entity.name, state | limit 200', {
  staleTime: 5 * 60 * 1000,
});
```

Log data is more dynamic, so you can keep it fresh for 30 seconds:

```tsx
const { data, isLoading } = useDql('fetch logs | filter loglevel == "ERROR" | sort timestamp desc | limit 100', {
  staleTime: 30 * 1000,
});
```

If no `staleTime` is set, data is considered stale immediately after fetching—meaning every re-render triggers a background revalidation. This is fine for highly dynamic data but wasteful for stable data.

**Guidelines for choosing `staleTime`**:

| Data type                                         | Suggested `staleTime`        | Reasoning                                |
| ------------------------------------------------- | ---------------------------- | ---------------------------------------- |
| Entity metadata (hosts, services, process groups) | 5–10 minutes                 | Changes infrequently, expensive queries  |
| Configuration / settings                          | 5–10 minutes                 | Rarely changes during a session          |
| Metrics (timeseries)                              | 30–60 seconds                | New data points arrive regularly         |
| Logs                                              | 15–30 seconds                | Active systems produce logs continuously |
| Real-time events                                  | 0 (or use `refetchInterval`) | You always want the latest               |

### Auto-refetch with `refetchInterval`

For data that should stay current without user interaction—dashboards, monitoring views, live tails—use `refetchInterval`:

```tsx
const { data, isFetching } = useDql(
  {
    query: 'fetch dt.entity.host | fields entity.name, cpuUsage | sort cpuUsage desc',
    maxResultRecords: 50,
  },
  {
    staleTime: 30 * 1000,
    refetchInterval: 60 * 1000, // Refresh every 60 seconds
  },
);
```

The `refetchInterval` fires regardless of whether the data is stale. It's a poll. Combine it with `staleTime` to avoid redundant network requests when the user navigates away and returns within the stale window.

### Use `placeholderData`

`placeholderData` provides an initial dataset to render while the first real fetch completes. This is useful when you have a reasonable default (e.g., an empty table structure) or when you're passing forward results from a previous query:

```tsx
const { data, isPlaceholderData } = useDql(`fetch dt.entity.host | filter managementZones == "${zone}" | limit 100`, {
  staleTime: 5 * 60 * 1000,
  placeholderData: previousZoneData, // Show the old zone's data until new data loads
});
```

The `isPlaceholderData` flag tells you whether you're rendering real results or the placeholder. Use it to dim the UI or show a subtle indicator—never a full loading spinner.
