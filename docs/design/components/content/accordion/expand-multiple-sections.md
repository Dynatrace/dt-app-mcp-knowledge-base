## Expand multiple sections

Use the `multiple` prop to enable expanding multiple sections at the same time.

**MultipleExpanded**

```tsx
import { Accordion } from '@dynatrace/strato-components/content';

const MultipleExpanded = () => {
  return (
    <Accordion
      // highlight-next-line
      multiple
    >
      <Accordion.Section id="section1">
        <Accordion.SectionLabel>Label 1</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
      <Accordion.Section id="section2">
        <Accordion.SectionLabel>Label 2</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
      <Accordion.Section id="section3">
        <Accordion.SectionLabel>Label 3</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
    </Accordion>
  );
};
```
