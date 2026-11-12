## Auto

With `size="auto"`, the empty state adapts its size to the width of its parent container.

| Parent width     | Size      |
| ---------------- | --------- |
| Less than 700 px | `small`   |
| 700–999 px       | `default` |
| 1,000 px or more | `large`   |

To limit how large the empty state can get, set the `maxSize` prop. For example, with `maxSize="default"`, the empty state stays `default` even when the parent container is 1,000 pixels or wider.

The heading level of the title follows the resulting size, so it changes when the parent container is resized. To keep a fixed heading level, set `as` on `EmptyState.Title`.

**SizeAuto**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { EmptyState } from '@dynatrace/strato-components/content';
import { ExternalLink } from '@dynatrace/strato-components/typography';

const SizeAuto = () => {
  return (
    <EmptyState
      // highlight-next-line
      size="auto"
    >
      <EmptyState.Visual>
        <EmptyState.VisualPreset context="table" type="no-result" />
      </EmptyState.Visual>
      <EmptyState.Title>You have no dashboards</EmptyState.Title>
      <EmptyState.Details>
        Create a new dashboard or import an existing one from a JSON file.
      </EmptyState.Details>
      <EmptyState.Actions>
        <Button color="primary" variant="accent">
          New dashboard
        </Button>
        <Button color="neutral" variant="default">
          Import dashboard
        </Button>
      </EmptyState.Actions>
      <EmptyState.Footer>
        Alternatively, you can have a look at your{' '}
        <ExternalLink href="https://www.dynatrace.com">
          shared dashboards
        </ExternalLink>
      </EmptyState.Footer>
    </EmptyState>
  );
};
```
