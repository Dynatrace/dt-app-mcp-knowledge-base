## Three-dot menu

This menu is rendered by default and includes a fallback "Open with..." entry for cases where specific intents or apps are unavailable. You can hide the menu using the `showMenu` prop, but keep in mind you can't be sure if there isn't a different action your user wants to take.

**Menu**

```tsx
import { IntentPayload } from '@dynatrace-sdk/navigation';
import { IntentButton } from '@dynatrace/strato-components/buttons';

const Menu = () => {
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
      // highlight-next-line
      showMenu={false}
    >
      Edit in Notebooks
    </IntentButton>
  );
};
```
