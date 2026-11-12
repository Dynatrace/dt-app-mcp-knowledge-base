## Combine with other typography components

All typography components like `Strong`, `Strikethrough` or `Text` can be used within a `Paragraph`.

**Styled**

```tsx
import {
  Emphasis,
  Paragraph,
  Strikethrough,
  Strong,
  Text,
} from '@dynatrace/strato-components/typography';

const Styled = () => {
  return (
    <Paragraph>
      {/* highlight-start */}
      <Strong>Dynatrace OneAgent</Strong> automatically monitors all process
      groups detected in your environment (processes running during OneAgent
      installation must be restarted{' '}
      <Strikethrough>to initiate monitoring</Strikethrough>).
      <Text as="p">
        OneAgent additionally provides <Emphasis>deep monitoring</Emphasis> for
        all processes that it can monitor at the request.
      </Text>
      {/* highlight-end */}
    </Paragraph>
  );
};
```
