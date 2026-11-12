## Demo

This is the simplest version of the `Radio`, which is uncontrolled and therefore handles its state internally. You can also set a specific initial value using the `defaultValue` prop.

> Note: You need to add the `name` prop to link the radio buttons correctly.

**Basic**

```tsx
import { Radio, RadioGroup } from '@dynatrace/strato-components/forms';

const Basic = () => {
  return (
    <RadioGroup name="basic">
      <Radio aria-label="hosts" value="hosts">
        Hosts
      </Radio>
      <Radio aria-label="services" value="services">
        Services
      </Radio>
      <Radio aria-label="processGroups" value="processGroups">
        Process Groups
      </Radio>
    </RadioGroup>
  );
};
```
