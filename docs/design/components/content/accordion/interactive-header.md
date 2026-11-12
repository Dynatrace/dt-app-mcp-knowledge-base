## Interactive header

By default the whole header is interactive and can open and close the `Accordion.Section`. If set to `false` only the `button` is interactive.

> **Note**
>
> Keep into consideration that, you shouldn't add interactive content to the `Accordion.SectionLabel` when the entire header is interactive to avoid nesting interactive elements.

**Interactive**

```tsx
import { Accordion } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const Interactive = () => (
  <Flex flexDirection="column">
    <Accordion>
      <Accordion.Section id="section1">
        <Accordion.SectionLabel>Interactive Label</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
    </Accordion>
    <Accordion
      // highlight-next-line
      interactive={false}
    >
      <Accordion.Section id="section1">
        <Accordion.SectionLabel>Interactive Button</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
    </Accordion>
  </Flex>
);
//#endregion
```
