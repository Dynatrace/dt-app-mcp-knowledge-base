## Impact on Largest Contentful Paint (LCP)

Lazy loading directly influences your **Largest Contentful Paint (LCP)**, which is the Core Web Vital that measures how quickly the largest visible element renders. The target is less than 2.5 seconds. The relationship isn't always straightforward though; lazy loading can improve or hurt LCP depending on where you apply it.

### Why it helps

A monolithic bundle forces the browser to download, parse, and execute all of your app's JavaScript before anything renders. The LCP element—typically a data table, a chart, or a heading within the active page—can't paint until this work completes.

By splitting non-critical routes and views into separate chunks, you reduce the size of the initial bundle. Less JavaScript to parse means the browser reaches first render faster, which brings LCP forward.

#### Typical impact on a multi-page app

The numbers depend on your app, but the direction is consistent: less upfront JavaScript means faster LCP.

| Scenario                                                      | Initial bundle | LCP (approx.) |
| ------------------------------------------------------------- | -------------- | ------------- |
| No lazy loading (4 pages, all eagerly loaded)                 | \~1.2 MB       | \~3.8s        |
| Route-level lazy loading (only active page in initial bundle) | \~450 KB       | \~2.1s        |
| Route + view-level lazy loading (secondary tabs deferred)     | \~320 KB       | \~1.7s        |

### Where it can hurt

If you lazy load a component that is the LCP element itself—for example, the main data table or the primary heading on the landing page—you introduce an additional network round-trip before that element can render. The `Suspense` fallback such as a skeleton or a progress bar, renders first, and only after the chunk arrives does the actual LCP element paint. This delays LCP rather than improving it.

The rule is simple: the component responsible for your LCP element must be in the initial bundle. Everything else is a candidate for deferral.

### Fallbacks and Cumulative Layout Shift (CLS)

Your `Suspense` fallback also matters for **Cumulative Layout Shift (CLS)**. If the fallback has a different height or layout than the resolved component, the page shifts when the real content renders. This is why using `<Skeleton />` components that approximate the final layout is important not just for perceived performance, but to keep CLS under the 0.1 threshold.

### Measuring the effect

Use the browser **Developer Tools Performance** panel or **Lighthouse** to measure LCP before and after introducing lazy loading. Pay attention to:

- **LCP element identification**—make sure you know which element the browser considers the LCP. It may not be what you expect.
- **Chunk waterfall**—in the **Network** tab, verify that lazy chunks load in parallel with (or after) the initial bundle, not in a sequential waterfall.
- **Suspense duration**—the time between fallback render and actual component render is the cost of lazy loading that boundary. If it's consistently > 500ms for above-the-fold content, that boundary is in the wrong place.
