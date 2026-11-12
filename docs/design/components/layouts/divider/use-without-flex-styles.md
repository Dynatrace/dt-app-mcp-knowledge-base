## Use without flex styles

The `flexItem` prop allows you to control whether flex styles are applied for the `Divider`. Flex styles are enabled by default, ensuring the automatic application of the right styles for usage within a flex layout.

When using the `Divider` outside of a flex layout, you can set the `flexItem` prop to `false`. In this case, you need to wrap the `Divider` in a block-level HTML element and set the desired dimension on that element.

**FlexItem**

```tsx
import { Divider } from '@dynatrace/strato-components/layouts';

const FlexItem = () => {
  return (
    <>
      AppEngine
      <div style={{ width: '150px' }}>
        <Divider
          // highlight-next-line
          flexItem={false}
        />
      </div>
      AutomationEngine
    </>
  );
};
```
