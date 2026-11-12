## Receive intent payload

After you declare the type of intents your app can handle, the next step is to receive an intent in your app. You can achieve this using the `getIntent` method from the `@dynatrace-sdk/navigation` package.

> **Note**
>
> To use intents, you need to install the `@dynatrace-sdk/navigation` npm package in your project.

Here is an example of using `getIntent` with React's `useEffect`:

```ts testable
import React, { useEffect, useState } from 'react';
import { Code, Paragraph } from '@dynatrace/strato-components/typography';
import { getIntent, IntentPayload } from '@dynatrace-sdk/navigation';

export const YourComponent = () => {
  const [intentPayload, setIntentPayload] = useState<IntentPayload>();
  useEffect(() => {
    const intent = getIntent();
    if (intent) {
      setIntentPayload(intent.getPayload());
    }
  }, []);

  return (
    <>
      {intentPayload && (
        <Paragraph>
          Received Intent Payload <Code>{JSON.stringify(intentPayload)}</Code>.
        </Paragraph>
      )}
    </>
  );
};
```

Things to know about the `getIntent` method:

- The `getIntent` method returns an object of `Intent` type.
- You can call the `getIntent` method anywhere in your Dynatrace App. For example, in `App.tsx`, a component, a custom hook, react context, and elsewhere.

> **Caution**
>
> If your app has routing configured, you need to create a route `/intent/:intentId` in your app to handle the intent using the `getIntent` method. The AppShell opens this route and passes the intent object synchronously. Your app won't receive the intent if this route doesn't exist.

### Handle multiple intents

Each type of intent has a unique ID. If your app handles multiple intents, you can target a specific intent using that ID.

Here is an example of handling two different intents using the `getId` method:

```ts testable
import { useEffect } from 'react';
import { getIntent } from '@dynatrace-sdk/navigation';

export const AnotherComponent = () => {
  useEffect(() => {
    const intent = getIntent();

    if (intent?.getId() === 'share_chart') {
      // for example: shareChart(intent.context);
    }

    if (intent?.getId() === 'view_query') {
      // for example: viewQueryInTable(intent.context);
    }
  }, []);

  // … jsx and the rest of the code
};
```

In this example, if `intentId` is `share_chart`, the call is to a hypothetical method named shareChart. However, if `intentId` is `view_query`, the call is to a hypothetical method named viewQueryInTable. This strategy lets you perform different actions with different intents.
