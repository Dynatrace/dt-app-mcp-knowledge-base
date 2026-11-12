## Persist recent and pinned filters

To enhance user experience and streamline workflows, `FilterField` supports **persisting recent and pinned filters** across sessions. This feature stores user-defined filters in the Dynatrace platform's `userAppState`, allowing users to quickly reapply commonly used filters.

To enable this feature, set the `filterNamespace` prop on the `FilterField` component. This string value acts as a unique identifier for the storage scope. Filters are persisted per user and namespace, ensuring isolation between different use cases or components under the keys `strato-FilterField-pinnedFilters-{filterNameSpace}` and `strato-FilterField-recentFilters-{filterNameSpace}`.

> **Caution**
>
> If your application uses namespaced recent and pinned filters that are no longer relevant or supported, it is your responsibility to explicitly clean them up in the application code. The system does not automatically remove unused namespaces from the userAppState.

> **Note**
>
> The number of pinned filters is limited to 10 per namespace. This limit exists because pinned filters are stored in the Dynatrace platform's `userAppState`, which has finite storage capacity.

**RecentAndPinned**

```tsx
import { useRef } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  FilterField,
  FilterFieldRef,
} from '@dynatrace/strato-components/filters';
import { Grid } from '@dynatrace/strato-components/layouts';

const RecentAndPinned = () => {
  const filterFieldRef = useRef<FilterFieldRef>(null);

  return (
    <Grid gridTemplateColumns="1fr max-content">
      <FilterField
        aria-label="Filter data"
        ref={filterFieldRef}
        // highlight-next-line
        filterNamespace="root"
        autoSuggestions
      />
      <Button onClick={() => filterFieldRef.current?.saveRecentFilter()}>
        Apply
      </Button>
    </Grid>
  );
};
```
