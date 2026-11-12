## Set visual level

To change the visual level of the `Heading` component, set the `level` property. The visual level and the semantic level will match if not set explicitly. The default value is `1`, which renders an `h1` tag with the highest visual importance.

**VisualLevel**

```tsx
import { Heading } from '@dynatrace/strato-components/typography';

const VisualLevel = () => {
  return (
    <>
      <Heading
        // highlight-next-line
        level={1}
      >
        H1 Level1 Platform Modules
      </Heading>
      <Heading
        // highlight-next-line
        level={2}
      >
        H2 Level2 Platform Modules
      </Heading>
      <Heading
        // highlight-next-line
        level={3}
      >
        H3 Level3 Platform Modules
      </Heading>
      <Heading
        // highlight-next-line
        level={4}
      >
        H4 Level4 Platform Modules
      </Heading>
      <Heading
        // highlight-next-line
        level={5}
      >
        H5 Level5 Platform Modules
      </Heading>
      <Heading
        // highlight-next-line
        level={6}
      >
        H6 Level6 Platform Modules
      </Heading>
    </>
  );
};
```
