## Show private and outdated segments

Users can share private segments with other users, for example, through a link. If the recipient removes a private segment from their view, it will not be visible to them any longer. However, they can access the private segment once more by re-opening the link.

Outdated segments remain visible in the segments array but are marked as `unavailable`.

**UnlistedUnavailableSegments**

```tsx
import {
  SegmentSelector,
  SegmentsProvider,
} from '@dynatrace/strato-components/filters';

const UnlistedUnavailableSegments = () => {
  return (
    <div style={{ height: '300px' }}>
      <SegmentsProvider
        // highlight-start
        defaultSegments={[
          { id: 'uUPbhpKv93E' },
          {
            id: 'QbtRPIOrwm',
            variables: [
              {
                name: 'name',
                values: ['Host 1', 'Host 3'],
              },
            ],
          },
          {
            id: 'TnGWfXgHZwR',
            variables: [
              {
                name: 'name',
                values: ['outdated variable'],
              },
            ],
          },
        ]}
        // highlight-end
      >
        <SegmentSelector />
      </SegmentsProvider>
    </div>
  );
};
```
