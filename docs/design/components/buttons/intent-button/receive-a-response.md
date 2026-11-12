## Receive a response

The `IntentButton` supports intents that return data from intent actions. To receive a response, you must provide both the `onResponse` and the `responseProperties` prop. The `responseProperties` prop defines which properties the source app expects in the response; `onResponse` is the callback that handles the returned values.

**WithResponse**

```tsx
import { IntentPayload } from '@dynatrace-sdk/navigation';
import { IntentButton } from '@dynatrace/strato-components/buttons';

const WithResponse = () => {
  const intentPayload: IntentPayload = {
    'dt.query': 'fetch logs',
  };

  return (
    <IntentButton
      payload={intentPayload}
      options={{
        // highlight-next-line
        responseProperties: [],
        recommendedAppId: 'dynatrace.notebooks',
        recommendedIntentId: 'view-query',
      }}
      // highlight-next-line
      onResponse={(resp) => console.log(resp)}
    >
      Edit in Notebooks
    </IntentButton>
  );
};
```
