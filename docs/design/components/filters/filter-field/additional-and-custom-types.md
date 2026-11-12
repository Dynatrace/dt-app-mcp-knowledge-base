## Additional and custom types

In addition to the built-in types (`Number`, `String`, `Boolean`, `Duration`, `JSONPath`, `IPAddress`, `UID`, `Timestamp`, `SmartscapeId`), you can register custom types using the `customTypes` prop. Custom types let you define domain-specific validation logic and can be referenced in the `validatorMap` just like built-in types by using `{ type: 'CustomTypeName' }` in the `valuePredicate`.

Each custom type requires a validation function that returns `true` when a value is valid for that type. Optionally, you can provide an icon to display in the suggestions overlay.

**CustomTypes**

```tsx
import { useEffect, useRef } from 'react';

import {
  FilterField,
  type FilterFieldCustomTypes,
  type FilterFieldRef,
  type FilterFieldValidatorMap,
} from '@dynatrace/strato-components/filters';
import {
  FormField,
  FormFieldMessages,
} from '@dynatrace/strato-components/forms';
import { MailIcon } from '@dynatrace/strato-icons';

const defaultValue = 'email = musterman@dynatrace.com OR email = dynatrace.com';

const customTypes: FilterFieldCustomTypes = {
  Email: {
    valuePredicate(value: string) {
      return value.includes('@');
    },
    icon: <MailIcon />,
  },
};

const validatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    {
      key: 'email',
      valueType: 'Email',
    },
  ],
};

const CustomTypes = () => {
  const filterFieldRef = useRef<FilterFieldRef>(null);
  useEffect(() => {
    filterFieldRef.current?.validate();
  }, []);

  return (
    <FormField>
      <FilterField
        aria-label="Filter data"
        ref={filterFieldRef}
        defaultValue={defaultValue}
        validatorMap={validatorMap}
        // highlight-next-line
        customTypes={customTypes}
        autoSuggestions
      />
      <FormFieldMessages />
    </FormField>
  );
};
```
