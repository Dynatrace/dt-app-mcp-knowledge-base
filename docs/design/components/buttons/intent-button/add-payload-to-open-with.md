## Add payload to "Open with..."

The `IntentButton` include an "Open with..." menu item as a default. "Open with..." opens an overlay listing suitable apps for users to choose from. To customize the `payload` prop (information that you want to share with the apps) use the `IntentButton.OpenWith` compound component. The label and icon for the "Open with..." menu item cannot be changed.

**OpenWith**

```tsx
import { IntentPayload } from '@dynatrace-sdk/navigation';
import { IntentButton } from '@dynatrace/strato-components/buttons';

const OpenWith = () => {
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
      {/* highlight-next-line */}
      <IntentButton.OpenWith payload={intentPayload} />
    </IntentButton>
  );
};
```
