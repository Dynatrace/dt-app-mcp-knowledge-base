## Define valid keys

You can define a list of keys in the `validatorMap` property to be interpreted as valid. For any keys that aren't in the list, `FilterField` will show an error. By setting the `exhaustive` property of `validatorMap` to `false`, users can enter any key without triggering an error.

**ValidatorMapKeyPredicates**

```tsx
import { useEffect, useRef, useState } from 'react';

import {
  FilterField,
  type FilterFieldValidatorMap,
} from '@dynatrace/strato-components/filters';
import {
  FormField,
  Switch,
  type FormControlWithOverlayRef,
} from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const defaultValue =
  'Cluster = k8s-cluster-loadtest Namespace = local-dev-namespace-3 Duration < 100s ';

const ValidatorMapKeyPredicates = () => {
  const [exhaustive, setExhaustive] = useState<boolean>(true);
  const filterFieldRef = useRef<FormControlWithOverlayRef>(null);

  const validatorMap: FilterFieldValidatorMap = {
    // highlight-start
    keyPredicates: ['Cluster', 'Namespace'],
    exhaustive: exhaustive,
    // highlight-end
  };

  useEffect(() => {
    filterFieldRef.current?.validate();
  }, []);

  return (
    <Flex flexDirection="column">
      <FormField style={{ flexGrow: '1' }}>
        <FilterField
          aria-label="Filter data"
          ref={filterFieldRef}
          defaultValue={defaultValue}
          validatorMap={validatorMap}
          autoSuggestions
        />
      </FormField>
      <Switch value={exhaustive} onChange={setExhaustive}>
        Exhaustive
      </Switch>
    </Flex>
  );
};
```
