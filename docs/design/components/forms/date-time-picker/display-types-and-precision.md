## Display types and precision

The `DateTimePicker` component can be used to let users select or display a date, time, or both. For `time` and `datetime` types, the time precision can be configured.

**DisplayType**

```tsx
import { DateTimePicker } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const DisplayType = () => {
  return (
    <Flex>
      {/* highlight-next-line */}
      <DateTimePicker type="date" />
      <DateTimePicker
        // highlight-start
        type="time"
        precision="milliseconds"
        // highlight-end
      />
      <DateTimePicker
        // highlight-start
        type="datetime"
        precision="minutes"
        // highlight-end
      />
    </Flex>
  );
};
```
