## Define key types

You can set one or multiple types for `FilterField` keys and thus restrict the list of comparison operators and values that will be accepted. Set the `valueType` property on a `FilterFieldKeySuggestionConfig` in the `keyPredicates` array. The type must be set for each key individually. The type can't be set for all keys globally.

To overwrite the type restriction of a comparison operator, set the allowed comparison operators for that key.

**ValidatorMapTypes**

```tsx
import { useEffect, useRef } from 'react';

import {
  FilterField,
  type FilterFieldValidatorMap,
} from '@dynatrace/strato-components/filters';
import {
  FormField,
  FormFieldMessages,
  type FormControlWithOverlayRef,
} from '@dynatrace/strato-components/forms';

const defaultValue =
  'Any = any Boolean = true Boolean = string Duration = 5s Duration = 5 Number = 5 Number = false String = string String = 5 MultipleTypes = 5 MultipleTypes = string ';

const validatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    // highlight-start
    { key: 'Any', valueType: 'Any' },
    { key: 'Boolean', valueType: 'Boolean' },
    { key: 'Duration', valueType: 'Duration' },
    { key: 'Number', valueType: 'Number' },
    { key: 'String', valueType: 'String' },
    { key: 'MultipleTypes', valueType: ['Number', 'String'] },
    // highlight-end
  ],
};

const ValidatorMapTypes = () => {
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

Available types and their comparison operators are:

| Type           | Comparison operators                                                                                                                                                                                                                                                                                                 |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Any`          | `equals`, `not-equals`, `less-than`, `less-or-equal`, `greater-than`, `greater-or-equal`, `in`, `not in`, `exists`, `not-exists`                                                                                                                                                                                     |
| `Boolean`      | `equals`, `not-equals`, `exists`, `not-exists`                                                                                                                                                                                                                                                                       |
| `Duration`     | `equals`, `not-equals`, `less-than`, `less-or-equal`, `greater-than`, `greater-or-equal`, `in`, `not in`, `exists`, `not-exists`                                                                                                                                                                                     |
| `IPAddress`    | `equals`, `not-equals`, `less-than`, `less-or-equal`, `greater-than`, `greater-or-equal`, `in`, `not in`, `exists`, `not-exists`                                                                                                                                                                                     |
| `JSONPath`     | `equals`, `not-equals`, `less-than`, `less-or-equal`, `greater-than`, `greater-or-equal`, `in`, `not in`, `exists`, `not-exists`, `starts-with`, `not-starts-with`, `ends-with`, `not-ends-with`, `contains`, `not-contains`, `matches-wildcard`¹, `not-matches-wildcard`¹, `matches-phrase`², `not-matches-phrase`² |
| `Number`       | `equals`, `not-equals`, `less-than`, `less-or-equal`, `greater-than`, `greater-or-equal`, `in`, `not in`, `exists`, `not-exists`                                                                                                                                                                                     |
| `SmartscapeId` | `equals`, `not-equals`, `in`, `not in`, `exists`, `not-exists`                                                                                                                                                                                                                                                       |
| `String`       | `equals`, `not-equals`, `in`, `not in`, `exists`, `not-exists`, `starts-with`, `not-starts-with`, `ends-with`, `not-ends-with`, `contains`, `not-contains`, `matches-wildcard`¹, `not-matches-wildcard`¹                                                                                                             |
| `Timestamp`    | `equals`, `not-equals`, `less-than`, `less-or-equal`, `greater-than`, `greater-or-equal`, `in`, `not in`, `exists`, `not-exists`                                                                                                                                                                                     |
| `UID`          | `equals`, `not-equals`, `in`, `not in`, `exists`, `not-exists`                                                                                                                                                                                                                                                       |

¹ Requires `parserConfig.matchesWildcardConversion: true`. See [Enable wildcard in middle](#enable-wildcard-in-middle).

² Must be explicitly enabled via `allowedOperators`. See [Enable matches phrase](#enable-matches-phrase-).
