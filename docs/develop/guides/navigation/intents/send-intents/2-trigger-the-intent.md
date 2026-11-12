## 2. Trigger the intent

You can trigger the intent from your app in one of three ways, using the:

- `<IntentButton>` option
- `sendIntent` method
- `getIntentLink` method

### The [`<IntentButton>`](https://developer.dynatrace.com/contents/docs/design/components/buttons/IntentButton/index.mdx/) option

Use the `<IntentButton>` for straightforward use cases where you want to trigger a declarative intent.

Execute the `<IntentButton>` from `@dynatrace/strato-components/buttons` as follows:

```tsx title="ui/app/App.tsx"
import React from 'react';
import { IntentButton } from '@dynatrace/strato-components/buttons';

export const App = () => {
  return (
    <IntentButton
      payload={{ 'dt.query': 'fetch logs' }}
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

### The [`sendIntent`](https://developer.dynatrace.com/contents/docs/develop/sdks/navigation/index.md/#sendintent) method

Use the `sendIntent` method if you need more control than the `<IntentButton>` provides to trigger an intent from the `@dynatrace-sdk/navigation` programmatically. The `sendIntent` method takes an `intentPayload` and optional `sendIntentOptions` parameter.

Send an intent with the `dt.query` property using the `sendIntent` method as follows:

```ts testable
import { sendIntent, IntentPayload } from '@dynatrace-sdk/navigation';

const payload: IntentPayload = {
  'dt.query': 'fetch logs',
};

sendIntent(payload);
```

#### Open app without showing the Open with dialog

It's possible to bypass the **Open with** dialog and open the app directly.

```ts testable
import { sendIntent } from '@dynatrace-sdk/navigation';

sendIntent(
  { 'dt.query': 'fetch logs' },
  {
    recommendedAppId: 'dynatrace.notebooks',
    recommendedIntentId: 'view-query',
  },
);
```

> **Note**
>
> If you provide a non-existent `recommendedAppId` or `recommendedIntentId`, the AppShell will display the **Open with** dialog box, allowing you to select a different app.

#### Mark properties as required when matching the intent

When an app sends a complex intent payload, the **Open with** dialog shows every app capable of handling at least one of the payload properties.
It's possible to narrow the list by providing property names that must be matched as `keyProperties`.

```ts testable
import { sendIntent } from '@dynatrace-sdk/navigation';

const complexRowData = {
  'dt.entity.host': '<ID>',
  'dt.entity.process_group': '<ID>',
  'dt.entity.process_group_instance': '<ID>',
  'span_id': '<ID>',
  'trace_id': '<ID>',
};

sendIntent(complexRowData, {
  keyProperties: ['trace_id'],
});
```

### The [`getIntentLink`](https://developer.dynatrace.com/contents/docs/develop/sdks/navigation/index.md/#getintentlink) method

Use the `getIntentLink` method to create a static URL link that users can copy, share, and bookmark in their browser. The `getIntentLink` method takes an `intentPayload` and optional `appId` and `intentId` parameters.

Create a static URL link using the `getIntentLink` method from `@dynatrace-sdk/navigation` as shown below. This example shows how an app renders a URL using `getIntentLink`.

```tsx title="ui/app/components/YourComponent.tsx"
import React from 'react';
import { getIntentLink } from '@dynatrace-sdk/navigation';
import { Link } from '@dynatrace/strato-components/typography';

export const YourComponent = () => {
  const intentLink = getIntentLink({ 'dt.query': 'fetch logs' });

  return (
    <Link href={intentLink} target="_blank">
      Intent Link
    </Link>
  );
};
```

> **Note**
>
> If you provide a non-existent `appId`, the AppShell will display the **Open with** dialog box, allowing you to select a different app. Provide an existing `appId` and `intentId` to bypass the **Open with** dialog and open the app directly.

Now, you have integrated the user flow from your app to other Dynatrace Apps by sending an intent.
