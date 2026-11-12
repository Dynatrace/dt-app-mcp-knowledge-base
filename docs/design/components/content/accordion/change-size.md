## Change size

You can use the `size` prop to set a smaller or bigger `Accordion` size. If no `size` is specified, it's set to `default`.

**Sizes**

```tsx
import { Accordion } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const Sizes = () => (
  <Flex flexDirection="column">
    <Accordion>
      <Accordion.Section id="section1">
        <Accordion.SectionLabel>Default 1</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
      <Accordion.Section id="section2">
        <Accordion.SectionLabel>Default 2</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
    </Accordion>
    <Accordion
      // highlight-next-line
      size="condensed"
    >
      <Accordion.Section id="section1">
        <Accordion.SectionLabel>Condensed 1</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
      <Accordion.Section id="section2">
        <Accordion.SectionLabel>Condensed 2</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
    </Accordion>
  </Flex>
);
```
