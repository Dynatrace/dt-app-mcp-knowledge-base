## Demo

The `TitleBar` component provides five different slots for layouting the TitleBar content. We recommend using the Title slot for displaying a title. All other slots are optional.

**Basic**

```tsx
import { TitleBar } from '@dynatrace/strato-components/layouts';

const Basic = () => {
  return (
    <TitleBar>
      <TitleBar.Title>Some AppName</TitleBar.Title>
    </TitleBar>
  );
};
```
