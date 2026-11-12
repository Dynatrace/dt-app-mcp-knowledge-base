## SWR and INP: Why this matters for responsiveness

**Interaction to Next Paint (INP)** measures how long it takes from a user interaction (click, tap, keypress, etc.) to the next visual update. Our target is faster than 200 milliseconds. SWR has a direct and significant impact on this metric.

### The problem without SWR

Consider a tab switch in a typical Dynatrace app:

1. User clicks the **Metrics** tab.
2. The app triggers a DQL query against Grail.
3. The component renders a loading spinner.
4. The query takes between 2 and 4 seconds.
5. The data arrives. The component re-renders with the actual content.

The INP for this interaction is the time from click to the next visual update—the spinner appearing. If the click handler is clean and the component transition is fast, the spinner might render in \~50ms, which is fine for INP.

But here's the problem: **the user keeps doing this**. Every time they switch to this tab, they see a spinner. They learn that this tab is slow. They hesitate before clicking it. The perceived performance is poor even if the INP measurement itself looks okay.

### How SWR fixes responsiveness

With SWR, the second time the user clicks the **Metrics** tab:

1. User clicks the tab.
2. The cached data renders **immediately**—within the same frame.
3. A background revalidation fires silently.
4. If new data arrives, the UI updates smoothly.

The INP is near-zero for the interaction: click → cached content rendered → done. There's no spinner, no loading state, and no perceived delay. The UI responds instantly to the user's action, which is exactly what INP measures.

### Where this gets critical

INP degrades when interactions trigger expensive synchronous work—state updates that cause large re-renders, layout recalculations, or blocking data fetches that suspend rendering.

Without SWR, a `refetch()` call in a click handler can trigger a state transition back to loading, causing the entire component tree to re-render with a spinner. With SWR, the state stays stable: `data` is still the cached result, `isFetching` flips to `true` (which you can use for a subtle indicator), and there's no disruptive re-render.

- **Bad approach**—full loading state on every tab switch disrupts INP perception:

  ```tsx
  const { data, isLoading } = useDql(query); // no staleTime

  if (isLoading) return <Skeleton />; // Shows on every navigation
  return <DataTable data={data.records} />;
  ```

- **Good approach**—cached data renders instantly, subtle indicator for fetching in the background:

  ```tsx
  const { data, isLoading, isFetching } = useDql(query, {
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) return <Skeleton />; // Only on the *very first* load
  return (
    <>
      {isFetching && <RefreshIndicator />} {/* Subtle, non-blocking */}
      <DataTable data={data.records} />
    </>
  );
  ```

The key pattern is to use `isLoading` for the initial skeleton and `isFetching` for a non-disruptive refresh indicator. Never conditionally unmount your data-rendering tree based on `isFetching`.

### INP impact summary

| Interaction pattern      | Without SWR               | With SWR                             |
| ------------------------ | ------------------------- | ------------------------------------ |
| First visit to a page    | Loading → Render          | Loading → Render (same)              |
| Return visit to a page   | Loading → Render again    | Instant render from cache            |
| Tab switch within a page | Spinner → Wait → Render   | Instant render from cache            |
| Manual refresh button    | Spinner → Wait → Render   | Data stays visible, subtle indicator |
| `refetchInterval` tick   | Potential flash/re-render | Silent background update             |

Every row except the first is an INP improvement. The more frequently users revisit pages and switch tabs in your app, the more SWR improves your INP profile.
