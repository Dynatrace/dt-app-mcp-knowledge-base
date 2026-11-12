## Demo

If you want to read more about portals, visit [the Portals documentation](https://reactjs.org/docs/portals.html).

If you use the `OverlayContainer` without specifying any props, it will render the children at the end of the `body`.

**Basic**

```tsx
import { OverlayContainer } from '@dynatrace/strato-components/core';
import { Text } from '@dynatrace/strato-components/typography';
import Colors from '@dynatrace/strato-design-tokens/colors';
import Spacings from '@dynatrace/strato-design-tokens/spacings';
const Basic = () => {
  return (
    <>
      <Text as="p">Rendered in the document flow.</Text>
      <OverlayContainer>
        <div
          style={{
            position: 'absolute',
            top: '95%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: Spacings.Size8,
            color: Colors.Text.Neutral.Default,
            background: Colors.Background.Surface.Default,
          }}
        >
          <Text as="p">Rendered at the end of the body.</Text>
        </div>
      </OverlayContainer>
    </>
  );
};
```
