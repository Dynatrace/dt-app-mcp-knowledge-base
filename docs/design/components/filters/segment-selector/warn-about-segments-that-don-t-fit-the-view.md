## Warn about segments that don't fit the view

Declare what your view operates on with `requires`. When the selected segment covers none of it, `SegmentSelector` shows a warning in its overlay, next to the segment it applies to. The warning is informational — users can still apply the segment.

A requirement is either a signal data type, such as `{ dataObject: 'logs' }`, or entities, optionally narrowed to Smartscape node types, such as `{ dataObject: 'entities', entityTypes: ['K8S_CLUSTER'] }`. `SIGNAL_DATA_VALUES` lists the available signal data types.

Use `SegmentApplicabilityProvider` when the selection comes from elsewhere in the tree, or to add requirements to part of a view — nesting adds to the inherited requirements. If your view owns the segment store, pass `requires` to `SegmentsProvider` instead. In both cases, the selector must render inside the provider.

In the example below, the preselected segment covers metrics only, so it doesn't fit a view that requires logs. Open the overlay to see the warning.

**SegmentApplicability**

```tsx
import {
  SegmentSelector,
  SegmentsProvider,
} from '@dynatrace/strato-components/filters';
import { Flex } from '@dynatrace/strato-components/layouts';

const SegmentApplicability = () => {
  return (
    <Flex flexDirection="column" height="300px">
      {/* highlight-start */}
      <SegmentsProvider
        defaultSegments={[{ id: '1ttwUGTwDsC' }]}
        requires={[{ dataObject: 'logs' }]}
      >
        <SegmentSelector />
      </SegmentsProvider>
      {/* highlight-end */}
    </Flex>
  );
};
```
