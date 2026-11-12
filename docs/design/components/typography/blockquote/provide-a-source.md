## Provide a source

Use the optional `cite` prop to reference the source of the quotation by providing a URL pointing to the original text or further explanation.

**Cite**

```tsx
import { Blockquote } from '@dynatrace/strato-components/typography';

const Cite = () => {
  return (
    <Blockquote
      // highlight-next-line
      cite="https://www.dynatrace.com/support/help/setup-and-configuration/dynatrace-oneagent/"
    >
      OneAgent gives you all the operational and business performance metrics
      you need, from the frontend to the backend and everything in between—cloud
      instances, hosts, network health, processes, and services.
    </Blockquote>
  );
};
```
