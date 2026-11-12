## Get a state by key

To fetch a previously stored state, you can use the `useAppState` and `useUserAppState` hooks and pass the key of the write operation as the parameter. The `validUntilTime` follows an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) syntax. The hooks also provide a function to `refetch` the latest state. The following code fetches the state from the previous example.

```tsx title="ui/app/App.tsx"
import React, { useState, useEffect } from 'react';
import { useAppState } from '@dynatrace-sdk/react-hooks';
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';
import { PageLayout } from '@dynatrace/strato-components/layouts';

interface Weather {
  city: string;
  temperature: number;
  unit: string;
}

export const App = () => {
  const [weather, setWeather] = useState<Weather>();
  const { data, refetch } = useAppState({ key: 'weather' });

  useEffect(() => {
    if (data) {
      setWeather((JSON.parse(data.value) as { weather: Weather }).weather);
    }
  }, [data]);

  const handleClick = () => {
    refetch();
  };

  return (
    <PageLayout>
      <PageLayout.Content>
        {weather && (
          <Flex>
            <Text>{weather.city}</Text>
            <Text>
              {weather.temperature} {weather.unit}
            </Text>
          </Flex>
        )}
        <Button onClick={handleClick}>Refetch app state</Button>
      </PageLayout.Content>
    </PageLayout>
  );
};
```

This operation requires the following scopes:

- `state:app-states:read`
- `state:user-app-states:read`

[guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

These operations throw an exception when the state you try to retrieve doesn't exist. If that's an expected scenario in your app, you should add
some exception handling. Alternatively, you could use the [useAppStates](#filter-states) hook and filter for a specific key to get an empty array if it doesn't exist.
