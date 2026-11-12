## Use custom layout

You can customize the layout to show the label in different positions relative to the `FormField`.

**CustomLayout**

```tsx
import {
  FormField,
  FormFieldMessages,
  Label,
  TextInput,
} from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const CustomLayout = () => {
  return (
    <Flex flexDirection="column">
      <FormField required>
        {/* highlight-start */}
        <Flex alignItems="center">
          <Label>Username</Label>
          <TextInput placeholder="Enter your username" required />
          <FormFieldMessages />
        </Flex>
        {/* highlight-end */}
      </FormField>
      <FormField required>
        {/* highlight-start */}
        <Flex alignItems="center">
          <TextInput placeholder="Enter your address" required />
          <Label>Address</Label>
          <FormFieldMessages />
        </Flex>
        {/* highlight-end */}
      </FormField>
      <FormField required>
        <TextInput placeholder="Enter your phone number" />
        {/* highlight-start */}
        <Flex justifyContent="center">
          <Label>Telephone number</Label>
        </Flex>
        <FormFieldMessages />
        {/* highlight-end */}
      </FormField>
    </Flex>
  );
};
```
