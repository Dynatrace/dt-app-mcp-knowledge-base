## Display intents in a menu

Use the `IntentButton.Item` compound component to automatically display additional intents in a menu. The main intent is the primary action on the root component, the `<IntentButton>`, itself.

**IntentItem**

```tsx
import { IntentPayload } from '@dynatrace-sdk/navigation';
import { IntentButton } from '@dynatrace/strato-components/buttons';

const IntentItem = () => {
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
      {/* highlight-start */}
      <IntentButton.Item
        payload={intentPayload}
        options={{
          recommendedAppId: 'dynatrace.dashboards',
          recommendedIntentId: 'pin',
        }}
      >
        Pin to dashboard
      </IntentButton.Item>
      <IntentButton.Item
        payload={intentPayload}
        options={{
          recommendedAppId: 'dynatrace.logs',
          recommendedIntentId: 'view-query',
        }}
      >
        Investigate logs
      </IntentButton.Item>
      {/* highlight-end */}
    </IntentButton>
  );
};
```
