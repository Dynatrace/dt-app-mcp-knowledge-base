## Use inside Flex component

When using the Breadcrumbs component inside a Flex component, make sure to set `flexGrow` and `minWidth` as shown in the example. Otherwise, the responsive collapsing and resize behavior won't work as the available space can't be calculated correctly.

**InsideFlex**

```tsx
import { Flex } from '@dynatrace/strato-components/layouts';
import { Breadcrumbs } from '@dynatrace/strato-components/navigation';

const InsideFlex = () => {
  return (
    <Flex alignItems="center">
      {/* highlight-next-line */}
      <Breadcrumbs style={{ flexGrow: 1, minWidth: 0 }}>
        <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="#">Level 1</Breadcrumbs.Item>
        <Breadcrumbs.Item href="#">Level 2</Breadcrumbs.Item>
        <Breadcrumbs.Item href="#">Level 3</Breadcrumbs.Item>
        <Breadcrumbs.Item href="#">Level 4</Breadcrumbs.Item>
        <Breadcrumbs.Item href="#">Level 5</Breadcrumbs.Item>
      </Breadcrumbs>
    </Flex>
  );
};
```
