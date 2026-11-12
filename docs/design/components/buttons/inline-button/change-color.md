## Change color

Use `color` to match the inline action's emphasis to its context, such as flagging a destructive action inline in a confirmation message.

**Variants**

```tsx
import { InlineButton } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Paragraph } from '@dynatrace/strato-components/typography';

const Variants = () => {
  return (
    <Flex flexDirection="column">
      <Paragraph>
        The last sync failed,{' '}
        <InlineButton
          // highlight-next-line
          color="primary"
        >
          retry now
        </InlineButton>
        .
      </Paragraph>
      <Paragraph>
        The description is truncated,{' '}
        <InlineButton
          // highlight-next-line
          color="neutral"
        >
          show more
        </InlineButton>
        .
      </Paragraph>
      <Paragraph>
        The backup finished successfully,{' '}
        <InlineButton
          // highlight-next-line
          color="success"
        >
          show details
        </InlineButton>
        .
      </Paragraph>
      <Paragraph>
        Storage is nearly full,{' '}
        <InlineButton
          // highlight-next-line
          color="warning"
        >
          free up space
        </InlineButton>{' '}
        soon.
      </Paragraph>
      <Paragraph>
        This action can't be undone,{' '}
        <InlineButton
          // highlight-next-line
          color="critical"
        >
          delete workflow
        </InlineButton>{' '}
        anyway.
      </Paragraph>
    </Flex>
  );
};
```
