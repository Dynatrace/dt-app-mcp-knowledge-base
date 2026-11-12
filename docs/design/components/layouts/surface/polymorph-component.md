## Polymorph component

By default, `Surface` is rendered as a standard `div` element. For layouting, the component can be polymorphed to any other component. This can be used, for example, to create a `Flex` layout inside the component. You can also polymorph a surface into an interactive element, such as a button or link, if users should interact with it.

**Polymorphic**

```tsx
import { Flex, Grid, Surface } from '@dynatrace/strato-components/layouts';

const Polymorphic = () => {
  return (
    <Flex flexDirection="column">
      <Surface
        // highlight-next-line
        as={Flex}
      >
        <div>Some Content</div>
        <div>More Content</div>
        <div>Even more Content</div>
      </Surface>

      <Surface
        // highlight-next-line
        as={Grid}
        gap={8}
        gridTemplateColumns="repeat(3, 1fr)"
      >
        <div>Some Content</div>
        <div>More Content</div>
        <div>Even more Content</div>
      </Surface>
      <Surface
        // highlight-next-line
        as="button"
      >
        Surface as button
      </Surface>
      <Surface
        // highlight-next-line
        as="a"
      >
        Surface as link
      </Surface>
    </Flex>
  );
};
```
