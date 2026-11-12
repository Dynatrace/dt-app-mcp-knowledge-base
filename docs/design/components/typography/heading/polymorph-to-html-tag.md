## Polymorph to HTML tag

Use the `as` prop to polymorph the `Heading` to the desired HTML tag (`h1`-`h6`), which sets the semantic level independently of the visual level.

**Polymorphing**

```tsx
import { Heading } from '@dynatrace/strato-components/typography';

const Polymorphing = () => {
  return (
    <>
      {/* highlight-next-line */}
      <Heading as="h4">H4 Level1 Core Technologies</Heading>
      <Heading
        // highlight-next-line
        as="h4"
        level={3}
      >
        H4 Level3 Core Technologies
      </Heading>
      <Heading
        // highlight-next-line
        as="h3"
        level={4}
      >
        H3 Level4 Core Technologies
      </Heading>
    </>
  );
};
```
