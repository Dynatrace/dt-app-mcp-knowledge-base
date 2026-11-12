## Validation

The `ToggleButtonGroup` supports an error state, which can be triggered in two primary ways:

- Form submission: If the form containing the `ToggleButtonGroup` is submitted with invalid or missing data, the component can reflect the error state.
- Validation function: Validation logic can be applied to determine whether the selected value meets the required criteria.

This example demonstrates how to show users an validation message using `FormFieldMessages`.

**Validation**

```tsx
import { useState, useRef } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  ToggleButtonGroup,
  type FormControlRef,
  FormField,
  Label,
  FormFieldMessages,
} from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  LineChartIcon,
  BandChartIcon,
  GanttChartIcon,
} from '@dynatrace/strato-icons';

const Validation = () => {
  const toggleButtonGroupRef = useRef<FormControlRef<HTMLDivElement>>(null);
  const [showCustomError, setShowCustomError] = useState(false);

  return (
    <Flex flexDirection="column">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <FormField>
          <Label>ToggleButtonGroup</Label>
          <ToggleButtonGroup ref={toggleButtonGroupRef} name="form" required>
            <ToggleButtonGroup.Item value="line-chart">
              <ToggleButtonGroup.Prefix>
                <LineChartIcon />
              </ToggleButtonGroup.Prefix>
              Line Chart
            </ToggleButtonGroup.Item>
            <ToggleButtonGroup.Item value="bar-chart">
              <ToggleButtonGroup.Prefix>
                <BandChartIcon />
              </ToggleButtonGroup.Prefix>
              Bar Chart
            </ToggleButtonGroup.Item>
            <ToggleButtonGroup.Item value="gant-chart">
              <ToggleButtonGroup.Prefix>
                <GanttChartIcon />
              </ToggleButtonGroup.Prefix>
              Gant Chart
            </ToggleButtonGroup.Item>
          </ToggleButtonGroup>
          {/* highlight-start */}
          <FormFieldMessages>
            {(messages) => {
              if (showCustomError) {
                return (
                  <FormFieldMessages.Item variant="error">
                    Custom error for the radio group
                  </FormFieldMessages.Item>
                );
              }
              if (!messages || messages.length === 0) {
                return (
                  <FormFieldMessages.Item variant="hint">
                    Please select an Item
                  </FormFieldMessages.Item>
                );
              }
              return messages.map((msg) => (
                <FormFieldMessages.Item key={msg.id} {...msg} />
              ));
            }}
          </FormFieldMessages>
          {/* highlight-end */}
        </FormField>
        <Button variant="accent" type="submit">
          Submit
        </Button>
        <Button
          variant="emphasized"
          onClick={() => setShowCustomError(!showCustomError)}
        >
          Toggle custom error
        </Button>
      </form>
    </Flex>
  );
};
```
