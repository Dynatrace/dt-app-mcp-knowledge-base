## Specify validation logic

To validate a value according to a particular logic, pass a validator function to the `valuePredicate`. This allows you to write a custom error message in case of an error. You can also use this approach to check whether a value follows a particular pattern.

Make sure to pass only pure or cached functions and avoid calling `convertStringToFilterFieldTree` in combination with a `validatorMap` inside of the validator function, as this may cause infinite loops.

**ValidatorMapValidatorFunction**

```tsx
import { useEffect, useRef } from 'react';

import {
  type FilterFieldStatementNode,
  type FilterFieldValidatorMap,
  FilterField,
} from '@dynatrace/strato-components/filters';
import {
  type FormControlWithOverlayRef,
  FormField,
  FormFieldMessages,
} from '@dynatrace/strato-components/forms';

const defaultValue = 'IPAddress = 0.0.0.0 IPAddress = 127.0.0.1.0 ';

const isValidIpAddress = (state: {
  currentStatement: FilterFieldStatementNode;
  filterFieldValue: string;
}) => {
  const ipAddressRegex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;
  if (
    state.currentStatement.value?.type === 'String' &&
    ipAddressRegex.test(state.currentStatement.value.value)
  ) {
    return true;
  }

  return 'Invalid filter value. A full IP address is required for this key.';
};

const validatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    {
      key: 'IPAddress',
      // highlight-next-line
      valuePredicate: isValidIpAddress,
    },
  ],
};

const ValidatorMapValidatorFunction = () => {
  const filterFieldRef = useRef<FormControlWithOverlayRef>(null);
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
        autoSuggestions
      />
      <FormFieldMessages />
    </FormField>
  );
};
```
