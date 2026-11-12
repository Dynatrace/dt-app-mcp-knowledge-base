## Set min and max values

The default `min` and `max` values for `TimeframeSelector` follow the current Grail limitations for timeframes. You can define a custom min and max range by setting the `min` and `max` props to valid `isoString` dates or expressions. Use `FormField` and `FormFieldMessages` to provide users with helpful error messages.

**MinMax**

```tsx
import { useEffect, useRef } from 'react';

import { TimeframeSelector } from '@dynatrace/strato-components/filters';
import {
  FormField,
  FormFieldMessages,
  type TimeRangePickerRef,
} from '@dynatrace/strato-components/forms';

const MinMax = () => {
  const timeframeSelectorRef = useRef<TimeRangePickerRef>(null);

  useEffect(() => {
    timeframeSelectorRef.current?.validate();
  }, []);

  return (
    <FormField>
      <TimeframeSelector
        aria-label="Timeframe selector"
        ref={timeframeSelectorRef}
        defaultValue={{
          from: 'now-8d',
          to: 'now',
        }}
        // highlight-start
        min="now-7d"
        max="now"
        // highlight-end
      />
      <FormFieldMessages />
    </FormField>
  );
};
```
