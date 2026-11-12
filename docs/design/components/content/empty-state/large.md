## Large

With `size="large"`, the visual is placed next to the content. When the parent container is narrower than 704 px, the visual is stacked above the content instead.

**SizeLarge**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { EmptyState } from '@dynatrace/strato-components/content';
import { ExternalLink } from '@dynatrace/strato-components/typography';

const SizeLarge = () => {
  return (
    <EmptyState
      // highlight-next-line
      size="large"
    >
      <EmptyState.Visual>
        <EmptyState.VisualPreset context="table" type="no-result" />
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
