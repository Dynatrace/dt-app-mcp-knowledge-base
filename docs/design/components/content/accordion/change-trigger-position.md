## Change trigger position

The position of the trigger in the `Accordion` is the same for every section. By default the trigger is at the `end` of a section header. In order to change the position to the beginning of a section header, you need to set the `triggerPosition` prop to `start`.

**TriggerStart**

```tsx
import { Accordion } from '@dynatrace/strato-components/content';

const TriggerStart = () => {
  return (
    <Accordion
      // highlight-next-line
      triggerPosition="start"
    >
      <Accordion.Section id="section1">
        <Accordion.SectionLabel>Label</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
    </Accordion>
  );
};
```
