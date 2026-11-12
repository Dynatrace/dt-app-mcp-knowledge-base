## Defaults

Some entries provide `'default'` as possible value, which will enable default behavior when clicking the entry. Some entries use [intents](https://developer.dynatrace.com/develop/guides/navigation/intents/send-intents.md) so you need to have your app configured correctly so `appId` and `appVersion` are set.

**Defaults**

```tsx
import { HelpMenu } from '@dynatrace/strato-components/layouts';

const Defaults = () => {
  return (
    <HelpMenu
      // highlight-start
      entries={{
        whatsNew: 'default',
        keyboardShortcuts: 'default',
        playground: 'default',
        about: 'default',
      }}
      // highlight-end
    />
  );
};
```
