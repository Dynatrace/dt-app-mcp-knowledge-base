## View-based lazy loading

Not every meaningful split is a route. Within a single page, you often have distinct views or panels that the user doesn't see upfront such as tabs, drawers, detail panels, modals, or expandable sections. These are the next tier of lazy loading candidates.

### When to lazy load a view

Apply lazy loading to in-page views when:

- **The view is behind an interaction**—a tab the user has to click, a drawer that opens, a modal triggered by a button. The user expects a brief moment of loading when they perform the action.
- **The view has significant weight**—it pulls in heavy dependencies (charting libraries, complex forms, code editors) or renders large component trees.
- **The view is not on the default visible area**—a secondary tab, an "Advanced" section, a detail panel that appears on row selection.

> **Tip**
>
> Don't lazy load things that are visible immediately on page render. If a component is above the fold and visible on initial paint, eagerly load it; lazy loading it just delays the LCP with no benefit.

:::tip React Doctor

[React Doctor](https://www.react.doctor/) can flag lazy-loading opportunities that static analysis can identify:

- `prefer-dynamic-import` — encourages `React.lazy()` and dynamic `import()`.
- `no-undeferred-third-party` — flags synchronous imports of heavy third-party libraries that should be behind a lazy boundary.

These rules don't replace architectural judgment, but they surface common patterns worth reviewing.
:::

### Example: tabbed layout

```tsx title="ui/app/pages/HostDetails.tsx" untestable
import React, { lazy, Suspense } from 'react';
import { Tabs, Tab } from '@dynatrace/strato-components/navigation';
import { Skeleton } from '@dynatrace/strato-components/content';

// The overview tab is the default — load it eagerly
import { OverviewTab } from './tabs/OverviewTab';

// Secondary tabs are lazy loaded
const MetricsTab = lazy(() => import('./tabs/MetricsTab'));
const LogsTab = lazy(() => import('./tabs/LogsTab'));
const ConfigTab = lazy(() => import('./tabs/ConfigTab'));

export const HostDetails = () => (
  <Tabs>
    <Tab title="Overview">
      <OverviewTab />
    </Tab>
    <Tab title="Metrics">
      <Suspense fallback={<Skeleton />}>
        <MetricsTab />
      </Suspense>
    </Tab>
    <Tab title="Logs">
      <Suspense fallback={<Skeleton />}>
        <LogsTab />
      </Suspense>
    </Tab>
    <Tab title="Configuration">
      <Suspense fallback={<Skeleton />}>
        <ConfigTab />
      </Suspense>
    </Tab>
  </Tabs>
);

export default HostDetails;
```

The default `Overview` tab loads eagerly because it's visible immediately. Secondary tabs load their chunks only when selected. The `<Skeleton />` fallback matches the expected layout shape, avoiding jarring layout shifts.

### Example: modal or drawer

```tsx title="ui/app/components/HostActions.tsx" untestable
import React, { lazy, Suspense, useState } from 'react';
import { Button } from '@dynatrace/strato-components/buttons';
import { Modal } from '@dynatrace/strato-components/overlays';
import { ProgressBar } from '@dynatrace/strato-components/content';

const BulkEditForm = lazy(() => import('./BulkEditForm'));

export const HostActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Bulk Edit</Button>
      {isOpen && (
        <Modal title="Bulk Edit" show onDismiss={() => setIsOpen(false)}>
          <Suspense fallback={<ProgressBar />}>
            <BulkEditForm onClose={() => setIsOpen(false)} />
          </Suspense>
        </Modal>
      )}
    </>
  );
};
```

The `<BulkEditForm />` chunk is only fetched when the modal opens. The `{isOpen && ...}` conditional rendering ensures the lazy component isn't even mounted until needed.
