## Set a state by key

To set the app or user app state, you can use the `setAppState` or `setUserAppState` hooks from the `@dynatrace-sdk/react-hooks` package. These hooks provide an `execute` function to create a new state, and additional fields about the loading status, errors, and response. These fields are common to all the app and user app state hooks. The example below shows how to create an app state for storing weather information:

> **Tip**
>
> Add a `version` field to your state to make future migrations easier.

```tsx title="ui/app/App.tsx"
import React from 'react';
import { useSetAppState } from '@dynatrace-sdk/react-hooks';
import { Button } from '@dynatrace/strato-components/buttons';
import { PageLayout } from '@dynatrace/strato-components/layouts';

export const App = () => {
  const { execute } = useSetAppState();

  const handleClick = () => {
    execute({
      key: 'weather',
      body: {
        value: JSON.stringify({
          version: '1',
          timestamp: Date.now(),
          weather: { city: 'Vienna', temperature: 23, unit: 'celsius' },
        }),
        validUntilTime: 'now+1d',
      },
    });
  };

  return (
    <PageLayout>
      <PageLayout.Content>
        <Button onClick={handleClick}>Set app state</Button>
      </PageLayout.Content>
    </PageLayout>
  );
};
```

This operation requires the following scopes:

- `state:app-states:write`
- `state:user-app-states:write`

[guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

### State validity

By default, app states and user app states don't expire. To define states that are only valid for a certain period, you can provide an optional `validUntilTime`, which ensures the presence of the state until the time expires. States are deleted after their `validUntilTime` elapses.

You can provide the `validUntilTime` in two ways:

- A relative time format such as `now+1m` or `now+30d`:
  - The format is `now+NU` where `N` is the amount of time, `U` is the unit of time (s - seconds, m - minutes, h - hours, d - days).
- A timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

For both types, you can specify a timeframe of 1 minute to 90 days.

> **Note**
>
> Every app state hook has an equivalent user app state hook. For instance, the equivalent of `useSetAppState` is `useSetUserAppState`. All the examples in this guide use the **app state hooks**.
