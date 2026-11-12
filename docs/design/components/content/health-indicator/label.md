## Label

The `HealthIndicator.Label` component allows you to render custom labels using both inline and block-level elements.

> Note: Be careful when using a different line height than the base line height. If you use `Heading` or `Text` with a small `textStyle`, ensure you place the `HealthIndicator` inside the `Heading` or `Text` to maintain proper line height alignment.

**Label**

```tsx
import { HealthIndicator } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  Emphasis,
  Heading,
  Link,
  Strong,
  Text,
} from '@dynatrace/strato-components/typography';

const Label = () => {
  return (
    <Flex flexDirection="column">
      {/*String*/}
      <HealthIndicator>
        {/* highlight-start */}
        <HealthIndicator.Label>String label</HealthIndicator.Label>
        {/* highlight-end */}
      </HealthIndicator>
      {/*Mixed with strong and emphasis*/}
      <HealthIndicator>
        {/* highlight-start */}
        <HealthIndicator.Label>
          <Strong>Strong</Strong> or <Emphasis>emphasized</Emphasis> label
        </HealthIndicator.Label>
        {/* highlight-end */}
      </HealthIndicator>
      {/*Link*/}
      <HealthIndicator>
        {/* highlight-start */}
        <HealthIndicator.Label>
          <Link href="#">Link</Link>
        </HealthIndicator.Label>
        {/* highlight-end */}
      </HealthIndicator>
      {/*Heading*/}
      <Heading>
        <HealthIndicator>
          {/* highlight-start */}
          <HealthIndicator.Label>Headline</HealthIndicator.Label>
          {/* highlight-end */}
        </HealthIndicator>
      </Heading>
      {/*Small Text*/}
      <Text textStyle="small">
        <HealthIndicator status="neutral" visual="icon">
          {/* highlight-start */}
          <HealthIndicator.Label>Small text</HealthIndicator.Label>
          {/* highlight-end */}
        </HealthIndicator>
      </Text>
    </Flex>
  );
};
```
