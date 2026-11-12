## Disable sections

In the `Accordion`, you can disable each section individually by adding the `disabled` prop to the `Accordion.Section` component. With setting a section to disabled, the `defaultExpanded` prop, which is optionally set on the `Accordion` component, determines whether it is initially expanded or collapsed. The user can no longer change the expanded state of the section.

**DisabledSection**

```tsx
import { Accordion } from '@dynatrace/strato-components/content';

const DisabledSection = () => {
  return (
    <Accordion>
      <Accordion.Section
        id="section1"
        // highlight-next-line
        disabled
      >
        <Accordion.SectionLabel>Label</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
    </Accordion>
  );
};
```
