## Keep section content mounted

By default, when the `Accordion.Section` content is not visible to the user, it will also be removed from the DOM to prevent unwanted component updates on hidden elements. If you want to keep a section's content in the DOM to preserve the state, you can set the `keepMounted` prop on the `Accordion.Section`. to preserve the state, you can set the `keepMounted` prop on the component.

**KeepMounted**

```tsx
import { Accordion } from '@dynatrace/strato-components/content';

const KeepMounted = () => {
  return (
    <Accordion>
      <Accordion.Section
        id="section1"
        // highlight-next-line
        keepMounted
      >
        <Accordion.SectionLabel>Label 1</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
      <Accordion.Section id="section2">
        <Accordion.SectionLabel>Label 2</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
    </Accordion>
  );
};
```
