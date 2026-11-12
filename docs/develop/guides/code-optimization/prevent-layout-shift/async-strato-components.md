## Async Strato components

Larger Strato components like `DataTable`, `CodeEditor`, and complex charts lazy load their internals—they handle chunk-splitting transparently. Lazy-loading internals means a Strato component's initial paint might be a lightweight placeholder while the heavy internals load.

Strato's internal loading behavior is not configurable. Instead, control the layout by sizing the **container** around the component. Wrap heavy Strato components in a fixed-dimension container so that when the internal chunk lands and the full component renders, the surrounding layout doesn't reflow:

```tsx
// Chart component whose internal rendering engine loads asynchronously
<div style={{ height: 350, width: '100%' }}>
  <TimeseriesChart data={metricsData} />
</div>
```

The explicit `height` ensures the chart's container is stable from the first frame, regardless of when the chart's internal rendering completes.
