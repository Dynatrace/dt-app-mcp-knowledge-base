## Expand a single section by default

Use the `defaultExpanded` to specify the section that should be initially expanded. The passed value should be a string or a number depending on the specified section id.

**DefaultSingleExpanded**

```tsx
import { Accordion } from '@dynatrace/strato-components/content';

const DefaultSingleExpanded = () => {
  return (
    <Accordion
      // highlight-next-line
      defaultExpanded="section3"
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
