## Customize markdown rendering

Use the `customComponentMappings` prop to override the default rendering behavior.

```tsx
const customMappings = {
  h2: ({ children }) => (<u><h2>{children}</h2></u>)
}

<Markdown customComponentMappings={customMappings}>## Test</Markdown>
```

**CustomizedRendering**

```tsx
import { type PropsWithChildren } from 'react';

import { Markdown } from '@dynatrace/strato-components/content';
import { Heading } from '@dynatrace/strato-components/typography';

const markdownExample = `
For example, we want to provide custom implementation for the \`##\` markdown tag (which is equivalent to \`h2\` HTML tag).

## The custom H2 header (underlined)
`;

const CustomizedRendering = () => {
  const customMapping = {
    h2: ({ children }: PropsWithChildren) => (
      <u>
        <Heading level={2}>{children}</Heading>
      </u>
    ),
  };

  return (
    <Markdown
      // highlight-next-line
      customComponentMappings={customMapping}
    >
      {markdownExample}
    </Markdown>
  );
};
```
