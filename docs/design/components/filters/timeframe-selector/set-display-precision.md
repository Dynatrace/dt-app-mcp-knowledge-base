## Set display precision

Change the default display precision of minutes by setting the `precision` prop to either seconds or milliseconds. This also sets the precision of the inputs shown in the overlay or the returned ISOStrings from the `onChange`.

**Precision**

```tsx
import { TimeframeSelector } from '@dynatrace/strato-components/filters';

const Precision = () => {
  return (
    <TimeframeSelector
      defaultValue={{
        from: {
          absoluteDate: '2022-02-22T04:42:35.393Z',
          value: '2022-02-22T14:42:35.393Z',
          type: 'iso8601',
        },
        to: {
          absoluteDate: new Date().toISOString(),
          value: 'now()',
          type: 'expression',
        },
      }}
      // highlight-next-line
      precision="seconds"
    />
  );
};
```
