## Configure segments programmatically

The `useSegments` hook provides the following helper functions to programmatically configure selected segments:

| Function            | Description                                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `addSegment`        | Adds one segment to the selection. If the segment is unavailable, it won't be added to the selection.                       |
| `removeSegment`     | Removes one segment from the selection.                                                                                     |
| `removeAllSegments` | Removes all segments from the selection.                                                                                    |
| `setSegments`       | Overrides all currently applied segments. Similarly to `addSegment`, `setSegments` checks the availability of each segment. |

**CRUDFunctions**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import {
  SegmentSelector,
  useSegments,
} from '@dynatrace/strato-components/filters';
import { Flex } from '@dynatrace/strato-components/layouts';

const CRUDFunctions = () => {
  // highlight-start
  const { setSegments, addSegment, removeAllSegments, removeSegment } =
    useSegments();
  // highlight-end

  return (
    <Flex flexDirection="column" height="300px">
      <Flex>
        <Button
          onClick={() => {
            addSegment({ id: '1ttwUGTwDsC' })
              .then((response) => {
                /** in case something depends on the change, handle it here */
              })
              .catch((error) => {
                /** handle error in case the operation fails */
              });
          }}
          variant="accent"
        >
          add 'Simple Segment'
        </Button>
        <Button
          onClick={() => {
            removeSegment('1ttwUGTwDsC');
          }}
          variant="accent"
        >
          remove 'Simple Segment'
        </Button>

        <Button onClick={removeAllSegments} variant="accent">
          remove all
        </Button>
        <Button
          onClick={() => {
            setSegments([
              { id: '1ttwUGTwDsC' },
              {
                id: 'HmtRPIOrwm',
                variables: [{ name: 'type', values: ['INFO'] }],
              },
            ])
              .then((response) => {
                /** in case something depends on the change, handle it here */
              })
              .catch((error) => {
                /** handle error in case the operation fails */
              });
          }}
          variant="accent"
        >
          set to 'Simple Segment' and 'Log Level'
        </Button>
      </Flex>
      <SegmentSelector />
    </Flex>
  );
};
```
