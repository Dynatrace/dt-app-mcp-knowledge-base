## Demo

`SegmentSelector` lets users filter data from specific datasets called [Segments](https://docs.dynatrace.com/docs/shortlink/segments). The `useSegments` hook provides access to the selected values. See [Usage](https://developer.dynatrace.com/design/components/filters/SegmentSelector/usage.md) for best practices.

**Basic**

```tsx
import {
  SegmentSelector,
  useSegments,
} from '@dynatrace/strato-components/filters';

const Basic = () => {
  // oxlint-disable-next-line typescript/no-unused-vars
  const { segments } = useSegments();

  return (
    <div style={{ height: '300px' }}>
      <SegmentSelector />
    </div>
  );
};
```
