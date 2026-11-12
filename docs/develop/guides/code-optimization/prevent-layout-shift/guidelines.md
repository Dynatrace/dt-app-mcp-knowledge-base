## Guidelines

To recap, here are some best practices for preventing layout shift in your Dynatrace app:

1. **Set `minHeight` on every container that receives async content.** Whether it's a Suspense boundary, a data table wrapper, or a chart container—reserve the space ahead of time.

2. **Match skeleton dimensions to resolved content.** A skeleton should approximate the height, width, and structure of the component it's standing in for. Use multiple skeleton rows for tables.

3. **Use SWR to eliminate loading states on revisits.** Cached data from `useDql` renders instantly with no skeleton-to-content transition at all. See [Stale-While-Revalidate Guide](https://developer.dynatrace.com/develop/guides/code-optimization/stale-while-revalidate.md).

4. **Use `placeholderData` for filter changes.** When query parameters change, keep the previous results visible instead of flashing to a skeleton. This eliminates a full empty-to-loaded shift.

5. **Paginate tables.** Pagination gives you a fixed row count per page and a predictable container height. Prefer it over infinite scroll for CLS-critical views.

6. **Keep notifications out of document flow.** Use fixed-position overlays or reserved-height slots for banners, toasts, and alerts.

7. **Monitor with Experience Web Vitals App.** Regularly check your CLS scores in production. Shifts you don't notice in local development may affect real users on slower connections or different viewport sizes.
