## Add a suffix

The component also supports a `SearchInput.Suffix`. The suffix serves as a container at the end for an icon, some text, or a `SearchInput.Button` with a click handler. A divider is shown if there is both a suffix and a `Clear` button. In case of a large suffix area you might want to adjust the CSS min-width to avoid flickering with the conditionally shown clear button.

**Suffix**

```tsx
import {
  FormField,
  Label,
  SearchInput,
} from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';
import { HelpIcon } from '@dynatrace/strato-icons';

const Suffix = () => {
  return (
    <Flex gap={8}>
      <FormField>
        <Label>Search</Label>
        <SearchInput placeholder="Type to search">
          {/* highlight-start */}
          <SearchInput.Suffix>
            <HelpIcon />
          </SearchInput.Suffix>
          {/* highlight-end */}
        </SearchInput>
      </FormField>
      <FormField>
        <Label>Search</Label>
        <SearchInput placeholder="Type to search">
          {/* highlight-start */}
          <SearchInput.Suffix>
            <Text>@dynatrace.com</Text>
            <SearchInput.Button>
              <HelpIcon />
            </SearchInput.Button>
          </SearchInput.Suffix>
          {/* highlight-end */}
        </SearchInput>
      </FormField>
    </Flex>
  );
};
```
