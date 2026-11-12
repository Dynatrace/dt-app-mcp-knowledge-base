## Guidelines

To recap, here are some best practices for applying lazy loading in your Dynatrace app:

1. **Start at the route level**—this is the highest leverage point and requires the least architectural change. Every app with more than one page should do this.

2. **Default tab eagerly, secondary tabs lazily**—if a page has a tabbed layout, load the initially visible tab eagerly and lazy load the rest.

3. **Lazy load what's behind interactions**—modals, drawers, expandable panels — anything that requires a user action to become visible is a safe lazy boundary.

4. **Don't lazy load what's immediately visible**—components that render above the fold on page load should be in the main bundle.

5. **Match your fallback to the expected layout**—use `<Skeleton />` components that approximate the shape of the incoming content. Avoid full-page spinners for in-page views — they cause unnecessary layout shift.

6. **Combine with error boundaries**—always pair `<Suspense>` with an error boundary for lazy-loaded content to degrade gracefully on network failures.

7. **Keep Strato up to date**—larger Strato components from `@dynatrace/strato-components` handle their own internal lazy loading. Staying current ensures you benefit from ongoing bundle optimizations.
