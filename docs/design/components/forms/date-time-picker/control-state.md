## Control state

You can also handle the state of the `DateTimePicker` component, making it controlled. In order to do so, you need to set the `value` prop to assign the state value. In addition, you need to use the `onChange` prop to provide a handler that is called when the state of the `DateTimePicker` changes.

**Controlled**

```tsx
import { useState } from 'react';

import {
  DateTimePicker,
  type DateTimePickerProps,
} from '@dynatrace/strato-components/forms';

const Controlled = () => {
  const [isoDate, setIsoDate] = useState<DateTimePickerProps['value']>(() =>
    new Date().toISOString(),
  );

  return (
    <DateTimePicker
      // highlight-start
      value={isoDate}
      onChange={setIsoDate}
      // highlight-end
    />
  );
};
```
