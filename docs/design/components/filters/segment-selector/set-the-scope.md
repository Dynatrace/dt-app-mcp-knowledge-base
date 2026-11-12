## Set the scope

Use the `SegmentsProvider` to restrict the scope of one or more `SegmentSelector` components. This will apply only those segments within a given scope and ignore any globally-set segments.

The `SegmentsProvider` accepts default segments as well and filters out any faulty segments. If the default selection should apply to all `SegmentsSelector` components, place the `SegmentsProvider` at a high level. For example, right after the `AppRoot`.

**ScopedSegmentSelector**

```tsx
import {
  SegmentSelector,
  SegmentsProvider,
} from '@dynatrace/strato-components/filters';
import { Flex, Surface } from '@dynatrace/strato-components/layouts';

const ScopedSegmentSelector = () => {
  return (
    <Flex flexDirection="column" gap={24} height="300px">
      <SegmentSelector />
      <Surface elevation="raised">
        {/* highlight-start */}
        <SegmentsProvider defaultSegments={[{ id: '1ttwUGTwDsC' }]}>
          <SegmentSelector />
        </SegmentsProvider>
        {/* highlight-end */}
      </Surface>
    </Flex>
  );
};
```
