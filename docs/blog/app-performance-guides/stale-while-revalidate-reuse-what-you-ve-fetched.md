## Stale-while-revalidate: reuse what you've fetched

Grail queries can take seconds, and much of the data an app shows such as host lists, topology, or configuration, doesn't change second to second. Stale-while-revalidate (SWR) renders cached data instantly, then quietly refreshes it in the background and swaps in the new result if anything changed. No spinner, no blank screen.

You mostly get this for free: `useDql` from `@dynatrace-sdk/react-hooks` is built on TanStack Query and ships with SWR support. The guide walks through setting `staleTime` per data type, using `placeholderData` to avoid a flash of loading state on filter changes, and the key distinction between `isLoading` (first load) and `isFetching` (background refresh).

> **Tip**
>
> Read more about [Stale-While-Revalidate (SWR)](pathname:///develop/guides/code-optimization/stale-while-revalidate/).
