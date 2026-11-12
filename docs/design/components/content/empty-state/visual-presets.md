## Visual presets

Use `VisualPreset` within the `Visual` slot to use predefined illustrations. Different combinations are possible based on the `context` and `type` props.

**VisualPreset**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { EmptyState } from '@dynatrace/strato-components/content';
import { ExternalLink } from '@dynatrace/strato-components/typography';

const VisualPreset = () => {
  return (
    <EmptyState size="large">
      <EmptyState.Visual>
        {/* highlight-next-line */}
        <EmptyState.VisualPreset context="query" type="create-new" />
      </EmptyState.Visual>
      <EmptyState.Title>
        Tell the user what happened in the title
      </EmptyState.Title>
      <EmptyState.Details>
        In the details, explain what to do next, who to contact, or where to go.
      </EmptyState.Details>
      <EmptyState.Actions>
        <Button color="primary" variant="accent">
          Action 1
        </Button>
        <Button color="neutral" variant="default">
          Action 2
        </Button>
      </EmptyState.Actions>
      <EmptyState.Footer>
        Include any relevant{' '}
        <ExternalLink href="https://www.dynatrace.com">link here</ExternalLink>
      </EmptyState.Footer>
    </EmptyState>
  );
};
```
