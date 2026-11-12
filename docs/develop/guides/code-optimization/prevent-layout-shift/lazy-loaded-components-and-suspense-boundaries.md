## Lazy-loaded components and Suspense boundaries

When using [lazy loading](https://developer.dynatrace.com/develop/guides/code-optimization/lazy-loading.md), a Suspense fallback is shown while the chunk downloads. When the real component mounts, it replaces the fallback. If the two have different heights, you get a layout shift.

### Size your Suspense wrapper

```tsx
// ❌ Bad: ProgressBar is ~4px tall, the actual component is 400px
<Suspense fallback={<ProgressBar />}>
  <MyAppMetricsTab />
</Suspense>
```

```tsx
// ✅ Good: Wrapper reserves space for the expected content
<Suspense
  fallback={
    <div style={{ minHeight: 400 }}>
      <Skeleton />
    </div>
  }
>
  <MyAppMetricsTab />
</Suspense>
```

### Route-level transitions

For route-level lazy loading, the entire page content swaps. Route-level swaps are less of a CLS problem because the entire viewport changes—there's no surrounding content to shift. But if your app shell (header, sidebar) is stable and only the main content area swaps, make sure the content area has a minimum height:

```tsx
<main style={{ minHeight: 'calc(100vh - 64px)' }}>
  {' '}
  {/* 64px for header */}
  <Suspense fallback={<MyAppSkeleton />}>
    <Routes>
      <Route path="/" element={<MyAppOverview />} />
      <Route path="/settings" element={<MyAppSettings />} />
    </Routes>
  </Suspense>
</main>
```

Reserving this minimum height prevents the footer (if any) from jumping up during route transitions.
