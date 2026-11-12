Stale-While-Revalidate (SWR) is a cache invalidation strategy where the user interface (UI) immediately renders with cached (stale) data while silently fetching fresh data in the background. Once the fresh data arrives, the UI updates in place, without a loading spinner, without a blank screen, without blocking the user.

The name comes from the HTTP `Cache-Control` directive `stale-while-revalidate`, but the pattern has become a foundational concept in modern client-side data fetching.

### The three phases

This strategy has three phases:

1. **Cache hit**—returns cached data instantly. The user sees content immediately.
2. **Background revalidation**—fires a network request to get fresh data. The user doesn't notice.
3. **Silent update**—when fresh data arrives, it swaps it into the UI. If the data hasn't changed, nothing happens visually.

Comparing SWR to the naive approach:

| Step                     | Without SWR     | With SWR                            |
| ------------------------ | --------------- | ----------------------------------- |
| User navigates to a page | Loading spinner | Cached data renders instantly       |
| Network request fires    | User waits      | Happens invisibly in the background |
| Data arrives             | Content renders | UI updates silently if data changes |

When using SWR, the users' perception changes from "This app is slow" to "This app is fast". The user sees content immediately, and the app feels responsive even if the underlying data is slow to fetch.
