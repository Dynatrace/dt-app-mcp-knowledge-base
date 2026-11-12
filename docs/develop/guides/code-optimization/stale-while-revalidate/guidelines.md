## Guidelines

To recap, here are some best practices for applying SWR in your Dynatrace app:

1. **Set `staleTime` on every `useDql` call**—the default (0) means data is stale immediately, causing unnecessary background requests. Be intentional about freshness requirements.

2. **Distinguish `isLoading` from `isFetching`**—show skeletons for `isLoading` (first load). Show subtle indicators for `isFetching` (background refresh). Never use `isFetching` to unmount your content tree.

3. **Use `placeholderData` for filter/parameter changes**—when query parameters change, keep previous results visible while the new query runs to avoid flash-of-loading-state.

4. **Combine `staleTime` and `refetchInterval` deliberately**—`staleTime` controls cache freshness for navigation. `refetchInterval` controls polling frequency. Set both for monitoring views.

5. **Don't over-cache**—a 10-minute `staleTime` is great for entity metadata. It's wrong for error logs in an active incident. Match your cache duration to data volatility.

6. **Use `forceRefetch` for user-initiated refreshes**—when the user clicks a "Refresh" button, they expect fresh data regardless of cache state. `forceRefetch` ignores `staleTime`.

7. **Keep your INP under 200ms**—SWR eliminates most interaction-triggered loading states after the first visit. If your INP is still high, look at component rendering cost, not data fetching.
