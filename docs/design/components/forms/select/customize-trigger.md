## Customize trigger

You can use the `Select.CustomTrigger` component to render custom content inside the trigger slot. If you do customize the trigger, be sure to make it accessible by adding an appropriate accessible name and ensuring that the trigger is keyboard navigable. See the [Accessibility tab](https://developer.dynatrace.com/design/components/forms/Select/a11y.md) for best practices.

The trigger may not be an interactive element. Also, for icon only buttons the aria-label must be passed to the `Select` component, not the trigger button.

**CustomTrigger**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { useFocusRing } from '@dynatrace/strato-components/core';
import { FormField, Label, Select } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';
import { ColoringIcon } from '@dynatrace/strato-icons';

const CustomTrigger = () => {
  const [value, setValue] = useState<{ complex: string } | null>(null);
  const { focusClassName, focusProps } = useFocusRing({
    variant: 'primary',
    focusWithin: true,
  });
  const {
    focusClassName: focusClassNameIconOnly,
    focusProps: focusPropsIconOnly,
  } = useFocusRing({
    variant: 'primary',
    focusWithin: true,
  });

  return (
    <Flex>
      <FormField>
        <Label>Custom Trigger</Label>
        <Select value={value} onChange={setValue} {...focusProps}>
          {/* highlight-start */}
          <Select.CustomTrigger>
            <Button
              color="primary"
              variant="accent"
              as="div"
              className={focusClassName}
            >
              <Text id="trigger-text">
                {value === null
                  ? 'Please select a country'
                  : `Selected country: ${value?.complex
                      ?.charAt(0)
                      .toUpperCase()}${value?.complex?.slice(1)}`}
              </Text>
            </Button>
          </Select.CustomTrigger>

          <Select.Content>
            <Select.Option value={{ complex: 'austria' }}>
              Austria
            </Select.Option>
            <Select.Option value={{ complex: 'germany' }}>
              Germany
            </Select.Option>
            <Select.Option value={{ complex: 'italy' }}>Italy</Select.Option>
            <Select.Option value={{ complex: 'spain' }}>Spain</Select.Option>
          </Select.Content>
        </Select>
      </FormField>
      <FormField>
        <Label>Icon Only</Label>
        {/* highlight-start */}
        <Select aria-label="Pick a color" {...focusPropsIconOnly}>
          {/* highlight-end */}
          <Select.CustomTrigger>
            <Button
              color="primary"
              variant="emphasized"
              as="div"
              className={focusClassNameIconOnly}
            >
              <ColoringIcon />
            </Button>
          </Select.CustomTrigger>
          <Select.Content>
            <Select.Option value="Red">Red</Select.Option>
            <Select.Option value="Green">Green</Select.Option>
            <Select.Option value="Purple">Purple</Select.Option>
            <Select.Option value="Pink">Pink</Select.Option>
          </Select.Content>
        </Select>
      </FormField>
    </Flex>
  );
};
```
