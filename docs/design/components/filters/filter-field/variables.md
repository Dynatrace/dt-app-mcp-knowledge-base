## Variables

Variables are a default feature of every `FilterField`. Any value starting with `$` is automatically interpreted as a variable and returned as type `Variable` in the value node.

Use the `validatorMap` to allow only specific variables or variable patterns.

**Variables**

```tsx
import { useCallback, useEffect, useRef } from 'react';

import {
  FilterField,
  type FilterFieldStatementNode,
  type FilterFieldValidatorMap,
} from '@dynatrace/strato-components/filters';
import {
  FormField,
  type FormControlWithOverlayRef,
} from '@dynatrace/strato-components/forms';

const Variables = () => {
  const isValidVariablePattern = useCallback(
    (state: {
      currentStatement: FilterFieldStatementNode;
      filterFieldValue: string;
    }) => {
      if (state.currentStatement.value?.type === 'Variable') {
        const variableRegex = /^\$\w+$/;

        return variableRegex.test(state.currentStatement.value.value)
          ? true
          : 'Only alpha-numerical values and underscores are allowed in variables.';
      }

      return true;
    },
    [],
  );

  const validatorMap: FilterFieldValidatorMap = {
    keyPredicates: [
      {
        key: 'patternForVariables',
        valuePredicate: isValidVariablePattern,
      },
      {
        key: 'specificVariables',
        valuePredicate: ['$a', '$b', '$c'],
      },
    ],
    exhaustive: false,
  };

  const ref = useRef<FormControlWithOverlayRef>(null);
  useEffect(() => {
    ref.current?.validate();
  }, []);

  return (
    <FormField>
      <FilterField
        ref={ref}
        aria-label="Enter filter"
        defaultValue="specificVariables = $a any = $b patternForVariables = $asdf%as patternForVariables = $a_1"
        autoSuggestions
        validatorMap={validatorMap}
      />
    </FormField>
  );
};
```
