## Demo

The `Surface` component offers different visual styles depending on the elevation level. By default, the elevation is set to `flat`.

**Elevation**

```tsx
import { Flex, Surface } from '@dynatrace/strato-components/layouts';

const Elevation = () => {
  return (
    <Flex flexDirection="column">
      <Surface elevation="flat">Elevation flat</Surface>
      <Surface elevation="raised">Elevation raised</Surface>
      <Surface elevation="floating">Elevation floating</Surface>
    </Flex>
  );
};
```
