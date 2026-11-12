## Demo

**Basic**

```tsx
import { parseTime } from '@dynatrace/strato-components/core';
import { Flex } from '@dynatrace/strato-components/layouts';
import { List, Text } from '@dynatrace/strato-components/typography';

const Basic = () => {
  return (
    <Flex flexDirection="column" alignItems="start">
      <List>
        <Text>Input: 2022-02-22 23:42</Text>
        <Text>
          TimeDetails: {JSON.stringify(parseTime('2022-02-22 23:42'))}
        </Text>
      </List>
      <List>
        <Text>Input: now+3d</Text>
        <Text>TimeDetails: {JSON.stringify(parseTime('now+3d'))}</Text>
      </List>
    </Flex>
  );
};
```
