## Demo

The `IntentButton` component consists of a button label with a prefix icon, and a dropdown menu.

**Basic**

```tsx
import { IntentPayload } from '@dynatrace-sdk/navigation';
import { IntentButton } from '@dynatrace/strato-components/buttons';

const Basic = () => {
  const intentPayload: IntentPayload = {
    'dt.query': 'fetch logs',
  };

  return (
    <IntentButton
      payload={intentPayload}
      options={{
        recommendedAppId: 'dynatrace.notebooks',
        recommendedIntentId: 'view-query',
      }}
    >
      Edit in Notebooks
    </IntentButton>
  );
};
```
