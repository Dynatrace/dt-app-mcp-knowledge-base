## Why CLS is a problem in Dynatrace apps

Dynatrace apps have a pattern profile that commonly triggers CLS:

- **Async data everywhere**—almost every component fetches data from Grail via `useDql`. When results arrive, components grow from empty/skeleton to full content.
- **Lazy-loaded components**—with lazy loading enabled (see [Lazy Loading Guide](https://developer.dynatrace.com/develop/guides/code-optimization/lazy-loading.md)), Suspense fallbacks are swapped for real components, potentially with different dimensions.
- **Complex layouts**—tabbed views, split panels, data tables, and charts are composed together. A shift in one component cascades to everything below it.
- **Dynamic notifications**—banners, toasts, and inline alerts injected into document flow.

:::tip Reserve space for content before it arrives.
:::
