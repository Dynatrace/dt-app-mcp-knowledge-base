## Parallelizing chunk loading with Grail queries

A common pattern in Dynatrace apps is that the user navigates to a page that needs to run a heavy DQL query against Grail and render a complex visualization component. Without lazy loading, the browser first downloads the entire bundle (including the visualization code), then mounts the component, and only then fires the query. The user waits for both sequentially.

With lazy loading, you can **kick off the Grail query and the chunk download at the same time**. The query starts immediately in the parent component—which is already loaded—while the heavy child component streams in via a lazy import. By the time the chunk arrives, the query may already have results or at least a head start.

### The pattern

The key insight is that `useDql` runs in the **parent** component that's already in the bundle. The lazy-loaded child only handles rendering the results. This decouples data fetching from component loading. See the following example:

```tsx title="ui/app/pages/TopologyPage.tsx" untestable
import React, { lazy, Suspense } from 'react';
import { useDql } from '@dynatrace-sdk/react-hooks';
import { Skeleton } from '@dynatrace/strato-components/content';
import { Paragraph } from '@dynatrace/strato-components/typography';

// The visualization component is heavy — lazy load it
const HostTopologyMap = lazy(() => import('./HostTopologyMap'));

export const TopologyPage = () => {
  // Query fires immediately when this page mounts — no waiting for the chunk
  const { data, isLoading, error } = useDql({
    query: `fetch dt.entity.host
  | fieldsAdd tags, managementZones, hostGroupName
  | join [
      fetch dt.entity.process_group
      | fieldsAdd run_hosts = runs_on[dt.entity.host], pg_name = entity.name
      | expand run_hosts
    ],
    on: { left[id] == right[run_hosts] },
    fields: { pg_name }
  | fieldsAdd processGroups = pg_name
  | fields id, entity.name, tags, managementZones, hostGroupName, processGroups
  | sort entity.name asc
  | limit 500`,
  });

  if (error) {
    return <Paragraph>Error: {error.message}</Paragraph>;
  }

  return (
    <Suspense fallback={<Skeleton height={400} />}>
      <HostTopologyMap data={data} isLoading={isLoading} />
    </Suspense>
  );
};

export default TopologyPage;
```

What's happening at runtime:

1. User navigates to the topology page.
2. `TopologyPage` is either already bundled, if it's the current route, or loaded via its own lazy boundary.
3. **Immediately on mount**, `useDql` fires the Grail query. This is a network request to the backend.
4. **Simultaneously**, React hits the `<Suspense>` boundary, which triggers the dynamic `import()` for the `HostTopologyMap` chunk. This is a network request for the JavaScript asset.
5. Both requests fly in parallel. The `<Skeleton />` fallback is shown until the chunk resolves.
6. Once `HostTopologyMap` mounts, it receives `data` (possibly already resolved) and `isLoading` as props and renders accordingly.

Without this pattern, steps 3 and 4 would be sequential: first download everything, then mount, then query. The parallel approach can save seconds on pages with heavy queries and heavy visualization components.

### When this matters most

This pattern has the highest impact when:

- **The query is slow**—complex joins, large result sets, or cross-entity lookups that take multiple seconds.
- **The visualization component is heavy**—topology maps, complex charts, or anything pulling in large rendering dependencies.
- **Both conditions are true**—which is often the case, since the pages that need heavy queries are usually the same pages that need heavy visualizations to display them.

> **Tip**
>
> For lightweight queries that return in under 200ms, the parallelization gain is negligible. However, lazy-loading the component itself is still valuable for reducing initial bundle size.
