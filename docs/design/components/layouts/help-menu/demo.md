## Demo

The `HelpMenu` is a batteries-included, prebuilt menu with commonly used entries.

**Basic**

```tsx
import { useNavigate } from 'react-router';

import { HelpMenu } from '@dynatrace/strato-components/layouts';

const Basic = () => {
  const navigate = useNavigate();

  return (
    <HelpMenu
      entries={{
        whatsNew: 'default',
        getStarted: {
          onSelect: () => undefined,
        },
        documentation: [
          {
            label: 'Dynatrace Hub',
            href: 'link/to/hub',
            onSelect: () => {
              // side effect code can be executed to track behavioral events
            },
          },
          {
            label: 'Onboarding wizard',
            onSelect: () => {
              navigate('/onboarding');
            },
          },
        ],
        keyboardShortcuts: {
          href: 'https://developer.dynatrace.com/',
        },
        playground: 'default',
        feedback: { onSelect: () => undefined },
        about: 'default',
      }}
    />
  );
};
```
