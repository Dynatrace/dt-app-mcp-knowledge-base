## When not to use SWR

SWR is not universally appropriate:

- **Write operations**—don't cache mutation results as stale data. Use `refetch()` or `forceRefetch()` after a write to ensure consistency.
- **Security-sensitive data**—if data visibility should be strictly time-limited (e.g., audit logs for compliance), stale data may be a policy violation. Set `staleTime: 0`.
- **One-shot queries**—queries triggered by explicit user action such as selecting **Analyze** rather than page rendering. Use `enabled: false` and `refetch()` instead.
- **Preview or sampling data**—if you use `enablePreview: true` to get partial results, be cautious about caching previews as if they were complete results.
