## Skeleton and placeholder sizing

The most common CLS source in Dynatrace apps is the transition from a loading state such as a skeleton or a spinner, to the actual content. If the skeleton is shorter or taller than the resolved component, everything below shifts.

### The problem

```tsx
// ❌ Bad: Skeleton has no height constraint—likely shorter than the actual table
if (isLoading) return <Skeleton />;
return <DataTable data={data.records} />;
```

The `<Skeleton />` might render as a couple of pulsing lines (\~60px tall). The `<DataTable />` renders as 500px of rows. When data arrives, the 440px difference pushes everything below the table down—a massive layout shift.

### Match skeleton dimensions

```tsx
// ✅ Good: Skeleton occupies the same space as the expected content
if (isLoading) {
  return (
    <div style={{ minHeight: 500 }}>
      <Skeleton />
    </div>
  );
}

return <DataTable data={data.records} />;
```

Better yet, use multiple skeleton lines that approximate the table's row structure:

```tsx
if (isLoading) {
  return (
    <div style={{ minHeight: 500, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Skeleton height={40} /> {/* Header row */}
      {Array.from({ length: 10 }, (_, i) => (
        <Skeleton key={i} height={36} /> /* Data rows */
      ))}
    </div>
  );
}
```

### Avoid the skeleton entirely with SWR

If you're using `useDql` with `staleTime` or `placeholderData`, revisits to a page render cached data instantly; no skeleton, no shift:

```tsx
const { data, isLoading, isFetching } = useDql(query, {
  staleTime: 5 * 60 * 1000,
});

// Skeleton only on the very first visit—all revisits show cached data
if (isLoading) {
  return (
    <div style={{ minHeight: 500 }}>
      <Skeleton />
    </div>
  );
}

return (
  <div style={{ opacity: isFetching ? 0.7 : 1, transition: 'opacity 200ms' }}>
    <DataTable data={data.records} />
  </div>
);
```

The `opacity` transition signals a background refresh without moving anything. Zero CLS on revisits.

> **Note**
>
> Learn more about [Stale-While-Revalidate (SWR)](https://developer.dynatrace.com/develop/guides/code-optimization/stale-while-revalidate.md).
