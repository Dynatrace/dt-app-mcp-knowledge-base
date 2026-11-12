## Expand multiple sections by default

Use the `defaultExpanded` to specify the sections that should be initially expanded. The passed value should be an array of strings or numbers depending on the specified section ids.

**DefaultMultipleExpanded**

```tsx
import { Accordion } from '@dynatrace/strato-components/content';

const DefaultMultipleExpanded = () => {
  return (
    <Accordion
      // highlight-next-line
      defaultExpanded={['section1', 'section2']}
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
