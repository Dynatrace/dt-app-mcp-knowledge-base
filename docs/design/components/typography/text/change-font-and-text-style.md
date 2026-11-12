## Change font and text style

Setting the optional `textStyle` and `fontStyle` properties allows for changing the style of the rendered text. While `textStyle` determines font weight and size, `fontStyle` defines whether variable-width font for regular text or monospace font for code examples is used.

**Variants**

```tsx
import { Text } from '@dynatrace/strato-components/typography';

const Variants = () => {
  return (
    <>
      <Text>Set user preferences for display language, timezone, etc.</Text>

      <Text
        // highlight-next-line
        textStyle="base-emphasized"
      >
        Set user preferences for display language, timezone, etc.
      </Text>

      <Text
        // highlight-next-line
        textStyle="small"
      >
        Set user preferences for display language, timezone, etc.
      </Text>

      <Text
        // highlight-next-line
        textStyle="small-emphasized"
      >
        Set user preferences for display language, timezone, etc.
      </Text>

      <Text
        // highlight-next-line
        textStyle="base"
        fontStyle="code"
      >
        Set user preferences for display language, timezone, etc.
      </Text>

      <Text
        // highlight-next-line
        textStyle="base-emphasized"
        fontStyle="code"
      >
        Set user preferences for display language, timezone, etc.
      </Text>

      <Text
        // highlight-next-line
        textStyle="small"
        fontStyle="code"
      >
        Set user preferences for display language, timezone, etc.
      </Text>

      <Text
        // highlight-next-line
        textStyle="small-emphasized"
        fontStyle="code"
      >
        Set user preferences for display language, timezone, etc.
      </Text>
    </>
  );
};
```
