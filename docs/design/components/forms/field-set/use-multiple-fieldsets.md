## Use multiple fieldsets

It is possible to nest several `<FieldSet>` components inside each other. To do so, you can simply put it inside any other `Fieldset` component.

**MultipleFieldSets**

```tsx
import { useState } from 'react';

import type { Timeframe } from '@dynatrace/strato-components/core';
import { TimeframeSelector } from '@dynatrace/strato-components/filters';
import { FieldSet, Switch } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const MultipleFieldSets = () => {
  const [value, setValue] = useState<Timeframe | null>(null);
  const [resolveData, setResolveData] = useState(false);
  const [tracing, setTracing] = useState(false);

  return (
    <FieldSet name="general-parameters">
      <FieldSet.Legend>General parameters</FieldSet.Legend>
      <FieldSet name="timeframe">
        <FieldSet.Legend>Timeframe</FieldSet.Legend>
        <Flex>
          <TimeframeSelector value={value} onChange={setValue} />
        </Flex>
        <Text>
          General timeframe to use if no specific timeframe is used in a query
        </Text>
      </FieldSet>
      <FieldSet>
        <FieldSet.Legend>Resolve data</FieldSet.Legend>
        <Switch value={resolveData} onChange={setResolveData}>
          Enable resolving of dimensional queries
        </Switch>
      </FieldSet>
      <FieldSet>
        <FieldSet.Legend>Tracing</FieldSet.Legend>
        <Switch value={tracing} onChange={setTracing}>
          Activate additional tracing outputs
        </Switch>
      </FieldSet>
    </FieldSet>
  );
};
```
