## Demo

`TerminologyOverlay` provides an overlay for definitions or explanations of specific terminology in the UI. The term in the UI is marked by a dotted underline. When the user clicks on it, an overlay with the explanation opens. The component consists of at least two elements: a trigger and corresponding explanation. See [Usage](https://developer.dynatrace.com/design/components/content/TerminologyOverlay/usage.md) for more details.

**Basic**

```tsx
import { TerminologyOverlay } from '@dynatrace/strato-components/content';
import { Paragraph } from '@dynatrace/strato-components/typography';

const Basic = () => {
  return (
    <Paragraph>
      <TerminologyOverlay>
        <TerminologyOverlay.Trigger>OneAgent</TerminologyOverlay.Trigger>
        <TerminologyOverlay.Description>
          OneAgent comprises a set of specialized processes that run on each
          monitored host. It collects metrics from the operating system on which
          it runs, and compares the metrics to expected performance values.
        </TerminologyOverlay.Description>
      </TerminologyOverlay>{' '}
      technology uses a single agent to collect and unify all operational and
      business performance metrics for all types of entities in your application
      environment—servers, applications, services, databases, and more—across
      each layer of your technology stack (including containers).
    </Paragraph>
  );
};
```
