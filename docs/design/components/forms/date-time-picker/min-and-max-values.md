## Min and max values

Minimum and maximum boundaries for date, time, and datetime values can be set with the `min` and `max` props. You can provide any ISOString or expression to be used as upper or lower bound.

**MinMax**

```tsx
import {
  DateTimePicker,
  FormField,
  FormFieldMessages,
  Label,
} from '@dynatrace/strato-components/forms';

const MinMax = () => {
  return (
    <FormField>
      <Label>DateTimePicker</Label>
      <DateTimePicker
        // highlight-start
        min="2025-01-01"
        max="now"
        // highlight-end
        defaultValue="+1d"
      />
      <FormFieldMessages />
    </FormField>
  );
};
```
